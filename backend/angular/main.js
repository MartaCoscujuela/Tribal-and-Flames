(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rfa":
/*!***********************************************!*\
  !*** ./src/app/sections/faq/faq.component.ts ***!
  \***********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 2, vars: 0, template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a0) { return { height: a0 }; };
const _c1 = function (a0) { return { "margin-top": a0 }; };
const _c2 = function (a0, a1) { return { "opacity": a0, "top": a1 }; };
const _c3 = function (a0) { return { "top": a0 }; };
const _c4 = function () { return ["/"]; };
class HeaderComponent {
    constructor() {
        //icons
        this.fafacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookSquare"];
        this.fainsta = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.famail = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.fayoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
        this.fauser = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserCircle"];
        this.windowWidth = 0;
    }
    onWindowResize() {
        this.windowWidth = window.innerWidth;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { headerHeight: "headerHeight", linearTransition: "linearTransition", posOpenTitle: "posOpenTitle", posClosedTitle: "posClosedTitle", posOpenLogo: "posOpenLogo", posClosedLogo: "posClosedLogo", posOpenIcons: "posOpenIcons", posClosedIcons: "posClosedIcons" }, decls: 18, vars: 19, consts: [[3, "ngStyle"], [1, "header-bar", 3, "ngStyle"], ["id", "rrss"], [1, "icon-rrss", 3, "icon"], ["id", "user"], ["src", "/assets/img/ico-eng.png", 1, "lang"], [1, "login"], ["src", "/assets/img/ico_user.png", 1, "user-icon"], ["id", "ingresar"], [1, "header-box"], [1, "row"], ["src", "/assets/img/logo-ventall.png", 1, "logo", 3, "ngStyle"], ["routerLinkActive", "router-link-active", 1, "title", 3, "ngStyle", "routerLink"], ["src", "./assets/img/logo.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.headerHeight + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.posOpenIcons + (1 - ctx.linearTransition) * -ctx.posClosedIcons + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fainsta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fafacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fayoutube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.famail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, ctx.linearTransition, ctx.posOpenLogo + (1 - ctx.linearTransition) * -ctx.posClosedLogo + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.posOpenTitle + (1 - ctx.linearTransition) * -ctx.posClosedTitle + "px"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["header[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 200px;\r\n    background: #ddd;\r\n    color:#fff;\r\n    z-index: 1000;\r\n    text-align:center;\r\n    background-color: white;\r\n    background-image: url(\"/assets/img/header_bg.jpg\");\r\n  }\r\n\r\n  .header-bar[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 3em;\r\n  }\r\n\r\n  #rrss[_ngcontent-%COMP%], #user[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .icon-rrss[_ngcontent-%COMP%]{\r\n    padding-top: 4px;\r\n    padding-right: 0.5em;\r\n    font-size: 44px;\r\n    color: white;\r\n    position: relative;\r\n    top: -7px;\r\n  }\r\n\r\n  .lang[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-right: 0.5em;\r\n    display: flex;\r\n  }\r\n\r\n  .break[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n    height: 0;\r\n  }\r\n\r\n  .user-icon[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  #ingresar[_ngcontent-%COMP%]{\r\n    padding-top: 9px;\r\n    font-size: 28px;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: block;\r\n    opacity: 1;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top:50px;\r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: block;\r\n    opacity: 1;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 100px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .hide-logo[_ngcontent-%COMP%]{\r\n    width: 0;\r\n    opacity: 0;\r\n    transition: all 0.7s;\r\n  }\r\n\r\n  @media screen and (max-width: 1200px) {\r\n\r\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n  }\r\n\r\n  .lang[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n  }\r\n\r\n  .user-icon[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    padding: 0 5px;\r\n  }\r\n  .icon-rrss[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    top: 0;\r\n  }\r\n\r\n  #ingresar[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    padding-top: 0;\r\n    padding-left: 5px;\r\n  }\r\n}\r\n\r\n  @media screen and (max-width: 992px) {\r\n\r\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 275px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    width: 140px;\r\n  }\r\n\r\n  .login[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  #ingresar[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n  @media screen and (max-width: 768px) {\r\n.header-bar[_ngcontent-%COMP%]{\r\n  display: none\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtFQUNwRDs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsUUFBUTtJQUNSLFVBQVU7SUFLVixvQkFBb0I7RUFDdEI7O0VBSUY7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLE1BQU07RUFDUjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0FBQ0Y7O0VBR0E7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7RUFHQTtBQUNBO0VBQ0U7QUFDRjtBQUNBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXJfYmcuanBnXCIpO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1iYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAzZW07XHJcbiAgfVxyXG5cclxuICAjcnJzcywgI3VzZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLXJyc3N7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03cHg7XHJcbiAgfVxyXG5cclxuICAubGFuZ3tcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuYnJlYWsge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcblxyXG4gIC51c2VyLWljb257XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG5cclxuICAjaW5ncmVzYXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOjUwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuaGlkZS1sb2dve1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xyXG4gIH1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC50aXRsZSBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ297XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAubGFuZ3tcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItaWNvbntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gIH1cclxuICAuaWNvbi1ycnNze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgI2luZ3Jlc2Fye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAudGl0bGUgaW1nIHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2lue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2luZ3Jlc2Fye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi5oZWFkZXItYmFye1xyXG4gIGRpc3BsYXk6IG5vbmVcclxufVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], linearTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posOpenTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posClosedTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posOpenLogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posClosedLogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posOpenIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posClosedIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\7 - Karmacode Studio\0_PROJECTS\0- Tribal\CODE\TribalAndFlames\tribal-and-flames\src\main.ts */"zUnb");


/***/ }),

/***/ "4UoX":
/*!*************************************************************!*\
  !*** ./src/app/sections/aboutribal/aboutribal.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutribalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutribalComponent", function() { return AboutribalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ "qLfe");
/* harmony import */ var _whatis_whatis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whatis/whatis.component */ "CBK1");
/* harmony import */ var _principles_principles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principles/principles.component */ "mT5Y");
/* harmony import */ var _objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objetivo/objetivo.component */ "XoGz");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interview/interview.component */ "y/ZS");
/* harmony import */ var _cta_cta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cta/cta.component */ "r4u9");








class AboutribalComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutribalComponent.ɵfac = function AboutribalComponent_Factory(t) { return new (t || AboutribalComponent)(); };
AboutribalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutribalComponent, selectors: [["app-aboutribal"]], decls: 6, vars: 0, template: function AboutribalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-whatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-principles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-objetivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cta");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _whatis_whatis_component__WEBPACK_IMPORTED_MODULE_2__["WhatisComponent"], _principles_principles_component__WEBPACK_IMPORTED_MODULE_3__["PrinciplesComponent"], _objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_4__["ObjetivoComponent"], _interview_interview_component__WEBPACK_IMPORTED_MODULE_5__["InterviewComponent"], _cta_cta_component__WEBPACK_IMPORTED_MODULE_6__["CtaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dHJpYmFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutribalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutribal',
                templateUrl: './aboutribal.component.html',
                styleUrls: ['./aboutribal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84FO":
/*!*******************************************************!*\
  !*** ./src/app/sections/courses/courses.component.ts ***!
  \*******************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 2, vars: 0, template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cursos works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AoWn":
/*!**********************************************************************!*\
  !*** ./src/app/sections/home/courses-grid/courses-grid.component.ts ***!
  \**********************************************************************/
/*! exports provided: CoursesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesGridComponent", function() { return CoursesGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["background"];
const _c1 = function (a0) { return { "visible": a0 }; };
class CoursesGridComponent {
    constructor() {
        this.visible = false;
    }
    ngOnInit() {
    }
    onWindowScroll() {
        this.checkIfShowBackground();
    }
    onWindowResize() {
        this.checkIfShowBackground();
    }
    checkIfShowBackground() {
        const rect = this.background.nativeElement.getBoundingClientRect();
        if (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }
}
CoursesGridComponent.ɵfac = function CoursesGridComponent_Factory(t) { return new (t || CoursesGridComponent)(); };
CoursesGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesGridComponent, selectors: [["app-courses-grid"]], viewQuery: function CoursesGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.background = _t.first);
    } }, hostBindings: function CoursesGridComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CoursesGridComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function CoursesGridComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 33, vars: 3, consts: [[1, "courses-container"], [1, "background-images", 3, "ngClass"], ["background", ""], [1, "title"], [1, "row", "grid"], [1, "course-1", "course", "col-md-4"], [1, "course-card"], ["src", "/assets/img/00_home/courses/0.png", "width", "120"], [1, "course-title"], [1, "course-2", "course", "col-md-4"], ["src", "/assets/img/00_home/courses/1.png", "width", "120"], [1, "course-3", "course", "col-md-4"], ["src", "/assets/img/00_home/courses/2.png", "width", "120"]], template: function CoursesGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00BFQU\u00C9 CURSO QUIERES ESTUDIAR ONLINE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CURSO REGULAR SEMANAL T&F\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00DAnete a la T&F Crew con la versi\u00F3n m\u00E1s completa y acad\u00E9mica del m\u00E9todo. Nivel inicial e intermedio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SABER M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "WORKSHOPS SUELTOS T&F\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Entrena con los intensivos o Crazy Combos r\u00E1pidos para mejorar tu flow sin profundizar demasiado en t\u00E9cnica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SABER M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CLASES TRIBAL FUSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Aprende a bailar Tribal Fusion bellydance para enriquecer tu baile con abanicos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SABER M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".courses-container[_ngcontent-%COMP%]{\r\n  background-color: #EDB1A6;\r\n  padding-top: 55px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.background-images[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/courses/bg.jpg\");\r\n  position: absolute;\r\n  top: 50px;\r\n  bottom: 0;\r\n  opacity: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-position: center;\r\n  transition: all 1s;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.background-images.visible[_ngcontent-%COMP%]{\r\n\r\n  top: 0;\r\n  bottom: 0;\r\n  opacity: 1;\r\n  transition: all 1s;\r\n}\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.grid[_ngcontent-%COMP%]{\r\n  max-width: 680px;\r\n  margin: auto;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n.course-card[_ngcontent-%COMP%]{\r\n  width: 185px;\r\n  height: 185px;\r\n  border-radius: 1em;\r\n  border: none;\r\n  margin: auto\r\n}\r\n\r\n\r\n.course-1[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background-color: #FA413E;\r\n}\r\n\r\n\r\n.course-2[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background-color: #00DD92;\r\n}\r\n\r\n\r\n.course-3[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background-color: #8A66B6;\r\n}\r\n\r\n\r\n.course-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n  padding-top: 0.5em;\r\n}\r\n\r\n\r\n.course[_ngcontent-%COMP%]{\r\n  margin:0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.course-title[_ngcontent-%COMP%]{\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: regular;\r\n  color: white;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  margin: 1em 0.1em 0.5em 0.1em;\r\n  height: 134px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  display: block;\r\n  border: none;\r\n  margin-bottom: 2em;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n  .course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    margin: 1em\r\n  }\r\n  .background-images[_ngcontent-%COMP%]{\r\n\r\n    top: 0;\r\n    bottom: 0;\r\n    opacity: 1;\r\n    background-size: cover;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsMkRBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOzs7QUFHQTs7RUFFRSxNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7QUFDRjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWjtFQUNGO0VBQ0E7O0lBRUUsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztBQUVGIiwiZmlsZSI6ImNvdXJzZXMtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREIxQTY7XHJcbiAgcGFkZGluZy10b3A6IDU1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Vze1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nLzAwX2hvbWUvY291cnNlcy9iZy5qcGdcIik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTBweDtcclxuICBib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlcy52aXNpYmxle1xyXG5cclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUgUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5ncmlke1xyXG4gIG1heC13aWR0aDogNjgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY291cnNlLWNhcmR7XHJcbiAgd2lkdGg6IDE4NXB4O1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLmNvdXJzZS0xIC5jb3Vyc2UtY2FyZCwgLmNvdXJzZS0xIGJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE0MTNFO1xyXG59XHJcblxyXG4uY291cnNlLTIgLmNvdXJzZS1jYXJkLCAuY291cnNlLTIgYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEREOTI7XHJcbn1cclxuXHJcbi5jb3Vyc2UtMyAuY291cnNlLWNhcmQsIC5jb3Vyc2UtMyBidXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhBNjZCNjtcclxufVxyXG5cclxuLmNvdXJzZS1jYXJkIGltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG59XHJcbi5jb3Vyc2V7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvdXJzZS10aXRsZXtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogcmVndWxhcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvdXJzZSBwe1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDFlbSAwLjFlbSAwLjVlbSAwLjFlbTtcclxuICBoZWlnaHQ6IDEzNHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb3Vyc2UgcHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMWVtXHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5kLWltYWdlc3tcclxuXHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses-grid',
                templateUrl: './courses-grid.component.html',
                styleUrls: ['./courses-grid.component.css']
            }]
    }], function () { return []; }, { background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['background', { static: true }]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    BACKEND_URL: "http://localhost:3000/api"
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

/***/ "BZmU":
/*!********************************************************!*\
  !*** ./src/app/sections/home/claim/claim.component.ts ***!
  \********************************************************/
/*! exports provided: ClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimComponent", function() { return ClaimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClaimComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClaimComponent.ɵfac = function ClaimComponent_Factory(t) { return new (t || ClaimComponent)(); };
ClaimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClaimComponent, selectors: [["app-claim"]], decls: 5, vars: 0, consts: [[1, "claim"], [1, "accent"]], template: function ClaimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SI TE GRABAS, ETIQU\u00C9TANOS EN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "@TRIBALANDFLAMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " PARA COMPARTIRLO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".claim[_ngcontent-%COMP%]{\r\n  background-color: #8A66B6;\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular';\r\n  text-align: center;\r\n  font-size: 60px;\r\n  padding: 30px 1em;\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .claim[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImNsYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhaW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhBNjZCNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgcGFkZGluZzogMzBweCAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jbGFpbXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-claim',
                templateUrl: './claim.component.html',
                styleUrls: ['./claim.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CBK1":
/*!****************************************************************!*\
  !*** ./src/app/sections/aboutribal/whatis/whatis.component.ts ***!
  \****************************************************************/
/*! exports provided: WhatisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatisComponent", function() { return WhatisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WhatisComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatisComponent.ɵfac = function WhatisComponent_Factory(t) { return new (t || WhatisComponent)(); };
WhatisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatisComponent, selectors: [["app-whatis"]], decls: 48, vars: 0, consts: [[1, "row", "whatis"], [1, "col-md-5", "title"], [1, "col-md-7", "description"], ["href", "#"]], template: function WhatisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFQU\u00C9 ES TRIBAL&FLAMES\u00AE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tribal&Flames\u00AE es la metodolog\u00EDa de danza para el/la malabarista de fuego, el/la flow artist y el/la bailarin/a de tribal fusi\u00F3n bellydance que quiera aprender a bailar con abanicos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ideado y estructurado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Anna de Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " en 2019 en Barcelona y en constante evoluci\u00F3n. Trabajaremos los tres pilares (fire juggling + flow arts y tribal fusion) que nos permitir\u00E1n hacer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "shows \u00E9picos con abanicos de fuego/leds/entreno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Estudiaremos su ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "t\u00E9cnica universal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (mayormente Russian style) y entrenaremos nuestra fluidez a trav\u00E9s de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "nuestro propio lenguaje de combos para improvisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " en tribu (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tribal&Flames\u00AE Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ") o en solo, que te resultar\u00E1 super \u00FAtil para crear shows visualmente potentes y limpios t\u00E9cnicamente al instante (en escenario, videoclips, ferias, en casa o donde sea).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mant\u00E9n los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3 pilares alineados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", estudia las ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "familias de pasos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " con las que hemos estructurado los cursos, su ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "vocabulario y conceptos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " para tener una buena pr\u00E1ctica. Entender la teor\u00EDa y la academia del abanico es igual de importante que practicar, ya que se retroalimentan a la hora de fluir y es b\u00E1sico para hacer un buen ejercicio de flow arts. \u00A1Recomendamos traer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "libreta en clase y tomar apuntes!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Te animamos a conocer nuestros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "9 principios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " para conocer mejor de qu\u00E9 van nuestros cursos y nuestra filosof\u00EDa a la hora de ense\u00F1ar y vivir en tribu. Tambi\u00E9n puedes echar un ojo a nuestro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " para ver nuestro d\u00EDa a d\u00EDa dentro y fuera de la escuela, o ver la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "entrevista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " de 2 minutos que nos hizo Vishuddha.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-family: 'Bebas Neue Regular';\r\n  color: #FA413E;\r\n  font-size: 81px;\r\n  text-align: right;\r\n  float: right;\r\n  max-width: 500px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.whatis[_ngcontent-%COMP%]{\r\n  padding: 72px;\r\n\r\n}\r\n\r\n.whatis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  max-width: 920px;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .whatis[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n\r\n  }\r\n\r\n  .whatis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    float: none;\r\n    margin: 0.5em auto;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7O0VBRXBCO0FBQ0YiLCJmaWxlIjoid2hhdGlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUgaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInO1xyXG4gIGNvbG9yOiAjRkE0MTNFO1xyXG4gIGZvbnQtc2l6ZTogODFweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ud2hhdGlze1xyXG4gIHBhZGRpbmc6IDcycHg7XHJcblxyXG59XHJcblxyXG4ud2hhdGlzIHB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1heC13aWR0aDogOTIwcHg7XHJcblxyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC50aXRsZSBoMntcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC50aXRsZSBoMntcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLndoYXRpc3tcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgfVxyXG5cclxuICAud2hhdGlzIHB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbjogMC41ZW0gYXV0bztcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whatis',
                templateUrl: './whatis.component.html',
                styleUrls: ['./whatis.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.errorMessage = data["message"];
        });
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 1, vars: 1, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.errorMessage, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "DQQk":
/*!************************************************************!*\
  !*** ./src/app/sections/home/contact/contact.component.ts ***!
  \************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 6, vars: 0, consts: [[1, "contact"], ["href", "https://www.instagram.com", 1, "accent"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Y si tienes cualquier duda puedes enviarme un mensaje privado a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " (@tribalandflames) o escribirme a annademas.tribaldance@gmail.com :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%]{\r\n  background-color: #8A66B6;\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: regular;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  max-width: 700px;\r\n  margin: 38px auto 24px auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    padding: 1em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4QTY2QjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5we1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAzOHB4IGF1dG8gMjRweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFjdCBwe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "K4C4":
/*!*************************************************!*\
  !*** ./src/app/sections/crew/crew.component.ts ***!
  \*************************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CrewComponent {
    constructor() { }
    ngOnInit() {
    }
}
CrewComponent.ɵfac = function CrewComponent_Factory(t) { return new (t || CrewComponent)(); };
CrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrewComponent, selectors: [["app-crew"]], decls: 2, vars: 0, template: function CrewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "crew works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crew',
                templateUrl: './crew.component.html',
                styleUrls: ['./crew.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Kz9v":
/*!**************************************************************!*\
  !*** ./src/app/sections/home/parallax/parallax.component.ts ***!
  \**************************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["parallax"];
const _c1 = function (a0) { return { "background-position-y": a0 }; };
class ParallaxComponent {
    constructor() { }
    ngOnInit() {
        this.getOffsetY();
    }
    onWindowScroll() {
        this.getOffsetY();
    }
    onWindowResize() {
        this.getOffsetY();
    }
    getOffsetY() {
        this.height = window.innerHeight;
        const width = window.innerWidth;
        const rect = this.parallax.nativeElement.getBoundingClientRect();
        this.top = rect.top;
        let maxEdge = 220;
        let minEdge = 220;
        if (width >= 1920) {
            maxEdge = 300;
            minEdge = 500;
        }
        else if (width >= 600) {
            maxEdge = 220;
            minEdge = 400;
        }
        else {
            maxEdge = 70;
            minEdge = 150;
        }
        this.offsetY1 = this.mapValues(-maxEdge, minEdge, 0);
        this.offsetY2 = this.mapValues(-maxEdge, minEdge, this.height / 5);
        this.offsetY3 = this.mapValues(-maxEdge, minEdge, this.height / 2.5);
        // new_value = (old_value - old_bottom) / (old_top - old_bottom) * (new_top - new_bottom) + new_bottom
    }
    mapValues(max, min, offset) {
        return (((this.top - offset) - this.height) / -this.height) * (max - min) + min;
    }
}
ParallaxComponent.ɵfac = function ParallaxComponent_Factory(t) { return new (t || ParallaxComponent)(); };
ParallaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParallaxComponent, selectors: [["app-parallax"]], viewQuery: function ParallaxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.parallax = _t.first);
    } }, hostBindings: function ParallaxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ParallaxComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function ParallaxComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 9, consts: [[1, "parallax-bg", "d-flex"], ["parallax", ""], [1, "parallax-img-0"], [1, "img", 3, "ngStyle"], [1, "parallax-img-1"], [1, "parallax-img-2"]], template: function ParallaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.offsetY1 + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.offsetY2 + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.offsetY3 + "px"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".parallax-bg[_ngcontent-%COMP%]{\r\n  height: 420px;\r\n  background: linear-gradient(to top, #e4cab4, #ebd1ba, #f1d7c0, #f8dec7, #ffe5cd);\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  z-index: -5;\r\n  border-color: 5px solid #D73128;\r\n}\r\n\r\n\r\n.parallax-bg[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.parallax-bg[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n\r\n}\r\n\r\n\r\n.parallax-img-0[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/parallax/0.png\");\r\n  background-position-x: 5%;\r\n\r\n}\r\n\r\n\r\n.parallax-img-1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-image: url(\"/assets/img/00_home/parallax/1.png\");\r\n  background-position-x: 50%;\r\n\r\n}\r\n\r\n\r\n.parallax-img-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/parallax/2.png\");\r\n  background-position-x: 95%;\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n\r\n  .parallax-bg[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n  .parallax-bg[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n  .parallax-bg[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n  }\r\n\r\n  .parallax-bg[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{\r\n    background-size: 130%;\r\n  }\r\n\r\n\r\n  .parallax-img-0[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .parallax-img-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .parallax-img-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background-position-x: 50%;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n  .parallax-bg[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0ZBQWdGO0VBQ2hGLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsNEJBQTRCOztBQUU5Qjs7O0FBR0E7RUFDRSwyREFBMkQ7RUFDM0QseUJBQXlCOztBQUUzQjs7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsMEJBQTBCOztBQUU1Qjs7O0FBQ0E7RUFDRSwyREFBMkQ7RUFDM0QsMEJBQTBCOztBQUU1Qjs7O0FBSUE7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7OztBQUVBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOzs7RUFHQTtJQUNFLDBCQUEwQjtFQUM1Qjs7O0FBR0Y7OztBQUVBOztFQUVFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheC1iZ3tcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlNGNhYjQsICNlYmQxYmEsICNmMWQ3YzAsICNmOGRlYzcsICNmZmU1Y2QpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgei1pbmRleDogLTU7XHJcbiAgYm9yZGVyLWNvbG9yOiA1cHggc29saWQgI0Q3MzEyODtcclxufVxyXG5cclxuXHJcbi5wYXJhbGxheC1iZz5kaXZ7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYXJhbGxheC1iZyAuaW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbn1cclxuXHJcblxyXG4ucGFyYWxsYXgtaW1nLTAgZGl2e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nLzAwX2hvbWUvcGFyYWxsYXgvMC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1JTtcclxuXHJcbn1cclxuXHJcbi5wYXJhbGxheC1pbWctMSBkaXYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nLzAwX2hvbWUvcGFyYWxsYXgvMS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcblxyXG59XHJcbi5wYXJhbGxheC1pbWctMiBkaXZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDBfaG9tZS9wYXJhbGxheC8yLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDk1JTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5wYXJhbGxheC1iZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAucGFyYWxsYXgtYmd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC5wYXJhbGxheC1iZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAucGFyYWxsYXgtYmcgLmltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTMwJTtcclxuICB9XHJcblxyXG5cclxuICAucGFyYWxsYXgtaW1nLTAgZGl2LCAucGFyYWxsYXgtaW1nLTIgZGl2LCAgLnBhcmFsbGF4LWltZy0yIGRpdntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cclxuICAucGFyYWxsYXgtYmd7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParallaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parallax',
                templateUrl: './parallax.component.html',
                styleUrls: ['./parallax.component.css']
            }]
    }], function () { return []; }, { parallax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['parallax', { static: true }]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "O45m":
/*!**********************************************************************!*\
  !*** ./src/app/sections/home/image-slider/image-slider.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["myTestDiv"];
const _c1 = function (a0) { return { "background-image": a0 }; };
function ImageSliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, "url(" + slide_r1.img + ")"));
} }
class ImageSliderComponent {
    constructor() {
        this.slides = [
            { img: "/assets/img/00_home/galeria/00.jpg" },
            { img: "/assets/img/00_home/galeria/01.jpg" },
            { img: "/assets/img/00_home/galeria/02.jpg" },
            { img: "/assets/img/00_home/galeria/03.jpg" },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            adaptiveHeight: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        };
    }
    ngOnInit() {
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], viewQuery: function ImageSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, decls: 2, vars: 2, consts: [[1, "carousel", 3, "config"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "img", 3, "ngStyle"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageSliderComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 26vw;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n  .img[_ngcontent-%COMP%]{\r\n    min-height: 400px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOzs7QUFHQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjZ2dztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmltZ3tcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-slider',
                templateUrl: './image-slider.component.html',
                styleUrls: ['./image-slider.component.css']
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myTestDiv']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'tribal-and-flames';
    }
    ngOnInit() {
        /*const customObservable = new Observable( observer => {
    
          let count = 0;
          setInterval(() => {
            observer.next(count);
            count++
          }, 1000);
    
        });*/
        /*  customObservable.subscribe(data => {
          })
      */
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XoGz":
/*!********************************************************************!*\
  !*** ./src/app/sections/aboutribal/objetivo/objetivo.component.ts ***!
  \********************************************************************/
/*! exports provided: ObjetivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivoComponent", function() { return ObjetivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ObjetivoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ObjetivoComponent.ɵfac = function ObjetivoComponent_Factory(t) { return new (t || ObjetivoComponent)(); };
ObjetivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjetivoComponent, selectors: [["app-objetivo"]], decls: 18, vars: 0, consts: [[1, "row"], [1, "col-sm-6", "col-12", "foto"], [1, "col-sm-6", "col-12", "objetivo"]], template: function ObjetivoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00BFPERO CUAL ES NUESTRO OBJETIVO?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pasarlo bien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aprender y dar calidad a la danza y malabares.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Crear una gran comunidad donde todxs sois bienvenidxs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bailar en Tribu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".foto[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/01_about/objetivo/objetivo.jpg\");\r\n  background-size: cover;\r\n  height: 500px;\r\n  background-position: center;\r\n}\r\n\r\n\r\n.objetivo[_ngcontent-%COMP%]{\r\n  background-color: #00DD92;\r\n  color: white;\r\n  display: flex;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  justify-content: space-evenly;\r\n  padding: 2em 1em;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]{\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%]{\r\n  font-family: \"Century Schoolbook\", cursive, serif;\r\n  font-style: italic;\r\n  color: white;\r\n  font-size: 40px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  line-height: 1.1em;\r\n  width: auto;\r\n}\r\n\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n  background: transparent url(/assets/img/01_about/objetivo/tick.png) scroll 0 0 no-repeat;\r\n  content: \"\";\r\n  width: 18px;\r\n  height: 20px;\r\n  position: absolute;\r\n  left: -5px;\r\n  top: 2px;\r\n  background-position: center;\r\n}\r\n\r\n\r\n@media (max-width: 1200px) {\r\n  li[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n\r\n\r\n  .objetivo[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n    left: -12px;\r\n    top: -5px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n    li[_ngcontent-%COMP%]{\r\n      font-size: 20px;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamV0aXZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtRUFBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHdGQUF3RjtFQUN4RixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7OztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBR0E7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYOztBQUVGOzs7QUFFQTtJQUNJO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0FBRUoiLCJmaWxlIjoib2JqZXRpdm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Rve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nLzAxX2Fib3V0L29iamV0aXZvL29iamV0aXZvLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm9iamV0aXZve1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEREOTI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmc6IDJlbSAxZW07XHJcbn1cclxuXHJcblxyXG5oMntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxufVxyXG5cclxudWx7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubGl7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBTY2hvb2xib29rXCIsIGN1cnNpdmUsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zcGFue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxudWwgbGkgc3BhbjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvYXNzZXRzL2ltZy8wMV9hYm91dC9vYmpldGl2by90aWNrLnBuZykgc2Nyb2xsIDAgMCBuby1yZXBlYXQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgbGl7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG5cclxuICAub2JqZXRpdm97XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHVsIGxpIHNwYW46YmVmb3JlIHtcclxuICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgbGl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjetivoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-objetivo',
                templateUrl: './objetivo.component.html',
                styleUrls: ['./objetivo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YMVx":
/*!********************************************************!*\
  !*** ./src/app/sections/home/intro/intro.component.ts ***!
  \********************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vimeo/vimeo.component */ "lV4w");




class IntroComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.name = "home-intro";
        this.lang = "esp";
    }
    ngOnInit() {
        this.getText();
    }
    getText() {
        this.dataService.getText(this.name).subscribe((text) => {
            this.textData = text;
        });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 9, vars: 2, consts: [[1, "row", "intro-container"], [1, "col-md-6", "col-xl-6", "intro-video"], [3, "videoId"], [1, "col-md-6", "col-xl-6", "intro-text"], [3, "innerHTML"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vimeo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A1BIENVENIDX A TRIBAL&FLAMES\u00AE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CONOCE M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", 482704655);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.textData.esp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__["VimeoComponent"]], styles: [".intro-text[_ngcontent-%COMP%]{\r\n    padding: 3em\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    background-color: #FA413E;\r\n    border: none;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%]{\r\n    color: #FA413E;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:hover{\r\n    background-color: #A22E2A;\r\n    border: none;\r\n  }\r\n\r\n  .intro-video[_ngcontent-%COMP%]{\r\n    padding: 0em;\r\n  }\r\n\r\n  .intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    max-width: 550px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  @media screen and (max-width: 1199px) {\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n      font-size: 1.7rem;\r\n    }\r\n    .intro-text[_ngcontent-%COMP%]{\r\n      padding: 0.5em;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 991px) {\r\n\r\n    h2[_ngcontent-%COMP%]{\r\n      font-size: 1.3rem;\r\n    }\r\n  }\r\n\r\n  @media screen and (min-width: 768px) and (max-width: 991px) {\r\n\r\n    .intro-video[_ngcontent-%COMP%]{\r\n      padding-top: 3em;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .intro-text[_ngcontent-%COMP%]{\r\n      padding: 2em;\r\n    }\r\n\r\n    .intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      max-width: none;\r\n    }\r\n\r\n    .intro-container[_ngcontent-%COMP%]{\r\n      flex-direction: column-reverse;\r\n    }\r\n\r\n    .btn[_ngcontent-%COMP%]{\r\n      float: right\r\n    }\r\n\r\n    .intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      font-size: 22px;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtFQUNGOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTs7SUFFRTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGOztFQUdBOztJQUVFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBSUE7O0lBRUU7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsOEJBQThCO0lBQ2hDOztJQUVBO01BQ0U7SUFDRjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0VBRUYiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby10ZXh0e1xyXG4gICAgcGFkZGluZzogM2VtXHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE0MTNFO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaDJ7XHJcbiAgICBjb2xvcjogI0ZBNDEzRTtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EyMkUyQTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pbnRyby12aWRlb3tcclxuICAgIHBhZGRpbmc6IDBlbTtcclxuICB9XHJcblxyXG4gIC5pbnRyby10ZXh0IHB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG4gICAgLmludHJvLXRleHR7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cclxuICAgIC5pbnRyby12aWRlb3tcclxuICAgICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuaW50cm8tdGV4dHtcclxuICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRyby10ZXh0IHB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW50cm8tY29udGFpbmVye1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgZmxvYXQ6IHJpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLmludHJvLXRleHQgcHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _sections_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/home/image-slider/image-slider.component */ "O45m");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _sections_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/home/home.component */ "ucao");
/* harmony import */ var _sections_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/aboutribal/aboutribal.component */ "4UoX");
/* harmony import */ var _sections_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/courses/courses.component */ "84FO");
/* harmony import */ var _sections_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/aboutanna/aboutanna.component */ "cVuj");
/* harmony import */ var _sections_crew_crew_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/crew/crew.component */ "K4C4");
/* harmony import */ var _sections_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/discounts/discounts.component */ "gM0x");
/* harmony import */ var _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/faq/faq.component */ "+rfa");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/menu/menu.component */ "jM2g");
/* harmony import */ var _sections_shows_shows_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/shows/shows.component */ "sd+p");
/* harmony import */ var _sections_courses_course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sections/courses/course/course.component */ "nnci");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vimeo/vimeo.component */ "lV4w");
/* harmony import */ var _sections_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sections/home/parallax/parallax.component */ "Kz9v");
/* harmony import */ var _sections_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sections/home/statements/statements.component */ "vrb+");
/* harmony import */ var _sections_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sections/home/courses-grid/courses-grid.component */ "AoWn");
/* harmony import */ var _sections_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sections/home/mosaic/mosaic.component */ "fRjT");
/* harmony import */ var _sections_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sections/home/intro/intro.component */ "YMVx");
/* harmony import */ var _sections_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sections/home/claim/claim.component */ "BZmU");
/* harmony import */ var _sections_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sections/home/instagram/instagram.component */ "oLrD");
/* harmony import */ var _sections_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sections/home/contact/contact.component */ "DQQk");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");
/* harmony import */ var _sections_aboutribal_banner_banner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sections/aboutribal/banner/banner.component */ "qLfe");
/* harmony import */ var _sections_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sections/aboutribal/whatis/whatis.component */ "CBK1");
/* harmony import */ var _sections_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sections/aboutribal/principles/principles.component */ "mT5Y");
/* harmony import */ var _sections_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sections/aboutribal/objetivo/objetivo.component */ "XoGz");
/* harmony import */ var _sections_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sections/aboutribal/interview/interview.component */ "y/ZS");
/* harmony import */ var _sections_aboutribal_cta_cta_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sections/aboutribal/cta/cta.component */ "r4u9");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _sections_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_7__["ImageSliderComponent"],
        _sections_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _sections_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_10__["AboutribalComponent"],
        _sections_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"],
        _sections_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_12__["AboutannaComponent"],
        _sections_crew_crew_component__WEBPACK_IMPORTED_MODULE_13__["CrewComponent"],
        _sections_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_14__["DiscountsComponent"],
        _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"],
        _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
        _sections_shows_shows_component__WEBPACK_IMPORTED_MODULE_17__["ShowsComponent"],
        _sections_courses_course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__["LayoutComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"],
        _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_22__["VimeoComponent"],
        _sections_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_23__["ParallaxComponent"],
        _sections_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_24__["StatementsComponent"],
        _sections_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_25__["CoursesGridComponent"],
        _sections_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_26__["MosaicComponent"],
        _sections_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__["IntroComponent"],
        _sections_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_28__["ClaimComponent"],
        _sections_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_29__["InstagramComponent"],
        _sections_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
        _sections_aboutribal_banner_banner_component__WEBPACK_IMPORTED_MODULE_32__["BannerComponent"],
        _sections_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_33__["WhatisComponent"],
        _sections_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_34__["PrinciplesComponent"],
        _sections_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_35__["ObjetivoComponent"],
        _sections_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_36__["InterviewComponent"],
        _sections_aboutribal_cta_cta_component__WEBPACK_IMPORTED_MODULE_37__["CtaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _sections_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_7__["ImageSliderComponent"],
                    _sections_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _sections_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_10__["AboutribalComponent"],
                    _sections_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"],
                    _sections_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_12__["AboutannaComponent"],
                    _sections_crew_crew_component__WEBPACK_IMPORTED_MODULE_13__["CrewComponent"],
                    _sections_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_14__["DiscountsComponent"],
                    _sections_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"],
                    _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                    _sections_shows_shows_component__WEBPACK_IMPORTED_MODULE_17__["ShowsComponent"],
                    _sections_courses_course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__["LayoutComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"],
                    _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_22__["VimeoComponent"],
                    _sections_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_23__["ParallaxComponent"],
                    _sections_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_24__["StatementsComponent"],
                    _sections_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_25__["CoursesGridComponent"],
                    _sections_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_26__["MosaicComponent"],
                    _sections_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__["IntroComponent"],
                    _sections_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_28__["ClaimComponent"],
                    _sections_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_29__["InstagramComponent"],
                    _sections_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
                    _sections_aboutribal_banner_banner_component__WEBPACK_IMPORTED_MODULE_32__["BannerComponent"],
                    _sections_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_33__["WhatisComponent"],
                    _sections_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_34__["PrinciplesComponent"],
                    _sections_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_35__["ObjetivoComponent"],
                    _sections_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_36__["InterviewComponent"],
                    _sections_aboutribal_cta_cta_component__WEBPACK_IMPORTED_MODULE_37__["CtaComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cVuj":
/*!***********************************************************!*\
  !*** ./src/app/sections/aboutanna/aboutanna.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutannaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutannaComponent", function() { return AboutannaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutannaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutannaComponent.ɵfac = function AboutannaComponent_Factory(t) { return new (t || AboutannaComponent)(); };
AboutannaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutannaComponent, selectors: [["app-aboutanna"]], decls: 2, vars: 0, template: function AboutannaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aboutanna works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dGFubmEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutannaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutanna',
                templateUrl: './aboutanna.component.html',
                styleUrls: ['./aboutanna.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fRjT":
/*!**********************************************************!*\
  !*** ./src/app/sections/home/mosaic/mosaic.component.ts ***!
  \**********************************************************/
/*! exports provided: MosaicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicComponent", function() { return MosaicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "hMnm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MosaicComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
class MosaicComponent {
    constructor() {
        this.playing = false;
        this.options = {
            id: 482704655,
            width: 1920,
            responsive: true,
            background: true
        };
        this.videoPlaying = false;
        this.clickedPlay = false;
    }
    ngOnInit() {
        this.player2 = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"]('video2', this.options);
    }
    onWindowScroll() {
        /* if (!this.playing){
           this.player2.play();
           this.playing = true;
         }*/
    }
    onClick() {
        /*
            this.player.getPaused().then(paused => {
              if (paused){
                this.clickedPlay = true;
                this.player.play();
              } else {
                this.player.pause();
              }
            }).catch(error =>{
              console.log(error);
            })*/
    }
}
MosaicComponent.ɵfac = function MosaicComponent_Factory(t) { return new (t || MosaicComponent)(); };
MosaicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MosaicComponent, selectors: [["app-mosaic"]], hostBindings: function MosaicComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MosaicComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 43, vars: 1, consts: [[1, "row", "about"], [1, "col-md-6", "anna", "piece"], [1, "button-anna"], [1, "col-md-6", "crew", "piece"], [1, "button-crew"], [1, "shows", "col-12", "piece"], ["id", "video2"], [1, "accent"], [1, "button-shows"], [1, "play", 3, "click"], ["src", "/assets/img/shared/play.png", 4, "ngIf"], [1, "fans", "col-12", "piece"], [1, "button-fans"], ["src", "/assets/img/shared/play.png"]], template: function MosaicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NUESTRA PROFESORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Anna de Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONOCER A ANNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "NUESTRXS ALUMNXS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cada Promoci\u00F3n de alumnxs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " forma parte de la T&F Crew.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A1Y t\u00FA tambi\u00E9n puedes!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONOCER A LA CREW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00BFQUIERES VER NUESTROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SHOWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Todos han sido estudiados en clase durante el curso regular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A1T\u00FA tambi\u00E9n puedes formar parte de ellos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "VER M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MosaicComponent_Template_div_click_32_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MosaicComponent_img_33_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00BFNO TIENES ABANICOS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Te contamos como construirte unos de ensayo en tu casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " y te ofrecemos un descuento en los Lotus Fire Fans de LuSolShop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "VER M\u00C1S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoPlaying);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".about[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  height: 28vw;\r\n\r\n}\r\n\r\n.piece[_ngcontent-%COMP%]{\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.anna[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/about/anna.jpg\");\r\n}\r\n\r\n.crew[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/about/crew.jpg\");\r\n\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/about/shows.jpg\");\r\n  height: 28vw;\r\n}\r\n\r\n.fans[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/00_home/about/fans.jpg\");\r\n  height: 36vw;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', cursive;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\r\n  font-size: 52px;\r\n  text-align: right;\r\n  line-height: 0.5em;\r\n  margin-bottom: 0;\r\n  margin-right: 40px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-family: \"Century Schoolbook\", cursive, serif;\r\n  font-style: italic;\r\n  color: white;\r\n  text-align: right;\r\n  font-size: 20px;\r\n  padding-top: 5px;\r\n  margin-right: 40px;\r\n  position: relative;\r\n  right: 0;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  max-width: 240px;\r\n  display: inline-block;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n  font-size: 71px;\r\n  margin-bottom: 0;\r\n  line-height: 0.9em;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.fans[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-content: center;\r\n  flex-direction: column;\r\n  padding-top: 2em;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'Rubik', sans-serif;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: white;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  background-color: #FA413E;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  background-color: #A22E2A;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left:0;\r\n  right: 0;\r\n  margin:auto;\r\n  bottom:30px\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 170px;\r\n  margin: 2em auto 0 auto;\r\n}\r\n\r\n.fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-top: 0em;\r\n}\r\n\r\n#video2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3vw;\r\n  right: 3vw;\r\n  height: 12%;\r\n\r\n}\r\n\r\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n@media screen and (max-width: 1600px) {\r\n .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    margin-top: 15px;\r\n\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .shows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 1em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    height: 56.2vw;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n  .shows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    padding-top: 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%]{\r\n    text-shadow: 0px 0px 8px rgba(0, 0, 0, 1),  0px 0px 8px rgba(0, 0, 0, 1),  0px 0px 8px rgba(0, 0, 0, 1),  0px 0px 8px rgba(0, 0, 0, 1),  0px 0px 8px rgba(0, 0, 0, 1);\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n      text-shadow: 0px 0px 8px rgba(0, 0, 0, 1),  0px 0px 8px rgba(0, 0, 0, 1);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 123px;\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 10px\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc2FpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLDJEQUEyRDs7QUFFN0Q7O0FBR0E7RUFDRSw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkOztBQUdBO0VBQ0UsMkRBQTJEO0VBQzNELFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXOztBQUViOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFJQTtDQUNDO0lBQ0csZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0E7RUFDRTtNQUNJLGVBQWU7SUFDakI7O0FBRUo7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxS0FBcUs7SUFDcks7O0lBRUE7TUFDRSx3RUFBd0U7SUFDMUU7QUFDSjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtFQUNGOzs7QUFHRiIsImZpbGUiOiJtb3NhaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCBkaXZ7XHJcbiAgaGVpZ2h0OiAyOHZ3O1xyXG5cclxufVxyXG5cclxuLnBpZWNle1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFubmF7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDBfaG9tZS9hYm91dC9hbm5hLmpwZ1wiKTtcclxufVxyXG5cclxuLmNyZXd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDBfaG9tZS9hYm91dC9jcmV3LmpwZ1wiKTtcclxuXHJcbn1cclxuXHJcblxyXG4uc2hvd3N7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDBfaG9tZS9hYm91dC9zaG93cy5qcGdcIik7XHJcbiAgaGVpZ2h0OiAyOHZ3O1xyXG59XHJcblxyXG5cclxuLmZhbnN7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDBfaG9tZS9hYm91dC9mYW5zLmpwZ1wiKTtcclxuICBoZWlnaHQ6IDM2dnc7XHJcbn1cclxuXHJcbmgye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUgUmVndWxhcicsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5hYm91dCBoMntcclxuXHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYWJvdXQgaDN7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBTY2hvb2xib29rXCIsIGN1cnNpdmUsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuaDMgZGl2e1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2hvd3MgaDIsIC5mYW5zIGgye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDcxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogMC45ZW07XHJcbn1cclxuXHJcbi5zaG93c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmFuc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG59XHJcbi5zaG93cyBwLCAuZmFucyBwe1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNDEzRTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMjJFMkE7XHJcbn1cclxuXHJcbi5hYm91dCBidXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46YXV0bztcclxuICBib3R0b206MzBweFxyXG59XHJcblxyXG4uc2hvd3MgYnV0dG9uLCAuZmFucyBidXR0b257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4uZmFucyBidXR0b257XHJcbiAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcblxyXG4jdmlkZW8ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wbGF5e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDN2dztcclxuICByaWdodDogM3Z3O1xyXG4gIGhlaWdodDogMTIlO1xyXG5cclxufVxyXG5cclxuLnBsYXkgaW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuIC5hYm91dCBoMiwgLnNob3dzIGgyLCAuZmFucyBoMntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG4gIC5hYm91dCBoMywgLnNob3dzIHAsIC5mYW5zIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuYWJvdXQgaDJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5hYm91dCBoM3tcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zaG93cyBidXR0b24sIC5mYW5zIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgLmFib3V0IGgye1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmFib3V0ICBoMiwgLnNob3dzIGgye1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuYWJvdXQgZGl2e1xyXG4gICAgaGVpZ2h0OiA1Ni4ydnc7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5zaG93cyBidXR0b24sIC5mYW5zIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2hvd3MgaDIsIC5zaG93cyBwLCAuZmFucyBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZhbnN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAgMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKSwgIDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMSksICAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAgMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBoMiwgaDN7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAgMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmFib3V0IGgyLCAuc2hvd3MgaDIsIC5mYW5zIGgye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZhbnMgcCwgLnNob3dzIHAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZhbnMgYnV0dG9uLCAuc2hvd3MgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmZhbnMgYnV0dG9uLCAuc2hvd3MgYnV0dG9uLCAuYWJvdXQgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxMHB4XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MosaicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mosaic',
                templateUrl: './mosaic.component.html',
                styleUrls: ['./mosaic.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll"]
        }] }); })();


/***/ }),

/***/ "gM0x":
/*!***********************************************************!*\
  !*** ./src/app/sections/discounts/discounts.component.ts ***!
  \***********************************************************/
/*! exports provided: DiscountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsComponent", function() { return DiscountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DiscountsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiscountsComponent.ɵfac = function DiscountsComponent_Factory(t) { return new (t || DiscountsComponent)(); };
DiscountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountsComponent, selectors: [["app-discounts"]], decls: 2, vars: 0, template: function DiscountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "discounts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3VudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discounts',
                templateUrl: './discounts.component.html',
                styleUrls: ['./discounts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jM2g":
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { top: a0 }; };
const _c1 = function (a0) { return { "solid-background": a0 }; };
const _c2 = function (a0) { return { "hamburger--opened": a0 }; };
const _c3 = function (a0) { return { "hidden": a0 }; };
const _c4 = function () { return ["/about"]; };
const _c5 = function () { return { exact: true }; };
const _c6 = function () { return ["/cursos"]; };
const _c7 = function () { return ["/annademas"]; };
const _c8 = function () { return ["/crew"]; };
const _c9 = function () { return ["/shows"]; };
const _c10 = function () { return ["/descuentos"]; };
const _c11 = function () { return ["/faq"]; };
class MenuComponent {
    constructor(router) {
        this.router = router;
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
        this.router.events.subscribe((val) => {
            this.isMenuCollapsed = true;
        });
    }
    onToggleHamburger() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { menuPos: "menuPos", solidBackground: "solidBackground" }, decls: 22, vars: 40, consts: [[1, "menu-container", 3, "ngStyle", "ngClass"], [1, "hamburger", "d-block", "d-md-none", 3, "ngClass", "click"], [1, "hamburger__slices"], [1, "hamburger__slice", "hamburger--slice-1"], [1, "hamburger__slice", "hamburger--slice-2"], [1, "hamburger__slice", "hamburger--slice-3"], [1, "hamburger__slice", "hamburger--slice-4"], [1, "menu", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_1_listener() { return ctx.onToggleHamburger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SOBRE T&F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CURSOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SOBRE ANNA DE MAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TGF \u00A9 CREW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SHOWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DESCUENTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "F.A.Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.menuPos + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.solidBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, !ctx.isMenuCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, ctx.isMenuCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c6))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c7))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c8))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c9))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c10))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c11))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c5));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".menu-container[_ngcontent-%COMP%]{\r\n  background: rgb(0,0,0);\r\n  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);\r\n  height: 200px;\r\n  position: fixed;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  text-align: center;\r\n  transition-property: height, background;\r\n  transition-duration:0.3s;\r\n}\r\n\r\n.solid-background[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  transition-property: height;\r\n  transition-duration:0.3s;\r\n}\r\n\r\n.solid-background[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{\r\n  background: black;\r\n  transition-duration:0.3s;\r\n  transition-property: height;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n  background: transparent;\r\n  transition-duration:0.3s;\r\n  transition-property: background;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  margin: auto;\r\n  display: block;\r\n  line-height: 1.4;\r\n  font-size: 27px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-family: 'Bebas Neue Regular';\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  vertical-align: middle;\r\n  line-height: 50px;\r\n  color: white;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.active[_ngcontent-%COMP%]{\r\n  color: #7effac;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  margin-top: 500px;\r\n}\r\n\r\n.hamburger[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  margin-left: auto;\r\n  width: 30px;\r\n  height: 24px;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  top:28px;\r\n  right: 20px;\r\n}\r\n\r\n.hamburger__slices[_ngcontent-%COMP%] {\r\nposition: relative;\r\nwidth: 100%;\r\nheight: 24px;\r\n}\r\n\r\n.hamburger__slices[_ngcontent-%COMP%]   .hamburger__slice[_ngcontent-%COMP%] {\r\nbackground-color: white;\r\nposition: absolute;\r\nwidth: 100%;\r\nheight: 2px;\r\ntransition: all 0.2s ease-in-out;\r\n}\r\n\r\n.hamburger--slice-2[_ngcontent-%COMP%] {\r\ntop: 11px;\r\n}\r\n\r\n.hamburger--slice-3[_ngcontent-%COMP%] {\r\ntop: 11px;\r\n}\r\n\r\n.hamburger--slice-4[_ngcontent-%COMP%] {\r\ntop: 22px;\r\n}\r\n\r\n.hamburger--opened[_ngcontent-%COMP%]   .hamburger--slice-1[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.hamburger--opened[_ngcontent-%COMP%]   .hamburger--slice-4[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.hamburger--opened[_ngcontent-%COMP%]   .hamburger--slice-2[_ngcontent-%COMP%] {\r\ntransform: rotate(-45deg);\r\n}\r\n\r\n.hamburger--opened[_ngcontent-%COMP%]   .hamburger--slice-3[_ngcontent-%COMP%] {\r\ntransform: rotate(45deg);\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .menu[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n  .li[_ngcontent-%COMP%]{\r\n    line-height: 40px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width:992px) {\r\n  .menu[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]{\r\n    line-height: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n  \r\n\r\n\r\n  li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    line-height: 60px;\r\n    font-size: 25px;\r\n    border-bottom: 1px solid #333;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    height: 450px;\r\n    transition: all 0.3s;\r\n    padding: 0.3em 1em;\r\n\r\n  }\r\n\r\n  .menu.hidden[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    height: 0px;\r\n    transition: all 0.3s;\r\n  }\r\n  .menu-container[_ngcontent-%COMP%]{\r\n    background: none;\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5RUFBeUU7RUFDekUsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBR3pCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxXQUFXO0FBR1gsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUdBO0FBR0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBR0Esd0JBQXdCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFOztJQUVFOzs7RUFHRjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7QUFFRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgYmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbn1cclxuXHJcbi5zb2xpZC1iYWNrZ3JvdW5ke1xyXG4gIGhlaWdodDogNTBweDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzO1xyXG59XHJcblxyXG4uc29saWQtYmFja2dyb3VuZCAubWVudXtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0O1xyXG59XHJcblxyXG4ubWVudXtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuXHJcbi5tZW51IGxpe1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJztcclxufVxyXG5cclxubGl7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBjb2xvcjogIzdlZmZhYztcclxufVxyXG5cclxubmF2e1xyXG4gIG1hcmdpbi10b3A6IDUwMHB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvcDoyOHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmhhbWJ1cmdlcl9fc2xpY2VzIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyX19zbGljZXMgLmhhbWJ1cmdlcl9fc2xpY2Uge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAycHg7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbi1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG50cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci0tc2xpY2UtMiB7XHJcbnRvcDogMTFweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci0tc2xpY2UtMyB7XHJcbnRvcDogMTFweDtcclxufVxyXG4uaGFtYnVyZ2VyLS1zbGljZS00IHtcclxudG9wOiAyMnB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLS1vcGVuZWQgLmhhbWJ1cmdlci0tc2xpY2UtMSB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItLW9wZW5lZCAuaGFtYnVyZ2VyLS1zbGljZS00IHtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxuXHJcbi5oYW1idXJnZXItLW9wZW5lZCAuaGFtYnVyZ2VyLS1zbGljZS0yIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci0tb3BlbmVkIC5oYW1idXJnZXItLXNsaWNlLTMge1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWVudXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmxpe1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgLm1lbnV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBsaXtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLyoubWVudS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbiAgfSovXHJcblxyXG5cclxuICBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICB9XHJcblxyXG4gIC5tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAxZW07XHJcblxyXG4gIH1cclxuXHJcbiAgLm1lbnUuaGlkZGVue1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIC5tZW51LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { menuPos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], solidBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "k1FV":
/*!*********************************************!*\
  !*** ./src/app/data-bridge/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKEND_URL;
class DataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.lang = "esp";
        this.langListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    changeLang() {
        if (this.lang == "esp") {
            this.lang = "eng";
        }
        else {
            this.lang = "esp";
        }
        return this.langListener.next(this.lang);
    }
    getLangListener() {
        return this.langListener;
    }
    postText(name, esp, eng) {
        const textData = { name, esp, eng };
        return this.http.post(BACKEND_URL + "/site/text", textData);
    }
    getText(name) {
        return this.http.get(BACKEND_URL + "/site/text/" + name);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "kVkw":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [["src", "./assets/img/logo.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n  height: 160px;\r\n  background-image: url(\"/assets/img/header_bg.jpg\");\r\n  background-size: cover;\r\n  text-align: center;\r\n  line-height: 160px\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n\r\n  footer[_ngcontent-%COMP%]{\r\n    height: 120px; \r\n    line-height: 120px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n\r\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 275px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]{\r\n    height: 80px; \r\n    line-height: 80px;  \r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCO0FBQ0Y7OztBQUdBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7OztBQUVBOztFQUVFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlcl9iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE2MHB4XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICBsaW5lLWhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIGZvb3RlciBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHJcbiAgZm9vdGVyIGltZyB7XHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7ICBcclxuICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lV4w":
/*!******************************************!*\
  !*** ./src/app/vimeo/vimeo.component.ts ***!
  \******************************************/
/*! exports provided: VimeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VimeoComponent", function() { return VimeoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "hMnm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VimeoComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
class VimeoComponent {
    constructor() {
        this.videoPlaying = false;
        this.clickedPlay = false;
        this.options = {
            id: 0,
            width: 960,
            loop: false,
            controls: false,
            responsive: true,
            autoplay: true,
            preload: true
        };
    }
    ngOnInit() {
        this.options.id = this.videoId;
        this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"]('video', this.options);
        this.player.on('ended', () => {
            this.videoPlaying = false;
        });
        this.player.on('play', () => {
            if (!this.clickedPlay) {
                this.player.pause();
            }
            else {
                this.videoPlaying = true;
            }
        });
        this.player.on('pause', () => {
            this.videoPlaying = false;
        });
    }
    onClick() {
        this.player.getPaused().then(paused => {
            if (paused) {
                this.clickedPlay = true;
                this.player.play();
            }
            else {
                this.player.pause();
            }
        }).catch(error => {
            console.log(error);
        });
    }
}
VimeoComponent.ɵfac = function VimeoComponent_Factory(t) { return new (t || VimeoComponent)(); };
VimeoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VimeoComponent, selectors: [["app-vimeo"]], inputs: { videoId: "videoId" }, decls: 4, vars: 1, consts: [[1, "wrapper"], ["id", "video"], [1, "play", 3, "click"], ["src", "/assets/img/shared/play.png", 4, "ngIf"], ["src", "/assets/img/shared/play.png"]], template: function VimeoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VimeoComponent_Template_div_click_2_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VimeoComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoPlaying);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  height: 12%;\r\n  width: auto;\r\n  left: 47%;\r\n  top: 44%;\r\n}\r\n\r\n.video[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpbWVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ2aW1lby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGF5e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucGxheSBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGxlZnQ6IDQ3JTtcclxuICB0b3A6IDQ0JTtcclxufVxyXG5cclxuLnZpZGVve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VimeoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vimeo',
                templateUrl: './vimeo.component.html',
                styleUrls: ['./vimeo.component.css']
            }]
    }], function () { return []; }, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mT5Y":
/*!************************************************************************!*\
  !*** ./src/app/sections/aboutribal/principles/principles.component.ts ***!
  \************************************************************************/
/*! exports provided: PrinciplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinciplesComponent", function() { return PrinciplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrinciplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrinciplesComponent.ɵfac = function PrinciplesComponent_Factory(t) { return new (t || PrinciplesComponent)(); };
PrinciplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrinciplesComponent, selectors: [["app-principles"]], decls: 36, vars: 0, consts: [[1, "principles"], [1, "title-outside"], [1, "row", "row-cols-md-3", "row-cols-2", "row-cols-lg-5", "principles-grid"], [1, "col", "title-grid"], [1, "col"], [1, "principle"], ["src", "/assets/img/01_about/principles/0.jpg"], [1, "transcription"]], template: function PrinciplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NUESTROS PRINCIPIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NUESTROS PRINCIPIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Nuestros 3 pilares fundamentales para aprender este formato de danza: \u2022 Malabares con abanicos \u2022 Flow arts con abanicos \u2022 Tribal Fusion bellydance\u2022 \uD83D\uDD25 S\u00ED! Malabarismo y flow arts no son exactamente lo mismo. Puedes saber much\u00EDsimos trucos ymalabares pero no saber fluir con ellos yel abanico. Lo estudiaremos en clase. Y tambi\u00E9n practicaremos algunos pasos del Tribal Fusion adaptados a los abanicos y/o como embellezadores de nuestra coreograf\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".principles[_ngcontent-%COMP%]{\r\n  background-color: #8A66B6;\r\n  padding: 80px 0;\r\n}\r\n\r\n.principles-grid[_ngcontent-%COMP%]{\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  padding: 0;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0.5em 0;\r\n  text-align: center;\r\n}\r\n\r\n.principle[_ngcontent-%COMP%], .principle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 223px;\r\n  height: 223px;\r\n  position: relative;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n  margin: auto;\r\n}\r\n\r\n.principle[_ngcontent-%COMP%]:hover::before {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 223px solid #00D48C;\r\n  border-left: 223px solid transparent;\r\n  left: 10px;\r\n  top: -10px;\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.title-grid[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 64px;\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n}\r\n\r\n.title-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 64px;\r\n  text-align: left;\r\n  width: 223px;\r\n}\r\n\r\n.transcription[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  max-width: 900px;\r\n  margin: auto;\r\n  margin-top: 30px;\r\n  padding: 0 0.2em;\r\n}\r\n\r\n.title-outside[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .principle[_ngcontent-%COMP%], .principle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\r\n    height: 180px;\r\n    width: 180px;\r\n  }\r\n\r\n  .principle[_ngcontent-%COMP%]:hover::before {\r\n    border-top: 180px solid #00D48C;\r\n    border-left: 180px solid transparent;\r\n  }\r\n  .title-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n    font-size: 55px;\r\n\r\n  }\r\n\r\n  .title-outside[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .principles-grid[_ngcontent-%COMP%]{\r\n    max-width: 700px;\r\n  }\r\n\r\n  .principle[_ngcontent-%COMP%], .principle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 223px;\r\n    height: 223px;\r\n  }\r\n\r\n  .principle[_ngcontent-%COMP%]:hover::before {\r\n    border-top: 223px solid  #00D48C;\r\n    border-left: 223px solid transparent;\r\n  }\r\n\r\n  .title-grid[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .title-outside[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .principles-grid[_ngcontent-%COMP%]{\r\n    max-width: 500px;\r\n  }\r\n\r\n  .title-grid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  }\r\n\r\n  .title-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: 223px;\r\n  }\r\n\r\n  .title-outside[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .principle[_ngcontent-%COMP%], .principle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n\r\n  .principle[_ngcontent-%COMP%]:hover::before {\r\n    border-top: 180px solid  #00D48C;\r\n    border-left: 180px solid transparent;\r\n  }\r\n\r\n  .title-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n    font-size: 55px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n\r\n  .principle[_ngcontent-%COMP%], .principle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n\r\n\r\n  .principle[_ngcontent-%COMP%]:hover::before {\r\n    border-top: 150px solid  #00D48C;\r\n    border-left: 150px solid transparent;\r\n  }\r\n\r\n  .title-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    font-size: 45px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRjs7QUFDQTs7RUFFRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoicHJpbmNpcGxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBsZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhBNjZCNjtcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbn1cclxuXHJcbi5wcmluY2lwbGVzLWdyaWR7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpbmNpcGxlLCAucHJpbmNpcGxlIGltZ3tcclxuICB3aWR0aDogMjIzcHg7XHJcbiAgaGVpZ2h0OiAyMjNweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJpbmNpcGxlOmhvdmVyOjpiZWZvcmUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAyMjNweCBzb2xpZCAjMDBENDhDO1xyXG4gIGJvcmRlci1sZWZ0OiAyMjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRpdGxlLWdyaWR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMntcclxuICBmb250LXNpemU6IDY0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdGxlLWdyaWQgaDJ7XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDIyM3B4O1xyXG59XHJcblxyXG4udHJhbnNjcmlwdGlvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAwLjJlbTtcclxufVxyXG5cclxuLnRpdGxlLW91dHNpZGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5wcmluY2lwbGUsIC5wcmluY2lwbGUgaW1ne1xyXG5cclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbmNpcGxlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcDogMTgwcHggc29saWQgIzAwRDQ4QztcclxuICAgIGJvcmRlci1sZWZ0OiAxODBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRpdGxlLWdyaWQgaDJ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnRpdGxlLW91dHNpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnByaW5jaXBsZXMtZ3JpZHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbmNpcGxlLCAucHJpbmNpcGxlIGltZ3tcclxuICAgIHdpZHRoOiAyMjNweDtcclxuICAgIGhlaWdodDogMjIzcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbmNpcGxlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcDogMjIzcHggc29saWQgICMwMEQ0OEM7XHJcbiAgICBib3JkZXItbGVmdDogMjIzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtZ3JpZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtb3V0c2lkZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcmluY2lwbGVzLWdyaWR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWdyaWQgaDJ7XHJcbiAgICB3aWR0aDogMjIzcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtb3V0c2lkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAucHJpbmNpcGxlLCAucHJpbmNpcGxlIGltZ3tcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG5cclxuICAucHJpbmNpcGxlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcDogMTgwcHggc29saWQgICMwMEQ0OEM7XHJcbiAgICBib3JkZXItbGVmdDogMTgwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtZ3JpZCBoMntcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblxyXG4gIC5wcmluY2lwbGUsIC5wcmluY2lwbGUgaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG5cclxuICAucHJpbmNpcGxlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcDogMTUwcHggc29saWQgICMwMEQ0OEM7XHJcbiAgICBib3JkZXItbGVmdDogMTUwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtZ3JpZCBoMntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrinciplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-principles',
                templateUrl: './principles.component.html',
                styleUrls: ['./principles.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nnci":
/*!*************************************************************!*\
  !*** ./src/app/sections/courses/course/course.component.ts ***!
  \*************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CourseComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params["id"]);
        });
        this.route.fragment.subscribe((fragment) => {
            console.log(fragment);
        });
    }
    ngOnDestroy() {
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 2, vars: 0, template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "course works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styleUrls: ['./course.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "oLrD":
/*!****************************************************************!*\
  !*** ./src/app/sections/home/instagram/instagram.component.ts ***!
  \****************************************************************/
/*! exports provided: InstagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramComponent", function() { return InstagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InstagramComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstagramComponent.ɵfac = function InstagramComponent_Factory(t) { return new (t || InstagramComponent)(); };
InstagramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstagramComponent, selectors: [["app-instagram"]], decls: 13, vars: 0, consts: [[1, "instagram", "row"], [1, "col-lg-2", "col-4"], ["src", "/assets/img/00_home/insta/0.jpg", "width", "100%", "height", "auto"], ["src", "/assets/img/00_home/insta/1.jpg", "width", "100%", "height", "auto"], ["src", "/assets/img/00_home/insta/2.jpg", "width", "100%", "height", "auto"], ["src", "/assets/img/00_home/insta/3.jpg", "width", "100%", "height", "auto"], ["src", "/assets/img/00_home/insta/4.jpg", "width", "100%", "height", "auto"], ["src", "/assets/img/00_home/insta/5.jpg", "width", "100%", "height", "auto"]], template: function InstagramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".instagram[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6Imluc3RhZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhZ3JhbSBkaXZ7XHJcbiAgcGFkZGluZzogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstagramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instagram',
                templateUrl: './instagram.component.html',
                styleUrls: ['./instagram.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qLfe":
/*!****************************************************************!*\
  !*** ./src/app/sections/aboutribal/banner/banner.component.ts ***!
  \****************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 1, vars: 0, consts: [[1, "banner"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".banner[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/01_about/banner.png\");\r\n  width: 100%;\r\n  height: 26vw;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n  \r\n  \r\n  @media screen and (max-width: 992px) {\r\n    .banner[_ngcontent-%COMP%]{\r\n      min-height: 400px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0RBQXdEO0VBQ3hELFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7O0VBR0U7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy8wMV9hYm91dC9iYW5uZXIucG5nXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjZ2dztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuYmFubmVye1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "r4u9":
/*!**********************************************************!*\
  !*** ./src/app/sections/aboutribal/cta/cta.component.ts ***!
  \**********************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CtaComponent {
    constructor() { }
    ngOnInit() {
    }
}
CtaComponent.ɵfac = function CtaComponent_Factory(t) { return new (t || CtaComponent)(); };
CtaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtaComponent, selectors: [["app-cta"]], decls: 10, vars: 0, consts: [[1, "cta"], [1, "buttons"], ["href", "/"]], template: function CtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VER LOS CURSOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PRUEBA UNA CLASE GRATUITA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Volver a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cta[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  padding: 50px 1em 30px 1em;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  background-color: #FA413E;\r\n  margin: 0 1em;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n  font-family: 'Rubik', sans-serif;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZCIsImZpbGUiOiJjdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdGF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNTBweCAxZW0gMzBweCAxZW07XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE0MTNFO1xyXG4gIG1hcmdpbjogMCAxZW07XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmF7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cta',
                templateUrl: './cta.component.html',
                styleUrls: ['./cta.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sd+p":
/*!***************************************************!*\
  !*** ./src/app/sections/shows/shows.component.ts ***!
  \***************************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShowsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowsComponent.ɵfac = function ShowsComponent_Factory(t) { return new (t || ShowsComponent)(); };
ShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsComponent, selectors: [["app-shows"]], decls: 2, vars: 0, template: function ShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shows works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shows',
                templateUrl: './shows.component.html',
                styleUrls: ['./shows.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ucao":
/*!*************************************************!*\
  !*** ./src/app/sections/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "O45m");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "YMVx");
/* harmony import */ var _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax/parallax.component */ "Kz9v");
/* harmony import */ var _statements_statements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statements/statements.component */ "vrb+");
/* harmony import */ var _courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-grid/courses-grid.component */ "AoWn");
/* harmony import */ var _mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mosaic/mosaic.component */ "fRjT");
/* harmony import */ var _claim_claim_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./claim/claim.component */ "BZmU");
/* harmony import */ var _instagram_instagram_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instagram/instagram.component */ "oLrD");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "DQQk");











class HomeComponent {
    constructor() {
        //vars to control menu position
        this.contentBottomPos = 450;
        this.contentPos = this.contentBottomPos;
        this.breakpointMoveMenu = 300;
    }
    canDeactivate() {
        console.log("can");
        return confirm('Do you want to discard the changes');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-parallax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-courses-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-mosaic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact");
    } }, directives: [_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__["ImageSliderComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_3__["ParallaxComponent"], _statements_statements_component__WEBPACK_IMPORTED_MODULE_4__["StatementsComponent"], _courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_5__["CoursesGridComponent"], _mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_6__["MosaicComponent"], _claim_claim_component__WEBPACK_IMPORTED_MODULE_7__["ClaimComponent"], _instagram_instagram_component__WEBPACK_IMPORTED_MODULE_8__["InstagramComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "/Lhg");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "jM2g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "kVkw");







const _c0 = function (a0) { return { "margin-top": a0 }; };
class LayoutComponent {
    constructor() {
        //vars to control header anim
        this.maxHeaderHeight = 450;
        this.headerHeight = this.maxHeaderHeight;
        this.breakpointHeaderShrink = 300;
        this.linearTransition = 1;
        this.solidMenuBackground = false;
        this.posOpenTitle = 318;
        this.posClosedTitle = 280;
        this.posOpenLogo = 50;
        this.posClosedLogo = 300;
        this.posOpenIcons = 70;
        this.posClosedIcons = 30;
    }
    ngOnInit() {
        this.resizeHeader();
        this.shrinkHeader();
    }
    onWindowScroll() {
        this.shrinkHeader();
    }
    onWindowResize() {
        this.resizeHeader();
        this.shrinkHeader();
    }
    resizeHeader() {
        const width = window.innerWidth;
        if (width >= 1200) {
            this.maxHeaderHeight = 450;
            this.breakpointHeaderShrink = 300;
            this.posOpenTitle = 318;
            this.posClosedTitle = 280;
            this.posOpenLogo = 50;
            this.posClosedLogo = 300;
            this.posOpenIcons = 70;
            this.posClosedIcons = 30;
        }
        else if (width >= 992) {
            this.maxHeaderHeight = 300;
            this.breakpointHeaderShrink = 200;
            this.posOpenTitle = 200;
            this.posClosedTitle = 180;
            this.posOpenLogo = 20;
            this.posClosedLogo = 300;
            this.posOpenIcons = 30;
            this.posClosedIcons = 7;
        }
        else {
            this.maxHeaderHeight = 250;
            this.breakpointHeaderShrink = 170;
            this.posOpenTitle = 175;
            this.posClosedTitle = 162;
            this.posOpenLogo = 20;
            this.posClosedLogo = 300;
            this.posOpenIcons = 35;
            this.posClosedIcons = 26;
        }
    }
    shrinkHeader() {
        const offset = window.pageYOffset;
        if (offset < this.breakpointHeaderShrink) {
            this.headerHeight = this.maxHeaderHeight - offset;
            this.linearTransition = 1 - (offset / this.breakpointHeaderShrink);
            this.solidMenuBackground = false;
        }
        else {
            this.headerHeight = this.maxHeaderHeight - this.breakpointHeaderShrink;
            this.linearTransition = 0;
            this.solidMenuBackground = true;
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function LayoutComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 13, consts: [[3, "headerHeight", "linearTransition", "posClosedTitle", "posOpenTitle", "posOpenLogo", "posClosedLogo", "posOpenIcons", "posClosedIcons"], [3, "menuPos", "solidBackground"], [3, "ngStyle"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerHeight", ctx.headerHeight)("linearTransition", ctx.linearTransition)("posClosedTitle", ctx.posClosedTitle)("posOpenTitle", ctx.posOpenTitle)("posOpenLogo", ctx.posOpenLogo)("posClosedLogo", ctx.posClosedLogo)("posOpenIcons", ctx.posOpenIcons)("posClosedIcons", ctx.posClosedIcons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuPos", ctx.headerHeight)("solidBackground", ctx.solidMenuBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.maxHeaderHeight + "px"));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@media screen and (max-width: 768px) {\r\n  main[_ngcontent-%COMP%]{\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow: auto;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7RUFDaEI7RUFDQSIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIG1haW57XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sections_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/aboutribal/aboutribal.component */ "4UoX");
/* harmony import */ var _sections_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/courses/courses.component */ "84FO");
/* harmony import */ var _sections_courses_course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/courses/course/course.component */ "nnci");
/* harmony import */ var _sections_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/home/home.component */ "ucao");
/* harmony import */ var _sections_shows_shows_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/shows/shows.component */ "sd+p");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _sections_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/aboutanna/aboutanna.component */ "cVuj");
/* harmony import */ var _sections_crew_crew_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/crew/crew.component */ "K4C4");
/* harmony import */ var _sections_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/discounts/discounts.component */ "gM0x");














const routes = [
    {
        path: "admin", loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule)
    },
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], children: [
            {
                path: '',
                component: _sections_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            },
            {
                path: 'about',
                component: _sections_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_2__["AboutribalComponent"],
            },
            {
                path: 'cursos',
                component: _sections_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"],
            },
            {
                path: 'cursos/:id',
                component: _sections_courses_course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"],
            },
            {
                path: 'annademas',
                component: _sections_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_9__["AboutannaComponent"],
            },
            {
                path: 'crew',
                component: _sections_crew_crew_component__WEBPACK_IMPORTED_MODULE_10__["CrewComponent"],
            },
            {
                path: 'shows',
                component: _sections_shows_shows_component__WEBPACK_IMPORTED_MODULE_6__["ShowsComponent"],
            },
            {
                path: 'descuentos',
                component: _sections_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_11__["DiscountsComponent"],
            },
            {
                path: 'faq',
                component: _sections_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            }
        ]
    },
    {
        path: 'not-found', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], data: { message: "404 Page not found" }
    },
    {
        path: "**", redirectTo: "not-found"
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "ignore",
                anchorScrolling: "enabled",
                scrollPositionRestoration: "enabled",
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: "ignore",
                        anchorScrolling: "enabled",
                        scrollPositionRestoration: "enabled",
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vrb+":
/*!******************************************************************!*\
  !*** ./src/app/sections/home/statements/statements.component.ts ***!
  \******************************************************************/
/*! exports provided: StatementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementsComponent", function() { return StatementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StatementsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const statement_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", statement_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class StatementsComponent {
    constructor() {
        this.statements = [];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            adaptiveHeight: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        };
    }
    ngOnInit() {
        this.statements.push("<span class='accent'>TORCHES UP! </span> AND LET'S BURN!");
        this.statements.push("<span class='accent'>TORCHES UP! </span> AND LET'S BURN!");
    }
}
StatementsComponent.ɵfac = function StatementsComponent_Factory(t) { return new (t || StatementsComponent)(); };
StatementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatementsComponent, selectors: [["app-statements"]], decls: 3, vars: 2, consts: [[1, "statements-container"], [1, "carousel", 3, "config"], ["ngxSlickItem", "", "class", "statement", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "statement", 3, "innerHTML"]], template: function StatementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-slick-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatementsComponent_div_2_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statements);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: [".statements-container[_ngcontent-%COMP%]{\r\n  background-color: #FA413E;\r\n  text-align: center;\r\n  font-size: 68px;\r\n}\r\n.statement[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular';\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.accent[_ngcontent-%COMP%]{\r\n  font-family: inherit;\r\n  color: #00FFA9;\r\n}\r\n@media (max-width: 1200px) {\r\n  .statements-container[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n  }\r\n}\r\n@media (max-width: 900px) {\r\n  .statements-container[_ngcontent-%COMP%]{\r\n    font-size: 55px;\r\n  }\r\n}\r\n@media (max-width: 756px) {\r\n  .statements-container[_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzdGF0ZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGVtZW50cy1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNDEzRTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG59XHJcbi5zdGF0ZW1lbnR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjZW50e1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGNvbG9yOiAjMDBGRkE5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnN0YXRlbWVudHMtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLnN0YXRlbWVudHMtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1NnB4KSB7XHJcbiAgLnN0YXRlbWVudHMtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statements',
                templateUrl: './statements.component.html',
                styleUrls: ['./statements.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y/ZS":
/*!**********************************************************************!*\
  !*** ./src/app/sections/aboutribal/interview/interview.component.ts ***!
  \**********************************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../vimeo/vimeo.component */ "lV4w");



class InterviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterviewComponent.ɵfac = function InterviewComponent_Factory(t) { return new (t || InterviewComponent)(); };
InterviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterviewComponent, selectors: [["app-interview"]], decls: 7, vars: 1, consts: [[1, "interview"], [1, "video"], [3, "videoId"]], template: function InterviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONOCENOS EN 2 MINUTOS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Echa un ojo a esta entrevista que nos hizo Vishuddha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-vimeo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", 482704655);
    } }, directives: [_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_1__["VimeoComponent"]], styles: [".interview[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/img/01_about/interview/bg.jpg\");\r\n  padding: 55px 1em 35px 1em;\r\n  background-size: cover;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  max-width: 900px;\r\n  margin: auto;\r\n  margin-top: 0px;\r\n  padding: 0 0.2em;\r\n\r\n}\r\n\r\n.video[_ngcontent-%COMP%]{\r\n  max-width: 970px;\r\n  margin: 20px auto 0 auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQThEO0VBQzlELDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCOztBQUUxQiIsImZpbGUiOiJpbnRlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcnZpZXd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvMDFfYWJvdXQvaW50ZXJ2aWV3L2JnLmpwZ1wiKTtcclxuICBwYWRkaW5nOiA1NXB4IDFlbSAzNXB4IDFlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oMntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxucHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAwIDAuMmVtO1xyXG5cclxufVxyXG5cclxuLnZpZGVve1xyXG4gIG1heC13aWR0aDogOTcwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interview',
                templateUrl: './interview.component.html',
                styleUrls: ['./interview.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map