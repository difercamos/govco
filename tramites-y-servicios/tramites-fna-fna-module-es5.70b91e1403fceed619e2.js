(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-fna-fna-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"failureRequest\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12 pb-3\" *ngIf=\"downloadSuccess\">\r\n      <app-notifications [typeMessage]=\"'success'\" [title]=\"'Tu recibo se ha descargado'\"\r\n        [show]=\"downloadSuccess\"></app-notifications>\r\n    </div>\r\n  </div>\r\n<div class=\"card govco-card\" id=\"fna-consulta-container\">\r\n  <h3>Datos solicitante</h3>\r\n  <label class=\"font-weight-bold\">{{userData.nombre}}</label>\r\n  <label>{{descTipoDocumento}} {{userData.documento}}</label>\r\n</div>\r\n<br/>\r\n<div class=\"card govco-card p-0\" id=\"fna-creditos-container\" *ngIf=\"hasCredits\">\r\n    <div class=\"row m-3 pt-2\">\r\n      <div class=\"col-6\"><h3>Lista de créditos</h3></div>\r\n      <div class=\"col-6 text-right\" >Total registros: {{creditsCount}}</div>\r\n    </div>\r\n    <table class=\"table table-fixed\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"col-2 text-center\">Nombre</th>\r\n          <th class=\"col-3 text-center\">Número de crédito</th>\r\n          <th class=\"col-2 text-center\">Estado</th>\r\n          <th class=\"col-3 text-center\">Valor</th>\r\n          <th class=\"col-2 text-center\">Selecciona</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let credit of creditList; let i = index\">\r\n          <td class=\"col-2 text-center\">{{credit.nombre}}</td>\r\n          <td class=\"col-3 text-center\">{{credit.numero}}</td>\r\n          <td class=\"col-2 text-center\">{{estadosCredito[i]}}</td>\r\n          <td class=\"col-3 text-center\">{{credit.valor| currency }}</td>\r\n          <td class=\"col-2 text-center\"><input type=\"checkbox\" id=\"{{'chk'+i}}\" (value)=\"credit.numero\" (change)=\"selectCredit($event, i)\" [(ngModel)]=\"theCheckboxValues[i]\" /></td>\r\n        </tr>\r\n    </table>    \r\n    <div class=\"row\">\r\n      &nbsp;<b>{{theCheckbox}}</b>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-12\"><button class=\"btn btn-round btn-high\" (click)=\"downloadDocument()\">GENERAR RECIBO</button></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      &nbsp;\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/login-fna/login-fna.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fna/components/login-fna/login-fna.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"invalidForm\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"invalidForm\"></app-notifications>\r\n  </div>\r\n</div>\r\n<div class=\"card govco-card p-5 \" id=\"fna-login-container\">\r\n  <div class=\"card-header p-0\">\r\n    <h3 class=\"m-0 title-section\">INICIAR SESIÓN EN FNA</h3>\r\n    <label>Para realizar la consulta debes ser un usuario registrado</label>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 pl-0 mb-3\">\r\n        <div class=\"content-password\">\r\n          <div class=\"row col-12\">\r\n            <label class=\"mb-3\">\r\n              <a (click)=\"openModal()\">\r\n                <p class=\"mb-1\">Si olvidaste tu clave</p>\r\n                <p class=\"mb-1\">Aún no tienes clave</p>\r\n                <p class=\"mb-1\">No te haz registrado</p>\r\n                <p class=\"mb-1\">Se ha bloqueado la clave</p>\r\n              </a>\r\n            </label>\r\n          </div>\r\n          <div class=\"row col-12\">\r\n            <button type=\"button\" class=\"btn btn-round btn-high m-auto\" (click)=\"openModal()\">SOLICITAR CLAVE</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-6 px-0\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n        [validate]=\"invalidForm\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Tipo de documento</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\" placeholder=\"Ej: Cédula de ciudadania\"\r\n            [items]=\"tiposDocumento\"></app-dropdownlist>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"user\" class=\"form-group-govco\">Número de Documento</label>\r\n          <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 102930891\"\r\n            formControlName=\"NumeroDocumento\" pattern=\"[A-Z0-9]+\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"form-group-govco\">Contraseña</label>\r\n          <app-password \r\n            ngDefaultControl \r\n            formControlName=\"password\" \r\n            [maxLength]=\"6\"\r\n            [placeholder]=\"'******'\">\r\n          </app-password>  \r\n        </div>\r\n        <div class=\"row m-3\">\r\n          <!--<re-captcha formControlName=\"recaptcha\"></re-captcha>-->\r\n          <div class=\"row recaptcha-container\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n            appInputValidator [validate]=\"invalidForm\">\r\n            <div class=\"form-group\">\r\n              <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <div class=\"login-btn-container text-center\">\r\n            <button class=\"btn btn-round btn-high\" (click)=\"login()\">INGRESAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fnaContainer\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\" [name]=\"'recibo-pago-credito'\" [owner]=\"'fna'\" [id]=\"'6292'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T6292'\" [type]=\"'redirect'\"></app-btn-volver>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-fixed tbody {\n  height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n\n.table-fixed thead,\n.table-fixed tbody,\n.table-fixed tr,\n.table-fixed td,\n.table-fixed th {\n  display: block;\n}\n\n.table-fixed tr:after {\n  content: \"\";\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n\n.table-fixed tbody td,\n.table-fixed thead > tr > th {\n  float: left;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td {\n  border-bottom: 0;\n  vertical-align: text-bottom;\n  background: #004884;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZm5hL2NvbXBvbmVudHMvY29uc3VsdGEtZGVzY2FyZ2EtcmVjaWJvL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZuYVxcY29tcG9uZW50c1xcY29uc3VsdGEtZGVzY2FyZ2EtcmVjaWJvXFxjb25zdWx0YS1kZXNjYXJnYS1yZWNpYm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL2NvbnN1bHRhLWRlc2NhcmdhLXJlY2liby9jb25zdWx0YS1kZXNjYXJnYS1yZWNpYm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL2NvbnN1bHRhLWRlc2NhcmdhLXJlY2liby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxzY3NzXFxiYXNlXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREY7O0FER0U7Ozs7O0VBS0EsY0FBQTtBQ0FGOztBREVFO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTs7RUFFQSxXQUFBO0FDRUY7O0FEQ0U7O0VBRUEsZ0JBQUE7RUFFQSwyQkFBQTtFQUVBLG1CRTNCZ0I7RUY0QmhCLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL2NvbnN1bHRhLWRlc2NhcmdhLXJlY2liby9jb25zdWx0YS1kZXNjYXJnYS1yZWNpYm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc2Nzcy9iYXNlL19jb2xvcnMuc2Nzc1wiO1xyXG5cclxuLnRhYmxlLWZpeGVkIHRib2R5IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50YWJsZS1maXhlZCB0aGVhZCxcclxuICAudGFibGUtZml4ZWQgdGJvZHksXHJcbiAgLnRhYmxlLWZpeGVkIHRyLFxyXG4gIC50YWJsZS1maXhlZCB0ZCxcclxuICAudGFibGUtZml4ZWQgdGgge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudGFibGUtZml4ZWQgdHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAudGFibGUtZml4ZWQgdGJvZHkgdGQsXHJcbiAgLnRhYmxlLWZpeGVkIHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXHJcbiAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIC8vbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgLy9wYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWRhcmstYmx1ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB9IiwiLnRhYmxlLWZpeGVkIHRib2R5IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1maXhlZCB0aGVhZCxcbi50YWJsZS1maXhlZCB0Ym9keSxcbi50YWJsZS1maXhlZCB0cixcbi50YWJsZS1maXhlZCB0ZCxcbi50YWJsZS1maXhlZCB0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFibGUtZml4ZWQgdHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRhYmxlLWZpeGVkIHRib2R5IHRkLFxuLnRhYmxlLWZpeGVkIHRoZWFkID4gdHIgPiB0aCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQge1xuICBib3JkZXItYm90dG9tOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIGJhY2tncm91bmQ6ICMwMDQ4ODQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIi8vIENvbG9yZXMgZGlzZcOxbyBHT1YuQ09cclxuJGNvbG9yLXNlbGFnbzogI0U1RUVGQjtcclxuJGNvbG9yLWRvZGdlci1ibHVlOiAjMzc3MkZGO1xyXG4kY29sb3ItbWFyaW5lOiAjMzM2NkNDO1xyXG4kY29sb3ItZGFyay1ibHVlOiAjMDA0ODg0O1xyXG4kY29sb3ItZ3JlZW46ICMwNjkxNjk7XHJcbiRjb2xvci1nb2xkOiAjRkZBQjAwO1xyXG4kY29sb3Itb3JhbmdlOiNGMzU2MUY7XHJcbiRjb2xvci1jb25jcmV0ZTogI0YyRjJGMjtcclxuJGNvbG9yLXNpbHZlcjogI0JBQkFCQTtcclxuJGNvbG9yLXR1bmRvcmE6ICM0QjRCNEI7XHJcbiRjb2xvci10dXR1OiAjRkZGMkZBO1xyXG4kY29sb3ItcmFkaWNhbC1yZWQ6ICNGNDJFNjI7XHJcbiRjb2xvci1zaGlyYXo6ICNBODA1MjE7XHJcblxyXG4kY29sb3ItcGFsZS1za3k6ICM2Yzc1N2Q7XHJcbiRjb2xvci1oYXdrZXMtYmx1ZTojRTZFRkZEO1xyXG4kY29sb3ItaGF3a2VzLWJsdWUtMzAwOiAgcmdiYSgxNTcsMTkwLDI1NSwgMC4zKTsgLy8gI0U2RUZGRCArIG9wYWNpZGFkIGRlbCAwLjNcclxuJGNvbG9yLWNhdGFsaW5hLWJsdWU6ICMwQjQ1N0Y7XHJcbiRjb2xvci1jYXRhbGluYS1ibHVlLTYwMDogcmdiYSgxMSwgNjksIDEyNywgMC42KTsgLy8gIzBCNDU3RiArIG9wYWNpZGFkIGRlbCAwLjY7XHJcbiRjb2xvci1ibGFjay0xNjA6IHJnYmEoMCwgMCwgMCwgMC4xNik7IC8vIGJsYWNrICsgb3BhY2lkYWQgZGVsIDAuMTZcclxuJGNvbG9yLW1hcmluZS00MDA6IHJnYmEoNTEsMTAyLDIwNCwgMC40KTsgLy8gIzMzNjZDQyArIG9wYWNpZGFkIGRlbCAwLjRcclxuJGNvbG9yLWRhcmstYmx1ZS01MDA6IHJnYmEoMCw3MiwxMzIsMC41KTsgLy8gMDA0ODg0ICsgb3BhY2lkYWQgZGVsIDAuNVxyXG4kY29sb3ItZGFyay1ibHVlLTIwMDogcmdiYSgwLDcyLDEzMiwwLjIpOyAvLyAwMDQ4ODQgKyBvcGFjaWRhZCBkZWwgMC4yXHJcbiRjb2xvci1zaGlyYXotNjAwOiByZ2JhKDE2OCw1LDMzLCAwLjYpOyAvLyAjQTgwNTIxICsgb3BhY2lkYWQgZGVsIDAuNjsiXX0= */"

/***/ }),

/***/ "./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ConsultaDescargaReciboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaDescargaReciboComponent", function() { return ConsultaDescargaReciboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/tramites/recibo-pago-credito.json */ "./src/assets/string-resources/tramites/recibo-pago-credito.json");
var _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/recibo-pago-credito.json */ "./src/assets/string-resources/tramites/recibo-pago-credito.json", 1);
/* harmony import */ var _services_recibo_pago_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recibo-pago-utils.service */ "./src/app/tramites/fna/services/recibo-pago-utils.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/fna/services/user.service.ts");





var ConsultaDescargaReciboComponent = /** @class */ (function () {
    function ConsultaDescargaReciboComponent(ReciboPagoUtils, UserService) {
        this.ReciboPagoUtils = ReciboPagoUtils;
        this.UserService = UserService;
        this.hasCredits = false;
        this.downloadSuccess = false;
        this.creditsCount = 0;
        this.failureRequest = false;
    }
    ConsultaDescargaReciboComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = {
            noCredits: _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.noCredits
        };
        // Obtiene la información del usuario
        this.userData = this.UserService.getUserLoggedIn();
        this.descTipoDocumento = this.UserService.getDescTipoDocumento(this.userData.tipoDocumento);
        // Arma la petición para el consultar el listado de productos
        this.reqList = {
            TipoDocumento: this.userData.tipoDocumento,
            NumeroDocumento: this.userData.documento
        };
        // Obtiene el listado de creditos
        this.ReciboPagoUtils.getCreditList(this.reqList).subscribe(
        //Success response
        function (response) {
            _this.creditList = response.result;
            _this.creditsCount = _this.creditList.length;
            // NO tiene creditos
            if (_this.creditsCount == 0) {
                _this.hasCredits = false;
                _this.failureRequest = true;
                _this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.noCredits;
                return;
            }
            // Inicializa arreglo para almacenar valores de los checkbox
            _this.theCheckboxValues = [false];
            // Inicialica arreglo para almacenar descripción de los estados de los creditos
            _this.estadosCredito = [_this.UserService.getDescEstadoCredito(_this.creditList[0].estado)];
            for (var i = 1; i < _this.creditsCount; i++) {
                // Inicializa por cada credito, el valor del checkbox en false
                _this.theCheckboxValues.push(false);
                // Obtiene la descripcion correspondiente al estado del credito
                _this.estadosCredito.push(_this.UserService.getDescEstadoCredito(_this.creditList[i].estado));
            }
            _this.hasCredits = true;
        }, 
        // Failure response
        function (error) {
            _this.failureRequest = true;
            _this.hasCredits = false;
            _this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.failureRequest;
            window.scroll(0, 0);
            return;
        });
    };
    ConsultaDescargaReciboComponent.prototype.setStep = function (step) {
        var s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    };
    // Selecciona el credito que quiere descargar el recibo
    ConsultaDescargaReciboComponent.prototype.selectCredit = function (e, index) {
        // Si el cambio del check es "Checked=true"
        if (e.target.checked) {
            // Deselecciona los checkbox que no correspondan al que ha seleccionado
            for (var i = 0; i < this.creditsCount; i++) {
                if (i != index) {
                    this.theCheckboxValues[i] = (false);
                }
            }
            // Guarda en variable el numero del credito que quiere descargar el recibo
            this.creditoSeleccionado = this.creditList[index].numero;
        }
        // Si el cambio del check es "Checked=false" 
        else {
            this.creditoSeleccionado = null;
        }
    };
    //Descarga el recibo de pago seleccionado
    ConsultaDescargaReciboComponent.prototype.downloadDocument = function () {
        var _this = this;
        this.failureRequest = false;
        // Si ha seleccionado algun registro para generar el recibo
        if (this.creditoSeleccionado != null) {
            //Arma el modelo para enviar al servicio
            this.documentoModel = {
                numero: this.creditoSeleccionado,
                documento: JSON.parse(localStorage.getItem('currentUserFna')).documento
            };
            // Llama al servicio para obtener el documento
            this.ReciboPagoUtils.descargar(this.documentoModel)
                .subscribe(function (data) {
                var newBlob = new Blob([data], { type: 'application/pdf' });
                // IE
                if (window.navigator && window.navigator.msSaveOrOpenBlob && _this.isIE()) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                    return;
                }
                // Otros navegadores
                var downloadURL = window.URL.createObjectURL(newBlob);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = _this.creditoSeleccionado + '.pdf';
                link.click();
                _this.downloadSuccess = true;
                _this.setStep('4');
            }, function (error) {
                _this.failureRequest = true;
                _this.downloadSuccess = false;
                _this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
                window.scroll(0, 0);
                return;
            });
        }
        // SI no ha seleccionado ningún registro para descargar el documento
        else {
            this.failureRequest = true;
            this.downloadSuccess = false;
            this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.validateErrors;
        }
    };
    ConsultaDescargaReciboComponent.prototype.isIE = function () {
        var ua = navigator.userAgent;
        var isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    };
    ConsultaDescargaReciboComponent.ctorParameters = function () { return [
        { type: _services_recibo_pago_utils_service__WEBPACK_IMPORTED_MODULE_3__["ReciboPagoUtilsService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ConsultaDescargaReciboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consulta-descarga-recibo',
            template: __webpack_require__(/*! raw-loader!./consulta-descarga-recibo.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.html"),
            styles: [__webpack_require__(/*! ./consulta-descarga-recibo.component.scss */ "./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.scss")]
        })
    ], ConsultaDescargaReciboComponent);
    return ConsultaDescargaReciboComponent;
}());



/***/ }),

/***/ "./src/app/tramites/fna/components/login-fna/login-fna.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/tramites/fna/components/login-fna/login-fna.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-password {\n  border-right: 1px solid #004884;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZm5hL2NvbXBvbmVudHMvbG9naW4tZm5hL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZuYVxcY29tcG9uZW50c1xcbG9naW4tZm5hXFxsb2dpbi1mbmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL2xvZ2luLWZuYS9sb2dpbi1mbmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZm5hL2NvbXBvbmVudHMvbG9naW4tZm5hL2xvZ2luLWZuYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvYmFzZS9jb2xvcnMnO1xyXG5cclxuLmNvbnRlbnQtcGFzc3dvcmQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLWRhcmstYmx1ZTtcclxufSIsIi5jb250ZW50LXBhc3N3b3JkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwNDg4NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/fna/components/login-fna/login-fna.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tramites/fna/components/login-fna/login-fna.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginFnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFnaComponent", function() { return LoginFnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/tramites/recibo-pago-credito.json */ "./src/assets/string-resources/tramites/recibo-pago-credito.json");
var _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/recibo-pago-credito.json */ "./src/assets/string-resources/tramites/recibo-pago-credito.json", 1);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _services_recibo_pago_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recibo-pago-utils.service */ "./src/app/tramites/fna/services/recibo-pago-utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/fna/services/user.service.ts");








var LoginFnaComponent = /** @class */ (function () {
    function LoginFnaComponent(fb, modalService, ReciboPagoUtils, UserService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.ReciboPagoUtils = ReciboPagoUtils;
        this.UserService = UserService;
        this.router = router;
        this.invalidForm = false;
        this.typeButton = 'password';
        this.loginFailedAttempts = 0;
        this.failureRequest = false;
        this.tiposDocumento = [
            { value: 'CC', text: 'CEDULA DE CIUDADANIA' },
            { value: 'CD', text: 'CARNE DIPLOMATICO' },
            { value: 'CE', text: 'CEDULA DE EXTRANJERIA' },
            { value: 'NI', text: 'NIT PERSONAS NATURALES' },
            { value: 'NU', text: 'NUMERO UNICO DE IDENTIFICresponseModelACION PERSONAL NUIP' },
            { value: 'PA', text: 'PASAPORTE' },
            { value: 'TI', text: 'TARJETA DE IDENTIDAD' }
        ];
        this.form = this.fb.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            NumeroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    LoginFnaComponent.prototype.ngOnInit = function () {
        this.messages = {
            validateErrors: _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.validateErrors
        };
    };
    LoginFnaComponent.prototype.openModal = function () {
        var options = [{
                name: "CANCELAR",
                value: false,
                styleClass: "btn-middle",
                event: ''
            },
            {
                name: "CONTINUAR",
                value: true,
                styleClass: "btn-high",
                event: function () { window.open('https://www.fna.gov.co:8081/CTSProxy/services/cobis/ibweb/ib-container/index.html#/login'); }
            }
        ];
        this.modalService.openDialogCustom('Estas saliendo de GOV.CO', 'Con esta acción abrirás una nueva pestaña. ¡Te esperamos pronto!', options, 'warning');
    };
    LoginFnaComponent.prototype.checkShowPassword = function () {
        this.typeButton = this.typeButton === 'password' ? 'input' : 'password';
    };
    LoginFnaComponent.prototype.login = function () {
        var _this = this;
        // Error validación del formulario
        if (!this.form.valid) {
            this.invalidForm = true;
            this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.validateErrors;
            return;
        }
        // --Datos para enviar
        this.loginModel = {
            User: this.form.value.tipoDocumento.value + this.form.value.NumeroDocumento,
            Password: this.form.value.password
        };
        console.log('Login request');
        // Obtiene la información básica del cliente
        this.ReciboPagoUtils.login(this.loginModel).subscribe(
        // Success response
        function (response) {
            _this.responseModel = response;
            // Validación datos backend
            if (_this.responseModel.success === false) {
                _this.failureRequest = true;
                //Contador de intentos de login fallidos
                _this.loginFailedAttempts = _this.loginFailedAttempts + 1;
                console.log('Intentos fallidos: ' + _this.loginFailedAttempts);
                // Si es menor de 3 intentos
                if (_this.loginFailedAttempts < 2) {
                    _this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.loginFailed;
                }
                // 3 intentos o más
                else {
                    _this.messages.failureRequest = _stringResources_tramites_recibo_pago_credito_json__WEBPACK_IMPORTED_MODULE_2__.messages.loginFailedAttempts;
                }
                _this.invalidForm = true;
                window.scroll(0, 0);
                return;
            }
            //Hace login exitosamente
            _this.loginFailedAttempts = 0;
            // Asigna el tipo de documento
            _this.responseModel.result.tipoDocumento = _this.form.value.tipoDocumento.value;
            // Almacena la informacion del usuario localmente
            _this.UserService.setUserLoggedIn(_this.responseModel.result);
            _this.router.navigate(['/fna/consulta-linea-impresion-recibo-pago-credito/T6292/consulta-recibo']);
        }, 
        // Failure response
        function (error) {
            _this.failureRequest = true;
            _this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            window.scroll(0, 0);
            return;
        });
    };
    LoginFnaComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
        { type: _services_recibo_pago_utils_service__WEBPACK_IMPORTED_MODULE_5__["ReciboPagoUtilsService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    LoginFnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-fna',
            template: __webpack_require__(/*! raw-loader!./login-fna.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/login-fna/login-fna.component.html"),
            styles: [__webpack_require__(/*! ./login-fna.component.scss */ "./src/app/tramites/fna/components/login-fna/login-fna.component.scss")]
        })
    ], LoginFnaComponent);
    return LoginFnaComponent;
}());



/***/ }),

/***/ "./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZm5hL2NvbXBvbmVudHMvcmVjaWJvLXBhZ28tY3JlZGl0by9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxmbmFcXGNvbXBvbmVudHNcXHJlY2liby1wYWdvLWNyZWRpdG9cXHJlY2liby1wYWdvLWNyZWRpdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL3JlY2liby1wYWdvLWNyZWRpdG8vcmVjaWJvLXBhZ28tY3JlZGl0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZuYS9jb21wb25lbnRzL3JlY2liby1wYWdvLWNyZWRpdG8vcmVjaWJvLXBhZ28tY3JlZGl0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEgeyBjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReciboPagoCreditoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciboPagoCreditoComponent", function() { return ReciboPagoCreditoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReciboPagoCreditoComponent = /** @class */ (function () {
    function ReciboPagoCreditoComponent() {
    }
    ReciboPagoCreditoComponent.prototype.ngOnInit = function () {
    };
    ReciboPagoCreditoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recibo-pago-credito',
            template: __webpack_require__(/*! raw-loader!./recibo-pago-credito.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.html"),
            styles: [__webpack_require__(/*! ./recibo-pago-credito.component.scss */ "./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.scss")]
        })
    ], ReciboPagoCreditoComponent);
    return ReciboPagoCreditoComponent;
}());



/***/ }),

/***/ "./src/app/tramites/fna/fna-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tramites/fna/fna-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FnaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnaRoutingModule", function() { return FnaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_recibo_pago_credito_recibo_pago_credito_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/recibo-pago-credito/recibo-pago-credito.component */ "./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.ts");
/* harmony import */ var _components_login_fna_login_fna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-fna/login-fna.component */ "./src/app/tramites/fna/components/login-fna/login-fna.component.ts");
/* harmony import */ var _components_consulta_descarga_recibo_consulta_descarga_recibo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/consulta-descarga-recibo/consulta-descarga-recibo.component */ "./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.ts");






var routes = [
    {
        path: '',
        component: _components_recibo_pago_credito_recibo_pago_credito_component__WEBPACK_IMPORTED_MODULE_3__["ReciboPagoCreditoComponent"],
        children: [
            {
                path: '',
                component: _components_login_fna_login_fna_component__WEBPACK_IMPORTED_MODULE_4__["LoginFnaComponent"]
            },
            {
                path: 'consulta-recibo',
                component: _components_consulta_descarga_recibo_consulta_descarga_recibo_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaDescargaReciboComponent"]
            }
        ]
    }
];
var FnaRoutingModule = /** @class */ (function () {
    function FnaRoutingModule() {
    }
    FnaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FnaRoutingModule);
    return FnaRoutingModule;
}());



/***/ }),

/***/ "./src/app/tramites/fna/fna.module.ts":
/*!********************************************!*\
  !*** ./src/app/tramites/fna/fna.module.ts ***!
  \********************************************/
/*! exports provided: FnaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnaModule", function() { return FnaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fna_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fna-routing.module */ "./src/app/tramites/fna/fna-routing.module.ts");
/* harmony import */ var _components_recibo_pago_credito_recibo_pago_credito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recibo-pago-credito/recibo-pago-credito.component */ "./src/app/tramites/fna/components/recibo-pago-credito/recibo-pago-credito.component.ts");
/* harmony import */ var _components_login_fna_login_fna_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-fna/login-fna.component */ "./src/app/tramites/fna/components/login-fna/login-fna.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _components_consulta_descarga_recibo_consulta_descarga_recibo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/consulta-descarga-recibo/consulta-descarga-recibo.component */ "./src/app/tramites/fna/components/consulta-descarga-recibo/consulta-descarga-recibo.component.ts");












var FnaModule = /** @class */ (function () {
    function FnaModule() {
    }
    FnaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_recibo_pago_credito_recibo_pago_credito_component__WEBPACK_IMPORTED_MODULE_5__["ReciboPagoCreditoComponent"], _components_login_fna_login_fna_component__WEBPACK_IMPORTED_MODULE_6__["LoginFnaComponent"], _components_consulta_descarga_recibo_consulta_descarga_recibo_component__WEBPACK_IMPORTED_MODULE_10__["ConsultaDescargaReciboComponent"]],
            imports: [
                _fna_routing_module__WEBPACK_IMPORTED_MODULE_4__["FnaRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FnaModule);
    return FnaModule;
}());



/***/ }),

/***/ "./src/app/tramites/fna/services/recibo-pago-utils.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/tramites/fna/services/recibo-pago-utils.service.ts ***!
  \********************************************************************/
/*! exports provided: ReciboPagoUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciboPagoUtilsService", function() { return ReciboPagoUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ReciboPagoUtilsService = /** @class */ (function () {
    function ReciboPagoUtilsService(http) {
        this.http = http;
        this.urlTramite = {
            login: 'fna/ReciboPago/login',
            creditos: 'fna/ReciboPago/list',
            descargar: 'fna/ReciboPago/descargar'
        };
    }
    // Ingresar
    ReciboPagoUtilsService.prototype.login = function (loginModel) {
        return this.http.post(this.urlTramite.login, loginModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Almacena información del usuario
    ReciboPagoUtilsService.prototype.setUserData = function (user) {
        this.userData = user;
    };
    // Entrega información del usuario
    ReciboPagoUtilsService.prototype.getUserData = function () {
        return this.userData;
    };
    // COnsulta listado de creditos
    ReciboPagoUtilsService.prototype.getCreditList = function (reqList) {
        return this.http.post(this.urlTramite.creditos, reqList, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Descargar Recibo de Pago
    ReciboPagoUtilsService.prototype.descargar = function (documento) {
        return this.http.post(this.urlTramite.descargar, documento, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    };
    // Error petición
    ReciboPagoUtilsService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ReciboPagoUtilsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReciboPagoUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReciboPagoUtilsService);
    return ReciboPagoUtilsService;
}());



/***/ }),

/***/ "./src/app/tramites/fna/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/tramites/fna/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.tiposDocumento = new Array();
        this.estadosCredito = new Array();
        this.tiposDocumento['CC'] = 'Cédula de Ciudadanía';
        this.tiposDocumento['CD'] = 'Carné Diplomatico';
        this.tiposDocumento['E'] = 'Cédula de Extranjería';
        this.tiposDocumento['NI'] = 'Nit Personas Naturales';
        this.tiposDocumento['NU'] = 'Número Único de Identificación Personal NUIP';
        this.tiposDocumento['PA'] = 'Pasaporte';
        this.tiposDocumento['TI'] = 'Tarjeta de Identidad';
        this.estadosCredito['1'] = 'Vigente';
        this.estadosCredito['4'] = 'Castigado';
        this.estadosCredito['9'] = 'Suspenso';
    }
    UserService.prototype.setUserLoggedIn = function (user) {
        this.isUserLoggedIn = true;
        this.usserLogged = user;
        localStorage.setItem('currentUserFna', JSON.stringify(user));
    };
    UserService.prototype.getUserLoggedIn = function () {
        return JSON.parse(localStorage.getItem('currentUserFna'));
    };
    UserService.prototype.getDescTipoDocumento = function (tipoDoc) {
        return this.tiposDocumento[tipoDoc];
    };
    UserService.prototype.getDescEstadoCredito = function (estado) {
        return this.estadosCredito[estado];
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/assets/string-resources/tramites/recibo-pago-credito.json":
/*!***********************************************************************!*\
  !*** ./src/assets/string-resources/tramites/recibo-pago-credito.json ***!
  \***********************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"validateErrors":"Los datos ingresados son incorrectos, te recomendamos:  \n  1. Revisar que los datos ingresados sean los solicitados.","noCredits":"No tienes créditos vigentes con el FNA","loginFailed":"El Usuario o contraseña son incorrectos.  \n Vuelve a intentarlo o haz click en Solicitar Clave para reestablecerla.","failureRequest":"Se produjo un error al procesar la solicitud","loginFailedAttempts":"Lo sentimos Los datos ingresados son incorrectos,  después de 3 intentos fallidos tu cuenta será desactivada.\n  1. Te recomendamos revisar los datos ingresados\n  2. Si continúas con el problema contáctanos."}};

/***/ })

}]);
//# sourceMappingURL=tramites-fna-fna-module-es5.70b91e1403fceed619e2.js.map