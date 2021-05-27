(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-ica-validar-gsmi-validar-gsmi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"mostrarAlerta\">\r\n    <app-notifications [typeMessage]=\"tipoAlerta\" [message]=\"mensajeAlerta\" [title]=\"titulo\" [show]=\"mostrarAlerta\">\r\n    </app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card p-2\">\r\n  <div class=\"card-header pt-4 pb-0\">  \r\n      <h3 class=\"m-0 title-section\">Consulta</h3>\r\n  </div>\r\n  <div class=\"card-body\" id=\"datosGenerarGroupGsmi\">\r\n    <div class=\"col-12\" [formGroup]=\"generarFormObtenerGsmi\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n      [validate]=\"invalidForm\">\r\n      <!--datos formulario -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\" for=\"digitosNumeroGsmi\">Últimos tres dígitos del número GSMI *</label>\r\n            <input class=\"form-control input-govco\" placeholder=\"Por ejemplo: 123\" type=\"text\"\r\n              formControlName=\"digitosNumeroGsmi\" (change)=\"limpiar()\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\" for=\"codigoValidador\">Código Validador *</label>\r\n            <input class=\"form-control input-govco\" placeholder=\"Por ejemplo: 0123456789\" type=\"text\"\r\n              formControlName=\"codigoValidador\" (change)=\"limpiar()\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <div class=\"area-note-selago\">\r\n              <em class=\"content\">Si el número de GSMI es:<br> 016-0123456789 solo ingresar 789</em>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row recaptcha-container m-3\">\r\n          <div class=\"form-group\">\r\n            <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">            \r\n        <div class=\"col-6 button-footer text-right\">\r\n            <button class=\"btn btn-round btn-middle wb-150\" (click)=\"limpiarFormulario()\">LIMPIAR</button>\r\n        </div>\r\n        <div class=\"col-6 button-footer text-left\">\r\n            <button class=\"btn btn-round btn-high wb-150\" (click)=\"buscar()\">GUARDAR</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"validar-gsmi-container\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\" [name]=\"'validar-gsmi'\" [owner]=\"'ica'\" [id]=\"'S007'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/TS007'\" [type]=\"'redirect'\">\r\n    </app-btn-volver>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi-form.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi-form.ts ***!
  \****************************************************************************************/
/*! exports provided: ObtenerGsmiForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObtenerGsmiForm", function() { return ObtenerGsmiForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class ObtenerGsmiForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            digitosNumeroGsmi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$')]],
            codigoValidador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$')]],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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

/***/ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".busqueda-footer {\n  text-align: center;\n}\n.busqueda-footer button {\n  margin: 10px;\n}\n.center {\n  margin: auto;\n  background: blue;\n  text-align: center;\n}\n.custom-card {\n  margin: 0px !important;\n  padding: 1.2rem !important;\n  text-align: left !important;\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNhL3ZhbGlkYXItZ3NtaS9jb21wb25lbnRzL29idGVuZXItZ3NtaS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxpY2FcXHZhbGlkYXItZ3NtaVxcY29tcG9uZW50c1xcb2J0ZW5lci1nc21pXFxvYnRlbmVyLWdzbWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYS92YWxpZGFyLWdzbWkvY29tcG9uZW50cy9vYnRlbmVyLWdzbWkvb2J0ZW5lci1nc21pLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtBQ0NKO0FER0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvaWNhL3ZhbGlkYXItZ3NtaS9jb21wb25lbnRzL29idGVuZXItZ3NtaS9vYnRlbmVyLWdzbWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVzcXVlZGEtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iLCIuYnVzcXVlZGEtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1c3F1ZWRhLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1jYXJkIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ObtenerGsmiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObtenerGsmiComponent", function() { return ObtenerGsmiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _obtener_gsmi_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obtener-gsmi-form */ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi-form.ts");
/* harmony import */ var _services_validar_gsmi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validar-gsmi.service */ "./src/app/tramites/ica/validar-gsmi/services/validar-gsmi.service.ts");
/* harmony import */ var _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stringResources/tramites/certificado-rspp.json */ "./src/assets/string-resources/tramites/certificado-rspp.json");
var _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/certificado-rspp.json */ "./src/assets/string-resources/tramites/certificado-rspp.json", 1);
/* harmony import */ var _models_validar_gsmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/validar-gsmi */ "./src/app/tramites/ica/validar-gsmi/models/validar-gsmi.ts");






let ObtenerGsmiComponent = class ObtenerGsmiComponent {
    constructor(service) {
        this.service = service;
        this.mostrarAlerta = false;
        this.invalidForm = false;
        this.getParams();
        this.formObtenerGsmi = new _obtener_gsmi_form__WEBPACK_IMPORTED_MODULE_2__["ObtenerGsmiForm"]();
        this.buildForm();
        this.dataGenerar = new _models_validar_gsmi__WEBPACK_IMPORTED_MODULE_5__["DatosSolicitud"]();
    }
    ngOnInit() { }
    buildForm() {
        this.generarFormObtenerGsmi = this.formObtenerGsmi.getForm();
    }
    getParams() {
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    limpiarFormulario() {
        this.buildForm();
        this.generarFormObtenerGsmi.get('digitosNumeroGsmi').setValue(null);
        this.generarFormObtenerGsmi.get('codigoValidador').setValue(null);
        this.invalidForm = false;
        this.mostrarAlerta = false;
        this.tipoAlerta = '';
        this.mensajeAlerta = '';
        this.titulo = '';
        this.setStep('2');
    }
    limpiar() {
        this.mostrarAlerta = false;
        this.setStep('2');
    }
    buscar() {
        this.invalidForm = false;
        this.mostrarAlerta = false;
        this.tipoAlerta = '';
        this.mensajeAlerta = '';
        this.titulo = '';
        this.setStep('2');
        if (!this.formObtenerGsmi.isValid()) {
            this.invalidForm = true;
            this.mostrarAlerta = true;
            this.tipoAlerta = 'error';
            this.titulo = 'Lo sentimos';
            this.mensajeAlerta = _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4__.messages["camposObligatorios"];
            this.setStep('2');
        }
        else {
            this.mostrarAlerta = false;
            this.dataGenerar.digitos_numero_gsmi = this.formObtenerGsmi.getFormValues().digitosNumeroGsmi;
            this.dataGenerar.codigo_validador = this.formObtenerGsmi.getFormValues().codigoValidador;
            this.service.GetInformacion(this.dataGenerar)
                .subscribe((data) => {
                this.mostrarAlerta = true;
                this.tipoAlerta = 'success';
                this.titulo = _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4__.messages["200generarCertificado"];
                this.mensajeAlerta = '';
                // aca va lo otro
                this.setStep('4');
            }, (error) => {
                if (error.status == 404) {
                    this.mostrarAlerta = true;
                    this.tipoAlerta = 'error';
                    this.titulo = 'Lo sentimos';
                    this.mensajeAlerta = _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4__.messages["404generarCertificado"];
                }
                else {
                    this.mostrarAlerta = true;
                    this.tipoAlerta = 'error';
                    this.titulo = 'Lo sentimos';
                    this.mensajeAlerta = _stringResources_tramites_certificado_rspp_json__WEBPACK_IMPORTED_MODULE_4__.messages["0generarCertificado"];
                }
                this.setStep('2');
            });
        }
    }
};
ObtenerGsmiComponent.ctorParameters = () => [
    { type: _services_validar_gsmi_service__WEBPACK_IMPORTED_MODULE_3__["ValidarGsmiService"] }
];
ObtenerGsmiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-obtener-gsmi',
        template: __webpack_require__(/*! raw-loader!./obtener-gsmi.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.html"),
        styles: [__webpack_require__(/*! ./obtener-gsmi.component.scss */ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.scss")]
    })
], ObtenerGsmiComponent);



/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNhL3ZhbGlkYXItZ3NtaS9jb21wb25lbnRzL3ZhbGlkYXIvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcaWNhXFx2YWxpZGFyLWdzbWlcXGNvbXBvbmVudHNcXHZhbGlkYXJcXHZhbGlkYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYS92YWxpZGFyLWdzbWkvY29tcG9uZW50cy92YWxpZGFyL3ZhbGlkYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9pY2EvdmFsaWRhci1nc21pL2NvbXBvbmVudHMvdmFsaWRhci92YWxpZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7IGNvbG9yOiB3aGl0ZTt9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ValidarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarComponent", function() { return ValidarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidarComponent = class ValidarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ValidarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validar-gsmi',
        template: __webpack_require__(/*! raw-loader!./validar.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.html"),
        styles: [__webpack_require__(/*! ./validar.component.scss */ "./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.scss")]
    })
], ValidarComponent);



/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/models/validar-gsmi.ts":
/*!******************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/models/validar-gsmi.ts ***!
  \******************************************************************/
/*! exports provided: DatosSolicitud, DatosRespuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosSolicitud", function() { return DatosSolicitud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosRespuesta", function() { return DatosRespuesta; });
class DatosSolicitud {
}
class DatosRespuesta {
}


/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/services/validar-gsmi.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/services/validar-gsmi.service.ts ***!
  \****************************************************************************/
/*! exports provided: ValidarGsmiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarGsmiService", function() { return ValidarGsmiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ValidarGsmiService = class ValidarGsmiService {
    constructor(http) {
        this.http = http;
        // API path
        this.path = 'ica/ValidarGsmi';
        this.obtenerInformacion = 'obtenerInformacion';
    }
    GetInformacion(datosSolicitud) {
        return this.http.post(this.path + this.obtenerInformacion, datosSolicitud, {
            responseType: "json",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Content-Type", "application/json").append("angular-show-loading", "true")
        });
    }
};
ValidarGsmiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ValidarGsmiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidarGsmiService);



/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/validar-gsmi-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/validar-gsmi-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ValidarGsmiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarGsmiRoutingModule", function() { return ValidarGsmiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_validar_validar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validar/validar.component */ "./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.ts");
/* harmony import */ var _components_obtener_gsmi_obtener_gsmi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/obtener-gsmi/obtener-gsmi.component */ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.ts");





const routes = [
    {
        path: '',
        component: _components_validar_validar_component__WEBPACK_IMPORTED_MODULE_3__["ValidarComponent"],
        children: [
            {
                path: '',
                component: _components_obtener_gsmi_obtener_gsmi_component__WEBPACK_IMPORTED_MODULE_4__["ObtenerGsmiComponent"]
            },
        ]
    }
];
let ValidarGsmiRoutingModule = class ValidarGsmiRoutingModule {
};
ValidarGsmiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ValidarGsmiRoutingModule);



/***/ }),

/***/ "./src/app/tramites/ica/validar-gsmi/validar-gsmi.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/tramites/ica/validar-gsmi/validar-gsmi.module.ts ***!
  \******************************************************************/
/*! exports provided: ValidarGsmiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarGsmiModule", function() { return ValidarGsmiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _validar_gsmi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validar-gsmi-routing.module */ "./src/app/tramites/ica/validar-gsmi/validar-gsmi-routing.module.ts");
/* harmony import */ var _components_validar_validar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validar/validar.component */ "./src/app/tramites/ica/validar-gsmi/components/validar/validar.component.ts");
/* harmony import */ var _components_obtener_gsmi_obtener_gsmi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/obtener-gsmi/obtener-gsmi.component */ "./src/app/tramites/ica/validar-gsmi/components/obtener-gsmi/obtener-gsmi.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_validar_gsmi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validar-gsmi.service */ "./src/app/tramites/ica/validar-gsmi/services/validar-gsmi.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");











let ValidarGsmiModule = class ValidarGsmiModule {
};
ValidarGsmiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_validar_validar_component__WEBPACK_IMPORTED_MODULE_4__["ValidarComponent"], _components_obtener_gsmi_obtener_gsmi_component__WEBPACK_IMPORTED_MODULE_5__["ObtenerGsmiComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _validar_gsmi_routing_module__WEBPACK_IMPORTED_MODULE_3__["ValidarGsmiRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaFormsModule"]
        ],
        providers: [_services_validar_gsmi_service__WEBPACK_IMPORTED_MODULE_9__["ValidarGsmiService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ValidarGsmiModule);



/***/ })

}]);
//# sourceMappingURL=tramites-ica-validar-gsmi-validar-gsmi-module-es2015.4ce5d1b382732ee2104f.js.map