webpackJsonp([2],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_local_data_local_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, toastCtrl, keyboard, localDataProvider, apiUfsmProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.localDataProvider = localDataProvider;
        this.apiUfsmProvider = apiUfsmProvider;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    QuestionsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.data.trabalho) {
            this.trabalho = this.navParams.data.trabalho;
            this.questions = this.trabalho.perguntas;
            this.slidesIndex = 1;
            this.slidesLength = this.questions.length + 1;
            this.initQuestions();
            this.avaliacao = {
                trabalho: this.trabalho.id,
                estado: __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Não Avaliado"],
                respostas: new Array(this.questions.length)
            };
            this.localDataProvider.getAvaliacao(this.avaliacao.trabalho).then(function (avaliacao) {
                if (avaliacao) {
                    _this.avaliacao = avaliacao;
                }
            });
        }
    };
    QuestionsPage.prototype.initQuestions = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].discursiva == true) {
                this.questions[i].tipo = 1;
            }
            else {
                this.questions[i].listaRespostas = this.questions[i].respostas.split(';');
                this.questions[i].tipo = this.getQuestionType(this.questions[i].listaRespostas);
            }
        }
    };
    QuestionsPage.prototype.getQuestionType = function (listaRespostas) {
        for (var i = 0; i < listaRespostas.length; i++) {
            if (Number.isNaN(Number(listaRespostas[i]))) {
                return 3;
            }
            else {
                return 2;
            }
        }
    };
    QuestionsPage.prototype.setAvaliacao = function () {
        var _this = this;
        var index = this.slides.getActiveIndex();
        console.log('setavaliacao');
        this.apiUfsmProvider.setAvaliacao(this.avaliacao).then(function () {
            _this.presentToast('Avaliação enviada com sucesso.');
            _this.navCtrl.goToRoot({});
        }, function (err) {
            _this.presentToast('Não foi possível enviar a avaliação. Uma nova tentativa de envio será feita automaticamente quando houver conexão a internet.');
            _this.navCtrl.goToRoot({});
        });
    };
    QuestionsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    QuestionsPage.prototype.slidesBack = function () {
        this.slides.slidePrev();
    };
    QuestionsPage.prototype.slidesForward = function () {
        this.slides.slideNext();
    };
    QuestionsPage.prototype.slideTo = function (index) {
        this.slides.slideTo(index);
    };
    QuestionsPage.prototype.slideChanged = function () {
        this.slidesIndex = this.slides.getActiveIndex() + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]) === "function" && _a || Object)
    ], QuestionsPage.prototype, "slides", void 0);
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/'<!--\n  Generated template for the QuestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perguntas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let question of questions; let i = index">\n      <h2>{{question.nome}}</h2>\n      <ion-textarea *ngIf="question.tipo == 1" placeholder="Resposta" [(ngModel)]="avaliacao.respostas[i]"></ion-textarea>\n      <ion-range *ngIf="question.tipo == 2" [(ngModel)]="avaliacao.respostas[i]" min="0" max="5" pin="true" snaps="true"></ion-range>\n      <ion-list *ngIf="question.tipo == 3" radio-group [(ngModel)]="avaliacao.respostas[i]">\n        <ion-item *ngFor="let resposta of question.listaRespostas">\n          <ion-label>{{resposta}}</ion-label>\n          <ion-radio value="{{resposta}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <h2>Respostas:</h2>\n      <ion-list>\n        <ion-item text-wrap *ngFor="let question of questions; let i = index" (click)="slideTo(i)">\n          <h2>{{i+1}}. {{question.nome}}</h2>\n          <p>{{avaliacao.respostas[i]}}</p>\n          <p *ngIf="!avaliacao.respostas[i]" style="color:red">Não respondido</p>\n        </ion-item>\n      </ion-list>\n      <button ion-button (click)="setAvaliacao($event)">Enviar Respostas</button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer *ngIf="!keyboard.isOpen()">\n    <ion-toolbar color="primary">\n      <ion-buttons start>\n        <button ion-button icon-only (click)="slidesBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{slidesIndex}}/{{slidesLength}}</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="slidesForward()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Keyboard */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_local_data_local_data__["a" /* LocalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_local_data_local_data__["a" /* LocalDataProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */]) === "function" && _g || Object])
    ], QuestionsPage);
    return QuestionsPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_ufsm_api_ufsm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_data_local_data__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TrabalhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrabalhosPage = /** @class */ (function () {
    function TrabalhosPage(navCtrl, navParams, apiUfsmProvider, localDataProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiUfsmProvider = apiUfsmProvider;
        this.localDataProvider = localDataProvider;
        this.loadingCtrl = loadingCtrl;
    }
    TrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabalhosPage');
    };
    TrabalhosPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 10000
        });
        loader.present();
        this.apiUfsmProvider.getTrabalhos().subscribe(function (trabalhos) {
            _this.trabalhos = trabalhos;
            _this.localDataProvider.getEstados().then(function (estados) {
                _this.estados = estados;
                loader.dismiss().catch(function () { });
            });
        });
    };
    TrabalhosPage.prototype.goToQuestions = function (trabalho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */], { trabalho: trabalho });
    };
    TrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabalhos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/'<!--\n  Generated template for the TrabalhosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Trabalhos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let trabalho of trabalhos; let i = index" (click)="goToQuestions(trabalho)">\n      <h2>{{trabalho.titulo}}</h2>\n      <h3>{{trabalho.apresentador}}</h3>\n      <p *ngIf="estados">{{estados[i]}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_local_data_local_data__["a" /* LocalDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TrabalhosPage);
    return TrabalhosPage;
}());

//# sourceMappingURL=trabalhos.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/questions/questions.module": [
		286,
		1
	],
	"../pages/trabalhos/trabalhos.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngforage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_ufsm_api_ufsm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_local_data_local_data__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabalhos/trabalhos.module#TrabalhosPageModule', name: 'TrabalhosPage', segment: 'trabalhos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ngforage__["b" /* NgForageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_local_data_local_data__["a" /* LocalDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Trabalhos', component: __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngforage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LocalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalDataProvider = /** @class */ (function () {
    function LocalDataProvider(http, ngf) {
        this.http = http;
        this.ngf = ngf;
        console.log('Hello LocalDataProvider Provider');
        this.trabalhosDB = 'trabalhos';
        this.avaliacoesDB = 'avaliacoes';
    }
    LocalDataProvider.prototype.ngOnInit = function () {
        this.ngf.name = 'JAI';
    };
    LocalDataProvider.prototype.getTrabalhos = function () {
        //this.ngf.storeName = 'trabalhos';
        return this.ngf.getItem(this.trabalhosDB);
    };
    LocalDataProvider.prototype.setTrabalhos = function (trabalhos) {
        //this.ngf.storeName = 'trabalhos';
        return this.ngf.setItem(this.trabalhosDB, trabalhos);
    };
    LocalDataProvider.prototype.getAvaliacao = function (id) {
        //this.ngf.storeName = 'avaliacoes';
        return this.ngf.getItem(String(id));
    };
    LocalDataProvider.prototype.setAvaliacao = function (id, avaliacao) {
        console.log('localdata>setavaliacao');
        //this.ngf.storeName = 'avaliacoes';
        return this.ngf.setItem(String(id), avaliacao);
    };
    LocalDataProvider.prototype.setAvaliacoes = function (avaliacoes) {
        var avaliacaoPromiseList = new Array();
        for (var i = 0; i < avaliacoes.length; i++) {
            var promise = this.ngf.setItem(String(avaliacoes[i].trabalho), avaliacoes[i]);
            avaliacaoPromiseList.push(promise);
        }
        return Promise.all(avaliacaoPromiseList);
    };
    LocalDataProvider.prototype.getAvaliacoesPendentes = function () {
        var _this = this;
        //this.ngf.storeName = 'avaliacoes';
        var getAvaliacoesPromise = new Promise(function (resolve, reject) {
            var avaliacoes = new Array();
            _this.ngf.iterate(function (value, key, iterationNumber) {
                if (value.estado == __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */]["Avaliado mas não enviado"]) {
                    avaliacoes.push(value);
                }
            }).then(function () {
                resolve(avaliacoes);
            }, function (err) {
                reject();
            });
        });
        return getAvaliacoesPromise;
    };
    LocalDataProvider.prototype.getEstados = function () {
        var _this = this;
        var getEstadosPromise = new Promise(function (resolve, reject) {
            var estados = new Array();
            _this.ngf.iterate(function (value, key, iterationNumber) {
                estados.push(__WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */][value.estado]);
            }).then(function () {
                resolve(estados);
            }, function (err) {
                reject();
            });
        });
        return getEstadosPromise;
    };
    LocalDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngforage__["a" /* NgForage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngforage__["a" /* NgForage */]) === "function" && _b || Object])
    ], LocalDataProvider);
    return LocalDataProvider;
    var _a, _b;
}());

//# sourceMappingURL=local-data.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Estado; });
var Estado;
(function (Estado) {
    Estado[Estado["N\u00E3o Avaliado"] = 0] = "N\u00E3o Avaliado";
    Estado[Estado["Avaliado mas n\u00E3o enviado"] = 1] = "Avaliado mas n\u00E3o enviado";
    Estado[Estado["Avaliado e Enviado"] = 2] = "Avaliado e Enviado";
})(Estado || (Estado = {}));
//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUfsmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiUfsmProvider = /** @class */ (function () {
    function ApiUfsmProvider(http, localDataProvider) {
        var _this = this;
        this.http = http;
        this.localDataProvider = localDataProvider;
        console.log('Hello ApiUfsmProvider Provider');
        this.url = "https://raw.githubusercontent.com/Felipe-Marin/pwa-jai-ufsm/master/api.json";
        /*let token = "";
        let deviceID = "";
        this.headers = new HttpHeaders({
          'X-UFSM-Access-Token': token,
          'X-UFSM-Device-ID': deviceID
        });*/
        this.trabalhosObs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(window, 'online').subscribe(function () {
            _this.sendAvaliacoes();
        });
    }
    ApiUfsmProvider.prototype.ngOnInit = function () {
        if (navigator.onLine) {
            this.sendAvaliacoes();
        }
    };
    ApiUfsmProvider.prototype.getTrabalhos = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (response) {
            if (!response.error) {
                var trabalhos_1 = response.trabalhos;
                var avaliacoes_1 = new Array();
                var _loop_1 = function (i) {
                    _this.localDataProvider.getAvaliacao(trabalhos_1[i].id).then(function (avaliacao) {
                        if (!avaliacao) {
                            var avaliacao_1 = {
                                trabalho: trabalhos_1[i].id,
                                estado: __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Não Avaliado"],
                                respostas: new Array(trabalhos_1[i].perguntas.length)
                            };
                            avaliacoes_1.push(avaliacao_1);
                        }
                    });
                };
                for (var i = 0; i < trabalhos_1.length; i++) {
                    _loop_1(i);
                }
                _this.localDataProvider.setTrabalhos(trabalhos_1).then(function () {
                    _this.localDataProvider.setAvaliacoes(avaliacoes_1).then(function () {
                        _this.trabalhosObs.next(trabalhos_1);
                    });
                });
            }
            else {
                _this.getTrabalhosLocal();
            }
        }, function (err) {
            console.log(err);
            _this.getTrabalhosLocal();
        });
        return this.trabalhosObs;
    };
    ApiUfsmProvider.prototype.getTrabalhosLocal = function () {
        var _this = this;
        this.localDataProvider.getTrabalhos().then(function (trabalhos) {
            _this.trabalhosObs.next(trabalhos);
        });
    };
    ApiUfsmProvider.prototype.setAvaliacao = function (avaliacao) {
        var _this = this;
        console.log('setavaliacao');
        var sendAvaliacao = new Promise(function (resolve, reject) {
            if (navigator.onLine) {
                console.log('online');
                avaliacao.estado = __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Avaliado e Enviado"];
                _this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(function () {
                    console.log('success');
                    resolve();
                }, function (err) {
                    console.log('erro');
                    console.log(err);
                });
            }
            else {
                console.log('offline');
                avaliacao.estado = __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Avaliado mas não enviado"];
                _this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(function () {
                    reject();
                });
            }
        });
        return sendAvaliacao;
    };
    ApiUfsmProvider.prototype.sendAvaliacoes = function () {
        var _this = this;
        this.localDataProvider.getAvaliacoesPendentes().then(function (avaliacoesPendentes) {
            for (var i = 0; i < avaliacoesPendentes.length; i++) {
                _this.setAvaliacao(avaliacoesPendentes[i]).then(function () {
                    console.log('avaliacao pendente enviada');
                });
            }
        });
    };
    ApiUfsmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__["a" /* LocalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__["a" /* LocalDataProvider */]) === "function" && _b || Object])
    ], ApiUfsmProvider);
    return ApiUfsmProvider;
    var _a, _b;
}());

//# sourceMappingURL=api-ufsm.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map