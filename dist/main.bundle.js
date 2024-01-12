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
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        submitFunction();
        modal.style.display = "none";
    });

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
    });

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
        // TODO: Change These
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
    }

    renderDeleteForm(deleteFunction);
}

function renderDeleteStepForm() {
    const deleteFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().removeFromTodoSteps((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
        (0,_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_11__.deleteStepCard)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep());
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
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__.renderCreateTaskForm(project);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_5__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__.renderColourPickerForm(); 
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_5__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__.renderEditProjectForm();
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_3__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_5__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__.renderDeleteProjectForm();
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







/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        /* Gets the current task from current step ids */
        function setCurrentTaskFromID() {
            (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getIncompleteTasks().forEach(task => {
                if (String(task.getTaskID()) === String(step.getTaskID())) {
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().setCurrentTask(task);
                    return;
                }
            })
        }

        // Step Buttons to be created
        const stepButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task", event: () => {
                setCurrentTaskFromID();
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__.renderEditStepForm();
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task", event: () => {
                setCurrentTaskFromID();
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__.renderDeleteStepForm();
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
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().setCurrentTask(task);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateStepForm();
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().setCurrentTask(task);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderEditTaskForm();
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task", event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().setCurrentTask(task);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteTaskForm();
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
        actionButtonContainer.addEventListener("click", (e) => {
            btn.event();        
            e.stopPropagation();
        })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRix3QkFBd0IsYUFBYSx5QkFBeUIsYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sa0JBQWtCLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLEtBQUssUUFBUSxLQUFLLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRDRDO0FBQzVDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU07QUFDN0IscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQSxxQkFBcUIsaURBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQU07QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQU07QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJd0Q7QUFDaUM7QUFDRjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xTd0U7QUFDSjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFPO0FBQzdCO0FBQ0EsMENBQTBDLDBEQUFPLGNBQWMsMERBQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwRTtBQUN6QztBQUNBO0FBQ1g7QUFDZ0M7QUFDM0U7QUFDQSxnRkFBb0I7QUFDcEI7QUFDQTtBQUNBLHlFQUFhO0FBQ2I7QUFDQSxtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEIsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QjtBQUNBLG1FQUFVLENBQUMsdUVBQVc7QUFDdEIsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCO0FBQ0E7QUFDQSx5RUFBYTtBQUNiO0FBQ0EsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCO0FBQ0EseURBQXFCLENBQUMsdUVBQVc7QUFDakMsbUVBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBNkIsQ0FBQyx1RUFBVztBQUN6QztBQUNBLHdGQUFzQixDQUFDLHVFQUFXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvY29sb3Vycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL29yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9zdGVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FsbFByb2plY3RzTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3NpZGViYXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy90ZXh0RmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS90YXNrc0NhcmRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cclxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XHJcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXHJcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmFsIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufSAqL1xyXG5cclxuLmFjdGlvbi1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmFjdGlvbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZDogMWZyIDVmciAvIDFmciA0ZnI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUsXHJcbi5zaWRlYmFyLXByb2plY3RzLW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG4ge1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcclxufVxyXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xyXG5cclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuXHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4vKlxyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRpdGxlLWlucHV0OmZvY3VzLFxyXG4uZGF0ZS1pbnB1dDpmb2N1cyxcclxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDZlZmY7XHJcbn0gXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59IFxyXG5cclxuLmNyZWF0aW9uLWZvcm0sXHJcbi5kZWxldGUtZm9ybSxcclxuLmNvbG91ci1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5maWVsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuXHJcbi5mb3JtLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENyZWF0aW9uIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmZvcm0tbGFiZWwge1xyXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbi50aXRsZS1pbnB1dCxcclxuLmRhdGUtaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVzYy1pbnB1dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIFxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uY29sb3VyLWZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmNvbG91ci1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLmNvbG91ci1yYWRpby1idG4ge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7ICovXHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtY2FyZC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn0gXHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2VjdGlvbi1kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG59IFxyXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4uc2VjdGlvbi1kaXZpZGVyOjphZnRlciB7XHJcbiAgICBmbGV4LWdyb3c6IDEwMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMCAycmVtIDAgMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnRhc2stbGlzdC1jb250YWluZXIsXHJcbi5zdGVwcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnRhc2stbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59IFxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXN0ZXAtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcmlvcml0eSBJY29uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIC5wcmlvcml0eS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1oaWdoIHtcclxuICAgIGNvbG9yOiAjYWUyZTI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNlYjtcclxufVxyXG5cclxuLnByaW9yaXR5LW1lZCB7XHJcbiAgICBjb2xvcjogIzVlNGRiMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZmY7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1sb3cge1xyXG4gICAgY29sb3I6ICMwMDU1Y2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMmZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9uZSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjQ7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb290ZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4vKiAuZm9vdGVyIHtcclxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEMsRUFBRSw0QkFBNEI7SUFDNUUsNEJBQTRCO0lBQzVCLHFEQUFxRCxFQUFFLHFEQUFxRDtJQUM1Ryx1Q0FBdUM7QUFDM0M7O0FBRUE7Ozs7RUFJRTtBQUNGO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25C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SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7RUFJRTtDQUNEO0lBQ0csYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUVBOzs7O0VBSUU7O0FBRUY7Ozs7O0dBS0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogcmdiYSgyMjMsIDE2MywgMTYzLCAwLjMpOyAvKnJnYmEoMjU1LCAxOTgsIDExMiwgMC4wNSkqL1xcclxcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xcclxcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXFxyXFxuICAgIC0tcHJvamVjdC1pY29uOiByZ2JhKDE3NywgOTYsIDIzMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBHZW5lcmFsIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDEwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZDogMWZyIDVmciAvIDFmciA0ZnI7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBTaWRlYmFyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1oZWFkaW5nIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW1lbnUsXFxyXFxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEFsbCBQcm9qZWN0cyBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4uYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyLXRpdGxlIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4vKlxcclxcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiogR2VuZXJhbCBGb3JtIFN0eWxpbmdcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qL1xcclxcbi50aXRsZS1pbnB1dDpmb2N1cyxcXHJcXG4uZGF0ZS1pbnB1dDpmb2N1cyxcXHJcXG4uZGVzYy1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDZlZmY7XFxyXFxufSBcXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59IFxcclxcblxcclxcbi5jcmVhdGlvbi1mb3JtLFxcclxcbi5kZWxldGUtZm9ybSxcXHJcXG4uY29sb3VyLWZvcm0ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBGb3JtIEJ1dHRvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG5cXHJcXG4uZm9ybS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ0biB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgODksIDI1NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgODksIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENyZWF0aW9uIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuLmZvcm0tbGFiZWwge1xcclxcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWlucHV0LFxcclxcbi5kYXRlLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYy1pbnB1dCB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRGVsZXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiBcXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDb2xvdXIgUGlja2VyIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuLmNvbG91ci1maWVsZHNldCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgxZnIsIDUwcHgpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ2FwOiAwLjZyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItcmFkaW8tYnRuIHtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtYm9keSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IGNhbGMoMTAwdncgLSAxMDAlKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtY2FyZC1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFRvZGF5IENvbnRlbnQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2VjdGlvbi1kaXZpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcclxcbn0gXFxyXFxuLnNlY3Rpb24tZGl2aWRlcjo6YmVmb3JlIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDEwMDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi50YXNrLWxpc3QtY29udGFpbmVyLFxcclxcbi5zdGVwcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiAucHJpb3JpdHktdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgY29sb3I6ICNhZTJlMjQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWQge1xcclxcbiAgICBjb2xvcjogIzVlNGRiMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxvdyB7XFxyXFxuICAgIGNvbG9yOiAjMDA1NWNjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbm9uZSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcclxcbiAgICBjb2xvcjogIzZhNmE2YTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBGb290ZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi8qIC5mb290ZXIge1xcclxcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogQWN0aW9uIGJ1dHRvbiBjbGFzc25hbWUgRU5VTSAqL1xyXG5jb25zdCBBY3Rpb25zID0ge1xyXG4gICAgQ1JFQVRFOiBcImFkZC1idXR0b25cIixcclxuICAgIENPTE9VUjogXCJjb2xvdXItYnV0dG9uXCIsXHJcbiAgICBFRElUOiBcImVkaXQtYnV0dG9uXCIsXHJcbiAgICBERUxFVEU6IFwiZGVsZXRlLWJ1dHRvblwiLFxyXG59XHJcblxyXG5leHBvcnQgeyBBY3Rpb25zIH0iLCIvKiBDb2xvdXIgRU5VTSAqL1xyXG5jb25zdCBDb2xvdXJzID0ge1xyXG4gICAgTk9ORTogXCIjN0U4MTgwXCIsXHJcbiAgICBSRUQ6IFwiI0UxMzQxRVwiLFxyXG4gICAgQkxVRTogXCIjMEUwOUY2XCIsXHJcbiAgICBHUkVFTjogXCIjMENGMzNEXCIsXHJcbiAgICBQVVJQTEU6IFwiI0YzMENDMlwiLFxyXG4gICAgWUVMTE9XOiBcIiNGMUY2MDlcIixcclxuICAgIC8vIFRFQUw6IFwiIzFlY2JlMVwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29sb3VyID0gQ29sb3Vycy5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkQ29sb3VyKGNvbG91cikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoQ29sb3VycykuaW5jbHVkZXMoY29sb3VyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ29sb3VycywgRGVmYXVsdENvbG91ciwgaXNWYWxpZENvbG91ciB9IiwiLyogT3JnYW5pemVyIEVOVU0gKi9cclxuY29uc3QgT3JnYW5pemVycyA9IHtcclxuICAgIFBST0pFQ1Q6IFwiUHJvamVjdFwiLFxyXG4gICAgVEFTSzogXCJUYXNrXCIsXHJcbiAgICBTVEVQOiBcIlN0ZXBcIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkT3JnYW5pemVyKG9yZ2FuaXplcikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoT3JnYW5pemVycykuaW5jbHVkZXMob3JnYW5pemVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgT3JnYW5pemVycywgaXNWYWxpZE9yZ2FuaXplciB9IiwiLyogUHJpb3JpdHkgRU5VTSAqL1xyXG5jb25zdCBQcmlvcml0eSA9IHtcclxuICAgIE5PTkU6IFwiTm9uZVwiLFxyXG4gICAgTE9XOiBcIkxvd1wiLFxyXG4gICAgTUVEOiBcIk1lZFwiLFxyXG4gICAgSElHSDogXCJIaWdoXCIsXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRQcmlvcml0eSA9IFByaW9yaXR5Lk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgcHJpb3JpdHkgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuaW5jbHVkZXMocHJpb3JpdHkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5LCBpc1ZhbGlkUHJpb3JpdHkgfSIsIi8qIFN0YXR1cyBFTlVNICovXHJcbmNvbnN0IFN0YXR1cyA9IHtcclxuICAgIENPTVBMRVRFRDogXCJDb21wbGV0ZWRcIixcclxuICAgIElOQ09NUExFVEU6IFwiSW5jb21wbGV0ZVwiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgc3RhdHVzIHByb3BlcnR5IGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhTdGF0dXMpLmluY2x1ZGVzKHN0YXR1cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0YXR1cywgaXNWYWxpZFN0YXR1cyB9IiwiaW1wb3J0IHsgRGVmYXVsdENvbG91ciwgaXNWYWxpZENvbG91ciB9IGZyb20gXCIuLi8uLi9lbnVtcy9jb2xvdXJzLmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9zdGF0dXMuanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBwcm9qZWN0IG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RJRCkge1xyXG4gICAgbGV0IGNvbG91ciA9IERlZmF1bHRDb2xvdXI7XHJcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcclxuICAgIGNvbnN0IGluY29tcGxldGVUYXNrcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSBbXTtcclxuICAgIGxldCBjdXJyZW50VGFzayA9IG51bGw7XHJcblxyXG4gICAgLyogUmV0dXJucyB0YXNrIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0VGFza0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGFza0NvdW50O1xyXG4gICAgICAgIHRhc2tDb3VudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG91cigpIHtcclxuICAgICAgICByZXR1cm4gY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbG91cihuZXdDb2xvdXIpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZENvbG91cihuZXdDb2xvdXIpKSB7XHJcbiAgICAgICAgICAgIGNvbG91ciA9IG5ld0NvbG91cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhbiBpbmNvbXBsZXRlIHRhc2sgZnJvbSB0aGUgcHJvamVjdCAoYW5kIGFkZCB0byBjb21wbGV0ZVRhc2tzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzLmZvckVhY2goKHRhc2tFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRUYXNrSUQoKSA9PT0gdGFza0VsZW1lbnQuZ2V0VGFza0lEKCkpIHtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGVUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGNvbXBsZXRlZFRhc2tzXHJcbiAgICAgICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NvbXBsZXRlZFRhc2tzKHRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCB0YXNrIHRvIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NvbXBsZXRlZFRhc2tzKHRhc2spIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIGNvbXBsZXRlZCB0YXNrIGZyb20gdGhlIHByb2plY3QgKGFuZCBhZGQgdG8gaW5jb21wbGV0ZWRUYXNrcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MuZm9yRWFjaCgodGFza0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmdldFRhc2tJRCgpID09PSB0YXNrRWxlbWVudC5nZXRUYXNrSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBjb21wbGV0ZWRUYXNrc1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLklOQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvSW5jb21wbGV0ZVRhc2tzKHRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrKG5ld1Rhc2spIHtcclxuICAgICAgICBjdXJyZW50VGFzayA9IG5ld1Rhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLCBcclxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGdldENvbG91ciwgc2V0Q29sb3VyLFxyXG4gICAgICAgIGdldEluY29tcGxldGVUYXNrcywgYWRkVG9JbmNvbXBsZXRlVGFza3MsIHJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MsXHJcbiAgICAgICAgZ2V0Q29tcGxldGVkVGFza3MsIGFkZFRvQ29tcGxldGVkVGFza3MsIHJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcywgXHJcbiAgICAgICAgZ2V0UHJvamVjdElELFxyXG4gICAgICAgIGdldE5leHRUYXNrQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFRhc2ssIHNldEN1cnJlbnRUYXNrLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3RlcCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RlcEZhY3RvcnkodGl0bGUsIHByb2plY3RJRCwgdGFza0lELCBzdGVwSUQpIHtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3YXBTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DT01QTEVURUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGFza0lEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0ZXBJRCgpIHtcclxuICAgICAgICByZXR1cm4gc3RlcElEO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHN3YXBTdGF0dXMsIFxyXG4gICAgICAgIGdldFByb2plY3RJRCwgZ2V0VGFza0lELCBnZXRTdGVwSUQsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgdGFzayBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpIHtcclxuICAgIGxldCBzdGVwQ291bnQgPSAwO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzID0gW107XHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9IFtdO1xyXG4gICAgbGV0IHN0YXR1cyA9IFN0YXR1cy5JTkNPTVBMRVRFO1xyXG4gICAgbGV0IGN1cnJlbnRTdGVwID0gbnVsbDtcclxuXHJcbiAgICAvKiBSZXR1cm5zIHN0ZXAgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwQ291bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBzdGVwQ291bnQ7XHJcbiAgICAgICAgc3RlcENvdW50Kys7XHJcblxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGR1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3YXBTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DT01QTEVURUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluY29tcGxldGVTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIHN0ZXAgdG8gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBzdGVwIGZyb20gaW5jb21wbGV0ZVN0ZXBzIChhbmQgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goKHN0ZXBFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGVwSUQoKSA9PT0gc3RlcEVsZW1lbnQuZ2V0U3RlcElEKCkpIHtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGVTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzXHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NvbXBsZXRlZFN0ZXBzKHN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkU3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCBzdGVwIHRvIHRoZSB0YXNrICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NvbXBsZXRlZFN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIGNvbXBsZXRlZCBzdGVwIGZyb20gdGhlIHRhc2sgKGFuZCBhZGQgdG8gaW5jb21wbGV0ZVN0ZXBzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5mb3JFYWNoKChzdGVwRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0ZXAuZ2V0U3RlcElEKCkgPT09IHN0ZXBFbGVtZW50LmdldFN0ZXBJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGluY29tcGxldGVTdGVwc1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLklOQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGFza0lEKCkge1xyXG4gICAgICAgIHJldHVybiB0YXNrSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN0ZXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRTdGVwKG5ld1N0ZXApIHtcclxuICAgICAgICBjdXJyZW50U3RlcCA9IG5ld1N0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLCBcclxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGdldER1ZURhdGUsIHNldER1ZURhdGUsIFxyXG4gICAgICAgIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgXHJcbiAgICAgICAgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHN3YXBTdGF0dXMsIFxyXG4gICAgICAgIGdldEluY29tcGxldGVTdGVwcywgYWRkVG9JbmNvbXBsZXRlU3RlcHMsIHJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMsIFxyXG4gICAgICAgIGdldENvbXBsZXRlZFN0ZXBzLCByZW1vdmVGcm9tQ29tcGxldGVkU3RlcHMsIFxyXG4gICAgICAgIGdldFByb2plY3RJRCwgZ2V0VGFza0lELCBcclxuICAgICAgICBnZXROZXh0U3RlcENvdW50LFxyXG4gICAgICAgIGdldEN1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcCwgXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy9wcm9qZWN0RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGNsZWFyUGFnZSwgcmVuZGVyU2lkZWJhciB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IGFkZFRvU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHByb2plY3QgdGhhdCBzdG9yZXMgYWxsIHVuYXNzaWduZWQgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBnZXROZXh0UHJvamVjdENvdW50KCk7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBcIk1pc2NlbGxhbmVvdXNcIiwgXHJcbiAgICAgICAgXCJEZWZhdWx0IHByb2plY3RcIixcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICApXHJcblxyXG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBnZXROZXh0UHJvamVjdENvdW50KCk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByb2plY3RJRCxcclxuICAgIClcclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbi8vIC8qIFJlcGxhY2UgYW4gZXhpc3RpbmcgcHJvamVjdCB3aXRoIGEgbmV3IG9uZSAqL1xyXG4vLyBmdW5jdGlvbiByZXBsYWNlUHJvamVjdChwcm9qZWN0KSB7XHJcbi8vICAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4vLyAgICAgICAgIGlmIChlbGVtZW50LmdldFByb2plY3RJRCgpID09PSBwcm9qZWN0LmdldFByb2plY3RJRCgpKSB7XHJcbi8vICAgICAgICAgICAgIGVsZW1lbnQgPSBwcm9qZWN0O1xyXG4vLyAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcblxyXG4vKiBEZWxldGUgYW4gZXhpc3RpbmcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3RJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0SXRlbS5nZXRQcm9qZWN0SUQoKSA9PT0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLyogUmV0dXJucyBwcm9qZWN0IGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbmZ1bmN0aW9uIGdldE5leHRQcm9qZWN0Q291bnQoKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IHByb2plY3RDb3VudDtcclxuICAgIHByb2plY3RDb3VudCsrO1xyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcblxyXG4vKiBDcmVhdGVzIGEgcHJvamVjdCBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYyk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cyk7XHJcbiAgICBhZGRUb1NpZGViYXJQcm9qZWN0cyhnZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuLyogRWRpdHMgYSBwcm9qZWN0IGJhc2VkIG9uIGluZm9ybWF0aW9uIGluIGVkaXQgZm9ybSAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdEZyb21Gb3JtKHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlO1xyXG5cclxuICAgIHByb2plY3Quc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihuZXdEZXNjKTtcclxufVxyXG5cclxuLyogRWRpdHMgdGhlIGNvbG91ciBvZiBhIHByb2plY3QgYmFzZWQgb24gY29sb3VyIHBpY2tlciBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0ocHJvamVjdCkge1xyXG4gICAgY29uc3QgbmV3Q29sb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZFwiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldENvbG91cihuZXdDb2xvdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvamVjdDtcclxufVxyXG5cclxubGV0IHByb2plY3RDb3VudCA9IDA7XHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlUHJvamVjdEZyb21Gb3JtLCBlZGl0UHJvamVjdEZyb21Gb3JtLCBlZGl0UHJvamVjdENvbG91ckZyb21Gb3JtLCBnZXRQcm9qZWN0cywgZGVsZXRlUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0IH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3N0ZXBGYWN0b3J5XCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBzdGVwIGFuZCBhZGRzIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKHRhc2ssIHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSB0YXNrLmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gdGFzay5nZXRUYXNrSUQoKTtcclxuICAgIGNvbnN0IHN0ZXBJRCA9IHRhc2suZ2V0TmV4dFN0ZXBDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3U3RlcCA9IHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKTtcclxuXHJcbiAgICB0YXNrLmFkZFRvSW5jb21wbGV0ZVN0ZXBzKG5ld1N0ZXApO1xyXG59XHJcblxyXG4vKiBFZGl0IGFuIGV4aXN0aW5nIHN0ZXAgKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXAoc3RlcCwgdGl0bGUpIHtcclxuICAgIHN0ZXAuc2V0VGl0bGUodGl0bGUpO1xyXG59XHJcblxyXG4vKiBDcmVhdGVzIGEgc3RlcCBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcEZyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlU3RlcChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCksIHRpdGxlKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgc3RlcCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXBGcm9tRm9ybShzdGVwKSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICBzdGVwLnNldFRpdGxlKG5ld1RpdGxlKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RlcCwgZWRpdFN0ZXAsIGNyZWF0ZVN0ZXBGcm9tRm9ybSwgZWRpdFN0ZXBGcm9tRm9ybSB9IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy90YXNrRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vZW51bXMvc3RhdHVzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyB0YXNrIGFuZCBhZGRzIHRvIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0UHJvamVjdElEKCk7XHJcbiAgICBjb25zdCB0YXNrSUQgPSBwcm9qZWN0LmdldE5leHRUYXNrQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCk7XHJcblxyXG4gICAgcHJvamVjdC5hZGRUb0luY29tcGxldGVUYXNrcyhuZXdUYXNrKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzdGluZyB0YXNrICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgdGFzay5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKHRhc2ssIGRlc2NyaXB0aW9uKTtcclxuICAgIHRhc2suc2V0RHVlRGF0ZSh0YXNrLCBkdWVEYXRlKTtcclxuICAgIHRhc2suc2V0UHJpb3JpdHkodGFzaywgcHJpb3JpdHkpO1xyXG4gICAgdGFzay5zZXRTdGF0dXModGFzaywgc3RhdHVzKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHRhc2sgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soZ2V0Q3VycmVudFByb2plY3QoKSwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgdGFzayBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFRhc2tGcm9tRm9ybSh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZTtcclxuXHJcbiAgICB0YXNrLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHRhc2suc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcbiAgICB0YXNrLnNldER1ZURhdGUobmV3RGF0ZSk7XHJcbiAgICB0YXNrLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcclxufVxyXG5cclxuLyogQ29tcGxldGUgYSB0YXNrIGFuZCBjb252ZXJ0IGFsbCBzdGVwcyB0byByZXF1aXJlZCBzdGF0dXMqL1xyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgdGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBlZGl0VGFzaywgY29tcGxldGVUYXNrLCBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyB9IGZyb20gXCIuL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzKHByb2plY3RzKSB7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIFwiLnByb2plY3QtY2FyZFwiKTtcclxufSIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvc3RhdHVzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY29tcGxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgc2V0U3RlcENhcmRDb21wbGV0ZWQsIHNldFN0ZXBDYXJkSW5jb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHNldFRhc2tDYXJkQ29tcGxldGVkLCBzZXRUYXNrQ2FyZEluY29tcGxldGUgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlclwiO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tGcm9tSUQodGFza3MsIHRhc2tJRCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAoU3RyaW5nKHRhc2suZ2V0VGFza0lEKCkpID09PSB0YXNrSUQpIHtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50U3RlcEZyb21JRChzdGVwcywgc3RlcElEKSB7XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcoc3RlcC5nZXRTdGVwSUQoKSkgPT09IHN0ZXBJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza1N0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgdGFza1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHRhc2tDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSkpO1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDb21wbGV0ZWRUYXNrcygpLCBTdHJpbmcodGFza0NhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcblxyXG4gICAgY29uc3QgdGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHRhc2tzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgdGFzay5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUYXNrU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzayk7XHJcbiAgICBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFza1N0YXR1c0luY29tcGxldGVIYW5kbGVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzKHRhc2spO1xyXG4gICAgc2V0VGFza0NhcmRJbmNvbXBsZXRlKHRhc2spO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGluaXRpYWxpemF0aW9uIG9mIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgbWFya2luZyB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2YgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHRhc2tTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSkpO1xyXG4gICAgLy8gU2VhcmNoZXMgYm90aCBsaXN0cyB0aGUgY3VycmVudCBzdGVwXHJcbiAgICBzZXRDdXJyZW50U3RlcEZyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0SW5jb21wbGV0ZVN0ZXBzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtaWRcIikpKTtcclxuICAgIHNldEN1cnJlbnRTdGVwRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDb21wbGV0ZWRTdGVwcygpLCBTdHJpbmcoc3RlcENhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIpKSk7XHJcblxyXG4gICAgY29uc3Qgc3RlcCA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSB0aGUgc3RlcHMgY29tcGxldGUgc3RhdHVzXHJcbiAgICBzdGVwLnN3YXBTdGF0dXMoKTtcclxuXHJcbiAgICAvLyBJbnRyb2R1Y2UgYSBzbGlnaHQgdmlzdWFsIGRlbGF5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBDYWxsIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29tcGxldGlvbiBzdGF0dXNcclxuICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzZXRTdGVwU3RhdHVzQ29tcGxldGVIYW5kbGVyKHN0ZXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXBTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcihzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGVwU3RhdHVzQ29tcGxldGVIYW5kbGVyKHN0ZXApIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKHN0ZXApO1xyXG4gICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0ZXBTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzKHN0ZXApO1xyXG4gICAgc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXApO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGluaXRpYWxpemF0aW9uIG9mIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgbWFya2luZyB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2Ygc3RlcHMgKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHN0ZXBTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIsIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lciB9IiwiaW1wb3J0IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgZnJvbSBcIi4vc2lkZWJhckxpc3RlbmVyc1wiO1xyXG5pbXBvcnQgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMgZnJvbSBcIi4vYWxsUHJvamVjdHNMaXN0ZW5lcnNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzLFxyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMsXHJcbn0iLCJpbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyB9IGZyb20gXCIuL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIE1ha2UgdGhlIGFsbCBwcm9qZWN0cyBzaWRlYmFyIGJ1dHRvbiBsaW5rIHRvIHRoZSBhbGwgcHJvamVjdHMgcGFnZSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c0J1dHRvbkxpc3RlbmVyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXByb2plY3RzLWJ1dHRvblwiKTtcclxuXHJcbiAgICBhbGxQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBHaXZlIGFsbCBzaWRlYmFyIHByb2plY3QgYnV0dG9ucyBmdW5jdGlvbmFsaXR5ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMocHJvamVjdHMpIHtcclxuICAgIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpO1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5zaWRlYmFyLXByb2plY3QtYnV0dG9uXCIpO1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5cclxuLyogTWFrZSBhIGdyb3VwIG9mIHByb2plY3QgbmF2aWdhdGlvbiBET00gZWxlbWVudHMgbGluayB0byB0aGVpciBwcm9qZWN0IHBhZ2UgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYXZFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuXHJcbiAgICAvLyBMaW5rIGVhY2ggcHJvamVjdCBuYXZpZ2F0aW9uIGVsZW1lbnQgdG8gYSBwcm9qZWN0IHBhZ2VcclxuICAgIHByb2plY3ROYXZFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChTdHJpbmcocHJvamVjdC5nZXRQcm9qZWN0SUQoKSkgPT09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIE1ha2UgYSBzaW5nbGUgcHJvamVjdCBuYXZpZ2F0aW9uIERPTSBlbGVtZW50IGxpa2UgdG8gYSBwcm9qZWN0IHBhZ2UgKi9cclxuZnVuY3Rpb24gYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcihwcm9qZWN0cywgaXRlbSkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBpZiAoU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpID09PSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzLCBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyIH0iLCJpbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgb2YgdGhlIGN1cnJlbnQgcHJvamVjdHMgKi9cclxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgc2VjdGlvbiAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFByb2plY3RzXCI7XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0blwiKTtcclxuXHJcbiAgICAgICAgLy8gcHJvamVjdCBidXR0b24gZXZlbnRcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1zLnJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgYm9keSBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgY2FyZCAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgcHJvamVjdCBjYXJkIGRldGFpbHNcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmREZXRhaWxzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlcyB0aGUgbG9naWMgZm9yIHRoZSBwcm9qZWN0IGNhcmQgYWN0aW9uIGJ1dHRvbnMgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RDYXJkQnV0dG9ucyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DT0xPVVJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7IFxyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXByb2plY3RcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckVkaXRQcm9qZWN0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkQnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdENhcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZ3JpZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQWRkaW5nIGVhY2ggb2YgdGhlIHByb2plY3RzIHRvIGEgY2FyZFxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XHJcbiAgICAgICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmREZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkR3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMocHJvamVjdHMpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IGNhcmQgaWYgcHJvamVjdCBpbmZvcm1hdGlvbiBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24ocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jYXJkW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuICAgIGNvbnN0IGNhcmREZXRhaWxzID0gcHJvamVjdENhcmQuZmlyc3RDaGlsZDtcclxuICAgIGNhcmREZXRhaWxzLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBjYXJkRGV0YWlscy5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIHByb2plY3RDYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuLyogUmVtb3ZlcyBhIGRlbGV0ZWQgcHJvamVjdHMgY2FyZCAqL1xyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNhcmRbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG5cclxuICAgIHByb2plY3RDYXJkLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCBlZGl0UHJvamVjdENhcmRDb2xvdXIsIGRlbGV0ZVByb2plY3RDYXJkIH0iLCJpbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlQ29sb3VyfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciB9IGZyb20gXCIuL2FsbFByb2plY3RzUGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi9mb3Jtcy9mb3JtR2VuZXJhdG9yXCI7XHJcblxyXG5mdW5jdGlvbiBjbGVhckhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJvZHkoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XHJcbiAgICBjbGVhckhlYWRlcigpO1xyXG4gICAgY2xlYXJCb2R5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcbiAgICBzaWRlYmFyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICAgIHJlbmRlclNpZGViYXIsIFxyXG4gICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyLFxyXG4gICAgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsXHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZSxcclxuICAgIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgXHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsXHJcbiAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIsXHJcbiAgICBmb3JtcyxcclxuICAgIGNsZWFyUGFnZSxcclxuICAgIGNsZWFyU2lkZWJhcixcclxufSIsImltcG9ydCBnZW5lcmF0ZVRleHRGaWVsZHMgZnJvbSBcIi4vdGV4dEZpZWxkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCAqIGFzIHJhZGlvRmllbGRHZW5lcmF0b3IgZnJvbSBcIi4vcmFkaW9GaWVsZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBPcmdhbml6ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9vcmdhbml6ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZyb21Gb3JtLCBkZWxldGVQcm9qZWN0LCBlZGl0UHJvamVjdENvbG91ckZyb21Gb3JtLCBlZGl0UHJvamVjdEZyb21Gb3JtLCBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENhcmQsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza0NhcmQgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVTdGVwQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgbW9kYWwgd2hpY2ggd2lsbCBzdG9yZSBhbGwgZm9ybXMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtTW9kYWwocGFyZW50KSB7XHJcbiAgICBjb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtTW9kYWwpO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGZvcm0gY3JlYXRpb24gYW5kIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gcmVuZGVyRm9ybShmb3JtKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcclxuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbihmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lciBhbmQgdGl0bGUgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtQmFzZShpZCwgdGl0bGUsIGZvcm1DbGFzcykge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IGlkO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGZvcm1DbGFzcyk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBzdWJtaXQgYW5kIGNhbmNlbCBmb3JtIGJ1dHRvbnMgKi9cclxuZnVuY3Rpb24gYWRkRm9ybUJ1dHRvbnMob3JnYW5pemVyVHlwZSwgYWN0aW9uVHlwZSwgcGFyZW50LCBzdWJtaXRGdW5jdGlvbikge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgY29uc3QgYnRuSURQcmVmaXggPSBhY3Rpb25UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XHJcbiAgICBzdWJtaXRCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1zdWJtaXQtYnRuXCI7XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgZXZlbnRcclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3VibWl0RnVuY3Rpb24oKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYW5jZWwgYnV0dG9uXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbEJ0bi5pZCA9ICBidG5JRFByZWZpeCArIFwiLWNhbmNlbC1idG5cIjtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJjYW5jZWwtYnRuXCIpO1xyXG5cclxuICAgIC8vIENhbmNlbCBldmVudFxyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInByb2plY3QtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBQcm9qZWN0XCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhwcm9qZWN0VGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1lZGl0LWZvcm1cIiwgXCJFZGl0IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgVGhlc2VcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUaXRsZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZSA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVRhc2tGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJ0YXNrLWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgVGFza1wiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKE9yZ2FuaXplcnMuVEFTSykpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkVkaXRcIiwgZm9ybSwgY3JlYXRlVGFza0Zyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgZGVmYXVsdCBwcmlvcml0eVxyXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPSdwcmlvcml0eSddW3ZhbHVlPScke0RlZmF1bHRQcmlvcml0eX0nXWApO1xyXG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHRhc2sgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFRhc2tGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBhIHRhc2tcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJ0YXNrLWVkaXQtZm9ybVwiLCBcIkVkaXQgVGFza1wiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKE9yZ2FuaXplcnMuVEFTSykpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkVEaXRcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRUYXNrRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgICAgICBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIC8vIFRPRE86IENoZWNrIGlmIG1vdmluZyB0aGlzIGFzc2lnbm1lbnQgdG8gdG9wIHdvcmtzXHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7Z2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldFByaW9yaXR5KCl9J11gKTtcclxuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSB0cnVlO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlU3RlcEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJzdGVwLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBTdGVwXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5TVEVQLCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVTdGVwRnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFN0ZXBGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHN0ZXBUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwic3RlcC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJzdGVwLWVkaXQtZm9ybVwiLCBcIkVkaXQgU3RlcFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBlZGl0U3RlcEZyb21Gb3JtKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgICAgICBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjb25maXJtaW5nIG9yZ2FuaXplciBkZWxldGlvbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgSXRlbT9cIiksIFwiZGVsZXRlLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBhZGRGb3JtQnV0dG9ucyhcIk9yZ2FuaXplclwiLCBcIkRlbGV0ZVwiLCBmb3JtLCBkZWxldGVGdW5jdGlvbik7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBkZWxldGVQcm9qZWN0KGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UoZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0Q2FyZChnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKSk7XHJcbiAgICAgICAgZGVsZXRlVGFza0NhcmQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlU3RlcEZvcm0oKSB7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbVRvZG9TdGVwcyhnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKSk7XHJcbiAgICAgICAgZGVsZXRlU3RlcENhcmQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDb2xvdXJcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdFBhZ2VDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvdXJcclxuICAgIGNvbnN0IGNvbG91ckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvdXItcmFkaW8tYnRuW2lkXj1cImNvbG91ci1cIl1baWQkPVwiJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbG91cigpLnRvTG93ZXJDYXNlKCl9XCJdYCk7XHJcbiAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlRm9ybU1vZGFsLCByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgcmVuZGVyRWRpdFByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyRWRpdFRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRWRpdFN0ZXBGb3JtLCByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSwgcmVuZGVyRGVsZXRlVGFza0Zvcm0sIHJlbmRlckRlbGV0ZVN0ZXBGb3JtLCByZW5kZXJDb2xvdXJQaWNrZXJGb3JtIH0iLCJpbXBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9wcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9jb2xvdXJzXCI7XHJcblxyXG4vKiBBZGQgdGhlIGRlc2lnbmF0ZWQgbGVnZW5kIGFuZCBmaWVsZHNldCB0byBhIGNvbnRhaW5lciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhsZWdlbmQsIGZpZWxkc2V0KSB7XHJcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZ2VuZCk7XHJcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgb2YgcmFkaW8gYnV0dG9ucyBmb3IgdGhlIHByaW9yaXR5IG9wdGlvbnMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAvKiBBZGQgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuZm9yRWFjaChwcmlvcml0eVZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gb3JnYW5pemVyVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBwcmlvcml0eVZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRjb250YWluZXJcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWZpZWxkXCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKENvbG91cnMpLmZvckVhY2goY29sb3VyVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb2xvdXIga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cktleSA9IE9iamVjdC5rZXlzKENvbG91cnMpLmZpbmQoa2V5ID0+IENvbG91cnNba2V5XSA9PT0gY29sb3VyVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gXCJjb2xvdXItXCIgKyBjb2xvdXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcImNvbG91clwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb2xvdXJLZXk7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRzZXRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDb2xvdXI6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zLCBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucyB9IiwiLyogQ3JlYXRlIGEgZGxhYmVsIGZvciBhIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZm9ybUZpZWxkLmxhYmVsVGV4dDtcclxuICAgIGZpZWxkTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLmZvciA9IGZvcm1GaWVsZC5pZDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRMYWJlbDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgdGl0bGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBkZXNjcmlwdGlvbiBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZvcm1GaWVsZC5pbnB1dFR5cGUpO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn0gICBcclxuXHJcbi8qIENyZWF0ZSBhIGRhdGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHNldCBhIHNldCBvZiB0ZXh0IGZpZWxkcyAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRleHRGaWVsZHMoZmllbGRzLCBwYXJlbnQpIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZvcm1GaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGVzY1wiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0NhcmRzLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiB9IGZyb20gXCIuL3Rhc2tzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24gfSBmcm9tIFwiLi9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgaW5mbyBmb3IgYSBzZWxlY3RlZCBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgaGVhZGVyIGRpc3BsYXlpbmcgcHJvamVjdCBpbmZvIGFuZCBhY3Rpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcihwcm9qZWN0KSB7XHJcbiAgICAgICAgLyogRGlzcGxheSBwcm9qZWN0IGRldGFpbHMgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3REZXRhaWxzKHByb2plY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci10aXRsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVySW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDcmVhdGVUYXNrRm9ybShwcm9qZWN0KTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DT0xPVVJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7IFxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1wcm9qZWN0XCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJFZGl0UHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRGVsZXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1jb250YWluZXJcIik7XHJcbiAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMocHJvamVjdEJ1dHRvbnMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBsaXN0IG9mIHRhc2tzIGFuZCB0aGVpciBzdGVwcyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCB0YXNrU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGFza1NlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJUYXNrc1wiXHJcbiAgICAgICAgdGFza1NlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgaW5jb21wbGV0ZSB0YXNrc1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVUYXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIsIFwiaW5jb21wbGV0ZS10YXNrLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIGdlbmVyYXRlVGFza0NhcmRzKHByb2plY3QuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIGluY29tcGxldGVUYXNrc0xpc3QpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGluY29tcGxldGVUYXNrc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCJcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdFwiLCBcImNvbXBsZXRlZC10YXNrLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICBnZW5lcmF0ZVRhc2tDYXJkcyhwcm9qZWN0LmdldENvbXBsZXRlZFRhc2tzKCksIGNvbXBsZXRlZFRhc2tzTGlzdCk7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZGluZyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKHByb2plY3QpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IHBhZ2UgaWYgcHJvamVjdCBpbmZvcm1hdGlvbiBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24ocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgcGFnZSBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChwcm9qZWN0SGVhZGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBlZGl0UHJvamVjdFBhZ2VJbmZvcm1hdGlvbiwgZWRpdFByb2plY3RQYWdlQ29sb3VyLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24gfSIsImltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcENvbXBsZXRpb25MaXN0ZW5lciwgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9zdGF0dXMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2Ygc3RlcHMgZm9yIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVN0ZXBDYXJkcyhzdGVwcywgcGFyZW50KSB7XHJcbiAgICAvKiBDcmVhdGUgYSBzdGVwIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3RlcENhcmQoc3RlcCkge1xyXG5cclxuICAgICAgICAvKiBHZXRzIHRoZSBjdXJyZW50IHRhc2sgZnJvbSBjdXJyZW50IHN0ZXAgaWRzICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tGcm9tSUQoKSB7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodGFzay5nZXRUYXNrSUQoKSkgPT09IFN0cmluZyhzdGVwLmdldFRhc2tJRCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3RlcCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBzdGVwQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1zdGVwXCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLCBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoKTtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckVkaXRTdGVwRm9ybSgpO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLCBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoKTtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckRlbGV0ZVN0ZXBGb3JtKCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgc3RlcEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIsIFwic3RlcC1jYXJkXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gdGFza1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBzdGVwLmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgc3RlcC5nZXRUYXNrSUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIsIHN0ZXAuZ2V0U3RlcElEKCkpO1xyXG5cclxuICAgICAgICAvLyBTdGVwIEluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RlcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwSW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGlvbiBDaGVja2JveFxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIHN0ZXBUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIEJ1dHRvbnMgZm9yIFN0ZXBzXHJcbiAgICAgICAgY29uc3Qgc3RlcEFjdGlvbkJ1dHRvbnMgPSBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoc3RlcEJ1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChzdGVwVGl0bGUpO1xyXG5cclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwSW5mbyk7XHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEFjdGlvbkJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RlcEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFsbCBzdGVwcyB0byB0aGUgbGlzdFxyXG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAvLyBNYXJrIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcENhcmQoc3RlcCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICAvLyBFZGl0aW5nIGluZm9ybWF0aW9uXHJcbiAgICBzdGVwQ2FyZC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgY29tcGxldGVcclxuICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBzdGVwQ2FyZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gTW92ZXMgdGhlIGNhcmQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAgcGFyZW50Lm5leHRTaWJsaW5nLmFwcGVuZENoaWxkKHN0ZXBDYXJkKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgaW5jb21wbGV0ZSAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwQ2FyZEluY29tcGxldGUoc3RlcCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBpbmNvbXBsZXRlXHJcbiAgICBzdGVwQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gc3RlcENhcmQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJlbnQucHJldmlvdXNTaWJsaW5nKTtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcclxuICAgIHBhcmVudC5wcmV2aW91c1NpYmxpbmcuYXBwZW5kQ2hpbGQoc3RlcENhcmQpO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBzdGVwcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVN0ZXBDYXJkKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN0ZXAtY2FyZFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICBzdGVwQ2FyZC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMsIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBzZXRTdGVwQ2FyZENvbXBsZXRlZCwgc2V0U3RlcENhcmRJbmNvbXBsZXRlLCBkZWxldGVTdGVwQ2FyZCB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMgfSBmcm9tIFwiLi9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2YgdGFza3MgZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tDYXJkcyh0YXNrcywgcGFyZW50KSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjs7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrRGV0YWlscztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0RldGFpbHModGFzaykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0SXRlbUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUYXNrIGJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgU3RlcFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtKCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXRhc2tcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRWRpdFRhc2tGb3JtKCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBUYXNrXCIsIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRGVsZXRlVGFza0Zvcm0oKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInRhc2stY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHRhc2tzIHRvIHRoZSBsaXN0XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCB0YXNrXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgYWxsIGluY29tcGxldGUgc3RlcHMgZm9yIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtbGlzdFwiLCBcImluY29tcGxldGUtc3RlcHMtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBhbGwgY29tcGxldGVkIHN0ZXBzIGZvciBjdXJyZW50IHRhc2tcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy1saXN0XCIsIFwiY29tcGxldGVkLXN0ZXBzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBzdGVwIGxpc3RzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGluY29tcGxldGVTdGVwc0xpc3QpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZWRTdGVwc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldEluY29tcGxldGVTdGVwcygpLCBpbmNvbXBsZXRlU3RlcHNMaXN0KTtcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldENvbXBsZXRlZFN0ZXBzKCksIGNvbXBsZXRlZFN0ZXBzTGlzdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0l0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24odGFzaykge1xyXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICAvLyBHcmFiYmluZyBpbmZvcm1hdGlvbiB0byBlZGl0XHJcbiAgICBjb25zdCB0YXNrSW5mb3JtYXRpb24gPSB0YXNrQ2FyZC5maXJzdENoaWxkLmxhc3RDaGlsZDtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tJbmZvcm1hdGlvbi5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IHRhc2tJbmZvcm1hdGlvbi5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrSW5mb3JtYXRpb24ubGFzdENoaWxkO1xyXG4gICAgXHJcbiAgICAvLyBFZGl0aW5nIGluZm9ybWF0aW9uXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCkgfHwgXCJObyBEdWUgRGF0ZVwiO1xyXG5cclxuICAgIC8vIFJlcGxhY2luZyBwcmlvcml0eSBjbGFzc2xpc3RcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSB0YXNrIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFRhc2tDYXJkQ29tcGxldGVkKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGNvbXBsZXRlXHJcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRhc2tDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB3cmFwcGVyIHRvIHRoZSBjb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBcclxuICAgIHRhc2tDb250YWluZXIucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgdGFzay5nZXRJbmNvbXBsZXRlU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN0ZXAtY2FyZFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICAgICAgc3RlcENhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBNb2RpZmllcyBhIHRhc2sgY2FyZCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0VGFza0NhcmRJbmNvbXBsZXRlKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGluY29tcGxldGVcclxuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gdGFza0NhcmQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHdyYXBwZXIgdG8gdGhlIGluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBcclxuICAgIHRhc2tDb250YWluZXIucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IHJlbWFya2luZyBhbGwgaW5jb21wbGV0ZSBzdGVwcyBhcyBpbmNvbXBsZXRlXHJcbiAgICB0YXNrLmdldEluY29tcGxldGVTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RlcC1jYXJkW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG5cclxuICAgICAgICBzdGVwQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgICAgIHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCB0YXNrcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2tDYXJkKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stY2FyZFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgdGFza0NhcmQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCwgc2V0VGFza0NhcmRJbmNvbXBsZXRlLCBkZWxldGVUYXNrQ2FyZCB9IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4vc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIC8vIExvZ29cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJUT0RPXCI7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIC8vIFNlY3Rpb24gaGVhZGVyXHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiTVkgUFJPSkVDVFNcIlxyXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1oZWFkaW5nXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3RzLW1lbnVcIik7XHJcblxyXG4gICAgLy8gQWxsIHByb2plY3RzIGJ1dHRvblxyXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcHJvamVjdHNMaXN0KTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcbn0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgc2lkZWJhciBtZW51IGl0ZW0gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFySXRlbSh0aXRsZSwgaWNvbkZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHNpZGViYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaWNvbkZ1bmN0aW9uKCkpO1xyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gc2lkZWJhckl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEljb24oaWNvbkNvbG91cikge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLnRleHRDb250ZW50ID0gXCLil49cIjtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG4gICAgcHJvamVjdEljb24uc3R5bGUuY29sb3IgPSBpY29uQ29sb3VyO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpY29uIGZvciB0aGUgYWxsIHByb2plY3RzIGljb24gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgICAvLyBJY29uIGltYWdlXHJcbiAgICBjb25zdCBpY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaWNvbkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy5zdmdcIjtcclxuXHJcbiAgICAvLyBBcHBlbmluZyBlbGVtZW50c1xyXG4gICAgcHJvamVjdEljb24uYXBwZW5kQ2hpbGQoaWNvbkltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGdlbmVyYXRlU2lkZWJhckl0ZW0ocHJvamVjdC5nZXRUaXRsZSgpLCAoKSA9PiBnZW5lcmF0ZVByb2plY3RJY29uKHByb2plY3QuZ2V0Q29sb3VyKCkpKTtcclxuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYW4gYWxsIHByb2plY3RzIGJ1dHRvbiBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFByb2plY3RzQnV0dG9uKCkge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHNCdXR0b24gPSBnZW5lcmF0ZVNpZGViYXJJdGVtKFwiQWxsIFByb2plY3RzXCIsIGdlbmVyYXRlQWxsUHJvamVjdEljb24pO1xyXG4gICAgYWxsUHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1idXR0b25cIik7XHJcbiAgICByZXR1cm4gYWxsUHJvamVjdHNCdXR0b247XHJcbn1cclxuXHJcbi8qIERpc3BsYXkgYWxsIHByb2plY3RzIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpKTtcclxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWRkIGEgcHJvamVjdCB0byB0aGUgc2lkZWJhciBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIGFkZFRvU2lkZWJhclByb2plY3RzKHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXByb2plY3RzLW1lbnVcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XHJcbiAgICBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyKGdldFByb2plY3RzKCksIG5ld1Byb2plY3RCdG4pO1xyXG59XHJcblxyXG4vKiBFZGl0IHRoZSB0aXRsZSBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIHNpZGViYXJJdGVtLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogRWRpdCB0aGUgY29sb3VyIG9mIGEgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIHNpZGViYXJJdGVtLmZpcnN0Q2hpbGQuc3R5bGUuY29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMsIGFkZFRvU2lkZWJhclByb2plY3RzLCBlZGl0U2lkZWJhclByb2plY3RUaXRsZSwgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyLCByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzIH0iLCIvKiBDcmVhdGVzIHRoZSBhY3Rpb24gYnV0dG9ucyBmb3IgYSBvcmdhbml6ZXIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGNvbnN0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGFjdGlvbkJ0bnMuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idG5zXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgYnV0dG9uc1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgLy8gQnV0dG9uIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcImFjdGlvbi1idG5cIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTmFtZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgYWN0aW9uQnRuLnNyYyA9IGJ0bi5zcmM7XHJcbiAgICAgICAgYWN0aW9uQnRuLmFsdCA9IGJ0bi5hbHQ7XHJcbiAgICAgICAgYWN0aW9uQnRuLnRpdGxlID0gYnRuLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBCdXR0b24gYWN0aW9uXHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBidG4uZXZlbnQoKTsgICAgICAgIFxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG4pO1xyXG5cclxuICAgICAgICBhY3Rpb25CdG5zLmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhY3Rpb25CdG5zO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcFwiO1xyXG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gXCIuL3BhZ2VzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2lkZWJhckxpc3RlbmVycyB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuXHJcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG4vLyBXb3JrIHByb2plY3QvdGFza3Mvc3RlcHNcclxuY3JlYXRlUHJvamVjdChcIldvcmsgTWVldGluZ3NcIiwgXCJBbGwgdGhpbmdzIHdvcmsgbWVldGluZyByZWxhdGVkIVwiKTtcclxuXHJcbmNyZWF0ZVRhc2soZ2V0UHJvamVjdHMoKVsxXSwgXCJNb25kYXkgTWVldGluZ3NcIiwgXCJBbGwgbW9uZGF5IHdvcmsgbWVldGluZ3NcIiwgXCJcIiwgXCJNZWRcIik7XHJcbmNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJNb3JuaW5nIE1lZXRpbmdcIik7XHJcbmNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJBZnRlcm5vb24gTWVldGluZ1wiKTtcclxuXHJcbmNyZWF0ZVRhc2soZ2V0UHJvamVjdHMoKVsxXSwgXCJQcmVzZW50YXRpb25cIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiTm9uZVwiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzFdLCBcIkdlbmVyYXRlIEZpbmFuY2lhbCBHcmFwaHNcIik7XHJcbmNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVsxXSwgXCJDaGVjayByZXBvcnQgZHJhZnQgZm9yIHR5cG9zXCIpO1xyXG5cclxuLy8gU2Nob29sIHByb2plY3QvdGFza3Mvc3RlcHNcclxuY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiLCBcIkFsbCB0aGluZ3Mgc2Nob29sIHJlbGF0ZWQhXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzJdLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzJdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIkhvbWV3b3JrXCIpO1xyXG5cclxuZGlzcGxheS5yZW5kZXJTaWRlYmFyKGdldFByb2plY3RzKCkpO1xyXG5kaXNwbGF5LmZvcm1zLmdlbmVyYXRlRm9ybU1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVUYXNrRm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyRGVsZXRlRm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTtcclxuZGlzcGxheS5yZW5kZXJBbGxQcm9qZWN0c1BhZ2UoZ2V0UHJvamVjdHMoKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdHNbMV0pO1xyXG5jcmVhdGVTaWRlYmFyTGlzdGVuZXJzKGdldFByb2plY3RzKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==