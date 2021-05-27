(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-mintransporte-licencia-conduccion-licencia-conduccion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Sección de apostilla -->\r\n<div id=\"apostilla-section\" class=\"area-note-selago\">\r\n    <div class=\"content\">\r\n        <p class=\"p-2 mb-1\"> <i>{{ messages.apostillaMessage }}</i></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <a class=\"btn-link\" [href]=\"messages.cancilleriaUrl\">\r\n            {{ messages.apostillaButton }}\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"licencia-conduccion-container\" class=\"row\">\r\n    <app-tramite-detail class=\"col-md-12\"\r\n        [name] = \"'licencia-conduccion'\"\r\n        [owner] = \"'mintransporte'\" \r\n        [id] = \"'S002'\"\r\n    >\r\n    </app-tramite-detail>\r\n\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"TramitesNoSuit\" itemid=\"S002\" step=\"2\"></govco-area-servicios>            \r\n        <app-apostilla></app-apostilla>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/S002'\" [type]=\"'redirect'\" ></app-btn-volver>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"solicitar-certificado-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 pb-3\" *ngIf=\"invalidForm || successForm\">\r\n            <app-notifications [typeMessage]=\"currentMessage.type\" [message]=\"currentMessage.message\" [title]=\"currentMessage.title\" [show]=\"invalidForm || successForm\"></app-notifications>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" [formGroup]=\"solicitudForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n        <div class=\"col-md-12 mb-3\">\r\n            <div class=\"card govco-card\">\r\n                <div class=\"card-header p-0 pr-2\">\r\n                    <div class=\"d-flex bd-highlight mb-1\">\r\n                        <div class=\"p-2 bd-highlight\">\r\n                            <h3 class=\"title-section mb-0\">{{messages.titleDatosPersonales}}</h3>\r\n                        </div>\r\n                        <div class=\"ml-auto p-2 bd-highlight\">\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"govco-icon govco-icon-peso-col-cn icon-sin-costo\"></div>\r\n                                <label class=\"form-group-govco btn-symbolic-govco_title btn-symbolic-govco_title--right m-auto pl-1\">Trámite sin costo</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-2 pl-2 pr-0\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"primerNombre\" class=\"form-group-govco\">Primer nombre *</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"primerNombre\" maxlength=\"50\"/>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"segundoNombre\" class=\"form-group-govco\">Segundo nombre</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"segundoNombre\" maxlength=\"50\"/>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"primerApellido\" class=\"form-group-govco\">Primer apellido *</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"primerApellido\" maxlength=\"50\"/>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"segundoApellido\" class=\"form-group-govco\">Segundo apellido</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"segundoApellido\" maxlength=\"50\"/>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6 select-govco mb-3\">\r\n                                <label for=\"tipoDocumento\" class=\"form-group-govco\">Tipo de documento *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\" placeholder = \"Por ejemplo: Cédula\" [items]=\"list.tiposDocumento\"></app-dropdownlist>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"numeroIdentificacion\" class=\"form-group-govco\">Identificación *</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"numeroIdentificacion\" maxlength=\"16\"/>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label for=\"correoElectronico\" class=\"form-group-govco\">Correo electrónico *</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" formControlName=\"correoElectronico\" maxlength=\"256\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 mb-3\">\r\n            <div class=\"card govco-card\">\r\n                <div class=\"card-header pt-1 pl-2\">\r\n                    <h3 class=\"title-section mb-0\">{{messages.titleDatosDestino}}</h3>\r\n                </div>\r\n                <div class=\"card-body pt-3 pl-2 pr-0\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-6 select-govco mb-3\">\r\n                                <label for=\"tipoEntidadDestino\" class=\"form-group-govco\">Tipo de entidad de destino *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"tipoEntidadDestino\" placeholder = \"Por ejemplo: Consulado\" [items]=\"list.entidades\"></app-dropdownlist>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6 select-govco mb-3\">\r\n                                <label for=\"paisDestino\" class=\"form-group-govco\">País de destino *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"paisDestino\"\r\n                                    placeholder = \"Por ejemplo: Afganistan\"\r\n                                    [items]=\"list.paises\"\r\n                                    [selected]=\"paisSelected\"\r\n                                    [isDisabled]=\"paisReadOnly\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card govco-card\">\r\n                <div class=\"card-header pt-1 pl-2\">\r\n                    <h3 class=\"title-section mb-0\">{{messages.titleAutorizacion}}</h3>\r\n                </div>\r\n                <div class=\"card-body pt-3 pl-2 pr-0\">\r\n                    <div class=\"col-lg-12\">\r\n                        <label class=\"chk-govco\">\r\n                            <input type=\"checkbox\"  id=\"showPassword\" (click)=\"aceptarTerminos()\"/>\r\n                            <label for=\"showPassword\" class=\"govco-register-terminos\">\r\n                                <i>Autorizo al ministerio de transporte para el uso de mis datos personales\r\n                                según los términos y condiciones, disponibles</i><a class=\"btn-low\" (click)=\"showTerms()\">\r\n                                    AQUÍ\r\n                                </a>\r\n                            </label>\r\n                            <div class=\"chk-govco__indicator\"></div>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"col-md-12 m-4\" >\r\n                        <div class=\"row recaptcha-container\" >\r\n                            <div class=\"form-group\">\r\n                                <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12 solicitud-footer\">\r\n                        <button class=\"btn btn-round btn-middle wb-150\" (click)=\"resetForm()\" >Limpiar</button>\r\n                        <button id=\"save-user\" class=\"btn btn-round btn-high wb-150\" (click)=\"solicitar()\" >Solicitar</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#apostilla-section {\n  margin-bottom: 1rem;\n}\n#apostilla-section .card-header {\n  background: none;\n  border-bottom: none !important;\n  text-align: justify;\n}\n#apostilla-section .card-footer {\n  background: none;\n  border-top: none !important;\n  text-align: center;\n}\n#apostilla-section a {\n  color: #007bff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhbnNwb3J0ZS9saWNlbmNpYS1jb25kdWNjaW9uL2NvbXBvbmVudHMvYXBvc3RpbGxhL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYW5zcG9ydGVcXGxpY2VuY2lhLWNvbmR1Y2Npb25cXGNvbXBvbmVudHNcXGFwb3N0aWxsYVxcYXBvc3RpbGxhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFuc3BvcnRlL2xpY2VuY2lhLWNvbmR1Y2Npb24vY29tcG9uZW50cy9hcG9zdGlsbGEvYXBvc3RpbGxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7QUNBSjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWludHJhbnNwb3J0ZS9saWNlbmNpYS1jb25kdWNjaW9uL2NvbXBvbmVudHMvYXBvc3RpbGxhL2Fwb3N0aWxsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jYXBvc3RpbGxhLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7ICAgICAgICBcclxuICAgICAgICBib3JkZXItdG9wOiBub25lIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59IiwiI2Fwb3N0aWxsYS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbiNhcG9zdGlsbGEtc2VjdGlvbiAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4jYXBvc3RpbGxhLXNlY3Rpb24gLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYXBvc3RpbGxhLXNlY3Rpb24gYSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ApostillaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApostillaComponent", function() { return ApostillaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/tramites/mintransporte-solicitar-certificado.json */ "./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json");
var _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/mintransporte-solicitar-certificado.json */ "./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json", 1);



var ApostillaComponent = /** @class */ (function () {
    function ApostillaComponent() {
    }
    ApostillaComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    ApostillaComponent.prototype.getMessages = function () {
        this.messages = {
            apostillaMessage: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_2__.messages["apostilla-message"],
            apostillaButton: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_2__.messages["apostilla-message-button"],
            cancilleriaUrl: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_2__.messages["cancilleria-url"]
        };
    };
    ApostillaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apostilla',
            template: __webpack_require__(/*! raw-loader!./apostilla.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.html"),
            styles: [__webpack_require__(/*! ./apostilla.component.scss */ "./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.scss")]
        })
    ], ApostillaComponent);
    return ApostillaComponent;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYW5zcG9ydGUvbGljZW5jaWEtY29uZHVjY2lvbi9jb21wb25lbnRzL2xpY2VuY2lhLWNvbmR1Y2Npb24vbGljZW5jaWEtY29uZHVjY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: LicenciaConduccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenciaConduccionComponent", function() { return LicenciaConduccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LicenciaConduccionComponent = /** @class */ (function () {
    function LicenciaConduccionComponent() {
    }
    LicenciaConduccionComponent.prototype.ngOnInit = function () {
    };
    LicenciaConduccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-licencia-conduccion',
            template: __webpack_require__(/*! raw-loader!./licencia-conduccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.html"),
            styles: [__webpack_require__(/*! ./licencia-conduccion.component.scss */ "./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.scss")]
        })
    ], LicenciaConduccionComponent);
    return LicenciaConduccionComponent;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado-form.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado-form.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SolicitarCertificadoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitarCertificadoForm", function() { return SolicitarCertificadoForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var SolicitarCertificadoForm = /** @class */ (function () {
    function SolicitarCertificadoForm() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    SolicitarCertificadoForm.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            primerNombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            segundoNombre: [''],
            primerApellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            segundoApellido: [''],
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            numeroIdentificacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            correoElectronico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            tipoEntidadDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            paisDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    SolicitarCertificadoForm.prototype.getForm = function () {
        return this.form;
    };
    SolicitarCertificadoForm.prototype.getFormValues = function () {
        return this.form.value;
    };
    SolicitarCertificadoForm.prototype.resetForm = function () {
        this.form.reset();
    };
    SolicitarCertificadoForm.prototype.isValid = function () {
        return this.form.valid;
    };
    return SolicitarCertificadoForm;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solicitud-footer {\n  text-align: center;\n}\n.solicitud-footer button {\n  margin: 10px;\n}\n.icon-sin-costo {\n  line-height: 1;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhbnNwb3J0ZS9saWNlbmNpYS1jb25kdWNjaW9uL2NvbXBvbmVudHMvc29saWNpdGFyLWNlcnRpZmljYWRvL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYW5zcG9ydGVcXGxpY2VuY2lhLWNvbmR1Y2Npb25cXGNvbXBvbmVudHNcXHNvbGljaXRhci1jZXJ0aWZpY2Fkb1xcc29saWNpdGFyLWNlcnRpZmljYWRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFuc3BvcnRlL2xpY2VuY2lhLWNvbmR1Y2Npb24vY29tcG9uZW50cy9zb2xpY2l0YXItY2VydGlmaWNhZG8vc29saWNpdGFyLWNlcnRpZmljYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYW5zcG9ydGUvbGljZW5jaWEtY29uZHVjY2lvbi9jb21wb25lbnRzL3NvbGljaXRhci1jZXJ0aWZpY2Fkby9zb2xpY2l0YXItY2VydGlmaWNhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29saWNpdHVkLWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uLXNpbi1jb3N0byB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59IiwiLnNvbGljaXR1ZC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29saWNpdHVkLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pY29uLXNpbi1jb3N0byB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: SolicitarCertificadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitarCertificadoComponent", function() { return SolicitarCertificadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _solicitar_certificado_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitar-certificado-form */ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado-form.ts");
/* harmony import */ var _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/mintransporte-solicitar-certificado.json */ "./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json");
var _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/mintransporte-solicitar-certificado.json */ "./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json", 1);
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _services_licencia_conduccion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/licencia-conduccion.service */ "./src/app/tramites/mintransporte/licencia-conduccion/services/licencia-conduccion.service.ts");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");








var SolicitarCertificadoComponent = /** @class */ (function () {
    function SolicitarCertificadoComponent(dialog, mintrabajoService, recaptchaService) {
        var _this = this;
        this.dialog = dialog;
        this.mintrabajoService = mintrabajoService;
        this.recaptchaService = recaptchaService;
        this.paisReadOnly = false;
        this.acceptTerms = false;
        //Limpia los datos del formulario y los mensajes de notificación
        this.cleanForm = function () {
            _this.setTramiteStep("2");
            _this.invalidForm = false;
            _this.successForm = false;
            _this.paisSelected = '';
            _this.solicitarCertificadoForm.resetForm();
        };
        this.getMessages();
        this.currentMessage = {
            title: "",
            message: "",
            type: ""
        };
        this.list = {
            entidades: [],
            paises: [],
            tiposDocumento: []
        };
    }
    //Carga inicial
    SolicitarCertificadoComponent.prototype.ngOnInit = function () {
        this.solicitarCertificadoForm = new _solicitar_certificado_form__WEBPACK_IMPORTED_MODULE_2__["SolicitarCertificadoForm"]();
        this.buildForm();
        this.getEntidades();
        this.getPaises();
        this.getTiposDocumento();
        this.changeEntidad();
    };
    //Obtiene los mensajes y titulos que serán usados por la vista
    SolicitarCertificadoComponent.prototype.getMessages = function () {
        this.messages = {
            titleError: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["title-error"],
            errorMessage: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["form-error"],
            formSuccess: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["form-success"],
            termError: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["term-error"],
            recatpchaError: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["recaptcha-error"],
            titleDatosPersonales: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages.form["title-datos-personales"],
            titleDatosDestino: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages.form["title-datos-destino"],
            titleAutorizacion: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages.form["title-autorizacion"],
            privacidadUrl: _stringResources_tramites_mintransporte_solicitar_certificado_json__WEBPACK_IMPORTED_MODULE_3__.messages["privacidad-url"]
        };
    };
    //Obtiene la información de las entidades disponibles
    SolicitarCertificadoComponent.prototype.getEntidades = function () {
        var _this = this;
        this.mintrabajoService.getEntidades().subscribe(function (data) {
            if (data != undefined && data.success === true) {
                _this.list.entidades = data.result;
            }
            else {
                //TODO: controlar errores internos
            }
        }, function (error) {
            console.error(error);
        });
    };
    //obtiene el listado de paises disponibles
    SolicitarCertificadoComponent.prototype.getPaises = function () {
        var _this = this;
        this.mintrabajoService.getPaises().subscribe(function (data) {
            if (data != undefined && data.success === true) {
                _this.list.paises = data.result;
            }
            else {
                //TODO: controlar errores internos
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Obtiene los tipso de documentos permitidos
    SolicitarCertificadoComponent.prototype.getTiposDocumento = function () {
        var _this = this;
        this.mintrabajoService.getTiposDocumento().subscribe(function (data) {
            if (data != undefined && data.success === true) {
                _this.list.tiposDocumento = data.result;
            }
            else {
                //TODO: controlar errores internos
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Obtiene la información del formulario
    SolicitarCertificadoComponent.prototype.buildForm = function () {
        this.solicitudForm = this.solicitarCertificadoForm.getForm();
    };
    SolicitarCertificadoComponent.prototype.changeEntidad = function () {
        var _this = this;
        this.solicitudForm.get('tipoEntidadDestino').valueChanges.subscribe(function (tipoEntidad) {
            if (tipoEntidad != undefined) {
                _this.paisSelected = '';
                if (tipoEntidad.text.toString().toUpperCase().includes("AUTORIDAD DE CONTROL")) {
                    _this.paisSelected = 'CO';
                    //this.paisReadOnly = true;
                    return;
                }
            }
            _this.paisReadOnly = false;
        });
    };
    //Inicia el proceso de reiniciar el formulario
    SolicitarCertificadoComponent.prototype.resetForm = function () {
        var options = [
            {
                name: _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4__.messages["reset-form-modal"]["btn-cancel"],
                value: false,
                styleClass: "btn-middle",
                event: function () { }
            }, {
                name: _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4__.messages["reset-form-modal"]["btn-clean"],
                value: true,
                styleClass: "btn-high",
                event: this.cleanForm
            }
        ];
        this.dialog.openDialogCustom(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4__.messages["reset-form-modal"].title, _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_4__.messages["reset-form-modal"].body, options, "error", false, "lg");
    };
    //Método que es llamado cuando el usuario realiza la acción de solicitar el certificado
    SolicitarCertificadoComponent.prototype.solicitar = function () {
        var _this = this;
        this.setTramiteStep("2");
        this.invalidForm = this.successForm = false;
        if (!this.solicitarCertificadoForm.isValid()) {
            this.invalidForm = true;
            this.showMessage(this.messages.titleError, this.messages.errorMessage, "error");
            return;
        }
        if (!this.acceptTerms) {
            this.invalidForm = true;
            this.showMessage(this.messages.titleError, this.messages.termError, "error");
            return;
        }
        var formValues = this.solicitarCertificadoForm.getFormValues();
        this.recaptchaService.validateServerKey(formValues.recaptcha).subscribe(function (data) {
            if (data["success"] === true) {
                _this.sendData(formValues);
            }
            else {
                _this.showMessage(_this.messages.titleError, _this.messages.recatpchaError, "error");
                return;
            }
        }, function (error) {
            _this.showMessage(_this.messages.titleError, _this.messages.recatpchaError, "error");
            return;
        });
        return;
    };
    //Envía la solicitud
    SolicitarCertificadoComponent.prototype.sendData = function (formData) {
        var _this = this;
        var valores = {
            primerNombre: formData.primerNombre === null ? "" : formData.primerNombre,
            segundoNombre: formData.segundoNombre === null ? "" : formData.segundoNombre,
            primerApellido: formData.primerApellido === null ? "" : formData.primerApellido,
            segundoApellido: formData.segundoApellido === null ? "" : formData.segundoApellido,
            tipoDocumento: formData.tipoDocumento.value,
            numIdentificacion: formData.numeroIdentificacion,
            correoElectronico: formData.correoElectronico,
            tipoEntidad: formData.tipoEntidadDestino.value,
            pais: formData.paisDestino.value
        };
        this.mintrabajoService.postSolicitud(valores).subscribe(function (data) {
            _this.solicitudForm.get('recaptcha').setValue(null);
            if (data["success"] === true) {
                _this.successForm = true;
                _this.setTramiteStep("4");
                _this.showMessage(_this.messages.formSuccess, "", "success");
                _this.solicitudForm.reset();
                document.getElementById("showPassword").checked = false;
                _this.acceptTerms = false;
            }
            else {
                _this.invalidForm = true;
                _this.showMessage(_this.messages.titleError, _this.messages.errorMessage, "error");
                return;
            }
        }, function (error) {
            _this.solicitudForm.get('recaptcha').setValue(null);
            _this.invalidForm = true;
            _this.showMessage(_this.messages.titleError, _this.messages.errorMessage, "error");
            return;
        });
    };
    SolicitarCertificadoComponent.prototype.aceptarTerminos = function () {
        this.acceptTerms = !this.acceptTerms;
        return;
    };
    //Muestra los mensajes de notificación
    SolicitarCertificadoComponent.prototype.showMessage = function (title, message, type) {
        this.currentMessage.type = type;
        this.currentMessage.title = title;
        this.currentMessage.message = message;
        window.scroll(0, 0);
    };
    SolicitarCertificadoComponent.prototype.showTerms = function () {
        window.open(this.messages.privacidadUrl, "_blank");
    };
    SolicitarCertificadoComponent.prototype.setTramiteStep = function (step) {
        var areaServicio = document.getElementsByTagName('govco-area-servicios');
        if (areaServicio != undefined && areaServicio.length > 0) {
            areaServicio[0].setAttribute('steptramites', step);
        }
    };
    SolicitarCertificadoComponent.ctorParameters = function () { return [
        { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
        { type: _services_licencia_conduccion_service__WEBPACK_IMPORTED_MODULE_6__["LicenciaConduccionService"] },
        { type: _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_7__["RecaptchaService"] }
    ]; };
    SolicitarCertificadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solicitar-certificado',
            template: __webpack_require__(/*! raw-loader!./solicitar-certificado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.html"),
            styles: [__webpack_require__(/*! ./solicitar-certificado.component.scss */ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.scss")]
        })
    ], SolicitarCertificadoComponent);
    return SolicitarCertificadoComponent;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/licencia-conduccion-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/licencia-conduccion-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LicenciaConduccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenciaConduccionRoutingModule", function() { return LicenciaConduccionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_licencia_conduccion_licencia_conduccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/licencia-conduccion/licencia-conduccion.component */ "./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.ts");
/* harmony import */ var _components_solicitar_certificado_solicitar_certificado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/solicitar-certificado/solicitar-certificado.component */ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.ts");





var routes = [
    {
        path: "",
        component: _components_licencia_conduccion_licencia_conduccion_component__WEBPACK_IMPORTED_MODULE_3__["LicenciaConduccionComponent"],
        children: [
            {
                path: "",
                component: _components_solicitar_certificado_solicitar_certificado_component__WEBPACK_IMPORTED_MODULE_4__["SolicitarCertificadoComponent"]
            }
        ]
    }
];
var LicenciaConduccionRoutingModule = /** @class */ (function () {
    function LicenciaConduccionRoutingModule() {
    }
    LicenciaConduccionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LicenciaConduccionRoutingModule);
    return LicenciaConduccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/licencia-conduccion.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/licencia-conduccion.module.ts ***!
  \******************************************************************************************/
/*! exports provided: LicenciaConduccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenciaConduccionModule", function() { return LicenciaConduccionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _licencia_conduccion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./licencia-conduccion-routing.module */ "./src/app/tramites/mintransporte/licencia-conduccion/licencia-conduccion-routing.module.ts");
/* harmony import */ var _components_licencia_conduccion_licencia_conduccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/licencia-conduccion/licencia-conduccion.component */ "./src/app/tramites/mintransporte/licencia-conduccion/components/licencia-conduccion/licencia-conduccion.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_solicitar_certificado_solicitar_certificado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/solicitar-certificado/solicitar-certificado.component */ "./src/app/tramites/mintransporte/licencia-conduccion/components/solicitar-certificado/solicitar-certificado.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _services_licencia_conduccion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/licencia-conduccion.service */ "./src/app/tramites/mintransporte/licencia-conduccion/services/licencia-conduccion.service.ts");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");
/* harmony import */ var _components_apostilla_apostilla_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/apostilla/apostilla.component */ "./src/app/tramites/mintransporte/licencia-conduccion/components/apostilla/apostilla.component.ts");













var LicenciaConduccionModule = /** @class */ (function () {
    function LicenciaConduccionModule() {
    }
    LicenciaConduccionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_licencia_conduccion_licencia_conduccion_component__WEBPACK_IMPORTED_MODULE_4__["LicenciaConduccionComponent"], _components_solicitar_certificado_solicitar_certificado_component__WEBPACK_IMPORTED_MODULE_8__["SolicitarCertificadoComponent"], _components_apostilla_apostilla_component__WEBPACK_IMPORTED_MODULE_12__["ApostillaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _licencia_conduccion_routing_module__WEBPACK_IMPORTED_MODULE_3__["LicenciaConduccionRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaFormsModule"]
            ],
            providers: [_services_licencia_conduccion_service__WEBPACK_IMPORTED_MODULE_10__["LicenciaConduccionService"], _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_11__["RecaptchaService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LicenciaConduccionModule);
    return LicenciaConduccionModule;
}());



/***/ }),

/***/ "./src/app/tramites/mintransporte/licencia-conduccion/services/licencia-conduccion.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/mintransporte/licencia-conduccion/services/licencia-conduccion.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: LicenciaConduccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenciaConduccionService", function() { return LicenciaConduccionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var LicenciaConduccionService = /** @class */ (function () {
    function LicenciaConduccionService(http) {
        this.http = http;
        this.baseUrl = "CertificadoLicencia/";
        this.paisesUrl = "ObtenerListadoPaises";
        this.entidadesUrl = "obtenerListadoEntidades";
        this.tiposDocumentoUrl = "ObtenerTiposDocumento";
        this.postUrl = "Solicitar";
    }
    LicenciaConduccionService.prototype.getEntidades = function () {
        return this.http.get(this.baseUrl + this.entidadesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    };
    LicenciaConduccionService.prototype.getPaises = function () {
        return this.http.get(this.baseUrl + this.paisesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    };
    LicenciaConduccionService.prototype.getTiposDocumento = function () {
        return this.http.get(this.baseUrl + this.tiposDocumentoUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    };
    LicenciaConduccionService.prototype.postSolicitud = function (formData) {
        return this.http.post(this.baseUrl + this.postUrl, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    };
    LicenciaConduccionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    return LicenciaConduccionService;
}());



/***/ }),

/***/ "./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json":
/*!***************************************************************************************!*\
  !*** ./src/assets/string-resources/tramites/mintransporte-solicitar-certificado.json ***!
  \***************************************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"title-error":"Lo sentimos","recaptcha-error":"Se presentó un error al verificar la información del recaptcha, vuelva a intentarlo","form-error":"No encontramos resultados para la búsqueda realizada, te recomendamos:\n 1. Revisar los datos ingresados.\n2. Si aún no encuentras lo que buscas, contáctanos","form-success":"Solicitud realizada con éxito. Se enviará al correo diligenciado en un plazo no mayor a 24 horas","term-error":"Debe aceptar los terminos y condiciones para realizar la solicitud","apostilla-message":"Si el usuario debe realizar el proceso de apostilla del certificado debe remitirse a la Cancillería","apostilla-message-button":"Puntos de atención","cancilleria-url":"https://www.cancilleria.gov.co/tramites_servicios/apostilla_legalizacion_en_linea","privacidad-url":"https://www.mintransporte.gov.co/publicaciones/165/politicas_de_privacidad/","form":{"title-datos-personales":"Datos personales","title-datos-destino":"Datos de destino de la certificación","title-autorizacion":"Autorización de tratamiento de datos"}}};

/***/ })

}]);
//# sourceMappingURL=tramites-mintransporte-licencia-conduccion-licencia-conduccion-module-es5.dbfa0a7ea711695908ca.js.map