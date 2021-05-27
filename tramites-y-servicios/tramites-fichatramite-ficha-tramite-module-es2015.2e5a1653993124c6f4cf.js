(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tramites-fichatramite-ficha-tramite-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
  \*************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-search-filter.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accion-documento works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accion-excepcion works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accion-formulario works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accion-pago works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"titulocondicion\">Canal de atención</h4>\r\n<!-- <p class=\"leyendadocumento\">{{data.VerificacionInstDescripcion}}</p> -->\r\n<div *ngFor=\"let canales of data\">\r\n    <p>{{canales.Excepcion}}</p>\r\n    <!-- <div *ngFor=\"let canal of canales; let i = index\">\r\n        <p *ngIf=\"i == 0\" class=\"leyendadocumento\">{{canal.descripcion}} </p>\r\n    </div>\r\n    <div class=\"govco-table govco-table-basic\">\r\n        <table class=\"table table-striped\">\r\n            <ng-container  *ngFor=\"let canalTipo of canales; let i = index\">\r\n                <thead *ngIf=\"i == 0\" >\r\n                    <th scope=\"col\">Medio</th>\r\n                    <th scope=\"col\">Detalle</th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'PRESENCIAL'\">\r\n                        <td>Presencial</td>\r\n                        <td>\r\n                            <a (click)=\"showModal({tipo: 'puntos', data: canalTipo.canal.puntosAtencion})\">\r\n                                Ver puntos de atención\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'WEB'\">\r\n                        <td>Web</td>\r\n                        <td>\r\n                            <a href=\"{{ canalTipo.canal.canal.UrlCanalWeb }}\">\r\n                                {{canalTipo.canal.canal.NombreCanalWeb}}\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </ng-container>\r\n        </table>\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"titulocondicion\">Condiciones</h4>\r\n<p class=\"leyendadocumento\">{{data.VerificacionInstDescripcion}}</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/embebidos/embebidos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/embebidos/embebidos.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(data.URL_TRAMITE)' height=\"600px\" width=\"100%\" title=\"Tramite\"></iframe>\r\n    <div class=\"tramiteCard\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 p-2 center\">\r\n                <govco-area-servicios module=\"TramitesEmbebidos\" itemid=\"numero\" ></govco-area-servicios>\r\n            </div>\r\n            <div class=\"col-md-4 p-2 center\">\r\n                    <a href=\"/ficha-tramite/T{{data.NUMERO}}\" class=\"btn btn-round btn-high \">Volver a información general</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n    <div class=\"col-12\">\r\n\r\n        <ngb-tabset >\r\n            <ngb-tab *ngFor=\"let itemAudiencia of data\">\r\n                <ng-template ngbTabTitle ><strong (click)=\"eventoTabAudiencia(itemAudiencia)\" >{{itemAudiencia.detalle}}</strong></ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <div class=\"text-intro\">\r\n                        <h3>Información General del Trámite</h3>\r\n                        <p>Para realizar el trámite debes seguir <strong>los siguientes pasos:</strong></p>\r\n                    </div>\r\n\r\n                    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n                        <ngb-panel *ngFor=\"let momento of itemAudiencia.momentos; let i = index\">\r\n                            <ng-template ngbPanelTitle >\r\n                                <h3 (click)=\"dataDetalleMomentoAudiencia(itemAudiencia.detalle, momento.Orden)\">{{i+1}}. {{ momento.Descripcion }}</h3>\r\n                                <div class=\"icon\"></div>\r\n                            </ng-template>\r\n                            <ng-template ngbPanelContent>\r\n\r\n                                <div *ngFor=\"let accion of momento.acciones | keyvalue\">\r\n                                    <div *ngIf=\"accion.key === 'VERIFICACION_INST'\">\r\n                                        <app-accion-verificacion [data]=\"accion.value\"></app-accion-verificacion>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accion.key === 'PAGO'\">\r\n                                       <app-accion-pago [data]=\"accion.value\"></app-accion-pago>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accion.key === 'SOLICITUD'\">\r\n                                        <app-accion-solicitud [data]=\"accion.value\"></app-accion-solicitud>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accion.key === 'DOCUMENTO'\">\r\n                                        <app-accion-documento [data]=\"accion.value\"></app-accion-documento>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accion.key === 'FORMULARIO'\">\r\n                                        <app-accion-fomulario [data]=\"accion.value\"></app-accion-fomulario>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accion.key === 'EXCEPCION'\">\r\n                                        <app-accion-excepcion [data]=\"accion.value\"></app-accion-excepcion>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                      </ngb-accordion>\r\n\r\n                </ng-template>\r\n            </ngb-tab>\r\n\r\n\r\n          </ngb-tabset>\r\n        <!-- <ngb-tabset *ngIf=\"audiencias\">\r\n            <ngb-tab *ngFor=\"let audiencia of audiencias\">\r\n                <ng-template ngbTabTitle ><strong (click)=\"tipoAudienciafuncion(audiencia.tipoaudiencia)\">{{audiencia.tipoaudiencia}}</strong></ng-template>\r\n                <ng-template ngbTabContent >\r\n                    <div class=\"text-intro\">\r\n                        <h3>Información General del Trámite</h3>\r\n                        <p>Para realizar el trámite debes seguir <strong>los siguientes pasos:</strong></p>\r\n                    </div>\r\n                        <ngb-accordion #acc=\"ngbAccordion\">\r\n                        <ngb-panel *ngFor=\"let ordenAudiencia of ordenAudiencias; let i= index\" >\r\n                            <ng-template ngbPanelTitle >\r\n                            <h3 (click)=\"dataMomentoAudiencia(audiencia.tipoaudiencia, ordenAudiencia.Orden, i)\">{{i+1}}. {{ ordenAudiencia.Descripcion }}</h3>\r\n                            <div class=\"icon\"></div>\r\n                            </ng-template>\r\n                            <ng-template ngbPanelContent >\r\n                                <ng-container *ngIf=\"extractFromJson(ordenAudiencia.Informacion); let data\">\r\n                                    <div *ngFor=\"let items of data\">\r\n                                        <div *ngIf=\"items.subtitulo == 'Condiciones'\" class=\"condicion-panel\">\r\n                                            <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                            <div *ngFor=\"let condicion of items.descripcion\">\r\n                                                <p class=\"leyendadocumento\">{{condicion}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"items.subtitulo == 'Formulario'\" class=\"documento-panel\">\r\n                                            <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                            <div *ngFor=\"let formulario of items.descripcion\">\r\n                                                <p class=\"nombredocumento\">{{formulario.nombre}}\r\n                                                    <a *ngIf=\"formulario.descarga == null\" href=\"{{formulario.url}}\">\r\n                                                        <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/transaccional.svg\" alt=\"transaccional\">\r\n                                                    </a>\r\n                                                    <a *ngIf=\"formulario.descarga != null\" href=\"{{formulario.descarga}}\">\r\n                                                        <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/descarga.svg\" alt=\"descarga\">\r\n                                                    </a>\r\n                                                </p>\r\n                                                <p *ngIf=\"formulario.descripcion != null\" class=\"leyendadocumento\">\r\n                                                    Anotación adicional: {{formulario.descripcion}}\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"items.subtitulo == 'Documento'\" class=\"documento-panel\">\r\n                                            <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                            <div *ngFor=\"let documento of items.descripcion\" class=\"documento-descripcion\">\r\n                                                <p class=\"nombredocumento\">{{documento.nombre}}</p>\r\n                                                <p class=\"infoadicional\">\r\n                                                    Cantidad: {{documento.cantidadDoc}}\r\n                                                    {{documento.unidadCantidad}}\r\n                                                    {{documento.observacionCantidad}}\r\n                                                </p>\r\n                                                <p *ngIf=\"documento.descripcion != null\" class=\"leyendadocumento\">\r\n                                                    Anotaciones adicionales: {{documento.descripcion}}\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"items.subtitulo == 'Canal de atención'\" class=\"canal-panel\">\r\n                                            <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                            <div *ngFor=\"let canales of items.descripcion\">\r\n                                                <div *ngFor=\"let canal of canales; let i = index\">\r\n                                                    <p *ngIf=\"i == 0\" class=\"leyendadocumento\">{{canal.descripcion}} </p>\r\n                                                    </div>\r\n                                                <div class=\"govco-table govco-table-basic\">\r\n                                                    <table class=\"table table-striped\">\r\n                                                        <ng-container  *ngFor=\"let canalTipo of canales; let i = index\">\r\n                                                            <thead *ngIf=\"i == 0\" >\r\n                                                                <th scope=\"col\">Medio</th>\r\n                                                                <th scope=\"col\">Detalle</th>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'PRESENCIAL'\">\r\n                                                                    <td>Presencial</td>\r\n                                                                    <td>\r\n                                                                        <a (click)=\"showModal({tipo: 'puntos', data: canalTipo.canal.puntosAtencion})\">\r\n                                                                            Ver puntos de atención\r\n                                                                        </a>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                                <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'WEB'\">\r\n                                                                    <td>Web</td>\r\n                                                                    <td>\r\n                                                                        <a href=\"{{ canalTipo.canal.canal.UrlCanalWeb }}\">\r\n                                                                            {{canalTipo.canal.canal.NombreCanalWeb}}\r\n                                                                        </a>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </ng-container>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"items.subtitulo == 'Pago'\">\r\n                                            <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                            <div *ngFor=\"let pagos of items.descripcion\">\r\n                                                <p class=\"leyendadocumento\">{{pagos.DescripcionMomento}}</p>\r\n                                                <p class=\"leyendadocumento font-weight-bold\">Descripción del pago</p>\r\n                                                <div class=\"govco-table govco-table-basic\">\r\n                                                    <table class=\"table table-striped\">\r\n                                                        <ng-container  *ngFor=\"let descripcion of pagos.DescripcionPago; let i = index\">\r\n                                                            <thead *ngIf=\"i == 0\" >\r\n                                                                <th><strong>Descripción</strong></th>\r\n                                                                <th><strong>Tipo Moneda</strong></th>\r\n                                                                <th><strong>Tipo Valor</strong></th>\r\n                                                                <th><strong>Cantidad</strong></th>\r\n                                                                <th><strong>Valor</strong></th>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr>\r\n                                                                    <td>{{ descripcion.nombreDescripcion }}</td>\r\n                                                                    <td>{{ descripcion.moneda }}</td>\r\n                                                                    <td>{{ descripcion.tipoValor }}</td>\r\n                                                                    <td>{{ descripcion.cantidadSmlv }}</td>\r\n                                                                    <td>{{ descripcion.valor }}</td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </ng-container>\r\n                                                    </table>\r\n                                                </div>\r\n                                                <ng-container *ngIf=\"pagos.EntidadRecaudadora.length > 0\">\r\n                                                    <p class=\"leyendadocumento font-weight-bold\">Información medios de pago</p>\r\n                                                    <div class=\"govco-table govco-table-basic\">\r\n                                                        <table class=\"table table-striped\">\r\n                                                            <ng-container  *ngFor=\"let entidad of pagos.EntidadRecaudadora; let i = index\">\r\n                                                                <thead *ngIf=\"i == 0\" >\r\n                                                                    <th><strong>Entidad recaudadora</strong></th>\r\n                                                                    <th><strong>Tipo cuenta</strong></th>\r\n                                                                    <th><strong>Numero de Cuenta</strong></th>\r\n                                                                    <th><strong>Nombre de Cuenta</strong></th>\r\n                                                                    <th><strong>Codigo de Recaudo</strong></th>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td class=\"textofilas\" >{{ entidad.nombreEntidad }}</td>\r\n                                                                        <td class=\"textofilas\" >{{ entidad.tipoCuenta }}</td>\r\n                                                                        <td class=\"textofilas\" >{{ entidad.numeroCuenta }}</td>\r\n                                                                        <td class=\"textofilas\" >{{ entidad.nombreCuenta }}</td>\r\n                                                                        <td class=\"textofilas\" >{{ entidad.codigoRecaudo }}</td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </ng-container>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <ng-container *ngIf=\"extractFromJson(ordenAudiencia.Excepcion); let dataExcepciones\">\r\n                                        <div *ngIf=\"dataExcepciones.length > 0\">\r\n                                            <p class=\"font-weight-bold\"><em class=\"material-icons\">stars</em>Se identifica con alguno de estos casos, adicionalmente debe:</p>\r\n                                            <div class=\"excepciones\">\r\n                                                <ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\">\r\n                                                        <ngb-panel *ngFor=\"let excepciones of dataExcepciones; let i= index\" id=\"{{i}}\">\r\n                                                                <ng-template ngbPanelTitle >\r\n                                                                    <p>{{i+1}}. {{ excepciones.TituloAcordeon }}</p>\r\n                                                                    <div class=\"icon\"></div>\r\n                                                                </ng-template>\r\n                                                                    <ng-template ngbPanelContent>\r\n                                                                        <ng-container *ngFor=\"let contenido of excepciones.Contenido\">\r\n                                                                            <div *ngIf=\"contenido.subtitulo == 'Condiciones'\">\r\n                                                                                <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                <p class=\"leyendadocumento\">{{contenido.descripcion}}</p>\r\n                                                                            </div>\r\n                                                                            <div *ngIf=\"contenido.subtitulo == 'Documento'\">\r\n                                                                                <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                <p class=\"nombredocumento\">{{contenido.descripcion.nombre}}</p>\r\n                                                                                <p>\r\n                                                                                    Cantidad: {{contenido.descripcion.cantidadDoc}}\r\n                                                                                    {{contenido.descripcion.unidadCantidad}}\r\n                                                                                    {{contenido.descripcion.observacionCantidad}}\r\n                                                                                </p>\r\n                                                                                <p *ngIf=\"contenido.descripcion.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                                    Anotaciones adicionales: {{contenido.descripcion.descripcion}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                            <div *ngIf=\"contenido.subtitulo == 'Formulario'\">\r\n                                                                                <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                <p class=\"nombredocumento\">{{contenido.descripcion.nombre}}\r\n                                                                                    <a *ngIf=\"contenido.descripcion.descarga == null\" href=\"{{contenido.descripcion.url}}\">\r\n                                                                                        <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/transaccional.svg\" alt=\"transaccional\">\r\n                                                                                    </a>\r\n                                                                                    <a *ngIf=\"contenido.descripcion.descarga != null\" href=\"{{contenido.descripcion.descarga}}\">\r\n                                                                                        <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/descarga.svg\" alt=\"descarga\">\r\n                                                                                    </a>\r\n                                                                                </p>\r\n                                                                                <p *ngIf=\"contenido.descripcion.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                                    Anotación adicional: {{contenido.descripcion.descripcion}}\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                            <div *ngIf=\"contenido.subtitulo == 'Canal de atención'\" class=\"canal-panel\">\r\n                                                                                <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                <ng-container *ngFor=\"let canal of contenido.descripcion; let i = index\">\r\n                                                                                    <p *ngIf=\"i == 0\" class=\"leyendadocumento\">{{canal.descripcion}} </p>\r\n                                                                                </ng-container>\r\n                                                                                <table class=\"tablainterna\">\r\n                                                                                    <tbody>\r\n                                                                                        <ng-container  *ngFor=\"let canalTipo of contenido.descripcion; let i = index\">\r\n                                                                                            <tr *ngIf=\"i == 0\" >\r\n                                                                                                <td class=\"textofilas\" style=\"width: 83px;\"><strong>Medio</strong></td>\r\n                                                                                                <td class=\"textofilas\" style=\"width: 450px;\"><strong>Detalle</strong></td>\r\n                                                                                            </tr>\r\n                                                                                            <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'PRESENCIAL'\">\r\n                                                                                                <td class=\"textofilas\" style=\"width: 83px;\"><strong>Presencial</strong></td>\r\n                                                                                                <td class=\"textofilas\" style=\"width: 450px;\">\r\n                                                                                                    <a (click)=\"showModal({tipo: 'puntos', data:  canalTipo.canal.puntosAtencion})\">\r\n                                                                                                        <strong>Ver puntos de atención</strong>\r\n                                                                                                    </a>\r\n                                                                                                </td>\r\n                                                                                            </tr>\r\n                                                                                            <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'WEB'\">\r\n                                                                                                <td class=\"textofilas\" style=\"width: 83px;\"><strong>Web</strong></td>\r\n                                                                                                <td class=\"textofilas\" style=\"width: 450px;\">\r\n                                                                                                    <a href=\"{{ canalTipo.canal.canal.UrlCanalWeb }}\">\r\n                                                                                                        <strong>{{canalTipo.canal.canal.NombreCanalWeb}}</strong>\r\n                                                                                                    </a>\r\n                                                                                                </td>\r\n                                                                                            </tr>\r\n                                                                                        </ng-container>\r\n                                                                                    </tbody>\r\n                                                                                </table>\r\n                                                                            </div>\r\n                                                                            <div *ngIf=\"contenido.subtitulo == 'Pago'\">\r\n                                                                                <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n\r\n                                                                                    {{ pagos | json}}\r\n                                                                                    <p class=\"leyendadocumento\">{{contenido.descripcion.DescripcionMomento}}</p>\r\n                                                                                    <p class=\"leyendadocumento\">Descripción del pago</p>\r\n\r\n                                                                                    <table class=\"tablainterna\">\r\n                                                                                        <tbody>\r\n                                                                                            <ng-container  *ngFor=\"let descripcion of contenido.descripcion.DescripcionPago; let i = index\">\r\n                                                                                                <tr *ngIf=\"i == 0\" >\r\n                                                                                                    <td class=\"textofilas\" style=\"width: 83px;\"><strong>Descripción</strong></td>\r\n                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo Moneda</strong></td>\r\n                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo Valor</strong></td>\r\n                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Cantidad</strong></td>\r\n                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Valor</strong></td>\r\n                                                                                                </tr>\r\n                                                                                                    <tr>\r\n                                                                                                    <td class=\"textofilas\" >{{ descripcion.nombreDescripcion }}</td>\r\n                                                                                                    <td class=\"textofilas\" >{{ descripcion.moneda }}</td>\r\n                                                                                                    <td class=\"textofilas\" >{{ descripcion.tipoValor }}</td>\r\n                                                                                                    <td class=\"textofilas\" >{{ descripcion.cantidadSmlv }}</td>\r\n                                                                                                    <td class=\"textofilas\" >{{ descripcion.valor }}</td>\r\n                                                                                                </tr>\r\n                                                                                            </ng-container>\r\n                                                                                        </tbody>\r\n                                                                                    </table>\r\n                                                                                    <ng-container *ngIf=\"contenido.descripcion.EntidadRecaudadora.length > 0\">\r\n                                                                                        <p class=\"leyendadocumento\">Información medios de pago</p>\r\n                                                                                        <table class=\"tablainterna\">\r\n                                                                                            <tbody>\r\n                                                                                                <ng-container  *ngFor=\"let entidad of contenido.descripcion.EntidadRecaudadora; let i = index\">\r\n                                                                                                    <tr *ngIf=\"i == 0\" >\r\n                                                                                                        <td class=\"textofilas\" style=\"width: 83px;\"><strong>Entidad recaudadora</strong></td>\r\n                                                                                                        <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo cuenta</strong></td>\r\n                                                                                                        <td class=\"textofilas\" style=\"width: 450px;\"><strong>Numero de Cuenta</strong></td>\r\n                                                                                                        <td class=\"textofilas\" style=\"width: 450px;\"><strong>Nombre de Cuenta</strong></td>\r\n                                                                                                        <td class=\"textofilas\" style=\"width: 450px;\"><strong>Codigo de Recaudo</strong></td>\r\n                                                                                                    </tr>\r\n                                                                                                        <tr>\r\n                                                                                                        <td class=\"textofilas\">{{ entidad.nombreEntidad }}</td>\r\n                                                                                                        <td class=\"textofilas\">{{ entidad.tipoCuenta }}</td>\r\n                                                                                                        <td class=\"textofilas\">{{ entidad.numeroCuenta }}</td>\r\n                                                                                                        <td class=\"textofilas\">{{ entidad.nombreCuenta }}</td>\r\n                                                                                                        <td class=\"textofilas\">{{ entidad.codigoRecaudo }}</td>\r\n                                                                                                    </tr>\r\n                                                                                                </ng-container>\r\n                                                                                            </tbody>\r\n                                                                                        </table>\r\n                                                                                    </ng-container>\r\n\r\n                                                                            </div>\r\n                                                                        </ng-container>\r\n                                                                    </ng-template>\r\n                                                            </ngb-panel>\r\n                                                </ngb-accordion>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                    </ngb-accordion>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"data\">\r\n    <div class=\"col-12\">\r\n        <h3>{{data.NombreEstandarizado}}</h3>\r\n        <p>{{ data.Proposito }}</p>\r\n\r\n        <ng-container *ngIf=\"data.PaginaWeb\" >\r\n            <h3 class=\"nombreinstitucion\"><a href=\"{{data.PaginaWeb}}\" target=\"_blank\">{{ data.Entidad }}</a></h3>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-fichaespecifica-header\r\n    *ngIf=\"infoBasicaTramite\"\r\n    [data]=\"infoBasicaTramite\"></app-fichaespecifica-header>\r\n\r\n<app-fichaespecifica-accordion\r\n    *ngIf=\"audiencias\"\r\n    [data]=\"audiencias\"\r\n    (cargarMomentosAudiencia)=\"cargarMomentosAudiencia($event)\"\r\n    (cargarDetalleMomento)=\"cargarDetalleMomento($event)\"></app-fichaespecifica-accordion>\r\n\r\n\r\n\r\n<!--\r\n\r\n<div class=\"col-md-12\">\r\n    <div *ngIf=\"infoBasicaTramite\">\r\n        <div class=\"ficha_detalles\">\r\n\r\n            <div class=\"row\" >\r\n                <div class=\"col-md-8 col-12\">\r\n\r\n                    <ngb-tabset *ngIf=\"audiencias\">\r\n                        <ngb-tab *ngFor=\"let audiencia of audiencias\">\r\n                            <ng-template ngbTabTitle ><strong (click)=\"tipoAudienciafuncion(audiencia.tipoaudiencia)\">{{audiencia.tipoaudiencia}}</strong></ng-template>\r\n                            <ng-template ngbTabContent >\r\n                                <div class=\"text-intro\">\r\n                                    <h3>Información General del Trámite</h3>\r\n                                    <p>Para realizar el trámite debes seguir <strong>los siguientes pasos:</strong></p>\r\n                                </div>\r\n                                    <ngb-accordion #acc=\"ngbAccordion\">\r\n                                    <ngb-panel *ngFor=\"let ordenAudiencia of ordenAudiencias; let i= index\" >\r\n                                        <ng-template ngbPanelTitle >\r\n                                        <h3 (click)=\"dataMomentoAudiencia(audiencia.tipoaudiencia, ordenAudiencia.Orden, i)\">{{i+1}}. {{ ordenAudiencia.Descripcion }}</h3>\r\n                                        <div class=\"icon\"></div>\r\n                                        </ng-template>\r\n                                        <ng-template ngbPanelContent >\r\n                                            <ng-container *ngIf=\"extractFromJson(ordenAudiencia.Informacion); let data\">\r\n                                                <div *ngFor=\"let items of data\">\r\n                                                    <div *ngIf=\"items.subtitulo == 'Condiciones'\" class=\"condicion-panel\">\r\n                                                        <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                                        <div *ngFor=\"let condicion of items.descripcion\">\r\n                                                            <p class=\"leyendadocumento\">{{condicion}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"items.subtitulo == 'Formulario'\" class=\"documento-panel\">\r\n                                                        <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                                        <div *ngFor=\"let formulario of items.descripcion\">\r\n                                                            <p class=\"nombredocumento\">{{formulario.nombre}}\r\n                                                                <a *ngIf=\"formulario.descarga == null\" href=\"{{formulario.url}}\">\r\n                                                                    <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/transaccional.svg\" alt=\"transaccional\">\r\n                                                                </a>\r\n                                                                <a *ngIf=\"formulario.descarga != null\" href=\"{{formulario.descarga}}\">\r\n                                                                    <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/descarga.svg\" alt=\"descarga\">\r\n                                                                </a>\r\n                                                            </p>\r\n                                                            <p *ngIf=\"formulario.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                Anotación adicional: {{formulario.descripcion}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"items.subtitulo == 'Documento'\" class=\"documento-panel\">\r\n                                                        <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                                        <div *ngFor=\"let documento of items.descripcion\" class=\"documento-descripcion\">\r\n                                                            <p class=\"nombredocumento\">{{documento.nombre}}</p>\r\n                                                            <p class=\"infoadicional\">\r\n                                                                Cantidad: {{documento.cantidadDoc}}\r\n                                                                {{documento.unidadCantidad}}\r\n                                                                {{documento.observacionCantidad}}\r\n                                                            </p>\r\n                                                            <p *ngIf=\"documento.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                Anotaciones adicionales: {{documento.descripcion}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"items.subtitulo == 'Canal de atención'\" class=\"canal-panel\">\r\n                                                        <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                                        <div *ngFor=\"let canales of items.descripcion\">\r\n                                                            <div *ngFor=\"let canal of canales; let i = index\">\r\n                                                                <p *ngIf=\"i == 0\" class=\"leyendadocumento\">{{canal.descripcion}} </p>\r\n                                                                </div>\r\n                                                            <div class=\"govco-table govco-table-basic\">\r\n                                                                <table class=\"table table-striped\">\r\n                                                                    <ng-container  *ngFor=\"let canalTipo of canales; let i = index\">\r\n                                                                        <thead *ngIf=\"i == 0\" >\r\n                                                                            <th scope=\"col\">Medio</th>\r\n                                                                            <th scope=\"col\">Detalle</th>\r\n                                                                        </thead>\r\n                                                                        <tbody>\r\n                                                                            <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'PRESENCIAL'\">\r\n                                                                                <td>Presencial</td>\r\n                                                                                <td>\r\n                                                                                    <a (click)=\"showModal({tipo: 'puntos', data: canalTipo.canal.puntosAtencion})\">\r\n                                                                                        Ver puntos de atención\r\n                                                                                    </a>\r\n                                                                                </td>\r\n                                                                            </tr>\r\n                                                                            <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'WEB'\">\r\n                                                                                <td>Web</td>\r\n                                                                                <td>\r\n                                                                                    <a href=\"{{ canalTipo.canal.canal.UrlCanalWeb }}\">\r\n                                                                                        {{canalTipo.canal.canal.NombreCanalWeb}}\r\n                                                                                    </a>\r\n                                                                                </td>\r\n                                                                            </tr>\r\n                                                                        </tbody>\r\n                                                                    </ng-container>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"items.subtitulo == 'Pago'\">\r\n                                                        <h4 class=\"titulocondicion\">{{items.subtitulo}}</h4>\r\n                                                        <div *ngFor=\"let pagos of items.descripcion\">\r\n                                                            <p class=\"leyendadocumento\">{{pagos.DescripcionMomento}}</p>\r\n                                                            <p class=\"leyendadocumento font-weight-bold\">Descripción del pago</p>\r\n                                                            <div class=\"govco-table govco-table-basic\">\r\n                                                                <table class=\"table table-striped\">\r\n                                                                    <ng-container  *ngFor=\"let descripcion of pagos.DescripcionPago; let i = index\">\r\n                                                                        <thead *ngIf=\"i == 0\" >\r\n                                                                            <th><strong>Descripción</strong></th>\r\n                                                                            <th><strong>Tipo Moneda</strong></th>\r\n                                                                            <th><strong>Tipo Valor</strong></th>\r\n                                                                            <th><strong>Cantidad</strong></th>\r\n                                                                            <th><strong>Valor</strong></th>\r\n                                                                        </thead>\r\n                                                                        <tbody>\r\n                                                                            <tr>\r\n                                                                                <td>{{ descripcion.nombreDescripcion }}</td>\r\n                                                                                <td>{{ descripcion.moneda }}</td>\r\n                                                                                <td>{{ descripcion.tipoValor }}</td>\r\n                                                                                <td>{{ descripcion.cantidadSmlv }}</td>\r\n                                                                                <td>{{ descripcion.valor }}</td>\r\n                                                                            </tr>\r\n                                                                        </tbody>\r\n                                                                    </ng-container>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            <ng-container *ngIf=\"pagos.EntidadRecaudadora.length > 0\">\r\n                                                                <p class=\"leyendadocumento font-weight-bold\">Información medios de pago</p>\r\n                                                                <div class=\"govco-table govco-table-basic\">\r\n                                                                    <table class=\"table table-striped\">\r\n                                                                        <ng-container  *ngFor=\"let entidad of pagos.EntidadRecaudadora; let i = index\">\r\n                                                                            <thead *ngIf=\"i == 0\" >\r\n                                                                                <th><strong>Entidad recaudadora</strong></th>\r\n                                                                                <th><strong>Tipo cuenta</strong></th>\r\n                                                                                <th><strong>Numero de Cuenta</strong></th>\r\n                                                                                <th><strong>Nombre de Cuenta</strong></th>\r\n                                                                                <th><strong>Codigo de Recaudo</strong></th>\r\n                                                                            </thead>\r\n                                                                            <tbody>\r\n                                                                                <tr>\r\n                                                                                    <td class=\"textofilas\" >{{ entidad.nombreEntidad }}</td>\r\n                                                                                    <td class=\"textofilas\" >{{ entidad.tipoCuenta }}</td>\r\n                                                                                    <td class=\"textofilas\" >{{ entidad.numeroCuenta }}</td>\r\n                                                                                    <td class=\"textofilas\" >{{ entidad.nombreCuenta }}</td>\r\n                                                                                    <td class=\"textofilas\" >{{ entidad.codigoRecaudo }}</td>\r\n                                                                                </tr>\r\n                                                                            </tbody>\r\n                                                                        </ng-container>\r\n                                                                    </table>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <ng-container *ngIf=\"extractFromJson(ordenAudiencia.Excepcion); let dataExcepciones\">\r\n                                                    <div *ngIf=\"dataExcepciones.length > 0\">\r\n                                                        <p class=\"font-weight-bold\"><em class=\"material-icons\">stars</em>Se identifica con alguno de estos casos, adicionalmente debe:</p>\r\n                                                        <div class=\"excepciones\">\r\n                                                            <ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\">\r\n                                                                    <ngb-panel *ngFor=\"let excepciones of dataExcepciones; let i= index\" id=\"{{i}}\">\r\n                                                                            <ng-template ngbPanelTitle >\r\n                                                                                <p>{{i+1}}. {{ excepciones.TituloAcordeon }}</p>\r\n                                                                                <div class=\"icon\"></div>\r\n                                                                            </ng-template>\r\n                                                                                <ng-template ngbPanelContent>\r\n                                                                                    <ng-container *ngFor=\"let contenido of excepciones.Contenido\">\r\n                                                                                        <div *ngIf=\"contenido.subtitulo == 'Condiciones'\">\r\n                                                                                            <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                            <p class=\"leyendadocumento\">{{contenido.descripcion}}</p>\r\n                                                                                        </div>\r\n                                                                                        <div *ngIf=\"contenido.subtitulo == 'Documento'\">\r\n                                                                                            <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                            <p class=\"nombredocumento\">{{contenido.descripcion.nombre}}</p>\r\n                                                                                            <p>\r\n                                                                                                Cantidad: {{contenido.descripcion.cantidadDoc}}\r\n                                                                                                {{contenido.descripcion.unidadCantidad}}\r\n                                                                                                {{contenido.descripcion.observacionCantidad}}\r\n                                                                                            </p>\r\n                                                                                            <p *ngIf=\"contenido.descripcion.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                                                Anotaciones adicionales: {{contenido.descripcion.descripcion}}\r\n                                                                                            </p>\r\n                                                                                        </div>\r\n                                                                                        <div *ngIf=\"contenido.subtitulo == 'Formulario'\">\r\n                                                                                            <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                            <p class=\"nombredocumento\">{{contenido.descripcion.nombre}}\r\n                                                                                                <a *ngIf=\"contenido.descripcion.descarga == null\" href=\"{{contenido.descripcion.url}}\">\r\n                                                                                                    <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/transaccional.svg\" alt=\"transaccional\">\r\n                                                                                                </a>\r\n                                                                                                <a *ngIf=\"contenido.descripcion.descarga != null\" href=\"{{contenido.descripcion.descarga}}\">\r\n                                                                                                    <img class=\"iconodisponible\" src=\"assets/icon-fichatramite/descarga.svg\" alt=\"descarga\">\r\n                                                                                                </a>\r\n                                                                                            </p>\r\n                                                                                            <p *ngIf=\"contenido.descripcion.descripcion != null\" class=\"leyendadocumento\">\r\n                                                                                                Anotación adicional: {{contenido.descripcion.descripcion}}\r\n                                                                                            </p>\r\n                                                                                        </div>\r\n                                                                                        <div *ngIf=\"contenido.subtitulo == 'Canal de atención'\" class=\"canal-panel\">\r\n                                                                                            <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n                                                                                            <ng-container *ngFor=\"let canal of contenido.descripcion; let i = index\">\r\n                                                                                                <p *ngIf=\"i == 0\" class=\"leyendadocumento\">{{canal.descripcion}} </p>\r\n                                                                                            </ng-container>\r\n                                                                                            <table class=\"tablainterna\">\r\n                                                                                                <tbody>\r\n                                                                                                    <ng-container  *ngFor=\"let canalTipo of contenido.descripcion; let i = index\">\r\n                                                                                                        <tr *ngIf=\"i == 0\" >\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 83px;\"><strong>Medio</strong></td>\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 450px;\"><strong>Detalle</strong></td>\r\n                                                                                                        </tr>\r\n                                                                                                        <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'PRESENCIAL'\">\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 83px;\"><strong>Presencial</strong></td>\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 450px;\">\r\n                                                                                                                <a (click)=\"showModal({tipo: 'puntos', data:  canalTipo.canal.puntosAtencion})\">\r\n                                                                                                                    <strong>Ver puntos de atención</strong>\r\n                                                                                                                </a>\r\n                                                                                                            </td>\r\n                                                                                                        </tr>\r\n                                                                                                        <tr *ngIf=\"canalTipo.canal.canal.TipoCanal == 'WEB'\">\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 83px;\"><strong>Web</strong></td>\r\n                                                                                                            <td class=\"textofilas\" style=\"width: 450px;\">\r\n                                                                                                                <a href=\"{{ canalTipo.canal.canal.UrlCanalWeb }}\">\r\n                                                                                                                    <strong>{{canalTipo.canal.canal.NombreCanalWeb}}</strong>\r\n                                                                                                                </a>\r\n                                                                                                            </td>\r\n                                                                                                        </tr>\r\n                                                                                                    </ng-container>\r\n                                                                                                </tbody>\r\n                                                                                            </table>\r\n                                                                                        </div>\r\n                                                                                        <div *ngIf=\"contenido.subtitulo == 'Pago'\">\r\n                                                                                            <h4 class=\"titulocondicion\">{{contenido.subtitulo}}</h4>\r\n\r\n                                                                                                {{ pagos | json}}\r\n                                                                                                <p class=\"leyendadocumento\">{{contenido.descripcion.DescripcionMomento}}</p>\r\n                                                                                                <p class=\"leyendadocumento\">Descripción del pago</p>\r\n\r\n                                                                                                <table class=\"tablainterna\">\r\n                                                                                                    <tbody>\r\n                                                                                                        <ng-container  *ngFor=\"let descripcion of contenido.descripcion.DescripcionPago; let i = index\">\r\n                                                                                                            <tr *ngIf=\"i == 0\" >\r\n                                                                                                                <td class=\"textofilas\" style=\"width: 83px;\"><strong>Descripción</strong></td>\r\n                                                                                                                <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo Moneda</strong></td>\r\n                                                                                                                <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo Valor</strong></td>\r\n                                                                                                                <td class=\"textofilas\" style=\"width: 450px;\"><strong>Cantidad</strong></td>\r\n                                                                                                                <td class=\"textofilas\" style=\"width: 450px;\"><strong>Valor</strong></td>\r\n                                                                                                            </tr>\r\n                                                                                                                <tr>\r\n                                                                                                                <td class=\"textofilas\" >{{ descripcion.nombreDescripcion }}</td>\r\n                                                                                                                <td class=\"textofilas\" >{{ descripcion.moneda }}</td>\r\n                                                                                                                <td class=\"textofilas\" >{{ descripcion.tipoValor }}</td>\r\n                                                                                                                <td class=\"textofilas\" >{{ descripcion.cantidadSmlv }}</td>\r\n                                                                                                                <td class=\"textofilas\" >{{ descripcion.valor }}</td>\r\n                                                                                                            </tr>\r\n                                                                                                        </ng-container>\r\n                                                                                                    </tbody>\r\n                                                                                                </table>\r\n                                                                                                <ng-container *ngIf=\"contenido.descripcion.EntidadRecaudadora.length > 0\">\r\n                                                                                                    <p class=\"leyendadocumento\">Información medios de pago</p>\r\n                                                                                                    <table class=\"tablainterna\">\r\n                                                                                                        <tbody>\r\n                                                                                                            <ng-container  *ngFor=\"let entidad of contenido.descripcion.EntidadRecaudadora; let i = index\">\r\n                                                                                                                <tr *ngIf=\"i == 0\" >\r\n                                                                                                                    <td class=\"textofilas\" style=\"width: 83px;\"><strong>Entidad recaudadora</strong></td>\r\n                                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Tipo cuenta</strong></td>\r\n                                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Numero de Cuenta</strong></td>\r\n                                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Nombre de Cuenta</strong></td>\r\n                                                                                                                    <td class=\"textofilas\" style=\"width: 450px;\"><strong>Codigo de Recaudo</strong></td>\r\n                                                                                                                </tr>\r\n                                                                                                                    <tr>\r\n                                                                                                                    <td class=\"textofilas\">{{ entidad.nombreEntidad }}</td>\r\n                                                                                                                    <td class=\"textofilas\">{{ entidad.tipoCuenta }}</td>\r\n                                                                                                                    <td class=\"textofilas\">{{ entidad.numeroCuenta }}</td>\r\n                                                                                                                    <td class=\"textofilas\">{{ entidad.nombreCuenta }}</td>\r\n                                                                                                                    <td class=\"textofilas\">{{ entidad.codigoRecaudo }}</td>\r\n                                                                                                                </tr>\r\n                                                                                                            </ng-container>\r\n                                                                                                        </tbody>\r\n                                                                                                    </table>\r\n                                                                                                </ng-container>\r\n\r\n                                                                                        </div>\r\n                                                                                    </ng-container>\r\n                                                                                </ng-template>\r\n                                                                        </ngb-panel>\r\n                                                            </ngb-accordion>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </ng-template>\r\n                                    </ngb-panel>\r\n                                </ngb-accordion>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                    </ngb-tabset>\r\n                    <div class=\"tramiteCard\">\r\n                        <h3>Ten en cuenta sobre este trámite</h3>\r\n                        <div class=\"row\">\r\n                            <div class=\"p-2\" *ngIf=\"puntosAtencion.length > 0\">\r\n                                    <a (click)=\"showModal({tipo: 'puntos', data:  puntosAtencion})\" class=\"btn btn-round btn-middle\">Puntos de atención</a>\r\n                            </div>\r\n                            <div class=\"p-2\" *ngIf=\"dataNormatividad.length > 0\">\r\n                                    <a (click)=\"showModal({tipo: 'normatividad', data: dataNormatividad})\" class=\"btn btn-round btn-middle\">Legislación Asociada</a>\r\n                            </div>\r\n                            <ng-container *ngIf=\"dataUrl && embebidos\">\r\n\r\n                                <div *ngIf=\"dataUrl.Tipotramite == 'Realizar trámite en línea' || dataUrl.Tipotramite == 'SemiPresencial'\">\r\n                                    <a *ngIf=\"embebidos.EMBEBIDO == 'Si' && embebidos.ESTADO_ID == 1\" (click)=\"redireccionar()\">\r\n                                        <img  src=\"assets/icon-fichatramite/tramitelinea.png\" alt=\"Tramite en Linea\">\r\n                                    </a>\r\n\r\n                                    <a *ngIf=\"(embebidos.EMBEBIDO == 'No' || embebidos == 'Enlinea')\r\n                                                && dataUrl.UrlTramiteEnLinea != null \"\r\n                                                href=\"{{ dataUrl.UrlTramiteEnLinea }}\">\r\n                                                <img  src=\"assets/icon-fichatramite/tramitelinea.png\" alt=\"Tramite en Linea\">\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-12\" *ngIf=\"dataUrl && embebidos\">\r\n                    <div *ngIf=\"dataUrl.Tipotramite == 'Realizar trámite en línea' || dataUrl.Tipotramite == 'SemiPresencial'\">\r\n                        <a *ngIf=\"embebidos.EMBEBIDO == 'Si' && embebidos.ESTADO_ID == 1\" (click)=\"redireccionar()\">\r\n                            <img  src=\"assets/icon-fichatramite/tramitelinea.png\" alt=\"Tramite en Linea\">\r\n                        </a>\r\n                        <a *ngIf=\"(embebidos.EMBEBIDO == 'No' || embebidos == 'Enlinea')\r\n                                  && dataUrl.UrlTramiteEnLinea != null\"   href=\"{{ dataUrl.UrlTramiteEnLinea }}\">\r\n                            <img  src=\"assets/icon-fichatramite/tramitelinea.png\" alt=\"Tramite en Linea\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"p-2\" *ngIf=\"dataUrl.Tipotramite == 'SemiPresencial' || dataUrl.Tipotramite == 'Presencial'\">\r\n                        <a (click)=\"showModal({tipo: 'puntos', data:  puntosAtencion})\" class=\"btn btn-round btn-middle puntos-btn\">Puntos de atención</a>\r\n                    </div>\r\n                        <govco-area-servicios module=\"Tramites\" itemid=\"numero\"></govco-area-servicios>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataBase\">\r\n    <div class=\"col-md-12\">\r\n        <h2>{{ dataBase.NombreEstandarizado }}</h2>\r\n        <p>{{ dataBase.Proposito }}</p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"form-group select-govco\">\r\n            <label for=\"lugar\"><strong>¿Donde quieres realizar el trámite?</strong></label>           \r\n            <select  (change)=\"idMunicipio($event.target.value)\" class=\"form-control\" id=\"lugar\" name=\"lugar\" required>\r\n                <option value=\"\" selected disabled>Seleccione un Municipio - Departamento</option>\r\n                <ng-container *ngFor=\"let puntos of dataBase.Puntos\">\r\n                    <option value=\"{{ puntos.IdTramiteMunicipio }}\">{{ puntos.MunicipioNombre }} - {{ puntos.DepartamentoNombre }}</option>\r\n                </ng-container>\r\n            </select>\r\n        </div>     \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"dataBase\">\r\n    <div class=\"col-md-12\">\r\n        <h4  class=\"titulotramite\">{{dataBase.Nombre}}</h4>\r\n        <p>{{dataBase.Descripcion}}</p>\r\n        <p class=\"urlEntidadNoSuit\"><b>{{dataBase.NombreEntidad}}</b></p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"tramiteCard\">\r\n                <h3>Objetivo del trámite</h3>\r\n                <p>{{dataBase.Proposito}}</p>\r\n                <h3>Resultado</h3>\r\n                <p>{{dataBase.ResultadoOtroServicio}}</p>\r\n            </div>\r\n            <div class=\"tramiteCard\" *ngIf=\"consideraciones.length > 0\">\r\n                <h3>Recuerde</h3>\r\n                <ng-container *ngFor=\"let consideracion of consideraciones\">\r\n                    <p>{{ consideracion.CondicionesAdicionales }}</p>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"tramiteCard\" *ngIf=\"puntosAtencion.length > 0\">\r\n                <p class=\"labeltramiteabout\">Ten en cuenta sobre este trámite</p>\r\n                <div class=\"row\">\r\n                    <div class=\"p-2\">\r\n                            <a (click)=\"showModal(puntosAtencion)\" class=\"btn btn-round btn-high\">Ver puntos de atención</a>\r\n                    </div>\r\n                    <div class=\"p-2\">\r\n                            <a href=\"{{dataBase.UrlServicioEnLinea}}\" class=\"btn btn-round btn-high\">Realizar trámite en línea</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"dataBase\">\r\n            <!-- <a href=\"{{dataBase.UrlServicioEnLinea}}\">\r\n                <img  src=\"assets/icon-fichatramite/tramitelinea.png\">\r\n            </a> -->\r\n            <govco-area-servicios module=\"TramitesNoSuit\" itemid=\"numero\"></govco-area-servicios>\r\n        </div>\r\n    </div>\r\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/general/general.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/general/general.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n\r\n    <embebidos *ngIf=\"embebido == true\" [data]=\"dataEmbebidos\"></embebidos>\r\n\r\n    <div *ngIf=\"tramite.tipo == '601'\">\r\n        <app-ficha-especifica *ngIf=\"tramite.tipo\" [informacionFicha]=\"tramite\" (propagar)=\"redireccionador($event)\">\r\n        </app-ficha-especifica>\r\n    </div>\r\n    <div *ngIf=\"tramite.tipo == '602'\">\r\n        <ficha-estandar [tipoFicha]=\"tramite.tipo\"  (propagar)=\"redireccionador($event)\">\r\n        </ficha-estandar>\r\n    </div>\r\n    <div *ngIf=\"tramite.tipo == '603'\">\r\n        <ficha-no-suite  [tipoFicha]=\"tramite.tipo\"></ficha-no-suite>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"puntos-atencion-tramite\">\r\n<div class=\"modal-header\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-7 col-12\">\r\n                <ng-container *ngIf=\"puntosAtencion\">\r\n                <h2>Puntos de Atención</h2>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"normatividad\">\r\n                <h2 class=\"titulo_popuptramite\">Legislación Asociada</h2>\r\n            </ng-container>\r\n            </div>            \r\n        \r\n        <div class=\"col-md-5 col-12\">\r\n            <div class=\"buscador\">\r\n                <input class=\"form-control\" type=\"text\" aria-label=\"Buscar\" placeholder=\"Buscar\" [(ngModel)]=\"serchText\">\r\n                <span class=\"govco-icon govco-icon-search-cn\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\"><em class=\"material-icons\">clear</em></button>\r\n</div>\r\n<div class=\"modal-body\">    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n                <table class=\"table table-responsive\" *ngIf=\"puntosAtencion\">\r\n                        \r\n                            <ng-container  *ngFor=\"let punto of puntosAtencion |filter:serchText | paginate: { itemsPerPage: 5, currentPage: p}; let i = index\">\r\n                                <thead *ngIf=\"i == 0\" >\r\n                                    <th class=\"textofilas\" ><strong>Punto</strong></th>\r\n                                    <th class=\"textofilas\" ><strong>Departamento / Municipio</strong></th>\r\n                                    <th class=\"textofilas\" ><strong>Dirección</strong></th>\r\n                                    <th class=\"textofilas\" ><strong>Horario</strong></th>\r\n                                    <th class=\"textofilas\" ><strong>Teléfono</strong></th>\r\n                                    <th class=\"textofilas\" ><strong>Ver Mapa</strong></th>\r\n                                </thead>\r\n                            </ng-container>\r\n                            <tbody>\r\n                            <ng-container  *ngFor=\"let punto of puntosAtencion |filter:serchText | paginate: { itemsPerPage: 5, currentPage: p}; let i = index\">\r\n                                 <tr>\r\n                                    <td>{{ punto.PuntoAtencionNombre }}</td>\r\n                                    <td>{{ punto.Departamento }} / {{ punto.Municipio }}</td>\r\n                                    <td>{{ punto.PuntoAtencionDireccion }}</td>\r\n                                    <td>{{ punto.HorarioAtencion }}</td>\r\n                                    <td>{{ punto.PuntoAtencionTelefono }}</td>\r\n                                    <td>\r\n                                        <a target=\"_blank\" href=\"http://maps.google.com/maps?ll={{ punto.Latitud.replace(',','.') }},{{ punto.Longitud.replace(',','.') }} \">\r\n                                            <span class=\"govco-icon govco-icon-pin\"></span>\r\n                                        </a></td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <table class=\"table\"  *ngIf=\"normatividad\">\r\n                            <tbody>\r\n                                <ng-container  *ngFor=\"let normas of normatividad |filter:serchText | paginate: { itemsPerPage: 6, currentPage: p}; let i = index\">\r\n                                    <ng-container *ngIf=\"i%2==0\">\r\n                                     <tr >\r\n                                    </ng-container>\r\n                                        <td style=\"width: 50%;\" class=\"textofilas\">{{ normas.TipoNorma }} {{ normas.NumeroNorma }} de {{ normas.AnoNorma }} ({{ normas.Articulos }})\r\n                                        <img src=\"assets/icon-fichatramite/save.svg\" class=\"iconodisponible\" style=\"float:right;\" alt=\"Save\" >\r\n                                        </td>\r\n                                </ng-container>\r\n                            </tbody>\r\n                        </table>\r\n                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>                    \r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h3>Recursos</h3>\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\"><em class=\"material-icons\">clear</em></button>\r\n</div>\r\n<div class=\"hr-popuptramites\">\r\n    <hr>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"col-md-4\">\r\n            <govco-area-servicios module=\"Tramites\" module-id=\"numero\"></govco-area-servicios>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi1kb2N1bWVudG8vYWNjaW9uLWRvY3VtZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AccionDocumentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionDocumentoComponent", function() { return AccionDocumentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionDocumentoComponent = class AccionDocumentoComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccionDocumentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-documento',
        template: __webpack_require__(/*! raw-loader!./accion-documento.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.html"),
        styles: [__webpack_require__(/*! ./accion-documento.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.scss")]
    })
], AccionDocumentoComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi1leGNlcGNpb24vYWNjaW9uLWV4Y2VwY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AccionExcepcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionExcepcionComponent", function() { return AccionExcepcionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionExcepcionComponent = class AccionExcepcionComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccionExcepcionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-excepcion',
        template: __webpack_require__(/*! raw-loader!./accion-excepcion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.html"),
        styles: [__webpack_require__(/*! ./accion-excepcion.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.scss")]
    })
], AccionExcepcionComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi1mb3JtdWxhcmlvL2FjY2lvbi1mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AccionFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionFormularioComponent", function() { return AccionFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionFormularioComponent = class AccionFormularioComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccionFormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-formulario',
        template: __webpack_require__(/*! raw-loader!./accion-formulario.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.html"),
        styles: [__webpack_require__(/*! ./accion-formulario.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.scss")]
    })
], AccionFormularioComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi1wYWdvL2FjY2lvbi1wYWdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AccionPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionPagoComponent", function() { return AccionPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionPagoComponent = class AccionPagoComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccionPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-pago',
        template: __webpack_require__(/*! raw-loader!./accion-pago.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.html"),
        styles: [__webpack_require__(/*! ./accion-pago.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.scss")]
    })
], AccionPagoComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi1zb2xpY2l0dWQvYWNjaW9uLXNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AccionSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionSolicitudComponent", function() { return AccionSolicitudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionSolicitudComponent = class AccionSolicitudComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccionSolicitudComponent.prototype, "data", void 0);
AccionSolicitudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-solicitud',
        template: __webpack_require__(/*! raw-loader!./accion-solicitud.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.html"),
        styles: [__webpack_require__(/*! ./accion-solicitud.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.scss")]
    })
], AccionSolicitudComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2FjY2lvbmVzL2FjY2lvbi12ZXJpZmljYWNpb24vYWNjaW9uLXZlcmlmaWNhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AccionVerificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionVerificacionComponent", function() { return AccionVerificacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccionVerificacionComponent = class AccionVerificacionComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccionVerificacionComponent.prototype, "data", void 0);
AccionVerificacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accion-verificacion',
        template: __webpack_require__(/*! raw-loader!./accion-verificacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.html"),
        styles: [__webpack_require__(/*! ./accion-verificacion.component.scss */ "./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.scss")]
    })
], AccionVerificacionComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/embebidos/embebidos.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/embebidos/embebidos.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tramiteCard {\n  border-radius: 0.5rem;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  margin: 20px 0px 0px 0px !important;\n  background: #fff;\n  width: 100%;\n  border: 1px;\n  border-color: #E5EEFB;\n  border-style: solid;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  clear: both;\n  overflow: hidden;\n}\n\n.center {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZW1iZWJpZG9zL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZpY2hhdHJhbWl0ZVxcY29tcG9uZW50c1xcZW1iZWJpZG9zXFxlbWJlYmlkb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2VtYmViaWRvcy9lbWJlYmlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNJLGNBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2VtYmViaWRvcy9lbWJlYmlkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbWl0ZUNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNFNUVFRkI7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuY2VudGVye1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9IiwiLnRyYW1pdGVDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItY29sb3I6ICNFNUVFRkI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/embebidos/embebidos.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/embebidos/embebidos.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmbebidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbebidosComponent", function() { return EmbebidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _recursos_modal_recursos_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recursos-modal/recursos-modal.component */ "./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.ts");





let EmbebidosComponent = class EmbebidosComponent {
    constructor(sanitizer, modalService) {
        this.sanitizer = sanitizer;
        this.modalService = modalService;
    }
    ngAfterViewInit() {
    }
    showModal(id) {
        const modal = this.modalService.open(_recursos_modal_recursos_modal_component__WEBPACK_IMPORTED_MODULE_4__["RecursosModalComponent"], { size: 'lg',
            backdrop: "static",
            keyboard: false
        });
        modal.componentInstance.idTramite = id;
    }
    ngAfterViewChecked() {
        this.setNumeroTramite(this.data["NUMERO"]);
    }
    setNumeroTramite(numero) {
        const s = document.getElementsByTagName('govco-area-servicios');
        if (s.length > 0) {
            s[0].setAttribute('itemid', "T" + numero);
        }
    }
};
EmbebidosComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data')
], EmbebidosComponent.prototype, "data", void 0);
EmbebidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'embebidos',
        template: __webpack_require__(/*! raw-loader!./embebidos.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/embebidos/embebidos.component.html"),
        styles: [__webpack_require__(/*! ./embebidos.component.scss */ "./src/app/tramites/fichatramite/components/embebidos/embebidos.component.scss")]
    })
], EmbebidosComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhZXNwZWNpZmljYS1hY2NvcmRpb24vZmljaGFlc3BlY2lmaWNhLWFjY29yZGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: FichaespecificaAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaespecificaAccordionComponent", function() { return FichaespecificaAccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FichaespecificaAccordionComponent = class FichaespecificaAccordionComponent {
    constructor() {
        this.cargarDetalleMomento = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cargarMomentosAudiencia = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    eventoTabAudiencia(data) {
        this.cargarMomentosAudiencia.emit(data);
    }
    dataDetalleMomentoAudiencia(audiencia, momento) {
        const data = {
            audiencia,
            momento
        };
        this.cargarDetalleMomento.emit(data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FichaespecificaAccordionComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FichaespecificaAccordionComponent.prototype, "cargarDetalleMomento", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FichaespecificaAccordionComponent.prototype, "cargarMomentosAudiencia", void 0);
FichaespecificaAccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fichaespecifica-accordion',
        template: __webpack_require__(/*! raw-loader!./fichaespecifica-accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.html"),
        styles: [__webpack_require__(/*! ./fichaespecifica-accordion.component.scss */ "./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.scss")]
    })
], FichaespecificaAccordionComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhZXNwZWNpZmljYS1oZWFkZXIvZmljaGFlc3BlY2lmaWNhLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FichaespecificaHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaespecificaHeaderComponent", function() { return FichaespecificaHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FichaespecificaHeaderComponent = class FichaespecificaHeaderComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FichaespecificaHeaderComponent.prototype, "data", void 0);
FichaespecificaHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fichaespecifica-header',
        template: __webpack_require__(/*! raw-loader!./fichaespecifica-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.html"),
        styles: [__webpack_require__(/*! ./fichaespecifica-header.component.scss */ "./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.scss")]
    })
], FichaespecificaHeaderComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulocondicion {\n  display: block;\n  font-size: 14px;\n  color: #004884;\n  text-align: left;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.leyendadocumento {\n  text-align: left;\n  font-weight: 400;\n  line-height: 21px;\n  margin: 0 0 10px;\n}\n\n.nombredocumento {\n  color: #0B457F;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 1rem;\n}\n\n.infoadicional {\n  font-size: 12px;\n  display: inline;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.iconodisponible {\n  max-width: 25px;\n}\n\n.title-subacordeon {\n  color: #0B457F;\n  font-weight: 600;\n}\n\n.labeltramiteabout {\n  display: block;\n  font-size: 20px;\n  color: #3772FF !important;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZmljaGFlc3BlY2lmaWNhL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZpY2hhdHJhbWl0ZVxcY29tcG9uZW50c1xcZmljaGFlc3BlY2lmaWNhXFxmaWNoYWVzcGVjaWZpY2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhZXNwZWNpZmljYS9maWNoYWVzcGVjaWZpY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZmljaGFlc3BlY2lmaWNhL2ZpY2hhZXNwZWNpZmljYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9jb25kaWNpb257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDA0ODg0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubGV5ZW5kYWRvY3VtZW50b3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcbi5ub21icmVkb2N1bWVudG97XHJcbiAgICBjb2xvcjogIzBCNDU3RjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcbi5pbmZvYWRpY2lvbmFse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbn1cclxuLmljb25vZGlzcG9uaWJsZXtcclxuICAgIG1heC13aWR0aDogMjVweDtcclxufVxyXG4gIC50aXRsZS1zdWJhY29yZGVvbntcclxuICAgIGNvbG9yOiAjMEI0NTdGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmxhYmVsdHJhbWl0ZWFib3V0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzM3NzJGRiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9IiwiLnRpdHVsb2NvbmRpY2lvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDA0ODg0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxleWVuZGFkb2N1bWVudG8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxuLm5vbWJyZWRvY3VtZW50byB7XG4gIGNvbG9yOiAjMEI0NTdGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4uaW5mb2FkaWNpb25hbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLmljb25vZGlzcG9uaWJsZSB7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLnRpdGxlLXN1YmFjb3JkZW9uIHtcbiAgY29sb3I6ICMwQjQ1N0Y7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sYWJlbHRyYW1pdGVhYm91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzc3MkZGICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FichaEspecificaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaEspecificaComponent", function() { return FichaEspecificaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ficha-tramite.service */ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../puntos-atencion-modal/puntos-atencion-modal.component */ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.ts");






let FichaEspecificaComponent = class FichaEspecificaComponent {
    constructor(fichaTramiteService, modalService) {
        this.fichaTramiteService = fichaTramiteService;
        this.modalService = modalService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataNormatividad = [];
        this.numeroId = '';
        this.activeIdsAcordeon = [];
        this.dataExcepciones = [];
        this.puntosAtencion = [];
    }
    ngOnInit() {
        this.loadDataInfoFicha(this.informacionFicha);
    }
    loadDataInfoFicha(dataTramite) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fichaTramiteService.GetTipoTramiteFichaEspecificaById(dataTramite.id).subscribe(dataFicha => {
                this.infoBasicaTramite = dataFicha;
                this.fichaTramiteService.GetTiposAudienciaById(dataTramite.id).subscribe(n => {
                    this.audiencias = n;
                    if (this.audiencias.length > 0) {
                        this.loadMomentosAutiencia(dataTramite.id, this.audiencias[0].detalle);
                    }
                });
            });
        });
    }
    cargarDetalleMomento(data) {
        this.fichaTramiteService.GetDataFichaByIdAudiencia(this.informacionFicha.id, data.audiencia, data.momento)
            .subscribe((dataAccion) => {
            dataAccion.forEach(element => {
                this.audiencias.forEach((item) => {
                    if (item.detalle === data.audiencia) {
                        item.momentos.forEach((i) => {
                            if (i.Orden === data.momento) {
                                i.acciones = this.procesarDataAcciones(dataAccion);
                            }
                        });
                    }
                });
            });
            console.log(this.audiencias);
        });
    }
    procesarDataAcciones(data) {
        const temporal = [];
        const dataretorno = [];
        data.forEach(i => {
            const busqueda = temporal.find(n => n.AccionCondicionId === i.AccionCondicionId);
            if (typeof (busqueda) === 'undefined') {
                temporal.push(i);
            }
        });
        temporal.forEach(n => {
            if (!dataretorno[n.TipoAccionCondicion]) {
                dataretorno[n.TipoAccionCondicion] = [];
            }
            dataretorno[n.TipoAccionCondicion].push(n);
        });
        return dataretorno;
    }
    cargarMomentosAudiencia(data) {
        this.loadMomentosAutiencia(this.informacionFicha.id, data.detalle);
    }
    loadMomentosAutiencia(idTramite, audiencias) {
        this.fichaTramiteService.GetMomentosByIdAudiencia(idTramite, audiencias).subscribe(n => {
            this.audiencias.forEach((item) => {
                if (item.detalle === audiencias) {
                    item.momentos = n;
                }
            });
        });
    }
    ngOnChanges1() {
        // if (this.tipoFicha === 601 &&  this.tipoFicha != undefined){
        //   this.route.paramMap.subscribe(async params => {
        //     this.numeroId = this.route.snapshot.params.id.substr(1,20)
        //     this.dataBase = await  this.fichaTramiteService.GetInfoBasicaEspecifica(this.numeroId).toPromise();
        //     let minuscula =  this.dataBase.Entidad.toLowerCase();
        //     this.entidad = minuscula.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1){
        //       return $1.toUpperCase();
        //    });
        //     console.log(this.dataBase , "VERIFICAR TITULO Y LA URL DE LA ENTIDAD NO SE HA ENCONTRADO");
        //     this.audiencias = await  this.fichaTramiteService.GetTiposAudienciaById(this.numeroId).toPromise();
        //     this.TitulosTipoAudiencia(this.numeroId,this.audiencias[0].tipoaudiencia);
        //     console.log("carga inicial audiencia",this.audiencias);
        //     this.dataUrl = await  this.fichaTramiteService.GetTipoTramiteFichaEspecificaById(this.numeroId).toPromise();
        //     if(this.dataUrl.Tipotramite == "Realizar trámite en línea" || this.dataUrl.Tipotramite =="SemiPresencial"){
        //       await  this.fichaTramiteService.GetEmbebidosByIdTramite(this.numeroId)
        //       .toPromise()
        //       .then(res => this.embebidos = res)
        //       .catch(error => this.embebidos = "Enlinea");
        //     }
        //     else{
        //       this.embebidos = "Enlinea";
        //     }
        //     await  this.fichaTramiteService.GetNormatividadById(this.numeroId)
        //     .toPromise()
        //     .then(res => this.dataNormatividad = res)
        //     .catch(error => this.dataNormatividad = []);
        //     await  this.fichaTramiteService.GetPuntosAtencionById(this.numeroId)
        //     .toPromise()
        //     .then(res => this.puntosAtencion = res)
        //     .catch(error => this.puntosAtencion  = []);
        //   });
        // }
    }
    ngAfterViewChecked() {
        this.setNumeroTramite(this.numeroId);
    }
    setNumeroTramite(numero) {
        const s = document.getElementsByTagName('govco-area-servicios');
        if (s.length > 0) {
            s[0].setAttribute('itemid', 'T' + numero);
        }
    }
    tipoAudienciafuncion(audiencia) {
        this.ordenAudiencias = [];
        this.TitulosTipoAudiencia(this.numeroId, audiencia);
    }
    TitulosTipoAudiencia(numeroId, tipoAudiencia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ordenAudiencias = yield this.fichaTramiteService.GetMomentosByIdAudiencia(numeroId, tipoAudiencia).toPromise();
            console.log("carga inicial orden audiencia", this.ordenAudiencias);
        });
    }
    dataMomentoAudiencia(tipoAudiencia, momento) {
        //this.activeIdsAcordeon.push(idacordeon);
        this.ordenAudiencias.forEach(item => {
            // let informacion = JSON.parse(item.Informacion);
            if (item.Informacion == "[]" && momento == item.Orden) {
                this.fichaTramiteService.GetDataFichaByIdAudiencia(this.numeroId, tipoAudiencia, momento).subscribe(res => {
                    this.dataAudiencias = res;
                    this.procesadorPrincipalData(this.dataAudiencias, momento);
                });
            }
        });
    }
    procesadorPrincipalData(data, momento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let CondicionNueva = '';
            let OrdenAccion = 0;
            let subTitulo;
            let descripcion = [];
            let dataFormularios = {};
            let nuevaData = [];
            let nuevaDataExcepciones = [];
            let dataExepcionesProcesada = [];
            let excepciones = [];
            let solicitud = true;
            let ordenParcial;
            this.dataExcepciones = [];
            for (const element of data) {
                descripcion = [];
                subTitulo = '';
                solicitud = true;
                ordenParcial = 0;
                if (element.OrdenAccion > OrdenAccion) {
                    CondicionNueva = element.CondicionNueva;
                    for (const item of data) {
                        if (item.CondicionNueva == CondicionNueva) {
                            CondicionNueva = item.CondicionNueva;
                            if (item.OrdenAccion >= element.OrdenAccion) {
                                OrdenAccion = item.OrdenAccion;
                                if (item.TipoAccionCondicion === 'VERIFICACION_INST' && item.OrdenAccion > ordenParcial) {
                                    ordenParcial = item.OrdenAccion;
                                    const tipoDato = this.tipoCondicionAudiencia(item.TipoAccionCondicion);
                                    if (item.Excepcion != null) {
                                        const condicionExcepcion = {
                                            NombreExcepcion: item.Excepcion,
                                            Tipo: tipoDato,
                                            ContenidoExepcion: item.VerificacionInstDescripcion
                                        };
                                        excepciones.push(condicionExcepcion);
                                    }
                                    else {
                                        descripcion.push(item.VerificacionInstDescripcion);
                                    }
                                    subTitulo = tipoDato;
                                }
                                else if (item.TipoAccionCondicion === 'DOCUMENTO' && item.OrdenAccion > ordenParcial) {
                                    ordenParcial = item.OrdenAccion;
                                    const tipoDato = this.tipoCondicionAudiencia(item.TipoAccionCondicion);
                                    if (item.Excepcion != null) {
                                        const documentoExcepcion = {
                                            NombreExcepcion: item.Excepcion,
                                            Tipo: tipoDato,
                                            ContenidoExepcion: this.dataDocumentos(item)
                                        };
                                        excepciones.push(documentoExcepcion);
                                    }
                                    else {
                                        descripcion.push(this.dataDocumentos(item));
                                    }
                                    subTitulo = tipoDato;
                                }
                                else if (item.TipoAccionCondicion === 'FORMULARIO' && item.OrdenAccion > ordenParcial) {
                                    ordenParcial = item.OrdenAccion;
                                    const tipoDato = this.tipoCondicionAudiencia(item.TipoAccionCondicion);
                                    if (item.Excepcion != null) {
                                        const formularioExcepcion = {
                                            NombreExcepcion: item.Excepcion,
                                            Tipo: tipoDato,
                                            ContenidoExepcion: this.dataFormularios(item)
                                        };
                                        excepciones.push(formularioExcepcion);
                                    }
                                    else {
                                        descripcion.push(this.dataFormularios(item));
                                    }
                                    subTitulo = tipoDato;
                                }
                            }
                            if (item.TipoAccionCondicion === 'SOLICITUD' && solicitud && element.OrdenAccion === OrdenAccion) {
                                let dataCanales;
                                const tipoDato = this.tipoCondicionAudiencia(item.TipoAccionCondicion);
                                yield this.dataCanalAtencion(item).then((val) => dataCanales = val);
                                if (item.Excepcion != null) {
                                    const canalExcepcion = {
                                        NombreExcepcion: item.Excepcion,
                                        Tipo: tipoDato,
                                        ContenidoExepcion: dataCanales
                                    };
                                    excepciones.push(canalExcepcion);
                                }
                                else {
                                    descripcion.push(dataCanales);
                                }
                                subTitulo = tipoDato;
                                solicitud = false;
                            }
                            else if (item.TipoAccionCondicion == "PAGO" && solicitud && element.OrdenAccion == OrdenAccion) {
                                let dataPagos;
                                let tipoDato = this.tipoCondicionAudiencia(item.TipoAccionCondicion);
                                yield this.dataPagos(item).then((val) => dataPagos = val);
                                if (item.Excepcion) {
                                    const pagoExcepcion = {
                                        NombreExcepcion: item.Excepcion,
                                        Tipo: tipoDato,
                                        ContenidoExepcion: dataPagos
                                    };
                                    excepciones.push(pagoExcepcion);
                                }
                                else {
                                    descripcion.push(dataPagos);
                                }
                                subTitulo = tipoDato;
                                solicitud = false;
                            }
                        }
                        else if (item.OrdenAccion > OrdenAccion) {
                            break;
                        }
                    }
                }
                if (descripcion.length != 0) {
                    nuevaData.push({
                        'subtitulo': subTitulo,
                        'descripcion': descripcion,
                    });
                    descripcion = [];
                }
                if (excepciones.length != 0) {
                    nuevaDataExcepciones.push(excepciones);
                    excepciones = [];
                }
            }
            if (nuevaData.length > 0 || nuevaDataExcepciones.length > 0) {
                this.unionDataNuevaYExcepciones(nuevaData, nuevaDataExcepciones, momento);
            }
        });
    }
    unionDataNuevaYExcepciones(nuevaData, nuevaDataExcepciones, momento) {
        let dataExepciones = [];
        if (nuevaDataExcepciones.length > 0) {
            dataExepciones = this.procesadorDataExepciones(nuevaDataExcepciones);
        }
        this.ordenAudiencias.forEach(item => {
            if (item.Orden == momento) {
                let dataSerializada = JSON.stringify(nuevaData);
                item.Informacion = dataSerializada;
                if (dataExepciones.length > 0) {
                    let excepcionesSerializada = JSON.stringify(dataExepciones);
                    item.Excepcion = excepcionesSerializada;
                }
            }
        });
    }
    procesadorDataExepciones(data) {
        let NombreExcepcion;
        let NombresAcordeon = [];
        data.forEach(item => {
            item.forEach(itemInterno => {
                NombreExcepcion = itemInterno.NombreExcepcion;
                if (NombresAcordeon.length > 0) {
                    let result = NombresAcordeon.find(nombre => nombre === NombreExcepcion);
                    if (result == null) {
                        NombresAcordeon.push(NombreExcepcion);
                    }
                }
                else {
                    NombresAcordeon.push(NombreExcepcion);
                }
            });
        });
        let dataOrganizadaExcepcion = this.ordenarDataSegunNombres(NombresAcordeon, data);
        return dataOrganizadaExcepcion;
    }
    ordenarDataSegunNombres(nombres, data) {
        let dataOrganizadaExcepcion = [];
        let contenido = [];
        nombres.forEach(nombre => {
            data.forEach(dataPasos => {
                dataPasos.map(function (itemData) {
                    if (itemData.NombreExcepcion == nombre) {
                        if (dataOrganizadaExcepcion.length > 0) {
                            let result = dataOrganizadaExcepcion.map(function (itemNombre) {
                                if (itemNombre.TituloAcordeon == itemData.NombreExcepcion) {
                                    itemNombre['Contenido'].push({
                                        subtitulo: itemData.Tipo,
                                        descripcion: itemData.ContenidoExepcion
                                    });
                                    return true;
                                }
                            });
                            if (result[result.length - 1] == undefined) {
                                let dataAcordeon = {
                                    subtitulo: itemData.Tipo,
                                    descripcion: itemData.ContenidoExepcion,
                                };
                                contenido.push(dataAcordeon);
                                dataOrganizadaExcepcion.push({
                                    TituloAcordeon: itemData.NombreExcepcion,
                                    Contenido: contenido
                                });
                                contenido = [];
                            }
                        }
                        else {
                            let dataAcordeon = {
                                subtitulo: itemData.Tipo,
                                descripcion: itemData.ContenidoExepcion,
                            };
                            contenido.push(dataAcordeon);
                            dataOrganizadaExcepcion.push({
                                TituloAcordeon: itemData.NombreExcepcion,
                                Contenido: contenido
                            });
                            contenido = [];
                        }
                    }
                });
            });
        });
        return dataOrganizadaExcepcion;
    }
    ;
    dataPagos(item) {
        let descripcionPago = [];
        let ordenPago = 0;
        let entidadRecaudadora = [];
        let promise = new Promise((resolve, rejected) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pagos = yield this.fichaTramiteService.GetPagosByMomentoIdAudiencia(this.numeroId, item.TipoAudiencia, item.OrdenMomento).toPromise();
            pagos.forEach(itemPagos => {
                if (itemPagos.OrdenPago > 0) {
                    if (itemPagos.OrdenPago > ordenPago) {
                        ordenPago = itemPagos.OrdenPago;
                        const descripcion = {
                            nombreDescripcion: itemPagos.DescripcionPago,
                            moneda: itemPagos.Moneda,
                            tipoValor: itemPagos.TipoValor,
                            cantidadSmlv: itemPagos.CantidadSmlv,
                            valor: itemPagos.Valor
                        };
                        descripcionPago.push(descripcion);
                    }
                    if (entidadRecaudadora.length > 0) {
                        let result = entidadRecaudadora.find(entidad => (entidad.nombreEntidad === itemPagos.NombreEntidad ||
                            entidad.numeroCuenta === itemPagos.NumeroCuenta && itemPagos.NumeroCuenta != null));
                        if (result == null) {
                            let banco = {
                                nombreEntidad: itemPagos.NombreEntidad,
                                tipoCuenta: itemPagos.TipoCuenta,
                                numeroCuenta: itemPagos.NumeroCuenta,
                                nombreCuenta: itemPagos.NombreCuenta,
                                codigoRecaudo: itemPagos.CodigoRecaudo
                            };
                            entidadRecaudadora.push(banco);
                        }
                    }
                    else {
                        if (itemPagos.NumeroCuenta != null) {
                            let banco = {
                                nombreEntidad: itemPagos.NombreEntidad,
                                tipoCuenta: itemPagos.TipoCuenta,
                                numeroCuenta: itemPagos.NumeroCuenta,
                                nombreCuenta: itemPagos.NombreCuenta,
                                codigoRecaudo: itemPagos.CodigoRecaudo
                            };
                            entidadRecaudadora.push(banco);
                        }
                    }
                }
            });
            let ObjetoPagos = {
                DescripcionMomento: item.DescripcionMomento,
                DescripcionPago: descripcionPago,
                EntidadRecaudadora: entidadRecaudadora
            };
            resolve(ObjetoPagos);
        }));
        return promise;
    }
    dataDocumentos(item) {
        let dataDocumentos = {
            nombre: item.DocumentoNombre,
            descripcion: item.DocumentoAnotacionAdicional,
            cantidadDoc: item.CantidadDoc,
            unidadCantidad: item.UnidadCantidad,
            observacionCantidad: item.ObservacionCantidad,
        };
        return dataDocumentos;
    }
    dataFormularios(item) {
        let dataFormularios = {
            nombre: item.FormularioNombre,
            descripcion: item.FormularioAnotacion,
            descarga: item.FormularioUrlDescarga,
            url: item.UrlResultadoWeb
        };
        return dataFormularios;
    }
    dataCanalAtencion(item) {
        let dataCanales;
        let descripcion = [];
        let canalAtencion = {};
        let promise = new Promise((resolve, rejected) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let canal = yield this.fichaTramiteService.GetCanalesByMomentoIdAudiencia(this.numeroId, item.TipoAudiencia, item.OrdenMomento).toPromise();
            let puntosAtencion = this.puntosAtencion;
            canal.forEach(itemCanal => {
                canalAtencion = {
                    canal: itemCanal
                };
                if (itemCanal.TipoCanal == "PRESENCIAL") {
                    canalAtencion = {
                        canal: itemCanal,
                        puntosAtencion: puntosAtencion
                    };
                }
                descripcion.push(dataCanales = {
                    descripcion: item.AtencionDescripcion,
                    canal: canalAtencion,
                });
                canalAtencion = {};
            });
            resolve(descripcion);
        }));
        return promise;
    }
    tipoCondicionAudiencia(data) {
        let tipoCondicion;
        switch (data) {
            case "VERIFICACION_INST":
                tipoCondicion = "Condiciones";
                break;
            case "PAGO":
                tipoCondicion = "Pago";
                break;
            case "SOLICITUD":
                tipoCondicion = "Canal de atención";
                break;
            case "DOCUMENTO":
                tipoCondicion = "Documento";
                break;
            case "FORMULARIO":
                tipoCondicion = "Formulario";
                break;
            case "EXCEPCION":
                tipoCondicion = "Excepción";
                break;
            default:
                tipoCondicion = data;
                break;
        }
        return tipoCondicion;
    }
    extractFromJson(obj) {
        obj = JSON.parse(obj);
        return obj;
    }
    showModal(data) {
        const modal = this.modalService.open(_puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_4__["PuntosAtencionComponent"], { size: 'lg',
            backdrop: "static",
            keyboard: false
        });
        if (data.tipo == "puntos") {
            modal.componentInstance.puntosAtencion = data.data;
        }
        if (data.tipo == "normatividad") {
            modal.componentInstance.normatividad = data.data;
        }
    }
    redireccionar() {
        this.propagar.emit({ id: this.numeroId, tipo: 'Embebido', data: this.embebidos });
    }
};
FichaEspecificaComponent.ctorParameters = () => [
    { type: _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_2__["FichaTramiteService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FichaEspecificaComponent.prototype, "informacionFicha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FichaEspecificaComponent.prototype, "propagar", void 0);
FichaEspecificaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ficha-especifica',
        template: __webpack_require__(/*! raw-loader!./fichaespecifica.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.html"),
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]],
        styles: [__webpack_require__(/*! ./fichaespecifica.component.scss */ "./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.scss")]
    })
], FichaEspecificaComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZmljaGFlc3RhbmRhci9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxmaWNoYXRyYW1pdGVcXGNvbXBvbmVudHNcXGZpY2hhZXN0YW5kYXJcXGZpY2hhZXN0YW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhZXN0YW5kYXIvZmljaGFlc3RhbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLFlBQUE7QUNFSCIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhZXN0YW5kYXIvZmljaGFlc3RhbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7IGNvbG9yOndoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FichaEstandarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaEstandarComponent", function() { return FichaEstandarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ficha-tramite.service */ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts");




let FichaEstandarComponent = class FichaEstandarComponent {
    constructor(route, fichaTramiteService, router) {
        this.route = route;
        this.fichaTramiteService = fichaTramiteService;
        this.router = router;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.tipoFicha == 602 && this.tipoFicha != undefined) {
            this.route.paramMap.subscribe(params => {
                this.numeroId = this.route.snapshot.params.id.substr(1, 20);
                this.fichaTramiteService.GetInfoFichaEstandarById(this.numeroId).subscribe(res => {
                    this.dataBase = res;
                });
            });
            this.tipoFicha = 0;
        }
    }
    idMunicipio(id) {
        this.propagar.emit({ id: id });
    }
};
FichaEstandarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__["FichaTramiteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tipoFicha')
], FichaEstandarComponent.prototype, "tipoFicha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FichaEstandarComponent.prototype, "propagar", void 0);
FichaEstandarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ficha-estandar',
        template: __webpack_require__(/*! raw-loader!./fichaestandar.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.html"),
        styles: [__webpack_require__(/*! ./fichaestandar.component.scss */ "./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.scss")]
    })
], FichaEstandarComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tramiteCard {\n  border-radius: 0.5rem;\n  padding: 20px;\n  margin: 20px 0px 0px 0px !important;\n  background: #fff;\n  width: 100%;\n  border: 1px;\n  border-color: #E5EEFB;\n  border-style: solid;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  clear: both;\n  overflow: hidden;\n}\n\n.titulotramite {\n  font-size: 33px;\n  text-align: left;\n  color: #0B457F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZmljaGFub3N1aXRlL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZpY2hhdHJhbWl0ZVxcY29tcG9uZW50c1xcZmljaGFub3N1aXRlXFxmaWNoYW5vc3VpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhbm9zdWl0ZS9maWNoYW5vc3VpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2ZpY2hhbm9zdWl0ZS9maWNoYW5vc3VpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbWl0ZUNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogI0U1RUVGQjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4udGl0dWxvdHJhbWl0ZXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzBCNDU3RjtcclxufSIsIi50cmFtaXRlQ2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjRTVFRUZCO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0dWxvdHJhbWl0ZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwQjQ1N0Y7XG59Il19 */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FichaNoSuiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaNoSuiteComponent", function() { return FichaNoSuiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ficha-tramite.service */ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../puntos-atencion-modal/puntos-atencion-modal.component */ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.ts");






let FichaNoSuiteComponent = class FichaNoSuiteComponent {
    constructor(route, fichaTramiteService, router, modalService) {
        this.route = route;
        this.fichaTramiteService = fichaTramiteService;
        this.router = router;
        this.modalService = modalService;
        this.consideraciones = [];
        this.puntosAtencion = [];
    }
    ngOnChanges() {
        if (this.tipoFicha == "603" && this.tipoFicha != undefined) {
            this.route.paramMap.subscribe(params => {
                this.numeroId = this.route.snapshot.params.id.substr(1, 20);
                this.fichaTramiteService.GetNotSuiteTramiteById(this.route.snapshot.params.id).subscribe(data => {
                    this.dataBase = data;
                });
                this.fichaTramiteService.GetConsideracionesAdicionalesById(this.route.snapshot.params.id).subscribe(data => {
                    this.consideraciones = data;
                });
                this.fichaTramiteService.GetPuntosAtencionNoSuitById(this.route.snapshot.params.id).subscribe(data => {
                    this.getDatosPuntosAtencion(data);
                });
            });
        }
    }
    getDatosPuntosAtencion(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (const item of data) {
                let punto = yield this.fichaTramiteService.GetPuntosAtencionById(item.PuntosAtencionId).toPromise();
                this.puntosAtencion.push(punto[0]);
            }
        });
    }
    showModal(data) {
        const modal = this.modalService.open(_puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_5__["PuntosAtencionComponent"], { size: 'lg',
            backdrop: "static",
            keyboard: false
        });
        modal.componentInstance.puntosAtencion = data;
    }
    ngAfterViewChecked() {
        this.setNumeroTramite(this.numeroId);
    }
    setNumeroTramite(numero) {
        const s = document.getElementsByTagName('govco-area-servicios');
        if (s.length > 0) {
            s[0].setAttribute('itemid', "S" + numero);
        }
    }
};
FichaNoSuiteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__["FichaTramiteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tipoFicha')
], FichaNoSuiteComponent.prototype, "tipoFicha", void 0);
FichaNoSuiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ficha-no-suite',
        template: __webpack_require__(/*! raw-loader!./fichanosuite.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.html"),
        styles: [__webpack_require__(/*! ./fichanosuite.component.scss */ "./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.scss")]
    })
], FichaNoSuiteComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/general/general.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/general/general.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".govco-card-red {\n  padding: 1rem !important;\n  text-align: justify;\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZ2VuZXJhbC9DOlxcQ29udHJhdG8tNDQ4LTIwMjBcXFByb2R1Y2Npb25cXHRyYW1pdGVzLXNlcnZpY2lvcy1zcGEtc2NkXFxzcmMvc3JjXFxhcHBcXHRyYW1pdGVzXFxmaWNoYXRyYW1pdGVcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvdmNvLWNhcmQtcmVkIHtcclxuICAgIHBhZGRpbmc6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59IiwiLmdvdmNvLWNhcmQtcmVkIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3JkZXItY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/general/general.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/general/general.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ficha-tramite.service */ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts");




let GeneralComponent = class GeneralComponent {
    constructor(fichaTramiteService, activatedRoute) {
        this.fichaTramiteService = fichaTramiteService;
        this.activatedRoute = activatedRoute;
        this.tramite = {
            id: '',
            tipo: null,
            prefijo: ''
        };
        this.embebido = false;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        const parametroid = this.activatedRoute.snapshot.params.id;
        let idTramiteTemp = parametroid;
        if (parametroid !== 'embebido') {
            this.tramite.id = parametroid.substring(1);
            this.tramite.prefijo = parametroid.substring(0, 1).toLowerCase();
            // Tramite suit
            if (this.tramite.prefijo === 't') {
                idTramiteTemp = this.tramite.id;
            }
            this.fichaTramiteService.GetTipoFichaTramite(idTramiteTemp)
                .subscribe(data => {
                this.tramite.tipo = data.StatusCode;
            });
        }
        else {
            this.embebido = true;
        }
    }
    redireccionador(evento) {
        // if(evento.tipo == "Embebido"){
        //   this.dataEmbebidos = evento.data;
        //   this.router.navigate(['ficha-tramite/T'+evento.id+'/embebido']);
        //   // let url = this.router.createUrlTree(['ficha-tramite/T'+evento.id+'/embebido'])
        //   // window.open(url.toString(), '_blank')
        //   this.embebido = true;
        // }else{
        //   this.router.navigate(['ficha-tramite/T'+evento.id+''])
        //   this.datosTipoFicha = "601";
        // }
    }
};
GeneralComponent.ctorParameters = () => [
    { type: _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_3__["FichaTramiteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general',
        template: __webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/general/general.component.html"),
        styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/tramites/fichatramite/components/general/general.component.scss")]
    })
], GeneralComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo_popuptramite {\n  color: #0B457F !important;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.hr-popuptramites {\n  left: 0px;\n  top: 11%;\n  right: 0px;\n  height: 8%;\n  width: 100%;\n  color: #0B457F;\n  text-align: center;\n  border-top: 2px !important;\n  border-top-style: solid !important;\n  border-top-color: #0061EA !important;\n  background-color: #E5EEFB;\n  display: block;\n  position: relative;\n}\n\n.iconodisponible {\n  max-width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvcHVudG9zLWF0ZW5jaW9uLW1vZGFsL0M6XFxDb250cmF0by00NDgtMjAyMFxcUHJvZHVjY2lvblxcdHJhbWl0ZXMtc2VydmljaW9zLXNwYS1zY2RcXHNyYy9zcmNcXGFwcFxcdHJhbWl0ZXNcXGZpY2hhdHJhbWl0ZVxcY29tcG9uZW50c1xccHVudG9zLWF0ZW5jaW9uLW1vZGFsXFxwdW50b3MtYXRlbmNpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL3B1bnRvcy1hdGVuY2lvbi1tb2RhbC9wdW50b3MtYXRlbmNpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvcHVudG9zLWF0ZW5jaW9uLW1vZGFsL3B1bnRvcy1hdGVuY2lvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9fcG9wdXB0cmFtaXRle1xyXG4gICAgY29sb3I6ICMwQjQ1N0YgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5oci1wb3B1cHRyYW1pdGVze1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxMSU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICMwQjQ1N0Y7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDA2MUVBICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFRUZCO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmljb25vZGlzcG9uaWJsZXtcclxuICAgIG1heC13aWR0aDogMjVweDtcclxufSIsIi50aXR1bG9fcG9wdXB0cmFtaXRlIHtcbiAgY29sb3I6ICMwQjQ1N0YgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhyLXBvcHVwdHJhbWl0ZXMge1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTElO1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDglO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwQjQ1N0Y7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDYxRUEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RUVGQjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb25vZGlzcG9uaWJsZSB7XG4gIG1heC13aWR0aDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PuntosAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntosAtencionComponent", function() { return PuntosAtencionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let PuntosAtencionComponent = class PuntosAtencionComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.p = 1;
    }
    ngOnInit() {
    }
    closeModal() {
        this.activeModal.close();
    }
};
PuntosAtencionComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PuntosAtencionComponent.prototype, "puntosAtencion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PuntosAtencionComponent.prototype, "normatividad", void 0);
PuntosAtencionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-puntos-atencion-modal',
        template: __webpack_require__(/*! raw-loader!./puntos-atencion-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.html"),
        styles: [__webpack_require__(/*! ./puntos-atencion-modal.component.scss */ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.scss")]
    })
], PuntosAtencionComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvcmVjdXJzb3MtbW9kYWwvQzpcXENvbnRyYXRvLTQ0OC0yMDIwXFxQcm9kdWNjaW9uXFx0cmFtaXRlcy1zZXJ2aWNpb3Mtc3BhLXNjZFxcc3JjL3NyY1xcYXBwXFx0cmFtaXRlc1xcZmljaGF0cmFtaXRlXFxjb21wb25lbnRzXFxyZWN1cnNvcy1tb2RhbFxccmVjdXJzb3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYW1pdGVzL2ZpY2hhdHJhbWl0ZS9jb21wb25lbnRzL3JlY3Vyc29zLW1vZGFsL3JlY3Vyc29zLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdHJhbWl0ZXMvZmljaGF0cmFtaXRlL2NvbXBvbmVudHMvcmVjdXJzb3MtbW9kYWwvcmVjdXJzb3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHsgY29sb3I6IHdoaXRlO30iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RecursosModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursosModalComponent", function() { return RecursosModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let RecursosModalComponent = class RecursosModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngAfterViewChecked() {
        this.setNumeroTramite(this.idTramite);
    }
    setNumeroTramite(numero) {
        const s = document.getElementsByTagName('govco-area-servicios');
        if (s.length > 0) {
            s[0].setAttribute('module-id', numero);
        }
    }
    closeModal() {
        this.activeModal.close();
    }
};
RecursosModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecursosModalComponent.prototype, "idTramite", void 0);
RecursosModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recursos-modal',
        template: __webpack_require__(/*! raw-loader!./recursos-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.html"),
        styles: [__webpack_require__(/*! ./recursos-modal.component.scss */ "./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.scss")]
    })
], RecursosModalComponent);



/***/ }),

/***/ "./src/app/tramites/fichatramite/ficha-tramite-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tramites/fichatramite/ficha-tramite-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FichaTramiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaTramiteRoutingModule", function() { return FichaTramiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/tramites/fichatramite/components/general/general.component.ts");
/* harmony import */ var _components_embebidos_embebidos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/embebidos/embebidos.component */ "./src/app/tramites/fichatramite/components/embebidos/embebidos.component.ts");





const routes = [
    {
        path: "",
        component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"],
        children: [
            {
                path: "embebido",
                component: _components_embebidos_embebidos_component__WEBPACK_IMPORTED_MODULE_4__["EmbebidosComponent"],
            },
        ]
    }
];
let FichaTramiteRoutingModule = class FichaTramiteRoutingModule {
};
FichaTramiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FichaTramiteRoutingModule);



/***/ }),

/***/ "./src/app/tramites/fichatramite/ficha-tramite.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tramites/fichatramite/ficha-tramite.module.ts ***!
  \***************************************************************/
/*! exports provided: FichaTramiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaTramiteModule", function() { return FichaTramiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ficha_tramite_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ficha-tramite-routing.module */ "./src/app/tramites/fichatramite/ficha-tramite-routing.module.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/tramites/fichatramite/components/general/general.component.ts");
/* harmony import */ var _services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ficha-tramite.service */ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_fichaestandar_fichaestandar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fichaestandar/fichaestandar.component */ "./src/app/tramites/fichatramite/components/fichaestandar/fichaestandar.component.ts");
/* harmony import */ var _components_fichaespecifica_fichaespecifica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fichaespecifica/fichaespecifica.component */ "./src/app/tramites/fichatramite/components/fichaespecifica/fichaespecifica.component.ts");
/* harmony import */ var _components_fichanosuite_fichanosuite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fichanosuite/fichanosuite.component */ "./src/app/tramites/fichatramite/components/fichanosuite/fichanosuite.component.ts");
/* harmony import */ var _components_embebidos_embebidos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/embebidos/embebidos.component */ "./src/app/tramites/fichatramite/components/embebidos/embebidos.component.ts");
/* harmony import */ var _components_puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/puntos-atencion-modal/puntos-atencion-modal.component */ "./src/app/tramites/fichatramite/components/puntos-atencion-modal/puntos-atencion-modal.component.ts");
/* harmony import */ var _components_recursos_modal_recursos_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recursos-modal/recursos-modal.component */ "./src/app/tramites/fichatramite/components/recursos-modal/recursos-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_fichaespecifica_header_fichaespecifica_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/fichaespecifica-header/fichaespecifica-header.component */ "./src/app/tramites/fichatramite/components/fichaespecifica-header/fichaespecifica-header.component.ts");
/* harmony import */ var _components_fichaespecifica_accordion_fichaespecifica_accordion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/fichaespecifica-accordion/fichaespecifica-accordion.component */ "./src/app/tramites/fichatramite/components/fichaespecifica-accordion/fichaespecifica-accordion.component.ts");
/* harmony import */ var _components_acciones_accion_verificacion_accion_verificacion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/acciones/accion-verificacion/accion-verificacion.component */ "./src/app/tramites/fichatramite/components/acciones/accion-verificacion/accion-verificacion.component.ts");
/* harmony import */ var _components_acciones_accion_pago_accion_pago_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/acciones/accion-pago/accion-pago.component */ "./src/app/tramites/fichatramite/components/acciones/accion-pago/accion-pago.component.ts");
/* harmony import */ var _components_acciones_accion_solicitud_accion_solicitud_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/acciones/accion-solicitud/accion-solicitud.component */ "./src/app/tramites/fichatramite/components/acciones/accion-solicitud/accion-solicitud.component.ts");
/* harmony import */ var _components_acciones_accion_documento_accion_documento_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/acciones/accion-documento/accion-documento.component */ "./src/app/tramites/fichatramite/components/acciones/accion-documento/accion-documento.component.ts");
/* harmony import */ var _components_acciones_accion_formulario_accion_formulario_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/acciones/accion-formulario/accion-formulario.component */ "./src/app/tramites/fichatramite/components/acciones/accion-formulario/accion-formulario.component.ts");
/* harmony import */ var _components_acciones_accion_excepcion_accion_excepcion_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/acciones/accion-excepcion/accion-excepcion.component */ "./src/app/tramites/fichatramite/components/acciones/accion-excepcion/accion-excepcion.component.ts");

























const routes = [
    {
        path: '',
        component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"],
        children: []
    }
];
let FichaTramiteModule = class FichaTramiteModule {
};
FichaTramiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"],
            _components_fichaestandar_fichaestandar_component__WEBPACK_IMPORTED_MODULE_6__["FichaEstandarComponent"],
            _components_fichaespecifica_fichaespecifica_component__WEBPACK_IMPORTED_MODULE_7__["FichaEspecificaComponent"],
            _components_puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_10__["PuntosAtencionComponent"],
            _components_recursos_modal_recursos_modal_component__WEBPACK_IMPORTED_MODULE_11__["RecursosModalComponent"],
            _components_embebidos_embebidos_component__WEBPACK_IMPORTED_MODULE_9__["EmbebidosComponent"],
            _components_fichanosuite_fichanosuite_component__WEBPACK_IMPORTED_MODULE_8__["FichaNoSuiteComponent"],
            _components_fichaespecifica_header_fichaespecifica_header_component__WEBPACK_IMPORTED_MODULE_17__["FichaespecificaHeaderComponent"],
            _components_fichaespecifica_accordion_fichaespecifica_accordion_component__WEBPACK_IMPORTED_MODULE_18__["FichaespecificaAccordionComponent"],
            _components_acciones_accion_verificacion_accion_verificacion_component__WEBPACK_IMPORTED_MODULE_19__["AccionVerificacionComponent"],
            _components_acciones_accion_pago_accion_pago_component__WEBPACK_IMPORTED_MODULE_20__["AccionPagoComponent"],
            _components_acciones_accion_solicitud_accion_solicitud_component__WEBPACK_IMPORTED_MODULE_21__["AccionSolicitudComponent"],
            _components_acciones_accion_documento_accion_documento_component__WEBPACK_IMPORTED_MODULE_22__["AccionDocumentoComponent"],
            _components_acciones_accion_formulario_accion_formulario_component__WEBPACK_IMPORTED_MODULE_23__["AccionFormularioComponent"],
            _components_acciones_accion_excepcion_accion_excepcion_component__WEBPACK_IMPORTED_MODULE_24__["AccionExcepcionComponent"]],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _ficha_tramite_routing_module__WEBPACK_IMPORTED_MODULE_2__["FichaTramiteRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
        ],
        entryComponents: [
            _components_puntos_atencion_modal_puntos_atencion_modal_component__WEBPACK_IMPORTED_MODULE_10__["PuntosAtencionComponent"],
            _components_recursos_modal_recursos_modal_component__WEBPACK_IMPORTED_MODULE_11__["RecursosModalComponent"]
        ],
        providers: [_services_ficha_tramite_service__WEBPACK_IMPORTED_MODULE_4__["FichaTramiteService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FichaTramiteModule);



/***/ }),

/***/ "./src/app/tramites/fichatramite/services/ficha-tramite.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tramites/fichatramite/services/ficha-tramite.service.ts ***!
  \*************************************************************************/
/*! exports provided: FichaTramiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaTramiteService", function() { return FichaTramiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
let FichaTramiteService = class FichaTramiteService {
    constructor(http) {
        this.http = http;
    }
    getGeneric(endPoint, parameters = '') {
        return this.http.get(`${API_URL}${endPoint}${parameters}`);
    }
    GetTipoFichaTramite(idTramite) {
        return this.getGeneric('FichaTramite/GetTipoFichaTramiteById/', idTramite);
    }
    GetInfoBasicaEspecifica(idTramite) {
        return this.getGeneric('FichaTramite/GetInfoBasicaEspecificaById/', idTramite)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((n) => {
            n.Entidad = n.Entidad.toLowerCase();
            return n;
        }));
    }
    GetTipoTramiteFichaEspecificaById(idTramite) {
        return this.getGeneric('FichaTramite/GetTipoTramiteFichaEspecificaById/', idTramite);
    }
    GetTiposAudienciaById(idTramite) {
        return this.getGeneric('FichaTramite/GetTiposAudienciaById/', idTramite);
    }
    GetMomentosByIdAudiencia(idTramite, audiencia) {
        return this.getGeneric('FichaTramite/GetMomentosByIdAudiencia/', `${idTramite}/${audiencia}`);
    }
    GetDataFichaByIdAudiencia(idTramite, audiencia, momento) {
        return this.getGeneric('FichaTramite/GetDataFichaByIdAudiencia/', `${idTramite}/${audiencia}/${momento}`);
    }
    GetCanalesByMomentoIdAudiencia(idTramite, audiencia, momento) {
        return this.getGeneric('FichaTramite/GetCanalesByMomentoIdAudiencia/', `${idTramite}/${audiencia}/${momento}`);
    }
    GetPuntosAtencionById(idTramite) {
        return this.getGeneric('FichaTramite/GetPuntosAtencionById/', idTramite);
    }
    GetPagosByMomentoIdAudiencia(idTramite, audiencia, momento) {
        return this.getGeneric('FichaTramite/GetPagosByMomentoIdAudiencia/', `${idTramite}/${audiencia}/${momento}`);
    }
    GetNormatividadById(idTramite) {
        return this.getGeneric('FichaTramite/GetNormatividadById/', idTramite);
    }
    GetInfoFichaEstandarById(idTramite) {
        return this.getGeneric('FichaTramite/GetInfoFichaEstandarById/', idTramite);
    }
    GetEmbebidosByIdTramite(idTramite) {
        return this.getGeneric('TramitesEmbebidos/GetEmbebidosByIdTramite/', idTramite);
    }
    GetNotSuiteTramiteById(idTramite) {
        return this.getGeneric('FichaNoSuitTramite/GetNotSuiteTramiteById/', idTramite);
    }
    GetConsideracionesAdicionalesById(idTramite) {
        return this.getGeneric('FichaNoSuitTramite/GetConsideracionesAdicionalesById/', idTramite);
    }
    GetPuntosAtencionNoSuitById(idTramite) {
        return this.getGeneric('FichaNoSuitTramite/GetPuntosAtencionNoSuitById/', idTramite);
    }
};
FichaTramiteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FichaTramiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FichaTramiteService);



/***/ })

}]);
//# sourceMappingURL=tramites-fichatramite-ficha-tramite-module-es2015.2e5a1653993124c6f4cf.js.map