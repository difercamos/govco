(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-colpensiones-certificado-afiliacion-certificado-afiliacion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colpensionesContainer\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\" [name]=\"'certificado-afiliacion'\" [owner]=\"'colpensiones'\" [id]=\"'S003'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"TramitesNoSuit\" itemid=\"S003\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/S003'\" [type]=\"'redirect'\"></app-btn-volver>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"mensajeDescarga || mensajeEnvioCorreo || failureRequest\">\r\n    <app-notifications [typeMessage]=\"'success'\" [title]=\"'Certificado descargado'\" [show]=\"mensajeDescarga\">\r\n    </app-notifications>\r\n    <app-notifications [typeMessage]=\"'success'\" [title]=\"'El certificado ha sido enviado al correo'\"\r\n      [show]=\"mensajeEnvioCorreo\"></app-notifications>\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.searchEmpty\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"card govco-card col-md-12 p-3 mb-3\">\r\n  <div class=\"card-body p-0\">\r\n    <div class=\"row\" id=\"tipoBusquedaForm\" [formGroup]=\"tipoBusquedaForm\">\r\n      <h3 class=\"col-lg-5 mb-auto mt-auto title-section\">Recibe tu certificado</h3>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"mt-1\">\r\n          <label class=\"radiobutton-govco\">\r\n            <input type=\"radio\" id=\"documento\" value=\"EMAIL\" formControlName=\"tipoConsulta\" (change)=\"setStep(2)\">\r\n            <span id=\"colpensiones-email\" for=\"documento\" class=\"form-group-govco\">\r\n                Correo electrónico\r\n            </span>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div class=\"mt-1\">\r\n          <label class=\"radiobutton-govco\">\r\n            <input type=\"radio\" id=\"registro\" value=\"DESCARGA\" formControlName=\"tipoConsulta\" [checked]='true'\r\n              (change)=\"setStep(2)\">\r\n            <span for=\"registro\" class=\"form-group-govco\">Descarga</span>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card col-md-12 p-0\" id=\"datosSolicitanteGroup\">\r\n  <div class=\"card-header pt-4 pb-0\">\r\n    <h3 class=\"m-0 title-section\">Datos personales</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-12 mb-3\" [formGroup]=\"descargaForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n      [validate]=\"invalidForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\">Tipo de documento *</label>\r\n            <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\" [items]=\"tiposDocumento\"\r\n              (change)=\"changeTipoDocumento()\"></app-dropdownlist>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\">Número de documento *</label>\r\n            <input class=\"form-control input-govco\" [type]=\"typeInput\" formControlName=\"documento\"\r\n              (change)=\"setStep(2)\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12 pb-3\">\r\n      <div class=\"area-note-selago\" *ngIf=\"tipoBusquedaForm.value.tipoConsulta == 'EMAIL'\">\r\n        <div class=\"row\" [formGroup]=\"emailForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n          [validate]=\"invalidForm\">\r\n          <div class=\"col-md-12\">\r\n            <h3>Recibe por correo</h3>\r\n            <em class=\"content\">Tu certificado puede ser enviado a tu correo tan solo ingresando tu dirección de\r\n              correo.</em>\r\n            <div class=\"form-group container-email\">\r\n              <label class=\"form-group-govco\" for=\"email\">Correo electrónico *</label>\r\n              <input class=\"form-control input-govco\" type=\"text\" formControlName=\"email\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row recaptcha-container\" [formGroup]=\"recaptchaForm\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n        appInputValidator [validate]=\"invalidForm\">\r\n        <div class=\"form-group\">\r\n          <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-md-12 certificado-afiliacion-footer\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"consultar()\" [disabled]=\"disabled\">CONSULTAR\r\n\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/certificado-afiliacion-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/certificado-afiliacion-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CertificadoAfiliacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoAfiliacionRoutingModule", function() { return CertificadoAfiliacionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_certificado_afiliacion_certificado_afiliacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/certificado-afiliacion/certificado-afiliacion.component */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.ts");
/* harmony import */ var _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/descargar/descargar.component */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.ts");





var routes = [
    {
        path: '',
        component: _components_certificado_afiliacion_certificado_afiliacion_component__WEBPACK_IMPORTED_MODULE_3__["CertificadoAfiliacionComponent"],
        children: [
            {
                path: '',
                component: _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_4__["DescargarComponent"]
            },
        ]
    }
];
var CertificadoAfiliacionRoutingModule = /** @class */ (function () {
    function CertificadoAfiliacionRoutingModule() {
    }
    CertificadoAfiliacionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CertificadoAfiliacionRoutingModule);
    return CertificadoAfiliacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/certificado-afiliacion.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/certificado-afiliacion.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CertificadoAfiliacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoAfiliacionModule", function() { return CertificadoAfiliacionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _certificado_afiliacion_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificado-afiliacion-routing.module */ "./src/app/tramites/colpensiones/certificado-afiliacion/certificado-afiliacion-routing.module.ts");
/* harmony import */ var _components_certificado_afiliacion_certificado_afiliacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/certificado-afiliacion/certificado-afiliacion.component */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.ts");
/* harmony import */ var _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/descargar/descargar.component */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.ts");
/* harmony import */ var _services_certificado_afiliacion_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/certificado-afiliacion-utils.service */ "./src/app/tramites/colpensiones/certificado-afiliacion/services/certificado-afiliacion-utils.service.ts");











var CertificadoAfiliacionModule = /** @class */ (function () {
    function CertificadoAfiliacionModule() {
    }
    CertificadoAfiliacionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_certificado_afiliacion_certificado_afiliacion_component__WEBPACK_IMPORTED_MODULE_8__["CertificadoAfiliacionComponent"], _components_descargar_descargar_component__WEBPACK_IMPORTED_MODULE_9__["DescargarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _certificado_afiliacion_routing_module__WEBPACK_IMPORTED_MODULE_7__["CertificadoAfiliacionRoutingModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"]
            ],
            providers: [_services_certificado_afiliacion_utils_service__WEBPACK_IMPORTED_MODULE_10__["CertificadoAfiliacionUtilsService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CertificadoAfiliacionModule);
    return CertificadoAfiliacionModule;
}());



/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY29scGVuc2lvbmVzL2NlcnRpZmljYWRvLWFmaWxpYWNpb24vY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1hZmlsaWFjaW9uL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGNvbHBlbnNpb25lc1xcY2VydGlmaWNhZG8tYWZpbGlhY2lvblxcY29tcG9uZW50c1xcY2VydGlmaWNhZG8tYWZpbGlhY2lvblxcY2VydGlmaWNhZG8tYWZpbGlhY2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvY29scGVuc2lvbmVzL2NlcnRpZmljYWRvLWFmaWxpYWNpb24vY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1hZmlsaWFjaW9uL2NlcnRpZmljYWRvLWFmaWxpYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9jb2xwZW5zaW9uZXMvY2VydGlmaWNhZG8tYWZpbGlhY2lvbi9jb21wb25lbnRzL2NlcnRpZmljYWRvLWFmaWxpYWNpb24vY2VydGlmaWNhZG8tYWZpbGlhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge2NvbG9yOiB3aGl0ZTt9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: CertificadoAfiliacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoAfiliacionComponent", function() { return CertificadoAfiliacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CertificadoAfiliacionComponent = /** @class */ (function () {
    function CertificadoAfiliacionComponent() {
    }
    CertificadoAfiliacionComponent.prototype.ngOnInit = function () {
    };
    CertificadoAfiliacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificado-afiliacion',
            template: __webpack_require__(/*! raw-loader!./certificado-afiliacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.html"),
            styles: [__webpack_require__(/*! ./certificado-afiliacion.component.scss */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/certificado-afiliacion/certificado-afiliacion.component.scss")]
        })
    ], CertificadoAfiliacionComponent);
    return CertificadoAfiliacionComponent;
}());



/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".certificado-afiliacion-footer {\n  display: block;\n  padding-top: 10px;\n  text-align: center;\n  margin: auto;\n}\n\n.main-colpensiones-advice {\n  margin-top: 2rem;\n}\n\n.main-colpensiones-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n\n.line-border {\n  border-radius: 15px;\n  border: 1px solid #c5ddf2;\n  padding: 10px;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n.container-email {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY29scGVuc2lvbmVzL2NlcnRpZmljYWRvLWFmaWxpYWNpb24vY29tcG9uZW50cy9kZXNjYXJnYXIvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcY29scGVuc2lvbmVzXFxjZXJ0aWZpY2Fkby1hZmlsaWFjaW9uXFxjb21wb25lbnRzXFxkZXNjYXJnYXJcXGRlc2Nhcmdhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvY29scGVuc2lvbmVzL2NlcnRpZmljYWRvLWFmaWxpYWNpb24vY29tcG9uZW50cy9kZXNjYXJnYXIvZGVzY2FyZ2FyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENFO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQ0NOOztBREdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NvbHBlbnNpb25lcy9jZXJ0aWZpY2Fkby1hZmlsaWFjaW9uL2NvbXBvbmVudHMvZGVzY2FyZ2FyL2Rlc2Nhcmdhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZXJ0aWZpY2Fkby1hZmlsaWFjaW9uLWZvb3RlcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi1jb2xwZW5zaW9uZXMtYWR2aWNlIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAuZ292Y28tY2FyZCB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbn1cclxuLmxpbmUtYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTcsIDIyMSwgMjQyKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1lbWFpbHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiIsIi5jZXJ0aWZpY2Fkby1hZmlsaWFjaW9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYWluLWNvbHBlbnNpb25lcy1hZHZpY2Uge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLm1haW4tY29scGVuc2lvbmVzLWFkdmljZSAuZ292Y28tY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmxpbmUtYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1ZGRmMjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250YWluZXItZW1haWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DescargarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescargarComponent", function() { return DescargarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stringResources_tramites_certificado_afiliacion_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/certificado-afiliacion.json */ "./src/assets/string-resources/tramites/certificado-afiliacion.json");
var _stringResources_tramites_certificado_afiliacion_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/certificado-afiliacion.json */ "./src/assets/string-resources/tramites/certificado-afiliacion.json", 1);
/* harmony import */ var _services_certificado_afiliacion_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/certificado-afiliacion-utils.service */ "./src/app/tramites/colpensiones/certificado-afiliacion/services/certificado-afiliacion-utils.service.ts");
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);






var DescargarComponent = /** @class */ (function () {
    function DescargarComponent(fb, certificadoAfiliacionUtils) {
        this.fb = fb;
        this.certificadoAfiliacionUtils = certificadoAfiliacionUtils;
        this.invalidForm = false;
        this.failureRequest = false;
        this.mensajeDescarga = false;
        this.mensajeEnvioCorreo = false;
        this.typeInput = 'text';
        this.disabled = '';
        this.tipoBusquedaForm = this.fb.group({
            tipoConsulta: ['']
        });
        this.descargaForm = this.fb.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_5__.regexp.numeric)])],
        });
        this.emailForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_5__.regexp.email)])]
        });
        this.recaptchaForm = this.fb.group({
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getParams();
    }
    DescargarComponent.prototype.ngOnInit = function () {
        this.messages = {
            searchEmpty: _stringResources_tramites_certificado_afiliacion_json__WEBPACK_IMPORTED_MODULE_3__.messages.searchEmpty
        };
    };
    DescargarComponent.prototype.getParams = function () {
        this.tiposDocumento = this.certificadoAfiliacionUtils.getTiposDocumento();
    };
    DescargarComponent.prototype.setStep = function (step) {
        var s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
        if (step == '2') {
            this.mensajeDescarga = false;
            this.mensajeEnvioCorreo = false;
        }
    };
    DescargarComponent.prototype.consultar = function () {
        var _this = this;
        this.disabled = 'true';
        // Error validación del formulario
        if (this.tipoBusquedaForm.value.tipoConsulta == 'EMAIL') {
            if (!this.emailForm.valid || !this.descargaForm.valid || !this.recaptchaForm.valid) {
                this.invalidForm = true;
                this.disabled = '';
                return;
            }
            // --Datos para enviar
            this.datosSolicitante = {
                tipoDocumento: this.descargaForm.value.tipoDocumento.value,
                documento: this.descargaForm.value.documento,
                email: this.emailForm.value.email
            };
            window.scroll(0, 0);
            this.certificadoAfiliacionUtils.enviar(this.datosSolicitante)
                .subscribe(function (data) {
                _this.mensajeEnvioCorreo = true;
                _this.mensajeDescarga = false;
                _this.failureRequest = false;
                _this.descargaForm.reset();
                _this.emailForm.reset();
                _this.recaptchaForm.reset();
                _this.disabled = '';
            }, function (error) {
                _this.failureRequest = true;
                _this.mensajeDescarga = false;
                _this.mensajeEnvioCorreo = false;
                _this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
                _this.disabled = '';
            });
            this.setStep('4');
            return;
        }
        if (!this.descargaForm.valid || !this.recaptchaForm.valid) {
            this.invalidForm = true;
            this.disabled = '';
            return;
        }
        // Success validación del formulario
        // --Datos para enviar
        this.datosSolicitante = {
            tipoDocumento: this.descargaForm.value.tipoDocumento.value,
            documento: this.descargaForm.value.documento,
            email: null
        };
        // Petición POST
        this.certificadoAfiliacionUtils.descargar(this.datosSolicitante)
            .subscribe(function (data) {
            _this.mensajeEnvioCorreo = false;
            _this.mensajeDescarga = true;
            _this.failureRequest = false;
            window.scroll(0, 0);
            var newBlob = new Blob([data], { type: 'application/pdf' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && _this.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                _this.descargaForm.reset();
                _this.emailForm.reset();
                _this.recaptchaForm.reset();
                _this.disabled = '';
                return;
            }
            // Otros navegadores
            var downloadURL = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = _this.datosSolicitante.tipoDocumento + '' + _this.datosSolicitante.documento + '.pdf';
            link.click();
            _this.descargaForm.reset();
            _this.emailForm.reset();
            _this.recaptchaForm.reset();
            _this.disabled = '';
            return;
        }, function (error) {
            _this.failureRequest = true;
            _this.mensajeDescarga = false;
            _this.mensajeEnvioCorreo = false;
            _this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            window.scroll(0, 0);
            _this.disabled = '';
            return;
        });
        this.setStep('4');
    };
    DescargarComponent.prototype.changeTipoDocumento = function () {
        this.setStep('2');
        this.descargaForm.get('documento').setValue('');
    };
    DescargarComponent.prototype.isIE = function () {
        var ua = navigator.userAgent;
        var isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    };
    DescargarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_certificado_afiliacion_utils_service__WEBPACK_IMPORTED_MODULE_4__["CertificadoAfiliacionUtilsService"] }
    ]; };
    DescargarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descargar',
            template: __webpack_require__(/*! raw-loader!./descargar.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.html"),
            styles: [__webpack_require__(/*! ./descargar.component.scss */ "./src/app/tramites/colpensiones/certificado-afiliacion/components/descargar/descargar.component.scss")]
        })
    ], DescargarComponent);
    return DescargarComponent;
}());



/***/ }),

/***/ "./src/app/tramites/colpensiones/certificado-afiliacion/services/certificado-afiliacion-utils.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/tramites/colpensiones/certificado-afiliacion/services/certificado-afiliacion-utils.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CertificadoAfiliacionUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoAfiliacionUtilsService", function() { return CertificadoAfiliacionUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CertificadoAfiliacionUtilsService = /** @class */ (function () {
    function CertificadoAfiliacionUtilsService(http) {
        this.http = http;
        this.urlTramite = {
            descargar: 'colpensiones/CertificadoAfiliacion/descargar',
            enviar: 'colpensiones/CertificadoAfiliacion/enviar',
        };
    }
    CertificadoAfiliacionUtilsService.prototype.getTiposDocumento = function () {
        this.tiposDocumento = [
            { value: 'CC', text: 'CC - Cédula de ciudadanía' },
            { value: 'CE', text: 'CE - Cédula de extranjería' },
            { value: 'TI', text: 'TI - Tarjeta de identidad' },
            { value: 'PA', text: 'PA - Pasaporte' },
            { value: 'CD', text: 'CD - Carnet Diplomático' }
        ];
        return this.tiposDocumento;
    };
    // Generar certificado
    CertificadoAfiliacionUtilsService.prototype.descargar = function (item) {
        return this.http.post(this.urlTramite.descargar, item, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    };
    // Enviar correo
    CertificadoAfiliacionUtilsService.prototype.enviar = function (item) {
        return this.http.post(this.urlTramite.enviar, item, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    };
    CertificadoAfiliacionUtilsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CertificadoAfiliacionUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CertificadoAfiliacionUtilsService);
    return CertificadoAfiliacionUtilsService;
}());



/***/ }),

/***/ "./src/assets/string-resources/tramites/certificado-afiliacion.json":
/*!**************************************************************************!*\
  !*** ./src/assets/string-resources/tramites/certificado-afiliacion.json ***!
  \**************************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"searchEmpty":"No encontramos resultados para la busqueda realizada:  \n  1. Revisar los datos ingresados.  \n  2. Si aún no encuantras lo que buscas, contáctanos"}};

/***/ })

}]);
//# sourceMappingURL=tramites-colpensiones-certificado-afiliacion-certificado-afiliacion-module-es5.c767043fcf2f6d1ee68d.js.map