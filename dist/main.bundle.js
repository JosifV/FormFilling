webpackJsonp([1,5],{

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Josif/Obrazac4/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formular__ = __webpack_require__(456);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Butstrapac example';
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__formular__["a" /* Formular */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.LOGO = __webpack_require__(629);
    }
    /*   private JUMBOTRONAC = require("jumbo.jpeg");
      private ICO = require("formform.ico"); */
    AppComponent.prototype.downloadPdf = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_1_jspdf__();
        doc.addHTML(document.getElementById("obrz"), function () {
            doc.save("obrz.pdf");
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(614),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Josif/Obrazac4/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Josif/Obrazac4/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formular; });
var Formular = (function () {
    function Formular(imeIprezime, PIB, ulica, broj, grad, opstina, eksp, fiskBrKase, fiskMod, brResh, datResh, nazObj, adrObj, mestObj, tel, opstina2, odDan) {
        this.imeIprezime = imeIprezime;
        this.PIB = PIB;
        this.ulica = ulica;
        this.broj = broj;
        this.grad = grad;
        this.opstina = opstina;
        this.eksp = eksp;
        this.fiskBrKase = fiskBrKase;
        this.fiskMod = fiskMod;
        this.brResh = brResh;
        this.datResh = datResh;
        this.nazObj = nazObj;
        this.adrObj = adrObj;
        this.mestObj = mestObj;
        this.tel = tel;
        this.opstina2 = opstina2;
        this.odDan = odDan;
    }
    return Formular;
}());
//# sourceMappingURL=C:/Users/Josif/Obrazac4/src/formular.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Josif/Obrazac4/src/environment.js.map

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "body {\n  overflow-x: hidden; }\n\n#sve {\n  font-family: Arial, Helvetica, sans-serif; }\n\n#jumbo h1, #jumbo h3, #oNama h1, #oNama h3 {\n  font-weight: bold; }\n\n#jumbo p, #jumbo h6, #oNama p, #oNama h6 {\n  letter-spacing: 1.1px; }\n\n#jumbo {\n  background-image: url(./jumbo.jpeg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white; }\n\n#drustveneMreze {\n  list-style-type: none;\n  background: #333333;\n  border-radius: 25px;\n  padding: 15px;\n  font-size: 120%;\n  font-weight: bold;\n  text-align: center; }\n  #drustveneMreze li {\n    padding: 10px 0 10px 0; }\n  #drustveneMreze a {\n    color: white; }\n    #drustveneMreze a:hover {\n      color: blueviolet;\n      text-decoration: none; }\n\nhr {\n  border: 2px solid #333333; }\n\n#app {\n  background: #dddddd;\n  letter-spacing: 1.1px; }\n  #app h1 {\n    font-weight: bold;\n    text-align: center; }\n\n.btn-moje {\n  background: #333333;\n  color: white;\n  font-size: 130%;\n  font-weight: bold;\n  padding: 20px 0 20px 0;\n  word-wrap: break-word; }\n  .btn-moje:hover {\n    background: blueviolet; }\n\n.btn-zavrsno {\n  background: #333333;\n  color: white;\n  font-size: 130%;\n  font-weight: bold;\n  padding: 20px 0 20px 0; }\n  .btn-zavrsno:hover {\n    background: orangered; }\n\n#labell {\n  font-size: x-large;\n  color: gray;\n  padding-left: 10px; }\n\n#navbarac a {\n  color: #dddddd;\n  padding: 10px;\n  font-weight: bold;\n  margin-right: 10px; }\n  #navbarac a:hover {\n    background: blueviolet;\n    border-radius: 5px; }\n\n#obrz {\n  background: white;\n  padding: 80px 150px 80px 160px;\n  font-size: 130%;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif; }\n\n#podFuter {\n  background: #dddddd; }\n  #podFuter h6 {\n    font-size: 120%;\n    padding-bottom: 5px;\n    font-weight: bold; }\n  #podFuter ul {\n    list-style-type: disc;\n    font-size: 110%; }\n    #podFuter ul li {\n      padding: 5px; }\n      #podFuter ul li a {\n        color: #333333;\n        padding-left: 5px;\n        padding-right: 5px; }\n        #podFuter ul li a:hover {\n          color: white;\n          background: #333333;\n          border-radius: 2px;\n          text-decoration: none; }\n\n.modal-header {\n  background: #333333;\n  color: #dddddd; }\n\n.modal-body {\n  background: #333333; }\n  .modal-body label {\n    color: #dddddd; }\n\n.modal-title {\n  color: #dddddd; }\n\n.btn-posalji {\n  color: #dddddd;\n  border: 1px solid #dddddd;\n  background: #333333; }\n  .btn-posalji:hover {\n    background: blueviolet;\n    border: 1px solid #333333; }\n\n#poPodFuter {\n  color: white;\n  background: #333333;\n  text-align: center; }\n\n/* #slika{\r\n    background-image: url(\"vuk.PNG\");\r\n    background-size: cover; \r\n} */\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"sve\">\n      <!-- NAVBAR -->\n        <nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\" id=\"navbarac\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\"> \n                <a class=\"navbar-brand\" href=\"#\"><i style=\"font-size:24px\" class=\"fa\">&#xf015;</i> Почетак</a>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" href=\"#obrz\" (click)=\"downloadPdf()\" id=\"presijavanje\" ><i style=\"font-size:24px\" class=\"fa\">&#xf019;</i> Преузми Образац</a> \n              </li>\n            </ul>\n          </div>\n        </nav>\n    \n      <!-- JUMBOTRON -->\n      <div class=\"jumbotron\" id=\"jumbo\">\n        <br><br>\n          <h1>Наслов</h1>\n          <h6>Слатка је ствар, и пуна безлобне забаве и утешенија, спомињати сесвоји прошасти времена, од самога незлобивога детињства и веселе младости домужеског возраста и зреле старости.</h6>\n        </div>\n      \n        <!-- O NAMA -->\n      <div class=\"container\" id=\"oNama\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                <h3>О нама</h3>\n                <p>\n                    Слатка је ствар, и пуна безлобне забаве и утешенија, спомињати сесвоји прошасти времена, од самога незлобивога детињства и веселе младости домужеског возраста и зреле старости. Проливају очи моје слаткосрдечне сузеприпознанства и благодарности кад год размишљавам велику милост небесногпромисла, у коликим невољам ми је помогла! Од колики 6едствованија и напастејизбавила! И колико крат моје совете и намеренија, која би ми за моје неразумије инерасудије штетна и пагубна била, на добро обратила! И како чадољубива мати, заруку водећи, к добром концу довела! Љубов дружества и пријатељства —слатка ствар! Слатко име! Слатко спомињање! Чини ми се да сладост рајска довољна би мибила, такова и толика будући, колика је мојему срцу утеха и радост кад год помињемсрдечну љубов и прија|тељство моји љубезника и љубезница, благодетеља иблагодетелница. Моје исте слабости и погрешке, премда и се стидим, и од који нидо данас нисам се избавио, ползују ме кад и помињем, помажући ми да сеисправљам, колико је могуће, да ниско и смирено о себи мислим, и да друге, мениподобослабе, људе трпим и сносим.\n                </p>\n              </div>\n              <div class=\"col-md-3 offset-1\">\n                <h3>Пратите нас на:</h3>\n                <ul id=\"drustveneMreze\" class=\"row\">\n                  <ul class=\"col-6\">\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf08c;</i>  </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf1a2;</i> </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf082;</i> </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf0d4;</i> </a></li>\n                  </ul>\n                  <ul class=\"col-6\">\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf166;</i>  </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf16d;</i> </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf081;</i> </a></li>\n                      <li><a href=\"javascript:void(0)\"><i style=\"font-size:74px\" class=\"fa\">&#xf174;</i> </a></li>\n                  </ul>\n                </ul>\n              </div>\n            </div>\n      </div>\n      \n        <!-- APP -->\n        <form id=\"app\" #userForm=\"ngForm\">\n          <hr>\n          <br>\n          <h1>Попуна Података</h1>\n          <br>\n            <button class=\"btn btn-lg btn-moje btn-block\" data-toggle=\"collapse\" data-target=\"#podaciObavezniku\">Унос података о обвезнику</button>\n      \n            <div id=\"podaciObavezniku\" class=\"collapse\">\n            <br>\n              <label for=\"imeIprezime\" id=\"labell\">Порески обвезник:</label>\n              <input [(ngModel)]=\"userModel.imeIprezime\" class=\"form-control form-control-lg\" type=\"text\" name=\"imeIprezime\" id=\"imeIprezime\" placeholder=\"Ваше име и презиме\"> \n            <br>\n            <label for=\"PIB\" id=\"labell\">ПИБ:</label>\n              <input [(ngModel)]=\"userModel.PIB\" class=\"form-control form-control-lg\" type=\"text\" name=\"PIB\" id=\"PIB\" >\n            <br>\n            <div ngModelGroup=\"adresac\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"ulica\" id=\"labell\">Улица:</label>\n                <input [(ngModel)]=\"userModel.ulica\" class=\"form-control form-control-lg\" type=\"text\" name=\"ulica\" id=\"ulica\" >\n              </div>\n              <div class=\"col-md-2\">\n                <label for=\"broj\" id=\"labell\">Број:</label>\n                <input [(ngModel)]=\"userModel.broj\" class=\"form-control form-control-lg\" type=\"text\" name=\"broj\" id=\"broj\" >\n              </div>\n              <div class=\"col-md-4\">\n                <label for=\"grad\" id=\"labell\">Град:</label>\n                <input [(ngModel)]=\"userModel.grad\" class=\"form-control form-control-lg\" type=\"text\" name=\"grad\" id=\"grad\">\n              </div>\n            </div>\n          </div>\n              <br>\n              <label for=\"opstina\" id=\"labell\">Општина:</label>\n              <select [(ngModel)]=\"userModel.opstina\" class=\"form-control form-control-lg\" name=\"opstina\" id=\"opstina\">\n                <option selected disabled>Изабери Општину</option>\n                <option value=\"АДА\">АДА</option>\n                <option value=\"АЛЕКСАНДРОВАЦ\">АЛЕКСАНДРОВАЦ</option>\n                <option value=\"АЛЕКСИНАЦ\">АЛЕКСИНАЦ</option>\n                <option value=\"АЛИБУНАР\">АЛИБУНАР</option>\n                <option value=\"АПАТИН\">АПАТИН</option>\n                <option value=\"АРАНЂЕЛОВАЦ\">АРАНЂЕЛОВАЦ</option>\n                <option value=\"АРИЉЕ\">АРИЉЕ</option>\n              </select>\n            </div> \n      \n            <button class=\"btn btn-lg btn-moje btn-block\" data-toggle=\"collapse\" data-target=\"#zahtev\"> Захтев За Промену Објекта – Адресе Фискалне Касе </button>\n            <div id=\"zahtev\" class=\"collapse\">\n                <br>\n                <label for=\"eksp\" id=\"labell\">Филијали/Експозитури Пореске управе:</label>\n                <input  [(ngModel)]=\"userModel.eksp\" class=\"form-control form-control-lg\" type=\"text\" name=\"eksp\" id=\"eksp\" placeholder=\"Пример: Пореска управа Мали Зворник Краља Петра 16 \">\n                <br>\n                <label for=\"fiskBrKase\" id=\"labell\">Идентификациони број фискалне касе:</label>\n                <input  [(ngModel)]=\"userModel.fiskBrKase\" class=\"form-control form-control-lg\" type=\"text\" name=\"fiskBrKase\" id=\"fiskBrKase\" >\n                <br>\n                <label for=\"fiskMod\" id=\"labell\">Број фискалног модула:</label>\n                <input [(ngModel)]=\"userModel.fiskMod\" class=\"form-control form-control-lg\" type=\"text\" name=\"fiskMod\" id=\"fiskMod\" >\n                <br>\n                <label for=\"brResh\" id=\"labell\">Број решења о фискализацији:</label>\n                <input  [(ngModel)]=\"userModel.brResh\" class=\"form-control form-control-lg\" type=\"text\" name=\"brResh\" id=\"brResh\">\n                <br>\n                <label for=\"datResh\" id=\"labell\">Датум решења о фискализацији:</label>\n                <input  [(ngModel)]=\"userModel.datResh\" class=\"form-control form-control-lg\" type=\"text\" name=\"datResh\" id=\"datResh\">\n                <br>\n            </div>\n      \n            <button class=\"btn btn-lg btn-moje btn-block\" data-toggle=\"collapse\" data-target=\"#novObj\">Подаци о новом објекту – адреси фискалне касе</button>\n            <div id=\"novObj\" class=\"collapse\">\n                <br>\n                <label for=\"nazObj\" id=\"labell\">Назив објекта:</label>\n                <input [(ngModel)]=\"userModel.nazObj\" class=\"form-control form-control-lg\" type=\"text\" name=\"nazObj\" id=\"nazObj\">\n                <br>\n                <label for=\"adrObj\" id=\"labell\">Адреса објекта:</label>\n                <input [(ngModel)]=\"userModel.adrObj\" class=\"form-control form-control-lg\" type=\"text\" name=\"adrObj\" id=\"adrObj\">\n                <br>\n                <label for=\"mestObj\" id=\"labell\">Место објекта: </label>\n                <input [(ngModel)]=\"userModel.mestObj\" class=\"form-control form-control-lg\" type=\"text\" name=\"mestObj\" id=\"mestObj\">\n                <br>\n                <label for=\"tel\" id=\"labell\">Телефони:</label>\n                <input [(ngModel)]=\"userModel.tel\" class=\"form-control form-control-lg\" type=\"text\" name=\"tel\" id=\"tel\">\n                <br>\n                <label for=\"opstina2\" id=\"labell\">Општина објекта:</label>\n                <select [(ngModel)]=\"userModel.opstina2\" class=\"form-control form-control-lg\" name=\"opstina2\" id=\"opstina2\">\n                    <option selected disabled>Изабери Општину</option>\n                    <option value=\"АДА\">АДА</option>\n                    <option value=\"АЛЕКСАНДРОВАЦ\">АЛЕКСАНДРОВАЦ</option>\n                    <option value=\"АЛЕКСИНАЦ\">АЛЕКСИНАЦ</option>\n                    <option value=\"АЛИБУНАР\">АЛИБУНАР</option>\n                    <option value=\"АПАТИН\">АПАТИН</option>\n                    <option value=\"АРАНЂЕЛОВАЦ\">АРАНЂЕЛОВАЦ</option>\n                    <option value=\"АРИЉЕ\">АРИЉЕ</option>\n                  </select>\n                <br>\n                <label for=\"odDan\" id=\"labell\">Од дана:</label>\n                <input [(ngModel)]=\"userModel.odDan\" class=\"form-control form-control-lg\" type=\"text\" name=\"odDan\" id=\"odDan\">\n                <br>\n            </div>\n          </form>\n          </div>\n        \n  <div id=\"app\">\n        <br>\n          <h1>Изглед Образца</h1>\n        <br>\n       <hr>\n      </div>\n      <div id=\"obrz\" class=\"container\"> \n      <br>\n      <p class=\"float-right font-weight-bold\">Образац ЗПО</p>\n      <br><br>\n      <p class=\"float-left font-weight-bold\">Подаци о обвезнику:</p>\n      \n      <br>\n      \n      <div class=\"row\" style=\"width:100%\">\n        <div class=\"col-md-4\"><p>Порески обвезник:</p></div>\n        <div class=\"col-md-8\"><input value=\"{{userModel.imeIprezime}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n        <div class=\"col-md-2\"><p>ПИБ:</p></div>\n        <div class=\"col-md-10\"><input value=\"{{userModel.PIB}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n        <div class=\"col-md-2\"><p>Адреса:</p></div>\n        <div class=\"col-md-10\"><input value=\"{{userModel.ulica + ' ' + userModel.broj + ' ' + userModel.grad}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n        <div class=\"col-md-2\"><p>Општина:</p></div>\n        <div class=\"col-md-10\"><input value=\"{{userModel.opstina}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      </div>\n      <br>\n      <h5 class=\"text-center font-weight-bold\">ЗАХТЕВ ЗА ПРОМЕНУ ОБЈЕКТА – АДРЕСЕ ФИСКАЛНЕ КАСЕ</h5>\n      <br><br>\n      \n      <div class=\"row\" style=\"width:100%\">\n      \n      <div class=\"col-md-7\"><p>Филијали/Експозитури Пореске управе:</p></div>\n      <div class=\"col-md-5\"><input value=\"{{userModel.eksp}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-12\"><p>Подаци о фискалној каси:</p></div>\n      \n      <div class=\"col-md-7\"><p>Идентификациони број фискалне касе:</p></div>\n      <div class=\"col-md-5\"><input value=\"{{userModel.fiskBrKase}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-5\"><p>Број фискалног модула:</p></div>\n      <div class=\"col-md-7\"><input value=\"{{userModel.fiskMod}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-6\"><p>Број решења о фискализацији:</p></div>\n      <div class=\"col-md-6\"><input value=\"{{userModel.brResh}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-6\"><p>Датум решења о фискализацији:</p></div>\n      <div class=\"col-md-6\"><input value=\"{{userModel.datResh}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-12\"><p class=\"font-weight-bold\">Подаци о новом објекту – адреси фискалне касе: </p></div>\n      \n      <div class=\"col-md-3\"><p>Назив објекта:</p></div>\n      <div class=\"col-md-9\"><input value=\"{{userModel.nazObj}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-3\"><p>Адреса објекта:</p></div>\n      <div class=\"col-md-9\"><input value=\"{{userModel.adrObj}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-3\"><p>Место објекта:</p></div>\n      <div class=\"col-md-9\"><input value=\"{{userModel.mestObj}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-2\"><p>Телефони:</p></div>\n      <div class=\"col-md-10\"><input value=\"{{userModel.tel}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-4\"><p>Општина објекта:</p></div>\n      <div class=\"col-md-8\"><input value=\"{{userModel.opstina2}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      \n      <div class=\"col-md-2\"><p>Од дана:</p></div>\n      <div class=\"col-md-10\"><input value=\"{{userModel.odDan}}\" type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 1px solid black\"></div>\n      </div>\n      <br><br><br><br><br>\n      \n      <div class=\"row\">\n          <div class=\"col-md-4\"><p class=\"text-left font-weight-bold\">Примио радник ПУ</p></div>\n          <div class=\"col-md-4 offset-4\"><p class=\"text-center font-weight-bold\">Порески обвезник</p></div>\n          \n          <div class=\"col-md-4\"><input type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 2px solid black\"></div>\n          <div class=\"col-md-4 offset-4\"><input type=\"text\" class=\"form-control form-control-sm border-1 border-top-0 border-right-0 border-left-0\" style=\"border-bottom: 2px solid black\"></div>\n      </div>\n      <br><br><br><br>\n      </div>\n  \n     <!-- PODFUTER -->\n     <div id=\"podFuter\">\n        <br><hr><br>\n     <div class=\"row\">\n    <div class=\"col-md-3\">\n        <img [src]=\"LOGO\" class=\"img-fluid\" alt=\"logo\">\n    </div>\n    \n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <!-- Modal Header -->\n          <!--   <div class=\"modal-header\">\n            </div> -->\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <button style=\"color: white;\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Брзи Контакт</h4>\n                <br>\n              <label for=\"vasEmail\">Ваш емаил:</label>\n                  <input class=\"form-control\" type=\"text\" id=\"vasEmail\">\n                  <br>\n                  <label for=\"vasaPoruka\">Ваша Порука:</label>\n              <textarea class=\"form-control\" style=\"resize: none;\" name=\"poruka\" id=\"vasaPoruka\" cols=\"30\" rows=\"10\"></textarea>\n              <br>\n              <button class=\"btn btn-block btn-posalji\">Пошаљи</button>\n              <br>\n            </div>\n            <!-- Modal footer -->\n<!--             <div class=\"modal-footer\">\n            </div> -->\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"col-md-3\">\n      <h6>Блог</h6>\n        <ul>\n            <li><a href=\"javascript:void(0);\">Mashable</a></li>\n            <li><a href=\"javascript:void(0);\">Fast Company</a></li>  \n            <li><a href=\"javascript:void(0);\">TechCrunch</a></li>\n            <li><a href=\"javascript:void(0);\">VentureBeat</a></li>\n        </ul>\n    </div>\n    <div class=\"col-md-3\">\n        <h6>Наши Корисници</h6>\n        <ul>\n            <li><a href=\"javascript:void(0);\">Bureaucrat Vital</a></li>\n            <li><a href=\"javascript:void(0);\">Biro Response</a></li>  \n            <li><a href=\"javascript:void(0);\">Šalter Mentor</a></li>\n            <li><a href=\"javascript:void(0);\">Brainstorm Form Filing</a></li>  \n            <li><a href=\"javascript:void(0);\">Digital Something</a></li>\n            <li><a href=\"javascript:void(0);\">Submit Something</a></li>\n        </ul>\n    </div>\n    <div class=\"col-md-3\">\n        <h6>Правни Оквир</h6>\n        <ul>\n            <li><a href=\"javascript:void(0);\">Закон о Пословању</a></li>\n            <li><a href=\"javascript:void(0);\">Статут Фирме</a></li>\n            <li><a href=\"javascript:void(0);\">Услови Дигиталног Пословања</a></li>  \n        </ul>\n    </div>\n     </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-lg btn-moje btn-block\" data-toggle=\"modal\" data-target=\"#myModal\"><i style=\"font-size:24px\" class=\"fa\">&#xf1d8;</i> Брзи Контакт</button>\n     \n    <!-- PODFUTERFUTER -->\n    <div id=\"poPodFuter\" class=\"row\">\n      <div class=\"col-md-12\">Made for non commercial use</div>\n    </div>\n      <!-- <router-outlet></router-outlet> -->\n</body>"

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[633]);
//# sourceMappingURL=main.bundle.map