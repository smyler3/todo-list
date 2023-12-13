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
}

.action-btn {
    cursor: pointer;
    padding: 1rem;
}
.action-btn:hover {
    background-color: var(--sidebar-hover-background);
    border-radius: 50%;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    display: grid;\r\n    grid: 1fr 5fr auto / 1fr 4fr;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -2 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.step-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/factories/projectFactory.js":
/*!*****************************************!*\
  !*** ./src/factories/projectFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFactory)
/* harmony export */ });
/* Creates a single instance of a project object */
function projectFactory(title, description, status) {
    const tasks = [];
    const completedTasks = [];

    return { title, description, status, tasks, completedTasks };
}

/***/ }),

/***/ "./src/factories/stepFactory.js":
/*!**************************************!*\
  !*** ./src/factories/stepFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stepFactory)
/* harmony export */ });
/* Creates a single instance of a step object */
function stepFactory(title, status) {
    return { title, status }
}

/***/ }),

/***/ "./src/factories/taskFactory.js":
/*!**************************************!*\
  !*** ./src/factories/taskFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskFactory)
/* harmony export */ });
/* Creates a single instance of a task object */
function taskFactory(title, description, dueDate, priority, status) {
    const steps = [];
    const completedSteps = [];

    return { title, description, dueDate, priority, status, steps, completedSteps };
}

/***/ }),

/***/ "./src/forms/formGenerator.js":
/*!************************************!*\
  !*** ./src/forms/formGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderColourPickerForm: () => (/* binding */ renderColourPickerForm),
/* harmony export */   renderCreateProjectForm: () => (/* binding */ renderCreateProjectForm),
/* harmony export */   renderCreateStepForm: () => (/* binding */ renderCreateStepForm),
/* harmony export */   renderCreateTaskForm: () => (/* binding */ renderCreateTaskForm),
/* harmony export */   renderDeleteForm: () => (/* binding */ renderDeleteForm),
/* harmony export */   renderForm: () => (/* binding */ renderForm)
/* harmony export */ });
/* harmony import */ var _textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator */ "./src/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator */ "./src/forms/radioFieldGenerator.js");
/* harmony import */ var _handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/enums/organizer */ "./src/handlers/enums/organizer.js");




/* Handles form creation and display */
function renderForm(formFunction, parent) {
    formContainer.replaceChildren(formFunction());
    parent.appendChild(formContainer);
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
function addFormButtons(organizerType, actionType, parent) {
    const btnIDPrefix = actionType.toLowerCase() + "-" + organizerType.toLowerCase();

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Confirm";
    submitBtn.id =  btnIDPrefix + "-submit-btn";
    submitBtn.classList.add("form-btn", "submit-btn");

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "project-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("project-creation-form", "New Project", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(() =>_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT)));
    addFormButtons(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form);

    return form;
}

/* Create the form for creating a new task */
function renderCreateTaskForm(parent) {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-creation-form", "New Task","creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    console.log(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(() => _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK)));
    addFormButtons(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Create", form);

    return form;
}

/* Create the form for creating a new step */
function renderCreateStepForm(parent) {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("step-creation-form", "New Step", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_handlers_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Create", form);

    return form;
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm() {
    const form = generateFormBase(("confirm-delete-form"), ("Delete Item?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form);

    return form;
}

function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons));

    return form;
}

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");



/***/ }),

/***/ "./src/forms/radioFieldGenerator.js":
/*!******************************************!*\
  !*** ./src/forms/radioFieldGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColourRadioButtons: () => (/* binding */ generateColourRadioButtons),
/* harmony export */   generatePriorityRadioButtons: () => (/* binding */ generatePriorityRadioButtons),
/* harmony export */   generateRadioButtons: () => (/* binding */ generateRadioButtons)
/* harmony export */ });
/* harmony import */ var _handlers_enums_priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/enums/priority */ "./src/handlers/enums/priority.js");
/* harmony import */ var _handlers_enums_colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/enums/colours */ "./src/handlers/enums/colours.js");



function generateRadioButtons(radioFunction, organizerType) {
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");

    fieldContainer.appendChild(radioFunction(organizerType));

    return fieldContainer;
}

/* Create a set of radio buttons for the priority options */
function generatePriorityRadioButtons(organizerType) {
    /* Add the radio button options */
    function generatePriorityOptions(organizerType) {
        Object.values(_handlers_enums_priority__WEBPACK_IMPORTED_MODULE_0__.Priority).forEach(priorityValue => {
            const radioContainer = document.createElement("div");
    
            // ID
            const optionID = organizerType.toLowerCase() + "-" + String.prototype.toLowerCase(priorityValue);
    
            // Input
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = optionID;
            radioInput.name = "priority";
            radioInput.value = priorityValue;
            // Add checked to default option
            if (priorityValue === _handlers_enums_priority__WEBPACK_IMPORTED_MODULE_0__.DefaultPriority) {
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

    // Fieldset
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("priority-field");

    // Legend
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    legend.classList.add("form-label");

    // Appending elements
    fieldset.appendChild(legend);
    generatePriorityOptions(organizerType);

    return fieldset;
}

function generateColourRadioButtons() {
    /* Add the radio button options */
    function generateColourOptions() {
        Object.values(_handlers_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours).forEach(colourValue => {
            // Colour key
            const colourKey = Object.keys(_handlers_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours).find(key => _handlers_enums_colours__WEBPACK_IMPORTED_MODULE_1__.Colours[key] === colourValue);

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
            if (colourValue === _handlers_enums_colours__WEBPACK_IMPORTED_MODULE_1__.DefaultColour) {
                radioInput.checked = true;
            }
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.textContent = colourKey;
            radioLabel.for = optionID;
    
            // Append elements
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);
            colourField.appendChild(radioContainer);
        })
    }

    // Fieldset
    const colourField = document.createElement("div");
    colourField.classList.add("colour-fieldset");

    // Appending elements
    generateColourOptions();

    return colourField;
}



/***/ }),

/***/ "./src/forms/textFieldGenerator.js":
/*!*****************************************!*\
  !*** ./src/forms/textFieldGenerator.js ***!
  \*****************************************/
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

/***/ "./src/handlers/display.js":
/*!*********************************!*\
  !*** ./src/handlers/display.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSidebarProject: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__.addSidebarProject),
/* harmony export */   renderColourPickerForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderColourPickerForm),
/* harmony export */   renderCreateProjectForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderCreateProjectForm),
/* harmony export */   renderCreateStepForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderCreateStepForm),
/* harmony export */   renderCreateTaskForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderCreateTaskForm),
/* harmony export */   renderDeleteForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderDeleteForm),
/* harmony export */   renderForm: () => (/* reexport safe */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__.renderForm),
/* harmony export */   renderProjectPage: () => (/* reexport safe */ _projectPage_projectPage__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   renderSidebarProjects: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__.renderSidebarProjects)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar */ "./src/sidebar.js");
/* harmony import */ var _projectPage_projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectPage/projectPage */ "./src/projectPage/projectPage.js");
/* harmony import */ var _forms_formGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/formGenerator */ "./src/forms/formGenerator.js");






/***/ }),

/***/ "./src/handlers/enums/colours.js":
/*!***************************************!*\
  !*** ./src/handlers/enums/colours.js ***!
  \***************************************/
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

/***/ "./src/handlers/enums/organizer.js":
/*!*****************************************!*\
  !*** ./src/handlers/enums/organizer.js ***!
  \*****************************************/
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

/***/ "./src/handlers/enums/priority.js":
/*!****************************************!*\
  !*** ./src/handlers/enums/priority.js ***!
  \****************************************/
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

/***/ "./src/handlers/enums/status.js":
/*!**************************************!*\
  !*** ./src/handlers/enums/status.js ***!
  \**************************************/
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

/***/ "./src/handlers/organizers/project.js":
/*!********************************************!*\
  !*** ./src/handlers/organizers/project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/projectFactory */ "./src/factories/projectFactory.js");
/* harmony import */ var _enums_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/priority */ "./src/handlers/enums/priority.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/status */ "./src/handlers/enums/status.js");




/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        "",
        _enums_priority__WEBPACK_IMPORTED_MODULE_1__.Priority.NONE,
        _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.TODO,
    )
}

/* Create a new project */
function createProject(name, description, dueDate, priority, status) {
    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        name,
        description,
        dueDate,
        priority,
        status,
    )
}

/* Add a task to a project */
function addTask(project, task) {
    project.tasks.push(task);
}

/* Edit an exisiting project */
function editProject(project, name, description, dueDate, priority, status) {
    setName(project, name);
    setDescription(project, description);
    setDueDate(project, dueDate);
    setPriority(project, priority);
    setStatus(project, status);
}

/* Delete an existing project */
function deleteProject(project) {
    delete project.name;
    delete project.description;
    delete project.dueDate;
    delete project.priority;
    delete project.status;
}

function setName(project, name) {
    project.name = name;
}

function setDescription(project, description) {
    project.description = description;
}

function setDueDate(project, dueDate) {
    project.dueDate = dueDate;
}

function setPriority(project, priority) {
    project.priority = priority;
}

function setStatus(project, status) {
    project.status = status;
}



/***/ }),

/***/ "./src/handlers/organizers/step.js":
/*!*****************************************!*\
  !*** ./src/handlers/organizers/step.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStep: () => (/* binding */ createStep),
/* harmony export */   deleteStep: () => (/* binding */ deleteStep),
/* harmony export */   editStep: () => (/* binding */ editStep),
/* harmony export */   setIncomplete: () => (/* binding */ setIncomplete)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/stepFactory */ "./src/factories/stepFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/handlers/enums/status.js");



/* Create a new step */
function createStep(name, dueDate, status) {
    return (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, dueDate, status);
}

/* Edit an existing step */
function editStep(step, name, dueDate, status) {
    setName(step, name);
    setDueDate(step, dueDate);
    setStatus(step, status);
}

/* Delete an exisiting step */
function deleteStep(step) {
    delete step.name;
    delete step.dueDate;
    delete step.status;
}

/* Set a step to incomplete status */
function setIncomplete() {
    if (this.status === _enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.TODO) {
        setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.INCOMPLETE);
    }
}

function setName(step, name) {
    step.name = name;
}

function setDueDate(step, dueDate) {
    step.dueDate = dueDate;
}

function setStatus(step, status) {
    step.status = status;
}



/***/ }),

/***/ "./src/handlers/organizers/task.js":
/*!*****************************************!*\
  !*** ./src/handlers/organizers/task.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addStep: () => (/* binding */ addStep),
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/taskFactory */ "./src/factories/taskFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/handlers/enums/status.js");



/* Create a new task */
function createTask(name, description, dueDate, priority, status) {
    return (0,_factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, dueDate, priority, status);
}

/* Edit an existing task */
function editTask(task, name, description, dueDate, priority, status) {
    setName(task, name);
    setDescription(task, description);
    setDueDate(task, dueDate);
    setPriority(task, priority);
    setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.name;
    delete task.description;
    delete task.dueDate;
    delete task.priority;
    delete task.status;
}

/* Add a step to a task */
function addStep(task, step) {
    task.steps.push(step);
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    // Mark incomplete steps
    task.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    task.steps.array.forEach(step => {
        step.setIncomplete();
    });
}

function setName(task, name) {
    task.name = name;
}

function setDescription(task, description) {
    task.description = description;
}

function setDueDate(task, dueDate) {
    task.dueDate = dueDate;
}

function setPriority(task, priority) {
    task.priority = priority;
}

function setStatus(task, status) {
    task.status = status;
}



/***/ }),

/***/ "./src/projectPage/actionButtons.js":
/*!******************************************!*\
  !*** ./src/projectPage/actionButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateActionButtons)
/* harmony export */ });
/* Creates the action buttons for a organizer */
function generateActionButtons(buttons) {
    const actionBtns = document.createElement("span");
    actionBtns.classList.add("action-btns");

    // Project Buttons
    buttons.forEach(btn => {
        // Button Container
        const actionButtonContainer = document.createElement("span");
        actionButtonContainer.classList.add("icon", "action-btn");

        // Button
        const actionBtn = document.createElement("img");
        actionBtn.src = btn.src;
        actionBtn.alt = btn.alt;
        actionBtn.title = btn.title;

        // Append Elements
        actionButtonContainer.appendChild(actionBtn);

        actionBtns.appendChild(actionButtonContainer);
    })

    return actionBtns;
}

/***/ }),

/***/ "./src/projectPage/projectPage.js":
/*!****************************************!*\
  !*** ./src/projectPage/projectPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksGenerator */ "./src/projectPage/tasksGenerator.js");
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionButtons */ "./src/projectPage/actionButtons.js");



/* Create the page showing all info for a selected project */
function renderProjectPage(project) {
    /* Create the header displaying project info and actions */
    function generateProjectPageHeader(project) {
        /* Display project details */
        function generateProjectDetails(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-details");

            // Title
            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.title;
            projectTitle.classList.add("project-header-title");

            // Description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            projectDescription.classList.add("project-header-description");

            // Append Elements
            projectHeaderInfo.appendChild(projectTitle);
            projectHeaderInfo.appendChild(projectDescription);

            return projectHeaderInfo;
        }

        // Project Buttons to be created
        const projectButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project"},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_actionButtons__WEBPACK_IMPORTED_MODULE_1__["default"])(projectButtons));

        return projectHeader;
    }

    /* Create the list of tasks and their steps */
    function generateProjectPageContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        // Incomplete tasks section header
        const todoSectionDivider = document.createElement("h2");
        todoSectionDivider.textContent = "Tasks"
        todoSectionDivider.classList.add("section-divider");

        // Generate incomplete tasks
        taskListContainer.appendChild(todoSectionDivider);
        taskListContainer.appendChild((0,_tasksGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(project.tasks));

        // Completed tasks section header
        const completedSectionDivider = document.createElement("h2");
        completedSectionDivider.textContent = "Completed"
        completedSectionDivider.classList.add("section-divider");

        // Generate completed tasks
        taskListContainer.appendChild(completedSectionDivider);
        taskListContainer.appendChild((0,_tasksGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(project.completedTasks));

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateProjectPageHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateProjectPageContent(project));
}

/***/ }),

/***/ "./src/projectPage/stepGenerator.js":
/*!******************************************!*\
  !*** ./src/projectPage/stepGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateSteps)
/* harmony export */ });
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionButtons */ "./src/projectPage/actionButtons.js");


/* Create a list of steps for a task */
function generateSteps(steps) {
    /* Create a step item */
    function generateStep(step) {
        // Step Buttons to be created
        const stepButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item");

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
        stepTitle.textContent = step.title;

        // Action Buttons for Steps
        const stepActionButtons = (0,_actionButtons__WEBPACK_IMPORTED_MODULE_0__["default"])(stepButtons);

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

/***/ "./src/projectPage/tasksGenerator.js":
/*!*******************************************!*\
  !*** ./src/projectPage/tasksGenerator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTasks)
/* harmony export */ });
/* harmony import */ var _stepGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepGenerator */ "./src/projectPage/stepGenerator.js");
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionButtons */ "./src/projectPage/actionButtons.js");



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
                taskTitle.textContent = task.title;

                // Priority
                const taskPriority = document.createElement("p");
                taskPriority.textContent = task.priority;
                const priorityClass = "priority-" + task.priority.toLowerCase();
                taskPriority.classList.add("priority-text", priorityClass);

                // Description
                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.description;

                // Due date
                const taskDate = document.createElement("p");
                taskDate.textContent = task.dueDate || "No Due Date";;

                titleContainer.appendChild(taskTitle);
                titleContainer.appendChild(taskPriority);
                taskDetails.appendChild(titleContainer);
                taskDetails.appendChild(taskDescription);
                taskDetails.appendChild(taskDate);

                return taskDetails;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion Checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.classList.add("task-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            // Append Elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task Buttons to be created
        const taskButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        // Task Information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item");

        // Append Task Information Elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild((0,_actionButtons__WEBPACK_IMPORTED_MODULE_1__["default"])(taskButtons));

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
        projectTaskItem.appendChild((0,_stepGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(task.steps));

        taskList.appendChild(projectTaskItem);
    })

    return taskList;
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSidebarProject: () => (/* binding */ addSidebarProject),
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });
/* Create a project button on the sidebar */
function createSidebarProject(project) {
    const sidebarItem = document.createElement("li");
    sidebarItem.classList.add("sidebar-item", "sidebar-project-button");

    // Icon
    const projectIcon = document.createElement("span");
    projectIcon.textContent = "●";
    projectIcon.classList.add("icon", "project-icon");

    // Title
    const projectTitle = document.createElement("p");
    projectTitle.textContent = project.title;

    sidebarItem.appendChild(projectIcon);
    sidebarItem.appendChild(projectTitle);

    return sidebarItem;
}

/* Display all projects on the sidebar */
function renderSidebarProjects(projects) {
    for (let project of projects) {
        sidebar.appendChild(createSidebarProject(project));
    }
}

/* Add a project to the sidebar display */
function addSidebarProject(project) {
    sidebar.appendChild(createSidebarProject(project));
}

function removeSidebarProject() {

}

function editSidebarProject() {

}

const sidebar = document.querySelector(".sidebar-projects-menu");



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
/* harmony import */ var _handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/organizers/project */ "./src/handlers/organizers/project.js");
/* harmony import */ var _handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/organizers/task */ "./src/handlers/organizers/task.js");
/* harmony import */ var _handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/organizers/step */ "./src/handlers/organizers/step.js");
/* harmony import */ var _handlers_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/display */ "./src/handlers/display.js");






const projects = []
projects.push((0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)());

// Work project/tasks/steps
const work = (0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Work Meetings", "All things work meeting related!", "", "High", "TODO");

const meetings = (0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)("Monday Meetings", "All monday work meetings", "", "Med", "TODO");
const mornMeeting = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Morning Meeting", "2023-12-10", "TODO");
const arvoMeeting = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Afternoon Meeting", "2023-12-10", "TODO");
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(meetings, mornMeeting);
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(meetings, arvoMeeting);
(0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.addTask)(work, meetings);

const presentations = (0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)("Presentation", "All work presentations", "", "None", "TODO");
const graphs = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Generate Financial Graphs", "2023-12-10", "TODO");
const typos = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Check report draft for typos", "2023-12-10", "TODO");
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(presentations, graphs);
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(presentations, typos);
(0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.addTask)(work, presentations);

// School project/tasks/steps
const school = (0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!", "2021-11-7", "Low", "TODO");
const homework = (0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)("Presentation", "All work presentations", "", "High", "TODO");
(0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.addTask)(school, homework);

projects.push(work);
projects.push(school);

console.log(projects);
_handlers_display__WEBPACK_IMPORTED_MODULE_4__.renderSidebarProjects(projects);
// display.renderForm(display.renderCreateProjectForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateTaskForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateStepForm, document.querySelector(".content-body"));
// display.renderForm(display.renderDeleteForm, document.querySelector(".content-body"));
// display.renderForm(display.renderColourPickerForm, document.querySelector(".content-body"));
// display.renderProjectPage(projects[1]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLHdCQUF3QixhQUFhLHlCQUF5QixhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxrQkFBa0IsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLFFBQVEsS0FBSyxRQUFRLEtBQUssT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFR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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3RTtBQUM1QjtBQUNUO0FBQ1Y7QUFDOUM7QUFDQTtBQUNBLGNBQWMsa0ZBQW9CO0FBQ2xDO0FBQ0E7QUFDQSxhQUFhLDJFQUFhO0FBQzFCO0FBQ0EsaUJBQWlCLHFFQUFVO0FBQzNCLG9CQUFvQixxRUFBVTtBQUM5QixvQkFBb0IscUVBQVU7QUFDOUIsa0VBQU87QUFDUCxrRUFBTztBQUNQLHFFQUFPO0FBQ1A7QUFDQSxzQkFBc0IscUVBQVU7QUFDaEMsZUFBZSxxRUFBVTtBQUN6QixjQUFjLHFFQUFVO0FBQ3hCLGtFQUFPO0FBQ1Asa0VBQU87QUFDUCxxRUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLDJFQUFhO0FBQzVCLGlCQUFpQixxRUFBVTtBQUMzQixxRUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy90ZXh0RmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2VudW1zL2NvbG91cnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2VudW1zL29yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMvZW51bXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2VudW1zL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMvb3JnYW5pemVycy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVycy9vcmdhbml6ZXJzL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL29yZ2FuaXplcnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFBhZ2UvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFBhZ2UvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RQYWdlL3N0ZXBHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RQYWdlL3Rhc2tzR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cclxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XHJcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXHJcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmFsIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufSAqL1xyXG5cclxuLmFjdGlvbi1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSxcclxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLXRpdGxlIHtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcblxyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLypcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogR2VuZXJhbCBGb3JtIFN0eWxpbmdcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50aXRsZS1pbnB1dDpmb2N1cyxcclxuLmRhdGUtaW5wdXQ6Zm9jdXMsXHJcbi5kZXNjLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xyXG59IFxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5jcmVhdGlvbi1mb3JtLFxyXG4uZGVsZXRlLWZvcm0sXHJcbi5jb2xvdXItZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcblxyXG4uZm9ybS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG4udGl0bGUtaW5wdXQsXHJcbi5kYXRlLWlucHV0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRlc2MtaW5wdXQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRGVsZXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBcclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb2xvdXIgUGlja2VyIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmNvbG91ci1maWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb2xvdXItZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5jb2xvdXItcmFkaW8tYnRuIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50LWJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtY2FyZC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn0gXHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2VjdGlvbi1kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG59IFxyXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4uc2VjdGlvbi1kaXZpZGVyOjphZnRlciB7XHJcbiAgICBmbGV4LWdyb3c6IDEwMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMCAycmVtIDAgMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnRhc2stbGlzdC1jb250YWluZXIsXHJcbi5zdGVwLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbn0gXHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByaW9yaXR5IEljb24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gLnByaW9yaXR5LXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnByaW9yaXR5LWhpZ2gge1xyXG4gICAgY29sb3I6ICNhZTJlMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2ViO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbWVkIHtcclxuICAgIGNvbG9yOiAjNWU0ZGIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmZjtcclxufVxyXG5cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgICBjb2xvcjogIzAwNTVjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWYyZmY7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1ub25lIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmNDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvb3RlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5mb290ZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAtMiAvIDEgLyAtMSAvIC0xO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhDQUE4QyxFQUFFLDRCQUE0QjtJQUM1RSw0QkFBNEI7SUFDNUIscURBQXFELEVBQUUscURBQXFEO0lBQzVHLHVDQUF1QztBQUMzQzs7QUFFQTs7OztFQUlFO0FBQ0Y7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaURBQWlEO0lBQ2pELGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFt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ckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOzs7O0VBSUU7QUFDRjs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztFQUlFO0NBQ0Q7SUFDRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogcmdiYSgyMjMsIDE2MywgMTYzLCAwLjMpOyAvKnJnYmEoMjU1LCAxOTgsIDExMiwgMC4wNSkqL1xcclxcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xcclxcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXFxyXFxuICAgIC0tcHJvamVjdC1pY29uOiByZ2JhKDE3NywgOTYsIDIzMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBHZW5lcmFsIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBTaWRlYmFyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1oZWFkaW5nIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW1lbnUsXFxyXFxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEFsbCBQcm9qZWN0cyBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4uYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb24ge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi8qXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xcclxcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiovXFxyXFxuLnRpdGxlLWlucHV0OmZvY3VzLFxcclxcbi5kYXRlLWlucHV0OmZvY3VzLFxcclxcbi5kZXNjLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcXHJcXG59IFxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLmNyZWF0aW9uLWZvcm0sXFxyXFxuLmRlbGV0ZS1mb3JtLFxcclxcbi5jb2xvdXItZm9ybSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcblxcclxcbi5mb3JtLWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODksIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnRuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIFxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uY29sb3VyLWZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDAuNnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLXJhZGlvLWJ0biB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDb250ZW50IEJvZHkgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5jb250ZW50LWJvZHkge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjMyLCAyNDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBBbGwgUHJvamVjdHMgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4ucHJvamVjdC1jYXJkLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zZWN0aW9uLWRpdmlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxufSBcXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTAwO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogMCAycmVtIDAgMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXIsXFxyXFxuLnN0ZXAtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFzay1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LXN0ZXAtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByaW9yaXR5IEljb24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4gLnByaW9yaXR5LXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxyXFxuICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjYWUyZTI0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlY2ViO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbWVkIHtcXHJcXG4gICAgY29sb3I6ICM1ZTRkYjI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgICBjb2xvcjogIzAwNTVjYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW5vbmUge1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmNDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBGb290ZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHByb2plY3Qgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhdHVzKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSBbXTtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXR1cywgdGFza3MsIGNvbXBsZXRlZFRhc2tzIH07XHJcbn0iLCIvKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3RlcCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RlcEZhY3RvcnkodGl0bGUsIHN0YXR1cykge1xyXG4gICAgcmV0dXJuIHsgdGl0bGUsIHN0YXR1cyB9XHJcbn0iLCIvKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgdGFzayBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XHJcbiAgICBjb25zdCBzdGVwcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSBbXTtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHN0ZXBzLCBjb21wbGV0ZWRTdGVwcyB9O1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlVGV4dEZpZWxkcyBmcm9tIFwiLi90ZXh0RmllbGRHZW5lcmF0b3JcIjtcclxuaW1wb3J0ICogYXMgcmFkaW9GaWVsZEdlbmVyYXRvciBmcm9tIFwiLi9yYWRpb0ZpZWxkR2VuZXJhdG9yXCJcclxuaW1wb3J0IHsgT3JnYW5pemVycyB9IGZyb20gXCIuLi9oYW5kbGVycy9lbnVtcy9vcmdhbml6ZXJcIjtcclxuXHJcbi8qIEhhbmRsZXMgZm9ybSBjcmVhdGlvbiBhbmQgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiByZW5kZXJGb3JtKGZvcm1GdW5jdGlvbiwgcGFyZW50KSB7XHJcbiAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihmb3JtRnVuY3Rpb24oKSk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCkge1xyXG4gICAgY29uc3QgYnRuSURQcmVmaXggPSBhY3Rpb25UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XHJcbiAgICBzdWJtaXRCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1zdWJtaXQtYnRuXCI7XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICAvLyBDYW5jZWwgYnV0dG9uXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbEJ0bi5pZCA9ICBidG5JRFByZWZpeCArIFwiLWNhbmNlbC1idG5cIjtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJjYW5jZWwtYnRuXCIpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJwcm9qZWN0LWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJwcm9qZWN0LWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgUHJvamVjdFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMocHJvamVjdFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucygoKSA9PnJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QpKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiQ3JlYXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHRhc2sgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlVGFza0Zvcm0ocGFyZW50KSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInRhc2stY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBUYXNrXCIsXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHRhc2tUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBjb25zb2xlLmxvZyhPcmdhbml6ZXJzLlRBU0spO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUmFkaW9CdXR0b25zKCgpID0+IHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0spKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0ssIFwiQ3JlYXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlU3RlcEZvcm0ocGFyZW50KSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJzdGVwLWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgU3RlcFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJDcmVhdGVcIiwgZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY29uZmlybWluZyBvcmdhbml6ZXIgZGVsZXRpb24gKi9cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKChcImNvbmZpcm0tZGVsZXRlLWZvcm1cIiksIChcIkRlbGV0ZSBJdGVtP1wiKSwgXCJkZWxldGUtZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGFkZEZvcm1CdXR0b25zKFwiT3JnYW5pemVyXCIsIFwiRGVsZXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucyhyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvcm0sIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyQ3JlYXRlU3RlcEZvcm0sIHJlbmRlckRlbGV0ZUZvcm0sIHJlbmRlckNvbG91clBpY2tlckZvcm0gfSIsImltcG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHkgfSBmcm9tIFwiLi4vaGFuZGxlcnMvZW51bXMvcHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgQ29sb3VycywgRGVmYXVsdENvbG91ciB9IGZyb20gXCIuLi9oYW5kbGVycy9lbnVtcy9jb2xvdXJzXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhyYWRpb0Z1bmN0aW9uLCBvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvRnVuY3Rpb24ob3JnYW5pemVyVHlwZSkpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcmlvcml0eSBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmZvckVhY2gocHJpb3JpdHlWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZShwcmlvcml0eVZhbHVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuaWQgPSBvcHRpb25JRDtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcHJpb3JpdHlWYWx1ZTtcclxuICAgICAgICAgICAgLy8gQWRkIGNoZWNrZWQgdG8gZGVmYXVsdCBvcHRpb25cclxuICAgICAgICAgICAgaWYgKHByaW9yaXR5VmFsdWUgPT09IERlZmF1bHRQcmlvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkc2V0XHJcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1maWVsZFwiKTtcclxuXHJcbiAgICAvLyBMZWdlbmRcclxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuICAgIGdlbmVyYXRlUHJpb3JpdHlPcHRpb25zKG9yZ2FuaXplclR5cGUpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZHNldDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvdXJSYWRpb0J1dHRvbnMoKSB7XHJcbiAgICAvKiBBZGQgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhDb2xvdXJzKS5mb3JFYWNoKGNvbG91clZhbHVlID0+IHtcclxuICAgICAgICAgICAgLy8gQ29sb3VyIGtleVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvdXJLZXkgPSBPYmplY3Qua2V5cyhDb2xvdXJzKS5maW5kKGtleSA9PiBDb2xvdXJzW2tleV0gPT09IGNvbG91clZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbG91ci1maWVsZFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IFwiY29sb3VyLVwiICsgY29sb3VyVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuaWQgPSBvcHRpb25JRDtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLXJhZGlvLWJ0blwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gXCJjb2xvdXJcIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnN0eWxlLmNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgLy8gQWRkIGNoZWNrZWQgdG8gZGVmYXVsdCBvcHRpb25cclxuICAgICAgICAgICAgaWYgKGNvbG91clZhbHVlID09PSBEZWZhdWx0Q29sb3VyKSB7XHJcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbG91cktleTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSBvcHRpb25JRDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xyXG4gICAgICAgICAgICBjb2xvdXJGaWVsZC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWVsZHNldFxyXG4gICAgY29uc3QgY29sb3VyRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sb3VyRmllbGQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1maWVsZHNldFwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpO1xyXG5cclxuICAgIHJldHVybiBjb2xvdXJGaWVsZDtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVSYWRpb0J1dHRvbnMsIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMsIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zIH0iLCIvKiBDcmVhdGUgYSBkbGFiZWwgZm9yIGEgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmb3JtRmllbGQubGFiZWxUZXh0O1xyXG4gICAgZmllbGRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwuZm9yID0gZm9ybUZpZWxkLmlkO1xyXG5cclxuICAgIHJldHVybiBmaWVsZExhYmVsO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0aXRsZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIC8vIElucHV0XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGRlc2NyaXB0aW9uIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZm9ybUZpZWxkLmlucHV0VHlwZSk7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufSAgIFxyXG5cclxuLyogQ3JlYXRlIGEgZGF0ZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IGEgc2V0IG9mIHRleHQgZmllbGRzICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGV4dEZpZWxkcyhmaWVsZHMsIHBhcmVudCkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZm9ybUZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcInRpdGxlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkZXNjXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRTaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuLi9zaWRlYmFyXCI7XHJcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvcHJvamVjdFBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRm9ybSwgcmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0sIHJlbmRlckNyZWF0ZVRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRGVsZXRlRm9ybSwgcmVuZGVyQ29sb3VyUGlja2VyRm9ybSB9IGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgeyBcclxuICAgIHJlbmRlckZvcm0sXHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMsIFxyXG4gICAgYWRkU2lkZWJhclByb2plY3QsIFxyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UsIFxyXG4gICAgcmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0sIFxyXG4gICAgcmVuZGVyQ3JlYXRlVGFza0Zvcm0sIFxyXG4gICAgcmVuZGVyQ3JlYXRlU3RlcEZvcm0sIFxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybSwgXHJcbiAgICByZW5kZXJDb2xvdXJQaWNrZXJGb3JtLFxyXG59IiwiLyogQ29sb3VyIEVOVU0gKi9cclxuY29uc3QgQ29sb3VycyA9IHtcclxuICAgIE5PTkU6IFwiIzdFODE4MFwiLFxyXG4gICAgUkVEOiBcIiNFMTM0MUVcIixcclxuICAgIEJMVUU6IFwiIzBFMDlGNlwiLFxyXG4gICAgR1JFRU46IFwiIzBDRjMzRFwiLFxyXG4gICAgUFVSUExFOiBcIiNGMzBDQzJcIixcclxuICAgIFlFTExPVzogXCIjRjFGNjA5XCIsXHJcbiAgICAvLyBURUFMOiBcIiMxZWNiZTFcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdENvbG91ciA9IENvbG91cnMuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZENvbG91cihjb2xvdXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKENvbG91cnMpLmluY2x1ZGVzKGNvbG91cik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSIsIi8qIE9yZ2FuaXplciBFTlVNICovXHJcbmNvbnN0IE9yZ2FuaXplcnMgPSB7XHJcbiAgICBQUk9KRUNUOiBcIlByb2plY3RcIixcclxuICAgIFRBU0s6IFwiVGFza1wiLFxyXG4gICAgU1RFUDogXCJTdGVwXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZE9yZ2FuaXplcihvcmdhbml6ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKE9yZ2FuaXplcnMpLmluY2x1ZGVzKG9yZ2FuaXplcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE9yZ2FuaXplcnMsIGlzVmFsaWRPcmdhbml6ZXIgfSIsIi8qIFByaW9yaXR5IEVOVU0gKi9cclxuY29uc3QgUHJpb3JpdHkgPSB7XHJcbiAgICBOT05FOiBcIk5vbmVcIixcclxuICAgIExPVzogXCJMb3dcIixcclxuICAgIE1FRDogXCJNZWRcIixcclxuICAgIEhJR0g6IFwiSGlnaFwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0UHJpb3JpdHkgPSBQcmlvcml0eS5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHByaW9yaXR5IHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmluY2x1ZGVzKHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgUHJpb3JpdHksIERlZmF1bHRQcmlvcml0eSwgaXNWYWxpZFByaW9yaXR5IH0iLCIvKiBTdGF0dXMgRU5VTSAqL1xyXG5jb25zdCBTdGF0dXMgPSB7XHJcbiAgICBDT01QTEVURUQ6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBJTkNPTVBMRVRFOiBcIkluY29tcGxldGVcIixcclxuICAgIFRPRE86IFwiVG8gRG9cIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXR1cyBwcm9wZXJ0eSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3RhdHVzKS5pbmNsdWRlcyhzdGF0dXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi4vLi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSBcIi4uL2VudW1zL3ByaW9yaXR5XCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdCB0aGF0IHN0b3JlcyBhbGwgdW5hc3NpZ25lZCB0YXNrcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBcIk1pc2NlbGxhbmVvdXNcIiwgXHJcbiAgICAgICAgXCJBIGNvbGxlY3Rpb24gb2YgdGFza3MsIHRoYXQgd2VyZW4ndCBhc3NpZ25lZCBhIHByb2plY3RcIixcclxuICAgICAgICBcIlwiLFxyXG4gICAgICAgIFByaW9yaXR5Lk5PTkUsXHJcbiAgICAgICAgU3RhdHVzLlRPRE8sXHJcbiAgICApXHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHJldHVybiBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgKVxyXG59XHJcblxyXG4vKiBBZGQgYSB0YXNrIHRvIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcclxuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzaXRpbmcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgc2V0TmFtZShwcm9qZWN0LCBuYW1lKTtcclxuICAgIHNldERlc2NyaXB0aW9uKHByb2plY3QsIGRlc2NyaXB0aW9uKTtcclxuICAgIHNldER1ZURhdGUocHJvamVjdCwgZHVlRGF0ZSk7XHJcbiAgICBzZXRQcmlvcml0eShwcm9qZWN0LCBwcmlvcml0eSk7XHJcbiAgICBzZXRTdGF0dXMocHJvamVjdCwgc3RhdHVzKTtcclxufVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBkZWxldGUgcHJvamVjdC5uYW1lO1xyXG4gICAgZGVsZXRlIHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICBkZWxldGUgcHJvamVjdC5kdWVEYXRlO1xyXG4gICAgZGVsZXRlIHByb2plY3QucHJpb3JpdHk7XHJcbiAgICBkZWxldGUgcHJvamVjdC5zdGF0dXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5hbWUocHJvamVjdCwgbmFtZSkge1xyXG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24ocHJvamVjdCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RHVlRGF0ZShwcm9qZWN0LCBkdWVEYXRlKSB7XHJcbiAgICBwcm9qZWN0LmR1ZURhdGUgPSBkdWVEYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcmlvcml0eShwcm9qZWN0LCBwcmlvcml0eSkge1xyXG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0dXMocHJvamVjdCwgc3RhdHVzKSB7XHJcbiAgICBwcm9qZWN0LnN0YXR1cyA9IHN0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGFkZFRhc2ssIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4uLy4uL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgc3RlcCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKG5hbWUsIGR1ZURhdGUsIHN0YXR1cykge1xyXG4gICAgcmV0dXJuIHN0ZXBGYWN0b3J5KG5hbWUsIGR1ZURhdGUsIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc3Rpbmcgc3RlcCAqL1xyXG5mdW5jdGlvbiBlZGl0U3RlcChzdGVwLCBuYW1lLCBkdWVEYXRlLCBzdGF0dXMpIHtcclxuICAgIHNldE5hbWUoc3RlcCwgbmFtZSk7XHJcbiAgICBzZXREdWVEYXRlKHN0ZXAsIGR1ZURhdGUpO1xyXG4gICAgc2V0U3RhdHVzKHN0ZXAsIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBhbiBleGlzaXRpbmcgc3RlcCAqL1xyXG5mdW5jdGlvbiBkZWxldGVTdGVwKHN0ZXApIHtcclxuICAgIGRlbGV0ZSBzdGVwLm5hbWU7XHJcbiAgICBkZWxldGUgc3RlcC5kdWVEYXRlO1xyXG4gICAgZGVsZXRlIHN0ZXAuc3RhdHVzO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdGVwIHRvIGluY29tcGxldGUgc3RhdHVzICovXHJcbmZ1bmN0aW9uIHNldEluY29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IFN0YXR1cy5UT0RPKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5JTkNPTVBMRVRFKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmFtZShzdGVwLCBuYW1lKSB7XHJcbiAgICBzdGVwLm5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREdWVEYXRlKHN0ZXAsIGR1ZURhdGUpIHtcclxuICAgIHN0ZXAuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0YXR1cyhzdGVwLCBzdGF0dXMpIHtcclxuICAgIHN0ZXAuc3RhdHVzID0gc3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGVwLCBlZGl0U3RlcCwgZGVsZXRlU3RlcCwgc2V0SW5jb21wbGV0ZSB9IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHRhc2sgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgcmV0dXJuIHRhc2tGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzdGluZyB0YXNrICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XHJcbiAgICBzZXROYW1lKHRhc2ssIG5hbWUpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24odGFzaywgZGVzY3JpcHRpb24pO1xyXG4gICAgc2V0RHVlRGF0ZSh0YXNrLCBkdWVEYXRlKTtcclxuICAgIHNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KTtcclxuICAgIHNldFN0YXR1cyh0YXNrLCBzdGF0dXMpO1xyXG59XHJcblxyXG4vKiBEZWxldGUgYW4gZXhpc2l0aW5nIHRhc2sgKi9cclxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKSB7XHJcbiAgICBkZWxldGUgdGFzay5uYW1lO1xyXG4gICAgZGVsZXRlIHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBkZWxldGUgdGFzay5kdWVEYXRlO1xyXG4gICAgZGVsZXRlIHRhc2sucHJpb3JpdHk7XHJcbiAgICBkZWxldGUgdGFzay5zdGF0dXM7XHJcbn1cclxuXHJcbi8qIEFkZCBhIHN0ZXAgdG8gYSB0YXNrICovXHJcbmZ1bmN0aW9uIGFkZFN0ZXAodGFzaywgc3RlcCkge1xyXG4gICAgdGFzay5zdGVwcy5wdXNoKHN0ZXApO1xyXG59XHJcblxyXG4vKiBDb21wbGV0ZSBhIHRhc2sgYW5kIGNvbnZlcnQgYWxsIHN0ZXBzIHRvIHJlcXVpcmVkIHN0YXR1cyovXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgdGFzay5zdGVwcy5hcnJheS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIHN0ZXAuc2V0SW5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5hbWUodGFzaywgbmFtZSkge1xyXG4gICAgdGFzay5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24odGFzaywgZGVzY3JpcHRpb24pIHtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RHVlRGF0ZSh0YXNrLCBkdWVEYXRlKSB7XHJcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcmlvcml0eSh0YXNrLCBwcmlvcml0eSkge1xyXG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0dXModGFzaywgc3RhdHVzKSB7XHJcbiAgICB0YXNrLnN0YXR1cyA9IHN0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgZWRpdFRhc2ssIGRlbGV0ZVRhc2ssIGFkZFN0ZXAsIGNvbXBsZXRlVGFzayB9IiwiLyogQ3JlYXRlcyB0aGUgYWN0aW9uIGJ1dHRvbnMgZm9yIGEgb3JnYW5pemVyICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBjb25zdCBhY3Rpb25CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBhY3Rpb25CdG5zLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnRuc1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IEJ1dHRvbnNcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIC8vIEJ1dHRvbiBDb250YWluZXJcclxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJhY3Rpb24tYnRuXCIpO1xyXG5cclxuICAgICAgICAvLyBCdXR0b25cclxuICAgICAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5zcmMgPSBidG4uc3JjO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5hbHQgPSBidG4uYWx0O1xyXG4gICAgICAgIGFjdGlvbkJ0bi50aXRsZSA9IGJ0bi50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ0bik7XHJcblxyXG4gICAgICAgIGFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uQ29udGFpbmVyKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkJ0bnM7XHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVUYXNrcyBmcm9tIFwiLi90YXNrc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuL2FjdGlvbkJ1dHRvbnNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBpbmZvIGZvciBhIHNlbGVjdGVkIHByb2plY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBoZWFkZXIgZGlzcGxheWluZyBwcm9qZWN0IGluZm8gYW5kIGFjdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhZ2VIZWFkZXIocHJvamVjdCkge1xyXG4gICAgICAgIC8qIERpc3BsYXkgcHJvamVjdCBkZXRhaWxzICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVySW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBUYXNrXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgUHJvamVjdFwifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhwcm9qZWN0QnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGxpc3Qgb2YgdGFza3MgYW5kIHRoZWlyIHN0ZXBzICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RQYWdlQ29udGVudChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3QtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBJbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgdG9kb1NlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRvZG9TZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIlxyXG4gICAgICAgIHRvZG9TZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tzKHByb2plY3QudGFza3MpKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGVkIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiXHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgY29tcGxldGVkIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza3MocHJvamVjdC5jb21wbGV0ZWRUYXNrcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0UGFnZUhlYWRlcihwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0UGFnZUNvbnRlbnQocHJvamVjdCkpO1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi9hY3Rpb25CdXR0b25zXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHN0ZXBzIGZvciBhIHRhc2sgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwcyhzdGVwcykge1xyXG4gICAgLyogQ3JlYXRlIGEgc3RlcCBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXAoc3RlcCkge1xyXG4gICAgICAgIC8vIFN0ZXAgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3Qgc3RlcEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBJbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RlcEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRpb24gQ2hlY2tib3hcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBTdGVwIERldGFpbHNcclxuICAgICAgICBjb25zdCBzdGVwRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0ZXBEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJzdGVwLWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIHN0ZXBUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAudGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBCdXR0b25zIGZvciBTdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcERldGFpbHMuYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoc3RlcERldGFpbHMpO1xyXG5cclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwSW5mbyk7XHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEFjdGlvbkJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RlcEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RlcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBzdGVwTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcC1saXN0XCIpO1xyXG5cclxuICAgIC8vIEFkZCBhbGwgc3RlcHMgdG8gdGhlIGxpc3RcclxuICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcExpc3QuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwKHN0ZXApKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdGVwTGlzdDtcclxufSIsImltcG9ydCBnZW5lcmF0ZVN0ZXBzIGZyb20gXCIuL3N0ZXBHZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi9hY3Rpb25CdXR0b25zXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHRhc2tzIGZvciBhIHByb2plY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrcyh0YXNrcykge1xyXG4gICAgLyogQ3JlYXRlIGEgdGFzayBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgY2hlY2tib3ggYW5kIGRldGFpbHMgb2YgdGhlIHRhc2sgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tIZWFkZXIodGFzaykge1xyXG4gICAgICAgICAgICAvKiBEaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0YXNrICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0RldGFpbHModGFzaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC10YXNrLWRldGFpbHNcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIiwgcHJpb3JpdHlDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEdWUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlIHx8IFwiTm8gRHVlIERhdGVcIjs7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrRGV0YWlscztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGlvbiBDaGVja2JveFxyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIC8vIFRhc2sgSW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgVGFzayBJbmZvcm1hdGlvbiBFbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XHJcblxyXG4gICAgLy8gQWRkIGFsbCB0YXNrcyB0byB0aGUgbGlzdFxyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2tcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrKHRhc2spKTtcclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwcyh0YXNrLnN0ZXBzKSk7XHJcblxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUYXNrSXRlbSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB0YXNrTGlzdDtcclxufSIsIi8qIENyZWF0ZSBhIHByb2plY3QgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgc2lkZWJhckl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiLCBcInNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcblxyXG4gICAgLy8gSWNvblxyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLnRleHRDb250ZW50ID0gXCLil49cIjtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gc2lkZWJhckl0ZW07XHJcbn1cclxuXHJcbi8qIERpc3BsYXkgYWxsIHByb2plY3RzIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhclByb2plY3QocHJvamVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBZGQgYSBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gYWRkU2lkZWJhclByb2plY3QocHJvamVjdCkge1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyUHJvamVjdChwcm9qZWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNpZGViYXJQcm9qZWN0KCkge1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0KCkge1xyXG5cclxufVxyXG5cclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1wcm9qZWN0cy1tZW51XCIpO1xyXG5cclxuZXhwb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRTaWRlYmFyUHJvamVjdCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGFkZFRhc2sgfSBmcm9tIFwiLi9oYW5kbGVycy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzaywgYWRkU3RlcCB9IGZyb20gXCIuL2hhbmRsZXJzL29yZ2FuaXplcnMvdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwIH0gZnJvbSBcIi4vaGFuZGxlcnMvb3JnYW5pemVycy9zdGVwXCI7XHJcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSBcIi4vaGFuZGxlcnMvZGlzcGxheVwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXVxyXG5wcm9qZWN0cy5wdXNoKGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkpO1xyXG5cclxuLy8gV29yayBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNvbnN0IHdvcmsgPSBjcmVhdGVQcm9qZWN0KFwiV29yayBNZWV0aW5nc1wiLCBcIkFsbCB0aGluZ3Mgd29yayBtZWV0aW5nIHJlbGF0ZWQhXCIsIFwiXCIsIFwiSGlnaFwiLCBcIlRPRE9cIik7XHJcblxyXG5jb25zdCBtZWV0aW5ncyA9IGNyZWF0ZVRhc2soXCJNb25kYXkgTWVldGluZ3NcIiwgXCJBbGwgbW9uZGF5IHdvcmsgbWVldGluZ3NcIiwgXCJcIiwgXCJNZWRcIiwgXCJUT0RPXCIpO1xyXG5jb25zdCBtb3JuTWVldGluZyA9IGNyZWF0ZVN0ZXAoXCJNb3JuaW5nIE1lZXRpbmdcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuY29uc3QgYXJ2b01lZXRpbmcgPSBjcmVhdGVTdGVwKFwiQWZ0ZXJub29uIE1lZXRpbmdcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuYWRkU3RlcChtZWV0aW5ncywgbW9ybk1lZXRpbmcpO1xyXG5hZGRTdGVwKG1lZXRpbmdzLCBhcnZvTWVldGluZyk7XHJcbmFkZFRhc2sod29yaywgbWVldGluZ3MpO1xyXG5cclxuY29uc3QgcHJlc2VudGF0aW9ucyA9IGNyZWF0ZVRhc2soXCJQcmVzZW50YXRpb25cIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiTm9uZVwiLCBcIlRPRE9cIik7XHJcbmNvbnN0IGdyYXBocyA9IGNyZWF0ZVN0ZXAoXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIsIFwiMjAyMy0xMi0xMFwiLCBcIlRPRE9cIik7XHJcbmNvbnN0IHR5cG9zID0gY3JlYXRlU3RlcChcIkNoZWNrIHJlcG9ydCBkcmFmdCBmb3IgdHlwb3NcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuYWRkU3RlcChwcmVzZW50YXRpb25zLCBncmFwaHMpO1xyXG5hZGRTdGVwKHByZXNlbnRhdGlvbnMsIHR5cG9zKTtcclxuYWRkVGFzayh3b3JrLCBwcmVzZW50YXRpb25zKTtcclxuXHJcbi8vIFNjaG9vbCBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNvbnN0IHNjaG9vbCA9IGNyZWF0ZVByb2plY3QoXCJTY2hvb2xcIiwgXCJBbGwgdGhpbmdzIHNjaG9vbCByZWxhdGVkIVwiLCBcIjIwMjEtMTEtN1wiLCBcIkxvd1wiLCBcIlRPRE9cIik7XHJcbmNvbnN0IGhvbWV3b3JrID0gY3JlYXRlVGFzayhcIlByZXNlbnRhdGlvblwiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJIaWdoXCIsIFwiVE9ET1wiKTtcclxuYWRkVGFzayhzY2hvb2wsIGhvbWV3b3JrKTtcclxuXHJcbnByb2plY3RzLnB1c2god29yayk7XHJcbnByb2plY3RzLnB1c2goc2Nob29sKTtcclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuZGlzcGxheS5yZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMpO1xyXG4vLyBkaXNwbGF5LnJlbmRlckZvcm0oZGlzcGxheS5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIikpO1xyXG4vLyBkaXNwbGF5LnJlbmRlckZvcm0oZGlzcGxheS5yZW5kZXJDcmVhdGVUYXNrRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIikpO1xyXG4vLyBkaXNwbGF5LnJlbmRlckZvcm0oZGlzcGxheS5yZW5kZXJDcmVhdGVTdGVwRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIikpO1xyXG4vLyBkaXNwbGF5LnJlbmRlckZvcm0oZGlzcGxheS5yZW5kZXJEZWxldGVGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyRm9ybShkaXNwbGF5LnJlbmRlckNvbG91clBpY2tlckZvcm0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpKTtcclxuLy8gZGlzcGxheS5yZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0c1sxXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9