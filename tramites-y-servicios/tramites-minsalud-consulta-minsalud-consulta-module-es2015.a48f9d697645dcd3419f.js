(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-minsalud-consulta-minsalud-consulta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h3 class=\"m-0 modal-title\">INFORMACIÓN DETALLADA DEL REGISTRO</h3>\r\n    <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n            <em class=\"material-icons\">clear</em>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n        <div class=\"modal-subtitle\">\r\n                <label class=\"modal-detail-title m-0\">Nombre del prestador: Superintendencia EPS SAS</label>\r\n        </div>\r\n    <div class=\"modal-detail\">\r\n            <div class=\"row form-group\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Número de documento</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_documento}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Código del prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label>\r\n                            \r\n                    </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.naturaleza_juridica}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Clase de prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Empresa social del estado</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Nivel de atención del prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Caracter territorial</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Departemento sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_sede}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Municipio sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_sede}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Código de la sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_sede}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Nombre de la sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_sede}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Datos de Capacidad Instalada</h2> \r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Grupo</label></strong><br>\r\n                            <label  class=\"label-detail-govco\">{{concultaService.registroSeleccionado.grupo_capacidad}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Concepto</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.concepto}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Cantidad</label></strong><br>\r\n                            <label  class=\"label-detail-govco\">{{concultaService.registroSeleccionado.cantidad}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Ambulancia</h2>\r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Placa o matrícula</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_placa}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Modalidad</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.modalidad}}</label>\r\n                            \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Año modelo</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.modelo}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>No. tarjeta de propiedad</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_tarjeta}}</label>\r\n                            \r\n                    </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-md-6 text-right\">\r\n            <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">Regresar</a>\r\n    </div>\r\n    <div class=\"col-md-6 text-left\">\r\n            <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">Descargar Información</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body table-responsive\">\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n</div>\r\n\r\n<a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n    <div class=\"row clearfix text-center\">\r\n            <div class=\"col-md-12\">\r\n            <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n            </div>\r\n    </div>\r\n        <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                        <button (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</button>\r\n                </div>\r\n            </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\"></app-tramite-detail>\r\n<div class=\"tramite-container row\">\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n            <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                [show]='concultaService.invalidForm'>\r\n            </app-notifications>\r\n        </div>\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n            <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n        </div>\r\n        <div class=\"main-minsalud-advice\">\r\n            <div class=\"card govco-card p-0\">\r\n                <div class=\"card-body p-0\">\r\n                    <article id=\"Tabs\">\r\n                        <h3 class=\"pt-3 pl-3 pb-2 title-section\">Consultar registro actual prestadores</h3>\r\n                        <div id=\"div-tabs\">\r\n                            <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                <div class=\"tabs-govco\">\r\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                        <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                            [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                            [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                            <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\"\r\n                                                class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n                                                [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\"\r\n                                                aria-selected=\"concultaService.opcionSeleccionada===opcionLoop\">{{opcionLoop}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"tab-content pt-3\">\r\n                                        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[3]\"\r\n                                            role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                            <div [formGroup]=\"formGroup\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Número de\r\n                                                                    documento</label>\r\n                                                                <input maxlength=\"12\" numbersOnly\r\n                                                                    class=\"form-control input-govco\"\r\n                                                                    formControlName=\"numero_documento\">\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Naturaleza\r\n                                                                    jurídica</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"naturaleza_juridica\"\r\n                                                                    [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3 mb-4\">Capacidad instalada</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Grupo</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"grupo\"\r\n                                                                    [items]=\"concultaService.listaGrupo\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Concepto</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"concepto\"\r\n                                                                    [items]=\"concultaService.listaConcepto\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3 mb-4\">Datos de la sede</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Departamento</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"departamento_sede\"\r\n                                                                    [items]=\"concultaService.listaDepartamento\"\r\n                                                                    (change)=\"cargarMunicipios()\"\r\n                                                                    >\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Municipio</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"municipio_sede\"\r\n                                                                    [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Código de la\r\n                                                                    sede</label>\r\n                                                                <input maxlength=\"12\" numbersOnly\r\n                                                                    class=\"form-control input-govco\"\r\n                                                                    formControlName=\"codigo_sede\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Nombre de la\r\n                                                                    sede</label>\r\n                                                                <input class=\"form-control input-govco\" maxlength=\"200\"\r\n                                                                    formControlName=\"nombre_sede\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3 mb-4\">Datos Generales del prestador\r\n                                                    </h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Código del\r\n                                                                    prestador</label>\r\n                                                                <input maxlength=\"12\" numbersOnly\r\n                                                                    class=\"form-control input-govco\"\r\n                                                                    formControlName=\"codigo_prestador\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Clase del\r\n                                                                    prestador</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"clase_prestador\"\r\n                                                                    [items]=\"concultaService.listaClasePrestador\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Empresa social del\r\n                                                                    estado</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"ese\"\r\n                                                                    [items]=\"concultaService.listaEmpresaSocialEstado\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Nivel de atención del\r\n                                                                    prestador</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"nivel_atencion\"\r\n                                                                    [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Carácter\r\n                                                                    territorial</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"caracter_territorial\"\r\n                                                                    [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row m-4\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row recaptcha-container\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <re-captcha formControlName=\"recaptcha\">\r\n                                                                    </re-captcha>\r\n                                                                    <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                        class=\"text-danger\">\r\n                                                                        Campo sin diligenciar.\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row pb-3\">\r\n                                                        <div class=\"col-6 text-right\">\r\n                                                            <button class=\"btn btn-round btn-middle wb-150\"\r\n                                                                (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                        </div>\r\n                                                        <div class=\"col-6 text-left\">\r\n                                                            <button id=\"save-user\"\r\n                                                                class=\"btn btn-round btn-high wb-150\"\r\n                                                                (click)=\"buscar()\">BUSCAR</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n<div class=\"table-container\">\r\n    <div *ngIf=\"concultaService.mostrarDetalle || 1===0\" class=\"mt-3\">\r\n        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[3]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <div>\r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\"></app-tables>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <br>\r\n                    <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/general/general.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/general/general.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"minsaludContainer\" >\r\n    <div *ngIf=\"consultaService.mostrarDetalle || 1===0\">\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[0]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-prestadores-detalle></app-minsalud-consulta-prestadores-detalle>\r\n        </div>\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[1]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-sedes-detalle></app-minsalud-consulta-sedes-detalle>\r\n        </div>\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[2]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-servicios-detalle></app-minsalud-consulta-servicios-detalle>\r\n        </div>\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[3]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-capacidad-detalle></app-minsalud-consulta-capacidad-detalle>\r\n        </div>\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[4]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-seguridad-detalle></app-minsalud-consulta-seguridad-detalle>\r\n        </div>\r\n        <div *ngIf=\"consultaService.opcionSeleccionada === concultaService.opciones[5]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <app-minsalud-consulta-sanciones-detalle></app-minsalud-consulta-sanciones-detalle>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"consultaService.mostrarDetalleSinResultados\" class=\"col-md-12\">\r\n        <ngb-alert class=\"text-center\" (close)=\"consultaService.mostrarDetalleSinResultados=false\" type=\"danger\">\r\n            <strong>No hay resultados para la consulta</strong><br />\r\n        </ngb-alert>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n        <h3 class=\"m-0 modal-title\">INFORMACIÓN DETALLADA DEL REGISTRO</h3>\r\n        <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n                <em class=\"material-icons\">clear</em>\r\n        </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n        <div class=\"modal-subtitle\">\r\n                <label class=\"modal-detail-title m-0\">Nombre del prestador: Suramericana EPS SAS</label>\r\n        </div>\r\n        <div class=\"modal-detail\">\r\n                <div class=\"row form-group\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Tipo de documento</label></strong><br>\r\n                                <label class=\"label-detail-govco\">\r\n                                        {{concultaService.registroSeleccionado.tipo_documento!==''?concultaService.registroSeleccionado.tipo_documento:\"No registra\"}}\r\n                                </label>\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Número de documento</label></strong><br>\r\n                                <label class=\"label-detail-govco\">\r\n                                        {{concultaService.registroSeleccionado.numero_documento!==''?concultaService.registroSeleccionado.numero_documento:\"No registra\"}}\r\n                                </label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                                <label class=\"label-detail-govco\">\r\n                                        {{concultaService.registroSeleccionado.naturaleza_juridica!==''?concultaService.registroSeleccionado.naturaleza_juridica:\"No registra\"}}                                                \r\n                                </label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Departamento</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_prestador}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Municipio</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_prestador}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Código del prestador</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Nombre de prestador</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_prestador}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Clase de prestador</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Empresa social del estado</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Dirección</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.direccion}}</label>\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Teléfono</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.telefono}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Fax</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fax}}</label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Correo electrónico</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.correo_electronico}}</label>\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Razón social</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.razon_social}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Representante legal</label></strong><br>\r\n                                <label class=\"label-detail-govco\"></label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Nivel atención prestador</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label>\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Carácter territorial</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Fecha de inscripción</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_radicacion}}</label>\r\n\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Fecha de vencimiento</label></strong><br>\r\n                                <label\r\n                                        class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_vencimiento}}</label>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n        <div class=\"col-md-6 text-right\">\r\n                <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">Regresar</a>\r\n        </div>\r\n        <div class=\"col-md-6 text-left\">\r\n                <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">Descargar\r\n                        Información</a>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div>\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n</div>\r\n\r\n<p>{{concultaService.cantidadRegistros}}</p>\r\n<p>{{concultaService.cantidadRegistrosOtro}}</p>\r\n\r\n<a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n<div class=\"row clearfix text-center\">\r\n<div class=\"col-md-12\">\r\n        <br>\r\n        <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n</div>\r\n</div>\r\n<div class=\"row clearfix text-center\">\r\n<div class=\"col-md-12\">\r\n        <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\">\r\n</app-tramite-detail>\r\n<div class=\"tramite-container row\">\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n            <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                [show]='concultaService.invalidForm'>\r\n            </app-notifications>\r\n        </div>\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n            <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n        </div>\r\n        <div class=\"main-minsalud-advice\">\r\n            <div class=\"card govco-card p-0\">\r\n                <div class=\"card-body p-0\">\r\n                    <article id=\"Tabs\">\r\n                        <h3 class=\"pt-3 pl-3 pb-2 title-section\">Consultar registro actual prestadores</h3>\r\n                        <div id=\"div-tabs\">\r\n                            <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                <div class=\"tabs-govco\">\r\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                        <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                            [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                            [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                            <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\" class=\"nav-link\"\r\n                                                data-toggle=\"tab\" role=\"tab\"\r\n                                                [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\"\r\n                                                aria-selected=\"concultaService.opcionSeleccionada===opcionLoop\">{{opcionLoop}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"tab-content pt-3\">\r\n                                        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[0]\"\r\n                                            role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                            <div [formGroup]=\"formGroup\" [ngClass]=\"{'invalid-form' : invalidForm}\"\r\n                                                appInputValidator [validate]=\"invalidForm\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"datos-basicos row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label for=\"numeroDocumento\"\r\n                                                                    class=\"form-group-govco\">Número de documento *</label>\r\n                                                                <input class=\"form-control input-govco\" \r\n                                                                    id=\"numeroDocumento\" numbersOnly maxlength=\"12\"\r\n                                                                    formControlName=\"numero_documento\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Naturaleza jurídica</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"naturaleza_juridica\"\r\n                                                                    [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"datos-generales\">\r\n                                                        <h3 class=\"title-section mt-3 mb-4\">Datos generales del prestador\r\n                                                        </h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Departamento</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"departamento_prestador\"\r\n                                                                        [items]=\"concultaService.listaDepartamento\"\r\n                                                                        (change)=\"cargarMunicipios()\"\r\n                                                                        >\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Municipio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"municipio_prestador\"\r\n                                                                        [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código del\r\n                                                                        prestador</label>\r\n                                                                    <input  numbersOnly maxlength=\"12\"\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_prestador\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nombre del\r\n                                                                        prestador</label>\r\n                                                                    <input class=\"form-control input-govco\" maxlength=\"200\"\r\n                                                                        formControlName=\"nombre_prestador\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Clase del\r\n                                                                        prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"clase_prestador\"\r\n                                                                        [items]=\"concultaService.listaClasePrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Empresa social del\r\n                                                                        estado</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"ese\"\r\n                                                                        [items]=\"concultaService.listaEmpresaSocialEstado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nivel de atención del\r\n                                                                        prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"nivel_atencion\"\r\n                                                                        [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Carácter\r\n                                                                        territorial</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"caracter_territorial\"\r\n                                                                        [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row m-4\">\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <div class=\"row recaptcha-container\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <re-captcha formControlName=\"recaptcha\">\r\n                                                                        </re-captcha>\r\n                                                                        <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                            class=\"text-danger\">\r\n                                                                            Campo sin diligenciar.\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row pb-3\">\r\n                                                            <div class=\"col-6 text-right\">\r\n                                                                <button class=\"btn btn-round btn-middle wb-150\"\r\n                                                                    (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-6 text-left\">\r\n                                                                <button id=\"save-user\"\r\n                                                                    class=\"btn btn-round btn-high wb-150\"\r\n                                                                    (click)=\"buscar()\">BUSCAR</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n<div class=\"table-container\">\r\n    <div *ngIf=\"concultaService.mostrarDetalle\" class=\"mt-3\">\r\n        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[0]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <div>\r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\">\r\n                </app-tables>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <br>\r\n                    <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n                <h3 class=\"m-0 modal-title\">Información detallada del registro</h3>\r\n                <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n                        <em class=\"material-icons\">clear</em>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                    <div class=\"modal-subtitle\">\r\n                            <label class=\"modal-detail-title m-0\">Nombre del prestador: Suramericana EPS SAS</label>\r\n                    </div> \r\n            <div class=\"modal-detail\">\r\n                <div class=\"row form-group\">\r\n                        <div class=\"col-sm form-group\">\r\n                        <strong><label>Tipo de documento</label></strong><br>\r\n                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.tipo_documento}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                        <strong><label>Número de documento</label></strong><br>\r\n                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_documento}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                        <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.naturaleza_juridica}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Código del prestador</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Clase de prestador</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Empresa social del estado</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Nivel de atención del prestador</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Caracter territorial</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Departemento sede</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_sede}}</label>  \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Municipio sede</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_sede}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Código de la sede</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_sede}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Nombre de la sede</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_sede}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <h2 class=\"modal-detail-title\">Datos del servicio</h2>\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Grupo</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.grupo_capacidad}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Número distintivo de habitación de servicio</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_distintivo}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Servicio</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.serv_nombre}}</label> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <strong><label>Fecha apertura de Servicio</label></strong><br>\r\n                                <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_radicacion}}</label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                        </div>\r\n                </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.ambulatorio\" disabled=\"true\"  />\r\n                                        <span>Intramural: ambulatorio</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.domiciliario\" disabled=\"true\"  />\r\n                                        <span>Extramural: domiciliario</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.centro_referencia\" disabled=\"true\"  />\r\n                                        <span>Telemedicina: Centro Referencia</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.hospitalario\" disabled=\"true\"  />\r\n                                        <span>Intramural: Hospitalario</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label> \r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.otras_extramural\" disabled=\"true\"  />\r\n                                        <span>Extramural: Otras</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.institucion_remisora\" disabled=\"true\"  />\r\n                                        <span>Telemedicina: Institución remisora</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.unidad_movil\" disabled=\"true\"  />\r\n                                        <span>Extramural: Unidad movil</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <strong><label>Complejidad</label></strong><br>\r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm form-group\">\r\n                                <div>\r\n                                        <label class=\"chk-govco\">\r\n                                                <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_baja\" disabled=\"true\"  />\r\n                                                <span>Baja</span>\r\n                                                <div class=\"chk-govco__indicator\"></div>\r\n                                        </label>\r\n                                </div>                               \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <div>\r\n                                        <label class=\"chk-govco\">\r\n                                                <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_media\" disabled=\"true\"  />\r\n                                                <span>Media</span>\r\n                                                <div class=\"chk-govco__indicator\"></div>\r\n                                        </label>\r\n                                </div> \r\n                        </div>\r\n                        <div class=\"col-sm form-group\">\r\n                                <div>\r\n                                        <label class=\"chk-govco\">\r\n                                                <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_alta\" disabled=\"true\"  />\r\n                                                <span>Alta</span>\r\n                                                <div class=\"chk-govco__indicator\"></div>\r\n                                        </label>\r\n                                </div> \r\n                        </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <h2 class=\"modal-detail-title\">Sanciones Servicio: <span class=\"featured-text-govco\">NO</span></h2>\r\n                        </div>\r\n                </div>\r\n            </div>                            \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                        <div class=\"col-md-6 text-right\">\r\n                                <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">REGRESAR</a>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-left\">\r\n                                <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">DESCARGAR</a>\r\n                        </div>\r\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body table-responsive\">\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n</div>\r\n\r\n<a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n    <div class=\"row clearfix text-center\">\r\n            <div class=\"col-md-12\">\r\n            <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n            </div>\r\n    </div>\r\n        <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                        <button (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</button>\r\n                </div>\r\n            </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\"></app-tramite-detail>\r\n<div class=\"tramite-container row\">\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n            <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                [show]='concultaService.invalidForm'>\r\n            </app-notifications>\r\n        </div>\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n            <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n        </div>\r\n        <div class=\"main-minsalud-advice\">\r\n            <div class=\"card govco-card p-0\">\r\n                <div class=\"card-body p-0\">\r\n                    <article id=\"Tabs\">\r\n                        <h3 class=\"pt-3 pl-3 pb-2 title-section\"> Consultar registro actual prestadores</h3>\r\n                        <div id=\"div-tabs\">\r\n                            <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                <div class=\"tabs-govco\">\r\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                        <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                            [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                            [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                            <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\"\r\n                                                class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n                                                [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\"\r\n                                                aria-selected=\"concultaService.opcionSeleccionada===opcionLoop\">{{opcionLoop}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"tab-content pt-3\">\r\n                                        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[5]\"\r\n                                            role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                            <div [formGroup]=\"formGroup\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"datos-basicos-sanciones mb-4\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Número de\r\n                                                                        documento</label>\r\n                                                                    <input class=\"form-control input-govco\"\r\n                                                                        maxlength=\"12\" numbersOnly\r\n                                                                        formControlName=\"numero_documento\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Naturaleza\r\n                                                                        jurídica</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"naturaleza_juridica\"\r\n                                                                        [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"datos-servicios-sanciones mb-4\">\r\n                                                        <h3 class=\"title-section mb-2\">Sanciones - Ley 9 de 1979 -\r\n                                                            Articulo 577</h3>\r\n                                                        <h3 class=\"title-section\">Datos del servicio</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Grupo</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"grupo\"\r\n                                                                        [items]=\"concultaService.listaGrupo\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Servicio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"servicio_nombre\"\r\n                                                                        [items]=\"concultaService.listaNombreServicio\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3\">Modalidad</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idIntramuralAmbulatorio\"\r\n                                                                        formControlName=\"intramural_ambulatorio\" />\r\n                                                                    <label for=\"idIntramuralAmbulatorio\">\r\n                                                                        Intramural: Ambulatorio\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"intramural_hospitalario\"\r\n                                                                        formControlName=\"intramural_hospitalario\" />\r\n                                                                    <label for=\"idIntramuralHospitalario\">\r\n                                                                        Intramural: Hospitalario\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idExtramuralDomiciliario\"\r\n                                                                        formControlName=\"extramural_domiciliario\" />\r\n                                                                    <label for=\"idExtramuralDomiciliario\">\r\n                                                                        Extramural: Domiciliario\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idExtramuralOtras\"\r\n                                                                        formControlName=\"extramural_otras\" />\r\n                                                                    <label for=\"idExtramuralOtras\">\r\n                                                                        Extramural: Otras\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idExtramuralUnidad\"\r\n                                                                        formControlName=\"extramural_unidad\" />\r\n                                                                    <label for=\"idExtramuralUnidad\">\r\n                                                                        Extramural: Unidad Móvil\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idTelemedicinaCentro\"\r\n                                                                        formControlName=\"telemedicina_centro\" />\r\n                                                                    <label for=\"idTelemedicinaCentro\">\r\n                                                                        Telemedicina: Centro Referencia\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"\r\n                                                                        id=\"idTelemedicinaInstitucion\"\r\n                                                                        formControlName=\"telemedicina_institucion\" />\r\n                                                                    <label for=\"idTelemedicinaInstitucion\">\r\n                                                                        Telemedicina: Institución Remisora\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3\">Complejidad</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idBaja\"\r\n                                                                        formControlName=\"complejidad_baja\" />\r\n                                                                    <label for=\"idBaja\">\r\n                                                                        Baja\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idMedia\"\r\n                                                                        formControlName=\"complejidad_media\" />\r\n                                                                    <label for=\"idMedia\">\r\n                                                                        Media\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                            <div>\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\" id=\"idAlta\"\r\n                                                                        formControlName=\"complejidad_alta\" />\r\n                                                                    <label for=\"idAlta\">\r\n                                                                        Alta\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"sede-sanciones mb-4\">\r\n                                                        <h3 class=\"title-section mb-3\">Datos de la sede</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Departamento</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"departamento_sede\"\r\n                                                                        [items]=\"concultaService.listaDepartamento\"\r\n                                                                        (change)=\"cargarMunicipios()\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Municipio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"municipio_sede\"\r\n                                                                        [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código de la\r\n                                                                        sede</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_sede\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Zona</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"zona\"\r\n                                                                        [items]=\"concultaService.listaZona\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"datos-prestador mb-4\">\r\n                                                        <h3 class=\"title-section mb-3\">Datos Generales del\r\n                                                            prestador</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código del\r\n                                                                        prestador</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_prestador\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Clase del\r\n                                                                        prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"clase_prestador\"\r\n                                                                        [items]=\"concultaService.listaClasePrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Empresa social del\r\n                                                                        estado</label>\r\n                                                                    <input class=\"form-control input-govco\"\r\n                                                                        formControlName=\"empresa_estado\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nivel de atención\r\n                                                                        del prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"nivel_atencion\"\r\n                                                                        [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Carácter\r\n                                                                        territorial</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"caracter_territorial\"\r\n                                                                        [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"validacion\">\r\n                                                        <div class=\"row m-4\">\r\n\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <div class=\"row recaptcha-container\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <re-captcha\r\n                                                                            formControlName=\"recaptcha\">\r\n                                                                        </re-captcha>\r\n                                                                        <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                            class=\"text-danger\">\r\n                                                                            Campo sin diligenciar.\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row pb-3\">\r\n                                                            <div class=\"col-6 text-right\">\r\n                                                                <button class=\"btn btn-round btn-middle wb-150\"\r\n                                                                    (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-6 text-left\">\r\n                                                                <button id=\"save-user\"\r\n                                                                    class=\"btn btn-round btn-high wb-150\"\r\n                                                                    (click)=\"search()\">\r\n                                                                    BUSCAR</button>\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n<div class=\"table-container\">\r\n    <div *ngIf=\"concultaService.mostrarDetalle\" class=\"mt-3\">\r\n        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[5]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <div>\r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\"></app-tables>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <br>\r\n                    <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"concultaService.mostrarDetalleSinResultados\" class=\"mt-3\">\r\n        <ngb-alert class=\"text-center\" (close)=\"concultaService.mostrarDetalleSinResultados=false\" type=\"danger\">\r\n            <strong>No hay resultados para la consulta</strong><br />\r\n        </ngb-alert>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h3 class=\"m-0 modal-title\">INFORMACIÓN DETALLADA DEL REGISTRO</h3>\r\n    <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n            <em class=\"material-icons\">clear</em>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"modal-body\">\r\n                <div class=\"modal-subtitle\">\r\n                        <label class=\"modal-detail-title m-0\">Nombre del prestador: Suramericana EPS SAS</label>\r\n            </div>\r\n            <div class=\"modal-detail\">\r\n                    <div class=\"row form-group\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Tipo de documento</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.tipo_documento}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Número de documento</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_documento}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.naturaleza_juridica}}</label>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Departamento</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_prestador}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Municipio</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_prestador}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Código de prestador</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Nombre de prestador</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_prestador}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Clase de prestador</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Empresa social del estado</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Nivel atención prestador</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Carácter territorial</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                   <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Departemento sede</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_sede}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Municipio sede</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_sede}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Código de la sede</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_sede}}</label> \r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Nombre de la sede</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_sede}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Sede principal</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.sede_principal}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Gerente</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.gerente}}</label> \r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Zona</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.zona}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Dirección</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.direccion}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Barrio</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.barrio}}</label> \r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Centro poblado</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.centro_poblado}}</label>\r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Fax</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fax}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Teléfono</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.telefono}}</label> \r\n                            </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Correo electrónico</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.correo_electronico}}</label> \r\n                            </div>\r\n                            <div class=\"col-sm form-group\">\r\n                                    <strong><label>Fecha apertura</label></strong><br>\r\n                                    <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_radicacion}}</label> \r\n                            </div>\r\n                    </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-md-6 text-right\">\r\n            <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">REGRESAR</a>\r\n    </div>\r\n    <div class=\"col-md-6 text-left\">\r\n            <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">DESCARGAR</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"body table-responsive\">\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n    </div>\r\n\r\n\r\n    <a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n\r\n        <div class=\"row clearfix text-center\">\r\n        <div class=\"col-md-12\">\r\n                <br>\r\n                <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n        </div>\r\n        </div>\r\n        <div class=\"row clearfix text-center\">\r\n        <div class=\"col-md-12\">\r\n                <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n        </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\"></app-tramite-detail>\r\n<div class=\"tramite-container row\">\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n            <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                [show]='concultaService.invalidForm'>\r\n            </app-notifications>\r\n        </div>\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n            <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n        </div>\r\n        <div class=\"main-minsalud-advice\">\r\n            <div class=\"card govco-card p-0\">\r\n                    <div class=\"card-body p-0\">\r\n                    <article id=\"Tabs\">\r\n                        <h3 class=\"pt-3 pl-3 pb-2 title-section\">Consultar registro actual prestadores</h3>\r\n                        <div id=\"div-tabs\">\r\n                            <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                <div class=\"tabs-govco\">\r\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                        <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                            [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                            [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                            <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\"\r\n                                                class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n                                                [class.active]=\"opcionLoop===concultaService.opciones[1]\"\r\n                                                aria-selected=\"opcionLoop===concultaService.opciones[1]\">{{opcionLoop}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"tab-content pt-3\">\r\n                                        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[1]\"\r\n                                            role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                            <div [formGroup]=\"formGroup\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Número de documento</label>\r\n                                                                <input formControlName=\"numero_documento\"\r\n                                                                    maxlength=\"12\" numbersOnly\r\n                                                                    class=\"form-control input-govco\">\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Naturaleza jurídica</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"naturaleza_juridica\"\r\n                                                                    [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3 mb-4\">Datos Generales del Prestador</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Departamento</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"departamento_prestador\"\r\n                                                                    [items]=\"concultaService.listaDepartamento\"\r\n                                                                    (change)=\"cargarMunicipios()\"\r\n                                                                    >\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Municipio</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"municipio_prestador\"\r\n                                                                    [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Código del prestador</label>\r\n                                                                <input maxlength=\"12\" numbersOnly numbersOnly\r\n                                                                    class=\"form-control input-govco\"\r\n                                                                    formControlName=\"codigo_prestador\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Clase del prestador</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"clase_prestador\"\r\n                                                                    [items]=\"concultaService.listaClasePrestador\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Empresa social del estado</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"ese\"\r\n                                                                    [items]=\"concultaService.listaEmpresaSocialEstado\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Nivel de atención del prestador</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"nivel_atencion\"\r\n                                                                    [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Carácter territorial</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"caracter_territorial\"\r\n                                                                    [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3 mb-4\">Datos de la sede</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Departamento</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"departamento_sede\"\r\n                                                                    [items]=\"concultaService.listaDepartamento\"\r\n                                                                    (change)=\"cargarMunicipios2()\"\r\n                                                                    >\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Municipio</label>                                                                    \r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"municipio_sede\"\r\n                                                                    [items]=\"concultaService.listaMunicipioFiltrado2\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Código de la sede</label>\r\n                                                                <input maxlength=\"12\" numbersOnly\r\n                                                                    class=\"form-control input-govco\"\r\n                                                                    formControlName=\"codigo_sede\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Sede principal</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"sede_principal\"\r\n                                                                    [items]=\"concultaService.listaSedePrincipal\">\r\n                                                                </app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Nombre de la sede</label>\r\n                                                                <input class=\"form-control input-govco\" maxlength=\"200\"\r\n                                                                    formControlName=\"nombre_sede\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <label class=\"form-group-govco\">Zona</label>\r\n                                                                <app-dropdownlist ngDefaultControl\r\n                                                                    formControlName=\"zona\"\r\n                                                                    [items]=\"concultaService.listaZona\"></app-dropdownlist>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row m-4\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row recaptcha-container\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <re-captcha formControlName=\"recaptcha\">\r\n                                                                    </re-captcha>\r\n                                                                    <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                        class=\"text-danger\">\r\n                                                                        Campo sin diligenciar.\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row pb-3\">\r\n                                                        <div class=\"col-6 text-right\">\r\n                                                            <button class=\"btn btn-round btn-middle wb-150\" (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                        </div>\r\n                                                        <div class=\"col-6 text-left\">\r\n                                                            <button id=\"save-user\" class=\"btn btn-round btn-high wb-150\" (click)=\"buscar()\">BUSCAR</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n<div class=\"table-container\">\r\n    <div *ngIf=\"concultaService.mostrarDetalle\" class=\"mt-3\">\r\n        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[1]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <div>\r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\"></app-tables>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <br>\r\n                    <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h3 class=\"m-0 modal-title\">INFORMACIÓN DETALLADA DEL REGISTRO</h3>\r\n    <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n            <em class=\"material-icons\">clear</em>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n        <div class=\"modal-subtitle\">\r\n                <label class=\"modal-detail-title m-0\">Nombre del prestador: Superintendencia EPS SAS</label>\r\n    </div>\r\n    <div class=\"modal-detail\"> \r\n            <div class=\"row form-group\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Tipo de documento</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.tipo_documento}}</label>                                       \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Número de documento</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_documento}}</label>                                       \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.naturaleza_juridica}}</label>                                       \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Código del prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label>                                       \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Clase de prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label>                                       \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Empresa social del estado</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label>                                       \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Nivel de atención del prestador</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label>                                       \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Caracter territorial</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label>                                       \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Departemento sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_sede}}</label>\r\n                           \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Municipio sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_sede}}</label>\r\n                           \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Código de la sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_sede}}</label>\r\n                           \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Nombre de la sede</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_sede}}</label>\r\n                           \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Datos del servicio</h2>                                        \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Grupo</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.grupo_capacidad}}</label>\r\n                           \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Número distintivo de habitación de servicio</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_distintivo}}</label>\r\n                           \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Servicio</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.serv_nombre}}</label>\r\n                           \r\n                    </div>\r\n                    <div class=\"col-sm form-group\">\r\n                            <strong><label>Fecha apertura de Servicio</label></strong><br>\r\n                            <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_radicacion}}</label>\r\n                           \r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Modalidad</h2>\r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.ambulatorio\" disabled=\"true\"  />\r\n                                        <span>Intramural: ambulatorio</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.domiciliario\" disabled=\"true\"  />\r\n                                        <span>Extramural: domiciliario</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.centro_referencia\" disabled=\"true\"  />\r\n                                        <span>Telemedicina: Centro Referencia</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.hospitalario\" disabled=\"true\"  />\r\n                                        <span>Intramural: Hospitalario</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label> \r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.otras_extramural\" disabled=\"true\"  />\r\n                                        <span>Extramural: Otras</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.institucion_remisora\" disabled=\"true\"  />\r\n                                        <span>Telemedicina: Institución remisora</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label> \r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.unidad_movil\" disabled=\"true\"  />\r\n                                        <span>Extramural: Unidad movil</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <strong><label>Complejidad</label></strong><br>\r\n                    </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_baja\" disabled=\"true\"  />\r\n                                        <span>Baja</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div>                               \r\n                </div>\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_media\" disabled=\"true\"  />\r\n                                        <span>Media</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div> \r\n                </div>\r\n                <div class=\"col-sm form-group\">\r\n                        <div>\r\n                                <label class=\"chk-govco\">\r\n                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_alta\" disabled=\"true\"  />\r\n                                        <span>Alta</span>\r\n                                        <div class=\"chk-govco__indicator\"></div>\r\n                                </label>\r\n                        </div> \r\n                </div>\r\n        </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <h2 class=\"modal-detail-title\">Cuenta con medidas de seguridad: <span class=\"featured-text-govco\">SI</span></h2>\r\n                    </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-md-6 text-right\">\r\n            <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">REGRESAR</a>\r\n    </div>\r\n    <div class=\"col-md-6 text-left\">\r\n            <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">DESCARGAR INFORMACIÓN</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body table-responsive\">\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n</div>\r\n\r\n<a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n    <br>\r\n    <div class=\"row clearfix text-center\">\r\n            <div class=\"col-md-12\">\r\n            <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n            </div>\r\n    </div>\r\n    <div class=\"row clearfix text-center\">\r\n            <div class=\"col-md-12\">\r\n                    <button (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</button>\r\n            </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\"></app-tramite-detail>\r\n<div class=\"tramite-container row\">\r\n    <div class=\"col-md-9 tramite-area\">\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n            <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                [show]='concultaService.invalidForm'>\r\n            </app-notifications>\r\n        </div>\r\n        <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n            <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n        </div>\r\n        <div class=\"main-minsalud-advice\">\r\n            <div class=\"card govco-card p-0\">\r\n                <div class=\"card-body p-0\">\r\n                    <article id=\"Tabs\">\r\n                        <h3 class=\"pt-3 pl-3 pb-2 title-section\">Consultar registro actual prestadores</h3>\r\n                        <div id=\"div-tabs\">\r\n                            <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                <div class=\"tabs-govco\">\r\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                        <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                            [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                            [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                            <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\"\r\n                                                class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n                                                [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\"\r\n                                                aria-selected=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                                {{opcionLoop}}\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"tab-content pt-3\">\r\n                                        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[4]\"\r\n                                            role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                            <div [formGroup]=\"formGroup\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"datos-basicos-seguridad mb-4\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Número de documento</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"numero_documento\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Naturaleza jurídica</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"naturaleza_juridica\"\r\n                                                                        [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"datos-servicios-seguridad mb-4\">\r\n                                                        <h3 class=\"title-section mb-2\">Medidas de seguridad - Ley\r\n                                                                9 de 1979 - Articulo 576</h3>\r\n                                                            <h3 class=\"title-section\">Datos del servicio</h3>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-6\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label class=\"form-group-govco\">Grupo</label>\r\n                                                                        <app-dropdownlist ngDefaultControl\r\n                                                                            formControlName=\"grupo\"\r\n                                                                            [items]=\"concultaService.listaGrupo\">\r\n                                                                        </app-dropdownlist>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-6\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label class=\"form-group-govco\">Servicio</label>\r\n                                                                        <app-dropdownlist ngDefaultControl\r\n                                                                            formControlName=\"servicio_nombre\"\r\n                                                                            [items]=\"concultaService.listaNombreServicio\">\r\n                                                                        </app-dropdownlist>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3\">Modalidad</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idIntramuralAmbulatorio\" formControlName=\"intramural_ambulatorio\" />\r\n                                                                    <label for=\"idIntramuralAmbulatorio\">\r\n                                                                            Intramural: Ambulatorio\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idIntramuralHospitalario\" formControlName=\"intramural_hospitalario\" />\r\n                                                                    <label for=\"idIntramuralHospitalario\">\r\n                                                                            Intramural: Hospitalario\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idExtramuralDomiciliario\" formControlName=\"extramural_domiciliario\" />\r\n                                                                    <label for=\"idExtramuralDomiciliario\">\r\n                                                                            Extramural: Domiciliario\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idExtramuralOtras\" formControlName=\"extramural_otras\" />\r\n                                                                    <label for=\"idExtramuralOtras\">\r\n                                                                            Extramural: Otras\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idExtramuralUnidad\" formControlName=\"extramural_unidad\" />\r\n                                                                    <label for=\"idExtramuralUnidad\">\r\n                                                                            Extramural: Unidad Móvil\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idTelemedicinaCentro\" formControlName=\"telemedicina_centro\" />\r\n                                                                    <label for=\"idTelemedicinaCentro\">\r\n                                                                            Telemedicina: Centro Referencia\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idTelemedicinaInstitucion\" formControlName=\"telemedicina_institucion\" />\r\n                                                                    <label for=\"idTelemedicinaInstitucion\">\r\n                                                                            Telemedicina: Institución Remisora\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <h3 class=\"title-section mt-3\">Complejidad</h3>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idBaja\" formControlName=\"complejidad_baja\" />\r\n                                                                    <label for=\"idBaja\">\r\n                                                                            Baja\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idMedia\" formControlName=\"complejidad_media\" />\r\n                                                                    <label for=\"idMedia\">\r\n                                                                            Media\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-4 pr-0\">\r\n                                                                <div >\r\n                                                                <label class=\"chk-govco\">\r\n                                                                    <input type=\"checkbox\"  id=\"idAlta\" formControlName=\"complejidad_alta\" />\r\n                                                                    <label for=\"idAlta\">\r\n                                                                            Alta\r\n                                                                    </label>\r\n                                                                    <div class=\"chk-govco__indicator\"></div>\r\n                                                                </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"sede-seguridad mb-4\">\r\n                                                        <h3 class=\"title-section mb-3\">Datos de la sede</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Departamento</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"departamento_sede\"\r\n                                                                        [items]=\"concultaService.listaDepartamento\"\r\n                                                                        (change)=\"cargarMunicipios()\"\r\n                                                                        >\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Municipio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"municipio_sede\"\r\n                                                                        [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código de la sede</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_sede\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>              \r\n                                                    <div class=\"datos-prestador mb-4\">\r\n                                                        <h3 class=\"title-section mb-3\">Datos Generales del\r\n                                                                prestador</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código del prestador</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_prestador\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Clase del prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"clase_prestador\"\r\n                                                                        [items]=\"concultaService.listaClasePrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Empresa social del estado</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"ese\"\r\n                                                                        [items]=\"concultaService.listaEmpresaSocialEstado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nivel de atención del prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"nivel_atencion\"\r\n                                                                        [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Carácter territorial</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"caracter_territorial\"\r\n                                                                        [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>   \r\n                                                    <div class=\"validacion\">\r\n                                                        <div class=\"row m-4\">\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <div class=\"row recaptcha-container\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <re-captcha formControlName=\"recaptcha\">\r\n                                                                        </re-captcha>\r\n                                                                        <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                            class=\"text-danger\">\r\n                                                                            Campo sin diligenciar.\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row pb-3\">\r\n                                                            <div class=\"col-6 text-right\">\r\n                                                                <button class=\"btn btn-round btn-middle wb-150\"\r\n                                                                    (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-6 text-left\">\r\n                                                                <button  id=\"save-user\"\r\n                                                                    class=\"btn btn-round btn-high wb-150\"\r\n                                                                    (click)=\"buscar()\">BUSCAR</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div> \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 area-servicio\">\r\n        <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n        <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n    </div>\r\n</div>\r\n<div class=\"table-container\">\r\n    <div *ngIf=\"concultaService.mostrarDetalle || 1===0\" class=\"mt-3\">\r\n        <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[4]\" role=\"tabpanel\"\r\n            class=\"tab-pane active\" id=\"one\">\r\n            <div>\r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\"></app-tables>\r\n            </div>\r\n\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <br>\r\n                    <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <a (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">Descargar resultados</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n                <h3 class=\"m-0 modal-title\">INFORMACIÓN DETALLADA DEL REGISTRO</h3>\r\n                <button type=\"button\" class=\"close\" data-dismis=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">\r\n                        <em class=\"material-icons\">clear</em>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                    <div class=\"modal-subtitle\">\r\n                            <label class=\"modal-detail-title m-0\">Nombre del prestador: Superintendencia EPS SAS</label>\r\n                </div>\r\n                <div class=\"modal-detail\">\r\n                        <div class=\"row form-group\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Tipo de documento</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.tipo_documento}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Número de documento</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_documento}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Naturaleza Jurídica</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.naturaleza_juridica}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Código del prestador</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_prestador}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Clase de prestador</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.clase_prestador}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Empresa social del estado</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.ese}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Nivel de atención del prestador</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nivel_atencion}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Caracter territorial</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.caracter_territorial}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                        <h2 class=\"modal-detail-title\">Datos de la sede</h2>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Departemento sede</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.departamento_sede}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Municipio sede</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.municipio_sede}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Código de la sede</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.codigo_sede}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Nombre de la sede</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.nombre_sede}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                        <h2 class=\"modal-detail-title\">Datos del servicio</h2>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Grupo</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.grupo_capacidad}}</label>\r\n                                       \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Número distintivo de habitación de servicio</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.numero_distintivo}}</label>\r\n                                       \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Servicio</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.serv_nombre}}</label>\r\n                                        \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <strong><label>Fecha apertura del servicio</label></strong><br>\r\n                                        <label class=\"label-detail-govco\">{{concultaService.registroSeleccionado.fecha_apertura}}</label>\r\n                                        \r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                                <h2 class=\"modal-detail-title\">Modalidad</h2>\r\n                                        </div>\r\n                                </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.ambulatorio\" disabled=\"true\"  />\r\n                                                        <span>Intramural: ambulatorio</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.domiciliario\" disabled=\"true\"  />\r\n                                                        <span>Extramural: domiciliario</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.centro_referencia\" disabled=\"true\"  />\r\n                                                        <span>Telemedicina: Centro Referencia</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>\r\n                                </div>\r\n                                \r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.hospitalario\" disabled=\"true\"  />\r\n                                                        <span>Intramural: Hospitalario</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label> \r\n                                        </div>\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.otras_extramural\" disabled=\"true\"  />\r\n                                                        <span>Extramural: Otras</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.institucion_remisora\" disabled=\"true\"  />\r\n                                                        <span>Telemedicina: Institución remisora</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label> \r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.unidad_movil\" disabled=\"true\"  />\r\n                                                        <span>Extramural: Unidad movil</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                        <strong><label>Complejidad</label></strong><br>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_baja\" disabled=\"true\"  />\r\n                                                        <span>Baja</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div>                               \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_media\" disabled=\"true\"  />\r\n                                                        <span>Media</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div> \r\n                                </div>\r\n                                <div class=\"col-sm form-group\">\r\n                                        <div>\r\n                                                <label class=\"chk-govco\">\r\n                                                        <input  type=\"checkbox\" [checked]=\"concultaService.registroSeleccionado.complejidad_alta\" disabled=\"true\"  />\r\n                                                        <span>Alta</span>\r\n                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                </label>\r\n                                        </div> \r\n                                </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"col-md-6 text-right\">\r\n                        <a (click)=\"closeModal()\" class=\"btn btn-round btn-middle\">Regresar</a>\r\n                </div>\r\n                <div class=\"col-md-6 text-left\">\r\n                        <a (click)=\"closeModalConDescarga()\" class=\"btn btn-round btn-high\">Descargar Información</a>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body table-responsive\">\r\n        <app-tables [tableType]=\"'detail'\" [hContent]=\"tDetail.Header\" [bContent]=\"tDetail.Body\" [hConfig]=\"tDetail.ConfigHeader\" [bConfig]=\"tDetail.ConfigBody\"></app-tables>\r\n</div>\r\n\r\n<a *ngIf=\"1 === 0\" (click)=\"abrirPopup()\" class=\"btn btn-round btn-high\">Abrir popup</a>\r\n\r\n    <br>\r\n    <div class=\"row clearfix text-center\">\r\n            <div class=\"col-md-12\">\r\n            <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n            </div>\r\n    </div>\r\n        <div class=\"row clearfix text-center\">\r\n                <div class=\"col-md-12\">\r\n                        <button (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">DESCARGAR RESULTADOS</button>\r\n                </div>\r\n            </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-tramite-detail [name]=\"'consulta'\" [owner]=\"'minsalud'\">\r\n    </app-tramite-detail>\r\n    <div class=\"tramite-container row\">\r\n        <div class=\"col-md-9 tramite-area\">\r\n            <div class=\"card-body p-0 mb-3\" *ngIf=\"concultaService.invalidForm\">\r\n                <app-notifications [typeMessage]=\"'error'\" [message]=\"errorMessage.message\" [title]=\"errorMessage.title\"\r\n                    [show]='concultaService.invalidForm'>\r\n                </app-notifications>\r\n            </div>\r\n            <div class=\"card-body p-0 mb-3\" *ngIf=\"successDownload && concultaService.descargaCompleta\">\r\n                <app-notifications [typeMessage]=\"'success'\" [message]=\"\" [title]=\"successMessage\" [show]='successDownload' class=\"mb-2\"></app-notifications>                \r\n            </div>\r\n            <div class=\"main-minsalud-advice\">\r\n                <div class=\"card govco-card p-0\">\r\n                    <div class=\"card-body p-0\">\r\n                        <article id=\"Tabs\">\r\n                            <h3 class=\"pt-3 pl-3 pb-2 title-section\">Consultar registro actual prestadores</h3>\r\n                            <div id=\"div-tabs\">\r\n                                <div id=\"div-tabs-item\" class=\"p-0\">\r\n                                    <div class=\"tabs-govco\">\r\n                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                            <li *ngFor=\"let opcionLoop of concultaService.opciones; let first = first;\"\r\n                                                [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"nav-item\"\r\n                                                [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\">\r\n                                                <a (click)=\"concultaService.seleccionarHistoria(opcionLoop)\"\r\n                                                    class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n                                                    [class.active]=\"concultaService.opcionSeleccionada===opcionLoop\"\r\n                                                    aria-selected=\"concultaService.opcionSeleccionada===opcionLoop\">{{opcionLoop}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                        <div class=\"tab-content pt-3\">\r\n                                            <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[2]\"\r\n                                                role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\r\n                                                <div [formGroup]=\"formGroup\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Número de documento</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"numero_documento\">\r\n                                                                </div>\r\n    \r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Naturaleza jurídica</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"naturaleza_juridica\"\r\n                                                                        [items]=\"concultaService.listaNaturalezaJuridica\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <h3 class=\"title-section mt-3\">Datos del servicio</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Grupo</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"grupo\"\r\n                                                                        [items]=\"concultaService.listaGrupo\"></app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nombre del servicio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"servicio_nombre\" maxlength=\"200\"\r\n                                                                        [items]=\"concultaService.listaNombreServicio\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <h3 class=\"title-section mt-3\">Modalidad</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idIntramuralAmbulatorio\" formControlName=\"intramural_ambulatorio\" />\r\n                                                                        <label for=\"idIntramuralAmbulatorio\">\r\n                                                                                Intramural: Ambulatorio\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idIntramuralHospitalario\" formControlName=\"intramural_hospitalario\" />\r\n                                                                        <label for=\"idIntramuralHospitalario\">\r\n                                                                                Intramural: Hospitalario\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                        </div>\r\n    \r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idExtramuralDomiciliario\" formControlName=\"extramural_domiciliario\" />\r\n                                                                        <label for=\"idExtramuralDomiciliario\">\r\n                                                                                Extramural: Domiciliario\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idExtramuralOtras\" formControlName=\"extramural_otras\" />\r\n                                                                        <label for=\"idExtramuralOtras\">\r\n                                                                                Extramural: Otras\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idExtramuralUnidad\" formControlName=\"extramural_unidad\" />\r\n                                                                        <label for=\"idExtramuralUnidad\">\r\n                                                                                Extramural: Unidad Móvil\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                        </div>\r\n    \r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idTelemedicinaCentro\" formControlName=\"telemedicina_centro\" />\r\n                                                                        <label for=\"idTelemedicinaCentro\">\r\n                                                                                Telemedicina: Centro Referencia\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idTelemedicinaInstitucion\" formControlName=\"telemedicina_institucion\" />\r\n                                                                        <label for=\"idTelemedicinaInstitucion\">\r\n                                                                                Telemedicina: Institución Remisora\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <h3 class=\"title-section mt-3\">Complejidad</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idBaja\" formControlName=\"complejidad_baja\" />\r\n                                                                        <label for=\"idBaja\">\r\n                                                                                Baja\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idMedia\" formControlName=\"complejidad_media\" />\r\n                                                                        <label for=\"idMedia\">\r\n                                                                                Media\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-4 pr-0\">\r\n                                                                    <div >\r\n                                                                    <label class=\"chk-govco\">\r\n                                                                        <input type=\"checkbox\"  id=\"idAlta\" formControlName=\"complejidad_alta\" />\r\n                                                                        <label for=\"idAlta\">\r\n                                                                                Alta\r\n                                                                        </label>\r\n                                                                        <div class=\"chk-govco__indicator\"></div>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <h3 class=\"title-section mt-3\">Datos de la sede</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Departamento</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"departamento_sede\"\r\n                                                                        [items]=\"concultaService.listaDepartamento\"\r\n                                                                        (change)=\"cargarMunicipios()\"\r\n                                                                        >\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Municipio</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"municipio_sede\"\r\n                                                                        [items]=\"concultaService.listaMunicipioFiltrado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código de la sede</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_sede\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <h3 class=\"title-section mt-3\">Datos Generales del prestador</h3>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Código del prestador</label>\r\n                                                                    <input maxlength=\"12\" numbersOnly\r\n                                                                        class=\"form-control input-govco\"\r\n                                                                        formControlName=\"codigo_prestador\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Clase del prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"clase_prestador\"\r\n                                                                        [items]=\"concultaService.listaClasePrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Empresa social del estado</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"ese\"\r\n                                                                        [items]=\"concultaService.listaEmpresaSocialEstado\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Nivel de atención del prestador</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"nivel_atencion\"\r\n                                                                        [items]=\"concultaService.listaNivelAtencionPrestador\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-6\">\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label class=\"form-group-govco\">Carácter territorial</label>\r\n                                                                    <app-dropdownlist ngDefaultControl\r\n                                                                        formControlName=\"caracter_territorial\"\r\n                                                                        [items]=\"concultaService.listaCaracterTerritorial\">\r\n                                                                    </app-dropdownlist>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row m-4\">\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <div class=\"row recaptcha-container\">\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <re-captcha formControlName=\"recaptcha\">\r\n                                                                        </re-captcha>\r\n                                                                        <div *ngIf=\"concultaService.invalidRecaptcha\"\r\n                                                                            class=\"text-danger\">\r\n                                                                            Campo sin diligenciar.\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row pb-3\">\r\n                                                            <div class=\"col-6 text-right\">\r\n                                                                <button class=\"btn btn-round btn-middle wb-150\" (click)=\"limpiar()\">LIMPIAR</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-6 text-left\">\r\n                                                                <button id=\"save-user\" class=\"btn btn-round btn-high wb-150\" (click)=\"buscar()\">BUSCAR</button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 area-servicio\">\r\n            <govco-area-servicios module=\"Tramites\" itemid=\"1033\" step=\"2\"></govco-area-servicios>\r\n            <app-btn-volver [tramite]=\"'ficha-tramites-y-servicios/T24609'\" [type]=\"'redirect'\"></app-btn-volver>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-container\">\r\n        <div *ngIf=\"concultaService.mostrarDetalle\" class=\"mt-3\">\r\n            <div *ngIf=\"concultaService.opcionSeleccionada === concultaService.opciones[2]\" role=\"tabpanel\"\r\n                class=\"tab-pane active\" id=\"one\">            \r\n                <app-tables [tableType]=\"'detail'\" [hContent]=\"concultaService.tDetail.Header\"\r\n                    [bContent]=\"concultaService.tDetail.Body\" [hConfig]=\"concultaService.tDetail.ConfigHeader\"\r\n                    [bConfig]=\"concultaService.tDetail.ConfigBody\"></app-tables>\r\n                   \r\n                <br>\r\n                <div class=\"row clearfix text-center\">\r\n                    <div class=\"col-md-12\">\r\n                        <p>Puedes descargar la totalidad de los resultados encontrados</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row clearfix text-center\">\r\n                    <div class=\"col-md-12\">\r\n                        <button (click)=\"descargarResultados()\" class=\"btn btn-round btn-high\">DESCARGAR RESULTADOS</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9jYXBhY2lkYWQvY2FwYWNpZGFkLWRldGFsbGUtbW9kYWwvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXGNhcGFjaWRhZFxcY2FwYWNpZGFkLWRldGFsbGUtbW9kYWxcXGNhcGFjaWRhZC1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL2NhcGFjaWRhZC9jYXBhY2lkYWQtZGV0YWxsZS1tb2RhbC9jYXBhY2lkYWQtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLFlBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnNhbHVkLWNvbnN1bHRhL2NvbXBvbmVudHMvY2FwYWNpZGFkL2NhcGFjaWRhZC1kZXRhbGxlLW1vZGFsL2NhcGFjaWRhZC1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: CapacidadDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacidadDetalleModalComponent", function() { return CapacidadDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let CapacidadDetalleModalComponent = class CapacidadDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
CapacidadDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
CapacidadDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-capacidad-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./capacidad-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./capacidad-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.scss")]
    })
], CapacidadDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9jYXBhY2lkYWQvY2FwYWNpZGFkLWRldGFsbGUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXGNhcGFjaWRhZFxcY2FwYWNpZGFkLWRldGFsbGVcXGNhcGFjaWRhZC1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL2NhcGFjaWRhZC9jYXBhY2lkYWQtZGV0YWxsZS9jYXBhY2lkYWQtZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9jYXBhY2lkYWQvY2FwYWNpZGFkLWRldGFsbGUvY2FwYWNpZGFkLWRldGFsbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyLWdvdi1jby1ibHUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkRDQztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CapacidadDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacidadDetalleComponent", function() { return CapacidadDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let CapacidadDetalleComponent = class CapacidadDetalleComponent {
    constructor(concultaService, modalService) {
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.concultaService.asignarDescargaCompleta(false);
    }
    ngOnInit() { }
    closeModalConDescarga() {
        this.descargarResultados();
        this.modalService.dismissAll();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
};
CapacidadDetalleComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
CapacidadDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-capacidad-detalle',
        template: __webpack_require__(/*! raw-loader!./capacidad-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.html"),
        styles: [__webpack_require__(/*! ./capacidad-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.scss")]
    })
], CapacidadDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9jYXBhY2lkYWQvY2FwYWNpZGFkLWZpbHRyby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5zYWx1ZC1jb25zdWx0YVxcY29tcG9uZW50c1xcY2FwYWNpZGFkXFxjYXBhY2lkYWQtZmlsdHJvXFxjYXBhY2lkYWQtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL2NhcGFjaWRhZC9jYXBhY2lkYWQtZmlsdHJvL2NhcGFjaWRhZC1maWx0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL2NhcGFjaWRhZC9jYXBhY2lkYWQtZmlsdHJvL2NhcGFjaWRhZC1maWx0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CapacidadFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacidadFiltroComponent", function() { return CapacidadFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _capacidad_detalle_capacidad_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../capacidad-detalle/capacidad-detalle.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");







let CapacidadFiltroComponent = class CapacidadFiltroComponent {
    constructor(concultaService, capacidadDetalle) {
        this.concultaService = concultaService;
        this.capacidadDetalle = capacidadDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[3];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            naturaleza_juridica: [''],
            grupo: [''],
            concepto: [''],
            servicio_nombre: [''],
            departamento_sede: [''],
            municipio_sede: [''],
            codigo_sede: [''],
            nombre_sede: [''],
            codigo_prestador: [''],
            clase_prestador: [''],
            ese: [''],
            nivel_atencion: [''],
            caracter_territorial: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    buscar() {
        this.concultaService.invalidRecaptcha = false;
        this.successDownload = false;
        if (this.formGroup.get('recaptcha').value === null) {
            this.concultaService.invalidRecaptcha = true;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
        let filterNumber = 0;
        Object.keys(this.formGroup.controls).forEach(key => {
            let data = this.formGroup.get(key).value;
            if (typeof data === 'boolean') {
                data = data ? 'SI' : '';
            }
            if (typeof data === 'object' && data != null && data.value !== undefined) {
                data = data.value;
            }
            this.concultaService.filtro[key] = data;
            if (data && key !== 'recaptcha') {
                filterNumber += 1;
            }
        });
        // Validación: Cantidad minima de filtros = 1
        if (filterNumber > 0) {
            this.concultaService.invalidForm = false;
            this.concultaService.getDetalle(this.concultaService.tipoDetalle.sanciones).subscribe((data) => this.success(data), (error) => {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            });
        }
        else {
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.inicializarForm();
        this.concultaService.backToTop();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.capacidad).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.capacidad + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasCapacidad();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_sede').value.value);
        this.formGroup.get('municipio_sede').setValue(null);
    }
};
CapacidadFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _capacidad_detalle_capacidad_detalle_component__WEBPACK_IMPORTED_MODULE_4__["CapacidadDetalleComponent"] }
];
CapacidadFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-capacidad',
        template: __webpack_require__(/*! raw-loader!./capacidad-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.html"),
        styles: [__webpack_require__(/*! ./capacidad-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.scss")]
    })
], CapacidadFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/general/general.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/general/general.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n\n.div-padding-alertas {\n  padding: 0px 0px 0px 20px;\n}\n\n.minsalud-border-green {\n  border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9nZW5lcmFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnNhbHVkLWNvbnN1bHRhXFxjb21wb25lbnRzXFxnZW5lcmFsXFxnZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9nZW5lcmFsL2dlbmVyYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ292Y28tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5kaXYtcGFkZGluZy1hbGVydGFzIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuLm1pbnNhbHVkLWJvcmRlci1ncmVlbiB7XHJcbiAgICBib3JkZXItY29sb3I6Z3JlZW47XHJcbiAgfSIsIi5nb3Zjby1jYXJkIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZGl2LXBhZGRpbmctYWxlcnRhcyB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XG59XG5cbi5taW5zYWx1ZC1ib3JkZXItZ3JlZW4ge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/general/general.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/general/general.component.ts ***!
  \************************************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");



let GeneralComponent = class GeneralComponent {
    constructor(concultaServices) {
        this.concultaServices = concultaServices;
        this.consultaService = {};
        this.consultaService = concultaServices;
        this.consultaService.asignarMostrarDetalle(false);
        this.consultaService.asignarMostrarDetalleSinResultados(false);
        this.consultaService.asignarDescargaCompleta(false);
    }
    ngOnInit() {
    }
};
GeneralComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] }
];
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-general',
        template: __webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/general/general.component.html"),
        styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/tramites/minsalud-consulta/components/general/general.component.scss")]
    })
], GeneralComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1kZXRhbGxlLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnNhbHVkLWNvbnN1bHRhXFxjb21wb25lbnRzXFxwcmVzdGFkb3Jlc1xccHJlc3RhZG9yZXMtZGV0YWxsZS1tb2RhbFxccHJlc3RhZG9yZXMtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1kZXRhbGxlLW1vZGFsL3ByZXN0YWRvcmVzLWRldGFsbGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3ByZXN0YWRvcmVzL3ByZXN0YWRvcmVzLWRldGFsbGUtbW9kYWwvcHJlc3RhZG9yZXMtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge2NvbG9yOiB3aGl0ZTt9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PrestadoresDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadoresDetalleModalComponent", function() { return PrestadoresDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let PrestadoresDetalleModalComponent = class PrestadoresDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
        this.concultaService.inicializarRegistroSeleccionado();
    }
    ngOnInit() { }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
PrestadoresDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
PrestadoresDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prestadores-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./prestadores-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./prestadores-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.scss")]
    })
], PrestadoresDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-minsalud-advice {\n  margin-top: 2rem;\n}\n.main-minsalud-advice .govco-card {\n  padding: 1rem !important;\n  text-align: justify;\n}\n.modal-fit .modal-dialog {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 10px;\n}\n.modal-fit .modal-body {\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n}\n.table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1kZXRhbGxlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnNhbHVkLWNvbnN1bHRhXFxjb21wb25lbnRzXFxwcmVzdGFkb3Jlc1xccHJlc3RhZG9yZXMtZGV0YWxsZVxccHJlc3RhZG9yZXMtZGV0YWxsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1kZXRhbGxlL3ByZXN0YWRvcmVzLWRldGFsbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURJQTtFQUNJLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUNESjtBREtJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3ByZXN0YWRvcmVzL3ByZXN0YWRvcmVzLWRldGFsbGUvcHJlc3RhZG9yZXMtZGV0YWxsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW1pbnNhbHVkLWFkdmljZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgIC5nb3Zjby1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsLWZpdCAubW9kYWwtZGlhbG9nIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1maXQgLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHtcclxuICAgIHRoZWFkIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2RENDO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSIsIi5tYWluLW1pbnNhbHVkLWFkdmljZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4ubWFpbi1taW5zYWx1ZC1hZHZpY2UgLmdvdmNvLWNhcmQge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5tb2RhbC1maXQgLm1vZGFsLWRpYWxvZyB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubW9kYWwtZml0IC5tb2RhbC1ib2R5IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZS1oZWFkZXItZ292LWNvLWJsdSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PrestadoresDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadoresDetalleComponent", function() { return PrestadoresDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prestadores-detalle-modal/prestadores-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let PrestadoresDetalleComponent = class PrestadoresDetalleComponent {
    constructor(location, http, concultaService, modalService) {
        this.location = location;
        this.http = http;
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.idsTabla = ['nombre_prestador', 'codigo_prestador', 'departamento_prestador', 'municipio_prestador', 'direccion', 'telefono'];
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.abrirPopup = (e, item, index) => {
            const modal = this.modalService.open(_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_4__["PrestadoresDetalleModalComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.concultaService.asignarDescargaCompleta(false);
    }
    getTabla() {
        return this.concultaService.tDetail;
    }
    open(content) {
        this.modalService.open(content, { size: "lg", windowClass: "modal-detail-govco", scrollable: true });
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.modalService.dismissAll();
    }
    ngOnInit() {
        this.getDetalleConsulta();
        this.inicializarTablaDetallePrestadores();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    inicializarTablaDetallePrestadores() {
        this.tDetail = {
            Header: [
                { content: 'Nombre del prestador', filter: false, typeFilter: '' },
                { content: 'Código prestador', filter: false, typeFilter: '' },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Dirección', filter: false, typeFilter: '' },
                { content: 'Teléfono', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    getDetalleConsulta() {
        //console.log('Prestador detalle Ingresa a getDetalleConsulta...');
        this.getDetalle().subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            if (this.detalleConsulta != null) {
                console.log('Trae bien...this.detalleConsulta.length=' + this.detalleConsulta.length);
            }
            console.log('Activa bandera...');
        }, 
        // Failure response
        error => {
            //console.log('Trae mal...');
            console.error(error);
        });
        if (this.detalleConsulta == null)
            this.detalleConsulta = [];
        //console.log('Prestador detalle Pasa a getDetalleConsulta...this.detalleConsulta.length='+this.detalleConsulta.length);
        //location.reload();
    }
    // Cargar detalle
    getDetalle() {
        this.concultaService.filtro.historia = this.concultaService.tipoDetalle.prestadores;
        return this.http.post(this.concultaService.urlTramite.detalle, this.concultaService.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos() {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < this.idsTabla.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === this.idsTabla[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low';
                            el.event = this.abrirPopup;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
        }
        console.log('Despues de ...');
        console.log(this.tDetail);
    }
    abrirPopup1(e, item, index) {
        console.log('service EVENTO DE BOTÓN');
        //console.log(e);
        //console.log('service ITEM DE LA FILA');
        //console.log(item);
        //console.log('service INDEX DE LA FILA');
        //console.log(index);
        this.modal = this.modalService.open(_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_4__["PrestadoresDetalleModalComponent"], { size: 'lg',
            backdrop: "static",
            keyboard: false
        });
    }
};
PrestadoresDetalleComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
PrestadoresDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-prestadores-detalle',
        template: __webpack_require__(/*! raw-loader!./prestadores-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.html"),
        styles: [__webpack_require__(/*! ./prestadores-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.scss")]
    })
], PrestadoresDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1maWx0cm8vQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHByZXN0YWRvcmVzXFxwcmVzdGFkb3Jlcy1maWx0cm9cXHByZXN0YWRvcmVzLWZpbHRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1maWx0cm8vcHJlc3RhZG9yZXMtZmlsdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsWUFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9wcmVzdGFkb3Jlcy9wcmVzdGFkb3Jlcy1maWx0cm8vcHJlc3RhZG9yZXMtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PrestadoresFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadoresFiltroComponent", function() { return PrestadoresFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _prestadores_detalle_prestadores_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prestadores-detalle/prestadores-detalle.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");







let PrestadoresFiltroComponent = class PrestadoresFiltroComponent {
    constructor(concultaService, prestadoresDetalle) {
        this.concultaService = concultaService;
        this.prestadoresDetalle = prestadoresDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.invalidForm = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[0];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            naturaleza_juridica: [''],
            /* Información prestador */
            departamento_prestador: [''],
            municipio_prestador: [''],
            nombre_prestador: [''],
            codigo_prestador: [''],
            clase_prestador: [''],
            ese: [''],
            /* Información sede */
            nivel_atencion: [''],
            caracter_territorial: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    buscar() {
        this.successDownload = false;
        if (this.formGroup.get('recaptcha').value === null) {
            this.concultaService.invalidRecaptcha = true;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
        let filterNumber = 0;
        Object.keys(this.formGroup.controls).forEach(key => {
            let data = this.formGroup.get(key).value;
            if (typeof data === 'boolean') {
                data = data ? 'SI' : '';
            }
            if (typeof data === 'object' && data != null && data.value !== undefined) {
                data = data.value;
            }
            this.concultaService.filtro[key] = data;
            if (data && key !== 'recaptcha') {
                filterNumber += 1;
            }
        });
        // Validación: Cantidad minima de filtros = 1
        if (filterNumber > 0) {
            this.concultaService.invalidForm = false;
            this.concultaService.getDetalle(this.concultaService.tipoDetalle.prestadores).subscribe((data) => this.success(data), (error) => {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            });
        }
        else {
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.inicializarForm();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.prestadores).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.prestadores + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasPrestadores();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_prestador').value.value);
        this.formGroup.get('municipio_prestador').setValue(null);
    }
};
PrestadoresFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _prestadores_detalle_prestadores_detalle_component__WEBPACK_IMPORTED_MODULE_4__["PrestadoresDetalleComponent"] }
];
PrestadoresFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-prestadores',
        template: __webpack_require__(/*! raw-loader!./prestadores-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.html"),
        styles: [__webpack_require__(/*! ./prestadores-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.scss")]
    })
], PrestadoresFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zYW5jaW9uZXMvc2FuY2lvbmVzLWRldGFsbGUtbW9kYWwvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNhbmNpb25lc1xcc2FuY2lvbmVzLWRldGFsbGUtbW9kYWxcXHNhbmNpb25lcy1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NhbmNpb25lcy9zYW5jaW9uZXMtZGV0YWxsZS1tb2RhbC9zYW5jaW9uZXMtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLFlBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnNhbHVkLWNvbnN1bHRhL2NvbXBvbmVudHMvc2FuY2lvbmVzL3NhbmNpb25lcy1kZXRhbGxlLW1vZGFsL3NhbmNpb25lcy1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SancionesDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionesDetalleModalComponent", function() { return SancionesDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let SancionesDetalleModalComponent = class SancionesDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
SancionesDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
SancionesDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sanciones-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./sanciones-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./sanciones-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.scss")]
    })
], SancionesDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zYW5jaW9uZXMvc2FuY2lvbmVzLWRldGFsbGUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNhbmNpb25lc1xcc2FuY2lvbmVzLWRldGFsbGVcXHNhbmNpb25lcy1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NhbmNpb25lcy9zYW5jaW9uZXMtZGV0YWxsZS9zYW5jaW9uZXMtZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zYW5jaW9uZXMvc2FuY2lvbmVzLWRldGFsbGUvc2FuY2lvbmVzLWRldGFsbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyLWdvdi1jby1ibHUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkRDQztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SancionesDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionesDetalleComponent", function() { return SancionesDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sanciones-detalle-modal/sanciones-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");








let SancionesDetalleComponent = class SancionesDetalleComponent {
    constructor(http, concultaService, modalService) {
        this.http = http;
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.idsTablaSanciones = ['nombre_prestador', 'codigo_prestador', 'departamento_prestador', 'municipio_prestador', 'serv_nombre', 'nombre_sede_prestador', 'numero_distintivo'];
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.abrirPopup = (e, item, index) => {
            const modal = this.modalService.open(_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_3__["SancionesDetalleModalComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.concultaService.asignarDescargaCompleta(false);
    }
    open(content) {
        this.modalService.open(content, { size: "lg", windowClass: "modal-detail-govco", scrollable: true });
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.modalService.dismissAll();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    ngOnInit() {
        this.getDetalleConsulta();
        this.inicializarTablaDetalleSanciones();
        this.setTablaDetalleDatos();
    }
    inicializarTablaDetalleSanciones() {
        this.tDetail = {
            Header: [
                { content: 'Nombre prestador', filter: false, typeFilter: '' },
                { content: 'Código prestador', filter: false, typeFilter: '' },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Servicio', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Distintivo', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    getDetalleConsulta() {
        //console.log('Prestador detalle Ingresa a getDetalleConsulta...');
        this.getDetalle().subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            //console.log('Trae bien...this.detalleConsulta.length='+this.detalleConsulta.length);
            this.inicializarTablaDetalleSanciones();
            this.setTablaDetalleDatos();
            //Se activan las banderas respectivas para que se muestre el detalle
            this.concultaService.asignarMostrarDetalle(true);
            this.concultaService.asignarMostrarDetalleSinResultados(false);
            //console.log('Activa bandera...');
        }, 
        // Failure response
        error => {
            //console.log('Trae mal...');
            console.error(error);
        });
        /*
            if(this.detalleConsulta==null)
              this.detalleConsulta = [];
              */
        //console.log('Prestador detalle Pasa a getDetalleConsulta...this.detalleConsulta.length='+this.detalleConsulta.length);
        //location.reload();
    }
    // Cargar detalle
    getDetalle() {
        this.concultaService.filtro.historia = this.concultaService.tipoDetalle.sanciones;
        return this.http.post(this.concultaService.urlTramite.detalle, this.concultaService.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos() {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < this.idsTablaSanciones.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === this.idsTablaSanciones[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low';
                            el.event = this.abrirPopup;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
        }
    }
};
SancionesDetalleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_7__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
SancionesDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-sanciones-detalle',
        template: __webpack_require__(/*! raw-loader!./sanciones-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.html"),
        styles: [__webpack_require__(/*! ./sanciones-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.scss")]
    })
], SancionesDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zYW5jaW9uZXMvc2FuY2lvbmVzLWZpbHRyby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5zYWx1ZC1jb25zdWx0YVxcY29tcG9uZW50c1xcc2FuY2lvbmVzXFxzYW5jaW9uZXMtZmlsdHJvXFxzYW5jaW9uZXMtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NhbmNpb25lcy9zYW5jaW9uZXMtZmlsdHJvL3NhbmNpb25lcy1maWx0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NhbmNpb25lcy9zYW5jaW9uZXMtZmlsdHJvL3NhbmNpb25lcy1maWx0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: SancionesFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionesFiltroComponent", function() { return SancionesFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sanciones_detalle_sanciones_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sanciones-detalle/sanciones-detalle.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");






let SancionesFiltroComponent = class SancionesFiltroComponent {
    constructor(concultaService, sancionesDetalle) {
        this.concultaService = concultaService;
        this.sancionesDetalle = sancionesDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[5];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            naturaleza_juridica: [''],
            grupo: [''],
            servicio_nombre: [''],
            intramural_ambulatorio: [''],
            intramural_hospitalario: [''],
            extramural_domiciliario: [''],
            extramural_otras: [''],
            extramural_unidad: [''],
            telemedicina_centro: [''],
            telemedicina_institucion: [''],
            complejidad_baja: [''],
            complejidad_media: [''],
            complejidad_alta: [''],
            departamento_sede: [''],
            municipio_sede: [''],
            codigo_sede: [''],
            zona: [''],
            codigo_prestador: [''],
            clase_prestador: [''],
            empresa_estado: [''],
            nivel_atencion: [''],
            caracter_territorial: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.concultaService.invalidRecaptcha = false;
            this.successDownload = false;
            if (this.formGroup.get('recaptcha').value === null) {
                this.concultaService.invalidRecaptcha = true;
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
                this.concultaService.backToTop();
                return;
            }
            let filterNumber = 0;
            Object.keys(this.formGroup.controls).forEach(key => {
                let data = this.formGroup.get(key).value;
                if (typeof data === 'boolean') {
                    data = data ? 'SI' : '';
                }
                if (typeof data === 'object' && data != null && data.value !== undefined) {
                    data = data.value;
                }
                this.concultaService.filtro[key] = data;
                if (data && key !== 'recaptcha') {
                    filterNumber += 1;
                }
            });
            // Validación: Cantidad minima de filtros = 1
            if (filterNumber > 0) {
                this.concultaService.invalidForm = false;
                this.concultaService.getDetalle(this.concultaService.tipoDetalle.sanciones).subscribe((data) => this.success(data), (error) => {
                    this.concultaService.invalidForm = true;
                    this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                    this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
                });
            }
            else {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
                this.concultaService.backToTop();
                return;
            }
        });
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.inicializarForm();
        this.concultaService.backToTop();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.sanciones).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.sanciones + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasSanciones();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_sede').value.value);
        this.formGroup.get('municipio_sede').setValue(null);
    }
};
SancionesFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _sanciones_detalle_sanciones_detalle_component__WEBPACK_IMPORTED_MODULE_4__["SancionesDetalleComponent"] }
];
SancionesFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-sanciones',
        template: __webpack_require__(/*! raw-loader!./sanciones-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.html"),
        styles: [__webpack_require__(/*! ./sanciones-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.scss")]
    })
], SancionesFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1kZXRhbGxlLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnNhbHVkLWNvbnN1bHRhXFxjb21wb25lbnRzXFxzZWRlc1xcc2VkZXMtZGV0YWxsZS1tb2RhbFxcc2VkZXMtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1kZXRhbGxlLW1vZGFsL3NlZGVzLWRldGFsbGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlZGVzL3NlZGVzLWRldGFsbGUtbW9kYWwvc2VkZXMtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SedesDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesDetalleModalComponent", function() { return SedesDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let SedesDetalleModalComponent = class SedesDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
SedesDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
SedesDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sedes-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./sedes-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./sedes-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.scss")]
    })
], SedesDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1kZXRhbGxlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXG1pbnNhbHVkLWNvbnN1bHRhXFxjb21wb25lbnRzXFxzZWRlc1xcc2VkZXMtZGV0YWxsZVxcc2VkZXMtZGV0YWxsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1kZXRhbGxlL3NlZGVzLWRldGFsbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnNhbHVkLWNvbnN1bHRhL2NvbXBvbmVudHMvc2VkZXMvc2VkZXMtZGV0YWxsZS9zZWRlcy1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHtcclxuICAgIHRoZWFkIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2RENDO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSIsIi50YWJsZS1oZWFkZXItZ292LWNvLWJsdSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SedesDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesDetalleComponent", function() { return SedesDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sedes-detalle-modal/sedes-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.ts");








let SedesDetalleComponent = class SedesDetalleComponent {
    constructor(http, concultaService, modalService) {
        this.http = http;
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.idsTablaSedes = ['nombre_prestador', 'codigo_prestador', 'departamento_prestador', 'municipio_prestador', 'direccion', 'telefono'];
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.abrirPopup = (e, item, index) => {
            const modal = this.modalService.open(_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__["SedesDetalleModalComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.concultaService.asignarDescargaCompleta(false);
    }
    open(content) {
        this.modalService.open(content, { size: "lg", windowClass: "modal-detail-govco", scrollable: true });
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    ngOnInit() {
        this.getDetalleConsulta();
        this.inicializarTablaDetalleSedes();
        this.setTablaDetalleDatos();
    }
    inicializarTablaDetalleSedes() {
        this.tDetail = {
            Header: [
                { content: 'Nombre prestador', filter: false, typeFilter: '' },
                { content: 'Código prestador', filter: false, typeFilter: '' },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Dirección', filter: false, typeFilter: '' },
                { content: 'Teléfono', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    getDetalleConsulta() {
        //console.log('Prestador detalle Ingresa a getDetalleConsulta...');
        this.getDetalle().subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            //console.log('Trae bien...this.detalleConsulta.length='+this.detalleConsulta.length);
            this.inicializarTablaDetalleSedes();
            this.setTablaDetalleDatos();
            //Se activan las banderas respectivas para que se muestre el detalle
            this.concultaService.asignarMostrarDetalle(true);
            this.concultaService.asignarMostrarDetalleSinResultados(false);
            //console.log('Activa bandera...');
        }, 
        // Failure response
        error => {
            //console.log('Trae mal...');
            console.error(error);
        });
        /*
            if(this.detalleConsulta==null)
              this.detalleConsulta = [];
              */
        //console.log('Prestador detalle Pasa a getDetalleConsulta...this.detalleConsulta.length='+this.detalleConsulta.length);
        //location.reload();
    }
    // Cargar detalle
    getDetalle() {
        this.concultaService.filtro.historia = this.concultaService.tipoDetalle.sedes;
        return this.http.post(this.concultaService.urlTramite.detalle, this.concultaService.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos() {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < this.idsTablaSedes.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === this.idsTablaSedes[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low';
                            el.event = this.abrirPopup;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
        }
    }
};
SedesDetalleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
SedesDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-sedes-detalle',
        template: __webpack_require__(/*! raw-loader!./sedes-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.html"),
        styles: [__webpack_require__(/*! ./sedes-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.scss")]
    })
], SedesDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1maWx0cm8vQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNlZGVzXFxzZWRlcy1maWx0cm9cXHNlZGVzLWZpbHRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1maWx0cm8vc2VkZXMtZmlsdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsWUFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWRlcy9zZWRlcy1maWx0cm8vc2VkZXMtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SedesFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesFiltroComponent", function() { return SedesFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sedes_detalle_sedes_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sedes-detalle/sedes-detalle.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");







let SedesFiltroComponent = class SedesFiltroComponent {
    constructor(concultaService, sedesDetalle) {
        this.concultaService = concultaService;
        this.sedesDetalle = sedesDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[1];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            formControlDocumentoSede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlNaturalezaJuridica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlClasePrestador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlEmpresaSocialEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlNivelAtencionPrestador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlCaracterTerritorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlDepartamentoPrestador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlMunicipioPrestador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlDepartamentoSede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlMunicipioSede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlListaSedePrincipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlSedePrincipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlCodigoPrestador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formCodigoSede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlNombreSede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            formControlRecaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('formControlRecaptcha').setValue(null);
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            /* Información prestador */
            departamento_prestador: [''],
            municipio_prestador: [''],
            codigo_prestador: [''],
            ese: [''],
            clase_prestador: [''],
            nivel_atencion: [''],
            /* Información sede */
            naturaleza_juridica: [''],
            caracter_territorial: [''],
            departamento_sede: [''],
            municipio_sede: [''],
            codigo_sede: [''],
            sede_principal: [''],
            nombre_sede: [''],
            zona: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    buscar() {
        this.concultaService.invalidRecaptcha = false;
        this.successDownload = false;
        if (this.formGroup.get('recaptcha').value === null) {
            this.concultaService.invalidRecaptcha = true;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
        let filterNumber = 0;
        Object.keys(this.formGroup.controls).forEach(key => {
            let data = this.formGroup.get(key).value;
            if (typeof data === 'boolean') {
                data = data ? 'SI' : '';
            }
            if (typeof data === 'object' && data != null && data.value !== undefined) {
                data = data.value;
            }
            this.concultaService.filtro[key] = data;
            if (data && key !== 'recaptcha') {
                filterNumber += 1;
            }
        });
        // Validación: Cantidad minima de filtros = 1
        if (filterNumber > 0) {
            this.concultaService.invalidForm = false;
            this.concultaService.getDetalle(this.concultaService.tipoDetalle.sanciones).subscribe((data) => this.success(data), (error) => {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            });
        }
        else {
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.inicializarForm();
        this.concultaService.backToTop();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.sedes).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.sedes + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasSedes();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_prestador').value.value);
        this.formGroup.get('municipio_prestador').setValue(null);
    }
    cargarMunicipios2() {
        this.concultaService.cargarMunicipios2(this.formGroup.get('departamento_sede').value.value);
        this.formGroup.get('municipio_sede').setValue(null);
    }
};
SedesFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _sedes_detalle_sedes_detalle_component__WEBPACK_IMPORTED_MODULE_4__["SedesDetalleComponent"] }
];
SedesFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-sedes',
        template: __webpack_require__(/*! raw-loader!./sedes-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.html"),
        styles: [__webpack_require__(/*! ./sedes-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.scss")]
    })
], SedesFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWd1cmlkYWQvc2VndXJpZGFkLWRldGFsbGUtbW9kYWwvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNlZ3VyaWRhZFxcc2VndXJpZGFkLWRldGFsbGUtbW9kYWxcXHNlZ3VyaWRhZC1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlZ3VyaWRhZC9zZWd1cmlkYWQtZGV0YWxsZS1tb2RhbC9zZWd1cmlkYWQtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLFlBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnNhbHVkLWNvbnN1bHRhL2NvbXBvbmVudHMvc2VndXJpZGFkL3NlZ3VyaWRhZC1kZXRhbGxlLW1vZGFsL3NlZ3VyaWRhZC1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7Y29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SeguridadDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadDetalleModalComponent", function() { return SeguridadDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let SeguridadDetalleModalComponent = class SeguridadDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
SeguridadDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
SeguridadDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seguridad-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./seguridad-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./seguridad-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.scss")]
    })
], SeguridadDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWd1cmlkYWQvc2VndXJpZGFkLWRldGFsbGUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNlZ3VyaWRhZFxcc2VndXJpZGFkLWRldGFsbGVcXHNlZ3VyaWRhZC1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlZ3VyaWRhZC9zZWd1cmlkYWQtZGV0YWxsZS9zZWd1cmlkYWQtZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWd1cmlkYWQvc2VndXJpZGFkLWRldGFsbGUvc2VndXJpZGFkLWRldGFsbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyLWdvdi1jby1ibHUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkRDQztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SeguridadDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadDetalleComponent", function() { return SeguridadDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seguridad-detalle-modal/seguridad-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.ts");








let SeguridadDetalleComponent = class SeguridadDetalleComponent {
    constructor(http, concultaService, modalService) {
        this.http = http;
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.idsTablaSeguridad = ['nombre_prestador', 'codigo_prestador', 'departamento_prestador', 'municipio_prestador', 'serv_nombre', 'nombre_sede_prestador', 'numero_distintivo'];
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.abrirPopup = (e, item, index) => {
            const modal = this.modalService.open(_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__["SeguridadDetalleModalComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.concultaService.asignarDescargaCompleta(false);
    }
    open(content) {
        this.modalService.open(content, { size: "lg", windowClass: "modal-detail-govco", scrollable: true });
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.modalService.dismissAll();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    ngOnInit() {
        this.getDetalleConsulta();
        this.inicializarTablaDetalleSeguridad();
        this.setTablaDetalleDatos();
    }
    inicializarTablaDetalleSeguridad() {
        this.tDetail = {
            Header: [
                { content: 'Nombre prestador', filter: false, typeFilter: '' },
                { content: 'Código prestador', filter: false, typeFilter: '' },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Servicio', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Distintivo', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    getDetalleConsulta() {
        //console.log('Prestador detalle Ingresa a getDetalleConsulta...');
        this.getDetalle().subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            //console.log('Trae bien...this.detalleConsulta.length='+this.detalleConsulta.length);
            this.inicializarTablaDetalleSeguridad();
            this.setTablaDetalleDatos();
            //Se activan las banderas respectivas para que se muestre el detalle
            this.concultaService.asignarMostrarDetalle(true);
            this.concultaService.asignarMostrarDetalleSinResultados(false);
            //console.log('Activa bandera...');
        }, 
        // Failure response
        error => {
            //console.log('Trae mal...');
            console.error(error);
        });
        /*
            if(this.detalleConsulta==null)
              this.detalleConsulta = [];
              */
        //console.log('Prestador detalle Pasa a getDetalleConsulta...this.detalleConsulta.length='+this.detalleConsulta.length);
        //location.reload();
    }
    // Cargar detalle
    getDetalle() {
        this.concultaService.filtro.historia = this.concultaService.tipoDetalle.seguridad;
        return this.http.post(this.concultaService.urlTramite.detalle, this.concultaService.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos() {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < this.idsTablaSeguridad.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === this.idsTablaSeguridad[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low';
                            el.event = this.abrirPopup;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
        }
    }
};
SeguridadDetalleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
SeguridadDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-seguridad-detalle',
        template: __webpack_require__(/*! raw-loader!./seguridad-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.html"),
        styles: [__webpack_require__(/*! ./seguridad-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.scss")]
    })
], SeguridadDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZWd1cmlkYWQvc2VndXJpZGFkLWZpbHRyby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5zYWx1ZC1jb25zdWx0YVxcY29tcG9uZW50c1xcc2VndXJpZGFkXFxzZWd1cmlkYWQtZmlsdHJvXFxzZWd1cmlkYWQtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlZ3VyaWRhZC9zZWd1cmlkYWQtZmlsdHJvL3NlZ3VyaWRhZC1maWx0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlZ3VyaWRhZC9zZWd1cmlkYWQtZmlsdHJvL3NlZ3VyaWRhZC1maWx0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: SeguridadFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadFiltroComponent", function() { return SeguridadFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _seguridad_detalle_seguridad_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seguridad-detalle/seguridad-detalle.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");







let SeguridadFiltroComponent = class SeguridadFiltroComponent {
    constructor(concultaService, seguridadDetalle) {
        this.concultaService = concultaService;
        this.seguridadDetalle = seguridadDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[4];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            naturaleza_juridica: [''],
            grupo: [''],
            servicio_nombre: [''],
            intramural_ambulatorio: [''],
            intramural_hospitalario: [''],
            extramural_domiciliario: [''],
            extramural_otras: [''],
            extramural_unidad: [''],
            telemedicina_centro: [''],
            telemedicina_institucion: [''],
            complejidad_baja: [''],
            complejidad_media: [''],
            complejidad_alta: [''],
            departamento_sede: [''],
            municipio_sede: [''],
            codigo_sede: [''],
            zona: [''],
            codigo_prestador: [''],
            clase_prestador: [''],
            empresa_estado: [''],
            nivel_atencion: [''],
            ese: [''],
            caracter_territorial: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    buscar() {
        this.concultaService.invalidRecaptcha = false;
        this.successDownload = false;
        if (this.formGroup.get('recaptcha').value === null) {
            this.concultaService.invalidRecaptcha = true;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
        let filterNumber = 0;
        Object.keys(this.formGroup.controls).forEach(key => {
            let data = this.formGroup.get(key).value;
            if (typeof data === 'boolean') {
                data = data ? 'SI' : '';
            }
            if (typeof data === 'object' && data != null && data.value !== undefined) {
                data = data.value;
            }
            this.concultaService.filtro[key] = data;
            if (data && key !== 'recaptcha') {
                filterNumber += 1;
            }
        });
        // Validación: Cantidad minima de filtros = 1
        if (filterNumber > 0) {
            this.concultaService.invalidForm = false;
            this.concultaService.getDetalle(this.concultaService.tipoDetalle.sanciones).subscribe((data) => this.success(data), (error) => {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            });
        }
        else {
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.inicializarForm();
        this.concultaService.backToTop();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.seguridad).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.seguridad + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasServicios();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_sede').value.value);
        this.formGroup.get('municipio_sede').setValue(null);
    }
};
SeguridadFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _seguridad_detalle_seguridad_detalle_component__WEBPACK_IMPORTED_MODULE_4__["SeguridadDetalleComponent"] }
];
SeguridadFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-seguridad',
        template: __webpack_require__(/*! raw-loader!./seguridad-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.html"),
        styles: [__webpack_require__(/*! ./seguridad-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.scss")]
    })
], SeguridadFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZXJ2aWNpb3Mvc2VydmljaW9zLWRldGFsbGUtbW9kYWwvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNlcnZpY2lvc1xcc2VydmljaW9zLWRldGFsbGUtbW9kYWxcXHNlcnZpY2lvcy1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlcnZpY2lvcy9zZXJ2aWNpb3MtZGV0YWxsZS1tb2RhbC9zZXJ2aWNpb3MtZGV0YWxsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL21pbnNhbHVkLWNvbnN1bHRhL2NvbXBvbmVudHMvc2VydmljaW9zL3NlcnZpY2lvcy1kZXRhbGxlLW1vZGFsL3NlcnZpY2lvcy1kZXRhbGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7IGNvbG9yOiB3aGl0ZTt9IiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ServiciosDetalleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosDetalleModalComponent", function() { return ServiciosDetalleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");




let ServiciosDetalleModalComponent = class ServiciosDetalleModalComponent {
    constructor(activeModal, concultaService) {
        this.activeModal = activeModal;
        this.concultaService = concultaService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.closeModal();
    }
};
ServiciosDetalleModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_3__["MinsaludConsultaUtilService"] }
];
ServiciosDetalleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios-detalle-modal',
        template: __webpack_require__(/*! raw-loader!./servicios-detalle-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.html"),
        styles: [__webpack_require__(/*! ./servicios-detalle-modal.component.scss */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.scss")]
    })
], ServiciosDetalleModalComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header-gov-co-blu thead th {\n  background-color: #006DCC;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZXJ2aWNpb3Mvc2VydmljaW9zLWRldGFsbGUvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcbWluc2FsdWQtY29uc3VsdGFcXGNvbXBvbmVudHNcXHNlcnZpY2lvc1xcc2VydmljaW9zLWRldGFsbGVcXHNlcnZpY2lvcy1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlcnZpY2lvcy9zZXJ2aWNpb3MtZGV0YWxsZS9zZXJ2aWNpb3MtZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZXJ2aWNpb3Mvc2VydmljaW9zLWRldGFsbGUvc2VydmljaW9zLWRldGFsbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyLWdvdi1jby1ibHUge1xyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZEQ0M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiLnRhYmxlLWhlYWRlci1nb3YtY28tYmx1IHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkRDQztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ServiciosDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosDetalleComponent", function() { return ServiciosDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servicios-detalle-modal/servicios-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.ts");








let ServiciosDetalleComponent = class ServiciosDetalleComponent {
    constructor(http, concultaService, modalService) {
        this.http = http;
        this.concultaService = concultaService;
        this.modalService = modalService;
        this.idsTablaServicios = ['departamento_prestador', 'municipio_prestador', 'codigo_prestador', 'nombre_sede_prestador', 'serv_nombre', 'dv'];
        // Función de ejemplo para la apertura de modal
        // NOTA: Debe ser tipo anonima para que el contexto de la clase se mantenga
        this.abrirPopup = (e, item, index) => {
            const modal = this.modalService.open(_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__["ServiciosDetalleModalComponent"], {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true
            });
            modal.componentInstance.data = item;
        };
        this.concultaService.asignarDescargaCompleta(false);
    }
    open(content) {
        this.modalService.open(content, { size: "lg", windowClass: "modal-detail-govco", scrollable: true });
    }
    closeModalConDescarga() {
        this.descargarResultados();
        this.modalService.dismissAll();
    }
    descargarResultados() {
        this.concultaService.asignarDescargaCompleta(true);
    }
    ngOnInit() {
        this.getDetalleConsulta();
        this.inicializarTablaDetalleServicios();
        this.setTablaDetalleDatos();
    }
    inicializarTablaDetalleServicios() {
        this.tDetail = {
            Header: [
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Código sede prestador', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Nombre sede prestador', filter: false, typeFilter: '' },
                { content: 'Servicio', filter: false, typeFilter: '' },
                { content: 'Distintivo', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    getDetalleConsulta() {
        console.log('Prestador detalle Ingresa a getDetalleConsulta...');
        this.getDetalle().subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            console.log('Trae bien...this.detalleConsulta.length=' + this.detalleConsulta.length);
            this.inicializarTablaDetalleServicios();
            this.setTablaDetalleDatos();
            //Se activan las banderas respectivas para que se muestre el detalle
            this.concultaService.asignarMostrarDetalle(true);
            this.concultaService.asignarMostrarDetalleSinResultados(false);
            console.log('Activa bandera...');
        }, 
        // Failure response
        error => {
            console.log('Trae mal...');
            console.error(error);
        });
        /*
            if(this.detalleConsulta==null)
              this.detalleConsulta = [];
              */
        console.log('Prestador detalle Pasa a getDetalleConsulta...this.detalleConsulta.length=' + this.detalleConsulta.length);
        //location.reload();
    }
    // Cargar detalle
    getDetalle() {
        this.concultaService.filtro.historia = this.concultaService.tipoDetalle.servicios;
        return this.http.post(this.concultaService.urlTramite.detalle, this.concultaService.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos() {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < this.idsTablaServicios.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === this.idsTablaServicios[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low';
                            el.event = this.abrirPopup;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
        }
    }
};
ServiciosDetalleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
ServiciosDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-servicios-detalle',
        template: __webpack_require__(/*! raw-loader!./servicios-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.html"),
        styles: [__webpack_require__(/*! ./servicios-detalle.component.scss */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.scss")]
    })
], ServiciosDetalleComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvbWluc2FsdWQtY29uc3VsdGEvY29tcG9uZW50cy9zZXJ2aWNpb3Mvc2VydmljaW9zLWZpbHRyby9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxtaW5zYWx1ZC1jb25zdWx0YVxcY29tcG9uZW50c1xcc2VydmljaW9zXFxzZXJ2aWNpb3MtZmlsdHJvXFxzZXJ2aWNpb3MtZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlcnZpY2lvcy9zZXJ2aWNpb3MtZmlsdHJvL3NlcnZpY2lvcy1maWx0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC90cmFtaXRlcy9taW5zYWx1ZC1jb25zdWx0YS9jb21wb25lbnRzL3NlcnZpY2lvcy9zZXJ2aWNpb3MtZmlsdHJvL3NlcnZpY2lvcy1maWx0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtjb2xvcjogd2hpdGU7fSIsImEge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ServiciosFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosFiltroComponent", function() { return ServiciosFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _servicios_detalle_servicios_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios-detalle/servicios-detalle.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.ts");
/* harmony import */ var _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/messages-filters */ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts");







let ServiciosFiltroComponent = class ServiciosFiltroComponent {
    constructor(concultaService, serviciosDetalle) {
        this.concultaService = concultaService;
        this.serviciosDetalle = serviciosDetalle;
        this.errorMessage = {
            message: '',
            title: ''
        };
        this.successMessage = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].SuccessDownload;
        this.successDownload = false;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.inicializarForm();
        this.concultaService.inicializarFiltro();
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.opcionSeleccionada = this.concultaService.opciones[2];
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarDescargaCompleta(false);
    }
    inicializarForm() {
        this.formGroup = this.formBuilder.group({
            numero_documento: [''],
            naturaleza_juridica: [''],
            grupo: [''],
            servicio_nombre: [''],
            intramural_ambulatorio: [''],
            intramural_hospitalario: [''],
            extramural_domiciliario: [''],
            extramural_otras: [''],
            extramural_unidad: [''],
            telemedicina_centro: [''],
            telemedicina_institucion: [''],
            complejidad_baja: [''],
            complejidad_media: [''],
            complejidad_alta: [''],
            departamento_sede: [''],
            municipio_sede: [''],
            codigo_sede: [''],
            codigo_prestador: [''],
            clase_prestador: [''],
            ese: [''],
            nivel_atencion: [''],
            caracter_territorial: [''],
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])
        });
        this.concultaService.invalidForm = false;
        this.formGroup.get('recaptcha').setValue(null);
        this.concultaService.inicializarTablaDetalleServicios();
    }
    buscar() {
        this.concultaService.invalidRecaptcha = false;
        this.successDownload = false;
        if (this.formGroup.get('recaptcha').value === null) {
            this.concultaService.invalidRecaptcha = true;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Recaptcha;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
        let filterNumber = 0;
        Object.keys(this.formGroup.controls).forEach(key => {
            let data = this.formGroup.get(key).value;
            if (typeof data === 'boolean') {
                data = data ? 'SI' : '';
            }
            if (typeof data === 'object' && data != null && data.value !== undefined) {
                data = data.value;
            }
            this.concultaService.filtro[key] = data;
            if (data && key !== 'recaptcha') {
                filterNumber += 1;
            }
        });
        // Validación: Cantidad minima de filtros = 1
        if (filterNumber > 0) {
            this.concultaService.invalidForm = false;
            this.concultaService.getDetalle(this.concultaService.tipoDetalle.sanciones).subscribe((data) => this.success(data), (error) => {
                this.concultaService.invalidForm = true;
                this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Error;
                this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            });
        }
        else {
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoFilter;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
            return;
        }
    }
    success(data) {
        if (data.length > 0) {
            this.concultaService.detalleConsulta = data;
            this.concultaService.setTablaDetalleDatos(this.concultaService.idsTablaSanciones);
            this.concultaService.asignarMostrarDetalle(true);
        }
        else {
            this.concultaService.asignarMostrarDetalle(false);
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NoData;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        }
    }
    limpiar() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.inicializarForm();
        this.concultaService.backToTop();
    }
    descargarResultados() {
        this.concultaService.getDetalleExcel(this.concultaService.tipoDetalle.servicios).subscribe((data) => {
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.concultaService.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + this.concultaService.tipoDetalle.servicios + '.xls';
            link.click();
            // Habilita mensaje success
            this.concultaService.asignarDescargaCompleta(true);
            this.successDownload = true;
            this.concultaService.invalidForm = false;
            this.concultaService.backToTop();
        }, (error) => {
            this.concultaService.asignarDescargaCompleta(false);
            this.successDownload = false;
            this.concultaService.invalidForm = true;
            this.errorMessage.message = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].ErrorDownload;
            this.errorMessage.title = _services_messages_filters__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].Sorry;
            this.concultaService.backToTop();
        });
    }
    ngOnInit() {
        this.concultaService.asignarMostrarDetalle(false);
        this.concultaService.asignarMostrarDetalleSinResultados(false);
        this.concultaService.asignarDescargaCompleta(false);
        this.concultaService.inicializarFiltro();
        this.concultaService.cargarListasServicios();
    }
    cargarMunicipios() {
        this.concultaService.cargarMunicipios(this.formGroup.get('departamento_sede').value.value);
        this.formGroup.get('municipio_sede').setValue(null);
    }
};
ServiciosFiltroComponent.ctorParameters = () => [
    { type: _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_2__["MinsaludConsultaUtilService"] },
    { type: _servicios_detalle_servicios_detalle_component__WEBPACK_IMPORTED_MODULE_4__["ServiciosDetalleComponent"] }
];
ServiciosFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsalud-consulta-servicios',
        template: __webpack_require__(/*! raw-loader!./servicios-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.html"),
        styles: [__webpack_require__(/*! ./servicios-filtro.component.scss */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.scss")]
    })
], ServiciosFiltroComponent);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/minsalud-consulta-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/minsalud-consulta-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: MinsaludConsultaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinsaludConsultaRoutingModule", function() { return MinsaludConsultaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/prestadores/prestadores-filtro/prestadores-filtro.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.ts");
/* harmony import */ var _components_sedes_sedes_filtro_sedes_filtro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sedes/sedes-filtro/sedes-filtro.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.ts");
/* harmony import */ var _components_servicios_servicios_filtro_servicios_filtro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/servicios/servicios-filtro/servicios-filtro.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.ts");
/* harmony import */ var _components_capacidad_capacidad_filtro_capacidad_filtro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/capacidad/capacidad-filtro/capacidad-filtro.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.ts");
/* harmony import */ var _components_seguridad_seguridad_filtro_seguridad_filtro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/seguridad/seguridad-filtro/seguridad-filtro.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.ts");
/* harmony import */ var _components_sanciones_sanciones_filtro_sanciones_filtro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sanciones/sanciones-filtro/sanciones-filtro.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.ts");









const routes = [
    {
        path: "",
        component: _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_3__["PrestadoresFiltroComponent"],
        children: []
    },
    {
        path: "Prestadores",
        component: _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_3__["PrestadoresFiltroComponent"],
        children: []
    },
    {
        path: 'Sedes',
        component: _components_sedes_sedes_filtro_sedes_filtro_component__WEBPACK_IMPORTED_MODULE_4__["SedesFiltroComponent"]
    },
    {
        path: 'Servicios',
        component: _components_servicios_servicios_filtro_servicios_filtro_component__WEBPACK_IMPORTED_MODULE_5__["ServiciosFiltroComponent"]
    },
    {
        path: 'Capacidad',
        component: _components_capacidad_capacidad_filtro_capacidad_filtro_component__WEBPACK_IMPORTED_MODULE_6__["CapacidadFiltroComponent"]
    },
    {
        path: 'Medidas',
        component: _components_seguridad_seguridad_filtro_seguridad_filtro_component__WEBPACK_IMPORTED_MODULE_7__["SeguridadFiltroComponent"]
    },
    {
        path: 'Sanciones',
        component: _components_sanciones_sanciones_filtro_sanciones_filtro_component__WEBPACK_IMPORTED_MODULE_8__["SancionesFiltroComponent"]
    },
];
let MinsaludConsultaRoutingModule = class MinsaludConsultaRoutingModule {
};
MinsaludConsultaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MinsaludConsultaRoutingModule);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/minsalud-consulta.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/minsalud-consulta.module.ts ***!
  \************************************************************************/
/*! exports provided: MinsaludConsultaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinsaludConsultaModule", function() { return MinsaludConsultaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _minsalud_consulta_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minsalud-consulta-routing.module */ "./src/app/tramites/minsalud-consulta/minsalud-consulta-routing.module.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/tramites/minsalud-consulta/components/general/general.component.ts");
/* harmony import */ var _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/prestadores/prestadores-filtro/prestadores-filtro.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-filtro/prestadores-filtro.component.ts");
/* harmony import */ var _components_sedes_sedes_filtro_sedes_filtro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sedes/sedes-filtro/sedes-filtro.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-filtro/sedes-filtro.component.ts");
/* harmony import */ var _components_servicios_servicios_filtro_servicios_filtro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/servicios/servicios-filtro/servicios-filtro.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-filtro/servicios-filtro.component.ts");
/* harmony import */ var _components_capacidad_capacidad_filtro_capacidad_filtro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/capacidad/capacidad-filtro/capacidad-filtro.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-filtro/capacidad-filtro.component.ts");
/* harmony import */ var _components_seguridad_seguridad_filtro_seguridad_filtro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/seguridad/seguridad-filtro/seguridad-filtro.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-filtro/seguridad-filtro.component.ts");
/* harmony import */ var _components_sanciones_sanciones_filtro_sanciones_filtro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sanciones/sanciones-filtro/sanciones-filtro.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-filtro/sanciones-filtro.component.ts");
/* harmony import */ var _components_prestadores_prestadores_detalle_prestadores_detalle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/prestadores/prestadores-detalle/prestadores-detalle.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle/prestadores-detalle.component.ts");
/* harmony import */ var _components_sedes_sedes_detalle_sedes_detalle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sedes/sedes-detalle/sedes-detalle.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle/sedes-detalle.component.ts");
/* harmony import */ var _components_servicios_servicios_detalle_servicios_detalle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/servicios/servicios-detalle/servicios-detalle.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle/servicios-detalle.component.ts");
/* harmony import */ var _components_capacidad_capacidad_detalle_capacidad_detalle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/capacidad/capacidad-detalle/capacidad-detalle.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle/capacidad-detalle.component.ts");
/* harmony import */ var _components_seguridad_seguridad_detalle_seguridad_detalle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/seguridad/seguridad-detalle/seguridad-detalle.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle/seguridad-detalle.component.ts");
/* harmony import */ var _components_sanciones_sanciones_detalle_sanciones_detalle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sanciones/sanciones-detalle/sanciones-detalle.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle/sanciones-detalle.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _services_NumberDirective__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/NumberDirective */ "./src/app/tramites/minsalud-consulta/services/NumberDirective.ts");
/* harmony import */ var _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/minsalud-consulta-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts");
/* harmony import */ var _components_prestadores_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.ts");
/* harmony import */ var _components_sedes_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sedes/sedes-detalle-modal/sedes-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.ts");
/* harmony import */ var _components_servicios_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/servicios/servicios-detalle-modal/servicios-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.ts");
/* harmony import */ var _components_capacidad_capacidad_detalle_modal_capacidad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.ts");
/* harmony import */ var _components_seguridad_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.ts");
/* harmony import */ var _components_sanciones_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.ts");
/* harmony import */ var _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/services/recaptcha/recaptcha.service */ "./src/app/shared/services/recaptcha/recaptcha.service.ts");
/* harmony import */ var _services_minsalud_modal_util_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/minsalud-modal-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-modal-util.service.ts");































const routes = [
    {
        path: "",
        component: _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_8__["PrestadoresFiltroComponent"],
        children: []
    }
];
let MinsaludConsultaModule = class MinsaludConsultaModule {
};
MinsaludConsultaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"], _components_prestadores_prestadores_filtro_prestadores_filtro_component__WEBPACK_IMPORTED_MODULE_8__["PrestadoresFiltroComponent"], _components_sedes_sedes_filtro_sedes_filtro_component__WEBPACK_IMPORTED_MODULE_9__["SedesFiltroComponent"], _components_servicios_servicios_filtro_servicios_filtro_component__WEBPACK_IMPORTED_MODULE_10__["ServiciosFiltroComponent"], _components_capacidad_capacidad_filtro_capacidad_filtro_component__WEBPACK_IMPORTED_MODULE_11__["CapacidadFiltroComponent"], _components_seguridad_seguridad_filtro_seguridad_filtro_component__WEBPACK_IMPORTED_MODULE_12__["SeguridadFiltroComponent"], _components_sanciones_sanciones_filtro_sanciones_filtro_component__WEBPACK_IMPORTED_MODULE_13__["SancionesFiltroComponent"], _components_prestadores_prestadores_detalle_prestadores_detalle_component__WEBPACK_IMPORTED_MODULE_14__["PrestadoresDetalleComponent"], _components_sedes_sedes_detalle_sedes_detalle_component__WEBPACK_IMPORTED_MODULE_15__["SedesDetalleComponent"], _components_servicios_servicios_detalle_servicios_detalle_component__WEBPACK_IMPORTED_MODULE_16__["ServiciosDetalleComponent"], _components_capacidad_capacidad_detalle_capacidad_detalle_component__WEBPACK_IMPORTED_MODULE_17__["CapacidadDetalleComponent"], _components_seguridad_seguridad_detalle_seguridad_detalle_component__WEBPACK_IMPORTED_MODULE_18__["SeguridadDetalleComponent"], _components_sanciones_sanciones_detalle_sanciones_detalle_component__WEBPACK_IMPORTED_MODULE_19__["SancionesDetalleComponent"], _services_NumberDirective__WEBPACK_IMPORTED_MODULE_21__["NumberDirective"], _components_prestadores_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_23__["PrestadoresDetalleModalComponent"], _components_sedes_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_24__["SedesDetalleModalComponent"], _components_servicios_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_25__["ServiciosDetalleModalComponent"], _components_capacidad_capacidad_detalle_modal_capacidad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_26__["CapacidadDetalleModalComponent"], _components_seguridad_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_27__["SeguridadDetalleModalComponent"], _components_sanciones_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_28__["SancionesDetalleModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _minsalud_consulta_routing_module__WEBPACK_IMPORTED_MODULE_6__["MinsaludConsultaRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_20__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_20__["RecaptchaModule"]
        ],
        entryComponents: [
            _components_prestadores_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_23__["PrestadoresDetalleModalComponent"],
            _components_sedes_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_24__["SedesDetalleModalComponent"],
            _components_servicios_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_25__["ServiciosDetalleModalComponent"],
            _components_capacidad_capacidad_detalle_modal_capacidad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_26__["CapacidadDetalleModalComponent"],
            _components_seguridad_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_27__["SeguridadDetalleModalComponent"],
            _components_sanciones_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_28__["SancionesDetalleModalComponent"]
        ],
        providers: [
            _services_minsalud_consulta_util_service__WEBPACK_IMPORTED_MODULE_22__["MinsaludConsultaUtilService"],
            _components_prestadores_prestadores_detalle_prestadores_detalle_component__WEBPACK_IMPORTED_MODULE_14__["PrestadoresDetalleComponent"],
            _components_sedes_sedes_detalle_sedes_detalle_component__WEBPACK_IMPORTED_MODULE_15__["SedesDetalleComponent"],
            _components_servicios_servicios_detalle_servicios_detalle_component__WEBPACK_IMPORTED_MODULE_16__["ServiciosDetalleComponent"],
            _components_capacidad_capacidad_detalle_capacidad_detalle_component__WEBPACK_IMPORTED_MODULE_17__["CapacidadDetalleComponent"],
            _components_seguridad_seguridad_detalle_seguridad_detalle_component__WEBPACK_IMPORTED_MODULE_18__["SeguridadDetalleComponent"],
            _components_sanciones_sanciones_detalle_sanciones_detalle_component__WEBPACK_IMPORTED_MODULE_19__["SancionesDetalleComponent"],
            _shared_services_recaptcha_recaptcha_service__WEBPACK_IMPORTED_MODULE_29__["RecaptchaService"],
            _services_minsalud_modal_util_service__WEBPACK_IMPORTED_MODULE_30__["MinsaludModalUtilService"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MinsaludConsultaModule);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/services/NumberDirective.ts":
/*!************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/services/NumberDirective.ts ***!
  \************************************************************************/
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

/***/ "./src/app/tramites/minsalud-consulta/services/messages-filters.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/services/messages-filters.ts ***!
  \*************************************************************************/
/*! exports provided: MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
const MESSAGES = {
    Error: 'No fue posible obtener la consulta. Intente nuevamente.',
    EmptyQuery: 'Debe ingresar mínimo un filtro para realizar la búsqueda.',
    SuccessDownload: 'Certificado descargado correctamente.',
    ErrorDownload: 'No fue posible descargar el documento generado.',
    NoFilter: 'Debe seleccionar al menos un (1) filtro',
    Sorry: 'Lo sentimos',
    Recaptcha: 'Verifique nuevamente la selección del ReCAPTCHA',
    NoData: 'No se encontraron coincidencia con los filtros seleccionados.'
};


/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/services/minsalud-consulta-util.service.ts ***!
  \***************************************************************************************/
/*! exports provided: MinsaludConsultaUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinsaludConsultaUtilService", function() { return MinsaludConsultaUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _minsalud_modal_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./minsalud-modal-util.service */ "./src/app/tramites/minsalud-consulta/services/minsalud-modal-util.service.ts");









let MinsaludConsultaUtilService = class MinsaludConsultaUtilService {
    constructor(router, http, modalService, minsaludModal) {
        this.router = router;
        this.http = http;
        this.modalService = modalService;
        this.minsaludModal = minsaludModal;
        this.isChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.invalidForm = false;
        this.invalidRecaptcha = false;
        this.opciones = ['Prestadores', 'Sedes', 'Servicios', 'Capacidad', 'Medidas de seguridad', 'Sanciones'];
        this.opcionSeleccionada = this.opciones[0];
        this.idsTablaPrestadores = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_prestador', 'nombre_prestador', 'direccion', 'telefono'];
        this.idsTablaSedes = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_prestador', 'nombre_prestador', 'codigo_sede', 'sede_principal', 'nombre_sede', 'zona', 'direccion', 'telefono'];
        this.idsTablaServicios = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_sede', 'nombre_sede', 'serv_nombre', 'numero_distintivo'];
        this.idsTablaCapacidad = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_sede', 'sede_principal', 'nombre_sede', 'grupo_capacidad', 'cantidad', 'numero_placa', 'modalidad', 'modelo', 'numero_tarjeta'];
        this.idsTablaSeguridad = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_sede', 'sede_principal', 'nombre_sede', 'serv_nombre', 'numero_distintivo'];
        this.idsTablaSanciones = ['id', 'departamento_prestador', 'municipio_prestador', 'codigo_sede', 'sede_principal', 'nombre_sede', 'serv_nombre', 'numero_distintivo'];
        this.urlTramite = {
            listas: 'minsalud/ConsultaPrestadores/listas',
            detalle: 'minsalud/ConsultaPrestadores/detalle',
            detalleExcel: 'minsalud/ConsultaPrestadores/detalleExcel',
        };
        this.tipoLista = {
            naturalezaJuridica: 'naturaleza_juridica',
            caracterTerritorial: 'caracter',
            clasePrestador: 'clase_prestador',
            concepto: 'concepto',
            departamento: 'Departamentos',
            empresaSocialEstado: 'ESE',
            grupo: 'grupo_servicio',
            municipio: 'Municipios',
            nivelAtencionPrestador: 'nivel',
            nombreServicio: 'Servicio',
            sedePrincipal: 'SedePrincipal',
            zona: 'zona'
        };
        this.tipoDetalle = {
            prestadores: 'Habilitados',
            sedes: 'Sedes',
            servicios: 'Servicios',
            capacidad: 'Capacidad',
            seguridad: 'Medidas',
            sanciones: 'Sanciones'
        };
        // Función general para el evento de abrir modal sobre la tabla detalle
        this.getDetail = (e, item, index) => {
            this.registroSeleccionado = this.detalleConsulta[item[0].content]; // TODO: Validar la carga de data en la instancia
            this.minsaludModal.getDetail(item, this.opcionSeleccionada);
        };
        this.cantidadRegistros = 0;
        this.cantidadRegistrosOtro = 0;
        this.inicializarFiltro();
        this.inicializarRegistroSeleccionado();
    }
    //Retorna la bandera si selecciona detalle o no
    getMostrarDetalle(name) {
        return this.mostrarDetalle;
    }
    asignarMostrarDetalle(mostrarDetalleParam) {
        this.mostrarDetalle = mostrarDetalleParam;
        return this.mostrarDetalle;
    }
    asignarMostrarDetalleSinResultados(mostrarDetalleSinResultadosParam) {
        this.mostrarDetalleSinResultados = mostrarDetalleSinResultadosParam;
        return this.mostrarDetalleSinResultados;
    }
    asignarDescargaCompleta(descargaCompletaParam) {
        this.descargaCompleta = descargaCompletaParam;
        return this.descargaCompleta;
    }
    cargarListasPrestadores() {
        this.getListaNaturalezaJuridica();
        this.getListaDepartamento();
        this.getListaMunicipio();
        this.getListaClasePrestador();
        this.getListaEmpresaSocialEstado();
        this.getListaNivelAtencionPrestador();
        this.getListaCaracterTerritorial();
    }
    cargarListasSedes() {
        this.getListaNaturalezaJuridica();
        this.getListaDepartamento();
        this.getListaMunicipio();
        this.getListaClasePrestador();
        this.getListaEmpresaSocialEstado();
        this.getListaNivelAtencionPrestador();
        this.getListaCaracterTerritorial();
        this.getListaSedePrincipal();
        this.getListaZona();
    }
    cargarListasServicios() {
        this.getListaNaturalezaJuridica();
        this.getListaGrupo();
        this.getListaNombreServicio();
        this.getListaDepartamento();
        this.getListaMunicipio();
        this.getListaClasePrestador();
        this.getListaEmpresaSocialEstado();
        this.getListaNivelAtencionPrestador();
        this.getListaCaracterTerritorial();
    }
    cargarListasCapacidad() {
        this.getListaNaturalezaJuridica();
        this.getListaGrupo();
        this.getListaConcepto();
        this.getListaDepartamento();
        this.getListaMunicipio();
        this.getListaClasePrestador();
        this.getListaEmpresaSocialEstado();
        this.getListaNivelAtencionPrestador();
        this.getListaCaracterTerritorial();
    }
    // public cargarListasSeguridad(){
    //   this.getListaNaturalezaJuridica();
    //   this.getListaGrupo();
    //   this.getListaNombreServicio();
    //   this.getListaDepartamento();
    //   this.getListaMunicipio();
    //   this.getListaClasePrestador();
    //   this.getListaEmpresaSocialEstado();
    //   this.getListaNivelAtencionPrestador();
    //   this.getListaCaracterTerritorial();
    // }
    cargarListasSanciones() {
        this.getListaNaturalezaJuridica();
        this.getListaGrupo();
        this.getListaNombreServicio();
        this.getListaDepartamento();
        this.getListaMunicipio();
        this.getListaSedePrincipal();
        this.getListaZona();
        this.getListaClasePrestador();
        this.getListaNivelAtencionPrestador();
        this.getListaCaracterTerritorial();
    }
    cargarListas() {
        this.getListaNaturalezaJuridica();
        this.getListaCaracterTerritorial();
        this.getListaClasePrestador();
        this.getListaConcepto();
        this.getListaDepartamento();
        this.getListaEmpresaSocialEstado();
        this.getListaGrupo();
        this.getListaMunicipio();
        this.getListaNivelAtencionPrestador();
        this.getListaNombreServicio();
        this.getListaSedePrincipal();
        this.getListaZona();
    }
    getListaNaturalezaJuridica() {
        this.getListas_modificada(this.tipoLista.naturalezaJuridica).subscribe(
        // Success response
        response => {
            this.listaNaturalezaJuridica = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaCaracterTerritorial() {
        this.getListas_modificada(this.tipoLista.caracterTerritorial).subscribe(
        // Success response
        response => {
            this.listaCaracterTerritorial = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaClasePrestador() {
        this.getListas_modificada(this.tipoLista.clasePrestador).subscribe(
        // Success response
        response => {
            this.listaClasePrestador = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaConcepto() {
        this.getListas_modificada(this.tipoLista.concepto).subscribe(
        // Success response
        response => {
            this.listaConcepto = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaDepartamento() {
        this.getListas_modificada(this.tipoLista.departamento).subscribe(
        // Success response
        response => {
            this.listaDepartamento = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaEmpresaSocialEstado() {
        this.getListas_modificada(this.tipoLista.empresaSocialEstado).subscribe(
        // Success response
        response => {
            this.listaEmpresaSocialEstado = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaGrupo() {
        this.getListas_modificada(this.tipoLista.grupo).subscribe(
        // Success response
        response => {
            this.listaGrupo = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaMunicipio() {
        this.getListas_modificada(this.tipoLista.municipio).subscribe(
        // Success response
        response => {
            this.listaMunicipio = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaNivelAtencionPrestador() {
        this.getListas_modificada(this.tipoLista.nivelAtencionPrestador).subscribe(
        // Success response
        response => {
            this.listaNivelAtencionPrestador = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaNombreServicio() {
        this.getListas_modificada(this.tipoLista.nombreServicio).subscribe(
        // Success response
        response => {
            this.listaNombreServicio = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaSedePrincipal() {
        this.getListas_modificada(this.tipoLista.sedePrincipal).subscribe(
        // Success response
        response => {
            this.listaSedePrincipal = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    getListaZona() {
        this.getListas_modificada(this.tipoLista.zona).subscribe(
        // Success response
        response => {
            this.listaZona = response;
        }, 
        // Failure response
        error => {
            console.error(error);
        });
    }
    // Cargar listas (Operadores - Peridos)
    getListas_modificada(tipoListaParam) {
        this.tipoListaModel = { "valor": tipoListaParam };
        return this.http.post(this.urlTramite.listas, this.tipoListaModel, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    getDetalleConsulta(tipoDetalleParam, idsTablaSedesParam) {
        this.getDetalle(tipoDetalleParam).subscribe(
        // Success response
        response => {
            this.detalleConsulta = response;
            //console.log('Prestadores 2...');
            //se inicializa, segun sea el caso
            if (tipoDetalleParam == this.tipoDetalle.prestadores)
                this.inicializarTablaDetallePrestadores();
            if (tipoDetalleParam == this.tipoDetalle.sedes)
                this.inicializarTablaDetalleSedes();
            if (tipoDetalleParam == this.tipoDetalle.servicios)
                this.inicializarTablaDetalleServicios();
            if (tipoDetalleParam == this.tipoDetalle.capacidad)
                this.inicializarTablaDetalleCapacidad();
            if (tipoDetalleParam == this.tipoDetalle.seguridad)
                //this.inicializarTablaDetalleSeguridad();
                this.inicializarTablaDetalleServicios();
            if (tipoDetalleParam == this.tipoDetalle.sanciones)
                //this.inicializarTablaDetalleSanciones();
                this.inicializarTablaDetalleServicios();
            //console.log('Prestadores 3...');
            this.setTablaDetalleDatos(idsTablaSedesParam);
            //console.log('Prestadores 4...');
            //Se activan las banderas respectivas para que se muestre el detalle
            this.asignarMostrarDetalle(true);
            //console.log('Prestadores 5...');
            this.asignarMostrarDetalleSinResultados(false);
            if (this.detalleConsulta == null || this.detalleConsulta.length == 0) {
                this.cantidadRegistrosOtro = this.detalleConsulta.length;
                this.asignarMostrarDetalle(false);
                this.asignarMostrarDetalleSinResultados(true);
            }
        }, 
        // Failure response
        error => {
            console.error(error);
        });
        if (this.detalleConsulta == null)
            this.detalleConsulta = [];
    }
    isIE() {
        const ua = navigator.userAgent;
        const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        return isIe;
    }
    getDetalleConsultaExcel(tipoDetalleParam) {
        console.log('llega getDetalleConsultaExcel=...' + tipoDetalleParam);
        this.getDetalleExcel(tipoDetalleParam).subscribe((data) => {
            window.scroll(0, 0);
            const newBlob = new Blob([data], { type: 'application/vnd.ms-excel' });
            // IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob && this.isIE()) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // Otros navegadores
            const downloadURL = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'Consulta de prestadores de salud ' + tipoDetalleParam + '.xls';
            link.click();
            return;
        }, (error) => {
            return;
        });
        console.log('Termina getDetalleConsultaExcel=...' + this.detalleConsulta.length);
    }
    // Cargar detalle
    getDetalle(tipoDetalle) {
        this.filtro.historia = tipoDetalle;
        return this.http.post(this.urlTramite.detalle, this.filtro, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Generar certificado
    getDetalleExcel(tipoDetalle) {
        return this.http.post(this.urlTramite.detalleExcel, this.filtro, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json').append('angular-show-loading', 'true')
        });
    }
    // Error petición
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    inicializarTablaDetallePrestadores() {
        this.tDetail = {
            Header: [
                { content: 'Id', filter: false, typeFilter: '', hidden: true },
                { content: 'Departamento', columnName: 'Departamento', order: 1 },
                { content: 'Municipio', columnName: 'Municipio', order: 2 },
                { content: 'Código prestador', columnName: 'Código prestador', order: 3 },
                { content: 'Nombre prestador', columnName: 'Nombre prestador', order: 4 },
                { content: 'Dirección', columnName: 'Dirección', order: 5 },
                { content: 'Teléfono', columnName: 'Teléfono', order: 6 }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    inicializarTablaDetalleSedes() {
        this.tDetail = {
            Header: [
                { content: 'Id', filter: false, typeFilter: '', hidden: true },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Código prestador', filter: false, typeFilter: '' },
                { content: 'Nombre prestador', filter: false, typeFilter: '' },
                { content: 'Código sede prestador', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Nombre sede prestador', filter: false, typeFilter: '' },
                { content: 'Zona', filter: false, typeFilter: '' },
                { content: 'Dirección', filter: false, typeFilter: '' },
                { content: 'Teléfono', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    inicializarTablaDetalleServicios() {
        this.tDetail = {
            Header: [
                { content: 'Id', filter: false, typeFilter: '', hidden: true },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Código sede', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Nombre Sede Prestador', filter: false, typeFilter: '' },
                { content: 'Servicio', filter: false, typeFilter: '' },
                { content: 'Distintivo', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    inicializarTablaDetalleCapacidad() {
        this.tDetail = {
            Header: [
                { content: 'Id', filter: false, typeFilter: '', hidden: true },
                { content: 'Departamento', filter: false, typeFilter: '' },
                { content: 'Municipio', filter: false, typeFilter: '' },
                { content: 'Código sede prestador', filter: false, typeFilter: '' },
                { content: 'Sede', filter: false, typeFilter: '' },
                { content: 'Nombre sede prestador', filter: false, typeFilter: '' },
                { content: 'Grupo', filter: false, typeFilter: '' },
                { content: 'Cantidad', filter: false, typeFilter: '' },
                { content: 'No. de placa', filter: false, typeFilter: '' },
                { content: 'Modalidad', filter: false, typeFilter: '' },
                { content: 'Modelo', filter: false, typeFilter: '' },
                { content: 'Tarjeta propiedad', filter: false, typeFilter: '' }
            ],
            Body: [],
            ConfigHeader: [],
            ConfigBody: []
        };
    }
    /*
    Función que llena la tabla detalle con las columnas especificadas en el array que pasa por parametro
    param: idsTablaSedesParam = Array definido en esta clase this.idsTablaSedes
    */
    setTablaDetalleDatos(idsTablaSedesParam) {
        //Se recorre la lista de objetos
        for (let indexDatos = 0; indexDatos < this.detalleConsulta.length; indexDatos++) {
            const listElements = [];
            const data = Object.keys(this.detalleConsulta[indexDatos]);
            //Se recorre el array de campos para asignarlos en el orden que se requiere
            for (let indexIds = 0; indexIds < idsTablaSedesParam.length; indexIds++) {
                // Se recorre la fila, para obtener el orden especifico que se requiere
                for (let j = 0; j < data.length; j++) {
                    const element = this.detalleConsulta[indexDatos][data[j]];
                    const el = {
                        content: element
                    };
                    if (data[j] === idsTablaSedesParam[indexIds]) {
                        //Solo se abre el popup al nombre del prestador
                        if (data[j] === 'nombre_prestador' || data[j] === 'nombre_sede') {
                            el.type = 'link-event';
                            el.class = 'btn btn-low wspace-normal';
                            el.event = this.getDetail;
                        }
                        listElements.push(el);
                    }
                }
            }
            //Se adiciona la fila, con el orden de campos especificado
            this.tDetail.Body.push(listElements);
            this.cantidadRegistros = listElements.length;
        }
    }
    inicializarFiltro() {
        this.filtro = this.inicializarFiltroJson("");
        this.listaMunicipioFiltrado = [];
        this.listaMunicipioFiltrado2 = [];
    }
    inicializarFiltroJson(historiaParam) {
        const filtroTemp = { historia: "", numero_documento: "", naturaleza_juridica: "", departamento_prestador: "", municipio_prestador: "", codigo_prestador: "", nombre_prestador: "", clase_prestador: "", ese: "", nivel_atencion: "", caracter_territorial: "", departamento_sede: "", municipio_sede: "", codigo_sede: "", sede_principal: "", nombre_sede: "", zona: "", grupo: "", codigo_servicio: "", intramural_ambulatorio: "", intramural_hospitalario: "", extramural_domiciliario: "", extramural_otras: "", extramural_unidad: "", telemedicina_centro: "", telemedicina_institucion: "", complejidad_baja: "", complejidad_media: "", complejidad_alta: "", servicio_nombre: "", concepto: "" };
        filtroTemp.historia = historiaParam;
        return filtroTemp;
    }
    inicializarRegistroSeleccionado() {
        if (this.registroSeleccionado == null)
            this.registroSeleccionado = { barrio: "", caracter_territorial: "", centro_poblado: "", clase_prestador: "", codigo_prestador: "", codigo_sede: "", codigo_sede_prestador: "", correo_electronico: "", departamento_prestador: "", departamento_sede: "", direccion: "", ese: "", fax: "", fecha_apertura: "", gerente: "", municipio: "", municipio_prestador: "", municipio_sede: "", naturaleza_juridica: "", nivel_atencion: "", nombre_prestador: "", nombre_sede: "", nombre_sede_prestador: "", numero_documento: "", sede: "", sede_principal: "", telefono: "", tipo_documento: "", zona: "", serv_nombre: "", dv: "", indigena: "", grupo_capacidad: "", coca_codigo: "", coca_nombre: "", cantidad: "", numero_placa: "", modalidad: "", modelo: "", numero_tarjeta: "", codigo_habilitacion: "", numero_distintivo: "", razon_social: "", fecha_radicacion: "", fecha_vencimiento: "", id: "", ambulatorio: "", hospitalario: "", unidad_movil: "", domiciliario: "", otras_extramural: "", centro_referencia: "", institucion_remisora: "", complejidad_baja: "", complejidad_media: "", complejidad_alta: "", complejidad: "", concepto: "" };
    }
    seleccionarHistoria(opcionSeleccionadaParam) {
        this.opcionSeleccionada = opcionSeleccionadaParam;
        //En caso de que venga la opcion 'Medidas se seguridad, que es el nombre de la pestaña, se pone solo Medidas'
        if (opcionSeleccionadaParam == this.opciones[4]) {
            this.router.navigate(['/minsalud-consulta/Medidas']);
        }
        else
            this.router.navigate(['/minsalud-consulta/' + this.opcionSeleccionada]);
    }
    //Carga la lista de municipios principal de departamentos seleccionados
    cargarMunicipios(idDepartamento) {
        this.listaMunicipioFiltrado = [];
        if (idDepartamento != null && idDepartamento != "") {
            for (let index = 0; index < this.listaMunicipio.length; index++) {
                if (this.listaMunicipio[index].value == "" || this.listaMunicipio[index].value.substring(0, 2) == idDepartamento) {
                    this.listaMunicipioFiltrado.push(this.listaMunicipio[index]);
                }
            }
        }
    }
    //Se crea un segundo evento, cuando el mismo formulario tiene dos listas de municipios diferentes
    cargarMunicipios2(idDepartamento) {
        this.listaMunicipioFiltrado2 = [];
        if (idDepartamento != null && idDepartamento != "") {
            for (let index = 0; index < this.listaMunicipio.length; index++) {
                if (this.listaMunicipio[index].value == "" || this.listaMunicipio[index].value.substring(0, 2) == idDepartamento) {
                    this.listaMunicipioFiltrado2.push(this.listaMunicipio[index]);
                }
            }
        }
    }
    backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
};
MinsaludConsultaUtilService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _minsalud_modal_util_service__WEBPACK_IMPORTED_MODULE_7__["MinsaludModalUtilService"] }
];
MinsaludConsultaUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MinsaludConsultaUtilService);



/***/ }),

/***/ "./src/app/tramites/minsalud-consulta/services/minsalud-modal-util.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tramites/minsalud-consulta/services/minsalud-modal-util.service.ts ***!
  \************************************************************************************/
/*! exports provided: MinsaludModalUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinsaludModalUtilService", function() { return MinsaludModalUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_prestadores_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/prestadores/prestadores-detalle-modal/prestadores-detalle-modal.component.ts");
/* harmony import */ var _components_sedes_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sedes/sedes-detalle-modal/sedes-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sedes/sedes-detalle-modal/sedes-detalle-modal.component.ts");
/* harmony import */ var _components_servicios_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/servicios/servicios-detalle-modal/servicios-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/servicios/servicios-detalle-modal/servicios-detalle-modal.component.ts");
/* harmony import */ var _components_capacidad_capacidad_detalle_modal_capacidad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/capacidad/capacidad-detalle-modal/capacidad-detalle-modal.component.ts");
/* harmony import */ var _components_seguridad_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/seguridad/seguridad-detalle-modal/seguridad-detalle-modal.component.ts");
/* harmony import */ var _components_sanciones_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component */ "./src/app/tramites/minsalud-consulta/components/sanciones/sanciones-detalle-modal/sanciones-detalle-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let MinsaludModalUtilService = class MinsaludModalUtilService {
    constructor(modalService) {
        this.modalService = modalService;
        this.componentsType = [
            {
                name: 'Prestadores',
                component: _components_prestadores_prestadores_detalle_modal_prestadores_detalle_modal_component__WEBPACK_IMPORTED_MODULE_2__["PrestadoresDetalleModalComponent"]
            },
            {
                name: 'Sedes',
                component: _components_sedes_sedes_detalle_modal_sedes_detalle_modal_component__WEBPACK_IMPORTED_MODULE_3__["SedesDetalleModalComponent"]
            },
            {
                name: 'Servicios',
                component: _components_servicios_servicios_detalle_modal_servicios_detalle_modal_component__WEBPACK_IMPORTED_MODULE_4__["ServiciosDetalleModalComponent"]
            },
            {
                name: 'Capacidad',
                component: _components_capacidad_capacidad_detalle_modal_capacidad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_5__["CapacidadDetalleModalComponent"]
            },
            {
                name: 'Medidas de seguridad',
                component: _components_seguridad_seguridad_detalle_modal_seguridad_detalle_modal_component__WEBPACK_IMPORTED_MODULE_6__["SeguridadDetalleModalComponent"]
            },
            {
                name: 'Sanciones',
                component: _components_sanciones_sanciones_detalle_modal_sanciones_detalle_modal_component__WEBPACK_IMPORTED_MODULE_7__["SancionesDetalleModalComponent"]
            },
        ];
        // Función general para el evento de abrir modal sobre la tabla detalle
        this.getDetail = (item, opt) => {
            const componentDetail = this.componentsType.find(p => p.name === opt);
            const modal = this.modalService.open(componentDetail.component, {
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                centered: true,
                scrollable: true,
                windowClass: 'modal-detail-govco'
            });
            modal.componentInstance.data = item;
        };
    }
};
MinsaludModalUtilService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }
];
MinsaludModalUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MinsaludModalUtilService);



/***/ })

}]);
//# sourceMappingURL=tramites-minsalud-consulta-minsalud-consulta-module-es2015.a48f9d697645dcd3419f.js.map