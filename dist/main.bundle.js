/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/
    --sidebar-text: rgb(0, 0, 0);
    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/
    --project-icon: rgba(177, 96, 231, 0.5);
}

/*
 * ------------------------------------------------------------
 * General Styling
 * ------------------------------------------------------------
 */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
}

input[type="checkbox"],
input[type="radio"] {
    cursor: pointer;
}

/* input[type="checkbox"] {
    width: 2em;
    height: 2em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
input[type="checkbox"]:checked {
    background-color: var(--sidebar-hover-background);
} */

.action-btns {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.action-btn {
    cursor: pointer;
    padding: 1rem;
    border: 2px solid #00000010;
    border-radius: 50%;
}
.action-btn:hover {
    background-color: var(--sidebar-hover-background);
}

/*
 * ------------------------------------------------------------
 * Page Layout Styling
 * ------------------------------------------------------------
 */

.content {
    box-sizing: content-box;
    display: grid;
    grid: 1fr 5fr / 1fr 4fr;
    width: 100vw;
    height: 100vh;
}

/*
 * ------------------------------------------------------------
 * Sidebar Styling
 * ------------------------------------------------------------
 */

.sidebar {
    grid-area: 1 / 1 / -1 / 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    color: var(--sideabar-text);
    background-color: var(--sidebar-background);
    z-index: 2;
    overflow-y: auto;
}

.logo {
    text-align: center;
    padding-top: 1.5rem;
}

.sidebar-heading {
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-weight: bold;
}

.sidebar-menu,
.sidebar-projects-menu {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-left: 2rem;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 0 0.8rem 1rem;
    font-size: large;
    border-radius: 10px;
}

.sidebar-item:hover {
    cursor: pointer;
    background-color: var(--sidebar-hover-background);
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    height: 20px;
    width: 20px;
}

.project-icon {
    color: var(--project-icon);
}

/*
 * ------------------------------------------------------------
 * Header Styling
 * ------------------------------------------------------------
 */

.header {
    grid-area: 1 / 2 / 2 / -1;
    background-color: #ffffff;
    box-shadow: 0 10px 15px #00000025;
    z-index: 1;
}

/*
 * ----------------------
 * All Projects Header Styling
 * ----------------------
 */
.all-projects-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    height: 100%;
}

.create-project-header-btn {
    padding: 1rem 2rem;
    background-color: var(--sidebar-background);
}
.create-project-header-btn:hover {
    background-color: var(--sidebar-hover-background);
}

/*
 * ----------------------
 * Project Header Styling
 * ----------------------
 */
.project-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    height: 100%;
    border: 2px solid;
}

.project-header-details {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.project-title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.project-header-title {

}

.project-header-description {

}

/*
 * ------------------------------------------------------------
 * Form Styling
 * ------------------------------------------------------------
 */
/*
* ----------------------
* General Form Styling
* ----------------------
*/
.title-input:focus,
.date-input:focus,
.desc-input:focus {
    outline: none;
    border: 2px solid #006eff;
} 

.modal {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.form-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: auto;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 10px 15px #00000025;
} 

.creation-form,
.delete-form,
.colour-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
}

.field-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 80%;
}

/*
 * ----------------------
 * Form Button Styling
 * ----------------------
 */ 

.form-btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.submit-btn {
    width: 80%;
    color: #ffffff;
    background-color: rgb(0, 89, 255);
}

.cancel-btn {
    color: rgb(0, 89, 255);
    background-color: #ffffff;
}

.form-btn {
    padding: 0.5rem 1rem;
    border: 2px solid rgb(0, 89, 255);
}

/*
 * ----------------------
 * Creation Form Styling
 * ----------------------
 */ 
.form-label {
    color: rebeccapurple;
}

.title-input,
.date-input {
    height: 30px;
}

.desc-input {
    resize: none;
    height: 50px;
    padding: 0.4rem 0;
}

.priority-field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.5rem;
}
/*
 * ----------------------
 * Deletion Form Styling
 * ----------------------
 */
 
/*
 * ----------------------
 * Colour Picker Form Styling
 * ----------------------
 */ 
.colour-fieldset {
    display: grid;
    grid-template-rows: repeat(2, minmax(1fr, 50px));
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 3px;
}

.colour-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}

.colour-radio-btn {
    outline: 2px solid;
}

/*
 * ------------------------------------------------------------
 * Content Body Styling
 * ------------------------------------------------------------
 */

.content-body {
    grid-area: 2 / 2 / -2 / -1;
    background-color: rgb(226, 232, 240);
    overflow-y: auto;
    /* padding-right: calc(100vw - 100%); */
}

/*
 * ----------------------
 * All Projects Styling
 * ----------------------
 */
.project-card-grid {
    display: grid;
    grid-auto-rows: 200px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    padding: 2rem;
} 

.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    height: 200px;
    width: auto;
    border: 2px solid #000000;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 10px 15px #00000025;
}

.project-card-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/*
 * ----------------------
 * Today Content Styling
 * ----------------------
 */

.section-divider {
    display: flex;
    align-items: center;
    margin-left: -2rem;
} 
.section-divider::before {
    flex-grow: 1;
    content: "";
    height: 1px;
    margin: 0 1rem 0 2rem;
    background-color: #000000;
}
.section-divider::after {
    flex-grow: 100;
    content: "";
    height: 1px;
    margin: 0 2rem 0 1rem;
    background-color: #000000;
}

/*
 * ----------------------
 * Project Content Styling
 * ----------------------
 */
.task-list-container,
.steps-list {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-left: 2rem;
    gap: 10px;
    margin-top: 10px;
}

.project-task-item {
    margin-top: 1rem;
}

.task-list {
    padding: 0 2rem 1rem;
}

.project-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem 1rem;
    font-size: large;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 15px #00000025;
} 

.project-list-item-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.project-list-task-details {
    display: flex;
    flex-direction: column;
}

.project-list-step-info {
    display: flex;
    flex-direction: column;
}

/*
 * ----------------------
 * Priority Icon Styling
 * ----------------------
 */
 .priority-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.2rem;
    width: 2.5rem;
    font-weight: bold;
    font-size: small;
}

.priority-high {
    color: #ae2e24;
    background-color: #ffeceb;
}

.priority-med {
    color: #5e4db2;
    background-color: #f3f0ff;
}

.priority-low {
    color: #0055cc;
    background-color: #e9f2ff;
}

.priority-none {
    color: #000000;
    background-color: #f0f1f4;
}

.completed {
    background-color: rgb(210, 210, 210);
    color: #6a6a6a;
}

/*
 * ------------------------------------------------------------
 * Footer Styling
 * ------------------------------------------------------------
 */

/* .footer {
    grid-area: -2 / 1 / -1 / -1;
    text-align: center;
    padding: 1rem 0;
    background-color: #ffffff;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C,EAAE,4BAA4B;IAC5E,4BAA4B;IAC5B,qDAAqD,EAAE,qDAAqD;IAC5G,uCAAuC;AAC3C;;AAEA;;;;EAIE;AACF;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;AACtB;AACA;IACI,iDAAiD;AACrD;;AAEA;;;;EAIE;;AAEF;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,2BAA2B;IAC3B,2CAA2C;IAC3C,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,yBAAyB;IACzB,iCAAiC;IACjC,UAAU;AACd;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,2CAA2C;AAC/C;AACA;IACI,iDAAiD;AACrD;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;;;EAIE;AACF;;;;CAIC;AACD;;;IAGI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;;;IAGI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,UAAU;AACd;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;;;;EAIE;AACF;IACI,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;;;;EAIE;;AAEF;;;;EAIE;AACF;IACI,aAAa;IACb,gDAAgD;IAChD,qCAAqC;IACrC,WAAW;IACX,WAAW;IACX,eAAe;IACf,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;EAIE;;AAEF;IACI,0BAA0B;IAC1B,oCAAoC;IACpC,gBAAgB;IAChB,uCAAuC;AAC3C;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,qBAAqB;IACrB,2DAA2D;IAC3D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;;;EAIE;AACF;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;EAIE;CACD;IACG,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;IACpC,cAAc;AAClB;;AAEA;;;;EAIE;;AAEF;;;;;GAKG","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000010;\r\n    border-radius: 50%;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    grid: 1fr 5fr / 1fr 4fr;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -1 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid rgb(118, 118, 118);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n    overflow-y: auto;\r\n    /* padding-right: calc(100vw - 100%); */\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.steps-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n.completed {\r\n    background-color: rgb(210, 210, 210);\r\n    color: #6a6a6a;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n/* .footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/models/enums/actionButtons.js":
/*!*******************************************!*\
  !*** ./src/models/enums/actionButtons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Actions: () => (/* binding */ Actions)
/* harmony export */ });
/* Action button classname ENUM */
const Actions = {
    CREATE: "add-button",
    COLOUR: "colour-button",
    EDIT: "edit-button",
    DELETE: "delete-button",
}



/***/ }),

/***/ "./src/models/enums/colours.js":
/*!*************************************!*\
  !*** ./src/models/enums/colours.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colours: () => (/* binding */ Colours),
/* harmony export */   DefaultColour: () => (/* binding */ DefaultColour),
/* harmony export */   isValidColour: () => (/* binding */ isValidColour)
/* harmony export */ });
/* Colour ENUM */
const Colours = {
    NONE: "#7E8180",
    RED: "#E1341E",
    BLUE: "#0E09F6",
    GREEN: "#0CF33D",
    PURPLE: "#F30CC2",
    YELLOW: "#F1F609",
    // TEAL: "#1ecbe1",
}

/* Default option */
const DefaultColour = Colours.NONE;

/* Checks whether the colour value is valid */
function isValidColour(colour) {
    return Object.values(Colours).includes(colour);
}



/***/ }),

/***/ "./src/models/enums/organizer.js":
/*!***************************************!*\
  !*** ./src/models/enums/organizer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Organizers: () => (/* binding */ Organizers),
/* harmony export */   isValidOrganizer: () => (/* binding */ isValidOrganizer)
/* harmony export */ });
/* Organizer ENUM */
const Organizers = {
    PROJECT: "Project",
    TASK: "Task",
    STEP: "Step",
}

/* Checks whether the colour value is valid */
function isValidOrganizer(organizer) {
    return Object.values(Organizers).includes(organizer);
}



/***/ }),

/***/ "./src/models/enums/priority.js":
/*!**************************************!*\
  !*** ./src/models/enums/priority.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultPriority: () => (/* binding */ DefaultPriority),
/* harmony export */   Priority: () => (/* binding */ Priority),
/* harmony export */   isValidPriority: () => (/* binding */ isValidPriority)
/* harmony export */ });
/* Priority ENUM */
const Priority = {
    NONE: "None",
    LOW: "Low",
    MED: "Med",
    HIGH: "High",
}

/* Default option */
const DefaultPriority = Priority.NONE;

/* Checks whether the priority value is valid */
function isValidPriority(priority) {
    return Object.values(Priority).includes(priority);
}



/***/ }),

/***/ "./src/models/enums/status.js":
/*!************************************!*\
  !*** ./src/models/enums/status.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* binding */ Status),
/* harmony export */   isValidStatus: () => (/* binding */ isValidStatus)
/* harmony export */ });
/* Status ENUM */
const Status = {
    COMPLETED: "Completed",
    INCOMPLETE: "Incomplete",
}

/* Checks whether the status property is valid */
function isValidStatus(status) {
    return Object.values(Status).includes(status);
}



/***/ }),

/***/ "./src/models/organizers/factories/projectFactory.js":
/*!***********************************************************!*\
  !*** ./src/models/organizers/factories/projectFactory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFactory)
/* harmony export */ });
/* harmony import */ var _enums_colours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/colours.js */ "./src/models/enums/colours.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/status.js */ "./src/models/enums/status.js");



/* Creates a single instance of a project object */
function projectFactory(title, description, projectID) {
    let colour = _enums_colours_js__WEBPACK_IMPORTED_MODULE_0__.DefaultColour;
    let taskCount = 0;
    const incompleteTasks = [];
    const completedTasks = [];
    let currentTask = null;

    /* Returns task count and increments it */
    function getNextTaskCount() {
        const count = taskCount;
        taskCount++;
        
        return count;
    }

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(newDescription) {
        description = newDescription;
    }

    function getColour() {
        return colour;
    }

    function setColour(newColour) {
        if ((0,_enums_colours_js__WEBPACK_IMPORTED_MODULE_0__.isValidColour)(newColour)) {
            colour = newColour;
        }
    }

    function getIncompleteTasks() {
        return incompleteTasks;
    }

    /* Add a task to the project */
    function addToIncompleteTasks(task) {
        incompleteTasks.push(task);
    }

    /* Remove an incomplete task from the project (and add to completeTasks if valid) */
    function removeFromIncompleteTasks(task) {
        incompleteTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                incompleteTasks.splice(index, 1);
            }
            // Conditionally add to completedTasks
            if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED) {
                addToCompletedTasks(task);
            }
        });
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addToCompletedTasks(task) {
        completedTasks.push(task);
    }

    /* Remove a completed task from the project (and add to incompletedTasks if valid) */
    function removeFromCompletedTasks(task) {
        completedTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                completedTasks.splice(index, 1);
            }
            // Conditionally add to completedTasks
            if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.INCOMPLETE) {
                addToIncompleteTasks(task);
            }
        });
    }

    function getProjectID() {
        return projectID;
    }

    function getCurrentTask() {
        return currentTask;
    }

    function setCurrentTask(newTask) {
        currentTask = newTask;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getColour, setColour,
        getIncompleteTasks, addToIncompleteTasks, removeFromIncompleteTasks,
        getCompletedTasks, addToCompletedTasks, removeFromCompletedTasks, 
        getProjectID,
        getNextTaskCount,
        getCurrentTask, setCurrentTask, 
    };
}

/***/ }),

/***/ "./src/models/organizers/factories/stepFactory.js":
/*!********************************************************!*\
  !*** ./src/models/organizers/factories/stepFactory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stepFactory)
/* harmony export */ });
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/status */ "./src/models/enums/status.js");


/* Creates a single instance of a step object */
function stepFactory(title, projectID, taskID, stepID) {
    let status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        status = newStatus;
    }

    function swapStatus() {
        if (status === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;
        }
        else {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED;
        }
    }

    function getProjectID() {
        return projectID;
    }

    function getTaskID() {
        return taskID;
    }

    function getStepID() {
        return stepID;
    }

    return { 
        getTitle, setTitle, 
        getStatus, setStatus, swapStatus, 
        getProjectID, getTaskID, getStepID,
    }
}

/***/ }),

/***/ "./src/models/organizers/factories/taskFactory.js":
/*!********************************************************!*\
  !*** ./src/models/organizers/factories/taskFactory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskFactory)
/* harmony export */ });
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/status */ "./src/models/enums/status.js");


/* Creates a single instance of a task object */
function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const incompleteSteps = [];
    const completedSteps = [];
    let status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;
    let currentStep = null;

    /* Returns step count and increments it */
    function getNextStepCount() {
        const count = stepCount;
        stepCount++;

        return count;
    }

    function getTitle() {
        return title;
    }

    function setTitle(newTitle) {
        title = newTitle;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(newDescription) {
        description = newDescription;
    }

    function getDueDate() {
        return dueDate;
    }
    
    function setDueDate(newDueDate) {
        dueDate = newDueDate;
    }

    function getPriority() {
        return priority;
    }
    
    function setPriority(newPriority) {
        priority = newPriority;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        status = newStatus;
    }

    function swapStatus() {
        if (status === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;
        }
        else {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED;
        }
    }

    function getIncompleteSteps() {
        return incompleteSteps;
    }

    /* Add a step to the task */
    function addToIncompleteSteps(step) {
        incompleteSteps.push(step);
    }

    /* Remove a step from incompleteSteps (and add to completedSteps if valid) */
    function removeFromIncompleteSteps(step) {
        incompleteSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                incompleteSteps.splice(index, 1);
            }
            // Conditionally add to completedSteps
            if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
                addToCompletedSteps(step);
            }
        });
    }

    function getCompletedSteps() {
        return completedSteps;
    }

    /* Add a completed step to the task */
    function addToCompletedSteps(step) {
        completedSteps.push(step);
    }

    /* Remove a completed step from the task (and add to incompleteSteps if valid) */
    function removeFromCompletedSteps(step) {
        completedSteps.forEach((stepElement, index) => {
            if (step.getStepID() === stepElement.getStepID()) {
                completedSteps.splice(index, 1);
            }
            // Conditionally add to incompleteSteps
            if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE) {
                addToIncompleteSteps(step);
            }
        });
    }

    function getProjectID() {
        return projectID;
    }

    function getTaskID() {
        return taskID;
    }

    function getCurrentStep() {
        return currentStep;
    }

    function setCurrentStep(newStep) {
        currentStep = newStep;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getDueDate, setDueDate, 
        getPriority, setPriority, 
        getStatus, setStatus, swapStatus, 
        getIncompleteSteps, addToIncompleteSteps, removeFromIncompleteSteps, 
        getCompletedSteps, removeFromCompletedSteps, 
        getProjectID, getTaskID, 
        getNextStepCount,
        getCurrentStep, setCurrentStep, 
    };
}

/***/ }),

/***/ "./src/models/organizers/project.js":
/*!******************************************!*\
  !*** ./src/models/organizers/project.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectFromForm: () => (/* binding */ createProjectFromForm),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProjectColourFromForm: () => (/* binding */ editProjectColourFromForm),
/* harmony export */   editProjectFromForm: () => (/* binding */ editProjectFromForm),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory */ "./src/models/organizers/factories/projectFactory.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _pages_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/sidebar/sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");




/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    const defaultProject = (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "Default project",
        projectID,
    )

    projects.push(defaultProject);
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    const newProject = (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        title,
        description,
        projectID,
    )

    projects.push(newProject);
    setCurrentProject(newProject);
}

// /* Replace an existing project with a new one */
// function replaceProject(project) {
//     projects.forEach(element => {
//         if (element.getProjectID() === project.getProjectID()) {
//             element = project;
//             setCurrentProject(project);
//         }
//     })
// }

/* Delete an existing project */
function deleteProject(project) {
    projects.forEach((projectItem, index) => {
        if (projectItem.getProjectID() === project.getProjectID()) {
            projects.splice(index, 1);
            return;
        }
    })
}

/* Returns project count and increments it */
function getNextProjectCount() {
    const count = projectCount;
    projectCount++;
    return count;
}

/* Creates a project from creation form */
function createProjectFromForm() {
    const title = document.querySelector("#project-title").value;
    const desc = document.querySelector("#project-desc").value;

    createProject(title, desc);
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_1__.renderAllProjectsPage)(projects);
    (0,_pages_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__.addToSidebarProjects)(getCurrentProject());
}

/* Edits a project based on information in edit form */
function editProjectFromForm(project) {
    const newTitle = document.querySelector("#project-title").value;
    const newDesc = document.querySelector("#project-desc").value;

    project.setTitle(newTitle);
    project.setDescription(newDesc);
}

/* Edits the colour of a project based on colour picker form */
function editProjectColourFromForm(project) {
    const newColour = document.querySelector("input[type='radio']:checked").value;

    project.setColour(newColour);
}

function getProjects() {
    return projects;
}

function getCurrentProject() {
    return currentProject;
}

function setCurrentProject(newProject) {
    currentProject = newProject;
}

let projectCount = 0;
const projects = [];
let currentProject = null;



/***/ }),

/***/ "./src/models/organizers/step.js":
/*!***************************************!*\
  !*** ./src/models/organizers/step.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStep: () => (/* binding */ createStep),
/* harmony export */   createStepFromForm: () => (/* binding */ createStepFromForm),
/* harmony export */   editStep: () => (/* binding */ editStep),
/* harmony export */   editStepFromForm: () => (/* binding */ editStepFromForm)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display */ "./src/pages/display.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/models/organizers/project.js");




/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, projectID, taskID, stepID);

    task.addToIncompleteSteps(newStep);
}

/* Edit an existing step */
function editStep(step, title) {
    step.setTitle(title);
}

/* Creates a step from creation form */
function createStepFromForm() {
    const title = document.querySelector("#step-title").value;

    createStep((0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)().getCurrentTask(), title);
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_1__.clearPage)();
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_1__.renderProjectPage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());
}

/* Edits a step based on information in edit form */
function editStepFromForm(step) {
    const newTitle = document.querySelector("#step-title").value;

    step.setTitle(newTitle);
}



/***/ }),

/***/ "./src/models/organizers/task.js":
/*!***************************************!*\
  !*** ./src/models/organizers/task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   createTaskFromForm: () => (/* binding */ createTaskFromForm),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   editTaskFromForm: () => (/* binding */ editTaskFromForm)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/taskFactory */ "./src/models/organizers/factories/taskFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/models/organizers/project.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");





/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.getProjectID();
    const taskID = project.getNextTaskCount();
    const newTask = (0,_factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, projectID, taskID);

    project.addToIncompleteTasks(newTask);
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    task.setTitle(title);
    task.setDescription(task, description);
    task.setDueDate(task, dueDate);
    task.setPriority(task, priority);
    task.setStatus(task, status);
}

/* Creates a task from creation form */
function createTaskFromForm() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    createTask((0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)(), title, desc, date, priority);
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());
}

/* Edits a task based on information in edit form */
function editTaskFromForm(task) {
    const newTitle = document.querySelector("#task-title").value;
    const newDesc = document.querySelector("#task-desc").value;
    const newDate = document.querySelector("#task-date").value;
    const newPriority = document.querySelector("input[name='priority']:checked").value;

    task.setTitle(newTitle);
    task.setDescription(newDesc);
    task.setDueDate(newDate);
    task.setPriority(newPriority);
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    task.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    // Mark incomplete steps
    task.getIncompleteSteps().forEach(step => {
        step.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    });
}



/***/ }),

/***/ "./src/modules/eventListeners/actionButtonListeners/index.js":
/*!*******************************************************************!*\
  !*** ./src/modules/eventListeners/actionButtonListeners/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createActionButtonListener: () => (/* binding */ createActionButtonListener)
/* harmony export */ });
function createActionButtonListener(btn, eventFunction) {
    btn.addEventListener("click", (e) => {
        eventFunction();        
        e.stopPropagation();
    });
}



/***/ }),

/***/ "./src/modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js":
/*!******************************************************************************************!*\
  !*** ./src/modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectColourButtonListener: () => (/* binding */ projectColourButtonListener),
/* harmony export */   projectCreateTaskButtonListener: () => (/* binding */ projectCreateTaskButtonListener),
/* harmony export */   projectDeleteButtonListener: () => (/* binding */ projectDeleteButtonListener),
/* harmony export */   projectEditButtonListener: () => (/* binding */ projectEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");



function projectCreateTaskButtonListener(project) {
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateTaskForm(project);
}

function projectColourButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderColourPickerForm(); 
}

function projectEditButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditProjectForm();
}

function projectDeleteButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteProjectForm();
}



/***/ }),

/***/ "./src/modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js":
/*!***************************************************************************************!*\
  !*** ./src/modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stepDeleteButtonListener: () => (/* binding */ stepDeleteButtonListener),
/* harmony export */   stepEditButtonListener: () => (/* binding */ stepEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");



function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
            return;
        }
    });
}

function stepEditButtonListener(step) {
    setCurrentTaskFromID((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditStepForm();
}

function stepDeleteButtonListener(step) {
    setCurrentTaskFromID((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteStepForm();
}



/***/ }),

/***/ "./src/modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js":
/*!***************************************************************************************!*\
  !*** ./src/modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskCreateStepButtonListener: () => (/* binding */ taskCreateStepButtonListener),
/* harmony export */   taskDeleteButtonListener: () => (/* binding */ taskDeleteButtonListener),
/* harmony export */   taskEditButtonListener: () => (/* binding */ taskEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");



function taskCreateStepButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateStepForm();
}

function taskEditButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditTaskForm();
}

function taskDeleteButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteTaskForm();
}



/***/ }),

/***/ "./src/modules/eventListeners/allProjectsListeners.js":
/*!************************************************************!*\
  !*** ./src/modules/eventListeners/allProjectsListeners.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAllProjectsListeners)
/* harmony export */ });
/* harmony import */ var _utility_projectNavigationListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/projectNavigationListeners */ "./src/modules/eventListeners/utility/projectNavigationListeners.js");


function createAllProjectsListeners(projects) {
    (0,_utility_projectNavigationListeners__WEBPACK_IMPORTED_MODULE_0__.createProjectPageNavigationListeners)(projects, ".project-card");
}

/***/ }),

/***/ "./src/modules/eventListeners/checkboxListeners.js":
/*!*********************************************************!*\
  !*** ./src/modules/eventListeners/checkboxListeners.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStepStatusListener: () => (/* binding */ createStepStatusListener),
/* harmony export */   createTaskStatusListener: () => (/* binding */ createTaskStatusListener)
/* harmony export */ });
/* harmony import */ var _models_enums_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/organizers/project */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/organizers/task */ "./src/models/organizers/task.js");
/* harmony import */ var _pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/projectPage/stepsCardHandler */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _pages_projectPage_tasksCardHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/projectPage/tasksCardHandler */ "./src/pages/projectPage/tasksCardHandler.js");






function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().setCurrentTask(task);
            return;
        }
    });
}

function setCurrentStepFromID(steps, stepID) {
    steps.forEach(step => {
        if (String(step.getStepID()) === stepID) {
            (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
            return;
        }
    });
}

function taskStatusToggleListener(checkbox) {
    const taskCard = checkbox.parentElement.parentElement;
    // Searches both lists the current task
    setCurrentTaskFromID((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getIncompleteTasks(), String(taskCard.getAttribute("data-task-id")));
    setCurrentTaskFromID((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCompletedTasks(), String(taskCard.getAttribute("data-task-id")));

    const task = (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask();

    // Toggle the tasks complete status
    task.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (task.getStatus() === _models_enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            setTaskStatusCompleteHandler(task);
        } else {
            setTaskStatusIncompleteHandler(task);
        }
    }, 100);
}

function setTaskStatusCompleteHandler(task) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromIncompleteTasks(task);
    (0,_pages_projectPage_tasksCardHandler__WEBPACK_IMPORTED_MODULE_4__.setTaskCardCompleted)(task);
}

function setTaskStatusIncompleteHandler(task) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromCompletedTasks(task);
    (0,_pages_projectPage_tasksCardHandler__WEBPACK_IMPORTED_MODULE_4__.setTaskCardIncomplete)(task);
}

/* Handles initialization of the event listener for marking the completion status of tasks */
function createTaskStatusListener(checkbox) {
    checkbox.addEventListener("change", () => taskStatusToggleListener(checkbox));
}

function stepStatusToggleListener(checkbox) {
    const stepCard = checkbox.parentElement.parentElement;
    setCurrentTaskFromID((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getIncompleteTasks(), String(stepCard.getAttribute("data-task-id")));
    // Searches both lists the current step
    setCurrentStepFromID((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().getIncompleteSteps(), String(stepCard.getAttribute("data-step-id")));
    setCurrentStepFromID((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().getCompletedSteps(), String(stepCard.getAttribute("data-step-id")));

    const step = (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().getCurrentStep();

    // Toggle the steps complete status
    step.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (step.getStatus() === _models_enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            setStepStatusCompleteHandler(step);
        } else {
            setStepStatusIncompleteHandler(step);
        }
    }, 100);
}

function setStepStatusCompleteHandler(step) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromIncompleteSteps(step);
    (0,_pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_3__.setStepCardCompleted)(step);
}

function setStepStatusIncompleteHandler(step) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromCompletedSteps(step);
    (0,_pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_3__.setStepCardIncomplete)(step);
}

/* Handles initialization of the event listener for marking the completion status of steps */
function createStepStatusListener(checkbox) {
    checkbox.addEventListener("change", () => stepStatusToggleListener(checkbox));
}



/***/ }),

/***/ "./src/modules/eventListeners/formButtonListeners/index.js":
/*!*****************************************************************!*\
  !*** ./src/modules/eventListeners/formButtonListeners/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFormCancelButtonListener: () => (/* binding */ createFormCancelButtonListener),
/* harmony export */   createFormSubmitButtonListener: () => (/* binding */ createFormSubmitButtonListener)
/* harmony export */ });
function createFormSubmitButtonListener(btn, submitFunction, modal) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        submitFunction();
        modal.style.display = "none";
    });
}

function createFormCancelButtonListener(btn, modal) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
    });
}



/***/ }),

/***/ "./src/modules/eventListeners/index.js":
/*!*********************************************!*\
  !*** ./src/modules/eventListeners/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAllProjectsListeners: () => (/* reexport safe */ _allProjectsListeners__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createSidebarListeners: () => (/* reexport safe */ _sidebarListeners__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebarListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarListeners */ "./src/modules/eventListeners/sidebarListeners.js");
/* harmony import */ var _allProjectsListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allProjectsListeners */ "./src/modules/eventListeners/allProjectsListeners.js");





/***/ }),

/***/ "./src/modules/eventListeners/sidebarListeners.js":
/*!********************************************************!*\
  !*** ./src/modules/eventListeners/sidebarListeners.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSidebarListeners)
/* harmony export */ });
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _utility_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/projectNavigationListeners.js */ "./src/modules/eventListeners/utility/projectNavigationListeners.js");



/* Make the all projects sidebar button link to the all projects page */
function createAllProjectsButtonListener(projects) {
    const allProjectsButton = document.querySelector(".all-projects-button");

    allProjectsButton.addEventListener("click", () => {
        (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
        (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.renderAllProjectsPage)(projects);
    })
}

/* Give all sidebar project buttons functionality */
function createSidebarListeners(projects) {
    createAllProjectsButtonListener(projects);
    (0,_utility_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageNavigationListeners)(projects, ".sidebar-project-button");
}

/***/ }),

/***/ "./src/modules/eventListeners/utility/projectNavigationListeners.js":
/*!**************************************************************************!*\
  !*** ./src/modules/eventListeners/utility/projectNavigationListeners.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectNavigationListener: () => (/* binding */ addProjectNavigationListener),
/* harmony export */   createProjectPageNavigationListeners: () => (/* binding */ createProjectPageNavigationListeners)
/* harmony export */ });
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");




/* Make a group of project navigation DOM elements link to their project page */
function createProjectPageNavigationListeners(projects, className) {
    const projectNavElements = document.querySelectorAll(className);

    // Link each project navigation element to a project page
    projectNavElements.forEach(element => {
        projects.forEach(project => {
            if (String(project.getProjectID()) === element.getAttribute("data-project-id")) {
                element.addEventListener("click", () => {
                    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project);
                    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectPage)(project);
                })
            }
        })
    })
}

/* Make a single project navigation DOM element like to a project page */
function addProjectNavigationListener(projects, item) {
    projects.forEach(project => {
        if (String(project.getProjectID()) === item.getAttribute("data-project-id")) {
            item.addEventListener("click", () => {
                (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project);
                (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectPage)(project);
                return;
            })
        }
    })
}



/***/ }),

/***/ "./src/pages/allProjectsPage/index.js":
/*!********************************************!*\
  !*** ./src/pages/allProjectsPage/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProjectCard: () => (/* binding */ deleteProjectCard),
/* harmony export */   editProjectCardColour: () => (/* binding */ editProjectCardColour),
/* harmony export */   editProjectCardInformation: () => (/* binding */ editProjectCardInformation),
/* harmony export */   renderAllProjectsPage: () => (/* binding */ renderAllProjectsPage)
/* harmony export */ });
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");






/* Create the page showing all of the current projects */
function renderAllProjectsPage(projects) {
    /* Create the content for the header section */
    function generateHeader() {
        const headerContainer = document.createElement("div");
        headerContainer.classList.add("all-projects-header-container");

        // Title
        const heading = document.createElement("h1");
        heading.textContent = "All Projects";

        // Project button
        const createNewProjectButton = document.createElement("button");
        createNewProjectButton.textContent = "Create New Project";
        createNewProjectButton.classList.add("create-project-header-btn");

        // project button event
        createNewProjectButton.addEventListener("click", () => {
            _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateProjectForm();
        });

        // Appending elements
        headerContainer.appendChild(heading);
        headerContainer.appendChild(createNewProjectButton);

        return headerContainer;
    }

    /* Create the content for the body section */
    function generateContent(projects) {
        /* Create the details section of the card */
        function generateCardDetails(project) {
            // Create project card details
            const projectCardDetails = document.createElement("div");
            projectCardDetails.classList.add("project-card-details");

            // Project name
            const projectName = document.createElement("h2");
            projectName.textContent = project.getTitle();

            // Project description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.getDescription();

            // Appending elements
            projectCardDetails.appendChild(projectName);
            projectCardDetails.appendChild(projectDescription);

            return projectCardDetails;
        }

        /* Creates the logic for the project card action buttons */
        function generateProjectCardButtons(project) {
            // Project Buttons to be created
            const projectCardButtons = [
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project",
                event: () => {
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                    _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderColourPickerForm(); 
                }},
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project",
                event: () => {
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                    _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderEditProjectForm();
                }},
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project",
                event: () => {
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                    _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteProjectForm();
                }},
            ]

            return projectCardButtons;
        }

        const projectCardGrid = document.createElement("div");
        projectCardGrid.classList.add("project-card-grid");

        // Adding each of the projects to a card
        projects.forEach(project => {
            const projectCard = document.createElement("span");
            projectCard.classList.add("project-card");
            // Link to project
            projectCard.setAttribute("data-project-id", project.getProjectID());
            projectCard.style.borderColor = project.getColour();

            // Appending elements
            projectCard.appendChild(generateCardDetails(project));
            projectCard.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__["default"])(generateProjectCardButtons(project)));
            projectCardGrid.appendChild(projectCard);
        });

        return projectCardGrid;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader());

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(projects));

    // Add event listeners
    (0,_modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_1__.createAllProjectsListeners)(projects);
}

/* Updates the project card if project information is edited */
function editProjectCardInformation(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    const cardDetails = projectCard.firstChild;
    cardDetails.firstChild.textContent = project.getTitle();
    cardDetails.lastChild.textContent = project.getDescription();
}

/* Updates the project card if project colour is edited */
function editProjectCardColour(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    
    projectCard.style.borderColor = project.getColour();
}

/* Removes a deleted projects card */
function deleteProjectCard(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);

    projectCard.remove();
}



/***/ }),

/***/ "./src/pages/display.js":
/*!******************************!*\
  !*** ./src/pages/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   clearSidebar: () => (/* binding */ clearSidebar),
/* harmony export */   editProjectCardColour: () => (/* reexport safe */ _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__.editProjectCardColour),
/* harmony export */   editProjectPageColour: () => (/* reexport safe */ _projectPage__WEBPACK_IMPORTED_MODULE_2__.editProjectPageColour),
/* harmony export */   editSidebarProjectColour: () => (/* reexport safe */ _sidebar_sidebarProjectsGenerator__WEBPACK_IMPORTED_MODULE_1__.editSidebarProjectColour),
/* harmony export */   editSidebarProjectTitle: () => (/* reexport safe */ _sidebar_sidebarProjectsGenerator__WEBPACK_IMPORTED_MODULE_1__.editSidebarProjectTitle),
/* harmony export */   forms: () => (/* reexport module object */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   renderAllProjectsPage: () => (/* reexport safe */ _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__.renderAllProjectsPage),
/* harmony export */   renderProjectPage: () => (/* reexport safe */ _projectPage__WEBPACK_IMPORTED_MODULE_2__.renderProjectPage),
/* harmony export */   renderSidebar: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/pages/sidebar/index.js");
/* harmony import */ var _sidebar_sidebarProjectsGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebarProjectsGenerator */ "./src/pages/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage */ "./src/pages/projectPage/index.js");
/* harmony import */ var _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allProjectsPage */ "./src/pages/allProjectsPage/index.js");
/* harmony import */ var _forms_formGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/formGenerator */ "./src/pages/forms/formGenerator.js");






function clearHeader() {
    const header = document.querySelector(".header");
    header.replaceChildren();
}

function clearBody() {
    const body = document.querySelector(".content-body");
    body.replaceChildren();
}

function clearPage() {
    clearHeader();
    clearBody();
}

function clearSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.replaceChildren();
}



/***/ }),

/***/ "./src/pages/forms/formGenerator.js":
/*!******************************************!*\
  !*** ./src/pages/forms/formGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFormModal: () => (/* binding */ generateFormModal),
/* harmony export */   renderColourPickerForm: () => (/* binding */ renderColourPickerForm),
/* harmony export */   renderCreateProjectForm: () => (/* binding */ renderCreateProjectForm),
/* harmony export */   renderCreateStepForm: () => (/* binding */ renderCreateStepForm),
/* harmony export */   renderCreateTaskForm: () => (/* binding */ renderCreateTaskForm),
/* harmony export */   renderDeleteProjectForm: () => (/* binding */ renderDeleteProjectForm),
/* harmony export */   renderDeleteStepForm: () => (/* binding */ renderDeleteStepForm),
/* harmony export */   renderDeleteTaskForm: () => (/* binding */ renderDeleteTaskForm),
/* harmony export */   renderEditProjectForm: () => (/* binding */ renderEditProjectForm),
/* harmony export */   renderEditStepForm: () => (/* binding */ renderEditStepForm),
/* harmony export */   renderEditTaskForm: () => (/* binding */ renderEditTaskForm)
/* harmony export */ });
/* harmony import */ var _textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator */ "./src/pages/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator */ "./src/pages/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer */ "./src/models/enums/organizer.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/task.js */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/organizers/step.js */ "./src/models/organizers/step.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display.js */ "./src/pages/display.js");
/* harmony import */ var _projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projectPage/index.js */ "./src/pages/projectPage/index.js");
/* harmony import */ var _allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../allProjectsPage/index.js */ "./src/pages/allProjectsPage/index.js");
/* harmony import */ var _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _projectPage_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projectPage/tasksCardHandler.js */ "./src/pages/projectPage/tasksCardHandler.js");
/* harmony import */ var _projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projectPage/stepsCardHandler.js */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _models_enums_priority_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _modules_eventListeners_formButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/eventListeners/formButtonListeners/index.js */ "./src/modules/eventListeners/formButtonListeners/index.js");















/* Create the modal which will store all forms */
function generateFormModal(parent) {
    const formModal = document.createElement("div");
    formModal.classList.add("modal");
    parent.appendChild(formModal);
}

/* Handles form creation and display */
function renderForm(form) {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
    formContainer.replaceChildren(form);
    modal.replaceChildren(formContainer);
}

/* Create the form container and title */
function generateFormBase(id, title, formClass) {
    const form = document.createElement("form");
    form.id = id;
    form.classList.add(formClass);

    // Title
    const formTitle = document.createElement("h2");
    formTitle.textContent = title;

    form.appendChild(formTitle);

    return form;
}

/* Create the submit and cancel form buttons */
function addFormButtons(organizerType, actionType, parent, submitFunction) {
    const modal = document.querySelector(".modal");
    const btnIDPrefix = actionType.toLowerCase() + "-" + organizerType.toLowerCase();

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Confirm";
    submitBtn.id =  btnIDPrefix + "-submit-btn";
    submitBtn.classList.add("form-btn", "submit-btn");

    // Submit event
    (0,_modules_eventListeners_formButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_13__.createFormSubmitButtonListener)(submitBtn, submitFunction, modal);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    (0,_modules_eventListeners_formButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_13__.createFormCancelButtonListener)(cancelBtn, modal)

    // Append elements
    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-creation-form", "New Project", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form, _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);

    renderForm(form);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    // All form fields for a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-edit-form", "Edit Project", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Edit", form, () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.editProjectFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editSidebarProjectTitle)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        // TODO: Change These?
        if (document.querySelector(".project-header-container") !== null) {
            (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editProjectPageInformation)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        }
        else {
            (0,_allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__.editProjectCardInformation)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        }
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = document.querySelector("#project-title").value = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getTitle();
    document.querySelector("#project-desc").placeholder = document.querySelector("#project-desc").value = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getDescription();
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-creation-form", "New Task", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Edit", form, _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.createTaskFromForm);

    renderForm(form);

    // Highlight the default priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${_models_enums_priority_js__WEBPACK_IMPORTED_MODULE_12__.DefaultPriority}']`);
    priorityBtn.checked = true;
}

/* Create the form for editing a task */
function renderEditTaskForm() {
    // All form fields for a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-edit-form", "Edit Task", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "EDit", form, () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.editTaskFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editTaskCardInformation)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
    });

    renderForm(form);

    // Fill the form fields with current information
    // TODO: Check if moving this assignment to top works
    const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask();
    document.querySelector("#task-title").placeholder = document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();

    // Highlight the currently selected priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${(0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getPriority()}']`);
    priorityBtn.checked = true;
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const form = generateFormBase("step-creation-form", "New Step", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Create", form, _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.createStepFromForm);

    renderForm(form);
}

/* Create the form for editing a step */
function renderEditStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const form = generateFormBase("step-edit-form", "Edit Step", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Edit", form, () => {
        (0,_models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.editStepFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editStepCardInformation)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#step-title").placeholder = document.querySelector("#step-title").value = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep().getTitle();
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm(deleteFunction) {
    const form = generateFormBase(("confirm-delete-form"), ("Delete Item?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form, deleteFunction);

    renderForm(form);
}

function renderDeleteProjectForm() {
    const deleteFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        (0,_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_9__.removeFromSidebarProjects)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentProject)(null);
        if (document.querySelector(".project-header-container") !== null) {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
            (0,_allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__.renderAllProjectsPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getProjects)());
        }
        else {
            (0,_allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__.deleteProjectCard)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        }
    }

    renderDeleteForm(deleteFunction);
}

function renderDeleteTaskForm() {
    const deleteFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().removeFromIncompleteTasks((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
        (0,_projectPage_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_10__.deleteTaskCard)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().setCurrentTask(null);
    }

    renderDeleteForm(deleteFunction);
}

function renderDeleteStepForm() {
    const deleteFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().removeFromIncompleteSteps((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
        (0,_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_11__.deleteStepCard)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().setCurrentStep(null);
    }

    renderDeleteForm(deleteFunction);
}

function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons());
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Colour", form, () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.editProjectColourFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editSidebarProjectColour)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        if (document.querySelector(".project-header-container") !== null) {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editProjectPageColour)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        }
        else {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editProjectCardColour)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        }
    });

    renderForm(form);

    // Highlight the currently selected colour
    const colourBtn = document.querySelector(`.colour-radio-btn[id^="colour-"][id$="${(0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getColour().toLowerCase()}"]`);
    colourBtn.checked = true;
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");



/***/ }),

/***/ "./src/pages/forms/radioFieldGenerator.js":
/*!************************************************!*\
  !*** ./src/pages/forms/radioFieldGenerator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColourRadioButtons: () => (/* binding */ generateColourRadioButtons),
/* harmony export */   generatePriorityRadioButtons: () => (/* binding */ generatePriorityRadioButtons)
/* harmony export */ });
/* harmony import */ var _models_enums_priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/priority */ "./src/models/enums/priority.js");
/* harmony import */ var _models_enums_colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/colours */ "./src/models/enums/colours.js");



/* Add the designated legend and fieldset to a container */
function generateRadioButtons(legend, fieldset) {
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");

    fieldContainer.appendChild(legend);
    fieldContainer.appendChild(fieldset);

    return fieldContainer;
}

/* Create a set of radio buttons for the priority options */
function generatePriorityRadioButtons(organizerType) {
    /* Add the radio button options */
    function generatePriorityOptions(organizerType) {
        Object.values(_models_enums_priority__WEBPACK_IMPORTED_MODULE_0__.Priority).forEach(priorityValue => {
            const radioContainer = document.createElement("div");
    
            // ID
            const optionID = organizerType.toLowerCase() + "-" + priorityValue.toLowerCase();
    
            // Input
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = optionID;
            radioInput.name = "priority";
            radioInput.value = priorityValue;
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.textContent = priorityValue;
            radioLabel.for = optionID;
    
            // Append elements
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);
            fieldset.appendChild(radioContainer);
        })
    }

    // Fieldcontainer
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("priority-field");

    // Legend
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    legend.classList.add("form-label");

    // Appending elements
    generatePriorityOptions(organizerType);
    const field = generateRadioButtons(legend, fieldset);

    return field;
}

function generateColourRadioButtons() {
    /* Add the radio button options */
    function generateColourOptions() {
        Object.values(_models_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours).forEach(colourValue => {
            // Colour key
            const colourKey = Object.keys(_models_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours).find(key => _models_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours[key] === colourValue);

            const radioContainer = document.createElement("div");
            radioContainer.style.color = colourValue;
            radioContainer.classList.add("colour-field");
    
            // ID
            const optionID = "colour-" + colourValue.toLowerCase();
    
            // Input
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = optionID;
            radioInput.classList.add("colour-radio-btn");
            radioInput.name = "colour";
            radioInput.value = colourValue;
            radioInput.style.color = colourValue;
            radioInput.style.borderColor = colourValue;
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.textContent = colourKey;
            radioLabel.for = optionID;
    
            // Append elements
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);
            fieldset.appendChild(radioContainer);
        })
    }

    // Fieldset
    const fieldset = document.createElement("div");
    fieldset.classList.add("colour-fieldset");

    // Legend
    const legend = document.createElement("legend");
    legend.textContent = "Colour:";
    legend.classList.add("form-label");

    // Appending elements
    generateColourOptions();
    const field = generateRadioButtons(legend, fieldset);

    return field;
}



/***/ }),

/***/ "./src/pages/forms/textFieldGenerator.js":
/*!***********************************************!*\
  !*** ./src/pages/forms/textFieldGenerator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTextFields)
/* harmony export */ });
/* Create a dlabel for a form field */
function generateLabel(formField) {
    const fieldLabel = document.createElement("label");
    fieldLabel.textContent = formField.labelText;
    fieldLabel.classList.add("form-label");
    fieldLabel.for = formField.id;

    return fieldLabel;
}

/* Create a title form field */
function generateTitleField(formField) {
    // Input
    const fieldInput = document.createElement("input");
    fieldInput.type = formField.inputType;
    fieldInput.id = formField.id;
    formField.classes.forEach(className => {
        fieldInput.classList.add(className);
    });
    fieldInput.name = formField.inputName;
    fieldInput.maxLength = formField.maxLength;

    return fieldInput;
}

/* Create a description form field */
function generateDescriptionField(formField) {
    const fieldInput = document.createElement(formField.inputType);
    fieldInput.id = formField.id;
    formField.classes.forEach(className => {
        fieldInput.classList.add(className);
    });
    fieldInput.name = formField.inputName;
    fieldInput.maxLength = formField.maxLength;
    
    return fieldInput;
}   

/* Create a date form field */
function generateDateField(formField) {
    const fieldInput = document.createElement("input");
    fieldInput.type = formField.inputType;
    fieldInput.id = formField.id;
    formField.classes.forEach(className => {
        fieldInput.classList.add(className);
    });
    fieldInput.name = formField.inputName;
    
    return fieldInput;
}

/* Create a set a set of text fields */
function generateTextFields(fields, parent) {
    fields.forEach(formField => {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("field-container");
    
        // Appending elements
        fieldContainer.appendChild(generateLabel(formField));
        if (formField.inputName ===  "title") {
            fieldContainer.appendChild(generateTitleField(formField));
        }
        else if (formField.inputName ===  "desc") {
            fieldContainer.appendChild(generateDescriptionField(formField));
        }
        else if (formField.inputName ===  "date") {
            fieldContainer.appendChild(generateDateField(formField));
        }
        parent.appendChild(fieldContainer);
    })
}

/***/ }),

/***/ "./src/pages/projectPage/index.js":
/*!****************************************!*\
  !*** ./src/pages/projectPage/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectPageColour: () => (/* binding */ editProjectPageColour),
/* harmony export */   editProjectPageInformation: () => (/* binding */ editProjectPageInformation),
/* harmony export */   editStepCardInformation: () => (/* reexport safe */ _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__.editStepCardInformation),
/* harmony export */   editTaskCardInformation: () => (/* reexport safe */ _tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.editTaskCardInformation),
/* harmony export */   renderProjectPage: () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksCardHandler.js */ "./src/pages/projectPage/tasksCardHandler.js");
/* harmony import */ var _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepsCardHandler.js */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility_actionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/actionButtons */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js");








/* Create the page showing all info for a selected project */
function renderProjectPage(project) {
    /* Create the header displaying project info and actions */
    function generateHeader(project) {
        /* Display project details */
        function generateProjectDetails(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-details");

            // Title
            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.getTitle();
            projectTitle.classList.add("project-header-title");

            // Description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.getDescription();
            projectDescription.classList.add("project-header-description");

            // Append Elements
            projectHeaderInfo.appendChild(projectTitle);
            projectHeaderInfo.appendChild(projectDescription);

            return projectHeaderInfo;
        }

        // Project Buttons to be created
        const projectButtons = [
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.projectCreateTaskButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.projectColourButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.projectEditButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.projectDeleteButtonListener)(project);
            }},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.borderColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_utility_actionButtons__WEBPACK_IMPORTED_MODULE_2__["default"])(projectButtons));

        return projectHeader;
    }

    /* Create the list of tasks and their steps */
    function generateContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        // Incomplete tasks section header
        const taskSectionDivider = document.createElement("h2");
        taskSectionDivider.textContent = "Tasks"
        taskSectionDivider.classList.add("section-divider");

        // List of incomplete tasks
        const incompleteTasksList = document.createElement("ul");
        incompleteTasksList.classList.add("task-list", "incomplete-task-list");

        // Generate incomplete tasks
        taskListContainer.appendChild(taskSectionDivider);
        (0,_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskCards)(project.getIncompleteTasks(), incompleteTasksList);
        taskListContainer.appendChild(incompleteTasksList);

        // Completed tasks section header
        const completedSectionDivider = document.createElement("h2");
        completedSectionDivider.textContent = "Completed"
        completedSectionDivider.classList.add("section-divider");

        // List of completed tasks
        const completedTasksList = document.createElement("ul");
        completedTasksList.classList.add("task-list", "completed-task-list");

        // Generate completed tasks
        taskListContainer.appendChild(completedSectionDivider);
        (0,_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskCards)(project.getCompletedTasks(), completedTasksList);
        taskListContainer.appendChild(completedTasksList);

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(project));
}

/* Updates the project page if project information is edited */
function editProjectPageInformation(project) {
    document.querySelector(".project-header-title").textContent = project.getTitle();
    document.querySelector(".project-header-description").textContent = project.getDescription();
}

/* Updates the project page if project colour is edited */
function editProjectPageColour(project) {
    const projectHeader = document.querySelector(".project-header-container");
    if (projectHeader !== null) {
        projectHeader.style.borderColor = project.getColour();
    }
}



/***/ }),

/***/ "./src/pages/projectPage/stepsCardHandler.js":
/*!***************************************************!*\
  !*** ./src/pages/projectPage/stepsCardHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteStepCard: () => (/* binding */ deleteStepCard),
/* harmony export */   editStepCardInformation: () => (/* binding */ editStepCardInformation),
/* harmony export */   generateStepCards: () => (/* binding */ generateStepCards),
/* harmony export */   setStepCardCompleted: () => (/* binding */ setStepCardCompleted),
/* harmony export */   setStepCardIncomplete: () => (/* binding */ setStepCardIncomplete)
/* harmony export */ });
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _models_enums_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js");








/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step Buttons to be created
        const stepButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.stepEditButtonListener)(step);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.stepDeleteButtonListener)(step)
            }},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item", "step-card");
        // Link to task
        stepItem.setAttribute("data-project-id", step.getProjectID());
        stepItem.setAttribute("data-task-id", step.getTaskID());
        stepItem.setAttribute("data-step-id", step.getStepID());

        // Step Information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion Checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("task-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        (0,_modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__.createStepStatusListener)(completedCheckbox);

        stepInfo.appendChild(completedCheckbox);

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action Buttons for Steps
        const stepActionButtons = (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__["default"])(stepButtons);

        // Append Elements
        stepInfo.appendChild(stepTitle);

        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    // Add all steps to the list
    steps.forEach(step => {
        // Mark current step
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().setCurrentStep(step);

        parent.appendChild(generateStepCard(step));
    });
}

function editStepCardInformation(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    
    // Editing information
    stepCard.firstChild.lastChild.textContent = step.getTitle();
}

/* Modifies a step card once it has been marked as completed */
function setStepCardCompleted(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    // Visually marking as complete
    stepCard.classList.add("completed");
    const parent = stepCard.parentElement;
    // Moves the card to the end of the list
    parent.nextSibling.appendChild(stepCard);
}

/* Modifies a step card once it has been marked as incomplete */
function setStepCardIncomplete(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    // Visually marking as incomplete
    stepCard.classList.remove("completed");
    const parent = stepCard.parentElement;
    console.log(parent);
    console.log(parent.previousSibling);
    // Moves the card to the end of the list
    parent.previousSibling.appendChild(stepCard);
}

/* Removes a deleted steps card */
function deleteStepCard(step) {
    const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

    stepCard.remove();
}



/***/ }),

/***/ "./src/pages/projectPage/tasksCardHandler.js":
/*!***************************************************!*\
  !*** ./src/pages/projectPage/tasksCardHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTaskCard: () => (/* binding */ deleteTaskCard),
/* harmony export */   editTaskCardInformation: () => (/* binding */ editTaskCardInformation),
/* harmony export */   generateTaskCards: () => (/* binding */ generateTaskCards),
/* harmony export */   setTaskCardCompleted: () => (/* binding */ setTaskCardCompleted),
/* harmony export */   setTaskCardIncomplete: () => (/* binding */ setTaskCardIncomplete)
/* harmony export */ });
/* harmony import */ var _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepsCardHandler.js */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js");








/* Create a list of tasks for a project */
function generateTaskCards(tasks, parent) {
    /* Create a task item */
    function generateTask(task) {
        /* Create the checkbox and details of the task */
        function generateTaskHeader(task) {
            /* Display information about the task */
            function generateTaskDetails(task) {
                const taskDetails = document.createElement("div");
                taskDetails.classList.add("project-list-task-details");
                
                const titleContainer = document.createElement("div");
                titleContainer.classList.add("project-title-container");

                // Title
                const taskTitle = document.createElement("h3");
                taskTitle.textContent = task.getTitle();

                // Priority
                const taskPriority = document.createElement("p");
                taskPriority.textContent = task.getPriority();
                const priorityClass = "priority-" + task.getPriority().toLowerCase();
                taskPriority.classList.add("priority-text", priorityClass);

                // Description
                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.getDescription();

                // Due date
                const taskDate = document.createElement("p");
                taskDate.textContent = task.getDueDate() || "No Due Date";;

                titleContainer.appendChild(taskTitle);
                titleContainer.appendChild(taskPriority);
                taskDetails.appendChild(titleContainer);
                taskDetails.appendChild(taskDescription);
                taskDetails.appendChild(taskDate);

                return taskDetails;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.classList.add("task-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            (0,_modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_5__.createTaskStatusListener)(completedCheckbox);

            // Append elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task buttons to be created
        const taskButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.taskCreateStepButtonListener)(task)
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.taskEditButtonListener)(task);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__.taskDeleteButtonListener)(task);
            }},
        ]

        // Task information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item", "task-card");
        // Link to task
        taskItem.setAttribute("data-project-id", task.getProjectID());
        taskItem.setAttribute("data-task-id", task.getTaskID());

        // Append task information elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskButtons));

        return taskItem;
    }

    // Add all tasks to the list
    tasks.forEach(task => {
        // Mark current task
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().setCurrentTask(task);

        const projectTaskItem = document.createElement("li");
        projectTaskItem.classList.add("project-task-item");

        // List of all incomplete steps for current task
        const incompleteStepsList = document.createElement("ul");
        incompleteStepsList.classList.add("steps-list", "incomplete-steps-list");

        // List of all completed steps for current task
        const completedStepsList = document.createElement("ul");
        completedStepsList.classList.add("steps-list", "completed-steps-list");

        // Create task
        projectTaskItem.appendChild(generateTask(task));

        // Append step lists
        projectTaskItem.appendChild(incompleteStepsList);
        projectTaskItem.appendChild(completedStepsList);

        // Create steps
        (0,_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.generateStepCards)(task.getIncompleteSteps(), incompleteStepsList);
        (0,_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.generateStepCards)(task.getCompletedSteps(), completedStepsList);

        parent.appendChild(projectTaskItem);
    })
}

function editTaskCardInformation(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);
    
    // Grabbing information to edit
    const taskInformation = taskCard.firstChild.lastChild;
    const taskTitle = taskInformation.firstChild.firstChild;
    const taskPriority = taskInformation.firstChild.lastChild;
    const taskDesc = taskInformation.firstChild.nextSibling;
    const taskDueDate = taskInformation.lastChild;
    
    // Editing information
    taskTitle.textContent = task.getTitle();
    taskPriority.textContent = task.getPriority();
    taskDesc.textContent = task.getDescription();
    taskDueDate.textContent = task.getDueDate() || "No Due Date";

    // Replacing priority classlist
    taskPriority.className = "";
    const priorityClass = "priority-" + task.getPriority().toLowerCase();
    taskPriority.classList.add("priority-text", priorityClass);
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardCompleted(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

    // Visually marking as complete
    taskCard.classList.add("completed");
    const taskContainer = taskCard.parentElement;
    // Moves the card wrapper to the completed tasks section 
    taskContainer.parentElement.nextSibling.nextSibling.appendChild(taskContainer);

    // Visually marking all incomplete steps as completed
    task.getIncompleteSteps().forEach(step => {
        const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

        stepCard.classList.add("completed");
        stepCard.firstChild.firstChild.checked = true;
    })
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardIncomplete(task) {
    const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

    // Visually marking as incomplete
    taskCard.classList.remove("completed");
    const taskContainer = taskCard.parentElement;
    // Moves the card wrapper to the incomplete tasks section 
    taskContainer.parentElement.previousSibling.previousSibling.appendChild(taskContainer);

    // Visually remarking all incomplete steps as incomplete
    task.getIncompleteSteps().forEach(step => {
        const stepCard = document.querySelector(`.step-card[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);

        stepCard.classList.remove("completed");
        stepCard.firstChild.firstChild.checked = false;
    })
}

/* Removes a deleted tasks card */
function deleteTaskCard(task) {
    const taskCard = document.querySelector(`.task-card[data-task-id="${task.getTaskID()}"]`);

    taskCard.parentElement.remove();
}



/***/ }),

/***/ "./src/pages/sidebar/index.js":
/*!************************************!*\
  !*** ./src/pages/sidebar/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _sidebarProjectsGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarProjectsGenerator */ "./src/pages/sidebar/sidebarProjectsGenerator.js");


function renderSidebar(projects) {
    const sidebar = document.querySelector(".sidebar");

    const listContainer = document.createElement("div");

    // Logo
    const logo = document.createElement("h1");
    logo.textContent = "TODO";
    logo.classList.add("logo");

    // Section header
    const projectHeader = document.createElement("h3");
    projectHeader.textContent = "MY PROJECTS"
    projectHeader.classList.add("sidebar-heading");

    // Project list
    const projectsList = document.createElement("ul");
    projectsList.classList.add("sidebar-projects-menu");

    // All projects button
    const allProjects = document.createElement("li");

    // Appending elements
    sidebar.appendChild(logo);
    listContainer.appendChild(projectHeader);
    (0,_sidebarProjectsGenerator__WEBPACK_IMPORTED_MODULE_0__.renderSidebarProjects)(projects, projectsList);
    listContainer.appendChild(projectsList);
    sidebar.appendChild(listContainer);
}

/***/ }),

/***/ "./src/pages/sidebar/sidebarProjectsGenerator.js":
/*!*******************************************************!*\
  !*** ./src/pages/sidebar/sidebarProjectsGenerator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToSidebarProjects: () => (/* binding */ addToSidebarProjects),
/* harmony export */   editSidebarProjectColour: () => (/* binding */ editSidebarProjectColour),
/* harmony export */   editSidebarProjectTitle: () => (/* binding */ editSidebarProjectTitle),
/* harmony export */   removeFromSidebarProjects: () => (/* binding */ removeFromSidebarProjects),
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/organizers/project */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_utility_projectNavigationListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/eventListeners/utility/projectNavigationListeners */ "./src/modules/eventListeners/utility/projectNavigationListeners.js");



/* Create a sidebar menu item */
function generateSidebarItem(title, iconFunction) {
    const sidebarItem = document.createElement("li");
    sidebarItem.classList.add("sidebar-item");

    // Title
    const itemTitle = document.createElement("p");
    itemTitle.textContent = title;

    sidebarItem.appendChild(iconFunction());
    sidebarItem.appendChild(itemTitle);

    return sidebarItem;
}

/* Create the icon for a project */
function generateProjectIcon(iconColour) {
    const projectIcon = document.createElement("span");
    projectIcon.textContent = "●";
    projectIcon.classList.add("icon", "project-icon");
    projectIcon.style.color = iconColour;

    return projectIcon;
}

/* Create the icon for the all projects icon */
function generateAllProjectIcon() {
    const projectIcon = document.createElement("span");
    projectIcon.classList.add("icon", "project-icon");

    // Icon image
    const iconImage = document.createElement("img");
    iconImage.src = "../src/assets/icons/projects.svg";

    // Appening elements
    projectIcon.appendChild(iconImage);

    return projectIcon;
}

/* Create a project button on the sidebar */
function generateProjectButton(project) {
    const projectItem = generateSidebarItem(project.getTitle(), () => generateProjectIcon(project.getColour()));
    projectItem.classList.add("sidebar-project-button");
    // Link to project
    projectItem.setAttribute("data-project-id", project.getProjectID());

    return projectItem;
}

/* Create an all projects button on the sidebar */
function generateAllProjectsButton() {
    const allProjectsButton = generateSidebarItem("All Projects", generateAllProjectIcon);
    allProjectsButton.classList.add("all-projects-button");
    return allProjectsButton;
}

/* Display all projects on the sidebar */
function renderSidebarProjects(projects, parent) {
    parent.appendChild(generateAllProjectsButton());
    for (let project of projects) {
        parent.appendChild(generateProjectButton(project));
    }
}

/* Add a project to the sidebar display */
function addToSidebarProjects(project) {
    const newProjectBtn = generateProjectButton(project);

    document.querySelector(".sidebar-projects-menu").appendChild(newProjectBtn);
    (0,_modules_eventListeners_utility_projectNavigationListeners__WEBPACK_IMPORTED_MODULE_1__.addProjectNavigationListener)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_0__.getProjects)(), newProjectBtn);
}

/* Edit the title of a sidebar project button */
function editSidebarProjectTitle(project) {
    const sidebarItem = document.querySelector(`.sidebar-project-button[data-project-id="${project.getProjectID()}"]`);
    
    sidebarItem.lastChild.textContent = project.getTitle();
}

/* Edit the colour of a sidebar project button */
function editSidebarProjectColour(project) {
    const sidebarItem = document.querySelector(`.sidebar-project-button[data-project-id="${project.getProjectID()}"]`);
    
    sidebarItem.firstChild.style.color = project.getColour();
}

function removeFromSidebarProjects(project) {
    const sidebarItem = document.querySelector(`.sidebar-project-button[data-project-id="${project.getProjectID()}"]`);

    sidebarItem.remove();
}



/***/ }),

/***/ "./src/pages/utility/actionButtons.js":
/*!********************************************!*\
  !*** ./src/pages/utility/actionButtons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateActionButtons)
/* harmony export */ });
/* harmony import */ var _modules_eventListeners_actionButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/index.js */ "./src/modules/eventListeners/actionButtonListeners/index.js");


/* Creates the action buttons for a organizer */
function generateActionButtons(buttons) {
    const actionBtns = document.createElement("span");
    actionBtns.classList.add("action-btns");

    // Project buttons
    buttons.forEach(btn => {
        // Button container
        const actionButtonContainer = document.createElement("span");
        actionButtonContainer.classList.add("icon", "action-btn");
        btn.classNames.forEach(className => {
            actionButtonContainer.classList.add(className);
        })

        // Button
        const actionBtn = document.createElement("img");
        actionBtn.src = btn.src;
        actionBtn.alt = btn.alt;
        actionBtn.title = btn.title;

        // Button action
        (0,_modules_eventListeners_actionButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_0__.createActionButtonListener)(actionButtonContainer, btn.event)

        // Append elements
        actionButtonContainer.appendChild(actionBtn);

        actionBtns.appendChild(actionButtonContainer);
    })

    return actionBtns;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/organizers/project */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/organizers/task */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/organizers/step */ "./src/models/organizers/step.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/display */ "./src/pages/display.js");
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");







(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)();

// Work project/tasks/steps
(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Work Meetings", "All things work meeting related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1], "Monday Meetings", "All monday work meetings", "", "Med");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getIncompleteTasks()[0], "Morning Meeting");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getIncompleteTasks()[0], "Afternoon Meeting");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1], "Presentation", "All work presentations", "", "None");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getIncompleteTasks()[1], "Generate Financial Graphs");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getIncompleteTasks()[1], "Check report draft for typos");

// School project/tasks/steps
(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[2], "Presentations", "All work presentations", "", "High");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[2].getIncompleteTasks()[0], "Homework");

_pages_display__WEBPACK_IMPORTED_MODULE_4__.renderSidebar((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
_pages_display__WEBPACK_IMPORTED_MODULE_4__.forms.generateFormModal(document.querySelector(".content"));
// display.forms.renderCreateProjectForm();
// display.forms.renderCreateTaskForm();
// display.forms.renderCreateStepForm();
// display.forms.renderDeleteForm();
// display.forms.renderColourPickerForm();
_pages_display__WEBPACK_IMPORTED_MODULE_4__.renderAllProjectsPage((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
// display.renderProjectPage(projects[1]);
(0,_modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__.createSidebarListeners)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRix3QkFBd0IsYUFBYSx5QkFBeUIsYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sa0JBQWtCLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLEtBQUssUUFBUSxLQUFLLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRDRDO0FBQzVDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU07QUFDN0IscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQSxxQkFBcUIsaURBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQU07QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQU07QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJd0Q7QUFDaUM7QUFDRjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQU87QUFDN0I7QUFDQSwwQ0FBMEMsMERBQU8sY0FBYywwREFBTztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVtRjtBQUNuQjtBQUNIO0FBQ0Y7QUFDUjtBQUN1QztBQUNnSTtBQUMxTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhLGdFQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLDhJQUErQjtBQUMvQyxjQUFjO0FBQ2QsYUFBYSxhQUFhLGdFQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLDBJQUEyQjtBQUMzQyxjQUFjO0FBQ2QsYUFBYSxhQUFhLGdFQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLHdJQUF5QjtBQUN6QyxjQUFjO0FBQ2QsYUFBYSxhQUFhLGdFQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLDBJQUEyQjtBQUMzQyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0VBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIZ0U7QUFDRjtBQUNYO0FBQ29CO0FBQ29EO0FBQ3JFO0FBQzZGO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isa0lBQXNCO0FBQ3RDLGNBQWM7QUFDZCxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isb0lBQXdCO0FBQ3hDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzR0FBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxRUFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUFpQjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0cwRDtBQUNNO0FBQ0Y7QUFDWDtBQUNvQjtBQUNzQjtBQUNvRjtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0dBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhLG1FQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLHdJQUE0QjtBQUM1QyxjQUFjO0FBQ2QsYUFBYSxhQUFhLG1FQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLGtJQUFzQjtBQUN0QyxjQUFjO0FBQ2QsYUFBYSxhQUFhLG1FQUFPO0FBQ2pDO0FBQ0EsZ0JBQWdCLG9JQUF3QjtBQUN4QyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxRUFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBaUI7QUFDekIsUUFBUSx1RUFBaUI7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaUJBQWlCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGlCQUFpQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDakk7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGlCQUFpQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDakk7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGlCQUFpQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25NbUU7QUFDbkU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlGO0FBQzhCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdIQUE0QixDQUFDLHVFQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLHVCQUF1QjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsdUJBQXVCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsdUJBQXVCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Z5RztBQUN6RztBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrSEFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEU7QUFDekM7QUFDQTtBQUNYO0FBQ2dDO0FBQzNFO0FBQ0EsZ0ZBQW9CO0FBQ3BCO0FBQ0E7QUFDQSx5RUFBYTtBQUNiO0FBQ0EsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEI7QUFDQSxtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEIsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QjtBQUNBO0FBQ0EseUVBQWE7QUFDYjtBQUNBLG1FQUFVLENBQUMsdUVBQVc7QUFDdEIsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QjtBQUNBLHlEQUFxQixDQUFDLHVFQUFXO0FBQ2pDLG1FQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQTZCLENBQUMsdUVBQVc7QUFDekM7QUFDQSx3RkFBc0IsQ0FBQyx1RUFBVyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL2NvbG91cnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9vcmdhbml6ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvc3RlcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Byb2plY3RBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3N0ZXBBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Rhc2tBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWxsUHJvamVjdHNMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvZm9ybUJ1dHRvbkxpc3RlbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9zaWRlYmFyTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2FsbFByb2plY3RzUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvcmFkaW9GaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvdGV4dEZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2Uvc3RlcHNDYXJkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn0gKi9cclxuXHJcbi5hY3Rpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQ6IDFmciA1ZnIgLyAxZnIgNGZyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFNpZGViYXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51LFxyXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4uYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbn1cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLXRpdGxlIHtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcblxyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLypcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogR2VuZXJhbCBGb3JtIFN0eWxpbmdcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50aXRsZS1pbnB1dDpmb2N1cyxcclxuLmRhdGUtaW5wdXQ6Zm9jdXMsXHJcbi5kZXNjLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xyXG59IFxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5jcmVhdGlvbi1mb3JtLFxyXG4uZGVsZXRlLWZvcm0sXHJcbi5jb2xvdXItZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcblxyXG4uZm9ybS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG4udGl0bGUtaW5wdXQsXHJcbi5kYXRlLWlucHV0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRlc2MtaW5wdXQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRGVsZXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBcclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb2xvdXIgUGlja2VyIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmNvbG91ci1maWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jb2xvdXItZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5jb2xvdXItcmFkaW8tYnRuIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50LWJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogcGFkZGluZy1yaWdodDogY2FsYygxMDB2dyAtIDEwMCUpOyAqL1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59IFxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFRvZGF5IENvbnRlbnQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNlY3Rpb24tZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxufSBcclxuLnNlY3Rpb24tZGl2aWRlcjo6YmVmb3JlIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMCAxcmVtIDAgMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi50YXNrLWxpc3QtY29udGFpbmVyLFxyXG4uc3RlcHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogI2FlMmUyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6ICM1ZTRkYjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbG93IHtcclxuICAgIGNvbG9yOiAjMDA1NWNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcclxufVxyXG5cclxuLnByaW9yaXR5LW5vbmUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9vdGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLyogLmZvb3RlciB7XHJcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDLEVBQUUsNEJBQTRCO0lBQzVFLDRCQUE0QjtJQUM1QixxREFBcUQsRUFBRSxxREFBcUQ7SUFDNUcsdUNBQXVDO0FBQzND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QUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7RUFJRTtBQUNGOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0VBSUU7Q0FDRDtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztBQUNsQjs7QUFFQTs7OztFQUlFOztBQUVGOzs7OztHQUtHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cXHJcXG4gICAgLS1zaWRlYmFyLXRleHQ6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xcclxcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhbCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUGFnZSBMYXlvdXQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IDFmciA1ZnIgLyAxZnIgNGZyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogU2lkZWJhciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGVhYmFyLXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaGVhZGluZyB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1tZW51LFxcclxcbi5zaWRlYmFyLXByb2plY3RzLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci10aXRsZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLypcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKi9cXHJcXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRhdGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xcclxcbn0gXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufSBcXHJcXG5cXHJcXG4uY3JlYXRpb24tZm9ybSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5mb3JtLWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pbnB1dCxcXHJcXG4uZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtaW5wdXQge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIERlbGV0aW9uIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4gXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5jb2xvdXItZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLXJhZGlvLWJ0biB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDb250ZW50IEJvZHkgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5jb250ZW50LWJvZHkge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjMyLCAyNDApO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7ICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG59IFxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxMDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IENvbnRlbnQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lcixcXHJcXG4uc3RlcHMtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LXN0ZXAtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByaW9yaXR5IEljb24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4gLnByaW9yaXR5LXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxyXFxuICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjYWUyZTI0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2ViO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbWVkIHtcXHJcXG4gICAgY29sb3I6ICM1ZTRkYjI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgICBjb2xvcjogIzAwNTVjYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW5vbmUge1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXHJcXG4gICAgY29sb3I6ICM2YTZhNmE7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9vdGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKiAuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAtMiAvIDEgLyAtMSAvIC0xO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIEFjdGlvbiBidXR0b24gY2xhc3NuYW1lIEVOVU0gKi9cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIENSRUFURTogXCJhZGQtYnV0dG9uXCIsXHJcbiAgICBDT0xPVVI6IFwiY29sb3VyLWJ1dHRvblwiLFxyXG4gICAgRURJVDogXCJlZGl0LWJ1dHRvblwiLFxyXG4gICAgREVMRVRFOiBcImRlbGV0ZS1idXR0b25cIixcclxufVxyXG5cclxuZXhwb3J0IHsgQWN0aW9ucyB9IiwiLyogQ29sb3VyIEVOVU0gKi9cclxuY29uc3QgQ29sb3VycyA9IHtcclxuICAgIE5PTkU6IFwiIzdFODE4MFwiLFxyXG4gICAgUkVEOiBcIiNFMTM0MUVcIixcclxuICAgIEJMVUU6IFwiIzBFMDlGNlwiLFxyXG4gICAgR1JFRU46IFwiIzBDRjMzRFwiLFxyXG4gICAgUFVSUExFOiBcIiNGMzBDQzJcIixcclxuICAgIFlFTExPVzogXCIjRjFGNjA5XCIsXHJcbiAgICAvLyBURUFMOiBcIiMxZWNiZTFcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdENvbG91ciA9IENvbG91cnMuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZENvbG91cihjb2xvdXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKENvbG91cnMpLmluY2x1ZGVzKGNvbG91cik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSIsIi8qIE9yZ2FuaXplciBFTlVNICovXHJcbmNvbnN0IE9yZ2FuaXplcnMgPSB7XHJcbiAgICBQUk9KRUNUOiBcIlByb2plY3RcIixcclxuICAgIFRBU0s6IFwiVGFza1wiLFxyXG4gICAgU1RFUDogXCJTdGVwXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZE9yZ2FuaXplcihvcmdhbml6ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKE9yZ2FuaXplcnMpLmluY2x1ZGVzKG9yZ2FuaXplcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE9yZ2FuaXplcnMsIGlzVmFsaWRPcmdhbml6ZXIgfSIsIi8qIFByaW9yaXR5IEVOVU0gKi9cclxuY29uc3QgUHJpb3JpdHkgPSB7XHJcbiAgICBOT05FOiBcIk5vbmVcIixcclxuICAgIExPVzogXCJMb3dcIixcclxuICAgIE1FRDogXCJNZWRcIixcclxuICAgIEhJR0g6IFwiSGlnaFwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0UHJpb3JpdHkgPSBQcmlvcml0eS5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHByaW9yaXR5IHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmluY2x1ZGVzKHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgUHJpb3JpdHksIERlZmF1bHRQcmlvcml0eSwgaXNWYWxpZFByaW9yaXR5IH0iLCIvKiBTdGF0dXMgRU5VTSAqL1xyXG5jb25zdCBTdGF0dXMgPSB7XHJcbiAgICBDT01QTEVURUQ6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBJTkNPTVBMRVRFOiBcIkluY29tcGxldGVcIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXR1cyBwcm9wZXJ0eSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3RhdHVzKS5pbmNsdWRlcyhzdGF0dXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSIsImltcG9ydCB7IERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vZW51bXMvY29sb3Vycy5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgcHJvamVjdCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SUQpIHtcclxuICAgIGxldCBjb2xvdXIgPSBEZWZhdWx0Q29sb3VyO1xyXG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XHJcbiAgICBsZXQgY3VycmVudFRhc2sgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgdGFzayBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFRhc2tDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRhc2tDb3VudDtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvdXIobmV3Q29sb3VyKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRDb2xvdXIobmV3Q29sb3VyKSkge1xyXG4gICAgICAgICAgICBjb2xvdXIgPSBuZXdDb2xvdXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIHRhc2sgdG8gdGhlIHByb2plY3QgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvSW5jb21wbGV0ZVRhc2tzKHRhc2spIHtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYW4gaW5jb21wbGV0ZSB0YXNrIGZyb20gdGhlIHByb2plY3QgKGFuZCBhZGQgdG8gY29tcGxldGVUYXNrcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5mb3JFYWNoKCh0YXNrRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suZ2V0VGFza0lEKCkgPT09IHRhc2tFbGVtZW50LmdldFRhc2tJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNvbXBsZXRlVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBjb21wbGV0ZWRUYXNrc1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9Db21wbGV0ZWRUYXNrcyh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgdGFzayBmcm9tIHRoZSBwcm9qZWN0IChhbmQgYWRkIHRvIGluY29tcGxldGVkVGFza3MgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQ29tcGxldGVkVGFza3ModGFzaykge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHRhc2tFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRUYXNrSUQoKSA9PT0gdGFza0VsZW1lbnQuZ2V0VGFza0lEKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gY29tcGxldGVkVGFza3NcclxuICAgICAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5JTkNPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0luY29tcGxldGVUYXNrcyh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgY3VycmVudFRhc2sgPSBuZXdUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXRDb2xvdXIsIHNldENvbG91cixcclxuICAgICAgICBnZXRJbmNvbXBsZXRlVGFza3MsIGFkZFRvSW5jb21wbGV0ZVRhc2tzLCByZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzLFxyXG4gICAgICAgIGdldENvbXBsZXRlZFRhc2tzLCBhZGRUb0NvbXBsZXRlZFRhc2tzLCByZW1vdmVGcm9tQ29tcGxldGVkVGFza3MsIFxyXG4gICAgICAgIGdldFByb2plY3RJRCxcclxuICAgICAgICBnZXROZXh0VGFza0NvdW50LFxyXG4gICAgICAgIGdldEN1cnJlbnRUYXNrLCBzZXRDdXJyZW50VGFzaywgXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0ZXAgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ09NUExFVEVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldFN0YXR1cywgc2V0U3RhdHVzLCBzd2FwU3RhdHVzLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgZ2V0U3RlcElELFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHRhc2sgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICBsZXQgc3RlcENvdW50ID0gMDtcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSBbXTtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgIGxldCBjdXJyZW50U3RlcCA9IG51bGw7XHJcblxyXG4gICAgLyogUmV0dXJucyBzdGVwIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcENvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3RlcENvdW50O1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ09NUExFVEVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbmNvbXBsZXRlU3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGluY29tcGxldGVTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBzdGVwIHRvIHRoZSB0YXNrICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0luY29tcGxldGVTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLnB1c2goc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIGEgc3RlcCBmcm9tIGluY29tcGxldGVTdGVwcyAoYW5kIGFkZCB0byBjb21wbGV0ZWRTdGVwcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoc3RlcCkge1xyXG4gICAgICAgIGluY29tcGxldGVTdGVwcy5mb3JFYWNoKChzdGVwRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0ZXAuZ2V0U3RlcElEKCkgPT09IHN0ZXBFbGVtZW50LmdldFN0ZXBJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNvbXBsZXRlU3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBjb21wbGV0ZWRTdGVwc1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFN0ZXBzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgc3RlcCBmcm9tIHRoZSB0YXNrIChhbmQgYWRkIHRvIGluY29tcGxldGVTdGVwcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMuZm9yRWFjaCgoc3RlcEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0ZXBJRCgpID09PSBzdGVwRWxlbWVudC5nZXRTdGVwSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkU3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBpbmNvbXBsZXRlU3RlcHNcclxuICAgICAgICAgICAgaWYgKHN0ZXAuZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5JTkNPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0luY29tcGxldGVTdGVwcyhzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGFza0lEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdGVwKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50U3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50U3RlcChuZXdTdGVwKSB7XHJcbiAgICAgICAgY3VycmVudFN0ZXAgPSBuZXdTdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBcclxuICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxyXG4gICAgICAgIGdldFN0YXR1cywgc2V0U3RhdHVzLCBzd2FwU3RhdHVzLCBcclxuICAgICAgICBnZXRJbmNvbXBsZXRlU3RlcHMsIGFkZFRvSW5jb21wbGV0ZVN0ZXBzLCByZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzLCBcclxuICAgICAgICBnZXRDb21wbGV0ZWRTdGVwcywgcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgXHJcbiAgICAgICAgZ2V0TmV4dFN0ZXBDb3VudCxcclxuICAgICAgICBnZXRDdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXAsIFxyXG4gICAgfTtcclxufSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBjbGVhclBhZ2UsIHJlbmRlclNpZGViYXIgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUb1NpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9wYWdlcy9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwcm9qZWN0IHRoYXQgc3RvcmVzIGFsbCB1bmFzc2lnbmVkIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgXCJNaXNjZWxsYW5lb3VzXCIsIFxyXG4gICAgICAgIFwiRGVmYXVsdCBwcm9qZWN0XCIsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICApXHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG4vLyAvKiBSZXBsYWNlIGFuIGV4aXN0aW5nIHByb2plY3Qgd2l0aCBhIG5ldyBvbmUgKi9cclxuLy8gZnVuY3Rpb24gcmVwbGFjZVByb2plY3QocHJvamVjdCkge1xyXG4vLyAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuLy8gICAgICAgICBpZiAoZWxlbWVudC5nZXRQcm9qZWN0SUQoKSA9PT0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKSkge1xyXG4vLyAgICAgICAgICAgICBlbGVtZW50ID0gcHJvamVjdDtcclxuLy8gICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0SXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdEl0ZW0uZ2V0UHJvamVjdElEKCkgPT09IHByb2plY3QuZ2V0UHJvamVjdElEKCkpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIFJldHVybnMgcHJvamVjdCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG5mdW5jdGlvbiBnZXROZXh0UHJvamVjdENvdW50KCkge1xyXG4gICAgY29uc3QgY291bnQgPSBwcm9qZWN0Q291bnQ7XHJcbiAgICBwcm9qZWN0Q291bnQrKztcclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHByb2plY3QgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgYWRkVG9TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgcHJvamVjdCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIHRoZSBjb2xvdXIgb2YgYSBwcm9qZWN0IGJhc2VkIG9uIGNvbG91ciBwaWNrZXIgZm9ybSAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdENvbG91ckZyb21Gb3JtKHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld0NvbG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRcIikudmFsdWU7XHJcblxyXG4gICAgcHJvamVjdC5zZXRDb2xvdXIobmV3Q29sb3VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVByb2plY3RGcm9tRm9ybSwgZWRpdFByb2plY3RGcm9tRm9ybSwgZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybSwgZ2V0UHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IiwiaW1wb3J0IHN0ZXBGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgc3RlcCBhbmQgYWRkcyB0byBhIHRhc2sgKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcCh0YXNrLCB0aXRsZSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gdGFzay5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHRhc2suZ2V0VGFza0lEKCk7XHJcbiAgICBjb25zdCBzdGVwSUQgPSB0YXNrLmdldE5leHRTdGVwQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1N0ZXAgPSBzdGVwRmFjdG9yeSh0aXRsZSwgcHJvamVjdElELCB0YXNrSUQsIHN0ZXBJRCk7XHJcblxyXG4gICAgdGFzay5hZGRUb0luY29tcGxldGVTdGVwcyhuZXdTdGVwKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzdGluZyBzdGVwICovXHJcbmZ1bmN0aW9uIGVkaXRTdGVwKHN0ZXAsIHRpdGxlKSB7XHJcbiAgICBzdGVwLnNldFRpdGxlKHRpdGxlKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHN0ZXAgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVN0ZXAoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLCB0aXRsZSk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHN0ZXAgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRTdGVwRnJvbUZvcm0oc3RlcCkge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gICAgc3RlcC5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVN0ZXAsIGVkaXRTdGVwLCBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgdGFzayBhbmQgYWRkcyB0byBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0LmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gcHJvamVjdC5nZXROZXh0VGFza0NvdW50KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpO1xyXG5cclxuICAgIHByb2plY3QuYWRkVG9JbmNvbXBsZXRlVGFza3MobmV3VGFzayk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc3RpbmcgdGFzayAqL1xyXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHRhc2suc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0YXNrLnNldER1ZURhdGUodGFzaywgZHVlRGF0ZSk7XHJcbiAgICB0YXNrLnNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KTtcclxuICAgIHRhc2suc2V0U3RhdHVzKHRhc2ssIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgYSB0YXNrIGZyb20gY3JlYXRpb24gZm9ybSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKGdldEN1cnJlbnRQcm9qZWN0KCksIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHRhc2sgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrRnJvbUZvcm0odGFzaykge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWU7XHJcblxyXG4gICAgdGFzay5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKG5ld0Rlc2MpO1xyXG4gICAgdGFzay5zZXREdWVEYXRlKG5ld0RhdGUpO1xyXG4gICAgdGFzay5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XHJcbn1cclxuXHJcbi8qIENvbXBsZXRlIGEgdGFzayBhbmQgY29udmVydCBhbGwgc3RlcHMgdG8gcmVxdWlyZWQgc3RhdHVzKi9cclxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2spIHtcclxuICAgIHRhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgLy8gTWFyayBpbmNvbXBsZXRlIHN0ZXBzXHJcbiAgICB0YXNrLmdldEluY29tcGxldGVTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcC5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgZWRpdFRhc2ssIGNvbXBsZXRlVGFzaywgY3JlYXRlVGFza0Zyb21Gb3JtLCBlZGl0VGFza0Zyb21Gb3JtIH0iLCJmdW5jdGlvbiBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lcihidG4sIGV2ZW50RnVuY3Rpb24pIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBldmVudEZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q29sb3VyQnV0dG9uTGlzdGVuZXIocHJvamVjdCkge1xyXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIsIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0Zyb21JRCh0YXNrcywgdGFza0lEKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcodGFzay5nZXRUYXNrSUQoKSkgPT09IHRhc2tJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRTdGVwRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwRGVsZXRlQnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVN0ZXBGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIsIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0VkaXRCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFRhc2tGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyRGVsZXRlVGFza0Zvcm0oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lciwgdGFza0VkaXRCdXR0b25MaXN0ZW5lciwgdGFza0RlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5wcm9qZWN0LWNhcmRcIik7XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy90YXNrXCI7XHJcbmltcG9ydCB7IHNldFN0ZXBDYXJkQ29tcGxldGVkLCBzZXRTdGVwQ2FyZEluY29tcGxldGUgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcHJvamVjdFBhZ2Uvc3RlcHNDYXJkSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzZXRUYXNrQ2FyZENvbXBsZXRlZCwgc2V0VGFza0NhcmRJbmNvbXBsZXRlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3RQYWdlL3Rhc2tzQ2FyZEhhbmRsZXJcIjtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrRnJvbUlEKHRhc2tzLCB0YXNrSUQpIHtcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyh0YXNrLmdldFRhc2tJRCgpKSA9PT0gdGFza0lEKSB7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFN0ZXBGcm9tSUQoc3RlcHMsIHN0ZXBJRCkge1xyXG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBpZiAoU3RyaW5nKHN0ZXAuZ2V0U3RlcElEKCkpID09PSBzdGVwSUQpIHtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnNldEN1cnJlbnRTdGVwKHN0ZXApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY29uc3QgdGFza0NhcmQgPSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAvLyBTZWFyY2hlcyBib3RoIGxpc3RzIHRoZSBjdXJyZW50IHRhc2tcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q29tcGxldGVkVGFza3MoKSwgU3RyaW5nKHRhc2tDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2sgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCk7XHJcblxyXG4gICAgLy8gVG9nZ2xlIHRoZSB0YXNrcyBjb21wbGV0ZSBzdGF0dXNcclxuICAgIHRhc2suc3dhcFN0YXR1cygpO1xyXG5cclxuICAgIC8vIEludHJvZHVjZSBhIHNsaWdodCB2aXN1YWwgZGVsYXlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIENhbGwgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBjb21wbGV0aW9uIHN0YXR1c1xyXG4gICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgIHNldFRhc2tTdGF0dXNDb21wbGV0ZUhhbmRsZXIodGFzayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGFza1N0YXR1c0luY29tcGxldGVIYW5kbGVyKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRhc2tTdGF0dXNDb21wbGV0ZUhhbmRsZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKHRhc2spO1xyXG4gICAgc2V0VGFza0NhcmRDb21wbGV0ZWQodGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRhc2tTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcyh0YXNrKTtcclxuICAgIHNldFRhc2tDYXJkSW5jb21wbGV0ZSh0YXNrKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBpbml0aWFsaXphdGlvbiBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIG1hcmtpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB0YXNrU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFN0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgc2V0Q3VycmVudFN0ZXBGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEluY29tcGxldGVTdGVwcygpLCBTdHJpbmcoc3RlcENhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIpKSk7XHJcbiAgICBzZXRDdXJyZW50U3RlcEZyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q29tcGxldGVkU3RlcHMoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiKSkpO1xyXG5cclxuICAgIGNvbnN0IHN0ZXAgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHN0ZXBzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgc3RlcC5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHN0ZXAuZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKTtcclxuICAgIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCkge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgIHNldFN0ZXBDYXJkSW5jb21wbGV0ZShzdGVwKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBpbml0aWFsaXphdGlvbiBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIG1hcmtpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIHN0ZXBzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBzdGVwU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyLCBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIgfSIsImZ1bmN0aW9uIGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lcihidG4sIHN1Ym1pdEZ1bmN0aW9uLCBtb2RhbCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoYnRuLCBtb2RhbCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzIGZyb20gXCIuL3NpZGViYXJMaXN0ZW5lcnNcIjtcclxuaW1wb3J0IGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzIGZyb20gXCIuL2FsbFByb2plY3RzTGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlU2lkZWJhckxpc3RlbmVycyxcclxuICAgIGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzLFxyXG59IiwiaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBNYWtlIHRoZSBhbGwgcHJvamVjdHMgc2lkZWJhciBidXR0b24gbGluayB0byB0aGUgYWxsIHByb2plY3RzIHBhZ2UgKi9cclxuZnVuY3Rpb24gY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0cy1idXR0b25cIik7XHJcblxyXG4gICAgYWxsUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogR2l2ZSBhbGwgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbnMgZnVuY3Rpb25hbGl0eSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzKHByb2plY3RzKSB7XHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0J1dHRvbkxpc3RlbmVyKHByb2plY3RzKTtcclxuICAgIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgXCIuc2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiKTtcclxufSIsImltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuXHJcbi8qIE1ha2UgYSBncm91cCBvZiBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnRzIGxpbmsgdG8gdGhlaXIgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgLy8gTGluayBlYWNoIHByb2plY3QgbmF2aWdhdGlvbiBlbGVtZW50IHRvIGEgcHJvamVjdCBwYWdlXHJcbiAgICBwcm9qZWN0TmF2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpID09PSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBNYWtlIGEgc2luZ2xlIHByb2plY3QgbmF2aWdhdGlvbiBET00gZWxlbWVudCBsaWtlIHRvIGEgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIocHJvamVjdHMsIGl0ZW0pIHtcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycywgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lciB9IiwiaW1wb3J0IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIG9mIHRoZSBjdXJyZW50IHByb2plY3RzICovXHJcbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cykge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgaGVhZGVyIHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFsbCBQcm9qZWN0c1wiO1xyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiO1xyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG5cIik7XHJcblxyXG4gICAgICAgIC8vIHByb2plY3QgYnV0dG9uIGV2ZW50XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgY29udGVudCBmb3IgdGhlIGJvZHkgc2VjdGlvbiAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIGNhcmQgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhcmREZXRhaWxzKHByb2plY3QpIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHByb2plY3QgY2FyZCBkZXRhaWxzXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkLWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IG5hbWVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkRGV0YWlscztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIENyZWF0ZXMgdGhlIGxvZ2ljIGZvciB0aGUgcHJvamVjdCBjYXJkIGFjdGlvbiBidXR0b25zICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Q2FyZEJ1dHRvbnMocHJvamVjdCkge1xyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpOyBcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1wcm9qZWN0XCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJFZGl0UHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RDYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkLWdyaWRcIik7XHJcblxyXG4gICAgICAgIC8vIEFkZGluZyBlYWNoIG9mIHRoZSBwcm9qZWN0cyB0byBhIGNhcmRcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xyXG4gICAgICAgICAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhnZW5lcmF0ZVByb2plY3RDYXJkQnV0dG9ucyhwcm9qZWN0KSkpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdENhcmRHcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZGluZyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKCkpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBCb2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzKHByb2plY3RzKTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgcHJvamVjdCBjYXJkIGlmIHByb2plY3QgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IHByb2plY3RDYXJkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjYXJkRGV0YWlscy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gICAgY2FyZERldGFpbHMubGFzdENoaWxkLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IGNhcmQgaWYgcHJvamVjdCBjb2xvdXIgaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q2FyZENvbG91cihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNhcmRbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBwcm9qZWN0Q2FyZC5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZXMgYSBkZWxldGVkIHByb2plY3RzIGNhcmQgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdENhcmQocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jYXJkW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuXHJcbiAgICBwcm9qZWN0Q2FyZC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbiwgZWRpdFByb2plY3RDYXJkQ29sb3VyLCBkZWxldGVQcm9qZWN0Q2FyZCB9IiwiaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RUaXRsZSwgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyIH0gZnJvbSBcIi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGVkaXRQcm9qZWN0UGFnZUNvbG91cn0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBlZGl0UHJvamVjdENhcmRDb2xvdXIgfSBmcm9tIFwiLi9hbGxQcm9qZWN0c1BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4vZm9ybXMvZm9ybUdlbmVyYXRvclwiO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5yZXBsYWNlQ2hpbGRyZW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb2R5KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xyXG4gICAgY2xlYXJIZWFkZXIoKTtcclxuICAgIGNsZWFyQm9keSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG4gICAgc2lkZWJhci5yZXBsYWNlQ2hpbGRyZW4oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgICByZW5kZXJTaWRlYmFyLCBcclxuICAgIGVkaXRTaWRlYmFyUHJvamVjdENvbG91cixcclxuICAgIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLFxyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UsXHJcbiAgICBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIFxyXG4gICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlLFxyXG4gICAgZWRpdFByb2plY3RDYXJkQ29sb3VyLFxyXG4gICAgZm9ybXMsXHJcbiAgICBjbGVhclBhZ2UsXHJcbiAgICBjbGVhclNpZGViYXIsXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVUZXh0RmllbGRzIGZyb20gXCIuL3RleHRGaWVsZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgKiBhcyByYWRpb0ZpZWxkR2VuZXJhdG9yIGZyb20gXCIuL3JhZGlvRmllbGRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgT3JnYW5pemVycyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvb3JnYW5pemVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RGcm9tRm9ybSwgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybSwgZWRpdFByb2plY3RGcm9tRm9ybSwgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RzLCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tGcm9tRm9ybSwgZWRpdFRhc2tGcm9tRm9ybSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy90YXNrLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXBGcm9tRm9ybSwgZWRpdFN0ZXBGcm9tRm9ybSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9zdGVwLmpzXCI7XHJcbmltcG9ydCB7IGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciwgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgZWRpdFByb2plY3RDYXJkQ29sb3VyLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0UHJvamVjdFBhZ2VJbmZvcm1hdGlvbiwgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCByZW5kZXJQcm9qZWN0UGFnZSB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0Q2FyZCwgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24sIHJlbmRlckFsbFByb2plY3RzUGFnZSB9IGZyb20gXCIuLi9hbGxQcm9qZWN0c1BhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS90YXNrc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVN0ZXBDYXJkIH0gZnJvbSBcIi4uL3Byb2plY3RQYWdlL3N0ZXBzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFByaW9yaXR5IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9wcmlvcml0eS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIsIGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2Zvcm1CdXR0b25MaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgbW9kYWwgd2hpY2ggd2lsbCBzdG9yZSBhbGwgZm9ybXMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtTW9kYWwocGFyZW50KSB7XHJcbiAgICBjb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtTW9kYWwpO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGZvcm0gY3JlYXRpb24gYW5kIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gcmVuZGVyRm9ybShmb3JtKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcclxuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbihmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lciBhbmQgdGl0bGUgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtQmFzZShpZCwgdGl0bGUsIGZvcm1DbGFzcykge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IGlkO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGZvcm1DbGFzcyk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBzdWJtaXQgYW5kIGNhbmNlbCBmb3JtIGJ1dHRvbnMgKi9cclxuZnVuY3Rpb24gYWRkRm9ybUJ1dHRvbnMob3JnYW5pemVyVHlwZSwgYWN0aW9uVHlwZSwgcGFyZW50LCBzdWJtaXRGdW5jdGlvbikge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgY29uc3QgYnRuSURQcmVmaXggPSBhY3Rpb25UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XHJcbiAgICBzdWJtaXRCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1zdWJtaXQtYnRuXCI7XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgZXZlbnRcclxuICAgIGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lcihzdWJtaXRCdG4sIHN1Ym1pdEZ1bmN0aW9uLCBtb2RhbCk7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWxCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1jYW5jZWwtYnRuXCI7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiY2FuY2VsLWJ0blwiKTtcclxuXHJcbiAgICAvLyBDYW5jZWwgZXZlbnRcclxuICAgIGNyZWF0ZUZvcm1DYW5jZWxCdXR0b25MaXN0ZW5lcihjYW5jZWxCdG4sIG1vZGFsKVxyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiQ3JlYXRlXCIsIGZvcm0sIGNyZWF0ZVByb2plY3RGcm9tRm9ybSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0UHJvamVjdEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGEgcHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJwcm9qZWN0LXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwicHJvamVjdC1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0gLCBtYXhMZW5ndGg6IDgwLCByb3dzOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJwcm9qZWN0LWVkaXQtZm9ybVwiLCBcIkVkaXQgUHJvamVjdFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMocHJvamVjdFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBlZGl0UHJvamVjdEZyb21Gb3JtKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSBUaGVzZT9cclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUaXRsZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZSA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVRhc2tGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJ0YXNrLWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgVGFza1wiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKE9yZ2FuaXplcnMuVEFTSykpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkVkaXRcIiwgZm9ybSwgY3JlYXRlVGFza0Zyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBwcmlvcml0eVxyXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPSdwcmlvcml0eSddW3ZhbHVlPScke0RlZmF1bHRQcmlvcml0eX0nXWApO1xyXG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHRhc2sgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFRhc2tGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBhIHRhc2tcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJ0YXNrLWVkaXQtZm9ybVwiLCBcIkVkaXQgVGFza1wiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKE9yZ2FuaXplcnMuVEFTSykpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkVEaXRcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRUYXNrRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgICAgICBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIC8vIFRPRE86IENoZWNrIGlmIG1vdmluZyB0aGlzIGFzc2lnbm1lbnQgdG8gdG9wIHdvcmtzXHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7Z2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldFByaW9yaXR5KCl9J11gKTtcclxuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSB0cnVlO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlU3RlcEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJzdGVwLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBTdGVwXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5TVEVQLCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVTdGVwRnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFN0ZXBGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHN0ZXBUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwic3RlcC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJzdGVwLWVkaXQtZm9ybVwiLCBcIkVkaXQgU3RlcFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBlZGl0U3RlcEZyb21Gb3JtKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgICAgICBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjb25maXJtaW5nIG9yZ2FuaXplciBkZWxldGlvbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgSXRlbT9cIiksIFwiZGVsZXRlLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBhZGRGb3JtQnV0dG9ucyhcIk9yZ2FuaXplclwiLCBcIkRlbGV0ZVwiLCBmb3JtLCBkZWxldGVGdW5jdGlvbik7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVQcm9qZWN0KGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QobnVsbCk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UoZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0Q2FyZChnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKSk7XHJcbiAgICAgICAgZGVsZXRlVGFza0NhcmQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVTdGVwRm9ybSgpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgICAgICBkZWxldGVTdGVwQ2FyZChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKSk7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnNldEN1cnJlbnRTdGVwKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDb2xvdXJcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdFBhZ2VDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvdXJcclxuICAgIGNvbnN0IGNvbG91ckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvdXItcmFkaW8tYnRuW2lkXj1cImNvbG91ci1cIl1baWQkPVwiJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbG91cigpLnRvTG93ZXJDYXNlKCl9XCJdYCk7XHJcbiAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlRm9ybU1vZGFsLCByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgcmVuZGVyRWRpdFByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyRWRpdFRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRWRpdFN0ZXBGb3JtLCByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSwgcmVuZGVyRGVsZXRlVGFza0Zvcm0sIHJlbmRlckRlbGV0ZVN0ZXBGb3JtLCByZW5kZXJDb2xvdXJQaWNrZXJGb3JtIH0iLCJpbXBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9wcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9jb2xvdXJzXCI7XHJcblxyXG4vKiBBZGQgdGhlIGRlc2lnbmF0ZWQgbGVnZW5kIGFuZCBmaWVsZHNldCB0byBhIGNvbnRhaW5lciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhsZWdlbmQsIGZpZWxkc2V0KSB7XHJcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZ2VuZCk7XHJcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgb2YgcmFkaW8gYnV0dG9ucyBmb3IgdGhlIHByaW9yaXR5IG9wdGlvbnMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAvKiBBZGQgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuZm9yRWFjaChwcmlvcml0eVZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gb3JnYW5pemVyVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBwcmlvcml0eVZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRjb250YWluZXJcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWZpZWxkXCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKENvbG91cnMpLmZvckVhY2goY29sb3VyVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb2xvdXIga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cktleSA9IE9iamVjdC5rZXlzKENvbG91cnMpLmZpbmQoa2V5ID0+IENvbG91cnNba2V5XSA9PT0gY29sb3VyVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gXCJjb2xvdXItXCIgKyBjb2xvdXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcImNvbG91clwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb2xvdXJLZXk7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRzZXRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDb2xvdXI6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zLCBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucyB9IiwiLyogQ3JlYXRlIGEgZGxhYmVsIGZvciBhIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZm9ybUZpZWxkLmxhYmVsVGV4dDtcclxuICAgIGZpZWxkTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLmZvciA9IGZvcm1GaWVsZC5pZDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRMYWJlbDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgdGl0bGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBkZXNjcmlwdGlvbiBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZvcm1GaWVsZC5pbnB1dFR5cGUpO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn0gICBcclxuXHJcbi8qIENyZWF0ZSBhIGRhdGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHNldCBhIHNldCBvZiB0ZXh0IGZpZWxkcyAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRleHRGaWVsZHMoZmllbGRzLCBwYXJlbnQpIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZvcm1GaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGVzY1wiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0NhcmRzLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiB9IGZyb20gXCIuL3Rhc2tzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24gfSBmcm9tIFwiLi9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdENyZWF0ZVRhc2tCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Byb2plY3RBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBpbmZvIGZvciBhIHNlbGVjdGVkIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBoZWFkZXIgZGlzcGxheWluZyBwcm9qZWN0IGluZm8gYW5kIGFjdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKHByb2plY3QpIHtcclxuICAgICAgICAvKiBEaXNwbGF5IHByb2plY3QgZGV0YWlscyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXJJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNSRUFURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lcihwcm9qZWN0KTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHByb2plY3RCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgbGlzdCBvZiB0YXNrcyBhbmQgdGhlaXIgc3RlcHMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3QtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBJbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgdGFza1NlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRhc2tTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIlxyXG4gICAgICAgIHRhc2tTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICBjb25zdCBpbmNvbXBsZXRlVGFza3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdFwiLCBcImluY29tcGxldGUtdGFzay1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICBnZW5lcmF0ZVRhc2tDYXJkcyhwcm9qZWN0LmdldEluY29tcGxldGVUYXNrcygpLCBpbmNvbXBsZXRlVGFza3NMaXN0KTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmNvbXBsZXRlVGFza3NMaXN0KTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGVkIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiXHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRUYXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIiwgXCJjb21wbGV0ZWQtdGFzay1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgZ2VuZXJhdGVUYXNrQ2FyZHMocHJvamVjdC5nZXRDb21wbGV0ZWRUYXNrcygpLCBjb21wbGV0ZWRUYXNrc0xpc3QpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzTGlzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcihwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3QpKTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgcHJvamVjdCBwYWdlIGlmIHByb2plY3QgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uKHByb2plY3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItdGl0bGVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IHBhZ2UgaWYgcHJvamVjdCBjb2xvdXIgaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0UGFnZUNvbG91cihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIik7XHJcbiAgICBpZiAocHJvamVjdEhlYWRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uIH0iLCJpbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXBDb21wbGV0aW9uTGlzdGVuZXIsIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvc3RhdHVzLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lciwgc3RlcEVkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9zdGVwQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHN0ZXBzIGZvciBhIHRhc2sgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTdGVwQ2FyZHMoc3RlcHMsIHBhcmVudCkge1xyXG4gICAgLyogQ3JlYXRlIGEgc3RlcCBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXBDYXJkKHN0ZXApIHtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBzdGVwQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1zdGVwXCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcEVkaXRCdXR0b25MaXN0ZW5lcihzdGVwKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lcihzdGVwKVxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInN0ZXAtY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgc3RlcC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHN0ZXAuZ2V0VGFza0lEKCkpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiLCBzdGVwLmdldFN0ZXBJRCgpKTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBJbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RlcEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRpb24gQ2hlY2tib3hcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBCdXR0b25zIGZvciBTdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuXHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEluZm8pO1xyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBBY3Rpb25CdXR0b25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbGwgc3RlcHMgdG8gdGhlIGxpc3RcclxuICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgLy8gTWFyayBjdXJyZW50IHN0ZXBcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVN0ZXBDYXJkKHN0ZXApKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbihzdGVwKSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgLy8gRWRpdGluZyBpbmZvcm1hdGlvblxyXG4gICAgc3RlcENhcmQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBzdGVwLmdldFRpdGxlKCk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgc3RlcCBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwQ2FyZENvbXBsZXRlZChzdGVwKSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGNvbXBsZXRlXHJcbiAgICBzdGVwQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gc3RlcENhcmQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcclxuICAgIHBhcmVudC5uZXh0U2libGluZy5hcHBlbmRDaGlsZChzdGVwQ2FyZCk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgc3RlcCBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGluY29tcGxldGUgKi9cclxuZnVuY3Rpb24gc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgaW5jb21wbGV0ZVxyXG4gICAgc3RlcENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IHBhcmVudCA9IHN0ZXBDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgY29uc29sZS5sb2cocGFyZW50LnByZXZpb3VzU2libGluZyk7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XHJcbiAgICBwYXJlbnQucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKHN0ZXBDYXJkKTtcclxufVxyXG5cclxuLyogUmVtb3ZlcyBhIGRlbGV0ZWQgc3RlcHMgY2FyZCAqL1xyXG5mdW5jdGlvbiBkZWxldGVTdGVwQ2FyZChzdGVwKSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGVwLWNhcmRbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcblxyXG4gICAgc3RlcENhcmQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlU3RlcENhcmRzLCBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbiwgc2V0U3RlcENhcmRDb21wbGV0ZWQsIHNldFN0ZXBDYXJkSW5jb21wbGV0ZSwgZGVsZXRlU3RlcENhcmQgfSIsImltcG9ydCB7IGdlbmVyYXRlU3RlcENhcmRzIH0gZnJvbSBcIi4vc3RlcHNDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIsIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lciwgdGFza0VkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy90YXNrQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHRhc2tzIGZvciBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrQ2FyZHModGFza3MsIHBhcmVudCkge1xyXG4gICAgLyogQ3JlYXRlIGEgdGFzayBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgY2hlY2tib3ggYW5kIGRldGFpbHMgb2YgdGhlIHRhc2sgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tIZWFkZXIodGFzaykge1xyXG4gICAgICAgICAgICAvKiBEaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0YXNrICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0RldGFpbHModGFzaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC10YXNrLWRldGFpbHNcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBcInByaW9yaXR5LVwiICsgdGFzay5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIiwgcHJpb3JpdHlDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKSB8fCBcIk5vIER1ZSBEYXRlXCI7O1xyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza0RldGFpbHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbXBsZXRpb24gY2hlY2tib3hcclxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tEZXRhaWxzKHRhc2spKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdEl0ZW1JbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGFzayBidXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNSRUFURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFN0ZXBcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIodGFzaylcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtdGFza1wiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIodGFzayk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIodGFzayk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgLy8gVGFzayBpbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW1cIiwgXCJ0YXNrLWNhcmRcIik7XHJcbiAgICAgICAgLy8gTGluayB0byB0YXNrXHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHRhc2suZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCB0YXNrLmdldFRhc2tJRCgpKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIHRhc2sgaW5mb3JtYXRpb24gZWxlbWVudHNcclxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tIZWFkZXIodGFzaykpO1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyh0YXNrQnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFsbCB0YXNrcyB0byB0aGUgbGlzdFxyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAvLyBNYXJrIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFzay1pdGVtXCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIGZvciBjdXJyZW50IHRhc2tcclxuICAgICAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGluY29tcGxldGVTdGVwc0xpc3QuY2xhc3NMaXN0LmFkZChcInN0ZXBzLWxpc3RcIiwgXCJpbmNvbXBsZXRlLXN0ZXBzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgYWxsIGNvbXBsZXRlZCBzdGVwcyBmb3IgY3VycmVudCB0YXNrXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkU3RlcHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtbGlzdFwiLCBcImNvbXBsZXRlZC1zdGVwcy1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGFza1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2sodGFzaykpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgc3RlcCBsaXN0c1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChpbmNvbXBsZXRlU3RlcHNMaXN0KTtcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGVkU3RlcHNMaXN0KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHN0ZXBzXHJcbiAgICAgICAgZ2VuZXJhdGVTdGVwQ2FyZHModGFzay5nZXRJbmNvbXBsZXRlU3RlcHMoKSwgaW5jb21wbGV0ZVN0ZXBzTGlzdCk7XHJcbiAgICAgICAgZ2VuZXJhdGVTdGVwQ2FyZHModGFzay5nZXRDb21wbGV0ZWRTdGVwcygpLCBjb21wbGV0ZWRTdGVwc0xpc3QpO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tJdGVtKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgLy8gR3JhYmJpbmcgaW5mb3JtYXRpb24gdG8gZWRpdFxyXG4gICAgY29uc3QgdGFza0luZm9ybWF0aW9uID0gdGFza0NhcmQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0luZm9ybWF0aW9uLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5uZXh0U2libGluZztcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0luZm9ybWF0aW9uLmxhc3RDaGlsZDtcclxuICAgIFxyXG4gICAgLy8gRWRpdGluZyBpbmZvcm1hdGlvblxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjtcclxuXHJcbiAgICAvLyBSZXBsYWNpbmcgcHJpb3JpdHkgY2xhc3NsaXN0XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBcInByaW9yaXR5LVwiICsgdGFzay5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIiwgcHJpb3JpdHlDbGFzcyk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgdGFzayBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBjb21wbGV0ZVxyXG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0YXNrQ2FyZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gTW92ZXMgdGhlIGNhcmQgd3JhcHBlciB0byB0aGUgY29tcGxldGVkIHRhc2tzIHNlY3Rpb24gXHJcbiAgICB0YXNrQ29udGFpbmVyLnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhbGwgaW5jb21wbGV0ZSBzdGVwcyBhcyBjb21wbGV0ZWRcclxuICAgIHRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGVwLWNhcmRbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcblxyXG4gICAgICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSB0YXNrIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFRhc2tDYXJkSW5jb21wbGV0ZSh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBpbmNvbXBsZXRlXHJcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRhc2tDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB3cmFwcGVyIHRvIHRoZSBpbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gXHJcbiAgICB0YXNrQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSByZW1hcmtpbmcgYWxsIGluY29tcGxldGUgc3RlcHMgYXMgaW5jb21wbGV0ZVxyXG4gICAgdGFzay5nZXRJbmNvbXBsZXRlU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN0ZXAtY2FyZFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICAgICAgc3RlcENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogUmVtb3ZlcyBhIGRlbGV0ZWQgdGFza3MgY2FyZCAqL1xyXG5mdW5jdGlvbiBkZWxldGVUYXNrQ2FyZCh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWNhcmRbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG5cclxuICAgIHRhc2tDYXJkLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlVGFza0NhcmRzLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgc2V0VGFza0NhcmRDb21wbGV0ZWQsIHNldFRhc2tDYXJkSW5jb21wbGV0ZSwgZGVsZXRlVGFza0NhcmQgfSIsImltcG9ydCB7IHJlbmRlclNpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcihwcm9qZWN0cykge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBMb2dvXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiVE9ET1wiO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICAvLyBTZWN0aW9uIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1ZIFBST0pFQ1RTXCJcclxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaGVhZGluZ1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGxpc3RcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0cy1tZW51XCIpO1xyXG5cclxuICAgIC8vIEFsbCBwcm9qZWN0cyBidXR0b25cclxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHByb2plY3RzTGlzdCk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIHNpZGViYXIgbWVudSBpdGVtICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhckl0ZW0odGl0bGUsIGljb25GdW5jdGlvbikge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBzaWRlYmFySXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGljb25GdW5jdGlvbigpKTtcclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZGViYXJJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJY29uKGljb25Db2xvdXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi50ZXh0Q29udGVudCA9IFwi4pePXCI7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcInByb2plY3QtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnN0eWxlLmNvbG9yID0gaWNvbkNvbG91cjtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgdGhlIGFsbCBwcm9qZWN0cyBpY29uICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdEljb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gICAgLy8gSWNvbiBpbWFnZVxyXG4gICAgY29uc3QgaWNvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGljb25JbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcHJvamVjdHMuc3ZnXCI7XHJcblxyXG4gICAgLy8gQXBwZW5pbmcgZWxlbWVudHNcclxuICAgIHByb2plY3RJY29uLmFwcGVuZENoaWxkKGljb25JbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBwcm9qZWN0IGJ1dHRvbiBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBnZW5lcmF0ZVNpZGViYXJJdGVtKHByb2plY3QuZ2V0VGl0bGUoKSwgKCkgPT4gZ2VuZXJhdGVQcm9qZWN0SWNvbihwcm9qZWN0LmdldENvbG91cigpKSk7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgcHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFsbCBwcm9qZWN0cyBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZ2VuZXJhdGVTaWRlYmFySXRlbShcIkFsbCBQcm9qZWN0c1wiLCBnZW5lcmF0ZUFsbFByb2plY3RJY29uKTtcclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzQnV0dG9uO1xyXG59XHJcblxyXG4vKiBEaXNwbGF5IGFsbCBwcm9qZWN0cyBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSk7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHByb2plY3QgdG8gdGhlIHNpZGViYXIgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiBhZGRUb1NpZGViYXJQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1wcm9qZWN0cy1tZW51XCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xyXG4gICAgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcihnZXRQcm9qZWN0cygpLCBuZXdQcm9qZWN0QnRuKTtcclxufVxyXG5cclxuLyogRWRpdCB0aGUgdGl0bGUgb2YgYSBzaWRlYmFyIHByb2plY3QgYnV0dG9uICovXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBzaWRlYmFySXRlbS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgdGhlIGNvbG91ciBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBzaWRlYmFySXRlbS5maXJzdENoaWxkLnN0eWxlLmNvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLXByb2plY3QtYnV0dG9uW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuXHJcbiAgICBzaWRlYmFySXRlbS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRUb1NpZGViYXJQcm9qZWN0cywgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsIGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciwgcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyB9IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGFjdGlvbiBidXR0b25zIGZvciBhIG9yZ2FuaXplciAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgY29uc3QgYWN0aW9uQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYWN0aW9uQnRucy5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ0bnNcIik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBidXR0b25zXHJcbiAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAvLyBCdXR0b24gY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwiYWN0aW9uLWJ0blwiKTtcclxuICAgICAgICBidG4uY2xhc3NOYW1lcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uXHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBhY3Rpb25CdG4uc3JjID0gYnRuLnNyYztcclxuICAgICAgICBhY3Rpb25CdG4uYWx0ID0gYnRuLmFsdDtcclxuICAgICAgICBhY3Rpb25CdG4udGl0bGUgPSBidG4udGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbiBhY3Rpb25cclxuICAgICAgICBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lcihhY3Rpb25CdXR0b25Db250YWluZXIsIGJ0bi5ldmVudClcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ0bik7XHJcblxyXG4gICAgICAgIGFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uQ29udGFpbmVyKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkJ0bnM7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy90YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXAgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy9zdGVwXCI7XHJcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSBcIi4vcGFnZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qc1wiO1xyXG5cclxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcclxuXHJcbi8vIFdvcmsgcHJvamVjdC90YXNrcy9zdGVwc1xyXG5jcmVhdGVQcm9qZWN0KFwiV29yayBNZWV0aW5nc1wiLCBcIkFsbCB0aGluZ3Mgd29yayBtZWV0aW5nIHJlbGF0ZWQhXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIk1vbmRheSBNZWV0aW5nc1wiLCBcIkFsbCBtb25kYXkgd29yayBtZWV0aW5nc1wiLCBcIlwiLCBcIk1lZFwiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIk1vcm5pbmcgTWVldGluZ1wiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIkFmdGVybm9vbiBNZWV0aW5nXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIlByZXNlbnRhdGlvblwiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJOb25lXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMV0sIFwiR2VuZXJhdGUgRmluYW5jaWFsIEdyYXBoc1wiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzFdLCBcIkNoZWNrIHJlcG9ydCBkcmFmdCBmb3IgdHlwb3NcIik7XHJcblxyXG4vLyBTY2hvb2wgcHJvamVjdC90YXNrcy9zdGVwc1xyXG5jcmVhdGVQcm9qZWN0KFwiU2Nob29sXCIsIFwiQWxsIHRoaW5ncyBzY2hvb2wgcmVsYXRlZCFcIik7XHJcblxyXG5jcmVhdGVUYXNrKGdldFByb2plY3RzKClbMl0sIFwiUHJlc2VudGF0aW9uc1wiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJIaWdoXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMl0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMF0sIFwiSG9tZXdvcmtcIik7XHJcblxyXG5kaXNwbGF5LnJlbmRlclNpZGViYXIoZ2V0UHJvamVjdHMoKSk7XHJcbmRpc3BsYXkuZm9ybXMuZ2VuZXJhdGVGb3JtTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJEZWxldGVGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpO1xyXG5kaXNwbGF5LnJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuLy8gZGlzcGxheS5yZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0c1sxXSk7XHJcbmNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMoZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9