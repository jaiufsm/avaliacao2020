webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(99);
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
    function TrabalhosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabalhosPage');
    };
    TrabalhosPage.prototype.ngOnInit = function () {
        this.trabalhos = [
            {
                "id": 25424,
                "titulo": "SOBRE JORNALISTAS MILITANTES: FORMAÇÃO, PARTICIPAÇÃO E JORNALISMO EM MOVIMENTOS SOCIAIS",
                "apresentador": "JULIA MARA SAGGIORATTO",
                "apresentacao": {
                    "data": "2018-05-11T09:12:43.435",
                    "predio": "CSSH 74A",
                    "sala": "Painel 12"
                },
                "perguntas": [
                    {
                        "discursiva": true,
                        "id": 121,
                        "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                        "respostas": null
                    },
                    {
                        "discursiva": false,
                        "id": 141,
                        "nome": "Na sua opinião, o trabalho é bom?",
                        "respostas": "0;1;2;3;4;5"
                    },
                    {
                        "discursiva": false,
                        "id": 154,
                        "nome": "Pergunta 3",
                        "respostas": "alternativa 1;alternativa 2;alternativa 3;alternativa 4"
                    }
                ]
            },
            {
                "id": 25424,
                "titulo": "TRABALHO 2",
                "apresentador": "APRESENTADOR 2",
                "apresentacao": {
                    "data": "2018-05-11T09:12:43.435",
                    "predio": "CSSH 74A",
                    "sala": "Painel 12"
                },
                "perguntas": [
                    {
                        "discursiva": true,
                        "id": 121,
                        "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                        "respostas": null
                    },
                    {
                        "discursiva": false,
                        "id": 141,
                        "nome": "Na sua opinião, o trabalho é bom?",
                        "respostas": "0;1;2;3;4;5"
                    }
                ]
            }
        ];
    };
    TrabalhosPage.prototype.goToQuestions = function (trabalho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */], { trabalho: trabalho });
    };
    TrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabalhos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/'<!--\n  Generated template for the TrabalhosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Trabalhos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let trabalho of trabalhos" (click)="goToQuestions(trabalho)">\n      <h2>{{trabalho.titulo}}</h2>\n      <p>{{trabalho.apresentador}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TrabalhosPage);
    return TrabalhosPage;
}());

//# sourceMappingURL=trabalhos.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/questions/questions.module": [
		278,
		1
	],
	"../pages/trabalhos/trabalhos.module": [
		279,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_ufsm_api_ufsm__ = __webpack_require__(271);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabalhos/trabalhos.module#TrabalhosPageModule', name: 'TrabalhosPage', segment: 'trabalhos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUfsmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function ApiUfsmProvider(http) {
        this.http = http;
        console.log('Hello ApiUfsmProvider Provider');
        this.trabalhos = [
            {
                "id": 25424,
                "titulo": "SOBRE JORNALISTAS MILITANTES: FORMAÇÃO, PARTICIPAÇÃO E JORNALISMO EM MOVIMENTOS SOCIAIS",
                "apresentador": "JULIA MARA SAGGIORATTO",
                "apresentacao": {
                    "data": "2018-05-11T09:12:43.435",
                    "predio": "CSSH 74A",
                    "sala": "Painel 12"
                },
                "perguntas": [
                    {
                        "discursiva": true,
                        "id": 121,
                        "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                        "respostas": null
                    },
                    {
                        "discursiva": false,
                        "id": 141,
                        "nome": "Na sua opinião, o trabalho é bom?",
                        "respostas": "0;1;2;3;4;5"
                    },
                    {
                        "discursiva": false,
                        "id": 154,
                        "nome": "Pergunta 3",
                        "respostas": "alternativa 1; alternativa 2; alternativa 3; alternativa 4"
                    }
                ]
            },
            {
                "id": 25424,
                "titulo": "TRABALHO 2",
                "apresentador": "APRESENTADOR 2",
                "apresentacao": {
                    "data": "2018-05-11T09:12:43.435",
                    "predio": "CSSH 74A",
                    "sala": "Painel 12"
                },
                "perguntas": [
                    {
                        "discursiva": true,
                        "id": 121,
                        "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                        "respostas": null
                    },
                    {
                        "discursiva": false,
                        "id": 141,
                        "nome": "Na sua opinião, o trabalho é bom?",
                        "respostas": "0;1;2;3;4;5"
                    }
                ]
            }
        ];
    }
    ApiUfsmProvider.prototype.getTrabalhos = function () {
        return this.trabalhos;
    };
    ApiUfsmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiUfsmProvider);
    return ApiUfsmProvider;
}());

//# sourceMappingURL=api-ufsm.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
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


/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    QuestionsPage.prototype.ngOnInit = function () {
        if (this.navParams.data.trabalho) {
            this.trabalho = this.navParams.data.trabalho;
            this.questions = this.trabalho.perguntas;
        }
        this.slidesIndex = 1;
        this.slidesLength = this.questions.length;
        this.initQuestions();
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
    QuestionsPage.prototype.slidesBack = function () {
        this.slides.slidePrev();
    };
    QuestionsPage.prototype.slidesForward = function () {
        this.slides.slideNext();
    };
    QuestionsPage.prototype.slideChanged = function () {
        this.slidesIndex = this.slides.getActiveIndex() + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], QuestionsPage.prototype, "slides", void 0);
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/'<!--\n  Generated template for the QuestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perguntas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let question of questions">\n      <h2>{{question.nome}}</h2>\n      <ion-textarea *ngIf="question.tipo == 1" placeholder="Resposta"></ion-textarea>\n      <ion-range *ngIf="question.tipo == 2" [(ngModel)]="rangeValue" min="0" max="5" pin="true" snaps="true"></ion-range>\n      <ion-list *ngIf="question.tipo == 3" radio-group [(ngModel)]="radioValue">\n        <ion-item *ngFor="let resposta of question.listaRespostas">\n          <ion-label>{{resposta}}</ion-label>\n          <ion-radio value="{{resposta}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer *ngIf="!keyboard.isOpen()">\n    <ion-toolbar color="primary">\n      <ion-buttons start>\n        <button ion-button icon-only (click)="slidesBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{slidesIndex}}/{{slidesLength}}</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="slidesForward()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Keyboard */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map