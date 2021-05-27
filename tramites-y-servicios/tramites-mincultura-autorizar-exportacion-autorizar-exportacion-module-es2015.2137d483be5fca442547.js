(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-mincultura-autorizar-exportacion-autorizar-exportacion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card govco-card p-4 mb-3\">\r\n    <div class=\"row card-header pt-0\">\r\n        <div class=\"row\">\r\n            <h3 class=\"m-0 title-section\">¿Qué quieres hacer hoy?</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\"><div class=\"col-md-12\">&nbsp;</div></div>\r\n    <div class=\"pl-3 pt-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 text-right\">\r\n                <button class=\"btn btn-round w-75 btn-middle mt-3\" (click)=\"consultarSolicitud()\">Consultar solicitud</button>\r\n            </div>\r\n            <div class=\"col-md-6 text-left\">\r\n                <button class=\"btn btn-round w-75 btn-high mt-3\" (click)=\"abrirIniciarSesionModal()\">Ingresar nueva solicitud</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 pb-3\" *ngIf=\"mensajeConsultaSinResultados\">\r\n    <app-notifications [typeMessage]=\"'error'\" [message]=\"currentMessage\" [title]=\"titulo\"\r\n      [show]=\"mensajeConsultaSinResultados\"></app-notifications>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"main-minsalud-advice\" [formGroup]=\"seleccionForm\" appInputValidator [validate]=\"invalidForm\"\r\n  [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n  <div class=\"card govco-card \">\r\n    <div class=\"card-body\">\r\n      <h2 class=\"tg-0lax\">Consultar solicitud</h2>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <p>Número de radicación*</p>\r\n            <input class=\"form-control\" placeholder=\"XXXX-AAAA\"\r\n              alt=\"Debe ingresar el código incluyendo Número guión y año (XXXX-AAAA)\" formControlName=\"numero_radicado\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <p>Número de documento*</p>\r\n            <input class=\"form-control\" formControlName=\"numero_documento\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <a class=\"btn btn-round btn-high\" (click)=\"consultar()\">BUSCAR</a>\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div *ngIf=\"items.length\">\r\n        <h2 class=\"tg-0lax\">Resultados</h2>\r\n        <br>\r\n        <table id=\"example\" class=\"table-header-blu-gov-co\" style=\"width:100%\">\r\n          <thead>\r\n            <tr>\r\n              <th>Fecha</th>\r\n              <th>No. de radicación</th>\r\n              <th>Estado</th>\r\n              <th>Acciones</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items\">\r\n              <td>{{item.sosFechaRadicacion.split('T')[0]}}</td>\r\n              <td>{{item.sosConsecutivoIndice}}</td>\r\n              <ng-container [ngSwitch]=\"item.estado | uppercase\">\r\n                <ng-container *ngSwitchCase=\"'CONCEPTO DEFINITIVO'\">\r\n                  <td>\r\n                    <p class=\"text-success\">Concepto definitivo</p>\r\n                  </td>\r\n                  <td><u class=\"link\" style=\"cursor: pointer !important\"\r\n                      (click)=\"obtenerReporte(reporte,item.sosId)\">Ver concepto</u></td>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'GUARDADA'\">\r\n                  <td>\r\n                    <p class=\"text-danger\">Guardada</p>\r\n                  </td>\r\n                  <td><u class=\"link\" style=\"cursor: pointer !important\" (click)=\"verEditar(item)\">Editar Solicitud</u>\r\n                  </td>\r\n                </ng-container>\r\n                <ng-container *ngSwitchDefault>\r\n                  <td>\r\n                    <p class=\"text-warning\">{{item.estado | titlecase}}</p>\r\n                  </td>\r\n                  <td></td>\r\n                </ng-container>\r\n              </ng-container>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <br>\r\n        <div class=\"col-md-12 text-center\">\r\n          <a class=\"btn btn-round btn-middle\" (click)=\"limpiarCampos()\">Nueva Consulta</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"consultarVerConcepto\">\r\n        <br>\r\n        <h2 class=\"tg-0lax\">Concepto</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <p>Sin restricción de exportaciòn</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 text-right see-downloads\">\r\n            <div class=\"form-group text-right\">\r\n              <p (click)=\"verDescargar()\">\r\n                <u>Ver información a descargar</u>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"verInformacionDescargar\" class=\"container-table-concept-gov-co\">\r\n        <table id=\"example\" class=\"table-concept-gov-co ml-5 ml-lg-0 w-100\">\r\n          <tbody>\r\n            <tr class=\"table-concept\">\r\n              <td>\r\n                <p>Concepto</p>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <u>Descargar</u>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"table-concept\">\r\n              <td>\r\n                <p>Todas las fichas técnicas</p>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <u>Descargar</u>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"table-concept\">\r\n              <td>\r\n                <p>Ficha técnica obra 1</p>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <u>Descargar</u>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"table-concept\">\r\n              <td>\r\n                <p>Ficha técnica obra 2</p>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <u>Descargar</u>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <br>\r\n      <div class=\"row\" *ngIf=\"(service.consultar)\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <a class=\"btn btn-round btn-middle\" (click)=\"limpiar()\">NUEVA CONSULTA</a>\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #reporte let-modal class=\"modal-fit\">\r\n  <div class=\"modal-body text-center\">\r\n    <div id=\"modal-content-type-alert\" class=\"modal-content-success text-center\">\r\n      <em class=\"material-icons color-green\" style=\"font-size: 50px\">check_circle</em>\r\n      <h2 class=\"color-green\">Reportes</h2>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <br>\r\n      <b class=\"tg-0lax\">Respuesta Solicitud:</b>\r\n      <br>\r\n      <div class=\"row border-bottom\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <p class=\"m-0\"><b>Archivo</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row border-bottom\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"float:none!important\">\r\n              <u (click)='visualizarArchivo(reporteRespuestaSolicitud)'>{{reporteRespuestaSolicitud.nombreArchivo}}</u>\r\n              <i _ngcontent-ryh-c4=\"\" class=\"material-icons page-icon-close align-middle\"\r\n                (click)='visualizarArchivo(reporteRespuestaSolicitud)'>remove_red_eye</i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <br>\r\n      <b class=\"tg-0lax\">Ficha técnica:</b>\r\n      <br>\r\n      <div class=\"row border-bottom\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <p class=\"m-0\"><b>Archivo</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngFor=\"let file of reportesObras;\" class=\"row border-bottom\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"float:none!important\">\r\n              <u (click)='visualizarArchivo(file)'>{{file.nombreArchivo}} </u>\r\n              <i _ngcontent-ryh-c4=\"\" class=\"material-icons page-icon-close align-middle\"\r\n                (click)='visualizarArchivo(file)'>remove_red_eye</i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"visualizacion\">\r\n      <div class=\"col-md-12\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" color=\"warm\">\r\n          <u (click)='descargarArchivo()'>Descargar</u>\r\n          <i _ngcontent-ryh-c4=\"\" class=\"material-icons page-icon-close align-middle\"\r\n            (click)='descargarArchivo()'>cloud_download</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pdf-container\">\r\n          <pdf-viewer [src]=\"src\" [original-size]=\"true\"></pdf-viewer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <a (click)=\"closeModal()\" class=\"btn btn-round btn-high\">CERRAR</a>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-minsalud-advice\" *ngIf=\"service.formularioInvalido && 1==0\">\r\n  <div class=\"card govco-card-red \">\r\n    <div class=\"card-body\">\r\n      <span class=\"govco-icon govco-icon-sad-face-n error x10\" style='font-size:48px;color:red'>Lo\r\n        sentimos</span>\r\n      <br>\r\n      <br>\r\n      <p>Los datos ingresados son incorrectos, te recomendamos:</p>\r\n      <p>1. Revisar los datos ingresados sean los solicitados.</p>\r\n      <p *ngIf=\"service.paso === 5\">2. Si aún no encuentras lo que buscas <b>Contáctanos</b>.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mb-3\" *ngIf=\"service.formularioInvalido && true\">\r\n  <app-notifications [typeMessage]=\"'error'\"\r\n    [message]=\"'Los datos ingresados son incorrectos, te recomendamos: 1. Revisar que los datos ingresados sean los solicitados. 2. Si aún no encuentras lo que buscas Contáctanos'\"\r\n    [title]=\"'Lo sentimos'\" [show]='true' class=\"mb-3\">\r\n  </app-notifications>\r\n</div>\r\n\r\n<div class=\"main-minsalud-advice\" *ngIf=\"service.paso === 4\">\r\n  <div class=\"card govco-card \">\r\n    <div class=\"card-body\">\r\n      <h2 class=\"tg-0lax\">Enviar al ministerio</h2>\r\n      <br>\r\n      <p>Se enviaràn los datos al ministerio de cultura.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"pasoSeis\" *ngIf=\"service.paso === 5\">\r\n  <app-consultar-solicitud></app-consultar-solicitud>\r\n</div>\r\n<div *ngIf=\"service.paso === 1 || service.paso === 2 || service.paso === 3 || service.paso === 4 || service.paso === 5\">\r\n  <div class=\"card govco-card \">\r\n    <div class=\"card-body p-0\">\r\n      <div *ngIf=\"service.paso === 1 || service.paso === 3 || service.paso === 4\" id=\"pasoDos\">\r\n        <app-ingresar-solicitud></app-ingresar-solicitud>\r\n      </div>\r\n      <div *ngIf=\"service.paso === 2 || service.paso === 4 || service.paso === 5\" id=\"pasoUno\">\r\n        <app-ingresar-tramite></app-ingresar-tramite>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"main-minsalud-advice\" *ngIf=\"(service.paso === 3 || service.paso === 4)\">\r\n  <div class=\"card govco-card \">\r\n    <div class=\"card-body\">\r\n      <div id=\"pasoTres\">\r\n        <app-ingresar-obras></app-ingresar-obras>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">&nbsp;</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-8 text-center\">&nbsp;</div>\r\n  <div class=\"col-md-4 text-right\">\r\n    <a class=\"btn btn-round btn-high\" (click)=\"agregarObra()\">Agregar Obra</a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">&nbsp;</div>\r\n</div>\r\n\r\n<div class=\"card govco-card mb-3\" *ngIf=\"listaObras?.length\">\r\n  <h3 class=\"title-propietario\">Resumen de Obras Agregadas</h3>\r\n  <div class=\"row border-bottom\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <p class=\"m-0\">Consecutivo</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <p class=\"m-0\">Título</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <p class=\"m-0\">Año Declaración</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group text-right\">\r\n        <p class=\"m-0\">Acción</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let item of listaObras; let i = index;\" class=\"row border-bottom\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <a class=\"m-0\">{{item.ficConsecutivoObra}}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <p>{{item.ficTitulo}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <p>{{item.ficFechaElaboracionObra}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 text-right\">\r\n      <div class=\"form-group  text-right\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n          <i _ngcontent-ryh-c4=\"\" class=\"material-icons page-icon-close align-middle\">edit</i>\r\n          <u (click)='mapearObra(item)'>Editar</u>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">&nbsp;</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <a class=\"btn btn-round btn-high\" (click)=\"enviarSolicitud(content)\">ENVIAR AL MINISTERIO</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div [formGroup]=\"registerForm\" appInputValidator [validate]=\"invalidForm\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n  *ngIf=\"verAgregarObra\">\r\n  <div class=\"card govco-card mb-3\">\r\n    <div class=\"ingresar-obras\">\r\n      <h3 class=\"title-section\">Ingresar obra</h3>\r\n      <div class=\"col-12 mt-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Grupo*</label>\r\n              <app-dropdownlist (change)=\"obtenerHijoClasificacionesTipologicas('subgrupo')\" ngDefaultControl\r\n                [selected]=\"valoresConsulta?.grupo\" formControlName=\"grupo\" [items]=\"data.grupo\">\r\n              </app-dropdownlist>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Subgrupo*</label>\r\n              <app-dropdownlist (change)=\"obtenerHijoClasificacionesTipologicas('categoria')\" ngDefaultControl\r\n                [selected]=\"valoresConsulta?.subgrupo\" formControlName=\"subgrupo\" [items]=\"data.subgrupo\">\r\n              </app-dropdownlist>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Categoría*</label>\r\n              <app-dropdownlist [selected]=\"valoresConsulta?.categoria\" ngDefaultControl formControlName=\"categoria\"\r\n                [items]=\"data.categoria\">\r\n              </app-dropdownlist>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Autor*</label>\r\n              <input class=\"form-control input-govco\" formControlName=\"autor\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.autor.errors }\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Titulo*</label>\r\n              <input class=\"form-control input-govco\" formControlName=\"titulo\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.titulo.errors }\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Firmado*</label>\r\n              <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.firmado\" formControlName=\"firmado\"\r\n                [items]=\"data.firmado\">\r\n              </app-dropdownlist>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Año elaboración</label>\r\n              <input class=\"form-control input-govco\" numbersOnly formControlName=\"anoElaboracion\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.anoElaboracion.errors }\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-group-govco\">Época*</label>\r\n              <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.epoca\" formControlName=\"epoca\"\r\n                [items]=\"data.epoca\">\r\n              </app-dropdownlist>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card govco-card mb-3\">\r\n    <h3 class=\"title-dimensiones\">Dimensiones</h3>\r\n    <p>Para tomar las medidas de los bienes guiese por las gráficas. Las dimensiones deben darse según el sistema\r\n      métrico\r\n      decimal, en centimetros. (cms) <strong>Ver instructivo de medidas bienes</strong></p>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Alto* (cms)</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"alto\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.alto.errors }\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Ancho* (cms)</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"ancho\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.ancho.errors }\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Largo (cms)</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"largo\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.largo.errors }\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Profundidad (cms)</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"profundidad\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.profundidad.errors }\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Espesor (cms)</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"espesor\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.espesor.errors }\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Cantidad: Número de copias del bien</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"cantidad\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.cantidad.errors }\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <div class=\"form-group text-center\">\r\n          <img src=\"assets/images/src-mincultura-medidas.png\" alt=\"Medidas MinCultura.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Observaciones</label>\r\n          <div id=\"div-textarea-item\">\r\n            <div class=\"textarea-govco\">\r\n              <div class=\"div-character\" id=\"divtextarea-example\">\r\n                <textarea class=\"form-control\" rows=\"5\" placeholder=\"Escribe aquí tus observaciones\" maxlength=\"255\"\r\n                  id=\"observaciones\" formControlName=\"observaciones\" class=\"form-control\"></textarea>\r\n                <div class=\"div-count-character\"><span class=\"hidden span-message-character\" id=\"observaciones\">Alcanzó\r\n                    el máximo de carácteres permitidos</span><span class=\"float-right pr-3 span-count-character\"\r\n                    id=\"counttextarea-example\">255</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card govco-card mb-3\">\r\n    <h3 class=\"title-fotografias\">Fotografías</h3>\r\n    <p>Con el fin de recordar a los usuarios que los archivos a subir solo deben corresponder a archivos con extensión\r\n      tipo imágen, así mismo debe implementar la validación para garantizar el cumplimiento de esta solicitud.</p>\r\n    <div class=\"row\" text-right>\r\n      <div class=\"col-md-4  text-left\">\r\n        <a (click)='SeleccionarFotografiaObra()' class=\"btn btn-round btn-middle\">Seleccionar archivo</a>\r\n      </div>\r\n      <div class=\"col-md-4  text-left m-auto\">\r\n        <a *ngIf=\"fotografiaPendienteObra != null\">{{fotografiaPendienteObra.FileName}}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <br>\r\n      <b class=\"tg-0lax\">Adjuntos:</b>\r\n      <label id=\"lblAdjuntosObras\" class=\"validacion\" *ngIf=\"tieneAnexosObra\">Es necesario cargar por lo menos un\r\n        Fotografía de la Obra</label>\r\n      <br>\r\n      <div class=\"row border-bottom\" *ngIf=\"fotografiasObra?.length\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <p class=\"m-0\"><b>Archivo</b></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <p class=\"m-0\"><b>Descripción</b></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group text-right\">\r\n            <p class=\"m-0\"><b>Acción</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngFor=\"let file of fotografiasObra; let i = index;\" class=\"row border-bottom\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <a class=\"m-0\" (click)=\"descargarArchivo(file)\">{{file.FileName}}</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <p>{{file.Description}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4  text-right\">\r\n          <div class=\"form-group  text-right\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n              <i _ngcontent-ryh-c4=\"\" class=\"material-icons page-icon-close align-middle\">clear</i>\r\n              <u (click)='eliminarFotografiaObra(i)'>Eliminar</u>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card govco-card mb-3\">\r\n    <h3 class=\"title-propietario\">Propietario</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Nombre*</label>\r\n          <input class=\"form-control input-govco\" formControlName=\"propietarioNombre\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.propietarioNombre.errors }\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Tipo de documento*</label>\r\n          <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.tiposDocumento\"\r\n            formControlName=\"tipoDocumento\" [items]=\"data.TiposDocumento\">\r\n          </app-dropdownlist>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-group-govco\">Número de documento*</label>\r\n          <input class=\"form-control input-govco\" numbersOnly formControlName=\"numeroDocumento\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumento.errors }\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row m-4\" *ngIf=\"1===1\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row recaptcha-container\">\r\n          <div class=\"form-group\">\r\n            <re-captcha formControlName=\"formControlRecaptcha\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.formControlRecaptcha.errors }\">\r\n            </re-captcha>\r\n            <div *ngIf=\"submitted && f.formControlRecaptcha.errors\" class=\"text-danger\">\r\n              Campo sin diligenciar.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-center\">\r\n        <a (click)=\"cancelar()\" class=\"btn btn-round btn-middle\">Cancelar</a>\r\n      </div>\r\n      <div class=\"col-md-6 text-center\">\r\n        <a (click)=\"guardar(obra)\"\r\n          class=\"btn btn-round btn-high\">{{esNuevaObra === true ? 'Crear Obra' : 'Actualizar Obra'}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #obra let-modal class=\"modal-fit\">\r\n  <div class=\"modal-body text-center\">\r\n    <div id=\"modal-content-type-alert\" class=\"modal-content-success text-center\">\r\n      <div class=\"alert-icon text-center\">\r\n        <em class=\"material-icons\">check_circle</em>\r\n      </div>\r\n      <div id=\"modal-content-title\" class=\"modal-content-title content-govco modal-content-success text-center\">\r\n        Guardado</div>\r\n      <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">La obra ha sido guardada con éxito</p>\r\n      <p id=\"modal-content-1\" class=\"modal-content-txt content-govco\">Tu número de obra es</p>\r\n      <p id=\"modal-content-2\" class=\"modal-content-txt content-govco\">{{ficConsecutivoObra}}</p>\r\n      <p id=\"modal-content-3\" class=\"modal-content-txt content-govco\">Verifique la información y el anexo. Solo una\r\n        fotografía por obra. Su solicitud aún no ha iniciado trámite ante el ministerio, debe completar los\r\n        requisitos, agregar obras y presionar el botón \"Enviar al ministerio\".</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <a (click)=\"closeModal()\" class=\"btn btn-round btn-high\">ENTENDIDO</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #content let-modal class=\"modal-fit\">\r\n  <div class=\"modal-body text-center\">\r\n    <div id=\"modal-content-type-alert\" class=\"modal-content-success text-center\">\r\n      <em class=\"material-icons color-green\" style=\"font-size: 50px\">check_circle</em>\r\n      <h2 class=\"color-green\">Enviado</h2>\r\n      <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">La solicitud ha sido enviada con éxito</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <a (click)=\"closeModal()\" class=\"btn btn-round btn-high\">ENTENDIDO</a>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"registerForm\" appInputValidator [validate]=\"invalidForm\" [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n    <div class=\"card govco-card mb-3\">\r\n        <div class=\"ingresar-solicitud\">\r\n            <h3 class=\"title-section\">Ingresar solicitud</h3>\r\n            <div class=\"col-12 mt-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">Tipo de solicitante *</label>\r\n                            <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.tipo_solicitante\"\r\n                                formControlName=\"tipoSolicitante\" [items]=\"data.tiposSolicitante\">\r\n                            </app-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">Tipo de documento*</label>\r\n                            <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.tipo_documento\"\r\n                                formControlName=\"tipoDocumentoSolicitante\" [items]=\"data.TiposDocumento\">\r\n                            </app-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">Número de documento*</label>\r\n                            <input class=\"form-control input-govco\" numbersOnly\r\n                                formControlName=\"numeroDocumentoSolicitante\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumentoSolicitante.errors }\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">Confirmar número de documento*</label>\r\n                            <input class=\"form-control input-govco\" (blur)=\"obtenerSolicitante($event)\" numbersOnly\r\n                                formControlName=\"numeroDocumentoSolicitante2\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumentoSolicitante2.errors }\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">Nombre o razón social*</label>\r\n                            <input class=\"form-control input-govco\" formControlName=\"nombreRazonSocialSolicitante\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.nombreRazonSocialSolicitante.errors }\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-group-govco\">País de expedición*</label>\r\n                            <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.paisExpedicionSolicitante\"\r\n                                formControlName=\"paisExpedicionSolicitante\" [items]=\"data.paises\">\r\n                            </app-dropdownlist>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"anexos\">\r\n            <h3 class=\"title-section\">Anexos</h3>\r\n            <div class=\"col-12 mt-3\">\r\n                <p>Según el \"Tipo de documento\" seleccionado en la casilla del solicitante adjunte: Fotocopia de la\r\n                    cédula de ciudadanía (por ambas caras) o pasaporte (donde está la fotografía) o cédula de\r\n                    extranjería o\r\n                    tarjeta de identidad, y en caso persona jurídicas, la identificación del representante legal de la\r\n                    entidad y la identificación de la entidad con su Nit, Extensiones válidas: JPEG, PDF y PNG.\r\n                </p>\r\n                <div class=\"nota-anexos mt-3 mb-3\">\r\n                    <div id=\"toast-container-body\">\r\n                        <div class=\"toast-info p-3\" aria-live=\"polite\">\r\n                            <div class=\"d-flex bd-highlight\">\r\n                                <div class=\"toast-title note-title\">Nota</div>\r\n                            </div>\r\n                            <div class=\"toast-message\">\r\n                                <p class=\"m-0\">Si marcó exhibición o estudio científico, y los bienes son de propiedad\r\n                                    pública, anexe los siguientes documentos complementarios <a class=\"btn-low\">Ver\r\n                                        documento</a>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"adjunto\">\r\n                    <div class=\"row\" text-right>\r\n                        <div class=\"col-md-4 text-left\">\r\n                            <a (click)='SeleccionarArchivoSolicitante()' class=\"btn btn-round btn-middle\">Seleccionar\r\n                                archivo</a>\r\n                        </div>\r\n                        <div class=\"col-md-4 text-left m-auto\">\r\n                            <a *ngIf=\"adjuntoPendienteSolicitante != null\">{{adjuntoPendienteSolicitante.FileName}}</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <br>\r\n                        <b class=\"tg-0lax\">Adjuntos:</b>\r\n                        <label id=\"lblAdjuntosSolicitante\" class=\"validacion\" *ngIf=\"tieneAnexos\">Es necesario cargar\r\n                            por lo menos un Anexo del Solicitante</label>\r\n                        <br>\r\n                        <div class=\"row border-bottom\" *ngIf=\"adjuntosSolicitante?.length\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"m-0\"><b>Archivo</b></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"m-0\"><b>Descripción</b></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group text-right\">\r\n                                    <p class=\"m-0\"><b>Acción</b></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let file of adjuntosSolicitante; let i = index;\" class=\"row border-bottom\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <a class=\"m-0\" (click)=\"descargarArchivo(file)\">{{file.FileName}}</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p>{{file.Description}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4  text-right\">\r\n                                <div class=\"form-group  text-right\">\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                                        <i _ngcontent-ryh-c4=\"\"\r\n                                            class=\"material-icons page-icon-close align-middle\">clear</i>\r\n                                        <u (click)='eliminarArchivoSolicitante(i)'>Eliminar</u>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card govco-card mb-3\">\r\n        <h3 class=\"title-section\">Datos de ubicación</h3>\r\n        <div class=\"col-12 mt-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Departamento *</label>\r\n                        <app-dropdownlist (change)=\"actualizarDepartamentoUbicacion()\"\r\n                            [selected]=\"valoresConsulta?.departamentoUbicacion\" ngDefaultControl\r\n                            formControlName=\"departamentoUbicacion\" [items]=\"data.departamentos\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Municipio *</label>\r\n                        <app-dropdownlist ngDefaultControl formControlName=\"municipioUbicacion\"\r\n                            [selected]=\"valoresConsulta?.municipioUbicacion\" [items]=\"data.municipiosUbicacion\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Teléfono *</label>\r\n                        <input class=\"form-control input-govco\" numbersOnly formControlName=\"telefonoUbicacion\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.telefonoUbicacion.errors }\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Dirección *</label>\r\n                        <input class=\"form-control input-govco\" formControlName=\"direccionUbicacion\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.direccionUbicacion.errors }\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Correo electrónico *</label>\r\n                        <input class=\"form-control input-govco\" formControlName=\"correoUbicacion\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.correoUbicacion.errors }\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Confirmación de correo electrónico *</label>\r\n                        <input class=\"form-control input-govco\" formControlName=\"correoUbicacion2\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.correoUbicacion2.errors }\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"aplica-interes col-12\">\r\n                    <p class=\"title\">Solo aplica para bienes de interés cultural del ámbito nacional</p>\r\n                    <p>\r\n                        <span class=\"title\">Teléfono:</span>\r\n                        <i class=\"content\">\r\n                            Ingrese el indicativo del país, de la ciudad, del municipio y el número\r\n                            telefónico. Ejemplo +57 (1) 342 4100. No ingresar datos del operador de larga distancia (09,\r\n                            07 o 05), solo el indicativo local entre paréntesis y el número de contacto.\r\n                        </i>\r\n                        <br>\r\n                        <span class=\"title\">Correo electrónico:</span>\r\n                        <i class=\"content\">\r\n                            Ingrese solo una (1) dirección de correo. Debe incluirse de la manera estándar, el taxto en\r\n                            minúsculas y sin tíldes. Ejemplo: correo@mincultura.gov.co\r\n                        </i>\r\n                        <br>\r\n                        <span class=\"title\">Dirección:</span>\r\n                        <i class=\"content\">\r\n                            Este dato debe incluirse con las palabras calle, carrera, transversal, diagonal, etc.\r\n                            completas y debe utilizarse el signo # (si aplica) y un guion. Si el nombre del barrio hace\r\n                            parte de la dirección, debe incluirse completo y sin abreviaturas.\r\n                        </i>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card govco-card mb-3\">\r\n        <h3 class=\"title-section\">Requiere intermediario</h3>\r\n        <div class=\"col-12 mt-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"radiobutton-govco\">\r\n                            <input type=\"radio\" name=\"requiereIntermediario\" formControlName=\"requiereIntermediario\"\r\n                                [(ngModel)]=\"requiereIntermediarioValor\" value=\"SI\" />\r\n                            <span>SI</span>\r\n                            <div class=\"radiobutton-govco__indicator\"></div>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"radiobutton-govco\">\r\n                            <input type=\"radio\" name=\"requiereIntermediario\" formControlName=\"requiereIntermediario\"\r\n                                [(ngModel)]=\"requiereIntermediarioValor\" value=\"NO\" />\r\n                            <span>NO</span>\r\n                            <div class=\"radiobutton-govco__indicator\"></div>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div *ngIf=\"requiereIntermediarioValor === 'SI'\">\r\n                    <br>\r\n                    <h3 class=\"tg-0lax\">Intermediario</h3>\r\n                    <p>Aplica solo cuando la solicitud es tramitada por un tercero (persona natural, empresa de\r\n                        mudanzas, agencia o sociedad de intermediación aduanera SIA), en este caso diligencia los datos\r\n                        que siguen a continuación, siguiendo las mismas pautas para el solicitante, en caso contrario no\r\n                        diligencie este item.</p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Tipo de documento*</label>\r\n                                <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.docIdIntermediario\"\r\n                                    formControlName=\"tipoDocumentoIntermediario\" [items]=\"data.TiposDocumento\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <p>Número de documento*</p>\r\n                                <input class=\"form-control input-govco\" numbersOnly\r\n                                    formControlName=\"numeroDocumentoIntermediario\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumentoIntermediario.errors  && requiereIntermediarioValor === 'SI'}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <p>Confirmar número de documento*</p>\r\n                                <input class=\"form-control input-govco\" numbersOnly\r\n                                    formControlName=\"numeroDocumentoIntermediario2\"\r\n                                    (blur)=\"obtenerIntermediario($event)\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.numeroDocumentoIntermediario2.errors  && requiereIntermediarioValor === 'SI'}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <p>Nombre</p>\r\n                                <input formControlName=\"nombreIntermediario\" class=\"form-control input-govco\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">País de expedición</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"paisExpedicionIntermediario\"\r\n                                    [selected]=\"valoresConsulta?.paisExpedicionIntermediario\" [items]=\"data.paises\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\" *ngIf=\"!(colombiaSeleccionadoExpedicionIntermediario())\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Ciudad</label>\r\n                                <input class=\"form-control input-govco\" formControlName=\"ciudadIntermediario\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"colombiaSeleccionadoExpedicionIntermediario()\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Departamento</label>\r\n                                <app-dropdownlist (change)=\"actualizarDepartamentoIntermediario()\" ngDefaultControl\r\n                                    formControlName=\"departamentoIntermediario\" [items]=\"data.departamentos\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Municipio</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"municipioIntermediario\"\r\n                                    [items]=\"data.municipiosIntermediario\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <h3 class=\"tg-0lax\">Anexos</h3>\r\n                    <p>Según el \"Tipo de documento\" seleccionado en la casilla del solicitante adjunte: Fotocopia de la\r\n                        cédula de ciudadanía (por ambas caras) o pasaporte (donde está la fotografía) o cédula de\r\n                        extranjería o tarjeta de identidad, y en caso persona jurídicas, la identificación del\r\n                        representante legal de la entidad y la identificación de la entidad con su Nit, Extensiones\r\n                        válidas: JPEG, PDF y PNG.</p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" text-right>\r\n                        <div class=\"col-md-4 text-left\">\r\n                            <a (click)='SeleccionarArchivoIntermediario()' class=\"btn btn-round btn-middle\">Seleccionar\r\n                                archivo</a>\r\n                        </div>\r\n                        <div class=\"col-md-4 text-left m-auto\">\r\n                            <a\r\n                                *ngIf=\"adjuntoPendienteIntermediario != null\">{{adjuntoPendienteIntermediario.FileName}}</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <br>\r\n                        <b class=\"tg-0lax\">Adjuntos:</b>\r\n                        <label id=\"lblAdjuntosIntermediario\" class=\"validacion\" *ngIf=\"tieneAnexosIntermediario\">Es\r\n                            necesario cargar por lo menos un Anexo del Intermediario</label>\r\n                        <br>\r\n                        <div class=\"row border-bottom\" *ngIf=\"adjuntosIntermediario?.length\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"m-0\"><b>Archivo</b></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"m-0\"><b>Descripción</b></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group text-right\">\r\n                                    <p class=\"m-0\"><b>Acción</b></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let file of adjuntosIntermediario; let i = index;\" class=\"row border-bottom\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p class=\"m-0\">{{file.FileName}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <p>{{file.Description}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4  text-right\">\r\n                                <div class=\"form-group  text-right\">\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                                        <i _ngcontent-ryh-c4=\"\"\r\n                                            class=\"material-icons page-icon-close align-middle\">clear</i>\r\n                                        <u (click)='eliminarArchivoIntermediario(i)'>Eliminar</u>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <h3 class=\"tg-0lax\">Datos de ubicación</h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Departamento</label>\r\n                                <app-dropdownlist (change)=\"actualizarDepartamentoUbicacionIntermediario()\"\r\n                                    [selected]=\"valoresConsulta?.departamentoUbicacionIntermediario\" ngDefaultControl\r\n                                    formControlName=\"departamentoUbicacionIntermediario\" [items]=\"data.departamentos\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Municipio</label>\r\n                                <app-dropdownlist ngDefaultControl formControlName=\"municipioUbicacionIntermediario\"\r\n                                    [selected]=\"valoresConsulta?.municipioUbicacionIntermediario\"\r\n                                    [items]=\"data.municipiosUbicacionIntermediario\">\r\n                                </app-dropdownlist>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <p>Teléfono</p>\r\n                                <input formControlName=\"telefonoUbicacionIntermediario\" class=\"form-control input-govco\"\r\n                                    numbersOnly>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <p>Dirección</p>\r\n                                <input formControlName=\"direccionUbicacionIntermediario\"\r\n                                    class=\"form-control input-govco\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Correo electrónico*</label>\r\n                                <input class=\"form-control input-govco\" formControlName=\"correoUbicacionIntermediario\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.correoUbicacionIntermediario.errors  && requiereIntermediarioValor === 'SI'}\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-group-govco\">Confirmación de correo electrónico*</label>\r\n                                <input class=\"form-control input-govco\" formControlName=\"correoUbicacionIntermediario2\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.correoUbicacionIntermediario2.errors  && requiereIntermediarioValor === 'SI'}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <p><strong>Solo aplica para bienes de interés cultural del ámbito nacional</strong></p>\r\n                    <p><strong>Teléfono: </strong>Ingrese el indicativo del país, de la ciudad, del municipio y el\r\n                        número telefónico. Ejemplo +57 (1) 342 4100. No ingresar datos del operador de larga distancia\r\n                        (09, 07 o 05), solo el indicativo local entre paréntesis y el número de contacto.</p>\r\n                    <p><strong>Correo electrónico: </strong>Ingrese solo una (1) dirección de correo. Debe incluirse de\r\n                        la manera estándar, el taxto en minúsculas y sin tíldes. Ejemplo: correo@mincultura.gov.co</p>\r\n                    <p><strong>Dirección: </strong>Este dato debe incluirse con las palabras calle, carrera,\r\n                        transversal, diagonal, etc. completas y debe utilizarse el signo # (si aplica) y un guion. Si el\r\n                        nombre del barrio hace parte de la dirección, debe incluirse completo y sin abreviaturas.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card govco-card mb-3\">\r\n\r\n        <h3 class=\"title-section\">Destino</h3>\r\n        <div class=\"col-12 mt-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">País *</label>\r\n                        <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.destinoZopId\"\r\n                            formControlName=\"PaisDestino\" [items]=\"data.paises\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\" *ngIf=\"!(colombiaSeleccionado())\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Ciudad *</label>\r\n                        <input class=\"form-control input-govco\" formControlName=\"ciudadDestino\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"colombiaSeleccionado()\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Departamento *</label>\r\n                        <app-dropdownlist (change)=\"actualizarDepartamentoDestino()\" ngDefaultControl\r\n                            formControlName=\"departamentoDestino\" [items]=\"data.departamentos\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Municipio *</label>\r\n                        <app-dropdownlist ngDefaultControl formControlName=\"municipioDestino\"\r\n                            [items]=\"data.municipiosDestino\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Dirección *</label>\r\n                        <input class=\"form-control input-govco\" formControlName=\"direccionDestino\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.direccionDestino.errors }\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Fines de exportación *</label>\r\n                        <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.destinoFinExportacion\"\r\n                            formControlName=\"finExportacion\" [items]=\"data.finesExportacion\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Entidad destino</label>\r\n                        <input formControlName=\"entidadDestino\" class=\"form-control input-govco\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-group-govco\">Teléfono</label>\r\n                        <input formControlName=\"telefonoDestino\" class=\"form-control input-govco\" numbersOnly>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h3 class=\"title-section mt-3\">Tiempo de permanencia fuera del país</h3>\r\n        <div class=\"col-12 mt-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control input-govco\" numbersOnly formControlName=\"tiempoPermanencia\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <app-dropdownlist ngDefaultControl [selected]=\"valoresConsulta?.DestinoTipoTiempoPermanencia\"\r\n                            formControlName=\"tipoPermanencia\" [items]=\"data.tiposPermanencia\">\r\n                        </app-dropdownlist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <p>- En caso de que su solicitud sea con fines de exposición o investigación diligencie el tiempo de\r\n                        permanencia.</p>\r\n                    <p>- En caso de que se trate de una salida temporal el tiempo de permanencia no podrá exceder los\r\n                        tres años.</p>\r\n                    <p>- En caso de que su solicitud sea con fines de excibición al público o estudio científico y\r\n                        programas de intercambio entre entidades estatales y extranjeras.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <label class=\"chk-govco\">\r\n                        <input type=\"checkbox\" checked=\"checked\" id=\"checkbox_1\" formControlName=\"autoriza\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.autoriza.errors }\">\r\n                        <label for=\"checkbox_1\">\r\n                            Autorizo al Ministerio de Cultura para el uso de los datos aqui consignados. Para conocer\r\n                            mas sobre la política de datos personales pueden ingresar <strong>aquí</strong>\r\n                        </label>\r\n                        <div class=\"chk-govco__indicator\"></div>\r\n                    </label>\r\n                    <label class=\"validacion\" *ngIf=\"chkMarcado\">Campo sin diligenciar</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row m-4\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row recaptcha-container\">\r\n                        <div class=\"form-group\">\r\n                            <re-captcha formControlName=\"formControlRecaptcha\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.formControlRecaptcha.errors }\">\r\n                            </re-captcha>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 text-center\">\r\n                <a (click)=\"volver()\" class=\"btn btn-round btn-middle\">Cancelar</a>\r\n            </div>\r\n            <div class=\"col-md-6 text-center\">\r\n                <a (click)=\"guardar(content)\"\r\n                    class=\"btn btn-round btn-high\">{{this.solicitud.sosId === 0 ? 'Crear Solicitud' : 'Actualizar Solicitud'}}</a>\r\n            </div>\r\n        </div>\r\n        <ng-template #content let-modal class=\"modal fade govco-modal-medium show\" tabindex=\"-1\" role=\"dialog\"\r\n            style=\"display: block; z-index: 4; padding-right: 17px;\" aria-modal=\"true\">\r\n            <div>\r\n                <div class=\"modal-dialog alert-govco modal-medium modal-dialog-centered\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-body text-center\">\r\n                            <em class=\"material-icons color-green\" style=\"font-size: 50px\">check_circle</em>\r\n                            <div id=\"modal-content-title\"\r\n                                class=\"modal-content-title content-govco modal-content-success text-center\">Guardado\r\n                            </div>\r\n                            <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">La solicitud ha sido\r\n                                guardada con éxito</p>\r\n                            <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">Tu número de solicitud es\r\n                            </p>\r\n                            <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">{{sosConsecutivoId}}</p>\r\n                            <p id=\"modal-content-txt\" class=\"modal-content-txt content-govco\">Tu solicitud aún no ha\r\n                                iniciado trámite ante el Ministerio, debe completar los requisitos, agregar obras y\r\n                                presionar el botón enviar al Ministerio.</p>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">&nbsp;</div>\r\n                            </div>\r\n                            <a (click)=\"closeModal()\" class=\"btn btn-round btn-high\">ENTENDIDO</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"service.paso === 3 || service.paso === 4\">\r\n    <br>\r\n    <h2 class=\"tg-0lax\">Resumen de la solicitud</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <p><strong>Fecha</strong></p>\r\n                <p>{{ sosFechaRadiacion | date :'dd-MM-yyyy'}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <p><strong>Estado</strong></p>\r\n                <p>Guardada</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <p><strong>No. de radicación</strong></p>\r\n                <p>{{sosConsecutivoId}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"main-minsalud-advice\" *ngIf=\"this.mostrarObraEditar\">\r\n    <div class=\"card govco-card \">\r\n        <div class=\"card-body\">\r\n            <div id=\"pasoTres\">\r\n                <app-ingresar-obras></app-ingresar-obras>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td class=\"tg-0lax\">\r\n    <h3 class=\"title-section pl-3\">¿Qué quieres hacer hoy?</h3>\r\n</td>\r\n<div id=\"div-tabs\">\r\n    <div id=\"div-tabs-item\" class=\"pl-3 pt-3\">\r\n        <div class=\"row\" *ngIf=\"service.paso === 2\">\r\n            <div class=\"col-md-6 option-right\">\r\n                <a class=\"btn btn-round btn-middle w-75 mt-3\" (click)=\"consultarSolicitud()\">Consultar solicitud</a>\r\n            </div>\r\n            <div class=\"col-md-6 option-left\">\r\n                <app-iniciar-sesion></app-iniciar-sesion>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"service.paso === 5\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <app-iniciar-sesion></app-iniciar-sesion>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-round btn-high w-75 mt-3\" (click)=\"open(content)\">Ingresar nueva solicitud</a>\r\n\r\n<div [formGroup]=\"formGroupLogin\" appInputValidator [validate]=\"invalidForm\" [ngClass]=\"{'invalid-form' : invalidForm}\">\r\n    <ng-template #content>\r\n        <div class=\"modal-header text-center\">\r\n            <div class=\"row w-100\">\r\n                <div class=\"col-md-12\">\r\n                    <h3 class=\"title-section w-100 \">INICIAR SESIÓN EN MINISTERIO DE CULTURA</h3>\r\n                    <div>Por favor ingresar los siguientes datos</div>\r\n                </div>\r\n                <div class=\"col-md-12 mt-2\">\r\n                    Para confirmar tu cita debes ser un usuario registrado\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-body pl-4 pr-4 pt-0 pb-0\">\r\n            <div class=\"form-group\">\r\n                <div class=\"area-note-selago p-3\">\r\n                    <p><strong class=\"title mb-4\">Advertencia</strong></p>\r\n                    <i class=\"content\">\r\n                        Si usted accede desde una empresa intermediaria, ingrese con el usuario y\r\n                        contraseña asignado por el Ministerio, de lo contrario acceda mediante el botón ingresar sin\r\n                        diligenciar los campos\r\n                    </i>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"invalidForm == true\">\r\n                <div class=\"col-12\">\r\n                    <ngb-alert type=\"danger\">\r\n                        <p id=\"error-message\">\r\n                            Usuario o contraseña incorrecta\r\n                        </p>\r\n                    </ngb-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-12 d-flex mt-4\">\r\n                    <div class=\"col-md-3\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"Username\" class=\"form-group-govco\">Usuario</label>\r\n                            <input class=\"form-control input-govco\" type=\"text\" formControlName=\"formControlUsuario\"\r\n                                maxlength=\"30\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\" class=\"form-group-govco\">Contraseña</label>\r\n                            <input id=\"password\" class=\"form-control input-govco\" [type]=\"typeButton\"\r\n                                formControlName=\"formControlPassword\" maxlength=\"50\" />\r\n                            <label class=\"chk-govco mt-0\">\r\n                                <input type=\"checkbox\" id=\"showPassword\" (click)=\"checkShowPassword()\" />\r\n                                <label for=\"showPassword\">\r\n                                    Mostrar contraseña\r\n                                </label>\r\n                                <div class=\"chk-govco__indicator\"></div>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-center pt-2\" id=\"modal-options\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <button class=\"btn btn-round btn-middle\" (click)=\"cancelar()\">Cancelar</button>&nbsp;&nbsp;\r\n                <button class=\"btn btn-round btn-high w-25\" (click)=\"login()\">Ingresar</button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4 mb-3\">\r\n    <div class=\"text-center\">\r\n        <div class=\"row w-100\">\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"title-section w-100 \">INICIAR SESIÓN EN MINISTERIO DE CULTURA</h3>\r\n                <div>Por favor ingresar los siguientes datos</div>\r\n            </div>\r\n            <div class=\"col-md-12 mt-2\">\r\n                Para confirmar tu cita debes ser un usuario registrado\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\" pl-4 pr-4 pt-0 pb-0\">\r\n        <div class=\"form-group\">\r\n            <div class=\"area-note-selago p-3\">\r\n                <p><strong class=\"title mb-4\">Advertencia</strong></p>\r\n                <i class=\"content\">\r\n                    Si usted accede desde una empresa intermediaria, ingrese con el usuario y\r\n                    contraseña asignado por el Ministerio, de lo contrario acceda mediante el botón ingresar sin\r\n                    diligenciar los campos\r\n                </i>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"invalidForm == true\">\r\n            <div class=\"col-12\">\r\n                <ngb-alert type=\"danger\">\r\n                    <p id=\"error-message\">\r\n                        Usuario o contraseña incorrecta\r\n                    </p>\r\n                </ngb-alert>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-12 d-flex mt-4\">\r\n                <div class=\"col-md-3\">\r\n\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Username\" class=\"form-group-govco\">Usuario</label>\r\n                        <input class=\"form-control input-govco\" type=\"text\" maxlength=\"30\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"form-group-govco\">Contraseña</label>\r\n                        <input id=\"password\" class=\"form-control input-govco\" [type]=\"typeButton\" maxlength=\"50\" />\r\n                        <label class=\"chk-govco mt-0\">\r\n                            <input type=\"checkbox\" id=\"showPassword\" (click)=\"checkShowPassword()\" />\r\n                            <label for=\"showPassword\">\r\n                                Mostrar contraseña\r\n                            </label>\r\n                            <div class=\"chk-govco__indicator\"></div>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\" justify-content-center pt-2 text-center\" id=\"modal-options\">\r\n        <button formcontrolname=\"formControlLogin\" class=\"btn btn-round btn-high w-25\"\r\n            (click)=\"login()\">Ingresar</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sicContainer\" class=\"row\">\r\n  <app-tramite-detail class=\"col-md-12\" [name]=\"'consulta'\" [owner]=\"'mincultura'\">\r\n  </app-tramite-detail>\r\n\r\n  <div class=\"col-md-9 tramite-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-3 area-servicio\">\r\n    <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n    <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T11625'\" [type]=\"'redirect'\"></app-btn-volver>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3>\r\n    INICIAR SESIÓN EN MINISTERIO DE JUSTICIA\r\n</h3>\r\n\r\n<div class=\"modal-body\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <strong>Lo sentimos</strong><br/>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/autorizar-exportacion-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/autorizar-exportacion-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AutorizarExportacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizarExportacionRoutingModule", function() { return AutorizarExportacionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_autorizar_exportacion_autorizar_exportacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/autorizar-exportacion/autorizar-exportacion.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.ts");
/* harmony import */ var _components_consultar_solicitud_consultar_solicitud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/consultar-solicitud/consultar-solicitud.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.ts");
/* harmony import */ var _components_ingresar_solicitud_ingresar_solicitud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ingresar-solicitud/ingresar-solicitud.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.ts");
/* harmony import */ var _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ingresar-tramite/ingresar-tramite.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.ts");
/* harmony import */ var _components_ingresar_obras_ingresar_obras_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ingresar-obras/ingresar-obras.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.ts");










const routes = [
    {
        path: '',
        component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"],
        children: [
            {
                path: '',
                component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"],
            },
            {
                path: 'inicio',
                component: _components_autorizar_exportacion_autorizar_exportacion_component__WEBPACK_IMPORTED_MODULE_3__["AutorizarExportacionComponent"],
            },
            /*  {
               path: 'iniciar-sesion',
               component: IniciarSesionComponent,
             }, */
            {
                path: 'ingresar-solicitud',
                component: _components_ingresar_solicitud_ingresar_solicitud_component__WEBPACK_IMPORTED_MODULE_5__["IngresarSolicitudComponent"],
            },
            {
                path: 'ingresar-obras',
                component: _components_ingresar_obras_ingresar_obras_component__WEBPACK_IMPORTED_MODULE_7__["IngresarObrasComponent"],
            },
            {
                path: 'ingresar-tramite',
                component: _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_6__["IngresarTramiteComponent"],
            },
            {
                path: 'consultar-solicitud',
                component: _components_consultar_solicitud_consultar_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["ConsultarSolicitudComponent"],
            }
        ]
    }
];
let AutorizarExportacionRoutingModule = class AutorizarExportacionRoutingModule {
};
AutorizarExportacionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AutorizarExportacionRoutingModule);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/autorizar-exportacion.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/autorizar-exportacion.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AutorizarExportacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizarExportacionModule", function() { return AutorizarExportacionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.ts");
/* harmony import */ var _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ingresar-tramite/ingresar-tramite.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.ts");
/* harmony import */ var _autorizar_exportacion_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autorizar-exportacion-routing.module */ "./src/app/tramites/mincultura/autorizar-exportacion/autorizar-exportacion-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/iniciar-sesion/iniciar-sesion.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.ts");
/* harmony import */ var _components_ingresar_solicitud_ingresar_solicitud_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ingresar-solicitud/ingresar-solicitud.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.ts");
/* harmony import */ var _components_ingresar_obras_ingresar_obras_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ingresar-obras/ingresar-obras.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.ts");
/* harmony import */ var _components_consultar_solicitud_consultar_solicitud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/consultar-solicitud/consultar-solicitud.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.ts");
/* harmony import */ var _services_NumberDirective__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/NumberDirective */ "./src/app/tramites/mincultura/autorizar-exportacion/services/NumberDirective.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.ts");
/* harmony import */ var _components_autorizar_exportacion_autorizar_exportacion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/autorizar-exportacion/autorizar-exportacion.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.ts");
/* harmony import */ var _components_iniciar_iniciar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/iniciar/iniciar.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");





















let AutorizarExportacionModule = class AutorizarExportacionModule {
};
AutorizarExportacionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_ingresar_tramite_ingresar_tramite_component__WEBPACK_IMPORTED_MODULE_5__["IngresarTramiteComponent"],
            _components_iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_9__["IniciarSesionComponent"],
            _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"],
            _components_ingresar_solicitud_ingresar_solicitud_component__WEBPACK_IMPORTED_MODULE_10__["IngresarSolicitudComponent"],
            _components_ingresar_obras_ingresar_obras_component__WEBPACK_IMPORTED_MODULE_11__["IngresarObrasComponent"],
            _components_consultar_solicitud_consultar_solicitud_component__WEBPACK_IMPORTED_MODULE_12__["ConsultarSolicitudComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
            _services_NumberDirective__WEBPACK_IMPORTED_MODULE_14__["NumberDirective"],
            _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__["InicioComponent"],
            _components_autorizar_exportacion_autorizar_exportacion_component__WEBPACK_IMPORTED_MODULE_17__["AutorizarExportacionComponent"],
            _components_iniciar_iniciar_component__WEBPACK_IMPORTED_MODULE_18__["IniciarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _autorizar_exportacion_routing_module__WEBPACK_IMPORTED_MODULE_6__["AutorizarExportacionRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"]
        ],
        entryComponents: [_components_iniciar_iniciar_component__WEBPACK_IMPORTED_MODULE_18__["IniciarComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], AutorizarExportacionModule);

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_20__["platformBrowserDynamic"])().bootstrapModule(AutorizarExportacionModule);


/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2F1dG9yaXphci1leHBvcnRhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AutorizarExportacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizarExportacionComponent", function() { return AutorizarExportacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");
/* harmony import */ var _iniciar_iniciar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../iniciar/iniciar.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AutorizarExportacionComponent = class AutorizarExportacionComponent {
    constructor(modalService, router, solicitudProvider) {
        this.modalService = modalService;
        this.router = router;
        this.solicitudProvider = solicitudProvider;
    }
    ngOnInit() {
        sessionStorage.clear();
    }
    abrirIniciarSesionModal() {
        sessionStorage.clear();
        this.solicitudProvider.Solicitud = {
            sosId: 0
        };
        this.modalService.open(_iniciar_iniciar_component__WEBPACK_IMPORTED_MODULE_2__["IniciarComponent"], {
            size: 'lg',
            backdrop: 'static',
            keyboard: true
        });
    }
    consultarSolicitud() {
        this.router.navigate(['/mincultura/autorizar-exportacion/consultar-solicitud']);
    }
};
AutorizarExportacionComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_1__["SolicitudProvider"] }
];
AutorizarExportacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autorizar-exportacion',
        template: __webpack_require__(/*! raw-loader!./autorizar-exportacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.html"),
        styles: [__webpack_require__(/*! ./autorizar-exportacion.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/autorizar-exportacion/autorizar-exportacion.component.scss")]
    })
], AutorizarExportacionComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.table-header-blu-gov-co thead {\n  background: #004884;\n  color: white;\n  position: relative;\n}\n.table-header-blu-gov-co thead th {\n  color: white;\n  font-weight: normal;\n  position: relative;\n}\n.table-header-blu-gov-co thead th,\n.table-header-blu-gov-co tbody td {\n  padding: 0.75rem;\n}\n.table-header-blu-gov-co tbody tr {\n  border-bottom: #c2c2c2 solid 1px;\n}\n.table-header-blu-gov-co td.state-success {\n  color: #069169;\n}\n.table-header-blu-gov-co td p {\n  margin: 0px;\n}\n.table-header-blu-gov-co td p.text-success::before {\n  content: \"\";\n  font-family: \"Material Icons\", sans-serif;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.table-header-blu-gov-co td u.link::before {\n  cursor: pointer !important;\n}\n.table-header-blu-gov-co td p.text-danger::before {\n  content: \"\";\n  font-family: \"Material Icons\", sans-serif;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.table-header-blu-gov-co td.state-success::before {\n  content: \"☻ \";\n  color: #069169;\n}\n.table-header-blu-gov-co thead th:first-child:after {\n  content: \"\";\n  width: 2.25rem;\n  height: 100%;\n  background: #004884;\n  position: absolute;\n  top: 0px;\n  left: -2.25rem;\n}\n.table-header-blu-gov-co thead th:last-child::before {\n  content: \"\";\n  width: 2.25rem;\n  height: 100%;\n  background: #004884;\n  position: absolute;\n  top: 0px;\n  right: -2.25rem;\n}\n.see-downloads p {\n  margin-right: 30px;\n}\n.see-downloads p::after {\n  position: absolute;\n  top: -5px;\n  right: 15px;\n  margin: 0;\n  margin-left: 15px;\n  font-family: \"Govco Icon\", sans-serif;\n  font-size: 1.5rem;\n  content: \"\" !important;\n  color: #3772ff !important;\n  border-width: 0px;\n  border-style: solid;\n  border-color: #f0f3fb;\n  -webkit-border-image: initial;\n       -o-border-image: initial;\n          border-image: initial;\n}\n.container-table-concept-gov-co {\n  padding: 0.75rem;\n  background-color: #e5eefb;\n}\n.container-table-concept-gov-co .table-concept-gov-co tr {\n  padding: 0;\n  list-style: none;\n  border-bottom: 2px solid #004884;\n}\n.container-table-concept-gov-co .table-concept-gov-co tr p {\n  margin: 0px;\n}\n.container-table-concept-gov-co .table-concept-gov-co tr u {\n  text-decoration: none;\n}\n.container-table-concept-gov-co .table-concept-gov-co tr u::after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  margin-left: 5px;\n  font-family: \"Govco Icon\", sans-serif;\n  font-size: 1.5rem;\n  content: \"\";\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n.card-govco .table {\n  border-bottom: #c2c2c2 solid 1px;\n}\n.card-govco .table thead {\n  background: #004884;\n  color: white;\n}\n.mod-download .card-header {\n  background: transparent;\n  border: 0px;\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5rem 1.25rem;\n}\n.mod-download .card-header.open {\n  border-bottom: 3px solid #004884;\n}\n.mod-download .see-information {\n  margin-left: auto;\n  padding: 0;\n  margin-right: 20px;\n}\n.mod-download .see-information::after {\n  position: absolute;\n  top: -5px;\n  right: -30px;\n  margin: 0;\n  margin-left: 15px;\n  font-family: \"Govco Icon\", sans-serif;\n  font-size: 1.5rem;\n  content: \"\" !important;\n  color: #3772ff !important;\n  border-width: 0px;\n  border-style: solid;\n  border-color: #f0f3fb;\n  -webkit-border-image: initial;\n       -o-border-image: initial;\n          border-image: initial;\n}\n.mod-download .card-header .see-information.collapsed::after {\n  content: \"\";\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.mod-download .card-header.open .see-information::after {\n  content: \"\";\n  -webkit-transform: scale(-1);\n          transform: scale(-1);\n}\n.btn-download {\n  margin-left: auto;\n  padding: 0;\n  margin-right: 25px;\n}\n.btn-download::after {\n  position: absolute;\n  top: -5px;\n  right: -54px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  margin-left: 15px;\n  font-family: \"Govco Icon\", sans-serif;\n  font-size: 1.5rem;\n  width: 100% !important;\n  content: \"\" !important;\n  color: #3772ff !important;\n  border-width: 0px;\n  border-style: solid;\n  border-color: #f0f3fb;\n  -webkit-border-image: initial;\n       -o-border-image: initial;\n          border-image: initial;\n}\nli.download-item {\n  padding: 0;\n  list-style: none;\n  border-bottom: 2px solid #004884;\n}\nli.download-item:last-child {\n  border-bottom: none;\n}\nli.download-item .wrapper-item-list {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 8px 0;\n}\n.card-header-info {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin: 0rem auto;\n}\n.ml-auto {\n  margin-left: auto;\n}\n#collapseDownload .card-body {\n  background-color: #e5eefb !important;\n}\n.link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9jb25zdWx0YXItc29saWNpdHVkL2NvbnN1bHRhci1zb2xpY2l0dWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvY29uc3VsdGFyLXNvbGljaXR1ZC9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5jdWx0dXJhXFxhdXRvcml6YXItZXhwb3J0YWNpb25cXGNvbXBvbmVudHNcXGNvbnN1bHRhci1zb2xpY2l0dWRcXGNvbnN1bHRhci1zb2xpY2l0dWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2Q7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRENKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENKO0FDQ0U7O0VBRUUsZ0JBQUE7QURDSjtBQ0NFO0VBQ0UsZ0NBQUE7QURDSjtBQ0NFO0VBQ0UsY0FBQTtBRENKO0FDQ0U7RUFDRSxXQUFBO0FEQ0o7QUNDRTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURDSjtBQ0NFO0VBQ0UsMEJBQUE7QURDSjtBQ0NFO0VBQ0UsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRENKO0FDQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBRENKO0FDRUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QURBTjtBQ0lJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FERk47QUNNQTtFQUNFLGtCQUFBO0FESEY7QUNJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO09BQUEsd0JBQUE7VUFBQSxxQkFBQTtBREZKO0FDS0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FERkY7QUNJSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FERk47QUNHTTtFQUNFLFdBQUE7QUREUjtBQ0dNO0VBQ0UscUJBQUE7QUREUjtBQ0VRO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0FEQVY7QUNPRTtFQUNFLGdDQUFBO0FESko7QUNNRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBREpKO0FDUUU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtBRExKO0FDT0U7RUFDRSxnQ0FBQTtBRExKO0FDT0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRExKO0FDT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtPQUFBLHdCQUFBO1VBQUEscUJBQUE7QURMSjtBQ09FO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QURMSjtBQ09FO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QURMSjtBQ1FBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURMRjtBQ01FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtPQUFBLHdCQUFBO1VBQUEscUJBQUE7QURKSjtBQ09BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QURKRjtBQ0tFO0VBQ0UsbUJBQUE7QURISjtBQ0tFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7QURISjtBQ01BO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FESEY7QUNLQTtFQUNFLGlCQUFBO0FERkY7QUNJQTtFQUNFLG9DQUFBO0FEREY7QUNHQTtFQUNFLGVBQUE7QURBRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvY29uc3VsdGFyLXNvbGljaXR1ZC9jb25zdWx0YXItc29saWNpdHVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRhYmxlLWhlYWRlci1ibHUtZ292LWNvIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzAwNDg4NDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFibGUtaGVhZGVyLWJsdS1nb3YtY28gdGhlYWQgdGgge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50YWJsZS1oZWFkZXItYmx1LWdvdi1jbyB0aGVhZCB0aCxcbi50YWJsZS1oZWFkZXItYmx1LWdvdi1jbyB0Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4udGFibGUtaGVhZGVyLWJsdS1nb3YtY28gdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAjYzJjMmMyIHNvbGlkIDFweDtcbn1cbi50YWJsZS1oZWFkZXItYmx1LWdvdi1jbyB0ZC5zdGF0ZS1zdWNjZXNzIHtcbiAgY29sb3I6ICMwNjkxNjk7XG59XG4udGFibGUtaGVhZGVyLWJsdS1nb3YtY28gdGQgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnRhYmxlLWhlYWRlci1ibHUtZ292LWNvIHRkIHAudGV4dC1zdWNjZXNzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6BoVwiO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRhYmxlLWhlYWRlci1ibHUtZ292LWNvIHRkIHUubGluazo6YmVmb3JlIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4udGFibGUtaGVhZGVyLWJsdS1nb3YtY28gdGQgcC50ZXh0LWRhbmdlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLugaFcIjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi50YWJsZS1oZWFkZXItYmx1LWdvdi1jbyB0ZC5zdGF0ZS1zdWNjZXNzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYuyBcIjtcbiAgY29sb3I6ICMwNjkxNjk7XG59XG4udGFibGUtaGVhZGVyLWJsdS1nb3YtY28gdGhlYWQgdGg6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDA0ODg0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMi4yNXJlbTtcbn1cbi50YWJsZS1oZWFkZXItYmx1LWdvdi1jbyB0aGVhZCB0aDpsYXN0LWNoaWxkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDA0ODg0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTIuMjVyZW07XG59XG5cbi5zZWUtZG93bmxvYWRzIHAge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uc2VlLWRvd25sb2FkcyBwOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29udGVudDogXCLuqLlcIiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzM3NzJmZiAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZjBmM2ZiO1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG59XG5cbi5jb250YWluZXItdGFibGUtY29uY2VwdC1nb3YtY28ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZWZiO1xufVxuLmNvbnRhaW5lci10YWJsZS1jb25jZXB0LWdvdi1jbyAudGFibGUtY29uY2VwdC1nb3YtY28gdHIge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDg4NDtcbn1cbi5jb250YWluZXItdGFibGUtY29uY2VwdC1nb3YtY28gLnRhYmxlLWNvbmNlcHQtZ292LWNvIHRyIHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWluZXItdGFibGUtY29uY2VwdC1nb3YtY28gLnRhYmxlLWNvbmNlcHQtZ292LWNvIHRyIHUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVyLXRhYmxlLWNvbmNlcHQtZ292LWNvIC50YWJsZS1jb25jZXB0LWdvdi1jbyB0ciB1OjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29udGVudDogXCLupahcIjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jYXJkLWdvdmNvIC50YWJsZSB7XG4gIGJvcmRlci1ib3R0b206ICNjMmMyYzIgc29saWQgMXB4O1xufVxuLmNhcmQtZ292Y28gLnRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzAwNDg4NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kLWRvd25sb2FkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG59XG4ubW9kLWRvd25sb2FkIC5jYXJkLWhlYWRlci5vcGVuIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDQ4ODQ7XG59XG4ubW9kLWRvd25sb2FkIC5zZWUtaW5mb3JtYXRpb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm1vZC1kb3dubG9hZCAuc2VlLWluZm9ybWF0aW9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTMwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdmNvIEljb25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbnRlbnQ6IFwi7qi5XCIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzNzcyZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2YwZjNmYjtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xufVxuLm1vZC1kb3dubG9hZCAuY2FyZC1oZWFkZXIgLnNlZS1pbmZvcm1hdGlvbi5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2QtZG93bmxvYWQgLmNhcmQtaGVhZGVyLm9wZW4gLnNlZS1pbmZvcm1hdGlvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcbn1cblxuLmJ0bi1kb3dubG9hZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uYnRuLWRvd25sb2FkOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTU0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdmNvIEljb25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IFwi7qWoXCIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzNzcyZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2YwZjNmYjtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xufVxuXG5saS5kb3dubG9hZC1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDQ4ODQ7XG59XG5saS5kb3dubG9hZC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxubGkuZG93bmxvYWQtaXRlbSAud3JhcHBlci1pdGVtLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5jYXJkLWhlYWRlci1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHJlbSBhdXRvO1xufVxuXG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4jY29sbGFwc2VEb3dubG9hZCAuY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWVmYiAhaW1wb3J0YW50O1xufVxuXG4ubGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIudGFibGUtaGVhZGVyLWJsdS1nb3YtY28ge1xyXG4gIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDQ4ODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHRoZWFkIHRoIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHRoZWFkIHRoLFxyXG4gIHRib2R5IHRkIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgfVxyXG4gIHRib2R5IHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206ICNjMmMyYzIgc29saWQgMXB4O1xyXG4gIH1cclxuICB0ZC5zdGF0ZS1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMDY5MTY5O1xyXG4gIH1cclxuICB0ZCBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICB0ZCBwLnRleHQtc3VjY2Vzczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlMDYxXCI7XHJcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIHRkIHUubGluazo6YmVmb3JlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0ZCBwLnRleHQtZGFuZ2VyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGUwNjFcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgdGQuc3RhdGUtc3VjY2Vzczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwi4pi7IFwiO1xyXG4gICAgY29sb3I6ICMwNjkxNjk7XHJcbiAgfVxyXG4gIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMi4yNXJlbTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA0ODg0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAtMi4yNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgdGhlYWQgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMi4yNXJlbTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA0ODg0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogLTIuMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zZWUtZG93bmxvYWRzIHAge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb250ZW50OiBcIu6ouVwiICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzM3NzJmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDMsIDI1MSk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXItdGFibGUtY29uY2VwdC1nb3YtY28ge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWVmYjtcclxuICAudGFibGUtY29uY2VwdC1nb3YtY28ge1xyXG4gICAgdHIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDg4NDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgdSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTY4XCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNhcmQtZ292Y28ge1xyXG4gIC50YWJsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjYzJjMmMyIHNvbGlkIDFweDtcclxuICB9XHJcbiAgLnRhYmxlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDQ4ODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbi5tb2QtZG93bmxvYWQge1xyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIub3BlbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNDg4NDtcclxuICB9XHJcbiAgLnNlZS1pbmZvcm1hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5zZWUtaW5mb3JtYXRpb246OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTVweDtcclxuICAgIHJpZ2h0OiAtMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb250ZW50OiBcIu6ouVwiICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzM3NzJmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDMsIDI1MSk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlciAuc2VlLWluZm9ybWF0aW9uLmNvbGxhcHNlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlci5vcGVuIC5zZWUtaW5mb3JtYXRpb246OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcclxuICB9XHJcbn1cclxuLmJ0bi1kb3dubG9hZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgcmlnaHQ6IC01NHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBjb250ZW50OiBcIlxcZTk2OFwiICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzM3NzJmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDMsIDI1MSk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcbmxpLmRvd25sb2FkLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDg4NDtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgLndyYXBwZXItaXRlbS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gIH1cclxufVxyXG4uY2FyZC1oZWFkZXItaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDByZW0gYXV0bztcclxufVxyXG4ubWwtYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuI2NvbGxhcHNlRG93bmxvYWQgLmNhcmQtYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWVmYiAhaW1wb3J0YW50O1xyXG59XHJcbi5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ConsultarSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarSolicitudComponent", function() { return ConsultarSolicitudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");
/* harmony import */ var _consultar_solicitud_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultar-solicitud.form */ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.form.ts");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let ConsultarSolicitudComponent = class ConsultarSolicitudComponent {
    constructor(router, formBuilder, modalService, solicitudProvider, service) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.solicitudProvider = solicitudProvider;
        this.service = service;
        this.items = [];
        this.invalidForm = false;
        this.consultarVerConcepto = false;
        this.verInformacionDescargar = false;
        this.mensajeConsultaSinResultados = false;
    }
    establecerAreaNotificaciones(value) {
        const s = document.getElementsByTagName('govco-area-servicios');
        s[0].setAttribute('step', value);
    }
    consultar() {
        if (this.seleccionSolucionForm.isValid()) {
            this.service.ConsultarSolicitudesXRango(this.seleccionForm.value.numero_documento, this.seleccionForm.value.numero_radicado).subscribe((response) => {
                if (response.result.solicitudSalidaObras.length > 0) {
                    this.items = [];
                    sessionStorage.clear();
                    for (const solicitud of response.result.solicitudSalidaObras) {
                        this.items.push(solicitud);
                        // this.almacenarDatosStorage(solicitud);
                    }
                    this.mensajeConsultaSinResultados = false;
                    this.establecerAreaNotificaciones('4');
                }
                else {
                    if (response.success === false) {
                        this.mensajeConsultaSinResultados = true;
                        this.titulo = "Lo sentimos";
                        this.currentMessage = 'El servicio no se encuentra disponible en este momento, te recomendamos:\n\n1. Intentarlo más tarde\n2. Recargar la página.';
                    }
                    else {
                        this.mensajeConsultaSinResultados = true;
                        this.titulo = "Solicitud no Encontrada";
                        this.currentMessage = 'El número de radicación y/o número de documento no fueron encontrados\n en nuestra Base de datos';
                    }
                }
            }, error => {
                console.error(error);
            });
        }
        else {
            this.invalidForm = true;
            return;
        }
    }
    verResultado() {
        this.consultarVerConcepto = !this.consultarVerConcepto;
    }
    limpiarCampos() {
        this.seleccionForm.reset();
        this.invalidForm = false;
        this.verInformacionDescargar = false;
        this.consultarVerConcepto = false;
        this.items = [];
    }
    verEditar(solicitud) {
        this.solicitudProvider.Solicitud = solicitud;
        this.router.navigate(['mincultura/autorizar-exportacion/ingresar-solicitud']);
    }
    verDescargar() {
        this.verInformacionDescargar = !this.verInformacionDescargar;
    }
    ngOnInit() {
        this.visualizacion = false;
        this.seleccionForm = this.formBuilder.group({
            numero_radicado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            numero_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.seleccionSolucionForm = new _consultar_solicitud_form__WEBPACK_IMPORTED_MODULE_4__["ConsultarSolicitudForm"]();
        this.seleccionForm = this.seleccionSolucionForm.getForm();
    }
    obtenerReporte(content, sosId) {
        const reporte = {
            SosId: sosId
        };
        this.service.obtenerReporte(reporte).subscribe((response) => {
            if (response.success === true) {
                const data = response.result.listaReportes[0];
                this.reporteRespuestaSolicitud = data.reportes[0];
                this.reportesObras = data.reportes.filter(x => x.nombreArchivo.indexOf("Respuesta Obra") !== -1);
                this.modalService.open(content, { size: 'xl', scrollable: true });
            }
        }, error => {
            console.error(error);
        });
    }
    visualizarArchivo(archivo) {
        this.visualizacion = true;
        this.archivoVisualizado = archivo;
        const linkSource = 'data:application/pdf;base64,' + archivo.archivo;
        this.src = linkSource;
    }
    descargarArchivo() {
        this.archivoVisualizado;
        const linkSource = 'data:application/pdf;base64,' + this.archivoVisualizado.archivo;
        const downloadLink = document.createElement('a');
        const fileName = this.archivoVisualizado.nombreArchivo;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }
    closeModal() {
        this.modalService.dismissAll();
    }
};
ConsultarSolicitudComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_5__["SolicitudProvider"] },
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_3__["AutorizarExportacionUtilService"] }
];
ConsultarSolicitudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar-solicitud',
        template: __webpack_require__(/*! raw-loader!./consultar-solicitud.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.html"),
        styles: [__webpack_require__(/*! ./consultar-solicitud.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.component.scss")]
    })
], ConsultarSolicitudComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.form.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/consultar-solicitud/consultar-solicitud.form.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ConsultarSolicitudForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarSolicitudForm", function() { return ConsultarSolicitudForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

class ConsultarSolicitudForm {
    constructor() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            numero_radicado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            numero_documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
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

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-card-red {\n  padding: 1rem !important;\n  text-align: justify;\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9nZW5lcmFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbmN1bHR1cmFcXGF1dG9yaXphci1leHBvcnRhY2lvblxcY29tcG9uZW50c1xcZ2VuZXJhbFxcZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9nZW5lcmFsL2dlbmVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvdmNvLWNhcmQtcmVkIHtcclxuICAgIHBhZGRpbmc6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59IiwiLmdvdmNvLWNhcmQtcmVkIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3JkZXItY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");



let GeneralComponent = class GeneralComponent {
    constructor(service) {
        this.service = service;
        this.service.asignarPaso(2);
        this.service.asignarpasoIngresar(2);
        this.service.asignarLlega(2);
    }
    ngOnInit() {
    }
    volver() {
        this.service.asignarPaso(2);
        this.service.asignarpasoIngresar(2);
        this.service.asignarFormularioInvalido(false);
    }
};
GeneralComponent.ctorParameters = () => [
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_2__["AutorizarExportacionUtilService"] }
];
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general',
        template: __webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.html"),
        styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/general/general.component.scss")]
    })
], GeneralComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n\n.validacion {\n  display: block;\n  color: #a80521 !important;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci1vYnJhcy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5jdWx0dXJhXFxhdXRvcml6YXItZXhwb3J0YWNpb25cXGNvbXBvbmVudHNcXGluZ3Jlc2FyLW9icmFzXFxpbmdyZXNhci1vYnJhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci1vYnJhcy9pbmdyZXNhci1vYnJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5jdWx0dXJhL2F1dG9yaXphci1leHBvcnRhY2lvbi9jb21wb25lbnRzL2luZ3Jlc2FyLW9icmFzL2luZ3Jlc2FyLW9icmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi52YWxpZGFjaW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNhODA1MjEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udmFsaWRhY2lvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2E4MDUyMSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: IngresarObrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarObrasComponent", function() { return IngresarObrasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");
/* harmony import */ var _shared_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/subirarchivo/subirarchivo.component */ "./src/app/shared/subirarchivo/subirarchivo.component.ts");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");







let IngresarObrasComponent = class IngresarObrasComponent {
    constructor(modalService, formBuilder, solicitudProvider, service) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.solicitudProvider = solicitudProvider;
        this.service = service;
        this.tipoArchivo = 'image/gif, image/jpeg, image/png';
        this.invalidForm = false;
        this.submitted = false;
        this.verAgregarObra = false;
        this.tieneAnexosObra = false;
        this.data = {
            grupo: [],
            subgrupo: [],
            categoria: [],
            autor: [],
            firmado: [],
            epoca: [],
            TiposDocumento: []
        };
        this.valoresConsulta = {
            grupo: '',
            subgrupo: '',
            categoria: '',
            autor: '',
            firmado: '',
            epoca: '',
            tiposDocumento: '',
        };
    }
    get f() { return this.registerForm.controls; }
    ngOnInit() {
        this.esNuevaObra = true;
        const obraConstante = {
            ficId: this.obra !== undefined ? this.obra.ficId : 0
        };
        this.obra = obraConstante;
        this.valor = '';
        this.fotografiasObra = [];
        this.crearFormulario();
        this.obtenerObras(this.solicitudProvider.Solicitud.sosId);
        this.obtenerTiposDocumentosIndentidad();
        this.obtenerClasificacionesTipologicasGrupo();
        this.obtenerTiposFirma();
        this.obtenerTiposEpocas();
    }
    crearFormulario() {
        this.registerForm = this.formBuilder.group({
            // datos ingresar obra
            grupo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subgrupo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            categoria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            autor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firmado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            anoElaboracion: [''],
            epoca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // dimensiones
            alto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ancho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            largo: [''],
            profundidad: [''],
            espesor: [''],
            cantidad: [''],
            observaciones: [''],
            // propietario
            tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numeroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            propietarioNombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formControlRecaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    obtenerObras(solicitudId) {
        const sosId = {
            SosId: solicitudId
        };
        this.service.obtenerObras(sosId).subscribe((data) => {
            if (data !== undefined && data.success === true) {
                const returnModelObtenerObras = data.result;
                this.listaObras = returnModelObtenerObras.obras;
            }
        }, (error) => {
        });
    }
    mapearObra(obraSeleccionada) {
        this.ngOnInit();
        this.obra = obraSeleccionada;
        this.verAgregarObra = true;
        this.esNuevaObra = false;
        this.registerForm.controls.titulo.setValue(obraSeleccionada.ficTitulo);
        this.registerForm.controls.autor.setValue(obraSeleccionada.ficAutor);
        this.registerForm.controls.anoElaboracion.setValue(obraSeleccionada.ficFechaElaboracionObra);
        this.registerForm.controls.propietarioNombre.setValue(obraSeleccionada.ficPropietario);
        this.registerForm.controls.numeroDocumento.setValue(obraSeleccionada.ficNroDocumentoIdentidad);
        this.registerForm.controls.observaciones.setValue(obraSeleccionada.ficObservaciones);
        this.registerForm.controls.alto.setValue(obraSeleccionada.ficAlto);
        this.registerForm.controls.ancho.setValue(obraSeleccionada.ficLargo);
        this.registerForm.controls.largo.setValue(obraSeleccionada.ficAncho);
        this.registerForm.controls.profundidad.setValue(obraSeleccionada.ficProfundidad);
        this.registerForm.controls.espesor.setValue(obraSeleccionada.ficEspesor);
        this.registerForm.controls.cantidad.setValue(obraSeleccionada.cantidad);
        this.fotografiasObra = [];
        this.service.ObtenerListaAnexos(Number(this.solicitudProvider.Solicitud.sosId)).subscribe(data => {
            if (data.result.listaAnexos) {
                for (const element of data.result.listaAnexos.filter(x => x.seccionId === 5)) {
                    const archivo = {
                        Description: element.descripcion,
                        FileContent: element.archivoBinario,
                        FileName: element.nombreArchivo.split('\\').pop().split('/').pop(),
                        Type: ''
                    };
                    this.fotografiasObra.push(archivo);
                }
            }
        });
    }
    // Obtiene los tipso de documentos permitidos
    obtenerTiposDocumentosIndentidad() {
        this.service.obtenerTiposDocumentosIndentidad().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.TiposDocumento = data.result;
                if (this.obra.docId !== undefined) {
                    this.valoresConsulta.tiposDocumento = this.obra.docId.toString();
                }
            }
        }, (error) => {
        });
    }
    obtenerClasificacionesTipologicasGrupo() {
        this.service.obtenerClasificacionesTipologicasGrupo().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                const returnModelClasificacionTipologica = data.result.clasificacionTipologicaGrupo;
                const listaTipos = returnModelClasificacionTipologica.map(function (tipo) {
                    const listaClasificacion = {
                        value: tipo.cltId.toString(),
                        text: tipo.cltNombre
                    };
                    return listaClasificacion;
                });
                this.data.grupo = listaTipos;
                if (this.obra.ctlPadreId !== undefined) {
                    this.valoresConsulta.grupo = this.obra.ctlPadreId.toString();
                }
            }
        }, (error) => {
        });
    }
    obtenerHijoClasificacionesTipologicas(control) {
        switch (control) {
            case 'subgrupo':
                this.valor = this.registerForm.value.grupo.value.toString();
                this.data.subgrupo = [];
                this.registerForm.controls.subgrupo.setValue('');
                this.data.categoria = [];
                this.registerForm.controls.categoria.setValue('');
                break;
            case 'categoria':
                this.valor = this.registerForm.value.subgrupo.value;
                this.data.categoria = [];
                this.valoresConsulta.categoria = '';
                break;
        }
        this.service.obtenerClasificacionesTipologicas(this.valor).subscribe((data) => {
            if (data !== undefined && data.success === true) {
                const returnModelClasificacionTipologica = data.result.clasificacionTipologica;
                const listaTipos = returnModelClasificacionTipologica.map(function (tipo) {
                    const listaClasificacion = {
                        value: tipo.cltId.toString(),
                        text: tipo.cltNombre
                    };
                    return listaClasificacion;
                });
                switch (control) {
                    case 'subgrupo':
                        this.data.subgrupo = listaTipos;
                        this.registerForm.controls.subgrupo.setValue('');
                        if (this.obra.ctlHijoId !== undefined) {
                            this.valoresConsulta.subgrupo = this.obra.ctlHijoId.toString();
                        }
                        break;
                    case 'categoria':
                        this.data.categoria = listaTipos;
                        this.registerForm.controls.categoria.setValue('');
                        if (this.obra.cltId !== undefined) {
                            this.valoresConsulta.categoria = this.obra.cltId.toString();
                        }
                        break;
                }
            }
        }, (error) => {
        });
    }
    obtenerTiposFirma() {
        this.service.obtenerTiposFirma().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                const returnTiposFirma = data.result.tiposGenericos;
                const listaTipos = returnTiposFirma.map(function (tipo) {
                    const listaClasificacion = {
                        value: tipo.id.toString(),
                        text: tipo.valor
                    };
                    return listaClasificacion;
                });
                this.data.firmado = listaTipos;
                if (this.obra.idFirmado !== undefined) {
                    this.valoresConsulta.firmado = this.obra.idFirmado.toString();
                }
            }
        }, (error) => {
        });
    }
    obtenerTiposEpocas() {
        this.service.obtenerTiposEpocas().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                const returnTiposEpocas = data.result.tiposEpocas;
                const listaTipos = returnTiposEpocas.map(function (tipo) {
                    const listaClasificacion = {
                        value: tipo.tepId.toString(),
                        text: tipo.tepNombre
                    };
                    return listaClasificacion;
                });
                this.data.epoca = listaTipos;
                if (this.obra.tepId !== undefined) {
                    this.valoresConsulta.epoca = this.obra.tepId.toString();
                }
            }
        }, (error) => {
        });
    }
    scrollControInvalido() {
        const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
        if (firstElementWithError) {
            firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    SeleccionarFotografiaObra() {
        const modalRef = this.modalService.open(_shared_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_5__["SubirarchivoComponent"], {
            size: 'lg',
            backdrop: 'static',
            keyboard: true
        });
        modalRef.componentInstance.type = this.tipoArchivo;
        modalRef.componentInstance.uploaded.subscribe((e) => {
            this.fotografiaPendienteObra = e;
            modalRef.close();
            this.agregarFotografiaObra();
        });
        modalRef.componentInstance.canceled.subscribe(($e) => {
            modalRef.close();
        });
    }
    agregarFotografiaObra() {
        if (this.fotografiaPendienteObra != null) {
            this.fotografiaPendienteObra.Description = 'Fotografía Obra';
            this.fotografiaPendienteObra.FileContent = this.fotografiaPendienteObra.FileContent.split(',')[1];
            this.fotografiasObra.push(this.fotografiaPendienteObra);
            this.fotografiaPendienteObra = null;
        }
    }
    eliminarFotografiaObra(index) {
        this.fotografiasObra.splice(index, 1);
    }
    open(content) {
        this.asignarVariables();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.scrollControInvalido();
            this.invalidForm = true;
            /* this.service.asignarLlega(9);
            this.service.asignarFormularioInvalido(true); */
            return;
        }
        this.modalService.open(content, { size: 'xl', scrollable: true });
    }
    asignarVariables() {
        this.submitted = true;
        this.service.asignarFormularioInvalido(false);
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    guardar(content) {
        this.tieneAnexosObra = false;
        if (this.registerForm.valid) {
            this.asignarVariablesEnviarMinisterio();
            if (this.obra.ficId === 0) {
                const obra = this.crearObraModel();
                this.tieneAnexosObra = obra.Anexos.length === 0;
                if (!this.tieneAnexosObra) {
                    this.service.crearObra(obra).subscribe((result) => {
                        if (result.success && result.result.operacionExitosa) {
                            if (result.result.success) {
                                // this.ficConsecutivoObra = result.result.ficConsecutivoObra;
                                this.ficConsecutivoObra = result.result.fichaTecnicaBienes.ficConsecutivoObra;
                                this.obtenerObras(this.solicitudProvider.Solicitud.sosId);
                                this.modalService.open(content, { size: 'xl', scrollable: true });
                                this.cancelar();
                            }
                        }
                    }, (error) => {
                        this.manejoErrorPeticion(error);
                    });
                }
                else {
                    const firstElementWithError = document.getElementById('lblAdjuntosObras');
                    if (firstElementWithError) {
                        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
            else {
                const obraActualizar = this.actualizarObraModel();
                this.tieneAnexosObra = obraActualizar.Anexos.length === 0;
                if (!this.tieneAnexosObra) {
                    this.service.actualizarObra(obraActualizar).subscribe((result) => {
                        if (result.success && result.result.operacionExitosa) {
                            if (result.result.success) {
                                this.ficConsecutivoObra = this.obra.ficConsecutivoObra;
                                this.obtenerObras(this.solicitudProvider.Solicitud.sosId);
                                this.modalService.open(content, { size: 'xl', scrollable: true });
                                this.cancelar();
                            }
                        }
                    }, (error) => {
                        this.manejoErrorPeticion(error);
                    });
                }
                else {
                    const firstElementWithError = document.getElementById('lblAdjuntosObras');
                    if (firstElementWithError) {
                        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
        }
        else {
            this.scrollControInvalido();
            this.invalidForm = true;
        }
    }
    enviarSolicitud(content) {
        const requestModelEnviarSolicitud = {
            SosId: this.solicitudProvider.Solicitud.sosId.toString()
        };
        this.service.enviarSolicitud(requestModelEnviarSolicitud).subscribe((result) => {
            if (result.success && result.result.operacionExitosa) {
                if (result.result.success) {
                    this.modalService.open(content, { size: 'xl', scrollable: true });
                }
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    crearObraModel() {
        const obraModel = {
            SosId: this.solicitudProvider.Solicitud.sosId,
            FicId: 0,
            DocId: Number(this.registerForm.value.tipoDocumento.value),
            FichaTitulo: this.registerForm.value.titulo,
            FichaAutor: this.registerForm.value.autor,
            FechaElaboracionObra: this.registerForm.value.anoElaboracion,
            FichaTecnica: '6',
            FichaPropietario: this.registerForm.value.propietarioNombre,
            FichaNroDocumentoIdentidad: this.registerForm.value.numeroDocumento,
            FichaObservaciones: this.registerForm.value.observaciones,
            FichaFoto: null,
            FichaAlto: this.registerForm.value.alto,
            FichaLargo: this.registerForm.value.ancho,
            FichaAncho: this.registerForm.value.largo,
            FichaProfundidad: this.registerForm.value.profundidad,
            FichaEspesor: this.registerForm.value.espesor,
            TepId: Number(this.registerForm.value.epoca.value),
            IdFirmado: Number(this.registerForm.value.firmado.value),
            CtlPadreId: Number(this.registerForm.value.grupo.value),
            CtlHijoId: Number(this.registerForm.value.subgrupo.value),
            CtlId: Number(this.registerForm.value.categoria.value),
            Cantidad: Number(this.registerForm.value.cantidad),
            Anexos: this.mappFotografias(this.fotografiasObra)
        };
        return obraModel;
    }
    actualizarObraModel() {
        const obraModel = {
            SosId: this.solicitudProvider.Solicitud.sosId,
            FicId: this.obra.ficId,
            DocId: Number(this.registerForm.value.tipoDocumento.value),
            FichaTitulo: this.registerForm.value.titulo,
            FichaAutor: this.registerForm.value.autor,
            FechaElaboracionObra: this.registerForm.value.anoElaboracion,
            FichaTecnica: '6',
            FichaPropietario: this.registerForm.value.propietarioNombre,
            FichaNroDocumentoIdentidad: this.registerForm.value.numeroDocumento,
            FichaObservaciones: this.registerForm.value.observaciones,
            FichaFoto: null,
            FichaAlto: this.registerForm.value.alto,
            FichaLargo: this.registerForm.value.ancho,
            FichaAncho: this.registerForm.value.largo,
            FichaProfundidad: this.registerForm.value.profundidad,
            FichaEspesor: this.registerForm.value.espesor,
            TepId: Number(this.registerForm.value.epoca.value),
            IdFirmado: Number(this.registerForm.value.firmado.value),
            CtlPadreId: Number(this.registerForm.value.grupo.value),
            CtlHijoId: Number(this.registerForm.value.subgrupo.value),
            CtlId: Number(this.registerForm.value.categoria.value),
            Cantidad: Number(this.registerForm.value.cantidad),
            Anexos: this.mappFotografias(this.fotografiasObra)
        };
        return obraModel;
    }
    mappFotografias(fotografiasSolicitadas) {
        const anexos = [];
        fotografiasSolicitadas.forEach(i => {
            const anexo = {
                NombreArchivo: i.FileName,
                ArchivoBinario: i.FileContent,
                Descripcion: i.Description === undefined ? '' : i.Description,
                AnexoId: 0,
                FicId: 0,
                NroDocumentoSolicitante: '',
                PrestamoId: 0,
                SeccionId: 0,
                SolicitudId: 0,
                TipoDocumentoSolicitante: ''
            };
            anexos.push(anexo);
        });
        return anexos;
    }
    asignarVariablesEnviarMinisterio() {
        this.service.asignarFormularioInvalido(false);
        if (this.service.paso === 3) {
            this.service.asignarPaso(4);
            this.service.asignarpasoIngresar(-1);
        }
        else if (this.service.paso === 4) {
            this.service.asignarPaso(5);
            this.service.asignarpasoIngresar(-1);
        }
        else {
            /*PROBAR QUE LLEGA DESDE PRUEBAS UNITARIAS*/
            this.service.asignarPaso(-1);
            // this.modalService.open(content, { size: "xl", scrollable: true });
        }
    }
    cancelar() {
        this.verAgregarObra = false;
    }
    agregarObra() {
        this.verAgregarObra = true;
        this.esNuevaObra = this.obra.ficId === 0 ? true : false;
    }
    manejoErrorPeticion(error) {
    }
    descargarArchivo(archivo) {
        const linkSource = 'data:application/pdf;base64,' + archivo.FileContent;
        const downloadLink = document.createElement('a');
        const fileName = archivo.FileName;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }
};
IngresarObrasComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_6__["SolicitudProvider"] },
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_4__["AutorizarExportacionUtilService"] }
];
IngresarObrasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingresar-obras',
        template: __webpack_require__(/*! raw-loader!./ingresar-obras.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.html"),
        styles: [__webpack_require__(/*! ./ingresar-obras.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-obras/ingresar-obras.component.scss")]
    })
], IngresarObrasComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".note-title {\n  margin-left: 0 !important;\n  font-size: 1rem;\n}\n\n.aplica-interes .title {\n  font-size: 0.84375rem;\n  font-weight: 700;\n}\n\n.aplica-interes .content {\n  font-size: 0.84375rem;\n}\n\n.validacion {\n  display: block;\n  color: #a80521 !important;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci1zb2xpY2l0dWQvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluY3VsdHVyYVxcYXV0b3JpemFyLWV4cG9ydGFjaW9uXFxjb21wb25lbnRzXFxpbmdyZXNhci1zb2xpY2l0dWRcXGluZ3Jlc2FyLXNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci1zb2xpY2l0dWQvaW5ncmVzYXItc29saWNpdHVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxxQkFBQTtBQ0NSOztBREVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvaW5ncmVzYXItc29saWNpdHVkL2luZ3Jlc2FyLXNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLXRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmFwbGljYS1pbnRlcmVzIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xyXG4gICAgfVxyXG59XHJcbi52YWxpZGFjaW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNhODA1MjEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iLCIubm90ZS10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFwbGljYS1pbnRlcmVzIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NDM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5hcGxpY2EtaW50ZXJlcyAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC44NDM3NXJlbTtcbn1cblxuLnZhbGlkYWNpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNhODA1MjEgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: IngresarSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarSolicitudComponent", function() { return IngresarSolicitudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");
/* harmony import */ var _shared_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/subirarchivo/subirarchivo.component */ "./src/app/shared/subirarchivo/subirarchivo.component.ts");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");








let IngresarSolicitudComponent = class IngresarSolicitudComponent {
    constructor(modalService, router, formBuilder, solicitudProvider, service) {
        this.modalService = modalService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.solicitudProvider = solicitudProvider;
        this.service = service;
        this.submitted = false;
        this.requiereIntermediarioValor = 'SI';
        this.captchaValido = true;
        this.invalidForm = false;
        this.mostrarObraEditar = false;
        this.chkMarcado = false;
        this.tieneAnexos = false;
        this.tieneAnexosIntermediario = false;
        this.data = {
            solicitantes: [{ text: 'Option 1', value: '1' }, { text: 'Option 2', value: '2' }],
            TiposDocumento: [],
            departamentos: [],
            minicipiosUbicacion: [],
            municipiosUbicacionIntermediario: [],
            municipiosDestino: [],
            municipiosIntermediario: [],
            paises: [],
            tiposSolicitante: [],
            finesExportacion: [],
            tiposPermanencia: []
        };
        this.valoresConsulta = {
            tipo_solicitante: '1',
            tipo_documento: '2',
            docIdIntermediario: '',
            municipioUbicacion: '',
            departamentoUbicacion: '',
            destinoZopId: '52',
            destinoFinExportacion: '',
            destinoTipoTiempoPermanencia: '1',
            paisExpedicionSolicitante: '52',
            paisExpedicionIntermediario: '52',
            departamentoUbicacionIntermediario: '',
            municipioUbicacionIntermediario: ''
        };
        this.requiereIntermediarioValor = 'NO';
        this.mostrarObraEditar = false;
        if (this.solicitudProvider.Solicitud !== undefined) {
            if (this.solicitudProvider.Solicitud.sosId !== 0) {
                this.mostrarObraEditar = true;
            }
        }
    }
    get f() { return this.registerForm.controls; }
    ngOnInit() {
        this.solicitud = {
            sosId: 0
        };
        this.adjuntosSolicitante = [];
        this.adjuntosIntermediario = [];
        this.requiereIntermediarioValor = 'SI';
        this.obtenerDepartamentos();
        this.obtenerPaises();
        this.obtenerTiposDocumentosIndentidad();
        this.ObtenerTiposPersonas();
        this.ObtenerFinesExportacion();
        this.ObtenerTiposPermanencia();
        this.registerForm = this.formBuilder.group({
            // datos solicitante
            tipoSolicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipoDocumentoSolicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numeroDocumentoSolicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numeroDocumentoSolicitante2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nombreRazonSocialSolicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            paisExpedicionSolicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descripcionAdjuntoSolicitante: [''],
            // datos ubicacion
            departamentoUbicacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            municipioUbicacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefonoUbicacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            direccionUbicacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            correoUbicacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            correoUbicacion2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            // datos intermediario
            requiereIntermediario: [''],
            tipoDocumentoIntermediario: [''],
            numeroDocumentoIntermediario: [''],
            numeroDocumentoIntermediario2: [''],
            nombreIntermediario: [''],
            paisExpedicionIntermediario: [''],
            ciudadIntermediario: [''],
            departamentoIntermediario: [''],
            municipioIntermediario: [''],
            departamentoUbicacionIntermediario: [''],
            municipioUbicacionIntermediario: [''],
            telefonoUbicacionIntermediario: [''],
            direccionUbicacionIntermediario: [''],
            correoUbicacionIntermediario: [''],
            correoUbicacionIntermediario2: [''],
            descripcionAdjuntoIntermediario: [''],
            // datos destino
            PaisDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ciudadDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            departamentoDestino: [''],
            municipioDestino: [''],
            direccionDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            finExportacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            entidadDestino: [''],
            telefonoDestino: [''],
            tiempoPermanencia: [''],
            tipoPermanencia: [''],
            autoriza: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue],
            formControlRecaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: this.multipleValidator([
                this.equalValueValidator('numeroDocumentoSolicitante', 'numeroDocumentoSolicitante2'),
                this.equalValueValidator('correoUbicacion', 'correoUbicacion2'),
                this.equalValueValidator('numeroDocumentoIntermediario', 'numeroDocumentoIntermediario2'),
                this.equalValueValidator('correoUbicacionIntermediario', 'correoUbicacionIntermediario2'),
            ])
        });
        const tipoDocumentoIntermediario = this.registerForm.get('tipoDocumentoIntermediario');
        const numeroDocumentoIntermediario = this.registerForm.get('numeroDocumentoIntermediario');
        const numeroDocumentoIntermediario2 = this.registerForm.get('numeroDocumentoIntermediario2');
        const nombreIntermediario = this.registerForm.get('nombreIntermediario');
        const paisExpedicionIntermediario = this.registerForm.get('paisExpedicionIntermediario');
        const ciudadIntermediario = this.registerForm.get('ciudadIntermediario');
        const departamentoIntermediario = this.registerForm.get('departamentoIntermediario');
        const municipioIntermediario = this.registerForm.get('municipioIntermediario');
        const departamentoUbicacionIntermediario = this.registerForm.get('departamentoUbicacionIntermediario');
        const municipioUbicacionIntermediario = this.registerForm.get('municipioUbicacionIntermediario');
        const telefonoUbicacionIntermediario = this.registerForm.get('telefonoUbicacionIntermediario');
        const direccionUbicacionIntermediario = this.registerForm.get('direccionUbicacionIntermediario');
        const correoUbicacionIntermediario = this.registerForm.get('correoUbicacionIntermediario');
        const correoUbicacionIntermediario2 = this.registerForm.get('correoUbicacionIntermediario2');
        const ciudadDestino = this.registerForm.get('ciudadDestino');
        const departamentoDestino = this.registerForm.get('departamentoDestino');
        const municipioDestino = this.registerForm.get('municipioDestino');
        this.registerForm.get('requiereIntermediario').valueChanges
            .subscribe(requiereIntermediario => {
            if (requiereIntermediario === 'SI') {
                tipoDocumentoIntermediario.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                numeroDocumentoIntermediario.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                numeroDocumentoIntermediario2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                correoUbicacionIntermediario.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
                correoUbicacionIntermediario2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
            }
            else {
                tipoDocumentoIntermediario.setValidators(null);
                numeroDocumentoIntermediario.setValidators(null);
                numeroDocumentoIntermediario2.setValidators(null);
                nombreIntermediario.setValidators(null);
                paisExpedicionIntermediario.setValidators(null);
                ciudadIntermediario.setValidators(null);
                departamentoIntermediario.setValidators(null);
                municipioIntermediario.setValidators(null);
                departamentoUbicacionIntermediario.setValidators(null);
                municipioUbicacionIntermediario.setValidators(null);
                telefonoUbicacionIntermediario.setValidators(null);
                direccionUbicacionIntermediario.setValidators(null);
                correoUbicacionIntermediario.setValidators(null);
                correoUbicacionIntermediario2.setValidators(null);
            }
            tipoDocumentoIntermediario.updateValueAndValidity();
            numeroDocumentoIntermediario.updateValueAndValidity();
            numeroDocumentoIntermediario2.updateValueAndValidity();
            nombreIntermediario.updateValueAndValidity();
            paisExpedicionIntermediario.updateValueAndValidity();
            ciudadIntermediario.updateValueAndValidity();
            departamentoIntermediario.updateValueAndValidity();
            municipioIntermediario.updateValueAndValidity();
            departamentoUbicacionIntermediario.updateValueAndValidity();
            municipioUbicacionIntermediario.updateValueAndValidity();
            telefonoUbicacionIntermediario.updateValueAndValidity();
            direccionUbicacionIntermediario.updateValueAndValidity();
            correoUbicacionIntermediario.updateValueAndValidity();
            correoUbicacionIntermediario2.updateValueAndValidity();
        });
        this.registerForm.get('PaisDestino').valueChanges
            .subscribe(pais => {
            if (pais.text === 'COLOMBIA') {
                ciudadDestino.setValidators(null);
                departamentoDestino.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                municipioDestino.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
            else {
                ciudadDestino.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                departamentoDestino.setValidators(null);
                municipioDestino.setValidators(null);
            }
            departamentoDestino.updateValueAndValidity();
            municipioDestino.updateValueAndValidity();
            ciudadDestino.updateValueAndValidity();
        });
        this.cargarDatosStorage();
    }
    equalValueValidator(targetKey, toMatchKey) {
        return (group) => {
            const target = group.controls[targetKey];
            const toMatch = group.controls[toMatchKey];
            if (target.touched && toMatch.touched) {
                const isMatch = target.value === toMatch.value;
                // set equal value error on dirty controls
                if (!isMatch && target.valid && toMatch.valid) {
                    toMatch.setErrors({ equalValue: targetKey });
                    const message = targetKey + ' != ' + toMatchKey;
                    return { equalValue: message };
                }
                if (isMatch && toMatch.hasError('equalValue')) {
                    toMatch.setErrors(null);
                }
            }
            return null;
        };
    }
    multipleValidator(validations) {
        return (group) => {
            validations.forEach(validation => validation(group));
            return null;
        };
    }
    scrollControInvalido() {
        const firstElementWithError = document.querySelector('.ng-invalid[formControlName]');
        if (firstElementWithError) {
            firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (firstElementWithError !== undefined) {
            if (firstElementWithError.id !== undefined) {
                switch (firstElementWithError.id) {
                    case 'checkbox_1':
                        this.chkMarcado = true;
                        break;
                    case 'anexosSolicitante':
                        // this.tieneAnexos = true;
                        break;
                }
            }
        }
    }
    open(content) {
        if (this.registerForm.valid) {
            this.modalService.open(content, { size: 'xl', scrollable: true });
        }
        else {
            this.scrollControInvalido();
            this.invalidForm = true;
        }
    }
    mappAnexo(adjuntosSolicitante) {
        const anexos = [];
        adjuntosSolicitante.forEach(i => {
            const anexo = {
                NombreArchivo: i.FileName,
                ArchivoBinario: i.FileContent,
                Descripcion: i.Description,
                AnexoId: 0,
                FicId: 0,
                NroDocumentoSolicitante: '',
                PrestamoId: 0,
                SeccionId: 0,
                SolicitudId: 0,
                TipoDocumentoSolicitante: ''
            };
            anexos.push(anexo);
        });
        return anexos;
    }
    asignarVariables() {
        this.submitted = true;
        this.service.asignarFormularioInvalido(false);
    }
    closeModal() {
        this.service.asignarFormularioInvalido(false);
        this.modalService.dismissAll();
    }
    mapearCrearSolicitudModel() {
        const solicitud = {
            SosTipoPersonaId: parseInt(this.registerForm.value.tipoSolicitante.value, 10),
            DocIdSolicitante: parseInt(this.registerForm.value.tipoDocumentoSolicitante.value, 10),
            SosNroDocumentoSolicitante: this.registerForm.value.numeroDocumentoSolicitante,
            ZopId: parseInt(this.registerForm.value.paisExpedicionSolicitante.value, 10),
            SosZonPadreId: this.registerForm.value.departamentoUbicacion.value,
            SosZonId: this.registerForm.value.municipioUbicacion.value,
            Ciudad: this.registerForm.value.municipioUbicacion.text,
            SosTelefonoSolicitante: this.registerForm.value.telefonoUbicacion,
            SosDireccionSolicitante: this.registerForm.value.direccionUbicacion,
            SosCorreoSolicitante: this.registerForm.value.correoUbicacion,
            Requiereintermediario: this.registerForm.value.requiereIntermediario === 'SI' ? true : false,
            DocIdintermediario: this.registerForm.value.tipoDocumentoIntermediario
                ? Number(this.registerForm.value.tipoDocumentoIntermediario.value) : null,
            SosNroDocumentointermediario: this.registerForm.value.numeroDocumentoIntermediario,
            SosNombreintermediario: this.registerForm.value.nombreIntermediario,
            IntZopId: this.registerForm.value.paisExpedicionIntermediario.value !== undefined
                ? parseInt(this.registerForm.value.paisExpedicionIntermediario.value, 10) : 0,
            IntCiudad: this.registerForm.value.ciudadIntermediario,
            IntUbicacionCiudad: this.registerForm.value.municipioUbicacionIntermediario.value,
            SosTelefonointermediario: this.registerForm.value.telefonoUbicacionIntermediario,
            SosDireccionintermediario: this.registerForm.value.direccionUbicacionIntermediario,
            IntUbicacionEmail: this.registerForm.value.correoUbicacionIntermediario,
            DestinoZopId: parseInt(this.registerForm.value.PaisDestino.value, 10),
            DestinoCiudad: this.registerForm.value.ciudadDestino !== ''
                ? this.registerForm.value.ciudadDestino : this.registerForm.value.municipioDestino.text,
            DestinoDireccion: this.registerForm.value.direccionDestino,
            TmsId: parseInt(this.registerForm.value.finExportacion.value, 10),
            DestinoEntidad: this.registerForm.value.entidadDestino,
            DestinoTelefono: this.registerForm.value.telefonoDestino,
            DestinoTiempoPermanencia: this.registerForm.value.tiempoPermanencia ? parseInt(this.registerForm.value.tiempoPermanencia, 10) : null,
            DestinoTipoTiempoPermanencia: this.registerForm.value.tipoPermanencia
                ? parseInt(this.registerForm.value.tipoPermanencia.value, 10) : null,
            AceptaHabeasdata: this.registerForm.value.autoriza,
            SosNombreSolicitante: this.registerForm.value.nombreRazonSocialSolicitante,
            // Anexos
            AnexoSolicitante: this.mappAnexo(this.adjuntosSolicitante),
            Anexointermediario: this.mappAnexo(this.adjuntosIntermediario),
            ReitegroObservaciones: '""',
            SosNombreRepresentante: this.registerForm.value.nombreRazonSocialSolicitante,
            ProrrogaMotivo: '',
            ProrrogaFechaRegreso: null,
            IntUbicacionZopId: Number(this.registerForm.value.departamentoUbicacionIntermediario.value),
            ZonId: '01001',
            SosCantidad: 1,
            SosLugarExpedicion: '01001',
            ZopNombre: this.registerForm.value.paisExpedicionSolicitante.text,
        };
        return solicitud;
    }
    mapearActualizarSolicitud(solicitud) {
        const actualizarSolicitud = {
            SosId: this.solicitud.sosId.toString(),
            Ciudad: solicitud.Ciudad,
            DocIdSolicitante: solicitud.DocIdSolicitante,
            ZopId: solicitud.ZopId,
            ZonId: solicitud.ZonId,
            SosNombreSolicitante: solicitud.SosNombreSolicitante,
            SosNroDocumentoSolicitante: solicitud.SosNroDocumentoSolicitante,
            SosNroFoliosAnexos: 0,
            SosFechaParaDarConcepto: '',
            SosCantidad: solicitud.SosCantidad,
            TmsId: solicitud.TmsId,
            SosLugarExpedicion: solicitud.SosLugarExpedicion,
            SosDireccionSolicitante: solicitud.SosDireccionSolicitante,
            SosTelefonoSolicitante: solicitud.SosTelefonoSolicitante,
            SosCorreoSolicitante: solicitud.SosCorreoSolicitante,
            SosNombreintermediario: solicitud.SosNombreintermediario,
            DocIdintermediario: solicitud.DocIdintermediario !== null ? solicitud.DocIdintermediario : 0,
            SosNroDocumentointermediario: solicitud.SosNroDocumentointermediario,
            SosDireccionintermediario: solicitud.SosDireccionintermediario,
            SosTelefonointermediario: solicitud.SosTelefonointermediario,
            SosSintointermediario: '',
            SosSintoAnexos: '',
            SosSintoProrroga: '',
            ZopNombre: solicitud.ZopNombre,
            SosTipoPersonaId: solicitud.SosTipoPersonaId,
            SosZonPadreId: solicitud.SosZonPadreId,
            SosZonId: solicitud.SosZonId,
            IntZopId: solicitud.IntZopId,
            IntCiudad: solicitud.IntCiudad,
            IntUbicacionZopId: solicitud.IntUbicacionZopId,
            IntUbicacionCiudad: solicitud.IntUbicacionCiudad,
            IntUbicacionEmail: solicitud.IntUbicacionEmail,
            ProrrogaFechaRegreso: solicitud.ProrrogaFechaRegreso,
            ProrrogaMotivo: solicitud.ProrrogaMotivo,
            DestinoZopId: solicitud.DestinoZopId,
            DestinoCiudad: solicitud.DestinoCiudad,
            DestinoDireccion: solicitud.DestinoDireccion,
            DestinoFintExportacion: '',
            DestinoEntidad: solicitud.DestinoEntidad,
            DestinoTelefono: solicitud.DestinoTelefono,
            DestinoTiempoPermanencia: solicitud.DestinoTiempoPermanencia,
            DestinoTipoTiempoPermanencia: solicitud.DestinoTipoTiempoPermanencia,
            ReitegroObservaciones: solicitud.ReitegroObservaciones,
            SosNombreRepresentante: solicitud.SosNombreRepresentante,
            AceptaHabeasdata: solicitud.AceptaHabeasdata,
            Requiereintermediario: solicitud.Requiereintermediario,
            // AnexoSolicitante: solicitud.AnexoSolicitante
            // Anexos
            AnexoSolicitante: this.mappAnexo(this.adjuntosSolicitante),
            Anexointermediario: this.mappAnexo(this.adjuntosIntermediario)
        };
        return actualizarSolicitud;
    }
    guardar(content) {
        this.chkMarcado = false;
        this.tieneAnexos = false;
        this.tieneAnexosIntermediario = false;
        if (this.registerForm.valid) {
            const solicitud = this.mapearCrearSolicitudModel();
            this.tieneAnexos = solicitud.AnexoSolicitante.length === 0;
            if (solicitud.Requiereintermediario) {
                this.tieneAnexosIntermediario = solicitud.Anexointermediario.length === 0;
            }
            if (!this.tieneAnexos) {
                if (!this.tieneAnexosIntermediario) {
                    if (this.solicitud.sosId === 0) {
                        this.service.registrarSolicitud(solicitud).subscribe((result) => {
                            if (result.success && result.result.operacionExitosa) {
                                if (result.result.success) {
                                    this.service.asignarPaso(3);
                                    this.service.asignarpasoIngresar(2);
                                    this.sosConsecutivoId = result.result.solicitudSalidaObra.sosConsecutivoIndice;
                                    this.solicitud.sosId = result.result.solicitudSalidaObra.sosId;
                                    this.solicitudProvider.Solicitud.sosId = this.solicitud.sosId;
                                    this.sosFechaRadiacion = result.result.solicitudSalidaObra.sosFechaRadicacion;
                                    this.estado = result.result.solicitudSalidaObra.estado;
                                    this.modalService.open(content, { size: 'xl', scrollable: true });
                                }
                            }
                        }, (error) => {
                            this.manejoErrorPeticion(error);
                        });
                    }
                    else {
                        const solicitudActualizar = this.mapearActualizarSolicitud(solicitud);
                        this.service.actualizarSolicitud(solicitudActualizar).subscribe((result) => {
                            if (result.success && result.result.operacionExitosa) {
                                if (result.result.success) {
                                    this.service.asignarPaso(3);
                                    this.service.asignarpasoIngresar(2);
                                    this.sosConsecutivoId = this.solicitudProvider.Solicitud.sosConsecutivo.trim();
                                    this.solicitud.sosId = result.result.solicitudSalidaObra.sosId;
                                    this.service.ConsultarSolicitudxRadicado(this.sosConsecutivoId).subscribe((consulta) => {
                                        this.sosFechaRadiacion = new Date(this.solicitudProvider.Solicitud.sosFechaRadicacion);
                                        this.estado = this.solicitudProvider.Solicitud.estado;
                                        this.modalService.open(content, { size: 'xl', scrollable: true });
                                    });
                                }
                            }
                        }, (error) => {
                            this.manejoErrorPeticion(error);
                        });
                    }
                }
                else {
                    const firstElementWithError = document.getElementById('lblAdjuntosIntermediario');
                    if (firstElementWithError) {
                        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
            else {
                const firstElementWithError = document.getElementById('lblAdjuntosSolicitante');
                if (firstElementWithError) {
                    firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
        else {
            this.scrollControInvalido();
            this.invalidForm = true;
        }
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    volver() {
        this.router.navigate(['/mincultura/autorizar-exportacion/']);
        this.service.asignarPaso(5);
    }
    colombiaSeleccionado() {
        const paisSeleccionado = this.registerForm.value.PaisDestino.text;
        if (paisSeleccionado === 'COLOMBIA') {
            return true;
        }
        else {
            return false;
        }
    }
    colombiaSeleccionadoExpedicionIntermediario() {
        const paisSeleccionado = this.registerForm.value.paisExpedicionIntermediario.text;
        if (paisSeleccionado === 'COLOMBIA') {
            return true;
        }
        else {
            return false;
        }
    }
    validarCaptcha() {
        if (this.registerForm.value.formControlRecaptcha != null) {
            this.captchaValido = true;
        }
        else {
            this.captchaValido = false;
        }
    }
    obtenerDepartamentos() {
        this.service.obtenerDepartamentos().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.departamentos = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    obtenerTiposDocumentosIndentidad() {
        this.service.obtenerTiposDocumentosIndentidad().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.TiposDocumento = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    obtenerPaises() {
        this.service.ObtenerPaises().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.paises = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    ObtenerTiposPersonas() {
        this.service.ObtenerTiposBasPersonas().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.tiposSolicitante = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    ObtenerFinesExportacion() {
        this.service.ObtenerFinesExportacion().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.finesExportacion = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    ObtenerTiposPermanencia() {
        this.service.ObtenerTiposPermanencia().subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.tiposPermanencia = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    actualizarDepartamentoUbicacion() {
        // console.log(this.registerForm.value.departamentoUbicacion.value);
        this.data.municipiosUbicacion = [];
        this.service.obtenerMunicipiosPorDepartamentoId(this.registerForm.value.departamentoUbicacion.value)
            .subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.municipiosUbicacion = data.result;
                if (this.solicitud.zonId !== null && this.solicitud.zonId !== undefined) {
                    this.valoresConsulta.municipioUbicacion = this.solicitud.zonId;
                }
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    actualizarDepartamentoUbicacionIntermediario() {
        // console.log(this.registerForm.value.departamentoUbicacionIntermediario.value);
        this.data.municipiosUbicacionIntermediario = [];
        this.service.obtenerMunicipiosPorDepartamentoId(this.registerForm.value.departamentoUbicacionIntermediario.value)
            .subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.municipiosUbicacionIntermediario = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    actualizarDepartamentoDestino() {
        // console.log(this.registerForm.value.departamentoDestino.value);
        this.data.municipiosDestino = [];
        this.service.obtenerMunicipiosPorDepartamentoId(this.registerForm.value.departamentoDestino.value)
            .subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.municipiosDestino = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    actualizarDepartamentoIntermediario() {
        // console.log(this.registerForm.value.departamentoIntermediario.value);
        this.data.municipiosIntermediario = [];
        this.service.obtenerMunicipiosPorDepartamentoId(this.registerForm.value.departamentoIntermediario.value)
            .subscribe((data) => {
            if (data !== undefined && data.success === true) {
                this.data.municipiosIntermediario = data.result;
            }
            else {
                this.manejoErrorInterno(data);
            }
        }, (error) => {
            this.manejoErrorPeticion(error);
        });
    }
    agregar() {
    }
    eliminar() {
    }
    manejoErrorPeticion(error) {
    }
    manejoErrorInterno(data) {
    }
    SeleccionarArchivoSolicitante() {
        const modalRef = this.modalService.open(_shared_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_6__["SubirarchivoComponent"], {
            size: 'lg',
            backdrop: 'static',
            keyboard: true
        });
        modalRef.componentInstance.description = true;
        modalRef.componentInstance.uploaded.subscribe((e) => {
            this.adjuntoPendienteSolicitante = e;
            this.agregarArchivoSolicitante();
            modalRef.close();
        });
        modalRef.componentInstance.canceled.subscribe(($e) => {
            modalRef.close();
        });
    }
    SeleccionarArchivoIntermediario() {
        const modalRef = this.modalService.open(_shared_subirarchivo_subirarchivo_component__WEBPACK_IMPORTED_MODULE_6__["SubirarchivoComponent"], {
            size: 'lg',
            backdrop: 'static',
            keyboard: true
        });
        modalRef.componentInstance.description = true;
        modalRef.componentInstance.uploaded.subscribe((e) => {
            this.adjuntoPendienteIntermediario = e;
            this.agregarArchivoIntermediario();
            modalRef.close();
        });
        modalRef.componentInstance.canceled.subscribe(($e) => {
            modalRef.close();
        });
    }
    agregarArchivoSolicitante() {
        if (this.adjuntoPendienteSolicitante != null) {
            this.adjuntoPendienteSolicitante.Description = this.adjuntoPendienteSolicitante.Description;
            this.adjuntoPendienteSolicitante.FileContent = this.adjuntoPendienteSolicitante.FileContent.split(',')[1];
            this.adjuntosSolicitante.push(this.adjuntoPendienteSolicitante);
            this.adjuntoPendienteSolicitante = null;
        }
        else {
            this.invalidForm = true;
            return;
        }
    }
    eliminarArchivoSolicitante(index) {
        this.adjuntosSolicitante.splice(index, 1);
    }
    agregarArchivoIntermediario() {
        if (this.adjuntoPendienteIntermediario != null) {
            this.adjuntoPendienteIntermediario.Description = this.adjuntoPendienteIntermediario.Description;
            this.adjuntoPendienteIntermediario.FileContent = this.adjuntoPendienteIntermediario.FileContent.split(',')[1];
            this.adjuntosIntermediario.push(this.adjuntoPendienteIntermediario);
            this.adjuntoPendienteIntermediario = null;
        }
    }
    eliminarArchivoIntermediario(index) {
        this.adjuntosIntermediario.splice(index, 1);
    }
    cargarDatosStorage() {
        if (this.solicitudProvider.Solicitud.sosId !== 0) {
            this.solicitud = this.solicitudProvider.Solicitud;
            this.valoresConsulta.tipo_documento = this.solicitud.basTiposDocumentosIdentidad !== null
                ? this.solicitud.basTiposDocumentosIdentidad : '2';
            this.registerForm.controls.numeroDocumentoSolicitante.setValue(this.solicitud.sosNroDocumentoSolicitante);
            this.registerForm.controls.numeroDocumentoSolicitante2.setValue(this.solicitud.sosNroDocumentoSolicitante);
            this.registerForm.controls.nombreRazonSocialSolicitante.setValue(this.solicitud.sosNombreSolicitante);
            this.valoresConsulta.paisExpedicionSolicitante = this.solicitud.zopId !== null ? this.solicitud.zopId.toString() : '';
            // console.log(this.data.paises);
            this.registerForm.controls.telefonoUbicacion.setValue(this.solicitud.sosTelefonoSolicitante);
            this.registerForm.controls.direccionUbicacion.setValue(this.solicitud.sosDireccionSolicitante);
            this.registerForm.controls.correoUbicacion.setValue(this.solicitud.sosCorreoSolicitante);
            this.registerForm.controls.correoUbicacion2.setValue(this.solicitud.sosCorreoSolicitante);
            this.valoresConsulta.docIdIntermediario = this.solicitud.docIdIntermediario !== null
                ? this.solicitud.docIdIntermediario.toString() : '';
            this.registerForm.controls.numeroDocumentoIntermediario.setValue(this.solicitud.sosNroDocumentoIntermediario);
            this.registerForm.controls.numeroDocumentoIntermediario2.setValue(this.solicitud.sosNroDocumentoIntermediario);
            this.registerForm.controls.nombreIntermediario.setValue(this.solicitud.sosNombreIntermediario);
            this.service.ConsultarSolicitudxID(Number(this.solicitud.sosId)).subscribe(data => {
                if (data.success) {
                    const sosZonPadreId = data.result.solicitud.sosZonPadreId;
                    const intZopId = data.result.solicitud.intZopId;
                    const intUbicacionZopId = data.result.solicitud.intUbicacionZopId;
                    const intUbicacionCiudad = data.result.solicitud.intUbicacionCiudad;
                    const destinoZopId = data.result.solicitud.destinoZopId;
                    const destinoTipoTiempoPermanencia = data.result.solicitud.destinoTipoTiempoPermanencia;
                    const tmsId = data.result.solicitud.tmsId;
                    const sosTipoPersonaId = data.result.solicitud.sosTipoPersonaId;
                    this.valoresConsulta.departamentoUbicacion = sosZonPadreId !== null ? sosZonPadreId.toString().padStart(2, '0') : '';
                    this.solicitud.zonId = data.result.solicitud.sosZonId.toString();
                    this.valoresConsulta.tipo_solicitante = data.result.solicitud.sosTipoPersonaId.toString().trim();
                    this.registerForm.controls.requiereIntermediario.setValue(data.result.solicitud.requiereintermediario === true ? 'SI' : 'NO');
                    this.valoresConsulta.paisExpedicionIntermediario = intZopId !== null ? intZopId.toString() : '';
                    this.registerForm.controls.ciudadIntermediario.setValue(data.result.intCiudad);
                    this.valoresConsulta.departamentoUbicacionIntermediario = intUbicacionZopId !== null
                        ? intUbicacionZopId.toString().padStart(2, '0') : '';
                    this.valoresConsulta.municipioUbicacionIntermediario = intUbicacionCiudad !== null ? intUbicacionCiudad.toString() : '';
                    this.registerForm.controls.telefonoUbicacionIntermediario.setValue(data.result.solicitud.sosTelefonoIntermediario);
                    this.registerForm.controls.ciudadIntermediario.setValue(data.result.solicitud.sosDireccionIntermediario);
                    this.registerForm.controls.correoUbicacionIntermediario.setValue(data.result.solicitud.intUbicacionEmail);
                    this.registerForm.controls.correoUbicacionIntermediario2.setValue(data.result.solicitud.intUbicacionEmail);
                    this.valoresConsulta.destinoZopId = destinoZopId !== null ? destinoZopId.toString() : '';
                    this.valoresConsulta.destinoFinExportacion = tmsId !== null ? tmsId.toString() : '';
                    this.valoresConsulta.municipio = intZopId !== null ? intZopId.toString() : '';
                    this.valoresConsulta.DestinoTipoTiempoPermanencia = destinoTipoTiempoPermanencia !== null
                        ? destinoTipoTiempoPermanencia.toString() : '';
                    this.registerForm.controls.ciudadDestino.setValue(data.result.solicitud.destinoCiudad);
                    this.registerForm.controls.direccionDestino.setValue(data.result.solicitud.destinoDireccion);
                    this.registerForm.controls.entidadDestino.setValue(data.result.solicitud.destinoEntidad);
                    this.registerForm.controls.telefonoDestino.setValue(data.result.solicitud.destinoTelefono);
                    this.registerForm.controls.tiempoPermanencia.setValue(data.result.solicitud.destinoTiempoPermanencia);
                    this.actualizarDepartamentoUbicacion();
                }
            });
            this.service.ObtenerListaAnexos(Number(this.solicitud.sosId)).subscribe(data => {
                if (data.result.listaAnexos) {
                    for (const element of data.result.listaAnexos) {
                        const archivo = {
                            Description: element.descripcion,
                            FileContent: element.archivoBinario,
                            FileName: element.nombreArchivo.split('\\').pop().split('/').pop(),
                            Type: ''
                        };
                        if (element.seccionId === 1) {
                            this.adjuntosSolicitante.push(archivo);
                        }
                        else {
                            if (element.seccionId === 2) {
                                this.adjuntosIntermediario.push(archivo);
                            }
                        }
                    }
                }
            });
        }
        else {
            this.solicitudProvider.Solicitud = this.solicitud;
        }
    }
    obtenerSolicitante(event) {
        // console.log(event.target.value);
        if (this.registerForm.value.numeroDocumentoSolicitante !== this.registerForm.value.numeroDocumentoSolicitante2) {
            this.invalidForm = true;
            return;
        }
        if (this.registerForm.controls.numeroDocumentoSolicitante2.dirty) {
            this.service.ConsultarSolicitudxNumeroDoc(event.target.value).subscribe(dataSesion => {
                // console.log(dataSesion);
                const solicitante = dataSesion.result.solicitudSolicitantesSalidaObras;
                if (solicitante.length > 0) {
                    this.registerForm.controls.nombreRazonSocialSolicitante.setValue(solicitante[0].sosNombreSolicitante);
                    this.valoresConsulta.paisExpedicionSolicitante = solicitante[0].zopId.toString();
                    this.registerForm.controls.correoUbicacion2.setValue(solicitante[0].sosCorreoSolicitante);
                    this.registerForm.controls.correoUbicacion.setValue(solicitante[0].sosCorreoSolicitante);
                    this.registerForm.controls.telefonoUbicacion.setValue(solicitante[0].sosTelefonoSolicitante);
                    this.registerForm.controls.direccionUbicacion.setValue(solicitante[0].sosDireccionSolicitante);
                    this.service.ObtenerListaAnexos(Number(solicitante[0].sosId)).subscribe(data => {
                        if (data.result.listaAnexos) {
                            for (const element of data.result.listaAnexos.filter(x => x.seccionId === 1)) {
                                const archivo = {
                                    Description: element.descripcion,
                                    FileContent: element.archivoBinario,
                                    FileName: element.nombreArchivo.split('\\').pop().split('/').pop(),
                                    Type: ''
                                };
                                this.adjuntosSolicitante.push(archivo);
                            }
                        }
                    });
                }
            });
        }
    }
    obtenerIntermediario(event) {
        // console.log(event.target.value);
        if (this.registerForm.value.numeroDocumentoIntermediario !== this.registerForm.value.numeroDocumentoIntermediario2) {
            this.invalidForm = true;
            return;
        }
        if (this.registerForm.controls.numeroDocumentoIntermediario2.dirty) {
            this.service.ConsultarSolicitudxNumeroDoc(event.target.value).subscribe(dataSesion => {
                // console.log(dataSesion);
                const solicitante = dataSesion.result.solicitudSolicitantesSalidaObras;
                if (solicitante.length > 0) {
                    this.registerForm.controls.nombreIntermediario.setValue(solicitante[0].sosNombreSolicitante);
                    this.valoresConsulta.paisExpedicionIntermediario = solicitante[0].zopId.toString();
                    this.registerForm.controls.correoUbicacionIntermediario.setValue(solicitante[0].sosCorreoSolicitante);
                    this.registerForm.controls.correoUbicacionIntermediario2.setValue(solicitante[0].sosCorreoSolicitante);
                    this.registerForm.controls.telefonoUbicacionIntermediario.setValue(solicitante[0].sosTelefonoSolicitante);
                    this.registerForm.controls.direccionUbicacionIntermediario.setValue(solicitante[0].sosDireccionSolicitante);
                    this.registerForm.controls.ciudadIntermediario.setValue(solicitante[0].ciudad);
                    this.service.ObtenerListaAnexos(Number(solicitante[0].sosId)).subscribe(data => {
                        if (data.result.listaAnexos) {
                            for (const element of data.result.listaAnexos.filter(x => x.seccionId === 2)) {
                                const archivo = {
                                    Description: element.descripcion,
                                    FileContent: element.archivoBinario,
                                    FileName: element.nombreArchivo.split('\\').pop().split('/').pop(),
                                    Type: ''
                                };
                                this.adjuntosIntermediario.push(archivo);
                            }
                        }
                    });
                }
            });
        }
    }
    descargarArchivo(archivo) {
        const linkSource = 'data:application/pdf;base64,' + archivo.FileContent;
        const downloadLink = document.createElement('a');
        const fileName = archivo.FileName;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }
};
IngresarSolicitudComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_7__["SolicitudProvider"] },
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_5__["AutorizarExportacionUtilService"] }
];
IngresarSolicitudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ingresar-solicitud',
        template: __webpack_require__(/*! raw-loader!./ingresar-solicitud.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.html"),
        styles: [__webpack_require__(/*! ./ingresar-solicitud.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-solicitud/ingresar-solicitud.component.scss")]
    })
], IngresarSolicitudComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option-left {\n  text-align: left;\n}\n\n.option-right {\n  text-align: right;\n}\n\n@media only screen and (max-device-width: 768px) {\n  .option-left {\n    text-align: center;\n  }\n\n  .option-right {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci10cmFtaXRlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbmN1bHR1cmFcXGF1dG9yaXphci1leHBvcnRhY2lvblxcY29tcG9uZW50c1xcaW5ncmVzYXItdHJhbWl0ZVxcaW5ncmVzYXItdHJhbWl0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmdyZXNhci10cmFtaXRlL2luZ3Jlc2FyLXRyYW1pdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURDQTtFQUNJO0lBQ0ksa0JBQUE7RUNFTjs7RURBRTtJQUNJLGtCQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvaW5ncmVzYXItdHJhbWl0ZS9pbmdyZXNhci10cmFtaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm9wdGlvbi1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAub3B0aW9uLWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5vcHRpb24tcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCIub3B0aW9uLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ub3B0aW9uLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KSB7XG4gIC5vcHRpb24tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm9wdGlvbi1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: IngresarTramiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarTramiteComponent", function() { return IngresarTramiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");
/* harmony import */ var _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iniciar-sesion/iniciar-sesion.component */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.ts");





let IngresarTramiteComponent = class IngresarTramiteComponent {
    constructor(service, modalService) {
        this.service = service;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    ingresarSolicitud() {
        this.service.asignarPaso(2);
        this.service.asignarpasoIngresar(1);
    }
    consultarSolicitud() {
        this.service.asignarPaso(5);
        this.service.asignarpasoIngresar(-1);
        this.service.limpiarConsultar();
    }
    abrirLogin() {
        this.modalService.open(_iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_4__["IniciarSesionComponent"], {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }
};
IngresarTramiteComponent.ctorParameters = () => [
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_3__["AutorizarExportacionUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
IngresarTramiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingresar-tramite',
        template: __webpack_require__(/*! raw-loader!./ingresar-tramite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.html"),
        styles: [__webpack_require__(/*! ./ingresar-tramite.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/ingresar-tramite/ingresar-tramite.component.scss")]
    })
], IngresarTramiteComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-mincultura-advice .govco-card {\n  padding: 10px !important;\n  text-align: justify;\n}\n\n#minjusticia-login-container .login-register {\n  text-align: center;\n}\n\n#minjusticia-login-container .minjusticia-login-form {\n  padding: 10px;\n}\n\n#minjusticia-login-container .minjusticia-login-form .form-group label {\n  font-weight: bold;\n}\n\n#minjusticia-login-container .login-btn-container {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n\n#minjusticia-login-container .adviceMessage {\n  margin-top: 2rem;\n  padding-top: 0.6rem !important;\n  padding-bottom: 0.6rem !important;\n  text-align: justify;\n}\n\n#minjusticia-login-container a {\n  color: #007bff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmljaWFyLXNlc2lvbi9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5jdWx0dXJhXFxhdXRvcml6YXItZXhwb3J0YWNpb25cXGNvbXBvbmVudHNcXGluaWNpYXItc2VzaW9uXFxpbmljaWFyLXNlc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmljaWFyLXNlc2lvbi9pbmljaWFyLXNlc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURLSTtFQUNJLGtCQUFBO0FDRlI7O0FES0k7RUFDSSxhQUFBO0FDSFI7O0FETVk7RUFDSSxpQkFBQTtBQ0poQjs7QURTSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNQUjs7QURVSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FDUlI7O0FEVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9pbmljaWFyLXNlc2lvbi9pbmljaWFyLXNlc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW1pbmN1bHR1cmEtYWR2aWNlIHtcclxuICAgIC5nb3Zjby1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxufVxyXG5cclxuI21pbmp1c3RpY2lhLWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAubG9naW4tcmVnaXN0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWluanVzdGljaWEtbG9naW4tZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWR2aWNlTWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4tbWluY3VsdHVyYS1hZHZpY2UgLmdvdmNvLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNtaW5qdXN0aWNpYS1sb2dpbi1jb250YWluZXIgLmxvZ2luLXJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21pbmp1c3RpY2lhLWxvZ2luLWNvbnRhaW5lciAubWluanVzdGljaWEtbG9naW4tZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jbWluanVzdGljaWEtbG9naW4tY29udGFpbmVyIC5taW5qdXN0aWNpYS1sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jbWluanVzdGljaWEtbG9naW4tY29udGFpbmVyIC5sb2dpbi1idG4tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4jbWluanVzdGljaWEtbG9naW4tY29udGFpbmVyIC5hZHZpY2VNZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDAuNnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42cmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4jbWluanVzdGljaWEtbG9naW4tY29udGFpbmVyIGEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: IniciarSesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionComponent", function() { return IniciarSesionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");
/* harmony import */ var _providers_sesion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/sesion */ "./src/app/tramites/mincultura/providers/sesion.ts");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");







let IniciarSesionComponent = class IniciarSesionComponent {
    constructor(modalService, formBuilder, sesionProvider, service, solicitudProvider) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.sesionProvider = sesionProvider;
        this.service = service;
        this.solicitudProvider = solicitudProvider;
        this.typeButton = 'password';
        this.invalidForm = false;
        this.formGroupLogin = this.formBuilder.group({
            formControlUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            formControlPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        const sesion = {};
        this.sesionProvider.Sesion = sesion;
    }
    open(content) {
        this.modalService.open(content, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }
    cancelar() {
        this.modalService.dismissAll();
    }
    login() {
        if (this.formGroupLogin.value.formControlUsuario === '' || this.formGroupLogin.value.formControlPassword === '') {
            this.invalidForm = true;
            return;
        }
        this.service.IniciarSesion(this.formGroupLogin.value.formControlUsuario, this.formGroupLogin.value.formControlPassword).subscribe(dataSesion => {
            if (dataSesion.success === true) {
                this.sesionProvider.Sesion.Token = dataSesion.result.token;
                this.sesionProvider.Sesion.Usuario = this.formGroupLogin.value.formControlUsuario;
                this.sesionProvider.Sesion.Contrasena = this.formGroupLogin.value.formControlPassword;
                this.solicitudProvider.Solicitud = {
                    sosId: 0
                };
                this.modalService.dismissAll();
                this.asignarVariables();
            }
            this.invalidForm = !dataSesion.success;
        });
    }
    asignarVariables() {
        this.invalidForm = false;
        this.service.asignarPaso(1);
        this.service.asignarpasoIngresar(1);
        this.service.asignarLlega(1);
    }
    ngOnInit() { }
    checkShowPassword() {
        this.typeButton = this.typeButton === 'password' ? 'input' : 'password';
    }
};
IniciarSesionComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _providers_sesion__WEBPACK_IMPORTED_MODULE_5__["SesionProvider"] },
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_4__["AutorizarExportacionUtilService"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_6__["SolicitudProvider"] }
];
IniciarSesionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iniciar-sesion',
        template: __webpack_require__(/*! raw-loader!./iniciar-sesion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.html"),
        styles: [__webpack_require__(/*! ./iniciar-sesion.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar-sesion/iniciar-sesion.component.scss")]
    })
], IniciarSesionComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvaW5pY2lhci9pbmljaWFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IniciarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarComponent", function() { return IniciarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/solicitud */ "./src/app/tramites/mincultura/providers/solicitud.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/autorizar-exportacion-util.service */ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts");







let IniciarComponent = class IniciarComponent {
    constructor(service, fb, modalService, router, solicitudProvider) {
        this.service = service;
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.solicitudProvider = solicitudProvider;
        this.typeButton = 'password';
        this.invalidForm = false;
        this.formGroupLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            formControlUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            formControlPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.usuario = '';
        this.password = '';
    }
    open(content) {
        this.modalService.open(content, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }
    login() {
        if (this.usuario !== '' || this.password !== '') {
            this.invalidForm = true;
        }
        this.solicitudProvider.Solicitud = {
            sosId: 0
        };
        this.modalService.dismissAll();
        this.router.navigate(['/mincultura/autorizar-exportacion/ingresar-solicitud']);
        // this.asignarVariables();
    }
    asignarVariables() {
        this.invalidForm = false;
        this.service.asignarPaso(1);
        this.service.asignarpasoIngresar(1);
        this.service.asignarLlega(1);
    }
    ngOnInit() {
    }
    checkShowPassword() {
        this.typeButton = this.typeButton === 'password' ? 'input' : 'password';
    }
};
IniciarComponent.ctorParameters = () => [
    { type: _services_autorizar_exportacion_util_service__WEBPACK_IMPORTED_MODULE_6__["AutorizarExportacionUtilService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_solicitud__WEBPACK_IMPORTED_MODULE_1__["SolicitudProvider"] }
];
IniciarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-iniciar',
        template: __webpack_require__(/*! raw-loader!./iniciar.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.html"),
        styles: [__webpack_require__(/*! ./iniciar.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/iniciar/iniciar.component.scss")]
    })
], IniciarComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.ts ***!
  \*************************************************************************************************/
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
        template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.html"),
        styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/inicio/inicio.component.scss")]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9tb2RhbC9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5jdWx0dXJhXFxhdXRvcml6YXItZXhwb3J0YWNpb25cXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluY3VsdHVyYS9hdXRvcml6YXItZXhwb3J0YWNpb24vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbmN1bHR1cmEvYXV0b3JpemFyLWV4cG9ydGFjaW9uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHsgY29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalComponent = class ModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/tramites/mincultura/autorizar-exportacion/components/modal/modal.component.scss")]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/services/NumberDirective.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/services/NumberDirective.ts ***!
  \***************************************************************************************/
/*! exports provided: NumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
], NumberDirective.prototype, "onInputChange", null);
NumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'input[numbersOnly]'
    })
], NumberDirective);



/***/ }),

/***/ "./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/mincultura/autorizar-exportacion/services/autorizar-exportacion-util.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AutorizarExportacionUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizarExportacionUtilService", function() { return AutorizarExportacionUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AutorizarExportacionUtilService = class AutorizarExportacionUtilService {
    constructor(http) {
        this.http = http;
        this.urlTramite = {
            obtenerToken: 'SolicitudExportacion/ObtenerToken',
            IniciarSesion: 'SolicitudExportacion/IniciarSesion',
            ObtenerListasCrearSolicitud: 'SolicitudExportacion/ObtenerListasCrearSolicitud',
            obtenerSolicitudPorNroConsecutivo: 'SolicitudExportacion/ObtenerSolicitudPorNroConsecutivo',
            obtenerListaAnexos: 'SolicitudExportacion/ObtenerListaAnexos',
            obtenerListaConceptosSolicitud: 'SolicitudExportacion/ObtenerListaConceptosSolicitud',
            obtenerListaConceptosObras: 'SolicitudExportacion/ObtenerListaConceptosObras',
            obtenerListaPrestamo: 'SolicitudExportacion/ObtenerListaPrestamo',
            obtenerListaDeterioro: 'SolicitudExportacion/ObtenerListaDeterioro',
            obtenerSolicitudPorId: 'SolicitudExportacion/ObtenerSolicitudPorId',
            obtenerSolicitudes: 'SolicitudExportacion/ObtenerSolicitudes',
            obtenerObras: 'SolicitudExportacion/ObtenerObras',
            obtenerAnexo: 'SolicitudExportacion/ObtenerAnexo',
            obtenerConceptoSolicitud: 'SolicitudExportacion/ObtenerConceptoSolicitud',
            obtenerSolicitudPorIntermediario: 'SolicitudExportacion/ObtenerSolicitudPorIntermediario',
            obtenerSolicitudPorSolicitante: 'SolicitudExportacion/ObtenerSolicitudPorSolicitante',
            obtenerReporte: 'SolicitudExportacion/ObtenerReporte',
            crearSolicitud: 'SolicitudExportacion/CrearSolicitud',
            actualizarSolicitud: 'SolicitudExportacion/ActualizarSolicitud',
            enviarSolicitud: 'SolicitudExportacion/EnviarSolicitud',
            crearObra: 'SolicitudExportacion/CrearObra',
            actualizarObra: 'SolicitudExportacion/ActualizarObra',
            eliminarObra: 'SolicitudExportacion/EliminarObra',
            autenticacion: 'SolicitudExportacion/Autenticacion',
            obtenerMunicipios: 'SolicitudExportacion/ObtenerMunicipios',
            obtenerMunicipio: 'SolicitudExportacion/ObtenerMunicipio',
            obtenerDepartamentos: 'SolicitudExportacion/ObtenerDepartamentos',
            obtenerTiposMotivos: 'SolicitudExportacion/ObtenerTiposMotivos',
            obtenerTiposRespuestas: 'SolicitudExportacion/ObtenerTiposRespuestas',
            obtenerClasificacionesTipologicas: 'SolicitudExportacion/ObtenerClasificacionesTipologicas',
            obtenerClasificacionesTipologicasGrupo: 'SolicitudExportacion/ObtenerClasificacionesTipologicasGrupo',
            obtenerPaises: 'SolicitudExportacion/ObtenerPaises',
            obtenerTiposDocumentosIndentidad: 'SolicitudExportacion/ObtenerTiposDocumentosIndentidad',
            obtenerTiposEpocas: 'SolicitudExportacion/ObtenerTiposEpocas',
            obtenerTiposTecnicas: 'SolicitudExportacion/ObtenerTiposTecnicas',
            obtenerTiposBasPersonas: 'SolicitudExportacion/ObtenerTiposBasPersonas',
            obtenerTiposPermanencia: 'SolicitudExportacion/ObtenerTiposPermanencia',
            obtenerTiposFirma: 'SolicitudExportacion/ObtenerTiposFirma',
            obtenerFinesExportacion: 'SolicitudExportacion/ObtenerFinesExportacion'
        };
    }
    asignarLlega(llegaParam) {
        this.llega = llegaParam;
        return this.llega;
    }
    asignarPaso(pasoParam) {
        this.paso = pasoParam;
        return this.paso;
    }
    asignarpasoIngresar(pasoIngresarParam) {
        this.pasoIngresar = pasoIngresarParam;
        return this.pasoIngresar;
    }
    asignarFormularioInvalido(formularioInvalidoParam) {
        this.formularioInvalido = formularioInvalidoParam;
    }
    limpiarConsultar() {
        this.consultar = false;
        this.consultarVerConcepto = false;
        this.consultarVerDescargar = false;
    }
    asignarConsultar(consultarParam) {
        this.consultar = consultarParam;
    }
    asignarConsultarVerConcepto(consultarVerConceptoParam) {
        this.consultarVerConcepto = consultarVerConceptoParam;
    }
    asignarConsultarVerDescargar(consultarVerDescargarParam) {
        this.consultarVerDescargar = consultarVerDescargarParam;
    }
    // Iniciar Sesion
    IniciarSesion(usuario, contrasena) {
        const data = {
            Usuario: usuario,
            Contrasena: contrasena
        };
        return this.http.post(this.urlTramite.IniciarSesion, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    obtenerDepartamentos() {
        return this.http.get(this.urlTramite.obtenerDepartamentos)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    obtenerTiposDocumentosIndentidad() {
        return this.http.get(this.urlTramite.obtenerTiposDocumentosIndentidad)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    ObtenerPaises() {
        return this.http.get(this.urlTramite.obtenerPaises)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    ObtenerTiposBasPersonas() {
        return this.http.get(this.urlTramite.obtenerTiposBasPersonas)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    ObtenerFinesExportacion() {
        return this.http.get(this.urlTramite.obtenerFinesExportacion)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    ObtenerTiposPermanencia() {
        return this.http.get(this.urlTramite.obtenerTiposPermanencia)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Cargar listas (Operadores - Peridos)
    obtenerMunicipiosPorDepartamentoId(departamentoId) {
        return this.http.get(this.urlTramite.obtenerMunicipios + '?padreId=' + departamentoId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerClasificacionesTipologicasGrupo() {
        return this.http.get(this.urlTramite.obtenerClasificacionesTipologicasGrupo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerClasificacionesTipologicas(cltPadreId) {
        return this.http.get(this.urlTramite.obtenerClasificacionesTipologicas + '?cltPadreId=' + cltPadreId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerTiposFirma() {
        return this.http.get(this.urlTramite.obtenerTiposFirma)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerTiposEpocas() {
        return this.http.get(this.urlTramite.obtenerTiposEpocas)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    ConsultarSolicitudxRadicado(value) {
        const data = {
            NroConsecutivo: value
        };
        return this.http.post(this.urlTramite.obtenerSolicitudPorNroConsecutivo, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ConsultarListaAnexosSolicitudesXSolicitud(value) {
        const data = {
            SosId: value
        };
        return this.http.post(this.urlTramite.obtenerListaAnexos, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ConsultarSolicitudesXRango(nroDocumentoSolicitante, nroConsecutivo) {
        const data = {
            NroDocumentoSolicitante: nroDocumentoSolicitante,
            NroConsecutivo: nroConsecutivo,
            FechaRadicacioninicial: null,
            FechaRadicacionFinal: null,
            Estado: null
        };
        return this.http.post(this.urlTramite.obtenerSolicitudes, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    registrarSolicitud(registerModel) {
        return this.http.post(this.urlTramite.crearSolicitud, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    crearObra(registerModel) {
        return this.http.post(this.urlTramite.crearObra, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    actualizarObra(registerModel) {
        return this.http.post(this.urlTramite.actualizarObra, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    enviarSolicitud(registerModel) {
        return this.http.post(this.urlTramite.enviarSolicitud, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerReporte(registerModel) {
        return this.http.post(this.urlTramite.obtenerReporte, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    obtenerObras(registerModel) {
        return this.http.post(this.urlTramite.obtenerObras, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ConsultarSolicitudxID(value) {
        const data = {
            SosId: value
        };
        return this.http.post(this.urlTramite.obtenerSolicitudPorId, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ConsultarSolicitudxNumeroDoc(value) {
        const data = {
            NroDocumentoSolicitante: value
        };
        return this.http.post(this.urlTramite.obtenerSolicitudPorSolicitante, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ConsultarSolicitudxIntermediario(value) {
        const data = {
            NroDocumentoIntermediario: value
        };
        return this.http.post(this.urlTramite.obtenerSolicitudPorIntermediario, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    ObtenerListaAnexos(value) {
        const data = {
            SosId: value
        };
        return this.http.post(this.urlTramite.obtenerListaAnexos, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    actualizarSolicitud(registerModel) {
        return this.http.post(this.urlTramite.actualizarSolicitud, registerModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
};
AutorizarExportacionUtilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AutorizarExportacionUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AutorizarExportacionUtilService);



/***/ })

}]);
//# sourceMappingURL=tramites-mincultura-autorizar-exportacion-autorizar-exportacion-module-es2015.2137d483be5fca442547.js.map