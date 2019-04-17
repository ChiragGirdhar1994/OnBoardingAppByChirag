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
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/on-boarding/on-boarding-view/on-boarding-view.component */ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.ts");
/* harmony import */ var _components_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/on-boarding/on-boarding-form/on-boarding-form.component */ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.ts");








var routes = [
    { path: 'login', component: _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"] },
    {
        path: 'mainPage', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
        children: [
            { path: '', redirectTo: 'onBoardingForm', pathMatch: 'full' },
            { path: 'onBoardingForm', component: _components_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__["OnBoardingFormComponent"] },
            {
                path: 'studentsList', component: _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_4__["StudentsListComponent"],
                children: [
                    { path: '', redirectTo: 'studentsList', pathMatch: 'full' },
                    { path: 'onBoardingView/:id', component: _components_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_6__["OnBoardingViewComponent"] },
                ]
            },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
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

/***/ "./src/app/app.component.data.ts":
/*!***************************************!*\
  !*** ./src/app/app.component.data.ts ***!
  \***************************************/
/*! exports provided: MessageConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageConstants", function() { return MessageConstants; });
var MessageConstants = /** @class */ (function () {
    function MessageConstants() {
    }
    MessageConstants.formErrorMsg = 'Please correct the errors and submit the form again.';
    MessageConstants.invalidUserErrorMsg = 'Please enter correct Admin UserName and Password.';
    return MessageConstants;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
        this.title = 'students-onboarding';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.global.service.ts":
/*!***************************************!*\
  !*** ./src/app/app.global.service.ts ***!
  \***************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
    }
    GlobalService.alertTimeOut = 10000;
    GlobalService.adminName = null;
    // tslint:disable-next-line:max-line-length
    GlobalService.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/app.guid.ts":
/*!*****************************!*\
  !*** ./src/app/app.guid.ts ***!
  \*****************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid(value) {
        this.value = this.empty;
        if (value) {
            if (Guid.isValid(value)) {
                this.value = value;
            }
        }
    }
    Object.defineProperty(Guid, "empty", {
        get: function () {
            return '00000000-0000-0000-0000-000000000000';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Guid.prototype, "empty", {
        get: function () {
            return Guid.empty;
        },
        enumerable: true,
        configurable: true
    });
    Guid.newGuid = function () {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line: no-bitwise
            var r = Math.random() * 16 | 0;
            // tslint:disable-next-line: no-bitwise
            var v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    };
    Guid.isValid = function (str) {
        var validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return validRegex.test(str);
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.prototype.toJSON = function () {
        return this.value;
    };
    return Guid;
}());

// let e = new Guid();
// e; // Guid { value: '00000000-0000-0000-0000-000000000000' }​​​​​
// e.toString(); // 00000000-0000-0000-0000-000000000000​​​​​
// console.log(e); // ​​​​​Guid { value: '00000000-0000-0000-0000-000000000000' }​​​​​
// JSON.stringify(e); // ​​​​​"00000000-0000-0000-0000-000000000000"​​​​​
// e = Guid.newGuid(); // ​​​​​Guid { value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }​​​​​
// JSON.stringify(e); // ​​​​​"bb90ef83-1a7e-42b1-90ba-39cdebb6366c"​​​​​
// Guid.isValid(e.toString()); // true
// Guid.empty; // ​​​​​00000000-0000-0000-0000-000000000000​​​​​
// Guid.isValid(Guid.empty); // false


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/students-list/students-list.component */ "./src/app/components/students-list/students-list.component.ts");
/* harmony import */ var _containers_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/header/header.component */ "./src/app/containers/header/header.component.ts");
/* harmony import */ var _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/footer/footer.component */ "./src/app/containers/footer/footer.component.ts");
/* harmony import */ var _containers_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/navbar/navbar.component */ "./src/app/containers/navbar/navbar.component.ts");
/* harmony import */ var _services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/generalized-client/generalized-client.service */ "./src/app/services/generalized-client/generalized-client.service.ts");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _containers_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/date-picker/date-picker.component */ "./src/app/containers/date-picker/date-picker.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/on-boarding/on-boarding-view/on-boarding-view.component */ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.ts");
/* harmony import */ var _components_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/on-boarding/on-boarding-form/on-boarding-form.component */ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _services_editOnBoard_edit_on_board_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/editOnBoard/edit-on-board.service */ "./src/app/services/editOnBoard/edit-on-board.service.ts");
/* harmony import */ var _containers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./containers/confirm-dialog/confirm-dialog.component */ "./src/app/containers/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/confirm-dailog/confirm-dialog.service */ "./src/app/services/confirm-dailog/confirm-dialog.service.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__["AdminLoginComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _containers_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _containers_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
                _components_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_22__["OnBoardingFormComponent"],
                _components_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_13__["StudentsListComponent"],
                _containers_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_19__["DatePickerComponent"],
                _components_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_21__["OnBoardingViewComponent"],
                _containers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            ],
            providers: [_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_17__["GeneralizedClientService"], _services_editOnBoard_edit_on_board_service__WEBPACK_IMPORTED_MODULE_23__["EditOnBoardService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogRef"], useValue: {} }, _services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_components_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_22__["OnBoardingFormComponent"], _components_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_21__["OnBoardingViewComponent"], _containers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Login</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body style=\"background-color: #666666;\">\n\n  <div class=\"limiter\">\n    <div class=\"container-login100\">\n      <!-- <div class=\"wrap-login100\"> -->\n      <form class=\"login100-form\" novalidate [formGroup]=\"loginForm\">\n        <span class=\"login100-form-title p-b-43\">\n          Login School Admin\n        </span>\n        <div class=\"container\">\n          <div class=\"blank\">\n            <label for=\"uname\">\n              <b>Username</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div [ngClass]=\"{'has-error': !loginForm.controls['uname'].valid && loginForm.controls['uname'].touched && callingLogin}\">\n              <input type=\"text\" placeholder=\"Enter Username\" formControlName=\"uname\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"psw\">\n              <b>Password</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !loginForm.controls['psw'].valid && loginForm.controls['psw'].touched && callingLogin}\">\n              <input type=\"password\" placeholder=\"Enter Password\" formControlName=\"psw\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <!-- [disabled]=\"!loginForm.valid\"  -->\n            <button type=\"submit\" class=\"signupbtn\"  (click)=\"callingLogin()\">Login</button>\n            <button type=\"reset\"  class=\"cancelbtn\" (click)=\"callingReset()\">Reset</button>\n\n          </div>\n        </div>\n      </form>\n\n      <!-- <div class=\"login100-more\" style=\"background-image: url('assets/images/hda.jpg');\">\n        </div> -->\n      <!-- </div> -->\n    </div>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #6675df;\n}\n/*---------------------------------------------*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul,\nli {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #999999;\n}\ninput:-moz-placeholder {\n  color: #999999;\n}\ninput::-moz-placeholder {\n  color: #999999;\n}\ninput:-ms-input-placeholder {\n  color: #999999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999999;\n}\ntextarea:-moz-placeholder {\n  color: #999999;\n}\ntextarea::-moz-placeholder {\n  color: #999999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999999;\n}\nlabel {\n  display: block;\n  margin: 0;\n  padding-bottom: 8px;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n[ utility ]*/\n/*==================================================================\n[ Text ]*/\n.txt1 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #555555;\n}\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999;\n}\n/*==================================================================\n[ Size ]*/\n.size1 {\n  width: 355px;\n  max-width: 100%;\n}\n.size2 {\n  width: calc(100% - 43px);\n}\n/*==================================================================\n[ Background ]*/\n.bg1 {\n  background: #3b5998;\n}\n.bg2 {\n  background: #1da1f2;\n}\n.bg3 {\n  background: #cd201f;\n}\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: #f2f2f2;\n}\n/*==================================================================\n[ Form ]*/\n.blank {\n  padding: 12px 20px;\n  margin: 1px;\n}\n.login100-form {\n  width: 560px;\n  min-height: 100vh;\n  display: block;\n  background-color: #f7f7f7;\n  padding: 173px 55px 55px 55px;\n}\n.login100-form-title {\n  width: 100%;\n  display: block;\n  font-family: Poppins-Regular;\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n}\n/*==================================================================\n[ Restyle Checkbox ]*/\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #999999;\n  line-height: 1.4;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background: #fff;\n  border: 1px solid #6675df;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #6675df;\n}\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.login100-form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n  background: #6675df;\n  font-family: Montserrat-Bold;\n  font-size: 12px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  background: #333333;\n}\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 992px) {\n  .login100-form {\n    width: 50%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .login100-form {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .login100-form {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 70px;\n  }\n}\n/* Bordered form */\nform {\n  border: 3px solid #f1f1f1;\n}\n/* Full-width inputs */\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n/* Add a hover effect for buttons */\nbutton:hover {\n  opacity: 0.8;\n}\n/* Extra style for the cancel button (red) */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #1e90ff;\n}\n/* Add padding to containers */\n.container {\n  padding: 16px;\n}\n/* The \"Forgot password\" text */\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbtn {\n    width: 100%;\n  }\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n  margin-right: 16px;\n}\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 30%;\n}\n/* Add padding to container elements */\n.container {\n  padding: 16px;\n}\n/* Clear floats */\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1sb2dpbi9EOi9OQUdQL05BR1AgQXNzaWdubWVudC9zdHVkZW50cy1vbmJvYXJkaW5nL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRDtBREVBOztFQUNDLFlBQUE7RUFDQSx3Q0FBQTtBQ0NEO0FBQ0EsZ0RBQWdEO0FERWhEO0VBQ0MsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQyx1QkFBQTtFQUNBLHlCQUFBO0FDQUY7QURHQTtFQUNDLHdCQUFBO0FDREQ7QURJQTtFQUNDLHFCQUFBO0VBQ0MsY0FBQTtBQ0ZGO0FBQ0EsZ0RBQWdEO0FES2hEOzs7Ozs7RUFDQyxXQUFBO0FDRUQ7QURDQTtFQUNDLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRDtBREVBOztFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ0NEO0FBQ0EsZ0RBQWdEO0FER2hEO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUNERDtBRElBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBOztFQUNFLG9DQUFBO0FDRkY7QURLQTtFQUF5QyxrQkFBQTtBQ0Z6QztBREdBO0VBQStCLGtCQUFBO0FDQS9CO0FEQ0E7RUFBZ0Msa0JBQUE7QUNFaEM7QUREQTtFQUFvQyxrQkFBQTtBQ0lwQztBREZBO0VBQTRDLGtCQUFBO0FDSzVDO0FESkE7RUFBa0Msa0JBQUE7QUNPbEM7QUROQTtFQUFtQyxrQkFBQTtBQ1NuQztBRFJBO0VBQXVDLGtCQUFBO0FDV3ZDO0FE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LGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2RKO0FBQ0EsbUNBQW1DO0FEaUJuQztFQUNJLFlBQUE7QUNmSjtBQUNBLDRDQUE0QztBRGtCNUM7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2hCSjtBQUNBLDhCQUE4QjtBRG9COUI7RUFDSSxhQUFBO0FDbEJKO0FBQ0EsK0JBQStCO0FEcUIvQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ25CSjtBQUNBLG9FQUFvRTtBRHNCcEU7RUFDSTtJQUNJLGNBQUE7SUFDQSxXQUFBO0VDcEJOO0VEc0JFO0lBQ0ksV0FBQTtFQ3BCTjtBQUNGO0FBQ0EsdUNBQXVDO0FEd0J2QztFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3RCSjtBQUNBLDJEQUEyRDtBRHlCekQ7O0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUN0Qko7QUFDQSxzQ0FBc0M7QUR5QnRDO0VBQ0ksYUFBQTtBQ3ZCSjtBQUNBLGlCQUFpQjtBRDBCZjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3hCSjtBQUNBLDZFQUE2RTtBRDJCM0U7RUFDRTs7SUFDRSxXQUFBO0VDeEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG5cdG1hcmdpbjogMHB4OyBcblx0cGFkZGluZzogMHB4OyBcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSwgaHRtbCB7XG5cdGhlaWdodDogMTAwJTtcblx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDEuNztcblx0Y29sb3I6ICM2NjY2NjY7XG5cdG1hcmdpbjogMHB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbmE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY3NWRmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5oMSxoMixoMyxoNCxoNSxoNiB7XG5cdG1hcmdpbjogMHB4O1xufVxuXG5wIHtcblx0Zm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMS43O1xuXHRjb2xvcjogIzY2NjY2Njtcblx0bWFyZ2luOiAwcHg7XG59XG5cbnVsLCBsaSB7XG5cdG1hcmdpbjogMHB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW5wdXQge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cblxudGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7fVxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XG5cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIHV0aWxpdHkgXSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFRleHQgXSovXG4udHh0MSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG5cbi50eHQyIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBTaXplIF0qL1xuLnNpemUxIHtcbiAgd2lkdGg6IDM1NXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaXplMiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgQmFja2dyb3VuZCBdKi9cbi5iZzEge2JhY2tncm91bmQ6ICMzYjU5OTg7fVxuLmJnMiB7YmFja2dyb3VuZDogIzFkYTFmMjt9XG4uYmczIHtiYWNrZ3JvdW5kOiAjY2QyMDFmO31cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7ICBcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuXG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgRm9ybSBdKi9cblxuXG4uYmxhbmsge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMXB4O1xufVxuXG4ubG9naW4xMDAtZm9ybSB7XG4gIHdpZHRoOiA1NjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBwYWRkaW5nOiAxNzNweCA1NXB4IDU1cHggNTVweDtcbn1cblxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgUmVzdHlsZSBDaGVja2JveCBdKi9cblxuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxhYmVsLWNoZWNrYm94MTAwIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY3NWRmO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQgKyAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbG9yOiAjNjY3NWRmO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIEJ1dHRvbiBdKi9cbi5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM2Njc1ZGY7XG5cbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXNwb25zaXZlIF0qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbn1cblxuXG4vKiBCb3JkZXJlZCBmb3JtICovXG5mb3JtIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXG4uY2FuY2VsYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xufVxuXG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cbnNwYW4ucHN3IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICBzcGFuLnBzdyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICBtYXJnaW4tcmlnaHQ6MTZweFxuICB9XG4gIFxuICAvKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuXG4gIC8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzICovXG4gIC5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9IiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmEge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY3NWRmO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG59XG51bCxcbmxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnRleHRhcmVhOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyB1dGlsaXR5IF0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgVGV4dCBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi50eHQyIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFNpemUgXSovXG4uc2l6ZTEge1xuICB3aWR0aDogMzU1cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5zaXplMiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEJhY2tncm91bmQgXSovXG4uYmcxIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbi5iZzIge1xuICBiYWNrZ3JvdW5kOiAjMWRhMWYyO1xufVxuLmJnMyB7XG4gIGJhY2tncm91bmQ6ICNjZDIwMWY7XG59XG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgRm9ybSBdKi9cbi5ibGFuayB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiAxcHg7XG59XG4ubG9naW4xMDAtZm9ybSB7XG4gIHdpZHRoOiA1NjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBwYWRkaW5nOiAxNzNweCA1NXB4IDU1cHggNTVweDtcbn1cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NzVkZjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgY29sb3I6ICM2Njc1ZGY7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzY2NzVkZjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbn1cbi8qIEJvcmRlcmVkIGZvcm0gKi9cbmZvcm0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbn1cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLyogVGhlIFwiRm9yZ290IHBhc3N3b3JkXCIgdGV4dCAqL1xuc3Bhbi5wc3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICBzcGFuLnBzdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNhbmNlbGJ0bixcbi5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMwJTtcbn1cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5jYW5jZWxidG4sXG4gIC5zaWdudXBidG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/alert/alert.model */ "./src/app/models/alert/alert.model.ts");
/* harmony import */ var src_app_app_component_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component.data */ "./src/app/app.component.data.ts");
/* harmony import */ var src_app_models_admin_login_admin_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/admin-login/admin.login */ "./src/app/models/admin-login/admin.login.ts");
/* harmony import */ var src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/generalized-client/generalized-client.service */ "./src/app/services/generalized-client/generalized-client.service.ts");









var AdminLoginComponent = /** @class */ (function () {
    /*
    Admin Login Validations
    */
    function AdminLoginComponent(fb, alertService, adminLoginService, router) {
        var _this = this;
        this.fb = fb;
        this.alertService = alertService;
        this.adminLoginService = adminLoginService;
        this.router = router;
        this.saveData = false;
        this.adminUsersList = [];
        this.loginForm = fb.group({
            uname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            psw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.adminLoginService.getAdminUsers().subscribe(function (res) {
            _this.adminUsersList = res.admins;
            console.log(_this.adminUsersList);
        });
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    /*
      This is used for Admin Login
     */
    AdminLoginComponent.prototype.callingLogin = function () {
        this.errorCount = 0;
        this.saveData = true;
        this.validateAllFormFields(this.loginForm);
        if (this.errorCount !== 0) {
            this.alertService.sendAlert(new src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"](src_app_app_component_data__WEBPACK_IMPORTED_MODULE_6__["MessageConstants"].formErrorMsg, src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error));
            return;
        }
        else {
            var adminUserModel_1 = new src_app_models_admin_login_admin_login__WEBPACK_IMPORTED_MODULE_7__["AdminLogin"]();
            adminUserModel_1.username = this.loginForm.controls.uname.value;
            adminUserModel_1.password = this.loginForm.controls.psw.value;
            if (this.adminUsersList.length > 0) {
                this.resultAdminCheck = this.adminUsersList.filter(function (x) { return x.username === adminUserModel_1.username && x.password === adminUserModel_1.password; });
            }
            if (this.resultAdminCheck.length === 1) {
                this.router.navigate(['mainPage']);
                localStorage.setItem('currentUser', adminUserModel_1.username);
            }
            else {
                this.alertService.sendAlert(new src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"](src_app_app_component_data__WEBPACK_IMPORTED_MODULE_6__["MessageConstants"].invalidUserErrorMsg, src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error));
            }
        }
    };
    AdminLoginComponent.prototype.callingReset = function () {
        this.loginForm.controls.uname.setValue('');
        this.loginForm.controls.psw.setValue('');
    };
    AdminLoginComponent.prototype.isFieldNotValid = function (control, field) {
        return (!(control.valid || control.disabled) && (control.touched || this.saveData));
    };
    /*
    This function is created to count the validation error count
    */
    AdminLoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                if (_this.isFieldNotValid(control, field)) {
                    _this.errorCount++;
                }
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                return _this.validateAllFormFields(control);
            }
        });
        return this.errorCount;
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.less */ "./src/app/components/admin-login/admin-login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_8__["GeneralizedClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts; let i = index\" [attr.type]=\"alert.type + ' alert-sm'\" (close)=\"closeAlert(i)\" dismissible=\"true\">\n  <div [innerHTML]=\"alert.msg\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/alert/alert.component.less":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-top-right {\n  top: 65px !important;\n  right: 25px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9EOi9OQUdQL05BR1AgQXNzaWdubWVudC9zdHVkZW50cy1vbmJvYXJkaW5nL3NyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3QtdG9wLXJpZ2h0IHtcbiAgICB0b3A6IDY1cHggIWltcG9ydGFudDtcbiAgICByaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuIiwiLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogNjVweCAhaW1wb3J0YW50O1xuICByaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/alert/alert.model */ "./src/app/models/alert/alert.model.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_app_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.global.service */ "./src/app/app.global.service.ts");






var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService, toastr, vcr) {
        this.alertService = alertService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.alerts = new Array();
        // this.toastr.overlayContainer(vcr); setRootViewContainerRef(vcr);
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert().subscribe(function (alert) {
            _this.addAlertToQueue(alert);
        });
    };
    AlertComponent.prototype.addAlertToQueue = function (alert) {
        switch (alert.type) {
            case src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success:
                this.showSuccess(alert);
                break;
            case src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Information:
                this.showInfo(alert);
                break;
            case src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error:
                this.showError(alert);
                break;
            case src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning:
                this.showWarning(alert);
                break;
        }
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AlertComponent.prototype.showSuccess = function (alert) {
        this.toastr.successToastr(alert.message, 'Success', {
            toastLife: src_app_app_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"].alertTimeOut,
            showCloseButton: true,
            maxShown: 10,
            newestOnTop: true
        });
    };
    AlertComponent.prototype.showError = function (alert) {
        this.toastr.errorToastr(alert.message, 'Error', {
            toastLife: src_app_app_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"].alertTimeOut,
            showCloseButton: true,
            maxShown: 10,
            newestOnTop: true
        });
    };
    AlertComponent.prototype.showWarning = function (alert) {
        this.toastr.warningToastr(alert.message, 'Warning', {
            toastLife: src_app_app_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"].alertTimeOut,
            showCloseButton: true,
            maxShown: 10,
            newestOnTop: true
        });
    };
    AlertComponent.prototype.showInfo = function (alert) {
        this.toastr.infoToastr(alert.message, 'Information', {
            toastLife: src_app_app_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"].alertTimeOut,
            showCloseButton: true,
            maxShown: 10,
            newestOnTop: true
        });
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.less */ "./src/app/components/alert/alert.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title='On Boarding App'></app-header>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.less */ "./src/app/components/main-page/main-page.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Login</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body style=\"background-color: #666666;\">\n\n  <div class=\"limiter\">\n    <div class=\"container-login100\">\n      <form class=\"login100-form\" novalidate [formGroup]=\"onBoardingForm\">\n        <span class=\"login100-form-title p-b-43\">\n          OnBoarding Form\n        </span>\n        <div class=\"container\">\n          <div class=\"blank\">\n            <label for=\"sname\">\n              <b>Student name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['sname'].valid && onBoardingForm.controls['sname'].touched && callingOnBoarding}\">\n              <input type=\"text\" placeholder=\"Enter Student Name\" formControlName=\"sname\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"category\">\n              <b>Category</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['category'].valid && onBoardingForm.controls['category'].touched && callingOnBoarding}\">\n              <select type=\"select\" class=\"form-control\" formControlName=\"category\">\n                <option value=0 [selected]=\"isSelected\">Category</option>\n                <option *ngFor=\"let categoryValue of categories\" [ngValue]=\"categoryValue\">\n                  {{categoryValue}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"blank\" *ngIf=\"internationalCheckboxesShown ||domesticCheckboxesShown\">\n            <label for=\"documents\">\n              <b>Documents</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div *ngIf=\"internationalCheckboxesShown\">\n              <label formArrayName=\"internationalDocs\"\n                *ngFor=\"let internationalDoc of onBoardingForm.controls.internationalDocs.controls; let i = index\">\n                <input type=\"checkbox\" [formControlName]=\"i\">\n                {{internationalDocs[i].documentName}}\n                <span class=\"red\" *ngIf=\"internationalDocs[i].isMandatory ===true\">*</span>\n              </label>\n            </div>\n            <div *ngIf=\"domesticCheckboxesShown\">\n              <label formArrayName=\"domesticDocs\"\n                *ngFor=\"let domesticDoc of onBoardingForm.controls.domesticDocs.controls; let i = index\">\n                <input type=\"checkbox\" [formControlName]=\"i\">\n                {{domesticDocs[i].documentName}}\n                <span class=\"red\" *ngIf=\"domesticDocs[i].isMandatory ===true\">*</span>\n              </label>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"dob\">\n              <b>Date Of Birth</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['dob'].valid && onBoardingForm.controls['dob'].touched && callingOnBoarding}\">\n              <p-calendar formControlName=\"dob\" readonlyInput=\"true\" appendTo=\"body\" [showIcon]=\"true\"\n                [minDate]=\"minDate\" placeholder=\"Select Date Of Birth\">\n              </p-calendar>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"fathername\">\n              <b>Father's name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['fathername'].valid && onBoardingForm.controls['fathername'].touched && callingOnBoarding}\">\n              <input type=\"text\" placeholder=\"Enter Father Name\" formControlName=\"fathername\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"mothername\">\n              <b>Mother's name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['mothername'].valid && onBoardingForm.controls['mothername'].touched && callingOnBoarding}\">\n              <input type=\"text\" placeholder=\"Enter Mother Name\" formControlName=\"mothername\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"lastclassscore\">\n              <b>Last Class Score</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingForm.controls['lastclassscore'].valid && onBoardingForm.controls['lastclassscore'].touched && callingOnBoarding}\">\n              <input type=\"number\" placeholder=\"Enter Score\" formControlName=\"lastclassscore\" min=\"0\" max=\"100\"\n                digitOnly>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <button *ngIf=\"!editCalled\" type=\"submit\" class=\"signupbtn\" (click)=\"callingOnBoarding()\">OnBoard</button>\n            <button *ngIf=\"editCalled\" type=\"submit\" class=\"signupbtn\" (click)=\"callingOnBoardingEdit()\">OnBoard Update</button>\n            <button *ngIf=\"editCalled\" type=\"reset\" class=\"cancelbtn\" (click)=\"callingCancel()\">Cancel</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.less":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #6675df;\n}\n/*---------------------------------------------*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul,\nli {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #999999;\n}\ninput:-moz-placeholder {\n  color: #999999;\n}\ninput::-moz-placeholder {\n  color: #999999;\n}\ninput:-ms-input-placeholder {\n  color: #999999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999999;\n}\ntextarea:-moz-placeholder {\n  color: #999999;\n}\ntextarea::-moz-placeholder {\n  color: #999999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999999;\n}\nlabel {\n  display: block;\n  margin: 0;\n  padding-bottom: 8px;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n[ utility ]*/\n/*==================================================================\n[ Text ]*/\n.txt1 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #555555;\n}\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999;\n}\n/*==================================================================\n[ Size ]*/\n.size1 {\n  width: 355px;\n  max-width: 100%;\n}\n.size2 {\n  width: calc(100% - 43px);\n}\n/*==================================================================\n[ Background ]*/\n.bg1 {\n  background: #3b5998;\n}\n.bg2 {\n  background: #1da1f2;\n}\n.bg3 {\n  background: #cd201f;\n}\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: #f2f2f2;\n}\n/*==================================================================\n[ Form ]*/\n.blank {\n  padding: 12px 20px;\n  margin: 1px;\n}\n.login100-form {\n  width: 1297px;\n  min-height: 100vh;\n  display: block;\n  background-color: gainsboro;\n  padding: 32px 55px 55px 55px;\n}\n.login100-form-title {\n  width: 100%;\n  display: block;\n  font-family: Poppins-Regular;\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n}\n/*==================================================================\n[ Restyle Checkbox ]*/\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #999999;\n  line-height: 1.4;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background: #fff;\n  border: 1px solid #6675df;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #6675df;\n}\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.login100-form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n  background: #6675df;\n  font-family: Montserrat-Bold;\n  font-size: 12px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  background: #333333;\n}\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 992px) {\n  .login100-form {\n    width: 50%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .login100-form {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .login100-form {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 70px;\n  }\n}\n/* Bordered form */\nform {\n  border: 3px solid #f1f1f1;\n}\n/* Full-width inputs */\ninput[type=text],\ninput[type=password],\nselect[type=select],\ninput[type=number] {\n  width: 100%;\n  padding: 12px 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n/* Add a hover effect for buttons */\nbutton:hover {\n  opacity: 0.8;\n}\n/* Extra style for the cancel button (red) */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #1e90ff;\n}\n/* Add padding to containers */\n.container {\n  padding: 16px;\n}\n/* The \"Forgot password\" text */\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbtn {\n    width: 100%;\n  }\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n  margin-right: 16px;\n}\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 30%;\n}\n/* Add padding to container elements */\n.container {\n  padding: 16px;\n}\n/* Clear floats */\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy1mb3JtL0Q6L05BR1AvTkFHUCBBc3NpZ25tZW50L3N0dWRlbnRzLW9uYm9hcmRpbmcvc3JjL2FwcC9jb21wb25lbnRzL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLWZvcm0vb24tYm9hcmRpbmctZm9ybS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy1mb3JtL29uLWJvYXJkaW5nLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURFQTs7RUFFRSxZQUFBO0VBQ0Esd0NBQUE7QUNBRjtBQUNBLGdEQUFnRDtBREdoRDtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0RGO0FESUE7RUFDRSx3QkFBQTtBQ0ZGO0FES0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNIRjtBQUNBLGdEQUFnRDtBRE1oRDs7Ozs7O0VBTUUsV0FBQTtBQ0pGO0FET0E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7QUNORjtBQUNBLGdEQUFnRDtBRFVoRDtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDVEY7QURZQTs7RUFFRSxvQ0FBQTtBQ1ZGO0FEYUE7RUFDRSxrQkFBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtBQ2JGO0FEZ0JBO0VBQ0Usa0JBQUE7QUNkRjtBRGlCQTtFQUNFLGtCQUFBO0FDZkY7QURrQkE7RUFDRSxrQkFBQTtB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Q0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDNUVGO0FBQ0EsZ0NBQWdDO0FEK0VoQztFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzdFRjtBQUNBLG1DQUFtQztBRGdGbkM7RUFDRSxZQUFBO0FDOUVGO0FBQ0EsNENBQTRDO0FEaUY1QztFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDL0VGO0FBQ0EsOEJBQThCO0FEbUY5QjtFQUNFLGFBQUE7QUNqRkY7QUFDQSwrQkFBK0I7QURvRi9CO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDbEZGO0FBQ0Esb0VBQW9FO0FEcUZwRTtFQUNFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUNuRko7RURxRkE7SUFDSSxXQUFBO0VDbkZKO0FBQ0Y7QUFDQSx1Q0FBdUM7QUR1RnZDO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDckZGO0FBQ0EsMkRBQTJEO0FEd0YzRDs7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ3JGRjtBQUNBLHNDQUFzQztBRHdGdEM7RUFDRSxhQUFBO0FDdEZGO0FBQ0EsaUJBQWlCO0FEeUZqQjtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3ZGRjtBQUNBLDZFQUE2RTtBRDBGN0U7RUFDRTs7SUFDRSxXQUFBO0VDdkZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLWZvcm0vb24tYm9hcmRpbmctZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY3NWRmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogMHB4O1xufVxuXG51bCxcbmxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pZnJhbWUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgdXRpbGl0eSBdKi9cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgVGV4dCBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLnR4dDIge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFNpemUgXSovXG4uc2l6ZTEge1xuICB3aWR0aDogMzU1cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNpemUyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBCYWNrZ3JvdW5kIF0qL1xuLmJnMSB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5iZzIge1xuICBiYWNrZ3JvdW5kOiAjMWRhMWYyO1xufVxuXG4uYmczIHtcbiAgYmFja2dyb3VuZDogI2NkMjAxZjtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cblxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZvcm0gXSovXG5cblxuLmJsYW5rIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDFweDtcbn1cblxuLmxvZ2luMTAwLWZvcm0ge1xuICB3aWR0aDogMTI5N3B4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBwYWRkaW5nOiAzMnB4IDU1cHggNTVweCA1NXB4O1xufVxuXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuXG4uaW5wdXQtY2hlY2tib3gxMDAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Njc1ZGY7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCsubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbG9yOiAjNjY3NWRmO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIEJ1dHRvbiBdKi9cbi5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM2Njc1ZGY7XG5cbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXNwb25zaXZlIF0qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbn1cblxuXG4vKiBCb3JkZXJlZCBmb3JtICovXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cblxuXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxuc2VsZWN0W3R5cGU9c2VsZWN0XSxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMWU5MGZmO1xufVxuXG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4vKiBUaGUgXCJGb3Jnb3QgcGFzc3dvcmRcIiB0ZXh0ICovXG5zcGFuLnBzdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgc3Bhbi5wc3cge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuY2FuY2VsYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuLmNhbmNlbGJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgbWFyZ2luLXJpZ2h0OjE2cHhcbn1cblxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSxcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2NzVkZjtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMHB4O1xufVxucCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogMHB4O1xufVxudWwsXG5saSB7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlmcmFtZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgdXRpbGl0eSBdKi9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFRleHQgXSovXG4udHh0MSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG4udHh0MiB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBTaXplIF0qL1xuLnNpemUxIHtcbiAgd2lkdGg6IDM1NXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc2l6ZTIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBCYWNrZ3JvdW5kIF0qL1xuLmJnMSB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG4uYmcyIHtcbiAgYmFja2dyb3VuZDogIzFkYTFmMjtcbn1cbi5iZzMge1xuICBiYWNrZ3JvdW5kOiAjY2QyMDFmO1xufVxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgbG9naW4gXSovXG4ubGltaXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXItbG9naW4xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZvcm0gXSovXG4uYmxhbmsge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMXB4O1xufVxuLmxvZ2luMTAwLWZvcm0ge1xuICB3aWR0aDogMTI5N3B4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgcGFkZGluZzogMzJweCA1NXB4IDU1cHggNTVweDtcbn1cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NzVkZjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgY29sb3I6ICM2Njc1ZGY7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzY2NzVkZjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4xMDAtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbn1cbi8qIEJvcmRlcmVkIGZvcm0gKi9cbmZvcm0ge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xufVxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbnNlbGVjdFt0eXBlPXNlbGVjdF0sXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi8qIEV4dHJhIHN0eWxlIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAocmVkKSAqL1xuLmNhbmNlbGJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XG59XG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cbnNwYW4ucHN3IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgc3Bhbi5wc3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5jYW5jZWxidG4sXG4uc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG59XG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLFxuICAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OnBoardingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingFormComponent", function() { return OnBoardingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/generalized-client/generalized-client.service */ "./src/app/services/generalized-client/generalized-client.service.ts");
/* harmony import */ var src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/alert/alert.model */ "./src/app/models/alert/alert.model.ts");
/* harmony import */ var src_app_app_component_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component.data */ "./src/app/app.component.data.ts");
/* harmony import */ var src_app_models_on_boarding_on_boarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/on-boarding/on-boarding */ "./src/app/models/on-boarding/on-boarding.ts");
/* harmony import */ var src_app_app_guid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.guid */ "./src/app/app.guid.ts");










var OnBoardingFormComponent = /** @class */ (function () {
    function OnBoardingFormComponent(fb, alertService, documentService, dialogRef) {
        var _this = this;
        this.fb = fb;
        this.alertService = alertService;
        this.documentService = documentService;
        this.dialogRef = dialogRef;
        this.saveData = false;
        this.internationalCheckboxesShown = false;
        this.domesticCheckboxesShown = false;
        this.categories = ['Domestic', 'International'];
        this.internationalDocs = [];
        this.domesticDocs = [];
        this.listOfOnBoardingStudents = [];
        this.testarr = [];
        this.editCalled = false;
        this.checked = false;
        this.onBoardingForm = fb.group({
            sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '0', disabled: false }),
            internationalDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            domesticDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            dob: null,
            fathername: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])),
            mothername: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])),
            lastclassscore: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)])),
        });
        this.documentService.getInternationalStudentDocuments().subscribe(function (res) {
            _this.internationalDocs = res.internationalStudentDocuments;
            console.log(_this.internationalDocs);
            localStorage.internationalDocs = JSON.stringify(_this.internationalDocs);
        });
        this.documentService.getDomesticStudentDocuments().subscribe(function (res) {
            _this.domesticDocs = res.domesticStudentDocuments;
            console.log(_this.domesticDocs);
            localStorage.domesticDocs = JSON.stringify(_this.domesticDocs);
        });
        if (JSON.parse(localStorage.getItem('checkInternationalDoc'))) {
            this.internationalDocs = JSON.parse(localStorage.getItem('internationalDocs'));
            localStorage.setItem('checkInternationalDoc', JSON.stringify(false));
            this.internationalCheckboxesShown = true;
            this.domesticCheckboxesShown = false;
            this.resetDocs();
            this.addInternationalCheckboxes();
        }
        else if (JSON.parse(localStorage.getItem('checkDomesticDoc'))) {
            this.domesticDocs = JSON.parse(localStorage.getItem('domesticDocs'));
            localStorage.setItem('checkDomesticDoc', JSON.stringify(false));
            this.domesticCheckboxesShown = true;
            this.internationalCheckboxesShown = false;
            this.resetDocs();
            this.addDomesticCheckboxes();
        }
        this.editCalled = JSON.parse(localStorage.getItem('editCalled'));
    }
    OnBoardingFormComponent.prototype.ngOnInit = function () {
        this.subcribeToFormChanges();
    };
    OnBoardingFormComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var categoryValueChanges$ = this.onBoardingForm.controls.category.valueChanges;
        categoryValueChanges$.subscribe(function (element) {
            if (element) {
                if (_this.onBoardingForm.controls.category.value === 'International') {
                    _this.internationalCheckboxesShown = true;
                    _this.domesticCheckboxesShown = false;
                    _this.resetDocs();
                    _this.addInternationalCheckboxes();
                }
                else if (_this.onBoardingForm.controls.category.value === 'Domestic') {
                    _this.domesticCheckboxesShown = true;
                    _this.internationalCheckboxesShown = false;
                    _this.resetDocs();
                    _this.addDomesticCheckboxes();
                }
                else {
                    _this.domesticCheckboxesShown = false;
                    _this.internationalCheckboxesShown = false;
                }
            }
        });
    };
    OnBoardingFormComponent.prototype.resetDocs = function () {
        var domesticDocsArray = this.onBoardingForm.controls.domesticDocs;
        while (domesticDocsArray.length !== 0) {
            domesticDocsArray.removeAt(0);
        }
        var internationalDocsArray = this.onBoardingForm.controls.internationalDocs;
        while (internationalDocsArray.length !== 0) {
            internationalDocsArray.removeAt(0);
        }
    };
    OnBoardingFormComponent.prototype.addInternationalCheckboxes = function () {
        var _this = this;
        this.internationalDocs.map(function (doc) {
            var control;
            if (doc.isMandatory) {
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]));
            }
            else {
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
            }
            _this.onBoardingForm.controls.internationalDocs.push(control);
        });
    };
    OnBoardingFormComponent.prototype.addDomesticCheckboxes = function () {
        var _this = this;
        this.domesticDocs.map(function (doc) {
            var control;
            if (doc.isMandatory) {
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]));
            }
            else {
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
            }
            _this.onBoardingForm.controls.domesticDocs.push(control);
        });
    };
    OnBoardingFormComponent.prototype.isFieldNotValid = function (control, field) {
        return (!(control.valid || control.disabled) && (control.touched || this.saveData));
    };
    /*
    This function is created to count the validation error count
    */
    OnBoardingFormComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                if (_this.isFieldNotValid(control, field)) {
                    _this.errorCount++;
                }
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                return _this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                return _this.validateAllFormFields(control);
            }
        });
        return this.errorCount;
    };
    OnBoardingFormComponent.prototype.callingOnBoarding = function () {
        this.errorCount = 0;
        this.saveData = true;
        this.validateAllFormFields(this.onBoardingForm);
        if (this.errorCount !== 0) {
            this.alertService.sendAlert(new src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_6__["Alert"](src_app_app_component_data__WEBPACK_IMPORTED_MODULE_7__["MessageConstants"].formErrorMsg, src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Error));
            return;
        }
        else {
            var result = new src_app_models_on_boarding_on_boarding__WEBPACK_IMPORTED_MODULE_8__["OnBoardingModel"]();
            result.sname = this.onBoardingForm.controls.sname.value;
            result.category = this.onBoardingForm.controls.category.value;
            result.docs = [];
            if (this.onBoardingForm.controls.category.value === 'International') {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.internationalDocs.length; i++) {
                    this.testarr = this.onBoardingForm.controls.internationalDocs.value;
                    if (this.testarr[i] != null) {
                        result.docs.push(this.internationalDocs[i].documentName);
                    }
                }
            }
            else {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.domesticDocs.length; i++) {
                    this.testarr = this.onBoardingForm.controls.domesticDocs.value;
                    if (this.testarr[i] != null) {
                        result.docs.push(this.domesticDocs[i].documentName);
                    }
                }
            }
            result.dob = this.onBoardingForm.controls.dob.value;
            result.fathername = this.onBoardingForm.controls.fathername.value;
            result.mothername = this.onBoardingForm.controls.mothername.value;
            result.lastclassscore = this.onBoardingForm.controls.lastclassscore.value;
            this.id = src_app_app_guid__WEBPACK_IMPORTED_MODULE_9__["Guid"].newGuid();
            result.id = this.id.toString();
            result.internationalDocs = this.onBoardingForm.controls.internationalDocs.value;
            result.domesticDocs = this.onBoardingForm.controls.domesticDocs.value;
            console.log(result);
            this.listOfOnBoardingStudents.push(result);
            console.log(this.listOfOnBoardingStudents);
            if (JSON.parse(localStorage.getItem('studentsList')) === null) {
                localStorage.studentsList = JSON.stringify(JSON.parse(JSON.stringify(this.listOfOnBoardingStudents)));
            }
            else {
                // tslint:disable-next-line: no-shadowed-variable
                var result_1 = JSON.parse(localStorage.getItem('studentsList'));
                result_1.push(JSON.parse(JSON.stringify(this.listOfOnBoardingStudents[this.listOfOnBoardingStudents.length - 1])));
                localStorage.studentsList = JSON.stringify(result_1);
            }
            this.onBoardingForm.reset();
            this.onBoardingForm.controls.category.setValue(0);
            this.domesticCheckboxesShown = false;
            this.internationalCheckboxesShown = false;
        }
    };
    OnBoardingFormComponent.prototype.callingOnBoardingEdit = function () {
        this.errorCount = 0;
        this.saveData = true;
        this.validateAllFormFields(this.onBoardingForm);
        if (this.errorCount !== 0) {
            this.alertService.sendAlert(new src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_6__["Alert"](src_app_app_component_data__WEBPACK_IMPORTED_MODULE_7__["MessageConstants"].formErrorMsg, src_app_models_alert_alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Error));
            return;
        }
        else {
            var result_2 = new src_app_models_on_boarding_on_boarding__WEBPACK_IMPORTED_MODULE_8__["OnBoardingModel"]();
            result_2.sname = this.onBoardingForm.controls.sname.value;
            result_2.category = this.onBoardingForm.controls.category.value;
            result_2.docs = [];
            if (this.onBoardingForm.controls.category.value === 'International') {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.internationalDocs.length; i++) {
                    this.testarr = this.onBoardingForm.controls.internationalDocs.value;
                    if (this.testarr[i] != null) {
                        result_2.docs.push(this.internationalDocs[i].documentName);
                    }
                }
            }
            else {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < this.domesticDocs.length; i++) {
                    this.testarr = this.onBoardingForm.controls.domesticDocs.value;
                    if (this.testarr[i] != null) {
                        result_2.docs.push(this.domesticDocs[i].documentName);
                    }
                }
            }
            result_2.dob = this.onBoardingForm.controls.dob.value;
            result_2.fathername = this.onBoardingForm.controls.fathername.value;
            result_2.mothername = this.onBoardingForm.controls.mothername.value;
            result_2.lastclassscore = this.onBoardingForm.controls.lastclassscore.value;
            result_2.id = JSON.parse(localStorage.getItem('editId'));
            result_2.internationalDocs = this.onBoardingForm.controls.internationalDocs.value;
            result_2.domesticDocs = this.onBoardingForm.controls.domesticDocs.value;
            console.log(result_2);
            this.listOfOnBoardingStudents = JSON.parse(localStorage.getItem('studentsList'));
            var index = this.listOfOnBoardingStudents.findIndex(function (res) { return res.id === result_2.id; });
            console.log(index);
            this.listOfOnBoardingStudents[index] = result_2;
            localStorage.studentsList = JSON.stringify(JSON.parse(JSON.stringify(this.listOfOnBoardingStudents)));
            this.onBoardingForm.reset();
            this.onBoardingForm.controls.category.setValue(0);
            this.domesticCheckboxesShown = false;
            this.internationalCheckboxesShown = false;
            localStorage.setItem('editCalled', JSON.stringify(false));
            this.onClose();
        }
    };
    OnBoardingFormComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    OnBoardingFormComponent.prototype.callingCancel = function () {
        this.onClose();
    };
    OnBoardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-on-boarding-form',
            template: __webpack_require__(/*! ./on-boarding-form.component.html */ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-form.component.less */ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_5__["GeneralizedClientService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], OnBoardingFormComponent);
    return OnBoardingFormComponent;
}());



/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Login</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body style=\"background-color: #666666;\">\n\n  <div class=\"limiter\">\n    <div class=\"container-login100\">\n      <form class=\"login100-form\" novalidate [formGroup]=\"onBoardingViewForm\">\n        <span class=\"login100-form-title p-b-43\">\n          OnBoarding View Form\n        </span>\n        <div class=\"container\">\n          <div class=\"blank\">\n            <label for=\"sname\">\n              <b>Student name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['sname'].valid && onBoardingViewForm.controls['sname'].touched && callingCancel}\">\n              <input type=\"text\" placeholder=\"Enter Student Name\" formControlName=\"sname\" >\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"category\">\n              <b>Category</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['category'].valid && onBoardingViewForm.controls['category'].touched && callingCancel}\">\n              <select type=\"select\" class=\"form-control\" formControlName=\"category\">\n                <option value=0 >Category</option>\n                <option *ngFor=\"let categoryValue of categories\" [ngValue]=\"categoryValue\">\n                  {{categoryValue}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"blank\" *ngIf=\"internationalCheckboxesShown ||domesticCheckboxesShown\">\n            <label for=\"documents\">\n              <b>Documents</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div *ngIf=\"internationalCheckboxesShown\">\n              <label formArrayName=\"internationalDocs\"\n                *ngFor=\"let internationalDoc of onBoardingViewForm.controls.internationalDocs.controls; let i = index\">\n                <input type=\"checkbox\" [formControlName]=\"i\">\n                {{internationalDocs[i].documentName}}\n                <span class=\"red\" *ngIf=\"internationalDocs[i].isMandatory ===true\">*</span>\n              </label>\n            </div>\n            <div *ngIf=\"domesticCheckboxesShown\">\n              <label formArrayName=\"domesticDocs\"\n                *ngFor=\"let domesticDoc of onBoardingViewForm.controls.domesticDocs.controls; let i = index\">\n                <input type=\"checkbox\" [formControlName]=\"i\">\n                {{domesticDocs[i].documentName}}\n                <span class=\"red\" *ngIf=\"domesticDocs[i].isMandatory ===true\">*</span>\n              </label>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"dob\">\n              <b>Date Of Birth</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['dob'].valid && onBoardingViewForm.controls['dob'].touched && callingCancel}\">\n              <p-calendar formControlName=\"dob\" readonlyInput=\"true\"  [showIcon]=\"true\"\n                [minDate]=\"minDate\" placeholder=\"Select Date Of Birth\">\n              </p-calendar>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"fathername\">\n              <b>Father's name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['fathername'].valid && onBoardingViewForm.controls['fathername'].touched && callingCancel}\">\n              <input type=\"text\" placeholder=\"Enter Father Name\" formControlName=\"fathername\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"mothername\">\n              <b>Mother's name</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['mothername'].valid && onBoardingViewForm.controls['mothername'].touched && callingCancel}\">\n              <input type=\"text\" placeholder=\"Enter Mother Name\" formControlName=\"mothername\">\n            </div>\n          </div>\n          <div class=\"blank\">\n            <label for=\"lastclassscore\">\n              <b>Last Class Score</b>\n              <span class=\"red\">*</span>\n            </label>\n            <div\n              [ngClass]=\"{'has-error': !onBoardingViewForm.controls['lastclassscore'].valid && onBoardingViewForm.controls['lastclassscore'].touched && callingCancel}\">\n              <input type=\"number\" placeholder=\"Enter Score\" formControlName=\"lastclassscore\" min=\"0\" max=\"100\"\n                digitOnly>\n            </div>\n          </div>\n          <div class=\"blank\">\n            <button type=\"reset\" class=\"cancelbtn\" (click)=\"callingCancel()\">Close</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.less":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #6675df;\n}\n/*---------------------------------------------*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul,\nli {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #999999;\n}\ninput:-moz-placeholder {\n  color: #999999;\n}\ninput::-moz-placeholder {\n  color: #999999;\n}\ninput:-ms-input-placeholder {\n  color: #999999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999999;\n}\ntextarea:-moz-placeholder {\n  color: #999999;\n}\ntextarea::-moz-placeholder {\n  color: #999999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999999;\n}\nlabel {\n  display: block;\n  margin: 0;\n  padding-bottom: 8px;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ utility ]*/\n/*==================================================================\n  [ Text ]*/\n.txt1 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #555555;\n}\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999;\n}\n/*==================================================================\n  [ Size ]*/\n.size1 {\n  width: 355px;\n  max-width: 100%;\n}\n.size2 {\n  width: calc(100% - 43px);\n}\n/*==================================================================\n  [ Background ]*/\n.bg1 {\n  background: #3b5998;\n}\n.bg2 {\n  background: #1da1f2;\n}\n.bg3 {\n  background: #cd201f;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: #f2f2f2;\n}\n/*==================================================================\n  [ Form ]*/\n.blank {\n  padding: 12px 20px;\n  margin: 1px;\n}\n.login100-form {\n  width: 1297px;\n  min-height: 100vh;\n  display: block;\n  background-color: gainsboro;\n  padding: 32px 55px 55px 55px;\n}\n.login100-form-title {\n  width: 100%;\n  display: block;\n  font-family: Poppins-Regular;\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n}\n/*==================================================================\n  [ Restyle Checkbox ]*/\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #999999;\n  line-height: 1.4;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background: #fff;\n  border: 1px solid #6675df;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #6675df;\n}\n/*------------------------------------------------------------------\n  [ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.login100-form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n  background: #6675df;\n  font-family: Montserrat-Bold;\n  font-size: 12px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  background: #333333;\n}\n/*------------------------------------------------------------------\n  [ Responsive ]*/\n@media (max-width: 992px) {\n  .login100-form {\n    width: 50%;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .login100-form {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .login100-form {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 70px;\n  }\n}\n/* Bordered form */\nform {\n  border: 3px solid #f1f1f1;\n}\n/* Full-width inputs */\ninput[type=text],\ninput[type=password],\nselect[type=select],\ninput[type=number] {\n  width: 100%;\n  padding: 12px 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n/* Add a hover effect for buttons */\nbutton:hover {\n  opacity: 0.8;\n}\n/* Add padding to containers */\n.container {\n  padding: 16px;\n}\n/* Float cancel and signup buttons and add an equal width */\n.signupbtn {\n  float: left;\n  width: 30%;\n}\n/* Add padding to container elements */\n.container {\n  padding: 16px;\n}\n/* Clear floats */\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .signupbtn {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy12aWV3L0Q6L05BR1AvTkFHUCBBc3NpZ25tZW50L3N0dWRlbnRzLW9uYm9hcmRpbmcvc3JjL2FwcC9jb21wb25lbnRzL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLXZpZXcvb24tYm9hcmRpbmctdmlldy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy12aWV3L29uLWJvYXJkaW5nLXZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURFRTs7RUFFRSxZQUFBO0VBQ0Esd0NBQUE7QUNBSjtBQUNBLGdEQUFnRDtBREc5QztFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUU7RUFDRSx3QkFBQTtBQ0ZKO0FES0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNISjtBQUNBLGdEQUFnRDtBRE05Qzs7Ozs7O0VBTUUsV0FBQTtBQ0pKO0FET0U7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTEo7QURRRTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7QUNOSjtBQUNBLGdEQUFnRDtBRFU5QztFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUko7QURXRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDVEo7QURZRTs7RUFFRSxvQ0FBQTtBQ1ZKO0FEYUU7RUFDRSxrQkFBQTtBQ1hKO0FEY0U7RUFDRSxrQkFBQTtBQ1pKO0FEZUU7RUFDRSxrQkFBQTtBQ2JKO0FEZ0JFO0VBQ0Usa0JBQUE7QUNkSjtBRGlCRTtFQUNFLGtCQUFBO0FDZko7QURrQkU7RUFDRSxrQkFBQTtB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QTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQzVFSjtBQUNBLGdDQUFnQztBRCtFOUI7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUM3RUo7QUFDQSxtQ0FBbUM7QURnRmpDO0VBQ0UsWUFBQTtBQzlFSjtBQUNBLDhCQUE4QjtBRGlGNUI7RUFDRSxhQUFBO0FDL0VKO0FBQ0EsMkRBQTJEO0FEbUZ6RDtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDakZKO0FBQ0Esc0NBQXNDO0FEb0ZwQztFQUNFLGFBQUE7QUNsRko7QUFDQSxpQkFBaUI7QURxRmY7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNuRko7QUFDQSw2RUFBNkU7QURzRjNFO0VBQ0U7SUFDRSxXQUFBO0VDcEZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLXZpZXcvb24tYm9hcmRpbmctdmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5LFxuICBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBhIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgfVxuICBcbiAgYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM2Njc1ZGY7XG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgXG4gIHVsLFxuICBsaSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIFxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Zm9jdXMsXG4gIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIHRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIHRleHRhcmVhOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICBcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gIH1cbiAgXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICBcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIFxuICB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIFxuICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIFxuICBcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIGlmcmFtZSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgdXRpbGl0eSBdKi9cbiAgXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgVGV4dCBdKi9cbiAgLnR4dDEge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gIH1cbiAgXG4gIC50eHQyIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIFxuICBcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgWyBTaXplIF0qL1xuICAuc2l6ZTEge1xuICAgIHdpZHRoOiAzNTVweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5zaXplMiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xuICB9XG4gIFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBbIEJhY2tncm91bmQgXSovXG4gIC5iZzEge1xuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XG4gIH1cbiAgXG4gIC5iZzIge1xuICAgIGJhY2tncm91bmQ6ICMxZGExZjI7XG4gIH1cbiAgXG4gIC5iZzMge1xuICAgIGJhY2tncm91bmQ6ICNjZDIwMWY7XG4gIH1cbiAgXG4gIFxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBbIGxvZ2luIF0qL1xuICAubGltaXRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXItbG9naW4xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgRm9ybSBdKi9cbiAgXG4gIFxuICAuYmxhbmsge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDFweDtcbiAgfVxuICBcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMjk3cHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgICBwYWRkaW5nOiAzMnB4IDU1cHggNTVweCA1NXB4O1xuICB9XG4gIFxuICAubG9naW4xMDAtZm9ybS10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cbiAgXG4gIC5pbnB1dC1jaGVja2JveDEwMCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmxhYmVsLWNoZWNrYm94MTAwIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY3NWRmO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAuaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCsubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gICAgY29sb3I6ICM2Njc1ZGY7XG4gIH1cbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIEJ1dHRvbiBdKi9cbiAgLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAubG9naW4xMDAtZm9ybS1idG4ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM2Njc1ZGY7XG4gIFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIH1cbiAgXG4gIC5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgfVxuICBcbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIFJlc3BvbnNpdmUgXSovXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubG9naW4xMDAtZm9ybSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubG9naW4xMDAtZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5sb2dpbjEwMC1mb3JtIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBCb3JkZXJlZCBmb3JtICovXG4gIGZvcm0ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gIH1cbiAgXG4gIFxuICAvKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xuICBpbnB1dFt0eXBlPXRleHRdLFxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbiAgc2VsZWN0W3R5cGU9c2VsZWN0XSxcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIFxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIFxuICAvKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbiAgLnNpZ251cGJ0biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBcbiAgLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC8qIENsZWFyIGZsb2F0cyAqL1xuICAuY2xlYXJmaXg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICAvKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICAuc2lnbnVwYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAiLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2Njc1ZGY7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cbnAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDBweDtcbn1cbnVsLFxubGkge1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnRleHRhcmVhOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pZnJhbWUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgdXRpbGl0eSBdKi9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgVGV4dCBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi50eHQyIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgU2l6ZSBdKi9cbi5zaXplMSB7XG4gIHdpZHRoOiAzNTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNpemUyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgWyBCYWNrZ3JvdW5kIF0qL1xuLmJnMSB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG4uYmcyIHtcbiAgYmFja2dyb3VuZDogIzFkYTFmMjtcbn1cbi5iZzMge1xuICBiYWNrZ3JvdW5kOiAjY2QyMDFmO1xufVxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgWyBGb3JtIF0qL1xuLmJsYW5rIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDFweDtcbn1cbi5sb2dpbjEwMC1mb3JtIHtcbiAgd2lkdGg6IDEyOTdweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDMycHggNTVweCA1NXB4IDU1cHg7XG59XG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NzVkZjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgY29sb3I6ICM2Njc1ZGY7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIEJ1dHRvbiBdKi9cbi5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjY3NWRmO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBSZXNwb25zaXZlIF0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5sb2dpbjEwMC1mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICB9XG59XG4vKiBCb3JkZXJlZCBmb3JtICovXG5mb3JtIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbn1cbi8qIEZ1bGwtd2lkdGggaW5wdXRzICovXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5zZWxlY3RbdHlwZT1zZWxlY3RdLFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzAlO1xufVxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OnBoardingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingViewComponent", function() { return OnBoardingViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/generalized-client/generalized-client.service */ "./src/app/services/generalized-client/generalized-client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var OnBoardingViewComponent = /** @class */ (function () {
    function OnBoardingViewComponent(fb, alertService, documentService, dialogRef) {
        var _this = this;
        this.fb = fb;
        this.alertService = alertService;
        this.documentService = documentService;
        this.dialogRef = dialogRef;
        this.internationalCheckboxesShown = false;
        this.domesticCheckboxesShown = false;
        this.internationalDocs = [];
        this.domesticDocs = [];
        this.categories = ['Domestic', 'International'];
        this.onBoardingViewForm = fb.group({
            sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '0', disabled: true }),
            internationalDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            domesticDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null, disabled: true }),
            fathername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])),
            mothername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])),
            lastclassscore: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])),
        });
        this.documentService.getInternationalStudentDocuments().subscribe(function (res) {
            _this.internationalDocs = res.internationalStudentDocuments;
            console.log(_this.internationalDocs);
            localStorage.internationalDocs = JSON.stringify(_this.internationalDocs);
        });
        this.documentService.getDomesticStudentDocuments().subscribe(function (res) {
            _this.domesticDocs = res.domesticStudentDocuments;
            console.log(_this.domesticDocs);
            localStorage.domesticDocs = JSON.stringify(_this.domesticDocs);
        });
        if (JSON.parse(localStorage.getItem('checkInternationalDocView'))) {
            this.internationalDocs = JSON.parse(localStorage.getItem('internationalDocs'));
            localStorage.setItem('checkInternationalDocView', JSON.stringify(false));
            this.internationalCheckboxesShown = true;
            this.domesticCheckboxesShown = false;
            this.resetDocs();
            this.addInternationalCheckboxes();
        }
        else if (JSON.parse(localStorage.getItem('checkDomesticDocView'))) {
            this.domesticDocs = JSON.parse(localStorage.getItem('domesticDocs'));
            localStorage.setItem('checkDomesticDocView', JSON.stringify(false));
            this.domesticCheckboxesShown = true;
            this.internationalCheckboxesShown = false;
            this.resetDocs();
            this.addDomesticCheckboxes();
        }
    }
    OnBoardingViewComponent.prototype.ngOnInit = function () { };
    OnBoardingViewComponent.prototype.resetDocs = function () {
        var domesticDocsArray = this.onBoardingViewForm.controls.domesticDocs;
        while (domesticDocsArray.length !== 0) {
            domesticDocsArray.removeAt(0);
        }
        var internationalDocsArray = this.onBoardingViewForm.controls.internationalDocs;
        while (internationalDocsArray.length !== 0) {
            internationalDocsArray.removeAt(0);
        }
    };
    OnBoardingViewComponent.prototype.addInternationalCheckboxes = function () {
        var _this = this;
        this.internationalDocs.map(function () {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true });
            _this.onBoardingViewForm.controls.internationalDocs.push(control);
        });
    };
    OnBoardingViewComponent.prototype.addDomesticCheckboxes = function () {
        var _this = this;
        this.domesticDocs.map(function () {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true });
            _this.onBoardingViewForm.controls.domesticDocs.push(control);
        });
    };
    OnBoardingViewComponent.prototype.callingCancel = function () {
        // this.onBoardingViewForm.reset();
        // this.onBoardingViewForm.controls.category.setValue(0);
        // this.domesticCheckboxesShown = false;
        // this.internationalCheckboxesShown = false;
        this.onClose();
    };
    OnBoardingViewComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    OnBoardingViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding-view',
            template: __webpack_require__(/*! ./on-boarding-view.component.html */ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-view.component.less */ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            src_app_services_generalized_client_generalized_client_service__WEBPACK_IMPORTED_MODULE_4__["GeneralizedClientService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], OnBoardingViewComponent);
    return OnBoardingViewComponent;
}());



/***/ }),

/***/ "./src/app/components/students-list/students-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n  <mat-form-field>\n    <mat-label>Categories</mat-label>\n    <mat-select placeholder=\"Select Category\" panelClass=\"testClass\" [ngModel]=\"selectedCategory\"\n      (ngModelChange)=\"onChange($event)\">\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n        {{category}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<div class=\"search-div\">\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"listData\" matSort>\n    <ng-container matColumnDef=\"sname\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Student Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.sname}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"mothername\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Mother Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.mothername}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"lastclassscore\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Class Score</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.lastclassscore}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"fathername\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Father</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.fathername}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"docs\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Domestic Docs</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.docs}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"dob\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Date Of Birth</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.dob}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"category\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Category</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.category}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"callingViewOnBoard(row)\">\n          <mat-icon>view_module</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"callingEditOnBoard(row)\">\n          <mat-icon>launch</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"onDelete(row)\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data.\n      </mat-footer-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide': hideLoadingData}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide': hideNoData}\"></mat-footer-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageIndex]=\"0\" [pageSize]=\"5\" showFirstLastButtons>\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/components/students-list/students-list.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#3f51b5}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ff4081}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}/* mat-table */mat-footer-row mat-footer-cell {\n  justify-content: center;\n  font-style: italic;\n}/* filter controls */.search-div {\n  margin: 10px;\n}.search-form-field {\n  width: 60%;\n  margin-left: 10px;\n  padding: 5px 10px;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n}.search-form-field div.mat-form-field-underline {\n  display: none;\n}.search-form-field div.mat-form-field-infix {\n  border-top: 0px;\n}.search-form-field div.mat-form-field-wrapper {\n  padding-bottom: 0px;\n}.search-form-field div.mat-form-field-suffix button {\n  height: 32px;\n  width: 32px;\n}.hide {\n  display: none;\n}.testClass {\n  margin-top: 35px;\n  margin-bottom: 30px;\n  -webkit-transform: translate(-2px, 44px) !important;\n          transform: translate(-2px, 44px) !important;\n  font-family: Lato, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dWRlbnRzLWxpc3Qvc3R1ZGVudHMtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50cy1saXN0L0Q6L05BR1AvTkFHUCBBc3NpZ25tZW50L3N0dWRlbnRzLW9uYm9hcmRpbmcvc3JjL2FwcC9jb21wb25lbnRzL3N0dWRlbnRzLWxpc3Qvc3R1ZGVudHMtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQyxvQ0FBb0MsYUFBYSxDQUFDLG9DQUFvQyxjQUFjLENBQUMseUNBQXlDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MscURBQXFELENBQUMsZUFBZSxDQUFDLDZDQUE2QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsd0RBQXdELENBQUMsZUFBZSxDQUFDLDJCQUEyQix1REFBdUQsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLHFEQUFxRCxDQUFDLHNDQUFzQyxxREFBcUQsQ0FBQyw0Q0FBNEMsZUFBZSxDQUFDLHdCQUF3QixxREFBcUQsQ0FBQyw4Q0FBOEMsdURBQXVELENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsZUFBZSxDQUFDLDRCQUE0QixxREFBcUQsQ0FBQyw0R0FBNEcsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsOENBQThDLENBQUMsVUFBVSw4Q0FBOEMsQ0FBQyxnQkFBZ0IsY0FB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QUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FETEYsQ0NRQTtFQUNFLGFBQUE7QURORixDQ1NBO0VBQ0UsZUFBQTtBRFBGLENDVUE7RUFDRSxtQkFBQTtBRFJGLENDV0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRFRGLENDYUE7RUFDSSxhQUFBO0FEWEosQ0NjQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0VBQ0EsNkJBQUE7QURaRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjZweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgMTEuNjJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgOS4zOHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWJvZHktMiwubWF0LWJvZHktc3Ryb25ne2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5LC5tYXQtYm9keS0xLC5tYXQtdHlwb2dyYXBoeXtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSBwLC5tYXQtYm9keS0xIHAsLm1hdC10eXBvZ3JhcGh5IHB7bWFyZ2luOjAgMCAxMnB4fS5tYXQtY2FwdGlvbiwubWF0LXNtYWxse2ZvbnQ6NDAwIDEycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1kaXNwbGF5LTQsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00e2ZvbnQ6MzAwIDExMnB4LzExMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDU2cHg7bGV0dGVyLXNwYWNpbmc6LS4wNWVtfS5tYXQtZGlzcGxheS0zLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktM3tmb250OjQwMCA1NnB4LzU2cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweDtsZXR0ZXItc3BhY2luZzotLjAyZW19Lm1hdC1kaXNwbGF5LTIsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ye2ZvbnQ6NDAwIDQ1cHgvNDhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4O2xldHRlci1zcGFjaW5nOi0uMDA1ZW19Lm1hdC1kaXNwbGF5LTEsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe2ZvbnQ6NDAwIDM0cHgvNDBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjIwcHh9Lm1hdC1jYXJkLWNvbnRlbnQsLm1hdC1jYXJkLXN1YnRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2hlY2tib3h7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uLC5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHh9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZGlhbG9nLXRpdGxle2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotLjg0Mzc1ZW07cGFkZGluZy10b3A6Ljg0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntmb250LXNpemU6NzUlO21hcmdpbi10b3A6LjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNSV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0uNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWdyaWQtdGlsZS1mb290ZXIsLm1hdC1ncmlkLXRpbGUtaGVhZGVye2ZvbnQtc2l6ZToxNHB4fS5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUsLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fWlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e21hcmdpbi10b3A6LS4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNlbGVjdC10cmlnZ2Vye2hlaWdodDoxLjEyNWVtfS5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc3RlcC1sYWJlbHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvcntmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLWxhYmVsLWVycm9ye2ZvbnQtc2l6ZToxNHB4fS5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10YWItZ3JvdXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9Lm1hdC10b29sdGlwLWhhbmRzZXR7Zm9udC1zaXplOjE0cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWF0LWxpc3QtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRyZWV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHh9Lm1hdC1yaXBwbGV7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVke292ZXJmbG93OnZpc2libGV9Lm1hdC1yaXBwbGUtZWxlbWVudHtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246b3BhY2l0eSx0cmFuc2Zvcm0gMHMgY3ViaWMtYmV6aWVyKDAsMCwuMiwxKTt0cmFuc2Zvcm06c2NhbGUoMCl9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydH0uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7YW5pbWF0aW9uLW5hbWU6Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne2hlaWdodDphdXRvIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O3BhZGRpbmc6MnB4IDAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Mntib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejV7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowIDZweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEzcHggMTlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI0cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowIDlweCAxMnB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNnB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjAgMTBweCAxNHB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MnB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojM2Y1MWI1fUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLWFjY2VudCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1iYWRnZS13YXJuIC5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LWJhZGdle3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtYmFkZ2UtaGlkZGVuIC5tYXQtYmFkZ2UtY29udGVudHtkaXNwbGF5Om5vbmV9Lm1hdC1iYWRnZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojYjliOWI5O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJhZGdlLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O3RyYW5zZm9ybTpzY2FsZSguNik7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmV7dHJhbnNmb3JtOm5vbmV9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtsaW5lLWhlaWdodDoxNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LThweH0ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtsaW5lLWhlaWdodDoyMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTExcHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojMDAwfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWIsLm1hdC1mbGF0LWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3gtc2hhZG93Om5vbmV9Lm1hdC1idXR0b24tdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfVtkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JhY2tncm91bmQ6I2ZmZn0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZHtiYWNrZ3JvdW5kLWNvbG9yOiNiZGJkYmR9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmR7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmQtc3VidGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWNoZWNrbWFya3tmaWxsOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6I2ZhZmFmYSFpbXBvcnRhbnR9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDpibGFjay1vbi13aGl0ZSl7Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzAwMCFpbXBvcnRhbnR9fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWRpc2FibGVke29wYWNpdHk6LjV9fUBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZDowIDB9fS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LC5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZS1zdGlja3ksW21hdC1mb290ZXItcm93XSxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxtYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbCx0aC5tYXQtaGVhZGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZle2NvbG9yOiMzZjUxYjV9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1kaWFsb2ctY29udGFpbmVye2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGl2aWRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRpdmlkZXItdmVydGljYWx7Ym9yZGVyLXJpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnR7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIsLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzNmNTFiNX0ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6MCAwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwubWF0LXNwaW5uZXIgY2lyY2xle3N0cm9rZTojM2Y1MWI1fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGV7c3Ryb2tlOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xle3N0cm9rZTojZjQ0MzM2fS5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2ZmNDA4MX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc2VsZWN0LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXNsaWRlci1mb2N1cy1yaW5ne2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC4yKX0uY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlcjpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1kaXNhYmxlZDpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZSAubWF0LXNsaWRlci1mb2N1cy1yaW5ne2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlcntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyl9Lm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC4wMDAxZGVnLHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KX0ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KX0ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYSAoaG92ZXI6bm9uZSl7Lm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOjAgMH19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc29ydC1oZWFkZXItYXJyb3d7Y29sb3I6Izc1NzU3NX0ubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcntib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhcntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLWJvdHRvbTpub25lfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1de2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOm5vbmV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3N7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3N7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC13YXJue2JhY2tncm91bmQ6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjppbmhlcml0fS5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbHRpcHtiYWNrZ3JvdW5kOnJnYmEoOTcsOTcsOTcsLjkpfS5tYXQtdHJlZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1uZXN0ZWQtdHJlZS1ub2RlLC5tYXQtdHJlZS1ub2Rle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNuYWNrLWJhci1jb250YWluZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7YmFja2dyb3VuZDojMzIzMjMyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntjb2xvcjojZmY0MDgxfSIsIkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xuLyogbWF0LXRhYmxlICovXG5tYXQtZm9vdGVyLXJvdyBtYXQtZm9vdGVyLWNlbGwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLyogZmlsdGVyIGNvbnRyb2xzICovXG4uc2VhcmNoLWRpdiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5zZWFyY2gtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCBidXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xufVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRlc3RDbGFzcyB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDQ0cHgpICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xufVxuIiwiQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7XG5cblxuXG5cbi8qIG1hdC10YWJsZSAqL1xubWF0LWZvb3Rlci1yb3cgbWF0LWZvb3Rlci1jZWxsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyogZmlsdGVyIGNvbnRyb2xzICovXG4uc2VhcmNoLWRpdiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC1zdWZmaXggYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVzdENsYXNze1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCA0NHB4KSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/students-list/students-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/students-list/students-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../on-boarding/on-boarding-form/on-boarding-form.component */ "./src/app/components/on-boarding/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../on-boarding/on-boarding-view/on-boarding-view.component */ "./src/app/components/on-boarding/on-boarding-view/on-boarding-view.component.ts");
/* harmony import */ var src_app_services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/confirm-dailog/confirm-dialog.service */ "./src/app/services/confirm-dailog/confirm-dialog.service.ts");







var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(router, dialog, dialogService) {
        this.router = router;
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.displayedColumns = ['sname', 'mothername', 'lastclassscore', 'fathername', 'docs', 'dob', 'category', 'actions'];
        this.checkInternationalDoc = false;
        this.checkDomesticDoc = false;
        this.checkInternationalDocView = false;
        this.checkDomesticDocView = false;
        this.checkDocs = [];
        this.categories = ['All', 'Domestic', 'International'];
        this.selectedCategory = 'All';
    }
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var array = localStorage.getItem('studentsList');
        console.log(JSON.parse(array));
        this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](JSON.parse(array));
        this.listData._updateChangeSubscription();
        if (this.listData.data !== null) {
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            this.listData.filterPredicate = function (data, filter) {
                return _this.displayedColumns.some(function (ele) {
                    return ele !== 'actions' && data[ele].toString().toLowerCase().indexOf(filter) !== -1;
                });
            };
        }
        if (this.listData.data === null && this.hideNoData) {
            this.hideLoadingData = false;
        }
        else {
            this.hideLoadingData = true;
        }
        if (!(this.listData.data !== null)) {
            this.hideNoData = false;
        }
        else {
            this.hideNoData = true;
        }
    };
    StudentsListComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedCategory = newValue;
        if (this.selectedCategory === 'All' && this.listData.data != null) {
            this.searchKey = '';
            this.applyFilter();
        }
        else if (this.selectedCategory === 'Domestic' && this.listData.data != null) {
            this.searchKey = 'Domestic';
            this.applyFilter();
        }
        else if (this.selectedCategory === 'International' && this.listData.data != null) {
            this.searchKey = 'International';
            this.applyFilter();
        }
        else {
            this.searchKey = '';
            this.applyFilter();
        }
    };
    StudentsListComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.applyFilter();
    };
    StudentsListComponent.prototype.applyFilter = function () {
        if (this.listData.data !== null) {
            this.listData.filter = this.searchKey.trim().toLowerCase();
        }
    };
    StudentsListComponent.prototype.callingEditOnBoard = function (row) {
        var _this = this;
        localStorage.setItem('editCalled', JSON.stringify(true));
        delete row.docs;
        localStorage.setItem('editId', JSON.stringify(row.id));
        delete row.id;
        row.dob = new Date(row.dob);
        if (row.category === 'International') {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < row.internationalDocs.length; i++) {
                this.checkDocs = row.internationalDocs;
                if (this.checkDocs[i] != null) {
                    this.checkInternationalDoc = true;
                    localStorage.setItem('checkInternationalDoc', JSON.stringify(this.checkInternationalDoc));
                }
            }
        }
        else {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < row.domesticDocs.length; i++) {
                this.checkDocs = row.domesticDocs;
                if (this.checkDocs[i] != null) {
                    this.checkDomesticDoc = true;
                    localStorage.setItem('checkDomesticDoc', JSON.stringify(this.checkDomesticDoc));
                }
            }
        }
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '60%';
        dialogConfig.height = '85%',
            dialogConfig.data = row;
        var dialogRef = this.dialog.open(_on_boarding_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_4__["OnBoardingFormComponent"], dialogConfig);
        dialogRef.componentInstance.onBoardingForm.setValue(row);
        dialogRef.afterClosed().subscribe(function () {
            var array = localStorage.getItem('studentsList');
            console.log(JSON.parse(array));
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](JSON.parse(array));
            _this.listData._updateChangeSubscription();
            if (_this.listData.data !== null) {
                _this.listData.sort = _this.sort;
                _this.listData.paginator = _this.paginator;
                _this.listData.filterPredicate = function (data, filter) {
                    return _this.displayedColumns.some(function (ele) {
                        return ele !== 'actions' && data[ele].toString().toLowerCase().indexOf(filter) !== -1;
                    });
                };
            }
        });
    };
    StudentsListComponent.prototype.callingViewOnBoard = function (row) {
        var _this = this;
        debugger;
        delete row.docs;
        localStorage.setItem('viewId', JSON.stringify(row.id));
        delete row.id;
        if (row.category === 'International') {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < row.internationalDocs.length; i++) {
                this.checkDocs = row.internationalDocs;
                if (this.checkDocs[i] !== null && this.checkDocs[i] === true) {
                    this.checkInternationalDocView = true;
                    localStorage.setItem('checkInternationalDocView', JSON.stringify(this.checkInternationalDocView));
                }
            }
        }
        else {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < row.domesticDocs.length; i++) {
                this.checkDocs = row.domesticDocs;
                if (this.checkDocs[i] !== null && this.checkDocs[i] === true) {
                    this.checkDomesticDocView = true;
                    localStorage.setItem('checkDomesticDocView', JSON.stringify(this.checkDomesticDocView));
                }
            }
        }
        row.dob = new Date(row.dob);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '60%';
        dialogConfig.height = '85%',
            dialogConfig.data = row;
        var dialogRef = this.dialog.open(_on_boarding_on_boarding_view_on_boarding_view_component__WEBPACK_IMPORTED_MODULE_5__["OnBoardingViewComponent"], dialogConfig);
        dialogRef.componentInstance.onBoardingViewForm.setValue(row);
        dialogRef.afterClosed().subscribe(function () {
            var array = localStorage.getItem('studentsList');
            console.log(JSON.parse(array));
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](JSON.parse(array));
            _this.listData._updateChangeSubscription();
            if (_this.listData.data !== null) {
                _this.listData.sort = _this.sort;
                _this.listData.paginator = _this.paginator;
                _this.listData.filterPredicate = function (data, filter) {
                    return _this.displayedColumns.some(function (ele) {
                        return ele !== 'actions' && data[ele].toString().toLowerCase().indexOf(filter) !== -1;
                    });
                };
            }
        });
    };
    StudentsListComponent.prototype.onDelete = function (row) {
        var _this = this;
        var popupReturnvalue = false;
        console.log(row);
        this.dialogService.openConfirmDialog('Are you sure to delete this record?')
            .afterClosed().subscribe(function (res) {
            console.log(res);
            popupReturnvalue = res;
            if (popupReturnvalue) {
                var array = localStorage.getItem('studentsList');
                console.log(JSON.parse(array));
                _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](JSON.parse(array));
                var index = _this.listData.data.findIndex(function (item) { return item.id === row.id; });
                _this.listData.data.splice(index, 1);
                localStorage.studentsList = JSON.stringify(_this.listData.data);
                _this.listData._updateChangeSubscription();
                if (_this.listData.data !== null) {
                    _this.listData.sort = _this.sort;
                    _this.listData.paginator = _this.paginator;
                    _this.listData.filterPredicate = function (data, filter) {
                        return _this.displayedColumns.some(function (ele) {
                            return ele !== 'actions' && data[ele].toString().toLowerCase().indexOf(filter) !== -1;
                        });
                    };
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StudentsListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StudentsListComponent.prototype, "paginator", void 0);
    StudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-list',
            template: __webpack_require__(/*! ./students-list.component.html */ "./src/app/components/students-list/students-list.component.html"),
            styles: [__webpack_require__(/*! ./students-list.component.less */ "./src/app/components/students-list/students-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/containers/confirm-dialog/confirm-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/containers/confirm-dialog/confirm-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"content-container\">\n      <mat-icon id=\"close-icon\" (click)=\"closeDialog()\">close</mat-icon>\n      <span class=\"content-span full-width\">{{data.message}}</span>\n    </div>\n    <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\">NO</button>\n    <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">YES</button>\n  </div>"

/***/ }),

/***/ "./src/app/containers/confirm-dialog/confirm-dialog.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/containers/confirm-dialog/confirm-dialog.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/confirm-dialog/confirm-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/confirm-dialog/confirm-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/containers/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.less */ "./src/app/containers/confirm-dialog/confirm-dialog.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/containers/date-picker/date-picker.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/containers/date-picker/date-picker.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-calendar [(ngModel)]=\"config.ngModel\" [showIcon]=\"config.showIcon\" readonlyInput=\"config.readonlyInput\"\n  [minDate]=\"config.minDate\" [maxDate]=\"config.maxDate\" (onSelect)=\"onSelect()\" (onClearClick)=\"onClearDate()\"\n  showButtonBar=\"config.showButtonBar\" [monthNavigator]=\"config.monthNavigator\" [yearNavigator]=\"config.yearNavigator\"\n  yearRange=\"1900:2100\" appendTo=\"body\" icon=\"fa-clock-o\"></p-calendar>\n"

/***/ }),

/***/ "./src/app/containers/date-picker/date-picker.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/containers/date-picker/date-picker.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/date-picker/date-picker.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/date-picker/date-picker.component.ts ***!
  \*****************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DatePickerComponent.prototype.onSelect = function () {
        this.onChange.emit(this.config.ngModel);
    };
    DatePickerComponent.prototype.onClearDate = function () {
        this.onClear.emit(this.config.ngModel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DatePickerComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DatePickerComponent.prototype, "onChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DatePickerComponent.prototype, "onClear", void 0);
    DatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/containers/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.less */ "./src/app/containers/date-picker/date-picker.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/containers/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/containers/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <footer>\n    <p>&copy; Company 2019 , This application is created by Chirag Girdhar. All rights are reserved for Nagarro Software.</p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/containers/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/containers/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/containers/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/containers/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/containers/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #ccc\">\n    <h1>{{title}}   \n          <span class=\"rightalign\">{{admin}}</span>  &nbsp;  \n          <button mat-icon-button (click)=\"callingLogout()\" class=\"rightalign\">\n              <mat-icon>person</mat-icon>\n            </button>\n    </h1>\n   \n</div>\n\n  "

/***/ }),

/***/ "./src/app/containers/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/containers/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftalign {\n  float: left;\n  text-align: left;\n}\n.rightalign {\n  float: right;\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9oZWFkZXIvRDovTkFHUC9OQUdQIEFzc2lnbm1lbnQvc3R1ZGVudHMtb25ib2FyZGluZy9zcmMvYXBwL2NvbnRhaW5lcnMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29udGFpbmVycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRhbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5yaWdodGFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59IiwiLmxlZnRhbGlnbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJpZ2h0YWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/containers/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/confirm-dailog/confirm-dialog.service */ "./src/app/services/confirm-dailog/confirm-dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialogService, router) {
        this.dialogService = dialogService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.admin = localStorage.getItem('currentUser');
    };
    HeaderComponent.prototype.callingLogout = function () {
        var _this = this;
        this.dialogService.openConfirmDialog('Do you want to Logout?')
            .afterClosed().subscribe(function (res) {
            console.log(res);
            if (res) {
                localStorage.clear();
                _this.router.navigate(['login']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/containers/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/containers/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_confirm_dailog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/containers/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/containers/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav align=\"center\">\n  <a routerLink=\"/mainPage/onBoardingForm\" routerLinkActive=\"active\">OnBoarding Form</a>\n  <a routerLink=\"/mainPage/studentsList\" routerLinkActive=\"active\">Students List</a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/containers/navbar/navbar.component.less":
/*!*********************************************************!*\
  !*** ./src/app/containers/navbar/navbar.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/containers/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/containers/navbar/navbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/models/admin-login/admin.login.ts":
/*!***************************************************!*\
  !*** ./src/app/models/admin-login/admin.login.ts ***!
  \***************************************************/
/*! exports provided: AdminLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLogin", function() { return AdminLogin; });
var AdminLogin = /** @class */ (function () {
    function AdminLogin() {
    }
    return AdminLogin;
}());



/***/ }),

/***/ "./src/app/models/alert/alert.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/alert/alert.model.ts ***!
  \*********************************************/
/*! exports provided: AlertType, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Information"] = 0] = "Information";
    AlertType[AlertType["Success"] = 1] = "Success";
    AlertType[AlertType["Warning"] = 2] = "Warning";
    AlertType[AlertType["Error"] = 3] = "Error";
})(AlertType || (AlertType = {}));
var Alert = /** @class */ (function () {
    function Alert(_message, _type) {
        this._message = _message;
        this._type = _type;
        this.message = _message;
        this.type = _type;
        this.setAlertStatus();
    }
    Alert.prototype.setAlertStatus = function () {
        switch (this.type) {
            case AlertType.Success:
                this.status = 'success';
                break;
            case AlertType.Information:
                this.status = 'info';
                break;
            case AlertType.Error:
                this.status = 'danger';
                break;
            case AlertType.Warning:
                this.status = 'warning';
                break;
        }
    };
    return Alert;
}());



/***/ }),

/***/ "./src/app/models/on-boarding/on-boarding.ts":
/*!***************************************************!*\
  !*** ./src/app/models/on-boarding/on-boarding.ts ***!
  \***************************************************/
/*! exports provided: OnBoardingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingModel", function() { return OnBoardingModel; });
var OnBoardingModel = /** @class */ (function () {
    function OnBoardingModel() {
    }
    return OnBoardingModel;
}());



/***/ }),

/***/ "./src/app/services/alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlertService.prototype.sendAlert = function (alert) {
        this.subject.next(alert);
    };
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/confirm-dailog/confirm-dialog.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/confirm-dailog/confirm-dialog.service.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_containers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/containers/confirm-dialog/confirm-dialog.component */ "./src/app/containers/confirm-dialog/confirm-dialog.component.ts");




var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.openConfirmDialog = function (msg) {
        return this.dialog.open(src_app_containers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            width: '390px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            // position: { top: '10px' },
            data: {
                message: msg
            }
        });
    };
    ConfirmDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());



/***/ }),

/***/ "./src/app/services/editOnBoard/edit-on-board.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/editOnBoard/edit-on-board.service.ts ***!
  \***************************************************************/
/*! exports provided: EditOnBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOnBoardService", function() { return EditOnBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditOnBoardService = /** @class */ (function () {
    function EditOnBoardService() {
    }
    EditOnBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditOnBoardService);
    return EditOnBoardService;
}());



/***/ }),

/***/ "./src/app/services/generalized-client/generalized-client.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/generalized-client/generalized-client.service.ts ***!
  \***************************************************************************/
/*! exports provided: GeneralizedClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralizedClientService", function() { return GeneralizedClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeneralizedClientService = /** @class */ (function () {
    function GeneralizedClientService(http) {
        this.http = http;
    }
    GeneralizedClientService.prototype.getAdminUsers = function () {
        var url = '/assets/admin.json';
        var result = this.http.get(url);
        return result;
    };
    GeneralizedClientService.prototype.getInternationalStudentDocuments = function () {
        var url = '/assets/internationalStudentDocs.json';
        var result = this.http.get(url);
        return result;
    };
    GeneralizedClientService.prototype.getDomesticStudentDocuments = function () {
        var url = '/assets/domesticStudentDocs.json';
        var result = this.http.get(url);
        return result;
    };
    GeneralizedClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralizedClientService);
    return GeneralizedClientService;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\NAGP\NAGP Assignment\students-onboarding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map