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
    /* Common colours */
    --white: #ffffff;
    --black: #000000;

    /* General page styling */
    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/
    --sidebar-text: rgb(0, 0, 0);
    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/
    --project-icon: rgba(177, 96, 231, 0.5);
    --colour-picker-border: rgb(118, 118, 118);

    /* Button styling */
    --action-btn-background: var(--white);
    --action-btn-hover-background: rgba(0, 0, 0, 0.1);
    --submit-btn-background: rgb(0, 89, 255);

    /* Shadows */
    --dark-shadow: #00000040;
    --light-shadow: #00000025;
    --faint-shadow: #00000010;

    /* Task priority indicators */
    --input-highlight: #006eff;
    --priority-high-text: #ae2e24;
    --priority-high-background: #ffeceb;
    --priority-med-text: #5e4db2;
    --priority-med-background: #f3f0ff;
    --priority-low-text: #0055cc;
    --priority-low-background: #e9f2ff;
    --priority-none-text: var(--black);
    --priority-none-background: #f0f1f4;

    /* Completed status indicators */
    --completed-card-text: #6a6a6a;
    --completed-card-background: rgb(210, 210, 210);
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

.action-btns {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.action-btn {
    cursor: pointer;
    padding: 1rem;
    border: 2px solid #00000099;
    border-radius: 50%;
    background-color: #ffffff00;
}
.action-btn:hover {
    background-color: var(--action-btn-hover-background);
}

.disabled-action-btn {
    cursor: default;
    background-color: var(--completed-card-background)
}
.disabled-action-btn:hover {
    background-color: var(--completed-card-background);
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    height: 20px;
    width: 20px;
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

.project-icon {
    color: var(--project-icon);
    background-color: var(--project-icon);
    border: 2px solid #00000099;
    border-radius: 50%;
}

/*
 * ------------------------------------------------------------
 * Header Styling
 * ------------------------------------------------------------
 */

.header {
    grid-area: 1 / 2 / 2 / -1;
    background-color: var(--white);
    box-shadow: 0 10px 15px var(--light-shadow);
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
    border: 2px solid var(--black);
    border-top: none;
    border-right: none;
}

.create-project-header-btn {
    padding: 2rem;
}

.create-project-header-btn > img {
    height: 40px;
    width: 40px;
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
    border: 2px solid #000000;
    border-top: none;
    border-right: none;
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
    border: 2px solid var(--input-highlight);
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
    background-color: var(--dark-shadow);
}

.form-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: auto;
    border: 2px solid black;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 10px 15px var(--light-shadow);
} 

.form-body,
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
    color: var(--white);
    background-color: var(--submit-btn-background);
}

.cancel-btn {
    color: var(--submit-btn-background);
    background-color: var(--white);
}

.form-btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--submit-btn-background);
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
    border: 1px solid var(--colour-picker-border);
    border-radius: 3px;
}

.colour-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}

.colour-radio-btn-label {
    text-align: center;
    color: var(--black);
    width: 100%;
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

/*
 * ------------------------------------------------------------
 * Content Body Styling
 * ------------------------------------------------------------
 */

.content-body {
    grid-area: 2 / 2 / -2 / -1;
    background-color: rgb(226, 232, 240);
    overflow-y: auto;
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
    border: 2px solid var(--black);
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 10px 15px var(--light-shadow);
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
    background-color: var(--black);
}
.section-divider::after {
    flex-grow: 100;
    content: "";
    height: 1px;
    margin: 0 2rem 0 1rem;
    background-color: var(--black);
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
    padding-left: 2rem;
}

.task-list-container {
    gap: 0.2rem;
    margin-top: 10px;
}

.project-task-item {
    margin-top: 1rem;
}

.task-list {
    padding: 0 2rem 1rem;
}

.task-card {
    margin-bottom: 10px;
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
    box-shadow: 0 10px 15px var(--light-shadow);
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

.step-card {
    margin-bottom: 10px;
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
    color: var(--priority-high-text);
    background-color: var(--priority-high-background);
}

.priority-med {
    color: var(--priority-med-text);
    background-color: var(--priority-med-background);
}

.priority-low {
    color: var(--priority-low-text);
    background-color: var(--priority-low-background);
}

.priority-none {
    color: var(--priority-none-text);
    background-color: var(--priority-none-background);
}

.completed {
    background-color: var(--completed-card-background);
    color: var(--completed-card-text);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    /* Common colours */\r\n    --white: #ffffff;\r\n    --black: #000000;\r\n\r\n    /* General page styling */\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n    --colour-picker-border: rgb(118, 118, 118);\r\n\r\n    /* Button styling */\r\n    --action-btn-background: var(--white);\r\n    --action-btn-hover-background: rgba(0, 0, 0, 0.1);\r\n    --submit-btn-background: rgb(0, 89, 255);\r\n\r\n    /* Shadows */\r\n    --dark-shadow: #00000040;\r\n    --light-shadow: #00000025;\r\n    --faint-shadow: #00000010;\r\n\r\n    /* Task priority indicators */\r\n    --input-highlight: #006eff;\r\n    --priority-high-text: #ae2e24;\r\n    --priority-high-background: #ffeceb;\r\n    --priority-med-text: #5e4db2;\r\n    --priority-med-background: #f3f0ff;\r\n    --priority-low-text: #0055cc;\r\n    --priority-low-background: #e9f2ff;\r\n    --priority-none-text: var(--black);\r\n    --priority-none-background: #f0f1f4;\r\n\r\n    /* Completed status indicators */\r\n    --completed-card-text: #6a6a6a;\r\n    --completed-card-background: rgb(210, 210, 210);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n    background-color: #ffffff00;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--action-btn-hover-background);\r\n}\r\n\r\n.disabled-action-btn {\r\n    cursor: default;\r\n    background-color: var(--completed-card-background)\r\n}\r\n.disabled-action-btn:hover {\r\n    background-color: var(--completed-card-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    grid: 1fr 5fr / 1fr 4fr;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -1 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n    background-color: var(--project-icon);\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid var(--black);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 2rem;\r\n}\r\n\r\n.create-project-header-btn > img {\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid #000000;\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid var(--input-highlight);\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: var(--dark-shadow);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.form-body,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: var(--white);\r\n    background-color: var(--submit-btn-background);\r\n}\r\n\r\n.cancel-btn {\r\n    color: var(--submit-btn-background);\r\n    background-color: var(--white);\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid var(--submit-btn-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid var(--colour-picker-border);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn-label {\r\n    text-align: center;\r\n    color: var(--black);\r\n    width: 100%;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n    overflow-y: auto;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid var(--black);\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: var(--black);\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: var(--black);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.steps-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.task-list-container {\r\n    gap: 0.2rem;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.task-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.step-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: var(--priority-high-text);\r\n    background-color: var(--priority-high-background);\r\n}\r\n\r\n.priority-med {\r\n    color: var(--priority-med-text);\r\n    background-color: var(--priority-med-background);\r\n}\r\n\r\n.priority-low {\r\n    color: var(--priority-low-text);\r\n    background-color: var(--priority-low-background);\r\n}\r\n\r\n.priority-none {\r\n    color: var(--priority-none-text);\r\n    background-color: var(--priority-none-background);\r\n}\r\n\r\n.completed {\r\n    background-color: var(--completed-card-background);\r\n    color: var(--completed-card-text);\r\n}"],"sourceRoot":""}]);
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
    NONE: "#ffffff",
    PINK: "hsl(320, 60%, 85%)",
    PURPLE: "hsl(270, 60%, 75%)",
    BLUE: "hsl(210, 60%, 75%)",
    TEAL: "hsl(190, 60%, 75%)",
    GREEN: "hsl(120, 60%, 85%)",
    YELLOW: "hsl(50, 60%, 85%)",
    ORANGE: "hsl(30, 60%, 85%)",
    RED: "hsl(0, 60%, 85%)",
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
/* harmony export */   isValidPriority: () => (/* binding */ isValidPriority),
/* harmony export */   prioritySort: () => (/* binding */ prioritySort)
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

/* Converts a priority value to a numerical value */
function convertPriorityToValue(priority) {
    if (priority === Priority.HIGH) {
        return 0;
    }
    else if (priority === Priority.MED) {
        return 1;
    }
    else if (priority === Priority.LOW) {
        return 2;
    }
    else {
        return 3;
    }
}

/* Sorts two elements based on their priority values */
function prioritySort(x, y) {
    const xPriorityValue = convertPriorityToValue(x.getPriority());
    const yPriorityValue = convertPriorityToValue(y.getPriority());
    if ( xPriorityValue > yPriorityValue) {
        return 1;
    }
    else if (xPriorityValue < yPriorityValue) {
        return -1;
    }
    else {
        return 0;
    }
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
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _enums_colours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/colours.js */ "./src/models/enums/colours.js");
/* harmony import */ var _enums_priority_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.js */ "./src/models/organizers/task.js");







/* Creates a single instance of a project object */
function projectFactory(title, description, projectID) {
    let colour = _enums_colours_js__WEBPACK_IMPORTED_MODULE_1__.DefaultColour;
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
        if ((0,_enums_colours_js__WEBPACK_IMPORTED_MODULE_1__.isValidColour)(newColour)) {
            colour = newColour;
        }

        // Save change locally
        (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());
    }

    function getIncompleteTasks() {
        return incompleteTasks;
    }

    /* Add a task to the project */
    function addToIncompleteTasks(task) {
        incompleteTasks.push(task);
        sortIncompleteTasks();
    }

    /* Remove an incomplete task from the project (and add to completeTasks if valid) */
    function removeFromIncompleteTasks(task) {
        incompleteTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                incompleteTasks.splice(index, 1);

                // Conditionally add to completedTasks
                if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_3__.Status.COMPLETED) {
                    addToCompletedTasks(task);
                }

                // Save change locally
                (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all incomplete tasks to a JSON-friendly format */
    function getSerializedIncompleteTasks() {
        const serializedTasks = [];
        incompleteTasks.forEach(task => {
            serializedTasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_5__.serializeTask)(task));
        });

        return serializedTasks;
    }

    function sortIncompleteTasks() {
        incompleteTasks.sort(_enums_priority_js__WEBPACK_IMPORTED_MODULE_2__.prioritySort);
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addToCompletedTasks(task) {
        completedTasks.push(task);
        sortCompletedTasks();
    }

    /* Remove a completed task from the project (and add to incompletedTasks if valid) */
    function removeFromCompletedTasks(task) {
        completedTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                completedTasks.splice(index, 1);

                // Conditionally add to incompleteTasks
                if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_3__.Status.INCOMPLETE) {
                    addToIncompleteTasks(task);
                }

                // Save change locally
                (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all completed tasks to a JSON-friendly format */
    function getSerializedCompletedTasks() {
        const serializedTasks = [];
        completedTasks.forEach(task => {
            serializedTasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_5__.serializeTask)(task));
        });

        return serializedTasks;
    }

    function sortCompletedTasks() {
        completedTasks.sort(_enums_priority_js__WEBPACK_IMPORTED_MODULE_2__.prioritySort);
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
        getIncompleteTasks, addToIncompleteTasks, removeFromIncompleteTasks, sortIncompleteTasks, getSerializedIncompleteTasks,
        getCompletedTasks, addToCompletedTasks, removeFromCompletedTasks, sortCompletedTasks, getSerializedCompletedTasks,
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
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/status.js */ "./src/models/enums/status.js");


/* Creates a single instance of a step object */
function stepFactory(title, projectID, taskID, stepID) {
    let status = _enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;

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
        if ((0,_enums_status_js__WEBPACK_IMPORTED_MODULE_0__.isValidStatus)(newStatus)) {
            status = newStatus;
        }
    }

    function swapStatus() {
        if (status === _enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            status = _enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE;
        }
        else {
            status = _enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED;
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
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _enums_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _step_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../step.js */ "./src/models/organizers/step.js");






/* Creates a single instance of a task object */
function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const incompleteSteps = [];
    const completedSteps = [];
    let status = _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE;
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
        if ((0,_enums_priority_js__WEBPACK_IMPORTED_MODULE_1__.isValidPriority)(newPriority)) {
            priority = newPriority;
        }
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        if ((0,_enums_status_js__WEBPACK_IMPORTED_MODULE_2__.isValidStatus)(newStatus)) {
            status = newStatus;
        }
    }

    function swapStatus() {
        if (status === _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED) {
            status = _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE;
        }
        else {
            status = _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED;
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

                // Conditionally add to completedSteps
                if (step.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED) {
                    addToCompletedSteps(step);
                }

                // Save change locally
                (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all incomplete steps to a JSON-friendly format */
    function getSerializedIncompleteSteps() {
        const serializedSteps = [];
        incompleteSteps.forEach(step => {
            serializedSteps.push((0,_step_js__WEBPACK_IMPORTED_MODULE_4__.serializeStep)(step));
        });

        return serializedSteps;
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

                // Conditionally add to incompleteSteps
                if (step.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE) {
                    addToIncompleteSteps(step);
                }

                // Save change locally
                (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all completed steps to a JSON-friendly format */
    function getSerializedCompletedSteps() {
        const serializedSteps = [];
        completedSteps.forEach(step => {
            serializedSteps.push((0,_step_js__WEBPACK_IMPORTED_MODULE_4__.serializeStep)(step));
        });

        return serializedSteps;
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
        getIncompleteSteps, addToIncompleteSteps, removeFromIncompleteSteps, getSerializedIncompleteSteps,
        getCompletedSteps, addToCompletedSteps, removeFromCompletedSteps, getSerializedCompletedSteps,
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
/* harmony export */   deserializeProject: () => (/* binding */ deserializeProject),
/* harmony export */   editProjectColourFromForm: () => (/* binding */ editProjectColourFromForm),
/* harmony export */   editProjectFromForm: () => (/* binding */ editProjectFromForm),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getSerializedProjects: () => (/* binding */ getSerializedProjects),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),
/* harmony export */   setProjects: () => (/* binding */ setProjects)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory.js */ "./src/models/organizers/factories/projectFactory.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _pages_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/sidebar/sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/models/organizers/task.js");






/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    const defaultProject = (0,_factories_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "Default project",
        projectID,
    )

    projects.push(defaultProject);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    const newProject = (0,_factories_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        title,
        description,
        projectID,
    )

    addToProjects(newProject);
    setCurrentProject(newProject);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
}

/* Delete an existing project */
function deleteProject(project) {
    projects.forEach((projectItem, index) => {
        if (projectItem.getProjectID() === project.getProjectID()) {
            projects.splice(index, 1);
            
            return;
        }
    })

    // Save change locally
    ;(0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
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

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
}

/* Edits the colour of a project based on colour picker form */
function editProjectColourFromForm(project) {
    const newColour = document.querySelector("input[type='radio']:checked").value;

    project.setColour(newColour);
}

function getProjects() {
    return projects;
}

function addToProjects(newProject) {
    projects.push(newProject);
}

function setProjects(newProjects) {
    projects = newProjects;
}

function getCurrentProject() {
    return currentProject;
}

function setCurrentProject(newProject) {
    currentProject = newProject;
}

/* Convert the project to a JSON-friendly format */
function serializeProject(project) {
    const title = project.getTitle();
    const desc = project.getDescription();
    const colour = project.getColour();
    const incompleteTasks = project.getSerializedIncompleteTasks();
    const completedTasks = project.getSerializedCompletedTasks();

    return {
        title,
        desc,
        incompleteTasks,
        completedTasks,
        colour,
    }
}

/* Create a project from JSON format data */
function deserializeProject(project) {
    // Creating project from data
    createProject(project.title, project.desc);
    const newProject = getCurrentProject();

    // Adding all tasks
    project.incompleteTasks.forEach(task => {
        (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.deserializeTask)(newProject, task);
    })
    project.completedTasks.forEach(task => {
        ;(0,_task_js__WEBPACK_IMPORTED_MODULE_4__.deserializeTask)(newProject, task);
    })

    // Adding colour
    newProject.setColour(project.colour);
}

/* Convert the project to a JSON-friendly format */
function getSerializedProjects() {
    const serializedProjects = [];
    projects.forEach(project => {
        serializedProjects.push(serializeProject(project));
    })

    return serializedProjects;
}

let projectCount = 0;
let projects = [];
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
/* harmony export */   deserializeStep: () => (/* binding */ deserializeStep),
/* harmony export */   editStepFromForm: () => (/* binding */ editStepFromForm),
/* harmony export */   serializeStep: () => (/* binding */ serializeStep)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory.js */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/status.js */ "./src/models/enums/status.js");






/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, projectID, taskID, stepID);

    task.addToIncompleteSteps(newStep);
    task.setCurrentStep(newStep);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Creates a step from creation form */
function createStepFromForm() {
    const title = document.querySelector("#step-title").value;

    createStep((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)().getCurrentTask(), title);
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectPage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());
}

/* Edits a step based on information in edit form */
function editStepFromForm(step) {
    const newTitle = document.querySelector("#step-title").value;

    step.setTitle(newTitle);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Convert the step to a JSON-friendly format */
function serializeStep(step) {
    const title = step.getTitle();
    const status = step.getStatus();

    return {
        title,
        status,
    }
}

/* Create a step from JSON format data */
function deserializeStep(task, step) {
    // Creating step from data
    createStep(task, step.title);
    const newStep = task.getCurrentStep();

    // Adding to appropriate location
    if (step.status === _enums_status_js__WEBPACK_IMPORTED_MODULE_4__.Status.COMPLETED) {
        newStep.setStatus(_enums_status_js__WEBPACK_IMPORTED_MODULE_4__.Status.COMPLETED);
        task.removeFromIncompleteSteps();
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
/* harmony export */   deserializeTask: () => (/* binding */ deserializeTask),
/* harmony export */   editTaskFromForm: () => (/* binding */ editTaskFromForm),
/* harmony export */   serializeTask: () => (/* binding */ serializeTask)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/taskFactory.js */ "./src/models/organizers/factories/taskFactory.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _step_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step.js */ "./src/models/organizers/step.js");






/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.getProjectID();
    const taskID = project.getNextTaskCount();
    const newTask = (0,_factories_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, projectID, taskID);

    project.addToIncompleteTasks(newTask);
    project.setCurrentTask(newTask);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Creates a task from creation form */
function createTaskFromForm() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    createTask((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)(), title, desc, date, priority);
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

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    task.setStatus(_enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    // Mark incomplete steps
    task.getIncompleteSteps().forEach(step => {
        step.setStatus(_enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    });
}

/* Convert the task to a JSON-friendly format */
function serializeTask(task) {
    const title = task.getTitle();
    const desc = task.getDescription();
    const dueDate = task.getDueDate();
    const priority = task.getPriority();
    const status = task.getStatus();
    const incompleteSteps = task.getSerializedIncompleteSteps();
    const completedSteps = task.getSerializedCompletedSteps();

    return {
        title,
        desc,
        dueDate,
        priority,
        status,
        incompleteSteps,
        completedSteps,
    }
}

/* Create a task from JSON format data */
function deserializeTask(project, task) {
    // Creating task from data
    createTask(project, task.title, task.desc, task.dueDate, task.priority);
    const newTask = project.getCurrentTask()

    // Adding all steps
    task.incompleteSteps.forEach(step => {
        ;(0,_step_js__WEBPACK_IMPORTED_MODULE_4__.deserializeStep)(newTask, step);
    })
    task.completedSteps.forEach(step => {
        ;(0,_step_js__WEBPACK_IMPORTED_MODULE_4__.deserializeStep)(newTask, step);
    })

    // Adding to appropriate location
    if (task.status === _enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED) {
        newTask.setStatus(_enums_status_js__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
        project.removeFromIncompleteTasks(newTask);
    }
}



/***/ }),

/***/ "./src/modules/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js":
/*!**********************************************************************************************!*\
  !*** ./src/modules/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectButtonListener: () => (/* binding */ createProjectButtonListener)
/* harmony export */ });
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/display */ "./src/pages/display.js");


/* Create the create project button listener */
function createProjectButtonListener() {
    _pages_display__WEBPACK_IMPORTED_MODULE_0__.forms.renderCreateProjectForm();
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
/* Attach an event listener to an action button */
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



/* Create the project create task button listener */
function projectCreateTaskButtonListener(project) {
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateTaskForm(project);
}

/* Create the edit project colour button listener */
function projectColourButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderColourPickerForm(); 
}

/* Create the edit projetc button listener */
function projectEditButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditProjectForm();
}

/* Create the delete project button listener */
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
/* harmony import */ var _utility_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/index.js */ "./src/modules/eventListeners/utility/index.js");




/* Create the edit step button listener */
function stepEditButtonListener(step) {
    (0,_utility_index_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditStepForm();
}

/* Create the delete step button listener */
function stepDeleteButtonListener(step) {
    (0,_utility_index_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
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



/* Create the task create step button listener */
function taskCreateStepButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateStepForm();
}

/* Create the edit task button listener */
function taskEditButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditTaskForm();
}

/* Create the delete task button listener */
function taskDeleteButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _pages_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteTaskForm();
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
/* harmony import */ var _models_enums_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/organizers/task.js */ "./src/models/organizers/task.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _pages_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/projectPage/stepsCardHandler.js */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility */ "./src/modules/eventListeners/utility/index.js");







/* Handles toggling the completion status logic for a task */
function taskStatusToggleListener(checkbox) {
    const taskCard = checkbox.parentElement.parentElement;
    // Searches both lists the current task
    (0,_utility__WEBPACK_IMPORTED_MODULE_5__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getIncompleteTasks(), String(taskCard.getAttribute("data-task-id")));
    (0,_utility__WEBPACK_IMPORTED_MODULE_5__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCompletedTasks(), String(taskCard.getAttribute("data-task-id")));

    const task = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask();

    // Toggle the tasks complete status
    task.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (task.getStatus() === _models_enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            setTaskStatusCompleteHandler(task);
        } else {
            setTaskStatusIncompleteHandler(task);
        }
    }, 100);
}

/* Handles marking a task as completed */
function setTaskStatusCompleteHandler(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromIncompleteTasks(task);
    // Moves the card wrapper to the completed tasks section 
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
}

/* Handles marking a task as incomplete */
function setTaskStatusIncompleteHandler(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromCompletedTasks(task);
    // Moves the card wrapper to the incomplete tasks section 
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
}

/* Handles initialization of the event listener for marking the completion status of tasks */
function createTaskStatusListener(checkbox) {
    checkbox.addEventListener("change", () => taskStatusToggleListener(checkbox));
}

/* Handles toggling the completion status logic for a step */
function stepStatusToggleListener(checkbox) {
    const stepCard = checkbox.parentElement.parentElement;
    (0,_utility__WEBPACK_IMPORTED_MODULE_5__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getIncompleteTasks(), String(stepCard.getAttribute("data-task-id")));
    // Searches both lists the current step
    const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask();
    (0,_utility__WEBPACK_IMPORTED_MODULE_5__.setCurrentStepFromID)(currentTask.getIncompleteSteps(), String(stepCard.getAttribute("data-step-id")));
    (0,_utility__WEBPACK_IMPORTED_MODULE_5__.setCurrentStepFromID)(currentTask.getCompletedSteps(), String(stepCard.getAttribute("data-step-id")));

    const step = currentTask.getCurrentStep();

    // Toggle the steps complete status
    step.swapStatus();

    // Introduce a slight visual delay
    setTimeout(() => {
        // Call the template function based on the completion status
        if (step.getStatus() === _models_enums_status_js__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
            setStepStatusCompleteHandler(step);
        } else {
            setStepStatusIncompleteHandler(step);
        }
    }, 100);
}

/* Handles marking a step as completed */
function setStepStatusCompleteHandler(step) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromIncompleteSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    (0,_pages_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__.setStepCardCompleted)(stepCard);

    // Moves the card to the completed steps list
    const parent = stepCard.parentElement;
    parent.nextSibling.appendChild(stepCard);
}

/* Handles marking a step as incomplete */
function setStepStatusIncompleteHandler(step) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromCompletedSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    (0,_pages_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__.setStepCardIncomplete)(stepCard);

    // Moves the card to the incomplete steps list
    const parent = stepCard.parentElement;
    parent.previousSibling.appendChild(stepCard);
}

/* Handles initialization of the event listener for marking the completion status of steps */
function createStepStatusListener(checkbox) {
    checkbox.addEventListener("change", () => stepStatusToggleListener(checkbox));
}



/***/ }),

/***/ "./src/modules/eventListeners/formButtonListeners.js":
/*!***********************************************************!*\
  !*** ./src/modules/eventListeners/formButtonListeners.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFormCancelButtonListener: () => (/* binding */ createFormCancelButtonListener),
/* harmony export */   createFormSubmitButtonListener: () => (/* binding */ createFormSubmitButtonListener)
/* harmony export */ });
/* Creates the submit form button */
function createFormSubmitButtonListener(btn, submitFunction, modal) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        submitFunction();
        modal.style.display = "none";
    });
}

/* Creates the cancel form button */
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
/* harmony export */   createProjectPageNavigationListeners: () => (/* reexport safe */ _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageNavigationListeners),
/* harmony export */   createSidebarListeners: () => (/* reexport safe */ _sidebarListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebarListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarListeners.js */ "./src/modules/eventListeners/sidebarListeners.js");
/* harmony import */ var _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNavigationListeners.js */ "./src/modules/eventListeners/projectNavigationListeners.js");





/***/ }),

/***/ "./src/modules/eventListeners/projectNavigationListeners.js":
/*!******************************************************************!*\
  !*** ./src/modules/eventListeners/projectNavigationListeners.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectNavigationListener: () => (/* binding */ addProjectNavigationListener),
/* harmony export */   createProjectPageNavigationListeners: () => (/* binding */ createProjectPageNavigationListeners)
/* harmony export */ });
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");



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
/* harmony import */ var _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNavigationListeners.js */ "./src/modules/eventListeners/projectNavigationListeners.js");



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
    (0,_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageNavigationListeners)(projects, ".sidebar-project-button");
}

/***/ }),

/***/ "./src/modules/eventListeners/utility/index.js":
/*!*****************************************************!*\
  !*** ./src/modules/eventListeners/utility/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCurrentStepFromID: () => (/* binding */ setCurrentStepFromID),
/* harmony export */   setCurrentTaskFromID: () => (/* binding */ setCurrentTaskFromID)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");


/* Sets current task from a given taskID value */
function setCurrentTaskFromID(tasks, taskID) {
    tasks.forEach(task => {
        if (String(task.getTaskID()) === taskID) {
            (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
            return;
        }
    });
}

/* Sets current step from a given stepID value */
function setCurrentStepFromID(steps, stepID) {
    steps.forEach(step => {
        if (String(step.getStepID()) === stepID) {
            (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
            return;
        }
    });
}



/***/ }),

/***/ "./src/modules/localStorage/index.js":
/*!*******************************************!*\
  !*** ./src/modules/localStorage/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),
/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage)
/* harmony export */ });
// Updates the data stored in the local environment
function saveProjectsToLocalStorage(newProjects) {
    localStorage.setItem("projects", JSON.stringify(newProjects));
}

// Fetches the data stored in the local environemnt and converts ut back to useable format
function loadProjectsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("projects"));
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
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_allProjectsActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js");
/* harmony import */ var _modules_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/eventListeners/projectNavigationListeners.js */ "./src/modules/eventListeners/projectNavigationListeners.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js");






/* Create the page showing all of the current projects */
function renderAllProjectsPage(projects) {
    /* Create the content for the header section */
    function generateHeader() {
        // All projects buttons to be created
        const createProjectButton = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.CREATE, "create-project-header-btn"], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_allProjectsActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_2__.createProjectButtonListener)();
            }},
        ]

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("all-projects-header-container");

        // Title
        const heading = document.createElement("h1");
        heading.textContent = "All Projects";

        // Appending elements
        headerContainer.appendChild(heading);
        headerContainer.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.generateActionButtons)(createProjectButton));

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
            // Project buttons to be created
            const projectCardButtons = [
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "Colour Project Button", title: "Colour Project",
                event: () => {
                    (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectColourButtonListener)(project);
                }},
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "Edit Project Button", title: "Edit Project",
                event: () => {
                    (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectEditButtonListener)(project);
                }},
                {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Project Button", title: "Delete Project",
                event: () => {
                    (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectDeleteButtonListener)(project);
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
            projectCard.style.backgroundColor = project.getColour();
            projectCard.style.borderColor = "#000000";

            // Appending elements
            projectCard.appendChild(generateCardDetails(project));
            projectCard.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.generateActionButtons)(generateProjectCardButtons(project)));
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
    (0,_modules_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_3__.createProjectPageNavigationListeners)(projects, ".project-card");
}

/* Updates the project card if project information is edited */
function editProjectCardInformation(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    const cardDetails = projectCard.firstChild;
    const cardTitle = cardDetails.firstChild;
    const cardDescription = cardDetails.lastChild;

    cardTitle.textContent = project.getTitle();
    cardDescription.textContent = project.getDescription();
}

/* Updates the project card if project colour is edited */
function editProjectCardColour(project) {
    const projectCard = document.querySelector(`.project-card[data-project-id="${project.getProjectID()}"]`);
    projectCard.style.backgroundColor = project.getColour();
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
/* harmony export */   editSidebarProjectColour: () => (/* reexport safe */ _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_1__.editSidebarProjectColour),
/* harmony export */   editSidebarProjectTitle: () => (/* reexport safe */ _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_1__.editSidebarProjectTitle),
/* harmony export */   forms: () => (/* reexport module object */ _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   renderAllProjectsPage: () => (/* reexport safe */ _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__.renderAllProjectsPage),
/* harmony export */   renderProjectPage: () => (/* reexport safe */ _projectPage__WEBPACK_IMPORTED_MODULE_2__.renderProjectPage),
/* harmony export */   renderSidebar: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/pages/sidebar/index.js");
/* harmony import */ var _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage */ "./src/pages/projectPage/index.js");
/* harmony import */ var _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allProjectsPage */ "./src/pages/allProjectsPage/index.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");

// import renderSidebar from "./sidebar.js"





/* Remove all content from the header */
function clearHeader() {
    const header = document.querySelector(".header");
    header.replaceChildren();
}

/* Remove all content from the body */
function clearBody() {
    const body = document.querySelector(".content-body");
    body.replaceChildren();
}

/* Remove all content from the content sections */
function clearPage() {
    clearHeader();
    clearBody();
}

/* Remove all content from the sidebar */
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
/* harmony import */ var _textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator.js */ "./src/pages/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator.js */ "./src/pages/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer.js */ "./src/models/enums/organizer.js");
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
/* harmony import */ var _modules_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/eventListeners/formButtonListeners.js */ "./src/modules/eventListeners/formButtonListeners.js");















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
    (0,_modules_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__.createFormSubmitButtonListener)(submitBtn, submitFunction, modal);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    (0,_modules_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__.createFormCancelButtonListener)(cancelBtn, modal)

    // Append elements
    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    // All form fields for creating a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-form-body", "New Project", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form, _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);

    renderForm(form);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    // All form fields for a project
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]

    const form = generateFormBase("project-edit-form", "Edit Project", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectTextFormFields, form);
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Edit", form, () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.editProjectFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editSidebarProjectTitle)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
        // Checking which page is currently displayed
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

    const form = generateFormBase("task-form-body", "New Task", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK));
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Edit", form, () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.createTaskFromForm)();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
    });

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

    const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask();
    const form = generateFormBase("task-edit-form", "Edit Task", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK));
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Edit", form, () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.editTaskFromForm)(currentTask);
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editTaskCardInformation)(currentTask);
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().sortIncompleteTasks();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#task-title").placeholder = document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();

    // Highlight the currently selected priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${currentTask.getPriority()}']`);
    priorityBtn.checked = true;
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const form = generateFormBase("step-form-body", "New Step", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Create", form, _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.createStepFromForm);

    renderForm(form);
}

/* Create the form for editing a step */
function renderEditStepForm() {
    // All form fields for editing a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
    ]

    const currentStep = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep();
    const form = generateFormBase("step-edit-form", "Edit Step", "form-body");

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Edit", form, () => {
        (0,_models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.editStepFromForm)(currentStep);
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editStepCardInformation)(currentStep);
    });

    renderForm(form);

    // Fill the form fields with current information
    document.querySelector("#step-title").placeholder = document.querySelector("#step-title").value = currentStep.getTitle();
}

/* Create the form for confirming organizer deletion */
function renderDeleteForm(deleteFunction, organizerType) {
    const form = generateFormBase(("confirm-delete-form"), ("Delete " + organizerType + "?"), "delete-form");

    // Appending elements
    addFormButtons("Organizer", "Delete", form, deleteFunction);

    renderForm(form);
}

/* Create the form for deleting a project */
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
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentProject)(null);
    }

    renderDeleteForm(deleteFunction, _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT);
}

/* Create the form for deleting a task */
function renderDeleteTaskForm() {
    const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask();
    const deleteFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().removeFromIncompleteTasks(currentTask);
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().removeFromCompletedTasks(currentTask);
        (0,_projectPage_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_10__.deleteTaskCard)(currentTask);
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().setCurrentTask(null);
    }

    renderDeleteForm(deleteFunction, _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK);
}

/* Create the form for deleting a step */
function renderDeleteStepForm() {
    const deleteFunction = () => {
        const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask();
        const currentStep = currentTask.getCurrentStep();
        currentTask.removeFromIncompleteSteps(currentStep);
        (0,_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_11__.deleteStepCard)(currentStep);
        currentTask.setCurrentStep(null);
    }

    renderDeleteForm(deleteFunction, _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP);
}

/* Create the form for changing project colour */
function renderColourPickerForm() {
    const form = generateFormBase("colour-form", "Pick A Colour", "colour-form");

    // Appending elements
    form.appendChild(_radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons());
    addFormButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Colour", form, () => {
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
/* harmony import */ var _models_enums_priority_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _models_enums_colours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/colours.js */ "./src/models/enums/colours.js");



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
        Object.values(_models_enums_priority_js__WEBPACK_IMPORTED_MODULE_0__.Priority).forEach(priorityValue => {
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

/* Create a set of radio buttons for the project colour options */
function generateColourRadioButtons() {
    /* Add the radio button options */
    function generateColourOptions() {
        Object.values(_models_enums_colours_js__WEBPACK_IMPORTED_MODULE_1__.Colours).forEach(colourValue => {
            // Colour key
            const colourKey = Object.keys(_models_enums_colours_js__WEBPACK_IMPORTED_MODULE_1__.Colours).find(key => _models_enums_colours_js__WEBPACK_IMPORTED_MODULE_1__.Colours[key] === colourValue);

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
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.classList.add("colour-radio-btn-label");
            radioLabel.textContent = colourKey;
            radioLabel.for = optionID;
            radioLabel.style.backgroundColor = colourValue;
    
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
/* Create a label for a form field */
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
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/projectActionButtonListeners.js");






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
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "Create Task Button", title: "Add New Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectCreateTaskButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "Colour Project Button", title: "Colour Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectColourButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "Edit Project Button", title: "Edit Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectEditButtonListener)(project);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Project Button", title: "Delete Project",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_projectActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.projectDeleteButtonListener)(project);
            }},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.backgroundColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.generateActionButtons)(projectButtons));

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
        completedSectionDivider.textContent = "Completed Tasks"
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

    // Update the visual status of newly added cards
    updateCompletionStatus(project);
}

/* Updates the completion status of cards on the project page */
function updateCompletionStatus(project) {
    // Visually marking the completed steps of incomplete tasks as completed
    project.getIncompleteTasks().forEach(task => {
        task.getCompletedSteps().forEach(step => {
            const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
            (0,_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__.setStepCardCompleted)(stepCard);
        })
    })

    // Visually marking the complete tasks as completed
    project.getCompletedTasks().forEach(task => {
        const taskCard = document.querySelector(`[data-task-id="${task.getTaskID()}"]`);

        (0,_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.setTaskCardCompleted)(taskCard);

        // Visually marking their completed steps as completed
        task.getCompletedSteps().forEach(step => {
            const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
            (0,_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__.setStepCardCompleted)(stepCard);
        })
    })
}

/* Updates the project page if project information is edited */
function editProjectPageInformation(project) {
    document.querySelector(".project-header-title").textContent = project.getTitle();
    document.querySelector(".project-header-description").textContent = project.getDescription();
}

/* Updates the project page if project colour is edited */
function editProjectPageColour(project) {
    const projectHeader = document.querySelector(".project-header-container");
    projectHeader.style.backgroundColor = project.getColour();
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
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js");






/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step buttons to be created
        const stepButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "Edit Step Button", title: "Edit Step",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.stepEditButtonListener)(step);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Step Button", title: "Delete Step",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.stepDeleteButtonListener)(step)
            }},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item", "step-card");
        // Link to task
        stepItem.setAttribute("data-project-id", step.getProjectID());
        stepItem.setAttribute("data-task-id", step.getTaskID());
        stepItem.setAttribute("data-step-id", step.getStepID());

        // Step information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("completion-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        (0,_modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_3__.createStepStatusListener)(completedCheckbox);

        stepInfo.appendChild(completedCheckbox);

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.getTitle();

        // Action buttons for steps
        const stepActionButtons = (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.generateActionButtons)(stepButtons);

        // Append Elements
        stepInfo.appendChild(stepTitle);
        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    // Add all steps to the list
    steps.forEach(step => {
        // Mark current step
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)().getCurrentTask().setCurrentStep(step);

        parent.appendChild(generateStepCard(step));
    });
}

/* Updates the step card if step information is edited */
function editStepCardInformation(step) {
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    
    // Editing information
    const stepCardTitle = stepCard.firstChild.lastChild;
    stepCardTitle.textContent = step.getTitle();
}

/* Modifies a step card once it has been marked as completed */
function setStepCardCompleted(stepCard) {
    // Visually marking as complete
    stepCard.classList.add("completed");
    const checkbox = stepCard.firstChild.firstChild;
    checkbox.checked = true;

    // Disabling action buttons
    const editButton = stepCard.lastChild.firstChild;
    (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.disableActionButtons)([editButton]);
}

/* Modifies a step card once it has been marked as incomplete */
function setStepCardIncomplete(stepCard) {
    // Visually marking as incomplete
    stepCard.classList.remove("completed");
    const checkbox = stepCard.firstChild.firstChild;
    checkbox.checked = false;

    // Re-enabling action buttons
    const editButton = stepCard.lastChild.firstChild;
    (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.enableActionButtons)([editButton]);
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
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js");







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
            completedCheckbox.classList.add("completion-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            (0,_modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__.createTaskStatusListener)(completedCheckbox);

            // Append elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task buttons to be created
        const taskButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "Create Step Button", title: "Add New Step",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskCreateStepButtonListener)(task)
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "Edit Task Button", title: "Edit Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskEditButtonListener)(task);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Task Button", title: "Delete Task",
            event: () => {
                (0,_modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskDeleteButtonListener)(task);
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
        taskItem.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.generateActionButtons)(taskButtons));

        return taskItem;
    }

    // Add all tasks to the list
    tasks.forEach(task => {
        // Mark current task
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().setCurrentTask(task);

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

/* Updates the task card if task information is edited */
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
function setTaskCardCompleted(taskCard) {
    // Visually marking as complete
    taskCard.classList.add("completed");
    const taskCheckbox = taskCard.firstChild.firstChild;
    taskCheckbox.checked = true;

    // Disabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.disableActionButtons)([createButton, editButton]);

    // Visually marking all incomplete steps as completed
    const incompleteSteps = taskCard.nextSibling;
    for (let stepCard of incompleteSteps.children) {
        stepCard.classList.add("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = true;
        checkbox.disabled = true;

        // Disabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.disableActionButtons)([editButton]);
    }

    // Disabling the checkbox of completed steps
    const completedSteps = taskCard.nextSibling.nextSibling;
    for (let stepCard of completedSteps.children) {
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.disabled = true;
    }
}

/* Modifies a task card once it has been marked as completed */
function setTaskCardIncomplete(taskCard) {
    // Visually marking as incomplete
    taskCard.classList.remove("completed");
    const checkbox = taskCard.firstChild.firstChild;
    checkbox.checked = false;

    // Re-enabling action buttons
    const createButton = taskCard.lastChild.firstChild;
    const editButton = createButton.nextSibling;
    (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.enableActionButtons)([createButton, editButton]);

    // Visually remarking all incomplete steps as incomplete
    const incompleteSteps = taskCard.nextSibling;
    for (let stepCard of incompleteSteps.children) {
        stepCard.classList.remove("completed");
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.checked = false;
        checkbox.disabled = false;

        // Re-enabling action buttons
        const editButton = stepCard.lastChild.firstChild;
        (0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.enableActionButtons)([editButton]);
    }

    // Enabling the checkbox of completed steps
    const completedSteps = taskCard.nextSibling.nextSibling;
    for (let stepCard of completedSteps.children) {
        const checkbox = stepCard.firstChild.firstChild;
        checkbox.disabled = false;
    }
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
/* harmony import */ var _sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");


/* Create the sidebar */
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

    // Appending elements
    sidebar.appendChild(logo);
    listContainer.appendChild(projectHeader);
    (0,_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_0__.renderSidebarProjects)(projects, projectsList);
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
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/eventListeners/projectNavigationListeners.js */ "./src/modules/eventListeners/projectNavigationListeners.js");



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
    projectIcon.classList.add("icon", "project-icon");
    projectIcon.style.backgroundColor = iconColour;

    return projectIcon;
}

/* Create the icon for the all projects icon */
function generateAllProjectIcon() {
    const projectIcon = document.createElement("span");
    projectIcon.classList.add("icon");

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
    (0,_modules_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.addProjectNavigationListener)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)(), newProjectBtn);
}

/* Edit the title of a sidebar project button */
function editSidebarProjectTitle(project) {
    const sidebarItem = document.querySelector(`.sidebar-project-button[data-project-id="${project.getProjectID()}"]`);
    
    sidebarItem.lastChild.textContent = project.getTitle();
}

/* Edit the colour of a sidebar project button */
function editSidebarProjectColour(project) {
    const sidebarItem = document.querySelector(`.sidebar-project-button[data-project-id="${project.getProjectID()}"]`);
    const sidebarItemIcon = sidebarItem.firstChild;
    sidebarItemIcon.style.backgroundColor = project.getColour();
}

/* Remove a sidebar project button */
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
/* harmony export */   disableActionButtons: () => (/* binding */ disableActionButtons),
/* harmony export */   enableActionButtons: () => (/* binding */ enableActionButtons),
/* harmony export */   generateActionButtons: () => (/* binding */ generateActionButtons)
/* harmony export */ });
/* harmony import */ var _modules_eventListeners_actionButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/index.js */ "./src/modules/eventListeners/actionButtonListeners/index.js");


/* Creates the action buttons for a organizer */
function generateActionButtons(buttons) {
    const actionBtns = document.createElement("span");
    actionBtns.classList.add("action-btns");

    // Project buttons
    buttons.forEach(btn => {
        // Button container
        const actionButtonContainer = document.createElement("button");
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

/* Disable an action button */
function disableActionButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
        // Visually show disabled
        button.classList.add("disabled-action-btn");
    })
}

/* Enable an action button */
function enableActionButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = false;
        // Visually show enabled
        button.classList.remove("disabled-action-btn");
    })
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
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/organizers/task */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/organizers/step */ "./src/models/organizers/step.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/localStorage/index.js */ "./src/modules/localStorage/index.js");








// Importing local storage
const storageData = (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__.loadProjectsFromLocalStorage)();
// Load stored data
if (storageData !== null) {
    storageData.forEach(project => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.deserializeProject)(project);
    })
}
// Use default data
else {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)();

    // // Work project/tasks/steps
    // createProject("Work Meetings", "All things work meeting related!");

    // createTask(getProjects()[1], "Monday Meetings", "All monday work meetings", "", "Med");
    // createStep(getProjects()[1].getIncompleteTasks()[0], "Morning Meeting");
    // createStep(getProjects()[1].getIncompleteTasks()[0], "Afternoon Meeting");

    // createTask(getProjects()[1], "Presentation", "All work presentations", "", "None");
    // createStep(getProjects()[1].getIncompleteTasks()[1], "Generate Financial Graphs");
    // createStep(getProjects()[1].getIncompleteTasks()[1], "Check report draft for typos");

    // // School project/tasks/steps
    // createProject("School", "All things school related!");

    // createTask(getProjects()[2], "Presentations", "All work presentations", "", "High");
    // createStep(getProjects()[2].getIncompleteTasks()[0], "Homework");
}

// Load the initial page
_pages_display_js__WEBPACK_IMPORTED_MODULE_4__.renderSidebar((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
_pages_display_js__WEBPACK_IMPORTED_MODULE_4__.forms.generateFormModal(document.querySelector(".content"));
_pages_display_js__WEBPACK_IMPORTED_MODULE_4__.renderAllProjectsPage((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
(0,_modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__.createSidebarListeners)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGNBQWMsYUFBYSx5QkFBeUIsYUFBYSx5QkFBeUIsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsS0FBSyxRQUFRLEtBQUssT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFV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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lJO0FBQ2hHO0FBQ0E7QUFDUjtBQUM2QjtBQUNJO0FBQy9FO0FBQ0E7QUFDQSxvQkFBb0IsNEZBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUZBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1GQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQXFCLENBQUMsMEVBQVc7QUFDakMsc0VBQStCO0FBQy9CLG9FQUE2QixDQUFDLDBFQUFXO0FBQ3pDLHdGQUFzQixDQUFDLDBFQUFXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvY29sb3Vycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL29yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9zdGVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9hbGxQcm9qZWN0c0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Byb2plY3RBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3N0ZXBBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Rhc2tBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvZm9ybUJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9zaWRlYmFyTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9hbGxQcm9qZWN0c1BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3JhZGlvRmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3RleHRGaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL3N0ZXBzQ2FyZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL3Rhc2tzQ2FyZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAvKiBDb21tb24gY29sb3VycyAqL1xyXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XHJcblxyXG4gICAgLyogR2VuZXJhbCBwYWdlIHN0eWxpbmcgKi9cclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG4gICAgLS1jb2xvdXItcGlja2VyLWJvcmRlcjogcmdiKDExOCwgMTE4LCAxMTgpO1xyXG5cclxuICAgIC8qIEJ1dHRvbiBzdHlsaW5nICovXHJcbiAgICAtLWFjdGlvbi1idG4tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kOiByZ2IoMCwgODksIDI1NSk7XHJcblxyXG4gICAgLyogU2hhZG93cyAqL1xyXG4gICAgLS1kYXJrLXNoYWRvdzogIzAwMDAwMDQwO1xyXG4gICAgLS1saWdodC1zaGFkb3c6ICMwMDAwMDAyNTtcclxuICAgIC0tZmFpbnQtc2hhZG93OiAjMDAwMDAwMTA7XHJcblxyXG4gICAgLyogVGFzayBwcmlvcml0eSBpbmRpY2F0b3JzICovXHJcbiAgICAtLWlucHV0LWhpZ2hsaWdodDogIzAwNmVmZjtcclxuICAgIC0tcHJpb3JpdHktaGlnaC10ZXh0OiAjYWUyZTI0O1xyXG4gICAgLS1wcmlvcml0eS1oaWdoLWJhY2tncm91bmQ6ICNmZmVjZWI7XHJcbiAgICAtLXByaW9yaXR5LW1lZC10ZXh0OiAjNWU0ZGIyO1xyXG4gICAgLS1wcmlvcml0eS1tZWQtYmFja2dyb3VuZDogI2YzZjBmZjtcclxuICAgIC0tcHJpb3JpdHktbG93LXRleHQ6ICMwMDU1Y2M7XHJcbiAgICAtLXByaW9yaXR5LWxvdy1iYWNrZ3JvdW5kOiAjZTlmMmZmO1xyXG4gICAgLS1wcmlvcml0eS1ub25lLXRleHQ6IHZhcigtLWJsYWNrKTtcclxuICAgIC0tcHJpb3JpdHktbm9uZS1iYWNrZ3JvdW5kOiAjZjBmMWY0O1xyXG5cclxuICAgIC8qIENvbXBsZXRlZCBzdGF0dXMgaW5kaWNhdG9ycyAqL1xyXG4gICAgLS1jb21wbGV0ZWQtY2FyZC10ZXh0OiAjNmE2YTZhO1xyXG4gICAgLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kOiByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmFsIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1idG4taG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1hY3Rpb24tYnRuIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpXHJcbn1cclxuLmRpc2FibGVkLWFjdGlvbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZDogMWZyIDVmciAvIDFmciA0ZnI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUsXHJcbi5zaWRlYmFyLXByb2plY3RzLW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwOTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG4ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG4gPiBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi8qXHJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXHJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXHJcbi5kYXRlLWlucHV0OmZvY3VzLFxyXG4uZGVzYy1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5wdXQtaGlnaGxpZ2h0KTtcclxufSBcclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNoYWRvdyk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XHJcbn0gXHJcblxyXG4uZm9ybS1ib2R5LFxyXG4uZGVsZXRlLWZvcm0sXHJcbi5jb2xvdXItZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcblxyXG4uZm9ybS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tYmFja2dyb3VuZCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Ym1pdC1idG4tYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuLnRpdGxlLWlucHV0LFxyXG4uZGF0ZS1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kZXNjLWlucHV0IHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4gXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5jb2xvdXItZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgxZnIsIDUwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3VyLXBpY2tlci1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY29sb3VyLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uY29sb3VyLXJhZGlvLWJ0bi1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufSAqL1xyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50LWJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59IFxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2VjdGlvbi1kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG59IFxyXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi50YXNrLWxpc3QtY29udGFpbmVyLFxyXG4uc3RlcHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnRhc2stbGlzdC1jb250YWluZXIge1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnRhc2stbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcclxufVxyXG5cclxuLnRhc2stY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xyXG59IFxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3RlcC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByaW9yaXR5IEljb24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gLnByaW9yaXR5LXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnByaW9yaXR5LWhpZ2gge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbWVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1sb3cge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnByaW9yaXR5LW5vbmUge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1ub25lLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLXRleHQpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLHlCQUF5QjtJQUN6Qiw4Q0FBOEMsRUFBRSw0QkFBNEI7SUFDNUUsNEJBQTRCO0lBQzVCLHFEQUFxRCxFQUFFLHFEQUFxRDtJQUM1Ryx1Q0FBdUM7SUFDdkMsMENBQTBDOztJQUUxQyxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGlEQUFpRDtJQUNqRCx3Q0FBd0M7O0lBRXhDLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHlCQUF5Qjs7SUFFekIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsbUNBQW1DOztJQUVuQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLCtDQUErQztBQUNuRDs7QUFFQTs7OztFQUlFO0FBQ0Y7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lB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Q1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0VBSUU7Q0FDRDtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLyogQ29tbW9uIGNvbG91cnMgKi9cXHJcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXHJcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG5cXHJcXG4gICAgLyogR2VuZXJhbCBwYWdlIHN0eWxpbmcgKi9cXHJcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cXHJcXG4gICAgLS1zaWRlYmFyLXRleHQ6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xcclxcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XFxyXFxuICAgIC0tY29sb3VyLXBpY2tlci1ib3JkZXI6IHJnYigxMTgsIDExOCwgMTE4KTtcXHJcXG5cXHJcXG4gICAgLyogQnV0dG9uIHN0eWxpbmcgKi9cXHJcXG4gICAgLS1hY3Rpb24tYnRuLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgLS1zdWJtaXQtYnRuLWJhY2tncm91bmQ6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG5cXHJcXG4gICAgLyogU2hhZG93cyAqL1xcclxcbiAgICAtLWRhcmstc2hhZG93OiAjMDAwMDAwNDA7XFxyXFxuICAgIC0tbGlnaHQtc2hhZG93OiAjMDAwMDAwMjU7XFxyXFxuICAgIC0tZmFpbnQtc2hhZG93OiAjMDAwMDAwMTA7XFxyXFxuXFxyXFxuICAgIC8qIFRhc2sgcHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xcclxcbiAgICAtLWlucHV0LWhpZ2hsaWdodDogIzAwNmVmZjtcXHJcXG4gICAgLS1wcmlvcml0eS1oaWdoLXRleHQ6ICNhZTJlMjQ7XFxyXFxuICAgIC0tcHJpb3JpdHktaGlnaC1iYWNrZ3JvdW5kOiAjZmZlY2ViO1xcclxcbiAgICAtLXByaW9yaXR5LW1lZC10ZXh0OiAjNWU0ZGIyO1xcclxcbiAgICAtLXByaW9yaXR5LW1lZC1iYWNrZ3JvdW5kOiAjZjNmMGZmO1xcclxcbiAgICAtLXByaW9yaXR5LWxvdy10ZXh0OiAjMDA1NWNjO1xcclxcbiAgICAtLXByaW9yaXR5LWxvdy1iYWNrZ3JvdW5kOiAjZTlmMmZmO1xcclxcbiAgICAtLXByaW9yaXR5LW5vbmUtdGV4dDogdmFyKC0tYmxhY2spO1xcclxcbiAgICAtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZDogI2YwZjFmNDtcXHJcXG5cXHJcXG4gICAgLyogQ29tcGxldGVkIHN0YXR1cyBpbmRpY2F0b3JzICovXFxyXFxuICAgIC0tY29tcGxldGVkLWNhcmQtdGV4dDogIzZhNmE2YTtcXHJcXG4gICAgLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhbCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxyXFxufVxcclxcbi5hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkLWFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpXFxyXFxufVxcclxcbi5kaXNhYmxlZC1hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZDogMWZyIDVmciAvIDFmciA0ZnI7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBTaWRlYmFyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1oZWFkaW5nIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW1lbnUsXFxyXFxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuID4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi8qXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xcclxcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiovXFxyXFxuLnRpdGxlLWlucHV0OmZvY3VzLFxcclxcbi5kYXRlLWlucHV0OmZvY3VzLFxcclxcbi5kZXNjLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5wdXQtaGlnaGxpZ2h0KTtcXHJcXG59IFxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xcclxcbn0gXFxyXFxuXFxyXFxuLmZvcm0tYm9keSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5jb2xvdXItZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvdXItcGlja2VyLWJvcmRlcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLXJhZGlvLWJ0bi1sYWJlbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ib2R5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtY2FyZC1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zZWN0aW9uLWRpdmlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxufSBcXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxMDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi50YXNrLWxpc3QtY29udGFpbmVyLFxcclxcbi5zdGVwcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtY2FyZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiAucHJpb3JpdHktdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1ub25lIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLXRleHQpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogQWN0aW9uIGJ1dHRvbiBjbGFzc25hbWUgRU5VTSAqL1xyXG5jb25zdCBBY3Rpb25zID0ge1xyXG4gICAgQ1JFQVRFOiBcImFkZC1idXR0b25cIixcclxuICAgIENPTE9VUjogXCJjb2xvdXItYnV0dG9uXCIsXHJcbiAgICBFRElUOiBcImVkaXQtYnV0dG9uXCIsXHJcbiAgICBERUxFVEU6IFwiZGVsZXRlLWJ1dHRvblwiLFxyXG59XHJcblxyXG5leHBvcnQgeyBBY3Rpb25zIH0iLCIvKiBDb2xvdXIgRU5VTSAqL1xyXG5jb25zdCBDb2xvdXJzID0ge1xyXG4gICAgTk9ORTogXCIjZmZmZmZmXCIsXHJcbiAgICBQSU5LOiBcImhzbCgzMjAsIDYwJSwgODUlKVwiLFxyXG4gICAgUFVSUExFOiBcImhzbCgyNzAsIDYwJSwgNzUlKVwiLFxyXG4gICAgQkxVRTogXCJoc2woMjEwLCA2MCUsIDc1JSlcIixcclxuICAgIFRFQUw6IFwiaHNsKDE5MCwgNjAlLCA3NSUpXCIsXHJcbiAgICBHUkVFTjogXCJoc2woMTIwLCA2MCUsIDg1JSlcIixcclxuICAgIFlFTExPVzogXCJoc2woNTAsIDYwJSwgODUlKVwiLFxyXG4gICAgT1JBTkdFOiBcImhzbCgzMCwgNjAlLCA4NSUpXCIsXHJcbiAgICBSRUQ6IFwiaHNsKDAsIDYwJSwgODUlKVwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29sb3VyID0gQ29sb3Vycy5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkQ29sb3VyKGNvbG91cikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoQ29sb3VycykuaW5jbHVkZXMoY29sb3VyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ29sb3VycywgRGVmYXVsdENvbG91ciwgaXNWYWxpZENvbG91ciB9IiwiLyogT3JnYW5pemVyIEVOVU0gKi9cclxuY29uc3QgT3JnYW5pemVycyA9IHtcclxuICAgIFBST0pFQ1Q6IFwiUHJvamVjdFwiLFxyXG4gICAgVEFTSzogXCJUYXNrXCIsXHJcbiAgICBTVEVQOiBcIlN0ZXBcIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkT3JnYW5pemVyKG9yZ2FuaXplcikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoT3JnYW5pemVycykuaW5jbHVkZXMob3JnYW5pemVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgT3JnYW5pemVycywgaXNWYWxpZE9yZ2FuaXplciB9IiwiLyogUHJpb3JpdHkgRU5VTSAqL1xyXG5jb25zdCBQcmlvcml0eSA9IHtcclxuICAgIE5PTkU6IFwiTm9uZVwiLFxyXG4gICAgTE9XOiBcIkxvd1wiLFxyXG4gICAgTUVEOiBcIk1lZFwiLFxyXG4gICAgSElHSDogXCJIaWdoXCIsXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRQcmlvcml0eSA9IFByaW9yaXR5Lk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgcHJpb3JpdHkgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuaW5jbHVkZXMocHJpb3JpdHkpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0cyBhIHByaW9yaXR5IHZhbHVlIHRvIGEgbnVtZXJpY2FsIHZhbHVlICovXHJcbmZ1bmN0aW9uIGNvbnZlcnRQcmlvcml0eVRvVmFsdWUocHJpb3JpdHkpIHtcclxuICAgIGlmIChwcmlvcml0eSA9PT0gUHJpb3JpdHkuSElHSCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFByaW9yaXR5Lk1FRCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT09IFByaW9yaXR5LkxPVykge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNvcnRzIHR3byBlbGVtZW50cyBiYXNlZCBvbiB0aGVpciBwcmlvcml0eSB2YWx1ZXMgKi9cclxuZnVuY3Rpb24gcHJpb3JpdHlTb3J0KHgsIHkpIHtcclxuICAgIGNvbnN0IHhQcmlvcml0eVZhbHVlID0gY29udmVydFByaW9yaXR5VG9WYWx1ZSh4LmdldFByaW9yaXR5KCkpO1xyXG4gICAgY29uc3QgeVByaW9yaXR5VmFsdWUgPSBjb252ZXJ0UHJpb3JpdHlUb1ZhbHVlKHkuZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICBpZiAoIHhQcmlvcml0eVZhbHVlID4geVByaW9yaXR5VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHhQcmlvcml0eVZhbHVlIDwgeVByaW9yaXR5VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJpb3JpdHksIERlZmF1bHRQcmlvcml0eSwgaXNWYWxpZFByaW9yaXR5LCBwcmlvcml0eVNvcnQgfSIsIi8qIFN0YXR1cyBFTlVNICovXHJcbmNvbnN0IFN0YXR1cyA9IHtcclxuICAgIENPTVBMRVRFRDogXCJDb21wbGV0ZWRcIixcclxuICAgIElOQ09NUExFVEU6IFwiSW5jb21wbGV0ZVwiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgc3RhdHVzIHByb3BlcnR5IGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhTdGF0dXMpLmluY2x1ZGVzKHN0YXR1cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0YXR1cywgaXNWYWxpZFN0YXR1cyB9IiwiaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdENvbG91ciwgaXNWYWxpZENvbG91ciB9IGZyb20gXCIuLi8uLi9lbnVtcy9jb2xvdXJzLmpzXCI7XHJcbmltcG9ydCB7IHByaW9yaXR5U29ydCB9IGZyb20gXCIuLi8uLi9lbnVtcy9wcmlvcml0eS5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZVRhc2sgfSBmcm9tIFwiLi4vdGFzay5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHByb2plY3Qgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdElEKSB7XHJcbiAgICBsZXQgY29sb3VyID0gRGVmYXVsdENvbG91cjtcclxuICAgIGxldCB0YXNrQ291bnQgPSAwO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gW107XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRUYXNrID0gbnVsbDtcclxuXHJcbiAgICAvKiBSZXR1cm5zIHRhc2sgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldE5leHRUYXNrQ291bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0YXNrQ291bnQ7XHJcbiAgICAgICAgdGFza0NvdW50Kys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3VyKCkge1xyXG4gICAgICAgIHJldHVybiBjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sb3VyKG5ld0NvbG91cikge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkQ29sb3VyKG5ld0NvbG91cikpIHtcclxuICAgICAgICAgICAgY29sb3VyID0gbmV3Q29sb3VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbmNvbXBsZXRlVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGluY29tcGxldGVUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSB0YXNrIHRvIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0luY29tcGxldGVUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgc29ydEluY29tcGxldGVUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhbiBpbmNvbXBsZXRlIHRhc2sgZnJvbSB0aGUgcHJvamVjdCAoYW5kIGFkZCB0byBjb21wbGV0ZVRhc2tzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzLmZvckVhY2goKHRhc2tFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRUYXNrSUQoKSA9PT0gdGFza0VsZW1lbnQuZ2V0VGFza0lEKCkpIHtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGVUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGNvbXBsZXRlZFRhc2tzXHJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ29tcGxldGVkVGFza3ModGFzayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvbnZlcnRzIGFsbCBpbmNvbXBsZXRlIHRhc2tzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlVGFza3MoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFRhc2tzID0gW107XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUYXNrcy5wdXNoKHNlcmlhbGl6ZVRhc2sodGFzaykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZFRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRJbmNvbXBsZXRlVGFza3MoKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzLnNvcnQocHJpb3JpdHlTb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgY29tcGxldGVkIHRhc2sgdG8gdGhlIHByb2plY3QgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvQ29tcGxldGVkVGFza3ModGFzaykge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgc29ydENvbXBsZXRlZFRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIGEgY29tcGxldGVkIHRhc2sgZnJvbSB0aGUgcHJvamVjdCAoYW5kIGFkZCB0byBpbmNvbXBsZXRlZFRhc2tzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzKHRhc2spIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suZ2V0VGFza0lEKCkgPT09IHRhc2tFbGVtZW50LmdldFRhc2tJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGluY29tcGxldGVUYXNrc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5JTkNPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9JbmNvbXBsZXRlVGFza3ModGFzayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvbnZlcnRzIGFsbCBjb21wbGV0ZWQgdGFza3MgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXNrcyA9IFtdO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUYXNrcy5wdXNoKHNlcmlhbGl6ZVRhc2sodGFzaykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZFRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5zb3J0KHByaW9yaXR5U29ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrKG5ld1Rhc2spIHtcclxuICAgICAgICBjdXJyZW50VGFzayA9IG5ld1Rhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLCBcclxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGdldENvbG91ciwgc2V0Q29sb3VyLFxyXG4gICAgICAgIGdldEluY29tcGxldGVUYXNrcywgYWRkVG9JbmNvbXBsZXRlVGFza3MsIHJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MsIHNvcnRJbmNvbXBsZXRlVGFza3MsIGdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlVGFza3MsXHJcbiAgICAgICAgZ2V0Q29tcGxldGVkVGFza3MsIGFkZFRvQ29tcGxldGVkVGFza3MsIHJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcywgc29ydENvbXBsZXRlZFRhc2tzLCBnZXRTZXJpYWxpemVkQ29tcGxldGVkVGFza3MsXHJcbiAgICAgICAgZ2V0UHJvamVjdElELFxyXG4gICAgICAgIGdldE5leHRUYXNrQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFRhc2ssIHNldEN1cnJlbnRUYXNrLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3RlcCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RlcEZhY3RvcnkodGl0bGUsIHByb2plY3RJRCwgdGFza0lELCBzdGVwSUQpIHtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMobmV3U3RhdHVzKSkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3YXBTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DT01QTEVURUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGFza0lEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0ZXBJRCgpIHtcclxuICAgICAgICByZXR1cm4gc3RlcElEO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHN3YXBTdGF0dXMsIFxyXG4gICAgICAgIGdldFByb2plY3RJRCwgZ2V0VGFza0lELCBnZXRTdGVwSUQsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUHJpb3JpdHkgfSBmcm9tIFwiLi4vLi4vZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXJpYWxpemVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVTdGVwIH0gZnJvbSBcIi4uL3N0ZXAuanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSB0YXNrIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgbGV0IHN0ZXBDb3VudCA9IDA7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gW107XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICBsZXQgY3VycmVudFN0ZXAgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgc3RlcCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHN0ZXBDb3VudDtcclxuICAgICAgICBzdGVwQ291bnQrKztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkUHJpb3JpdHkobmV3UHJpb3JpdHkpKSB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMobmV3U3RhdHVzKSkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3YXBTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DT01QTEVURUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluY29tcGxldGVTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIHN0ZXAgdG8gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBzdGVwIGZyb20gaW5jb21wbGV0ZVN0ZXBzIChhbmQgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goKHN0ZXBFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGVwSUQoKSA9PT0gc3RlcEVsZW1lbnQuZ2V0U3RlcElEKCkpIHtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGVTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ29tcGxldGVkU3RlcHMoc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvbnZlcnRzIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0ZXBzID0gW107XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRTdGVwcy5wdXNoKHNlcmlhbGl6ZVN0ZXAoc3RlcCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFN0ZXBzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgc3RlcCBmcm9tIHRoZSB0YXNrIChhbmQgYWRkIHRvIGluY29tcGxldGVTdGVwcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMuZm9yRWFjaCgoc3RlcEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0ZXBJRCgpID09PSBzdGVwRWxlbWVudC5nZXRTdGVwSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkU3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBpbmNvbXBsZXRlU3RlcHNcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuSU5DT01QTEVURSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgY29tcGxldGVkIHN0ZXBzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRTdGVwcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RlcHMgPSBbXTtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkU3RlcHMucHVzaChzZXJpYWxpemVTdGVwKHN0ZXApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3RlcCgpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFN0ZXAobmV3U3RlcCkge1xyXG4gICAgICAgIGN1cnJlbnRTdGVwID0gbmV3U3RlcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgXHJcbiAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgc3dhcFN0YXR1cywgXHJcbiAgICAgICAgZ2V0SW5jb21wbGV0ZVN0ZXBzLCBhZGRUb0luY29tcGxldGVTdGVwcywgcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcywgZ2V0U2VyaWFsaXplZEluY29tcGxldGVTdGVwcyxcclxuICAgICAgICBnZXRDb21wbGV0ZWRTdGVwcywgYWRkVG9Db21wbGV0ZWRTdGVwcywgcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzLCBnZXRTZXJpYWxpemVkQ29tcGxldGVkU3RlcHMsXHJcbiAgICAgICAgZ2V0UHJvamVjdElELCBnZXRUYXNrSUQsIFxyXG4gICAgICAgIGdldE5leHRTdGVwQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgYWRkVG9TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVzZXJpYWxpemVUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwcm9qZWN0IHRoYXQgc3RvcmVzIGFsbCB1bmFzc2lnbmVkIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgXCJNaXNjZWxsYW5lb3VzXCIsIFxyXG4gICAgICAgIFwiRGVmYXVsdCBwcm9qZWN0XCIsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIGFkZFRvUHJvamVjdHMobmV3UHJvamVjdCk7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBhbiBleGlzdGluZyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RJdGVtLmdldFByb2plY3RJRCgpID09PSBwcm9qZWN0LmdldFByb2plY3RJRCgpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIFJldHVybnMgcHJvamVjdCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG5mdW5jdGlvbiBnZXROZXh0UHJvamVjdENvdW50KCkge1xyXG4gICAgY29uc3QgY291bnQgPSBwcm9qZWN0Q291bnQ7XHJcbiAgICBwcm9qZWN0Q291bnQrKztcclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHByb2plY3QgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgYWRkVG9TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgcHJvamVjdCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyB0aGUgY29sb3VyIG9mIGEgcHJvamVjdCBiYXNlZCBvbiBjb2xvdXIgcGlja2VyIGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdDb2xvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cclxuICAgIHByb2plY3Quc2V0Q29sb3VyKG5ld0NvbG91cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzKG5ld1Byb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RzKG5ld1Byb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGRlc2MgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvdXIgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gcHJvamVjdC5nZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHByb2plY3QuZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGluY29tcGxldGVUYXNrcyxcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBjb2xvdXIsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgZnJvbSBKU09OIGZvcm1hdCBkYXRhICovXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBDcmVhdGluZyBwcm9qZWN0IGZyb20gZGF0YVxyXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2MpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgLy8gQWRkaW5nIGFsbCB0YXNrc1xyXG4gICAgcHJvamVjdC5pbmNvbXBsZXRlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVRhc2sobmV3UHJvamVjdCwgdGFzayk7XHJcbiAgICB9KVxyXG4gICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplVGFzayhuZXdQcm9qZWN0LCB0YXNrKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQWRkaW5nIGNvbG91clxyXG4gICAgbmV3UHJvamVjdC5zZXRDb2xvdXIocHJvamVjdC5jb2xvdXIpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplZFByb2plY3RzKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZFByb2plY3RzID0gW107XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQcm9qZWN0cy5wdXNoKHNlcmlhbGl6ZVByb2plY3QocHJvamVjdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFByb2plY3RzO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdENvdW50ID0gMDtcclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG5leHBvcnQgeyBcclxuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sICBcclxuICAgIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sXHJcbiAgICBnZXRQcm9qZWN0cywgc2V0UHJvamVjdHMsIGRlbGV0ZVByb2plY3QsXHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsXHJcbiAgICBnZXRTZXJpYWxpemVkUHJvamVjdHMsIGRlc2VyaWFsaXplUHJvamVjdFxyXG59IiwiaW1wb3J0IHN0ZXBGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qc1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHN0ZXAgYW5kIGFkZHMgdG8gYSB0YXNrICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXAodGFzaywgdGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHRhc2suZ2V0UHJvamVjdElEKCk7XHJcbiAgICBjb25zdCB0YXNrSUQgPSB0YXNrLmdldFRhc2tJRCgpO1xyXG4gICAgY29uc3Qgc3RlcElEID0gdGFzay5nZXROZXh0U3RlcENvdW50KCk7XHJcbiAgICBjb25zdCBuZXdTdGVwID0gc3RlcEZhY3RvcnkodGl0bGUsIHByb2plY3RJRCwgdGFza0lELCBzdGVwSUQpO1xyXG5cclxuICAgIHRhc2suYWRkVG9JbmNvbXBsZXRlU3RlcHMobmV3U3RlcCk7XHJcbiAgICB0YXNrLnNldEN1cnJlbnRTdGVwKG5ld1N0ZXApO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHN0ZXAgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVN0ZXAoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLCB0aXRsZSk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHN0ZXAgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRTdGVwRnJvbUZvcm0oc3RlcCkge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gICAgc3RlcC5zZXRUaXRsZShuZXdUaXRsZSk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBzdGVwIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplU3RlcChzdGVwKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHN0ZXAuZ2V0U3RhdHVzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHN0ZXAgZnJvbSBKU09OIGZvcm1hdCBkYXRhICovXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplU3RlcCh0YXNrLCBzdGVwKSB7XHJcbiAgICAvLyBDcmVhdGluZyBzdGVwIGZyb20gZGF0YVxyXG4gICAgY3JlYXRlU3RlcCh0YXNrLCBzdGVwLnRpdGxlKTtcclxuICAgIGNvbnN0IG5ld1N0ZXAgPSB0YXNrLmdldEN1cnJlbnRTdGVwKCk7XHJcblxyXG4gICAgLy8gQWRkaW5nIHRvIGFwcHJvcHJpYXRlIGxvY2F0aW9uXHJcbiAgICBpZiAoc3RlcC5zdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICBuZXdTdGVwLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgICAgICB0YXNrLnJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgICBjcmVhdGVTdGVwLCBcclxuICAgIGNyZWF0ZVN0ZXBGcm9tRm9ybSwgZWRpdFN0ZXBGcm9tRm9ybSwgXHJcbiAgICBzZXJpYWxpemVTdGVwLCBkZXNlcmlhbGl6ZVN0ZXBcclxufSIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0U2VyaWFsaXplZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZVN0ZXAgfSBmcm9tIFwiLi9zdGVwLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgdGFzayBhbmQgYWRkcyB0byBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0LmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gcHJvamVjdC5nZXROZXh0VGFza0NvdW50KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpO1xyXG5cclxuICAgIHByb2plY3QuYWRkVG9JbmNvbXBsZXRlVGFza3MobmV3VGFzayk7XHJcbiAgICBwcm9qZWN0LnNldEN1cnJlbnRUYXNrKG5ld1Rhc2spO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHRhc2sgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soZ2V0Q3VycmVudFByb2plY3QoKSwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuLyogRWRpdHMgYSB0YXNrIGJhc2VkIG9uIGluZm9ybWF0aW9uIGluIGVkaXQgZm9ybSAqL1xyXG5mdW5jdGlvbiBlZGl0VGFza0Zyb21Gb3JtKHRhc2spIHtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cclxuICAgIHRhc2suc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbihuZXdEZXNjKTtcclxuICAgIHRhc2suc2V0RHVlRGF0ZShuZXdEYXRlKTtcclxuICAgIHRhc2suc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ29tcGxldGUgYSB0YXNrIGFuZCBjb252ZXJ0IGFsbCBzdGVwcyB0byByZXF1aXJlZCBzdGF0dXMqL1xyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgdGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSB0YXNrIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRhc2suZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGRlc2MgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKCk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRhc2suZ2V0U3RhdHVzKCk7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSB0YXNrLmdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlU3RlcHMoKTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gdGFzay5nZXRTZXJpYWxpemVkQ29tcGxldGVkU3RlcHMoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2MsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLFxyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzLFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0YXNrIGZyb20gSlNPTiBmb3JtYXQgZGF0YSAqL1xyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgLy8gQ3JlYXRpbmcgdGFzayBmcm9tIGRhdGFcclxuICAgIGNyZWF0ZVRhc2socHJvamVjdCwgdGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHByb2plY3QuZ2V0Q3VycmVudFRhc2soKVxyXG5cclxuICAgIC8vIEFkZGluZyBhbGwgc3RlcHNcclxuICAgIHRhc2suaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVTdGVwKG5ld1Rhc2ssIHN0ZXApO1xyXG4gICAgfSlcclxuICAgIHRhc2suY29tcGxldGVkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVN0ZXAobmV3VGFzaywgc3RlcCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFkZGluZyB0byBhcHByb3ByaWF0ZSBsb2NhdGlvblxyXG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgbmV3VGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgcHJvamVjdC5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKG5ld1Rhc2spO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICAgIGNyZWF0ZVRhc2ssIFxyXG4gICAgY29tcGxldGVUYXNrLCBcclxuICAgIGNyZWF0ZVRhc2tGcm9tRm9ybSwgZWRpdFRhc2tGcm9tRm9ybSwgXHJcbiAgICBzZXJpYWxpemVUYXNrLCBkZXNlcmlhbGl6ZVRhc2tcclxufSIsImltcG9ydCB7IGZvcm1zIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgY3JlYXRlIHByb2plY3QgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RCdXR0b25MaXN0ZW5lciB9IiwiLyogQXR0YWNoIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFuIGFjdGlvbiBidXR0b24gKi9cclxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIoYnRuLCBldmVudEZ1bmN0aW9uKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZXZlbnRGdW5jdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwcm9qZWN0IGNyZWF0ZSB0YXNrIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKHByb2plY3QpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGVkaXQgcHJvamVjdCBjb2xvdXIgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTsgXHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZWRpdCBwcm9qZXRjIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIsIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRUYXNrRnJvbUlEIH0gZnJvbSBcIi4uL3V0aWxpdHkvaW5kZXguanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgZWRpdCBzdGVwIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyKHN0ZXApIHtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwLmdldFRhc2tJRCgpKSk7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJFZGl0U3RlcEZvcm0oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBkZWxldGUgc3RlcCBidXR0b24gbGlzdGVuZXIgKi9cclxuZnVuY3Rpb24gc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHN0ZXApIHtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwLmdldFRhc2tJRCgpKSk7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJEZWxldGVTdGVwRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyLCBzdGVwRGVsZXRlQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgdGFzayBjcmVhdGUgc3RlcCBidXR0b24gbGlzdGVuZXIgKi9cclxuZnVuY3Rpb24gdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBlZGl0IHRhc2sgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRUYXNrRm9ybSgpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGRlbGV0ZSB0YXNrIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVRhc2tGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIsIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIsIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9zdGF0dXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc2V0U3RlcENhcmRDb21wbGV0ZWQsIHNldFN0ZXBDYXJkSW5jb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRUYXNrRnJvbUlELCBzZXRDdXJyZW50U3RlcEZyb21JRCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbi8qIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIGxvZ2ljIGZvciBhIHRhc2sgKi9cclxuZnVuY3Rpb24gdGFza1N0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgdGFza1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHRhc2tDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSkpO1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDb21wbGV0ZWRUYXNrcygpLCBTdHJpbmcodGFza0NhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcblxyXG4gICAgY29uc3QgdGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHRhc2tzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgdGFzay5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUYXNrU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBtYXJraW5nIGEgdGFzayBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzayk7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB3cmFwcGVyIHRvIHRoZSBjb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgbWFya2luZyBhIHRhc2sgYXMgaW5jb21wbGV0ZSAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5yZW1vdmVGcm9tQ29tcGxldGVkVGFza3ModGFzayk7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB3cmFwcGVyIHRvIHRoZSBpbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gXHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGluaXRpYWxpemF0aW9uIG9mIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgbWFya2luZyB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2YgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHRhc2tTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkpO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIHRvZ2dsaW5nIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBsb2dpYyBmb3IgYSBzdGVwICovXHJcbmZ1bmN0aW9uIHN0ZXBTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEluY29tcGxldGVUYXNrcygpLCBTdHJpbmcoc3RlcENhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcbiAgICAvLyBTZWFyY2hlcyBib3RoIGxpc3RzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG4gICAgc2V0Q3VycmVudFN0ZXBGcm9tSUQoY3VycmVudFRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtaWRcIikpKTtcclxuICAgIHNldEN1cnJlbnRTdGVwRnJvbUlEKGN1cnJlbnRUYXNrLmdldENvbXBsZXRlZFN0ZXBzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtaWRcIikpKTtcclxuXHJcbiAgICBjb25zdCBzdGVwID0gY3VycmVudFRhc2suZ2V0Q3VycmVudFN0ZXAoKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHN0ZXBzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgc3RlcC5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHN0ZXAuZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBtYXJraW5nIGEgc3RlcCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKTtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG5cclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBjb21wbGV0ZWQgc3RlcHMgbGlzdFxyXG4gICAgY29uc3QgcGFyZW50ID0gc3RlcENhcmQucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudC5uZXh0U2libGluZy5hcHBlbmRDaGlsZChzdGVwQ2FyZCk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgbWFya2luZyBhIHN0ZXAgYXMgaW5jb21wbGV0ZSAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCkge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXBDYXJkKTtcclxuXHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB0byB0aGUgaW5jb21wbGV0ZSBzdGVwcyBsaXN0XHJcbiAgICBjb25zdCBwYXJlbnQgPSBzdGVwQ2FyZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50LnByZXZpb3VzU2libGluZy5hcHBlbmRDaGlsZChzdGVwQ2FyZCk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciBtYXJraW5nIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiBzdGVwcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gc3RlcFN0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lciwgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyIH0iLCIvKiBDcmVhdGVzIHRoZSBzdWJtaXQgZm9ybSBidXR0b24gKi9cclxuZnVuY3Rpb24gY3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbkxpc3RlbmVyKGJ0biwgc3VibWl0RnVuY3Rpb24sIG1vZGFsKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN1Ym1pdEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgdGhlIGNhbmNlbCBmb3JtIGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoYnRuLCBtb2RhbCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzIGZyb20gXCIuL3NpZGViYXJMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4vcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzLFxyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzLFxyXG59IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuXHJcbi8qIE1ha2UgYSBncm91cCBvZiBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnRzIGxpbmsgdG8gdGhlaXIgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgLy8gTGluayBlYWNoIHByb2plY3QgbmF2aWdhdGlvbiBlbGVtZW50IHRvIGEgcHJvamVjdCBwYWdlXHJcbiAgICBwcm9qZWN0TmF2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpID09PSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBNYWtlIGEgc2luZ2xlIHByb2plY3QgbmF2aWdhdGlvbiBET00gZWxlbWVudCBsaWtlIHRvIGEgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIocHJvamVjdHMsIGl0ZW0pIHtcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycywgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogTWFrZSB0aGUgYWxsIHByb2plY3RzIHNpZGViYXIgYnV0dG9uIGxpbmsgdG8gdGhlIGFsbCBwcm9qZWN0cyBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG5cclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIEdpdmUgYWxsIHNpZGViYXIgcHJvamVjdCBidXR0b25zIGZ1bmN0aW9uYWxpdHkgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhckxpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cyk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIFwiLnNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbn0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBTZXRzIGN1cnJlbnQgdGFzayBmcm9tIGEgZ2l2ZW4gdGFza0lEIHZhbHVlICovXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrRnJvbUlEKHRhc2tzLCB0YXNrSUQpIHtcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyh0YXNrLmdldFRhc2tJRCgpKSA9PT0gdGFza0lEKSB7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogU2V0cyBjdXJyZW50IHN0ZXAgZnJvbSBhIGdpdmVuIHN0ZXBJRCB2YWx1ZSAqL1xyXG5mdW5jdGlvbiBzZXRDdXJyZW50U3RlcEZyb21JRChzdGVwcywgc3RlcElEKSB7XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcoc3RlcC5nZXRTdGVwSUQoKSkgPT09IHN0ZXBJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tGcm9tSUQsIHNldEN1cnJlbnRTdGVwRnJvbUlEIH0iLCIvLyBVcGRhdGVzIHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgbG9jYWwgZW52aXJvbm1lbnRcclxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdHMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdHMpKTtcclxufVxyXG5cclxuLy8gRmV0Y2hlcyB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2FsIGVudmlyb25lbW50IGFuZCBjb252ZXJ0cyB1dCBiYWNrIHRvIHVzZWFibGUgZm9ybWF0XHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgfSIsImltcG9ydCB7IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvYWxsUHJvamVjdHNBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIsIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvcHJvamVjdEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIG9mIHRoZSBjdXJyZW50IHByb2plY3RzICovXHJcbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cykge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgaGVhZGVyIHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xyXG4gICAgICAgIC8vIEFsbCBwcm9qZWN0cyBidXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFLCBcImNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG5cIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b25MaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFsbCBQcm9qZWN0c1wiO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhjcmVhdGVQcm9qZWN0QnV0dG9uKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBjb250ZW50IGZvciB0aGUgYm9keSBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgY2FyZCAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgcHJvamVjdCBjYXJkIGRldGFpbHNcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmREZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmREZXRhaWxzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlcyB0aGUgbG9naWMgZm9yIHRoZSBwcm9qZWN0IGNhcmQgYWN0aW9uIGJ1dHRvbnMgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RDYXJkQnV0dG9ucyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DT0xPVVJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIkNvbG91ciBQcm9qZWN0IEJ1dHRvblwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIkVkaXQgUHJvamVjdCBCdXR0b25cIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJEZWxldGUgUHJvamVjdCBCdXR0b25cIiwgdGl0bGU6IFwiRGVsZXRlIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RDYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkLWdyaWRcIik7XHJcblxyXG4gICAgICAgIC8vIEFkZGluZyBlYWNoIG9mIHRoZSBwcm9qZWN0cyB0byBhIGNhcmRcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmREZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkR3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5wcm9qZWN0LWNhcmRcIik7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGluZm9ybWF0aW9uIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNhcmRbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgY29uc3QgY2FyZERldGFpbHMgPSBwcm9qZWN0Q2FyZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gY2FyZERldGFpbHMuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGNhcmREZXRhaWxzLmxhc3RDaGlsZDtcclxuXHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBwcm9qZWN0Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBwcm9qZWN0cyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgcHJvamVjdENhcmQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgZGVsZXRlUHJvamVjdENhcmQgfSIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcclxuLy8gaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiXHJcbmltcG9ydCB7IGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlQ29sb3VyfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciB9IGZyb20gXCIuL2FsbFByb2plY3RzUGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBSZW1vdmUgYWxsIGNvbnRlbnQgZnJvbSB0aGUgaGVhZGVyICovXHJcbmZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgY29udGVudCBmcm9tIHRoZSBib2R5ICovXHJcbmZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgY29udGVudCBmcm9tIHRoZSBjb250ZW50IHNlY3Rpb25zICovXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIGNsZWFySGVhZGVyKCk7XHJcbiAgICBjbGVhckJvZHkoKTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGFsbCBjb250ZW50IGZyb20gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gY2xlYXJTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZSxcclxuICAgIHJlbmRlclByb2plY3RQYWdlLFxyXG4gICAgZWRpdFByb2plY3RQYWdlQ29sb3VyLCBcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZSxcclxuICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cixcclxuICAgIGZvcm1zLFxyXG4gICAgY2xlYXJQYWdlLFxyXG4gICAgY2xlYXJTaWRlYmFyLFxyXG59IiwiaW1wb3J0IGdlbmVyYXRlVGV4dEZpZWxkcyBmcm9tIFwiLi90ZXh0RmllbGRHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0ICogYXMgcmFkaW9GaWVsZEdlbmVyYXRvciBmcm9tIFwiLi9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IE9yZ2FuaXplcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL29yZ2FuaXplci5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENhcmQsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza0NhcmQgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVTdGVwQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9mb3JtQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIG1vZGFsIHdoaWNoIHdpbGwgc3RvcmUgYWxsIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybU1vZGFsKHBhcmVudCkge1xyXG4gICAgY29uc3QgZm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybU1vZGFsKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBmb3JtIGNyZWF0aW9uIGFuZCBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oZm9ybSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZm9ybUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XHJcbiAgICBtb2RhbC5yZXBsYWNlQ2hpbGRyZW4oZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIGNvbnN0IGJ0bklEUHJlZml4ID0gYWN0aW9uVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gU3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xyXG4gICAgc3VibWl0QnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItc3VibWl0LWJ0blwiO1xyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgLy8gU3VibWl0IGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIoc3VibWl0QnRuLCBzdWJtaXRGdW5jdGlvbiwgbW9kYWwpO1xyXG5cclxuICAgIC8vIENhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItY2FuY2VsLWJ0blwiO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcImNhbmNlbC1idG5cIik7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoY2FuY2VsQnRuLCBtb2RhbClcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogMjB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInByb2plY3QtZm9ybS1ib2R5XCIsIFwiTmV3IFByb2plY3RcIiwgXCJmb3JtLWJvZHlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMocHJvamVjdFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDcmVhdGVcIiwgZm9ybSwgY3JlYXRlUHJvamVjdEZyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGVkaXRpbmcgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckVkaXRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogMjB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInByb2plY3QtZWRpdC1mb3JtXCIsIFwiRWRpdCBQcm9qZWN0XCIsIFwiZm9ybS1ib2R5XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICAvLyBDaGVja2luZyB3aGljaCBwYWdlIGlzIGN1cnJlbnRseSBkaXNwbGF5ZWRcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUaXRsZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZSA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVRhc2tGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJ0YXNrLWZvcm0tYm9keVwiLCBcIk5ldyBUYXNrXCIsIFwiZm9ybS1ib2R5XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHRhc2tUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0spKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuVEFTSywgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRnJvbUZvcm0oKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBkZWZhdWx0IHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7RGVmYXVsdFByaW9yaXR5fSddYCk7XHJcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwidGFzay1lZGl0LWZvcm1cIiwgXCJFZGl0IFRhc2tcIiwgXCJmb3JtLWJvZHlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKE9yZ2FuaXplcnMuVEFTSykpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkVkaXRcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRUYXNrRnJvbUZvcm0oY3VycmVudFRhc2spO1xyXG4gICAgICAgIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNvcnRJbmNvbXBsZXRlVGFza3MoKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gRmlsbCB0aGUgZm9ybSBmaWVsZHMgd2l0aCBjdXJyZW50IGluZm9ybWF0aW9uXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWUgPSBjdXJyZW50VGFzay5nZXRUaXRsZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldER1ZURhdGUoKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcmlvcml0eVxyXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPSdwcmlvcml0eSddW3ZhbHVlPScke2N1cnJlbnRUYXNrLmdldFByaW9yaXR5KCl9J11gKTtcclxuICAgIHByaW9yaXR5QnRuLmNoZWNrZWQgPSB0cnVlO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlU3RlcEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJzdGVwLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtZm9ybS1ib2R5XCIsIFwiTmV3IFN0ZXBcIiwgXCJmb3JtLWJvZHlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJDcmVhdGVcIiwgZm9ybSwgY3JlYXRlU3RlcEZyb21Gb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGVkaXRpbmcgYSBzdGVwICovXHJcbmZ1bmN0aW9uIHJlbmRlckVkaXRTdGVwRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgZWRpdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IHN0ZXBUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwic3RlcC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKTtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwic3RlcC1lZGl0LWZvcm1cIiwgXCJFZGl0IFN0ZXBcIiwgXCJmb3JtLWJvZHlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBlZGl0U3RlcEZyb21Gb3JtKGN1cnJlbnRTdGVwKTtcclxuICAgICAgICBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbihjdXJyZW50U3RlcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlID0gY3VycmVudFN0ZXAuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjb25maXJtaW5nIG9yZ2FuaXplciBkZWxldGlvbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uLCBvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgXCIgKyBvcmdhbml6ZXJUeXBlICsgXCI/XCIpLCBcImRlbGV0ZS1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoXCJPcmdhbml6ZXJcIiwgXCJEZWxldGVcIiwgZm9ybSwgZGVsZXRlRnVuY3Rpb24pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZGVsZXRpbmcgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKGdldFByb2plY3RzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdENhcmQoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24sIE9yZ2FuaXplcnMuUFJPSkVDVCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZGVsZXRpbmcgYSB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCk7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MoY3VycmVudFRhc2spO1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICBkZWxldGVUYXNrQ2FyZChjdXJyZW50VGFzayk7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayhudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uLCBPcmdhbml6ZXJzLlRBU0spO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGRlbGV0aW5nIGEgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVTdGVwRm9ybSgpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gY3VycmVudFRhc2suZ2V0Q3VycmVudFN0ZXAoKTtcclxuICAgICAgICBjdXJyZW50VGFzay5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKGN1cnJlbnRTdGVwKTtcclxuICAgICAgICBkZWxldGVTdGVwQ2FyZChjdXJyZW50U3RlcCk7XHJcbiAgICAgICAgY3VycmVudFRhc2suc2V0Q3VycmVudFN0ZXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbiwgT3JnYW5pemVycy5TVEVQKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjaGFuZ2luZyBwcm9qZWN0IGNvbG91ciAqL1xyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDb2xvdXJcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdFBhZ2VDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvdXJcclxuICAgIGNvbnN0IGNvbG91ckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvdXItcmFkaW8tYnRuW2lkXj1cImNvbG91ci1cIl1baWQkPVwiJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbG91cigpLnRvTG93ZXJDYXNlKCl9XCJdYCk7XHJcbiAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlRm9ybU1vZGFsLCByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgcmVuZGVyRWRpdFByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyRWRpdFRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRWRpdFN0ZXBGb3JtLCByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSwgcmVuZGVyRGVsZXRlVGFza0Zvcm0sIHJlbmRlckRlbGV0ZVN0ZXBGb3JtLCByZW5kZXJDb2xvdXJQaWNrZXJGb3JtIH0iLCJpbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgQ29sb3VycyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvY29sb3Vycy5qc1wiO1xyXG5cclxuLyogQWRkIHRoZSBkZXNpZ25hdGVkIGxlZ2VuZCBhbmQgZmllbGRzZXQgdG8gYSBjb250YWluZXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCkge1xyXG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcmlvcml0eSBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmZvckVhY2gocHJpb3JpdHlWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgcHJpb3JpdHlWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkY29udGFpbmVyXHJcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1maWVsZFwiKTtcclxuXHJcbiAgICAvLyBMZWdlbmRcclxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSk7XHJcbiAgICBjb25zdCBmaWVsZCA9IGdlbmVyYXRlUmFkaW9CdXR0b25zKGxlZ2VuZCwgZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcm9qZWN0IGNvbG91ciBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ29sb3VycykuZm9yRWFjaChjb2xvdXJWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbG91ciBrZXlcclxuICAgICAgICAgICAgY29uc3QgY29sb3VyS2V5ID0gT2JqZWN0LmtleXMoQ29sb3VycykuZmluZChrZXkgPT4gQ29sb3Vyc1trZXldID09PSBjb2xvdXJWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBcImNvbG91ci1cIiArIGNvbG91clZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG5cIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwiY29sb3VyXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG4tbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb2xvdXJLZXk7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRzZXRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDb2xvdXI6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zLCBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucyB9IiwiLyogQ3JlYXRlIGEgbGFiZWwgZm9yIGEgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmb3JtRmllbGQubGFiZWxUZXh0O1xyXG4gICAgZmllbGRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwuZm9yID0gZm9ybUZpZWxkLmlkO1xyXG5cclxuICAgIHJldHVybiBmaWVsZExhYmVsO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0aXRsZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIC8vIElucHV0XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGRlc2NyaXB0aW9uIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZm9ybUZpZWxkLmlucHV0VHlwZSk7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufSAgIFxyXG5cclxuLyogQ3JlYXRlIGEgZGF0ZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IGEgc2V0IG9mIHRleHQgZmllbGRzICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGV4dEZpZWxkcyhmaWVsZHMsIHBhcmVudCkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZm9ybUZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcInRpdGxlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkZXNjXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCB9IGZyb20gXCIuL3Rhc2tzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIHNldFN0ZXBDYXJkQ29tcGxldGVkIH0gZnJvbSBcIi4vc3RlcHNDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgfSBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyLCBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIsIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvcHJvamVjdEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIGluZm8gZm9yIGEgc2VsZWN0ZWQgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGhlYWRlciBkaXNwbGF5aW5nIHByb2plY3QgaW5mbyBhbmQgYWN0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkge1xyXG4gICAgICAgIC8qIERpc3BsYXkgcHJvamVjdCBkZXRhaWxzICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItdGl0bGVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlckluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiQ3JlYXRlIFRhc2sgQnV0dG9uXCIsIHRpdGxlOiBcIkFkZCBOZXcgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdENyZWF0ZVRhc2tCdXR0b25MaXN0ZW5lcihwcm9qZWN0KTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DT0xPVVJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIkNvbG91ciBQcm9qZWN0IEJ1dHRvblwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyKHByb2plY3QpO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1wcm9qZWN0XCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiRWRpdCBQcm9qZWN0IEJ1dHRvblwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiRGVsZXRlIFByb2plY3QgQnV0dG9uXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhwcm9qZWN0QnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGxpc3Qgb2YgdGFza3MgYW5kIHRoZWlyIHN0ZXBzICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgLy8gSW5jb21wbGV0ZSB0YXNrcyBzZWN0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHRhc2tTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0YXNrU2VjdGlvbkRpdmlkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCJcclxuICAgICAgICB0YXNrU2VjdGlvbkRpdmlkZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3NMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIiwgXCJpbmNvbXBsZXRlLXRhc2stbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgaW5jb21wbGV0ZSB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgZ2VuZXJhdGVUYXNrQ2FyZHMocHJvamVjdC5nZXRJbmNvbXBsZXRlVGFza3MoKSwgaW5jb21wbGV0ZVRhc2tzTGlzdCk7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5jb21wbGV0ZVRhc2tzTGlzdCk7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRlZCB0YXNrcyBzZWN0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWQgVGFza3NcIlxyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgY29tcGxldGVkIHRhc2tzXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkVGFza3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIsIFwiY29tcGxldGVkLXRhc2stbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgY29tcGxldGVkIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIGdlbmVyYXRlVGFza0NhcmRzKHByb2plY3QuZ2V0Q29tcGxldGVkVGFza3MoKSwgY29tcGxldGVkVGFza3NMaXN0KTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0xpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBCb2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSB2aXN1YWwgc3RhdHVzIG9mIG5ld2x5IGFkZGVkIGNhcmRzXHJcbiAgICB1cGRhdGVDb21wbGV0aW9uU3RhdHVzKHByb2plY3QpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiBjYXJkcyBvbiB0aGUgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMocHJvamVjdCkge1xyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyB0aGUgY29tcGxldGVkIHN0ZXBzIG9mIGluY29tcGxldGUgdGFza3MgYXMgY29tcGxldGVkXHJcbiAgICBwcm9qZWN0LmdldEluY29tcGxldGVUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgdGFzay5nZXRDb21wbGV0ZWRTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgICAgICAgICBzZXRTdGVwQ2FyZENvbXBsZXRlZChzdGVwQ2FyZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyB0aGUgY29tcGxldGUgdGFza3MgYXMgY29tcGxldGVkXHJcbiAgICBwcm9qZWN0LmdldENvbXBsZXRlZFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgICAgIHNldFRhc2tDYXJkQ29tcGxldGVkKHRhc2tDYXJkKTtcclxuXHJcbiAgICAgICAgLy8gVmlzdWFsbHkgbWFya2luZyB0aGVpciBjb21wbGV0ZWQgc3RlcHMgYXMgY29tcGxldGVkXHJcbiAgICAgICAgdGFzay5nZXRDb21wbGV0ZWRTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgICAgICAgICBzZXRTdGVwQ2FyZENvbXBsZXRlZChzdGVwQ2FyZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgcGFnZSBpZiBwcm9qZWN0IGluZm9ybWF0aW9uIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdFBhZ2VJbmZvcm1hdGlvbihwcm9qZWN0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLXRpdGxlXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgcHJvamVjdCBwYWdlIGlmIHByb2plY3QgY29sb3VyIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdFBhZ2VDb2xvdXIocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgcHJvamVjdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uIH0iLCJpbXBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMsIGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3N0ZXBBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2Ygc3RlcHMgZm9yIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVN0ZXBDYXJkcyhzdGVwcywgcGFyZW50KSB7XHJcbiAgICAvKiBDcmVhdGUgYSBzdGVwIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3RlcENhcmQoc3RlcCkge1xyXG5cclxuICAgICAgICAvLyBTdGVwIGJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHN0ZXBCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXN0ZXBcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJFZGl0IFN0ZXAgQnV0dG9uXCIsIHRpdGxlOiBcIkVkaXQgU3RlcFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcEVkaXRCdXR0b25MaXN0ZW5lcihzdGVwKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJEZWxldGUgU3RlcCBCdXR0b25cIiwgdGl0bGU6IFwiRGVsZXRlIFN0ZXBcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lcihzdGVwKVxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInN0ZXAtY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgc3RlcC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHN0ZXAuZ2V0VGFza0lEKCkpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiLCBzdGVwLmdldFN0ZXBJRCgpKTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBpbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RlcEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRpb24gY2hlY2tib3hcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGlvbi1jaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBidXR0b25zIGZvciBzdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwSW5mbyk7XHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEFjdGlvbkJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RlcEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFsbCBzdGVwcyB0byB0aGUgbGlzdFxyXG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAvLyBNYXJrIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcENhcmQoc3RlcCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHN0ZXAgY2FyZCBpZiBzdGVwIGluZm9ybWF0aW9uIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbihzdGVwKSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgLy8gRWRpdGluZyBpbmZvcm1hdGlvblxyXG4gICAgY29uc3Qgc3RlcENhcmRUaXRsZSA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgc3RlcENhcmRUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXBDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGNvbXBsZXRlXHJcbiAgICBzdGVwQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEaXNhYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBzdGVwQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgc3RlcCBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGluY29tcGxldGUgKi9cclxuZnVuY3Rpb24gc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXBDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGluY29tcGxldGVcclxuICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBSZS1lbmFibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgZW5hYmxlQWN0aW9uQnV0dG9ucyhbZWRpdEJ1dHRvbl0pO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBzdGVwcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVN0ZXBDYXJkKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN0ZXAtY2FyZFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICBzdGVwQ2FyZC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMsIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBzZXRTdGVwQ2FyZENvbXBsZXRlZCwgc2V0U3RlcENhcmRJbmNvbXBsZXRlLCBkZWxldGVTdGVwQ2FyZCB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMgfSBmcm9tIFwiLi9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zLCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgfSBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9jaGVja2JveExpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyLCB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIsIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvdGFza0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbGlzdCBvZiB0YXNrcyBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0NhcmRzKHRhc2tzLCBwYXJlbnQpIHtcclxuICAgIC8qIENyZWF0ZSBhIHRhc2sgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrKHRhc2spIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrYm94IGFuZCBkZXRhaWxzIG9mIHRoZSB0YXNrICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSGVhZGVyKHRhc2spIHtcclxuICAgICAgICAgICAgLyogRGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGFzayAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tEZXRhaWxzKHRhc2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1cIiArIHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIsIHByaW9yaXR5Q2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEdWUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCkgfHwgXCJObyBEdWUgRGF0ZVwiOztcclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tEZXRhaWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wbGV0aW9uIGNoZWNrYm94XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGlvbi1jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lcihjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJDcmVhdGUgU3RlcCBCdXR0b25cIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyKHRhc2spXHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXRhc2tcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJFZGl0IFRhc2sgQnV0dG9uXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0VkaXRCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJEZWxldGUgVGFzayBCdXR0b25cIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInRhc2stY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHRhc2tzIHRvIHRoZSBsaXN0XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCB0YXNrXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgYWxsIGluY29tcGxldGUgc3RlcHMgZm9yIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtbGlzdFwiLCBcImluY29tcGxldGUtc3RlcHMtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBhbGwgY29tcGxldGVkIHN0ZXBzIGZvciBjdXJyZW50IHRhc2tcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy1saXN0XCIsIFwiY29tcGxldGVkLXN0ZXBzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBzdGVwIGxpc3RzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGluY29tcGxldGVTdGVwc0xpc3QpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZWRTdGVwc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldEluY29tcGxldGVTdGVwcygpLCBpbmNvbXBsZXRlU3RlcHNMaXN0KTtcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldENvbXBsZXRlZFN0ZXBzKCksIGNvbXBsZXRlZFN0ZXBzTGlzdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0l0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgdGFzayBjYXJkIGlmIHRhc2sgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgLy8gR3JhYmJpbmcgaW5mb3JtYXRpb24gdG8gZWRpdFxyXG4gICAgY29uc3QgdGFza0luZm9ybWF0aW9uID0gdGFza0NhcmQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0luZm9ybWF0aW9uLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5uZXh0U2libGluZztcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0luZm9ybWF0aW9uLmxhc3RDaGlsZDtcclxuICAgIFxyXG4gICAgLy8gRWRpdGluZyBpbmZvcm1hdGlvblxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjtcclxuXHJcbiAgICAvLyBSZXBsYWNpbmcgcHJpb3JpdHkgY2xhc3NsaXN0XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBcInByaW9yaXR5LVwiICsgdGFzay5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIiwgcHJpb3JpdHlDbGFzcyk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgdGFzayBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrQ2FyZCkge1xyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBjb21wbGV0ZVxyXG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRhc2tDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIHRhc2tDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEaXNhYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IHRhc2tDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbi5uZXh0U2libGluZztcclxuICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtjcmVhdGVCdXR0b24sIGVkaXRCdXR0b25dKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBpbmNvbXBsZXRlU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBzdGVwQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzYWJsaW5nIHRoZSBjaGVja2JveCBvZiBjb21wbGV0ZWQgc3RlcHNcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBjb21wbGV0ZWRTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSB0YXNrIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFRhc2tDYXJkSW5jb21wbGV0ZSh0YXNrQ2FyZCkge1xyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBpbmNvbXBsZXRlXHJcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gUmUtZW5hYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IHRhc2tDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbi5uZXh0U2libGluZztcclxuICAgIGVuYWJsZUFjdGlvbkJ1dHRvbnMoW2NyZWF0ZUJ1dHRvbiwgZWRpdEJ1dHRvbl0pO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IHJlbWFya2luZyBhbGwgaW5jb21wbGV0ZSBzdGVwcyBhcyBpbmNvbXBsZXRlXHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSB0YXNrQ2FyZC5uZXh0U2libGluZztcclxuICAgIGZvciAobGV0IHN0ZXBDYXJkIG9mIGluY29tcGxldGVTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlLWVuYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGVuYWJsZUFjdGlvbkJ1dHRvbnMoW2VkaXRCdXR0b25dKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGluZyB0aGUgY2hlY2tib3ggb2YgY29tcGxldGVkIHN0ZXBzXHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9IHRhc2tDYXJkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgZm9yIChsZXQgc3RlcENhcmQgb2YgY29tcGxldGVkU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCB0YXNrcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2tDYXJkKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stY2FyZFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgdGFza0NhcmQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCwgc2V0VGFza0NhcmRJbmNvbXBsZXRlLCBkZWxldGVUYXNrQ2FyZCB9IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4vc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHNpZGViYXIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcihwcm9qZWN0cykge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBMb2dvXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiVE9ET1wiO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICAvLyBTZWN0aW9uIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1ZIFBST0pFQ1RTXCJcclxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaGVhZGluZ1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGxpc3RcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0cy1tZW51XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHByb2plY3RzTGlzdCk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIHNpZGViYXIgbWVudSBpdGVtICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhckl0ZW0odGl0bGUsIGljb25GdW5jdGlvbikge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBzaWRlYmFySXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGljb25GdW5jdGlvbigpKTtcclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZGViYXJJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJY29uKGljb25Db2xvdXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcInByb2plY3QtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGljb25Db2xvdXI7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIHRoZSBhbGwgcHJvamVjdHMgaWNvbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFByb2plY3RJY29uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xyXG5cclxuICAgIC8vIEljb24gaW1hZ2VcclxuICAgIGNvbnN0IGljb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpY29uSW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ljb25zL3Byb2plY3RzLnN2Z1wiO1xyXG5cclxuICAgIC8vIEFwcGVuaW5nIGVsZW1lbnRzXHJcbiAgICBwcm9qZWN0SWNvbi5hcHBlbmRDaGlsZChpY29uSW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgcHJvamVjdCBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZ2VuZXJhdGVTaWRlYmFySXRlbShwcm9qZWN0LmdldFRpdGxlKCksICgpID0+IGdlbmVyYXRlUHJvamVjdEljb24ocHJvamVjdC5nZXRDb2xvdXIoKSkpO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhbiBhbGwgcHJvamVjdHMgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGdlbmVyYXRlU2lkZWJhckl0ZW0oXCJBbGwgUHJvamVjdHNcIiwgZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbik7XHJcbiAgICBhbGxQcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWJ1dHRvblwiKTtcclxuICAgIHJldHVybiBhbGxQcm9qZWN0c0J1dHRvbjtcclxufVxyXG5cclxuLyogRGlzcGxheSBhbGwgcHJvamVjdHMgb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3RzLCBwYXJlbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFsbFByb2plY3RzQnV0dG9uKCkpO1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBZGQgYSBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gYWRkVG9TaWRlYmFyUHJvamVjdHMocHJvamVjdCkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItcHJvamVjdHMtbWVudVwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcclxuICAgIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIoZ2V0UHJvamVjdHMoKSwgbmV3UHJvamVjdEJ0bik7XHJcbn1cclxuXHJcbi8qIEVkaXQgdGhlIHRpdGxlIG9mIGEgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiBlZGl0U2lkZWJhclByb2plY3RUaXRsZShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLXByb2plY3QtYnV0dG9uW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgc2lkZWJhckl0ZW0ubGFzdENoaWxkLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG59XHJcblxyXG4vKiBFZGl0IHRoZSBjb2xvdXIgb2YgYSBzaWRlYmFyIHByb2plY3QgYnV0dG9uICovXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdENvbG91cihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLXByb2plY3QtYnV0dG9uW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtSWNvbiA9IHNpZGViYXJJdGVtLmZpcnN0Q2hpbGQ7XHJcbiAgICBzaWRlYmFySXRlbUljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGEgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMsIGFkZFRvU2lkZWJhclByb2plY3RzLCBlZGl0U2lkZWJhclByb2plY3RUaXRsZSwgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyLCByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzIH0iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9pbmRleC5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyB0aGUgYWN0aW9uIGJ1dHRvbnMgZm9yIGEgb3JnYW5pemVyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBjb25zdCBhY3Rpb25CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBhY3Rpb25CdG5zLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnRuc1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGJ1dHRvbnNcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIC8vIEJ1dHRvbiBjb250YWluZXJcclxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcImFjdGlvbi1idG5cIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTmFtZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgYWN0aW9uQnRuLnNyYyA9IGJ0bi5zcmM7XHJcbiAgICAgICAgYWN0aW9uQnRuLmFsdCA9IGJ0bi5hbHQ7XHJcbiAgICAgICAgYWN0aW9uQnRuLnRpdGxlID0gYnRuLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBCdXR0b24gYWN0aW9uXHJcbiAgICAgICAgY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIoYWN0aW9uQnV0dG9uQ29udGFpbmVyLCBidG4uZXZlbnQpXHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdG4pO1xyXG5cclxuICAgICAgICBhY3Rpb25CdG5zLmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhY3Rpb25CdG5zO1xyXG59XHJcblxyXG4vKiBEaXNhYmxlIGFuIGFjdGlvbiBidXR0b24gKi9cclxuZnVuY3Rpb24gZGlzYWJsZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBWaXN1YWxseSBzaG93IGRpc2FibGVkXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZC1hY3Rpb24tYnRuXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogRW5hYmxlIGFuIGFjdGlvbiBidXR0b24gKi9cclxuZnVuY3Rpb24gZW5hYmxlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBWaXN1YWxseSBzaG93IGVuYWJsZWRcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkLWFjdGlvbi1idG5cIik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMsIGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZGVzZXJpYWxpemVQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMsIHNldFByb2plY3RzIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcFwiO1xyXG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gXCIuL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2lkZWJhckxpc3RlbmVycyB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL21vZHVsZXMvbG9jYWxTdG9yYWdlL2luZGV4LmpzXCI7XHJcblxyXG4vLyBJbXBvcnRpbmcgbG9jYWwgc3RvcmFnZVxyXG5jb25zdCBzdG9yYWdlRGF0YSA9IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuLy8gTG9hZCBzdG9yZWQgZGF0YVxyXG5pZiAoc3RvcmFnZURhdGEgIT09IG51bGwpIHtcclxuICAgIHN0b3JhZ2VEYXRhLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfSlcclxufVxyXG4vLyBVc2UgZGVmYXVsdCBkYXRhXHJcbmVsc2Uge1xyXG4gICAgY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcclxuXHJcbiAgICAvLyAvLyBXb3JrIHByb2plY3QvdGFza3Mvc3RlcHNcclxuICAgIC8vIGNyZWF0ZVByb2plY3QoXCJXb3JrIE1lZXRpbmdzXCIsIFwiQWxsIHRoaW5ncyB3b3JrIG1lZXRpbmcgcmVsYXRlZCFcIik7XHJcblxyXG4gICAgLy8gY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIk1vbmRheSBNZWV0aW5nc1wiLCBcIkFsbCBtb25kYXkgd29yayBtZWV0aW5nc1wiLCBcIlwiLCBcIk1lZFwiKTtcclxuICAgIC8vIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJNb3JuaW5nIE1lZXRpbmdcIik7XHJcbiAgICAvLyBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMF0sIFwiQWZ0ZXJub29uIE1lZXRpbmdcIik7XHJcblxyXG4gICAgLy8gY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIlByZXNlbnRhdGlvblwiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJOb25lXCIpO1xyXG4gICAgLy8gY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzFdLCBcIkdlbmVyYXRlIEZpbmFuY2lhbCBHcmFwaHNcIik7XHJcbiAgICAvLyBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMV0sIFwiQ2hlY2sgcmVwb3J0IGRyYWZ0IGZvciB0eXBvc1wiKTtcclxuXHJcbiAgICAvLyAvLyBTY2hvb2wgcHJvamVjdC90YXNrcy9zdGVwc1xyXG4gICAgLy8gY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiLCBcIkFsbCB0aGluZ3Mgc2Nob29sIHJlbGF0ZWQhXCIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZVRhc2soZ2V0UHJvamVjdHMoKVsyXSwgXCJQcmVzZW50YXRpb25zXCIsIFwiQWxsIHdvcmsgcHJlc2VudGF0aW9uc1wiLCBcIlwiLCBcIkhpZ2hcIik7XHJcbiAgICAvLyBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMl0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMF0sIFwiSG9tZXdvcmtcIik7XHJcbn1cclxuXHJcbi8vIExvYWQgdGhlIGluaXRpYWwgcGFnZVxyXG5kaXNwbGF5LnJlbmRlclNpZGViYXIoZ2V0UHJvamVjdHMoKSk7XHJcbmRpc3BsYXkuZm9ybXMuZ2VuZXJhdGVGb3JtTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKTtcclxuZGlzcGxheS5yZW5kZXJBbGxQcm9qZWN0c1BhZ2UoZ2V0UHJvamVjdHMoKSk7XHJcbmNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMoZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9