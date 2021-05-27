(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-mininterior-censo-indigena-censo-indigena-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"mostrarAlerta\">\r\n    <app-notifications [typeMessage]=\"tipoAlerta\" [message]=\"mensajeAlerta\" [title]=\"titulo\" [show]=\"mostrarAlerta\">\r\n    </app-notifications>\r\n  </div>\r\n</div>\r\n<div class=\"card govco-card p-3 mb-3\">\r\n  <div class=\"card-body pt-0\">\r\n    <div class=\"row\" id=\"tipoBusquedaForm\">\r\n      <h3 class=\"col-md-4 mb-auto mt-auto title-section\">1. Tipo de consulta</h3>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"mt-1\">\r\n          <label class=\"radiobutton-govco\">\r\n            <input type=\"radio\" name=\"radio\" id=\"generar\" name=\"flag\" value=\"generar\" formControlName=\"flag\"\r\n              (click)=\"onItemChange('generar')\" [defaultChecked]=\"true\" />\r\n            <label for=\"documento\" class=\"form-group-govco\">Generar certificado</label>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"mt-1\">\r\n          <label class=\"radiobutton-govco\">\r\n            <input type=\"radio\" name=\"radio\" id=\"validar\" name=\"flag\" value=\"validar\" formControlName=\"flag\"\r\n            (click)=\"onItemChange('validar')\">\r\n            <label for=\"registro\" class=\"form-group-govco\">Validar certificado</label>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"flag == 'generar'\">\r\n      <div class=\"area-note-selago\">\r\n        <div><strong class=\"title\">Importante:</strong></div>\r\n        <em class=\"content\">{{ noticeMessage }}</em>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"content-tipo-consulta\">\r\n  <div class=\"card govco-card\" id=\"datosGenerarGroup\" *ngIf=\"flag == 'generar'\">\r\n    <div class=\"row card-header pt-0\">\r\n      <div class=\"col-12 m-auto p-0\">\r\n          <h3 class=\"m-0 title-section\">Datos de la solicitud</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" [formGroup]=\"generarCensoForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n        [validate]=\"invalidForm\">\r\n        <!--datos formulario -->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\" for=\"tipoDocumento\">Tipo de documento *</label>\r\n            <app-dropdownlist ngDefaultControl (change)=\"actualizarDocumento()\" formControlName=\"tipoDocumento\"\r\n              placeholder=\"Por ejemplo: Cédula Ciudadanía\" [items]=\"tiposDocumentos\"></app-dropdownlist>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\" for=\"numeroDocumento\">Número de documento *</label>\r\n            <input class=\"form-control input-govco\" (change)=\"limpiar()\" placeholder=\"Por ejemplo: 10293080\" type=\"text\"\r\n              formControlName=\"numeroDocumento\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row recaptcha-container\">\r\n            <div class=\"form-group\">\r\n              <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\" col-md-12 generar-censo-indigena-footer\">\r\n          <button class=\"btn btn-round btn-high\" (click)=\"generar()\">GENERAR</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card govco-card\" id=\"datosValidarGroup\" *ngIf=\"flag == 'validar'\">\r\n    <div class=\"row card-header pt-0\">\r\n      <div class=\"col-12 m-auto p-0\">\r\n          <h3 class=\"m-0 title-section\">Datos de la solicitud</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"row\" [formGroup]=\"validarCensoForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n        [validate]=\"invalidForm\">\r\n        <!--datos formulario -->\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-group-govco\" for=\"idCertificado\">Pin de validación *</label>\r\n            <input class=\"form-control input-govco\" (change)=\"limpiar()\"\r\n              placeholder=\"Por ejemplo: 2121ae6d-be76-4ae0-99eb-d1c488b6a1db\" type=\"text\"\r\n              formControlName=\"idCertificado\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row recaptcha-container\">\r\n            <div class=\"form-group\">\r\n              <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\" col-md-12 generar-censo-indigena-footer\">\r\n          <button class=\"btn btn-round btn-high\" (click)=\"validar()\">VERIFICAR</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"censo-indigena-container\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\" [name]=\"'censo-indigena'\" [owner]=\"'mininterior'\" [id]=\"'20962X'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T20962'\" [type]=\"'redirect'\">\r\n    </app-btn-volver>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/censo-indigena-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/censo-indigena-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CensoIndigenaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensoIndigenaRoutingModule", function() { return CensoIndigenaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_censo_indigena_censo_indigena_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/censo-indigena/censo-indigena.component */ "./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.ts");
/* harmony import */ var _components_buscar_certificado_buscar_certificado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buscar-certificado/buscar-certificado.component */ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.ts");





var routes = [
    {
        path: '',
        component: _components_censo_indigena_censo_indigena_component__WEBPACK_IMPORTED_MODULE_3__["CensoIndigenaComponent"],
        children: [
            {
                path: '',
                component: _components_buscar_certificado_buscar_certificado_component__WEBPACK_IMPORTED_MODULE_4__["BuscarCertificadoComponent"]
            },
        ]
    }
];
var CensoIndigenaRoutingModule = /** @class */ (function () {
    function CensoIndigenaRoutingModule() {
    }
    CensoIndigenaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CensoIndigenaRoutingModule);
    return CensoIndigenaRoutingModule;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/censo-indigena.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/censo-indigena.module.ts ***!
  \******************************************************************************/
/*! exports provided: CensoIndigenaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensoIndigenaModule", function() { return CensoIndigenaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _censo_indigena_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./censo-indigena-routing.module */ "./src/app/tramites/mininterior/censo-indigena/censo-indigena-routing.module.ts");
/* harmony import */ var _components_censo_indigena_censo_indigena_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/censo-indigena/censo-indigena.component */ "./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.ts");
/* harmony import */ var _components_buscar_certificado_buscar_certificado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buscar-certificado/buscar-certificado.component */ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_censo_indigena_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/censo-indigena.service */ "./src/app/tramites/mininterior/censo-indigena/services/censo-indigena.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");











var CensoIndigenaModule = /** @class */ (function () {
    function CensoIndigenaModule() {
    }
    CensoIndigenaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_censo_indigena_censo_indigena_component__WEBPACK_IMPORTED_MODULE_4__["CensoIndigenaComponent"], _components_buscar_certificado_buscar_certificado_component__WEBPACK_IMPORTED_MODULE_5__["BuscarCertificadoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _censo_indigena_routing_module__WEBPACK_IMPORTED_MODULE_3__["CensoIndigenaRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaFormsModule"]
            ],
            providers: [_services_censo_indigena_service__WEBPACK_IMPORTED_MODULE_9__["CensoIndigenaService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], CensoIndigenaModule);
    return CensoIndigenaModule;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-form.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-form.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BuscarCertificadoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCertificadoForm", function() { return BuscarCertificadoForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var BuscarCertificadoForm = /** @class */ (function () {
    function BuscarCertificadoForm() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    BuscarCertificadoForm.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            numeroDocumento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[A-Za-z0-9]+$')]],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    };
    BuscarCertificadoForm.prototype.getForm = function () {
        return this.form;
    };
    BuscarCertificadoForm.prototype.getFormValues = function () {
        return this.form.value;
    };
    BuscarCertificadoForm.prototype.isValid = function () {
        return this.form.valid;
    };
    return BuscarCertificadoForm;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-validar-form.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-validar-form.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ValidarCertificadoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarCertificadoForm", function() { return ValidarCertificadoForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var ValidarCertificadoForm = /** @class */ (function () {
    function ValidarCertificadoForm() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    ValidarCertificadoForm.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            idCertificado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[A-Za-z0-9-]+$')]],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    };
    ValidarCertificadoForm.prototype.getForm = function () {
        return this.form;
    };
    ValidarCertificadoForm.prototype.getFormValues = function () {
        return this.form.value;
    };
    ValidarCertificadoForm.prototype.isValid = function () {
        return this.form.valid;
    };
    return ValidarCertificadoForm;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generar-censo-indigena-footer {\n  margin-top: 1.2rem;\n  text-align: center;\n}\n\n.main-censoindigena-advice {\n  margin-top: 2rem;\n}\n\n.main-censoindigena-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluaW50ZXJpb3IvY2Vuc28taW5kaWdlbmEvY29tcG9uZW50cy9idXNjYXItY2VydGlmaWNhZG8vQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluaW50ZXJpb3JcXGNlbnNvLWluZGlnZW5hXFxjb21wb25lbnRzXFxidXNjYXItY2VydGlmaWNhZG9cXGJ1c2Nhci1jZXJ0aWZpY2Fkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluaW50ZXJpb3IvY2Vuc28taW5kaWdlbmEvY29tcG9uZW50cy9idXNjYXItY2VydGlmaWNhZG8vYnVzY2FyLWNlcnRpZmljYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFRTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmludGVyaW9yL2NlbnNvLWluZGlnZW5hL2NvbXBvbmVudHMvYnVzY2FyLWNlcnRpZmljYWRvL2J1c2Nhci1jZXJ0aWZpY2Fkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ2VuZXJhci1jZW5zby1pbmRpZ2VuYS1mb290ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tY2Vuc29pbmRpZ2VuYS1hZHZpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG4gIC5nb3Zjby1jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuZ2VuZXJhci1jZW5zby1pbmRpZ2VuYS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tY2Vuc29pbmRpZ2VuYS1hZHZpY2Uge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLm1haW4tY2Vuc29pbmRpZ2VuYS1hZHZpY2UgLmdvdmNvLWNhcmQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BuscarCertificadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCertificadoComponent", function() { return BuscarCertificadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_censo_indigena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/censo-indigena.service */ "./src/app/tramites/mininterior/censo-indigena/services/censo-indigena.service.ts");
/* harmony import */ var _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/censo-indigena.json */ "./src/assets/string-resources/tramites/censo-indigena.json");
var _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/censo-indigena.json */ "./src/assets/string-resources/tramites/censo-indigena.json", 1);
/* harmony import */ var _buscar_certificado_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buscar-certificado-form */ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-form.ts");
/* harmony import */ var _models_generar_certificado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/generar-certificado */ "./src/app/tramites/mininterior/censo-indigena/models/generar-certificado.ts");
/* harmony import */ var _buscar_certificado_validar_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar-certificado-validar-form */ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado-validar-form.ts");
/* harmony import */ var _models_validar_certificado__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/validar-certificado */ "./src/app/tramites/mininterior/censo-indigena/models/validar-certificado.ts");








var BuscarCertificadoComponent = /** @class */ (function () {
    function BuscarCertificadoComponent(censoIndigenaService) {
        this.censoIndigenaService = censoIndigenaService;
        this.mostrarAlerta = false;
        this.invalidForm = false;
        this.getParams();
        this.buscarCertificadoForm = new _buscar_certificado_form__WEBPACK_IMPORTED_MODULE_4__["BuscarCertificadoForm"]();
        this.validarCertificadoForm = new _buscar_certificado_validar_form__WEBPACK_IMPORTED_MODULE_6__["ValidarCertificadoForm"]();
        this.buildForm();
        this.tiposDocumentos = [];
        this.flag = 'generar';
        this.dataGenerar = new _models_generar_certificado__WEBPACK_IMPORTED_MODULE_5__["GenerarCertificado"]();
        this.dataValidar = new _models_validar_certificado__WEBPACK_IMPORTED_MODULE_7__["ValidarCertificado"]();
    }
    BuscarCertificadoComponent.prototype.ngOnInit = function () {
        this.noticeMessage = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["advice"];
    };
    BuscarCertificadoComponent.prototype.buildForm = function () {
        this.generarCensoForm = this.buscarCertificadoForm.getForm();
        this.validarCensoForm = this.validarCertificadoForm.getForm();
    };
    BuscarCertificadoComponent.prototype.getParams = function () {
        var _this = this;
        this.censoIndigenaService.getTiposDocumentos()
            .subscribe(function (data) {
            _this.tiposDocumentos = data;
        }, function (error) {
            _this.tiposDocumentos = [];
        });
    };
    BuscarCertificadoComponent.prototype.setStep = function (step) {
        var s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    };
    BuscarCertificadoComponent.prototype.onItemChange = function (valor) {
        this.mostrarAlerta = false;
        this.tipoAlerta = '';
        this.mensajeAlerta = '';
        this.flag = valor;
        this.invalidForm = false;
        this.titulo = '';
        this.buscarCertificadoForm = new _buscar_certificado_form__WEBPACK_IMPORTED_MODULE_4__["BuscarCertificadoForm"]();
        this.validarCertificadoForm = new _buscar_certificado_validar_form__WEBPACK_IMPORTED_MODULE_6__["ValidarCertificadoForm"]();
        this.buildForm();
        this.setStep('2');
    };
    Object.defineProperty(BuscarCertificadoComponent.prototype, "generarErrores", {
        get: function () { return this.buscarCertificadoForm.getForm().controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarCertificadoComponent.prototype, "validarErrores", {
        get: function () { return this.validarCertificadoForm.getForm().controls; },
        enumerable: true,
        configurable: true
    });
    BuscarCertificadoComponent.prototype.limpiar = function () {
        this.mostrarAlerta = false;
        this.setStep('2');
    };
    BuscarCertificadoComponent.prototype.actualizarDocumento = function () {
        this.mostrarAlerta = false;
        this.setStep('2');
        this.generarCensoForm.get('numeroDocumento').setValue(null);
    };
    BuscarCertificadoComponent.prototype.generar = function () {
        var _this = this;
        this.invalidForm = false;
        this.mostrarAlerta = false;
        this.tipoAlerta = '';
        this.mensajeAlerta = '';
        this.titulo = '';
        this.setStep('2');
        if (!this.buscarCertificadoForm.isValid()) {
            this.invalidForm = true;
            this.mostrarAlerta = true;
            this.tipoAlerta = 'error';
            this.titulo = 'Lo sentimos';
            this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["camposObligatorios"];
            this.setStep('2');
        }
        else {
            this.mostrarAlerta = false;
            this.dataGenerar.Codigo = this.buscarCertificadoForm.getFormValues().tipoDocumento.value;
            this.dataGenerar.Documento = this.buscarCertificadoForm.getFormValues().numeroDocumento;
            this.censoIndigenaService.postGenerarCertificado(this.dataGenerar)
                .subscribe(function (data) {
                _this.mostrarAlerta = true;
                _this.tipoAlerta = 'success';
                _this.titulo = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["200generarCertificado"];
                _this.mensajeAlerta = '';
                var blob = new Blob([data], { type: 'application/pdf' });
                var url = window.URL.createObjectURL(blob);
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, "certificado.pdf");
                    _this.setStep('4');
                }
                else {
                    var pwa = window.open(url);
                    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
                        alert(_stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["habilitarPopUpNavegador"]);
                    }
                    _this.setStep('4');
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.mostrarAlerta = true;
                    _this.tipoAlerta = 'error';
                    _this.titulo = 'Lo sentimos';
                    _this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["404generarCertificado"];
                }
                else {
                    _this.mostrarAlerta = true;
                    _this.tipoAlerta = 'error';
                    _this.titulo = 'Lo sentimos';
                    _this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["0generarCertificado"];
                }
                _this.setStep('2');
            });
        }
    };
    BuscarCertificadoComponent.prototype.validar = function () {
        var _this = this;
        this.invalidForm = false;
        this.mostrarAlerta = false;
        this.tipoAlerta = '';
        this.mensajeAlerta = '';
        this.titulo = '';
        this.setStep('2');
        if (!this.validarCertificadoForm.isValid()) {
            this.invalidForm = true;
            this.mostrarAlerta = true;
            this.tipoAlerta = 'error';
            this.titulo = 'Lo sentimos';
            this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["camposObligatorios"];
            this.setStep('2');
        }
        else {
            this.mostrarAlerta = false;
            this.dataValidar.IdCertificado = this.validarCertificadoForm.getFormValues().idCertificado;
            this.censoIndigenaService.postValidarCertificado(this.dataValidar)
                .subscribe(function (data) {
                _this.mostrarAlerta = true;
                _this.tipoAlerta = 'success';
                _this.titulo = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["200validarCertificado"];
                _this.mensajeAlerta = '';
                var blob = new Blob([data], { type: 'application/pdf' });
                var url = window.URL.createObjectURL(blob);
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, "certificado_validacion.pdf");
                    _this.setStep('4');
                }
                else {
                    var pwa = window.open(url);
                    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
                        alert(_stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["habilitarPopUpNavegador"]);
                    }
                    _this.setStep('4');
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.mostrarAlerta = true;
                    _this.tipoAlerta = 'error';
                    _this.titulo = 'Lo sentimos';
                    _this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["404validarCertificado"];
                }
                else {
                    _this.mostrarAlerta = true;
                    _this.tipoAlerta = 'error';
                    _this.titulo = 'Lo sentimos';
                    _this.mensajeAlerta = _stringResources_tramites_censo_indigena_json__WEBPACK_IMPORTED_MODULE_3__.messages["0generarCertificado"];
                }
                _this.setStep('2');
            });
        }
    };
    BuscarCertificadoComponent.ctorParameters = function () { return [
        { type: _services_censo_indigena_service__WEBPACK_IMPORTED_MODULE_2__["CensoIndigenaService"] }
    ]; };
    BuscarCertificadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-certificado',
            template: __webpack_require__(/*! raw-loader!./buscar-certificado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.html"),
            styles: [__webpack_require__(/*! ./buscar-certificado.component.scss */ "./src/app/tramites/mininterior/censo-indigena/components/buscar-certificado/buscar-certificado.component.scss")]
        })
    ], BuscarCertificadoComponent);
    return BuscarCertificadoComponent;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluaW50ZXJpb3IvY2Vuc28taW5kaWdlbmEvY29tcG9uZW50cy9jZW5zby1pbmRpZ2VuYS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5pbnRlcmlvclxcY2Vuc28taW5kaWdlbmFcXGNvbXBvbmVudHNcXGNlbnNvLWluZGlnZW5hXFxjZW5zby1pbmRpZ2VuYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluaW50ZXJpb3IvY2Vuc28taW5kaWdlbmEvY29tcG9uZW50cy9jZW5zby1pbmRpZ2VuYS9jZW5zby1pbmRpZ2VuYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmludGVyaW9yL2NlbnNvLWluZGlnZW5hL2NvbXBvbmVudHMvY2Vuc28taW5kaWdlbmEvY2Vuc28taW5kaWdlbmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHsgY29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CensoIndigenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensoIndigenaComponent", function() { return CensoIndigenaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CensoIndigenaComponent = /** @class */ (function () {
    function CensoIndigenaComponent() {
    }
    CensoIndigenaComponent.prototype.ngOnInit = function () {
    };
    CensoIndigenaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-censo-indigena',
            template: __webpack_require__(/*! raw-loader!./censo-indigena.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.html"),
            styles: [__webpack_require__(/*! ./censo-indigena.component.scss */ "./src/app/tramites/mininterior/censo-indigena/components/censo-indigena/censo-indigena.component.scss")]
        })
    ], CensoIndigenaComponent);
    return CensoIndigenaComponent;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/models/generar-certificado.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/models/generar-certificado.ts ***!
  \***********************************************************************************/
/*! exports provided: GenerarCertificado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarCertificado", function() { return GenerarCertificado; });
var GenerarCertificado = /** @class */ (function () {
    function GenerarCertificado() {
    }
    return GenerarCertificado;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/models/validar-certificado.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/models/validar-certificado.ts ***!
  \***********************************************************************************/
/*! exports provided: ValidarCertificado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarCertificado", function() { return ValidarCertificado; });
var ValidarCertificado = /** @class */ (function () {
    function ValidarCertificado() {
    }
    return ValidarCertificado;
}());



/***/ }),

/***/ "./src/app/tramites/mininterior/censo-indigena/services/censo-indigena.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/tramites/mininterior/censo-indigena/services/censo-indigena.service.ts ***!
  \****************************************************************************************/
/*! exports provided: CensoIndigenaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensoIndigenaService", function() { return CensoIndigenaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CensoIndigenaService = /** @class */ (function () {
    function CensoIndigenaService(http) {
        this.http = http;
        // API path
        this.path = 'CensoIndigena/';
        this.obtenerTiposDocumentos = 'obtenerTiposDocumentos';
        this.generarCertificado = 'generarCertificado';
        this.validarCertificado = 'validarCertificado';
    }
    CensoIndigenaService.prototype.getTiposDocumentos = function () {
        return this.http.get(this.path + this.obtenerTiposDocumentos);
    };
    CensoIndigenaService.prototype.postGenerarCertificado = function (item) {
        return this.http.post(this.path + this.generarCertificado, item, {
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Content-Type", "application/json").append("angular-show-loading", "true")
        });
    };
    CensoIndigenaService.prototype.postValidarCertificado = function (item) {
        return this.http.post(this.path + this.validarCertificado, item, {
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Content-Type", "application/json").append("angular-show-loading", "true")
        });
    };
    CensoIndigenaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CensoIndigenaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CensoIndigenaService);
    return CensoIndigenaService;
}());



/***/ }),

/***/ "./src/assets/string-resources/tramites/censo-indigena.json":
/*!******************************************************************!*\
  !*** ./src/assets/string-resources/tramites/censo-indigena.json ***!
  \******************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"advice":"La consulta censal se realiza de acuerdo a lo establecido en el Art. 49 del decreto  019 de 2012, con base en los autocensos aportados anualmente antes del 30 de abril, a la dirección de asuntos indigenas del Ministerio del Interior por los respectivos cabildos gobernadores de las comunidades indígenas. En el caso que no pueda descargar el certiﬁcado, por favor dirigirse a su comunidad.","200generarCertificado":"Certificado generado","404generarCertificado":"El documento consultado NO registra en las bases de datos de los auto-censos aportados por las comunidades indígenas al Ministerio del Interior.","0generarCertificado":"El servicio no se encuentra disponible en este momento, te recomendamos: \n 1. Intentarlo más tarde. \n 2. Recargar la página.","habilitarPopUpNavegador":"Por favor deshabilite el bloqueo de Pop-Up e intente de nuevo.","camposObligatorios":"Los datos ingresados son incorrectos, te recomendamos:  \n  1. Revisar que los datos ingresados sean los solicitados.","200validarCertificado":"Certificado generado","404validarCertificado":"El pin de validación no se encuentra asociado a ningún certificado."}};

/***/ })

}]);
//# sourceMappingURL=tramites-mininterior-censo-indigena-censo-indigena-module-es5.5a64c330de1cd849725e.js.map