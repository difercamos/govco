(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-icbf-aportes-parafiscales-aportes-parafiscales-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"icbfContainer\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\"\r\n      [name] = \"'aportes-parafiscales'\"\r\n      [owner] = \"'icbf'\"\r\n      [id] = \"'7760'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">     \r\n      <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n      <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T7760'\" [type]=\"'redirect'\" ></app-btn-volver>      \r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"messageConsulta\">\r\n  <div class=\"col-12 pb-3\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n    <app-notifications [typeMessage]=\"'success'\" [title]=\"'Tu certificado ha sido verificado con ??xito, por favor espera unos segundos su descarga ...'\"\r\n    [show]=\"mensajeDescarga\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card\">\r\n  <div class=\"center\">\r\n    <h3>Consulta de certificado por c??digo de verificaci??n</h3>\r\n    <label>Ingresa el c??digo de verificaci??n para consultar una planilla</label>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-lg-6 input-center\">\r\n            <label for=\"codigo\" class=\"form-group-govco\">C??digo de verificaci??n</label>\r\n            <input class=\"form-control input-govco\" type=\"text\" formControlName=\"codigo\" (change)=\"setStep(2)\" maxlength=\"10\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row certificado-afiliacion-footer\">\r\n      <div class=\" col-md-12 aportes-parafiscales-footer\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"consultar()\">CONSULTAR</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.searchEmpty\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card\">\r\n  <div class=\"center\">\r\n    <h3>Recuperar contrase??a</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-lg-6 col-md-12 col-sm-12 input-center\">\r\n            <label for=\"identificacion\">Aportante (C??dula o NIT)</label>\r\n            <input class=\"form-control input-govco\" type=\"text\" formControlName=\"identificacion\" (change)=\"setStep(2)\"/>\r\n          </div>\r\n           <div class=\"row col-12 text-center my-3 mx-auto\">\r\n            <small>{{messages.help}}</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mx-auto text-center\">\r\n        <label>\r\n          {{ messages.advice }}\r\n        </label>\r\n      </div>\r\n    <div class=\"row\">\r\n      <div class=\" col-md-12 col-md-12 col-sm-12 aportes-parafiscales-footer\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"forgotPassword()\">ENVIAR</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-logout-icbf></app-logout-icbf>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12 pb-3\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n    <app-notifications [typeMessage]=\"'success'\" [title]=\"'Tu certificado ha sido generado con ??xito, por favor espera unos segundos su descarga ...'\"\r\n    [show]=\"mensajeDescarga\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card\">\r\n  <div>\r\n    <h3>Generar certificado</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-lg-6 col-md-12 col-sm-12 input-center\">\r\n            <label for=\"vigencia\" class=\"form-group-govco\">Seleccione una vigencia</label>\r\n              <app-dropdownlist ngDefaultControl formControlName=\"vigencia\" placeholder = \"Ej: 2019\" [items]=\"vigencias\" (change)=\"setStep(3)\"></app-dropdownlist>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group col-12 terminos-container\">\r\n        <div class=\"row\">\r\n          <label class=\"chk-govco pr-4\">\r\n            <input type=\"checkbox\" id=\"terminosCondiciones\" formControlName=\"autorizacionDatos\"/>\r\n            <label for=\"terminosCondiciones\" class=\"text-justify font-weight-normal font-italic\">\r\n                He le??do y acepto los t??rminos y condiciones del certificado de aportantes, disponibles\r\n                <app-terminos-modal [name]=\"'AQU??'\" [enlace]=\"'https://certificadosaportantes.icbf.gov.co/Certificado/Documentos/Terminos_y_Condiciones_PilaWeb.pdf'\"></app-terminos-modal>\r\n            </label>\r\n            <div class=\"chk-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\" col-md-12 aportes-parafiscales-footer\">\r\n        <button class=\"btn btn-round btn-high\" (click)=\"generar()\">GENERAR CERTIFICADO</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card govco-card adviceMessage\">\r\n    <div class=\"card-body card-body p-2 text-justify\">\r\n        <label><strong>Recuerda:</strong></label><br/>\r\n        <p class=\"font-italic\">{{ messages.advice }}</p>\r\n        <p class=\"font-italic\">{{ messages.adviceInfo }}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card\" id=\"icbf-login-container\">\r\n  <div class=\"center\">\r\n    <h3>INICIAR SESI??N EN ICBF</h3>\r\n    <label>Para confirmar tu cita debes ser un usuario</label>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row mx-auto\">\r\n      <div class=\"col col-lg-6 col-md-12 col-sm-12 login-register d-flex align-items-center\r\n      justify-content-center mt-3 order-last order-lg-first order-xl-first\">\r\n        <button type=\"button\" class=\"btn btn-round btn-high m-auto\" (click)=\"signIn()\">REGISTRARME</button>\r\n      </div>\r\n\r\n      <div class=\"col col-lg-6 col-md-12 col-sm-12 order-fist order-lg-last order-xl-last\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator [validate]=\"invalidForm\">\r\n\r\n        <div class=\"w-100 form-group\">\r\n          <label for=\"user\" class=\"form-group-govco\">Aportante</label>\r\n          <input class=\"form-control input-govco\" type=\"text\" formControlName=\"user\" (change)=\"setStep(2)\"  maxlength=\"16\"/>\r\n        </div>\r\n        <div class=\"w-100\">\r\n          <small>{{ messages.help }}</small>\r\n        </div>\r\n        <div class=\"w-100\">\r\n          <div class=\"form-group mb-0\">\r\n            <label for=\"password\" class=\"form-group-govco\">Contrase??a</label>\r\n            <input class=\"form-control input-govco\" [type]=\"typeButton\" formControlName=\"password\" (change)=\"setStep(2)\"  maxlength=\"15\"/>\r\n          </div>\r\n          <label class=\"chk-govco\">\r\n            <input type=\"checkbox\" id=\"showPassword\" (click)=\"checkShowPassword()\"/>\r\n            <label for=\"showPassword\">\r\n              Mostrar contrase??a\r\n            </label>\r\n            <div class=\"chk-govco__indicator\"></div>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"login-btn-container\">\r\n            <button class=\"btn btn-round btn-high\" (click)=\"login()\">INGRESAR</button>\r\n        </div>\r\n        <div class=\"login-btn-container\">\r\n            <a (click)=\"forgotPassword()\">He olvidado mi contrase??a</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br/>\r\n<app-consulta-icbf></app-consulta-icbf>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notification-action \r\n[typeMessage]=\"'info'\" \r\n[title]=\"'Importante'\" \r\n[message]=\"'En estos momentos tienes una sesi??n iniciada, si deseas cerrar la sesi??n solo debes hacer clic en el bot??n.'\"\r\n[show]=\"currentUserIcbf\"\r\n[positionAction]=\"'left'\"\r\n[actions]='actions'></app-notification-action>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"messages.failureRequest\" [title]=\"'Lo sentimos'\"\r\n      [show]=\"failureRequest\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card govco-card\">\r\n\r\n  <h3>Reg??strate</h3>\r\n  <div class=\"card-body\">\r\n      <div class=\"row\" [formGroup]=\"form\" [ngClass]=\"{'invalid-form' : invalidForm}\" appInputValidator\r\n        [validate]=\"invalidForm\">\r\n      <div class=\"w-100\" id=\"identificacionGroup\">\r\n          <label><strong>Identificaci??n</strong></label>\r\n        <div>\r\n            <div class=\"row\">\r\n            <div class=\"form-group col-lg-6 col-md-12 col-sm-12\">\r\n                <label for=\"primerNombre\" class=\"form-group-govco\">N??mero de documento</label>\r\n                <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 1023939490\"\r\n                  formControlName=\"identificacion\" maxlength=\"16\"/>\r\n              </div>\r\n            <div class=\"form-group col-lg-6 col-md-12 col-sm-12\">\r\n                <label for=\"email\" class=\"form-group-govco\">Correo electr??nico</label>\r\n                <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: correo@mail.com\"\r\n                  formControlName=\"email\" maxlength=\"256\"/>\r\n              </div>\r\n            <div class=\"form-group col-lg-6 col-md-12 col-sm-12\">\r\n                <small>{{ messages.help }}</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n    <div class=\"w-100\" id=\"datosPlanillasGroup\">\r\n        <label><strong>Datos de la planilla</strong></label>\r\n        <div>\r\n          <div class=\"row\">\r\n                <div class=\"form-group col-lg-6 col-md-12 col-sm-12\">\r\n              <label for=\"planilla\" class=\"form-group-govco\">N??mero de planilla de pago</label>\r\n              <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 1023939490\"\r\n                formControlName=\"planilla\" maxlength=\"12\" />\r\n            </div>\r\n              <div class=\"form-group col-lg-6 col-md-12 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-group-govco\">C??digo operador</label>\r\n                <app-dropdownlist ngDefaultControl formControlName=\"codigoOperador\" placeholder=\"Ej: 0293904\"\r\n                  [items]=\"codigosOperadores\"></app-dropdownlist>\r\n              </div>\r\n              </div>\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"mesPeriodo\" class=\"form-group-govco\">Mes</label>\r\n                <app-dropdownlist ngDefaultControl formControlName=\"mesPeriodo\" placeholder=\"Ej: Enero\"\r\n                  [items]=\"periodos\"></app-dropdownlist>\r\n              </div>\r\n            </div>\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"anoPeriodo\" class=\"form-group-govco\">A??o</label>\r\n                <app-dropdownlist ngDefaultControl formControlName=\"anoPeriodo\" placeholder=\"Ej: 2019\"\r\n                  [items]=\"anioPeriodos\" [selected] = 'anioActual'></app-dropdownlist>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"w-100\" id=\"informacionCuentaGroup\">\r\n      <label><strong>Informaci??n de la cuenta</strong></label>\r\n      <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 \">\r\n              <div class=\"form-group\">\r\n                <small>{{ messages.password }}</small>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <div class=\"form-group mb-0\">\r\n                <label for=\"password\" class=\"form-group-govco\">Contrase??a</label>\r\n                <input class=\"form-control input-govco\" [type]=\"typeButton\" placeholder=\"Ej: 1023939490\"\r\n                  formControlName=\"contrasena\" maxlength=\"15\"/>                \r\n              </div>\r\n              <label class=\"chk-govco\">\r\n                <input type=\"checkbox\" id=\"showPassword\" (click)=\"checkShowPassword()\" />\r\n                <label for=\"showPassword\" class=\"form-group-govco\">\r\n                  Mostrar contrase??a\r\n                </label>\r\n                <div class=\"chk-govco__indicator\"></div>\r\n              </label>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <div class=\"form-group mb-0\">\r\n                <label for=\"contrasenaConfirmacion\" class=\"form-group-govco\">Confirmar contrase??a</label>\r\n                <input class=\"form-control input-govco\" [type]=\"typeButtonConfirmation\" placeholder=\"Ej: 1023939490\"\r\n                  formControlName=\"contrasenaConfirmacion\" maxlength=\"15\"/>                \r\n              </div>\r\n              <label class=\"chk-govco\">\r\n                <input type=\"checkbox\" id=\"showPasswordConfirmation\" (click)=\"checkShowPasswordConfirmation()\" />\r\n                <label for=\"showPasswordConfirmation\" class=\"form-group-govco\">\r\n                  Mostrar contrase??a\r\n                </label>\r\n                <div class=\"chk-govco__indicator\"></div>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                <label for=\"primerNombre\" class=\"form-group-govco\">Pregunta de recordaci??n</label>\r\n                <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 1023939490\"\r\n                  formControlName=\"preguntaRecordacion\" maxlength=\"256\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                <label for=\"primerNombre\" class=\"form-group-govco\">Respuesta</label>\r\n                <input class=\"form-control input-govco\" type=\"text\" placeholder=\"Ej: 1023939490\"\r\n                  formControlName=\"respuesta\" maxlength=\"256\"/>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                  <div class=\"form-group col-lg-12 col-md-12 col-sm-12 justify\">\r\n                    <small>\r\n                      {{ messages.advice }} <app-tratamiento-datos-modal\r\n                        [name]=\"'Pol??tica de Tratamiento de Datos Personales'\"\r\n                        [enlace]=\"'https://www.icbf.gov.co/sites/default/files/politica_de_tratamiento_de_datos_personales.pdf'\">\r\n                      </app-tratamiento-datos-modal>\r\n                    </small>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-12 col-md-12 col-sm-12 \">\r\n                    <label class=\"chk-govco\">\r\n                      <input type=\"checkbox\" id=\"terminosCondiciones\" formControlName=\"autorizacionDatos\" />\r\n                      <label for=\"terminosCondiciones\">\r\n                        Acepto el uso y tratamiento de mis datos personales\r\n                      </label>\r\n                      <div class=\"chk-govco__indicator\"></div>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-12 col-md-12 col-sm-12 \">\r\n                    <div class=\"row recaptcha-container\">\r\n                      <div class=\"form-group\">\r\n                        <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-12 col-md-12 col-sm-12  terminos-container\">\r\n                    <small>\r\n                      {{ messages.emailSend }}\r\n                    </small>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mx-auto\">\r\n      <div class=\"aportes-parafiscales-footer text-center\">\r\n        <button class=\"btn btn-round btn-middle\" (click)=\"limpiar()\">Limpiar</button>\r\n        <button class=\"btn btn-round btn-high\" (click)=\"registrar()\">Enviar</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"open(content)\"><strong>{{name}}</strong></a>\r\n\r\n<ng-template #content class=\"modal fade govco-modal-large show\" tabindex=\"-1\" role=\"dialog\" style=\"display: block; z-index: 4;\" aria-modal=\"true\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-hidden=\"true\">\r\n            <em class=\"material-icons\">clear</em></button>\r\n      </div>\r\n      <iframe src=\"https://certificadosaportantes.icbf.gov.co/Certificado/Documentos/Terminos_y_Condiciones_PilaWeb.pdf\" id=\"pdf\" title=\"Terminos y Condiciones\"></iframe>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"open(content)\"><strong>{{name}}</strong></a>\r\n\r\n<ng-template #content class=\"modal fade govco-modal-large show\" tabindex=\"-1\" role=\"dialog\" style=\"display: block; z-index: 4;\" aria-modal=\"true\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-hidden=\"true\">\r\n            <em class=\"material-icons\">clear</em></button>\r\n      </div>\r\n      <iframe src=\"https://www.icbf.gov.co/sites/default/files/politica_de_tratamiento_de_datos_personales.pdf\" title=\"pdf\" id=\"pdf\"></iframe>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/aportes-parafiscales-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/aportes-parafiscales-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AportesParafiscalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AportesParafiscalesRoutingModule", function() { return AportesParafiscalesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_aportes_parafiscales_aportes_parafiscales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aportes-parafiscales/aportes-parafiscales.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.ts");
/* harmony import */ var _components_login_icbf_login_icbf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-icbf/login-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.ts");
/* harmony import */ var _components_registro_icbf_registro_icbf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registro-icbf/registro-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_generar_certificado_generar_certificado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/generar-certificado/generar-certificado.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.ts");








const routes = [
    {
        path: '',
        component: _components_aportes_parafiscales_aportes_parafiscales_component__WEBPACK_IMPORTED_MODULE_3__["AportesParafiscalesComponent"],
        children: [
            {
                path: '',
                component: _components_login_icbf_login_icbf_component__WEBPACK_IMPORTED_MODULE_4__["LoginIcbfComponent"]
            },
            {
                path: 'registro',
                component: _components_registro_icbf_registro_icbf_component__WEBPACK_IMPORTED_MODULE_5__["RegistroIcbfComponent"]
            },
            {
                path: 'forgot-password',
                component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
            },
            {
                path: 'generar-certificado',
                component: _components_generar_certificado_generar_certificado_component__WEBPACK_IMPORTED_MODULE_7__["GenerarCertificadoComponent"]
            }
        ]
    }
];
let AportesParafiscalesRoutingModule = class AportesParafiscalesRoutingModule {
};
AportesParafiscalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AportesParafiscalesRoutingModule);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/aportes-parafiscales.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/aportes-parafiscales.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AportesParafiscalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AportesParafiscalesModule", function() { return AportesParafiscalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _aportes_parafiscales_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aportes-parafiscales-routing.module */ "./src/app/tramites/icbf/aportes-parafiscales/aportes-parafiscales-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_aportes_parafiscales_aportes_parafiscales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aportes-parafiscales/aportes-parafiscales.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.ts");
/* harmony import */ var _components_login_icbf_login_icbf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-icbf/login-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.ts");
/* harmony import */ var _components_registro_icbf_registro_icbf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/registro-icbf/registro-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.ts");
/* harmony import */ var _components_consulta_icbf_consulta_icbf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/consulta-icbf/consulta-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_generar_certificado_generar_certificado_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/generar-certificado/generar-certificado.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.ts");
/* harmony import */ var _components_logout_icbf_logout_icbf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logout-icbf/logout-icbf.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.ts");
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _components_terminos_modal_terminos_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/terminos-modal/terminos-modal.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.ts");
/* harmony import */ var _components_tratamiento_datos_modal_tratamiento_datos_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tratamiento-datos-modal/tratamiento-datos-modal.component */ "./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.ts");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");



















let AportesParafiscalesModule = class AportesParafiscalesModule {
};
AportesParafiscalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_aportes_parafiscales_aportes_parafiscales_component__WEBPACK_IMPORTED_MODULE_7__["AportesParafiscalesComponent"], _components_login_icbf_login_icbf_component__WEBPACK_IMPORTED_MODULE_8__["LoginIcbfComponent"], _components_registro_icbf_registro_icbf_component__WEBPACK_IMPORTED_MODULE_9__["RegistroIcbfComponent"], _components_consulta_icbf_consulta_icbf_component__WEBPACK_IMPORTED_MODULE_10__["ConsultaIcbfComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
            _components_generar_certificado_generar_certificado_component__WEBPACK_IMPORTED_MODULE_12__["GenerarCertificadoComponent"], _components_logout_icbf_logout_icbf_component__WEBPACK_IMPORTED_MODULE_13__["LogoutIcbfComponent"], _components_terminos_modal_terminos_modal_component__WEBPACK_IMPORTED_MODULE_16__["TerminosModalComponent"], _components_tratamiento_datos_modal_tratamiento_datos_modal_component__WEBPACK_IMPORTED_MODULE_17__["TratamientoDatosModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _aportes_parafiscales_routing_module__WEBPACK_IMPORTED_MODULE_4__["AportesParafiscalesRoutingModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"]
        ],
        providers: [_services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_14__["AportesParafiscalesUtilsService"], _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_18__["RecaptchaService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AportesParafiscalesModule);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9hcG9ydGVzLXBhcmFmaXNjYWxlcy9hcG9ydGVzLXBhcmFmaXNjYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AportesParafiscalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AportesParafiscalesComponent", function() { return AportesParafiscalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AportesParafiscalesComponent = class AportesParafiscalesComponent {
    constructor(pageTitle) {
        this.pageTitle = pageTitle;
    }
    ngOnInit() {
        this.setPageTitle();
    }
    setPageTitle() {
        const baseTitle = _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__["page-title"];
        const tramiteTitle = _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_2__.tramites.icbf["aportes-parafiscales"].title;
        this.pageTitle.setTitle(`${baseTitle}-${tramiteTitle}`);
    }
};
AportesParafiscalesComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
AportesParafiscalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aportes-parafiscales',
        template: __webpack_require__(/*! raw-loader!./aportes-parafiscales.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.html"),
        styles: [__webpack_require__(/*! ./aportes-parafiscales.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/aportes-parafiscales/aportes-parafiscales.component.scss")]
    })
], AportesParafiscalesComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center;\n}\n\n.input-center {\n  margin: auto;\n}\n\n.aportes-parafiscales-footer {\n  text-align: center;\n}\n\n.aportes-parafiscales-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2NvbnN1bHRhLWljYmYvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcaWNiZlxcYXBvcnRlcy1wYXJhZmlzY2FsZXNcXGNvbXBvbmVudHNcXGNvbnN1bHRhLWljYmZcXGNvbnN1bHRhLWljYmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9jb25zdWx0YS1pY2JmL2NvbnN1bHRhLWljYmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNJLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9jb25zdWx0YS1pY2JmL2NvbnN1bHRhLWljYmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWNlbnRlcntcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hcG9ydGVzLXBhcmFmaXNjYWxlcy1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBvcnRlcy1wYXJhZmlzY2FsZXMtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwb3J0ZXMtcGFyYWZpc2NhbGVzLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ConsultaIcbfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaIcbfComponent", function() { return ConsultaIcbfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json");
var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json", 1);
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");





let ConsultaIcbfComponent = class ConsultaIcbfComponent {
    constructor(fb, aportesParafiscalesUtils) {
        this.fb = fb;
        this.aportesParafiscalesUtils = aportesParafiscalesUtils;
        this.invalidForm = false;
        this.failureRequest = false;
        this.mensajeDescarga = false;
        this.form = this.fb.group({
            codigo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.messages = {
            searchEmpty: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.searchEmpty,
            failureRequest: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.failureRequest
        };
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
        if (step == '2') {
            this.mensajeDescarga = false;
        }
    }
    showMessageDownload() {
        const el = document.getElementById('messageConsulta');
        el.style.display = 'block';
    }
    consultar() {
        // Error validaci??n del formulario
        if (!this.form.valid) {
            this.invalidForm = true;
            return;
        }
        // Success validaci??n del formulario
        // --Datos para enviar
        this.dataCertificacionModel = {
            identificacion: null,
            vigencia: null,
            codigoVerificacion: this.form.value.codigo
        };
        // Petici??n POST
        this.aportesParafiscalesUtils.verificar(this.dataCertificacionModel).subscribe(
        // Success response
        response => {
            this.responseModel = response;
            // Validaci??n datos backend
            if (this.responseModel.error === 1) {
                this.failureRequest = true;
                return;
            }
            // Salida
            this.failureRequest = false;
            this.mensajeDescarga = true;
            this.showMessageDownload();
            this.setStep('3');
            this.aportesParafiscalesUtils.generar(this.dataCertificacionModel)
                .subscribe((data) => {
                this.setStep('4');
                const newBlob = new Blob([data], { type: 'application/pdf' });
                // IE
                if (window.navigator && window.navigator.msSaveOrOpenBlob && this.isIE()) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                    return;
                }
                // Otros navegadores
                const downloadURL = window.URL.createObjectURL(newBlob);
                const link = document.createElement('a');
                link.href = downloadURL;
                link.download = this.dataCertificacionModel.codigoVerificacion + '.pdf';
                link.click();
            }, (error) => {
                this.failureRequest = true;
                this.mensajeDescarga = false;
                this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
                return;
            });
        }, 
        // Failure response
        error => {
            this.failureRequest = true;
            this.mensajeDescarga = false;
            this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            return;
        });
        this.invalidForm = false;
    }
    isIE() {
        const ua = navigator.userAgent;
        const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    }
};
ConsultaIcbfComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_4__["AportesParafiscalesUtilsService"] }
];
ConsultaIcbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consulta-icbf',
        template: __webpack_require__(/*! raw-loader!./consulta-icbf.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.html"),
        styles: [__webpack_require__(/*! ./consulta-icbf.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/consulta-icbf/consulta-icbf.component.scss")]
    })
], ConsultaIcbfComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center;\n  margin: 10px;\n}\n\n.input-center {\n  margin: auto;\n}\n\n.aportes-parafiscales-footer {\n  text-align: center;\n}\n\n.aportes-parafiscales-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxpY2JmXFxhcG9ydGVzLXBhcmFmaXNjYWxlc1xcY29tcG9uZW50c1xcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENFO0VBQ0ksWUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jZW50ZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYXBvcnRlcy1wYXJhZmlzY2FsZXMtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuIiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5wdXQtY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBvcnRlcy1wYXJhZmlzY2FsZXMtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwb3J0ZXMtcGFyYWZpc2NhbGVzLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json");
var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json", 1);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts");
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, userService, aportesParafiscalesUtils, modalService, router) {
        this.fb = fb;
        this.userService = userService;
        this.aportesParafiscalesUtils = aportesParafiscalesUtils;
        this.modalService = modalService;
        this.router = router;
        this.invalidForm = false;
        this.failureRequest = false;
        this.form = this.fb.group({
            identificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.messages = {
            searchEmpty: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.searchEmpty,
            advice: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.forgotPassword,
            help: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.help,
            failureRequest: ''
        };
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    forgotPassword() {
        // Error validaci??n del formulario
        if (!this.form.valid) {
            this.invalidForm = true;
            return;
        }
        // Success validaci??n del formulario
        // --Datos para enviar
        this.identificacionModel = {
            Identificacion: this.form.value.identificacion
        };
        // Petici??n POST
        this.aportesParafiscalesUtils.forgotPassword(this.identificacionModel).subscribe(
        // Success response
        response => {
            this.responseModel = response;
            // Validaci??n datos backend
            if (this.responseModel.error === 1) {
                this.failureRequest = true;
                this.messages.failureRequest = this.responseModel.mensaje;
                window.scroll(0, 0);
                return;
            }
            // Salida
            this.failureRequest = false;
            this.modalService.openNotificationDialog('Recordar contrase??a exitoso', 'Hemos enviado la informaci??n al correo electr??nico registrado', 'success', () => {
                this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760']);
            });
        }, 
        // Failure response
        error => {
            this.failureRequest = true;
            this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            window.scroll(0, 0);
            return;
        });
        this.invalidForm = false;
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_5__["AportesParafiscalesUtilsService"] },
    { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/forgot-password/forgot-password.component.scss")]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center;\n}\n\n.input-center {\n  margin: auto;\n}\n\n.aportes-parafiscales-footer {\n  text-align: center;\n}\n\n.aportes-parafiscales-footer button {\n  margin: 10px;\n}\n\n.adviceMessage {\n  margin-top: 2rem;\n  padding-top: 0.6rem !important;\n  padding-bottom: 0.6rem !important;\n}\n\n.terminos-container {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2dlbmVyYXItY2VydGlmaWNhZG8vQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcaWNiZlxcYXBvcnRlcy1wYXJhZmlzY2FsZXNcXGNvbXBvbmVudHNcXGdlbmVyYXItY2VydGlmaWNhZG9cXGdlbmVyYXItY2VydGlmaWNhZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9nZW5lcmFyLWNlcnRpZmljYWRvL2dlbmVyYXItY2VydGlmaWNhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNJLFlBQUE7QUNDTjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2dlbmVyYXItY2VydGlmaWNhZG8vZ2VuZXJhci1jZXJ0aWZpY2Fkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtY2VudGVye1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFwb3J0ZXMtcGFyYWZpc2NhbGVzLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWR2aWNlTWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogMC42cmVtIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC42cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlcm1pbm9zLWNvbnRhaW5lcntcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LWNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmFwb3J0ZXMtcGFyYWZpc2NhbGVzLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcG9ydGVzLXBhcmFmaXNjYWxlcy1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uYWR2aWNlTWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50O1xufVxuXG4udGVybWlub3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GenerarCertificadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarCertificadoComponent", function() { return GenerarCertificadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");
/* harmony import */ var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json");
var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json", 1);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let GenerarCertificadoComponent = class GenerarCertificadoComponent {
    constructor(fb, aportesParafiscalesUtils, userService, router) {
        this.fb = fb;
        this.aportesParafiscalesUtils = aportesParafiscalesUtils;
        this.userService = userService;
        this.router = router;
        this.invalidForm = false;
        this.failureRequest = false;
        this.mensajeDescarga = false;
        this.form = this.fb.group({
            vigencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            autorizacionDatos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.messages = {
            advice: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages['generate-info'],
            adviceInfo: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages['generate-info-copy'],
            searchEmpty: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_4__.messages.searchEmpty,
            failureRequest: ''
        };
        if (!this.userService.getUserLoggedIn()) {
            this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760/']);
        }
        this.getInformativos();
        this.getVigencias();
    }
    getVigencias() {
        this.identificacionModel = {
            Identificacion: this.userService.getUserLoggedIn().username
        };
        this.aportesParafiscalesUtils.getVigencias(this.identificacionModel).subscribe(
        // Success response
        response => {
            this.vigencias = response;
            this.setStep('3');
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getInformativos() {
        this.informativoModel = {
            idEntidad: 1,
            idInformativo: 2,
            url: null
        };
        this.aportesParafiscalesUtils.getInformativos(this.informativoModel).subscribe(
        // Success response
        response => {
            this.informativoModel = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
        if (step == '3') {
            this.mensajeDescarga = false;
        }
    }
    generar() {
        this.mensajeDescarga = false;
        // Error validaci??n del formulario
        if (!this.form.valid || this.form.value.autorizacionDatos == false) {
            this.invalidForm = true;
            return;
        }
        // Success validaci??n del formulario
        // --Datos para enviar
        this.dataCertificacionModel = {
            identificacion: this.userService.getUserLoggedIn().username,
            vigencia: this.form.value.vigencia.text,
            codigoVerificacion: null
        };
        // Petici??n POST
        this.aportesParafiscalesUtils.verificar(this.dataCertificacionModel).subscribe(
        // Success response
        response => {
            this.responseModel = response;
            // Validaci??n datos backend
            if (this.responseModel.error === 1) {
                this.failureRequest = true;
                this.messages.failureRequest = this.responseModel.mensaje;
                window.scroll(0, 0);
                return;
            }
            // Salida
            this.failureRequest = false;
            this.mensajeDescarga = true;
            this.setStep('4');
            window.scroll(0, 0);
            this.form.get('autorizacionDatos').setValue(null);
            this.aportesParafiscalesUtils.generar(this.dataCertificacionModel)
                .subscribe((data) => {
                const newBlob = new Blob([data], { type: 'application/pdf' });
                // IE
                if (window.navigator && window.navigator.msSaveOrOpenBlob && this.isIE()) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                    return;
                }
                // Otros navegadores
                const downloadURL = window.URL.createObjectURL(newBlob);
                const link = document.createElement('a');
                link.href = downloadURL;
                link.download = this.dataCertificacionModel.identificacion + '' + this.dataCertificacionModel.vigencia + '.pdf';
                link.click();
            }, (error) => {
                this.failureRequest = true;
                this.mensajeDescarga = false;
                this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
                window.scroll(0, 0);
                return;
            });
        }, 
        // Failure response
        error => {
            this.failureRequest = true;
            this.mensajeDescarga = false;
            this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            window.scroll(0, 0);
            return;
        });
        this.invalidForm = false;
    }
    isIE() {
        const ua = navigator.userAgent;
        const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    }
};
GenerarCertificadoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_3__["AportesParafiscalesUtilsService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
GenerarCertificadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generar-certificado',
        template: __webpack_require__(/*! raw-loader!./generar-certificado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.html"),
        styles: [__webpack_require__(/*! ./generar-certificado.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/generar-certificado/generar-certificado.component.scss")]
    })
], GenerarCertificadoComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#icbf-login-container .login-register {\n  text-align: center;\n}\n#icbf-login-container .minjusticia-login-form {\n  padding: 10px;\n}\n#icbf-login-container .minjusticia-login-form .form-group label {\n  font-weight: bold;\n}\n#icbf-login-container .login-btn-container {\n  margin: auto;\n  text-align: center;\n  margin-top: 1rem;\n}\n#icbf-login-container .adviceMessage {\n  margin-top: 2rem;\n  padding-top: 0.6rem !important;\n  padding-bottom: 0.6rem !important;\n  text-align: justify;\n}\n#icbf-login-container a {\n  color: #007bff;\n  cursor: pointer;\n}\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2xvZ2luLWljYmYvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcaWNiZlxcYXBvcnRlcy1wYXJhZmlzY2FsZXNcXGNvbXBvbmVudHNcXGxvZ2luLWljYmZcXGxvZ2luLWljYmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9sb2dpbi1pY2JmL2xvZ2luLWljYmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDSSxrQkFBQTtBQ0ROO0FES0U7RUFDSSxhQUFBO0FDSE47QURNVTtFQUNJLGlCQUFBO0FDSmQ7QURTRTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUE47QURVRTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FDUk47QURVRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDUk47QURZQTtFQUNFLGtCQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9pY2JmL2Fwb3J0ZXMtcGFyYWZpc2NhbGVzL2NvbXBvbmVudHMvbG9naW4taWNiZi9sb2dpbi1pY2JmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ljYmYtbG9naW4tY29udGFpbmVye1xyXG5cclxuICAubG9naW4tcmVnaXN0ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLm1pbmp1c3RpY2lhLWxvZ2luLWZvcm0ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi1idG4tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuMHJlbTtcclxuICB9XHJcblxyXG4gIC5hZHZpY2VNZXNzYWdlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW0haW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICBhIHtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIiNpY2JmLWxvZ2luLWNvbnRhaW5lciAubG9naW4tcmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaWNiZi1sb2dpbi1jb250YWluZXIgLm1pbmp1c3RpY2lhLWxvZ2luLWZvcm0ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2ljYmYtbG9naW4tY29udGFpbmVyIC5taW5qdXN0aWNpYS1sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jaWNiZi1sb2dpbi1jb250YWluZXIgLmxvZ2luLWJ0bi1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiNpY2JmLWxvZ2luLWNvbnRhaW5lciAuYWR2aWNlTWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuI2ljYmYtbG9naW4tY29udGFpbmVyIGEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoginIcbfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIcbfComponent", function() { return LoginIcbfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts");
/* harmony import */ var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json");
var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json", 1);
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");







let LoginIcbfComponent = class LoginIcbfComponent {
    // tslint:disable-next-line: max-line-length
    constructor(fb, router, userService, aportesParafiscalesUtils) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.aportesParafiscalesUtils = aportesParafiscalesUtils;
        this.typeButton = 'password';
        this.showPassword = true;
        this.invalidForm = false;
        this.failureRequest = false;
        this.form = this.fb.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.messages = {
            searchEmpty: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_5__.messages.searchEmpty,
            help: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_5__.messages.help,
            failureRequest: ''
        };
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
        if (step == '2') {
            const el = document.getElementById('messageConsulta');
            el.style.display = 'none';
        }
    }
    login() {
        // Error validaci??n del formulario
        if (!this.form.valid) {
            this.invalidForm = true;
            return;
        }
        // Success validaci??n del formulario
        // --Datos para enviar
        this.loginModel = {
            User: this.form.value.user,
            Password: this.form.value.password
        };
        // Petici??n POST
        this.aportesParafiscalesUtils.login(this.loginModel).subscribe(
        // Success response
        response => {
            this.responseModel = response;
            // Validaci??n datos backend
            if (this.responseModel.error === 1) {
                this.failureRequest = true;
                this.messages.failureRequest = _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_5__.messages.searchEmpty;
                window.scroll(0, 0);
                return;
            }
            // Salida
            this.failureRequest = false;
            const u = { username: this.form.value.user };
            this.userService.setUserLoggedIn(u);
            window.location.href = '/tramites-y-servicios/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760/generar-certificado';
        }, 
        // Failure response
        error => {
            this.failureRequest = true;
            this.messages.failureRequest = 'Se produjo un error al procesar la solicitud';
            window.scroll(0, 0);
            return;
        });
        this.invalidForm = false;
    }
    checkShowPassword() {
        this.typeButton = this.typeButton === 'password' ? 'text' : 'password';
    }
    forgotPassword() {
        this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760/forgot-password']);
    }
    signIn() {
        this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760/registro']);
    }
};
LoginIcbfComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_6__["AportesParafiscalesUtilsService"] }
];
LoginIcbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-icbf',
        template: __webpack_require__(/*! raw-loader!./login-icbf.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.html"),
        styles: [__webpack_require__(/*! ./login-icbf.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/login-icbf/login-icbf.component.scss")]
    })
], LoginIcbfComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btn-logout-container {\n  margin: auto;\n  text-align: center;\n}\n\n.borde {\n  border: 1px solid #3466CC;\n}\n\n.text {\n  color: #3466CC;\n  font-weight: bold;\n}\n\n.margin {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL2xvZ291dC1pY2JmL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGljYmZcXGFwb3J0ZXMtcGFyYWZpc2NhbGVzXFxjb21wb25lbnRzXFxsb2dvdXQtaWNiZlxcbG9nb3V0LWljYmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9sb2dvdXQtaWNiZi9sb2dvdXQtaWNiZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9sb2dvdXQtaWNiZi9sb2dvdXQtaWNiZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidG4tbG9nb3V0LWNvbnRhaW5lcntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib3JkZXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ2NkNDO1xyXG59XHJcbi50ZXh0e1xyXG4gIGNvbG9yOiAjMzQ2NkNDO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXJnaW57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuIiwiI2J0bi1sb2dvdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3JkZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDY2Q0M7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6ICMzNDY2Q0M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LogoutIcbfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutIcbfComponent", function() { return LogoutIcbfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutIcbfComponent = class LogoutIcbfComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.actions = [];
        this.logout = () => {
            this.userService.userLoggedOut();
            this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760']);
        };
        this.currentUserIcbf = this.userService.getUserLoggedIn();
        this.actions.push({
            class: 'btn btn-round btn-high col-12',
            event: this.logout,
            title: 'Cerrar sesi??n'
        });
        console.log(this.currentUserIcbf);
    }
    ngOnInit() {
    }
};
LogoutIcbfComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutIcbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout-icbf',
        template: __webpack_require__(/*! raw-loader!./logout-icbf.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.html"),
        styles: [__webpack_require__(/*! ./logout-icbf.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/logout-icbf/logout-icbf.component.scss")]
    })
], LogoutIcbfComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terminos-container {\n  text-align: center;\n}\n\n.aportes-parafiscales-footer {\n  text-align: center;\n}\n\n.aportes-parafiscales-footer button {\n  margin: 10px;\n}\n\n.center {\n  margin: auto;\n  background: blue;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL3JlZ2lzdHJvLWljYmYvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcaWNiZlxcYXBvcnRlcy1wYXJhZmlzY2FsZXNcXGNvbXBvbmVudHNcXHJlZ2lzdHJvLWljYmZcXHJlZ2lzdHJvLWljYmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy9yZWdpc3Ryby1pY2JmL3JlZ2lzdHJvLWljYmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNJLFlBQUE7QUNDTjs7QURHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9pY2JmL2Fwb3J0ZXMtcGFyYWZpc2NhbGVzL2NvbXBvbmVudHMvcmVnaXN0cm8taWNiZi9yZWdpc3Ryby1pY2JmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1pbm9zLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXBvcnRlcy1wYXJhZmlzY2FsZXMtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIiwiLnRlcm1pbm9zLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwb3J0ZXMtcGFyYWZpc2NhbGVzLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcG9ydGVzLXBhcmFmaXNjYWxlcy1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RegistroIcbfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroIcbfComponent", function() { return RegistroIcbfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json");
var _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/tramites/aportes-parafiscales.json */ "./src/assets/string-resources/tramites/aportes-parafiscales.json", 1);
/* harmony import */ var _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/aportes-parafiscales-utils.service */ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts");
/* harmony import */ var _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dialog-modal/services/confirm-modal.service */ "./src/app/shared/dialog-modal/services/confirm-modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");
/* harmony import */ var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json");
var _stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @stringResources/app-strings.json */ "./src/assets/string-resources/app-strings.json", 1);









let RegistroIcbfComponent = class RegistroIcbfComponent {
    constructor(fb, aportesParafiscalesUtils, modalService, router, recaptchaService) {
        this.fb = fb;
        this.aportesParafiscalesUtils = aportesParafiscalesUtils;
        this.modalService = modalService;
        this.router = router;
        this.recaptchaService = recaptchaService;
        this.typeButton = 'password';
        this.typeButtonConfirmation = 'password';
        this.anioPeriodos = [];
        this.invalidForm = false;
        this.failureRequest = false;
        this.form = this.fb.group({
            identificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_8__.regexp.email)])],
            planilla: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_stringResources_app_strings_json__WEBPACK_IMPORTED_MODULE_8__.regexp.numeric)])],
            codigoOperador: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            anoPeriodo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mesPeriodo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9]{10,200}')])],
            contrasenaConfirmacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9]{10,200}')])],
            preguntaRecordacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            respuesta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            autorizacionDatos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        const fecha = new Date();
        this.anioActual = fecha.getFullYear();
        this.getCodigosOperadores();
        this.getPeriodos();
        this.getInformativos();
        this.getAniosPeridos();
        this.messages = {
            advice: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.advice,
            searchEmpty: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.searchEmpty,
            failureRequest: '',
            emailSend: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.emailSend,
            help: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.help,
            password: _stringResources_tramites_aportes_parafiscales_json__WEBPACK_IMPORTED_MODULE_3__.messages.password
        };
    }
    checkShowPassword() {
        this.typeButton = this.typeButton === 'password' ? 'text' : 'password';
    }
    checkShowPasswordConfirmation() {
        this.typeButtonConfirmation = this.typeButtonConfirmation === 'password' ? 'text' : 'password';
    }
    getCodigosOperadores() {
        this.inputListOperador = {
            idEntidad: 1,
            idLista: 1
        };
        this.aportesParafiscalesUtils.getListas(this.inputListOperador).subscribe(
        // Success response
        response => {
            this.codigosOperadores = response;
            this.setStep('2');
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getPeriodos() {
        this.inputListOperador = {
            idEntidad: 1,
            idLista: 2
        };
        this.aportesParafiscalesUtils.getListas(this.inputListOperador).subscribe(
        // Success response
        response => {
            this.periodos = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getAniosPeridos() {
        this.inputListOperador = {
            idEntidad: 0,
            idLista: 3
        };
        this.aportesParafiscalesUtils.getListas(this.inputListOperador).subscribe(
        // Success response
        response => {
            this.anioPeriodos = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getInformativos() {
        this.informativoModel = {
            idEntidad: 1,
            idInformativo: 1,
            url: null
        };
        this.aportesParafiscalesUtils.getInformativos(this.informativoModel).subscribe(
        // Success response
        response => {
            this.informativoModel = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    setStep(step) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('steptramites', step);
    }
    registrar() {
        // Error validaci??n del formulario
        if (!this.form.valid) {
            this.invalidForm = true;
            this.form.get('recaptcha').setValue(null);
            return;
        }
        this.recaptchaService.validateServerKey(this.form.value.recaptcha).subscribe((data) => {
            if (data["success"] == true) {
                this.sendData();
            }
            else {
                this.failureRequest = true;
                this.messages.failureRequest = data["message"];
                window.scroll(0, 0);
                this.form.get('recaptcha').setValue(null);
                return;
            }
        }, (error) => {
            this.invalidForm = true;
        });
        this.invalidForm = false;
    }
    sendData() {
        // --Datos para enviar
        let anioPerido = this.anioActual;
        if (this.form.value.anoPeriodo.value) {
            anioPerido = this.form.value.anoPeriodo.value;
        }
        this.registerModel = {
            identificacion: this.form.value.identificacion,
            email: this.form.value.email,
            planilla: Number(this.form.value.planilla),
            codigoOperador: this.form.value.codigoOperador.value,
            anoPeriodo: anioPerido,
            mesPeriodo: this.form.value.mesPeriodo.value,
            Contrasena: this.form.value.contrasena,
            ContrasenaConfirmacion: this.form.value.contrasenaConfirmacion,
            preguntaRecordacion: this.form.value.preguntaRecordacion,
            respuesta: this.form.value.respuesta,
            autorizacionDatos: this.form.value.autorizacionDatos,
            recaptcha: this.form.value.recaptcha
        };
        console.log(this.registerModel);
        // Petici??n POST
        this.aportesParafiscalesUtils.registrar(this.registerModel).subscribe(
        // Success response
        response => {
            this.responseModel = response;
            // Validaci??n datos backend
            if (this.responseModel.error === 1) {
                this.failureRequest = true;
                this.messages.failureRequest = this.responseModel.mensaje;
                window.scroll(0, 0);
                this.form.get('recaptcha').setValue(null);
                return;
            }
            // Salida
            this.failureRequest = false;
            this.modalService.openNotificationDialog('Registro exitoso', 'Hemos enviado una confirmaci??n al correo electr??nico registrado', 'success', () => {
                this.router.navigate(['/ICBF/expedicion-estado-cuenta-aportes-parafiscales/T7760']);
            });
        }, 
        // Failure response
        error => {
            this.failureRequest = true;
            this.messages.failureRequest = this.messages.searchEmpty;
            this.form.get('recaptcha').setValue(null);
            window.scroll(0, 0);
            return;
        });
    }
    limpiar() {
        this.form.reset();
    }
};
RegistroIcbfComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_aportes_parafiscales_utils_service__WEBPACK_IMPORTED_MODULE_4__["AportesParafiscalesUtilsService"] },
    { type: _shared_dialog_modal_services_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_7__["RecaptchaService"] }
];
RegistroIcbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-icbf',
        template: __webpack_require__(/*! raw-loader!./registro-icbf.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.html"),
        styles: [__webpack_require__(/*! ./registro-icbf.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/registro-icbf/registro-icbf.component.scss")]
    })
], RegistroIcbfComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pdf {\n  width: 100%;\n  height: 600px;\n  background: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL3Rlcm1pbm9zLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGljYmZcXGFwb3J0ZXMtcGFyYWZpc2NhbGVzXFxjb21wb25lbnRzXFx0ZXJtaW5vcy1tb2RhbFxcdGVybWlub3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy90ZXJtaW5vcy1tb2RhbC90ZXJtaW5vcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL3Rlcm1pbm9zLW1vZGFsL3Rlcm1pbm9zLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BkZiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiBibHVlKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuIiwiI3BkZiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TerminosModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosModalComponent", function() { return TerminosModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let TerminosModalComponent = class TerminosModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }
    close() {
        this.modalService.dismissAll();
    }
};
TerminosModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TerminosModalComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TerminosModalComponent.prototype, "enlace", void 0);
TerminosModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terminos-modal',
        template: __webpack_require__(/*! raw-loader!./terminos-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.html"),
        styles: [__webpack_require__(/*! ./terminos-modal.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/terminos-modal/terminos-modal.component.scss")]
    })
], TerminosModalComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pdf {\n  width: 100%;\n  height: 600px;\n  background: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL3RyYXRhbWllbnRvLWRhdG9zLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGljYmZcXGFwb3J0ZXMtcGFyYWZpc2NhbGVzXFxjb21wb25lbnRzXFx0cmF0YW1pZW50by1kYXRvcy1tb2RhbFxcdHJhdGFtaWVudG8tZGF0b3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ljYmYvYXBvcnRlcy1wYXJhZmlzY2FsZXMvY29tcG9uZW50cy90cmF0YW1pZW50by1kYXRvcy1tb2RhbC90cmF0YW1pZW50by1kYXRvcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvaWNiZi9hcG9ydGVzLXBhcmFmaXNjYWxlcy9jb21wb25lbnRzL3RyYXRhbWllbnRvLWRhdG9zLW1vZGFsL3RyYXRhbWllbnRvLWRhdG9zLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BkZiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiBibHVlKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuIiwiI3BkZiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TratamientoDatosModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TratamientoDatosModalComponent", function() { return TratamientoDatosModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let TratamientoDatosModalComponent = class TratamientoDatosModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }
    close() {
        this.modalService.dismissAll();
    }
};
TratamientoDatosModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TratamientoDatosModalComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TratamientoDatosModalComponent.prototype, "enlace", void 0);
TratamientoDatosModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tratamiento-datos-modal',
        template: __webpack_require__(/*! raw-loader!./tratamiento-datos-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.html"),
        styles: [__webpack_require__(/*! ./tratamiento-datos-modal.component.scss */ "./src/app/tramites/icbf/aportes-parafiscales/components/tratamiento-datos-modal/tratamiento-datos-modal.component.scss")]
    })
], TratamientoDatosModalComponent);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/services/aportes-parafiscales-utils.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: AportesParafiscalesUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AportesParafiscalesUtilsService", function() { return AportesParafiscalesUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AportesParafiscalesUtilsService = class AportesParafiscalesUtilsService {
    constructor(http) {
        this.http = http;
        this.urlTramite = {
            listas: 'icbf/AportesParafiscales/listas',
            registrar: 'icbf/AportesParafiscales/registro',
            login: 'icbf/AportesParafiscales/login',
            vigencias: 'icbf/AportesParafiscales/vigencias',
            verificar: 'icbf/AportesParafiscales/verificar',
            generar: 'icbf/AportesParafiscales/generar',
            recordarPassword: 'icbf/AportesParafiscales/forgot-password',
            informativos: 'icbf/AportesParafiscales/informativos'
        };
    }
    // Cargar listas (Operadores - Peridos)
    getListas(inputListModel) {
        return this.http.post(this.urlTramite.listas, inputListModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Registrar usuario
    registrar(registerModel) {
        return this.http.post(this.urlTramite.registrar, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Registrar usuario
    login(loginModel) {
        return this.http.post(this.urlTramite.login, loginModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar vigencias
    getVigencias(identificacionModel) {
        return this.http.post(this.urlTramite.vigencias, identificacionModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // VerificarCertificado
    verificar(dataCertificacionModel) {
        return this.http.post(this.urlTramite.verificar, dataCertificacionModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Generar certificado
    generar(item) {
        return this.http.post(this.urlTramite.generar, item, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    }
    // Recuperar contase??a
    forgotPassword(identificacionModel) {
        return this.http.post(this.urlTramite.recordarPassword, identificacionModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar informativos (Politica de tratamiento de datos personales)
    getInformativos(informativoModel) {
        return this.http.post(this.urlTramite.informativos, informativoModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Error petici??n
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
};
AportesParafiscalesUtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AportesParafiscalesUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AportesParafiscalesUtilsService);



/***/ }),

/***/ "./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tramites/icbf/aportes-parafiscales/services/user.service.ts ***!
  \*****************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() {
        this.isUserLoggedIn = false;
    }
    setUserLoggedIn(user) {
        this.isUserLoggedIn = true;
        this.usserLogged = user;
        localStorage.setItem('currentUserIcbf', JSON.stringify(user));
    }
    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('currentUserIcbf'));
    }
    userLoggedOut() {
        this.isUserLoggedIn = false;
        this.usserLogged = null;
        localStorage.removeItem('currentUserIcbf');
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/assets/string-resources/tramites/aportes-parafiscales.json":
/*!************************************************************************!*\
  !*** ./src/assets/string-resources/tramites/aportes-parafiscales.json ***!
  \************************************************************************/
/*! exports provided: messages, default */
/***/ (function(module) {

module.exports = {"messages":{"advice":"Se??or usuario, de conformidad con lo dispuesto en las normas vigentes sobre protecci??n de datos personales, el ICBF solicita su autorizaci??n para la recolecci??n y tratamiento de sus datos personales a fin de realizar caracterizaci??n poblacional y medici??n de calidad de servicio mediante encuesta, en cumplimiento de la misi??n institucional y funciones legales. Para mayor informaci??n lo invitamos a consultar nuestra pol??tica de tratamiento de datos personales en nuestra p??gina web ","generate-info":"Los documentos generados a trav??s de esta p??gina tienen un c??digo de verificaci??n con el cual el interesado podr?? validar su autenticidad a trav??s de esta opci??n que estar?? disponible por 30 d??as.","generate-info-copy":"Queda bajo su responsabilidad la descarga, verificaci??n y validaci??n que la informaci??n corresponda al certificado generado en esta p??gina.","searchEmpty":"Los datos ingresados son incorrectos, te recomendamos:  \n  1. Revisar que los datos ingresados sean los solicitados.","emailSend":"Luego de realizar este registro, se validar??n los datos y se enviar?? una confirmaci??n al correo electr??nico que indic?? en este formulario de registro","forgotPassword":"Su contrase??a ser?? enviada al correo electr??nico que registr?? en el momento de la inscripci??n","help":"Si es persona natural ingrese su c??dula, si es empresa digite su NIT sin d??gito de verificaci??n en el campo Aportante","failureRequest":"No encontramos resultados para la b??squeda realizada, te recomendamos: \n  1. Revisar los datos ingresados.  \n  2. Si a??n no encuentras lo que buscas, cont??ctanos.","password":"La contrase??a debe tener m??nimo 10 caracteres relacionado n??meros, letras may??sculas y min??sculas en cualquier proporci??n, as?? como no puede tener caracteres especiales y espacios."}};

/***/ })

}]);
//# sourceMappingURL=tramites-icbf-aportes-parafiscales-aportes-parafiscales-module-es2015.ac59f5677387b394debc.js.map