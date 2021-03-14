(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
        // icons
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
                styleUrls: ['./header.component.css'],
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
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\7 - Karmacode Studio\0_PROJECTS\0- Tribal\CODE\TribalAndFlames\tribal-and-flames\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0qYa":
/*!***********************************************************************************!*\
  !*** ./src/app/sections/shared-components/bottom-video/bottom-video.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BottomVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomVideoComponent", function() { return BottomVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vimeo/vimeo.component */ "SHqL");




const _c0 = function (a0) { return { "background-image": a0 }; };
class BottomVideoComponent {
    constructor() { }
    ngOnInit() {
        this.backgroundImage = 'url("' + this.background + '")';
    }
}
BottomVideoComponent.ɵfac = function BottomVideoComponent_Factory(t) { return new (t || BottomVideoComponent)(); };
BottomVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomVideoComponent, selectors: [["app-bottom-video"]], inputs: { title: "title", subtitle: "subtitle", videoId: "videoId", background: "background" }, decls: 7, vars: 6, consts: [[1, "bottom-video", 3, "ngStyle"], [1, "video"], [3, "videoId"]], template: function BottomVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-vimeo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.backgroundImage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__["VimeoComponent"]], styles: [".bottom-video[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/01_about/interview/bg.jpg');\r\n  padding: 55px 1em 35px 1em;\r\n  background-size: cover;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  max-width: 900px;\r\n  margin: auto;\r\n  margin-top: 0px;\r\n  padding: 0 0.2em;\r\n}\r\n\r\n.video[_ngcontent-%COMP%] {\r\n  max-width: 970px;\r\n  margin: 20px auto 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQThEO0VBQzlELDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoiYm90dG9tLXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXZpZGVvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nLzAxX2Fib3V0L2ludGVydmlldy9iZy5qcGcnKTtcclxuICBwYWRkaW5nOiA1NXB4IDFlbSAzNXB4IDFlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHBhZGRpbmc6IDAgMC4yZW07XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgbWF4LXdpZHRoOiA5NzBweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-video',
                templateUrl: './bottom-video.component.html',
                styleUrls: ['./bottom-video.component.css'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "0uuF":
/*!*******************************************************************!*\
  !*** ./src/app/sections/pages/aboutribal/aboutribal.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutribalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutribalComponent", function() { return AboutribalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutribalComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutribalComponent.ɵfac = function AboutribalComponent_Factory(t) { return new (t || AboutribalComponent)(); };
AboutribalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutribalComponent, selectors: [["app-aboutribal"]], decls: 6, vars: 0, consts: [["name", "about-banner"]], template: function AboutribalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-whatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-principles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-objetivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cta");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dHJpYmFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutribalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutribal',
                templateUrl: './aboutribal.component.html',
                styleUrls: ['./aboutribal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "12qe":
/*!*******************************************************************!*\
  !*** ./src/app/sections/pages/faq/question/question.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "open": a0 }; };
class QuestionComponent {
    constructor() {
        this.open = false;
    }
    ngOnInit() { }
    onClick(e) {
        console.log('click');
        this.open = !this.open;
    }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["app-question"]], inputs: { question: "question" }, decls: 6, vars: 8, consts: [[1, "card", "row", "d-flex"], [1, "card-body", "col", "col-11"], [1, "card-title", 3, "innerText"], [1, "card-text", 3, "ngClass", "innerHTML"], [1, "col", "col-1"], ["src", "../../../../../assets/img/shared/arrow.png", 1, "arrow", 3, "ngClass", "click"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_img_click_5_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.question.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.open))("innerHTML", ctx.question.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.open));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n    margin: auto;\r\n    position: relative;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    margin: 2em 1em;\r\n  }\r\n  \r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.61);\r\n    border: none;\r\n    overflow: hidden;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .card-title[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .card-text[_ngcontent-%COMP%]{\r\n      max-height: 0;\r\n      overflow: hidden;\r\n      transition: all 1s;\r\n\r\n  }\r\n  \r\n  .card-text.open[_ngcontent-%COMP%]{\r\n      max-height: 400px;\r\n      height: auto;\r\n      transition: max-height 1s;\r\n  }\r\n  \r\n  .arrow[_ngcontent-%COMP%]{\r\n    transform: rotate(90deg);\r\n    -webkit-transform: rotate(90deg);\r\n    cursor: pointer;\r\n    padding: 3em 0 0 0;\r\n    width: 15px;\r\n    float: right;\r\n  }\r\n  \r\n  .arrow.open[_ngcontent-%COMP%]{\r\n    transform: rotate(270deg);\r\n    -webkit-transform: rotate(270deg);   \r\n    padding: 0 0 3em 0;\r\n  }\r\n  \r\n  @media only screen and (max-width: 450px) {\r\n    .card[_ngcontent-%COMP%] {\r\n      width: 280px;\r\n    }\r\n \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBRW5CLGdEQUFnRDtJQUNoRCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFDQTtNQUNJLGlCQUFpQjtFQUNyQjs7RUFFQTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsa0JBQWtCOztFQUV0Qjs7RUFFQTtNQUNJLGlCQUFpQjtNQUNqQixZQUFZO01BQ1oseUJBQXlCO0VBQzdCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkOztFQUVGIiwiZmlsZSI6InF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbjogMmVtIDFlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH0gIFxyXG4gIC5jYXJkLXRpdGxle1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRleHR7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuXHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0Lm9wZW57XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XHJcbiAgfVxyXG5cclxuICAuYXJyb3d7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDNlbSAwIDAgMDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmFycm93Lm9wZW57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyAgIFxyXG4gICAgcGFkZGluZzogMCAwIDNlbSAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcbiBcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './question.component.html',
                styleUrls: ['./question.component.css']
            }]
    }], function () { return []; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "282H":
/*!**********************************************************************!*\
  !*** ./src/app/sections/pages/home/instagram/instagram.component.ts ***!
  \**********************************************************************/
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

/***/ "3/vD":
/*!**********************************************************************!*\
  !*** ./src/app/sections/pages/aboutribal/whatis/whatis.component.ts ***!
  \**********************************************************************/
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

/***/ "3FV8":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/shared-components/text-title/text-title.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TextTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTitleComponent", function() { return TextTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! process */ "8oxB");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_enumColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/enumColors */ "Ims2");
/* harmony import */ var _enums_enumFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/enumFonts */ "6Sw2");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0, a1) { return { "text-align": a0, "color": a1 }; };
class TextTitleComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.textColor = _enums_enumColors__WEBPACK_IMPORTED_MODULE_2__["Colors"].red;
        this.font = _enums_enumFonts__WEBPACK_IMPORTED_MODULE_3__["Fonts"].bebas;
        this.title = { name: '', esp: '', eng: '' };
    }
    ngOnInit() {
        this.getText();
    }
    getText() {
        console.log(process__WEBPACK_IMPORTED_MODULE_1__["title"]);
        this.dataService.getText(this.ref).subscribe((text) => {
            this.title = text;
        });
    }
}
TextTitleComponent.ɵfac = function TextTitleComponent_Factory(t) { return new (t || TextTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
TextTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextTitleComponent, selectors: [["app-text-title"]], inputs: { ref: "ref", alignStyle: "alignStyle", textColor: "textColor", font: "font" }, decls: 1, vars: 6, consts: [[3, "innerHTML", "ngStyle", "ngClass"]], template: function TextTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title.esp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.alignStyle, ctx.textColor))("ngClass", ctx.font);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["h2,   h2 p {\r\n  font-size: 52px;\r\n}\r\n\r\n .bebas,  .century,  .rubik{\r\n  color: red\r\n}\r\n\r\n  h2.bebas p{\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n}\r\n\r\n  h2.rubik p{\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n  h2.century p{\r\n  font-family: 'Century Schoolbook', cursive, serif;\r\n  font-style: italic;\r\n}\r\n\r\n@media screen and (max-width: 1199px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.7rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoidGV4dC10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCBoMixcclxuOjpuZy1kZWVwIGgyIHAge1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmJlYmFzLCA6Om5nLWRlZXAuY2VudHVyeSwgOjpuZy1kZWVwLnJ1Ymlre1xyXG4gIGNvbG9yOiByZWRcclxufVxyXG5cclxuOjpuZy1kZWVwIGgyLmJlYmFzIHB7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgaDIucnViaWsgcHtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIGgyLmNlbnR1cnkgcHtcclxuICBmb250LWZhbWlseTogJ0NlbnR1cnkgU2Nob29sYm9vaycsIGN1cnNpdmUsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-title',
                templateUrl: './text-title.component.html',
                styleUrls: ['./text-title.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], font: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6SaG":
/*!*********************************************************************!*\
  !*** ./src/app/sections/pages/shows/showtime/showtime.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShowtimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowtimeComponent", function() { return ShowtimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sections/enums/enumColors */ "Ims2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");






const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "border-top-color": a0 }; };
class ShowtimeComponent {
    constructor() {
        this.titleColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.textColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.backgroundColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].red;
        this.titleAlign = 'right';
    }
    onWindowResize() {
        this.setTitleAlign();
    }
    ngOnInit() {
        this.setTitleAlign();
    }
    setTitleAlign() {
        if (window.innerWidth > 576) {
            this.titleAlign = 'right';
        }
        else {
            this.titleAlign = 'center';
        }
    }
}
ShowtimeComponent.ɵfac = function ShowtimeComponent_Factory(t) { return new (t || ShowtimeComponent)(); };
ShowtimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowtimeComponent, selectors: [["app-showtime"]], hostBindings: function ShowtimeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ShowtimeComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 9, consts: [[1, "d-flex", "showtime", 3, "ngStyle"], [1, "col-12", "col-sm-5"], ["ref", "shows-title", 3, "alignStyle", "textColor"], [1, "col-12", "col-sm-7"], ["ref", "show-description", "alignStyle", "left", 1, "description", 3, "textColor"], [1, "arrow-down", 3, "ngStyle"]], template: function ShowtimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignStyle", ctx.titleAlign)("textColor", ctx.titleColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.textColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.backgroundColor));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"]], styles: [".showtime[_ngcontent-%COMP%]{\r\n    padding: 3em;\r\n    padding-bottom: 0;\r\n    flex-wrap: wrap;\r\n}\r\n\r\napp-text.description[_ngcontent-%COMP%]{\r\n    max-width: 840px;\r\n    display: block;\r\n}\r\n\r\n.arrow-down[_ngcontent-%COMP%] {\r\n    width: 0; \r\n    height: 0; \r\n    border-left: 50vw solid transparent;\r\n    border-right: 50vw solid transparent;    \r\n    border-top: 80px solid;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3d0aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWiIsImZpbGUiOiJzaG93dGltZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3d0aW1le1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmFwcC10ZXh0LmRlc2NyaXB0aW9ue1xyXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXJyb3ctZG93biB7XHJcbiAgICB3aWR0aDogMDsgXHJcbiAgICBoZWlnaHQ6IDA7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDUwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDUwdncgc29saWQgdHJhbnNwYXJlbnQ7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogODBweCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowtimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showtime',
                templateUrl: './showtime.component.html',
                styleUrls: ['./showtime.component.css']
            }]
    }], function () { return []; }, { onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "6Sw2":
/*!*********************************************!*\
  !*** ./src/app/sections/enums/enumFonts.ts ***!
  \*********************************************/
/*! exports provided: Fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fonts", function() { return Fonts; });
var Fonts;
(function (Fonts) {
    Fonts["bebas"] = "bebas";
    Fonts["rubik"] = "rubik";
    Fonts["century"] = "century";
})(Fonts || (Fonts = {}));


/***/ }),

/***/ "8zX+":
/*!****************************************************************************!*\
  !*** ./src/app/sections/pages/home/courses-grid/courses-grid.component.ts ***!
  \****************************************************************************/
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
    onWindowScroll() {
        this.checkIfShowBackground();
    }
    onWindowResize() {
        this.checkIfShowBackground();
    }
    ngOnInit() { }
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".courses-container[_ngcontent-%COMP%] {\r\n  background-color: #edb1a6;\r\n  padding-top: 55px;\r\n  position: relative;\r\n}\r\n\r\n.background-images[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/00_home/courses/bg.jpg');\r\n  position: absolute;\r\n  top: 50px;\r\n  bottom: 0;\r\n  opacity: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-position: center;\r\n  transition: all 1s;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.background-images.visible[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  bottom: 0;\r\n  opacity: 1;\r\n  transition: all 1s;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  position: relative;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n  max-width: 680px;\r\n  margin: auto;\r\n  justify-content: space-around;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%] {\r\n  width: 185px;\r\n  height: 185px;\r\n  border-radius: 1em;\r\n  border: none;\r\n  margin: auto;\r\n}\r\n\r\n.course-1[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #fa413e;\r\n}\r\n\r\n.course-2[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #00dd92;\r\n}\r\n\r\n.course-3[_ngcontent-%COMP%]   .course-card[_ngcontent-%COMP%], .course-3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #a246e1;\r\n}\r\n\r\n.course-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: auto;\r\n  padding-top: 0.5em;\r\n}\r\n\r\n.course[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.course-title[_ngcontent-%COMP%] {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: regular;\r\n  color: white;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  margin: 1em 0.1em 0.5em 0.1em;\r\n  height: 134px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  border: none;\r\n  margin-bottom: 2em;\r\n  font-size: 18px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    margin: 1em;\r\n  }\r\n  .background-images[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    bottom: 0;\r\n    opacity: 1;\r\n    background-size: cover;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoiY291cnNlcy1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlcy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGIxYTY7XHJcbiAgcGFkZGluZy10b3A6IDU1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvMDBfaG9tZS9jb3Vyc2VzL2JnLmpwZycpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlcy52aXNpYmxlIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNvdXJzZS1jYXJkIHtcclxuICB3aWR0aDogMTg1cHg7XHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvdXJzZS0xIC5jb3Vyc2UtY2FyZCxcclxuLmNvdXJzZS0xIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNDEzZTtcclxufVxyXG5cclxuLmNvdXJzZS0yIC5jb3Vyc2UtY2FyZCxcclxuLmNvdXJzZS0yIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZGQ5MjtcclxufVxyXG5cclxuLmNvdXJzZS0zIC5jb3Vyc2UtY2FyZCxcclxuLmNvdXJzZS0zIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyNDZlMTtcclxufVxyXG5cclxuLmNvdXJzZS1jYXJkIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcclxufVxyXG4uY291cnNlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvdXJzZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb3Vyc2UgcCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMWVtIDAuMWVtIDAuNWVtIDAuMWVtO1xyXG4gIGhlaWdodDogMTM0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb3Vyc2UgcCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICB9XHJcbiAgLmJhY2tncm91bmQtaW1hZ2VzIHtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses-grid',
                templateUrl: './courses-grid.component.html',
                styleUrls: ['./courses-grid.component.css'],
            }]
    }], function () { return []; }, { background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['background', { static: true }]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "A6Wj":
/*!******************************************************************!*\
  !*** ./src/app/sections/pages/home/contact/contact.component.ts ***!
  \******************************************************************/
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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    BACKEND_URL: 'http://localhost:3000/api',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    IMAGES_URL: 'http://localhost:3000/images',
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

/***/ "CGQw":
/*!**************************************************************************!*\
  !*** ./src/app/sections/pages/crew/promociones/promociones.component.ts ***!
  \**************************************************************************/
/*! exports provided: PromocionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesComponent", function() { return PromocionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sections/enums/enumColors */ "Ims2");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");
/* harmony import */ var _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/action-btn/action-btn.component */ "vj6W");






class PromocionesComponent {
    constructor() {
        this.colorTitle = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.colorText = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
    }
    ngOnInit() { }
    onClick(event) { }
}
PromocionesComponent.ɵfac = function PromocionesComponent_Factory(t) { return new (t || PromocionesComponent)(); };
PromocionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromocionesComponent, selectors: [["app-promociones"]], decls: 17, vars: 2, consts: [[1, "d-flex", "promociones"], [1, "container", "p-5"], ["ref", "promo-title", "alignStyle", "center", 3, "textColor"], ["ref", "promo-text", "alignStyle", "center", 3, "textColor"], [1, "row", "promo-pics"], [1, "col", "col-sm-6", "col-md-3"], ["src", "../../../../../assets/img/05_Crew/promos/0.jpg"], ["text", "VER PROMO I", "justifyStyle", "center", 3, "clicked"], ["src", "../../../../../assets/img/05_Crew/promos/1.jpg"], ["text", "VER PROMO II", "justifyStyle", "center", 3, "clicked"], ["src", "../../../../../assets/img/05_Crew/promos/2.jpg"], ["text", "VER PROMO III", "justifyStyle", "center", 3, "clicked"], ["src", "../../../../../assets/img/05_Crew/promos/3.jpg"], ["text", "VER PROMO ONLINE", "justifyStyle", "center", 3, "clicked"]], template: function PromocionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-action-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PromocionesComponent_Template_app_action_btn_clicked_7_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-action-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PromocionesComponent_Template_app_action_btn_clicked_10_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-action-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PromocionesComponent_Template_app_action_btn_clicked_13_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-action-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PromocionesComponent_Template_app_action_btn_clicked_16_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.colorTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.colorText);
    } }, directives: [_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_2__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_3__["TextComponent"], _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_4__["ActionBtnComponent"]], styles: [".promociones[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-image: url('promociones.jpg');\r\n    position: relative;\r\n    padding: 3em;\r\n    flex-wrap: wrap;\r\n    min-height: 500px;\r\n    background-size: cover;\r\n    padding-bottom: 5em;\r\n}\r\n\r\n.promo-pics[_ngcontent-%COMP%]{\r\n    max-width: 1300px;\r\n    margin: auto;\r\n}\r\n\r\n.promo-pics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsd0NBQTBFO0lBQzFFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJwcm9tb2Npb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb21vY2lvbmVze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nLzA1X0NyZXcvcHJvbW9jaW9uZXMuanBnXCIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcclxufVxyXG5cclxuLnByb21vLXBpY3N7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByb21vLXBpY3MgZGl2IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromocionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promociones',
                templateUrl: './promociones.component.html',
                styleUrls: ['./promociones.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DAO0":
/*!*****************************************************!*\
  !*** ./src/app/sections/pages/faq/faq.component.ts ***!
  \*****************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function FaqComponent_app_question_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question", 4);
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", question_r1);
} }
class FaqComponent {
    constructor() {
        this.questions = [
            {
                title: `Suspendisse mollis non tortor et finibus. Nullam iaculis purus vitae interdum rutrum. Orci varius natoque penatibus et magnis dis parturient montes,`,
                text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis tristique, dictum diam tincidunt, condimentum libero. Aliquam rutrum, orci vel rhoncus mattis, ante ligula imperdiet metus, non cursus erat turpis vitae neque. Aliquam a augue eu turpis interdum suscipit. Donec eu mollis turpis. Mauris eros ante, efficitur sed tellus vitae, finibus feugiat odio. Integer hendrerit dignissim magna, ac faucibus felis cursus quis. Nullam eget metus non leo ornare volutpat. Ut pharetra erat vitae magna varius dictum. Nunc nec nisi ut odio feugiat varius. Vivamus tempus, est eu finibus scelerisque, velit neque porta massa, et sagittis urna lacus at felis.</p>

      <p>Cras eget diam rutrum, convallis urna in, pretium eros. Mauris vulputate nibh eget suscipit tristique. In magna nisl, iaculis id sollicitudin eu, commodo luctus nisi. Aliquam viverra, odio eget semper porta, libero ex posuere tortor, sed mollis augue mi vel neque. Vivamus pretium nunc nulla, lacinia tempor nunc finibus at. Donec at fermentum ex, sed laoreet libero. Nam bibendum urna vitae lectus suscipit, id gravida enim malesuada.</p>`
            },
            {
                title: `Nulla facilisi. Maecenas rutrum scelerisque neque, sit amet volutpat erat lacinia a. Nulla magna massa, sagittis sagittis neque a, placerat sodales nulla. Sed gravida feugiat enim id luctus.`,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis tristique, dictum diam tincidunt, condimentum libero. Aliquam rutrum, orci vel rhoncus mattis, ante ligula imperdiet metus, non cursus erat turpis vitae neque. Aliquam a augue eu turpis interdum suscipit. Donec eu mollis turpis. Mauris eros ante, efficitur sed tellus vitae, finibus feugiat odio. Integer hendrerit dignissim magna, ac faucibus felis cursus quis. Nullam eget metus non leo ornare volutpat. Ut pharetra erat vitae magna varius dictum. Nunc nec nisi ut odio feugiat varius. Vivamus tempus, est eu finibus scelerisque, velit neque porta massa, et sagittis urna lacus at felis.`
            },
            {
                title: `Proin accumsan in leo ut placerat. Sed eu magna ut arcu hendrerit pulvinar eu et lacus. Donec eget cursus metus. Quisque varius, nisl vitae facilisis blandit, ligula ligula varius neque, vel eleifend nunc magna eget nibh`,
                text: `Cras eget diam rutrum, convallis urna in, pretium eros. Mauris vulputate nibh eget suscipit tristique. In magna nisl, iaculis id sollicitudin eu, commodo luctus nisi. Aliquam viverra, odio eget semper porta, libero ex posuere tortor, sed mollis augue mi vel neque. Vivamus pretium nunc nulla, lacinia tempor nunc finibus at. Donec at fermentum ex, sed laoreet libero. Nam bibendum urna vitae lectus suscipit, id gravida enim malesuada.`
            }
        ];
    }
    ngOnInit() { }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 5, vars: 1, consts: [[1, "container", "p-5"], ["ref", "faq-title", "alignStyle", "center"], [3, "question", 4, "ngFor", "ngForOf"], ["ref", "faq-email", "alignStyle", "center"], [3, "question"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-text-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FaqComponent_app_question_2_Template, 1, 1, "app-question", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cta");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, styles: ["p{\r\n    margin-bottom: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FDtN":
/*!*************************************************************************!*\
  !*** ./src/app/sections/pages/discounts/haztelos/haztelos.component.ts ***!
  \*************************************************************************/
/*! exports provided: HaztelosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaztelosComponent", function() { return HaztelosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sections/enums/enumColors */ "Ims2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");
/* harmony import */ var _shared_components_img_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-components/img/img.component */ "Ko6Q");







const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "border-top-color": a0 }; };
class HaztelosComponent {
    constructor() {
        this.backgroundColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].purple;
        this.textColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.titleColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.titleAlign = 'left';
    }
    ngOnInit() { }
}
HaztelosComponent.ɵfac = function HaztelosComponent_Factory(t) { return new (t || HaztelosComponent)(); };
HaztelosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HaztelosComponent, selectors: [["app-haztelos"]], decls: 8, vars: 9, consts: [[1, "p-5", 3, "ngStyle"], [1, "haztelos", "d-flex"], [1, "col-12", "col-sm-6", "p-2"], ["ref", "haztelos-title", 3, "alignStyle", "textColor"], ["ref", "haztelos-text", "alignStyle", "left", 1, "description", 3, "textColor"], ["name", "haztelos"], [1, "arrow-down", 3, "ngStyle"]], template: function HaztelosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignStyle", ctx.titleAlign)("textColor", ctx.titleColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.textColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.backgroundColor));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _shared_components_img_img_component__WEBPACK_IMPORTED_MODULE_5__["ImgComponent"]], styles: [".haztelos[_ngcontent-%COMP%]{\r\n    max-width: 950px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhenRlbG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJoYXp0ZWxvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhenRlbG9ze1xyXG4gICAgbWF4LXdpZHRoOiA5NTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HaztelosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-haztelos',
                templateUrl: './haztelos.component.html',
                styleUrls: ['./haztelos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FyLO":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorPageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.errorMessage = data.message;
        });
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 1, vars: 1, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.errorMessage, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "GJC6":
/*!*************************************************************!*\
  !*** ./src/app/sections/pages/courses/courses.component.ts ***!
  \*************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/enumColors */ "Ims2");



function CoursesComponent_app_course_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course-card", 8);
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("course", course_r1);
} }
class CoursesComponent {
    constructor() {
        this.videoId = 482704655;
        this.courses = [
            {
                imgFlag: '/assets/img/00_home/courses/0.png',
                imgCard: '/assets/img/02_courses/card0.jpg',
                color: _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].red,
                title: 'CURSO REGULAR INICIAL T&F®',
                description: '<p>¡Bienvenidx a la Tribu! 1r Curso completo (Nivel Inicial). La versión más académica para aprender en profundidad la teoría, la técnica y la creatividad del abanico ruso y del método T&F®.</p>',
                price: '45€/mes',
                extra: '(Packs de 4 clases de 1h)',
                bullets: `<li><span>Estudio en profundidad (40h): Teoría, práctica, lenguaje de combos y coreo.</span></li>
      <li><span>Protocolos de seguridad y gestión de performance.</span></li>
      <li><span>Seguimiento opcional (¡escríbeme!)</span></li>
      <li><span>Formar parte de la T&F Crew (accedes a Descuentos y todo lo que surja).</span></li>
      <li><span>Diploma final certificando el estudio completo del curso inicial.</span></li>`,
                cta: 'INSCRIBIRME',
                ready: true
            },
            {
                imgFlag: '/assets/img/00_home/courses/1.png',
                imgCard: '/assets/img/02_courses/card1.jpg',
                color: _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].green,
                title: 'CURSO REGULAR INICIAL T&F®',
                description: '<p>2º Curso completo (Nivel Intermedio) con técnica más avanzada, nuevas reglas del Flow arts Ruso que nos hacen explotar la cabeza, nuevos combos de Tribal&Flames® y entrenamiento.</p>',
                price: 'PRECIO VARIABLE',
                extra: '',
                bullets: `<li><span>Workshops entre 30min-2 horas.</span></li>
      <li><span>Diferentes niveles.</span></li>
      <li><span>Temáticas concretas.</span></li>
      <li><span>Sesiones de CrazyCombos (1:30h). </span></li>
      <li><span>Clases nuevas a lo largo del año. 
      (Anunciadas por Instagram)</span></li>`,
                cta: 'VER CLASES',
                ready: true
            },
            {
                imgFlag: '/assets/img/00_home/courses/2.png',
                imgCard: '/assets/img/02_courses/card2.jpg',
                color: _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].purple,
                title: 'CURSO REGULAR INICIAL T&F®',
                description: '<p>2º Curso completo (Nivel Intermedio) con técnica más avanzada, nuevas reglas del Flow arts Ruso que nos hacen explotar la cabeza, nuevos combos de Tribal&Flames® y entrenamiento</p>',
                price: '45€/Pack4 - 15€/Suelta',
                extra: '',
                bullets: `<li><span>Clases sueltas de entre 30min-1 hora.</span></li>
      <li><span>Nivel abierto.</span></li>
      <li><span>Seguimiento opcional (¡escríbeme!)</span></li>
      <li><span>Clases nuevas a lo largo del año. (Anunciadas por Instagram)</span></li>
      <li><strong>Curso inicial completo 40h (Nivel Inicial) en proceso.</strong> Mientras tanto puedes disfrutar de nuestras clases presenciales (¡Escríbeme!)</li>`,
                cta: 'VER CLASES',
                ready: true
            },
            {
                imgFlag: '/assets/img/00_home/courses/0.png',
                imgCard: '/assets/img/02_courses/card3.jpg',
                color: _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].orange,
                title: 'CURSO REGULAR INICIAL T&F®',
                description: '<p>¡Bienvenidx a la Tribu! 1r Curso completo (Nivel Inicial). La versión más académica para aprender en profundidad la teoría, la técnica y la creatividad del abanico ruso y del método T&F®.</p>',
                price: '45€/mes',
                extra: '(Packs de 4 clases de 1h)',
                bullets: `<li><span>Mismos puntos que el «Curso inicial».</span></li>
      <li><span>Subimos de nivel y complejidad en TODO.</span></li>
      <li><span>Indispensable haber cursado el curso inicial o tener suficiente conocimiento teórico/práctico del abanico.</span></li>
      <li><span>Buenísimo entrenamiento para fire dancers que buscan fluidez.</span></li>
      <li><span>Diploma final certificando el estudio completo del curso intermedio.</span></li>`,
                cta: 'DISPONIBLE SETIEMBRE 2021',
                ready: false
            }
        ];
    }
    ngOnInit() {
        console.log(this.courses);
    }
    onClick(e) { }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 8, vars: 2, consts: [["name", "courses-banner"], [1, "container", "p-5"], ["ref", "courses-title", "alignStyle", "center"], ["ref", "courses-intro", "alignStyle", "center"], ["text", "PRUEBA UNA CLASE GRATUITA", "justifyStyle", "center", 3, "clicked"], [1, "cards"], ["courseId", "0", 3, "course", 4, "ngFor", "ngForOf"], ["title", "PRUEBA UNA CLASE B\u00C1SICA GRATUITA", "subtitle", "As\u00ED puedes hacerte una idea de c\u00F3mo trabajamos :)", "background", "/assets/img/02_courses/bg.jpg", 3, "videoId"], ["courseId", "0", 3, "course"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-action-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CoursesComponent_Template_app_action_btn_clicked_4_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoursesComponent_app_course_card_6_Template, 1, 1, "app-course-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bottom-video", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, styles: [".cards[_ngcontent-%COMP%] {\r\n  max-width: 1400px;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n  .cards[_ngcontent-%COMP%] {\r\n    max-width: 900px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJjb3Vyc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmNhcmRzIHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ims2":
/*!**********************************************!*\
  !*** ./src/app/sections/enums/enumColors.ts ***!
  \**********************************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
var Colors;
(function (Colors) {
    Colors["red"] = "#fa413e";
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
    Colors["purple"] = "#A246E1";
    Colors["green"] = "#00DD92";
    Colors["orange"] = "#FF975A";
})(Colors || (Colors = {}));


/***/ }),

/***/ "Jml/":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/shared-components/input-mail/input-mail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InputMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMailComponent", function() { return InputMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class InputMailComponent {
    constructor() { }
    ngOnInit() { }
}
InputMailComponent.ɵfac = function InputMailComponent_Factory(t) { return new (t || InputMailComponent)(); };
InputMailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputMailComponent, selectors: [["app-input-mail"]], decls: 2, vars: 1, consts: [["name", "login", "placeholder", "_ Tu mail", 3, "ngModel", "ngModelChange"]], template: function InputMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputMailComponent_Template_input_ngModelChange_1_listener($event) { return ctx.mail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mail);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["input[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background-color: #ffe5cd;\r\n  padding: 0.5em 1em;\r\n  width: 90%;\r\n  max-width: 483px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiaW5wdXQtbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWNkO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDgzcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputMailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-mail',
                templateUrl: './input-mail.component.html',
                styleUrls: ['./input-mail.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ko6Q":
/*!*****************************************************************!*\
  !*** ./src/app/sections/shared-components/img/img.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgComponent", function() { return ImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");




class ImgComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].IMAGES_URL;
        this.image = '';
    }
    ngOnInit() {
        this.dataService.getImg(this.name).subscribe((response) => {
            console.log(this.imgUrl + '/' + response.esp);
            this.image = this.imgUrl + '/' + response.esp;
        }, (error) => {
            console.log(error);
        });
    }
}
ImgComponent.ɵfac = function ImgComponent_Factory(t) { return new (t || ImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgComponent, selectors: [["app-img"]], inputs: { name: "name" }, decls: 1, vars: 1, consts: [[3, "src"]], template: function ImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img',
                templateUrl: './img.component.html',
                styleUrls: ['./img.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LK8p":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/pages/courses/course-card/course-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/action-btn/action-btn.component */ "vj6W");





const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
class CourseCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onClick(event) {
        this.router.navigate(['/cursos', this.courseId]);
    }
}
CourseCardComponent.ɵfac = function CourseCardComponent_Factory(t) { return new (t || CourseCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CourseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseCardComponent, selectors: [["app-course-card"]], inputs: { courseId: "courseId", course: "course" }, decls: 16, vars: 17, consts: [[1, "flag", 3, "ngStyle"], ["width", "90", 3, "src"], [1, "title"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-detail", 3, "ngStyle"], [1, "card-detail-desc", 3, "innerHTML"], [1, "card-detail-price"], [1, "price"], [1, "extra"], [1, "card-text", 3, "ngStyle", "innerHTML"], ["justifyStyle", "center", 3, "disable", "text", "clicked"]], template: function CourseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CURSO REGULAR INICIAL T&F\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-action-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CourseCardComponent_Template_app_action_btn_clicked_15_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.course.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course.imgFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course.imgCard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.course.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.course.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.extra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.course.color))("innerHTML", ctx.course.bullets, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disable", !ctx.course.ready)("text", ctx.course.cta);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_3__["ActionBtnComponent"]], styles: ["[_nghost-%COMP%] {\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 2em 1em;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  padding-bottom: 1em;\r\n}\r\n\r\n.card-detail[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  padding: 1em;\r\n  line-height: 1.1em;\r\n}\r\n\r\n.card-detail-desc[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 15px;\r\n  display: block;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 395px;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.61);\r\n  border: none;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-detail-price[_ngcontent-%COMP%] {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  margin: 2em;\r\n  list-style: none;\r\n  min-height: 216px;\r\n}\r\n\r\n  .card-text li::before {\r\n  content: '\\2022';\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 1em;\r\n  margin-left: -1em;\r\n}\r\n\r\n  .card-text span {\r\n  color: black\r\n}\r\n\r\n.flag[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  border-radius: 1em;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: -10px;\r\n  left: -10px;\r\n  text-align: center;\r\n}\r\n\r\n.flag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: 9px;\r\n  width: 80px;\r\n}\r\n\r\n.flag[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: 0;\r\n  bottom: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n\r\n  .flag[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    top: 0px;\r\n    left: 0px;\r\n  }\r\n\r\n  .flag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n  .flag[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    bottom: 3px;\r\n    font-size: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBRW5CLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJjb3Vyc2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDJlbSAxZW07XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmNhcmQtZGV0YWlsIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xyXG59XHJcblxyXG4uY2FyZC1kZXRhaWwtZGVzYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMzk1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42MSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbC1wcmljZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW46IDJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDIxNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcmQtdGV4dCBsaTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFwyMDIyJztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogLTFlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLXRleHQgc3BhbiB7XHJcbiAgY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbi5mbGFnIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGFnIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogOXB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZmxhZyAudGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxhZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZmxhZyBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5mbGFnIC50aXRsZSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-card',
                templateUrl: './course-card.component.html',
                styleUrls: ['./course-card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { courseId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "N0yK":
/*!****************************************************************!*\
  !*** ./src/app/sections/pages/home/mosaic/mosaic.component.ts ***!
  \****************************************************************/
/*! exports provided: MosaicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicComponent", function() { return MosaicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "hMnm");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _directives_img_background_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/img-background.directive */ "TNxG");
/* harmony import */ var _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/action-btn/action-btn.component */ "vj6W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MosaicComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
class MosaicComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.video = {};
        this.playing = false;
        this.options = {
            id: 482704655,
            width: 1920,
            responsive: true,
            background: true,
        };
        this.videoPlaying = false;
        this.clickedPlay = false;
    }
    ngOnInit() {
        this.player2 = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"]('video', this.options);
    }
    onClick(event) { }
}
MosaicComponent.ɵfac = function MosaicComponent_Factory(t) { return new (t || MosaicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MosaicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MosaicComponent, selectors: [["app-mosaic"]], decls: 39, vars: 2, consts: [[1, "row", "about"], [1, "col-md-6", "anna", "piece", 3, "appImgBackground"], ["text", "CONOCER A ANNA", "justifyStyle", "center", 3, "clicked"], [1, "col-md-6", "crew", "piece"], ["text", "CONOCER A LA CREW", "justifyStyle", "center", 3, "clicked"], [1, "shows", "col-12", "piece"], ["id", "video2"], [1, "accent"], ["text", "VER M\u00C1S", "justifyStyle", "center", 3, "clicked"], [1, "play"], ["src", "/assets/img/shared/play.png", 4, "ngIf"], [1, "fans", "col-12", "piece"], ["src", "/assets/img/shared/play.png"]], template: function MosaicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NUESTRA PROFESORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Anna de Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-action-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MosaicComponent_Template_app_action_btn_clicked_6_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NUESTRXS ALUMNXS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cada Promoci\u00F3n de alumnxs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " forma parte de la T&F Crew.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A1Y t\u00FA tambi\u00E9n puedes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-action-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MosaicComponent_Template_app_action_btn_clicked_16_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00BFQUIERES VER NUESTROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SHOWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Todos han sido estudiados en clase durante el curso regular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A1T\u00FA tambi\u00E9n puedes formar parte de ellos! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-action-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MosaicComponent_Template_app_action_btn_clicked_28_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MosaicComponent_img_30_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00BFNO TIENES ABANICOS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Te contamos como construirte unos de ensayo en tu casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " y te ofrecemos un descuento en los Lotus Fire Fans de LuSolShop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-action-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function MosaicComponent_Template_app_action_btn_clicked_38_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appImgBackground", "img-home-mosaic-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoPlaying);
    } }, directives: [_directives_img_background_directive__WEBPACK_IMPORTED_MODULE_3__["ImgBackgroundDirective"], _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_4__["ActionBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".about[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  height: 28vw;\r\n}\r\n\r\n.piece[_ngcontent-%COMP%] {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.crew[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/00_home/about/crew.jpg');\r\n}\r\n\r\n.shows[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/00_home/about/shows.jpg');\r\n  height: 28vw;\r\n}\r\n\r\n.fans[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/00_home/about/fans.jpg');\r\n  height: 36vw;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', cursive;\r\n  font-size: 71px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  text-align: right;\r\n  line-height: 0.5em;\r\n  margin-bottom: 0;\r\n  margin-right: 40px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-family: 'Century Schoolbook', cursive, serif;\r\n  font-style: italic;\r\n  color: white;\r\n  text-align: right;\r\n  font-size: 20px;\r\n  padding-top: 5px;\r\n  margin-right: 40px;\r\n  position: relative;\r\n  right: 0;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  max-width: 240px;\r\n  display: inline-block;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n  line-height: 0.9em;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.fans[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-content: center;\r\n  flex-direction: column;\r\n  padding-top: 2em;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-family: 'Rubik', sans-serif;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: white;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  bottom: 30px;\r\n}\r\n\r\n.shows[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  margin: 0 auto;\r\n}\r\n\r\n#video2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.play[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  right: 3vw;\r\n  height: 12%;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n@media screen and (max-width: 1600px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 53px;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n  .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    height: 56.2vw;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n  .shows[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    padding-top: 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    text-shadow: 0px 0px 8px rgba(0, 0, 0, 1), 0px 0px 8px rgba(0, 0, 0, 1), 0px 0px 8px rgba(0, 0, 0, 1),\r\n      0px 0px 8px rgba(0, 0, 0, 1), 0px 0px 8px rgba(0, 0, 0, 1);\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    text-shadow: 0px 0px 8px rgba(0, 0, 0, 1), 0px 0px 8px rgba(0, 0, 0, 1);\r\n  }\r\n\r\n  .fans[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   app-action-btn[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    bottom: 0px;\r\n    position: absolute;\r\n  }\r\n\r\n  .shows[_ngcontent-%COMP%] {\r\n    justify-content: start;\r\n    padding-top: 1em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .fans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc2FpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7OztJQUdFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztFQUVBOzs7SUFHRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFO2dFQUM0RDtFQUM5RDs7RUFFQTs7SUFFRSx1RUFBdUU7RUFDekU7O0VBRUE7OztJQUdFLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoibW9zYWljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQgZGl2IHtcclxuICBoZWlnaHQ6IDI4dnc7XHJcbn1cclxuXHJcbi5waWVjZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiAuYW5uYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy8wMF9ob21lL2Fib3V0L2FubmEuanBnJyk7XHJcbn0gKi9cclxuXHJcbi5jcmV3IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nLzAwX2hvbWUvYWJvdXQvY3Jldy5qcGcnKTtcclxufVxyXG5cclxuLnNob3dzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nLzAwX2hvbWUvYWJvdXQvc2hvd3MuanBnJyk7XHJcbiAgaGVpZ2h0OiAyOHZ3O1xyXG59XHJcblxyXG4uZmFucyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy8wMF9ob21lL2Fib3V0L2ZhbnMuanBnJyk7XHJcbiAgaGVpZ2h0OiAzNnZ3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDcxcHg7XHJcbn1cclxuXHJcbi5hYm91dCBoMiB7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYWJvdXQgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBTY2hvb2xib29rJywgY3Vyc2l2ZSwgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5oMyBkaXYge1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2hvd3MgaDIsXHJcbi5mYW5zIGgyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogMC45ZW07XHJcbn1cclxuXHJcbi5zaG93cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZhbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuLnNob3dzIHAsXHJcbi5mYW5zIHAge1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5hYm91dCBhcHAtYWN0aW9uLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNob3dzIGFwcC1hY3Rpb24tYnRuLFxyXG4uZmFucyBhcHAtYWN0aW9uLWJ0biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiN2aWRlbzIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wbGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzdnc7XHJcbiAgcmlnaHQ6IDN2dztcclxuICBoZWlnaHQ6IDEyJTtcclxufVxyXG5cclxuLnBsYXkgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNTNweDtcclxuICB9XHJcblxyXG4gIC5hYm91dCBoMyxcclxuICAuc2hvd3MgcCxcclxuICAuZmFucyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5hYm91dCBoMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0IGgzIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgLmFib3V0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5hYm91dCBkaXYge1xyXG4gICAgaGVpZ2h0OiA1Ni4ydnc7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5zaG93cyBoMixcclxuICAuc2hvd3MgcCxcclxuICAuZmFucyBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5mYW5zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICAgICAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpLCAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIH1cclxuXHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMSksIDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuZmFucyBhcHAtYWN0aW9uLWJ0bixcclxuICAuc2hvd3MgYXBwLWFjdGlvbi1idG4sXHJcbiAgLmFib3V0IGFwcC1hY3Rpb24tYnRuIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLnNob3dzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuZmFucyBwLFxyXG4gIC5zaG93cyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MosaicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mosaic',
                templateUrl: './mosaic.component.html',
                styleUrls: ['./mosaic.component.css'],
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Q+c8":
/*!******************************************************************************!*\
  !*** ./src/app/sections/pages/aboutribal/principles/principles.component.ts ***!
  \******************************************************************************/
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

/***/ "Q1Oq":
/*!****************************************************************************!*\
  !*** ./src/app/sections/pages/aboutribal/interview/interview.component.ts ***!
  \****************************************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-components/bottom-video/bottom-video.component */ "0qYa");



class InterviewComponent {
    constructor() {
        this.videoId = 521410494;
    }
    ngOnInit() { }
}
InterviewComponent.ɵfac = function InterviewComponent_Factory(t) { return new (t || InterviewComponent)(); };
InterviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterviewComponent, selectors: [["app-interview"]], decls: 1, vars: 1, consts: [["title", "CONOCENOS EN 2 MINUTOS:", "subtitle", "Echa un ojo a esta entrevista que nos hizo Vishuddha:", "background", "/assets/img/01_about/interview/bg.jpg", 3, "videoId"]], template: function InterviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bottom-video", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, directives: [_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_1__["BottomVideoComponent"]], styles: [".app-bottom-video[_ngcontent-%COMP%] {\r\n  padding: 55px 1em 35px 1em;\r\n  background-size: cover;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  max-width: 900px;\r\n  margin: auto;\r\n  margin-top: 0px;\r\n  padding: 0 0.2em;\r\n}\r\n\r\n.video[_ngcontent-%COMP%] {\r\n  max-width: 970px;\r\n  margin: 20px auto 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJpbnRlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYm90dG9tLXZpZGVvIHtcclxuICBwYWRkaW5nOiA1NXB4IDFlbSAzNXB4IDFlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSBSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHBhZGRpbmc6IDAgMC4yZW07XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgbWF4LXdpZHRoOiA5NzBweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interview',
                templateUrl: './interview.component.html',
                styleUrls: ['./interview.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SHqL":
/*!*********************************************************************!*\
  !*** ./src/app/sections/shared-components/vimeo/vimeo.component.ts ***!
  \*********************************************************************/
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
        this.key = 0;
        this.width = 400;
        this.videoPlaying = false;
        this.clickedPlay = false;
        this.options = {
            id: 0,
            width: this.width,
            loop: false,
            controls: false,
            responsive: true,
            autoplay: false,
            preload: true
        };
        this.videoDivId = 'videoId';
    }
    ngOnInit() {
        this.options.id = this.videoId;
        this.videoDivId = 'video' + this.key;
        console.log(this.videoDivId);
    }
    ngAfterViewInit() {
        this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"](this.videoDivId, this.options);
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
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    onClick() {
        this.player
            .getPaused()
            .then((paused) => {
            if (paused) {
                this.clickedPlay = true;
                this.player.play();
            }
            else {
                this.player.pause();
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
VimeoComponent.ɵfac = function VimeoComponent_Factory(t) { return new (t || VimeoComponent)(); };
VimeoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VimeoComponent, selectors: [["app-vimeo"]], inputs: { videoId: "videoId", key: "key", width: "width" }, decls: 4, vars: 2, consts: [[1, "wrapper"], [3, "id"], [1, "play", 3, "click"], ["src", "/assets/img/shared/play.png", 4, "ngIf"], ["src", "/assets/img/shared/play.png"]], template: function VimeoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VimeoComponent_Template_div_click_2_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VimeoComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.videoDivId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoPlaying);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.play[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 12%;\r\n  width: auto;\r\n  left: 47%;\r\n  top: 44%;\r\n}\r\n\r\n.video[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpbWVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InZpbWVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGF5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnBsYXkgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMiU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbGVmdDogNDclO1xyXG4gIHRvcDogNDQlO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VimeoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vimeo',
                templateUrl: './vimeo.component.html',
                styleUrls: ['./vimeo.component.css']
            }]
    }], null, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
    }], null, null); })();


/***/ }),

/***/ "T8Zm":
/*!*****************************************************************!*\
  !*** ./src/app/sections/pages/discounts/discounts.component.ts ***!
  \*****************************************************************/
/*! exports provided: DiscountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsComponent", function() { return DiscountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DiscountsComponent {
    constructor() {
        this.videoId = 482704655;
    }
    ngOnInit() { }
}
DiscountsComponent.ɵfac = function DiscountsComponent_Factory(t) { return new (t || DiscountsComponent)(); };
DiscountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountsComponent, selectors: [["app-discounts"]], decls: 10, vars: 1, consts: [["name", "discounts-banner"], [1, "container", "p-5"], ["ref", "discounts-title", "alignStyle", "center"], ["ref", "discounts-text", "alignStyle", "center"], [1, "colaborar"], ["ref", "discounts-colaborar", "alignStyle", "center"], ["title", "UNBOXING POLYFANS", "subtitle", "\u00C9chale un ojo a estos Polyfans! Abanicos de led incre\u00EDbles de Neopoi.com.", "background", "/assets/img/discounts/bgpolifans.jpg", 3, "videoId"]], template: function DiscountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ventajas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bottom-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-haztelos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-cta");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, styles: [".colaborar[_ngcontent-%COMP%]{\r\n    padding-bottom: 4rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImRpc2NvdW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGFib3JhcntcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discounts',
                templateUrl: './discounts.component.html',
                styleUrls: ['./discounts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TNxG":
/*!*****************************************************************!*\
  !*** ./src/app/sections/directives/img-background.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ImgBackgroundDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgBackgroundDirective", function() { return ImgBackgroundDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");




class ImgBackgroundDirective {
    constructor(el, dataService) {
        this.el = el;
        this.dataService = dataService;
        this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].IMAGES_URL;
    }
    ngOnInit() {
        this.dataService.getImg(this.appImgBackground).subscribe((response) => {
            console.log(this.imgUrl + '/' + response.esp);
            this.el.nativeElement.style.backgroundImage =
                'url(' + this.imgUrl + '/' + response.esp + ')';
            //  this.ref = this.imgUrl + '/' + response.esp;
        }, (error) => {
            console.log(error);
        });
    }
}
ImgBackgroundDirective.ɵfac = function ImgBackgroundDirective_Factory(t) { return new (t || ImgBackgroundDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ImgBackgroundDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImgBackgroundDirective, selectors: [["", "appImgBackground", ""]], inputs: { appImgBackground: "appImgBackground" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgBackgroundDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appImgBackground]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { appImgBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Z6cI":
/*!*******************************************************!*\
  !*** ./src/app/sections/pages/crew/crew.component.ts ***!
  \*******************************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CrewComponent {
    constructor() { }
    ngOnInit() { }
}
CrewComponent.ɵfac = function CrewComponent_Factory(t) { return new (t || CrewComponent)(); };
CrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrewComponent, selectors: [["app-crew"]], decls: 8, vars: 1, consts: [["name", "crew-banner"], [1, "container", "p-5"], ["ref", "crew-title", "alignStyle", "center"], ["ref", "crew-text", "alignStyle", "center"], [3, "home"]], template: function CrewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-promociones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-cta");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("home", false);
    } }, styles: ["app-cta[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: -2em;\r\n    margin: -50px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    padding-bottom: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJjcmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY3Rhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMmVtO1xyXG4gICAgbWFyZ2luOiAtNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crew',
                templateUrl: './crew.component.html',
                styleUrls: ['./crew.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _sections_pages_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/pages/home/image-slider/image-slider.component */ "qmvS");
/* harmony import */ var _sections_directives_img_background_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/directives/img-background.directive */ "TNxG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/pages/home/home.component */ "qbMw");
/* harmony import */ var _sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/pages/aboutribal/aboutribal.component */ "0uuF");
/* harmony import */ var _sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/pages/courses/courses.component */ "GJC6");
/* harmony import */ var _sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/pages/aboutanna/aboutanna.component */ "ZUx4");
/* harmony import */ var _sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/pages/crew/crew.component */ "Z6cI");
/* harmony import */ var _sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/pages/discounts/discounts.component */ "T8Zm");
/* harmony import */ var _sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/pages/faq/faq.component */ "DAO0");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/menu/menu.component */ "jM2g");
/* harmony import */ var _sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/pages/shows/shows.component */ "iGcB");
/* harmony import */ var _sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sections/pages/courses/course/course.component */ "o8x9");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sections_shared_components_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sections/shared-components/vimeo/vimeo.component */ "SHqL");
/* harmony import */ var _sections_pages_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sections/pages/home/parallax/parallax.component */ "yZXi");
/* harmony import */ var _sections_pages_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sections/pages/home/statements/statements.component */ "zBRZ");
/* harmony import */ var _sections_pages_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sections/pages/home/courses-grid/courses-grid.component */ "8zX+");
/* harmony import */ var _sections_pages_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sections/pages/home/mosaic/mosaic.component */ "N0yK");
/* harmony import */ var _sections_pages_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sections/pages/home/intro/intro.component */ "vHrw");
/* harmony import */ var _sections_pages_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sections/pages/home/claim/claim.component */ "chqE");
/* harmony import */ var _sections_pages_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sections/pages/home/instagram/instagram.component */ "282H");
/* harmony import */ var _sections_pages_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sections/pages/home/contact/contact.component */ "A6Wj");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");
/* harmony import */ var _sections_pages_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sections/pages/aboutribal/whatis/whatis.component */ "3/vD");
/* harmony import */ var _sections_pages_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sections/pages/aboutribal/principles/principles.component */ "Q+c8");
/* harmony import */ var _sections_pages_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sections/pages/aboutribal/objetivo/objetivo.component */ "ij2P");
/* harmony import */ var _sections_pages_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sections/pages/aboutribal/interview/interview.component */ "Q1Oq");
/* harmony import */ var _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sections/shared-components/cta/cta.component */ "bM3N");
/* harmony import */ var _sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./sections/shared-components/banner/banner.component */ "z7ZW");
/* harmony import */ var _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sections/shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sections/shared-components/text/text.component */ "k4kv");
/* harmony import */ var _sections_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sections/shared-components/action-btn/action-btn.component */ "vj6W");
/* harmony import */ var _sections_pages_courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sections/pages/courses/course-card/course-card.component */ "LK8p");
/* harmony import */ var _sections_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./sections/shared-components/bottom-video/bottom-video.component */ "0qYa");
/* harmony import */ var _sections_shared_components_bottom_reel_bottom_reel_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sections/shared-components/bottom-reel/bottom-reel.component */ "cVck");
/* harmony import */ var _sections_shared_components_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./sections/shared-components/input-mail/input-mail.component */ "Jml/");
/* harmony import */ var _sections_pages_shows_showtime_showtime_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./sections/pages/shows/showtime/showtime.component */ "6SaG");
/* harmony import */ var _sections_pages_shows_contratanos_contratanos_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./sections/pages/shows/contratanos/contratanos.component */ "ok5a");
/* harmony import */ var _sections_shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./sections/shared-components/video/video.component */ "sbax");
/* harmony import */ var _sections_pages_crew_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./sections/pages/crew/quotes/quotes.component */ "xDA7");
/* harmony import */ var _sections_pages_crew_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./sections/pages/crew/promociones/promociones.component */ "CGQw");
/* harmony import */ var _sections_pages_discounts_ventajas_ventajas_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./sections/pages/discounts/ventajas/ventajas.component */ "hm/P");
/* harmony import */ var _sections_pages_discounts_ventaja_ventaja_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./sections/pages/discounts/ventaja/ventaja.component */ "nKEM");
/* harmony import */ var _sections_pages_discounts_haztelos_haztelos_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./sections/pages/discounts/haztelos/haztelos.component */ "FDtN");
/* harmony import */ var _sections_shared_components_img_img_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./sections/shared-components/img/img.component */ "Ko6Q");
/* harmony import */ var _sections_pages_faq_question_question_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./sections/pages/faq/question/question.component */ "12qe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/common */ "ofXK");



























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _sections_pages_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__["ImageSliderComponent"],
        _sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_12__["AboutribalComponent"],
        _sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_13__["CoursesComponent"],
        _sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_14__["AboutannaComponent"],
        _sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_15__["CrewComponent"],
        _sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_16__["DiscountsComponent"],
        _sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
        _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"],
        _sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_19__["ShowsComponent"],
        _sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_20__["CourseComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_21__["LayoutComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_22__["ErrorPageComponent"],
        _sections_shared_components_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_24__["VimeoComponent"],
        _sections_pages_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_25__["ParallaxComponent"],
        _sections_pages_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_26__["StatementsComponent"],
        _sections_pages_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_27__["CoursesGridComponent"],
        _sections_pages_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_28__["MosaicComponent"],
        _sections_pages_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_29__["IntroComponent"],
        _sections_pages_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_30__["ClaimComponent"],
        _sections_pages_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_31__["InstagramComponent"],
        _sections_pages_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_32__["ContactComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
        _sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
        _sections_pages_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_34__["WhatisComponent"],
        _sections_pages_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_35__["PrinciplesComponent"],
        _sections_pages_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_36__["ObjetivoComponent"],
        _sections_pages_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_37__["InterviewComponent"],
        _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"],
        _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
        _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
        _sections_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_42__["ActionBtnComponent"],
        _sections_directives_img_background_directive__WEBPACK_IMPORTED_MODULE_9__["ImgBackgroundDirective"],
        _sections_pages_courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_43__["CourseCardComponent"],
        _sections_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_44__["BottomVideoComponent"],
        _sections_shared_components_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_46__["InputMailComponent"],
        _sections_shared_components_bottom_reel_bottom_reel_component__WEBPACK_IMPORTED_MODULE_45__["BottomReelComponent"],
        _sections_pages_shows_showtime_showtime_component__WEBPACK_IMPORTED_MODULE_47__["ShowtimeComponent"],
        _sections_pages_shows_contratanos_contratanos_component__WEBPACK_IMPORTED_MODULE_48__["ContratanosComponent"],
        _sections_shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_49__["VideoComponent"],
        _sections_pages_crew_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_50__["QuotesComponent"],
        _sections_pages_crew_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_51__["PromocionesComponent"],
        _sections_pages_discounts_ventajas_ventajas_component__WEBPACK_IMPORTED_MODULE_52__["VentajasComponent"],
        _sections_pages_discounts_ventaja_ventaja_component__WEBPACK_IMPORTED_MODULE_53__["VentajaComponent"],
        _sections_pages_discounts_haztelos_haztelos_component__WEBPACK_IMPORTED_MODULE_54__["HaztelosComponent"],
        _sections_shared_components_img_img_component__WEBPACK_IMPORTED_MODULE_55__["ImgComponent"],
        _sections_pages_faq_question_question_component__WEBPACK_IMPORTED_MODULE_56__["QuestionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _sections_pages_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__["ImageSliderComponent"],
                    _sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_12__["AboutribalComponent"],
                    _sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_13__["CoursesComponent"],
                    _sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_14__["AboutannaComponent"],
                    _sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_15__["CrewComponent"],
                    _sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_16__["DiscountsComponent"],
                    _sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
                    _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"],
                    _sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_19__["ShowsComponent"],
                    _sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_20__["CourseComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_21__["LayoutComponent"],
                    _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_22__["ErrorPageComponent"],
                    _sections_shared_components_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_24__["VimeoComponent"],
                    _sections_pages_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_25__["ParallaxComponent"],
                    _sections_pages_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_26__["StatementsComponent"],
                    _sections_pages_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_27__["CoursesGridComponent"],
                    _sections_pages_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_28__["MosaicComponent"],
                    _sections_pages_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_29__["IntroComponent"],
                    _sections_pages_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_30__["ClaimComponent"],
                    _sections_pages_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_31__["InstagramComponent"],
                    _sections_pages_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_32__["ContactComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
                    _sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
                    _sections_pages_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_34__["WhatisComponent"],
                    _sections_pages_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_35__["PrinciplesComponent"],
                    _sections_pages_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_36__["ObjetivoComponent"],
                    _sections_pages_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_37__["InterviewComponent"],
                    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"],
                    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
                    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
                    _sections_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_42__["ActionBtnComponent"],
                    _sections_directives_img_background_directive__WEBPACK_IMPORTED_MODULE_9__["ImgBackgroundDirective"],
                    _sections_pages_courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_43__["CourseCardComponent"],
                    _sections_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_44__["BottomVideoComponent"],
                    _sections_shared_components_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_46__["InputMailComponent"],
                    _sections_shared_components_bottom_reel_bottom_reel_component__WEBPACK_IMPORTED_MODULE_45__["BottomReelComponent"],
                    _sections_pages_shows_showtime_showtime_component__WEBPACK_IMPORTED_MODULE_47__["ShowtimeComponent"],
                    _sections_pages_shows_contratanos_contratanos_component__WEBPACK_IMPORTED_MODULE_48__["ContratanosComponent"],
                    _sections_shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_49__["VideoComponent"],
                    _sections_pages_crew_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_50__["QuotesComponent"],
                    _sections_pages_crew_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_51__["PromocionesComponent"],
                    _sections_pages_discounts_ventajas_ventajas_component__WEBPACK_IMPORTED_MODULE_52__["VentajasComponent"],
                    _sections_pages_discounts_ventaja_ventaja_component__WEBPACK_IMPORTED_MODULE_53__["VentajaComponent"],
                    _sections_pages_discounts_haztelos_haztelos_component__WEBPACK_IMPORTED_MODULE_54__["HaztelosComponent"],
                    _sections_shared_components_img_img_component__WEBPACK_IMPORTED_MODULE_55__["ImgComponent"],
                    _sections_pages_faq_question_question_component__WEBPACK_IMPORTED_MODULE_56__["QuestionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], [_sections_pages_home_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__["ImageSliderComponent"],
    _sections_pages_home_intro_intro_component__WEBPACK_IMPORTED_MODULE_29__["IntroComponent"],
    _sections_pages_home_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_25__["ParallaxComponent"],
    _sections_pages_home_statements_statements_component__WEBPACK_IMPORTED_MODULE_26__["StatementsComponent"],
    _sections_pages_home_courses_grid_courses_grid_component__WEBPACK_IMPORTED_MODULE_27__["CoursesGridComponent"],
    _sections_pages_home_mosaic_mosaic_component__WEBPACK_IMPORTED_MODULE_28__["MosaicComponent"],
    _sections_pages_home_claim_claim_component__WEBPACK_IMPORTED_MODULE_30__["ClaimComponent"],
    _sections_pages_home_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_31__["InstagramComponent"],
    _sections_pages_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_32__["ContactComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_12__["AboutribalComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_pages_aboutribal_whatis_whatis_component__WEBPACK_IMPORTED_MODULE_34__["WhatisComponent"],
    _sections_pages_aboutribal_principles_principles_component__WEBPACK_IMPORTED_MODULE_35__["PrinciplesComponent"],
    _sections_pages_aboutribal_objetivo_objetivo_component__WEBPACK_IMPORTED_MODULE_36__["ObjetivoComponent"],
    _sections_pages_aboutribal_interview_interview_component__WEBPACK_IMPORTED_MODULE_37__["InterviewComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_13__["CoursesComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_42__["ActionBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_57__["NgForOf"], _sections_pages_courses_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_43__["CourseCardComponent"],
    _sections_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_44__["BottomVideoComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_14__["AboutannaComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_57__["NgForOf"], _sections_shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_49__["VideoComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_shared_components_bottom_reel_bottom_reel_component__WEBPACK_IMPORTED_MODULE_45__["BottomReelComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_15__["CrewComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"],
    _sections_pages_crew_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_50__["QuotesComponent"],
    _sections_pages_crew_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_51__["PromocionesComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_16__["DiscountsComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_pages_discounts_ventajas_ventajas_component__WEBPACK_IMPORTED_MODULE_52__["VentajasComponent"],
    _sections_shared_components_bottom_video_bottom_video_component__WEBPACK_IMPORTED_MODULE_44__["BottomVideoComponent"],
    _sections_pages_discounts_haztelos_haztelos_component__WEBPACK_IMPORTED_MODULE_54__["HaztelosComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"], [_sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_57__["NgForOf"], _sections_pages_faq_question_question_component__WEBPACK_IMPORTED_MODULE_56__["QuestionComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_19__["ShowsComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_pages_shows_showtime_showtime_component__WEBPACK_IMPORTED_MODULE_47__["ShowtimeComponent"],
    _sections_pages_shows_contratanos_contratanos_component__WEBPACK_IMPORTED_MODULE_48__["ContratanosComponent"],
    _sections_shared_components_cta_cta_component__WEBPACK_IMPORTED_MODULE_38__["CtaComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_20__["CourseComponent"], [_sections_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_39__["BannerComponent"],
    _sections_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_40__["TextTitleComponent"],
    _sections_shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_41__["TextComponent"],
    _sections_shared_components_input_mail_input_mail_component__WEBPACK_IMPORTED_MODULE_46__["InputMailComponent"],
    _sections_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_42__["ActionBtnComponent"]], []);


/***/ }),

/***/ "ZUx4":
/*!*****************************************************************!*\
  !*** ./src/app/sections/pages/aboutanna/aboutanna.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutannaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutannaComponent", function() { return AboutannaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/enumColors */ "Ims2");



function AboutannaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoUrl", video_r1);
} }
class AboutannaComponent {
    constructor() {
        this.videoId = 482704655;
        this.videosTop = [
            '../../../../assets/videos/anna0.mp4',
            '../../../../assets/videos/anna1.mp4',
            '../../../../assets/videos/anna2.mp4'
        ];
        this.titleColor = _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].red;
    }
    ngOnInit() { }
}
AboutannaComponent.ɵfac = function AboutannaComponent_Factory(t) { return new (t || AboutannaComponent)(); };
AboutannaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutannaComponent, selectors: [["app-aboutanna"]], decls: 8, vars: 4, consts: [["name", "anna-banner"], [1, "container", "p-5"], ["ref", "anna-title", "alignStyle", "left", 3, "textColor"], [1, "video-container", "d-flex"], ["class", "col-12 col-md-4", 4, "ngFor", "ngForOf"], ["ref", "anna-desc", "alignStyle", "left", 3, "twoColumns"], ["title", "SHOW REEL", "subtitle", "Estos son algunos de mis shows en solitario, pero puedes ver m\u00E1s en mi cana del Youtube o en Instagram.", 3, "videoId"], [1, "col-12", "col-md-4"], [1, "top-video"], [3, "videoUrl"]], template: function AboutannaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutannaComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-bottom-reel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-cta");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.titleColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videosTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("twoColumns", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 1300px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]{\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  margin: 2em auto;\r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n   padding: 0;\r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]   .top-video[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  height: 0;\r\n  padding-bottom: 55.6%;\r\n  width: 100%;\r\n  border: 3px solid white\r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]:first-child {\r\n  border-left: 0px solid white\r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]:last-child {\r\n  border-right: 0px solid white\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0YW5uYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7O0FBR0E7R0FDRyxVQUFVO0FBQ2I7OztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsV0FBVztFQUNYO0FBQ0Y7OztBQUdBO0VBQ0U7QUFDRjs7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImFib3V0YW5uYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udmlkZW8tY29udGFpbmVye1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcblxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciBkaXZ7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4udmlkZW8tY29udGFpbmVyIC50b3AtdmlkZW8ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NS42JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZVxyXG59XHJcblxyXG5cclxuLnZpZGVvLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB3aGl0ZVxyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHdoaXRlXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutannaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutanna',
                templateUrl: './aboutanna.component.html',
                styleUrls: ['./aboutanna.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bM3N":
/*!*****************************************************************!*\
  !*** ./src/app/sections/shared-components/cta/cta.component.ts ***!
  \*****************************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CtaComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Volver a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CtaComponent {
    constructor() {
        this.home = true;
    }
    ngOnInit() { }
}
CtaComponent.ɵfac = function CtaComponent_Factory(t) { return new (t || CtaComponent)(); };
CtaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtaComponent, selectors: [["app-cta"]], inputs: { home: "home" }, decls: 7, vars: 1, consts: [[1, "cta"], [1, "buttons"], [4, "ngIf"], ["href", "/"]], template: function CtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VER LOS CURSOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PRUEBA UNA CLASE GRATUITA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CtaComponent_p_6_Template, 4, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.home);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".cta[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 50px 1em 30px 1em;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #fa413e;\r\n  margin: 0 1em;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n  font-family: 'Rubik', sans-serif;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZCIsImZpbGUiOiJjdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDUwcHggMWVtIDMwcHggMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE0MTNlO1xyXG4gIG1hcmdpbjogMCAxZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cta',
                templateUrl: './cta.component.html',
                styleUrls: ['./cta.component.css']
            }]
    }], function () { return []; }, { home: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cVck":
/*!*********************************************************************************!*\
  !*** ./src/app/sections/shared-components/bottom-reel/bottom-reel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BottomReelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomReelComponent", function() { return BottomReelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vimeo/vimeo.component */ "SHqL");





function BottomReelComponent_ngx_slick_carousel_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vimeo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r2.videoId)("key", i_r4)("width", 400);
} }
function BottomReelComponent_ngx_slick_carousel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BottomReelComponent_ngx_slick_carousel_5_div_1_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r0.slideConfigBig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
} }
function BottomReelComponent_ngx_slick_carousel_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vimeo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r5.videoId)("key", i_r7)("width", 400);
} }
function BottomReelComponent_ngx_slick_carousel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BottomReelComponent_ngx_slick_carousel_6_div_1_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r1.slideConfigSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class BottomReelComponent {
    constructor(ref) {
        this.ref = ref;
        this.slides = [
            { img: '/assets/img/00_home/galeria/00.jpg' },
            { img: '/assets/img/00_home/galeria/01.jpg' },
            { img: '/assets/img/00_home/galeria/02.jpg' },
            { img: '/assets/img/00_home/galeria/03.jpg' }
        ];
        this.slideConfigBig = {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true
        };
        this.slideConfigSmall = {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true
        };
        this.bigCarousel = true;
    }
    onWindowResize() {
        this.setCarouselSize();
    }
    setCarouselSize() {
        if (window.innerWidth > 1200) {
            this.bigCarousel = true;
        }
        else {
            this.bigCarousel = false;
        }
    }
    ngOnInit() {
        console.log('init');
        this.setCarouselSize();
    }
}
BottomReelComponent.ɵfac = function BottomReelComponent_Factory(t) { return new (t || BottomReelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BottomReelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomReelComponent, selectors: [["app-bottom-reel"]], hostBindings: function BottomReelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BottomReelComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { title: "title", subtitle: "subtitle", videoId: "videoId", background: "background" }, decls: 7, vars: 7, consts: [[1, "bottom-reel", 3, "ngStyle"], [3, "config", 4, "ngIf"], [3, "config"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "video"], [3, "videoId", "key", "width"]], template: function BottomReelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BottomReelComponent_ngx_slick_carousel_5_Template, 2, 2, "ngx-slick-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BottomReelComponent_ngx_slick_carousel_6_Template, 2, 2, "ngx-slick-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.backgroundImage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bigCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bigCarousel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], _vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_3__["VimeoComponent"]], styles: [".bottom-reel[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/01_about/interview/bg.jpg');\r\n  padding: 55px 1em 35px 1em;\r\n  background-size: cover;\r\n  height: 500px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Bebas Neue Regular', sans-serif;\r\n  font-size: 52px;\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: lighter;\r\n  text-align: center;\r\n  max-width: 900px;\r\n  margin: auto;\r\n  margin-top: 0px;\r\n  padding: 0 0.2em;\r\n}\r\n\r\nngx-slick-carousel[_ngcontent-%COMP%] {\r\n  max-width: 1200px;\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n .wrapper{\r\n  padding: 0 1em;\r\n  min-height: 290px;\r\n}\r\n\r\n .slick-arrow::before {\r\n  content: url('arrow.png');\r\n}\r\n\r\n .slick-prev {\r\n  transform: rotate(180deg);\r\n  -webkit-transform: rotate(180deg);\r\n}\r\n\r\n.video[_ngcontent-%COMP%] {\r\n  max-width: 550px;\r\n  margin: 20px auto 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1yZWVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4REFBOEQ7RUFDOUQsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5RDtBQUMzRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImJvdHRvbS1yZWVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXJlZWwge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvMDFfYWJvdXQvaW50ZXJ2aWV3L2JnLmpwZycpO1xyXG4gIHBhZGRpbmc6IDU1cHggMWVtIDM1cHggMWVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUgUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nOiAwIDAuMmVtO1xyXG59XHJcblxyXG5uZ3gtc2xpY2stY2Fyb3VzZWwge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAud3JhcHBlcntcclxuICBwYWRkaW5nOiAwIDFlbTtcclxuICBtaW4taGVpZ2h0OiAyOTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLnNsaWNrLWFycm93OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IHVybCgnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3NoYXJlZC9hcnJvdy5wbmcnKTtcclxufVxyXG5cclxuOjpuZy1kZWVwLnNsaWNrLXByZXYge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomReelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-reel',
                templateUrl: './bottom-reel.component.html',
                styleUrls: ['./bottom-reel.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "chqE":
/*!**************************************************************!*\
  !*** ./src/app/sections/pages/home/claim/claim.component.ts ***!
  \**************************************************************/
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

/***/ "hm/P":
/*!*************************************************************************!*\
  !*** ./src/app/sections/pages/discounts/ventajas/ventajas.component.ts ***!
  \*************************************************************************/
/*! exports provided: VentajasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentajasComponent", function() { return VentajasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ventaja_ventaja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ventaja/ventaja.component */ "nKEM");




function VentajasComponent_app_ventaja_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ventaja", 2);
} if (rf & 2) {
    const ventaja_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ventaja", ventaja_r1);
} }
class VentajasComponent {
    constructor() {
        this.ventajas = [
            {
                img: '/assets/img/discounts/0.jpg',
                title: `LU SOL SHOP
      Abanicos de fuego «Lotus»`,
                text: '<p>Craftmaker local especializado en malabares. Estos abanicos de agarre ruso son perfectos para empezar a estudiar con nosotras! Escríbeles y aprovecha el <strong>15% de descuento</strong>.</p>'
            },
            {
                img: '/assets/img/discounts/1.jpg',
                title: `NEOPOI.COM
      Promo code: «TRIBAL&FLAMES»`,
                text: `Flow arts technologies. Echa un vistazo a sus Polyfans. Abanicos de led de calidad, programables y con multitud de efectos. Usa el <strong>código TRIBAL&FLAMES</strong> o TRIBALANDFLAMES cuando vayas a comprarlos y tendrás un descuento!`
            },
            {
                img: '/assets/img/discounts/2.jpg',
                title: `MARYAURA TRIBAL PUNK
      Fundas personalizadas  `,
                text: `Artesana local que nos ayuda a personalizar nuestras fundas de abanico, super útiles a la hora de entrenar, entender el movimiento y el funcionamiento de los planos y agarres. Al ser alumna de T&F nos da un <strong>20% de descuento</strong>.`
            }
        ];
    }
    ngOnInit() { }
}
VentajasComponent.ɵfac = function VentajasComponent_Factory(t) { return new (t || VentajasComponent)(); };
VentajasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentajasComponent, selectors: [["app-ventajas"]], decls: 2, vars: 1, consts: [[1, "ventajas"], [3, "ventaja", 4, "ngFor", "ngForOf"], [3, "ventaja"]], template: function VentajasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VentajasComponent_app_ventaja_1_Template, 1, 1, "app-ventaja", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ventajas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ventaja_ventaja_component__WEBPACK_IMPORTED_MODULE_2__["VentajaComponent"]], styles: [".ventajas[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    padding-bottom: 2em;\r\n  }\r\n  \r\n  @media only screen and (max-width: 1280px) {\r\n    .ventajas[_ngcontent-%COMP%] {\r\n      max-width: 900px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhamFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoidmVudGFqYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW50YWphcyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLnZlbnRhamFzIHtcclxuICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentajasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ventajas',
                templateUrl: './ventajas.component.html',
                styleUrls: ['./ventajas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iGcB":
/*!*********************************************************!*\
  !*** ./src/app/sections/pages/shows/shows.component.ts ***!
  \*********************************************************/
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
ShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsComponent, selectors: [["app-shows"]], decls: 4, vars: 0, consts: [["name", "shows-banner"]], template: function ShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-showtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-contratanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cta");
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

/***/ "ij2P":
/*!**************************************************************************!*\
  !*** ./src/app/sections/pages/aboutribal/objetivo/objetivo.component.ts ***!
  \**************************************************************************/
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
                styleUrls: ['./menu.component.css'],
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
        this.lang = 'esp';
        this.langListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    changeLang() {
        if (this.lang === 'esp') {
            this.lang = 'eng';
        }
        else {
            this.lang = 'esp';
        }
        return this.langListener.next(this.lang);
    }
    getLangListener() {
        return this.langListener;
    }
    postText(name, esp, eng) {
        const textData = { name, esp, eng };
        return this.http.post(BACKEND_URL + '/site/text', textData);
    }
    getText(name) {
        return this.http.get(BACKEND_URL + '/site/text/' + name);
    }
    postImg(name, esp, eng) {
        let imgData;
        if (typeof esp === 'object' || typeof eng === 'object') {
            imgData = new FormData();
            imgData.append('ref', name);
            console.log(esp);
            if (typeof esp === 'object') {
                console.log(esp);
                imgData.append('esp', esp, name + '_esp');
            }
            else {
                imgData.append('esp', esp);
            }
            if (typeof eng === 'object') {
                imgData.append('eng', eng, name + '_eng');
            }
            else {
                imgData.append('eng', eng);
            }
        }
        else {
            imgData = {
                ref: name,
                esp: esp,
                eng: eng
            };
        }
        return this.http.post(BACKEND_URL + '/site/img', imgData);
    }
    getImg(name) {
        return this.http.get(BACKEND_URL + '/site/img/' + name);
    }
    postSlider(slider) {
        const formData = new FormData();
        formData.append('ref', slider.ref);
        slider.esp.forEach((img) => {
            console.log(typeof img);
            if (img.updated) {
                console.log(img.file);
                formData.append('image', img.file, img.order.toString());
            }
            else {
                formData.append('image', JSON.stringify({ img: img.img, order: img.order }));
            }
        });
        return this.http.post(BACKEND_URL + '/site/slider', formData);
    }
    getSlider(name) {
        return this.http.get(BACKEND_URL + '/site/slider/' + name);
    }
    postSentences(listData) {
        return this.http.post(BACKEND_URL + '/site/list', listData);
    }
    getSentences() {
        // COMPLETE
    }
    postLesson(lessonData) {
        const formData = new FormData();
        // eslint-disable-next-line no-underscore-dangle
        if (lessonData._id) {
            // eslint-disable-next-line no-underscore-dangle
            formData.append('id', lessonData._id);
        }
        if (lessonData.imageUpdated) {
            formData.append('esp', lessonData.imageEsp, lessonData.imageEsp);
            formData.append('eng', lessonData.imageEsp, lessonData.imageEng);
        }
        formData.append('name_esp', lessonData.nameEsp);
        formData.append('name_eng', lessonData.nameEng);
        formData.append('description_esp', lessonData.descriptionEsp);
        formData.append('description_eng', lessonData.descriptionEng);
        formData.append('price', lessonData.price);
        return this.http.post(BACKEND_URL + '/courses/lesson', formData);
    }
    getLesson(id) {
        console.log(id);
        return this.http.get(BACKEND_URL + '/courses/lesson/' + id);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "k4kv":
/*!*******************************************************************!*\
  !*** ./src/app/sections/shared-components/text/text.component.ts ***!
  \*******************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/enumColors */ "Ims2");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1) { return { "text-align": a0, "color": a1 }; };
const _c1 = function (a0) { return { "two-columns": a0 }; };
class TextComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.twoColumns = false;
        this.textColor = _enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].black;
        this.textData = { name: '', esp: '', eng: '' };
        this.lang = 'esp';
    }
    ngOnInit() {
        this.getText();
    }
    getText() {
        this.dataService.getText(this.ref).subscribe((text) => {
            this.textData = text;
        });
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["app-text"]], inputs: { ref: "ref", alignStyle: "alignStyle", twoColumns: "twoColumns", textColor: "textColor" }, decls: 1, vars: 8, consts: [[1, "main-p", 3, "innerHTML", "ngStyle", "ngClass"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.textData.esp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.alignStyle, ctx.textColor))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.twoColumns));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".two-columns[_ngcontent-%COMP%] {\r\n  column-count: 2;\r\n  column-gap: 30px;\r\n}\r\n\r\n  a{\r\n  color: inherit;\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .two-columns[_ngcontent-%COMP%] {\r\n    column-count: 1;\r\n    column-gap: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGVBQWU7RUFHZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0U7SUFHRSxlQUFlO0lBR2YsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoidGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3by1jb2x1bW5zIHtcclxuICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAtbW96LWNvbHVtbi1jb3VudDogMjtcclxuICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG4gIC1tb3otY29sdW1uLWdhcDogMzBweDtcclxuICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudHdvLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgIC13ZWJraXQtY29sdW1uLWdhcDogMDtcclxuICAgIC1tb3otY29sdW1uLWdhcDogMDtcclxuICAgIGNvbHVtbi1nYXA6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], twoColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class FooterComponent {
    constructor() {
        this.fafacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookSquare"];
        this.fainsta = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.famail = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.fayoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 49, vars: 4, consts: [[1, "row", "wrapper"], [1, "col", "col-sm-4", "info"], ["src", "./assets/img/logo.png", 1, "logo"], [1, "col", "col-sm-8"], [1, "row", "section-parent"], [1, "col", "col-sm-5", "section"], [1, "title"], [1, "row", "map"], [1, "col", "col-sm-6"], [1, "col", "col-sm-4", "section"], [1, "row", "section"], [1, "icon-rrss", "icon-mail", 3, "icon"], [1, "icons"], [1, "icon-rrss", "icon-insta", 3, "icon"], [1, "icon-rrss", 3, "icon"], [1, "col", "col-sm-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TRIBAL&FLAMES \u00B7 ANNA DE MAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WEB DONE IN BARCELONA 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EXPLORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sobre Tribak&Flames");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sobre Anna de Mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T&F Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Descuentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "F.A.Q.S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mi Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "annademas.tribaldance@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SOCIAL MEDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.famail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fainsta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fafacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fayoutube);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["footer[_ngcontent-%COMP%]{\r\n  height: 160px;\r\n  background-image: url(\"/assets/img/header_bg.jpg\");\r\n  background-size: cover;\r\n  text-align: center;\r\n  color: white;\r\n  margin: auto;\r\n  text-align: left;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\npadding: 0;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  max-width: 90vw;\r\n  width: 1300px;\r\n  margin: auto;\r\n}\r\n\r\n.section-parent[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  height: 160px;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]{\r\n    height: 130px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  height: 160px;\r\n  justify-content: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  width: 300px\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  text-align: left;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.icon-rrss[_ngcontent-%COMP%]{\r\n  font-size: 1.5em;\r\n  margin: 0 20px;\r\n}\r\n\r\n.icon-mail[_ngcontent-%COMP%], .icon-insta[_ngcontent-%COMP%]{\r\n  font-size: 1.5em;\r\n  margin-left: 0;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n\r\n  footer[_ngcontent-%COMP%]{\r\n    height: 120px; \r\n    line-height: 120px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\r\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 275px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]{\r\n    height: 80px; \r\n    line-height: 80px;  \r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUU7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXJfYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNvbHtcclxucGFkZGluZzogMDtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIHdpZHRoOiAxMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wYXJlbnR7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbn1cclxuXHJcbi5pbmZve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDMwMHB4XHJcbn1cclxuXHJcbnVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmljb24tcnJzc3tcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcbi5pY29uLW1haWwsIC5pY29uLWluc3Rhe1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuICBmb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDEyMHB4OyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgZm9vdGVyIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICBmb290ZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICB9XHJcblxyXG4gIGZvb3RlcntcclxuICAgIGhlaWdodDogODBweDsgXHJcbiAgICBsaW5lLWhlaWdodDogODBweDsgIFxyXG4gIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nKEM":
/*!***********************************************************************!*\
  !*** ./src/app/sections/pages/discounts/ventaja/ventaja.component.ts ***!
  \***********************************************************************/
/*! exports provided: VentajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentajaComponent", function() { return VentajaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-components/action-btn/action-btn.component */ "vj6W");



class VentajaComponent {
    constructor() { }
    ngOnInit() { }
    onClick(event) { }
}
VentajaComponent.ɵfac = function VentajaComponent_Factory(t) { return new (t || VentajaComponent)(); };
VentajaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VentajaComponent, selectors: [["app-ventaja"]], inputs: { ventaja: "ventaja" }, decls: 6, vars: 3, consts: [[1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", 3, "innerText"], [1, "card-text", 3, "innerHTML"], ["text", "IR AL VENDEDOR", "justifyStyle", "left", 3, "clicked"]], template: function VentajaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-action-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function VentajaComponent_Template_app_action_btn_clicked_5_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ventaja.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.ventaja.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.ventaja.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_1__["ActionBtnComponent"]], styles: ["[_nghost-%COMP%] {\r\n    margin: auto;\r\n    position: relative;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    margin: 2em 1em;\r\n  }\r\n  \r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    width: 395px;\r\n    border-radius: 15px;\r\n    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.61);\r\n    border: none;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .card-text[_ngcontent-%COMP%]{\r\n      height: 185px;\r\n  }\r\n  \r\n  .card-title[_ngcontent-%COMP%]{\r\n      font-weight: bold;\r\n  }\r\n  \r\n  @media only screen and (max-width: 450px) {\r\n    .card[_ngcontent-%COMP%] {\r\n      width: 280px;\r\n    }\r\n \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhamEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUVuQixnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxpQkFBaUI7RUFDckI7O0VBQ0E7SUFDRTtNQUNFLFlBQVk7SUFDZDs7RUFFRiIsImZpbGUiOiJ2ZW50YWphLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbjogMmVtIDFlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAzOTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0e1xyXG4gICAgICBoZWlnaHQ6IDE4NXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC10aXRsZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG4gXHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentajaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ventaja',
                templateUrl: './ventaja.component.html',
                styleUrls: ['./ventaja.component.css']
            }]
    }], function () { return []; }, { ventaja: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "o8x9":
/*!*******************************************************************!*\
  !*** ./src/app/sections/pages/courses/course/course.component.ts ***!
  \*******************************************************************/
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
            console.log(params.id);
        });
    }
    ngOnDestroy() { }
    onClick(event) { }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 7, vars: 0, consts: [["name", "courses-banner"], [1, "container", "p-5"], ["ref", "inicial-title", "alignStyle", "center"], ["ref", "inicial-intro", "alignStyle", "center"], ["ref", "inicial-intro-2", "alignStyle", "center"], ["text", "PRUEBA UNA CLASE GRATUITA", "justifyStyle", "center", 3, "clicked"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-input-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-action-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CourseComponent_Template_app_action_btn_clicked_6_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["app-input-mail[_ngcontent-%COMP%] {\r\n  margin: auto 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWlucHV0LW1haWwge1xyXG4gIG1hcmdpbjogYXV0byAzZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styleUrls: ['./course.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ok5a":
/*!***************************************************************************!*\
  !*** ./src/app/sections/pages/shows/contratanos/contratanos.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContratanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratanosComponent", function() { return ContratanosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sections/enums/enumColors */ "Ims2");
/* harmony import */ var src_app_sections_enums_enumFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sections/enums/enumFonts */ "6Sw2");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");
/* harmony import */ var _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-components/video/video.component */ "sbax");







class ContratanosComponent {
    constructor() {
        this.titleColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.textColor = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.titleFont = src_app_sections_enums_enumFonts__WEBPACK_IMPORTED_MODULE_2__["Fonts"].century;
        this.videosTop = [
            '../../../../assets/videos/anna0.mp4',
            '../../../../assets/videos/anna1.mp4',
            '../../../../assets/videos/anna2.mp4'
        ];
    }
    ngOnInit() { }
}
ContratanosComponent.ɵfac = function ContratanosComponent_Factory(t) { return new (t || ContratanosComponent)(); };
ContratanosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContratanosComponent, selectors: [["app-contratanos"]], decls: 41, vars: 11, consts: [[1, "contratanos"], [1, "info"], ["ref", "contratanos-title", "alignStyle", "left", 3, "textColor", "font"], ["ref", "contratanos-description", "alignStyle", "left", 3, "textColor"], [1, "video-container", "row"], [1, "video", "col", "col-4"], [3, "videoUrl", "radius"], [1, "title"], [1, "text"], ["src", "../../../../../assets/img/04_Shows/soon1.jpg"], ["src", "../../../../../assets/img/04_Shows/soon2.jpg"]], template: function ContratanosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00ABWHITE GALAXY\u00BB (FLOW IMPRO)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "T&F Crew - Promoci\u00F3n I + II + III + Online crew Spain 2020 Improvisado a partir del lenguaje de combos T&F\u00AE. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00ABJARA\u00BB (GUERRA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "T&F Crew - Promoci\u00F3n II Badalona 2020 Fiesta para la Igualdad de G\u00E9nero en La Rotllana. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00ABPHOENIX\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "T&F Crew - Promoci\u00F3n II Badalona 2020 Fiesta para la Igualdad de G\u00E9nero en La Rotllana. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00ABSTARFALL\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "T&F Crew - Promoci\u00F3n I + II + III + Online crew Spain 2020 Improvisado a partir del lenguaje de combos T&F\u00AE. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00ABSHAMANIC BEATS\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "T&F Crew - Promoci\u00F3n III SOON. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00ABMATI SYRA ZEMLYA\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "T&F Crew - Promoci\u00F3n II Intermediate SOON. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.titleColor)("font", ctx.titleFont);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.textColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoUrl", "../../../../assets/videos/anna0.mp4")("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoUrl", "../../../../assets/videos/anna0.mp4")("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoUrl", "../../../../assets/videos/anna0.mp4")("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoUrl", "../../../../assets/videos/anna0.mp4")("radius", 10);
    } }, directives: [_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _shared_components_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]], styles: [".contratanos[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-image: url('background.jpg');\r\n    position: relative;\r\n    margin-top: -80px; \r\n    padding-top: 120px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    max-width: 870px;\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n\r\napp-text-title[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\napp-text-title[_ngcontent-%COMP%]::before {\r\n    background: transparent url(/assets/img/01_about/objetivo/tick.png) scroll 0 0 no-repeat;\r\n    content: \"\";\r\n    width: 18px;\r\n    height: 20px;\r\n    position: absolute;\r\n    left: -5px;\r\n    top: 2px;\r\n    background-position: center;\r\n  }\r\n\r\n.video-container[_ngcontent-%COMP%]{\r\n      padding-top: 2em;\r\n      max-width: 1300px;\r\n      margin: auto;\r\n  }\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    width: 100%;\r\n    margin-bottom: 1em;\r\n\r\n  }\r\n\r\n.video[_ngcontent-%COMP%]{\r\n      margin-bottom: 3em;\r\n  }\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-family: 'Bebas Neue Regular', sans-serif;\r\n    color:white;\r\n    font-size: 24px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n    font-family: 'Rubik', sans-serif;\r\n    color: white;\r\n    font-size: 18px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYXRhbm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUNBQTBFO0lBQzFFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdGQUF3RjtJQUN4RixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUiwyQkFBMkI7RUFDN0I7O0FBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLFlBQVk7RUFDaEI7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjs7RUFFcEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUU7SUFDRSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoiY29udHJhdGFub3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmF0YW5vc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy8wNF9TaG93cy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC04MHB4OyBcclxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxufVxyXG5cclxuLmluZm97XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDg3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5hcHAtdGV4dC10aXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXBwLXRleHQtdGl0bGU6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWcvMDFfYWJvdXQvb2JqZXRpdm8vdGljay5wbmcpIHNjcm9sbCAwIDAgbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvLWNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gIH1cclxuXHJcbiAgLnZpZGVve1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUgUmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuICAudGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratanosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contratanos',
                templateUrl: './contratanos.component.html',
                styleUrls: ['./contratanos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qbMw":
/*!*******************************************************!*\
  !*** ./src/app/sections/pages/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        // vars to control menu position
        this.contentBottomPos = 450;
        this.contentPos = this.contentBottomPos;
        this.breakpointMoveMenu = 300;
    }
    canDeactivate() {
        console.log('can');
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qmvS":
/*!****************************************************************************!*\
  !*** ./src/app/sections/pages/home/image-slider/image-slider.component.ts ***!
  \****************************************************************************/
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
            { img: '/assets/img/00_home/galeria/00.jpg' },
            { img: '/assets/img/00_home/galeria/01.jpg' },
            { img: '/assets/img/00_home/galeria/02.jpg' },
            { img: '/assets/img/00_home/galeria/03.jpg' },
        ];
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        };
    }
    ngOnInit() { }
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
                styleUrls: ['./image-slider.component.css'],
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myTestDiv']
        }] }); })();


/***/ }),

/***/ "sbax":
/*!*********************************************************************!*\
  !*** ./src/app/sections/shared-components/video/video.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "border-radius": a0 }; };
class VideoComponent {
    constructor() {
        this.radius = 0;
    }
    ngOnInit() { }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { videoUrl: "videoUrl", radius: "radius" }, decls: 3, vars: 4, consts: [["autoplay", "", "muted", "", "loop", "", 3, "ngStyle"], ["type", "video/mp4", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.radius + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["video[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.css']
            }]
    }], function () { return []; }, { videoUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "/Lhg");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "jM2g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "kVkw");








const _c0 = function (a0) { return { "margin-top": a0 }; };
class LayoutComponent {
    constructor(router) {
        this.router = router;
        // vars to control header anim
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
        this.alwaysClosed = true;
        this.mainPos = this.headerHeight;
    }
    onWindowScroll() {
        this.shrinkHeader();
    }
    onWindowResize() {
        this.resizeHeader();
        this.shrinkHeader();
    }
    ngOnInit() {
        this.getUrl();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.getUrl();
            }
        });
    }
    getUrl() {
        if (!this.router.url || this.router.url === '/') {
            this.alwaysClosed = false;
        }
        else {
            this.alwaysClosed = true;
        }
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
        if (this.alwaysClosed || offset > this.breakpointHeaderShrink) {
            this.headerHeight = this.maxHeaderHeight - this.breakpointHeaderShrink;
            this.linearTransition = 0;
            this.solidMenuBackground = true;
            if (this.alwaysClosed) {
                this.mainPos = this.headerHeight + 50;
            }
            else {
                this.mainPos = this.headerHeight;
            }
        }
        else {
            this.headerHeight = this.maxHeaderHeight - offset;
            this.mainPos = this.headerHeight;
            this.linearTransition = 1 - offset / this.breakpointHeaderShrink;
            this.solidMenuBackground = false;
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.mainPos + "px"));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@media screen and (max-width: 768px) {\r\n  main[_ngcontent-%COMP%]{\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow: auto;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7RUFDaEI7RUFDQSIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIG1haW57XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "vHrw":
/*!**************************************************************!*\
  !*** ./src/app/sections/pages/home/intro/intro.component.ts ***!
  \**************************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _shared_components_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/vimeo/vimeo.component */ "SHqL");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");
/* harmony import */ var _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-components/action-btn/action-btn.component */ "vj6W");







class IntroComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    onClick(event) {
        console.log('button');
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 7, vars: 1, consts: [[1, "row", "intro-container"], [1, "col-md-6", "col-xl-6", "intro-video"], [3, "videoId"], [1, "col-md-6", "col-xl-6", "intro-text"], ["ref", "home-title", "alignStyle", "left"], ["ref", "home-intro", "alignStyle", "left"], ["text", "CONOCE M\u00C1S", "justifyStyle", "start", 3, "clicked"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vimeo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-action-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function IntroComponent_Template_app_action_btn_clicked_6_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", 482704655);
    } }, directives: [_shared_components_vimeo_vimeo_component__WEBPACK_IMPORTED_MODULE_2__["VimeoComponent"], _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_3__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _shared_components_action_btn_action_btn_component__WEBPACK_IMPORTED_MODULE_5__["ActionBtnComponent"]], styles: [".intro-text[_ngcontent-%COMP%] {\r\n  padding: 3em;\r\n}\r\n\r\n.intro-video[_ngcontent-%COMP%] {\r\n  padding: 0em;\r\n}\r\n\r\n.intro-text[_ngcontent-%COMP%] {\r\n  max-width: 650px;\r\n  font-size: 18px;\r\n}\r\n\r\napp-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n@media screen and (max-width: 1199px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.7rem;\r\n  }\r\n  .intro-text[_ngcontent-%COMP%] {\r\n    padding: 0.5em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) and (max-width: 991px) {\r\n  .intro-video[_ngcontent-%COMP%] {\r\n    padding-top: 3em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .intro-text[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n    max-width: none;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .intro-container[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby10ZXh0IHtcclxuICBwYWRkaW5nOiAzZW07XHJcbn1cclxuXHJcbi5pbnRyby12aWRlbyB7XHJcbiAgcGFkZGluZzogMGVtO1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmFwcC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuICAuaW50cm8tdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmludHJvLXZpZGVvIHtcclxuICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5pbnRyby10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5pbnRyby1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.css'],
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


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
/* harmony import */ var _sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/pages/aboutribal/aboutribal.component */ "0uuF");
/* harmony import */ var _sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/pages/courses/courses.component */ "GJC6");
/* harmony import */ var _sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/pages/courses/course/course.component */ "o8x9");
/* harmony import */ var _sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/pages/home/home.component */ "qbMw");
/* harmony import */ var _sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/pages/shows/shows.component */ "iGcB");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/pages/aboutanna/aboutanna.component */ "ZUx4");
/* harmony import */ var _sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/pages/crew/crew.component */ "Z6cI");
/* harmony import */ var _sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/pages/discounts/discounts.component */ "T8Zm");
/* harmony import */ var _sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/pages/faq/faq.component */ "DAO0");















const routes = [
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule)
    },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _sections_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
            {
                path: 'about',
                component: _sections_pages_aboutribal_aboutribal_component__WEBPACK_IMPORTED_MODULE_2__["AboutribalComponent"]
            },
            {
                path: 'cursos',
                component: _sections_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"]
            },
            {
                path: 'cursos/:id',
                component: _sections_pages_courses_course_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"]
            },
            {
                path: 'annademas',
                component: _sections_pages_aboutanna_aboutanna_component__WEBPACK_IMPORTED_MODULE_9__["AboutannaComponent"]
            },
            {
                path: 'crew',
                component: _sections_pages_crew_crew_component__WEBPACK_IMPORTED_MODULE_10__["CrewComponent"]
            },
            {
                path: 'shows',
                component: _sections_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_6__["ShowsComponent"]
            },
            {
                path: 'descuentos',
                component: _sections_pages_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_11__["DiscountsComponent"]
            },
            {
                path: 'faq',
                component: _sections_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"]
            }
        ]
    },
    {
        path: 'not-found',
        component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
        data: { message: '404 Page not found' }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'ignore',
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: 'ignore',
                        anchorScrolling: 'enabled',
                        scrollPositionRestoration: 'enabled',
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vj6W":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/shared-components/action-btn/action-btn.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ActionBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBtnComponent", function() { return ActionBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "justify-content": a0 }; };
class ActionBtnComponent {
    constructor() {
        this.disable = false;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClick() {
        this.clicked.emit();
    }
}
ActionBtnComponent.ɵfac = function ActionBtnComponent_Factory(t) { return new (t || ActionBtnComponent)(); };
ActionBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBtnComponent, selectors: [["app-action-btn"]], inputs: { text: "text", justifyStyle: "justifyStyle", disable: "disable" }, outputs: { clicked: "clicked" }, decls: 3, vars: 5, consts: [[1, "d-flex", 3, "ngStyle"], [3, "disabled", "click"]], template: function ActionBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBtnComponent_Template_button_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.justifyStyle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: 0.25rem;\r\n  color: white;\r\n  background-color: #fa413e;\r\n  border: none;\r\n  margin: 2em 0 0 0;\r\n  font-family: 'Rubik-Light', sans-serif;\r\n  min-width: 170px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #a22e2a;\r\n  border: none;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  button[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  button[_ngcontent-%COMP%] {\r\n    min-width: 123px;\r\n    font-size: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1idG4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiYWN0aW9uLWJ0bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTQxM2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMmVtIDAgMCAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWstTGlnaHQnLCBzYW5zLXNlcmlmO1xyXG4gIG1pbi13aWR0aDogMTcwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyMmUyYTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDEyM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-btn',
                templateUrl: './action-btn.component.html',
                styleUrls: ['./action-btn.component.css']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], justifyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "xDA7":
/*!****************************************************************!*\
  !*** ./src/app/sections/pages/crew/quotes/quotes.component.ts ***!
  \****************************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sections/enums/enumColors */ "Ims2");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/text-title/text-title.component */ "3FV8");
/* harmony import */ var _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-components/text/text.component */ "k4kv");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["slickModal"];
function QuotesComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.imgUrl + "/" + quote_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuotesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuotesComponent_div_8_div_2_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", slide_r2);
} }
class QuotesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.colorTitle = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.colorText = src_app_sections_enums_enumColors__WEBPACK_IMPORTED_MODULE_1__["Colors"].white;
        this.name = 'quotes-imgs';
        this.slides = [];
        this.imgs = [];
        this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].IMAGES_URL;
        this.screen = 'big';
        this.otherSlides = [];
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: true
        };
    }
    onWindowResize() {
        this.arrangeQuotes();
    }
    ngOnInit() {
        this.getQuotes();
    }
    getQuotes() {
        this.dataService.getSlider(this.name).subscribe((response) => {
            this.imgs = response.esp;
            this.arrangeQuotes();
        }, (error) => {
            console.log(error);
        });
    }
    arrangeQuotes() {
        this.slides.length = 0;
        let quotes = [];
        this.slickModal.unslick();
        let numberPerSlide;
        if (window.innerWidth < 576) {
            console.log('menos de 4');
            numberPerSlide = 4;
            this.screen = 'small';
        }
        else if (window.innerWidth < 900) {
            console.log('menos de 9');
            numberPerSlide = 9;
            this.screen = 'medium';
        }
        else {
            console.log('mas');
            numberPerSlide = 12;
            this.screen = 'big';
        }
        this.imgs.forEach((img) => {
            quotes.push(img.img);
            if (quotes.length === numberPerSlide) {
                this.slides.push(quotes);
                quotes = [];
            }
        });
        if (quotes.length > 0) {
            this.slides.push(quotes);
        }
        quotes = [];
        this.slickModal.unslick();
    }
}
QuotesComponent.ɵfac = function QuotesComponent_Factory(t) { return new (t || QuotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
QuotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesComponent, selectors: [["app-quotes"]], viewQuery: function QuotesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickModal = _t.first);
    } }, hostBindings: function QuotesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function QuotesComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 4, consts: [[1, "quotes"], [1, "center-quotes", "d-flex"], [1, "info"], ["ref", "quotes-title", "alignStyle", "left", 1, "title", 3, "textColor"], ["ref", "quotes-text", "alignStyle", "left", 1, "description", 3, "textColor"], [1, "quotes-container"], [3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "quotes-grid"], ["class", "quote", 4, "ngFor", "ngForOf"], [1, "quote"], [1, "quote-container"], [3, "src"]], template: function QuotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-slick-carousel", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuotesComponent_div_8_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.colorTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textColor", ctx.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_shared_components_text_title_text_title_component__WEBPACK_IMPORTED_MODULE_4__["TextTitleComponent"], _shared_components_text_text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickItemDirective"]], styles: [".quotes[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-image: url('background.jpg');\r\n    position: relative;\r\n    padding: 3em;\r\n    background-size: cover;\r\n\r\n}\r\n\r\n.center-quotes[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap;\r\n  max-width: 1500px;\r\n  margin: auto;\r\n  justify-content: center;\r\n}\r\n\r\n.description[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{\r\n    max-width: 340px;\r\n    width: 100%;\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\napp-text-title[_ngcontent-%COMP%]::before {\r\n    background: transparent url(/assets/img/01_about/objetivo/tick.png) scroll 0 0 no-repeat;\r\n    content: \"\";\r\n    width: 18px;\r\n    height: 20px;\r\n    position: absolute;\r\n    left: -5px;\r\n    top: 2px;\r\n    background-position: center;\r\n  }\r\n\r\n.quotes-grid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    align-content: space-between;\r\n    width: 850px;\r\n    height: 700px;\r\n\r\n  }\r\n\r\n.quotes-container[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    width: 850px;\r\n    height: 700px;\r\n  }\r\n\r\n.info[_ngcontent-%COMP%]{\r\n    margin-right: 5em;\r\n  }\r\n\r\n.quote[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: auto;\r\n    display: block;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n  }\r\n\r\n@media only screen and (max-width: 1400px){\r\n    .quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 150px;\r\n      height:150px;\r\n    }\r\n\r\n    .quotes-grid[_ngcontent-%COMP%]{\r\n      width: 700px;\r\n      height: 500px;\r\n\r\n    }\r\n\r\n    .center-quotes[_ngcontent-%COMP%]{\r\n      justify-content: space-around;\r\n      align-content: space-around;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .description[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{\r\n        max-width: 100%;\r\n    }\r\n    .info[_ngcontent-%COMP%]{\r\n        align-items: flex-center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVDQUF5RTtJQUN6RSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksd0ZBQXdGO0lBQ3hGLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLDJCQUEyQjtFQUM3Qjs7QUFHQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTs7RUFFZjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtFQUNmOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUNGOzs7OztNQUtNOztBQUVOOzs7Ozs7Ozs7OztHQVdHOztBQUVEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCOztFQUVwQjs7QUFHQTtJQUNFO01BQ0UsWUFBWTtNQUNaLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixhQUFhOztJQUVmOztJQUVBO01BQ0UsNkJBQTZCO01BQzdCLDJCQUEyQjtJQUM3QjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJxdW90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvMDVfQ3Jldy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4uY2VudGVyLXF1b3Rlc3tcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uLCAudGl0bGV7XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbmFwcC10ZXh0LXRpdGxlOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC9hc3NldHMvaW1nLzAxX2Fib3V0L29iamV0aXZvL3RpY2sucG5nKSBzY3JvbGwgMCAwIG5vLXJlcGVhdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAucXVvdGVzLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcblxyXG4gIH1cclxuICAucXVvdGVzLWNvbnRhaW5lcntcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mb3tcclxuICAgIG1hcmdpbi1yaWdodDogNWVtO1xyXG4gIH1cclxuXHJcbiAgLnF1b3Rle1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuLyogICAgLnF1b3RlLWNvbnRhaW5lcntcclxuICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgfSAqL1xyXG4gICBcclxuLyogLnF1b3RlLWNvbnRhaW5lcjpob3Zlcjo6YmVmb3JlIHtcclxuXHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDEydncgc29saWQgIzAwRDQ4QztcclxuICAgIGJvcmRlci1sZWZ0OiAxMnZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDAuMnZ3O1xyXG4gICAgcmlnaHQ6IDAuMXZ3O1xyXG59ICovXHJcblxyXG4gIC5xdW90ZSBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgLnF1b3RlIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5xdW90ZXMtZ3JpZHtcclxuICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyLXF1b3Rlc3tcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxufVxyXG5cclxuICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAuZGVzY3JpcHRpb24sIC50aXRsZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5mb3tcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1jZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quotes',
                templateUrl: './quotes.component.html',
                styleUrls: ['./quotes.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { slickModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slickModal']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "yZXi":
/*!********************************************************************!*\
  !*** ./src/app/sections/pages/home/parallax/parallax.component.ts ***!
  \********************************************************************/
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
    onWindowScroll() {
        this.getOffsetY();
    }
    onWindowResize() {
        this.getOffsetY();
    }
    ngOnInit() {
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
        return ((this.top - offset - this.height) / -this.height) * (max - min) + min;
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
                styleUrls: ['./parallax.component.css'],
            }]
    }], function () { return []; }, { parallax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['parallax', { static: true }]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "z7ZW":
/*!***********************************************************************!*\
  !*** ./src/app/sections/shared-components/banner/banner.component.ts ***!
  \***********************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-bridge/data.service */ "k1FV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "background-image": a0 }; };
class BannerComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.image = 'url("/assets/img/01_about/banner.png")';
        this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].IMAGES_URL;
    }
    ngOnInit() {
        this.dataService.getImg(this.name).subscribe((response) => {
            console.log(this.imgUrl + '/' + response.esp);
            this.image = 'url(' + this.imgUrl + '/' + response.esp + ')';
            //  this.ref = this.imgUrl + '/' + response.esp;
        }, (error) => {
            console.log(error);
        });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { name: "name" }, decls: 1, vars: 3, consts: [[1, "banner", 3, "ngStyle"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.image));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".banner[_ngcontent-%COMP%] {\r\n  background-image: url('/assets/img/01_about/banner.png');\r\n  width: 100%;\r\n  height: 26vw;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .banner[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0RBQXdEO0VBQ3hELFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nLzAxX2Fib3V0L2Jhbm5lci5wbmcnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI2dnc7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return [{ type: src_app_data_bridge_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zBRZ":
/*!************************************************************************!*\
  !*** ./src/app/sections/pages/home/statements/statements.component.ts ***!
  \************************************************************************/
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
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        };
    }
    ngOnInit() {
        this.statements.push(`<span class="accent">TORCHES UP! </span> AND LET'S BURN!`);
        this.statements.push(`<span class="accent">TORCHES UP! </span> AND LET\'S BURN!`);
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
                styleUrls: ['./statements.component.css'],
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