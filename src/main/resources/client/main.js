(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/pages/hello/map-view.component */ "./src/app/navigation/pages/hello/map-view.component.ts");




var routes = [
    {
        path: 'hello',
        component: _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"],
    },
    { path: '', component: _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hello-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigation/pages/hello/map-view.component */ "./src/app/navigation/pages/hello/map-view.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_22__["UserActionFeedbackComponent"],
                _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_22__["MapViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ],
            providers: [],
            entryComponents: [
                _navigation_pages_hello_map_view_component__WEBPACK_IMPORTED_MODULE_22__["UserActionFeedbackComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  background-color: #F5F5F5;\n}\n\n.sidenav {\n  width: 200px;\n  background-color: #003355;\n  border: none;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.bottom-menu {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  align-content: center;\n}\n\n.sidenav .bottom-menu .mat-toolbar {\n  background-color: #003355;\n}\n\n.mat-slide-toggle {\n  color: whitesmoke;\n  font-size: 14px;\n}\n\n.sidenav .mat-toolbar {\n  color: white;\n  background-color: #2fd9c9;\n}\n\nmat-nav-list {\n  margin-top: 30px;\n}\n\nmat-nav-list > .mat-list-item {\n  color: #99aabb;\n  text-transform: uppercase;\n  font-size: 14px;\n  border-left: 5px solid #003355;\n\n}\n\nmat-nav-list > .active {\n  color: white;\n  background-color: #335577;\n  border-left: 5px solid #4493C9;\n}\n\n.logo {\n  width: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  font-stretch: extra-expanded;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM1NTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ib3R0b20tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc2lkZW5hdiAuYm90dG9tLW1lbnUgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM1NTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZmQ5Yzk7XG59XG5cbm1hdC1uYXYtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5tYXQtbmF2LWxpc3QgPiAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjOTlhYWJiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwMzM1NTtcblxufVxuXG5tYXQtbmF2LWxpc3QgPiAuYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM1NTc3O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0NDkzQzk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtc3RyZXRjaDogZXh0cmEtZXhwYW5kZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>\n      <div class=\"logo\">\n        COVID-19-Graph\n      </div>\n    </mat-toolbar>\n    <mat-nav-list>\n<!--       <a mat-list-item routerLink=\"/hello\" routerLinkActive=\"active\">\n        <mat-icon mat-list-icon>add</mat-icon>add\n      </a> -->\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavigationComponent.prototype.onChange = function () {
        console.log("toggled");
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/navigation/pages/hello/map-view.component.css":
/*!***************************************************************!*\
  !*** ./src/app/navigation/pages/hello/map-view.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .example-container > * {\n    width: 100%;\n  }\n  \n  .example-container form {\n    margin-bottom: 20px;\n  }\n  \n  .example-container form > * {\n    margin: 5px 0;\n  }\n  \n  .example-container .mat-radio-button {\n    margin: 0 5px;\n  }\n  \n  table {\n    width: 100%;\n  }\n  \n  .full-height {\n    height: 100%;\n  }\n  \n  .mat-sidenav-content .mat-toolbar  {\n    background-color: #FFFFFF;\n  }\n  \n  .mat-paginator {\n    background-color: #FFFFFF;\n    width: 100%;\n    height: 64px;\n    align-content: center;\n    color: #003355;\n  }\n  \n  tr.example-detail-row {\n    height: 0;\n  }\n  \n  tr {\n    background-color: #F8F8F8;\n    border-bottom: 1px solid #CCDDEE;\n  }\n  \n  tr.mat-footer-row, tr.mat-row {\n    height: 54px;\n  }\n  \n  td.mat-cell {\n    color: #668899;\n    border: inherit;\n  }\n  \n  td.mat-cell:last-of-type {\nwidth: 30px;  }\n  \n  tr:hover {\n    color: whitesmoke;\n    background-color: #F2F2F2;\n  }\n  \n  tr:active {\n    color: whitesmoke;\n    background-color: #F2F2F2;\n  }\n  \n  .example-element-row td {\n    border-bottom-width: 0;\n  }\n  \n  .example-element-detail {\n    overflow: hidden;\n    display: flex;\n  }\n  \n  .example-element-diagram {\n    min-width: 80px;\n    border: 2px solid black;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n  \n  .example-element-symbol {\n    font-weight: bold;\n    font-size: 40px;\n    line-height: normal;\n  }\n  \n  .example-element-description {\n    padding: 16px;\n  }\n  \n  .example-element-description-attribution {\n    opacity: 0.5;\n  }\n  \n  th {\n    color: #003355;\n    text-transform: uppercase;\n    font-weight: bold;\n    background-color: #FFFFFF;\n    border-bottom: 1px solid #aaddee;\n\n  }\n  \n  tr.mat-header-row {\n    border-bottom: 1px solid #aaddee;\n\n  }\n  \n  .mat-toolbar {\n    background-color: #FFFFFF;\n    color: #4797CE;\n    border-bottom: 1px solid #aaddee;\n  }\n  \n  .mat-cell mat-icon {\n    color: #668899; \n  }\n  \n  .mat-column-childOperations {\n    width: 40px;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .main-container {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .search-toolbar {\n    margin-bottom: 30px;\n    padding: 10px;\n  }\n  \n  mat-progress-bar {\n    width: 70%;\n    }\n  \n  .example-small-box, .example-large-box {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 16px;\n        padding: 16px;\n        border-radius: 8px;\n      }\n  \n  .example-small-box {\n        height: 100px;\n        width: 100px;\n      }\n  \n  .example-large-box {\n        height: 300px;\n        width: 300px;\n      }\n  \n  .tab-content {\n          padding: 10px;\n          color: #668899;\n      }\n  \n  h3 {\n        color: #003355;\n      }\n  \n  .mat-tab-list {\n          background-color: yellow;\n      }\n  \n  .file-name, .mat-list-item {\n          color: #668899;\n          font-size: 12px;\n      }\n  \n  .panel {\n          padding: 20px;\n      }\n  \n  .mat-toolbar-row {\n          padding-left: 20px;\n      }\n  \n  .add-operation-card {\n        margin-top: 10px;\n        background: white;\n      }\n  \n  .cross-validation-error-message {\n        color: red;\n      }\n  \n  button {\n        margin-top: 10px;\n      }\n  \n  .map-frame {\n        height: 100%;\n        width: 100%;\n      }\n  \n  #mapView {\n        height: 100%;\n        width: 100%;\n      }\n  \n  ::ng-deep .leaflet-overlay-pane svg path{\n    pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9wYWdlcy9oZWxsby9tYXAtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFRjtJQUNJLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFRDtJQUNHLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0FBQ0YsV0FBVyxHQUFHOztFQUdaO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7O0VBRWxDOztFQUVBO0lBQ0UsZ0NBQWdDOztFQUVsQzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWOztFQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7TUFDcEI7O0VBRUE7UUFDRSxhQUFhO1FBQ2IsWUFBWTtNQUNkOztFQUVBO1FBQ0UsYUFBYTtRQUNiLFlBQVk7TUFDZDs7RUFFQTtVQUNJLGFBQWE7VUFDYixjQUFjO01BQ2xCOztFQUVBO1FBQ0UsY0FBYztNQUNoQjs7RUFFQTtVQUNJLHdCQUF3QjtNQUM1Qjs7RUFFQTtVQUNJLGNBQWM7VUFDZCxlQUFlO01BQ25COztFQUVBO1VBQ0ksYUFBYTtNQUNqQjs7RUFFQTtVQUNJLGtCQUFrQjtNQUN0Qjs7RUFFQTtRQUNFLGdCQUFnQjtRQUNoQixpQkFBaUI7TUFDbkI7O0VBRUE7UUFDRSxVQUFVO01BQ1o7O0VBRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O0VBSUE7UUFDRSxZQUFZO1FBQ1osV0FBVztNQUNiOztFQUVBO1FBQ0UsWUFBWTtRQUNaLFdBQVc7TUFDYjs7RUFFQTtJQUNGLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vcGFnZXMvaGVsbG8vbWFwLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZnVsbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gLm1hdC1zaWRlbmF2LWNvbnRlbnQgLm1hdC10b29sYmFyICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDMzNTU7XG4gIH1cblxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIHRyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NEREVFO1xuICB9XG5cbiAgdHIubWF0LWZvb3Rlci1yb3csIHRyLm1hdC1yb3cge1xuICAgIGhlaWdodDogNTRweDtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBjb2xvcjogIzY2ODg5OTtcbiAgICBib3JkZXI6IGluaGVyaXQ7XG4gIH1cblxuICB0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUge1xud2lkdGg6IDMwcHg7ICB9XG4gIFxuICBcbiAgdHI6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIH1cbiAgXG4gIHRyOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgdGgge1xuICAgIGNvbG9yOiAjMDAzMzU1O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhZGRlZTtcblxuICB9XG5cbiAgdHIubWF0LWhlYWRlci1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFkZGVlO1xuXG4gIH1cblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICM0Nzk3Q0U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWRkZWU7XG4gIH1cblxuICAubWF0LWNlbGwgbWF0LWljb24ge1xuICAgIGNvbG9yOiAjNjY4ODk5OyBcbiAgfVxuXG4gIC5tYXQtY29sdW1uLWNoaWxkT3BlcmF0aW9ucyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnNlYXJjaC10b29sYmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgIC5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZXhhbXBsZS1zbWFsbC1ib3gge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5leGFtcGxlLWxhcmdlLWJveCB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIH1cblxuICAgICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY4ODk5O1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjMDAzMzU1O1xuICAgICAgfVxuXG4gICAgICAubWF0LXRhYi1saXN0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICB9XG5cbiAgICAgIC5maWxlLW5hbWUsIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgICAgICBjb2xvcjogIzY2ODg5OTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC10b29sYmFyLXJvdyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9wZXJhdGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5jcm9zcy12YWxpZGF0aW9uLWVycm9yLW1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuXG5cblxuICAgICAgLm1hcC1mcmFtZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNtYXBWaWV3IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOjpuZy1kZWVwIC5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcgcGF0aHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/pages/hello/map-view.component.html":
/*!****************************************************************!*\
  !*** ./src/app/navigation/pages/hello/map-view.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\">\n  <div fxLayout=\"row\">\n    <mat-toolbar>\n      <mat-toolbar-row>\n        <span>The current situation 21/03/2020</span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n  <div fxLayout=\"column\" class=\"main-container\">\n    <div class=\"map-frame\">\n      <div id=\"mapView\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navigation/pages/hello/map-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/navigation/pages/hello/map-view.component.ts ***!
  \**************************************************************/
/*! exports provided: MapViewComponent, UserActionFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionFeedbackComponent", function() { return UserActionFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/graph.service */ "./src/app/services/graph.service.ts");









var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(dataService, graphService, userFeedback) {
        var _this = this;
        this.dataService = dataService;
        this.graphService = graphService;
        this.userFeedback = userFeedback;
        this.munichLatLng = leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"](48.1351, 11.5820);
        this.loadPostalCodeData = function () { return d3__WEBPACK_IMPORTED_MODULE_5__["json"]('assets/data/plz-5stellig.geojson'); };
        this.loadPostalCodeCentroidData = function () { return d3__WEBPACK_IMPORTED_MODULE_5__["json"]('assets/data/plz-5stellig-centroid.geojson'); };
        // Use Leaflets projection API for drawing svg path (creates a stream of projected points)
        this.projectPoint = function (map) { return function (x, y) {
            var point = map.latLngToLayerPoint(new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](y, x));
            this.stream.point(point.x, point.y);
        }; };
        // Use d3's custom geo transform method to implement the above
        this.projection = function (map) { return d3__WEBPACK_IMPORTED_MODULE_5__["geoTransform"]({ point: _this.projectPoint(map) }); };
        // creates geopath from projected points (SVG)
        this.pathCreator = function () { return d3__WEBPACK_IMPORTED_MODULE_5__["geoPath"]().projection(_this.projection(_this.map)); };
        // generate colors between yellow and red 
        this.dangerLevelColorGenerator = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([1, 5])
            .range(["yellow", "red"]);
        this.colorOfRandomPostalCodes = function (feature, randomPostalCodesToHighlight) {
            if (randomPostalCodesToHighlight.includes(feature.properties.plz)) {
                var postalCodeConnectivity = Math.floor(Math.random() * 5) + 1;
                return _this.dangerLevelColorGenerator(postalCodeConnectivity);
            }
            else {
                return 'green';
            }
        };
        this.calculatePoint = function (d) {
            return "translate(" +
                _this.map.latLngToLayerPoint(d.LatLng).x + "," +
                _this.map.latLngToLayerPoint(d.LatLng).y + ")";
        };
    }
    MapViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loadPostalCodeData().then(function (data) {
            var randomPostalCodesToHighlight = _this.graphService.initGraph(data);
            _this.initMap();
            _this.drawPostalCodes(data, randomPostalCodesToHighlight);
            _this.loadPostalCodeCentroidData().then(function (dataCentroids) {
                _this.drawPostalCodesCentroids(dataCentroids, randomPostalCodesToHighlight);
                _this.drawGraphEdges(dataCentroids, randomPostalCodesToHighlight);
            });
        });
        this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
            duration: 5000,
            data: "This tool displays FAKE DATA for demo purposes!!!"
        });
    };
    MapViewComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]('mapView', {
            center: this.munichLatLng,
            zoom: 12
        });
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 14,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
        //initialize svg to add to map
        leaflet__WEBPACK_IMPORTED_MODULE_4__["svg"]({ clickable: true }).addTo(this.map); // we have to make the svg layer clickable 
        //Create selection using D3
        var overlay = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this.map.getPanes().overlayPane);
        this.mapSvg = overlay.select('svg').attr('pointer-events', 'auto');
        // create a group that is hidden during zooming
        this.postalCodesSVGGroup = this.mapSvg.append('g').attr('class', 'leaflet-zoom-hide');
    };
    MapViewComponent.prototype.drawPostalCodes = function (data, postalCodes) {
        //const mapping: Array<PostalCodeMapInfo> = data.features.map(feature => this.extractPostalCodeInfo(feature));
        var _this = this;
        var areadSVGGroup = this.postalCodesSVGGroup.append('g');
        var areaPaths = areadSVGGroup.selectAll('path')
            .data(data.features)
            .join('path')
            .attr('fill-opacity', 0.3)
            .attr('fill', function (d) { return _this.colorOfRandomPostalCodes(d, postalCodes); })
            .attr('stroke', 'black')
            .style('stroke-dasharray', '5, 5')
            .attr('z-index', 3000)
            .attr('stroke-width', 1)
            .on('mouseover', function (_, i, g) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](g[i])
                .attr('fill-opacity', 0.5);
        })
            .on('mouseout', function (_, i, g) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](g[i])
                .attr('fill-opacity', 0.3);
        });
        // Function to place svg based on zoom
        var onZoom = function () { return areaPaths.attr('d', _this.pathCreator()); };
        // initialize positioning
        onZoom();
        // reset whenever map is moved
        this.map.on('zoomend', onZoom);
    };
    MapViewComponent.prototype.drawPostalCodesCentroids = function (data, postalCodes) {
        var _this = this;
        /* Add a LatLng object to each item in the dataset */
        var pickedPostalCodes = [];
        data.features.forEach(function (f) {
            if (postalCodes.includes(f.properties.plz.toString())) {
                pickedPostalCodes.push(f);
            }
        });
        var g = this.postalCodesSVGGroup.append('g');
        var centroids = g.selectAll('circle')
            .attr("class", "po-centroid")
            .data(pickedPostalCodes)
            .join('circle')
            .attr("id", function (d) { return "postalCodeCentroid" + d.properties.plz; })
            .attr("fill", "red")
            .attr("stroke", "darkred")
            //Leaflet has to take control of projecting points. Here we are feeding the latitude and longitude coordinates to
            //leaflet so that it can project them on the coordinates of the view. Notice, we have to reverse lat and lon.
            //Finally, the returned conversion produces an x and y point. We have to select the the desired one using .x or .y
            .attr("cx", function (d) { return _this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x; })
            .attr("cy", function (d) { return _this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y; })
            .attr("r", 5)
            .on('mouseover', function () {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](this).transition() //D3 selects the object we have moused over in order to perform operations on it
                .duration(150) //how long we are transitioning between the two states (works like keyframes)
                .attr("fill", "red") //change the fill
                .attr('r', 10); //change radius
        })
            .on('mouseout', function () {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](this).transition()
                .duration(150)
                .attr("fill", "steelblue")
                .attr('r', 5);
        });
        var update = function () { return centroids
            .attr("cx", function (d) { return _this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x; })
            .attr("cy", function (d) { return _this.map.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y; }); };
        this.map.on("zoomend", update);
    };
    MapViewComponent.prototype.windowScan = function (origin, neighbours) {
        var randomNeighbours = this.graphService.shuffle(neighbours);
        return randomNeighbours.map(function (neighbour) {
            return { origin: origin, endpoint: neighbour };
        });
    };
    MapViewComponent.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    MapViewComponent.prototype.drawGraphEdges = function (data, postalCodes) {
        var _this = this;
        /* Add a LatLng object to each item in the dataset */
        var pickedPostalCodes = [];
        data.features.forEach(function (f) {
            if (postalCodes.includes(f.properties.plz.toString())) {
                pickedPostalCodes.push(f);
            }
        });
        var orderedPickedPostalCodes = pickedPostalCodes.sort(function (p1, p2) { return (p1.properties.plz > p2.properties.plz) ? 1 : -1; });
        var edges = [];
        orderedPickedPostalCodes.forEach(function (affectedPostalCode, index, restOfPostalCodes) {
            var affetctedEdges = _this.windowScan(affectedPostalCode, restOfPostalCodes.slice(index - _this.getRandomInt(2), index + _this.getRandomInt(5)));
            affetctedEdges.forEach(function (edge) { return edges.push(edge); });
        });
        var g = this.postalCodesSVGGroup.append('g');
        var edgesSVG = g.selectAll('line')
            .data(edges)
            .enter()
            .append('line')
            .attr("class", "graph-edge")
            .attr("stroke", "darkred")
            .attr("stroke-width", 2)
            .attr("x1", function (d) { return _this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).x; })
            .attr("y1", function (d) { return _this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).y; })
            .attr("x2", function (d) { return _this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).x; })
            .attr("y2", function (d) { return _this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).y; });
        /*       .on('mouseover', function () { //function to add mouseover event
                d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
                  .duration('150') //how long we are transitioning between the two states (works like keyframes)
                  .attr("fill", "red") //change the fill
              })
              .on('mouseout', function () { //reverse the action based on when we mouse off the the circle
                d3.select(this).transition()
                  .duration('150')
                  .attr("fill", "steelblue")
              }); */
        var update = function () { return edgesSVG
            .attr("x1", function (d) { return _this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).x; })
            .attr("y1", function (d) { return _this.map.latLngToLayerPoint([d.origin.geometry.coordinates[1], d.origin.geometry.coordinates[0]]).y; })
            .attr("x2", function (d) { return _this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).x; })
            .attr("y2", function (d) { return _this.map.latLngToLayerPoint([d.endpoint.geometry.coordinates[1], d.endpoint.geometry.coordinates[0]]).y; }); };
        update();
        this.map.on("zoomend", update);
    };
    MapViewComponent.prototype.sayHi = function () {
        var _this = this;
        this.dataService.sayHello().subscribe(function (response) {
            console.log(response);
            _this.userFeedback.openFromComponent(UserActionFeedbackComponent, {
                duration: 5000,
                data: response
            });
        });
    };
    MapViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/navigation/pages/hello/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/navigation/pages/hello/map-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_6__["GraphService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MapViewComponent);
    return MapViewComponent;
}());

var UserActionFeedbackComponent = /** @class */ (function () {
    function UserActionFeedbackComponent(data) {
        this.data = data;
    }
    UserActionFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-action-feedback',
            template: __webpack_require__(/*! ./user-action-feedback.html */ "./src/app/navigation/pages/hello/user-action-feedback.html"),
            styles: ["\n    .user-action-feedback {\n      color: #4797CE;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UserActionFeedbackComponent);
    return UserActionFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/navigation/pages/hello/user-action-feedback.html":
/*!******************************************************************!*\
  !*** ./src/app/navigation/pages/hello/user-action-feedback.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"user-action-feedback\">{{data}}</span>\n      "

/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.serverURL = window.location.href;
    }
    DataService.prototype.sayHello = function () {
        console.log('saying hello');
        return this.serverGetTextResponse('service/hello').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.getServerState = function (request) {
        console.log('sending ' + JSON.stringify(request));
        return this.serverTextPost('/server-state', request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return JSON.parse(response);
        }));
    };
    /**
     * Make a GET request to the specified path expecting a text response.
     * @param path the component
     */
    DataService.prototype.serverGetTextResponse = function (path) {
        return this.http.get(this.serverURL + path, { responseType: 'text' });
    };
    /**
     * Send the content to the path using a POST request.
     * @param path the component path
     * @param content the content to be sent
     */
    DataService.prototype.serverTextPost = function (path, content) {
        return this.http.post(this.serverURL + path, content, { responseType: 'text' });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/graph.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/graph.service.ts ***!
  \*******************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphService = /** @class */ (function () {
    function GraphService() {
    }
    GraphService.prototype.initGraph = function (postalCodesData) {
        return this.shuffle(postalCodesData.features
            .map(function (f) { return f.properties.plz.toString(); }))
            .slice(0, 3000);
    };
    GraphService.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    GraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphService);
    return GraphService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backend: "http://10.61.21.42:8881"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vlad/development/covid19-graph-tracked-analysis/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map