webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetallePage = (function () {
    function DetallePage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.modal = false;
        this.item = navParams.data.datos;
        if (navParams.data.modal) {
            this.modal = navParams.data.modal;
        }
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.Cerrar = function () {
        this.viewController.dismiss();
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\detalle\detalle.html"*/'<ion-header>\n  <custom-header  [titulo]="\'Detalle\'"></custom-header>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img [src]="\'assets/thumbnails/thumb_\'+item.id+\'.png\'"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{item.titulo}}\n      </ion-card-title>\n      <button ion-button *ngIf="modal" (click)="cerrar()">Cerrar</button>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioPage = (function () {
    function FormularioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    FormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formulario',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\formulario\formulario.html"*/'<!--\n  Generated template for the FormularioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <custom-header  [titulo]="\'Mi Formulario\'"></custom-header>\n</ion-header>\n\n<ion-content padding-top>\nholaaaaaaa....\n<br>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Nombre</ion-label>\n      <ion-input type="text" value=""> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Apellidos</ion-label>\n      <ion-input type="string" value=""> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ciudad</ion-label>\n      <ion-input type="string" value=""> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Edad</ion-label>\n      <ion-input type="number" value=""> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="string" value="" placeholder="Color"> </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Colores</ion-label>\n      <ion-select [(ngModel)]="colorSeleccionado">\n        <ion-option value="rojo">Rojo</ion-option>\n        <ion-option value="verde">Verde</ion-option>\n        <ion-option value="amarillo">Amarillo</ion-option>\n        <ion-option value="azul">Azul</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label >Check 1</ion-label>\n      <ion-checkbox checked="true" > </ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label >Check 2</ion-label>\n      <ion-checkbox  color="danger"> </ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Togle 1</ion-label>\n      <ion-toggle  disabled> </ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label >Togle 2</ion-label>\n      <ion-toggle  color="secondary"> </ion-toggle>\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-list radio-group>\n    <ion-item>\n      <ion-label >Radio 1</ion-label>\n      <ion-radio  value="red"> </ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label >Radio 2</ion-label>\n      <ion-radio  value="green"> </ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Datetime</ion-label>\n      <ion-datetime  displayFormat="YYY/MM/DD hh:mm" pickerformat="YY MM DD hh mm"> </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-range min="10" max="200" >\n        <ion-icon range-left small name="sunny" >  </ion-icon>\n        <ion-icon range-right  name="sunny" >  </ion-icon>\n      </ion-range >\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\formulario\formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FormularioPage);
    return FormularioPage;
}());

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pagina de info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Datos pagina de información</h1>\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalle/detalle.module": [
		282,
		2
	],
	"../pages/formulario/formulario.module": [
		283,
		1
	],
	"../pages/info/info.module": [
		284,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_formulario__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__formulario_formulario__["a" /* FormularioPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\tabs\tabs.html"*/'<ion-tabs tabsLayout="title-hide">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Form" tabIcon="add-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, alertController) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.seleccion = "grupo1";
    }
    AboutPage.prototype.ShowAlert = function () {
        var alerta = this.alertController.create({
            title: "Inforación",
            subTitle: "esto es una alerta del sistema",
            message: "esto es un mensaje",
            inputs: [{
                    name: "nombre",
                    placeholder: "tu nombre"
                }],
            buttons: [{
                    text: "guardar",
                    handler: function (data) {
                        console.log("enviar" + data.nombre);
                    }
                },
                {
                    text: "Cancelar",
                    handler: function (data) {
                        console.log("cancelar");
                    }
                }
            ]
        });
        alerta.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\about\about.html"*/'<ion-header>\n  <custom-header [titulo]="\'About\'"></custom-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="seleccion">\n    <ion-segment-button value="grupo1">Grupo 1</ion-segment-button>\n    <ion-segment-button value="grupo2">Grupo 2</ion-segment-button>\n    <ion-segment-button value="grupo3">Grupo 3</ion-segment-button>\n  </ion-segment>\n\n<div *ngIf="seleccion==\'grupo1\'">\n  <button ion-button full (click)="ShowAlert()">ShowAlert</button>\n  <button ion-button color="danger">Danger</button>\n  <button ion-button full>Full</button>\n  <button ion-button block>Block</button>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col>\n        <button ion-button block>Boton 1</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block>Boton 2</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block>Boton 3</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<div *ngIf="seleccion==\'grupo2\'">\n  <button ion-button round>round</button>\n  <button ion-button samll>small</button>\n  <button ion-button large>large</button>\n</div>\n\n<div *ngIf="seleccion==\'grupo3\'">\n  <button ion-button outline>outline</button>\n  <button ion-button round outline>roundOutline</button>\n  <button ion-button clear>clear</button>\n  <ion-icon name="analytics"></ion-icon>\n  <button ion-button color="dark" icon-left><ion-icon name="analytics"></ion-icon>Analitics</button>\n  <button ion-button color="dark" icon-right>add-circle<ion-icon name="add-circle"></ion-icon></button>\n\n  <button ion-button color="dark" icon-only><ion-icon name="analytics"></ion-icon></button>\n  <button ion-button color="dark" icon-only clear><ion-icon name="analytics"></ion-icon></button>\n  <button ion-button color="dark" icon-only outline><ion-icon name="analytics"></ion-icon></button>\n\n</div>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.contacto = {
            nombre: "",
            apellidos: ""
        };
        this.miForm = formBuilder.group({
            nombre: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellidos: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ContactPage.prototype.enviarForm = function (miformulario) {
        console.log(this.contacto);
        console.log(miformulario.value);
    };
    ContactPage.prototype.enviarForm2 = function () {
        console.log(this.miForm.value);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\contact\contact.html"*/'<ion-header>\n  <custom-header  [titulo]="\'Contact\'"></custom-header>\n</ion-header>\n\n<ion-content>\n  <h2>Contacto</h2>\n  <form #miformulario = "ngForm" (ngSubmit)="enviarForm(miformulario)">\n    <ion-list>\n      <ion-list-header>Template Form</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="contacto.nombre" name="nombre" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Apellidos</ion-label>\n        <ion-input type="string"  [(ngModel)]="contacto.apellidos" name="apellidos" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button block type="submit" [disabled]="!miformulario.valid">Enviar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n  <form [formGroup]="miForm"(ngSubmit)="enviarForm2()">\n    <ion-list>\n      <ion-list-header>Data Driven Form</ion-list-header>\n      <ion-item>\n        <ion-label fixed>Nombre</ion-label>\n        <ion-input type="text" formControlName="nombre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="miForm.controls.nombre.valid">\n        <ion-label fixed>Apellidos</ion-label>\n        <ion-input type="string" formControlName="apellidos" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button block type="submit" >Enviar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, datosProvider, modalController, geo) {
        this.navCtrl = navCtrl;
        this.datosProvider = datosProvider;
        this.modalController = modalController;
        this.geo = geo;
        this.miLista = [
            { titulo: "primer elemento", id: 1, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { titulo: "segundo elemento", id: 2, descripcion: "Sed efficitur mauris eget enim sodales pellentesque." },
            { titulo: "tercer elemento", id: 3, descripcion: "Phasellus pulvinar augue quis enim pellentesque, ac pulvinar enim eleifend." },
            { titulo: "cuarto elemento", id: 4, descripcion: "Curabitur maximus orci sed tortor commodo, in egestas mi porttitor." },
            { titulo: "quinto elemento", id: 5, descripcion: "Donec non ipsum sed diam vulputate auctor." }
        ];
        this.listaNombres = [];
        this.loadData();
        var watch = this.geo.watchPosition();
        watch.subscribe(function (data) {
            console.log(data.coords.latitude + " --" + data.coords.longitude);
        });
    }
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.datosProvider.getData()
            .then(function (data) {
            console.log(data);
            _this.listaNombres = _this.listaNombres.concat(data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.doInfinite = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.loadData();
            $event.complete();
        }, 500);
    };
    HomePage.prototype.irDetalle = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */], { datos: item });
    };
    HomePage.prototype.abreModal = function (item) {
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */], { datos: item, modal: true });
        modal.present();
    };
    HomePage.prototype.getpos = function () {
        this.geo.getCurrentPosition()
            .then(function (data) {
            console.log(data.coords.latitude + " --" + data.coords.longitude);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\home\home.html"*/'\n<ion-header>\n  <custom-header  [titulo]="\'Home\'"></custom-header>\n</ion-header>\n\n\n<ion-content padding>\n\n<h2>Manejo de Listas</h2>\n<br>\n  <button ion-button (click)="getpos()" block >Obtener Posicion</button>\n\n  <ion-list>\n    <ion-list-header color="light">Mi encabezado de lista</ion-list-header>\n    <ion-item-group>\n      <ion-item *ngFor="let item of miLista" text-left no-padding text-wrap>\n        <ion-avatar item-left><img [src]="\'assets/iconos/ico_\'+item.id+\'.png\'" (click)="abreModal(item)"/></ion-avatar>\n        <h2  >{{item.titulo}}</h2>\n        <p >{{item.descripcion}}</p>\n        <ion-toggle item-right color="danger" ></ion-toggle>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-divider>divisor 2</ion-item-divider>\n\n    <ion-item-group>\n      <ion-item *ngFor="let item of miLista" text-left detail-push>\n        <ion-thumbnail item-left><img [src]="\'assets/thumbnails/thumb_\'+item.id+\'.png\'"/></ion-thumbnail>\n        <h3 >{{item.titulo}} </h3>\n        <ion-badge item-right color="secondary" detail-push>{{item.id}}</ion-badge>\n        <button ion-button item-left outline (click)="irDetalle(item)">Ver..</button>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-divider>divisor 3</ion-item-divider>\n\n    <ion-item-group>\n    <ion-item *ngFor="let item of listaNombres" text-left detail-push>\n        <h3 >{{item.nombre}} </h3>\n        <p >prueba</p>\n        <ion-note item-right>Mi texto</ion-note>\n      </ion-item>\n    </ion-item-group>\n    <ion-infinite-scroll threshold="10%" (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingtext="Cargando..."></ion-infinite-scroll-content >\n    </ion-infinite-scroll>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_datos_datos__["a" /* DatosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatosProvider = (function () {
    function DatosProvider(http) {
        this.http = http;
        console.log('Hello DatosProvider Provider');
    }
    DatosProvider.prototype.getData = function () {
        var _this = this;
        console.log('entra getData');
        return new Promise(function (resolve) {
            _this.http.get("http://dev.contanimacion.com/RESTcursos/all")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('entra provider');
                resolve(data);
            });
        });
    };
    DatosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DatosProvider);
    return DatosProvider;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_info_info__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalle_detalle__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_datos_datos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_custom_header_custom_header__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__["a" /* FormularioPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_custom_header_custom_header__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__["a" /* FormularioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalle_detalle__["a" /* DetallePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_datos_datos__["a" /* DatosProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_info_info__ = __webpack_require__(102);
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
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomHeaderComponent = (function () {
    function CustomHeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CustomHeaderComponent.prototype.irInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_info_info__["a" /* InfoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "titulo", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-header',template:/*ion-inline-start:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\components\custom-header\custom-header.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>{{titulo}}</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="irInfo()"><ion-icon name="add-circle"></ion-icon> </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only><ion-icon name="analytics"></ion-icon> </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"D:\GIT_ANGULAR\IONIC\mytabsapp1\src\components\custom-header\custom-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map