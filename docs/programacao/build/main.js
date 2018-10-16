webpackJsonp([2],{

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
	"../pages/modulos-trabalhos/modulos-trabalhos.module": [
		271,
		1
	],
	"../pages/modulos/modulos.module": [
		270,
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__programacao_programacao__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__links_links__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__programacao_programacao__["a" /* ProgramacaoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__favoritos_favoritos__["a" /* FavoritosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__links_links__["a" /* LinksPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__["a" /* ModulosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Programação" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="heart"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Links" tabIcon="link"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modulos_modulos__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramacaoPage = /** @class */ (function () {
    function ProgramacaoPage(navCtrl, http, data, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = data;
        this.navParams = navParams;
        this.datas = [];
        this.segmentData = "Modulos";
        this.listaAgrupadores = [];
        this.listaModulosID = [];
        this.trabalhos = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhos');
        this.trabalhos.subscribe(function (info) {
            for (var _i = 0, _a = info.trabalhos; _i < _a.length; _i++) {
                var trabalho = _a[_i];
                var data = trabalho.trabalho.apresentacao.data;
                if (!_this.datas.includes(data.slice(0, 10)))
                    _this.datas.push(data.slice(0, 10));
            }
            _this.datas.sort(function (a, b) {
                var a_ = +a.slice(8, 10);
                var b_ = +b.slice(8, 10);
                return a_ - b_;
            });
        });
        this.agrupadores = this.http.get('https://api-jai.herokuapp.com/jai/avaliacaoRest/findModulos');
        this.agrupadores.subscribe(function (info) {
            for (var _i = 0, _a = info.modulos.agrupadores; _i < _a.length; _i++) {
                var agrupador = _a[_i];
                for (var _b = 0, _c = agrupador.modulos; _b < _c.length; _b++) {
                    var modulo = _c[_b];
                    _this.listaModulosID.push(modulo.id);
                }
                _this.listaAgrupadores.push(agrupador);
            }
        });
    }
    ProgramacaoPage.prototype.paginaModulos = function (agrupador) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modulos_modulos__["a" /* ModulosPage */], { agrupador: agrupador, datas: this.datas });
    };
    ProgramacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramacaoPage');
    };
    ProgramacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programacao',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\programacao\programacao.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> JAI - Programação </ion-title>\n\n        <!--\n\n        <ion-toolbar>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-searchbar placeholder="Pesquisar trabalhos..." (ionInput)="getTrabalhos($event)"></ion-searchbar>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <button ion-button clear icon-only item-end color="light" (click)="mostrarFiltro()">\n\n                        <ion-icon name="funnel"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-toolbar>\n\n        -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-segment *ngIf="datas" [(ngModel)]="segmentData">\n\n            <ion-segment-button value="Modulos"> Agrupadores </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="segmentData">\n\n        <ion-list *ngSwitchCase="\'Modulos\'">\n\n            <button ion-item *ngFor="let agrupador of listaAgrupadores" (click)="paginaModulos(agrupador)">\n\n                {{ agrupador.nome  }}\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\programacao\programacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProgramacaoPage);
    return ProgramacaoPage;
}());

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinksPage = /** @class */ (function () {
    function LinksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LinksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-links',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\links\links.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            JAI - Links\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-list>\n\n            <ion-card-content>\n\n                <ion-icon name="link"></ion-icon>\n\n                <a href="https://www.ufsm.br/">Site da UFSM</a>\n\n            </ion-card-content>\n\n             <ion-card-content>\n\n                <ion-icon name="link"></ion-icon>\n\n                <a href="http://w3.ufsm.br/jai/">Página da JAI</a>\n\n            </ion-card-content>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\links\links.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LinksPage);
    return LinksPage;
}());

//# sourceMappingURL=links.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(navCtrl, data, datepipe) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.datepipe = datepipe;
        this.listaFavoritos = this.data.paramData;
    }
    FavoritosPage.prototype.removeFavorito = function (fav, e) {
        e.stopPropagation();
        fav.favorito = false;
        var index = this.listaFavoritos.indexOf(fav, 0);
        if (index > -1)
            this.listaFavoritos.splice(index, 1);
    };
    FavoritosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    FavoritosPage.prototype.getDataFav = function (fav) {
        return fav.trabalho.apresentacao.data.slice(0, 10);
    };
    FavoritosPage.prototype.getHoraInicioFav = function (fav) {
        return fav.trabalho.apresentacao.data.slice(11, 16);
    };
    FavoritosPage.prototype.getPredioFav = function (fav) {
        return fav.trabalho.apresentacao.predio;
    };
    FavoritosPage.prototype.getSalaFav = function (fav) {
        return fav.trabalho.apresentacao.sala;
    };
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    FavoritosPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaFavoritos;
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\favoritos\favoritos.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            JAI - Favoritos\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <div *ngIf="listaFavoritos?.length > 0; else empty">\n\n            <ion-card ion-item *ngFor="let fav of listaFavoritos">\n\n                <ion-card-content>\n\n                    <h3 text-wrap> {{ fav.trabalho.titulo }} </h3>\n\n                    <p text-wrap> &mdash; {{ fav.trabalho.apresentador }} </p>\n\n                    <p> Data: {{ dataFormatada(getDataFav(fav)) }} </p>\n\n                    <p> Horário: {{ getHoraInicioFav(fav) }} </p>\n\n                    <p>Local: {{ getPredioFav(fav) }}</p>\n\n                    <p>Sala/Painel: {{ getSalaFav(fav) }}</p>\n\n                </ion-card-content>\n\n                <button ion-button clear icon-only item-end (click)="removeFavorito(fav, $event)">\n\n                    <ion-icon color="danger" name="trash"></ion-icon>\n\n                </button>\n\n            </ion-card>\n\n        </div>\n\n        <ng-template #empty>\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    Nenhum favorito encontrado.\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ng-template>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\favoritos\favoritos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_programacao_programacao__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_links_links__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favoritos_favoritos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_filtro_filtro__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modulos_modulos__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_data__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_links_links__["a" /* LinksPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modulos-trabalhos/modulos-trabalhos.module#ModulosTrabalhosPageModule', name: 'ModulosTrabalhosPage', segment: 'modulos-trabalhos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modulos/modulos.module#ModulosPageModule', name: 'ModulosPage', segment: 'modulos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_links_links__["a" /* LinksPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */]
            ],
            providers: [
                //StatusBar,
                //SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_14__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Platform } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltroPage = /** @class */ (function () {
    function FiltroPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datas = [];
        this.locais = [];
        this.datas = this.navParams.data.datas;
        this.locais = this.navParams.data.locais;
        this.dataSelecionada = this.navParams.data.default;
        this.localSelecionado = this.navParams.data.default;
        this.defaultSelecionado = this.navParams.data.default;
    }
    FiltroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltroPage');
    };
    FiltroPage.prototype.aplicarFiltros = function () {
        var levarInfo = { data: this.dataSelecionada, local: this.localSelecionado };
        this.dismiss(levarInfo);
    };
    FiltroPage.prototype.dismiss = function (info) {
        this.viewCtrl.dismiss(info);
    };
    FiltroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filtro',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\filtro\filtro.html"*/'<!--\n\n    Generated template for the FilterPage page.\n\n\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n\n    Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="primary">\n\n        <ion-title>\n\n            Filtrar programação\n\n        </ion-title>\n\n        <!--\n\n        <ion-buttons end>\n\n            <button ion-button (click)="aplicarFiltros()" strong>OK</button>\n\n        </ion-buttons>\n\n        -->\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Data</ion-label>\n\n            <ion-select interface="popover" [(ngModel)]="dataSelecionada">\n\n                <ion-option selected>{{ defaultSelecionado }}</ion-option>\n\n                <ion-option *ngFor="let data of datas">{{ data }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Local</ion-label>\n\n            <ion-select interface="popover" [(ngModel)]="localSelecionado">\n\n                <ion-option selected>{{ defaultSelecionado }}</ion-option>\n\n                <ion-option *ngFor="let local of locais">{{ local }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-row center>\n\n        <ion-col text-center>\n\n            <button ion-button outline (click)="aplicarFiltros()">\n\n                OK\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\filtro\filtro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], FiltroPage);
    return FiltroPage;
}());

//# sourceMappingURL=filtro.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
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
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
        this.paramData = [];
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulos_trabalhos_modulos_trabalhos__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModulosPage = /** @class */ (function () {
    function ModulosPage(navCtrl, navParams, datepipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datepipe = datepipe;
        this.listaModulos = [];
        this.agrupador = this.navParams.data.agrupador;
        this.datas = this.navParams.data.datas;
        for (var _i = 0, _a = this.agrupador.modulos; _i < _a.length; _i++) {
            var modulo = _a[_i];
            this.listaModulos.push(modulo);
        }
        this.listaModulos.sort(function (a, b) {
            var a_ = a.nome;
            var b_ = b.nome;
            return (a_ < b_) ? -1 : (a_ > b_) ? 1 : 0;
        });
    }
    ModulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosPage');
    };
    ModulosPage.prototype.toggleSection = function (i) {
        this.listaModulos[i].open = !this.listaModulos[i].open;
    };
    ModulosPage.prototype.paginaModulosTrabalhos = function (i) {
        this.moduloSelect = this.listaModulos[i];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modulos_trabalhos_modulos_trabalhos__["a" /* ModulosTrabalhosPage */], { moduloSelect: this.moduloSelect, datas: this.datas });
    };
    ModulosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\modulos\modulos.html"*/'<!--\n\n    Generated template for the ModulosPage page.\n\n\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n\n    Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Módulos</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-list>\n\n            <button text-wrap ion-item *ngFor="let modulo of listaModulos, let i = index" (click)="paginaModulosTrabalhos(i)" detail-none>\n\n                {{ modulo.nome }}\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\modulos\modulos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
    ], ModulosPage);
    return ModulosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=modulos.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosTrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModulosTrabalhosPage = /** @class */ (function () {
    function ModulosTrabalhosPage(navCtrl, navParams, http, data, datepipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = data;
        this.datepipe = datepipe;
        this.p = 1;
        this.listaFavoritos = this.data.paramData;
        this.todasDatas = this.navParams.data.datas;
        console.log(this.todasDatas);
        this.moduloSelect = this.navParams.data.moduloSelect;
        this.listaTrabalhosBkp = [];
        this.listaTrabalhosModulo = [];
        this.listaDatas = [];
        this.datas = [];
        var _loop_1 = function (i) {
            var trabalhoModulo = void 0;
            trabalhoModulo = this_1.http.get(this_1.getUrl(this_1.todasDatas[i]));
            trabalhoModulo.subscribe(function (info) {
                var trabalhos = [];
                for (var _i = 0, _a = info.trabalhos; _i < _a.length; _i++) {
                    var trabalho = _a[_i];
                    _this.setaFavoritos(trabalho);
                    trabalhos.push(trabalho);
                }
                var data = {
                    dataStr: _this.dataFormatada(_this.todasDatas[i]),
                    trabalhos: trabalhos,
                    trabalhosbkp: trabalhos
                };
                if (_this.listaDatas.length == 0) {
                    _this.segmentData = data.dataStr;
                }
                _this.datas.push(data);
                _this.listaDatas.push(data.dataStr);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.todasDatas.length; i++) {
            _loop_1(i);
        }
    }
    ModulosTrabalhosPage.prototype.getUrl = function (data) {
        var url = "https://api-jai.herokuapp.com/jai/avaliacaoRest/findTrabalhosModulo?data=" +
            data + "&modulo=" + this.moduloSelect.id;
        return url;
    };
    ModulosTrabalhosPage.prototype.putSegment = function (data) {
        this.segmentData = data;
    };
    ModulosTrabalhosPage.prototype.dataFormatada = function (data) {
        return this.datepipe.transform(data, 'dd/MM');
    };
    ModulosTrabalhosPage.prototype.getHoraInicioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(11, 16);
    };
    ModulosTrabalhosPage.prototype.getTituloTrabalho = function (trab) {
        return trab.trabalho.titulo;
    };
    ModulosTrabalhosPage.prototype.getApresentadorTrabalho = function (trab) {
        return trab.trabalho.apresentador;
    };
    ModulosTrabalhosPage.prototype.getPredioTrabalho = function (trab) {
        return trab.trabalho.apresentacao.predio;
    };
    ModulosTrabalhosPage.prototype.getSalaTrabalho = function (trab) {
        return trab.trabalho.apresentacao.sala;
    };
    ModulosTrabalhosPage.prototype.getDataTrabalho = function (trab) {
        return trab.trabalho.apresentacao.data.slice(0, 10);
    };
    ModulosTrabalhosPage.prototype.setaFavoritos = function (trab) {
        for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
            var favorito = _a[_i];
            if (favorito.trabalho.id == trab.trabalho.id) {
                trab.favorito = true;
                return;
            }
        }
        trab.favorito = false;
    };
    ModulosTrabalhosPage.prototype.favorito = function (trab, e) {
        e.stopPropagation();
        if (!trab.favorito) {
            trab.favorito = true;
            this.listaFavoritos.push(trab);
        }
        else {
            trab.favorito = false;
            var index = -1;
            for (var _i = 0, _a = this.listaFavoritos; _i < _a.length; _i++) {
                var favorito = _a[_i];
                if (favorito.trabalho.id == trab.trabalho.id) {
                    index = this.listaFavoritos.indexOf(favorito, 0);
                }
            }
            if (index > -1)
                this.listaFavoritos.splice(index, 1);
        }
        /*
        let flag = true;
        trab.favorito = false;
        let index;
        if (flag) {
            index = this.listaFavoritos.indexOf(trab, 0);
            if (index == -1) flag = false;
        }
        if (!flag) {
            for (let favorito of this.listaFavoritos) {
                if (favorito.trabalho.id == trab.trabalho.id) {
                    break;
                }
            }
        }
        if (index > -1) this.listaFavoritos.splice(index, 1);
    }
    */
    };
    ModulosTrabalhosPage.prototype.getTrabalhos = function (e) {
        var _this = this;
        this.listaTrabalhosModulo = this.listaTrabalhosBkp;
        var filtro = e.target.value;
        if (filtro && filtro.trim() != '') {
            var filtroLC_1 = filtro.toLowerCase();
            this.listaTrabalhosModulo = this.listaTrabalhosModulo.filter(function (item) {
                return (_this.getTituloTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getPredioTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getSalaTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1
                    || _this.getApresentadorTrabalho(item).toLowerCase().indexOf(filtroLC_1) > -1);
            });
        }
    };
    ModulosTrabalhosPage.prototype.ionViewWillLeave = function () {
        this.data.paramData = this.listaFavoritos;
    };
    ModulosTrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulosTrabalhosPage');
    };
    ModulosTrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos-trabalhos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\modulos-trabalhos\modulos-trabalhos.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{ moduloSelect.nome  }} - {{ dataFormatada(dataSelect) }}</ion-title>\n\n        <ion-toolbar>\n\n            <ion-row>\n\n                <ion-col>\n\n                     <ion-searchbar placeholder="Pesquisar trabalhos..." (ionInput)="getTrabalhos($event)"></ion-searchbar>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-toolbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div *ngIf="datas.length > 0;then ok else empty"></div>\n\n    <ng-template #ok>\n\n        <div>\n\n            <ion-segment *ngIf="datas" [(ngModel)]="segmentData">\n\n                <ion-segment-button *ngFor="let data of datas" value="{{ data.dataStr }}" (click)="putSegment(data.dataStr)">\n\n                    {{ data.dataStr }}\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n        </div>\n\n        <pagination-controls (pageChange)="p = $event"></pagination-controls>\n\n        <div [ngSwitch]="segmentData">\n\n            <ng-container *ngFor="let data of datas">\n\n                <ion-list *ngSwitchCase="data.dataStr">\n\n                    <ng-container *ngFor="let trab of data.trabalhos | paginate:{itemsPerPage: 10, currentPage: p}">\n\n                        <ion-card ion-item>\n\n                            <ion-card-content>\n\n                                <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n\n                                <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n\n                                <p text-wrap> Horário: {{ getHoraInicioTrabalho(trab) }} </p>\n\n                                <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n\n                                <p text-wrap> Sala/Painel: {{ getSalaTrabalho(trab) }} </p>\n\n                            </ion-card-content>\n\n                            <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n\n                                <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n                            </button>\n\n                        </ion-card>\n\n                    </ng-container>\n\n                    \n\n                </ion-list>\n\n            </ng-container>\n\n        </div>\n\n        <pagination-controls (pageChange)="p = $event"></pagination-controls>\n\n    </ng-template>\n\n    <ng-template #empty>\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <p>Nenhum trabalho encontrado.</p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ng-template>\n\n</ion-content>\n\n\n\n<!-- Usando virtualScroll (não pode ficar dentro de ngIf!); mais limitado":\n\n<ion-content padding>\n\n    <div style="height:100%">\n\n        <ion-list [virtualScroll]="listaTrabalhosModulo">\n\n                <ion-card ion-item *virtualItem="let trab">\n\n                    <ion-card-content>\n\n                        <h3 text-wrap> {{ getTituloTrabalho(trab) }} </h3>\n\n                        <p text-wrap> &mdash; {{ getApresentadorTrabalho(trab) }} </p>\n\n                        <p text-wrap> Horário: {{ getHoraInicioTrabalho(trab) }} </p>\n\n                        <p text-wrap> Local: {{ getPredioTrabalho(trab) }} </p>\n\n                        <p text-wrap> Sala/Painel: {{ getSalaTrabalho(trab) }} </p>\n\n                    </ion-card-content>\n\n                    <button ion-button clear icon-only item-end (click)="favorito(trab, $event)">\n\n                        <ion-icon color="danger" [name]="trab.favorito ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n                        </button>\n\n                </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\ionic-prog-jai\src\pages\modulos-trabalhos\modulos-trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _e || Object])
    ], ModulosTrabalhosPage);
    return ModulosTrabalhosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=modulos-trabalhos.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map