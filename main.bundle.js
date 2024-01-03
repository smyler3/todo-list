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
    display: grid;
    grid: 1fr 5fr auto / 1fr 4fr;
    min-width: 100vw;
    min-height: 100vh;
}

/*
 * ------------------------------------------------------------
 * Sidebar Styling
 * ------------------------------------------------------------
 */

.sidebar {
    grid-area: 1 / 1 / -2 / 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    color: var(--sideabar-text);
    background-color: var(--sidebar-background);
    z-index: 2;
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
.step-list {
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

/*
 * ------------------------------------------------------------
 * Footer Styling
 * ------------------------------------------------------------
 */

.footer {
    grid-area: -2 / 1 / -1 / -1;
    text-align: center;
    padding: 1rem 0;
    background-color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C,EAAE,4BAA4B;IAC5E,4BAA4B;IAC5B,qDAAqD,EAAE,qDAAqD;IAC5G,uCAAuC;AAC3C;;AAEA;;;;EAIE;AACF;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;AACtB;AACA;IACI,iDAAiD;AACrD;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,4BAA4B;IAC5B,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,2BAA2B;IAC3B,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,yBAAyB;IACzB,iCAAiC;IACjC,UAAU;AACd;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,2CAA2C;AAC/C;AACA;IACI,iDAAiD;AACrD;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;;;EAIE;AACF;;;;CAIC;AACD;;;IAGI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;;;IAGI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,UAAU;AACd;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;;;;EAIE;AACF;IACI,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;AACA;;;;EAIE;;AAEF;;;;EAIE;AACF;IACI,aAAa;IACb,gDAAgD;IAChD,qCAAqC;IACrC,WAAW;IACX,WAAW;IACX,eAAe;IACf,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;EAIE;;AAEF;IACI,0BAA0B;IAC1B,oCAAoC;AACxC;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,qBAAqB;IACrB,2DAA2D;IAC3D,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;;;EAIE;AACF;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;EAIE;CACD;IACG,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;;;;EAIE;;AAEF;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000010;\r\n    border-radius: 50%;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    display: grid;\r\n    grid: 1fr 5fr auto / 1fr 4fr;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -2 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid rgb(118, 118, 118);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.step-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n}"],"sourceRoot":""}]);
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
    TODO: "To Do",
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


/* Creates a single instance of a project object */
function projectFactory(title, description, projectID) {
    let colour = _enums_colours_js__WEBPACK_IMPORTED_MODULE_0__.DefaultColour;
    let taskCount = 0;
    const tasks = [];
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

    function getTasks() {
        return tasks;
    }

    /* Add a task to the project */
    function addTask(task) {
        tasks.push(task);
    }

    /* Remove a task from the project */
    function removeTask(task) {
        tasks.array.forEach(taskElement => {
            if (task === taskElement) {
                tasks.push(taskElement);
            }
        });
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addCompletedTask(task) {
        completedTasks.push(task);
    }

    /* Remove a task from the project */
    function removeCompletedTask(task) {
        completedTasks.array.forEach(taskElement => {
            if (task === taskElement) {
                completedTasks.push(taskElement);
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
        getTasks, addTask, removeTask,
        getCompletedTasks, addCompletedTask, removeCompletedTask, 
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
    let status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.TODO;

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
        getStatus, setStatus, 
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
    const steps = [];
    const completedSteps = [];
    let status = _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.TODO;

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

    function getSteps() {
        return steps;
    }

    /* Add a step to the task */
    function addStep(step) {
        steps.push(step);
    }

    /* Remove a step from the task */
    function removeStep(step) {
        steps.array.forEach(stepElement => {
            if (step === stepElement) {
                steps.push(stepElement);
            }
        });
    }

    function getCompletedSteps() {
        return completedSteps;
    }

    /* Add a completed step to the task */
    function addCompletedStep(step) {
        completedSteps.push(step);
    }

    /* Remove a step from the task */
    function removeCompletedStep(step) {
        completedSteps.array.forEach(stepElement => {
            if (step === stepElement) {
                completedSteps.push(stepElement);
            }
        });
    }

    function getProjectID() {
        return projectID;
    }

    function getTaskID() {
        return taskID;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getDueDate, setDueDate, 
        getPriority, setPriority, 
        getStatus, setStatus, 
        getSteps, addStep, removeStep, 
        getCompletedSteps, addCompletedStep, removeCompletedStep, 
        getProjectID, getTaskID, 
        getNextStepCount 
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
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editProjectColour: () => (/* binding */ editProjectColour),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory */ "./src/models/organizers/factories/projectFactory.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");



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
}

/* Edit an exisiting project */
function editProject(project, title, description) {
    project.setTitle(title);
    project.setDescription(description);
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

// /* Delete an existing project */
// function deleteProject(project) {
//     delete project.getTitle();
//     delete project.getDescription();
// }

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
}

function editProjectColour() {
    const newColour = document.querySelector("input[type='radio']:checked").value;

    getCurrentProject().setColour(newColour);
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
/* harmony export */   setIncomplete: () => (/* binding */ setIncomplete)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/display */ "./src/pages/display.js");




/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, projectID, taskID, stepID);

    task.addStep(newStep);
}

/* Edit an existing step */
function editStep(step, title) {
    step.setTitle(title);
}

// /* Delete an exisiting step */
// function deleteStep(step) {
//     delete step.title;
// }

function createStepFromForm() {
    const title = document.querySelector("#step-title").value;
    const project = getCurrentProject();
    const task = project.getCurrentTask();

    createStep(task, title);
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_2__.clearPage)();
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_2__.renderProjectPage)(project);
}

/* Set a step to incomplete status */
function setIncomplete() {
    if (this.status === _enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.TODO) {
        setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.INCOMPLETE);
    }
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
/* harmony export */   editTask: () => (/* binding */ editTask)
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

    project.addTask(newTask);
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    task.setTitle(title);
    task.setDescription(task, description);
    task.setDueDate(task, dueDate);
    task.setPriority(task, priority);
    task.setStatus(task, status);
}

// /* Delete an exisiting task */
// function deleteTask(task) {
//     delete task.getTitle();
//     delete task.getDescription();
//     delete task.getDueDate();
//     delete task.getPriority();
//     delete task.getStatus();
// }

/* Creates a task from creation form */
function createTaskFromForm() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();

    createTask(project, title, desc, date, priority);
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)(project);
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    // Mark incomplete steps
    task.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    task.getSteps().array.forEach(step => {
        step.setIncomplete();
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



/***/ }),

/***/ "./src/pages/allProjectsPage/index.js":
/*!********************************************!*\
  !*** ./src/pages/allProjectsPage/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectCardColour: () => (/* binding */ editProjectCardColour),
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
                    _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteForm();
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

/* Updates the project card if project colour is altered */
function editProjectCardColour() {
    const project = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)();

    document.querySelectorAll(".project-card").forEach(card => {
        if (card.getAttribute("data-project-id") === String(project.getProjectID())) {
            console.log("Found");
            card.style.borderColor = project.getColour();
        }
    });
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
/* harmony export */   renderDeleteForm: () => (/* binding */ renderDeleteForm),
/* harmony export */   renderEditProjectForm: () => (/* binding */ renderEditProjectForm)
/* harmony export */ });
/* harmony import */ var _textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator */ "./src/pages/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator */ "./src/pages/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer */ "./src/models/enums/organizer.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/task.js */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/organizers/step.js */ "./src/models/organizers/step.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display.js */ "./src/pages/display.js");








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
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons());
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form, _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);

    renderForm(form);
}

/* Create the form for creating a new project */
function renderEditProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-edit-form", "Edit Project", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons());
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Edit", form, _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getTitle();
    document.querySelector("#project-title").value = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getTitle();
    document.querySelector("#project-desc").placeholder = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getDescription();
    document.querySelector("#project-desc").value = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getDescription();
    // Highlight the currently selected colour
    document.querySelectorAll(".colour-radio-btn").forEach(colourBtn => {
        const btnColour = colourBtn.id.replace("colour-", "");
        if (btnColour.toLowerCase() === (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getColour().toLowerCase()) {
            colourBtn.checked = true;
        }
        else {
            colourBtn.checked = false;
        }
    })
}

/* Create the form for creating a new task */
function renderCreateTaskForm(project) {
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
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Create", form, _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.createTaskFromForm);

    renderForm(form);
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

/* Create the form for confirming organizer deletion */
function renderDeleteForm() {
    const form = generateFormBase(("confirm-delete-form"), ("Delete Item?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form);

    renderForm(form);
}

function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons());
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Colour", form, () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.editProjectColour)();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editSidebarProjectColour)();
        if (document.querySelector(".project-header-container") !== null) {
            console.log("Yipee");
            (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editProjectPageColour)();
        }
        else {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editProjectCardColour)();
        }
    });

    renderForm(form);
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
            // Add checked to default option
            if (priorityValue === _models_enums_priority__WEBPACK_IMPORTED_MODULE_0__.DefaultPriority) {
                radioInput.checked = true;
            }
    
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
            // Add checked to default option
            if (colourValue === _models_enums_colours__WEBPACK_IMPORTED_MODULE_1__.DefaultColour) {
                radioInput.checked = true;
            }
    
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
/* harmony export */   renderProjectPage: () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksGenerator */ "./src/pages/projectPage/tasksGenerator.js");
/* harmony import */ var _utility_actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/actionButtons */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");






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
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task",
            event: () => {
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateTaskForm(project);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderColourPickerForm(); 
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderEditProjectForm();
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project",
            event: () => {
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(project);
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteForm();
            }},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.borderColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_utility_actionButtons__WEBPACK_IMPORTED_MODULE_1__["default"])(projectButtons));

        return projectHeader;
    }

    /* Create the list of tasks and their steps */
    function generateContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        // Incomplete tasks section header
        const todoSectionDivider = document.createElement("h2");
        todoSectionDivider.textContent = "Tasks"
        todoSectionDivider.classList.add("section-divider");

        // Generate incomplete tasks
        taskListContainer.appendChild(todoSectionDivider);
        taskListContainer.appendChild((0,_tasksGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(project.getTasks()));

        // Completed tasks section header
        const completedSectionDivider = document.createElement("h2");
        completedSectionDivider.textContent = "Completed"
        completedSectionDivider.classList.add("section-divider");

        // Generate completed tasks
        taskListContainer.appendChild(completedSectionDivider);
        taskListContainer.appendChild((0,_tasksGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(project.getCompletedTasks()));

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(project));
}

/* Updates the project page if project colour is altered */
function editProjectPageColour() {
    const projectHeader = document.querySelector(".project-header-container");
    if (projectHeader !== null) {
        projectHeader.style.borderColor = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().getColour();
    }
}



/***/ }),

/***/ "./src/pages/projectPage/stepsGenerator.js":
/*!*************************************************!*\
  !*** ./src/pages/projectPage/stepsGenerator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateSteps)
/* harmony export */ });
/* harmony import */ var _utility_actionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");




/* Create a list of steps for a task */
function generateSteps(steps) {
    /* Create a step item */
    function generateStep(step) {
        // Step Buttons to be created
        const stepButtons = [
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__.renderCreateStepForm},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__.renderDeleteForm},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item");
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

        stepInfo.appendChild(completedCheckbox);

        // Step Details
        const stepDetails = document.createElement("span");
        stepDetails.classList.add("step-details");

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action Buttons for Steps
        const stepActionButtons = (0,_utility_actionButtons__WEBPACK_IMPORTED_MODULE_0__["default"])(stepButtons);

        // Append Elements
        stepDetails.appendChild(stepTitle);

        stepInfo.appendChild(stepDetails);

        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    const stepList = document.createElement("ul");
    stepList.classList.add("step-list");

    // Add all steps to the list
    steps.forEach(step => {
        stepList.appendChild(generateStep(step));
    });

    return stepList;
}

/***/ }),

/***/ "./src/pages/projectPage/tasksGenerator.js":
/*!*************************************************!*\
  !*** ./src/pages/projectPage/tasksGenerator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTasks)
/* harmony export */ });
/* harmony import */ var _stepsGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepsGenerator */ "./src/pages/projectPage/stepsGenerator.js");
/* harmony import */ var _utility_actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/actionButtons */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");






/* Create a list of tasks for a project */
function generateTasks(tasks) {
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

            // Append elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task buttons to be created
        const taskButtons = [
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step",
            event: () => {
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateStepForm();
                console.log("bruh", (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().getTitle(), task.getTitle());
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentProject)().setCurrentTask(task);
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task",
            event: () => {
                _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateTaskForm(project)
            }},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteForm},
        ]

        // Task information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item");
        // Link to task
        taskItem.setAttribute("data-project-id", task.getProjectID());
        taskItem.setAttribute("data-task-id", task.getTaskID());

        // Append task information elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild((0,_utility_actionButtons__WEBPACK_IMPORTED_MODULE_1__["default"])(taskButtons));

        return taskItem;
    }

    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    // Add all tasks to the list
    tasks.forEach(task => {
        const projectTaskItem = document.createElement("li");
        projectTaskItem.classList.add("project-task-item");

        // Create task
        projectTaskItem.appendChild(generateTask(task));
        // Create steps
        projectTaskItem.appendChild((0,_stepsGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(task.getSteps()));

        taskList.appendChild(projectTaskItem);
    })

    return taskList;
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
/* harmony export */   addSidebarProject: () => (/* binding */ addSidebarProject),
/* harmony export */   editSidebarProjectColour: () => (/* binding */ editSidebarProjectColour),
/* harmony export */   removeSidebarProject: () => (/* binding */ removeSidebarProject),
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/organizers/project */ "./src/models/organizers/project.js");


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
function addSidebarProject(project) {
    sidebar.appendChild(createSidebarProject(project));
}

/* Edit the colour of a sidebar project button */
function editSidebarProjectColour() {
    const project = (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();
    document.querySelectorAll(".sidebar-project-button").forEach(sidebarItem => {
        if (sidebarItem.getAttribute("data-project-id") === String(project.getProjectID())) {
            sidebarItem.firstChild.style.color = project.getColour();
        }
    })
}

function removeSidebarProject() {

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
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getTasks()[0], "Morning Meeting");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getTasks()[0], "Afternoon Meeting");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1], "Presentation", "All work presentations", "", "None");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getTasks()[1], "Generate Financial Graphs");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getTasks()[1], "Check report draft for typos");

// School project/tasks/steps
(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[2], "Presentations", "All work presentations", "", "High");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[2].getTasks()[0], "Homework");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0Ysd0JBQXdCLGFBQWEseUJBQXlCLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLEtBQUssUUFBUSxLQUFLLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEc0QztBQUM1QztBQUNBO0FBQ2U7QUFDZixpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkM0QztBQUM1QztBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSHdEO0FBQ2tCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFTO0FBQ2IsSUFBSSx3RUFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmtEO0FB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QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEI7QUFDQTtBQUNBLHlFQUFhO0FBQ2I7QUFDQSxtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEI7QUFDQSx5REFBcUIsQ0FBQyx1RUFBVztBQUNqQyxtRUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUE2QixDQUFDLHVFQUFXO0FBQ3pDO0FBQ0Esd0ZBQXNCLENBQUMsdUVBQVcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9jb2xvdXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvb3JnYW5pemVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3N0ZXBGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWxsUHJvamVjdHNMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvc2lkZWJhckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9hbGxQcm9qZWN0c1BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3JhZGlvRmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3RleHRGaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL3N0ZXBzR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS90YXNrc0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn0gKi9cclxuXHJcbi5hY3Rpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSxcclxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG59XHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci10aXRsZSB7XHJcblxyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG5cclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi8qXHJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXHJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXHJcbi5kYXRlLWlucHV0OmZvY3VzLFxyXG4uZGVzYy1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcclxufSBcclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbn0gXHJcblxyXG4uY3JlYXRpb24tZm9ybSxcclxuLmRlbGV0ZS1mb3JtLFxyXG4uY29sb3VyLWZvcm0ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLmZpZWxkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb3JtIEJ1dHRvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG5cclxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODksIDI1NSk7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgODksIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgODksIDI1NSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuLnRpdGxlLWlucHV0LFxyXG4uZGF0ZS1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kZXNjLWlucHV0IHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIERlbGV0aW9uIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5jb2xvdXItZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgxZnIsIDUwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY29sb3VyLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uY29sb3VyLXJhZGlvLWJ0biB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQ7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb250ZW50IEJvZHkgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uY29udGVudC1ib2R5IHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjMyLCAyNDApO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59IFxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFRvZGF5IENvbnRlbnQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNlY3Rpb24tZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxufSBcclxuLnNlY3Rpb24tZGl2aWRlcjo6YmVmb3JlIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMCAxcmVtIDAgMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi50YXNrLWxpc3QtY29udGFpbmVyLFxyXG4uc3RlcC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnRhc2stbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59IFxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXN0ZXAtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcmlvcml0eSBJY29uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIC5wcmlvcml0eS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1oaWdoIHtcclxuICAgIGNvbG9yOiAjYWUyZTI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNlYjtcclxufVxyXG5cclxuLnByaW9yaXR5LW1lZCB7XHJcbiAgICBjb2xvcjogIzVlNGRiMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZmY7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1sb3cge1xyXG4gICAgY29sb3I6ICMwMDU1Y2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMmZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9uZSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjQ7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb290ZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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LFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7RUFJRTtBQUNGOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0VBSUU7Q0FDRDtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXFxyXFxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cXHJcXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYWwgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmFjdGlvbi1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuLmFjdGlvbi1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IDFmciA1ZnIgYXV0byAvIDFmciA0ZnI7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFNpZGViYXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0yIC8gMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbWVudSxcXHJcXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb24ge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi8qXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xcclxcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiovXFxyXFxuLnRpdGxlLWlucHV0OmZvY3VzLFxcclxcbi5kYXRlLWlucHV0OmZvY3VzLFxcclxcbi5kZXNjLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcXHJcXG59IFxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLmNyZWF0aW9uLWZvcm0sXFxyXFxuLmRlbGV0ZS1mb3JtLFxcclxcbi5jb2xvdXItZm9ybSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcblxcclxcbi5mb3JtLWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODksIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnRuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIFxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uY29sb3VyLWZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDAuNnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1yYWRpby1idG4ge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ib2R5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtY2FyZC1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFRvZGF5IENvbnRlbnQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2VjdGlvbi1kaXZpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcclxcbn0gXFxyXFxuLnNlY3Rpb24tZGl2aWRlcjo6YmVmb3JlIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDEwMDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi50YXNrLWxpc3QtY29udGFpbmVyLFxcclxcbi5zdGVwLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2staXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcmlvcml0eSBJY29uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIC5wcmlvcml0eS10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgICBjb2xvcjogI2FlMmUyNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNlYjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZCB7XFxyXFxuICAgIGNvbG9yOiAjNWU0ZGIyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbG93IHtcXHJcXG4gICAgY29sb3I6ICMwMDU1Y2M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWYyZmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1ub25lIHtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9vdGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAtMiAvIDEgLyAtMSAvIC0xO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIEFjdGlvbiBidXR0b24gY2xhc3NuYW1lIEVOVU0gKi9cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIENSRUFURTogXCJhZGQtYnV0dG9uXCIsXHJcbiAgICBDT0xPVVI6IFwiY29sb3VyLWJ1dHRvblwiLFxyXG4gICAgRURJVDogXCJlZGl0LWJ1dHRvblwiLFxyXG4gICAgREVMRVRFOiBcImRlbGV0ZS1idXR0b25cIixcclxufVxyXG5cclxuZXhwb3J0IHsgQWN0aW9ucyB9IiwiLyogQ29sb3VyIEVOVU0gKi9cclxuY29uc3QgQ29sb3VycyA9IHtcclxuICAgIE5PTkU6IFwiIzdFODE4MFwiLFxyXG4gICAgUkVEOiBcIiNFMTM0MUVcIixcclxuICAgIEJMVUU6IFwiIzBFMDlGNlwiLFxyXG4gICAgR1JFRU46IFwiIzBDRjMzRFwiLFxyXG4gICAgUFVSUExFOiBcIiNGMzBDQzJcIixcclxuICAgIFlFTExPVzogXCIjRjFGNjA5XCIsXHJcbiAgICAvLyBURUFMOiBcIiMxZWNiZTFcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdENvbG91ciA9IENvbG91cnMuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZENvbG91cihjb2xvdXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKENvbG91cnMpLmluY2x1ZGVzKGNvbG91cik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSIsIi8qIE9yZ2FuaXplciBFTlVNICovXHJcbmNvbnN0IE9yZ2FuaXplcnMgPSB7XHJcbiAgICBQUk9KRUNUOiBcIlByb2plY3RcIixcclxuICAgIFRBU0s6IFwiVGFza1wiLFxyXG4gICAgU1RFUDogXCJTdGVwXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZE9yZ2FuaXplcihvcmdhbml6ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKE9yZ2FuaXplcnMpLmluY2x1ZGVzKG9yZ2FuaXplcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE9yZ2FuaXplcnMsIGlzVmFsaWRPcmdhbml6ZXIgfSIsIi8qIFByaW9yaXR5IEVOVU0gKi9cclxuY29uc3QgUHJpb3JpdHkgPSB7XHJcbiAgICBOT05FOiBcIk5vbmVcIixcclxuICAgIExPVzogXCJMb3dcIixcclxuICAgIE1FRDogXCJNZWRcIixcclxuICAgIEhJR0g6IFwiSGlnaFwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0UHJpb3JpdHkgPSBQcmlvcml0eS5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHByaW9yaXR5IHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmluY2x1ZGVzKHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgUHJpb3JpdHksIERlZmF1bHRQcmlvcml0eSwgaXNWYWxpZFByaW9yaXR5IH0iLCIvKiBTdGF0dXMgRU5VTSAqL1xyXG5jb25zdCBTdGF0dXMgPSB7XHJcbiAgICBDT01QTEVURUQ6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBJTkNPTVBMRVRFOiBcIkluY29tcGxldGVcIixcclxuICAgIFRPRE86IFwiVG8gRG9cIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXR1cyBwcm9wZXJ0eSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3RhdHVzKS5pbmNsdWRlcyhzdGF0dXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSIsImltcG9ydCB7IERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vZW51bXMvY29sb3Vycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHByb2plY3Qgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdElEKSB7XHJcbiAgICBsZXQgY29sb3VyID0gRGVmYXVsdENvbG91cjtcclxuICAgIGxldCB0YXNrQ291bnQgPSAwO1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XHJcbiAgICBsZXQgY3VycmVudFRhc2sgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgdGFzayBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFRhc2tDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRhc2tDb3VudDtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvdXIobmV3Q29sb3VyKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRDb2xvdXIobmV3Q29sb3VyKSkge1xyXG4gICAgICAgICAgICBjb2xvdXIgPSBuZXdDb2xvdXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSB0YXNrIHRvIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHRhc2sgZnJvbSB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGFza3MuYXJyYXkuZm9yRWFjaCh0YXNrRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrID09PSB0YXNrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh0YXNrRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgY29tcGxldGVkIHRhc2sgdG8gdGhlIHByb2plY3QgKi9cclxuICAgIGZ1bmN0aW9uIGFkZENvbXBsZXRlZFRhc2sodGFzaykge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIGEgdGFzayBmcm9tIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5hcnJheS5mb3JFYWNoKHRhc2tFbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRhc2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2tFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgY3VycmVudFRhc2sgPSBuZXdUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXRDb2xvdXIsIHNldENvbG91cixcclxuICAgICAgICBnZXRUYXNrcywgYWRkVGFzaywgcmVtb3ZlVGFzayxcclxuICAgICAgICBnZXRDb21wbGV0ZWRUYXNrcywgYWRkQ29tcGxldGVkVGFzaywgcmVtb3ZlQ29tcGxldGVkVGFzaywgXHJcbiAgICAgICAgZ2V0UHJvamVjdElELFxyXG4gICAgICAgIGdldE5leHRUYXNrQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFRhc2ssIHNldEN1cnJlbnRUYXNrLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3RlcCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RlcEZhY3RvcnkodGl0bGUsIHByb2plY3RJRCwgdGFza0lELCBzdGVwSUQpIHtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuVE9ETztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGFza0lEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0ZXBJRCgpIHtcclxuICAgICAgICByZXR1cm4gc3RlcElEO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIFxyXG4gICAgICAgIGdldFByb2plY3RJRCwgZ2V0VGFza0lELCBnZXRTdGVwSUQsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgdGFzayBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpIHtcclxuICAgIGxldCBzdGVwQ291bnQgPSAwO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gW107XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLlRPRE87XHJcblxyXG4gICAgLyogUmV0dXJucyBzdGVwIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcENvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3RlcENvdW50O1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gc3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkU3RlcChzdGVwKSB7XHJcbiAgICAgICAgc3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBzdGVwIGZyb20gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0ZXAoc3RlcCkge1xyXG4gICAgICAgIHN0ZXBzLmFycmF5LmZvckVhY2goc3RlcEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gc3RlcEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzLnB1c2goc3RlcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkU3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCBzdGVwIHRvIHRoZSB0YXNrICovXHJcbiAgICBmdW5jdGlvbiBhZGRDb21wbGV0ZWRTdGVwKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHN0ZXAgZnJvbSB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkU3RlcChzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMuYXJyYXkuZm9yRWFjaChzdGVwRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwID09PSBzdGVwRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkU3RlcHMucHVzaChzdGVwRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgXHJcbiAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgXHJcbiAgICAgICAgZ2V0U3RlcHMsIGFkZFN0ZXAsIHJlbW92ZVN0ZXAsIFxyXG4gICAgICAgIGdldENvbXBsZXRlZFN0ZXBzLCBhZGRDb21wbGV0ZWRTdGVwLCByZW1vdmVDb21wbGV0ZWRTdGVwLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgXHJcbiAgICAgICAgZ2V0TmV4dFN0ZXBDb3VudCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdCB0aGF0IHN0b3JlcyBhbGwgdW5hc3NpZ25lZCB0YXNrcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KFxyXG4gICAgICAgIFwiTWlzY2VsbGFuZW91c1wiLCBcclxuICAgICAgICBcIkRlZmF1bHQgcHJvamVjdFwiLFxyXG4gICAgICAgIHByb2plY3RJRCxcclxuICAgIClcclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc2l0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKHRpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG4vLyAvKiBSZXBsYWNlIGFuIGV4aXN0aW5nIHByb2plY3Qgd2l0aCBhIG5ldyBvbmUgKi9cclxuLy8gZnVuY3Rpb24gcmVwbGFjZVByb2plY3QocHJvamVjdCkge1xyXG4vLyAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuLy8gICAgICAgICBpZiAoZWxlbWVudC5nZXRQcm9qZWN0SUQoKSA9PT0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKSkge1xyXG4vLyAgICAgICAgICAgICBlbGVtZW50ID0gcHJvamVjdDtcclxuLy8gICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuLy8gZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbi8vICAgICBkZWxldGUgcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4vLyAgICAgZGVsZXRlIHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuLy8gfVxyXG5cclxuLyogUmV0dXJucyBwcm9qZWN0IGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbmZ1bmN0aW9uIGdldE5leHRQcm9qZWN0Q291bnQoKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IHByb2plY3RDb3VudDtcclxuICAgIHByb2plY3RDb3VudCsrO1xyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcblxyXG4vKiBDcmVhdGVzIGEgcHJvamVjdCBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYyk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q29sb3VyKCkge1xyXG4gICAgY29uc3QgbmV3Q29sb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZFwiKS52YWx1ZTtcclxuXHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldENvbG91cihuZXdDb2xvdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvamVjdDtcclxufVxyXG5cclxubGV0IHByb2plY3RDb3VudCA9IDA7XHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGNyZWF0ZVByb2plY3RGcm9tRm9ybSwgZWRpdFByb2plY3RDb2xvdXIsIGdldFByb2plY3RzLCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfSIsImltcG9ydCBzdGVwRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvc3RlcEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBzdGVwIGFuZCBhZGRzIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKHRhc2ssIHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSB0YXNrLmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gdGFzay5nZXRUYXNrSUQoKTtcclxuICAgIGNvbnN0IHN0ZXBJRCA9IHRhc2suZ2V0TmV4dFN0ZXBDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3U3RlcCA9IHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKTtcclxuXHJcbiAgICB0YXNrLmFkZFN0ZXAobmV3U3RlcCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc3Rpbmcgc3RlcCAqL1xyXG5mdW5jdGlvbiBlZGl0U3RlcChzdGVwLCB0aXRsZSkge1xyXG4gICAgc3RlcC5zZXRUaXRsZSh0aXRsZSk7XHJcbn1cclxuXHJcbi8vIC8qIERlbGV0ZSBhbiBleGlzaXRpbmcgc3RlcCAqL1xyXG4vLyBmdW5jdGlvbiBkZWxldGVTdGVwKHN0ZXApIHtcclxuLy8gICAgIGRlbGV0ZSBzdGVwLnRpdGxlO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGVwRnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0Q3VycmVudFRhc2soKTtcclxuXHJcbiAgICBjcmVhdGVTdGVwKHRhc2ssIHRpdGxlKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCk7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0ZXAgdG8gaW5jb21wbGV0ZSBzdGF0dXMgKi9cclxuZnVuY3Rpb24gc2V0SW5jb21wbGV0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gU3RhdHVzLlRPRE8pIHtcclxuICAgICAgICBzZXRTdGF0dXMoU3RhdHVzLklOQ09NUExFVEUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGVwLCBlZGl0U3RlcCwgY3JlYXRlU3RlcEZyb21Gb3JtLCBzZXRJbmNvbXBsZXRlIH0iLCJpbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Rhc2tGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHRhc2sgYW5kIGFkZHMgdG8gYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHByb2plY3QuZ2V0TmV4dFRhc2tDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgdGFza0lEKTtcclxuXHJcbiAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc3RpbmcgdGFzayAqL1xyXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHRhc2suc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0YXNrLnNldER1ZURhdGUodGFzaywgZHVlRGF0ZSk7XHJcbiAgICB0YXNrLnNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KTtcclxuICAgIHRhc2suc2V0U3RhdHVzKHRhc2ssIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8vIC8qIERlbGV0ZSBhbiBleGlzaXRpbmcgdGFzayAqL1xyXG4vLyBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcclxuLy8gICAgIGRlbGV0ZSB0YXNrLmdldFRpdGxlKCk7XHJcbi8vICAgICBkZWxldGUgdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4vLyAgICAgZGVsZXRlIHRhc2suZ2V0RHVlRGF0ZSgpO1xyXG4vLyAgICAgZGVsZXRlIHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuLy8gICAgIGRlbGV0ZSB0YXNrLmdldFN0YXR1cygpO1xyXG4vLyB9XHJcblxyXG4vKiBDcmVhdGVzIGEgdGFzayBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG59XHJcblxyXG4vKiBDb21wbGV0ZSBhIHRhc2sgYW5kIGNvbnZlcnQgYWxsIHN0ZXBzIHRvIHJlcXVpcmVkIHN0YXR1cyovXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgdGFzay5nZXRTdGVwcygpLmFycmF5LmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcC5zZXRJbmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgZWRpdFRhc2ssIGNvbXBsZXRlVGFzaywgY3JlYXRlVGFza0Zyb21Gb3JtIH0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5wcm9qZWN0LWNhcmRcIik7XHJcbn0iLCJpbXBvcnQgY3JlYXRlU2lkZWJhckxpc3RlbmVycyBmcm9tIFwiLi9zaWRlYmFyTGlzdGVuZXJzXCI7XHJcbmltcG9ydCBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyBmcm9tIFwiLi9hbGxQcm9qZWN0c0xpc3RlbmVyc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMsXHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyxcclxufSIsImltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4vdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogTWFrZSB0aGUgYWxsIHByb2plY3RzIHNpZGViYXIgYnV0dG9uIGxpbmsgdG8gdGhlIGFsbCBwcm9qZWN0cyBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG5cclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIEdpdmUgYWxsIHNpZGViYXIgcHJvamVjdCBidXR0b25zIGZ1bmN0aW9uYWxpdHkgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhckxpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cyk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIFwiLnNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbn0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgY2xlYXJQYWdlLCByZW5kZXJEZWxldGVGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcblxyXG4vKiBNYWtlIGEgZ3JvdXAgb2YgcHJvamVjdCBuYXZpZ2F0aW9uIERPTSBlbGVtZW50cyBsaW5rIHRvIHRoZWlyIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hdkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xyXG5cclxuICAgIC8vIExpbmsgZWFjaCBwcm9qZWN0IG5hdmlnYXRpb24gZWxlbWVudCB0byBhIHByb2plY3QgcGFnZVxyXG4gICAgcHJvamVjdE5hdkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0iLCJpbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgb2YgdGhlIGN1cnJlbnQgcHJvamVjdHMgKi9cclxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgc2VjdGlvbiAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFByb2plY3RzXCI7XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0blwiKTtcclxuXHJcbiAgICAgICAgLy8gcHJvamVjdCBidXR0b24gZXZlbnRcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1zLnJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgYm9keSBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgY2FyZCAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgcHJvamVjdCBjYXJkIGRldGFpbHNcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmREZXRhaWxzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlcyB0aGUgbG9naWMgZm9yIHRoZSBwcm9qZWN0IGNhcmQgYWN0aW9uIGJ1dHRvbnMgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RDYXJkQnV0dG9ucyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DT0xPVVJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7IFxyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXByb2plY3RcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckVkaXRQcm9qZWN0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckRlbGV0ZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmRCdXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0Q2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1ncmlkXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGRpbmcgZWFjaCBvZiB0aGUgcHJvamVjdHMgdG8gYSBjYXJkXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcclxuICAgICAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoZ2VuZXJhdGVQcm9qZWN0Q2FyZEJ1dHRvbnMocHJvamVjdCkpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmRHcmlkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcigpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cyk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGNvbG91ciBpcyBhbHRlcmVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q2FyZENvbG91cigpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jYXJkXCIpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpID09PSBTdHJpbmcocHJvamVjdC5nZXRQcm9qZWN0SUQoKSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZFwiKTtcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkQ29sb3VyIH0iLCJpbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciB9IGZyb20gXCIuL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXJ9IGZyb20gXCIuL3Byb2plY3RQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkQ29sb3VyIH0gZnJvbSBcIi4vYWxsUHJvamVjdHNQYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuL2Zvcm1zL2Zvcm1HZW5lcmF0b3JcIjtcclxuXHJcbmZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIGNsZWFySGVhZGVyKCk7XHJcbiAgICBjbGVhckJvZHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsXHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZSxcclxuICAgIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgXHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsXHJcbiAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIsXHJcbiAgICBmb3JtcyxcclxuICAgIGNsZWFyUGFnZSxcclxuICAgIGNsZWFyU2lkZWJhcixcclxufSIsImltcG9ydCBnZW5lcmF0ZVRleHRGaWVsZHMgZnJvbSBcIi4vdGV4dEZpZWxkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCAqIGFzIHJhZGlvRmllbGRHZW5lcmF0b3IgZnJvbSBcIi4vcmFkaW9GaWVsZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBPcmdhbml6ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9vcmdhbml6ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZyb21Gb3JtLCBlZGl0UHJvamVjdENvbG91ciwgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza0Zyb21Gb3JtIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Rhc2suanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcEZyb21Gb3JtIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3N0ZXAuanNcIjtcclxuaW1wb3J0IHsgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciB9IGZyb20gXCIuLi9kaXNwbGF5LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIG1vZGFsIHdoaWNoIHdpbGwgc3RvcmUgYWxsIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybU1vZGFsKHBhcmVudCkge1xyXG4gICAgY29uc3QgZm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybU1vZGFsKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBmb3JtIGNyZWF0aW9uIGFuZCBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oZm9ybSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZm9ybUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XHJcbiAgICBtb2RhbC5yZXBsYWNlQ2hpbGRyZW4oZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIGNvbnN0IGJ0bklEUHJlZml4ID0gYWN0aW9uVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gU3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xyXG4gICAgc3VibWl0QnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItc3VibWl0LWJ0blwiO1xyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgLy8gU3VibWl0IGV2ZW50XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN1Ym1pdEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWxCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1jYW5jZWwtYnRuXCI7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiY2FuY2VsLWJ0blwiKTtcclxuXHJcbiAgICAvLyBDYW5jZWwgZXZlbnRcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgcHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJwcm9qZWN0LXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwicHJvamVjdC1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0gLCBtYXhMZW5ndGg6IDgwLCByb3dzOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJwcm9qZWN0LWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgUHJvamVjdFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMocHJvamVjdFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDcmVhdGVcIiwgZm9ybSwgY3JlYXRlUHJvamVjdEZyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1lZGl0LWZvcm1cIiwgXCJFZGl0IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVDb2xvdXJSYWRpb0J1dHRvbnMoKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiRWRpdFwiLCBmb3JtLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gRmlsbCB0aGUgZm9ybSBmaWVsZHMgd2l0aCBjdXJyZW50IGluZm9ybWF0aW9uXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWUgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS5wbGFjZWhvbGRlciA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3VyXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG91ci1yYWRpby1idG5cIikuZm9yRWFjaChjb2xvdXJCdG4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0bkNvbG91ciA9IGNvbG91ckJ0bi5pZC5yZXBsYWNlKFwiY29sb3VyLVwiLCBcIlwiKTtcclxuICAgICAgICBpZiAoYnRuQ29sb3VyLnRvTG93ZXJDYXNlKCkgPT09IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q29sb3VyKCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVUYXNrRm9ybShwcm9qZWN0KSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInRhc2stY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBUYXNrXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyh0YXNrVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5UQVNLKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0ssIFwiQ3JlYXRlXCIsIGZvcm0sIGNyZWF0ZVRhc2tGcm9tRm9ybSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBzdGVwICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVN0ZXBGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHN0ZXBUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwic3RlcC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJzdGVwLWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgU3RlcFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJDcmVhdGVcIiwgZm9ybSwgY3JlYXRlU3RlcEZyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNvbmZpcm1pbmcgb3JnYW5pemVyIGRlbGV0aW9uICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgSXRlbT9cIiksIFwiZGVsZXRlLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBhZGRGb3JtQnV0dG9ucyhcIk9yZ2FuaXplclwiLCBcIkRlbGV0ZVwiLCBmb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDb2xvdXJcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0Q29sb3VyKCk7XHJcbiAgICAgICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKCk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWWlwZWVcIik7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UGFnZUNvbG91cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RDYXJkQ29sb3VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVGb3JtTW9kYWwsIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCByZW5kZXJFZGl0UHJvamVjdEZvcm0sIHJlbmRlckNyZWF0ZVRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRGVsZXRlRm9ybSwgcmVuZGVyQ29sb3VyUGlja2VyRm9ybSB9IiwiaW1wb3J0IHsgUHJpb3JpdHksIERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgQ29sb3VycywgRGVmYXVsdENvbG91ciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvY29sb3Vyc1wiO1xyXG5cclxuLyogQWRkIHRoZSBkZXNpZ25hdGVkIGxlZ2VuZCBhbmQgZmllbGRzZXQgdG8gYSBjb250YWluZXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCkge1xyXG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcmlvcml0eSBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmZvckVhY2gocHJpb3JpdHlWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgcHJpb3JpdHlWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gRGVmYXVsdFByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRjb250YWluZXJcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWZpZWxkXCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKENvbG91cnMpLmZvckVhY2goY29sb3VyVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb2xvdXIga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cktleSA9IE9iamVjdC5rZXlzKENvbG91cnMpLmZpbmQoa2V5ID0+IENvbG91cnNba2V5XSA9PT0gY29sb3VyVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gXCJjb2xvdXItXCIgKyBjb2xvdXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcImNvbG91clwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAoY29sb3VyVmFsdWUgPT09IERlZmF1bHRDb2xvdXIpIHtcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBMYWJlbFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29sb3VyS2V5O1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkc2V0XHJcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkc2V0XCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiQ29sb3VyOlwiO1xyXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCk7XHJcbiAgICBjb25zdCBmaWVsZCA9IGdlbmVyYXRlUmFkaW9CdXR0b25zKGxlZ2VuZCwgZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucywgZ2VuZXJhdGVDb2xvdXJSYWRpb0J1dHRvbnMgfSIsIi8qIENyZWF0ZSBhIGRsYWJlbCBmb3IgYSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGZvcm1GaWVsZC5sYWJlbFRleHQ7XHJcbiAgICBmaWVsZExhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC5mb3IgPSBmb3JtRmllbGQuaWQ7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkTGFiZWw7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHRpdGxlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgLy8gSW5wdXRcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgZGVzY3JpcHRpb24gZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChmb3JtRmllbGQuaW5wdXRUeXBlKTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59ICAgXHJcblxyXG4vKiBDcmVhdGUgYSBkYXRlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgYSBzZXQgb2YgdGV4dCBmaWVsZHMgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUZXh0RmllbGRzKGZpZWxkcywgcGFyZW50KSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpKTtcclxuICAgICAgICBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwidGl0bGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRlc2NcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRhdGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVUYXNrcyBmcm9tIFwiLi90YXNrc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIGluZm8gZm9yIGEgc2VsZWN0ZWQgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGhlYWRlciBkaXNwbGF5aW5nIHByb2plY3QgaW5mbyBhbmQgYWN0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkge1xyXG4gICAgICAgIC8qIERpc3BsYXkgcHJvamVjdCBkZXRhaWxzICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItdGl0bGVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlckluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyQ3JlYXRlVGFza0Zvcm0ocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpOyBcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckRlbGV0ZUZvcm0oKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1jb250YWluZXJcIik7XHJcbiAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMocHJvamVjdEJ1dHRvbnMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBsaXN0IG9mIHRhc2tzIGFuZCB0aGVpciBzdGVwcyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCB0b2RvU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdG9kb1NlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJUYXNrc1wiXHJcbiAgICAgICAgdG9kb1NlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza3MocHJvamVjdC5nZXRUYXNrcygpKSk7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRlZCB0YXNrcyBzZWN0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIlxyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tzKHByb2plY3QuZ2V0Q29tcGxldGVkVGFza3MoKSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBCb2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgcGFnZSBpZiBwcm9qZWN0IGNvbG91ciBpcyBhbHRlcmVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0UGFnZUNvbG91cigpIHtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChwcm9qZWN0SGVhZGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5zdHlsZS5ib3JkZXJDb2xvciA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q29sb3VyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIgfSIsImltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHN0ZXBzIGZvciBhIHRhc2sgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwcyhzdGVwcykge1xyXG4gICAgLyogQ3JlYXRlIGEgc3RlcCBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXAoc3RlcCkge1xyXG4gICAgICAgIC8vIFN0ZXAgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3Qgc3RlcEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtc3RlcFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIiwgZXZlbnQ6IGZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtfSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLCBldmVudDogZm9ybXMucmVuZGVyRGVsZXRlRm9ybX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBzdGVwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBzdGVwSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW1cIik7XHJcbiAgICAgICAgLy8gTGluayB0byB0YXNrXHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHN0ZXAuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCBzdGVwLmdldFRhc2tJRCgpKTtcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtaWRcIiwgc3RlcC5nZXRTdGVwSUQoKSk7XHJcblxyXG4gICAgICAgIC8vIFN0ZXAgSW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCBzdGVwSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0ZXBJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0aW9uIENoZWNrYm94XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5uYW1lID0gXCJcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHN0ZXBJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBEZXRhaWxzXHJcbiAgICAgICAgY29uc3Qgc3RlcERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RlcC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBCdXR0b25zIGZvciBTdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcERldGFpbHMuYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoc3RlcERldGFpbHMpO1xyXG5cclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwSW5mbyk7XHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEFjdGlvbkJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RlcEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RlcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBzdGVwTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcC1saXN0XCIpO1xyXG5cclxuICAgIC8vIEFkZCBhbGwgc3RlcHMgdG8gdGhlIGxpc3RcclxuICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcExpc3QuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwKHN0ZXApKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGVwTGlzdDtcclxufSIsImltcG9ydCBnZW5lcmF0ZVN0ZXBzIGZyb20gXCIuL3N0ZXBzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2YgdGFza3MgZm9yIGEgcHJvamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tzKHRhc2tzKSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjs7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrRGV0YWlscztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDcmVhdGVTdGVwRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJicnVoXCIsIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGl0bGUoKSwgdGFzay5nZXRUaXRsZSgpKTtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXRhc2tcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3Jtcy5yZW5kZXJDcmVhdGVUYXNrRm9ybShwcm9qZWN0KVxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLCBldmVudDogZm9ybXMucmVuZGVyRGVsZXRlRm9ybX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XHJcblxyXG4gICAgLy8gQWRkIGFsbCB0YXNrcyB0byB0aGUgbGlzdFxyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2tcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrKHRhc2spKTtcclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwcyh0YXNrLmdldFN0ZXBzKCkpKTtcclxuXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tJdGVtKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4vc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIC8vIExvZ29cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJUT0RPXCI7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIC8vIFNlY3Rpb24gaGVhZGVyXHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiTVkgUFJPSkVDVFNcIlxyXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1oZWFkaW5nXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3RzLW1lbnVcIik7XHJcblxyXG4gICAgLy8gQWxsIHByb2plY3RzIGJ1dHRvblxyXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcHJvamVjdHNMaXN0KTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcbn0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcblxyXG4vKiBDcmVhdGUgYSBzaWRlYmFyIG1lbnUgaXRlbSAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXJJdGVtKHRpdGxlLCBpY29uRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgc2lkZWJhckl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcclxuXHJcbiAgICAvLyBUaXRsZVxyXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpY29uRnVuY3Rpb24oKSk7XHJcbiAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBzaWRlYmFySXRlbTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpY29uIGZvciBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SWNvbihpY29uQ29sb3VyKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24udGV4dENvbnRlbnQgPSBcIuKXj1wiO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJwcm9qZWN0LWljb25cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5zdHlsZS5jb2xvciA9IGljb25Db2xvdXI7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIHRoZSBhbGwgcHJvamVjdHMgaWNvbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFByb2plY3RJY29uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICAgIC8vIEljb24gaW1hZ2VcclxuICAgIGNvbnN0IGljb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpY29uSW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ljb25zL3Byb2plY3RzLnN2Z1wiO1xyXG5cclxuICAgIC8vIEFwcGVuaW5nIGVsZW1lbnRzXHJcbiAgICBwcm9qZWN0SWNvbi5hcHBlbmRDaGlsZChpY29uSW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgcHJvamVjdCBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZ2VuZXJhdGVTaWRlYmFySXRlbShwcm9qZWN0LmdldFRpdGxlKCksICgpID0+IGdlbmVyYXRlUHJvamVjdEljb24ocHJvamVjdC5nZXRDb2xvdXIoKSkpO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhbiBhbGwgcHJvamVjdHMgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGdlbmVyYXRlU2lkZWJhckl0ZW0oXCJBbGwgUHJvamVjdHNcIiwgZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbik7XHJcbiAgICBhbGxQcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWJ1dHRvblwiKTtcclxuICAgIHJldHVybiBhbGxQcm9qZWN0c0J1dHRvbjtcclxufVxyXG5cclxuLyogRGlzcGxheSBhbGwgcHJvamVjdHMgb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3RzLCBwYXJlbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFsbFByb2plY3RzQnV0dG9uKCkpO1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBZGQgYSBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gYWRkU2lkZWJhclByb2plY3QocHJvamVjdCkge1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyUHJvamVjdChwcm9qZWN0KSk7XHJcbn1cclxuXHJcbi8qIEVkaXQgdGhlIGNvbG91ciBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItcHJvamVjdC1idXR0b25cIikuZm9yRWFjaChzaWRlYmFySXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKHNpZGViYXJJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSA9PT0gU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpKSB7XHJcbiAgICAgICAgICAgIHNpZGViYXJJdGVtLmZpcnN0Q2hpbGQuc3R5bGUuY29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNpZGViYXJQcm9qZWN0KCkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRTaWRlYmFyUHJvamVjdCwgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyLCByZW1vdmVTaWRlYmFyUHJvamVjdCB9IiwiLyogQ3JlYXRlcyB0aGUgYWN0aW9uIGJ1dHRvbnMgZm9yIGEgb3JnYW5pemVyICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBjb25zdCBhY3Rpb25CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBhY3Rpb25CdG5zLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnRuc1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGJ1dHRvbnNcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIC8vIEJ1dHRvbiBjb250YWluZXJcclxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJhY3Rpb24tYnRuXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBCdXR0b25cclxuICAgICAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5zcmMgPSBidG4uc3JjO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5hbHQgPSBidG4uYWx0O1xyXG4gICAgICAgIGFjdGlvbkJ0bi50aXRsZSA9IGJ0bi50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uIGFjdGlvblxyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgYnRuLmV2ZW50KCk7ICAgICAgICBcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcCB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3N0ZXBcIjtcclxuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tIFwiLi9wYWdlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcblxyXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG5cclxuLy8gV29yayBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNyZWF0ZVByb2plY3QoXCJXb3JrIE1lZXRpbmdzXCIsIFwiQWxsIHRoaW5ncyB3b3JrIG1lZXRpbmcgcmVsYXRlZCFcIik7XHJcblxyXG5jcmVhdGVUYXNrKGdldFByb2plY3RzKClbMV0sIFwiTW9uZGF5IE1lZXRpbmdzXCIsIFwiQWxsIG1vbmRheSB3b3JrIG1lZXRpbmdzXCIsIFwiXCIsIFwiTWVkXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0VGFza3MoKVswXSwgXCJNb3JuaW5nIE1lZXRpbmdcIik7XHJcbmNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRUYXNrcygpWzBdLCBcIkFmdGVybm9vbiBNZWV0aW5nXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIlByZXNlbnRhdGlvblwiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJOb25lXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0VGFza3MoKVsxXSwgXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0VGFza3MoKVsxXSwgXCJDaGVjayByZXBvcnQgZHJhZnQgZm9yIHR5cG9zXCIpO1xyXG5cclxuLy8gU2Nob29sIHByb2plY3QvdGFza3Mvc3RlcHNcclxuY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiLCBcIkFsbCB0aGluZ3Mgc2Nob29sIHJlbGF0ZWQhXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzJdLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzJdLmdldFRhc2tzKClbMF0sIFwiSG9tZXdvcmtcIik7XHJcblxyXG5kaXNwbGF5LnJlbmRlclNpZGViYXIoZ2V0UHJvamVjdHMoKSk7XHJcbmRpc3BsYXkuZm9ybXMuZ2VuZXJhdGVGb3JtTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJEZWxldGVGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpO1xyXG5kaXNwbGF5LnJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuLy8gZGlzcGxheS5yZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0c1sxXSk7XHJcbmNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMoZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9