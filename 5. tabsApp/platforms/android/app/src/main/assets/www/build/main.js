webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_listadeseos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleComponent = (function () {
    function DetalleComponent(nvctrl, navpr, _listaDeseos, alertCtrl) {
        this.nvctrl = nvctrl;
        this.navpr = navpr;
        this._listaDeseos = _listaDeseos;
        this.alertCtrl = alertCtrl;
        //console.log(this.navpr);
        this.idx = this.navpr.get("i");
        this.lista = this.navpr.get("deseos");
    }
    DetalleComponent.prototype.ngOnInit = function () { };
    DetalleComponent.prototype.actualizar = function (item) {
        item.completado = !item.completado;
        var todosmarcados = true;
        for (var _i = 0, _a = this.lista.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completado) {
                todosmarcados = false;
                break;
            }
        }
        this.lista.terminado = todosmarcados;
        console.log('entra actualizar terminado' + this.lista.terminado + "--" + this.lista.nombre);
        console.log('entra actualizar terminada' + this.lista.terminada + "--" + this.lista.nombre);
        this._listaDeseos.actualizarData();
    };
    DetalleComponent.prototype.borrarItem = function (idx) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Desea Borrar este Item?',
            message: 'esta seguro que quiere borrar este Item??',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        //console.log('Cancelar Peticion');
                        return;
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        //console.log('Aceptar peticion');
                        _this._listaDeseos.eliminarLista(_this.idx);
                        _this.nvctrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-detalle',template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\pages\detalle\detalle.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{lista.nombre}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n  <ion-card-header>\n\n    <ion-item>\n\n      <ion-label floating>Nombre de la lista</ion-label>\n\n      <ion-input type="text" [(ngModel)]="lista.nombre"></ion-input>\n\n    </ion-item>\n\n</ion-card-header>\n\n\n\n<ion-card-content>\n\n      <ion-item *ngFor="let item of lista.items;let idx:index" (click)="actualizar(item)">\n\n\n\n        <ion-icon item-left *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n\n        <ion-icon item-left name="checkbox-outline" *ngIf="item.completado"></ion-icon>\n\n        <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n\n\n\n      </ion-item>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n<br><br>\n\n<button (click)="borrarItem(idx)" ion-button class="button-block" color="dangre">\n\n  borrar lista\n\n</button>\n\n\n\n</ion-content >\n\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\pages\detalle\detalle.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_listadeseos_service__["a" /* ListaDeseosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetalleComponent);
    return DetalleComponent;
}());

//# sourceMappingURL=detalle.component.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__ = __webpack_require__(199);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__["a" /* PendientesComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__["a" /* TerminadosComponent */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Pendientes" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Terminados" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_listadeseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalle_detalle_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendientesComponent = (function () {
    function PendientesComponent(navCtrl, _listaDeseos) {
        this.navCtrl = navCtrl;
        this._listaDeseos = _listaDeseos;
    }
    PendientesComponent.prototype.ngOnInit = function () { };
    PendientesComponent.prototype.irAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__["a" /* AgregarComponent */]);
    };
    PendientesComponent.prototype.verDetalle = function (deseos, i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detalle_detalle_component__["a" /* DetalleComponent */], { deseos: deseos, i: i });
    };
    PendientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pendientes',template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\pages\pendientes\pendientes.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Lista de Pendientes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ul>\n\n    <li *ngFor="let deseos of _listaDeseos.listas">\n\n      {{deseos.nombre}}\n\n    </li>\n\n  </ul> -->\n\n<ion-grid *ngIf="(_listaDeseos.listas | pendientes).length==0">\n\n  <ion-row>\n\n    <ion-col class="text-center cajaVacia" >\n\n       <ion-icon class="iconoGrande" ios="ios-sunny" md="md-sunny"></ion-icon>\n\n       <p>No hay pendientes</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n  <ion-card *ngFor="let deseos of _listaDeseos.listas | pendientes; let i=index">\n\n\n\n    <ion-item color="secondary" (click)="verDetalle(deseos, i)">\n\n      <h2>{{deseos.nombre}}</h2>\n\n      <ion-note item-right>\n\n        {{deseos.items.length}} items\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-list>\n\n        <ion-item (click)="verDetalle(deseos,i)" *ngFor="let item of deseos.items | slice:0:2">\n\n           <ion-icon item-left *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n\n          <ion-icon item-left name="checkbox-outline" *ngIf="item.completado"></ion-icon>\n\n          <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n\n        </ion-item>\n\n        <ion-item class="text-center" *ngIf="deseos.items.length > 2">\n\n          <ion-icon color="primary"  ios="ios-arrow-dropdown-circle" md="md-arrow-dropdown-circle"></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-card>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="prmary" (click)="irAgregar()"><ion-icon ios="ios-add" md="md-add"></ion-icon></button>\n\n\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\pages\pendientes\pendientes.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__app_services_listadeseos_service__["a" /* ListaDeseosService */]])
    ], PendientesComponent);
    return PendientesComponent;
}());

//# sourceMappingURL=pendientes.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_clases_index__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_listadeseos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarComponent = (function () {
    function AgregarComponent(alertCtrl, navController, _listaDeseos) {
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this._listaDeseos = _listaDeseos;
        this.nombreLista = "";
        this.nombreItem = "";
        this.items = [];
    }
    AgregarComponent.prototype.ngOnInit = function () { };
    AgregarComponent.prototype.agregar = function () {
        if (this.nombreItem.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["b" /* ListaItem */]();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    };
    AgregarComponent.prototype.borrarItem = function (id) {
        this.items.splice(id, 1);
    };
    AgregarComponent.prototype.guardarLista = function () {
        if (this.nombreLista.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Nombre de la Lista',
                subTitle: 'el nombre de la lista es obligatorio',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        var lista = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["a" /* Lista */](this.nombreLista);
        lista.items = this.items;
        //this._listaDeseos.listas.push(lista);
        this._listaDeseos.agregarLista(lista);
        this.navController.pop();
    };
    AgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-agregar',template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\pages\agregar\agregar.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ nombreLista | placeholder :\'nueva lista!!!\'}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n   <ion-card-header>\n\n      <ion-item>\n\n       <ion-label floating>Nombre Lista:</ion-label>\n\n       <ion-input type="text" [(ngModel)]="nombreLista" name="nombreLista"></ion-input>\n\n     </ion-item>\n\n   </ion-card-header>\n\n   <ion-card-content>\n\n     <ion-item>\n\n      <ion-label floating>tem:</ion-label>\n\n      <ion-input (keyup.enter)="agregar()" type="text" [(ngModel)]="nombreItem"></ion-input>\n\n    </ion-item>\n\n    <button (click)="agregar()" ion-button class="button-block">Agregar</button>\n\n   </ion-card-content>\n\n </ion-card>\n\n\n\n<ion-card *ngIf="items.length>0">\n\n  <ion-card-header>\n\n    <h3>Items agregados</h3>\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items; let i=index">\n\n        <button ion-button color="dark" clear>\n\n          {{item.nombre}}\n\n        </button>\n\n        <button (click)="borrarItem(i)" ion-button outline item-right color="danger">\n\n           <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n          Borrar Item {{i}}\n\n        </button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </ion-card-content>\n\n\n\n\n\n</ion-card>\n\n\n\n <button (click)="guardarLista()" ion-button icon-left class="button-block" >\n\n   <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n   Agregar Lista\n\n</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\pages\agregar\agregar.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_listadeseos_service__["a" /* ListaDeseosService */]])
    ], AgregarComponent);
    return AgregarComponent;
}());

//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_listadeseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminadosComponent = (function () {
    function TerminadosComponent(_lista, navCtrl) {
        this._lista = _lista;
        this.navCtrl = navCtrl;
    }
    TerminadosComponent.prototype.ngOnInit = function () { };
    TerminadosComponent.prototype.verDetalle = function (deseos, i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_detalle_component__["a" /* DetalleComponent */], { deseos: deseos, i: i });
    };
    TerminadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-terminados',template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\pages\terminados\terminados.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Lista de Terminados</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ul>\n\n    <li *ngFor="let deseos of _listaDeseos.listas">\n\n      {{deseos.nombre}}\n\n    </li>\n\n  </ul> -->\n\n  <ion-card *ngFor="let deseos of _lista.listas| pendientes:true; let i=index">\n\n\n\n    <ion-item color="secondary" (click)="verDetalle(deseos, i)">\n\n      <h2>{{deseos.nombre}}</h2>\n\n      <ion-note item-right>\n\n        {{deseos.items.length}} items\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-list>\n\n        <ion-item (click)="verDetalle(deseos,i)" *ngFor="let item of deseos.items | slice:0:2">\n\n           <ion-icon item-left *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n\n          <ion-icon item-left name="checkbox-outline" *ngIf="item.completado"></ion-icon>\n\n          <h2 [class.tachado]="item.completado">{{item.nombre}}</h2>\n\n        </ion-item>\n\n        <ion-item class="text-center" *ngIf="deseos.items.length > 2">\n\n          <ion-icon color="primary"  ios="ios-arrow-dropdown-circle" md="md-arrow-dropdown-circle"></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\pages\terminados\terminados.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_listadeseos_service__["a" /* ListaDeseosService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], TerminadosComponent);
    return TerminadosComponent;
}());

//# sourceMappingURL=terminados.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_placeholder_pipes__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pendientes_pipes__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_listadeseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terminados_terminados_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';

//PipeTransform


//servicios







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__["a" /* AgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_placeholder_pipes__["a" /* PlaceHolderPipe */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pendientes_pipes__["a" /* PendientesPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__["a" /* DetalleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__["a" /* AgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__["a" /* DetalleComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_listadeseos_service__["a" /* ListaDeseosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\GIT_ANGULAR\5. tabsApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\GIT_ANGULAR\5. tabsApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listas__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__listas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_item__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lista_item__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = (function () {
    function Lista(nombre) {
        this.nombre = nombre;
        this.terminado = false;
    }
    return Lista;
}());

//# sourceMappingURL=listas.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = (function () {
    function ListaItem() {
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceHolderPipe = (function () {
    function PlaceHolderPipe() {
    }
    PlaceHolderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    PlaceHolderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'placeholder'
        })
    ], PlaceHolderPipe);
    return PlaceHolderPipe;
}());

//# sourceMappingURL=placeholder.pipes.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PendientesPipe = (function () {
    function PendientesPipe() {
    }
    PendientesPipe.prototype.transform = function (listas, estado) {
        if (estado === void 0) { estado = false; }
        var listaFiltrada = [];
        for (var _i = 0, listas_1 = listas; _i < listas_1.length; _i++) {
            var lista = listas_1[_i];
            console.log(lista.terminado);
            if (lista.terminado == estado) {
                console.log('entra if' + lista.nombre);
                listaFiltrada.push(lista);
            }
            else {
                console.log('entra if' + lista.nombre);
            }
        }
        console.log(listaFiltrada);
        return listaFiltrada;
    };
    PendientesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pendientes',
            pure: false
        })
    ], PendientesPipe);
    return PendientesPipe;
}());

//# sourceMappingURL=pendientes.pipes.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeseosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaDeseosService = (function () {
    function ListaDeseosService() {
        this.listas = [];
        // let lista1=new Lista('compras de supermercado');
        // let lista2=new Lista('juegos');
        // let lista3=new Lista('Cosas de la universidad');
        // this.listas.push(lista1);
        // this.listas.push(lista2);
        // this.listas.push(lista3);
        this.cargarData();
        console.log('servicio ok!!');
    }
    ListaDeseosService.prototype.actualizarData = function () {
        localStorage.setItem("data", JSON.stringify(this.listas));
    };
    ListaDeseosService.prototype.cargarData = function () {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    };
    ListaDeseosService.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.actualizarData();
    };
    ListaDeseosService.prototype.eliminarLista = function (idx) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    };
    ListaDeseosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListaDeseosService);
    return ListaDeseosService;
}());

//# sourceMappingURL=listadeseos.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map