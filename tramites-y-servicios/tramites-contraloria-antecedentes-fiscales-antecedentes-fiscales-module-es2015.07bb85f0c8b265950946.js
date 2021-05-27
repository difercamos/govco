(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-contraloria-antecedentes-fiscales-antecedentes-fiscales-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"antecedentes-fiscales-container\" class=\"row\">\r\n    <app-tramite-detail class=\"col-md-12\"\r\n        [name] = \"'antecedentes-fiscales'\"\r\n        [owner] = \"'contraloria'\"\r\n        [id] = \"'17084'\">\r\n    </app-tramite-detail>\r\n\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"17084\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T17084'\" [type]=\"'redirect'\" ></app-btn-volver>        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotification\" class=\"mb-3\">\r\n        <app-notifications \r\n        [typeMessage]=\"notificationMessages.type\" \r\n        [message]=\"notificationMessages.message\" \r\n        [title]=\"notificationMessages.title\" \r\n        [show]=\"showNotification\"></app-notifications>\r\n</div>\r\n\r\n<div class=\"card govco-card \">\r\n    <div class=\"card-header pl-2 pb-0\">\r\n        <h3 class=\"title-section\">Datos de la solicitud</h3>\r\n    </div>    \r\n    <div class=\"card-body\">\r\n        <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-group-govco\">Tipo de documento *</label>\r\n                    <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\" placeholder = \"Ej: Cédula de ciudadania\" [items]=\"tiposDocumento\"></app-dropdownlist>                                   \r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-group-govco\">Número de documento *</label>\r\n                    <input class=\"form-control input-govco\" type=\"text\" formControlName=\"documento\" maxlength=\"16\" pattern=\"^[0-9]*$\"/>\r\n                </div>                \r\n            </div>\r\n            <div class=\"col-md-12 mt-3 mb-2\" >\r\n                <div class=\"row recaptcha-container\" >\r\n                    <div class=\"form-group\">\r\n                        <re-captcha formControlName=\"recaptcha\"></re-captcha>    \r\n                    </div>\r\n                    \r\n                </div>     \r\n            </div>            \r\n        </div>\r\n        <div class=\"col-md-12 text-center\">\r\n            <button class=\"btn btn-round btn-high\" (click)=\"search()\">BUSCAR</button>\r\n        </div>\r\n    </div> \r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/antecedentes-fiscales-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/antecedentes-fiscales-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: AntecedentesFiscalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesFiscalesRoutingModule", function() { return AntecedentesFiscalesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_antecedentes_fiscales_antecedentes_fiscales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/antecedentes-fiscales/antecedentes-fiscales.component */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.ts");
/* harmony import */ var _components_buscar_antecedentes_buscar_antecedentes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buscar-antecedentes/buscar-antecedentes.component */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.ts");





const routes = [
    {
        path: "",
        component: _components_antecedentes_fiscales_antecedentes_fiscales_component__WEBPACK_IMPORTED_MODULE_3__["AntecedentesFiscalesComponent"],
        children: [
            {
                path: "",
                component: _components_buscar_antecedentes_buscar_antecedentes_component__WEBPACK_IMPORTED_MODULE_4__["BuscarAntecedentesComponent"]
            }
        ]
    }
];
let AntecedentesFiscalesRoutingModule = class AntecedentesFiscalesRoutingModule {
};
AntecedentesFiscalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AntecedentesFiscalesRoutingModule);



/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/antecedentes-fiscales.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/antecedentes-fiscales.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AntecedentesFiscalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesFiscalesModule", function() { return AntecedentesFiscalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _antecedentes_fiscales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./antecedentes-fiscales-routing.module */ "./src/app/tramites/contraloria/antecedentes-fiscales/antecedentes-fiscales-routing.module.ts");
/* harmony import */ var _components_antecedentes_fiscales_antecedentes_fiscales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/antecedentes-fiscales/antecedentes-fiscales.component */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_buscar_antecedentes_buscar_antecedentes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/buscar-antecedentes/buscar-antecedentes.component */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.ts");
/* harmony import */ var _services_antecedentes_fiscales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/antecedentes-fiscales.service */ "./src/app/tramites/contraloria/antecedentes-fiscales/services/antecedentes-fiscales.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");











let AntecedentesFiscalesModule = class AntecedentesFiscalesModule {
};
AntecedentesFiscalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_antecedentes_fiscales_antecedentes_fiscales_component__WEBPACK_IMPORTED_MODULE_4__["AntecedentesFiscalesComponent"], _components_buscar_antecedentes_buscar_antecedentes_component__WEBPACK_IMPORTED_MODULE_6__["BuscarAntecedentesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _antecedentes_fiscales_routing_module__WEBPACK_IMPORTED_MODULE_3__["AntecedentesFiscalesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaFormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            _services_antecedentes_fiscales_service__WEBPACK_IMPORTED_MODULE_7__["AntecedentesFiscalesService"],
            _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_10__["RecaptchaService"]
        ]
    })
], AntecedentesFiscalesModule);



/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY29udHJhbG9yaWEvYW50ZWNlZGVudGVzLWZpc2NhbGVzL2NvbXBvbmVudHMvYW50ZWNlZGVudGVzLWZpc2NhbGVzL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGNvbnRyYWxvcmlhXFxhbnRlY2VkZW50ZXMtZmlzY2FsZXNcXGNvbXBvbmVudHNcXGFudGVjZWRlbnRlcy1maXNjYWxlc1xcYW50ZWNlZGVudGVzLWZpc2NhbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jb250cmFsb3JpYS9hbnRlY2VkZW50ZXMtZmlzY2FsZXMvY29tcG9uZW50cy9hbnRlY2VkZW50ZXMtZmlzY2FsZXMvYW50ZWNlZGVudGVzLWZpc2NhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsWUFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvY29udHJhbG9yaWEvYW50ZWNlZGVudGVzLWZpc2NhbGVzL2NvbXBvbmVudHMvYW50ZWNlZGVudGVzLWZpc2NhbGVzL2FudGVjZWRlbnRlcy1maXNjYWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge2NvbG9yOiB3aGl0ZTt9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AntecedentesFiscalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesFiscalesComponent", function() { return AntecedentesFiscalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AntecedentesFiscalesComponent = class AntecedentesFiscalesComponent {
    constructor(pageTitle) {
        this.pageTitle = pageTitle;
    }
    ngOnInit() {
        this.setPageTitle();
    }
    setPageTitle() {
        const baseTitle = _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__["page-title"];
        const tramiteTitle = _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__.tramites.contraloria["antecedentes-fiscales"].title;
        this.pageTitle.setTitle(`${baseTitle}-${tramiteTitle}`);
    }
};
AntecedentesFiscalesComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
AntecedentesFiscalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-antecedentes-fiscales',
        template: __webpack_require__(/*! raw-loader!./antecedentes-fiscales.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.html"),
        styles: [__webpack_require__(/*! ./antecedentes-fiscales.component.scss */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/antecedentes-fiscales/antecedentes-fiscales.component.scss")]
    })
], AntecedentesFiscalesComponent);



/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes-form.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes-form.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BuscarAntecedentesForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarAntecedentesForm", function() { return BuscarAntecedentesForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class BuscarAntecedentesForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50)])],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
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

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY29udHJhbG9yaWEvYW50ZWNlZGVudGVzLWZpc2NhbGVzL2NvbXBvbmVudHMvYnVzY2FyLWFudGVjZWRlbnRlcy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxjb250cmFsb3JpYVxcYW50ZWNlZGVudGVzLWZpc2NhbGVzXFxjb21wb25lbnRzXFxidXNjYXItYW50ZWNlZGVudGVzXFxidXNjYXItYW50ZWNlZGVudGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jb250cmFsb3JpYS9hbnRlY2VkZW50ZXMtZmlzY2FsZXMvY29tcG9uZW50cy9idXNjYXItYW50ZWNlZGVudGVzL2J1c2Nhci1hbnRlY2VkZW50ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9jb250cmFsb3JpYS9hbnRlY2VkZW50ZXMtZmlzY2FsZXMvY29tcG9uZW50cy9idXNjYXItYW50ZWNlZGVudGVzL2J1c2Nhci1hbnRlY2VkZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: BuscarAntecedentesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarAntecedentesComponent", function() { return BuscarAntecedentesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _buscar_antecedentes_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscar-antecedentes-form */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes-form.ts");
/* harmony import */ var _services_antecedentes_fiscales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/antecedentes-fiscales.service */ "./src/app/tramites/contraloria/antecedentes-fiscales/services/antecedentes-fiscales.service.ts");
/* harmony import */ var _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stringResources/tramites/antecedentes-fiscales.json */ "./src/assets/string-resources/tramites/antecedentes-fiscales.json");
var _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/antecedentes-fiscales.json */ "./src/assets/string-resources/tramites/antecedentes-fiscales.json", 1);
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");






let BuscarAntecedentesComponent = class BuscarAntecedentesComponent {
    constructor(service, recaptchaService) {
        this.service = service;
        this.recaptchaService = recaptchaService;
        this.invalidForm = false;
        this.requestFailure = false;
        this.requestSuccess = false;
        this.showNotification = false;
        this.messages = {
            errorTitle: _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages["error-title"],
            errorForm: _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages["error-form"],
            errorRequest: _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages["error-request"],
            success: _stringResources_tramites_antecedentes_fiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages.success
        };
        this.notificationMessages = {
            title: "",
            type: "",
            message: ""
        };
    }
    ngOnInit() {
        this.formItem = new _buscar_antecedentes_form__WEBPACK_IMPORTED_MODULE_2__["BuscarAntecedentesForm"]();
        this.form = this.formItem.getForm();
    }
    ngAfterViewInit() {
        this.getDataForm();
    }
    getDataForm() {
        this.service.getTiposDocumento()
            .subscribe((data) => {
            if (data.length > 0) {
                this.tiposDocumento = data;
            }
        }, (error) => {
            console.error(error);
        });
    }
    search() {
        this.setTramiteStep("2");
        this.showNotification = false;
        if (!this.formItem.isValid()) {
            this.showMessage("error", this.messages.errorForm);
            this.invalidForm = true;
            return;
        }
        this.invalidForm = false;
        let formValues = this.formItem.getFormValues();
        this.recaptchaService.validateServerKey(formValues.recaptcha).subscribe((data) => {
            if (data["success"] === true) {
                this.queryCertificados(formValues.documento, formValues.tipoDocumento.value);
            }
            else {
                //TODO: mostrar mensaje
                this.requestFailure = true;
            }
        }, (error) => {
            this.requestFailure = true;
        });
    }
    //Consulta el certificado con la información diligenciada
    queryCertificados(documento, tipoDocumento) {
        this.service.GetCertificado({
            documento: documento,
            tipoDocumento: tipoDocumento
        }).subscribe((data) => {
            this.showMessage("success", this.messages.success);
            this.handleFileView(data, documento);
            this.setTramiteStep("4");
            this.form.get('recaptcha').setValue(null);
        }, (error) => {
            this.showMessage("error", this.messages.errorRequest);
            this.form.get('recaptcha').setValue(null);
        });
    }
    //Muestra el archivo de acuerdo al tipo de navegador (descarga el archivo cuando es IE)
    handleFileView(data, documento) {
        let blob = new Blob([data], { type: 'application/pdf' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob && this.isIE()) {
            window.navigator.msSaveOrOpenBlob(blob);
            return;
        }
        // Otros navegadores
        const downloadURL = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadURL;
        link.download = documento + '.pdf';
        link.click();
        return;
    }
    isIE() {
        const ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    }
    //hace el cambio del paso del trámite seleccionado
    setTramiteStep(step) {
        const areaServicio = document.getElementsByTagName('govco-area-servicios');
        if (areaServicio != undefined && areaServicio.length > 0) {
            areaServicio[0].setAttribute('steptramites', step);
        }
    }
    showMessage(type, message) {
        this.notificationMessages.type = "";
        this.notificationMessages.title = "";
        this.notificationMessages.message = "";
        switch (type) {
            case "error":
                this.notificationMessages.title = this.messages.errorTitle;
                this.notificationMessages.message = message;
                this.notificationMessages.type = "error";
                break;
            case "success":
                this.notificationMessages.title = message;
                this.notificationMessages.type = "success";
                break;
        }
        this.showNotification = true;
        window.scroll(0, 0);
    }
};
BuscarAntecedentesComponent.ctorParameters = () => [
    { type: _services_antecedentes_fiscales_service__WEBPACK_IMPORTED_MODULE_3__["AntecedentesFiscalesService"] },
    { type: _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_5__["RecaptchaService"] }
];
BuscarAntecedentesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buscar-antecedentes',
        template: __webpack_require__(/*! raw-loader!./buscar-antecedentes.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.html"),
        styles: [__webpack_require__(/*! ./buscar-antecedentes.component.scss */ "./src/app/tramites/contraloria/antecedentes-fiscales/components/buscar-antecedentes/buscar-antecedentes.component.scss")]
    })
], BuscarAntecedentesComponent);



/***/ }),

/***/ "./src/app/tramites/contraloria/antecedentes-fiscales/services/antecedentes-fiscales.service.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/tramites/contraloria/antecedentes-fiscales/services/antecedentes-fiscales.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: AntecedentesFiscalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesFiscalesService", function() { return AntecedentesFiscalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AntecedentesFiscalesService = class AntecedentesFiscalesService {
    constructor(http) {
        this.http = http;
        this.urlTramite = {
            tiposDocumento: "antecedentesFiscales/obtenerTiposDocumento",
            obtenerCertificado: "antecedentesFiscales/GenerarCertificado"
        };
    }
    getTiposDocumento() {
        return this.http.get(this.urlTramite.tiposDocumento, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    GetCertificado(datosPersonales) {
        return this.http.post(this.urlTramite.obtenerCertificado, datosPersonales, {
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Content-Type", "application/json").append("angular-show-loading", "true")
        });
    }
};
AntecedentesFiscalesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AntecedentesFiscalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AntecedentesFiscalesService);



/***/ }),

/***/ "./src/assets/string-resources/tramites/antecedentes-fiscales.json":
/*!*************************************************************************!*\
  !*** ./src/assets/string-resources/tramites/antecedentes-fiscales.json ***!
  \*************************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"error-title":"Lo sentimos","error-form":"1. Verifique que los datos diligenciados sean correctos","error-request":"Se produjo un error al procesar la solicitud","success":"Certificado generado con éxito"}};

/***/ })

}]);
//# sourceMappingURL=tramites-contraloria-antecedentes-fiscales-antecedentes-fiscales-module-es2015.07bb85f0c8b265950946.js.map