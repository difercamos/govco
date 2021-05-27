(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test/modal-detail/modal-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/modal-detail/modal-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" (click)=\"dismiss()\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\r\n</div>\r\n\r\n<div class=\"modal-body text-center\">\r\n    <strong>Content modal</strong> <br>\r\n    <strong>Id:</strong> {{data[0].content}} <br>\r\n    <strong>Nombre prestador:</strong> {{data[1].content}} <br>\r\n    <strong>Código prestador:</strong> {{data[2].content}} <br>\r\n    <strong>Depto:</strong> {{data[3].content}}\r\n</div>\r\n\r\n<div class=\"modal-footer justify-content-center\" id=\"modal-options\">\r\n    <button type=\"button\" class=\"btn btn-high\" (click)=\"dismiss()\"> Cerrar </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test/test.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test/test.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n    <h1 class=\"h2\">Componentes CDN - GOV.CO</h1>\r\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 mb-3\">\r\n        <div class=\"card govco-card\">\r\n            <div class=\"card-header\">\r\n                <h2>Notificaciones</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <app-notifications [typeMessage]=\"'success'\" [message]=\"'Mensaje de prueba'\" [title]=\"'Lo sentimos'\" [show]='true' class=\"mb-2\"></app-notifications>\r\n                <app-notifications [typeMessage]=\"'info'\" [message]=\"'Mensaje de prueba'\" [title]=\"'Lo sentimos'\" [show]='true' class=\"mb-2\"></app-notifications>\r\n                <app-notifications [typeMessage]=\"'warning'\" [message]=\"'Mensaje de prueba'\" [title]=\"'Lo sentimos'\" [show]='true' class=\"mb-2\"></app-notifications>\r\n                <app-notifications [typeMessage]=\"'error'\" [message]=\"'Mensaje de prueba'\" [title]=\"'Lo sentimos'\" [show]='true' class=\"mb-2\"></app-notifications>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 mb-3\">\r\n        <div class=\"card govco-card\">\r\n            <div class=\"card-header\">\r\n                <h2>Alertas</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <button (click)=\"getAlert('error')\" class=\"btn btn-high\">Alert error</button>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <button (click)=\"getAlert('warning')\" class=\"btn btn-high\">Alert warning</button>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <button (click)=\"getAlert('success')\" class=\"btn btn-high\">Alert success</button>\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-4\">\r\n                        <button (click)=\"getAlert('info')\" class=\"btn btn-high\">Alert info</button>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <button (click)=\"getAlert('maintenance')\" class=\"btn btn-high\">Alert maintenance</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 mb-3\">\r\n        <div class=\"card govco-card\">\r\n            <div class=\"card-header\">\r\n                <h2>Tablas</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\"><h2>Tabla básica</h2></div>\r\n                <app-tables [tableType]=\"'basic'\" [hContent]=\"tBasic.Header\" [bContent]=\"tBasic.Body\"  [bConfig]=\"tBasic.ConfigBody\"></app-tables>\r\n                <div class=\"row\"><h2>Tabla Simple</h2></div>\r\n                <app-tables [tableType]=\"'simple'\" [hContent]=\"tSimple.Header\" [bContent]=\"tSimple.Body\" [bConfig]=\"tSimple.ConfigBody\"></app-tables>\r\n                <div class=\"row\"><h2>Tabla Detail</h2></div>\r\n                <app-tables \r\n                [tableType]=\"'detail'\" \r\n                [hContent]=\"tDetail.Header\" \r\n                [bContent]=\"tDetail.Body\" \r\n                [bConfig]=\"tDetail.ConfigBody\"\r\n                [showDetail]=\"true\"></app-tables>\r\n                <div class=\"row\"><h2>Tabla Filters</h2></div>\r\n                <app-tables [tableType]=\"'filter'\" [hContent]=\"tFilter.Header\" [bContent]=\"tFilter.Body\" [bConfig]=\"tFilter.ConfigBody\" [fConfig]=\"tFilter.ConfigFilter\"></app-tables>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/forms/services/table-filters.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/forms/services/table-filters.ts ***!
  \********************************************************/
/*! exports provided: FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER", function() { return FILTER; });
const FILTER = [
    {
        id: 1,
        exp: 123456,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vigente',
        date: '01-01-2010',
        mod: 'Importar',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 2,
        exp: 789,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vencido',
        date: '02-01-2010',
        mod: 'Importar, envasar y vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 3,
        exp: 123456,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vigente',
        date: '03-01-2010',
        mod: 'Envasar',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 4,
        exp: 789,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vencido',
        date: '04-01-2010',
        mod: 'Vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 5,
        exp: 123456,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vigente',
        date: '05-01-2010',
        mod: 'Importar, envasar y vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 6,
        exp: 789,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vencido',
        date: '06-01-2010',
        mod: 'Importar, envasar y vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 7,
        exp: 123456,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vigente',
        date: '07-09-2019',
        mod: 'Prueba',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 8,
        exp: 789,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vencido',
        date: '07-01-2010',
        mod: 'Importar, envasar y vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 9,
        exp: 123456,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vigente',
        date: '08-01-2010',
        mod: 'Importar, envasar y vender',
        titular: 'Empresa de comercio exterior de Polonia agros'
    },
    {
        id: 10,
        exp: 789,
        name: 'Nombre del producto en caso de que sea muy largo',
        register: 'INVIMA 2001M-0000398',
        state: 'Vencido',
        date: '10-01-2010',
        mod: 'Prueba',
        titular: 'Empresa de comercio exterior de Polonia agros'
    }
];


/***/ }),

/***/ "./src/app/shared/forms/services/table-simple.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/forms/services/table-simple.ts ***!
  \*******************************************************/
/*! exports provided: SIMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMPLE", function() { return SIMPLE; });
const SIMPLE = [
    {
        id: 1,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 2,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 3,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 4,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 5,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 6,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 7,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 8,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 9,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 10,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 11,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 12,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    },
    {
        id: 13,
        type: 'Cerfificado',
        program: '16788-Complementaria virtual en desarrollo de un modelo de planeación estrategica de negocios electronicos',
        date: '01 - 01 - 1992',
        state: 'Firmado',
        download: ''
    }
];


/***/ }),

/***/ "./src/app/test/modal-detail/modal-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/test/modal-detail/modal-detail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvbW9kYWwtZGV0YWlsL21vZGFsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/modal-detail/modal-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/test/modal-detail/modal-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetailComponent", function() { return ModalDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalDetailComponent = class ModalDetailComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.detail = [];
    }
    ngOnInit() { }
    dismiss() {
        this.activeModal.close();
    }
};
ModalDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalDetailComponent.prototype, "data", void 0);
ModalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-detail',
        template: __webpack_require__(/*! raw-loader!./modal-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/modal-detail/modal-detail.component.html"),
        styles: [__webpack_require__(/*! ./modal-detail.component.scss */ "./src/app/test/modal-detail/modal-detail.component.scss")]
    })
], ModalDetailComponent);



/***/ }),

/***/ "./src/app/test/test-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test/test.component.ts");




const routes = [
    {
        path: "",
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"],
    }
];
let TestRoutingModule = class TestRoutingModule {
};
TestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TestRoutingModule);



/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/test/test-routing.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test/test.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modal_detail_modal_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-detail/modal-detail.component */ "./src/app/test/modal-detail/modal-detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let TestModule = class TestModule {
};
TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"], _modal_detail_modal_detail_component__WEBPACK_IMPORTED_MODULE_6__["ModalDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        entryComponents: [_modal_detail_modal_detail_component__WEBPACK_IMPORTED_MODULE_6__["ModalDetailComponent"]]
    })
], TestModule);



/***/ }),

/***/ "./src/app/test/test/test.component.scss":
/*!***********************************************!*\
  !*** ./src/app/test/test/test.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test/test.component.ts":
/*!*********************************************!*\
  !*** ./src/app/test/test/test.component.ts ***!
  \*********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_detail_modal_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-detail/modal-detail.component */ "./src/app/test/modal-detail/modal-detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_forms_services_table_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/forms/services/table-details */ "./src/app/shared/forms/services/table-details.ts");
/* harmony import */ var _shared_forms_services_table_simple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/forms/services/table-simple */ "./src/app/shared/forms/services/table-simple.ts");
/* harmony import */ var _shared_forms_services_table_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/forms/services/table-filters */ "./src/app/shared/forms/services/table-filters.ts");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");








let TestComponent = class TestComponent {
    constructor(modalService, modalAlertService) {
        this.modalAlertService = modalAlertService;
        this.tBasic = {
            Header: [],
            Body: [],
            ConfigBody: [],
        };
        this.tSimple = {
            Header: [],
            Body: [],
            ConfigBody: []
        };
        this.tDetail = {
            Header: [],
            Body: [],
            ConfigBody: []
        };
        this.tFilter = {
            Header: [],
            Body: [],
            ConfigBody: [],
            ConfigFilter: []
        };
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.openModal = (e, item, index) => {
            const modal = this.modalService.open(_modal_detail_modal_detail_component__WEBPACK_IMPORTED_MODULE_2__["ModalDetailComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.modalService = modalService;
    }
    ngOnInit() {
        this.flagTrue = true;
        this.setTableBasicData();
        this.setTableSimplecData();
        this.setTableDetailcData();
        this.setTableFilterData();
    }
    // Función set para la organización de datos de tabla tipo básic
    setTableBasicData() {
        // Estructura de configuración header por columna
        const header = [
            { content: 'Id', columnName: 'id', hidden: true },
            { content: 'Medio', columnName: 'med' },
            { content: 'Detalle', columnName: 'det' }
        ];
        // Datos ejemplo body
        const body = [
            { content: 'id', type: 'number' },
            { content: 'WEB', type: 'text', link: 'www.google.com' },
            { content: 'Registro de datos en linea', type: 'link', link: 'www.google.com' }
        ];
        // Estructura de configuración del contenido por columna
        const configBody = [
            { columnName: 'id', columnType: 'number' },
            { columnName: 'med', columnType: 'string' },
            { columnName: 'det', columnType: 'string' }
        ];
        this.tBasic.Header = header;
        this.tBasic.Body.push(body);
        this.tBasic.ConfigBody = configBody;
    }
    // Función set para la organización de datos de tabla tipo simple
    setTableSimplecData() {
        // Estructura de configuración header por columna
        let header = [
            { content: 'Id', columnName: 'id', order: 0, hidden: true },
            { content: 'Tipo de certificado', columnName: 'type', class: 'col-width-10', order: 1 },
            { content: 'Programa', columnName: 'program', class: 'col-width-50', order: 2 },
            { content: 'Fecha de certificación', columnName: 'date', class: 'col-width-20', order: 3 },
            { content: 'Estado del aprendiz', columnName: 'state', class: 'col-width-10', order: 4 },
            { content: 'Descargar', columnName: 'download', class: 'col-width-10', order: 5 }
        ];
        // Estructura de configuración del contenido por columna
        const configBody = [
            { columnName: 'id', columnType: 'number' },
            { columnName: 'type', columnType: 'string', class: 'col-width-10 title' },
            { columnName: 'program', columnType: 'string', class: 'col-width-50' },
            { columnName: 'date', columnType: 'date', class: 'col-width-20' },
            { columnName: 'state', columnType: 'string', class: 'col-width-10' },
            { columnName: 'download', columnType: 'string', class: 'col-width-10' }
        ];
        // Inicialización de data
        const dataSimple = _shared_forms_services_table_simple__WEBPACK_IMPORTED_MODULE_5__["SIMPLE"];
        // Ordena header respecto al orden registrado
        // header = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        let headerSort;
        headerSort = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        header = headerSort;
        this.tSimple.Header = header;
        this.tSimple.ConfigBody = configBody;
        // Recorre datos de webservices
        for (const data of dataSimple) {
            const listElements = [];
            // Recorre configuración de header
            for (const config of header) {
                const cellData = data[config.columnName];
                const el = { content: cellData };
                // Caso columna 'date'
                if (config.columnName === 'date') {
                    el.content = this.convertStringToDate(cellData, '-');
                }
                // Caso columna 'download'
                if (config.columnName === 'download') {
                    el.event = this.eventButton;
                    el.class = 'govco-icon govco-icon-up-arrow-n btn btn-size-3 btn-transparent color-dodger-blue';
                    el.type = 'button';
                }
                // Agrega columna a fila listElements
                listElements.push(el);
            }
            // Agrega fila a body
            this.tSimple.Body.push(listElements);
        }
    }
    // Función set para la organización de datos de tabla tipo detail
    setTableDetailcData() {
        // Estructura de configuración header por columna
        let header = [
            { content: 'Id', columnName: 'id', hidden: true },
            { content: 'Nombre prestador', columnName: 'name', order: 1 },
            { content: 'Código prestador', columnName: 'code', order: 2 },
            { content: 'Departamento', columnName: 'state', order: 3 },
            { content: 'Municipio', columnName: 'town', order: 4 },
            { content: 'Dirección', columnName: 'address', order: 5 },
            { content: 'Teléfono', columnName: 'telephone', order: 6 }
        ];
        // Estructura de configuración del contenido por columna
        const configBody = [
            { columnName: 'id', columnType: 'number' },
            { columnName: 'name', columnType: 'string' },
            { columnName: 'code', columnType: 'string' },
            { columnName: 'state', columnType: 'string' },
            { columnName: 'town', columnType: 'string' },
            { columnName: 'address', columnType: 'string' },
            { columnName: 'telephone', columnType: 'string' }
        ];
        // Inicialización de data
        const dataSimple = _shared_forms_services_table_details__WEBPACK_IMPORTED_MODULE_4__["DETAILS"];
        // Ordena header respecto al orden registrado
        // header = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        let headerSort;
        headerSort = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        header = headerSort;
        this.tDetail.Header = header;
        this.tDetail.ConfigBody = configBody;
        // Recorre datos de webservices
        for (const data of dataSimple) {
            const listElements = [];
            // Recorre configuración de header
            for (const config of header) {
                const cellData = data[config.columnName];
                const el = { content: cellData };
                // Caso columna 'name'
                if (config.columnName === 'name') {
                    el.type = 'link-event';
                    el.class = 'btn btn-low wspace-normal';
                    el.event = this.openModal;
                }
                // Agrega columna a fila listElements
                listElements.push(el);
            }
            // Agrega fila a body
            this.tDetail.Body.push(listElements);
        }
    }
    // Función set para la organización de datos de tabla tipo filter
    setTableFilterData() {
        // Estructura de configuración header por columna
        let header = [
            { content: 'Id', columnName: 'id', order: 0, hidden: true },
            { content: 'Expediente', columnName: 'exp', class: 'col-width-10', order: 1 },
            { content: 'Nombre del producto', columnName: 'name', class: 'col-width-20', order: 2 },
            { content: 'Registro sanitario', columnName: 'register', class: 'col-width-10', order: 3 },
            { content: 'Fecha de vencimiento', columnName: 'date', class: 'col-width-10', order: 4 },
            { content: 'Modalidad', columnName: 'mod', class: 'col-width-15', order: 5 },
            { content: 'Titular(es)', columnName: 'titular', class: 'col-width-15', order: 6 },
            { content: 'Estado registro', columnName: 'state', class: 'col-width-15', order: 7 },
        ];
        // Estructura de configuración del contenido por columna
        const configBody = [
            { columnName: 'id', columnType: 'number' },
            { columnName: 'exp', columnType: 'string', class: 'col-width-10' },
            { columnName: 'name', columnType: 'string', class: 'col-width-20' },
            { columnName: 'register', columnType: 'string', class: 'col-width-10' },
            { columnName: 'date', columnType: 'date', class: 'col-width-10' },
            { columnName: 'mod', columnType: 'string', class: 'col-width-15 ' },
            { columnName: 'titular', columnType: 'string', class: 'col-width-15' },
            { columnName: 'state', columnType: 'string', class: 'col-width-15' },
        ];
        // Estructura de configuración de filtros por nombre de columna
        const configFilter = [
            { columnName: 'name', type: 'order' },
            { columnName: 'state', type: 'filter-content' },
            { columnName: 'date', type: 'date' },
            { columnName: 'mod', type: 'filter-content' }
        ];
        // Inicialización de data
        const dataFilter = _shared_forms_services_table_filters__WEBPACK_IMPORTED_MODULE_6__["FILTER"];
        // Ordena header
        // header = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        let headerSort;
        headerSort = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        header = headerSort;
        this.tFilter.Header = header;
        this.tFilter.ConfigFilter = configFilter;
        this.tFilter.ConfigBody = configBody;
        // Recorre datos de webservices
        for (const data of dataFilter) {
            const listElements = [];
            // Recorre configuración de header
            for (const config of header) {
                const cellData = data[config.columnName];
                const el = {
                    content: cellData,
                    class: data.state === 'Vigente' ? 'color-green' : 'color-govco'
                };
                if (config.columnName === 'exp') {
                    el.type = 'link-event';
                    el.class = 'btn btn-low';
                    el.event = this.eventButton;
                }
                if (config.columnName === 'date') {
                    el.content = this.convertStringToDate(cellData, '-');
                }
                listElements.push(el);
            }
            this.tFilter.Body.push(listElements);
        }
    }
    // Función de ejemplo para el llamado de funciones
    // e: Evento click
    // item: Fila seleccionada
    // index: Index de la fila seleccionada
    eventButton(e, item, index) { }
    // Función de ejemplo para convertir la fecha tipo string a Date.
    // str: Fecha tipo string ej: dd-mm-yyyy
    // character: Carácter para extraer los números de días, mes y año de la fecha
    convertStringToDate(str, character) {
        const arrDate = str.split(character);
        const day = Number(arrDate[0]);
        const month = Number(arrDate[1]) - 1;
        const year = Number(arrDate[2]);
        return new Date(year, month, day);
    }
    // Función de ejemplo para la ejecución del componente de alertas
    getAlert(type) {
        this.modalAlertService.openNotificationDialog('Título de prueba', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
            'Consequatur, iure? Nisi repellendus suscipit explicabo debitis ut,' +
            ' inventore a quas tempora odio nesciunt sunt dignissimos fugiat, nobis ' +
            ' reiciendis tenetur ratione ullam!', type, () => {
            console.log('Función a ejecutar');
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestComponent.prototype, "flagTrue", void 0);
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test/test.component.html"),
        styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test/test.component.scss")]
    })
], TestComponent);



/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.ad52e1916d6723670b74.js.map