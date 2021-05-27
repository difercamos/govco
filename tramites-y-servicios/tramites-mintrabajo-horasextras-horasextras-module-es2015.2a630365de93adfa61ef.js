(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-mintrabajo-horasextras-horasextras-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"HorasExtrasContainer\" class=\"row\">\r\n  <app-tramite-detail\r\n      id=\"containerDetail\"\r\n      class=\"col-md-12\"\r\n      [name]=\"'horas-extras'\"\r\n      [owner]=\"'horasextras'\">\r\n  </app-tramite-detail>\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/S002'\" [type]=\"'redirect'\"></app-btn-volver>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body pt-0\">\r\n  <h3 class=\"m-0\">Bienvenido(a)</h3>\r\n</div>\r\n<br>\r\n<label class=\"form-group-govco\">El Ministerio del Trabajo, en lo sucesivo Mintrabajo, identificado con el NIT\r\n  830115226-3, con domicilio en la Carrera 14 No. 99 -33, Bogotá – Colombia,\r\n  informa que los datos personales que usted suministrará al sistema, serán\r\n  tratados mediante el uso y mantenimiento de medidas de seguridad técnicas,\r\n  físicas y administrativas y su confidencialidad estará garantizada de conformidad\r\n  con lo definido en la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013, la\r\n  Resolución 1867 del 13 de mayo de 2014, con las siguientes finalidades:<br>\r\n  <br><br>a.)Registrar la información de datos personales en las bases de datos del Ministerio del\r\n  Trabajo, con la finalidad de analizar, evaluar y generar datos estadísticos así como indicadores\r\n  para la formulación de políticas en el sector del trabajo.\r\n  <br><br>b.)Ejercer las funciones establecidas en el Decreto 4108 de 2011, Ley 1562 de 2012, Ley 1610\r\n  de 2013 y las establecidas en las demás disposiciones legales vigentes.\r\n  <br><br>c.)Facilitar la implementación de programas en cumplimiento de mandatos legales.\r\n  <br><br>d.)Enviar la información a entidades gubernamentales o judiciales por solicitud expresa\r\n  de las mismas.<br><br>\r\n  Igualmente, es preciso informar que cualquier modificación al presente aviso\r\n  le será notificado a través de los canales que disponga Mintrabajo para tal fin.</label>\r\n<label class=\"checkbox-govco\">\r\n  <input type=\"checkbox\" id=\"checkbox_simple_solo\" (click)='autoriza()' />\r\n  <label for=\"checkbox_simple_solo\"> Autoriza el uso y tratamiento de los datos registrados</label>\r\n</label>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\" col-md-12 registro-consulta-footer\">\r\n    <a class=\"btn btn-round btn-middle\" (click)='cancelar()'>CANCELAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-round btn-high\" [disabled]='autorizar' (click)=\"continuar()\">CONTINUAR</button>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"m-0\">¿Qué quieres hacer hoy?</h3>\r\n<br>\r\n<div class=\"card govco-card p-3 mb-3 col-md-6\">\r\n  <div >\r\n    <a (click)=\"consultar()\" class=\"btn-symbolic-govco d-flex\">\r\n      <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--left\" style=\"width: 90%;\">Consultar y actualizar\r\n        trámites</div>\r\n      <div class=\"govco-icon govco-icon-right-arrow\" style=\"width: 10%;\"></div>\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"card govco-card p-3 mb-3 col-md-6\">\r\n  <div >\r\n    <a (click)=\"radicar()\" class=\"btn-symbolic-govco d-flex\">\r\n      <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--left\" style=\"width: 90%;\">Radicar trámites y\r\n        servicios</div>\r\n      <div class=\"govco-icon govco-icon-right-arrow\" style=\"width: 10%;\"></div>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n    [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Consulta de trámite</h3>\r\n    </div>\r\n    <div class=\"card-body pt-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 form-group\">\r\n          <label for=\"sustancia\" class=\"form-group-govco\">Número de radicado</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"numero_radicado\" maxlength=\"10\" minlength=\"3\"\r\n            placeholder=\"Ej: 1 0 2 0 3 9 0 4 9\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-6 form-group select-govco\">\r\n          <label for=\"selector-normal\" class=\"form-group-govco\">Codigó de verificación</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"codigo_verificacion\" maxlength=\"10\" minlength=\"3\"\r\n            placeholder=\"Ej: 1 0 2 0 3 9 0 4 9\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n      <div class=\" col-md-12 registro-consulta-footer\">\r\n        <button id=\"save-user\" (click)=\"RealizarConsulta()\" class=\"btn btn-round btn-high\">CONSULTAR</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"mostrarResultados\" class=\"card govco-card p-3 mb-3\">\r\n  <h3 class=\"m-1 title-section\">Resultados</h3>\r\n  <br>\r\n  <app-resultado></app-resultado>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"card-body\">\r\n  <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\"\r\n    [bConfig]=\"tDetail.ConfigBody\" [showDetail]=\"false\"></app-tables>\r\n</div-->\r\n\r\n<div class=\"table-simple-headblue-govco\">\r\n  <table class=\"table display table-responsive-sm table-responsive-md\" style=\"width:100%\">\r\n    <thead>\r\n      <tr>\r\n        <th>No. Radicado</th>\r\n        <th>Tipo de Trámite</th>\r\n        <th>Fecha de radicado</th>\r\n        <th>Dic. Territorial</th>\r\n        <th>Estado</th>\r\n        <th>Actualizar Tramite</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of items\">\r\n        <td>{{item.radicado}}</td>\r\n        <td>{{item.tipotramite}}</td>\r\n        <td>{{item.fecharadicado}}</td>\r\n        <td>{{item.dicTerritorial}}</td>\r\n        <td>{{item.estado}}</td>\r\n        <a [routerLink]=\"['/mintrabajo/seleccionar']\" ><td> {{item.actTramite}} <td></a>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n    [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Datos del remitente</h3>\r\n    </div>\r\n    <div class=\"row card-header pt-0\">*Campos obligatorios</div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"form-group-govco\">*Tipo de persona</label>\r\n        <app-dropdownlist ngDefaultControl formControlName=\"tipo_persona\" placeholder=\"Ingrese un valor\"\r\n          [items]=\"listaOpciones\">\r\n        </app-dropdownlist>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"form-group-govco\">*Tipo de documento</label>\r\n        <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n          [items]=\"listaOpciones\">\r\n        </app-dropdownlist>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <!--Persona Natural-->\r\n    <ng-container *ngIf=\"seleccionForm.value.tipo_persona.value === 1\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Número de identidad</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Tratamiento cortesía</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n            [items]=\"listaOpciones\">\r\n          </app-dropdownlist>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Persona Juridica-->\r\n    <ng-container *ngIf=\"seleccionForm.value.tipo_persona.value === 2\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Número de documento</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Razón social</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Actua calidad</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n            [items]=\"listaOpciones\">\r\n          </app-dropdownlist>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--Entidad Oficial o Establecimiento comercial-->\r\n    <ng-container *ngIf=\"seleccionForm.value.tipo_persona.value === 3 || seleccionForm.value.tipo_persona.value === 4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Número documento identidad</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Razón social</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo nombre</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Primer apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">Segundo apellido</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-group-govco\">*Tratamiento cortesía</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n            [items]=\"listaOpciones\">\r\n          </app-dropdownlist>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <label class=\"form-group-govco\">*Tipo teléfono</label>\r\n          <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n            [items]=\"listaOpciones\">\r\n          </app-dropdownlist>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"\r\n        *ngIf=\"seleccionForm.value.tipo_persona.value === 1 || seleccionForm.value.tipo_persona.value === 2\">\r\n        <label class=\"form-group-govco\">*Tipo teléfono</label>\r\n        <app-dropdownlist ngDefaultControl formControlName=\"tipo_documento\" placeholder=\"Seleccione\"\r\n          [items]=\"listaOpciones\">\r\n        </app-dropdownlist>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <label class=\"form-group-govco\">Indicativo</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label class=\"form-group-govco\">*Número de telefóno</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <label class=\"form-group-govco\">Extensión</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"form-group-govco\">*Correo electrónico</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <label class=\"form-group-govco\">*Verificar correo electrónico</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"tipo_documento\" maxlength=\"10\" minlength=\"3\" />\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"checkbox-govco\">\r\n          <input type=\"checkbox\" id=\"checkbox_simple_solo\" />\r\n          <label for=\"checkbox_simple_solo\">Autorizo el envío de comunicaciones vía correo electrónico</label>\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"checkbox-govco\">\r\n          <input type=\"checkbox\" id=\"checkbox_simple_solo1\" />\r\n          <label for=\"checkbox_simple_solo1\">Autorizo que los actos administrativos resultantes del presente\r\n            trámite pueden ser notificados de manera electrónica</label>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Direcciones</h3>\r\n    </div>\r\n    <label for=\"checkbox_simple_solo\">Seleccione la opción agregar para diligenciar direcciones</label>\r\n\r\n    <div class=\"row card-header pt-0\">\r\n      <div class=\"row card-header pt-0\">\r\n        <div style=\"width: 30px;\">\r\n          <span class=\"govco-icon govco-icon-plus-n color-dodger-blue\" (click)='abrirDireccion()'></span>\r\n        </div>\r\n        <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase color-dodger-blue\">AGREGAR\r\n          DIRECCIÓN</div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"table-simple-headblue-govco\">\r\n      <table class=\"table display table-responsive-sm table-responsive-md\">\r\n        <thead>\r\n          <tr>\r\n            <th>Dirección</th>\r\n            <th style=\"width: 20%;\">Opciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf='direccion'>\r\n            <td style=\"width: 60%;\">\r\n              <table class=\"table table-borderless\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>País:</td>\r\n                    <td>{{direccion}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Departamento:</td>\r\n                    <td>Bogotá D.C</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Municipio:</td>\r\n                    <td>Bogotá D.C</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Dirección:</td>\r\n                    <td>Autopista 13 B Bis Norte 4 B 23 Norte</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </td>\r\n            <td class=\"align-middle\"><span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"\r\n                (click)='eliminarDireccion()'></span><span\r\n                class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase d-inline-block align-text-bottom color-dodger-blue\">\r\n                Eliminar</span></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\" col-md-12 registro-consulta-footer\">\r\n        <a class=\"btn btn-round btn-middle\" (click)='atras()'>ATRAS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <a class=\"btn btn-round btn-middle\" (click)='cancelar()'>CANCELAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button class=\"btn btn-round btn-high\" (click)=\"continuar()\">CONTINUAR</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n    [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Datos del trámite</h3>\r\n    </div>\r\n\r\n    <label class=\"form-group-govco\">*Circunstancias de modo y lugar que conllevan a esta situación de este\r\n      trámite</label>\r\n    <textarea class=\"form-control\" [ngClass]=\"{'is-invalid': invalidForm}\" formControlName=\"circunstancia\"\r\n      ngDefaultControl rows=\"5\" placeholder=\"Ej: campo de texto\" minlength=\"1\" maxlength=\"256\"></textarea>\r\n    <br>\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Dirección territoriales a la cual presenta su trámite</h3>\r\n    </div>\r\n\r\n    <label class=\"form-group-govco\">*Seleccione una ubicación</label>\r\n    <app-dropdownlist ngDefaultControl formControlName=\"direccion_territorial\" placeholder=\"Ingrese un valor\"\r\n      [items]=\"listaCiudad\">\r\n    </app-dropdownlist>\r\n    <br>\r\n    <div class=\"row card-header pt-0\">\r\n      <div class=\"row card-header pt-0\">\r\n        <div style=\"width: 30px;\">\r\n          <span class=\"govco-icon govco-icon-plus-n color-dodger-blue\" (click)='AgregarDireccionTerritorial()'></span>\r\n        </div>\r\n        <h6 class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase color-dodger-blue\">Agregar\r\n        </h6>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"table-simple-headblue-govco \">\r\n      <table class=\"table display table-responsive-sm table-responsive-md\">\r\n        <thead>\r\n          <tr>\r\n            <th>Dirección Territorial Relacionada</th>\r\n            <th style=\"width: 20%;\">Opciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf='direccionTerritorial'>\r\n            <td>{{direccionTerritorial}}</td>\r\n            <td>\r\n              <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\" (click)='EliminarDireccionTerritorial()'>\r\n                <span\r\n                  class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase d-inline-block align-text-bottom color-dodger-blue\">\r\n                  Eliminar</span>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section\">Número de radicado a relacionar</h3>\r\n    </div>\r\n\r\n    <div class=\"select-govco\">\r\n      <label class=\"form-group-govco\">Escribe el número de radicado que te dio el sistema</label>\r\n      <div class=\"col-md-6\">\r\n        <input class=\"form-control input-govco\" (focusout)=\"onKeyValidNumber()\" formControlName=\"numero_radicado\"\r\n          maxlength=\"24\" minlength=\"3\" placeholder=\"00000-123\" />\r\n        <div *ngIf=\"!formatoRadicadoinvalido\" class=\"invalid-label\">\r\n          Formato incorrecto\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"row card-header pt-0\">\r\n        <div class=\"row card-header pt-0\">\r\n          <div style=\"width: 30px;\">\r\n            <span class=\"govco-icon govco-icon-plus-n color-dodger-blue\" (click)='AgregarNumeroRadicado()'></span>\r\n          </div>\r\n          <h6 class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase color-dodger-blue\">\r\n            Agregar</h6>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <div class=\"table-simple-headblue-govco\">\r\n        <table class=\"table display table-responsive-sm table-responsive-md\">\r\n          <thead>\r\n            <tr>\r\n              <th>Radicados Referidos</th>\r\n              <th style=\"width: 20%;\">Opciones</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf='numero_radicado'>\r\n              <td>{{numero_radicado}}</td>\r\n              <td><span class=\"govco-icon govco-icon-delete-p color-dodger-blue\" (click)='EliminarNumeroRadicado()'>\r\n                  <span\r\n                    class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase d-inline-block align-middle\">Eliminar</span>\r\n                </span></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row card-header pt-0\">\r\n          <label class=\"form-group-govco\">¿La entidad tiene pactos o convenciones colectivas?</label>\r\n        </div>\r\n        <app-dropdownlist ngDefaultControl formControlName=\"convenciones_colectivas\" placeholder=\"Ingrese un valor\"\r\n          [items]=\"listaSINO\">\r\n        </app-dropdownlist>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row card-header pt-0\">\r\n          <label class=\"form-group-govco\">¿La empresa está obligada a tener reglamento de trabajo?</label>\r\n        </div>\r\n        <app-dropdownlist ngDefaultControl formControlName=\"reglamento_trabajo\" placeholder=\"Ingrese un valor\"\r\n          [items]=\"listaSINO\">\r\n        </app-dropdownlist>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row card-header pt-0\">\r\n          <label class=\"form-group-govco\">Indicar, ¿Si existe o no organizaciones sindicales dentro de la\r\n            empresa?</label>\r\n        </div>\r\n        <app-dropdownlist ngDefaultControl (change)=\"MostrarOrganizacionesSindicales()\"\r\n          formControlName=\"organizaciones_sindicales\" placeholder=\"Ingrese un valor\" [items]=\"listaSINO\">\r\n        </app-dropdownlist>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <div *ngIf=\"mostrarOrganizacionesSindicales\">\r\n    <app-organizacionessindicales></app-organizacionessindicales>\r\n  </div>\r\n  <br>\r\n  <div class=\"card govco-card p-3 mb-3\" style=\"border: 2px solid #386acd;\">\r\n    <div class=\"col-md-12\">\r\n      <h2 class=\"color-dodger-blue\">Importante</h2>\r\n      <h6 class=\"headline-s-govco\">Por favor ingrese información veraz y completa, pues el\r\n        inspector iniciará contacto y notificación a partir de los datos ingresados.</h6>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\" col-md-12 registro-consulta-footer\">\r\n      <a class=\"btn btn-round btn-middle\" (click)='cancelar()'>CANCELAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <button class=\"btn btn-round btn-high\" (click)=\"continuar()\">CONTINUAR</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <br>\r\n  <h3 class=\"m-0 title-section\">Direcciones</h3>\r\n  <label class=\"form-group-govco\">*Campos bligatorios</label>\r\n  <br>\r\n  <h3 class=\"m-0 title-section\">Ubicación</h3>\r\n  <br>\r\n  <app-direccion (messageEvent)=\"receiveMessage($event)\"></app-direccion>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <div class=\"row card-header pt-0\">\r\n    <h3 class=\"m-0 title-section\">Documentos del trámite</h3>\r\n  </div>\r\n  <br>\r\n  <div class=\"table-simple-headblue-govco\">\r\n    <table class=\"table display table-responsive-sm table-responsive-md\" style=\"width:100%\">\r\n      <thead>\r\n        <tr>\r\n          <th>Obligatorio</th>\r\n          <th>Mátricula</th>\r\n          <th>Anotaciones adicionales </th>\r\n          <th>Acciones</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Oficio remisorio</label>(Carta de Solicitud)</td>\r\n          <td>Carta de solicitud: 1 Original digitalizada por el representante legal. Mediante el cual solicitan la\r\n            autorización para el desarrollo de trabajos en horas extras. La solicitud deberá contener la justificación\r\n            por la cual la empresa requiere el desarrollo de actividades laborales mediante horas extras.</td>\r\n          <td style=\"width:180px\">\r\n            <ul>\r\n\r\n              <li>\r\n                <div class=\"row card-header pt-0\" [ngClass]=\"{'disabled': adj_cartasolici}\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\" [ngClass]=\"{'disabled': !adj_cartasolici}\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <li>\r\n                <div class=\"row card-header pt-0\" [ngClass]=\"{'disabled': adj_cartasolici}\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n\" [ngClass]=\"{'disabled': adj_cartasolici}\"><label\r\n                    class=\"form-group-govco\">Ver</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'\r\n                  [ngClass]=\"{'disabled': !adj_cartasolici}\"><label class=\"form-group-govco\">Adjuntar</label></span>\r\n              </li>\r\n              <li><span class=\"govco-icon govco-icon-delete-n \" [ngClass]=\"{'disabled': adj_cartasolici}\"><label\r\n                    class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n            </ul>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Certificación</label>(Afiliación Arl)</td>\r\n          <td>Certificado de la Administradora de Riesgos Laborales - ARL: 1 Copia(s). A la cual la empresa se encuentra\r\n            afiliada, especificando: - Las exigencias de carga física, psicosocial y demás riesgos para los cargos que\r\n            requieren trabajar horas extras. - Evaluación donde se establezca a manera general si los trabajadores que\r\n            desempeñen los cargos que requieren trabajar horas extras, por este hecho se verían afectados por las\r\n            exigencias de carga física, psicosocial y demás riesgos (Tomando como referencia los programas de vigilancia\r\n            epidemiológica). - Existencia en la empresa solicitante de los programas de vigilancia epidemiológica de\r\n            factores de riesgo, relacionados con las actividades laborales, para las que está solicitando autorización\r\n            de horas extras.</td>\r\n          <td style=\"width:220px\">\r\n            <ul>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n \"><label class=\"form-group-govco\">Ver</label></span></li> -->\r\n              <!-- <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'><label\r\n                    class=\"form-group-govco\">Adjuntar</label></span></li> -->\r\n              <!-- <li><span class=\"govco-icon govco-icon-delete-n \"><label class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n            </ul>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Informe</label>(Relación deLos cargos)</td>\r\n          <td>Informe con la relación de cargos: 1 Original digitalizada por el representante legal. Que contenga la\r\n            relación de actividades (cargos) para los cuales se solicita la autorización.</td>\r\n          <td style=\"width:180px\">\r\n            <ul>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n \"><label class=\"form-group-govco\">Ver</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'><label\r\n                    class=\"form-group-govco\">Adjuntar</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-delete-n \"><label class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n            </ul>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"convenciones_colectivas === 'Si'\">\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Oficio remisorio</label>(Manifestación expresa sobre existencia o no de\r\n            pactos o convenciones colectivas)\r\n          </td>\r\n          <td>Manifestación expresa sobre la existencia o no de pactos o convenciones colectivas: 1 Documento\r\n            digitalizado. De manifestación expresa sobre la existencia o no de pactos o convenciones colectivas. En caso\r\n            de contar con alguno, anexar la parte pertinente del mismo donde se estableció la jornada laboral, el\r\n            horario de trabajo y el trabajo suplementario.</td>\r\n          <td style=\"width:180px\">\r\n            <ul>\r\n\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n \"><label class=\"form-group-govco\">Ver</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'><label\r\n                    class=\"form-group-govco\">Adjuntar</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-delete-n \"><label class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n            </ul>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"organizaciones_sindicales === 'Si'\">\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Oficio remisorio</label>(Manifestación de existencia o no de sindicato)\r\n          </td>\r\n          <td>Manifestación sobre la existencia o no de organización sindical: 1 Original digitalizada por el\r\n            representante legal. De manifestación expresa sobre la existencia o no de organización sindical en la\r\n            empresa.</td>\r\n          <td style=\"width:180px\">\r\n            <ul>\r\n\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n \"><label class=\"form-group-govco\">Ver</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'><label\r\n                    class=\"form-group-govco\">Adjuntar</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-delete-n \"><label class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n\r\n            </ul>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"reglamento_trabajo === 'Si'\">\r\n          <td style=\"font-weight: bold; text-align: center;\">Si</td>\r\n          <td><label style=\"font-weight: bold;\">Copia del reglamento del contrato</label>(Reglamento interno de trabajo)\r\n          </td>\r\n          <td>Reglamento de trabajo : 1 Copia digitalizada. Si es el caso.</td>\r\n          <td style=\"width:180px\">\r\n            <ul>\r\n\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-eye-p color-dodger-blue \"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Ver</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-attached-p color-dodger-blue\"\r\n                        (click)='SeleccionarArchivo()'></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Adjuntar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"row card-header pt-0\">\r\n                  <div class=\"row card-header pt-0\">\r\n                    <div style=\"width: 30px;\">\r\n                      <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n                    </div>\r\n                    <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase\">Eliminar\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- <li><span class=\"govco-icon govco-icon-eye-n \"><label class=\"form-group-govco\">Ver</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-attached-p color-dodger-blue\" (click)='SeleccionarArchivo()'><label\r\n                    class=\"form-group-govco\">Adjuntar</label></span></li>\r\n              <li><span class=\"govco-icon govco-icon-delete-n \"><label class=\"form-group-govco\">Eliminar</label></span>\r\n              </li> -->\r\n            </ul>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <br>\r\n    <div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n      [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row recaptcha-container\">\r\n            <div class=\"form-group\">\r\n              <re-captcha formControlName=\"recaptcha\"></re-captcha>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\" col-md-12 registro-consulta-footer\">\r\n        <a class=\"btn btn-round btn-middle\" (click)='regresar()'>REGRESAR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button class=\"btn btn-round btn-high\" (click)=\"radicar()\">RADICAR</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-3 mb-3\">\r\n  <div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n    [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n    <div class=\"row card-header pt-0\">\r\n      <h3 class=\"m-0 title-section \">Organizaciones Sindicales</h3>\r\n    </div>\r\n    <label class=\"form-group-govco\">Nombre de la organización Sindical</label>\r\n    <div class=\"row col-md-12\">\r\n      <input class=\"form-control input-govco\" formControlName=\"nombre\" maxlength=\"100\" minlength=\"3\" />\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"form-group-govco\">Sigla de la organización</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"sigla\" maxlength=\"100\" minlength=\"3\" />\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <label class=\"form-group-govco\">Número de personería jurídica</label>\r\n        <input class=\"form-control input-govco\" formControlName=\"numero\" maxlength=\"100\" minlength=\"3\" />\r\n      </div>\r\n      <div class=\"col-3 d-inline\">\r\n        <label class=\"form-group-govco\">Dirección</label>\r\n        <div class=\"input-group input-group-sm\">\r\n          <input class=\"form-control input-govco h35\" formControlName=\"direccion\" maxlength=\"100\" minlength=\"3\" />\r\n          <div class=\"input-group-append h35\">\r\n            <span class=\"govco-icon govco-icon-plus\" (click)='abrirDireccion()'></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2 d-inline\">\r\n        <label class=\"form-group-govco\">Opciones</label>\r\n        <div class=\"govco-icon govco-icon-delete-p color-dodger-blue\" (click)='limpiarOrganizacionSindical()'>\r\n          <span\r\n            class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase d-inline-block align-middle\">Eliminar</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row card-header pt-0\">\r\n      <div class=\"row card-header pt-0\">\r\n        <div style=\"width: 30px;\">\r\n          <span class=\"govco-icon govco-icon-plus-n color-dodger-blue\" (click)='agregarOrganizacionSindical()'></span>\r\n        </div>\r\n        <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right\">Agregar organización</div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"table-simple-headblue-govco\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Nombre de la organización Sindical</th>\r\n            <th scope=\"col\">Sigla de la organización</th>\r\n            <th scope=\"col\">Número de personería jurídica</th>\r\n            <th scope=\"col\">Dirección</th>\r\n            <th scope=\"col\">Opciones</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of listOrganizacionesSindicales\">\r\n            <td>{{item?.nombre}}</td>\r\n            <td>{{item?.sigla}}</td>\r\n            <td>{{item?.numero}}</td>\r\n            <td>{{item?.direccion}}</td>\r\n            <td (click)='eliminarOrganizacionSindical(item)'><span\r\n                class=\"govco-icon govco-icon-delete-p color-dodger-blue\"></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 pb-3\" *ngIf=\"true\">\r\n  <app-notifications [typeMessage]=\"'success'\" [show]=\"true\" [title]=\"'Trámite registrado'\"></app-notifications>\r\n</div>\r\n<div class=\"card govco-card p-3 mb-3\">\r\n  <div class=\"row card-header pt-0\">\r\n    <h3 class=\"m-0 title-section\">Información del trámite</h3>\r\n  </div>\r\n  <label for=\"sustancia\" class=\"form-group-govco\">Se le informa que el trámite de Autorización para laborar horas\r\n    extras, ha sido registrado</label>\r\n  <br>\r\n  <div class=\"row col-md-6 form-group\">\r\n      <div class=\" card-header pt-0\">\r\n        <h3 class=\"m-0 title-section\">No. De radicado</h3>\r\n      </div>\r\n      <div class=\" card-header pt-0\">\r\n        <h3 class=\"m-0 title-section\">Código de seguridad</h3>\r\n      </div>\r\n      <div class=\" card-header pt-0\">\r\n        <label for=\"sustancia\" class=\"form-group-govco\">1234567</label>\r\n      </div>\r\n      <div class=\" card-header pt-0\">\r\n        <label for=\"sustancia\" class=\"form-group-govco\">AA1234567</label>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\" col-md-12 registro-consulta-footer\">\r\n      <button id=\"save-user\" (click)=\"aceptar()\" class=\"btn btn-round btn-high\">ACEPTAR</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\" [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Pais*</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"pais\" placeholder=\"Ingrese un valor\"\r\n        (change)=\"habilitarControlesXpais()\" [items]=\"listaPais\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Departamento</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"departamento\" placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Municipio</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"municipio\" placeholder=\"Ingrese un valor\" [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Código postal</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"codigo_postal\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row card-header pt-0\">\r\n    <h3 class=\"m-0 title-section\">Dirección</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Tipo de vía</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"tipo_via\" placeholder=\"Ingrese un valor\" [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Número de vía principal</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"numero_via_principal\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Prefijo cuadrante</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"prefijo_cuadrante1\" placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Bis</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"bis\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Orientación</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"orientacion1\" placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Número de vía</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"numero_via\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Prefijo cuadrante</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"prefijo_cuadrante2\" placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Número de placa</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"numero_placa1\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Orientación</label>\r\n      <app-dropdownlist ngDefaultControl formControlName=\"orientacion2\" placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <!-- <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Número de placa</label>\r\n      <input class=\"form-control input-govco\" formControlName=\"numero_placa2\" maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div> -->\r\n  </div>\r\n  <hr>\r\n  <div class=\"row card-header pt-0\">\r\n    <h3 class=\"m-0 title-section\">Complemento</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Tipo de Complemento</label>\r\n      <app-dropdownlist ngDefaultControl formControlName='tipo_complemento' placeholder=\"Ingrese un valor\"\r\n        [items]=\"listaSINO\">\r\n      </app-dropdownlist>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"form-group-govco\">Descripción</label>\r\n      <input class=\"form-control input-govco\" formControlName='descripcion_complemento' maxlength=\"10\" minlength=\"3\"\r\n        placeholder=\"00000-123\" />\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row card-header pt-0\">\r\n    <div class=\"row card-header pt-0\">\r\n      <div style=\"width: 30px;\">\r\n        <span class=\"govco-icon govco-icon-plus-n color-dodger-blue\" (click)='agregarComplemento()'></span>\r\n      </div>\r\n      <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right color-dodger-blue text-uppercase\">Agregar\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"table-simple-headblue-govco \">\r\n    <table class=\"table display table-responsive-sm table-responsive-md\">\r\n      <thead>\r\n        <tr>\r\n          <th>Tipo de complemento</th>\r\n          <th>Descripción</th>\r\n          <th style=\"width: 20%;\">Opciones</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of complementos\">\r\n          <td>{{item.tipo}}</td>\r\n          <td>{{item.descripcion}}</td>\r\n          <td>\r\n            <span class=\"govco-icon govco-icon-delete-p color-dodger-blue\" (click)='EliminarComplemento(item)'><span\r\n                class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right text-uppercase d-inline-block align-middle color-dodger-blue\">Eliminar</span></span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row mt-3\">\r\n  <div class=\" col-md-12 registro-consulta-footer\">\r\n    <button (click)=\"cancelar()\" class=\"btn btn-round btn-middle\">CANCELAR DIRECCIÓN</button>\r\n    <button (click)=\"enviarDireccion()\" class=\"btn btn-round btn-high\">ACEPTAR DIRECCIÓN</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-5\">\r\n  <div class=\"row card-header pt-0\">\r\n    <h3 class=\"m-0 title-section\">Cargar archivo</h3>\r\n  </div>\r\n  <div class=\"row card-body mt-3\">\r\n    <div class=\"file-drop-area col-md-12 text-center\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"govco-icon govco-icon-attached-p icon5x disabled\"></span>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"btn-symbolic-govco__title btn-symbolic-govco__title--right file-msg text-uppercase clear\">\r\n            <u>Seleccionar documento</u></div>\r\n          <input type=\"file\" (change)=\"SeleccionarArchivo($event)\" class=\"file-input\">\r\n        </div>\r\n      </div>\r\n      <!--  <input type=\"file\" (change)=\"SeleccionarArchivo($event)\" class=\"file-input\"> -->\r\n    </div>\r\n    <div class=\"col-md-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-round btn-high text-uppercase\" (click)=\"CargarArchivo()\">Cargar</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvY29tcG9uZW50cy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioComponent = class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
};
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.html"),
        styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.scss")]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvY29tcG9uZW50cy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sharedmintrabajo/utils/utils.service */ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts");




let PrincipalComponent = class PrincipalComponent {
    constructor(router, utils) {
        this.router = router;
        this.utils = utils;
        this.autorizar = true;
    }
    ngOnInit() {
    }
    continuar() {
        this.router.navigate(['/mintrabajo/seleccionar']);
        this.utils.estadoTramite('2');
    }
    cancelar() {
        this.router.navigate(['/mintrabajo/']);
    }
    autoriza() {
        this.autorizar = !this.autorizar;
    }
};
PrincipalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: __webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.html"),
        styles: [__webpack_require__(/*! ./principal.component.scss */ "./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.scss")]
    })
], PrincipalComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvY29tcG9uZW50cy9zZWxlY2Npb250cmFtaXRlL3NlbGVjY2lvbnRyYW1pdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SelecciontramiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecciontramiteComponent", function() { return SelecciontramiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SelecciontramiteComponent = class SelecciontramiteComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    consultar() {
        this.router.navigate(['/mintrabajo/consultar']);
    }
    radicar() {
        this.router.navigate(['/mintrabajo/descripcion']);
    }
};
SelecciontramiteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SelecciontramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selecciontramite',
        template: __webpack_require__(/*! raw-loader!./selecciontramite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.html"),
        styles: [__webpack_require__(/*! ./selecciontramite.component.scss */ "./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.scss")]
    })
], SelecciontramiteComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-consulta-footer {\n  text-align: center;\n}\n.registro-consulta-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9jb25zdWx0YXRyYW1pdGUvY29tcG9uZW50cy9jb25zdWx0YS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW50cmFiYWpvXFxob3Jhc2V4dHJhc1xcY29uc3VsdGF0cmFtaXRlXFxjb21wb25lbnRzXFxjb25zdWx0YVxcY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvY29uc3VsdGF0cmFtaXRlL2NvbXBvbmVudHMvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDSSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL2NvbnN1bHRhdHJhbWl0ZS9jb21wb25lbnRzL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVnaXN0cm8tY29uc3VsdGEtZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _consulta_consulta_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consulta/consulta.form */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.form.ts");
/* harmony import */ var src_app_tramites_mintrabajo_sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service */ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts");




let ConsultaComponent = class ConsultaComponent {
    constructor(utils) {
        this.utils = utils;
        this.invalidForm = false;
        this.mostrarResultados = false;
    }
    ngOnInit() {
        this.seleccionSolucionForm = new _consulta_consulta_form__WEBPACK_IMPORTED_MODULE_2__["ConsultaForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
        this.utils.estadoTramite('2');
    }
    RealizarConsulta() {
        if (this.seleccionSolucionForm.isValid()) {
            this.mostrarResultados = !this.mostrarResultados;
            this.utils.estadoTramite('4');
        }
        else {
            this.invalidForm = true;
            return;
        }
    }
};
ConsultaComponent.ctorParameters = () => [
    { type: src_app_tramites_mintrabajo_sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
ConsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-consulta",
        template: __webpack_require__(/*! raw-loader!./consulta.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.html"),
        styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.scss")]
    })
], ConsultaComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.form.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.form.ts ***!
  \******************************************************************************************************/
/*! exports provided: ConsultaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaForm", function() { return ConsultaForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class ConsultaForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            numero_radicado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$')]],
            codigo_verificacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$')]],
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

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvY29uc3VsdGF0cmFtaXRlL2NvbXBvbmVudHMvcmVzdWx0YWRvL3Jlc3VsdGFkby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ResultadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoComponent", function() { return ResultadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { consulta } from "../../models/consultamodels";
const DETAILS = [
    {
        radicado: 1,
        tipotramite: "Autorizacion",
        fecharadicado: "12-12-2019",
        dicTerritorial: "centro",
        estado: "activa",
        actTramite: "Actualizar",
    },
    {
        radicado: 2,
        tipotramite: "Registro",
        fecharadicado: "12-12-2019",
        dicTerritorial: "centro",
        estado: "activa",
        actTramite: "Actualizar",
    },
    {
        radicado: 3,
        tipotramite: "Registro",
        fecharadicado: "12-12-2019",
        dicTerritorial: "centro",
        estado: "activa",
        actTramite: "Actualizar",
    },
    {
        radicado: 4,
        tipotramite: "Autorizacion",
        fecharadicado: "12-12-2019",
        dicTerritorial: "centro",
        estado: "activa",
        actTramite: "Actualizar",
    },
];
let ResultadoComponent = class ResultadoComponent {
    constructor() {
        this.items = DETAILS;
        this.tBasic = {
            Header: [],
            Body: [],
            ConfigBody: [],
        };
        this.tSimple = {
            Header: [],
            Body: [],
            ConfigBody: [],
        };
        this.tDetail = {
            Header: [],
            Body: [],
            ConfigBody: [],
        };
        this.tFilter = {
            Header: [],
            Body: [],
            ConfigBody: [],
            ConfigFilter: [],
        };
    }
    ngOnInit() {
        this.setTableDetailcData();
    }
    setTableDetailcData() {
        // Estructura de configuración header por columna
        let header = [
            { content: "No. Radicado", columnName: "radicado", order: 1 },
            { content: "Tipo de Trámite", columnName: "tipotramite", order: 2 },
            { content: "Fecha de radicado", columnName: "fecharadicado", order: 3 },
            { content: "Dic. Territorial", columnName: "dicTerritorial", order: 4 },
            { content: "Estado", columnName: "estado", order: 5 },
            { content: "Actualizar Tramite", columnName: "actTramite", order: 6 },
        ];
        // Estructura de configuración del contenido por columna
        const configBody = [
            { columnName: "radicado", columnType: "number" },
            { columnName: "tipotramite", columnType: "string" },
            { columnName: "fecharadicado", columnType: "string" },
            { columnName: "dicTerritorial", columnType: "string" },
            { columnName: "estado", columnType: "string" },
            { columnName: "address", columnType: "string" },
            { columnName: "actTramite", columnType: "string" },
        ];
        // Inicialización de data
        const dataSimple = DETAILS;
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
                if (config.columnName === "actTramite") {
                    el.type = "link-event";
                    el.class = "btn btn-low wspace-normal";
                    //el.event = this.openModal;
                }
                // Agrega columna a fila listElements
                listElements.push(el);
            }
            // Agrega fila a body
            this.tDetail.Body.push(listElements);
        }
    }
};
ResultadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-resultado",
        template: __webpack_require__(/*! raw-loader!./resultado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.html"),
        styles: [__webpack_require__(/*! ./resultado.component.scss */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.scss")]
    })
], ResultadoComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/consultatramite/consultatramite.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/consultatramite/consultatramite.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultatramiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultatramiteModule", function() { return ConsultatramiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/consulta/consulta.component */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.ts");
/* harmony import */ var _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resultado/resultado.component */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/resultado/resultado.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ConsultatramiteModule = class ConsultatramiteModule {
};
ConsultatramiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_5__["ResultadoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], ConsultatramiteModule);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/horasextras.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/horasextras.module.ts ***!
  \***********************************************************************/
/*! exports provided: HorasextrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorasextrasModule", function() { return HorasextrasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.ts");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/principal/principal.component */ "./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.ts");
/* harmony import */ var _horasexttras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horasexttras-routing.module */ "./src/app/tramites/mintrabajo/horasextras/horasexttras-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _consultatramite_consultatramite_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultatramite/consultatramite.module */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/consultatramite.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_selecciontramite_selecciontramite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/selecciontramite/selecciontramite.component */ "./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.ts");
/* harmony import */ var _radicartramite_components_descripciontramite_descripciontramite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./radicartramite/components/descripciontramite/descripciontramite.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.ts");
/* harmony import */ var _radicartramite_components_organizacionessindicales_organizacionessindicales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radicartramite/components/organizacionessindicales/organizacionessindicales.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.ts");
/* harmony import */ var _sharedmintrabajo_components_direccion_direccion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sharedmintrabajo/components/direccion/direccion.component */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.ts");
/* harmony import */ var _sharedmintrabajo_components_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sharedmintrabajo/components/subirarchivo/subirarchivo.component */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.ts");
/* harmony import */ var _radicartramite_components_direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radicartramite/components/direccionmodal/direccionmodal.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.ts");
/* harmony import */ var _radicartramite_components_documentostramite_documentostramite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./radicartramite/components/documentostramite/documentostramite.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.ts");
/* harmony import */ var _radicartramite_components_tramiteregistrado_tramiteregistrado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./radicartramite/components/tramiteregistrado/tramiteregistrado.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.ts");
/* harmony import */ var _radicartramite_components_datosremitente_datosremitente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./radicartramite/components/datosremitente/datosremitente.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");



















let HorasextrasModule = class HorasextrasModule {
};
HorasextrasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
            _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"],
            _components_selecciontramite_selecciontramite_component__WEBPACK_IMPORTED_MODULE_9__["SelecciontramiteComponent"],
            _radicartramite_components_descripciontramite_descripciontramite_component__WEBPACK_IMPORTED_MODULE_10__["DescripciontramiteComponent"],
            _radicartramite_components_organizacionessindicales_organizacionessindicales_component__WEBPACK_IMPORTED_MODULE_11__["OrganizacionessindicalesComponent"],
            _sharedmintrabajo_components_direccion_direccion_component__WEBPACK_IMPORTED_MODULE_12__["DireccionComponent"],
            _radicartramite_components_direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_14__["DireccionmodalComponent"],
            _radicartramite_components_documentostramite_documentostramite_component__WEBPACK_IMPORTED_MODULE_15__["DocumentostramiteComponent"],
            _sharedmintrabajo_components_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_13__["SubirarchivoComponent"],
            _radicartramite_components_tramiteregistrado_tramiteregistrado_component__WEBPACK_IMPORTED_MODULE_16__["TramiteregistradoComponent"],
            _radicartramite_components_datosremitente_datosremitente_component__WEBPACK_IMPORTED_MODULE_17__["DatosremitenteComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _horasexttras_routing_module__WEBPACK_IMPORTED_MODULE_5__["HorasExttrasRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _consultatramite_consultatramite_module__WEBPACK_IMPORTED_MODULE_7__["ConsultatramiteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_18__["RecaptchaModule"]
        ],
        entryComponents: [_sharedmintrabajo_components_direccion_direccion_component__WEBPACK_IMPORTED_MODULE_12__["DireccionComponent"], _radicartramite_components_direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_14__["DireccionmodalComponent"], _sharedmintrabajo_components_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_13__["SubirarchivoComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], HorasextrasModule);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/horasexttras-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/horasexttras-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: HorasExttrasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorasExttrasRoutingModule", function() { return HorasExttrasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/tramites/mintrabajo/horasextras/components/inicio/inicio.component.ts");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/principal/principal.component */ "./src/app/tramites/mintrabajo/horasextras/components/principal/principal.component.ts");
/* harmony import */ var _consultatramite_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultatramite/components/consulta/consulta.component */ "./src/app/tramites/mintrabajo/horasextras/consultatramite/components/consulta/consulta.component.ts");
/* harmony import */ var _components_selecciontramite_selecciontramite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selecciontramite/selecciontramite.component */ "./src/app/tramites/mintrabajo/horasextras/components/selecciontramite/selecciontramite.component.ts");
/* harmony import */ var _radicartramite_components_descripciontramite_descripciontramite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radicartramite/components/descripciontramite/descripciontramite.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.ts");
/* harmony import */ var _radicartramite_components_documentostramite_documentostramite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radicartramite/components/documentostramite/documentostramite.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.ts");
/* harmony import */ var _radicartramite_components_tramiteregistrado_tramiteregistrado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radicartramite/components/tramiteregistrado/tramiteregistrado.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.ts");
/* harmony import */ var _radicartramite_components_datosremitente_datosremitente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./radicartramite/components/datosremitente/datosremitente.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.ts");











const routes = [
    {
        path: "",
        component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        children: [{
                path: "",
                component: _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"]
            }, {
                path: "consultar",
                component: _consultatramite_components_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"]
            }, {
                path: "seleccionar",
                component: _components_selecciontramite_selecciontramite_component__WEBPACK_IMPORTED_MODULE_6__["SelecciontramiteComponent"]
            },
            {
                path: "descripcion",
                component: _radicartramite_components_descripciontramite_descripciontramite_component__WEBPACK_IMPORTED_MODULE_7__["DescripciontramiteComponent"]
            },
            {
                path: "documentos",
                component: _radicartramite_components_documentostramite_documentostramite_component__WEBPACK_IMPORTED_MODULE_8__["DocumentostramiteComponent"]
            },
            {
                path: "registro",
                component: _radicartramite_components_tramiteregistrado_tramiteregistrado_component__WEBPACK_IMPORTED_MODULE_9__["TramiteregistradoComponent"]
            },
            {
                path: "remitente",
                component: _radicartramite_components_datosremitente_datosremitente_component__WEBPACK_IMPORTED_MODULE_10__["DatosremitenteComponent"]
            }]
    }
];
let HorasExttrasRoutingModule = class HorasExttrasRoutingModule {
};
HorasExttrasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HorasExttrasRoutingModule);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-consulta-footer {\n  text-align: center;\n}\n.registro-consulta-footer button {\n  margin: 10px;\n}\n.table-borderless tbody + tbody,\n.table-borderless td,\n.table-borderless th,\n.table-borderless thead th {\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL2RhdG9zcmVtaXRlbnRlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYWJham9cXGhvcmFzZXh0cmFzXFxyYWRpY2FydHJhbWl0ZVxcY29tcG9uZW50c1xcZGF0b3NyZW1pdGVudGVcXGRhdG9zcmVtaXRlbnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvZGF0b3NyZW1pdGVudGUvZGF0b3NyZW1pdGVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURHQTs7OztFQUlFLFNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvcmFkaWNhcnRyYW1pdGUvY29tcG9uZW50cy9kYXRvc3JlbWl0ZW50ZS9kYXRvc3JlbWl0ZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJsZXNzIHRib2R5K3Rib2R5LFxyXG4udGFibGUtYm9yZGVybGVzcyB0ZCxcclxuLnRhYmxlLWJvcmRlcmxlc3MgdGgsXHJcbi50YWJsZS1ib3JkZXJsZXNzIHRoZWFkIHRoIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuIiwiLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udGFibGUtYm9yZGVybGVzcyB0Ym9keSArIHRib2R5LFxuLnRhYmxlLWJvcmRlcmxlc3MgdGQsXG4udGFibGUtYm9yZGVybGVzcyB0aCxcbi50YWJsZS1ib3JkZXJsZXNzIHRoZWFkIHRoIHtcbiAgYm9yZGVyOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DatosremitenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosremitenteComponent", function() { return DatosremitenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datosremitente_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datosremitente.form */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.form.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../direccionmodal/direccionmodal.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../sharedmintrabajo/utils/utils.service */ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts");









let DatosremitenteComponent = class DatosremitenteComponent {
    constructor(modalService, router, utils) {
        this.modalService = modalService;
        this.router = router;
        this.utils = utils;
        this.listaOpciones = [
            {
                text: 'Persona natural',
                value: 1
            }, {
                text: 'Persona jurídica',
                value: 2
            }, {
                text: 'Entidad oficial',
                value: 3
            }, {
                text: 'Establecimiento comercial',
                value: 4
            },
        ];
        this.invalidForm = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.seleccionSolucionForm = new _datosremitente_form__WEBPACK_IMPORTED_MODULE_2__["DatosRemitenteForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
    }
    abrirDireccion() {
        let modal = this.modalService.open(_direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_4__["DireccionmodalComponent"], {
            size: 'lg',
            backdrop: "static",
            keyboard: true
        });
        modal.componentInstance.messageEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$)).subscribe((mensaje) => {
            if (mensaje === '%&/$')
                modal.close();
            else {
                this.direccion = mensaje;
                modal.close();
            }
        });
    }
    eliminarDireccion() {
        this.direccion = '';
    }
    atras() {
        this.router.navigate(['/mintrabajo/descripcion']);
    }
    cancelar() {
        this.router.navigate(['/mintrabajo']);
    }
    continuar() {
        if (this.seleccionSolucionForm.isValid()) {
            this.router.navigate(['/mintrabajo/documentos']);
        }
        else {
            this.invalidForm = true;
            this.utils.scrollControInvalido();
            return;
        }
    }
};
DatosremitenteComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
DatosremitenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datosremitente',
        template: __webpack_require__(/*! raw-loader!./datosremitente.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.html"),
        styles: [__webpack_require__(/*! ./datosremitente.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.component.scss")]
    })
], DatosremitenteComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.form.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/datosremitente/datosremitente.form.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DatosRemitenteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosRemitenteForm", function() { return DatosRemitenteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class DatosRemitenteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    //
    buildForm() {
        this.form = this.formBuilder.group({
            tipo_persona: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            tipo_documento: [''],
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

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-consulta-footer {\n  text-align: center;\n}\n.registro-consulta-footer button {\n  margin: 10px;\n}\n.invalid-label {\n  margin-top: 0.25rem;\n  font-size: 90%;\n  color: #dc3545;\n  font-style: italic;\n}\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL2Rlc2NyaXBjaW9udHJhbWl0ZS9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW50cmFiYWpvXFxob3Jhc2V4dHJhc1xccmFkaWNhcnRyYW1pdGVcXGNvbXBvbmVudHNcXGRlc2NyaXBjaW9udHJhbWl0ZVxcZGVzY3JpcGNpb250cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvZGVzY3JpcGNpb250cmFtaXRlL2Rlc2NyaXBjaW9udHJhbWl0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL2Rlc2NyaXBjaW9udHJhbWl0ZS9kZXNjcmlwY2lvbnRyYW1pdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cm8tY29uc3VsdGEtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4iLCIucmVnaXN0cm8tY29uc3VsdGEtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pbnZhbGlkLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DescripciontramiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripciontramiteComponent", function() { return DescripciontramiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sharedmintrabajo/utils/utils.service */ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _descripciontramite_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descripciontramite.form */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DescripciontramiteComponent = class DescripciontramiteComponent {
    constructor(router, utils) {
        this.router = router;
        this.utils = utils;
        this.formatoRadicadoinvalido = true;
        this.invalidForm = false;
        this.mostrarOrganizacionesSindicales = false;
        this.listaSINO = [
            {
                text: 'Si',
                value: 1
            },
            {
                text: 'No',
                value: 2
            }
        ];
        this.listaCiudad = [
            {
                text: 'Cali',
                value: 1
            },
            {
                text: 'Bogota',
                value: 2
            },
            {
                text: 'Medellin',
                value: 3
            }
        ];
    }
    ngOnInit() {
        this.seleccionSolucionForm = new _descripciontramite_form__WEBPACK_IMPORTED_MODULE_3__["DescripciontramiteForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
        this.utils.estadoTramite('2');
    }
    AgregarDireccionTerritorial() {
        if (this.seleccionForm.value.direccion_territorial.text.length > 0) {
            this.direccionTerritorial = this.seleccionForm.value.direccion_territorial.text;
            this.seleccionForm.controls['direccion_territorial'].disable();
        }
    }
    EliminarDireccionTerritorial() {
        this.direccionTerritorial = '';
        this.seleccionForm.controls['direccion_territorial'].enable();
    }
    AgregarNumeroRadicado() {
        if (this.seleccionForm.value.numero_radicado.length > 0) {
            if (this.formatoRadicadoinvalido) {
                this.numero_radicado = this.seleccionForm.value.numero_radicado;
                this.seleccionForm.controls['numero_radicado'].disable();
            }
        }
    }
    EliminarNumeroRadicado() {
        this.numero_radicado = '';
        this.seleccionForm.controls['numero_radicado'].enable();
    }
    MostrarOrganizacionesSindicales() {
        this.mostrarOrganizacionesSindicales = this.seleccionForm.value.organizaciones_sindicales.text === 'Si';
    }
    continuar() {
        if (this.seleccionSolucionForm.isValid()) {
            this.router.navigate(['/mintrabajo/remitente']);
            sessionStorage.convenciones_colectivas = this.seleccionForm.controls.convenciones_colectivas.value.text;
            sessionStorage.reglamento_trabajo = this.seleccionForm.controls.reglamento_trabajo.value.text;
            sessionStorage.organizaciones_sindicales = this.seleccionForm.controls.organizaciones_sindicales.value.text;
        }
        else {
            this.invalidForm = true;
            this.utils.scrollControInvalido();
            return;
        }
    }
    cancelar() {
        this.router.navigate(['/mintrabajo']);
    }
    onKeyValidNumber() {
        let regEx = new RegExp('[0-9]{2}[A-Z]{2}[0-9]{19}');
        this.formatoRadicadoinvalido = regEx.test(this.seleccionForm.controls.numero_radicado.value);
    }
};
DescripciontramiteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }
];
DescripciontramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-descripciontramite',
        template: __webpack_require__(/*! raw-loader!./descripciontramite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.html"),
        styles: [__webpack_require__(/*! ./descripciontramite.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.component.scss")]
    })
], DescripciontramiteComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.form.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/descripciontramite/descripciontramite.form.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DescripciontramiteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripciontramiteForm", function() { return DescripciontramiteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class DescripciontramiteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    //
    buildForm() {
        this.form = this.formBuilder.group({
            circunstancia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(256)]],
            direccion_territorial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            numero_radicado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]{2}[A-Z]{2}[0-9]{19}')],
            convenciones_colectivas: [''],
            reglamento_trabajo: [''],
            organizaciones_sindicales: ['']
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

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vaG9yYXNleHRyYXMvcmFkaWNhcnRyYW1pdGUvY29tcG9uZW50cy9kaXJlY2Npb25tb2RhbC9kaXJlY2Npb25tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DireccionmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionmodalComponent", function() { return DireccionmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DireccionmodalComponent = class DireccionmodalComponent {
    constructor() {
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    sendMessage(message) {
        this.messageEvent.emit(message);
    }
    receiveMessage($event) {
        this.sendMessage($event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DireccionmodalComponent.prototype, "messageEvent", void 0);
DireccionmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direccionmodal',
        template: __webpack_require__(/*! raw-loader!./direccionmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.html"),
        styles: [__webpack_require__(/*! ./direccionmodal.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.scss")]
    })
], DireccionmodalComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n}\n\n.registro-consulta-footer {\n  text-align: center;\n}\n\n.registro-consulta-footer button {\n  margin: 10px;\n}\n\n.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL2RvY3VtZW50b3N0cmFtaXRlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYWJham9cXGhvcmFzZXh0cmFzXFxyYWRpY2FydHJhbWl0ZVxcY29tcG9uZW50c1xcZG9jdW1lbnRvc3RyYW1pdGVcXGRvY3VtZW50b3N0cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvZG9jdW1lbnRvc3RyYW1pdGUvZG9jdW1lbnRvc3RyYW1pdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNJLFlBQUE7QUNDTjs7QURHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL2RvY3VtZW50b3N0cmFtaXRlL2RvY3VtZW50b3N0cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lXHJcbn1cclxuXHJcbi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4iLCJsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DocumentostramiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentostramiteComponent", function() { return DocumentostramiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_tramites_mintrabajo_sharedmintrabajo_components_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _documentostramite_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentostramite.form */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.form.ts");
/* harmony import */ var src_app_tramites_mintrabajo_sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service */ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts");







let DocumentostramiteComponent = class DocumentostramiteComponent {
    constructor(modalService, router, utils) {
        this.modalService = modalService;
        this.router = router;
        this.utils = utils;
        this.adj_cartasolici = true;
        this.invalidForm = false;
    }
    ngOnInit() {
        this.convenciones_colectivas = sessionStorage.convenciones_colectivas;
        this.reglamento_trabajo = sessionStorage.reglamento_trabajo;
        this.organizaciones_sindicales = sessionStorage.organizaciones_sindicales;
        this.seleccionSolucionForm = new _documentostramite_form__WEBPACK_IMPORTED_MODULE_5__["DocumentostramiteForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
    }
    SeleccionarArchivo() {
        let modal = this.modalService.open(src_app_tramites_mintrabajo_sharedmintrabajo_components_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_3__["SubirarchivoComponent"], {
            size: 'lg',
            backdrop: "static",
            keyboard: true
        });
        this.adj_cartasolici = !this.adj_cartasolici;
    }
    regresar() {
        this.router.navigate(['/mintrabajo/remitente']);
    }
    radicar() {
        this.router.navigate(['/mintrabajo/registro']);
        this.utils.estadoTramite('4');
    }
};
DocumentostramiteComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_tramites_mintrabajo_sharedmintrabajo_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
];
DocumentostramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documentostramite',
        template: __webpack_require__(/*! raw-loader!./documentostramite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.html"),
        styles: [__webpack_require__(/*! ./documentostramite.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.component.scss")]
    })
], DocumentostramiteComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.form.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/documentostramite/documentostramite.form.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DocumentostramiteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentostramiteForm", function() { return DocumentostramiteForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class DocumentostramiteForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    //
    buildForm() {
        this.form = this.formBuilder.group({
            recaptcha: [''],
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

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-addon {\n  position: relative;\n}\n\n/* style icon */\n\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n\n/* align icon */\n\n.left-addon .glyphicon {\n  left: 0px;\n}\n\n.right-addon .glyphicon {\n  right: 0px;\n}\n\n/* add padding  */\n\n.left-addon input {\n  padding-left: 30px;\n}\n\n.right-addon input {\n  padding-right: 30px;\n}\n\n.h35 {\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL29yZ2FuaXphY2lvbmVzc2luZGljYWxlcy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW50cmFiYWpvXFxob3Jhc2V4dHJhc1xccmFkaWNhcnRyYW1pdGVcXGNvbXBvbmVudHNcXG9yZ2FuaXphY2lvbmVzc2luZGljYWxlc1xcb3JnYW5pemFjaW9uZXNzaW5kaWNhbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvb3JnYW5pemFjaW9uZXNzaW5kaWNhbGVzL29yZ2FuaXphY2lvbmVzc2luZGljYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUEsZUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUEsZUFBQTs7QUFDQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQSxpQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL29yZ2FuaXphY2lvbmVzc2luZGljYWxlcy9vcmdhbml6YWNpb25lc3NpbmRpY2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItYWRkb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogc3R5bGUgaWNvbiAqL1xyXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGFsaWduIGljb24gKi9cclxuLmxlZnQtYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLyogYWRkIHBhZGRpbmcgICovXHJcbi5sZWZ0LWFkZG9uIGlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1hZGRvbiBpbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmgzNSB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbiIsIi5pbm5lci1hZGRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgbGVmdDogMHB4O1xufVxuXG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5oMzUge1xuICBoZWlnaHQ6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: OrganizacionessindicalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizacionessindicalesComponent", function() { return OrganizacionessindicalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _organizacionessindicales_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organizacionessindicales.form */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.form.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../direccionmodal/direccionmodal.component */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/direccionmodal/direccionmodal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let OrganizacionessindicalesComponent = class OrganizacionessindicalesComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.listOrganizacionesSindicales = [];
        this.invalidForm = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.seleccionSolucionForm = new _organizacionessindicales_form__WEBPACK_IMPORTED_MODULE_2__["OrganizacionesSindicalesForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
    }
    limpiarOrganizacionSindical() {
        this.seleccionForm.reset();
        this.invalidForm = false;
    }
    eliminarOrganizacionSindical(d) {
        const index = this.listOrganizacionesSindicales.indexOf(d);
        this.listOrganizacionesSindicales.splice(index, 1);
    }
    agregarOrganizacionSindical() {
        if (this.seleccionSolucionForm.isValid()) {
            this.listOrganizacionesSindicales.push({
                nombre: this.seleccionForm.value.nombre,
                sigla: this.seleccionForm.value.sigla,
                numero: this.seleccionForm.value.numero,
                direccion: this.seleccionForm.value.direccion,
            });
            this.limpiarOrganizacionSindical();
        }
        else {
            this.invalidForm = true;
            return;
        }
    }
    abrirDireccion() {
        let modal = this.modalService.open(_direccionmodal_direccionmodal_component__WEBPACK_IMPORTED_MODULE_4__["DireccionmodalComponent"], {
            size: 'lg',
            backdrop: "static",
            keyboard: true
        });
        modal.componentInstance.messageEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$)).subscribe((mensaje) => {
            if (mensaje === '%&/$')
                modal.close();
            else {
                this.seleccionForm.controls['direccion'].setValue(mensaje);
                modal.close();
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
OrganizacionessindicalesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrganizacionessindicalesComponent.prototype, "listOrganizacionesSindicales", void 0);
OrganizacionessindicalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organizacionessindicales',
        template: __webpack_require__(/*! raw-loader!./organizacionessindicales.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.html"),
        styles: [__webpack_require__(/*! ./organizacionessindicales.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.component.scss")]
    })
], OrganizacionessindicalesComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.form.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/organizacionessindicales/organizacionessindicales.form.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: OrganizacionesSindicalesForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizacionesSindicalesForm", function() { return OrganizacionesSindicalesForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class OrganizacionesSindicalesForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            sigla: [''],
            numero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
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

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-consulta-footer {\n  text-align: center;\n}\n.registro-consulta-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9ob3Jhc2V4dHJhcy9yYWRpY2FydHJhbWl0ZS9jb21wb25lbnRzL3RyYW1pdGVyZWdpc3RyYWRvL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYWJham9cXGhvcmFzZXh0cmFzXFxyYWRpY2FydHJhbWl0ZVxcY29tcG9uZW50c1xcdHJhbWl0ZXJlZ2lzdHJhZG9cXHRyYW1pdGVyZWdpc3RyYWRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvdHJhbWl0ZXJlZ2lzdHJhZG8vdHJhbWl0ZXJlZ2lzdHJhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDSSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL2hvcmFzZXh0cmFzL3JhZGljYXJ0cmFtaXRlL2NvbXBvbmVudHMvdHJhbWl0ZXJlZ2lzdHJhZG8vdHJhbWl0ZXJlZ2lzdHJhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cm8tY29uc3VsdGEtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuIiwiLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TramiteregistradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramiteregistradoComponent", function() { return TramiteregistradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TramiteregistradoComponent = class TramiteregistradoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    aceptar() {
        this.router.navigate(['/mintrabajo']);
    }
};
TramiteregistradoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TramiteregistradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tramiteregistrado',
        template: __webpack_require__(/*! raw-loader!./tramiteregistrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.html"),
        styles: [__webpack_require__(/*! ./tramiteregistrado.component.scss */ "./src/app/tramites/mintrabajo/horasextras/radicartramite/components/tramiteregistrado/tramiteregistrado.component.scss")]
    })
], TramiteregistradoComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-consulta-footer {\n  text-align: center;\n}\n.registro-consulta-footer button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9zaGFyZWRtaW50cmFiYWpvL2NvbXBvbmVudHMvZGlyZWNjaW9uL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYWJham9cXHNoYXJlZG1pbnRyYWJham9cXGNvbXBvbmVudHNcXGRpcmVjY2lvblxcZGlyZWNjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL3NoYXJlZG1pbnRyYWJham8vY29tcG9uZW50cy9kaXJlY2Npb24vZGlyZWNjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9zaGFyZWRtaW50cmFiYWpvL2NvbXBvbmVudHMvZGlyZWNjaW9uL2RpcmVjY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuIiwiLnJlZ2lzdHJvLWNvbnN1bHRhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Ryby1jb25zdWx0YS1mb290ZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DireccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionComponent", function() { return DireccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _direccion_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direccion.form */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.form.ts");




let DireccionComponent = class DireccionComponent {
    constructor(el) {
        this.el = el;
        this.listaSINO = [
            {
                value: 1,
                text: 'Si'
            },
            {
                value: 2,
                text: 'No'
            }
        ];
        this.listaPais = [
            {
                value: 1,
                text: 'Albania'
            },
            {
                value: 2,
                text: 'Alemania'
            },
            {
                value: 3,
                text: 'Colombia'
            },
            {
                value: 4,
                text: 'Panama'
            }
        ];
        this.complementos = [];
        this.invalidForm = false;
        this.cadena_direccion = '';
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.seleccionSolucionForm = new _direccion_form__WEBPACK_IMPORTED_MODULE_3__["DireccionForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
    }
    obtenerDireccion() {
        let cadena = '';
        Object.keys(this.seleccionForm.controls).forEach((key) => {
            let control = this.seleccionForm.get(key);
            if (control != null)
                if (!(control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]))
                    cadena += control.value.text == null ? control.value + ' ' : control.value.text + ' ';
        });
        for (let c of this.complementos)
            cadena += ` ${c.tipo} ${c.descripcion} `;
        return cadena.replace(/  +/g, ' ');
    }
    enviarDireccion() {
        if (this.seleccionSolucionForm.isValid())
            this.messageEvent.emit(this.obtenerDireccion());
        else {
            this.invalidForm = true;
            this.scrollAlControlInvalido_modal();
            return;
        }
    }
    agregarComplemento() {
        this.complementos.push({ tipo: this.seleccionForm.controls.tipo_complemento.value.text, descripcion: this.seleccionForm.controls.descripcion_complemento.value });
        this.limpiarControl('tipo_complemento');
        this.limpiarControl('descripcion_complemento');
    }
    limpiarControl(nombre) {
        this.seleccionForm.controls[nombre].setValue('');
    }
    cancelar() {
        this.messageEvent.emit('%&/$');
    }
    habilitarControlesXpais() {
        if (this.seleccionForm.controls.pais.value.text === 'Colombia') {
            this.seleccionForm.controls['municipio'].enable();
            this.seleccionForm.controls['departamento'].enable();
        }
        else {
            this.seleccionForm.controls['municipio'].disable();
            this.seleccionForm.controls['departamento'].disable();
        }
    }
    EliminarComplemento(fila) {
        const index = this.complementos.indexOf(fila);
        this.complementos.splice(index, 1);
    }
    scrollAlControlInvalido_modal() {
        const firstInvalidControl = this.el.nativeElement.querySelector(".ng-invalid");
        if (firstInvalidControl) {
            firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};
DireccionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DireccionComponent.prototype, "messageEvent", void 0);
DireccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direccion',
        template: __webpack_require__(/*! raw-loader!./direccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.html"),
        styles: [__webpack_require__(/*! ./direccion.component.scss */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.component.scss")]
    })
], DireccionComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.form.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/components/direccion/direccion.form.ts ***!
  \*********************************************************************************************/
/*! exports provided: DireccionForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionForm", function() { return DireccionForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class DireccionForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            pais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            departamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            municipio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            codigo_postal: [''],
            tipo_via: [''],
            numero_via_principal: [''],
            prefijo_cuadrante1: [''],
            bis: [''],
            orientacion1: [''],
            numero_via: [''],
            prefijo_cuadrante2: [''],
            numero_placa1: [''],
            numero_placa2: [''],
            orientacion2: [''],
            tipo_complemento: [''],
            descripcion_complemento: ['']
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

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-drop-area {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  max-width: 100%;\n  text-align: center;\n  padding: 2rem;\n  margin: 1rem;\n  border: 3px dashed #9fbafcf5;\n  border-radius: 3px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.file-drop-area.is-active {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.file-input {\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n.file-input:focus {\n  outline: none;\n}\n.icon5x {\n  color: #9fbafcf5;\n  font-size: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWludHJhYmFqby9zaGFyZWRtaW50cmFiYWpvL2NvbXBvbmVudHMvc3ViaXJhcmNoaXZvL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnRyYWJham9cXHNoYXJlZG1pbnRyYWJham9cXGNvbXBvbmVudHNcXHN1YmlyYXJjaGl2b1xcc3ViaXJhcmNoaXZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW50cmFiYWpvL3NoYXJlZG1pbnRyYWJham8vY29tcG9uZW50cy9zdWJpcmFyY2hpdm8vc3ViaXJhcmNoaXZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSwyQ0FBQTtBQ0NKO0FER0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBRjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnRyYWJham8vc2hhcmVkbWludHJhYmFqby9jb21wb25lbnRzL3N1YmlyYXJjaGl2by9zdWJpcmFyY2hpdm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1kcm9wLWFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjOWZiYWZjZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICYuaXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uNXgge1xyXG4gIGNvbG9yOiAjOWZiYWZjZjU7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcbiIsIi5maWxlLWRyb3AtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyOiAzcHggZGFzaGVkICM5ZmJhZmNmNTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmZpbGUtZHJvcC1hcmVhLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbn1cbi5maWxlLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmljb241eCB7XG4gIGNvbG9yOiAjOWZiYWZjZjU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SubirarchivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirarchivoComponent", function() { return SubirarchivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubirarchivoComponent = class SubirarchivoComponent {
    constructor() { }
    ngOnInit() {
    }
    SeleccionarArchivo(event) {
        this.selectFile = event.target.files[0];
    }
    CargarArchivo() {
        alert('Archivo cargado con exito');
        console.log('Cargando ' + this.selectFile.name);
    }
};
SubirarchivoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subirarchivo',
        template: __webpack_require__(/*! raw-loader!./subirarchivo.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.html"),
        styles: [__webpack_require__(/*! ./subirarchivo.component.scss */ "./src/app/tramites/mintrabajo/sharedmintrabajo/components/subirarchivo/subirarchivo.component.scss")]
    })
], SubirarchivoComponent);



/***/ }),

/***/ "./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tramites/mintrabajo/sharedmintrabajo/utils/utils.service.ts ***!
  \*****************************************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilsService = class UtilsService {
    constructor() { }
    scrollControInvalido() {
        const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
        if (firstElementWithError) {
            firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    estadoTramite(paso) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', paso);
    }
};
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilsService);



/***/ })

}]);
//# sourceMappingURL=tramites-mintrabajo-horasextras-horasextras-module-es2015.2a630365de93adfa61ef.js.map