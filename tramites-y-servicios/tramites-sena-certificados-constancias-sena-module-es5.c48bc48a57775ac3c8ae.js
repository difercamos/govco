(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-sena-certificados-constancias-sena-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mb-3\" *ngIf=\"descarga\">\r\n  <app-notifications [typeMessage]=\"'success'\" [title]=\"'Tu certificado ha sido descargado'\" [show]=\"descarga\"></app-notifications>\r\n</div>\r\n\r\n<div class=\"card govco-card col-md-12\">\r\n  <div class=\"card-header pl-2 pb-0 pt-0\">\r\n      <h3 class=\"result-section\">Resultado de búsqueda </h3>\r\n      <h3 class=\"title-section pt-2\">Datos del solicitante</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\" id=\"tipoBusquedaGroup\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Nombres y Apellidos</label>\r\n              <div>\r\n                {{nombreAprendiz}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Número de identificación</label>\r\n              <div> {{datosSolicitante.documento}} </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p class=\"area-note-selago mt-3\">\r\n          <em class=\"content\">\r\n            {{ noticeMessage }} <a href=\"https://get.adobe.com/es/reader/\" ><strong>AQUÍ</strong></a>\r\n          </em>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main-sena-advice\">\r\n  <div class=\"card govco-card\" id=\"datosSolicitanteGroup\">\r\n    <div class=\"card-header pl-4 pb-0 pt-0\">\r\n      <h3 class=\"result-section\">Selecciona los datos a descargar</h3>\r\n      <p *ngIf=\"!certificadosConstancias\"><em>Loading...</em></p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n        <app-tables [tableType]=\"'simple'\" [hContent]=\"tSimple.Header\" [bContent]=\"tSimple.Body\" [bConfig]=\"tSimple.ConfigBody\" (click)=\"msgDescargar()\"></app-tables>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mb-3\" *ngIf=\"requestFailure\">\r\n  <app-notifications \r\n  [typeMessage]=\"'error'\" \r\n  [message]=\"messages.searchEmpty\" \r\n  [title]=\"'Lo sentimos'\"\r\n  [show]=\"requestFailure\" \r\n  class=\"mb-3\"></app-notifications>\r\n</div>\r\n\r\n<div class=\"card govco-card col-md-12 pt-4 pb-4\">\r\n  <div class=\"card-body p-0 pl-3\">\r\n    <div class=\"row\" id=\"tipoBusquedaGroup\" [formGroup]=\"tipoConsultaForm\">\r\n      <h3 class=\"col-md-4 m-auto\">1. Tipo de búsqueda </h3>\r\n      <div class=\"col-md-5\">\r\n        <div class=\"m-auto\">\r\n          <!-- Documento de identidad -->\r\n          <label class=\"radiobutton-govco mb-0\">\r\n            <input type=\"radio\" id=\"documento\" value=\"DOC\" formControlName=\"tipoConsulta\" [checked]='true'>\r\n            <label for=\"documento\" class=\"form-group-govco\">Documento de identidad</label>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>    \r\n      <div class=\"col-md-3\">\r\n          <div class=\"m-auto\">\r\n          <!-- Regsitro -->\r\n          <label class=\"radiobutton-govco mb-0\">\r\n            <input type=\"radio\" id=\"registro\" value=\"REG\" formControlName=\"tipoConsulta\">\r\n            <label for=\"registro\" class=\"form-group-govco\">Registro</label>\r\n            <div class=\"radiobutton-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card main-sena-advice col-md-12\" id=\"datosSolicitanteGroup\">\r\n  <div class=\"card-header pl-2 pb-0\">\r\n      <h3 class=\"title-section\">Datos del solicitante</h3>\r\n  </div>     \r\n  <div class=\"card-body\">\r\n    <div class=\"row\" *ngIf=\"tipoConsultaForm.value.tipoConsulta != 'REG'\" [formGroup]=\"documentoForm\"\r\n      [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Tipo de documento</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\" [items]=\"tiposDocumento\">\r\n          </app-dropdownlist>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Número de identificación</label>\r\n          <input class=\"form-control input-govco\" type=\"text\" formControlName=\"documento\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"tipoConsultaForm.value.tipoConsulta == 'REG'\" [formGroup]=\"registroForm\"\r\n      [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n      <div class=\"col-md-6 input-center mb-3\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Número de registro</label>\r\n          <input class=\"form-control input-govco\" type=\"text\" formControlName=\"registro\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"tipoConsultaForm.value.tipoConsulta == 'REG'\">\r\n      <p class=\"center\">\r\n        {{ messages.registry }}\r\n      </p>\r\n    </div>    \r\n    <p class=\"area-note-selago mt-3\">\r\n      <em class=\"content\">\r\n          {{ messages.advice }}\r\n      </em>          \r\n    </p>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row recaptcha-container\" [formGroup]=\"recaptchaForm\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n        appInputValidator [validate]=\"invalidForm\">\r\n        <div class=\"form-group\">\r\n          <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"certificado-constancia-footer col-md-12\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"consultar()\">BUSCAR</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"senaContainer\" class=\"row\">\r\n    <app-tramite-detail class=\"col-md-12\"\r\n    [name] = \"'certificados-constancias'\"\r\n    [owner] = \"'sena'\"\r\n    [id]= \"'1033'\">\r\n    </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n      <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n      <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T1033'\" [type]=\"'redirect'\"></app-btn-volver>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".constancia-footer {\n  margin-top: 1.2rem;\n  text-align: center;\n}\n\n.main-sena-advice {\n  margin-top: 2rem;\n}\n\n.main-sena-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1jb25zdGFuY2lhLWxpc3QvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcc2VuYVxcY2VydGlmaWNhZG9zLWNvbnN0YW5jaWFzXFxjb21wb25lbnRzXFxjZXJ0aWZpY2Fkby1jb25zdGFuY2lhLWxpc3RcXGNlcnRpZmljYWRvLWNvbnN0YW5jaWEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1jb25zdGFuY2lhLWxpc3QvY2VydGlmaWNhZG8tY29uc3RhbmNpYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDRTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL3NlbmEvY2VydGlmaWNhZG9zLWNvbnN0YW5jaWFzL2NvbXBvbmVudHMvY2VydGlmaWNhZG8tY29uc3RhbmNpYS1saXN0L2NlcnRpZmljYWRvLWNvbnN0YW5jaWEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zdGFuY2lhLWZvb3RlcntcclxuICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi1zZW5hLWFkdmljZSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgLmdvdmNvLWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb25zdGFuY2lhLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi1zZW5hLWFkdmljZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4ubWFpbi1zZW5hLWFkdmljZSAuZ292Y28tY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CertificadoConstanciaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoConstanciaListComponent", function() { return CertificadoConstanciaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sena_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sena-utils.service */ "./src/app/tramites/sena/certificados-constancias/services/sena-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stringResources/tramites/certificados-constancias.json */ "./src/assets/string-resources/tramites/certificados-constancias.json");
var _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/certificados-constancias.json */ "./src/assets/string-resources/tramites/certificados-constancias.json", 1);





var CertificadoConstanciaListComponent = /** @class */ (function () {
    function CertificadoConstanciaListComponent(senaUtils, router) {
        this.senaUtils = senaUtils;
        this.router = router;
        this.descarga = false;
        this.tSimple = {
            Header: [],
            Body: [],
            ConfigBody: []
        };
    }
    CertificadoConstanciaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var e_1, _a;
        this.noticeMessage = _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_4__.messages.adobe;
        this.datosSolicitante = this.senaUtils.getDatosSolicitante();
        if (!this.datosSolicitante) {
            this.router.navigate(['/SENA/certificados-y-constancias-academicas/T1033/']);
        }
        this.certificadosConstancias = this.senaUtils.getListCertificadosConstancias();
        if (this.datosSolicitante.registro !== undefined && this.datosSolicitante.registro !== '' && this.datosSolicitante.registro != null) {
            var certificado = this.certificadosConstancias.filter(function (x) { return x.IDCERT === _this.datosSolicitante.registro; })[0];
            this.datosSolicitante.tipoDocumento = certificado.TIPO_IDENT;
            this.datosSolicitante.documento = certificado.NRO_IDENT;
            this.nombreAprendiz = this.certificadosConstancias[0].NOMBRE_APRENDIZ;
        }
        else {
            this.nombreAprendiz = this.certificadosConstancias[0].NOMBRE_APRENDIZ;
        }
        this.SIMPLE = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.certificadosConstancias), _c = _b.next(); !_c.done; _c = _b.next()) {
                var data = _c.value;
                var tipo = "Certificado";
                if (data.TIPO_ARCHIVO == 'E') {
                    tipo = "Constancia";
                }
                var estado = "";
                if (data.FECHA_FIRMA) {
                    estado = "Firmado";
                }
                var fechaTime = data.FECHA_FIRMA.split(' ');
                var fecha = fechaTime[0].split('/');
                var d = fecha[0];
                var m = fecha[1];
                var a = fecha[2];
                var fechaFormat = d + '-' + m + '-' + a;
                var obj = {
                    Id: data.IDCERT,
                    type: tipo,
                    program: data.NO_ORDEN + '-' + data.PROGRAMA,
                    date: fechaFormat,
                    state: estado,
                    download: '',
                    url: data.URLCERT
                };
                this.SIMPLE.push(obj);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.setTableSimplecData();
    };
    CertificadoConstanciaListComponent.prototype.msgDescargar = function () {
        this.descarga = true;
        window.scroll(0, 0);
        this.setStep('4');
    };
    CertificadoConstanciaListComponent.prototype.setStep = function (step) {
        var s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    };
    // Función set para la organización de datos de tabla tipo simple
    CertificadoConstanciaListComponent.prototype.setTableSimplecData = function () {
        var e_2, _a, e_3, _b;
        // Estructura de configuración header por columna
        var header = [
            { content: 'Id', columnName: 'id', order: 0, hidden: true },
            { content: 'Tipo de certificado', columnName: 'type', class: 'col-width-15', order: 1 },
            { content: 'Programa', columnName: 'program', class: 'col-width-25', order: 2 },
            { content: 'Fecha de certificación', columnName: 'date', class: 'col-width-20', order: 3 },
            { content: 'Estado del aprendiz', columnName: 'state', class: 'col-width-15', order: 4 },
            { content: 'Descargar', columnName: 'download', class: 'col-width-15', order: 5 },
            { content: 'Url', columnName: 'url', order: 6, hidden: true }
        ];
        // Estructura de configuración del contenido por columna
        var configBody = [
            { columnName: 'id', columnType: 'number' },
            { columnName: 'type', columnType: 'string', class: 'col-width-15 title' },
            { columnName: 'program', columnType: 'string', class: 'col-width-25' },
            { columnName: 'date', columnType: 'date', class: 'col-width-20' },
            { columnName: 'state', columnType: 'string', class: 'col-width-15' },
            { columnName: 'download', columnType: 'string', class: 'col-width-15' },
            { columnName: 'url', columnType: 'string' },
        ];
        // Inicialización de data
        var dataSimple = this.SIMPLE;
        // Ordena header respecto al orden registrado
        // header = header.sort((a, b) => a.order !== undefined && b.order !== undefined ? a.order - b.order : -1);
        var headerSort;
        headerSort = header.sort(function (a, b) { return a.order !== undefined && b.order !== undefined ? a.order - b.order : -1; });
        header = headerSort;
        this.tSimple.Header = header;
        this.tSimple.ConfigBody = configBody;
        try {
            // Recorre datos de webservices
            for (var dataSimple_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](dataSimple), dataSimple_1_1 = dataSimple_1.next(); !dataSimple_1_1.done; dataSimple_1_1 = dataSimple_1.next()) {
                var data = dataSimple_1_1.value;
                var listElements = [];
                try {
                    // Recorre configuración de header
                    for (var header_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](header), header_1_1 = header_1.next(); !header_1_1.done; header_1_1 = header_1.next()) {
                        var config = header_1_1.value;
                        var cellData = data[config.columnName];
                        var el = { content: cellData };
                        // Caso columna 'date'
                        if (config.columnName === 'date') {
                            el.content = this.convertStringToDate(cellData, '-');
                        }
                        // Caso columna 'download'
                        if (config.columnName === 'download') {
                            el.event = this.eventButton;
                            el.class = 'govco-icon govco-icon-down-arrow-n btn btn-size-3 btn-transparent color-dodger-blue';
                            el.type = 'button';
                        }
                        // Agrega columna a fila listElements
                        listElements.push(el);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (header_1_1 && !header_1_1.done && (_b = header_1.return)) _b.call(header_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                // Agrega fila a body
                this.tSimple.Body.push(listElements);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (dataSimple_1_1 && !dataSimple_1_1.done && (_a = dataSimple_1.return)) _a.call(dataSimple_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    // Función de ejemplo para el llamado de funciones
    // e: Evento click
    // item: Fila seleccionada
    // index: Index de la fila seleccionada
    CertificadoConstanciaListComponent.prototype.eventButton = function (e, item, index) {
        window.location.href = item[6].content;
    };
    // Función de ejemplo para convertir la fecha tipo string a Date.
    // str: Fecha tipo string ej: dd-mm-yyyy
    // character: Carácter para extraer los números de días, mes y año de la fecha
    CertificadoConstanciaListComponent.prototype.convertStringToDate = function (str, character) {
        var arrDate = str.split(character);
        var day = Number(arrDate[0]);
        var month = Number(arrDate[1]) - 1;
        var year = Number(arrDate[2]);
        return new Date(year, month, day);
    };
    CertificadoConstanciaListComponent.ctorParameters = function () { return [
        { type: _services_sena_utils_service__WEBPACK_IMPORTED_MODULE_2__["SenaUtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CertificadoConstanciaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificado-constancia-list',
            template: __webpack_require__(/*! raw-loader!./certificado-constancia-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.html"),
            styles: [__webpack_require__(/*! ./certificado-constancia-list.component.scss */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.scss")]
        })
    ], CertificadoConstanciaListComponent);
    return CertificadoConstanciaListComponent;
}());



/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".constancia-footer {\n  margin-top: 1.2rem;\n  text-align: center;\n}\n\n.main-sena-advice {\n  margin-top: 1rem;\n}\n\n.main-sena-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n\n.certificado-constancia-footer {\n  text-align: center;\n}\n\n.certificado-constancia-footer button {\n  margin: 10px;\n}\n\n.input-center {\n  margin: auto;\n}\n\n.center {\n  text-align: center;\n  margin: auto;\n}\n\n.line-border {\n  border-radius: 15px;\n  border: 1px solid #c5ddf2;\n  padding: 10px;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1jb25zdGFuY2lhL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXHNlbmFcXGNlcnRpZmljYWRvcy1jb25zdGFuY2lhc1xcY29tcG9uZW50c1xcY2VydGlmaWNhZG8tY29uc3RhbmNpYVxcY2VydGlmaWNhZG8tY29uc3RhbmNpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1jb25zdGFuY2lhL2NlcnRpZmljYWRvLWNvbnN0YW5jaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENFO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQ0NOOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURHRTtFQUNJLFlBQUE7QUNETjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9jZXJ0aWZpY2Fkby1jb25zdGFuY2lhL2NlcnRpZmljYWRvLWNvbnN0YW5jaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc3RhbmNpYS1mb290ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tc2VuYS1hZHZpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gIC5nb3Zjby1jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNlcnRpZmljYWRvLWNvbnN0YW5jaWEtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1jZW50ZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5saW5lLWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk3LCAyMjEsIDI0Mik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiIsIi5jb25zdGFuY2lhLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi1zZW5hLWFkdmljZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubWFpbi1zZW5hLWFkdmljZSAuZ292Y28tY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNlcnRpZmljYWRvLWNvbnN0YW5jaWEtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNlcnRpZmljYWRvLWNvbnN0YW5jaWEtZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmlucHV0LWNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubGluZS1ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzVkZGYyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: CertificadoConstanciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoConstanciaComponent", function() { return CertificadoConstanciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sena_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sena-utils.service */ "./src/app/tramites/sena/certificados-constancias/services/sena-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stringResources/tramites/certificados-constancias.json */ "./src/assets/string-resources/tramites/certificados-constancias.json");
var _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/certificados-constancias.json */ "./src/assets/string-resources/tramites/certificados-constancias.json", 1);
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);







var CertificadoConstanciaComponent = /** @class */ (function () {
    function CertificadoConstanciaComponent(senaUtils, router, fb) {
        this.senaUtils = senaUtils;
        this.router = router;
        this.fb = fb;
        this.invalidForm = false;
        this.requestFailure = false;
        this.getParams();
        this.tipoConsultaForm = this.fb.group({
            tipoConsulta: ['']
        });
        this.documentoForm = this.fb.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_6__.regexp.numeric)])],
        });
        this.registroForm = this.fb.group({
            registro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.recaptchaForm = this.fb.group({
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CertificadoConstanciaComponent.prototype.ngOnInit = function () {
        this.certificadosConstancias = [];
        this.messages = {
            advice: _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_5__.messages.advice,
            registry: _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_5__.messages.registry,
            searchEmpty: _stringResources_tramites_certificados_constancias_json__WEBPACK_IMPORTED_MODULE_5__.messages.searchEmpty
        };
    };
    CertificadoConstanciaComponent.prototype.getParams = function () {
        this.tiposDocumento = this.senaUtils.getTiposDocumento();
    };
    CertificadoConstanciaComponent.prototype.consultar = function () {
        var _this = this;
        if ((!this.registroForm.valid || !this.recaptchaForm.valid) && this.tipoConsultaForm.value.tipoConsulta == 'REG') {
            this.invalidForm = true;
            return;
        }
        if ((!this.documentoForm.valid || !this.recaptchaForm.valid) && this.tipoConsultaForm.value.tipoConsulta != 'REG') {
            this.invalidForm = true;
            window.scroll(0, 0);
            return;
        }
        this.datosSolicitante = {
            tipoDocumento: this.documentoForm.value.tipoDocumento.value,
            documento: this.documentoForm.value.documento,
            registro: this.registroForm.value.registro
        };
        console.log(this.datosSolicitante);
        this.senaUtils.consultarCertificadosCosntancias(this.datosSolicitante).subscribe(
        // Success response
        function (response) {
            if (response !== undefined && response.length > 0) {
                _this.senaUtils.setDatosSolicitante(_this.datosSolicitante);
                _this.certificadosConstancias = response;
                _this.senaUtils.setListCertificadosConstancias(_this.certificadosConstancias);
                // Salida
                _this.setStep("3");
                _this.router.navigate(['/SENA/certificados-y-constancias-academicas/T1033/list']);
            }
        }, 
        // Failure response
        function (error) {
            _this.invalidForm = true;
            _this.requestFailure = true;
            window.scroll(0, 0);
            return;
        });
    };
    CertificadoConstanciaComponent.prototype.setStep = function (step) {
        var s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    };
    CertificadoConstanciaComponent.ctorParameters = function () { return [
        { type: _services_sena_utils_service__WEBPACK_IMPORTED_MODULE_3__["SenaUtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CertificadoConstanciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificado-constancia',
            template: __webpack_require__(/*! raw-loader!./certificado-constancia.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.html"),
            styles: [__webpack_require__(/*! ./certificado-constancia.component.scss */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.scss")]
        })
    ], CertificadoConstanciaComponent);
    return CertificadoConstanciaComponent;
}());



/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvc2VuYS9jZXJ0aWZpY2Fkb3MtY29uc3RhbmNpYXMvY29tcG9uZW50cy9zZW5hL3NlbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL3NlbmEvY2VydGlmaWNhZG9zLWNvbnN0YW5jaWFzL2NvbXBvbmVudHMvc2VuYS9zZW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjp3aGl0ZTt9Il19 */"

/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenaComponent", function() { return SenaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SenaComponent = /** @class */ (function () {
    function SenaComponent() {
    }
    SenaComponent.prototype.ngOnInit = function () {
    };
    SenaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sena',
            template: __webpack_require__(/*! raw-loader!./sena.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.html"),
            styles: [__webpack_require__(/*! ./sena.component.css */ "./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.css")]
        })
    ], SenaComponent);
    return SenaComponent;
}());



/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/sena-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/sena-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SenaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenaRoutingModule", function() { return SenaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sena_sena_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sena/sena.component */ "./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.ts");
/* harmony import */ var _components_certificado_constancia_certificado_constancia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/certificado-constancia/certificado-constancia.component */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.ts");
/* harmony import */ var _components_certificado_constancia_list_certificado_constancia_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/certificado-constancia-list/certificado-constancia-list.component */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.ts");






var routes = [
    {
        path: '',
        component: _components_sena_sena_component__WEBPACK_IMPORTED_MODULE_3__["SenaComponent"],
        children: [
            {
                path: '',
                component: _components_certificado_constancia_certificado_constancia_component__WEBPACK_IMPORTED_MODULE_4__["CertificadoConstanciaComponent"]
            },
            {
                path: 'list',
                component: _components_certificado_constancia_list_certificado_constancia_list_component__WEBPACK_IMPORTED_MODULE_5__["CertificadoConstanciaListComponent"]
            }
        ]
    }
];
var SenaRoutingModule = /** @class */ (function () {
    function SenaRoutingModule() {
    }
    SenaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SenaRoutingModule);
    return SenaRoutingModule;
}());



/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/sena.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/sena.module.ts ***!
  \***********************************************************************/
/*! exports provided: SenaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenaModule", function() { return SenaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sena_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sena-routing.module */ "./src/app/tramites/sena/certificados-constancias/sena-routing.module.ts");
/* harmony import */ var _components_sena_sena_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sena/sena.component */ "./src/app/tramites/sena/certificados-constancias/components/sena/sena.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_certificado_constancia_certificado_constancia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/certificado-constancia/certificado-constancia.component */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia/certificado-constancia.component.ts");
/* harmony import */ var _components_certificado_constancia_list_certificado_constancia_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/certificado-constancia-list/certificado-constancia-list.component */ "./src/app/tramites/sena/certificados-constancias/components/certificado-constancia-list/certificado-constancia-list.component.ts");
/* harmony import */ var _services_sena_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/sena-utils.service */ "./src/app/tramites/sena/certificados-constancias/services/sena-utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");











var SenaModule = /** @class */ (function () {
    function SenaModule() {
    }
    SenaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_sena_sena_component__WEBPACK_IMPORTED_MODULE_4__["SenaComponent"], _components_certificado_constancia_certificado_constancia_component__WEBPACK_IMPORTED_MODULE_6__["CertificadoConstanciaComponent"], _components_certificado_constancia_list_certificado_constancia_list_component__WEBPACK_IMPORTED_MODULE_7__["CertificadoConstanciaListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sena_routing_module__WEBPACK_IMPORTED_MODULE_3__["SenaRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaModule"]
            ],
            entryComponents: [],
            providers: [_services_sena_utils_service__WEBPACK_IMPORTED_MODULE_8__["SenaUtilsService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SenaModule);
    return SenaModule;
}());



/***/ }),

/***/ "./src/app/tramites/sena/certificados-constancias/services/sena-utils.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tramites/sena/certificados-constancias/services/sena-utils.service.ts ***!
  \***************************************************************************************/
/*! exports provided: SenaUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenaUtilsService", function() { return SenaUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SenaUtilsService = /** @class */ (function () {
    function SenaUtilsService(http) {
        this.http = http;
        this.urlTramite = {
            consultar: 'sena/CertificadoConstancia/consultar'
        };
    }
    SenaUtilsService.prototype.consultarCertificadosCosntancias = function (datosSolicitante) {
        return this.http.post(this.urlTramite.consultar, datosSolicitante, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('angular-show-loading', 'true')
        });
    };
    SenaUtilsService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SenaUtilsService.prototype.setDatosSolicitante = function (datosSolicitante) {
        this.datosSolicitante = datosSolicitante;
    };
    SenaUtilsService.prototype.getDatosSolicitante = function () {
        return this.datosSolicitante;
    };
    SenaUtilsService.prototype.setListCertificadosConstancias = function (certificadosConstancias) {
        this.certificadosConstancias = certificadosConstancias;
    };
    SenaUtilsService.prototype.getListCertificadosConstancias = function () {
        return this.certificadosConstancias;
    };
    SenaUtilsService.prototype.getTiposDocumento = function () {
        this.tiposDocumento = [
            { value: 'CC', text: 'Cédula de ciudadanía' },
            { value: 'CE', text: 'Cédula de extranjería' },
            { value: 'PEP', text: 'Permiso especial de permanencia' },
            { value: 'PS', text: 'Pasaporte' },
            { value: 'TI', text: 'Tarjeta de identidad' },
            { value: 'DNI', text: 'Documento Nacional de Identificación (DNI)' },
            { value: 'RC', text: 'Registro civil' },
            { value: 'PR', text: 'Pep ramv' }
        ];
        return this.tiposDocumento;
    };
    SenaUtilsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SenaUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SenaUtilsService);
    return SenaUtilsService;
}());



/***/ }),

/***/ "./src/assets/string-resources/tramites/certificados-constancias.json":
/*!****************************************************************************!*\
  !*** ./src/assets/string-resources/tramites/certificados-constancias.json ***!
  \****************************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"advice":"Ten en cuenta:  podrás realizar este trámite virtual, si el certificado académico fue expedido después del año 2010.  Para estudios anteriores dirígete personalmente a tu centro de formación.","adobe":"Ten en cuenta que para visualizar los certificados requieres de la aplicación Adobe Reader, si no la tienes la puedes descargar ","registry":"Número de Registro aquel suministrado en su Centro de Formación","searchEmpty":"Los datos ingresados son incorrectos, te recomendamos:  \n  1. Revisar que los datos ingresados sean los solicitados."}};

/***/ })

}]);
//# sourceMappingURL=tramites-sena-certificados-constancias-sena-module-es5.c48bc48a57775ac3c8ae.js.map