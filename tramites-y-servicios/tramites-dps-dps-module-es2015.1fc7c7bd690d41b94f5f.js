(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-dps-dps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/dps/dps.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/dps/components/dps/dps.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dps-container\" class=\"row\">\r\n    <app-tramite-detail class=\"col-md-12\" [name]=\"'consulta'\" [owner]=\"'dps'\" [id]=\"'20962X'\">\r\n    </app-tramite-detail>\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T45250'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n   <app-notifications *ngIf=\"activoMensajeSuccess\" class=\"col-12 \" [typeMessage]=\"'success'\" [message]=\"''\" [title]=\"'Certificado generado'\" [show]=\"true\"></app-notifications>\r\n    <app-notifications *ngIf=\"activoMensajeSuccessValidado\"  class=\"col-12 \" [typeMessage]=\"'success'\" [message]=\"''\" [title]=\"'Certificado validado'\" [show]=\"true\"></app-notifications>\r\n  \r\n    <div class=\"col-12 pb-3\" *ngIf=\"invalidForm\">\r\n        <app-notifications [typeMessage]=\"'error'\" [message]=\"mensajeMostrar\" [title]=\"'Lo sentimos'\"\r\n            [show]=\"invalidForm\"></app-notifications>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card govco-card p-3 mb-3\">\r\n    <div class=\"card-body pt-0 pb-0\">\r\n        <div class=\"row\" id=\"tipoBusquedaForm\">\r\n            <h3 class=\"col-md-4 mb-auto mt-auto title-section\">1. Tipo de consulta</h3>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"mt-1\">\r\n                    <label class=\"radiobutton-govco\">\r\n                        <input type=\"radio\" (click)=\"opcion='generar'\" (change)=\"changeValue($event)\" name=\"radio\"\r\n                            checked=\"checked\" id=\"radioGenerarCertificado\" />\r\n                        <span for=\"documento\" class=\"form-group-govco\">Generar certificado</span>\r\n                        <div class=\"radiobutton-govco__indicator\"></div>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"mt-1\">\r\n                    <label class=\"radiobutton-govco\">\r\n                        <input type=\"radio\" (click)=\"opcion='validar'\" name=\"radio\" id=\"radioValidarCertificado\" />\r\n                        <span for=\"registro\" class=\"form-group-govco\">Validar certificado</span>\r\n                        <div class=\"radiobutton-govco__indicator\"></div>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"opcion == 'generar'\" class=\"card govco-card col-12 pb-3\">\r\n    <app-vinculacion-form (mensajeError)=\"showError($event)\" (showSuccess)=\"changeSuccess($event)\">\r\n    </app-vinculacion-form>\r\n</div>\r\n\r\n<div *ngIf=\"opcion == 'validar'\" class=\"card govco-card col-12 pb-3\">\r\n    <app-verificar-form (mensajeError)=\"showError($event)\" (showSuccess)=\"changeSuccessValidado($event)\"></app-verificar-form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/verificar-form/verificar-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/dps/components/verificar-form/verificar-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-header pt-0\">\r\n    <div class=\"col-12 m-auto p-0\">\r\n        <h3 class=\"m-0 title-section\">Datos de la solicitud</h3>\r\n    </div>\r\n</div>\r\n<div class=\"card-body\">\r\n    <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\" [ngClass]=\"{'select-govco--error' : invalidForm }\">\r\n                <label class=\"form-group-govco\">Código de verificación *</label>\r\n                <input class=\"form-control input-govco\" (change)=\"changeValue($event)\"\r\n                    (keypress)=\"onKeyValidNumber($event)\"\r\n                    [ngClass]=\"{'is-invalid' : invalidForm }\" type=\"number\" placeholder=\"Ej: 102039049\"\r\n                    formControlName=\"documento\" />\r\n                <div *ngIf=\"invalidForm\" class=\"invalid-feedback invalid-label-dps\">\r\n                    Campo sin diligenciar\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row recaptcha-container\">\r\n                <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n\r\n                <div *ngIf=\"invalidRecaptcha\" class=\"invalid-label-dps-recaptcha\">\r\n                    Campo sin diligenciar\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"agenda-footer col-md-12 text-center mt-3\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"search()\">VERIFICAR</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-header pt-0\">\r\n    <div class=\"col-12 m-auto p-0\">\r\n        <h3 class=\"m-0 title-section\">Datos de la solicitud</h3>\r\n    </div>\r\n</div>\r\n<div class=\"card-body\">\r\n    <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" >\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group select-govco\" [ngClass]=\"{'select-govco--error' : invalidTipoDocumento }\">\r\n                <label class=\"form-group-govco\" for=\"selector-tipo-documento\" >Tipo documento *</label>\r\n                <app-dropdownlist ngDefaultControl  formControlName=\"tipo_documento\" \r\n                (change)=\"changeValue($event)\"\r\n                (keypress)=\"onKeyValidNumber($event)\"\r\n                placeholder = \"Ej: Cédula ciudadania\" [items]=\"tiposDocumentos\"></app-dropdownlist>  \r\n                <div *ngIf=\"invalidTipoDocumento\" class=\"invalid-label-dps\">\r\n                    Campo sin diligenciar\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\" [ngClass]=\"{'select-govco--error' : invalidDocumento }\" >\r\n                <label class=\"form-group-govco\" for=\"documento\">Número de documento *</label>\r\n                <input class=\"form-control input-govco\" (change)=\"changeValue($event)\" \r\n                (keypress)=\"onKeyValidNumber($event)\"\r\n                #inputDocumento [ngClass]=\"{'is-invalid' : invalidDocumento }\" type=\"number\" placeholder=\"Ej: 102039049\" formControlName=\"documento\"  />\r\n                <div *ngIf=\"invalidDocumento\" class=\"invalid-feedback invalid-label-dps\">\r\n                    Campo sin diligenciar\r\n                </div>\r\n            </div>                \r\n        </div>\r\n\r\n        <div class=\"col-md-12 select-govco--error\" >\r\n                <div class=\"form-group row recaptcha-container \" [ngClass]=\"{'select-govco--error' : invalidRecaptcha }\" >\r\n                    <re-captcha formControlName=\"recaptcha\" [ngClass]=\"{'is-invalid' : invalidRecaptcha }\" ></re-captcha> \r\n                    <br>\r\n                    <div *ngIf=\"invalidRecaptcha\" class=\"invalid-label-dps-recaptcha\">\r\n                            Campo sin diligenciar\r\n                    </div> \r\n                </div>  \r\n            \r\n  \r\n        </div> \r\n        \r\n    </div>\r\n\r\n    <div class=\"agenda-footer col-md-12 text-center\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"search()\">GENERAR</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tramites/dps/components/dps/dps.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/tramites/dps/components/dps/dps.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-middle {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZHBzL2NvbXBvbmVudHMvZHBzL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGRwc1xcY29tcG9uZW50c1xcZHBzXFxkcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL2Rwcy9kcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZHBzL2NvbXBvbmVudHMvZHBzL2Rwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWlkZGxle1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIH0iLCIuYnRuLW1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/dps/components/dps/dps.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tramites/dps/components/dps/dps.component.ts ***!
  \**************************************************************/
/*! exports provided: DpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpsComponent", function() { return DpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dps-utils.service */ "./src/app/tramites/dps/services/dps-utils.service.ts");




let DpsComponent = class DpsComponent {
    constructor(dpsUtilsService) {
        this.dpsUtilsService = dpsUtilsService;
        this.formDps = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
    }
};
DpsComponent.ctorParameters = () => [
    { type: _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_3__["DpsUtilsService"] }
];
DpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dps',
        template: __webpack_require__(/*! raw-loader!./dps.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/dps/dps.component.html"),
        styles: [__webpack_require__(/*! ./dps.component.scss */ "./src/app/tramites/dps/components/dps/dps.component.scss")]
    })
], DpsComponent);



/***/ }),

/***/ "./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-dps-advice {\n  margin-top: 2rem;\n}\n.main-dps-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n.ng-invalid + label {\n  border-color: red;\n  color: red;\n}\n.succes-toast-dps {\n  border-radius: 10px;\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 5px 15px;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-bottom: 22px;\n}\n.radiobutton-govco {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZHBzL2NvbXBvbmVudHMvb3BjaW9uZXMtZHBzL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGRwc1xcY29tcG9uZW50c1xcb3BjaW9uZXMtZHBzXFxvcGNpb25lcy1kcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL29wY2lvbmVzLWRwcy9vcGNpb25lcy1kcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURJQztFQUNHLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksOEJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL29wY2lvbmVzLWRwcy9vcGNpb25lcy1kcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kcHMtYWR2aWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG4gICAgLmdvdmNvLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gLm5nLWludmFsaWQgKyBsYWJlbCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0gXHJcblxyXG4uc3VjY2VzLXRvYXN0LWRwc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi1ib3R0b206MjJweDtcclxufVxyXG5cclxuLnJhZGlvYnV0dG9uLWdvdmNve1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59IiwiLm1haW4tZHBzLWFkdmljZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4ubWFpbi1kcHMtYWR2aWNlIC5nb3Zjby1jYXJkIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubmctaW52YWxpZCArIGxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWNjZXMtdG9hc3QtZHBzIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDAgNnB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbi5yYWRpb2J1dHRvbi1nb3ZjbyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpcionesDpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionesDpsComponent", function() { return OpcionesDpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json");
var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json", 1);




let OpcionesDpsComponent = class OpcionesDpsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.opcion = 'generar';
        this.invalidForm = false;
        this.mensajeMostrar = '';
        this.activoMensajeSuccess = false;
        this.activoMensajeSuccessValidado = false;
    }
    ngOnInit() {
    }
    search() {
    }
    reset() {
        this.showError('0');
        this.changeSuccess(false);
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    changeValue() {
        this.reset();
        this.setStep("2");
    }
    showError(codigoError) {
        this.invalidForm = true;
        if (codigoError === '0') {
            this.invalidForm = false;
        }
        else if (codigoError === '2') {
            this.mensajeMostrar = _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_3__.messages["search-empty-vinculacion"];
        }
        else if (codigoError === '3') {
            this.mensajeMostrar = _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_3__.messages["search-empty-verificacion"];
        }
    }
    changeSuccess(activo) {
        this.activoMensajeSuccess = activo;
        this.activoMensajeSuccessValidado = false;
    }
    changeSuccessValidado(activo) {
        this.activoMensajeSuccessValidado = activo;
        this.activoMensajeSuccess = false;
    }
};
OpcionesDpsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
OpcionesDpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opciones-dps',
        template: __webpack_require__(/*! raw-loader!./opciones-dps.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.html"),
        styles: [__webpack_require__(/*! ./opciones-dps.component.scss */ "./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.scss")]
    })
], OpcionesDpsComponent);



/***/ }),

/***/ "./src/app/tramites/dps/components/verificar-form/verificar-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tramites/dps/components/verificar-form/verificar-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  /* Edge */\n  color: #93adc7 !important;\n}\n\n.input-govco::-webkit-input-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::-moz-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::-ms-input-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::placeholder {\n  color: #93adc7 !important;\n}\n\n.input-disabled-select {\n  color: #93adc7 !important;\n}\n\n.btn-middle {\n  margin-top: 10px;\n}\n\nselect:required:invalid {\n  color: #93adc7 !important;\n  font-style: italic;\n}\n\n.invalid-label-dps-recaptcha {\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545 !important;\n  width: 100% !important;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.invalid-label-dps {\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n  font-style: italic;\n}\n\n.label-dps-input {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZHBzL2NvbXBvbmVudHMvdmVyaWZpY2FyLWZvcm0vQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcZHBzXFxjb21wb25lbnRzXFx2ZXJpZmljYXItZm9ybVxcdmVyaWZpY2FyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL3ZlcmlmaWNhci1mb3JtL3ZlcmlmaWNhci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQThCLFNBQUE7RUFDMUIseUJBQUE7QUNFSjs7QURLRTtFQUNFLHlCQUFBO0FDR0o7O0FESkU7RUFDRSx5QkFBQTtBQ0dKOztBREpFO0VBQ0UseUJBQUE7QUNHSjs7QURKRTtFQUNFLHlCQUFBO0FDR0o7O0FEQUU7RUFDRSx5QkFBQTtBQ0dKOztBREFFO0VBQ0UsZ0JBQUE7QUNHSjs7QURBRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLDhCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9kcHMvY29tcG9uZW50cy92ZXJpZmljYXItZm9ybS92ZXJpZmljYXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICAgIGNvbG9yOiAjOTNhZGM3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdvdmNvOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWRpc2FibGVkLXNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1taWRkbGV7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdDpyZXF1aXJlZDppbnZhbGlkIHtcclxuICAgIGNvbG9yOiM5M2FkYzcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIC5pbnZhbGlkLWxhYmVsLWRwcy1yZWNhcHRjaGF7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmludmFsaWQtbGFiZWwtZHBze1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIC5sYWJlbC1kcHMtaW5wdXR7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfSIsIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEVkZ2UgKi9cbiAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjOTNhZGM3ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1nb3Zjbzo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZGlzYWJsZWQtc2VsZWN0IHtcbiAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1taWRkbGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zZWxlY3Q6cmVxdWlyZWQ6aW52YWxpZCB7XG4gIGNvbG9yOiAjOTNhZGM3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmludmFsaWQtbGFiZWwtZHBzLXJlY2FwdGNoYSB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaW52YWxpZC1sYWJlbC1kcHMge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmxhYmVsLWRwcy1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/dps/components/verificar-form/verificar-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tramites/dps/components/verificar-form/verificar-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: VerificarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarFormComponent", function() { return VerificarFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json");
var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json", 1);
/* harmony import */ var _verificar_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificar-form */ "./src/app/tramites/dps/components/verificar-form/verificar-form.ts");
/* harmony import */ var _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dps-utils.service */ "./src/app/tramites/dps/services/dps-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let VerificarFormComponent = class VerificarFormComponent {
    constructor(dpsUtilsService, router) {
        this.dpsUtilsService = dpsUtilsService;
        this.router = router;
        this.mensajeError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.invalidRecaptcha = false;
    }
    ngOnInit() {
        this.buscarForm = new _verificar_form__WEBPACK_IMPORTED_MODULE_3__["VerificarForm"]();
        this.form = this.buscarForm.getForm();
        this.messages = {
            searchEmpty: _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2__.messages["search-empty"],
        };
    }
    onKeyValidNumber(event) {
        const e = event;
        let ch = String.fromCharCode(e.keyCode);
        let regEx = new RegExp('^[0-9]*$');
        console.log(e.keyCode);
        if ([46, 8].indexOf(e.keyCode) !== -1) {
            return true;
        }
        console.log(ch);
        if (regEx.test(ch))
            return true;
        else
            return false;
    }
    sendMessage() {
        this.mensajeError.emit('3');
    }
    showMensajeSuccess(activo) {
        this.showSuccess.emit(activo);
    }
    reset() {
        this.invalidForm = false;
        this.mensajeError.emit('0');
        this.showMensajeSuccess(false);
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    changeValue(event) {
        console.log(event);
        /// this.onKeyValidNumber(event);
        this.reset();
        this.setStep("2");
    }
    search() {
        this.invalidForm = false;
        this.invalidRecaptcha = !this.form.get('recaptcha').touched;
        this.showMensajeSuccess(false);
        if (!this.buscarForm.isValid()) {
            this.invalidForm = true;
            return;
        }
        this.dpsUtilsService.sendVerificacion(this.form.value).subscribe((response) => {
            this.setStep("4");
            const blob = new Blob([response], { type: 'application/pdf' });
            if (navigator.msSaveBlob) { // For ie and Edge
                console.log("edge");
                navigator.msSaveBlob(blob, "certificado.pdf");
            }
            else if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                console.log("microsoft");
                window.navigator.msSaveOrOpenBlob(blob, "certificado.pdf");
            }
            else {
                var objectUrl = URL.createObjectURL(blob);
                window.open(objectUrl);
                console.log("otros");
            }
            this.showMensajeSuccess(true);
        }, error => {
            this.setStep("4");
            this.sendMessage();
            return;
        });
    }
};
VerificarFormComponent.ctorParameters = () => [
    { type: _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_4__["DpsUtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VerificarFormComponent.prototype, "mensajeError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VerificarFormComponent.prototype, "showSuccess", void 0);
VerificarFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verificar-form',
        template: __webpack_require__(/*! raw-loader!./verificar-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/verificar-form/verificar-form.component.html"),
        styles: [__webpack_require__(/*! ./verificar-form.component.scss */ "./src/app/tramites/dps/components/verificar-form/verificar-form.component.scss")]
    })
], VerificarFormComponent);



/***/ }),

/***/ "./src/app/tramites/dps/components/verificar-form/verificar-form.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tramites/dps/components/verificar-form/verificar-form.ts ***!
  \**************************************************************************/
/*! exports provided: VerificarForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarForm", function() { return VerificarForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class VerificarForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    getForm() {
        return this.form;
    }
    getFormValues() {
        return this.form.value;
    }
    isValid() {
        return this.form.valid;
    }
}


/***/ }),

/***/ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\n  /* Edge */\n  color: #93adc7 !important;\n}\n\n.input-govco::-webkit-input-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::-moz-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::-ms-input-placeholder {\n  color: #93adc7 !important;\n}\n\n.input-govco::placeholder {\n  color: #93adc7 !important;\n}\n\n.input-disabled-select {\n  color: #93adc7 !important;\n}\n\n.btn-middle {\n  margin-top: 10px;\n}\n\nselect:required:invalid {\n  color: #93adc7 !important;\n}\n\n.invalid-label-dps {\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n  font-style: italic;\n}\n\n.invalid-label-dps-recaptcha {\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545 !important;\n  width: 100% !important;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.label-dps-input {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZHBzL2NvbXBvbmVudHMvdmluY3VsYWNpb24tZm9ybS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxkcHNcXGNvbXBvbmVudHNcXHZpbmN1bGFjaW9uLWZvcm1cXHZpbmN1bGFjaW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uLWZvcm0vdmluY3VsYWNpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUE4QixTQUFBO0VBQzFCLHlCQUFBO0FDRUo7O0FES0U7RUFDRSx5QkFBQTtBQ0dKOztBREpFO0VBQ0UseUJBQUE7QUNHSjs7QURKRTtFQUNFLHlCQUFBO0FDR0o7O0FESkU7RUFDRSx5QkFBQTtBQ0dKOztBREFFO0VBQ0UseUJBQUE7QUNHSjs7QURBRTtFQUNFLGdCQUFBO0FDR0o7O0FEQUU7RUFDRSx5QkFBQTtBQ0dKOztBREFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsOEJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2Rwcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uLWZvcm0vdmluY3VsYWNpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICAgIGNvbG9yOiAjOTNhZGM3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdvdmNvOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWRpc2FibGVkLXNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1taWRkbGV7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Q6cmVxdWlyZWQ6aW52YWxpZCB7XHJcbiAgICBjb2xvcjojOTNhZGM3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW52YWxpZC1sYWJlbC1kcHN7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLmludmFsaWQtbGFiZWwtZHBzLXJlY2FwdGNoYXtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgLmxhYmVsLWRwcy1pbnB1dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9IiwiOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogRWRnZSAqL1xuICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWdvdmNvOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTNhZGM3ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1kaXNhYmxlZC1zZWxlY3Qge1xuICBjb2xvcjogIzkzYWRjNyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNlbGVjdDpyZXF1aXJlZDppbnZhbGlkIHtcbiAgY29sb3I6ICM5M2FkYzcgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtbGFiZWwtZHBzIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pbnZhbGlkLWxhYmVsLWRwcy1yZWNhcHRjaGEge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmxhYmVsLWRwcy1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VinculacionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculacionFormComponent", function() { return VinculacionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json");
var _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/dps-strings.json */ "./src/assets/string-resources/tramites/dps-strings.json", 1);
/* harmony import */ var _vinculacion_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vinculacion-form */ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dps-utils.service */ "./src/app/tramites/dps/services/dps-utils.service.ts");






let VinculacionFormComponent = class VinculacionFormComponent {
    constructor(dpsUtilsService, router) {
        this.dpsUtilsService = dpsUtilsService;
        this.router = router;
        this.mensajeError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tiposDocumentos = this.dpsUtilsService.getTiposDocumento();
        this.invalidForm = false;
        this.invalidTipoDocumento = false;
        this.invalidDocumento = false;
        this.invalidRecaptcha = false;
    }
    sendMessage() {
        this.mensajeError.emit('2');
    }
    showMensajeSuccess(activo) {
        this.showSuccess.emit(activo);
    }
    ngOnInit() {
        this.buscarForm = new _vinculacion_form__WEBPACK_IMPORTED_MODULE_3__["VinculacionForm"]();
        this.showMensajeSuccess(false);
        this.form = this.buscarForm.getForm();
        this.messages = {
            searchEmpty: _stringResources_tramites_dps_strings_json__WEBPACK_IMPORTED_MODULE_2__.messages["search-empty"],
        };
    }
    reset() {
        this.invalidForm = false;
        this.mensajeError.emit('0');
        this.showMensajeSuccess(false);
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    changeValue() {
        this.reset();
        this.setStep("2");
    }
    onKeyValidNumber(event) {
        const e = event;
        let ch = String.fromCharCode(e.keyCode);
        let regEx = new RegExp('^[0-9]*$');
        console.log(e.keyCode);
        if ([46, 8].indexOf(e.keyCode) !== -1) {
            return true;
        }
        console.log(ch);
        if (regEx.test(ch))
            return true;
        else
            return false;
    }
    search() {
        this.invalidForm = false;
        this.mensajeError.emit('0');
        this.invalidTipoDocumento = false;
        this.invalidDocumento = !this.form.get('documento').valid;
        this.invalidRecaptcha = !this.form.get('recaptcha').touched;
        if (this.form.value.tipo_documento == "" || this.form.value.tipo_documento == null) {
            this.invalidTipoDocumento = true;
        }
        if (!this.buscarForm.isValid()) {
            this.invalidForm = true;
            return;
        }
        this.dpsUtilsService.sendVinculacion(this.form.value).subscribe((response) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            if (navigator.msSaveBlob) { // For ie and Edge
                console.log("microsoft edge");
                navigator.msSaveBlob(blob, "certificado.pdf");
            }
            else if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                console.log("microsoft");
                window.navigator.msSaveOrOpenBlob(blob, "certificado.pdf");
            }
            else {
                var objectUrl = URL.createObjectURL(blob);
                window.open(objectUrl);
                console.log("otros");
            }
            this.showMensajeSuccess(true);
            this.setStep("4");
        }, error => {
            this.sendMessage();
            this.setStep("4");
            return;
        });
    }
};
VinculacionFormComponent.ctorParameters = () => [
    { type: _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_5__["DpsUtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VinculacionFormComponent.prototype, "mensajeError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VinculacionFormComponent.prototype, "showSuccess", void 0);
VinculacionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vinculacion-form',
        template: __webpack_require__(/*! raw-loader!./vinculacion-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.html"),
        styles: [__webpack_require__(/*! ./vinculacion-form.component.scss */ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.scss")]
    })
], VinculacionFormComponent);



/***/ }),

/***/ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.ts ***!
  \******************************************************************************/
/*! exports provided: VinculacionForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculacionForm", function() { return VinculacionForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class VinculacionForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            tipo_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    getForm() {
        return this.form;
    }
    getFormValues() {
        return this.form.value;
    }
    isValid() {
        return this.form.valid;
    }
}


/***/ }),

/***/ "./src/app/tramites/dps/dps-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tramites/dps/dps-routing.module.ts ***!
  \****************************************************/
/*! exports provided: DpsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpsRoutingModule", function() { return DpsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dps_dps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dps/dps.component */ "./src/app/tramites/dps/components/dps/dps.component.ts");
/* harmony import */ var _components_opciones_dps_opciones_dps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opciones-dps/opciones-dps.component */ "./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.ts");





const routes = [
    {
        path: "",
        component: _components_dps_dps_component__WEBPACK_IMPORTED_MODULE_3__["DpsComponent"],
        children: [
            {
                path: "",
                component: _components_opciones_dps_opciones_dps_component__WEBPACK_IMPORTED_MODULE_4__["OpcionesDpsComponent"]
            }
        ]
    }
];
let DpsRoutingModule = class DpsRoutingModule {
};
DpsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DpsRoutingModule);



/***/ }),

/***/ "./src/app/tramites/dps/dps.module.ts":
/*!********************************************!*\
  !*** ./src/app/tramites/dps/dps.module.ts ***!
  \********************************************/
/*! exports provided: DpsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpsModule", function() { return DpsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dps-routing.module */ "./src/app/tramites/dps/dps-routing.module.ts");
/* harmony import */ var _components_dps_dps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dps/dps.component */ "./src/app/tramites/dps/components/dps/dps.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_opciones_dps_opciones_dps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/opciones-dps/opciones-dps.component */ "./src/app/tramites/dps/components/opciones-dps/opciones-dps.component.ts");
/* harmony import */ var _components_vinculacion_form_vinculacion_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vinculacion-form/vinculacion-form.component */ "./src/app/tramites/dps/components/vinculacion-form/vinculacion-form.component.ts");
/* harmony import */ var _components_verificar_form_verificar_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verificar-form/verificar-form.component */ "./src/app/tramites/dps/components/verificar-form/verificar-form.component.ts");
/* harmony import */ var _services_dps_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/dps-utils.service */ "./src/app/tramites/dps/services/dps-utils.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");













let DpsModule = class DpsModule {
};
DpsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_dps_dps_component__WEBPACK_IMPORTED_MODULE_5__["DpsComponent"], _components_opciones_dps_opciones_dps_component__WEBPACK_IMPORTED_MODULE_8__["OpcionesDpsComponent"], _components_vinculacion_form_vinculacion_form_component__WEBPACK_IMPORTED_MODULE_9__["VinculacionFormComponent"], _components_verificar_form_verificar_form_component__WEBPACK_IMPORTED_MODULE_10__["VerificarFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dps_routing_module__WEBPACK_IMPORTED_MODULE_4__["DpsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [_services_dps_utils_service__WEBPACK_IMPORTED_MODULE_11__["DpsUtilsService"]],
    })
], DpsModule);



/***/ }),

/***/ "./src/app/tramites/dps/services/dps-utils.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tramites/dps/services/dps-utils.service.ts ***!
  \************************************************************/
/*! exports provided: DpsUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpsUtilsService", function() { return DpsUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let DpsUtilsService = class DpsUtilsService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8081/';
    }
    sendVerificarDps(datosVerificar) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('documento', datosVerificar.documento);
        return this.http
            .get(`ConsultaCertiunidos/ObtenerPersonaUnidosPorCodigoVerificacion`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    sendVinculacion(datosVinculacion) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('numeroDocumento', datosVinculacion.documento)
            .append('tipoDocumento', datosVinculacion.tipo_documento ? datosVinculacion.tipo_documento.value : '');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json")
            .append("angular-show-loading", "true");
        return this.http
            .get(`Dps/Vinculacion`, { headers, params, responseType: "blob" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    sendVerificacion(datosVerificar) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('codigoVerificacion', datosVerificar.documento);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json")
            .append("angular-show-loading", "true");
        return this.http
            .get(`Dps/Verificacion`, { headers, params, responseType: "blob" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    getTiposDocumento() {
        return [
            { value: 'CC', text: 'Cédula de ciudadanía' },
            { value: 'Pasaporte', text: 'Pasaporte' },
            { value: 'TI', text: 'Tarjeta de identidad' },
            { value: 'RC', text: 'Registro Civil con Número Único de Identificación Personal (NUIP)' },
            { value: 'CE', text: 'Cédula de extranjería' },
            { value: 'DNI', text: 'Documento Nacional de Identidad (DNI) del país de origen' },
            { value: 'SCR', text: 'Salvoconducto para refugiado' },
            { value: 'PEP', text: 'Permiso especial de permanencia (PEP) para ciudadanos venezolanos' },
        ];
    }
};
DpsUtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DpsUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DpsUtilsService);



/***/ }),

/***/ "./src/assets/string-resources/tramites/dps-strings.json":
/*!***************************************************************!*\
  !*** ./src/assets/string-resources/tramites/dps-strings.json ***!
  \***************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"search-empty-vinculacion":"El servicio no se encuentra disponible en este momento, te recomendamos: \n1. Intentarlo más tarde.\n2. Recargar la página.","search-empty-verificacion":" No encontramos resultados para la búsqueda realizada, te recomendamos:\n1. Revisar los datos ingresados \n2. Si aún no encuentras lo que buscas, por favor contactar a la entidad prestadora del servicio.","advice":"Recuerde que para se atendido en el consultorio jurídico, debe ser: persona natural de escasos recursos, con ingresos de hasta 3 SMLMV, mayor de edad, que resida en estratos 1,2 y 3. El ministerio de justicia y del derecho se exonera de cualquier circunstancia generada entre el consultorio jurídico y el cuidadano.","registro-minjusticia-terminos":{"title":"Aviso de privacidad y autorización de datos personales trámites en el SITAC del MRE","text":"Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia, pulvinar lobortis per placerat sapien imperdiet molestie bibendum, dignissim ante platea phasellus tempus taciti non. Augue fames pretium neque blandit lectus bibendum molestie eu quisque habitant himenaeos tempus facilisi diam, malesuada porta et magnis montes ornare libero nulla ad eros interdum pellentesque maecenas. Velit auctor penatibus luctus non posuere cubilia quisque platea, proin magnis ultrices conubia dis himenaeos pellentesque dictum est, natoque taciti metus dictumst egestas congue tristique. \n\n Duis ornare nam metus euismod id et orci ante sapien litora nunc, pretium pellentesque consequat curabitur molestie turpis primis hendrerit integer dignissim. Hac et massa nascetur porttitor laoreet arcu, maecenas ante felis himenaeos dignissim aptent urna, ultrices velit sagittis eleifend mus. Ante magna volutpat vulputate interdum venenatis integer sem hac, orci tellus suscipit hendrerit rhoncus primis taciti viverra, dapibus fringilla feugiat netus nascetur posuere urna. \n\n Duis ornare nam metus euismod id et orci ante sapien litora nunc, pretium pellentesque consequat curabitur molestie turpis primis hendrerit integer dignissim. Hac et massa nascetur porttitor laoreet arcu, maecenas ante felis himenaeos dignissim aptent urna, ultrices velit sagittis eleifend mus. Ante magna volutpat vulputate interdum venenatis integer sem hac, orci tellus suscipit hendrerit rhoncus primis taciti viverra, dapibus fringilla feugiat netus nascetur posuere urna. \n\n Duis ornare nam metus euismod id et orci ante sapien litora nunc, pretium pellentesque consequat curabitur molestie turpis primis hendrerit integer dignissim. Hac et massa nascetur porttitor laoreet arcu, maecenas ante felis himenaeos dignissim aptent urna, ultrices velit sagittis eleifend mus. Ante magna volutpat vulputate interdum venenatis integer sem hac, orci tellus suscipit hendrerit rhoncus primis taciti viverra, dapibus fringilla feugiat netus nascetur posuere urna. \n\n Duis ornare nam metus euismod id et orci ante sapien litora nunc, pretium pellentesque consequat curabitur molestie turpis primis hendrerit integer dignissim. Hac et massa nascetur porttitor laoreet arcu, maecenas ante felis himenaeos dignissim aptent urna, ultrices velit sagittis eleifend mus. Ante magna volutpat vulputate interdum venenatis integer sem hac, orci tellus suscipit hendrerit rhoncus primis taciti viverra, dapibus fringilla feugiat netus nascetur posuere urna."}}};

/***/ })

}]);
//# sourceMappingURL=tramites-dps-dps-module-es2015.1fc7c7bd690d41b94f5f.js.map