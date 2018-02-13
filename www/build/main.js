webpackJsonp([0],{

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(78);

// EXTERNAL MODULE: ./config/env/ci.json
var ci = __webpack_require__(223);
var ci_default = /*#__PURE__*/__webpack_require__.n(ci);

// CONCATENATED MODULE: ./config/app.config.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var app_config_AppConfig = (function () {
    function AppConfig() {
        console.log(ci_default.a);
        this.appName = ci_default.a['appName'];
        this.environment = ci_default.a['environment'];
    }
    AppConfig = __decorate([
        Object(core["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map
// CONCATENATED MODULE: ./src/pages/about/about.ts
var about___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var about___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var about_AboutPage = (function () {
    function AboutPage(appConfig) {
        this.appConfig = appConfig;
        this.appName = this.appConfig.appName;
        this.environment = this.appConfig.environment;
    }
    AboutPage = about___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        about___metadata("design:paramtypes", [app_config_AppConfig])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map
// CONCATENATED MODULE: ./src/pages/contact/contact.ts
var contact___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var contact___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var contact_ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = contact___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        }),
        contact___metadata("design:paramtypes", [ionic_angular["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var home_HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = home___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        home___metadata("design:paramtypes", [ionic_angular["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/tabs/tabs.ts
var tabs___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabs___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tabs_TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = home_HomePage;
        this.tab2Root = about_AboutPage;
        this.tab3Root = contact_ContactPage;
    }
    TabsPage = tabs___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'tabs.html'
        }),
        tabs___metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = app_component___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'app.html'
        }),
        app_component___metadata("design:paramtypes", [ionic_angular["e" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var app_module_AppModule = (function () {
    function AppModule() {
    }
    AppModule = app_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                app_component_MyApp,
                about_AboutPage,
                contact_ContactPage,
                home_HomePage,
                tabs_TabsPage
            ],
            imports: [
                platform_browser["a" /* BrowserModule */],
                ionic_angular["c" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: []
                })
            ],
            bootstrap: [ionic_angular["a" /* IonicApp */]],
            entryComponents: [
                app_component_MyApp,
                about_AboutPage,
                contact_ContactPage,
                home_HomePage,
                tabs_TabsPage
            ],
            providers: [
                app_config_AppConfig,
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(7);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
















var styles_MyApp = [];
var RenderType_MyApp = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 2, "ion-nav", [], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_33" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"] }, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rootPage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MyApp_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(52);

// CONCATENATED MODULE: ./src/pages/about/about.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 

























var styles_AboutPage = [];
var RenderType_AboutPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_AboutPage, data: {} });

function View_AboutPage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n      About\n    "])), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 28, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](15, 0, null, 1, 24, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](16, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](19, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_16" /* ɵdid */](23, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      AppName: "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, 2, 1, "b", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](26, null, ["", ""])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](29, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](30, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_16" /* ɵdid */](34, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      Environment: "])), (_l()(), core["_17" /* ɵeld */](36, 0, null, 2, 1, "b", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](37, null, ["", ""])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_31" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_31" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_31" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_31" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = _co.appName; _ck(_v, 26, 0, currVal_4); var currVal_5 = _co.environment; _ck(_v, 37, 0, currVal_5); }); }
function View_AboutPage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-about", [], null, null, null, View_AboutPage_0, RenderType_AboutPage)), core["_16" /* ɵdid */](1, 49152, null, 0, about_AboutPage, [app_config_AppConfig], null, null)], null, null); }
var AboutPageNgFactory = core["_13" /* ɵccf */]("page-about", about_AboutPage, View_AboutPage_Host_0, {}, {}, []);

//# sourceMappingURL=about.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list-header.js
var list_header = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(31);

// CONCATENATED MODULE: ./src/pages/contact/contact.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 


























var styles_ContactPage = [];
var RenderType_ContactPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_ContactPage, data: {} });

function View_ContactPage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n      Contact\n    "])), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 25, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](15, 0, null, 1, 21, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](16, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, null, 6, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](19, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_16" /* ɵdid */](23, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["Follow us on Twitter"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](26, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](27, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_16" /* ɵdid */](31, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](33, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "ionic"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](34, 147456, [[6, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      @ionicframework\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_5 = "ionic"; _ck(_v, 34, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = core["_31" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_31" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_31" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_31" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = core["_31" /* ɵnov */](_v, 34)._hidden; _ck(_v, 33, 0, currVal_4); }); }
function View_ContactPage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-contact", [], null, null, null, View_ContactPage_0, RenderType_ContactPage)), core["_16" /* ɵdid */](1, 49152, null, 0, contact_ContactPage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var ContactPageNgFactory = core["_13" /* ɵccf */]("page-contact", contact_ContactPage, View_ContactPage_Host_0, {}, {}, []);

//# sourceMappingURL=contact.ngfactory.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 

















var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["Home"])), (_l()(), core["_36" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](12, 0, null, null, 14, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](15, 0, null, 1, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["Welcome to Ionic!"])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](21, 0, null, 1, 4, "p", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    Take a look at the "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["src/pages/"])), (_l()(), core["_36" /* ɵted */](-1, null, [" directory to add or change tabs,\n    update any existing page or create new pages.\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var currVal_0 = core["_31" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_31" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_31" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_31" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_HomePage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.ngfactory.js + 1 modules
var tabs_ngfactory = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.js
var tabs = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.js
var tab = __webpack_require__(73);

// CONCATENATED MODULE: ./src/pages/tabs/tabs.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 

















var styles_TabsPage = [];
var RenderType_TabsPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_TabsPage, data: {} });

function View_TabsPage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 12, "ion-tabs", [], null, null, null, tabs_ngfactory["b" /* View_Tabs_0 */], tabs_ngfactory["a" /* RenderType_Tabs */])), core["_33" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [tabs["a" /* Tabs */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, tabs["a" /* Tabs */], [[2, nav_controller["a" /* NavController */]], [2, view_controller["a" /* ViewController */]], app["a" /* App */], config["a" /* Config */], core["p" /* ElementRef */], platform_platform["a" /* Platform */], core["N" /* Renderer */], deep_linker["a" /* DeepLinker */], keyboard["a" /* Keyboard */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "home"], ["tabTitle", "Home"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](5, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "information-circle"], ["tabTitle", "About"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](8, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](10, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "contacts"], ["tabTitle", "Contact"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](11, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tab1Root; var currVal_3 = "Home"; var currVal_4 = "home"; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _co.tab2Root; var currVal_8 = "About"; var currVal_9 = "information-circle"; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9); var currVal_12 = _co.tab3Root; var currVal_13 = "Contact"; var currVal_14 = "contacts"; _ck(_v, 11, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_31" /* ɵnov */](_v, 5)._tabId; var currVal_1 = core["_31" /* ɵnov */](_v, 5)._btnId; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_5 = core["_31" /* ɵnov */](_v, 8)._tabId; var currVal_6 = core["_31" /* ɵnov */](_v, 8)._btnId; _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_10 = core["_31" /* ɵnov */](_v, 11)._tabId; var currVal_11 = core["_31" /* ɵnov */](_v, 11)._btnId; _ck(_v, 10, 0, currVal_10, currVal_11); }); }
function View_TabsPage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_TabsPage_0, RenderType_TabsPage)), core["_16" /* ɵdid */](1, 49152, null, 0, tabs_TabsPage, [], null, null)], null, null); }
var TabsPageNgFactory = core["_13" /* ɵccf */]("ng-component", tabs_TabsPage, View_TabsPage_Host_0, {}, {}, []);

//# sourceMappingURL=tabs.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(113);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 




















































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_28" /* ɵmod */]([core["_29" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, AboutPageNgFactory, ContactPageNgFactory, HomePageNgFactory, TabsPageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_29" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_27" /* ɵm */], [[3, core["C" /* LOCALE_ID */]]]), core["_29" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_29" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_18" /* ɵf */], []), core["_29" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_24" /* ɵk */], []), core["_29" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_25" /* ɵl */], []), core["_29" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_29" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_29" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_29" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["G" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_29" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_29" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_29" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_29" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_29" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_29" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_29" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_29" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_29" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_29" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_29" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_29" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_29" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_29" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_29" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_29" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["b" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_29" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_29" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_29" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_29" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_29" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_29" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_29" /* ɵmpd */](4608, app_config_AppConfig, app_config_AppConfig, []), core["_29" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_29" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_29" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_29" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_29" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_29" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_29" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_29" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_29" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_29" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_29" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_29" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_29" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [] }, []), core["_29" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_29" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_29" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_29" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_29" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_29" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_29" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_29" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_29" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_29" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_29" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_29" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_29" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_29" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_29" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = {"environment":"CI","appName":"Ionic Test - CI","appId":"com.rostyslav.IonicBuildTestCI"}

/***/ })

},[188]);
//# sourceMappingURL=main.js.map