(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n@-webkit-keyframes bs-notify-fadeOut {\n  0% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes bs-notify-fadeOut {\n  0% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n  }\n}\nselect.bs-select-hidden,\n.bootstrap-select > select.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}\n.bootstrap-select {\n  width: 220px \\0 ;\n  /*IE9 and below*/\n  vertical-align: middle;\n}\n.bootstrap-select > .dropdown-toggle {\n  position: relative;\n  width: 100%;\n  text-align: right;\n  white-space: nowrap;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.bootstrap-select > .dropdown-toggle:after {\n  margin-top: -1px;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder, .bootstrap-select > .dropdown-toggle.bs-placeholder:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:active, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:active, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:active, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:active, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:active, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:hover, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:focus, .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:active {\n  color: rgba(255, 255, 255, 0.5);\n}\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n  z-index: 0 !important;\n}\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2 !important;\n}\n.has-error .bootstrap-select .dropdown-toggle, .error .bootstrap-select .dropdown-toggle, .bootstrap-select.is-invalid .dropdown-toggle, .was-validated .bootstrap-select select:invalid + .dropdown-toggle {\n  border-color: #b94a48;\n}\n.bootstrap-select.is-valid .dropdown-toggle, .was-validated .bootstrap-select select:valid + .dropdown-toggle {\n  border-color: #28a745;\n}\n.bootstrap-select.fit-width {\n  width: auto !important;\n}\n.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {\n  width: 220px;\n}\n.bootstrap-select > select.mobile-device:focus + .dropdown-toggle,\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n  height: auto;\n}\n:not(.input-group) > .bootstrap-select.form-control:not([class*=col-]) {\n  width: 100%;\n}\n.bootstrap-select.form-control.input-group-btn {\n  float: none;\n  z-index: auto;\n}\n.form-inline .bootstrap-select, .form-inline .bootstrap-select.form-control:not([class*=col-]) {\n  width: auto;\n}\n.bootstrap-select:not(.input-group-btn), .bootstrap-select[class*=col-] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}\n.bootstrap-select.dropdown-menu-right, .bootstrap-select[class*=col-].dropdown-menu-right, .row .bootstrap-select[class*=col-].dropdown-menu-right {\n  float: right;\n}\n.form-inline .bootstrap-select, .form-horizontal .bootstrap-select, .form-group .bootstrap-select {\n  margin-bottom: 0;\n}\n.form-group-lg .bootstrap-select.form-control, .form-group-sm .bootstrap-select.form-control {\n  padding: 0;\n}\n.form-group-lg .bootstrap-select.form-control .dropdown-toggle, .form-group-sm .bootstrap-select.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.bootstrap-select.form-control-sm .dropdown-toggle, .bootstrap-select.form-control-lg .dropdown-toggle {\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.bootstrap-select.form-control-sm .dropdown-toggle {\n  padding: 0.25rem 0.5rem;\n}\n.bootstrap-select.form-control-lg .dropdown-toggle {\n  padding: 0.5rem 1rem;\n}\n.form-inline .bootstrap-select .form-control {\n  width: 100%;\n}\n.bootstrap-select.disabled,\n.bootstrap-select > .disabled {\n  cursor: not-allowed;\n}\n.bootstrap-select.disabled:focus,\n.bootstrap-select > .disabled:focus {\n  outline: none !important;\n}\n.bootstrap-select.bs-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0 !important;\n  padding: 0 !important;\n}\n.bootstrap-select.bs-container .dropdown-menu {\n  z-index: 1060;\n}\n.bootstrap-select .dropdown-toggle .filter-option {\n  position: static;\n  top: 0;\n  left: 0;\n  float: left;\n  height: 100%;\n  width: 100%;\n  text-align: left;\n  overflow: hidden;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n.bs3.bootstrap-select .dropdown-toggle .filter-option {\n  padding-right: inherit;\n}\n.input-group .bs3-has-addon.bootstrap-select .dropdown-toggle .filter-option {\n  position: absolute;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  padding-left: inherit;\n  float: none;\n}\n.input-group .bs3-has-addon.bootstrap-select .dropdown-toggle .filter-option .filter-option-inner {\n  padding-right: inherit;\n}\n.bootstrap-select .dropdown-toggle .filter-option-inner-inner {\n  overflow: hidden;\n}\n.bootstrap-select .dropdown-toggle .filter-expand {\n  width: 0 !important;\n  float: left;\n  opacity: 0 !important;\n  overflow: hidden;\n}\n.bootstrap-select .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n.input-group .bootstrap-select.form-control .dropdown-toggle {\n  border-radius: inherit;\n}\n.bootstrap-select[class*=col-] .dropdown-toggle {\n  width: 100%;\n}\n.bootstrap-select .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}\n.bootstrap-select .dropdown-menu > .inner:focus {\n  outline: none !important;\n}\n.bootstrap-select .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.bootstrap-select .dropdown-menu li {\n  position: relative;\n}\n.bootstrap-select .dropdown-menu li.active small {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.bootstrap-select .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}\n.bootstrap-select .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bootstrap-select .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}\n.bootstrap-select .dropdown-menu li a span.check-mark {\n  display: none;\n}\n.bootstrap-select .dropdown-menu li a span.text {\n  display: inline-block;\n}\n.bootstrap-select .dropdown-menu li small {\n  padding-left: 0.5em;\n}\n.bootstrap-select .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: whitesmoke;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}\n.bootstrap-select .dropdown-menu .notify.fadeOut {\n  -webkit-animation: 300ms linear 750ms forwards bs-notify-fadeOut;\n          animation: 300ms linear 750ms forwards bs-notify-fadeOut;\n}\n.bootstrap-select .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}\n.bootstrap-select.fit-width .dropdown-toggle .filter-option {\n  position: static;\n  display: inline;\n  padding: 0;\n}\n.bootstrap-select.fit-width .dropdown-toggle .filter-option-inner,\n.bootstrap-select.fit-width .dropdown-toggle .filter-option-inner-inner {\n  display: inline;\n}\n.bootstrap-select.fit-width .dropdown-toggle .bs-caret:before {\n  content: \" \";\n}\n.bootstrap-select.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}\n.bootstrap-select.show-tick .dropdown-menu .selected span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  top: 5px;\n}\n.bootstrap-select.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}\n.bootstrap-select .bs-ok-default:after {\n  content: \"\";\n  display: block;\n  width: 0.5em;\n  height: 1em;\n  border-style: solid;\n  border-width: 0 0.26em 0.26em 0;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle, .bootstrap-select.show-menu-arrow.show > .dropdown-toggle {\n  z-index: 1061;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:before {\n  content: \"\";\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:after {\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle .filter-option:before {\n  bottom: auto;\n  top: -4px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle .filter-option:after {\n  bottom: auto;\n  top: -4px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle .filter-option:before {\n  right: 12px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle .filter-option:after {\n  right: 13px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle .filter-option:before, .bootstrap-select.show-menu-arrow.open > .dropdown-toggle .filter-option:after, .bootstrap-select.show-menu-arrow.show > .dropdown-toggle .filter-option:before, .bootstrap-select.show-menu-arrow.show > .dropdown-toggle .filter-option:after {\n  display: block;\n}\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}\n.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-actionsbox .btn-group button {\n  width: 50%;\n}\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-donebutton .btn-group button {\n  width: 100%;\n}\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}\n.ficha_detalles .text-intro {\n  text-align: center;\n  margin-top: 1em;\n}\n.ficha_detalles .text-intro h3 {\n  font-weight: normal;\n  font-size: 1.5em;\n}\n.ficha_detalles .nav-tabs {\n  border-bottom: none !important;\n}\n.ficha_detalles .nav-tabs .nav-link {\n  border: 1px solid #dee2e6;\n  background: #E5EEFB;\n}\n.ficha_detalles .tab-content {\n  border-radius: 0 30px 30px;\n  padding: 1.5em;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.ficha_detalles .card {\n  border: none !important;\n  border-radius: 30px;\n}\n.ficha_detalles .card .card-header {\n  background-color: #fff;\n  border: none !important;\n  border-radius: 30px;\n  padding: 0;\n}\n.ficha_detalles .card button.collapsed .icon::before {\n  font-family: \"Govco Icon\";\n  font-size: 2rem;\n  content: \"\";\n}\n.ficha_detalles .card button {\n  border-bottom: 2px solid #dee2e6;\n  border-radius: 0;\n  margin: 0;\n  width: 100%;\n  white-space: normal;\n  text-align: left;\n  font-size: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer !important;\n  color: #004884;\n}\n.ficha_detalles .card button:hover {\n  background-color: #E5EFFB;\n  text-decoration: none !important;\n  border-bottom: 2px solid #dee2e6;\n}\n.ficha_detalles .card button:not(.collapsed) {\n  background-color: #004884 !important;\n  color: #fff !important;\n  text-decoration: none !important;\n  border-bottom: 2px solid #004884;\n}\n.ficha_detalles .card button:not(.collapsed) .icon::before {\n  font-family: \"Govco Icon\";\n  font-size: 2rem;\n  content: \"\";\n  color: #fff;\n}\n.ficha_detalles .card button h3 {\n  padding: 1em 1.5em 1em 0;\n  margin: 0;\n  font-size: 1em;\n}\n.ficha_detalles .card .card-body {\n  background: #E5EFFD !important;\n}\n.ficha_detalles .card .card-body h4 {\n  font-size: 1em;\n}\n.ficha_detalles .card .card-body .condicion-panel {\n  background: #fff;\n  padding: 1.2em;\n  border-radius: 0.5em;\n  border: 3px solid #FFAB00;\n  margin: 1em 0;\n}\n.ficha_detalles .card .card-body .condicion-panel p {\n  font-style: italic;\n}\n.ficha_detalles .card .card-body .documento-panel {\n  margin: 1em 0;\n}\n.ficha_detalles .card .card-body .documento-panel .documento-descripcion {\n  padding-bottom: 1em;\n}\n.ficha_detalles .puntos-btn {\n  width: 100%;\n}\n.ficha_detalles .excepciones .accordion .card {\n  border-radius: 0 !important;\n  border: none !important;\n}\n.ficha_detalles .excepciones .accordion .card .card-header {\n  border: none !important;\n  border-radius: 0 !important;\n}\n.ficha_detalles .excepciones .accordion .card button.collapsed .icon::before {\n  font-family: \"Govco Icon\";\n  font-size: 2rem;\n  content: \"\";\n  color: #3772FF;\n}\n.ficha_detalles .excepciones .accordion .card button {\n  border-radius: 0 !important;\n  border-bottom: 1px solid #004884;\n  cursor: pointer !important;\n  background: #E5EFFD;\n}\n.ficha_detalles .excepciones .accordion .card button:hover, .ficha_detalles .excepciones .accordion .card button:not(.collapsed), .ficha_detalles .excepciones .accordion .card button:active, .ficha_detalles .excepciones .accordion .card button:focus {\n  border: none;\n  background: #E5EFFD !important;\n  border-bottom: 1px solid #004884;\n}\n.ficha_detalles .excepciones .accordion .card button:not(.collapsed) .icon::before {\n  font-family: \"Govco Icon\";\n  font-size: 2rem;\n  content: \"\";\n  color: #3772FF;\n}\n.ficha_detalles .excepciones .accordion .card button h3 {\n  padding: 1.5em;\n  margin: 0;\n}\n.ficha_detalles .excepciones .accordion .card button p {\n  color: #3772FF !important;\n}\n.ficha_detalles .excepciones .accordion .card button .govco-icon-simpler-arrow::before {\n  color: #3772FF !important;\n}\n.govco-table-basic table tbody tr td a {\n  color: #007BFF !important;\n}\n.govco-table-basic table tbody tr td a:hover {\n  text-decoration: underline !important;\n}\n.tramiteCard {\n  border-radius: 30px;\n  padding: 2em;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-top: 2em !important;\n}\n.tramiteCard h3 {\n  font-weight: normal;\n  font-size: 1.5em;\n}\n.govco-icon-plus::before {\n  color: #007bff;\n}\n.modal-content {\n  padding: 0 !important;\n}\n.modal-lg {\n  max-width: 1000px !important;\n}\n.modal-lg .puntos-atencion-tramite h2 {\n  font-weight: normal;\n}\n.modal-lg .puntos-atencion-tramite .buscador {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n}\n.modal-lg .puntos-atencion-tramite .buscador input {\n  border-radius: 2em;\n}\n.modal-lg .puntos-atencion-tramite .buscador .govco-icon-search-cn {\n  position: absolute;\n  right: 0.1em;\n}\n.modal-lg .puntos-atencion-tramite table thead {\n  border-top: 2px solid #3772FF;\n  background: #E6EFFD;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.modal-lg .puntos-atencion-tramite table thead th {\n  border: none;\n  padding: 1rem;\n}\n.modal-lg .puntos-atencion-tramite table tbody tr {\n  border-bottom: 3px solid #BABABA;\n}\n.modal-lg .puntos-atencion-tramite table tbody tr td {\n  padding: 1rem;\n  font-size: 0.9rem !important;\n  font-weight: 600 !important;\n}\n.card-header .collapse .icon::before {\n  font-family: \"Govco Icon\";\n  font-size: 2rem;\n  content: \"\";\n  color: red;\n}\n* {\n  outline: none;\n}\nbody {\n  font-family: Montserrat !important;\n  top: 0px;\n}\n.input-validation-error {\n  display: none;\n}\n.invalid-form .form-group .ng-invalid + .input-validation-error {\n  display: block;\n  color: #a80521 !important;\n  font-style: italic;\n}\n.invalid-form .form-group input:not([type=checkbox]) + label {\n  color: #a80521 !important;\n}\n.invalid-form .form-group .label-error {\n  color: #a80521 !important;\n}\n.invalid-form .form-group .label-error strong {\n  color: #a80521 !important;\n}\n.govco-card {\n  padding: 25px 3%;\n  border-radius: 15px;\n  border: 1px solid #cddce2;\n  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.2);\n}\n.govco-card .card-header {\n  background-color: transparent;\n  border: 0;\n}\n.govco-card .form-group label {\n  font-weight: bold;\n}\n.card-header-govco {\n  background-color: transparent;\n  border: 0;\n}\n.modal-content {\n  padding: 25px 3%;\n  border-radius: 20px;\n  border: 1px solid #cddce2;\n}\n.card-component {\n  color: #004884;\n  font-family: \"Montserrat\", sans-serif;\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.16);\n  margin: 0 1rem 1rem;\n  padding: 1.4rem;\n  width: 285px;\n  box-sizing: border-box;\n  display: block;\n  text-align: center;\n  border-radius: 0.625rem !important;\n  border: 0.5px solid rgba(0, 72, 132, 0.2) !important;\n}\n.card-component .title {\n  margin-top: unset;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.p-message {\n  white-space: pre-wrap;\n  text-align: justify;\n}\ntd.title div,\ntd.title a {\n  font-weight: 700;\n}\n.btn-size-3 {\n  font-size: 3rem !important;\n}\n.btn-size-11 {\n  font-size: 1.1rem !important;\n}\n.col-width-10 {\n  width: 10% !important;\n}\n.col-width-15 {\n  width: 15% !important;\n}\n.col-width-20 {\n  width: 20% !important;\n}\n.col-width-25 {\n  width: 25% !important;\n}\n.col-width-30 {\n  width: 30% !important;\n}\n.col-width-35 {\n  width: 35% !important;\n}\n.col-width-40 {\n  width: 40% !important;\n}\n.col-width-50 {\n  width: 50% !important;\n}\n.col-width-60 {\n  width: 60% !important;\n}\n.recaptcha-container {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.accordion-srn-govco .card.ng-star-inserted {\n  border: none;\n}\n.accordion-srn-govco .card-header {\n  padding: 0px;\n  border: none;\n  background: white;\n}\n.accordion-srn-govco .card {\n  background: #fff;\n  border: none;\n}\n.accordion-srn-govco .card .card-header {\n  background: #fff;\n  border-bottom: none;\n}\n.accordion-srn-govco .card .card-header button {\n  display: block;\n  text-align: left;\n  width: 100%;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  text-decoration: none;\n}\n.accordion-srn-govco .card .card-header button[aria-expanded=false] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.accordion-srn-govco .card .card-header button[aria-expanded=true] {\n  font-weight: bold;\n  border-bottom: none;\n}\n.accordion-srn-govco .collapse, .accordion-srn-govco .collapse.show {\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n.accordion-srn-govco .collapse {\n  opacity: 0;\n  height: 0;\n}\n.accordion-srn-govco .collapse.show {\n  opacity: 1;\n  height: 100%;\n}\n.accordion-srn-govco .btn-collapse {\n  white-space: normal;\n  height: auto;\n}\n.wb-200 {\n  width: 200px;\n}\n.wb-150 {\n  width: 150px;\n}\n.wb-100 {\n  max-width: 100px;\n}\n.wb-75 {\n  max-width: 75px;\n}\n.wb-60 {\n  max-width: 60px;\n}\n.wb-50 {\n  max-width: 50px;\n}\n.wb-25 {\n  max-width: 25px;\n}\n.direccion-inline {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n.govco-icon-down-arrow-cn::before {\n  content: \"\";\n}\n.govco-icon-down-arrow-cn {\n  -webkit-transform: rotate(90deg) scaleX(-1);\n  transform: rotate(90deg) scaleX(-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2VsZWN0XFxzYXNzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxzY3NzXFxmaWNoYXRyYW1pdGVzXFxlc3RpbG9zZmljaGEuc2NzcyIsInNyYy9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxzY3NzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCJzcmMvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNFO0lBQUksWUFBQTtFRENKO0VDQUE7SUFBTSxVQUFBO0VER047QUFDRjtBQ05BO0VBQ0U7SUFBSSxZQUFBO0VEQ0o7RUNBQTtJQUFNLFVBQUE7RURHTjtBQUNGO0FDdUJBOzs7RUFHRSx3QkFBQTtBRHJCRjtBQ3dCQTtFQUNFLGdCQUFBO0VBQWlCLGdCQUFBO0VBQ2pCLHNCQUFBO0FEcEJGO0FDdUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBRHZCSjtBQ3lCSTtFQUNFLGdC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QTtFQUNFLFlBQUE7QUwwa0JGO0FLeGtCQTtFQUNFLGdCQUFBO0FMMmtCRjtBS3prQkE7RUFDRSxlQUFBO0FMNGtCRjtBSzFrQkE7RUFDRSxlQUFBO0FMNmtCRjtBSzNrQkE7RUFDRSxlQUFBO0FMOGtCRjtBSzVrQkE7RUFDRSxlQUFBO0FMK2tCRjtBSzdrQkE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FMZ2xCRjtBSzlrQkE7RUFDRSxZQUFBO0FMaWxCRjtBSy9rQkE7RUFDQSwyQ0FBQTtFQUlBLG1DQUFBO0FMa2xCQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5Aa2V5ZnJhbWVzIGJzLW5vdGlmeS1mYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5zZWxlY3QuYnMtc2VsZWN0LWhpZGRlbixcbi5ib290c3RyYXAtc2VsZWN0ID4gc2VsZWN0LmJzLXNlbGVjdC1oaWRkZW4sXG5zZWxlY3Quc2VsZWN0cGlja2VyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYm9vdHN0cmFwLXNlbGVjdCB7XG4gIHdpZHRoOiAyMjBweCBcXDAgO1xuICAvKklFOSBhbmQgYmVsb3cqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXI6aG92ZXIsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlcjpmb2N1cywgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyOmFjdGl2ZSB7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1wcmltYXJ5LCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXByaW1hcnk6aG92ZXIsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tcHJpbWFyeTpmb2N1cywgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zZWNvbmRhcnksIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc2Vjb25kYXJ5OmhvdmVyLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXNlY29uZGFyeTpmb2N1cywgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zZWNvbmRhcnk6YWN0aXZlLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXN1Y2Nlc3MsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tc3VjY2Vzczpob3ZlciwgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1zdWNjZXNzOmZvY3VzLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLXN1Y2Nlc3M6YWN0aXZlLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhbmdlciwgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1kYW5nZXI6aG92ZXIsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFuZ2VyOmZvY3VzLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhbmdlcjphY3RpdmUsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4taW5mbywgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1pbmZvOmhvdmVyLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWluZm86Zm9jdXMsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4taW5mbzphY3RpdmUsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFyaywgLmJvb3RzdHJhcC1zZWxlY3QgPiAuZHJvcGRvd24tdG9nZ2xlLmJzLXBsYWNlaG9sZGVyLmJ0bi1kYXJrOmhvdmVyLCAuYm9vdHN0cmFwLXNlbGVjdCA+IC5kcm9wZG93bi10b2dnbGUuYnMtcGxhY2Vob2xkZXIuYnRuLWRhcms6Zm9jdXMsIC5ib290c3RyYXAtc2VsZWN0ID4gLmRyb3Bkb3duLXRvZ2dsZS5icy1wbGFjZWhvbGRlci5idG4tZGFyazphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgPiBzZWxlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAwLjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgei1pbmRleDogMCAhaW1wb3J0YW50O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgPiBzZWxlY3QubW9iaWxlLWRldmljZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xufVxuLmhhcy1lcnJvciAuYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlLCAuZXJyb3IgLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSwgLmJvb3RzdHJhcC1zZWxlY3QuaXMtaW52YWxpZCAuZHJvcGRvd24tdG9nZ2xlLCAud2FzLXZhbGlkYXRlZCAuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3Q6aW52YWxpZCArIC5kcm9wZG93bi10b2dnbGUge1xuICBib3JkZXItY29sb3I6ICNiOTRhNDg7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5pcy12YWxpZCAuZHJvcGRvd24tdG9nZ2xlLCAud2FzLXZhbGlkYXRlZCAuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3Q6dmFsaWQgKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QuZml0LXdpZHRoIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5ib290c3RyYXAtc2VsZWN0Om5vdChbY2xhc3MqPWNvbC1dKTpub3QoW2NsYXNzKj1mb3JtLWNvbnRyb2xdKTpub3QoLmlucHV0LWdyb3VwLWJ0bikge1xuICB3aWR0aDogMjIwcHg7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCA+IHNlbGVjdC5tb2JpbGUtZGV2aWNlOmZvY3VzICsgLmRyb3Bkb3duLXRvZ2dsZSxcbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzMzMzICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciAhaW1wb3J0YW50O1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG59XG46bm90KC5pbnB1dC1ncm91cCkgPiAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtjbGFzcyo9Y29sLV0pIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wuaW5wdXQtZ3JvdXAtYnRuIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHotaW5kZXg6IGF1dG87XG59XG4uZm9ybS1pbmxpbmUgLmJvb3RzdHJhcC1zZWxlY3QsIC5mb3JtLWlubGluZSAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtjbGFzcyo9Y29sLV0pIHtcbiAgd2lkdGg6IGF1dG87XG59XG4uYm9vdHN0cmFwLXNlbGVjdDpub3QoLmlucHV0LWdyb3VwLWJ0biksIC5ib290c3RyYXAtc2VsZWN0W2NsYXNzKj1jb2wtXSB7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QuZHJvcGRvd24tbWVudS1yaWdodCwgLmJvb3RzdHJhcC1zZWxlY3RbY2xhc3MqPWNvbC1dLmRyb3Bkb3duLW1lbnUtcmlnaHQsIC5yb3cgLmJvb3RzdHJhcC1zZWxlY3RbY2xhc3MqPWNvbC1dLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZm9ybS1pbmxpbmUgLmJvb3RzdHJhcC1zZWxlY3QsIC5mb3JtLWhvcml6b250YWwgLmJvb3RzdHJhcC1zZWxlY3QsIC5mb3JtLWdyb3VwIC5ib290c3RyYXAtc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mb3JtLWdyb3VwLWxnIC5ib290c3RyYXAtc2VsZWN0LmZvcm0tY29udHJvbCwgLmZvcm0tZ3JvdXAtc20gLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5mb3JtLWdyb3VwLWxnIC5ib290c3RyYXAtc2VsZWN0LmZvcm0tY29udHJvbCAuZHJvcGRvd24tdG9nZ2xlLCAuZm9ybS1ncm91cC1zbSAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cbi5ib290c3RyYXAtc2VsZWN0LmZvcm0tY29udHJvbC1zbSAuZHJvcGRvd24tdG9nZ2xlLCAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wtbGcgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wtc20gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QuZm9ybS1jb250cm9sLWxnIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbi5mb3JtLWlubGluZSAuYm9vdHN0cmFwLXNlbGVjdCAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5kaXNhYmxlZCxcbi5ib290c3RyYXAtc2VsZWN0ID4gLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAtc2VsZWN0LmRpc2FibGVkOmZvY3VzLFxuLmJvb3RzdHJhcC1zZWxlY3QgPiAuZGlzYWJsZWQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5icy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5ib290c3RyYXAtc2VsZWN0LmJzLWNvbnRhaW5lciAuZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDEwNjA7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMCAxIGF1dG87XG59XG4uYnMzLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pbnB1dC1ncm91cCAuYnMzLWhhcy1hZGRvbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiBpbmhlcml0O1xuICBwYWRkaW5nLWJvdHRvbTogaW5oZXJpdDtcbiAgcGFkZGluZy1sZWZ0OiBpbmhlcml0O1xuICBmbG9hdDogbm9uZTtcbn1cbi5pbnB1dC1ncm91cCAuYnMzLWhhcy1hZGRvbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24gLmZpbHRlci1vcHRpb24taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiBpbmhlcml0O1xufVxuXG4uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uLWlubmVyLWlubmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1leHBhbmQge1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pbnB1dC1ncm91cCAuYm9vdHN0cmFwLXNlbGVjdC5mb3JtLWNvbnRyb2wgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdFtjbGFzcyo9Y29sLV0gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgPiAuaW5uZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudS5pbm5lciB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZsb2F0OiBub25lO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi1tZW51IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgbGkuYWN0aXZlIHNtYWxsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgbGkuZGlzYWJsZWQgYSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi1tZW51IGxpIGEub3B0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIuMjVlbTtcbn1cbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi1tZW51IGxpIGEgc3Bhbi5jaGVjay1tYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ib290c3RyYXAtc2VsZWN0IC5kcm9wZG93bi1tZW51IGxpIGEgc3Bhbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgbGkgc21hbGwge1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgLm5vdGlmeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMCAyJTtcbiAgbWluLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjk7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJvb3RzdHJhcC1zZWxlY3QgLmRyb3Bkb3duLW1lbnUgLm5vdGlmeS5mYWRlT3V0IHtcbiAgYW5pbWF0aW9uOiAzMDBtcyBsaW5lYXIgNzUwbXMgZm9yd2FyZHMgYnMtbm90aWZ5LWZhZGVPdXQ7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCAubm8tcmVzdWx0cyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib290c3RyYXAtc2VsZWN0LmZpdC13aWR0aCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAwO1xufVxuLmJvb3RzdHJhcC1zZWxlY3QuZml0LXdpZHRoIC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24taW5uZXIsXG4uYm9vdHN0cmFwLXNlbGVjdC5maXQtd2lkdGggLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbi1pbm5lci1pbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5ib290c3RyYXAtc2VsZWN0LmZpdC13aWR0aCAuZHJvcGRvd24tdG9nZ2xlIC5icy1jYXJldDpiZWZvcmUge1xuICBjb250ZW50OiBcIsKgXCI7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5maXQtd2lkdGggLmRyb3Bkb3duLXRvZ2dsZSAuY2FyZXQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB0b3A6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5zaG93LXRpY2sgLmRyb3Bkb3duLW1lbnUgLnNlbGVjdGVkIHNwYW4uY2hlY2stbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICByaWdodDogMTVweDtcbiAgdG9wOiA1cHg7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5zaG93LXRpY2sgLmRyb3Bkb3duLW1lbnUgbGkgYSBzcGFuLnRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDM0cHg7XG59XG4uYm9vdHN0cmFwLXNlbGVjdCAuYnMtb2stZGVmYXVsdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMC4yNmVtIDAuMjZlbSAwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZSwgLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93LnNob3cgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgei1pbmRleDogMTA2MTtcbn1cbi5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdyAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTRweDtcbiAgbGVmdDogOXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTRweDtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjpiZWZvcmUge1xuICBib3R0b206IGF1dG87XG4gIHRvcDogLTRweDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5ib290c3RyYXAtc2VsZWN0LnNob3ctbWVudS1hcnJvdy5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjphZnRlciB7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAtNHB4O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4uYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cucHVsbC1yaWdodCAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmJlZm9yZSB7XG4gIHJpZ2h0OiAxMnB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93LnB1bGwtcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZSAuZmlsdGVyLW9wdGlvbjphZnRlciB7XG4gIHJpZ2h0OiAxM3B4O1xuICBsZWZ0OiBhdXRvO1xufVxuLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93Lm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmJlZm9yZSwgLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93Lm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uOmFmdGVyLCAuYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cuc2hvdyA+IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YmVmb3JlLCAuYm9vdHN0cmFwLXNlbGVjdC5zaG93LW1lbnUtYXJyb3cuc2hvdyA+IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb246YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJzLXNlYXJjaGJveCxcbi5icy1hY3Rpb25zYm94LFxuLmJzLWRvbmVidXR0b24ge1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4uYnMtYWN0aW9uc2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5icy1hY3Rpb25zYm94IC5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJzLWRvbmVidXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJzLWRvbmVidXR0b24gLmJ0bi1ncm91cCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJzLXNlYXJjaGJveCArIC5icy1hY3Rpb25zYm94IHtcbiAgcGFkZGluZzogMCA4cHggNHB4O1xufVxuLmJzLXNlYXJjaGJveCAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uZmljaGFfZGV0YWxsZXMgLnRleHQtaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5maWNoYV9kZXRhbGxlcyAudGV4dC1pbnRybyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uZmljaGFfZGV0YWxsZXMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmZpY2hhX2RldGFsbGVzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBiYWNrZ3JvdW5kOiAjRTVFRUZCO1xufVxuLmZpY2hhX2RldGFsbGVzIC50YWItY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4O1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5maWNoYV9kZXRhbGxlcyAuY2FyZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIGJ1dHRvbi5jb2xsYXBzZWQgLmljb246OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdmNvIEljb25cIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb250ZW50OiBcIu6kglwiO1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIGJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDQ4ODQ7XG59XG4uZmljaGFfZGV0YWxsZXMgLmNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RUZGQjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIGJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ODg0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNDg4NDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuY2FyZCBidXR0b246bm90KC5jb2xsYXBzZWQpIC5pY29uOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29udGVudDogXCLupK1cIjtcbiAgY29sb3I6ICNmZmY7XG59XG4uZmljaGFfZGV0YWxsZXMgLmNhcmQgYnV0dG9uIGgzIHtcbiAgcGFkZGluZzogMWVtIDEuNWVtIDFlbSAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRTVFRkZEICFpbXBvcnRhbnQ7XG59XG4uZmljaGFfZGV0YWxsZXMgLmNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbmRpY2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGQUIwMDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuY2FyZCAuY2FyZC1ib2R5IC5jb25kaWNpb24tcGFuZWwgcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5maWNoYV9kZXRhbGxlcyAuY2FyZCAuY2FyZC1ib2R5IC5kb2N1bWVudG8tcGFuZWwge1xuICBtYXJnaW46IDFlbSAwO1xufVxuLmZpY2hhX2RldGFsbGVzIC5jYXJkIC5jYXJkLWJvZHkgLmRvY3VtZW50by1wYW5lbCAuZG9jdW1lbnRvLWRlc2NyaXBjaW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi5maWNoYV9kZXRhbGxlcyAucHVudG9zLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpY2hhX2RldGFsbGVzIC5leGNlcGNpb25lcyAuYWNjb3JkaW9uIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLmZpY2hhX2RldGFsbGVzIC5leGNlcGNpb25lcyAuYWNjb3JkaW9uIC5jYXJkIGJ1dHRvbi5jb2xsYXBzZWQgLmljb246OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdmNvIEljb25cIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb250ZW50OiBcIu6kmVwiO1xuICBjb2xvcjogIzM3NzJGRjtcbn1cbi5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA0ODg0O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI0U1RUZGRDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCBidXR0b246aG92ZXIsIC5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCBidXR0b246bm90KC5jb2xsYXBzZWQpLCAuZmljaGFfZGV0YWxsZXMgLmV4Y2VwY2lvbmVzIC5hY2NvcmRpb24gLmNhcmQgYnV0dG9uOmFjdGl2ZSwgLmZpY2hhX2RldGFsbGVzIC5leGNlcGNpb25lcyAuYWNjb3JkaW9uIC5jYXJkIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI0U1RUZGRCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNDg4NDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCBidXR0b246bm90KC5jb2xsYXBzZWQpIC5pY29uOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29udGVudDogXCLupJRcIjtcbiAgY29sb3I6ICMzNzcyRkY7XG59XG4uZmljaGFfZGV0YWxsZXMgLmV4Y2VwY2lvbmVzIC5hY2NvcmRpb24gLmNhcmQgYnV0dG9uIGgzIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIG1hcmdpbjogMDtcbn1cbi5maWNoYV9kZXRhbGxlcyAuZXhjZXBjaW9uZXMgLmFjY29yZGlvbiAuY2FyZCBidXR0b24gcCB7XG4gIGNvbG9yOiAjMzc3MkZGICFpbXBvcnRhbnQ7XG59XG4uZmljaGFfZGV0YWxsZXMgLmV4Y2VwY2lvbmVzIC5hY2NvcmRpb24gLmNhcmQgYnV0dG9uIC5nb3Zjby1pY29uLXNpbXBsZXItYXJyb3c6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMzc3MkZGICFpbXBvcnRhbnQ7XG59XG5cbi5nb3Zjby10YWJsZS1iYXNpYyB0YWJsZSB0Ym9keSB0ciB0ZCBhIHtcbiAgY29sb3I6ICMwMDdCRkYgIWltcG9ydGFudDtcbn1cbi5nb3Zjby10YWJsZS1iYXNpYyB0YWJsZSB0Ym9keSB0ciB0ZCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnRyYW1pdGVDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW4tdG9wOiAyZW0gIWltcG9ydGFudDtcbn1cbi50cmFtaXRlQ2FyZCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5nb3Zjby1pY29uLXBsdXM6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWxnIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcbn1cbi5tb2RhbC1sZyAucHVudG9zLWF0ZW5jaW9uLXRyYW1pdGUgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm1vZGFsLWxnIC5wdW50b3MtYXRlbmNpb24tdHJhbWl0ZSAuYnVzY2Fkb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwtbGcgLnB1bnRvcy1hdGVuY2lvbi10cmFtaXRlIC5idXNjYWRvciBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbn1cbi5tb2RhbC1sZyAucHVudG9zLWF0ZW5jaW9uLXRyYW1pdGUgLmJ1c2NhZG9yIC5nb3Zjby1pY29uLXNlYXJjaC1jbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuMWVtO1xufVxuLm1vZGFsLWxnIC5wdW50b3MtYXRlbmNpb24tdHJhbWl0ZSB0YWJsZSB0aGVhZCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzc3MkZGO1xuICBiYWNrZ3JvdW5kOiAjRTZFRkZEO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW9kYWwtbGcgLnB1bnRvcy1hdGVuY2lvbi10cmFtaXRlIHRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLm1vZGFsLWxnIC5wdW50b3MtYXRlbmNpb24tdHJhbWl0ZSB0YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQkFCQUJBO1xufVxuLm1vZGFsLWxnIC5wdW50b3MtYXRlbmNpb24tdHJhbWl0ZSB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyIC5jb2xsYXBzZSAuaWNvbjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbnRlbnQ6IFwi7qSCXCI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcbiAgdG9wOiAwcHg7XG59XG5cbi5pbnB1dC12YWxpZGF0aW9uLWVycm9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludmFsaWQtZm9ybSAuZm9ybS1ncm91cCAubmctaW52YWxpZCArIC5pbnB1dC12YWxpZGF0aW9uLWVycm9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjYTgwNTIxICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5pbnZhbGlkLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSkgKyBsYWJlbCB7XG4gIGNvbG9yOiAjYTgwNTIxICFpbXBvcnRhbnQ7XG59XG4uaW52YWxpZC1mb3JtIC5mb3JtLWdyb3VwIC5sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjYTgwNTIxICFpbXBvcnRhbnQ7XG59XG4uaW52YWxpZC1mb3JtIC5mb3JtLWdyb3VwIC5sYWJlbC1lcnJvciBzdHJvbmcge1xuICBjb2xvcjogI2E4MDUyMSAhaW1wb3J0YW50O1xufVxuXG4uZ292Y28tY2FyZCB7XG4gIHBhZGRpbmc6IDI1cHggMyU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGRjZTI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5nb3Zjby1jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4uZ292Y28tY2FyZCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1oZWFkZXItZ292Y28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggMyU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGRjZTI7XG59XG5cbi5jYXJkLWNvbXBvbmVudCB7XG4gIGNvbG9yOiAjMDA0ODg0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbTtcbiAgcGFkZGluZzogMS40cmVtO1xuICB3aWR0aDogMjg1cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsIDcyLCAxMzIsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtY29tcG9uZW50IC50aXRsZSB7XG4gIG1hcmdpbi10b3A6IHVuc2V0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5wLW1lc3NhZ2Uge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbnRkLnRpdGxlIGRpdixcbnRkLnRpdGxlIGEge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuLXNpemUtMyB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXNpemUtMTEge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTEwIHtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTE1IHtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTIwIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTI1IHtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTMwIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTM1IHtcbiAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTQwIHtcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTUwIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xufVxuXG4ucmVjYXB0Y2hhLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3JkaW9uLXNybi1nb3ZjbyAuY2FyZC5uZy1zdGFyLWluc2VydGVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYWNjb3JkaW9uLXNybi1nb3ZjbyAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYWNjb3JkaW9uLXNybi1nb3ZjbyAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9ZmFsc2VdIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvblthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uYWNjb3JkaW9uLXNybi1nb3ZjbyAuY29sbGFwc2UsIC5hY2NvcmRpb24tc3JuLWdvdmNvIC5jb2xsYXBzZS5zaG93IHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNvbGxhcHNlIHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLmFjY29yZGlvbi1zcm4tZ292Y28gLmNvbGxhcHNlLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYWNjb3JkaW9uLXNybi1nb3ZjbyAuYnRuLWNvbGxhcHNlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ud2ItMjAwIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ud2ItMTUwIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ud2ItMTAwIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLndiLTc1IHtcbiAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4ud2ItNjAge1xuICBtYXgtd2lkdGg6IDYwcHg7XG59XG5cbi53Yi01MCB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLndiLTI1IHtcbiAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4uZGlyZWNjaW9uLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uZ292Y28taWNvbi1kb3duLWFycm93LWNuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kl1wiO1xufVxuXG4uZ292Y28taWNvbi1kb3duLWFycm93LWNuIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGVYKC0xKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGVYKC0xKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGVYKC0xKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlWCgtMSk7XG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuQGtleWZyYW1lcyBicy1ub3RpZnktZmFkZU91dCB7XHJcbiAgMCUge29wYWNpdHk6IDAuOTt9XHJcbiAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbi8vIE1peGluc1xyXG5AbWl4aW4gY3Vyc29yLWRpc2FibGVkKCkge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2l6aW5nKCRmbXQpIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6ICRmbXQ7XHJcbiAgICAgLW1vei1ib3gtc2l6aW5nOiAkZm10O1xyXG4gICAgICAgICAgYm94LXNpemluZzogJGZtdDtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJGZtdCkge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGZtdDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICRmbXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmYWRlKCRjb2xvciwgJGFtbnQpIHtcclxuICBAaWYgJGFtbnQgPiAxIHtcclxuICAgICRhbW50OiAkYW1udCAvIDEwMDsgLy8gY29udmVydCB0byBwZXJjZW50YWdlIGlmIGludFxyXG4gIH1cclxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkYW1udCk7XHJcbn1cclxuXHJcbi8vIFJ1bGVzXHJcbnNlbGVjdC5icy1zZWxlY3QtaGlkZGVuLFxyXG4uYm9vdHN0cmFwLXNlbGVjdCA+IHNlbGVjdC5icy1zZWxlY3QtaGlkZGVuLFxyXG5zZWxlY3Quc2VsZWN0cGlja2VyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib290c3RyYXAtc2VsZWN0IHtcclxuICB3aWR0aDogMjIwcHggXFwwOyAvKklFOSBhbmQgYmVsb3cqL1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIC8vIFRoZSBzZWxlY3RwaWNrZXIgYnV0dG9uXHJcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbmVjZXNzYXJ5IGZvciBwcm9wZXIgcG9zaXRpb25pbmcgb2YgY2FyZXQgaW4gQm9vdHN0cmFwIDQgKHB1c2hlcyBjYXJldCB0byB0aGUgcmlnaHQpXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyBmb3JjZSBjYXJldCB0byBiZSB2ZXJ0aWNhbGx5IGNlbnRlcmVkIGZvciBCb290c3RyYXAgNCBtdWx0aS1saW5lIGJ1dHRvbnNcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJzLXBsYWNlaG9sZGVyIHtcclxuICAgICAgJixcclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXByaW1hcnksXHJcbiAgICAgICYuYnRuLXNlY29uZGFyeSxcclxuICAgICAgJi5idG4tc3VjY2VzcyxcclxuICAgICAgJi5idG4tZGFuZ2VyLFxyXG4gICAgICAmLmJ0bi1pbmZvLFxyXG4gICAgICAmLmJ0bi1kYXJrIHtcclxuICAgICAgICAmLFxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogJGlucHV0LWFsdC1jb2xvci1wbGFjZWhvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gc2VsZWN0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAwLjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5tb2JpbGUtZGV2aWNlIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFcnJvciBkaXNwbGF5XHJcbiAgLmhhcy1lcnJvciAmIC5kcm9wZG93bi10b2dnbGUsXHJcbiAgLmVycm9yICYgLmRyb3Bkb3duLXRvZ2dsZSxcclxuICAmLmlzLWludmFsaWQgLmRyb3Bkb3duLXRvZ2dsZSxcclxuICAud2FzLXZhbGlkYXRlZCAmIHNlbGVjdDppbnZhbGlkICsgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtZXJyb3I7XHJcbiAgfVxyXG5cclxuICAmLmlzLXZhbGlkIC5kcm9wZG93bi10b2dnbGUsXHJcbiAgLndhcy12YWxpZGF0ZWQgJiBzZWxlY3Q6dmFsaWQgKyAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWdyZWVuLXN1Y2Nlc3M7XHJcbiAgfVxyXG5cclxuICAmLmZpdC13aWR0aCB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpub3QoW2NsYXNzKj1cImNvbC1cIl0pOm5vdChbY2xhc3MqPVwiZm9ybS1jb250cm9sXCJdKTpub3QoLmlucHV0LWdyb3VwLWJ0bikge1xyXG4gICAgd2lkdGg6ICR3aWR0aC1kZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgPiBzZWxlY3QubW9iaWxlLWRldmljZTpmb2N1cyArIC5kcm9wZG93bi10b2dnbGUsXHJcbiAgLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGhlIHNlbGVjdHBpY2tlciBjb21wb25lbnRzXHJcbi5ib290c3RyYXAtc2VsZWN0IHtcclxuICAmLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICA6bm90KC5pbnB1dC1ncm91cCkgPiAmOm5vdChbY2xhc3MqPVwiY29sLVwiXSkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB6LWluZGV4OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0taW5saW5lICYsXHJcbiAgLmZvcm0taW5saW5lICYuZm9ybS1jb250cm9sOm5vdChbY2xhc3MqPVwiY29sLVwiXSkge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmOm5vdCguaW5wdXQtZ3JvdXAtYnRuKSxcclxuICAmW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC8vIEZvcmNlcyB0aGUgcHVsbCB0byB0aGUgcmlnaHQsIGlmIG5lY2Vzc2FyeVxyXG4gICYsXHJcbiAgJltjbGFzcyo9XCJjb2wtXCJdLFxyXG4gIC5yb3cgJltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICAgICYuZHJvcGRvd24tbWVudS1yaWdodCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWlubGluZSAmLFxyXG4gIC5mb3JtLWhvcml6b250YWwgJixcclxuICAuZm9ybS1ncm91cCAmIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cC1sZyAmLmZvcm0tY29udHJvbCxcclxuICAuZm9ybS1ncm91cC1zbSAmLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC1zbSAuZHJvcGRvd24tdG9nZ2xlLFxyXG4gICYuZm9ybS1jb250cm9sLWxnIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtc20gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15LXNtICRpbnB1dC1wYWRkaW5nLXgtc207XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC1sZyAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktbGcgJGlucHV0LXBhZGRpbmcteC1sZztcclxuICB9XHJcblxyXG4gIC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGxpdmUgc2VhcmNoIChhbmQgYW55IG90aGVyIGZvcm0gY29udHJvbCB3aXRoaW4gYW4gaW5saW5lIGZvcm0pXHJcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWx2aW9tb3JldG8vYm9vdHN0cmFwLXNlbGVjdC9pc3N1ZXMvNjg1XHJcbiAgLmZvcm0taW5saW5lICYgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQsXHJcbiAgPiAuZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgY3Vyc29yLWRpc2FibGVkKCk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYnMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHotaW5kZXg6ICR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIHNlbGVjdHBpY2tlciBidXR0b25cclxuICAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIC5maWx0ZXItb3B0aW9uIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZmxleDogMCAxIGF1dG87IC8vIGZvciBJRTEwXHJcblxyXG4gICAgICBAYXQtcm9vdCAuYnMzI3smfSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogaW5oZXJpdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGF0LXJvb3QgLmlucHV0LWdyb3VwIC5iczMtaGFzLWFkZG9uI3smfSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiBpbmhlcml0O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBpbmhlcml0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuXHJcbiAgICAgICAgLmZpbHRlci1vcHRpb24taW5uZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLW9wdGlvbi1pbm5lci1pbm5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlZCB0byBleHBhbmQgdGhlIGhlaWdodCBvZiB0aGUgYnV0dG9uIHdoZW4gaW5zaWRlIGFuIGlucHV0IGdyb3VwXHJcbiAgICAuZmlsdGVyLWV4cGFuZCB7XHJcbiAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmV0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAgJi5mb3JtLWNvbnRyb2wgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgJltjbGFzcyo9XCJjb2wtXCJdIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgc2VsZWN0cGlja2VyIGRyb3Bkb3duXHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcclxuXHJcbiAgICA+IC5pbm5lcjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLmlubmVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJi5hY3RpdmUgc21hbGwge1xyXG4gICAgICAgIGNvbG9yOiAkaW5wdXQtYWx0LWNvbG9yLXBsYWNlaG9sZGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZGlzYWJsZWQgYSB7XHJcbiAgICAgICAgQGluY2x1ZGUgY3Vyc29yLWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgJi5vcHQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjI1ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuLmNoZWNrLW1hcmsge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4udGV4dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3RpZnkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICB3aWR0aDogOTYlO1xyXG4gICAgICBtYXJnaW46IDAgMiU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNywgMjI3LCAyMjcpO1xyXG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCBmYWRlKHJnYigwLCAwLCAwKSwgNSkpO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xyXG5cclxuICAgICAgJi5mYWRlT3V0IHtcclxuICAgICAgICBhbmltYXRpb246IDMwMG1zIGxpbmVhciA3NTBtcyBmb3J3YXJkcyBicy1ub3RpZnktZmFkZU91dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vLXJlc3VsdHMge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgJi5maXQtd2lkdGggLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAuZmlsdGVyLW9wdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLW9wdGlvbi1pbm5lcixcclxuICAgIC5maWx0ZXItb3B0aW9uLWlubmVyLWlubmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5icy1jYXJldDpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnXFwwMGEwJztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZXQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICB0b3A6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnNob3ctdGljayAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAuc2VsZWN0ZWQgc3Bhbi5jaGVjay1tYXJrIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSBhIHNwYW4udGV4dCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgY2hlY2sgbWFyayBmb3IgdXNlIHdpdGhvdXQgYW4gaWNvbiBmb250XHJcbiAgLmJzLW9rLWRlZmF1bHQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAwLjVlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwLjI2ZW0gMC4yNmVtIDA7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmJvb3RzdHJhcC1zZWxlY3Quc2hvdy1tZW51LWFycm93IHtcclxuICAmLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLFxyXG4gICYuc2hvdyA+IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgei1pbmRleDogKCR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duICsgMSk7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJGNvbG9yLWdyZXktYXJyb3c7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICBsZWZ0OiA5cHg7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZHJvcHVwIC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24ge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBib3R0b206IGF1dG87XHJcbiAgICAgIHRvcDogLTRweDtcclxuICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICRjb2xvci1ncmV5LWFycm93O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBib3R0b206IGF1dG87XHJcbiAgICAgIHRvcDogLTRweDtcclxuICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wdWxsLXJpZ2h0IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24ge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDEzcHg7XHJcbiAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlIC5maWx0ZXItb3B0aW9uLFxyXG4gICYuc2hvdyA+IC5kcm9wZG93bi10b2dnbGUgLmZpbHRlci1vcHRpb24ge1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc2VhcmNoYm94LFxyXG4uYnMtYWN0aW9uc2JveCxcclxuLmJzLWRvbmVidXR0b24ge1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbn1cclxuXHJcbi5icy1hY3Rpb25zYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xyXG5cclxuICAmIC5idG4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtZG9uZWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcclxuXHJcbiAgJiAuYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zZWFyY2hib3gge1xyXG4gICYgKyAuYnMtYWN0aW9uc2JveCB7XHJcbiAgICBwYWRkaW5nOiAwIDhweCA0cHg7XHJcbiAgfVxyXG5cclxuICAmIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1yZWQtZXJyb3I6IHJnYigxODUsIDc0LCA3MikgIWRlZmF1bHQ7XHJcbiRjb2xvci1ncmVlbi1zdWNjZXNzOiAjMjhhNzQ1O1xyXG4kY29sb3ItZ3JleS1hcnJvdzogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpICFkZWZhdWx0O1xyXG5cclxuJHdpZHRoLWRlZmF1bHQ6IDIyMHB4ICFkZWZhdWx0OyAvLyAzIDk2MHB4LWdyaWQgY29sdW1uc1xyXG5cclxuJHppbmRleC1zZWxlY3QtZHJvcGRvd246IDEwNjAgIWRlZmF1bHQ7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gYSBtb2RhbCBiYWNrZ3JvdW5kICgxMDUwKVxyXG5cclxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogIzk5OSAhZGVmYXVsdDtcclxuJGlucHV0LWFsdC1jb2xvci1wbGFjZWhvbGRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1zbTogLjI1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXNtOiAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1sZzogMXJlbSAhZGVmYXVsdDsiLCJAaW1wb3J0IFwiLi4vYmFzZS9jb2xvcnNcIjtcclxuLmZpY2hhX2RldGFsbGVze1xyXG4gICAgLnRleHQtaW50cm8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgaDN7IFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYtdGFicyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNUVFRkI7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHg7ICAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDsgICAgICAgIFxyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLmNvbGxhcHNlZHtcclxuICAgICAgICAgICAgLmljb246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxlOTAyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjsgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZGFyay1ibHVlO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RUZGQjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpub3QoLmNvbGxhcHNlZCl7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyay1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLWRhcmstYmx1ZSA7XHJcbiAgICAgICAgICAgICAgICAuaWNvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGU5MmQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbSAxZW0gMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFRkZEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb25kaWNpb24tcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZBQjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvY3VtZW50by1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgICAgICAgICAgICAgLmRvY3VtZW50by1kZXNjcmlwY2lvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNDg4NDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgICBcclxuICAgIC5wdW50b3MtYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5leGNlcGNpb25lcyB7XHJcbiAgICAgICAgLmFjY29yZGlvbntcclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jb2xsYXBzZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdvdmNvIEljb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxlOTE5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kb2RnZXItYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b24geyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItZGFyay1ibHVlOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNUVGRkQ7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIsICY6bm90KC5jb2xsYXBzZWQpLCAmOmFjdGl2ZSwgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFRkZEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItZGFyay1ibHVlOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguY29sbGFwc2VkKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHb3ZjbyBJY29uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxlOTE0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZG9kZ2VyLWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kb2RnZXItYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZ292Y28taWNvbi1zaW1wbGVyLWFycm93OjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZG9kZ2VyLWJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmdvdmNvLXRhYmxlLWJhc2ljIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN0JGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcbi50cmFtaXRlQ2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgICAgICAgIFxyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9ICAgIFxyXG59XHJcbi5nb3Zjby1pY29uLXBsdXN7XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB9XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1sZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLnB1bnRvcy1hdGVuY2lvbi10cmFtaXRlIHtcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1c2NhZG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ292Y28taWNvbi1zZWFyY2gtY24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAuMWVtO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGNvbG9yLWRvZGdlci1ibHVlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWhhd2tlcy1ibHVlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRib2R5IHsgICAgIFxyXG4gICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkY29sb3Itc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRkIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtaGVhZGVyIC5jb2xsYXBzZSAuaWNvbjo6YmVmb3Jle1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR292Y28gSWNvblwiO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29udGVudDogJ1xcZTkwMic7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLy8gQ29sb3JlcyBkaXNlw7FvIEdPVi5DT1xyXG4kY29sb3Itc2VsYWdvOiAjRTVFRUZCO1xyXG4kY29sb3ItZG9kZ2VyLWJsdWU6ICMzNzcyRkY7XHJcbiRjb2xvci1tYXJpbmU6ICMzMzY2Q0M7XHJcbiRjb2xvci1kYXJrLWJsdWU6ICMwMDQ4ODQ7XHJcbiRjb2xvci1ncmVlbjogIzA2OTE2OTtcclxuJGNvbG9yLWdvbGQ6ICNGRkFCMDA7XHJcbiRjb2xvci1vcmFuZ2U6I0YzNTYxRjtcclxuJGNvbG9yLWNvbmNyZXRlOiAjRjJGMkYyO1xyXG4kY29sb3Itc2lsdmVyOiAjQkFCQUJBO1xyXG4kY29sb3ItdHVuZG9yYTogIzRCNEI0QjtcclxuJGNvbG9yLXR1dHU6ICNGRkYyRkE7XHJcbiRjb2xvci1yYWRpY2FsLXJlZDogI0Y0MkU2MjtcclxuJGNvbG9yLXNoaXJhejogI0E4MDUyMTtcclxuXHJcbiRjb2xvci1wYWxlLXNreTogIzZjNzU3ZDtcclxuJGNvbG9yLWhhd2tlcy1ibHVlOiNFNkVGRkQ7XHJcbiRjb2xvci1oYXdrZXMtYmx1ZS0zMDA6ICByZ2JhKDE1NywxOTAsMjU1LCAwLjMpOyAvLyAjRTZFRkZEICsgb3BhY2lkYWQgZGVsIDAuM1xyXG4kY29sb3ItY2F0YWxpbmEtYmx1ZTogIzBCNDU3RjtcclxuJGNvbG9yLWNhdGFsaW5hLWJsdWUtNjAwOiByZ2JhKDExLCA2OSwgMTI3LCAwLjYpOyAvLyAjMEI0NTdGICsgb3BhY2lkYWQgZGVsIDAuNjtcclxuJGNvbG9yLWJsYWNrLTE2MDogcmdiYSgwLCAwLCAwLCAwLjE2KTsgLy8gYmxhY2sgKyBvcGFjaWRhZCBkZWwgMC4xNlxyXG4kY29sb3ItbWFyaW5lLTQwMDogcmdiYSg1MSwxMDIsMjA0LCAwLjQpOyAvLyAjMzM2NkNDICsgb3BhY2lkYWQgZGVsIDAuNFxyXG4kY29sb3ItZGFyay1ibHVlLTUwMDogcmdiYSgwLDcyLDEzMiwwLjUpOyAvLyAwMDQ4ODQgKyBvcGFjaWRhZCBkZWwgMC41XHJcbiRjb2xvci1kYXJrLWJsdWUtMjAwOiByZ2JhKDAsNzIsMTMyLDAuMik7IC8vIDAwNDg4NCArIG9wYWNpZGFkIGRlbCAwLjJcclxuJGNvbG9yLXNoaXJhei02MDA6IHJnYmEoMTY4LDUsMzMsIDAuNik7IC8vICNBODA1MjEgKyBvcGFjaWRhZCBkZWwgMC42OyIsIi8vIEJhc2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGltcG9ydCBcInNjc3MvYmFzZS9jb2xvcnNcIjtcclxuQGltcG9ydCAgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNlbGVjdC9zYXNzL2Jvb3RzdHJhcC1zZWxlY3Quc2Nzc1wiO1xyXG5AaW1wb3J0IFwic2Nzcy9maWNoYXRyYW1pdGVzL2VzdGlsb3NmaWNoYS5zY3NzXCI7XHJcbi8vIFJld3JpdGUgc3R5bGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbip7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtdmFsaWRhdGlvbi1lcnJvciAge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiBcclxuLmludmFsaWQtZm9ybSB7XHJcbiAgIC5mb3JtLWdyb3VwIHsgIFxyXG4gICAgICAubmctaW52YWxpZCArIC5pbnB1dC12YWxpZGF0aW9uLWVycm9yIHsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE2OCw1LDMzLCAxKSAhaW1wb3J0YW50OyAgICAgICAgXHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSkgKyBsYWJlbCB7ICBcclxuICAgICAgICBjb2xvcjogcmdiYSgxNjgsNSwzMywgMSkgIWltcG9ydGFudDsgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFiZWwtZXJyb3Ige1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE2OCw1LDMzLCAxKSAhaW1wb3J0YW50OyAgXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE2OCw1LDMzLCAxKSAhaW1wb3J0YW50OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLmdvdmNvLWNhcmQge1xyXG4gIHBhZGRpbmc6IDI1cHggMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2RkY2UyO1xyXG4gIGJveC1zaGFkb3c6IDFweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwICB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2FyZC1oZWFkZXItZ292Y297XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweCAzJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGRjZTI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbXBvbmVudCB7XHJcbiAgY29sb3I6ICRjb2xvci1kYXJrLWJsdWU7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggN3B4ICRjb2xvci1ibGFjay0xNjA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggJGNvbG9yLWJsYWNrLTE2MDtcclxuICBtYXJnaW46IDAgMXJlbSAxcmVtO1xyXG4gIHBhZGRpbmc6IDEuNHJlbTtcclxuICB3aWR0aDogMjg1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAkY29sb3ItZGFyay1ibHVlLTIwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtY29tcG9uZW50IC50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogdW5zZXQ7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLnAtbWVzc2FnZXtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuXHJcbnRkLnRpdGxlIHsgXHJcbiAgZGl2LFxyXG4gIGEgeyBcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXNpemUtMyB7XHJcbiAgZm9udC1zaXplOiAzcmVtIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXNpemUtMTEge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTEwIHtcclxuICB3aWR0aDogMTAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTE1IHtcclxuICB3aWR0aDogMTUlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTIwIHtcclxuICB3aWR0aDogMjAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTI1IHtcclxuICB3aWR0aDogMjUlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTMwIHtcclxuICB3aWR0aDogMzAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTM1IHtcclxuICB3aWR0aDogMzUlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTQwIHtcclxuICB3aWR0aDogNDAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTUwIHtcclxuICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxufVxyXG4uY29sLXdpZHRoLTYwIHtcclxuICB3aWR0aDogNjAlIWltcG9ydGFudDtcclxufVxyXG4ucmVjYXB0Y2hhLWNvbnRhaW5lcnsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmFjY29yZGlvbi1zcm4tZ292Y29cclxue1xyXG4gICAgLmNhcmQubmctc3Rhci1pbnNlcnRlZHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJlthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbYXJpYS1leHBhbmRlZD1cInRydWVcIl1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbGxhcHNlLCAuY29sbGFwc2Uuc2hvdyB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbGxhcHNlIHtcclxuICAgICBvcGFjaXR5OiAwO1xyXG4gICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbGxhcHNlLnNob3cge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNvbGxhcHNle1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLndiLTIwMCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi53Yi0xNTAge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4ud2ItMTAwIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbi53Yi03NSB7XHJcbiAgbWF4LXdpZHRoOiA3NXB4O1xyXG59XHJcbi53Yi02MCB7XHJcbiAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcbi53Yi01MCB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbi53Yi0yNSB7XHJcbiAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcbi5kaXJlY2Npb24taW5saW5le1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5nb3Zjby1pY29uLWRvd24tYXJyb3ctY246OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTkxNyc7IFxyXG59XHJcbi5nb3Zjby1pY29uLWRvd24tYXJyb3ctY257XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlWCgtMSk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlWCgtMSk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGVYKC0xKTtcclxuLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlWCgtMSk7XHJcbnRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZVgoLTEpO1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Contrato-448-2020\Produccion\tramites-servicios-spa-scd\src\src\styles.scss */"./src/styles.scss");


/***/ })

},[[7,"runtime"]]]);
//# sourceMappingURL=styles-es2015.07fe8830ec40dc77999d.js.map