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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border: 1px #cbdbf4 solid !important;\r\n    border-radius: 0.50px;\r\n}\r\n\r\n.btn:hover {\r\n    border: 2px #cbdbf4 solid !important;\r\n}\r\n\r\nbody{\r\n    background-color: #f4f8ff !important;\r\n    padding: 20px;\r\n}\r\n\r\n.container{\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 0.5px;\r\n}\r\n\r\ninput {\r\n    font-size: 20px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCAjY2JkYmY0IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjUwcHg7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggI2NiZGJmNCBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmZiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\"\n  crossorigin=\"anonymous\">\n\n<style>\n  input.form-control.text-center.bs-timepicker-field{\n    width: 80px !important;\n    font-size: 20px;\n}\n.form-control {\n  font-size: 20px;\n}\n</style>\n\n<ul style=\"text-align: center; display: flex; align-items: center; justify-content: center;\" class=\"nav nav-tabs side_nav\" role=\"tablist\">\n  <li style=\"margin-right: 20px;\" *ngFor=\"let wallet of coinwallet; let first = first;\" [ngClass]=\"{firstItem: first}\" role=\"presentation\" class=\"accounts_li btn btn-primary\" \n    [class.active]=\"selectedwallet===wallet\">\n    <a (click)=\"selectedwallet = wallet\" aria-controls=\"one\" role=\"tab\" data-toggle=\"tab\">{{wallet}}</a>\n  </li>\n<a download style=\"text-align: center; display: flex; align-items: center; justify-content: center;\" href=\"https://drive.google.com/uc?authuser=0&id=11ubYz_-ZxUqANRDhtGjYC1lKuK6Mhbmb&export=download\">Download Weekly Timetracker</a>\n</ul>\n\n<div class=\"tab-content\">\n  <div *ngIf=\"selectedwallet === coinwallet[0]\" role=\"tabpanel\" class=\"tab-pane active\" id=\"one\">\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n        <h1>Weekly to Daily Hourly Breakdown</h1>\n        <h6>Figure out how many hours to work per day</h6>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>How many hours are you working this week?</h5>\n          <input oninput=\"if(this.value > 80) this.value = 80; if (this.value < 0) this.value = 0;\" [(ngModel)]=\"HoursThisWeek\" style=\"width: 150px;\" class=\"form-control\" type=\"number\" min=\"0\"><br>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>How many days are you working this week?</h5>\n          <input oninput=\"if(this.value > 7) this.value = 7; if (this.value < 1) this.value = 1;\" [(ngModel)]=\"DaysThisWeek\" style=\"width: 150px;\" class=\"form-control\" type=\"number\"><br>\n        </div>\n      </div>\n      <h2 class=\"alert alert-success\">You have to work <span class=\"clockOutTime\">{{\n          CalculateHoursPerDay() }}</span>\n         per day this week! </h2>\n    </div>\n  </div>\n  <div *ngIf=\"selectedwallet === coinwallet[1]\" role=\"tabpanel\" class=\"tab-pane active\" id=\"two\">\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n        <h1>Clock Out Calculator</h1>\n        <h6>Figure out what time to clock out day by day.</h6>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h5>What time are you clocking in today?</h5>\n          <br>\n          <timepicker minuteStep=\"1\" [mousewheel]=\"allowMouseWheel\" [showSpinners]=\"showSpinners\" [(ngModel)]=\"ClockInTime\"></timepicker>\n        </div>\n\n        <div class=\"col-md-4\">\n          <h5>How long are you working today?</h5>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              Hr<input oninput=\"if(this.value > 24) this.value = 24; if (this.value < 0) this.value = 0;\" min=\"0\" [(ngModel)]=\"TotalHoursNeeded\" placeholder=\"e.g. 8\" type=\"number\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-5\">\n              Min<input oninput=\"if(this.value > 60) this.value = 60; if (this.value < 0) this.value = 0;\" min=\"0\" [(ngModel)]=\"TotalMinutesNeeded\" placeholder=\"e.g. 30\" type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <h5>How long is your lunch today?</h5>\n          Min<input oninput=\"if(this.value > 60) this.value = 60; if (this.value < 0) this.value = 0;\" min=\"0\" style=\"width: 150px;\" [(ngModel)]=\"LunchTime\" placeholder=\"e.g. 30\" type=\"number\" class=\"form-control\">\n        </div>\n      </div>\n      <h2 style=\"margin-top: 40px;\" class=\"alert alert-success\">You have to clock out at <span class=\"clockOutTime\">{{\n          CalculateClockOutTime() }}</span>\n        today! </h2>\n    </div>\n  </div>\n</div>\n<br>"

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
        this.title = 'Clock Helper by Bill McGough';
        this.ClockInTime = new Date(2019, 1, 1, 8, 0, 0, 0);
        this.TotalHoursNeeded = 8;
        this.LunchTime = 30;
        this.TotalMinutesNeeded = 0;
        this.ClockOutTime = new Date();
        this.allowMouseWheel = true;
        this.showSpinners = false;
        this.minuteStep = 1;
        this.DaysThisWeek = 5;
        this.HoursThisWeek = 40;
        this.coinwallet = ['Weekly to Daily Hourly Breakdown', 'Clock Out Calculator'];
        this.selectedwallet = this.coinwallet[0];
    }
    AppComponent.prototype.minTommss = function (minutes) {
        var hours = Math.floor(Math.abs(minutes));
        var mins = Math.floor((Math.abs(minutes) * 60) % 60);
        return hours + (hours === 1 ? " hour " : " hours ") + (mins > 0 ? "and " : "") + (mins > 0 ? mins + (mins === 1 ? " minute" : " minutes") : "");
    };
    AppComponent.prototype.CalculateHoursPerDay = function () {
        var result = this.HoursThisWeek / this.DaysThisWeek;
        return this.minTommss(result);
    };
    AppComponent.prototype.CalculateClockOutTime = function () {
        var clockInDate = this.ClockInTime;
        var clockOutDate = this.ClockOutTime;
        clockOutDate.setHours(clockInDate.getHours() + this.TotalHoursNeeded);
        clockOutDate.setMinutes(clockInDate.getMinutes() + this.LunchTime);
        if (this.TotalMinutesNeeded !== null) {
            clockOutDate.setMinutes(clockOutDate.getMinutes() + this.TotalMinutesNeeded);
        }
        return clockOutDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__["TimepickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\projects\clockhelpv3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map