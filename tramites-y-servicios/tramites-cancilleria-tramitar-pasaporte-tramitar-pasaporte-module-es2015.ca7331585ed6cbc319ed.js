(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-cancilleria-tramitar-pasaporte-tramitar-pasaporte-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n        <h2>\r\n            {{messages.title}}\r\n        </h2>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\"><em class=\"material-icons\">clear</em></button>        \r\n    </div>\r\n    <div class=\"modal-body\">\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p [innerHTML]=\"messages.text\"></p>\r\n            </div>\r\n        </div>        \r\n    </div>\r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header ml-4\">\r\n    <h3>INFORMACIÓN DE AYUDA DEL TRÁMITE</h3>\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\"><em class=\"material-icons\">clear</em></button>        \r\n</div>\r\n<div class=\"modal-body\">    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <img src=\"assets/images/src-ayuda-solicitud-pasaporte.png\" alt=\"Ayuda Solicitud\" class=\"img-fluid\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card\">\r\n    <h3>Pago en línea</h3>\r\n    <div class=\"pdf-container\">\r\n        <pdf-viewer class=\"pdf-viewer\" [src]=\"pdf\" [original-size]=\"true\" [show-all]=\"true\"></pdf-viewer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12 pb-3\" *ngIf=\"failConsulta == true\">\r\n        <app-notifications [typeMessage]=\"currentMessage.type\" [message]=\"currentMessage.message\" [title]=\"currentMessage.title\" [show]=\"true\"></app-notifications>\r\n    </div>\r\n</div>\r\n<div class=\"card govco-card p-0 pt-3\">\r\n    <div class=\"card-header\">\r\n        <h3 class=\"result-section\">Consultar estado de la solicitud</h3>\r\n    </div>\r\n    <div class=\"card-body pt-0\">\r\n        <!--Datos de la solicitud-->\r\n        <div [formGroup]=\"consultarEstado\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n            [validate]=\"invalidForm\">\r\n            <h3 class=\"m-0 title-section\">Datos del documento</h3>\r\n            <div class=\"col-12 mt-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group select-govco col-lg-6\">\r\n                        <label for=\"tipoDocumento\" class=\"form-group-govco\">Tipo de documento *</label>\r\n                        <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\"\r\n                            placeholder=\"Ej: Cédula de ciudadanía\" [items]=\"listTipoDocumento\"></app-dropdownlist>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label for=\"numeroDocumento\" class=\"form-group-govco\">Número de documento *</label>\r\n                        <input class=\"form-control input-govco\" type=\"number\" placeholder=\"Ej: 102039049\"\r\n                            formControlName=\"numeroDocumento\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label for=\"numeroSolicitud\" class=\"form-group-govco\">Número de solicitud *</label>\r\n                        <input class=\"form-control input-govco\" type=\"number\" placeholder=\"Ej: 10293\"\r\n                            formControlName=\"numeroSolicitud\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-4\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row recaptcha-container\">\r\n                            <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"color: #a80521; font-style: italic\" *ngIf=\"submitted && f.recaptcha.errors\">Debes aceptar el recaptcha</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6 button-footer text-right\">\r\n                <button class=\"btn btn-round btn-middle wb-150\" (click)=\"regresar()\">REGRESAR</button>\r\n            </div>\r\n            <div class=\"col-6 button-footer text-left\">\r\n                <button class=\"btn btn-round btn-high\" (click)=\"consultar()\">CONSULTAR</button>\r\n            </div>\r\n            <div style=\"color: #a80521; font-style: italic;text-align:center;vertical-align:middle;\" *ngIf=\"submitted && f.recaptcha.errors || submitted &&  f.tipoDocumento.errors || submitted && f.numeroDocumento.errors || submitted && f.numeroSolicitud.errors \">* Debes diligenciar los campos obligatorios</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"containerPasaporte\" class=\"row\">    \r\n    <app-tramite-detail\r\n        id=\"containerDetail\"\r\n        class=\"col-md-12\" \r\n        [name]=\"'tramitar-pasaporte'\" \r\n        [owner]=\"'cancilleria'\">\r\n    </app-tramite-detail>\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"S003\" step=\"1\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T7601'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-0 pt-3\">\r\n    <div class=\"card-header\">\r\n        <h3 class=\"result-section\">Consultar estado de la solicitud</h3>\r\n    </div>\r\n    <div class=\"card-body pt-0\">\r\n        <div class=\"detalle-solicitud pb-3\">\r\n            <h3 class=\"m-0 title-section\">Datos del solicitante</h3>\r\n            <div class=\"col-12\">\r\n                <div class=\"row mt-3 mb-3\">\r\n                    <div class=\"col-lg-6\">\r\n                        <strong>Nombres y apellidos</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{nombresApellidos}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <strong>Tipo de pasaporte</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{tipoPasaporte}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3 mb-3\">\r\n                    <div class=\"col-lg-6\">\r\n                        <strong>Tipo de documento</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{tipoDocumento}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-6 featured-text-govco\">\r\n                        <strong>Solicitud</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{solicitud}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-3 mb-3\">\r\n                    <div class=\"col-lg-6\">\r\n                        <strong>Número de documento</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{numeroDocumento}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <strong>Oficina</strong>\r\n                        <p class=\"mb-0 mt-1\">\r\n                            <label>\r\n                                {{oficina}}\r\n                            </label>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"detalle-estado\">\r\n            <h3 class=\"m-0 title-section\">Estado de la solicitud</h3>\r\n            <div class=\"col-12\">\r\n                <div class=\"row m-3\">\r\n                <div class=\"col-md-12 contenedor-estado-cancilleria\">\r\n                    <span class=\"estado-cancilleria {{srcEstado}}\"></span>\r\n                </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-lg-12\">\r\n                        <label>Estado:</label> <br>\r\n                        {{estadoSolicitud}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td class=\"tg-0lax\">\r\n    <h3 class=\"title-section pl-3\">¿Qué quieres hacer hoy?</h3>\r\n</td>   \r\n<div id=\"div-tabs\">\r\n    <div id=\"div-tabs-item\" class=\"pl-3 pt-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 option-right\">\r\n                <a class=\"btn btn-round btn-middle w-75 mt-3\" (click)=\"Consultar()\">Consultar y actualizar trámite</a>\r\n            </div>\r\n            <div class=\"col-md-6 option-right\">\r\n                <a class=\"btn btn-round btn-middle w-75 mt-3\" (click)=\"Solicitar()\">Radicar trámite</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-0 mb-3\">\r\n  <div class=\"card-body pt-4\">\r\n    <!--Datos de la solicitud-->\r\n    <div id=\"datosSolicitudGroup\" [formGroup]=\"pagoPasaporteForm\" class=\"pt-2\">\r\n      <div class=\"detalle-solicitud\">\r\n        <h3 class=\"m-0 title-section\">Solicitud</h3>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-lg-6\">\r\n              <strong>Nombres y apellidos</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.nombresApellidos.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <strong>Tipo de pasaporte</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.tipoPasaporte.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-lg-6\">\r\n              <strong>Tipo de documento</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.tipoDocumento.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-6 featured-text-govco\">\r\n              <strong>Solicitud</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.solicitud.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-lg-6\">\r\n              <strong>Número de documento</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.numeroDocumento.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <strong>Oficina</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.oficina.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-lg-6\">\r\n              <strong>Nacionalidad</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  {{pagoPasaporteForm.controls.nacionalidad.value}}\r\n                </label>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"detalle-pago\">\r\n        <h3 class=\"m-0 title-section\">Información de pago</h3>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-lg-6\">\r\n              <strong>Total a pagar</strong>\r\n              <p class=\"mb-0 mt-1\">\r\n                <label>\r\n                  ${{pagoPasaporteForm.controls.totalPago.value}}<small>{{pagoPasaporteForm.controls.centavos.value}}</small>\r\n                </label>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card p-0 \">\r\n  <div class=\"card-body pt-4 mb-3\">\r\n    <div id=\"datosPago\">\r\n      <h3 class=\"m-0 title-section\">Pagar</h3>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row mt-3 mb-3\">\r\n          <div class=\"col-lg-6\">\r\n            <strong>Selecciona la forma de pago:</strong>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let formaPago of formasPago\">\r\n          <div class=\"row\" *ngIf=\"formaPago.type =='EN_LINEA'\">\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"mb-0 mt-1\" [innerHTML]='formaPago.description'></div>\r\n            </div>\r\n            <div class=\"col-lg-6 text-right\">\r\n              <button class=\"btn btn-round btn-high\" style=\"width: 163px; height: 41px;\"\r\n                (click)=\"pagoEnLinea(formaPago.payForm, formaPago.url)\">{{formaPago.buttonLabel}}</button>\r\n            </div>\r\n            <hr style=\"border-radius: 5px;\" class=\"m-3\" />\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"formaPago.type =='PRESENCIAL'\">\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"mb-0 mt-1\" [innerHTML]='formaPago.description'></div>\r\n            </div>\r\n            <div class=\"col-lg-6 text-right\">\r\n              <button class=\"btn btn-round btn-high\" style=\"width: 163px; height: 41px;\"\r\n                *ngIf=\"invvarVisibility =='block'\" (click)=\"verMas()\">\r\n                {{formaPago.buttonLabel}}</button>\r\n              <button class=\"btn btn-round btn-high\" style=\"width: 163px; height: 41px;\"\r\n                *ngIf=\"invvarVisibility =='none'\" (click)=\"verMas()\">\r\n                VER MENOS</button>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-1\"></div>\r\n              <div class=\"col-sm-10  featured-text-govco\" [style.display]='varVisibility'>\r\n                <p class=\"mb-0 mt-1\">\r\n                  <label>\r\n                    {{formaPago.msj}}\r\n                  </label>\r\n                </p>\r\n                <strong>Referencia única de pago*</strong>\r\n                <div id=\"divHijo\" class=\"col-sm-10 align-self-center text-center\">\r\n                  <strong>{{formaPago.ref}}</strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr style=\"border-radius: 5px;\" class=\"m-3\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card\">\r\n        <iframe id=\"iframePasarela\" [src]=\"srcIframe\" style=\"border:none;\" height=\"800\"  (load)=\"validarSrc()\" title=\"Pasarela Pago\"></iframe>          \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12 pb-3\" *ngIf=\"invalidForm\">\r\n        <app-notifications [typeMessage]=\"currentMessage.type\" [message]=\"currentMessage.message\" [title]=\"currentMessage.title\" [show]=\"invalidForm || successForm\"></app-notifications>\r\n    </div>\r\n</div>\r\n<div [formGroup]=\"solicitudPasaporteForm\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n    [validate]=\"invalidForm\">\r\n    <div class=\"card govco-card mb-3\">\r\n        <!-- Sección de datos del solicitante-->\r\n        <div class=\"card-datos-solicitante mb-3\">\r\n            <div class=\"card-header row pt-0 pb-0\">\r\n                <div class=\"col-8 m-auto p-0\">\r\n                    <h3 class=\"m-0 title-section\">Datos del solicitante</h3>\r\n                </div>\r\n                <div class=\"col-4 pr-2\">\r\n                    <a class=\"btn-symbolic-govco d-flex\" (click)=\"showAyuda()\">\r\n                        <div class=\"govco-icon govco-icon-info-cn order-1 icon-ayuda\"></div>\r\n                        <label class=\"link-ayuda btn-symbolic-govco__title btn-symbolic-govco__title--left\">Ayuda</label>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body p-1 pr-0\">\r\n                <div class=\"col-12 datosSolicitante\">\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group select-govco col-lg-6 mb-3\">\r\n                            <label for=\"tipoDocumento\" class=\"form-group-govco\">Tipo de documento *</label>\r\n                            <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\"\r\n                                placeholder=\"Ej: Cédula de ciudadanía\" [items]=\"listTipoDocumento\"></app-dropdownlist>\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"numeroDocumento\" class=\"form-group-govco\">Número de documento *</label>\r\n                            <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 102039049\"\r\n                                formControlName=\"numeroDocumento\" />\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"fechaExpedicion\" class=\"form-group-govco\">Fecha de expedición *</label>\r\n                            <input class=\"form-control input-govco\" type=\"datetime\" placeholder=\"aaaa-mm-dd\"\r\n                                formControlName=\"fechaExpedicion\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"email\" class=\"form-group-govco\">Correo electrónico *</label>\r\n                            <input class=\"form-control input-govco\" type=\"email\" placeholder=\"Ej: correo@mail.com\"\r\n                                formControlName=\"email\" />\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"confirmacionEmail\" class=\"form-group-govco\">Confirmación de correo electrónico *</label>\r\n                            <input class=\"form-control input-govco\" type=\"email\" placeholder=\"Ej: correo@mail.com\"\r\n                                formControlName=\"confirmacionEmail\" />\r\n                        </div>\r\n                    </div>\r\n                </div>               \r\n            </div> \r\n        </div>\r\n        <!-- Sección de datos del pasaporte actual -->\r\n        <div class=\"card-pasaporte-actual\">\r\n            <div class=\"card-header row pt-0 pb-0 mb-3\">\r\n                <div class=\"col-12 p-0\">\r\n                    <h3 class=\"m-0 title-section\">Datos del pasaporte actual</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body p-1 pr-0\">\r\n                <div class=\"col-12 datosPasaporteActual\">                       \r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"numeroPasaporte\" class=\"form-group-govco\">Número del pasaporte *</label>\r\n                            <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: AV00000\"\r\n                                formControlName=\"numeroPasaporte\" />\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\">\r\n                            <label for=\"fechaExpedicionPasaporte\" class=\"form-group-govco\">Fecha de expedición del pasaporte *</label>\r\n                            <input class=\"form-control input-govco\" type=\"datetime\" placeholder=\"aaaa-mm-dd\"\r\n                                formControlName=\"fechaExpedicionPasaporte\" />\r\n                        </div>\r\n                        <div class=\"form-group col-lg-12\">\r\n                            <label for=\"digitoVerificacion\" class=\"form-group-govco\">Dígito de verificación (Últimos 2 dígitos OCR) *</label>\r\n                            <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 37\"\r\n                                formControlName=\"digitoVerificacion\" />\r\n                        </div>\r\n                    </div>                       \r\n                </div> \r\n            </div>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card govco-card mb-3\">\r\n        <!-- Sección de detalle de solicitud -->\r\n        <div class=\"card-datos-solicitud\">\r\n            <div class=\"card-header row pt-0 pb-0\">\r\n                <div class=\"col-12 p-0\">\r\n                    <h3 class=\"m-0 title-section\">Datos de la solicitud</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body p-1 pr-0 mt-3\">\r\n                <!--Datos de la solicitud-->            \r\n                <div class=\"col-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group select-govco col-lg-6 mb-3\">\r\n                            <label for=\"tipoPasaporte\" class=\"form-group-govco\">Tipo de pasaporte a solicitar *</label>\r\n                            <app-dropdownlist ngDefaultControl formControlName=\"tipoPasaporte\"\r\n                                placeholder=\"Ej: Pasaporte electrónico\" [items]=\"listTipoPasaporte\">\r\n                            </app-dropdownlist>\r\n                        </div>\r\n                        <div class=\"form-group select-govco col-lg-6 mb-3\">\r\n                            <label for=\"motivoSolicitud\" class=\"form-group-govco\">Motivo de la solicitud *</label>\r\n                            <app-dropdownlist ngDefaultControl formControlName=\"motivoSolicitud\"\r\n                                placeholder=\"Ej: Cambio\" [items]=\"listMotivoSolicitud\"></app-dropdownlist>\r\n                        </div>                        \r\n                    </div>\r\n                    <div class=\"row\">                           \r\n                        <div class=\"form-group select-govco col-lg-6 mb-3\">\r\n                            <label for=\"oficinaSolicitud\" class=\"form-group-govco\">Oficina de entrega *</label>\r\n                            <app-dropdownlist ngDefaultControl formControlName=\"oficinaSolicitud\"\r\n                                placeholder=\"Ej: Bogotá, Oficina 1\" [items]=\"listOficinas\"></app-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card govco-card\">\r\n        <div class=\"card-body p-0 pt-3\">\r\n            <div class=\"aviso-privacidad mb-4 ml-2\">\r\n                {{mensajeAvisoInicial}}  \r\n                <strong>\r\n                    <u style=\"cursor: pointer;\" (click)=\"showAvisoPrivacidad()\">\r\n                        {{mensajeTratamiento}}\r\n                    </u>\r\n                </strong>\r\n                {{mensajeAvisoFinal}}\r\n            </div>           \r\n            <div class=\"chk-datos pl-4\">\r\n                <label class=\"chk-govco\">\r\n                    <input type=\"checkbox\" id=\"checkDatos\" formControlName=\"checkDatos\" />\r\n                    <label for=\"checkDatos\" class=\"chk-datos-personales\">\r\n                        {{mensajeConsentimiento}}*\r\n                    </label>\r\n                    <div style=\"color: #a80521; font-style: italic\" *ngIf=\"submitted && f.checkDatos.errors\">Debes aceptar términos y condiciones</div>\r\n                    <div class=\"chk-govco__indicator\"></div>\r\n                </label>\r\n            </div> \r\n            <div class=\"row m-4\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row recaptcha-container\">\r\n                        <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n                    </div>\r\n                </div>\r\n                <div style=\"color: #a80521; font-style: italic\" *ngIf=\"submitted && f.recaptcha.errors\">Debes aceptar el recaptcha</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">            \r\n            <div class=\"col-6 button-footer text-right\">\r\n                <button class=\"btn btn-round btn-middle wb-150\" (click)=\"clean()\">LIMPIAR</button>\r\n            </div>\r\n            <div class=\"col-6 button-footer text-left\">\r\n                <button class=\"btn btn-round btn-high wb-150\" (click)=\"save()\">GUARDAR</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-12 pb-3\">\r\n            <ngb-alert type=\"danger\" *ngIf=\"invalidForm == true\">\r\n                <strong>Lo sentimos</strong><br />\r\n                <p>\r\n                    Los datos ingresados son incorrectos, te recomendamos:<br />\r\n                    1. revise que los datos ingresados sean los solicitados\r\n                </p>\r\n            </ngb-alert>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"card govco-card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\" [formGroup]=\"verSolicitudPasaporteForm\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n                appInputValidator [validate]=\"invalidForm\">\r\n                <!--Datos del solicitante-->\r\n                <div id=\"datosSolicitanteGroup\">\r\n                    <div class=\"row col-md-12\">\r\n                        <h3 class=\"col-md-6\">Datos del solicitante</h3>\r\n                        <a class=\"col-md-6\" (click)=\"showAyuda()\" style=\"cursor: pointer;\">\r\n                            <h3 class=\"text-right\">Ayuda <span class=\"govco-icon govco-icon-info-cn\"></span></h3>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group select-govco col-lg-6\">\r\n                                <label for=\"tipoDocumento\">Tipo de documento *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"tipoDocumento\"\r\n                                    placeholder=\"Ej: Cédula de ciudadanía\" [items]=\"listTipoDocumento\"></app-dropdownlist>\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"fechaExpedicion\">Fecha de expedición *</label>\r\n                                <input class=\"form-control input-govco\" type=\"datetime\" placeholder=\"dd-mm-aaaa\"\r\n                                    formControlName=\"fechaExpedicion\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"numeroDocumento\">Número de documento *</label>\r\n                                <input class=\"form-control input-govco\" type=\"number\" placeholder=\"Ej: 102039049\"\r\n                                    formControlName=\"numeroDocumento\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"email\">Correo electrónico *</label>\r\n                                <input class=\"form-control input-govco\" type=\"email\" placeholder=\"Ej: correo@mail.com\"\r\n                                    formControlName=\"email\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"confirmacionEmail\">Confirmación de correo electrónico *</label>\r\n                                <input class=\"form-control input-govco\" type=\"email\" placeholder=\"Ej: correo@mail.com\"\r\n                                    formControlName=\"confirmacionEmail\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h3 class=\"margen-top\">Datos del pasaporte actual</h3>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"numeroPasaporte\">Número del pasaporte *</label>\r\n                                <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: AV00000\"\r\n                                    formControlName=\"numeroPasaporte\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6\">\r\n                                <label for=\"fechaExpedicionPasaporte\">Fecha de expedición del pasaporte *</label>\r\n                                <input class=\"form-control input-govco\" type=\"datetime\" placeholder=\"dd-mm-aaaa\"\r\n                                    formControlName=\"fechaExpedicionPasaporte\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label for=\"digitoVerificacion\">Dígito de verificación (Últimos 2 dígitos OCR) *</label>\r\n                                <input class=\"form-control input-govco\" type=\"number\" placeholder=\"Ej: 37\"\r\n                                    formControlName=\"digitoVerificacion\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"card govco-card govco-register-advice\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\" [formGroup]=\"verSolicitudPasaporteForm\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n                appInputValidator [validate]=\"invalidForm\">\r\n                <!--Datos del solicitante-->\r\n                <div id=\"datosSolicitudGroup\">\r\n                    <h3>Datos de la solicitud</h3>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group select-govco col-lg-6\">\r\n                                <label for=\"tipoPasaporte\">Tipo de pasaporte a solicitar *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"tipoPasaporte\"\r\n                                    placeholder=\"Ej: Pasaporte electrónico\" [items]=\"listTipoPasaporte\"></app-dropdownlist>\r\n                            </div>\r\n                            <div class=\"form-group select-govco col-lg-6\">\r\n                                <label for=\"motivoSolicitud\">Motivo de la solicitud *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"motivoSolicitud\"\r\n                                    placeholder=\"Ej: Cambio\" [items]=\"listMotivoSolicitud\"></app-dropdownlist>\r\n                            </div>\r\n                            <div class=\"form-group select-govco col-lg-6\">\r\n                                <label for=\"oficinaSolicitud\">Oficina de entrega *</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"oficinaSolicitud\"\r\n                                    placeholder=\"Ej: Bogotá, Oficina 1\" [items]=\"listOficinas\"></app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                                <div class=\" col-md-12 button-footer\">\r\n                                    <button class=\"btn btn-round btn-middle\" (click)=\"clean()\">Regresar</button>\r\n                                    <button class=\"btn btn-round btn-high\" (click)=\"save()\">Pagar</button>\r\n                                </div>\r\n                            </div>\r\n    \r\n                    </div>\r\n                </div>\r\n    \r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvYXZpc28tcHJpdmFjaWRhZC1tb2RhbC9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxjYW5jaWxsZXJpYVxcdHJhbWl0YXItcGFzYXBvcnRlXFxjb21wb25lbnRzXFxhdmlzby1wcml2YWNpZGFkLW1vZGFsXFxhdmlzby1wcml2YWNpZGFkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9hdmlzby1wcml2YWNpZGFkLW1vZGFsL2F2aXNvLXByaXZhY2lkYWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvYXZpc28tcHJpdmFjaWRhZC1tb2RhbC9hdmlzby1wcml2YWNpZGFkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59IiwibGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AvisoPrivacidadModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoPrivacidadModalComponent", function() { return AvisoPrivacidadModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tramitar-pasaporte.service */ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts");




let AvisoPrivacidadModalComponent = class AvisoPrivacidadModalComponent {
    constructor(tramiteService, activeModal) {
        this.tramiteService = tramiteService;
        this.activeModal = activeModal;
        this.getParams();
    }
    ngOnInit() {
    }
    getParams() {
        this.getTratamientoDatos();
    }
    closeModal() {
        this.activeModal.close();
    }
    getTratamientoDatos() {
        this.tramiteService.getTratamientoDatos().subscribe((data) => {
            if (data != undefined) {
                this.messages = {
                    title: data["return"].tratamientoDatosPersonalesTitulo,
                    text: data["return"].tratamientoDatosPersonalesCuerpo
                };
            }
        }, (error) => {
            console.error(error);
        });
    }
};
AvisoPrivacidadModalComponent.ctorParameters = () => [
    { type: _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__["TramitarPasaporteService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
AvisoPrivacidadModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aviso-privacidad-modal',
        template: __webpack_require__(/*! raw-loader!./aviso-privacidad-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.html"),
        styles: [__webpack_require__(/*! ./aviso-privacidad-modal.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.scss")]
    })
], AvisoPrivacidadModalComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvYXl1ZGEtcGFzYXBvcnRlLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGNhbmNpbGxlcmlhXFx0cmFtaXRhci1wYXNhcG9ydGVcXGNvbXBvbmVudHNcXGF5dWRhLXBhc2Fwb3J0ZS1tb2RhbFxcYXl1ZGEtcGFzYXBvcnRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9heXVkYS1wYXNhcG9ydGUtbW9kYWwvYXl1ZGEtcGFzYXBvcnRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL2F5dWRhLXBhc2Fwb3J0ZS1tb2RhbC9heXVkYS1wYXNhcG9ydGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn0iLCJsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AyudaPasaporteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPasaporteModalComponent", function() { return AyudaPasaporteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AyudaPasaporteModalComponent = class AyudaPasaporteModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
};
AyudaPasaporteModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
AyudaPasaporteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ayuda-pasaporte-modal',
        template: __webpack_require__(/*! raw-loader!./ayuda-pasaporte-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.html"),
        styles: [__webpack_require__(/*! ./ayuda-pasaporte-modal.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.scss")]
    })
], AyudaPasaporteModalComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pdf-viewer {\n  display: block;\n  height: 100vh;\n}\n\nlabel {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvY29tcHJvYmFudGUtcGFnby1wc2UvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcY2FuY2lsbGVyaWFcXHRyYW1pdGFyLXBhc2Fwb3J0ZVxcY29tcG9uZW50c1xcY29tcHJvYmFudGUtcGFnby1wc2VcXGNvbXByb2JhbnRlLXBhZ28tcHNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9jb21wcm9iYW50ZS1wYWdvLXBzZS9jb21wcm9iYW50ZS1wYWdvLXBzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvY29tcHJvYmFudGUtcGFnby1wc2UvY29tcHJvYmFudGUtcGFnby1wc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGRmLXZpZXdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn0iLCIucGRmLXZpZXdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ComprobantePagoPseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobantePagoPseComponent", function() { return ComprobantePagoPseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tramitar-pasaporte.service */ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts");




let ComprobantePagoPseComponent = class ComprobantePagoPseComponent {
    constructor(tramiteService, router) {
        this.tramiteService = tramiteService;
        this.router = router;
        this.solictudId = this.router.snapshot.paramMap.get('ticketID');
    }
    ngOnInit() {
        this.getDataComprobante(this.solictudId);
    }
    getDataComprobante(solictudId) {
        this.tramiteService.getDataComprobante(solictudId).subscribe((data) => {
            if (data != undefined) {
                this.pdf = this.base64ToArrayBuffer(data);
            }
        }, (error) => {
            console.error(error);
        });
    }
    base64ToArrayBuffer(base64) {
        let binary_string = window.atob(base64);
        let len = binary_string.length;
        let bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }
};
ComprobantePagoPseComponent.ctorParameters = () => [
    { type: _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__["TramitarPasaporteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ComprobantePagoPseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comprobante-pago-pse',
        template: __webpack_require__(/*! raw-loader!./comprobante-pago-pse.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.html"),
        styles: [__webpack_require__(/*! ./comprobante-pago-pse.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.scss")]
    })
], ComprobantePagoPseComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado-form.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado-form.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ConsultarEstadoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarEstadoForm", function() { return ConsultarEstadoForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class ConsultarEstadoForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(20)])],
            numeroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            numeroSolicitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-footer {\n  text-align: center;\n}\n.button-footer button {\n  margin: 10px;\n}\nlabel {\n  font-weight: 500 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvY29uc3VsdGFyLWVzdGFkby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxjYW5jaWxsZXJpYVxcdHJhbWl0YXItcGFzYXBvcnRlXFxjb21wb25lbnRzXFxjb25zdWx0YXItZXN0YWRvXFxjb25zdWx0YXItZXN0YWRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9jb25zdWx0YXItZXN0YWRvL2NvbnN1bHRhci1lc3RhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0FDQ1I7QURHQTtFQUNJLDJCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9jb25zdWx0YXItZXN0YWRvL2NvbnN1bHRhci1lc3RhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufSIsIi5idXR0b24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbi1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ConsultarEstadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarEstadoComponent", function() { return ConsultarEstadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _consultar_estado_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultar-estado-form */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado-form.ts");
/* harmony import */ var _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tramitar-pasaporte.service */ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ConsultarEstadoComponent = class ConsultarEstadoComponent {
    constructor(tramiteService, router) {
        this.tramiteService = tramiteService;
        this.router = router;
        this.invalidForm = false;
        this.failConsulta = false;
        this.listTipoDocumento = [];
        this.ConsultarEstadoForm = new _consultar_estado_form__WEBPACK_IMPORTED_MODULE_2__["ConsultarEstadoForm"]();
        this.buildForm();
        this.getParams();
        this.currentMessage = {
            title: '',
            message: '',
            type: ''
        };
        this.submitted = false;
    }
    ngOnInit() {
    }
    buildForm() {
        this.consultarEstado = this.ConsultarEstadoForm.getForm();
        this.setStep("2");
    }
    getParams() {
        this.getTipoDocumento();
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', step);
    }
    getTipoDocumento() {
        this.tramiteService.getTiposDocumento().subscribe((data) => {
            if (data != undefined && data.length > 0) {
                this.listTipoDocumento = data;
            }
        }, (error) => {
            console.error(error);
        });
    }
    consultar() {
        this.findInvalidControls();
        this.submitted = true;
        if (!this.ConsultarEstadoForm.isValid()) {
            this.invalidForm = true;
            return;
        }
        //Datos para realizar la consulta de la solicitud.
        this.dataConsultaSolicitudModel = {
            numeroDocumentoIdentidad: String(this.ConsultarEstadoForm.form.value.numeroDocumento),
            numeroSolicitud: this.ceroIzquierda(String(this.ConsultarEstadoForm.form.value.numeroSolicitud), 15),
            nacionalidad: "COL",
            tipoDocumentoIdentidad: this.ConsultarEstadoForm.form.value.tipoDocumento.value,
            usuario: "UserWSEstado",
            contrasena: "passWSEstado",
            fuente: "GOVCO"
        };
        this.tramiteService.getDataSolicitud(this.dataConsultaSolicitudModel).subscribe((data) => {
            if (data.return != undefined) {
                this.router.navigate(["/cancilleria/estadoSolicitud", data.return.nombres, data.return.tipoTramite, "Cédula de ciudadania", data.return.numeroSolicitud, data.return.numeroDocumento, data.return.oficinaExpedidora, data.return.textoEstadoActual, data.return.estadoActual]);
            }
            else {
                this.failConsulta = true;
                this.currentMessage.title = 'Lo sentimos';
                this.currentMessage.type = 'error';
                this.currentMessage.message = 'Los datos ingresados son incorrectos, te recomendamos:\n';
                this.currentMessage.message += '1. revise que los datos ingresados sean los solicitados';
            }
        }, (error) => {
            this.failConsulta = true;
            this.currentMessage.title = 'Lo sentimos';
            this.currentMessage.type = 'error';
            this.currentMessage.message = 'Los datos ingresados son incorrectos, te recomendamos:\n';
            this.currentMessage.message += '1. revise que los datos ingresados sean los solicitados';
            console.error(error);
        });
    }
    ceroIzquierda(cadena, longitud) {
        for (var i = cadena.length; i < longitud; i++) {
            cadena = "0" + cadena;
        }
        return cadena;
    }
    regresar() {
        debugger;
        this.findInvalidControls();
        this.submitted = true;
        if (!this.ConsultarEstadoForm.isValid()) {
            this.invalidForm = true;
            return;
        }
    }
    findInvalidControls() {
        const invalid = [];
        const controls = this.consultarEstado.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                console.error(name);
            }
        }
        return invalid;
    }
    get f() { return this.consultarEstado.controls; }
};
ConsultarEstadoComponent.ctorParameters = () => [
    { type: _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_3__["TramitarPasaporteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConsultarEstadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar-estado',
        template: __webpack_require__(/*! raw-loader!./consultar-estado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.html"),
        styles: [__webpack_require__(/*! ./consultar-estado.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.scss")]
    })
], ConsultarEstadoComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: normal !important;\n}\n\n.fix-tab {\n  margin-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvY29udGFpbmVyLXBhc2Fwb3J0ZS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxjYW5jaWxsZXJpYVxcdHJhbWl0YXItcGFzYXBvcnRlXFxjb21wb25lbnRzXFxjb250YWluZXItcGFzYXBvcnRlXFxjb250YWluZXItcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9jb250YWluZXItcGFzYXBvcnRlL2NvbnRhaW5lci1wYXNhcG9ydGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL2NvbnRhaW5lci1wYXNhcG9ydGUvY29udGFpbmVyLXBhc2Fwb3J0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4uZml4LXRhYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59IiwibGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5maXgtdGFiIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ContainerPasaporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPasaporteComponent", function() { return ContainerPasaporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContainerPasaporteComponent = class ContainerPasaporteComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContainerPasaporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancilleria',
        template: __webpack_require__(/*! raw-loader!./container-pasaporte.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.html"),
        styles: [__webpack_require__(/*! ./container-pasaporte.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.scss")]
    })
], ContainerPasaporteComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud-form.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud-form.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EstadoSolicitudForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoSolicitudForm", function() { return EstadoSolicitudForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class EstadoSolicitudForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
    }
    getForm() {
        return this.estadoSolicitudForm;
    }
    getFormValues() {
        return this.estadoSolicitudForm.value;
    }
}


/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.estado-cancilleria {\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  padding: 3em;\n  background-position: center;\n}\n.EnTrámite {\n  background-image: url('Estado-Pasaporte-1.511ea37560563059569e.svg');\n}\n.Formalizado {\n  background-image: url('Estado-Pasaporte-2.f54d32702c3640db9aca.svg');\n}\n.Pagado {\n  background-image: url('Estado-Pasaporte-3.2a6e529ed8018f207995.svg');\n}\n.Autorizado {\n  background-image: url('Estado-Pasaporte-4.4ed90b4fa906e3c2aea0.svg');\n}\n.EnOficina {\n  background-image: url('Estado-Pasaporte-5.bd083176faf11735213e.svg');\n}\n.Tramitado {\n  background-image: url('Estado-Pasaporte-6.6614f732a47a69d8377e.svg');\n}\n.Cancelado {\n  background-image: url('Estado-Pasaporte-8.613e8db8024200f69290.svg');\n}\n.Rechazado {\n  background-image: url('Estado-Pasaporte-7.23f8d74a8dd5174a7f4b.svg');\n}\n.contenedor-estado-cancilleria {\n  padding-left: 6em;\n}\n@media (max-width: 1000px) {\n  .contenedor-estado-cancilleria {\n    padding-left: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvZXN0YWRvLXNvbGljaXR1ZC9lc3RhZG8tc29saWNpdHVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9lc3RhZG8tc29saWNpdHVkL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGNhbmNpbGxlcmlhXFx0cmFtaXRhci1wYXNhcG9ydGVcXGNvbXBvbmVudHNcXGVzdGFkby1zb2xpY2l0dWRcXGVzdGFkby1zb2xpY2l0dWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxvRUFBQTtBRENKO0FDRUE7RUFDSSxpQkFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLG1CQUFBO0VEQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL2VzdGFkby1zb2xpY2l0dWQvZXN0YWRvLXNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5lc3RhZG8tY2FuY2lsbGVyaWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uRW5UcsOhbWl0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS0xLnN2Z1wiKTtcbn1cblxuLkZvcm1hbGl6YWRvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTIuc3ZnXCIpO1xufVxuXG4uUGFnYWRvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTMuc3ZnXCIpO1xufVxuXG4uQXV0b3JpemFkbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS00LnN2Z1wiKTtcbn1cblxuLkVuT2ZpY2luYSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS01LnN2Z1wiKTtcbn1cblxuLlRyYW1pdGFkbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS02LnN2Z1wiKTtcbn1cblxuLkNhbmNlbGFkbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS04LnN2Z1wiKTtcbn1cblxuLlJlY2hhemFkbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS03LnN2Z1wiKTtcbn1cblxuLmNvbnRlbmVkb3ItZXN0YWRvLWNhbmNpbGxlcmlhIHtcbiAgcGFkZGluZy1sZWZ0OiA2ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbnRlbmVkb3ItZXN0YWRvLWNhbmNpbGxlcmlhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICB9XG59IiwiXHJcbi5lc3RhZG8tY2FuY2lsbGVyaWEgeyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLkVuVHLDoW1pdGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTEuc3ZnXCIpO1xyXG59XHJcblxyXG4uRm9ybWFsaXphZG8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTIuc3ZnXCIpO1xyXG59XHJcblxyXG4uUGFnYWRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS0zLnN2Z1wiKTtcclxufVxyXG5cclxuLkF1dG9yaXphZG8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTQuc3ZnXCIpO1xyXG59XHJcblxyXG4uRW5PZmljaW5he1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Fc3RhZG8tUGFzYXBvcnRlLTUuc3ZnXCIpO1xyXG59XHJcblxyXG4uVHJhbWl0YWRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS02LnN2Z1wiKTtcclxufVxyXG5cclxuLkNhbmNlbGFkb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXN0YWRvLVBhc2Fwb3J0ZS04LnN2Z1wiKTtcclxufVxyXG5cclxuLlJlY2hhemFkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0VzdGFkby1QYXNhcG9ydGUtNy5zdmdcIik7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLWVzdGFkby1jYW5jaWxsZXJpYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmNvbnRlbmVkb3ItZXN0YWRvLWNhbmNpbGxlcmlhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EstadoSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoSolicitudComponent", function() { return EstadoSolicitudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _estado_solicitud_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estado-solicitud-form */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud-form.ts");




let EstadoSolicitudComponent = class EstadoSolicitudComponent {
    constructor(router) {
        this.router = router;
        this.EstadoSolicitudForm = new _estado_solicitud_form__WEBPACK_IMPORTED_MODULE_3__["EstadoSolicitudForm"]();
        this.nombresApellidos = this.router.snapshot.paramMap.get('nombresApellidos');
        this.tipoPasaporte = this.router.snapshot.paramMap.get('tipoPasaporte');
        this.tipoDocumento = this.router.snapshot.paramMap.get('tipoDocumento');
        this.solicitud = this.router.snapshot.paramMap.get('solicitud');
        this.numeroDocumento = this.router.snapshot.paramMap.get('numeroDocumento');
        this.oficina = this.router.snapshot.paramMap.get('oficina');
        this.estadoSolicitud = this.router.snapshot.paramMap.get('estadoSolicitud');
        this.estadoActual = this.router.snapshot.paramMap.get('estadoActual');
        this.srcEstado = this.homologarEstado(this.estadoActual);
        this.buildForm();
    }
    ngOnInit() {
    }
    homologarEstado(estado) {
        var srcEstadoh = "";
        switch (estado.toUpperCase()) {
            case "AUTORIZADA_PASAPORTE": {
                srcEstadoh = "Autorizado";
                break;
            }
            case "AUTORIZADA": {
                srcEstadoh = "Autorizado";
                break;
            }
            case "CANCELADA": {
                srcEstadoh = "Cancelado";
                break;
            }
            // case "cancelada_por_impedimentos": {
            //     srcEstadoh = "Cancelado";
            //     break;
            // }
            case "EN_TRAMITE": {
                srcEstadoh = "EnTrámite";
                break;
            }
            case "FORMALIZADA": {
                srcEstadoh = "Formalizado";
                break;
            }
            case "PAGADA": {
                srcEstadoh = "Formalizado";
                break;
            }
            // case "impresa": {
            //   srcEstadoh = "Pagado";
            //   break;
            // }
            // case "pendiente_de_entrega": {
            //   srcEstadoh = "EnOficina";
            //   break;
            // }
            case "PASAPORTE_EN_OFICINA": {
                srcEstadoh = "EnOficina";
                break;
            }
            //   case "pendiente_de_impresion": {
            //   srcEstadoh = "Autorizado";
            //   break;
            // }
            case "RECHAZADA": {
                srcEstadoh = "Rechazado";
                break;
            }
            case "TRAMITADA": {
                srcEstadoh = "Tramitado";
                break;
            }
            default: {
                srcEstadoh = "Tramitado";
                break;
            }
        }
        return srcEstadoh;
    }
    buildForm() {
        this.estadoSolicitudForm = this.EstadoSolicitudForm.getForm();
        this.setStep("4");
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', step);
    }
};
EstadoSolicitudComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EstadoSolicitudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estado-solicitud',
        template: __webpack_require__(/*! raw-loader!./estado-solicitud.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.html"),
        styles: [__webpack_require__(/*! ./estado-solicitud.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.scss")]
    })
], EstadoSolicitudComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL2luZ3Jlc2FyLXRyYW1pdGUvaW5ncmVzYXItdHJhbWl0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: IngresarTramiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarTramiteComponent", function() { return IngresarTramiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IngresarTramiteComponent = class IngresarTramiteComponent {
    constructor(route) {
        this.route = route;
        this.setStep("2");
    }
    ngOnInit() {
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', step);
    }
    Consultar() {
        this.route.navigate(["/cancilleria/consultarEstado"]);
    }
    Solicitar() {
        this.route.navigate(["/cancilleria/solicitarPasaporte"]);
    }
};
IngresarTramiteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IngresarTramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingresar-tramite',
        template: __webpack_require__(/*! raw-loader!./ingresar-tramite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.html"),
        styles: [__webpack_require__(/*! ./ingresar-tramite.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.scss")]
    })
], IngresarTramiteComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte-form.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte-form.ts ***!
  \************************************************************************************************************/
/*! exports provided: PagarPasaporteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagarPasaporteForm", function() { return PagarPasaporteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class PagarPasaporteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.pagoPasaporteForm = this.formBuilder.group({
            nombresApellidos: 'Pepito Pérez',
            tipoPasaporte: 'ORDINARIO - 32 PÁGINAS',
            tipoDocumento: 'Cédula de ciudadania',
            solicitud: '2091209124',
            numeroDocumento: '1026272887',
            oficina: 'Bogotá',
            nacionalidad: 'Colombia',
            moneda: 'USD',
            totalPago: '160.000.',
            centavos: '00',
            descripcion0: '',
            descripcion1: '',
            descripcion2: '',
            labelBoton0: '',
            labelBoton1: '',
            labelBoton2: '',
            url0: '',
            url1: '',
            mensajeComplementario: '',
            referenciaUnicaPago: ''
        });
    }
    getForm() {
        return this.pagoPasaporteForm;
    }
    getFormValues() {
        return this.pagoPasaporteForm.value;
    }
}


/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-register-advice {\n  margin-top: 2.2rem;\n}\n\nhr {\n  height: 2px;\n  width: 100%;\n  background-color: #0B457F;\n}\n\n#divHijo {\n  margin: 0px auto;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvcGFnYXItcGFzYXBvcnRlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGNhbmNpbGxlcmlhXFx0cmFtaXRhci1wYXNhcG9ydGVcXGNvbXBvbmVudHNcXHBhZ2FyLXBhc2Fwb3J0ZVxccGFnYXItcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9wYWdhci1wYXNhcG9ydGUvcGFnYXItcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL3BhZ2FyLXBhc2Fwb3J0ZS9wYWdhci1wYXNhcG9ydGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ292Y28tcmVnaXN0ZXItYWR2aWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBCNDU3RjtcclxuICB9XHJcblxyXG4gICNkaXZIaWpvIHtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn0iLCIuZ292Y28tcmVnaXN0ZXItYWR2aWNlIHtcbiAgbWFyZ2luLXRvcDogMi4ycmVtO1xufVxuXG5ociB7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCNDU3Rjtcbn1cblxuI2Rpdkhpam8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PagarPasaporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagarPasaporteComponent", function() { return PagarPasaporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pagar_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagar-pasaporte-form */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte-form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PagarPasaporteComponent = class PagarPasaporteComponent {
    constructor(route, sanitizer, router) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.router = router;
        this.formasPago = [];
        //Obtiene el string con la data de la solicitud.
        this.dataSolicitud = this.route.snapshot.paramMap.get('data');
        // Covierte en Json el string con la data de la solicitud
        var data = JSON.parse(this.dataSolicitud);
        // Mapeo de datos de la solicitud.
        var nombres = data.return.outDatosSolicitante.nombreCompleto;
        this.nombresApellidos = nombres.primerNombre + " " + nombres.segundoNombre + " " + nombres.primerApellido + " " + nombres.segundoApellido;
        this.tipoPasaporte = data.return.outSolicitud.tipoPasaporte;
        this.tipoDocumento = data.return.outDatosSolicitante.tipoDocumento;
        this.solicitud = data.return.outSolicitud.numeroSolicitud;
        this.numeroDocumento = data.return.outDatosSolicitante.numeroPersonal;
        this.oficina = data.return.outSolicitud.oficina;
        this.nacionalidad = "Colombiana";
        this.moneda = data.return.outSolicitud.moneda;
        this.totalPago = data.return.outSolicitud.totalPagar;
        this.centavos = ".00";
        data.return.outFormaPago.forEach(element => {
            let dataPay;
            dataPay = {
                description: element.descripcion,
                buttonLabel: element.labelBoton,
                type: element.tipoFormaPago,
                payForm: element.formaDePago,
                url: element.hasOwnProperty('url') ? element.url : null,
                ref: element.referenciaUnicaPago,
                msj: element.mensajeComplementario
            };
            this.formasPago.push(dataPay);
        });
        this.varVisibility = 'none';
        this.invvarVisibility = 'block';
        // Renderiza el formulario.
        this.PagarPasaporteForm = new _pagar_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__["PagarPasaporteForm"]();
        this.buildForm();
    }
    ngOnInit() {
    }
    buildForm() {
        this.pagoPasaporteForm = this.PagarPasaporteForm.getForm();
        this.pagoPasaporteForm.controls['nombresApellidos'].value = this.nombresApellidos;
        this.pagoPasaporteForm.controls['tipoPasaporte'].value = this.tipoPasaporte;
        this.pagoPasaporteForm.controls['tipoDocumento'].value = this.tipoDocumento;
        this.pagoPasaporteForm.controls['solicitud'].value = this.solicitud;
        this.pagoPasaporteForm.controls['numeroDocumento'].value = this.numeroDocumento;
        this.pagoPasaporteForm.controls['oficina'].value = this.oficina;
        this.pagoPasaporteForm.controls['nacionalidad'].value = this.nacionalidad;
        this.pagoPasaporteForm.controls['moneda'].value = this.moneda;
        this.pagoPasaporteForm.controls['totalPago'].value = this.totalPago;
        this.pagoPasaporteForm.controls['centavos'].value = this.centavos;
        this.pagoPasaporteForm.controls['descripcion0'].value = this.descipcion0;
        this.pagoPasaporteForm.controls['descripcion1'].value = this.descipcion1;
        this.pagoPasaporteForm.controls['descripcion2'].value = this.descipcion2;
        this.pagoPasaporteForm.controls['labelBoton0'].value = this.labelBoton0;
        this.pagoPasaporteForm.controls['labelBoton1'].value = this.labelBoton1;
        this.pagoPasaporteForm.controls['labelBoton2'].value = this.labelBoton2;
        this.pagoPasaporteForm.controls['url0'].value = this.url0;
        this.pagoPasaporteForm.controls['url1'].value = this.url1;
        this.pagoPasaporteForm.controls['mensajeComplementario'].value = this.mensajeComplementario;
        this.pagoPasaporteForm.controls['referenciaUnicaPago'].value = this.referenciaUnicaPago;
        this.setStep("2");
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', step);
    }
    pagoEnLinea(type, url) {
        if (type === "PSE") {
            this.router.navigate(["/cancilleria/pagoOnline", this.solicitud, "S", "PSE", "", "GOVCO", url]);
        }
        else {
            this.router.navigate(["/cancilleria/pagoOnline", this.solicitud, "TC", "PSE", "", "GOVCO", url]);
        }
    }
    verMas() {
        if (this.varVisibility === 'block') {
            this.varVisibility = 'none';
            this.invvarVisibility = 'block';
        }
        else {
            this.varVisibility = 'block';
            this.invvarVisibility = 'none';
        }
    }
};
PagarPasaporteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PagarPasaporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagar-pasaporte',
        template: __webpack_require__(/*! raw-loader!./pagar-pasaporte.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.html"),
        styles: [__webpack_require__(/*! ./pagar-pasaporte.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.scss")]
    })
], PagarPasaporteComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvcGFnby1vbmxpbmUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcY2FuY2lsbGVyaWFcXHRyYW1pdGFyLXBhc2Fwb3J0ZVxcY29tcG9uZW50c1xccGFnby1vbmxpbmVcXHBhZ28tb25saW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9wYWdvLW9ubGluZS9wYWdvLW9ubGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9wYWdvLW9ubGluZS9wYWdvLW9ubGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufSIsImxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PagoOnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoOnlineComponent", function() { return PagoOnlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let PagoOnlineComponent = class PagoOnlineComponent {
    constructor(router, sanitizer, route) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.url = "http://pse.cancilleria.gov.co/ciudadano2016/pago/inicioPagoTC.aspx?t=";
        this.cargasIframe = 0;
        this.numeroSolicitud = this.router.snapshot.paramMap.get('numeroSolicitud');
        this.proceso = this.router.snapshot.paramMap.get('proceso');
        this.medioPago = this.router.snapshot.paramMap.get('medioPago');
        this.codigoTramite = this.router.snapshot.paramMap.get('codigoTramite');
        this.entidad = this.router.snapshot.paramMap.get('entidad');
        this.dataSolicitud = "<datos><numeroSolicitud>" + this.numeroSolicitud + "</numeroSolicitud><process>" + this.proceso + "</process><medioPago>" + this.medioPago + "</medioPago><codTramite>" + this.codigoTramite + "</codTramite><entidad>" + this.entidad + "</entidad></datos>";
        // this.paramUrl = btoa(this.dataSolicitud).substring(31);
        this.paramUrl = this.router.snapshot.paramMap.get('url');
    }
    ngOnInit() {
        // this.srcIframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.paramUrl);
        this.srcIframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.paramUrl);
    }
    validarSrc() {
        if (this.cargasIframe == 0) {
            this.cargasIframe = 1;
            return;
        }
        // var contenedor = (<HTMLIFrameElement>document.getElementById('iframePasarela'));
        // // if((this.url + this.paramUrl) != contenedor.src){
        // if((this.paramUrl) != contenedor.src){
        //   var solicitudId = contenedor.src.substr(-15);
        //   this.route.navigate(["/cancilleria/comprobantePagoPse",solicitudId]);
        // }    
    }
};
PagoOnlineComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PagoOnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pago-online',
        template: __webpack_require__(/*! raw-loader!./pago-online.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.html"),
        styles: [__webpack_require__(/*! ./pago-online.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.scss")]
    })
], PagoOnlineComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte-form.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte-form.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SolicitarPasaporteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitarPasaporteForm", function() { return SolicitarPasaporteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class SolicitarPasaporteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(20)])],
            numeroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fechaExpedicion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^(19[0-9][0-9]|20[0-9][0-9])\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$')])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            confirmacionEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            numeroPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fechaExpedicionPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^(19[0-9][0-9]|20[0-9][0-9])\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$')])],
            digitoVerificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(2)])],
            tipoPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            motivoSolicitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            oficinaSolicitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            checkDatos: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]
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

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-register-advice {\n  margin-top: 2.2rem;\n}\n\n.button-footer {\n  text-align: center;\n}\n\n.button-footer button {\n  margin: 10px;\n}\n\n.icon-ayuda {\n  margin: 0px !important;\n}\n\n.link-ayuda {\n  margin-right: 0px !important;\n}\n\n.chk-datos-personales {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvc29saWNpdGFyLXBhc2Fwb3J0ZS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxjYW5jaWxsZXJpYVxcdHJhbWl0YXItcGFzYXBvcnRlXFxjb21wb25lbnRzXFxzb2xpY2l0YXItcGFzYXBvcnRlXFxzb2xpY2l0YXItcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy9zb2xpY2l0YXItcGFzYXBvcnRlL3NvbGljaXRhci1wYXNhcG9ydGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvc29saWNpdGFyLXBhc2Fwb3J0ZS9zb2xpY2l0YXItcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvdmNvLXJlZ2lzdGVyLWFkdmljZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbn1cclxuXHJcbi5idXR0b24tZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb24tYXl1ZGEge1xyXG4gICAgbWFyZ2luOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5saW5rLWF5dWRhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcclxufVxyXG4uY2hrLWRhdG9zLXBlcnNvbmFsZXMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59IiwiLmdvdmNvLXJlZ2lzdGVyLWFkdmljZSB7XG4gIG1hcmdpbi10b3A6IDIuMnJlbTtcbn1cblxuLmJ1dHRvbi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pY29uLWF5dWRhIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxpbmstYXl1ZGEge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hrLWRhdG9zLXBlcnNvbmFsZXMge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SolicitarPasaporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitarPasaporteComponent", function() { return SolicitarPasaporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _solicitar_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitar-pasaporte-form */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte-form.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aviso_privacidad_modal_aviso_privacidad_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../aviso-privacidad-modal/aviso-privacidad-modal.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.ts");
/* harmony import */ var _ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ayuda-pasaporte-modal/ayuda-pasaporte-modal.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.ts");
/* harmony import */ var _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tramitar-pasaporte.service */ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts");









let SolicitarPasaporteComponent = class SolicitarPasaporteComponent {
    constructor(tramiteService, modalService, modalNotificationService, router) {
        this.tramiteService = tramiteService;
        this.modalService = modalService;
        this.modalNotificationService = modalNotificationService;
        this.router = router;
        this.invalidForm = false;
        this.listTipoDocumento = [];
        this.listTipoPasaporte = [];
        this.listMotivoSolicitud = [];
        this.listOficinas = [];
        this.showMotivos = false;
        this.mensajeAvisoInicial = "";
        this.mensajeAvisoFinal = "";
        this.mensajeTratamiento = "";
        this.mensajeConsentimiento = "";
        this.SolicitarPasaporteForm = new _solicitar_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__["SolicitarPasaporteForm"]();
        this.buildForm();
        this.getParams();
        this.currentMessage = {
            title: '',
            message: '',
            type: ''
        };
        this.submitted = false;
    }
    ngOnInit() {
    }
    buildForm() {
        this.solicitudPasaporteForm = this.SolicitarPasaporteForm.getForm();
        this.setStep("2");
    }
    getParams() {
        this.getTipoDocumento();
        this.getListadoOficinas();
        this.getTipoPasaporte();
        this.changeTipoPasaporte();
        this.getTratamientoDatos();
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', step);
    }
    changeTipoPasaporte() {
        this.solicitudPasaporteForm.get('tipoPasaporte').valueChanges.subscribe((tipoPasaporte) => {
            this.solicitudPasaporteForm.get("motivoSolicitud").setValue('');
            this.solicitudPasaporteForm.get("motivoSolicitud").enable();
            this.getMotivosSolicitud(Number(tipoPasaporte.value));
        });
    }
    getListadoOficinas() {
        this.tramiteService.getListadoOficinas().subscribe((data) => {
            if (data != undefined && data.length > 0) {
                this.listOficinas = data;
            }
        }, (error) => {
            console.error(error);
        });
    }
    getTipoDocumento() {
        this.tramiteService.getTiposDocumento().subscribe((data) => {
            // tslint:disable-next-line: triple-equals
            if (data != undefined && data.length > 0) {
                this.listTipoDocumento = data;
            }
        }, (error) => {
            console.error(error);
        });
    }
    getTipoPasaporte() {
        this.tramiteService.getTiposPasaporte().subscribe((data) => {
            if (data != undefined && data.length > 0) {
                this.listTipoPasaporte = data;
            }
        }, (error) => {
            console.error(error);
        });
    }
    getMotivosSolicitud(tipoPasaporte) {
        this.tramiteService.getMotivosSolicitud(tipoPasaporte).subscribe((data) => {
            if (data != undefined && data.length > 0) {
                this.listMotivoSolicitud = data;
                this.solicitudPasaporteForm.get("motivoSolicitud").enable();
            }
        }, (error) => {
            console.error(error);
        });
    }
    save() {
        this.findInvalidControls();
        this.submitted = true;
        if (!this.SolicitarPasaporteForm.isValid()) {
            this.invalidForm = true;
            return;
        }
        //Datos de la solicitud.
        this.dataSolicitudPasaporteModel = {
            motivoSolicitud: this.SolicitarPasaporteForm.form.value.motivoSolicitud.value,
            oficina: this.SolicitarPasaporteForm.form.value.oficinaSolicitud.value,
            tipoPasaporte: this.SolicitarPasaporteForm.form.value.tipoPasaporte.value,
            digitoVerificacionOCR: this.SolicitarPasaporteForm.form.value.digitoVerificacion,
            fechaExpedicionPasaporte: this.SolicitarPasaporteForm.form.value.fechaExpedicionPasaporte,
            numeroPasaporte: this.SolicitarPasaporteForm.form.value.numeroPasaporte,
            codigoDocumento: this.SolicitarPasaporteForm.form.value.tipoDocumento.value,
            correoElectronico: this.SolicitarPasaporteForm.form.value.email,
            fechaExpedicionDocIdentidad: this.SolicitarPasaporteForm.form.value.fechaExpedicion,
            numeroPersonal: this.SolicitarPasaporteForm.form.value.numeroDocumento
        };
        this.tramiteService.insSolicitudPasaporte(this.dataSolicitudPasaporteModel).subscribe((data) => {
            var result = JSON.parse(data);
            if (result.return != null) {
                if (result.return.outDetalleRespuesta.codigo !== 1) {
                    this.modalNotificationService.openNotificationDialog("Error", result.return.outDetalleRespuesta.mensaje, "error", () => {
                        return;
                    });
                }
                else {
                    this.modalNotificationService.openNotificationDialog("Guardado", result.return.outDetalleRespuesta.mensaje, "success", () => {
                        this.router.navigate(["/cancilleria/pagarPasaporte", data]);
                    });
                }
            }
        }, (error) => {
            this.currentMessage.title = 'Lo sentimos';
            this.currentMessage.type = 'error';
            this.currentMessage.message = 'Los datos ingresados son incorrectos, te recomendamos:\n';
            this.currentMessage.message += '1. revise que los datos ingresados sean los solicitados';
            console.error(error);
        });
    }
    showAvisoPrivacidad() {
        this.modalService.open(_aviso_privacidad_modal_aviso_privacidad_modal_component__WEBPACK_IMPORTED_MODULE_6__["AvisoPrivacidadModalComponent"], {
            size: 'lg',
            backdrop: "static",
            keyboard: false
        });
    }
    showAyuda() {
        this.modalService.open(_ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_7__["AyudaPasaporteModalComponent"], {
            size: 'lg',
            backdrop: "static",
            keyboard: false
        });
    }
    clean() {
        this.modalNotificationService.openConfirmDialog("Limpiar formulario", "Al limpiar el formulario perderás los datos ingresados", "error", this.resetForm(), null);
    }
    resetForm() {
        this.solicitudPasaporteForm.reset();
        this.invalidForm = false;
    }
    getTratamientoDatos() {
        this.tramiteService.getTratamientoDatos().subscribe((data) => {
            if (data != undefined && data != null) {
                this.mensajeTratamiento = data["return"].mensajeTratamiento;
                this.mensajeConsentimiento = data["return"].mensajeConsentimiento;
                this.mensajeAvisoInicial = data["return"].mensajeAviso.substring(0, data["return"].mensajeAviso.indexOf("{"));
                this.mensajeAvisoFinal = data["return"].mensajeAviso.substring(data["return"].mensajeAviso.indexOf("}") + 1);
            }
        }, (error) => {
            console.error(error);
        });
    }
    findInvalidControls() {
        const invalid = [];
        const controls = this.solicitudPasaporteForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                console.error(name);
            }
        }
        return invalid;
    }
    get f() { return this.solicitudPasaporteForm.controls; }
};
SolicitarPasaporteComponent.ctorParameters = () => [
    { type: _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_8__["TramitarPasaporteService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SolicitarPasaporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solicitar-pasaporte',
        template: __webpack_require__(/*! raw-loader!./solicitar-pasaporte.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.html"),
        styles: [__webpack_require__(/*! ./solicitar-pasaporte.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.scss")]
    })
], SolicitarPasaporteComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte-form.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte-form.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: VerSolicitudPasaporteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerSolicitudPasaporteForm", function() { return VerSolicitudPasaporteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class VerSolicitudPasaporteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(20)])],
            numeroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fechaExpedicion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            confirmacionEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])],
            numeroPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fechaExpedicionPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)])],
            digitoVerificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(2)])],
            tipoPasaporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            motivoSolicitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            oficinaSolicitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
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

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-register-advice {\n  margin-top: 2.2rem;\n}\n\n.margen-top {\n  margin-top: 20px;\n}\n\n.button-footer {\n  text-align: center;\n}\n\n.button-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvY2FuY2lsbGVyaWEvdHJhbWl0YXItcGFzYXBvcnRlL2NvbXBvbmVudHMvdmVyLXNvbGljaXR1ZC1wYXNhcG9ydGUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcY2FuY2lsbGVyaWFcXHRyYW1pdGFyLXBhc2Fwb3J0ZVxcY29tcG9uZW50c1xcdmVyLXNvbGljaXR1ZC1wYXNhcG9ydGVcXHZlci1zb2xpY2l0dWQtcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9jYW5jaWxsZXJpYS90cmFtaXRhci1wYXNhcG9ydGUvY29tcG9uZW50cy92ZXItc29saWNpdHVkLXBhc2Fwb3J0ZS92ZXItc29saWNpdHVkLXBhc2Fwb3J0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2NhbmNpbGxlcmlhL3RyYW1pdGFyLXBhc2Fwb3J0ZS9jb21wb25lbnRzL3Zlci1zb2xpY2l0dWQtcGFzYXBvcnRlL3Zlci1zb2xpY2l0dWQtcGFzYXBvcnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvdmNvLXJlZ2lzdGVyLWFkdmljZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbn1cclxuXHJcbi5tYXJnZW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufSIsIi5nb3Zjby1yZWdpc3Rlci1hZHZpY2Uge1xuICBtYXJnaW4tdG9wOiAyLjJyZW07XG59XG5cbi5tYXJnZW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: VerSolicitudPasaporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerSolicitudPasaporteComponent", function() { return VerSolicitudPasaporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ver_solicitud_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-solicitud-pasaporte-form */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte-form.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ayuda-pasaporte-modal/ayuda-pasaporte-modal.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.ts");







let VerSolicitudPasaporteComponent = class VerSolicitudPasaporteComponent {
    constructor(modalService, modalNotificationService, router) {
        this.modalService = modalService;
        this.modalNotificationService = modalNotificationService;
        this.router = router;
        this.invalidForm = false;
        this.listTipoDocumento = [{ text: 'Cédula ciudadanía', value: 1 }, { text: 'Tarjeta de identidad', value: 2 }];
        this.listTipoPasaporte = [{ text: 'Ordinario', value: 1 }, { text: 'Normal', value: 2 }];
        this.listMotivoSolicitud = [{ text: 'Cambio', value: 1 }, { text: 'Renovación', value: 2 }];
        this.listOficinas = [{ text: 'Bogotá, Oficina 1', value: 1 }, { text: 'Medellín, Oficina 1', value: 2 }];
        this.VerSolicitudPasaporteForm = new _ver_solicitud_pasaporte_form__WEBPACK_IMPORTED_MODULE_2__["VerSolicitudPasaporteForm"]();
        this.buildForm();
    }
    ngOnInit() {
    }
    buildForm() {
        this.verSolicitudPasaporteForm = this.VerSolicitudPasaporteForm.getForm();
    }
    showAyuda() {
        this.modalService.open(_ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_6__["AyudaPasaporteModalComponent"], { size: 'lg',
            backdrop: "static",
            keyboard: false
        });
    }
};
VerSolicitudPasaporteComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VerSolicitudPasaporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ver-solicitud-pasaporte',
        template: __webpack_require__(/*! raw-loader!./ver-solicitud-pasaporte.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.html"),
        styles: [__webpack_require__(/*! ./ver-solicitud-pasaporte.component.scss */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.scss")]
    })
], VerSolicitudPasaporteComponent);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts ***!
  \************************************************************************************************/
/*! exports provided: TramitarPasaporteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitarPasaporteService", function() { return TramitarPasaporteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

class TramitarPasaporteService {
    constructor(http) {
        this.http = http;
        this.urlTramite = {
            tiposDocumento: "TramitarPasaporte/obtenertiposdocumento",
            tiposPasaporte: "TramitarPasaporte/ObtenerTiposPasaporte",
            listadoOficinas: "TramitarPasaporte/ObtenerOficinas",
            motivosSolicitud: "TramitarPasaporte/ObtenerMotivosSolicitud?tipoPasaporte=",
            solicitarPasaporte: "TramitarPasaporte/SolicitarPasaporte?modelSolicitud=",
            tratamientoDatos: "TramitarPasaporte/ObtenerTratamientoDatosPersonales",
            dataComprobante: "TramitarPasaporte/ObtenerDataComprobante?solicitudId=",
            consultaSolicitud: "TramitarPasaporte/ConsultarSolicitud?modelConsulta="
        };
    }
    getTiposDocumento() {
        return this.http.get(this.urlTramite.tiposDocumento, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    getTiposPasaporte() {
        return this.http.get(this.urlTramite.tiposPasaporte, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    getListadoOficinas() {
        return this.http.get(this.urlTramite.listadoOficinas, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    getMotivosSolicitud(tipoPasaporte) {
        let url = this.urlTramite.motivosSolicitud + tipoPasaporte;
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    getTratamientoDatos() {
        return this.http.get(this.urlTramite.tratamientoDatos, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    insSolicitudPasaporte(modelSolicitud) {
        console.log(this.urlTramite.solicitarPasaporte);
        return this.http.post(this.urlTramite.solicitarPasaporte, modelSolicitud, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    }
    getDataComprobante(solicitudId) {
        let url = this.urlTramite.dataComprobante + solicitudId;
        return this.http.post(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append("angular-show-loading", "true")
        });
    }
    getDataSolicitud(modelConsulta) {
        return this.http.post(this.urlTramite.consultaSolicitud, modelConsulta, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    }
}
TramitarPasaporteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/tramitar-pasaporte-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/tramitar-pasaporte-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: TramitarPasaporteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitarPasaporteRoutingModule", function() { return TramitarPasaporteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_solicitar_pasaporte_solicitar_pasaporte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/solicitar-pasaporte/solicitar-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.ts");
/* harmony import */ var _components_pagar_pasaporte_pagar_pasaporte_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pagar-pasaporte/pagar-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.ts");
/* harmony import */ var _components_consultar_estado_consultar_estado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/consultar-estado/consultar-estado.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.ts");
/* harmony import */ var _components_container_pasaporte_container_pasaporte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container-pasaporte/container-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.ts");
/* harmony import */ var _components_estado_solicitud_estado_solicitud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/estado-solicitud/estado-solicitud.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.ts");
/* harmony import */ var _components_ver_solicitud_pasaporte_ver_solicitud_pasaporte_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.ts");
/* harmony import */ var _components_comprobante_pago_pse_comprobante_pago_pse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/comprobante-pago-pse/comprobante-pago-pse.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.ts");
/* harmony import */ var _components_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pago-online/pago-online.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.ts");
/* harmony import */ var _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ingresar-tramite/ingresar-tramite.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.ts");












const routes = [
    {
        path: "",
        component: _components_container_pasaporte_container_pasaporte_component__WEBPACK_IMPORTED_MODULE_6__["ContainerPasaporteComponent"],
        children: [
            {
                path: "",
                component: _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_11__["IngresarTramiteComponent"]
            },
            {
                path: "solicitarPasaporte",
                component: _components_solicitar_pasaporte_solicitar_pasaporte_component__WEBPACK_IMPORTED_MODULE_3__["SolicitarPasaporteComponent"]
            },
            {
                path: "pagarPasaporte/:data",
                component: _components_pagar_pasaporte_pagar_pasaporte_component__WEBPACK_IMPORTED_MODULE_4__["PagarPasaporteComponent"]
            },
            {
                path: "consultarEstado",
                component: _components_consultar_estado_consultar_estado_component__WEBPACK_IMPORTED_MODULE_5__["ConsultarEstadoComponent"]
            },
            {
                path: "estadoSolicitud/:nombresApellidos/:tipoPasaporte/:tipoDocumento/:solicitud/:numeroDocumento/:oficina/:estadoSolicitud/:estadoActual",
                component: _components_estado_solicitud_estado_solicitud_component__WEBPACK_IMPORTED_MODULE_7__["EstadoSolicitudComponent"]
            },
            {
                path: "verSolicitudPasaporte",
                component: _components_ver_solicitud_pasaporte_ver_solicitud_pasaporte_component__WEBPACK_IMPORTED_MODULE_8__["VerSolicitudPasaporteComponent"]
            },
            {
                path: "comprobantePagoPse/:ticketID",
                component: _components_comprobante_pago_pse_comprobante_pago_pse_component__WEBPACK_IMPORTED_MODULE_9__["ComprobantePagoPseComponent"]
            },
            {
                path: "pagoOnline/:numeroSolicitud/:proceso/:medioPago/:codigoTramite/:entidad/:url",
                component: _components_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_10__["PagoOnlineComponent"]
            }
        ]
    }
];
let TramitarPasaporteRoutingModule = class TramitarPasaporteRoutingModule {
};
TramitarPasaporteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TramitarPasaporteRoutingModule);



/***/ }),

/***/ "./src/app/tramites/cancilleria/tramitar-pasaporte/tramitar-pasaporte.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tramites/cancilleria/tramitar-pasaporte/tramitar-pasaporte.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TramitarPasaporteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitarPasaporteModule", function() { return TramitarPasaporteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tramitar_pasaporte_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tramitar-pasaporte-routing.module */ "./src/app/tramites/cancilleria/tramitar-pasaporte/tramitar-pasaporte-routing.module.ts");
/* harmony import */ var _components_solicitar_pasaporte_solicitar_pasaporte_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/solicitar-pasaporte/solicitar-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/solicitar-pasaporte/solicitar-pasaporte.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_pagar_pasaporte_pagar_pasaporte_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pagar-pasaporte/pagar-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pagar-pasaporte/pagar-pasaporte.component.ts");
/* harmony import */ var _components_consultar_estado_consultar_estado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/consultar-estado/consultar-estado.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/consultar-estado/consultar-estado.component.ts");
/* harmony import */ var _components_container_pasaporte_container_pasaporte_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/container-pasaporte/container-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/container-pasaporte/container-pasaporte.component.ts");
/* harmony import */ var _components_estado_solicitud_estado_solicitud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/estado-solicitud/estado-solicitud.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/estado-solicitud/estado-solicitud.component.ts");
/* harmony import */ var _components_aviso_privacidad_modal_aviso_privacidad_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/aviso-privacidad-modal/aviso-privacidad-modal.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/aviso-privacidad-modal/aviso-privacidad-modal.component.ts");
/* harmony import */ var _components_ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ayuda-pasaporte-modal/ayuda-pasaporte-modal.component.ts");
/* harmony import */ var _components_ver_solicitud_pasaporte_ver_solicitud_pasaporte_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ver-solicitud-pasaporte/ver-solicitud-pasaporte.component.ts");
/* harmony import */ var _components_comprobante_pago_pse_comprobante_pago_pse_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/comprobante-pago-pse/comprobante-pago-pse.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/comprobante-pago-pse/comprobante-pago-pse.component.ts");
/* harmony import */ var _components_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pago-online/pago-online.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/pago-online/pago-online.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/tramitar-pasaporte.service */ "./src/app/tramites/cancilleria/tramitar-pasaporte/services/tramitar-pasaporte.service.ts");
/* harmony import */ var _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ingresar-tramite/ingresar-tramite.component */ "./src/app/tramites/cancilleria/tramitar-pasaporte/components/ingresar-tramite/ingresar-tramite.component.ts");





















let TramitarPasaporteModule = class TramitarPasaporteModule {
};
TramitarPasaporteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_solicitar_pasaporte_solicitar_pasaporte_component__WEBPACK_IMPORTED_MODULE_4__["SolicitarPasaporteComponent"], _components_pagar_pasaporte_pagar_pasaporte_component__WEBPACK_IMPORTED_MODULE_9__["PagarPasaporteComponent"], _components_consultar_estado_consultar_estado_component__WEBPACK_IMPORTED_MODULE_10__["ConsultarEstadoComponent"], _components_container_pasaporte_container_pasaporte_component__WEBPACK_IMPORTED_MODULE_11__["ContainerPasaporteComponent"], _components_estado_solicitud_estado_solicitud_component__WEBPACK_IMPORTED_MODULE_12__["EstadoSolicitudComponent"], _components_aviso_privacidad_modal_aviso_privacidad_modal_component__WEBPACK_IMPORTED_MODULE_13__["AvisoPrivacidadModalComponent"], _components_ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_14__["AyudaPasaporteModalComponent"], _components_ver_solicitud_pasaporte_ver_solicitud_pasaporte_component__WEBPACK_IMPORTED_MODULE_15__["VerSolicitudPasaporteComponent"], _components_comprobante_pago_pse_comprobante_pago_pse_component__WEBPACK_IMPORTED_MODULE_16__["ComprobantePagoPseComponent"], _components_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_17__["PagoOnlineComponent"], _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_20__["IngresarTramiteComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tramitar_pasaporte_routing_module__WEBPACK_IMPORTED_MODULE_3__["TramitarPasaporteRoutingModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__["RecaptchaModule"]
        ],
        providers: [
            _services_tramitar_pasaporte_service__WEBPACK_IMPORTED_MODULE_19__["TramitarPasaporteService"]
        ],
        entryComponents: [
            _components_solicitar_pasaporte_solicitar_pasaporte_component__WEBPACK_IMPORTED_MODULE_4__["SolicitarPasaporteComponent"],
            _components_aviso_privacidad_modal_aviso_privacidad_modal_component__WEBPACK_IMPORTED_MODULE_13__["AvisoPrivacidadModalComponent"],
            _components_ayuda_pasaporte_modal_ayuda_pasaporte_modal_component__WEBPACK_IMPORTED_MODULE_14__["AyudaPasaporteModalComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], TramitarPasaporteModule);



/***/ })

}]);
//# sourceMappingURL=tramites-cancilleria-tramitar-pasaporte-tramitar-pasaporte-module-es2015.ca7331585ed6cbc319ed.js.map