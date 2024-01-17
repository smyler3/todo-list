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

.create-edit-form,
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    /* Common colours */\r\n    --white: #ffffff;\r\n    --black: #000000;\r\n\r\n    /* General page styling */\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n    --colour-picker-border: rgb(118, 118, 118);\r\n\r\n    /* Button styling */\r\n    --action-btn-background: var(--white);\r\n    --action-btn-hover-background: rgba(0, 0, 0, 0.1);\r\n    --submit-btn-background: rgb(0, 89, 255);\r\n\r\n    /* Shadows */\r\n    --dark-shadow: #00000040;\r\n    --light-shadow: #00000025;\r\n    --faint-shadow: #00000010;\r\n\r\n    /* Task priority indicators */\r\n    --input-highlight: #006eff;\r\n    --priority-high-text: #ae2e24;\r\n    --priority-high-background: #ffeceb;\r\n    --priority-med-text: #5e4db2;\r\n    --priority-med-background: #f3f0ff;\r\n    --priority-low-text: #0055cc;\r\n    --priority-low-background: #e9f2ff;\r\n    --priority-none-text: var(--black);\r\n    --priority-none-background: #f0f1f4;\r\n\r\n    /* Completed status indicators */\r\n    --completed-card-text: #6a6a6a;\r\n    --completed-card-background: rgb(210, 210, 210);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n    background-color: #ffffff00;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--action-btn-hover-background);\r\n}\r\n\r\n.disabled-action-btn {\r\n    cursor: default;\r\n    background-color: var(--completed-card-background)\r\n}\r\n.disabled-action-btn:hover {\r\n    background-color: var(--completed-card-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    grid: 1fr 5fr / 1fr 4fr;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -1 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n    background-color: var(--project-icon);\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid var(--black);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 2rem;\r\n}\r\n\r\n.create-project-header-btn > img {\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid #000000;\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid var(--input-highlight);\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: var(--dark-shadow);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.create-edit-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: var(--white);\r\n    background-color: var(--submit-btn-background);\r\n}\r\n\r\n.cancel-btn {\r\n    color: var(--submit-btn-background);\r\n    background-color: var(--white);\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid var(--submit-btn-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid var(--colour-picker-border);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn-label {\r\n    text-align: center;\r\n    color: var(--black);\r\n    width: 100%;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n    overflow-y: auto;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid var(--black);\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: var(--black);\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: var(--black);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.steps-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.task-list-container {\r\n    gap: 0.2rem;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.task-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.step-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: var(--priority-high-text);\r\n    background-color: var(--priority-high-background);\r\n}\r\n\r\n.priority-med {\r\n    color: var(--priority-med-text);\r\n    background-color: var(--priority-med-background);\r\n}\r\n\r\n.priority-low {\r\n    color: var(--priority-low-text);\r\n    background-color: var(--priority-low-background);\r\n}\r\n\r\n.priority-none {\r\n    color: var(--priority-none-text);\r\n    background-color: var(--priority-none-background);\r\n}\r\n\r\n.completed {\r\n    background-color: var(--completed-card-background);\r\n    color: var(--completed-card-text);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/common/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js":
/*!*********************************************************************************************!*\
  !*** ./src/common/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectButtonListener: () => (/* binding */ createProjectButtonListener)
/* harmony export */ });
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../display/display */ "./src/display/display.js");


/* Create the create project button listener */
function createProjectButtonListener() {
    _display_display__WEBPACK_IMPORTED_MODULE_0__.forms.renderCreateProjectForm();
}



/***/ }),

/***/ "./src/common/eventListeners/actionButtonListeners/index.js":
/*!******************************************************************!*\
  !*** ./src/common/eventListeners/actionButtonListeners/index.js ***!
  \******************************************************************/
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

/***/ "./src/common/eventListeners/actionButtonListeners/projectActionButtonListeners.js":
/*!*****************************************************************************************!*\
  !*** ./src/common/eventListeners/actionButtonListeners/projectActionButtonListeners.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectColourButtonListener: () => (/* binding */ projectColourButtonListener),
/* harmony export */   projectCreateTaskButtonListener: () => (/* binding */ projectCreateTaskButtonListener),
/* harmony export */   projectDeleteButtonListener: () => (/* binding */ projectDeleteButtonListener),
/* harmony export */   projectEditButtonListener: () => (/* binding */ projectEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../display/forms/formGenerator.js */ "./src/display/forms/formGenerator.js");



/* Create the project create task button listener */
function projectCreateTaskButtonListener(project) {
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateTaskForm(project);
}

/* Create the edit project colour button listener */
function projectColourButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderColourPickerForm(); 
}

/* Create the edit projetc button listener */
function projectEditButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditProjectForm();
}

/* Create the delete project button listener */
function projectDeleteButtonListener(project) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteProjectForm();
}



/***/ }),

/***/ "./src/common/eventListeners/actionButtonListeners/stepActionButtonListeners.js":
/*!**************************************************************************************!*\
  !*** ./src/common/eventListeners/actionButtonListeners/stepActionButtonListeners.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stepDeleteButtonListener: () => (/* binding */ stepDeleteButtonListener),
/* harmony export */   stepEditButtonListener: () => (/* binding */ stepEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../display/forms/formGenerator.js */ "./src/display/forms/formGenerator.js");
/* harmony import */ var _utility_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/index.js */ "./src/common/eventListeners/utility/index.js");




/* Create the edit step button listener */
function stepEditButtonListener(step) {
    (0,_utility_index_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditStepForm();
}

/* Create the delete step button listener */
function stepDeleteButtonListener(step) {
    (0,_utility_index_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentTaskFromID)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getIncompleteTasks(), String(step.getTaskID()));
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().getCurrentTask().setCurrentStep(step);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteStepForm();
}



/***/ }),

/***/ "./src/common/eventListeners/actionButtonListeners/taskActionButtonListeners.js":
/*!**************************************************************************************!*\
  !*** ./src/common/eventListeners/actionButtonListeners/taskActionButtonListeners.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskCreateStepButtonListener: () => (/* binding */ taskCreateStepButtonListener),
/* harmony export */   taskDeleteButtonListener: () => (/* binding */ taskDeleteButtonListener),
/* harmony export */   taskEditButtonListener: () => (/* binding */ taskEditButtonListener)
/* harmony export */ });
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../display/forms/formGenerator.js */ "./src/display/forms/formGenerator.js");



/* Create the task create step button listener */
function taskCreateStepButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderCreateStepForm();
}

/* Create the edit task button listener */
function taskEditButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderEditTaskForm();
}

/* Create the delete task button listener */
function taskDeleteButtonListener(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().setCurrentTask(task);
    _display_forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_1__.renderDeleteTaskForm();
}



/***/ }),

/***/ "./src/common/eventListeners/checkboxListeners.js":
/*!********************************************************!*\
  !*** ./src/common/eventListeners/checkboxListeners.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStepStatusListener: () => (/* binding */ createStepStatusListener),
/* harmony export */   createTaskStatusListener: () => (/* binding */ createTaskStatusListener)
/* harmony export */ });
/* harmony import */ var _models_enums_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/organizers/task.js */ "./src/models/organizers/task.js");
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../display/display.js */ "./src/display/display.js");
/* harmony import */ var _display_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../display/projectPage/stepsCardHandler.js */ "./src/display/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility */ "./src/common/eventListeners/utility/index.js");







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
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
}

/* Handles marking a task as incomplete */
function setTaskStatusIncompleteHandler(task) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromCompletedTasks(task);
    // Moves the card wrapper to the incomplete tasks section 
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
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
    (0,_display_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__.setStepCardCompleted)(stepCard);

    // Moves the card to the completed steps list
    const parent = stepCard.parentElement;
    parent.nextSibling.appendChild(stepCard);
}

/* Handles marking a step as incomplete */
function setStepStatusIncompleteHandler(step) {
    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromCompletedSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    (0,_display_projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_4__.setStepCardIncomplete)(stepCard);

    // Moves the card to the incomplete steps list
    const parent = stepCard.parentElement;
    parent.previousSibling.appendChild(stepCard);
}

/* Handles initialization of the event listener for marking the completion status of steps */
function createStepStatusListener(checkbox) {
    checkbox.addEventListener("change", () => stepStatusToggleListener(checkbox));
}



/***/ }),

/***/ "./src/common/eventListeners/formButtonListeners.js":
/*!**********************************************************!*\
  !*** ./src/common/eventListeners/formButtonListeners.js ***!
  \**********************************************************/
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

/***/ "./src/common/eventListeners/index.js":
/*!********************************************!*\
  !*** ./src/common/eventListeners/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectPageNavigationListeners: () => (/* reexport safe */ _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageNavigationListeners),
/* harmony export */   createSidebarListeners: () => (/* reexport safe */ _sidebarListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebarListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarListeners.js */ "./src/common/eventListeners/sidebarListeners.js");
/* harmony import */ var _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNavigationListeners.js */ "./src/common/eventListeners/projectNavigationListeners.js");





/***/ }),

/***/ "./src/common/eventListeners/projectNavigationListeners.js":
/*!*****************************************************************!*\
  !*** ./src/common/eventListeners/projectNavigationListeners.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectNavigationListener: () => (/* binding */ addProjectNavigationListener),
/* harmony export */   createProjectPageNavigationListeners: () => (/* binding */ createProjectPageNavigationListeners)
/* harmony export */ });
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../display/display.js */ "./src/display/display.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");



/* Make a group of project navigation DOM elements link to their project page */
function createProjectPageNavigationListeners(projects, className) {
    const projectNavElements = document.querySelectorAll(className);

    // Link each project navigation element to a project page
    projectNavElements.forEach(element => {
        projects.forEach(project => {
            if (String(project.getProjectID()) === element.getAttribute("data-project-id")) {
                element.addEventListener("click", () => {
                    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
                    (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project);
                    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectPage)(project);
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
                (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
                (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project);
                (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectPage)(project);
                return;
            })
        }
    })
}



/***/ }),

/***/ "./src/common/eventListeners/sidebarListeners.js":
/*!*******************************************************!*\
  !*** ./src/common/eventListeners/sidebarListeners.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSidebarListeners)
/* harmony export */ });
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../display/display.js */ "./src/display/display.js");
/* harmony import */ var _projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNavigationListeners.js */ "./src/common/eventListeners/projectNavigationListeners.js");



/* Make the all projects sidebar button link to the all projects page */
function createAllProjectsButtonListener(projects) {
    const allProjectsButton = document.querySelector(".all-projects-button");

    allProjectsButton.addEventListener("click", () => {
        (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
        (0,_display_display_js__WEBPACK_IMPORTED_MODULE_0__.renderAllProjectsPage)(projects);
    })
}

/* Give all sidebar project buttons functionality */
function createSidebarListeners(projects) {
    createAllProjectsButtonListener(projects);
    (0,_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageNavigationListeners)(projects, ".sidebar-project-button");
}

/***/ }),

/***/ "./src/common/eventListeners/utility/index.js":
/*!****************************************************!*\
  !*** ./src/common/eventListeners/utility/index.js ***!
  \****************************************************/
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

/***/ "./src/common/localStorage/index.js":
/*!******************************************!*\
  !*** ./src/common/localStorage/index.js ***!
  \******************************************/
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

/***/ "./src/display/allProjectsPage/index.js":
/*!**********************************************!*\
  !*** ./src/display/allProjectsPage/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProjectCard: () => (/* binding */ deleteProjectCard),
/* harmony export */   editProjectCardColour: () => (/* binding */ editProjectCardColour),
/* harmony export */   editProjectCardInformation: () => (/* binding */ editProjectCardInformation),
/* harmony export */   renderAllProjectsPage: () => (/* binding */ renderAllProjectsPage)
/* harmony export */ });
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/display/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _common_eventListeners_actionButtonListeners_allProjectsActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js */ "./src/common/eventListeners/actionButtonListeners/allProjectsActionButtonListeners.js");
/* harmony import */ var _common_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/eventListeners/projectNavigationListeners.js */ "./src/common/eventListeners/projectNavigationListeners.js");
/* harmony import */ var _utility_projectCardButtons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/projectCardButtons.js */ "./src/display/utility/projectCardButtons.js");






/* Create the page showing all of the current projects */
function renderAllProjectsPage(projects) {
    /* Create the content for the header section */
    function generateHeader() {
        // All projects buttons to be created
        const createProjectButton = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.CREATE, "create-project-header-btn"], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Project",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_allProjectsActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_2__.createProjectButtonListener)();
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
            projectCard.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__.generateActionButtons)((0,_utility_projectCardButtons_js__WEBPACK_IMPORTED_MODULE_4__.generateProjectCardButtons)(project)));
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
    (0,_common_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_3__.createProjectPageNavigationListeners)(projects, ".project-card");
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

/***/ "./src/display/display.js":
/*!********************************!*\
  !*** ./src/display/display.js ***!
  \********************************/
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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/display/sidebar/index.js");
/* harmony import */ var _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebarProjectsGenerator.js */ "./src/display/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage */ "./src/display/projectPage/index.js");
/* harmony import */ var _allProjectsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allProjectsPage */ "./src/display/allProjectsPage/index.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/formGenerator.js */ "./src/display/forms/formGenerator.js");

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

/***/ "./src/display/forms/formGenerator.js":
/*!********************************************!*\
  !*** ./src/display/forms/formGenerator.js ***!
  \********************************************/
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
/* harmony import */ var _textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator.js */ "./src/display/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator.js */ "./src/display/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer.js */ "./src/models/enums/organizer.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/task.js */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/organizers/step.js */ "./src/models/organizers/step.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../display.js */ "./src/display/display.js");
/* harmony import */ var _projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projectPage/index.js */ "./src/display/projectPage/index.js");
/* harmony import */ var _allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../allProjectsPage/index.js */ "./src/display/allProjectsPage/index.js");
/* harmony import */ var _sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebarProjectsGenerator.js */ "./src/display/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _projectPage_tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projectPage/tasksCardHandler.js */ "./src/display/projectPage/tasksCardHandler.js");
/* harmony import */ var _projectPage_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projectPage/stepsCardHandler.js */ "./src/display/projectPage/stepsCardHandler.js");
/* harmony import */ var _models_enums_priority_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _common_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/eventListeners/formButtonListeners.js */ "./src/common/eventListeners/formButtonListeners.js");















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

/* Create the basic create/edit form layout */
function generateCreateEditFormBase(formFields, formID, formTitle, formType, formClass, organizerType, submitFunction, radioButtons = null) {
    const form = generateFormBase(formID, formTitle, formClass);

    // Appending elements
    (0,_textFieldGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(formFields, form);
    if (radioButtons !== null) {
        form.appendChild(radioButtons);
    }
    addFormButtons(organizerType, formType, form, submitFunction);

    renderForm(form);
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
    (0,_common_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__.createFormSubmitButtonListener)(submitBtn, submitFunction, modal);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id =  btnIDPrefix + "-cancel-btn";
    cancelBtn.classList.add("form-btn", "cancel-btn");

    // Cancel event
    (0,_common_eventListeners_formButtonListeners_js__WEBPACK_IMPORTED_MODULE_13__.createFormCancelButtonListener)(cancelBtn, modal)

    // Append elements
    parent.appendChild(submitBtn);
    parent.appendChild(cancelBtn);
}

/* Create the form base for edit and create step forms */
function generateBaseProjectForm(formID, formTitle, formType, submitFunction) {
    // All form fields for projects
    const projectTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "project-title", classes: ["title-input"], maxLength: 20},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "project-desc", classes: ["desc-input"] , maxLength: 80, rows: 40},
    ]
    const formClass = "create-edit-form";
    const organizerType = _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT;

    generateCreateEditFormBase(projectTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction);
}

/* Create the form for creating a new project */
function renderCreateProjectForm() {
    generateBaseProjectForm("project-creation-form", "New Project", "Create", _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);
}

/* Create the form for editing a project */
function renderEditProjectForm() {
    const currentProject = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)();

    // Submit function for editing a project
    const editProjectFunction = () => {
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.editProjectFromForm)(currentProject);
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.editSidebarProjectTitle)(currentProject);
        // Checking which page is currently displayed
        if (document.querySelector(".project-header-container") !== null) {
            (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editProjectPageInformation)(currentProject);
        }
        else {
            (0,_allProjectsPage_index_js__WEBPACK_IMPORTED_MODULE_8__.editProjectCardInformation)(currentProject);
        }
    }

    generateBaseProjectForm("project-edit-form", "Edit Project", "Edit", editProjectFunction);

    // Fill the form fields with current information
    document.querySelector("#project-title").placeholder = document.querySelector("#project-title").value = currentProject.getTitle();
    document.querySelector("#project-desc").placeholder = document.querySelector("#project-desc").value = currentProject.getDescription();
}

/* Create the form base for edit and create step forms */
function generateBaseTaskForm(formID, formTitle, formType, submitFunction) {
    // All form fields for tasks
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]
    const formClass = "create-edit-form";
    const organizerType = _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK;
    const radioButtons = _radioFieldGenerator_js__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK);

    generateCreateEditFormBase(taskTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction, radioButtons);
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // Submit function for creating a task
    const createTaskFunction = () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.createTaskFromForm)();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
    }

    generateBaseTaskForm("task-creation-form", "New Task", "Create", createTaskFunction);

    // Highlight the default priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${_models_enums_priority_js__WEBPACK_IMPORTED_MODULE_12__.DefaultPriority}']`);
    priorityBtn.checked = true;
}

/* Create the form for editing a task */
function renderEditTaskForm() {
    const currentTask = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask();

    // Submit function for editing a task
    const editTaskFunction = () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.editTaskFromForm)(currentTask);
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editTaskCardInformation)(currentTask);
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().sortIncompleteTasks();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
    }

    generateBaseTaskForm("task-edit-form", "Edit Task", "Edit", editTaskFunction);

    // Fill the form fields with current information
    document.querySelector("#task-title").placeholder = document.querySelector("#task-title").value = currentTask.getTitle();
    document.querySelector("#task-desc").placeholder = document.querySelector("#task-desc").value = currentTask.getDescription();
    document.querySelector("#task-date").value = currentTask.getDueDate();

    // Highlight the currently selected priority
    const priorityBtn = document.querySelector(`input[name='priority'][value='${currentTask.getPriority()}']`);
    priorityBtn.checked = true;
}

/* Create the form base for edit and create step forms */
function generateBaseStepForm(formID, formTitle, formType, submitFunction) {
        // All form fields for steps
        const stepTextFormFields = [
            {labelText: "Title:", inputName: "title", inputType: "text", id: "step-title", classes: ["title-input"], maxLength: 40},
        ]
        const formClass = "create-edit-form";
        const organizerType = _models_enums_organizer_js__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP;

        generateCreateEditFormBase(stepTextFormFields, formID, formTitle, formType, formClass, organizerType, submitFunction);
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    generateBaseStepForm("step-creation-form", "New Step", "Create", _models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.createStepFromForm);
}

/* Create the form for editing a step */
function renderEditStepForm() {
    const currentStep = (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask().getCurrentStep();

    // Submit function for editing a step
    const editStepFunction = () => {
        (0,_models_organizers_step_js__WEBPACK_IMPORTED_MODULE_5__.editStepFromForm)(currentStep);
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editStepCardInformation)(currentStep);
    }

    generateBaseStepForm("step-edit-form", "Edit Step", "Edit", editStepFunction);

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

/***/ "./src/display/forms/radioFieldGenerator.js":
/*!**************************************************!*\
  !*** ./src/display/forms/radioFieldGenerator.js ***!
  \**************************************************/
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

/***/ "./src/display/forms/textFieldGenerator.js":
/*!*************************************************!*\
  !*** ./src/display/forms/textFieldGenerator.js ***!
  \*************************************************/
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

/***/ "./src/display/projectPage/index.js":
/*!******************************************!*\
  !*** ./src/display/projectPage/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectPageColour: () => (/* binding */ editProjectPageColour),
/* harmony export */   editProjectPageInformation: () => (/* binding */ editProjectPageInformation),
/* harmony export */   editStepCardInformation: () => (/* reexport safe */ _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__.editStepCardInformation),
/* harmony export */   editTaskCardInformation: () => (/* reexport safe */ _tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__.editTaskCardInformation),
/* harmony export */   renderProjectPage: () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksCardHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksCardHandler.js */ "./src/display/projectPage/tasksCardHandler.js");
/* harmony import */ var _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepsCardHandler.js */ "./src/display/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/display/utility/actionButtons.js");
/* harmony import */ var _utility_projectCardButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/projectCardButtons.js */ "./src/display/utility/projectCardButtons.js");





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

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());
        projectHeader.style.backgroundColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.generateActionButtons)((0,_utility_projectCardButtons_js__WEBPACK_IMPORTED_MODULE_3__.generateProjectCardButtons)(project)));

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

/***/ "./src/display/projectPage/stepsCardHandler.js":
/*!*****************************************************!*\
  !*** ./src/display/projectPage/stepsCardHandler.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteStepCard: () => (/* binding */ deleteStepCard),
/* harmony export */   editStepCardInformation: () => (/* binding */ editStepCardInformation),
/* harmony export */   generateStepCards: () => (/* binding */ generateStepCards),
/* harmony export */   setStepCardCompleted: () => (/* binding */ setStepCardCompleted),
/* harmony export */   setStepCardIncomplete: () => (/* binding */ setStepCardIncomplete)
/* harmony export */ });
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/display/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _common_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/eventListeners/checkboxListeners.js */ "./src/common/eventListeners/checkboxListeners.js");
/* harmony import */ var _common_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/eventListeners/actionButtonListeners/stepActionButtonListeners.js */ "./src/common/eventListeners/actionButtonListeners/stepActionButtonListeners.js");






/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step buttons to be created
        const stepButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-step"], src: "../src/assets/icons/edit.svg", alt: "Edit Step Button", title: "Edit Step",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.stepEditButtonListener)(step);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Step Button", title: "Delete Step",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_4__.stepDeleteButtonListener)(step)
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

        (0,_common_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_3__.createStepStatusListener)(completedCheckbox);

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

/***/ "./src/display/projectPage/tasksCardHandler.js":
/*!*****************************************************!*\
  !*** ./src/display/projectPage/tasksCardHandler.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTaskCard: () => (/* binding */ deleteTaskCard),
/* harmony export */   editTaskCardInformation: () => (/* binding */ editTaskCardInformation),
/* harmony export */   generateTaskCards: () => (/* binding */ generateTaskCards),
/* harmony export */   setTaskCardCompleted: () => (/* binding */ setTaskCardCompleted),
/* harmony export */   setTaskCardIncomplete: () => (/* binding */ setTaskCardIncomplete)
/* harmony export */ });
/* harmony import */ var _stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepsCardHandler.js */ "./src/display/projectPage/stepsCardHandler.js");
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/display/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _common_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/eventListeners/checkboxListeners.js */ "./src/common/eventListeners/checkboxListeners.js");
/* harmony import */ var _common_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/eventListeners/actionButtonListeners/taskActionButtonListeners.js */ "./src/common/eventListeners/actionButtonListeners/taskActionButtonListeners.js");







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

            (0,_common_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__.createTaskStatusListener)(completedCheckbox);

            // Append elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task buttons to be created
        const taskButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "Create Step Button", title: "Add New Step",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskCreateStepButtonListener)(task)
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "Edit Task Button", title: "Edit Task",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskEditButtonListener)(task);
            }},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Task Button", title: "Delete Task",
            event: () => {
                (0,_common_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_5__.taskDeleteButtonListener)(task);
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

/***/ "./src/display/sidebar/index.js":
/*!**************************************!*\
  !*** ./src/display/sidebar/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarProjectsGenerator.js */ "./src/display/sidebar/sidebarProjectsGenerator.js");


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

/***/ "./src/display/sidebar/sidebarProjectsGenerator.js":
/*!*********************************************************!*\
  !*** ./src/display/sidebar/sidebarProjectsGenerator.js ***!
  \*********************************************************/
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
/* harmony import */ var _common_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/eventListeners/projectNavigationListeners.js */ "./src/common/eventListeners/projectNavigationListeners.js");



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
    (0,_common_eventListeners_projectNavigationListeners_js__WEBPACK_IMPORTED_MODULE_1__.addProjectNavigationListener)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)(), newProjectBtn);
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

/***/ "./src/display/utility/actionButtons.js":
/*!**********************************************!*\
  !*** ./src/display/utility/actionButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableActionButtons: () => (/* binding */ disableActionButtons),
/* harmony export */   enableActionButtons: () => (/* binding */ enableActionButtons),
/* harmony export */   generateActionButtons: () => (/* binding */ generateActionButtons)
/* harmony export */ });
/* harmony import */ var _common_eventListeners_actionButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/eventListeners/actionButtonListeners/index.js */ "./src/common/eventListeners/actionButtonListeners/index.js");


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
        (0,_common_eventListeners_actionButtonListeners_index_js__WEBPACK_IMPORTED_MODULE_0__.createActionButtonListener)(actionButtonContainer, btn.event)

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



/***/ }),

/***/ "./src/display/utility/projectCardButtons.js":
/*!***************************************************!*\
  !*** ./src/display/utility/projectCardButtons.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateProjectCardButtons: () => (/* binding */ generateProjectCardButtons)
/* harmony export */ });
/* harmony import */ var _common_eventListeners_actionButtonListeners_projectActionButtonListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/eventListeners/actionButtonListeners/projectActionButtonListeners */ "./src/common/eventListeners/actionButtonListeners/projectActionButtonListeners.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");



/* Creates the logic for the project card action buttons */
function generateProjectCardButtons(project) {
    // Project buttons to be created
    const projectCardButtons = [
        {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "Colour Project Button", title: "Colour Project",
        event: () => {
            (0,_common_eventListeners_actionButtonListeners_projectActionButtonListeners__WEBPACK_IMPORTED_MODULE_0__.projectColourButtonListener)(project);
        }},
        {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "Edit Project Button", title: "Edit Project",
        event: () => {
            (0,_common_eventListeners_actionButtonListeners_projectActionButtonListeners__WEBPACK_IMPORTED_MODULE_0__.projectEditButtonListener)(project);
        }},
        {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_1__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Project Button", title: "Delete Project",
        event: () => {
            (0,_common_eventListeners_actionButtonListeners_projectActionButtonListeners__WEBPACK_IMPORTED_MODULE_0__.projectDeleteButtonListener)(project);
        }},
    ]

    return projectCardButtons;
}



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
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/localStorage/index.js */ "./src/common/localStorage/index.js");
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
        (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());
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
                (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());

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
                (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_4__.getSerializedProjects)());

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
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/localStorage/index.js */ "./src/common/localStorage/index.js");
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
                (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

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
                (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

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
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../display/display.js */ "./src/display/display.js");
/* harmony import */ var _display_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../display/sidebar/sidebarProjectsGenerator.js */ "./src/display/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/localStorage/index.js */ "./src/common/localStorage/index.js");
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
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
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
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
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
    ;(0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
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
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)();
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_1__.renderAllProjectsPage)(projects);
    (0,_display_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__.addToSidebarProjects)(getCurrentProject());
}

/* Edits a project based on information in edit form */
function editProjectFromForm(project) {
    const newTitle = document.querySelector("#project-title").value;
    const newDesc = document.querySelector("#project-desc").value;

    project.setTitle(newTitle);
    project.setDescription(newDesc);

    // Save change locally
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(getSerializedProjects());
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
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../display/display.js */ "./src/display/display.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/localStorage/index.js */ "./src/common/localStorage/index.js");
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
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Creates a step from creation form */
function createStepFromForm() {
    const title = document.querySelector("#step-title").value;

    createStep((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)().getCurrentTask(), title);
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)();
    (0,_display_display_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectPage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());
}

/* Edits a step based on information in edit form */
function editStepFromForm(step) {
    const newTitle = document.querySelector("#step-title").value;

    step.setTitle(newTitle);

    // Save change locally
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
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
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/localStorage/index.js */ "./src/common/localStorage/index.js");
/* harmony import */ var _step_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step.js */ "./src/models/organizers/step.js");






/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.getProjectID();
    const taskID = project.getNextTaskCount();
    const newTask = (0,_factories_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, projectID, taskID);

    project.addToIncompleteTasks(newTask);
    project.setCurrentTask(newTask);

    // Save change locally
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
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
    (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
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
/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/display.js */ "./src/display/display.js");
/* harmony import */ var _common_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/eventListeners/index.js */ "./src/common/eventListeners/index.js");
/* harmony import */ var _common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/localStorage/index.js */ "./src/common/localStorage/index.js");








// Importing local storage
const storageData = (0,_common_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__.loadProjectsFromLocalStorage)();
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
_display_display_js__WEBPACK_IMPORTED_MODULE_4__.renderSidebar((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
_display_display_js__WEBPACK_IMPORTED_MODULE_4__.forms.generateFormModal(document.querySelector(".content"));
_display_display_js__WEBPACK_IMPORTED_MODULE_4__.renderAllProjectsPage((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
(0,_common_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__.createSidebarListeners)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGNBQWMsYUFBYSx5QkFBeUIsYUFBYSx5QkFBeUIsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsS0FBSyxRQUFRLEtBQUssT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFV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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFPO0FBQzdCO0FBQ0EsMENBQTBDLDZEQUFPLGNBQWMsNkRBQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV5RztBQUNuQjtBQUNsQjtBQUNVO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLFFBQVEsaUZBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1GQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQXFCLENBQUMsMEVBQVc7QUFDakMsd0VBQStCO0FBQy9CLHNFQUE2QixDQUFDLDBFQUFXO0FBQ3pDLHVGQUFzQixDQUFDLDBFQUFXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvYWxsUHJvamVjdHNBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvcHJvamVjdEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tbW9uL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9zdGVwQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21tb24vZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Rhc2tBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9ldmVudExpc3RlbmVycy9jaGVja2JveExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tbW9uL2V2ZW50TGlzdGVuZXJzL2Zvcm1CdXR0b25MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9ldmVudExpc3RlbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tbW9uL2V2ZW50TGlzdGVuZXJzL3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21tb24vZXZlbnRMaXN0ZW5lcnMvc2lkZWJhckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tbW9uL2V2ZW50TGlzdGVuZXJzL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbi9sb2NhbFN0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkvYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkvZm9ybXMvZm9ybUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9mb3Jtcy9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2Zvcm1zL3RleHRGaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9wcm9qZWN0UGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L3Byb2plY3RQYWdlL3Rhc2tzQ2FyZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkvdXRpbGl0eS9wcm9qZWN0Q2FyZEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvY29sb3Vycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL29yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9zdGVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLyogQ29tbW9uIGNvbG91cnMgKi9cclxuICAgIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xyXG5cclxuICAgIC8qIEdlbmVyYWwgcGFnZSBzdHlsaW5nICovXHJcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogcmdiYSgyMjMsIDE2MywgMTYzLCAwLjMpOyAvKnJnYmEoMjU1LCAxOTgsIDExMiwgMC4wNSkqL1xyXG4gICAgLS1zaWRlYmFyLXRleHQ6IHJnYigwLCAwLCAwKTtcclxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cclxuICAgIC0tcHJvamVjdC1pY29uOiByZ2JhKDE3NywgOTYsIDIzMSwgMC41KTtcclxuICAgIC0tY29sb3VyLXBpY2tlci1ib3JkZXI6IHJnYigxMTgsIDExOCwgMTE4KTtcclxuXHJcbiAgICAvKiBCdXR0b24gc3R5bGluZyAqL1xyXG4gICAgLS1hY3Rpb24tYnRuLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIC0tYWN0aW9uLWJ0bi1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLXN1Ym1pdC1idG4tYmFja2dyb3VuZDogcmdiKDAsIDg5LCAyNTUpO1xyXG5cclxuICAgIC8qIFNoYWRvd3MgKi9cclxuICAgIC0tZGFyay1zaGFkb3c6ICMwMDAwMDA0MDtcclxuICAgIC0tbGlnaHQtc2hhZG93OiAjMDAwMDAwMjU7XHJcbiAgICAtLWZhaW50LXNoYWRvdzogIzAwMDAwMDEwO1xyXG5cclxuICAgIC8qIFRhc2sgcHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xyXG4gICAgLS1pbnB1dC1oaWdobGlnaHQ6ICMwMDZlZmY7XHJcbiAgICAtLXByaW9yaXR5LWhpZ2gtdGV4dDogI2FlMmUyNDtcclxuICAgIC0tcHJpb3JpdHktaGlnaC1iYWNrZ3JvdW5kOiAjZmZlY2ViO1xyXG4gICAgLS1wcmlvcml0eS1tZWQtdGV4dDogIzVlNGRiMjtcclxuICAgIC0tcHJpb3JpdHktbWVkLWJhY2tncm91bmQ6ICNmM2YwZmY7XHJcbiAgICAtLXByaW9yaXR5LWxvdy10ZXh0OiAjMDA1NWNjO1xyXG4gICAgLS1wcmlvcml0eS1sb3ctYmFja2dyb3VuZDogI2U5ZjJmZjtcclxuICAgIC0tcHJpb3JpdHktbm9uZS10ZXh0OiB2YXIoLS1ibGFjayk7XHJcbiAgICAtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZDogI2YwZjFmNDtcclxuXHJcbiAgICAvKiBDb21wbGV0ZWQgc3RhdHVzIGluZGljYXRvcnMgKi9cclxuICAgIC0tY29tcGxldGVkLWNhcmQtdGV4dDogIzZhNmE2YTtcclxuICAgIC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZDogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcclxufVxyXG4uYWN0aW9uLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKVxyXG59XHJcbi5kaXNhYmxlZC1hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQ6IDFmciA1ZnIgLyAxZnIgNGZyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFNpZGViYXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51LFxyXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuID4gaW1nIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4vKlxyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRpdGxlLWlucHV0OmZvY3VzLFxyXG4uZGF0ZS1pbnB1dDpmb2N1cyxcclxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWhpZ2hsaWdodCk7XHJcbn0gXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zaGFkb3cpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xyXG59IFxyXG5cclxuLmNyZWF0ZS1lZGl0LWZvcm0sXHJcbi5kZWxldGUtZm9ybSxcclxuLmNvbG91ci1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5maWVsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuXHJcbi5mb3JtLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnRuLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG4udGl0bGUtaW5wdXQsXHJcbi5kYXRlLWlucHV0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRlc2MtaW5wdXQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbiBcclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb2xvdXIgUGlja2VyIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmNvbG91ci1maWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvdXItcGlja2VyLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jb2xvdXItZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5jb2xvdXItcmFkaW8tYnRuLWxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59ICovXHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtY2FyZC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn0gXHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zZWN0aW9uLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbn0gXHJcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnRhc2stbGlzdC1jb250YWluZXIsXHJcbi5zdGVwcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xyXG59XHJcblxyXG4udGFzay1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XHJcbn0gXHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdGVwLWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LXRleHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9uZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZS10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtdGV4dCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIseUJBQXlCO0lBQ3pCLDhDQUE4QyxFQUFFLDRCQUE0QjtJQUM1RSw0QkFBNEI7SUFDNUIscURBQXFELEVBQUUscURBQXFEO0lBQzVHLHVDQUF1QztJQUN2QywwQ0FBMEM7O0lBRTFDLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsaURBQWlEO0lBQ2pELHdDQUF3Qzs7SUFFeEMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIseUJBQXlCOztJQUV6Qiw2QkFBNkI7SUFD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O0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxpQ0FBaUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAvKiBDb21tb24gY29sb3VycyAqL1xcclxcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcclxcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcclxcblxcclxcbiAgICAvKiBHZW5lcmFsIHBhZ2Ugc3R5bGluZyAqL1xcclxcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogcmdiYSgyMjMsIDE2MywgMTYzLCAwLjMpOyAvKnJnYmEoMjU1LCAxOTgsIDExMiwgMC4wNSkqL1xcclxcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xcclxcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXFxyXFxuICAgIC0tcHJvamVjdC1pY29uOiByZ2JhKDE3NywgOTYsIDIzMSwgMC41KTtcXHJcXG4gICAgLS1jb2xvdXItcGlja2VyLWJvcmRlcjogcmdiKDExOCwgMTE4LCAxMTgpO1xcclxcblxcclxcbiAgICAvKiBCdXR0b24gc3R5bGluZyAqL1xcclxcbiAgICAtLWFjdGlvbi1idG4tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICAtLWFjdGlvbi1idG4taG92ZXItYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAtLXN1Ym1pdC1idG4tYmFja2dyb3VuZDogcmdiKDAsIDg5LCAyNTUpO1xcclxcblxcclxcbiAgICAvKiBTaGFkb3dzICovXFxyXFxuICAgIC0tZGFyay1zaGFkb3c6ICMwMDAwMDA0MDtcXHJcXG4gICAgLS1saWdodC1zaGFkb3c6ICMwMDAwMDAyNTtcXHJcXG4gICAgLS1mYWludC1zaGFkb3c6ICMwMDAwMDAxMDtcXHJcXG5cXHJcXG4gICAgLyogVGFzayBwcmlvcml0eSBpbmRpY2F0b3JzICovXFxyXFxuICAgIC0taW5wdXQtaGlnaGxpZ2h0OiAjMDA2ZWZmO1xcclxcbiAgICAtLXByaW9yaXR5LWhpZ2gtdGV4dDogI2FlMmUyNDtcXHJcXG4gICAgLS1wcmlvcml0eS1oaWdoLWJhY2tncm91bmQ6ICNmZmVjZWI7XFxyXFxuICAgIC0tcHJpb3JpdHktbWVkLXRleHQ6ICM1ZTRkYjI7XFxyXFxuICAgIC0tcHJpb3JpdHktbWVkLWJhY2tncm91bmQ6ICNmM2YwZmY7XFxyXFxuICAgIC0tcHJpb3JpdHktbG93LXRleHQ6ICMwMDU1Y2M7XFxyXFxuICAgIC0tcHJpb3JpdHktbG93LWJhY2tncm91bmQ6ICNlOWYyZmY7XFxyXFxuICAgIC0tcHJpb3JpdHktbm9uZS10ZXh0OiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIC0tcHJpb3JpdHktbm9uZS1iYWNrZ3JvdW5kOiAjZjBmMWY0O1xcclxcblxcclxcbiAgICAvKiBDb21wbGV0ZWQgc3RhdHVzIGluZGljYXRvcnMgKi9cXHJcXG4gICAgLS1jb21wbGV0ZWQtY2FyZC10ZXh0OiAjNmE2YTZhO1xcclxcbiAgICAtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQ6IHJnYigyMTAsIDIxMCwgMjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBHZW5lcmFsIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDk5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXHJcXG59XFxyXFxuLmFjdGlvbi1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZWQtYWN0aW9uLWJ0biB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZClcXHJcXG59XFxyXFxuLmRpc2FibGVkLWFjdGlvbi1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAxZnIgNWZyIC8gMWZyIDRmcjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFNpZGViYXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbWVudSxcXHJcXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDk5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG4gPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLypcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKi9cXHJcXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRhdGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1oaWdobGlnaHQpO1xcclxcbn0gXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XFxyXFxufSBcXHJcXG5cXHJcXG4uY3JlYXRlLWVkaXQtZm9ybSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4gXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5jb2xvdXItZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvdXItcGlja2VyLWJvcmRlcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLXJhZGlvLWJ0bi1sYWJlbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ib2R5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtY2FyZC1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zZWN0aW9uLWRpdmlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxufSBcXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxMDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi50YXNrLWxpc3QtY29udGFpbmVyLFxcclxcbi5zdGVwcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCB2YXIoLS1saWdodC1zaGFkb3cpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtY2FyZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiAucHJpb3JpdHktdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1ub25lIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLXRleHQpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybXMgfSBmcm9tIFwiLi4vLi4vLi4vZGlzcGxheS9kaXNwbGF5XCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIGNyZWF0ZSBwcm9qZWN0IGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKSB7XHJcbiAgICBmb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0QnV0dG9uTGlzdGVuZXIgfSIsIi8qIEF0dGFjaCBhbiBldmVudCBsaXN0ZW5lciB0byBhbiBhY3Rpb24gYnV0dG9uICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyKGJ0biwgZXZlbnRGdW5jdGlvbikge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGV2ZW50RnVuY3Rpb24oKTsgICAgICAgIFxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uLy4uLy4uL2Rpc3BsYXkvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwcm9qZWN0IGNyZWF0ZSB0YXNrIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKHByb2plY3QpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGVkaXQgcHJvamVjdCBjb2xvdXIgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTsgXHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZWRpdCBwcm9qZXRjIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIsIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9kaXNwbGF5L2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tGcm9tSUQgfSBmcm9tIFwiLi4vdXRpbGl0eS9pbmRleC5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBlZGl0IHN0ZXAgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRTdGVwRm9ybSgpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGRlbGV0ZSBzdGVwIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiBzdGVwRGVsZXRlQnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVN0ZXBGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIsIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vZGlzcGxheS9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHRhc2sgY3JlYXRlIHN0ZXAgYnV0dG9uIGxpc3RlbmVyICovXHJcbmZ1bmN0aW9uIHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtKCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZWRpdCB0YXNrIGJ1dHRvbiBsaXN0ZW5lciAqL1xyXG5mdW5jdGlvbiB0YXNrRWRpdEJ1dHRvbkxpc3RlbmVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICBmb3Jtcy5yZW5kZXJFZGl0VGFza0Zvcm0oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBkZWxldGUgdGFzayBidXR0b24gbGlzdGVuZXIgKi9cclxuZnVuY3Rpb24gdGFza0RlbGV0ZUJ1dHRvbkxpc3RlbmVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICBmb3Jtcy5yZW5kZXJEZWxldGVUYXNrRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyLCB0YXNrRWRpdEJ1dHRvbkxpc3RlbmVyLCB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvc3RhdHVzLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY29tcGxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Rhc2suanNcIjtcclxuaW1wb3J0IHsgY2xlYXJQYWdlLCByZW5kZXJQcm9qZWN0UGFnZSB9IGZyb20gXCIuLi8uLi9kaXNwbGF5L2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc2V0U3RlcENhcmRDb21wbGV0ZWQsIHNldFN0ZXBDYXJkSW5jb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9kaXNwbGF5L3Byb2plY3RQYWdlL3N0ZXBzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgc2V0Q3VycmVudFRhc2tGcm9tSUQsIHNldEN1cnJlbnRTdGVwRnJvbUlEIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuLyogSGFuZGxlcyB0b2dnbGluZyB0aGUgY29tcGxldGlvbiBzdGF0dXMgbG9naWMgZm9yIGEgdGFzayAqL1xyXG5mdW5jdGlvbiB0YXNrU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gU2VhcmNoZXMgYm90aCBsaXN0cyB0aGUgY3VycmVudCB0YXNrXHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEluY29tcGxldGVUYXNrcygpLCBTdHJpbmcodGFza0NhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbXBsZXRlZFRhc2tzKCksIFN0cmluZyh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSB0aGUgdGFza3MgY29tcGxldGUgc3RhdHVzXHJcbiAgICB0YXNrLnN3YXBTdGF0dXMoKTtcclxuXHJcbiAgICAvLyBJbnRyb2R1Y2UgYSBzbGlnaHQgdmlzdWFsIGRlbGF5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBDYWxsIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29tcGxldGlvbiBzdGF0dXNcclxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzZXRUYXNrU3RhdHVzQ29tcGxldGVIYW5kbGVyKHRhc2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRhc2tTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcih0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIG1hcmtpbmcgYSB0YXNrIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrU3RhdHVzQ29tcGxldGVIYW5kbGVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcyh0YXNrKTtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHdyYXBwZXIgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBzZWN0aW9uIFxyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBtYXJraW5nIGEgdGFzayBhcyBpbmNvbXBsZXRlICovXHJcbmZ1bmN0aW9uIHNldFRhc2tTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcyh0YXNrKTtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHdyYXBwZXIgdG8gdGhlIGluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciBtYXJraW5nIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiB0YXNrcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gdGFza1N0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIGxvZ2ljIGZvciBhIHN0ZXAgKi9cclxuZnVuY3Rpb24gc3RlcFN0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCk7XHJcbiAgICBzZXRDdXJyZW50U3RlcEZyb21JRChjdXJyZW50VGFzay5nZXRJbmNvbXBsZXRlU3RlcHMoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiKSkpO1xyXG4gICAgc2V0Q3VycmVudFN0ZXBGcm9tSUQoY3VycmVudFRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiKSkpO1xyXG5cclxuICAgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VGFzay5nZXRDdXJyZW50U3RlcCgpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSB0aGUgc3RlcHMgY29tcGxldGUgc3RhdHVzXHJcbiAgICBzdGVwLnN3YXBTdGF0dXMoKTtcclxuXHJcbiAgICAvLyBJbnRyb2R1Y2UgYSBzbGlnaHQgdmlzdWFsIGRlbGF5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBDYWxsIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29tcGxldGlvbiBzdGF0dXNcclxuICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzZXRTdGVwU3RhdHVzQ29tcGxldGVIYW5kbGVyKHN0ZXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXBTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcihzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIG1hcmtpbmcgYSBzdGVwIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwU3RhdHVzQ29tcGxldGVIYW5kbGVyKHN0ZXApIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKHN0ZXApO1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcbiAgICBzZXRTdGVwQ2FyZENvbXBsZXRlZChzdGVwQ2FyZCk7XHJcblxyXG4gICAgLy8gTW92ZXMgdGhlIGNhcmQgdG8gdGhlIGNvbXBsZXRlZCBzdGVwcyBsaXN0XHJcbiAgICBjb25zdCBwYXJlbnQgPSBzdGVwQ2FyZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50Lm5leHRTaWJsaW5nLmFwcGVuZENoaWxkKHN0ZXBDYXJkKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBtYXJraW5nIGEgc3RlcCBhcyBpbmNvbXBsZXRlICovXHJcbmZ1bmN0aW9uIHNldFN0ZXBTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzKHN0ZXApO1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcbiAgICBzZXRTdGVwQ2FyZEluY29tcGxldGUoc3RlcENhcmQpO1xyXG5cclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBpbmNvbXBsZXRlIHN0ZXBzIGxpc3RcclxuICAgIGNvbnN0IHBhcmVudCA9IHN0ZXBDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKHN0ZXBDYXJkKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBpbml0aWFsaXphdGlvbiBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIG1hcmtpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIHN0ZXBzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBzdGVwU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyLCBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIgfSIsIi8qIENyZWF0ZXMgdGhlIHN1Ym1pdCBmb3JtIGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIoYnRuLCBzdWJtaXRGdW5jdGlvbiwgbW9kYWwpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3VibWl0RnVuY3Rpb24oKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyB0aGUgY2FuY2VsIGZvcm0gYnV0dG9uICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1DYW5jZWxCdXR0b25MaXN0ZW5lcihidG4sIG1vZGFsKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIsIGNyZWF0ZUZvcm1DYW5jZWxCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgZnJvbSBcIi4vc2lkZWJhckxpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMsXHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMsXHJcbn0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL2Rpc3BsYXkvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBNYWtlIGEgZ3JvdXAgb2YgcHJvamVjdCBuYXZpZ2F0aW9uIERPTSBlbGVtZW50cyBsaW5rIHRvIHRoZWlyIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hdkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xyXG5cclxuICAgIC8vIExpbmsgZWFjaCBwcm9qZWN0IG5hdmlnYXRpb24gZWxlbWVudCB0byBhIHByb2plY3QgcGFnZVxyXG4gICAgcHJvamVjdE5hdkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLyogTWFrZSBhIHNpbmdsZSBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnQgbGlrZSB0byBhIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyKHByb2plY3RzLCBpdGVtKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcocHJvamVjdC5nZXRQcm9qZWN0SUQoKSkgPT09IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMsIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIgfSIsImltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL2Rpc3BsYXkvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogTWFrZSB0aGUgYWxsIHByb2plY3RzIHNpZGViYXIgYnV0dG9uIGxpbmsgdG8gdGhlIGFsbCBwcm9qZWN0cyBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG5cclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIEdpdmUgYWxsIHNpZGViYXIgcHJvamVjdCBidXR0b25zIGZ1bmN0aW9uYWxpdHkgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhckxpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cyk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIFwiLnNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbn0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcblxyXG4vKiBTZXRzIGN1cnJlbnQgdGFzayBmcm9tIGEgZ2l2ZW4gdGFza0lEIHZhbHVlICovXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrRnJvbUlEKHRhc2tzLCB0YXNrSUQpIHtcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyh0YXNrLmdldFRhc2tJRCgpKSA9PT0gdGFza0lEKSB7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogU2V0cyBjdXJyZW50IHN0ZXAgZnJvbSBhIGdpdmVuIHN0ZXBJRCB2YWx1ZSAqL1xyXG5mdW5jdGlvbiBzZXRDdXJyZW50U3RlcEZyb21JRChzdGVwcywgc3RlcElEKSB7XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcoc3RlcC5nZXRTdGVwSUQoKSkgPT09IHN0ZXBJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0Q3VycmVudFRhc2tGcm9tSUQsIHNldEN1cnJlbnRTdGVwRnJvbUlEIH0iLCIvLyBVcGRhdGVzIHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgbG9jYWwgZW52aXJvbm1lbnRcclxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdHMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdHMpKTtcclxufVxyXG5cclxuLy8gRmV0Y2hlcyB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2FsIGVudmlyb25lbW50IGFuZCBjb252ZXJ0cyB1dCBiYWNrIHRvIHVzZWFibGUgZm9ybWF0XHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgfSIsImltcG9ydCB7IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9hbGxQcm9qZWN0c0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2V2ZW50TGlzdGVuZXJzL3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvcHJvamVjdENhcmRCdXR0b25zLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgb2YgdGhlIGN1cnJlbnQgcHJvamVjdHMgKi9cclxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgc2VjdGlvbiAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgLy8gQWxsIHByb2plY3RzIGJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEUsIFwiY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0blwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgUHJvamVjdFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbkxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFByb2plY3RzXCI7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGNyZWF0ZVByb2plY3RCdXR0b24pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBib2R5IHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSBjYXJkICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGNhcmQgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZERldGFpbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RDYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkLWdyaWRcIik7XHJcblxyXG4gICAgICAgIC8vIEFkZGluZyBlYWNoIG9mIHRoZSBwcm9qZWN0cyB0byBhIGNhcmRcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmREZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkR3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5wcm9qZWN0LWNhcmRcIik7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGluZm9ybWF0aW9uIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNhcmRbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgY29uc3QgY2FyZERldGFpbHMgPSBwcm9qZWN0Q2FyZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gY2FyZERldGFpbHMuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGNhcmREZXRhaWxzLmxhc3RDaGlsZDtcclxuXHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBwcm9qZWN0Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBwcm9qZWN0cyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgcHJvamVjdENhcmQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgZGVsZXRlUHJvamVjdENhcmQgfSIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcclxuLy8gaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiXHJcbmltcG9ydCB7IGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlQ29sb3VyfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciB9IGZyb20gXCIuL2FsbFByb2plY3RzUGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBSZW1vdmUgYWxsIGNvbnRlbnQgZnJvbSB0aGUgaGVhZGVyICovXHJcbmZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgY29udGVudCBmcm9tIHRoZSBib2R5ICovXHJcbmZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgY29udGVudCBmcm9tIHRoZSBjb250ZW50IHNlY3Rpb25zICovXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIGNsZWFySGVhZGVyKCk7XHJcbiAgICBjbGVhckJvZHkoKTtcclxufVxyXG5cclxuLyogUmVtb3ZlIGFsbCBjb250ZW50IGZyb20gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gY2xlYXJTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZSxcclxuICAgIHJlbmRlclByb2plY3RQYWdlLFxyXG4gICAgZWRpdFByb2plY3RQYWdlQ29sb3VyLCBcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZSxcclxuICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cixcclxuICAgIGZvcm1zLFxyXG4gICAgY2xlYXJQYWdlLFxyXG4gICAgY2xlYXJTaWRlYmFyLFxyXG59IiwiaW1wb3J0IGdlbmVyYXRlVGV4dEZpZWxkcyBmcm9tIFwiLi90ZXh0RmllbGRHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0ICogYXMgcmFkaW9GaWVsZEdlbmVyYXRvciBmcm9tIFwiLi9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IE9yZ2FuaXplcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL29yZ2FuaXplci5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENhcmQsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza0NhcmQgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVTdGVwQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2V2ZW50TGlzdGVuZXJzL2Zvcm1CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgbW9kYWwgd2hpY2ggd2lsbCBzdG9yZSBhbGwgZm9ybXMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtTW9kYWwocGFyZW50KSB7XHJcbiAgICBjb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtTW9kYWwpO1xyXG59XHJcblxyXG4vKiBIYW5kbGVzIGZvcm0gY3JlYXRpb24gYW5kIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gcmVuZGVyRm9ybShmb3JtKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihmb3JtKTtcclxuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbihmb3JtQ29udGFpbmVyKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lciBhbmQgdGl0bGUgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtQmFzZShpZCwgdGl0bGUsIGZvcm1DbGFzcykge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IGlkO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGZvcm1DbGFzcyk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBiYXNpYyBjcmVhdGUvZWRpdCBmb3JtIGxheW91dCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNyZWF0ZUVkaXRGb3JtQmFzZShmb3JtRmllbGRzLCBmb3JtSUQsIGZvcm1UaXRsZSwgZm9ybVR5cGUsIGZvcm1DbGFzcywgb3JnYW5pemVyVHlwZSwgc3VibWl0RnVuY3Rpb24sIHJhZGlvQnV0dG9ucyA9IG51bGwpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKGZvcm1JRCwgZm9ybVRpdGxlLCBmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKGZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgaWYgKHJhZGlvQnV0dG9ucyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9CdXR0b25zKTtcclxuICAgIH1cclxuICAgIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGZvcm1UeXBlLCBmb3JtLCBzdWJtaXRGdW5jdGlvbik7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBzdWJtaXQgYW5kIGNhbmNlbCBmb3JtIGJ1dHRvbnMgKi9cclxuZnVuY3Rpb24gYWRkRm9ybUJ1dHRvbnMob3JnYW5pemVyVHlwZSwgYWN0aW9uVHlwZSwgcGFyZW50LCBzdWJtaXRGdW5jdGlvbikge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgY29uc3QgYnRuSURQcmVmaXggPSBhY3Rpb25UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XHJcbiAgICBzdWJtaXRCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1zdWJtaXQtYnRuXCI7XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgZXZlbnRcclxuICAgIGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lcihzdWJtaXRCdG4sIHN1Ym1pdEZ1bmN0aW9uLCBtb2RhbCk7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWxCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1jYW5jZWwtYnRuXCI7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiY2FuY2VsLWJ0blwiKTtcclxuXHJcbiAgICAvLyBDYW5jZWwgZXZlbnRcclxuICAgIGNyZWF0ZUZvcm1DYW5jZWxCdXR0b25MaXN0ZW5lcihjYW5jZWxCdG4sIG1vZGFsKVxyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGJhc2UgZm9yIGVkaXQgYW5kIGNyZWF0ZSBzdGVwIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQmFzZVByb2plY3RGb3JtKGZvcm1JRCwgZm9ybVRpdGxlLCBmb3JtVHlwZSwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgcHJvamVjdHNcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiAyMH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG4gICAgY29uc3QgZm9ybUNsYXNzID0gXCJjcmVhdGUtZWRpdC1mb3JtXCI7XHJcbiAgICBjb25zdCBvcmdhbml6ZXJUeXBlID0gT3JnYW5pemVycy5QUk9KRUNUO1xyXG5cclxuICAgIGdlbmVyYXRlQ3JlYXRlRWRpdEZvcm1CYXNlKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybUlELCBmb3JtVGl0bGUsIGZvcm1UeXBlLCBmb3JtQ2xhc3MsIG9yZ2FuaXplclR5cGUsIHN1Ym1pdEZ1bmN0aW9uKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgZ2VuZXJhdGVCYXNlUHJvamVjdEZvcm0oXCJwcm9qZWN0LWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgUHJvamVjdFwiLCBcIkNyZWF0ZVwiLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGVkaXRpbmcgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckVkaXRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgZnVuY3Rpb24gZm9yIGVkaXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBlZGl0UHJvamVjdEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0RnJvbUZvcm0oY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAvLyBDaGVja2luZyB3aGljaCBwYWdlIGlzIGN1cnJlbnRseSBkaXNwbGF5ZWRcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24oY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24oY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUJhc2VQcm9qZWN0Rm9ybShcInByb2plY3QtZWRpdC1mb3JtXCIsIFwiRWRpdCBQcm9qZWN0XCIsIFwiRWRpdFwiLCBlZGl0UHJvamVjdEZ1bmN0aW9uKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlID0gY3VycmVudFByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGJhc2UgZm9yIGVkaXQgYW5kIGNyZWF0ZSBzdGVwIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQmFzZVRhc2tGb3JtKGZvcm1JRCwgZm9ybVRpdGxlLCBmb3JtVHlwZSwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgdGFza3NcclxuICAgIGNvbnN0IHRhc2tUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwidGFzay10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInRhc2stZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdLCBtYXhMZW5ndGg6IDgwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcbiAgICBjb25zdCBmb3JtQ2xhc3MgPSBcImNyZWF0ZS1lZGl0LWZvcm1cIjtcclxuICAgIGNvbnN0IG9yZ2FuaXplclR5cGUgPSBPcmdhbml6ZXJzLlRBU0s7XHJcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSByYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5UQVNLKTtcclxuXHJcbiAgICBnZW5lcmF0ZUNyZWF0ZUVkaXRGb3JtQmFzZSh0YXNrVGV4dEZvcm1GaWVsZHMsIGZvcm1JRCwgZm9ybVRpdGxlLCBmb3JtVHlwZSwgZm9ybUNsYXNzLCBvcmdhbml6ZXJUeXBlLCBzdWJtaXRGdW5jdGlvbiwgcmFkaW9CdXR0b25zKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVRhc2tGb3JtKCkge1xyXG4gICAgLy8gU3VibWl0IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIHRhc2tcclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRnJvbUZvcm0oKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUJhc2VUYXNrRm9ybShcInRhc2stY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBUYXNrXCIsIFwiQ3JlYXRlXCIsIGNyZWF0ZVRhc2tGdW5jdGlvbik7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBkZWZhdWx0IHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7RGVmYXVsdFByaW9yaXR5fSddYCk7XHJcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgZnVuY3Rpb24gZm9yIGVkaXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCBlZGl0VGFza0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGVkaXRUYXNrRnJvbUZvcm0oY3VycmVudFRhc2spO1xyXG4gICAgICAgIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNvcnRJbmNvbXBsZXRlVGFza3MoKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUJhc2VUYXNrRm9ybShcInRhc2stZWRpdC1mb3JtXCIsIFwiRWRpdCBUYXNrXCIsIFwiRWRpdFwiLCBlZGl0VGFza0Z1bmN0aW9uKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7Y3VycmVudFRhc2suZ2V0UHJpb3JpdHkoKX0nXWApO1xyXG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBiYXNlIGZvciBlZGl0IGFuZCBjcmVhdGUgc3RlcCBmb3JtcyAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUJhc2VTdGVwRm9ybShmb3JtSUQsIGZvcm1UaXRsZSwgZm9ybVR5cGUsIHN1Ym1pdEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBzdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInN0ZXAtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zdCBmb3JtQ2xhc3MgPSBcImNyZWF0ZS1lZGl0LWZvcm1cIjtcclxuICAgICAgICBjb25zdCBvcmdhbml6ZXJUeXBlID0gT3JnYW5pemVycy5TVEVQO1xyXG5cclxuICAgICAgICBnZW5lcmF0ZUNyZWF0ZUVkaXRGb3JtQmFzZShzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm1JRCwgZm9ybVRpdGxlLCBmb3JtVHlwZSwgZm9ybUNsYXNzLCBvcmdhbml6ZXJUeXBlLCBzdWJtaXRGdW5jdGlvbik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVTdGVwRm9ybSgpIHtcclxuICAgIGdlbmVyYXRlQmFzZVN0ZXBGb3JtKFwic3RlcC1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFN0ZXBcIiwgXCJDcmVhdGVcIiwgY3JlYXRlU3RlcEZyb21Gb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0U3RlcEZvcm0oKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpO1xyXG5cclxuICAgIC8vIFN1Ym1pdCBmdW5jdGlvbiBmb3IgZWRpdGluZyBhIHN0ZXBcclxuICAgIGNvbnN0IGVkaXRTdGVwRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFN0ZXBGcm9tRm9ybShjdXJyZW50U3RlcCk7XHJcbiAgICAgICAgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24oY3VycmVudFN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQmFzZVN0ZXBGb3JtKFwic3RlcC1lZGl0LWZvcm1cIiwgXCJFZGl0IFN0ZXBcIiwgXCJFZGl0XCIsIGVkaXRTdGVwRnVuY3Rpb24pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlID0gY3VycmVudFN0ZXAuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjb25maXJtaW5nIG9yZ2FuaXplciBkZWxldGlvbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uLCBvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgXCIgKyBvcmdhbml6ZXJUeXBlICsgXCI/XCIpLCBcImRlbGV0ZS1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoXCJPcmdhbml6ZXJcIiwgXCJEZWxldGVcIiwgZm9ybSwgZGVsZXRlRnVuY3Rpb24pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZGVsZXRpbmcgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICByZW1vdmVGcm9tU2lkZWJhclByb2plY3RzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKGdldFByb2plY3RzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdENhcmQoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24sIE9yZ2FuaXplcnMuUFJPSkVDVCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZGVsZXRpbmcgYSB0YXNrICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVRhc2tGb3JtKCkge1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCk7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MoY3VycmVudFRhc2spO1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzKGN1cnJlbnRUYXNrKTtcclxuICAgICAgICBkZWxldGVUYXNrQ2FyZChjdXJyZW50VGFzayk7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayhudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uLCBPcmdhbml6ZXJzLlRBU0spO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGRlbGV0aW5nIGEgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVTdGVwRm9ybSgpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gY3VycmVudFRhc2suZ2V0Q3VycmVudFN0ZXAoKTtcclxuICAgICAgICBjdXJyZW50VGFzay5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKGN1cnJlbnRTdGVwKTtcclxuICAgICAgICBkZWxldGVTdGVwQ2FyZChjdXJyZW50U3RlcCk7XHJcbiAgICAgICAgY3VycmVudFRhc2suc2V0Q3VycmVudFN0ZXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbiwgT3JnYW5pemVycy5TVEVQKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjaGFuZ2luZyBwcm9qZWN0IGNvbG91ciAqL1xyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuUFJPSkVDVCwgXCJDb2xvdXJcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdFBhZ2VDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0UHJvamVjdENhcmRDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvdXJcclxuICAgIGNvbnN0IGNvbG91ckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb2xvdXItcmFkaW8tYnRuW2lkXj1cImNvbG91ci1cIl1baWQkPVwiJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbG91cigpLnRvTG93ZXJDYXNlKCl9XCJdYCk7XHJcbiAgICBjb2xvdXJCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlRm9ybU1vZGFsLCByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgcmVuZGVyRWRpdFByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyRWRpdFRhc2tGb3JtLCByZW5kZXJDcmVhdGVTdGVwRm9ybSwgcmVuZGVyRWRpdFN0ZXBGb3JtLCByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSwgcmVuZGVyRGVsZXRlVGFza0Zvcm0sIHJlbmRlckRlbGV0ZVN0ZXBGb3JtLCByZW5kZXJDb2xvdXJQaWNrZXJGb3JtIH0iLCJpbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgQ29sb3VycyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvY29sb3Vycy5qc1wiO1xyXG5cclxuLyogQWRkIHRoZSBkZXNpZ25hdGVkIGxlZ2VuZCBhbmQgZmllbGRzZXQgdG8gYSBjb250YWluZXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCkge1xyXG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcmlvcml0eSBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmZvckVhY2gocHJpb3JpdHlWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgcHJpb3JpdHlWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkY29udGFpbmVyXHJcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1maWVsZFwiKTtcclxuXHJcbiAgICAvLyBMZWdlbmRcclxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSk7XHJcbiAgICBjb25zdCBmaWVsZCA9IGdlbmVyYXRlUmFkaW9CdXR0b25zKGxlZ2VuZCwgZmllbGRzZXQpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcm9qZWN0IGNvbG91ciBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ29sb3VycykuZm9yRWFjaChjb2xvdXJWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbG91ciBrZXlcclxuICAgICAgICAgICAgY29uc3QgY29sb3VyS2V5ID0gT2JqZWN0LmtleXMoQ29sb3VycykuZmluZChrZXkgPT4gQ29sb3Vyc1trZXldID09PSBjb2xvdXJWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBcImNvbG91ci1cIiArIGNvbG91clZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG5cIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwiY29sb3VyXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG4tbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb2xvdXJLZXk7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRzZXRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDb2xvdXI6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zLCBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucyB9IiwiLyogQ3JlYXRlIGEgbGFiZWwgZm9yIGEgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmb3JtRmllbGQubGFiZWxUZXh0O1xyXG4gICAgZmllbGRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwuZm9yID0gZm9ybUZpZWxkLmlkO1xyXG5cclxuICAgIHJldHVybiBmaWVsZExhYmVsO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0aXRsZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIC8vIElucHV0XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGRlc2NyaXB0aW9uIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZm9ybUZpZWxkLmlucHV0VHlwZSk7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufSAgIFxyXG5cclxuLyogQ3JlYXRlIGEgZGF0ZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IGEgc2V0IG9mIHRleHQgZmllbGRzICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGV4dEZpZWxkcyhmaWVsZHMsIHBhcmVudCkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZm9ybUZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcInRpdGxlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkZXNjXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCB9IGZyb20gXCIuL3Rhc2tzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIHNldFN0ZXBDYXJkQ29tcGxldGVkIH0gZnJvbSBcIi4vc3RlcHNDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgfSBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvcHJvamVjdENhcmRCdXR0b25zLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgaW5mbyBmb3IgYSBzZWxlY3RlZCBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgaGVhZGVyIGRpc3BsYXlpbmcgcHJvamVjdCBpbmZvIGFuZCBhY3Rpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcihwcm9qZWN0KSB7XHJcbiAgICAgICAgLyogRGlzcGxheSBwcm9qZWN0IGRldGFpbHMgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3REZXRhaWxzKHByb2plY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci10aXRsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVySW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoZ2VuZXJhdGVQcm9qZWN0Q2FyZEJ1dHRvbnMocHJvamVjdCkpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBsaXN0IG9mIHRhc2tzIGFuZCB0aGVpciBzdGVwcyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCB0YXNrU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdGFza1NlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJUYXNrc1wiXHJcbiAgICAgICAgdGFza1NlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgaW5jb21wbGV0ZSB0YXNrc1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVUYXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIsIFwiaW5jb21wbGV0ZS10YXNrLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIGdlbmVyYXRlVGFza0NhcmRzKHByb2plY3QuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIGluY29tcGxldGVUYXNrc0xpc3QpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGluY29tcGxldGVUYXNrc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIFRhc2tzXCJcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdFwiLCBcImNvbXBsZXRlZC10YXNrLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICBnZW5lcmF0ZVRhc2tDYXJkcyhwcm9qZWN0LmdldENvbXBsZXRlZFRhc2tzKCksIGNvbXBsZXRlZFRhc2tzTGlzdCk7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZGluZyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKHByb2plY3QpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgdmlzdWFsIHN0YXR1cyBvZiBuZXdseSBhZGRlZCBjYXJkc1xyXG4gICAgdXBkYXRlQ29tcGxldGlvblN0YXR1cyhwcm9qZWN0KTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgY29tcGxldGlvbiBzdGF0dXMgb2YgY2FyZHMgb24gdGhlIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiB1cGRhdGVDb21wbGV0aW9uU3RhdHVzKHByb2plY3QpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlIGNvbXBsZXRlZCBzdGVwcyBvZiBpbmNvbXBsZXRlIHRhc2tzIGFzIGNvbXBsZXRlZFxyXG4gICAgcHJvamVjdC5nZXRJbmNvbXBsZXRlVGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgICAgICAgICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlIGNvbXBsZXRlIHRhc2tzIGFzIGNvbXBsZXRlZFxyXG4gICAgcHJvamVjdC5nZXRDb21wbGV0ZWRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG5cclxuICAgICAgICBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrQ2FyZCk7XHJcblxyXG4gICAgICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlaXIgY29tcGxldGVkIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgICAgIHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgICAgICAgICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IHBhZ2UgaWYgcHJvamVjdCBpbmZvcm1hdGlvbiBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24ocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgcGFnZSBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbiB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVBY3Rpb25CdXR0b25zLCBkaXNhYmxlQWN0aW9uQnV0dG9ucywgZW5hYmxlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9jb21tb24vZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvc3RlcEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbGlzdCBvZiBzdGVwcyBmb3IgYSB0YXNrICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3RlcENhcmRzKHN0ZXBzLCBwYXJlbnQpIHtcclxuICAgIC8qIENyZWF0ZSBhIHN0ZXAgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwQ2FyZChzdGVwKSB7XHJcblxyXG4gICAgICAgIC8vIFN0ZXAgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3Qgc3RlcEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtc3RlcFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIkVkaXQgU3RlcCBCdXR0b25cIiwgdGl0bGU6IFwiRWRpdCBTdGVwXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyKHN0ZXApO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIkRlbGV0ZSBTdGVwIEJ1dHRvblwiLCB0aXRsZTogXCJEZWxldGUgU3RlcFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHN0ZXApXHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgc3RlcEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIsIFwic3RlcC1jYXJkXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gdGFza1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBzdGVwLmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgc3RlcC5nZXRUYXNrSUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIsIHN0ZXAuZ2V0U3RlcElEKCkpO1xyXG5cclxuICAgICAgICAvLyBTdGVwIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RlcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwSW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0aW9uLWNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIHN0ZXBUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbnMgZm9yIHN0ZXBzXHJcbiAgICAgICAgY29uc3Qgc3RlcEFjdGlvbkJ1dHRvbnMgPSBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoc3RlcEJ1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChzdGVwVGl0bGUpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBJbmZvKTtcclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwQWN0aW9uQnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGVwSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHN0ZXBzIHRvIHRoZSBsaXN0XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCBzdGVwXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnNldEN1cnJlbnRTdGVwKHN0ZXApO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwQ2FyZChzdGVwKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgc3RlcCBjYXJkIGlmIHN0ZXAgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICAvLyBFZGl0aW5nIGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBzdGVwQ2FyZFRpdGxlID0gc3RlcENhcmQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBzdGVwQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gc3RlcC5nZXRUaXRsZSgpO1xyXG59XHJcblxyXG4vKiBNb2RpZmllcyBhIHN0ZXAgY2FyZCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgY29tcGxldGVcclxuICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIERpc2FibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgZGlzYWJsZUFjdGlvbkJ1dHRvbnMoW2VkaXRCdXR0b25dKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgaW5jb21wbGV0ZSAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwQ2FyZEluY29tcGxldGUoc3RlcENhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgaW5jb21wbGV0ZVxyXG4gICAgc3RlcENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFJlLWVuYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gc3RlcENhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBlbmFibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZXMgYSBkZWxldGVkIHN0ZXBzIGNhcmQgKi9cclxuZnVuY3Rpb24gZGVsZXRlU3RlcENhcmQoc3RlcCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RlcC1jYXJkW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG5cclxuICAgIHN0ZXBDYXJkLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVN0ZXBDYXJkcywgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIHNldFN0ZXBDYXJkQ29tcGxldGVkLCBzZXRTdGVwQ2FyZEluY29tcGxldGUsIGRlbGV0ZVN0ZXBDYXJkIH0iLCJpbXBvcnQgeyBnZW5lcmF0ZVN0ZXBDYXJkcyB9IGZyb20gXCIuL3N0ZXBzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZGlzYWJsZUFjdGlvbkJ1dHRvbnMsIGVuYWJsZUFjdGlvbkJ1dHRvbnMsIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9jb21tb24vZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lciwgdGFza0RlbGV0ZUJ1dHRvbkxpc3RlbmVyLCB0YXNrRWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvdGFza0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbGlzdCBvZiB0YXNrcyBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0NhcmRzKHRhc2tzLCBwYXJlbnQpIHtcclxuICAgIC8qIENyZWF0ZSBhIHRhc2sgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrKHRhc2spIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrYm94IGFuZCBkZXRhaWxzIG9mIHRoZSB0YXNrICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSGVhZGVyKHRhc2spIHtcclxuICAgICAgICAgICAgLyogRGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGFzayAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tEZXRhaWxzKHRhc2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1cIiArIHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIsIHByaW9yaXR5Q2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEdWUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCkgfHwgXCJObyBEdWUgRGF0ZVwiOztcclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tEZXRhaWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wbGV0aW9uIGNoZWNrYm94XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGlvbi1jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lcihjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJDcmVhdGUgU3RlcCBCdXR0b25cIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyKHRhc2spXHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXRhc2tcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJFZGl0IFRhc2sgQnV0dG9uXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0VkaXRCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJEZWxldGUgVGFzayBCdXR0b25cIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInRhc2stY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHRhc2tzIHRvIHRoZSBsaXN0XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCB0YXNrXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgYWxsIGluY29tcGxldGUgc3RlcHMgZm9yIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtbGlzdFwiLCBcImluY29tcGxldGUtc3RlcHMtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBhbGwgY29tcGxldGVkIHN0ZXBzIGZvciBjdXJyZW50IHRhc2tcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy1saXN0XCIsIFwiY29tcGxldGVkLXN0ZXBzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBzdGVwIGxpc3RzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGluY29tcGxldGVTdGVwc0xpc3QpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZWRTdGVwc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldEluY29tcGxldGVTdGVwcygpLCBpbmNvbXBsZXRlU3RlcHNMaXN0KTtcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldENvbXBsZXRlZFN0ZXBzKCksIGNvbXBsZXRlZFN0ZXBzTGlzdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0l0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgdGFzayBjYXJkIGlmIHRhc2sgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgLy8gR3JhYmJpbmcgaW5mb3JtYXRpb24gdG8gZWRpdFxyXG4gICAgY29uc3QgdGFza0luZm9ybWF0aW9uID0gdGFza0NhcmQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0luZm9ybWF0aW9uLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5uZXh0U2libGluZztcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0luZm9ybWF0aW9uLmxhc3RDaGlsZDtcclxuICAgIFxyXG4gICAgLy8gRWRpdGluZyBpbmZvcm1hdGlvblxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjtcclxuXHJcbiAgICAvLyBSZXBsYWNpbmcgcHJpb3JpdHkgY2xhc3NsaXN0XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBcInByaW9yaXR5LVwiICsgdGFzay5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIiwgcHJpb3JpdHlDbGFzcyk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgdGFzayBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrQ2FyZCkge1xyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBjb21wbGV0ZVxyXG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IHRhc2tDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIHRhc2tDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEaXNhYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IHRhc2tDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbi5uZXh0U2libGluZztcclxuICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtjcmVhdGVCdXR0b24sIGVkaXRCdXR0b25dKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBpbmNvbXBsZXRlU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBzdGVwQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzYWJsaW5nIHRoZSBjaGVja2JveCBvZiBjb21wbGV0ZWQgc3RlcHNcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBjb21wbGV0ZWRTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSB0YXNrIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFRhc2tDYXJkSW5jb21wbGV0ZSh0YXNrQ2FyZCkge1xyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhcyBpbmNvbXBsZXRlXHJcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gUmUtZW5hYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IHRhc2tDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbi5uZXh0U2libGluZztcclxuICAgIGVuYWJsZUFjdGlvbkJ1dHRvbnMoW2NyZWF0ZUJ1dHRvbiwgZWRpdEJ1dHRvbl0pO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IHJlbWFya2luZyBhbGwgaW5jb21wbGV0ZSBzdGVwcyBhcyBpbmNvbXBsZXRlXHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSB0YXNrQ2FyZC5uZXh0U2libGluZztcclxuICAgIGZvciAobGV0IHN0ZXBDYXJkIG9mIGluY29tcGxldGVTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlLWVuYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGVuYWJsZUFjdGlvbkJ1dHRvbnMoW2VkaXRCdXR0b25dKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGluZyB0aGUgY2hlY2tib3ggb2YgY29tcGxldGVkIHN0ZXBzXHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9IHRhc2tDYXJkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgZm9yIChsZXQgc3RlcENhcmQgb2YgY29tcGxldGVkU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCB0YXNrcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2tDYXJkKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stY2FyZFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcblxyXG4gICAgdGFza0NhcmQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCwgc2V0VGFza0NhcmRJbmNvbXBsZXRlLCBkZWxldGVUYXNrQ2FyZCB9IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4vc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHNpZGViYXIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcihwcm9qZWN0cykge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBMb2dvXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiVE9ET1wiO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICAvLyBTZWN0aW9uIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1ZIFBST0pFQ1RTXCJcclxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaGVhZGluZ1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGxpc3RcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0cy1tZW51XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHByb2plY3RzTGlzdCk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9ldmVudExpc3RlbmVycy9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgc2lkZWJhciBtZW51IGl0ZW0gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFySXRlbSh0aXRsZSwgaWNvbkZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHNpZGViYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaWNvbkZ1bmN0aW9uKCkpO1xyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gc2lkZWJhckl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEljb24oaWNvbkNvbG91cikge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG4gICAgcHJvamVjdEljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaWNvbkNvbG91cjtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgdGhlIGFsbCBwcm9qZWN0cyBpY29uICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdEljb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcblxyXG4gICAgLy8gSWNvbiBpbWFnZVxyXG4gICAgY29uc3QgaWNvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGljb25JbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcHJvamVjdHMuc3ZnXCI7XHJcblxyXG4gICAgLy8gQXBwZW5pbmcgZWxlbWVudHNcclxuICAgIHByb2plY3RJY29uLmFwcGVuZENoaWxkKGljb25JbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBwcm9qZWN0IGJ1dHRvbiBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBnZW5lcmF0ZVNpZGViYXJJdGVtKHByb2plY3QuZ2V0VGl0bGUoKSwgKCkgPT4gZ2VuZXJhdGVQcm9qZWN0SWNvbihwcm9qZWN0LmdldENvbG91cigpKSk7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgcHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFsbCBwcm9qZWN0cyBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZ2VuZXJhdGVTaWRlYmFySXRlbShcIkFsbCBQcm9qZWN0c1wiLCBnZW5lcmF0ZUFsbFByb2plY3RJY29uKTtcclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzQnV0dG9uO1xyXG59XHJcblxyXG4vKiBEaXNwbGF5IGFsbCBwcm9qZWN0cyBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSk7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHByb2plY3QgdG8gdGhlIHNpZGViYXIgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiBhZGRUb1NpZGViYXJQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1wcm9qZWN0cy1tZW51XCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xyXG4gICAgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcihnZXRQcm9qZWN0cygpLCBuZXdQcm9qZWN0QnRuKTtcclxufVxyXG5cclxuLyogRWRpdCB0aGUgdGl0bGUgb2YgYSBzaWRlYmFyIHByb2plY3QgYnV0dG9uICovXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBzaWRlYmFySXRlbS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgdGhlIGNvbG91ciBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW1JY29uID0gc2lkZWJhckl0ZW0uZmlyc3RDaGlsZDtcclxuICAgIHNpZGViYXJJdGVtSWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYSBzaWRlYmFyIHByb2plY3QgYnV0dG9uICovXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0ucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclNpZGViYXJQcm9qZWN0cywgYWRkVG9TaWRlYmFyUHJvamVjdHMsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGFjdGlvbiBidXR0b25zIGZvciBhIG9yZ2FuaXplciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgY29uc3QgYWN0aW9uQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYWN0aW9uQnRucy5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ0bnNcIik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBidXR0b25zXHJcbiAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAvLyBCdXR0b24gY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJhY3Rpb24tYnRuXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBCdXR0b25cclxuICAgICAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5zcmMgPSBidG4uc3JjO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5hbHQgPSBidG4uYWx0O1xyXG4gICAgICAgIGFjdGlvbkJ0bi50aXRsZSA9IGJ0bi50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uIGFjdGlvblxyXG4gICAgICAgIGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyKGFjdGlvbkJ1dHRvbkNvbnRhaW5lciwgYnRuLmV2ZW50KVxyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufVxyXG5cclxuLyogRGlzYWJsZSBhbiBhY3Rpb24gYnV0dG9uICovXHJcbmZ1bmN0aW9uIGRpc2FibGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gVmlzdWFsbHkgc2hvdyBkaXNhYmxlZFxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWQtYWN0aW9uLWJ0blwiKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIEVuYWJsZSBhbiBhY3Rpb24gYnV0dG9uICovXHJcbmZ1bmN0aW9uIGVuYWJsZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gVmlzdWFsbHkgc2hvdyBlbmFibGVkXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZC1hY3Rpb24tYnRuXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVBY3Rpb25CdXR0b25zLCBkaXNhYmxlQWN0aW9uQnV0dG9ucywgZW5hYmxlQWN0aW9uQnV0dG9ucyB9IiwiaW1wb3J0IHsgcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIsIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9wcm9qZWN0QWN0aW9uQnV0dG9uTGlzdGVuZXJzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGxvZ2ljIGZvciB0aGUgcHJvamVjdCBjYXJkIGFjdGlvbiBidXR0b25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpIHtcclxuICAgIC8vIFByb2plY3QgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZEJ1dHRvbnMgPSBbXHJcbiAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNPTE9VUl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiQ29sb3VyIFByb2plY3QgQnV0dG9uXCIsIHRpdGxlOiBcIkNvbG91ciBQcm9qZWN0XCIsXHJcbiAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyKHByb2plY3QpO1xyXG4gICAgICAgIH19LFxyXG4gICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIkVkaXQgUHJvamVjdCBCdXR0b25cIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCIsXHJcbiAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lcihwcm9qZWN0KTtcclxuICAgICAgICB9fSxcclxuICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiRGVsZXRlIFByb2plY3QgQnV0dG9uXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHByb2plY3QpO1xyXG4gICAgICAgIH19LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0Q2FyZEJ1dHRvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zIH0iLCIvKiBBY3Rpb24gYnV0dG9uIGNsYXNzbmFtZSBFTlVNICovXHJcbmNvbnN0IEFjdGlvbnMgPSB7XHJcbiAgICBDUkVBVEU6IFwiYWRkLWJ1dHRvblwiLFxyXG4gICAgQ09MT1VSOiBcImNvbG91ci1idXR0b25cIixcclxuICAgIEVESVQ6IFwiZWRpdC1idXR0b25cIixcclxuICAgIERFTEVURTogXCJkZWxldGUtYnV0dG9uXCIsXHJcbn1cclxuXHJcbmV4cG9ydCB7IEFjdGlvbnMgfSIsIi8qIENvbG91ciBFTlVNICovXHJcbmNvbnN0IENvbG91cnMgPSB7XHJcbiAgICBOT05FOiBcIiNmZmZmZmZcIixcclxuICAgIFBJTks6IFwiaHNsKDMyMCwgNjAlLCA4NSUpXCIsXHJcbiAgICBQVVJQTEU6IFwiaHNsKDI3MCwgNjAlLCA3NSUpXCIsXHJcbiAgICBCTFVFOiBcImhzbCgyMTAsIDYwJSwgNzUlKVwiLFxyXG4gICAgVEVBTDogXCJoc2woMTkwLCA2MCUsIDc1JSlcIixcclxuICAgIEdSRUVOOiBcImhzbCgxMjAsIDYwJSwgODUlKVwiLFxyXG4gICAgWUVMTE9XOiBcImhzbCg1MCwgNjAlLCA4NSUpXCIsXHJcbiAgICBPUkFOR0U6IFwiaHNsKDMwLCA2MCUsIDg1JSlcIixcclxuICAgIFJFRDogXCJoc2woMCwgNjAlLCA4NSUpXCIsXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRDb2xvdXIgPSBDb2xvdXJzLk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRDb2xvdXIoY29sb3VyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDb2xvdXJzKS5pbmNsdWRlcyhjb2xvdXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyLCBpc1ZhbGlkQ29sb3VyIH0iLCIvKiBPcmdhbml6ZXIgRU5VTSAqL1xyXG5jb25zdCBPcmdhbml6ZXJzID0ge1xyXG4gICAgUFJPSkVDVDogXCJQcm9qZWN0XCIsXHJcbiAgICBUQVNLOiBcIlRhc2tcIixcclxuICAgIFNURVA6IFwiU3RlcFwiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRPcmdhbml6ZXIob3JnYW5pemVyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPcmdhbml6ZXJzKS5pbmNsdWRlcyhvcmdhbml6ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBPcmdhbml6ZXJzLCBpc1ZhbGlkT3JnYW5pemVyIH0iLCIvKiBQcmlvcml0eSBFTlVNICovXHJcbmNvbnN0IFByaW9yaXR5ID0ge1xyXG4gICAgTk9ORTogXCJOb25lXCIsXHJcbiAgICBMT1c6IFwiTG93XCIsXHJcbiAgICBNRUQ6IFwiTWVkXCIsXHJcbiAgICBISUdIOiBcIkhpZ2hcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdFByaW9yaXR5ID0gUHJpb3JpdHkuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBwcmlvcml0eSB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5pbmNsdWRlcyhwcmlvcml0eSk7XHJcbn1cclxuXHJcbi8qIENvbnZlcnRzIGEgcHJpb3JpdHkgdmFsdWUgdG8gYSBudW1lcmljYWwgdmFsdWUgKi9cclxuZnVuY3Rpb24gY29udmVydFByaW9yaXR5VG9WYWx1ZShwcmlvcml0eSkge1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSBQcmlvcml0eS5ISUdIKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gUHJpb3JpdHkuTUVEKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gUHJpb3JpdHkuTE9XKSB7XHJcbiAgICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMztcclxuICAgIH1cclxufVxyXG5cclxuLyogU29ydHMgdHdvIGVsZW1lbnRzIGJhc2VkIG9uIHRoZWlyIHByaW9yaXR5IHZhbHVlcyAqL1xyXG5mdW5jdGlvbiBwcmlvcml0eVNvcnQoeCwgeSkge1xyXG4gICAgY29uc3QgeFByaW9yaXR5VmFsdWUgPSBjb252ZXJ0UHJpb3JpdHlUb1ZhbHVlKHguZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICBjb25zdCB5UHJpb3JpdHlWYWx1ZSA9IGNvbnZlcnRQcmlvcml0eVRvVmFsdWUoeS5nZXRQcmlvcml0eSgpKTtcclxuICAgIGlmICggeFByaW9yaXR5VmFsdWUgPiB5UHJpb3JpdHlWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoeFByaW9yaXR5VmFsdWUgPCB5UHJpb3JpdHlWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5LCBpc1ZhbGlkUHJpb3JpdHksIHByaW9yaXR5U29ydCB9IiwiLyogU3RhdHVzIEVOVU0gKi9cclxuY29uc3QgU3RhdHVzID0ge1xyXG4gICAgQ09NUExFVEVEOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgSU5DT01QTEVURTogXCJJbmNvbXBsZXRlXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBzdGF0dXMgcHJvcGVydHkgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFN0YXR1cykuaW5jbHVkZXMoc3RhdHVzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0iLCJpbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbG9jYWxTdG9yYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vZW51bXMvY29sb3Vycy5qc1wiO1xyXG5pbXBvcnQgeyBwcmlvcml0eVNvcnQgfSBmcm9tIFwiLi4vLi4vZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXJpYWxpemVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVUYXNrIH0gZnJvbSBcIi4uL3Rhc2suanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBwcm9qZWN0IG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RJRCkge1xyXG4gICAgbGV0IGNvbG91ciA9IERlZmF1bHRDb2xvdXI7XHJcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcclxuICAgIGNvbnN0IGluY29tcGxldGVUYXNrcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSBbXTtcclxuICAgIGxldCBjdXJyZW50VGFzayA9IG51bGw7XHJcblxyXG4gICAgLyogUmV0dXJucyB0YXNrIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0VGFza0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGFza0NvdW50O1xyXG4gICAgICAgIHRhc2tDb3VudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG91cigpIHtcclxuICAgICAgICByZXR1cm4gY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbG91cihuZXdDb2xvdXIpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZENvbG91cihuZXdDb2xvdXIpKSB7XHJcbiAgICAgICAgICAgIGNvbG91ciA9IG5ld0NvbG91cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIHNvcnRJbmNvbXBsZXRlVGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYW4gaW5jb21wbGV0ZSB0YXNrIGZyb20gdGhlIHByb2plY3QgKGFuZCBhZGQgdG8gY29tcGxldGVUYXNrcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5mb3JFYWNoKCh0YXNrRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suZ2V0VGFza0lEKCkgPT09IHRhc2tFbGVtZW50LmdldFRhc2tJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNvbXBsZXRlVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBjb21wbGV0ZWRUYXNrc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0NvbXBsZXRlZFRhc2tzKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgaW5jb21wbGV0ZSB0YXNrcyB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbiAgICBmdW5jdGlvbiBnZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXNrcyA9IFtdO1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkVGFza3MucHVzaChzZXJpYWxpemVUYXNrKHRhc2spKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0SW5jb21wbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5zb3J0KHByaW9yaXR5U29ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCB0YXNrIHRvIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NvbXBsZXRlZFRhc2tzKHRhc2spIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIHNvcnRDb21wbGV0ZWRUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIGNvbXBsZXRlZCB0YXNrIGZyb20gdGhlIHByb2plY3QgKGFuZCBhZGQgdG8gaW5jb21wbGV0ZWRUYXNrcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MuZm9yRWFjaCgodGFza0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmdldFRhc2tJRCgpID09PSB0YXNrRWxlbWVudC5nZXRUYXNrSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBpbmNvbXBsZXRlVGFza3NcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSBTdGF0dXMuSU5DT01QTEVURSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvSW5jb21wbGV0ZVRhc2tzKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgY29tcGxldGVkIHRhc2tzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFza3MgPSBbXTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkVGFza3MucHVzaChzZXJpYWxpemVUYXNrKHRhc2spKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0Q29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3Muc29ydChwcmlvcml0eVNvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgY3VycmVudFRhc2sgPSBuZXdUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXRDb2xvdXIsIHNldENvbG91cixcclxuICAgICAgICBnZXRJbmNvbXBsZXRlVGFza3MsIGFkZFRvSW5jb21wbGV0ZVRhc2tzLCByZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzLCBzb3J0SW5jb21wbGV0ZVRhc2tzLCBnZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzLFxyXG4gICAgICAgIGdldENvbXBsZXRlZFRhc2tzLCBhZGRUb0NvbXBsZXRlZFRhc2tzLCByZW1vdmVGcm9tQ29tcGxldGVkVGFza3MsIHNvcnRDb21wbGV0ZWRUYXNrcywgZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzLFxyXG4gICAgICAgIGdldFByb2plY3RJRCxcclxuICAgICAgICBnZXROZXh0VGFza0NvdW50LFxyXG4gICAgICAgIGdldEN1cnJlbnRUYXNrLCBzZXRDdXJyZW50VGFzaywgXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0ZXAgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKG5ld1N0YXR1cykpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ09NUExFVEVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldFN0YXR1cywgc2V0U3RhdHVzLCBzd2FwU3RhdHVzLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgZ2V0U3RlcElELFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUHJpb3JpdHkgfSBmcm9tIFwiLi4vLi4vZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXJpYWxpemVkUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVTdGVwIH0gZnJvbSBcIi4uL3N0ZXAuanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSB0YXNrIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgbGV0IHN0ZXBDb3VudCA9IDA7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gW107XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICBsZXQgY3VycmVudFN0ZXAgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgc3RlcCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHN0ZXBDb3VudDtcclxuICAgICAgICBzdGVwQ291bnQrKztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkUHJpb3JpdHkobmV3UHJpb3JpdHkpKSB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMobmV3U3RhdHVzKSkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3YXBTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DT01QTEVURUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluY29tcGxldGVTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIHN0ZXAgdG8gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBzdGVwIGZyb20gaW5jb21wbGV0ZVN0ZXBzIChhbmQgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goKHN0ZXBFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGVwSUQoKSA9PT0gc3RlcEVsZW1lbnQuZ2V0U3RlcElEKCkpIHtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGVTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGNvbXBsZXRlZFN0ZXBzXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ29tcGxldGVkU3RlcHMoc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvbnZlcnRzIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0ZXBzID0gW107XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRTdGVwcy5wdXNoKHNlcmlhbGl6ZVN0ZXAoc3RlcCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFN0ZXBzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgc3RlcCBmcm9tIHRoZSB0YXNrIChhbmQgYWRkIHRvIGluY29tcGxldGVTdGVwcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMuZm9yRWFjaCgoc3RlcEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0ZXBJRCgpID09PSBzdGVwRWxlbWVudC5nZXRTdGVwSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkU3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBpbmNvbXBsZXRlU3RlcHNcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuSU5DT01QTEVURSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvSW5jb21wbGV0ZVN0ZXBzKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgY29tcGxldGVkIHN0ZXBzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRTdGVwcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RlcHMgPSBbXTtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkU3RlcHMucHVzaChzZXJpYWxpemVTdGVwKHN0ZXApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3RlcCgpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFN0ZXAobmV3U3RlcCkge1xyXG4gICAgICAgIGN1cnJlbnRTdGVwID0gbmV3U3RlcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgXHJcbiAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgc3dhcFN0YXR1cywgXHJcbiAgICAgICAgZ2V0SW5jb21wbGV0ZVN0ZXBzLCBhZGRUb0luY29tcGxldGVTdGVwcywgcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcywgZ2V0U2VyaWFsaXplZEluY29tcGxldGVTdGVwcyxcclxuICAgICAgICBnZXRDb21wbGV0ZWRTdGVwcywgYWRkVG9Db21wbGV0ZWRTdGVwcywgcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzLCBnZXRTZXJpYWxpemVkQ29tcGxldGVkU3RlcHMsXHJcbiAgICAgICAgZ2V0UHJvamVjdElELCBnZXRUYXNrSUQsIFxyXG4gICAgICAgIGdldE5leHRTdGVwQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL2Rpc3BsYXkvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUb1NpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kaXNwbGF5L3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVzZXJpYWxpemVUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwcm9qZWN0IHRoYXQgc3RvcmVzIGFsbCB1bmFzc2lnbmVkIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgXCJNaXNjZWxsYW5lb3VzXCIsIFxyXG4gICAgICAgIFwiRGVmYXVsdCBwcm9qZWN0XCIsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIGFkZFRvUHJvamVjdHMobmV3UHJvamVjdCk7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBhbiBleGlzdGluZyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RJdGVtLmdldFByb2plY3RJRCgpID09PSBwcm9qZWN0LmdldFByb2plY3RJRCgpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIFJldHVybnMgcHJvamVjdCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG5mdW5jdGlvbiBnZXROZXh0UHJvamVjdENvdW50KCkge1xyXG4gICAgY29uc3QgY291bnQgPSBwcm9qZWN0Q291bnQ7XHJcbiAgICBwcm9qZWN0Q291bnQrKztcclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHByb2plY3QgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgYWRkVG9TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgcHJvamVjdCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyB0aGUgY29sb3VyIG9mIGEgcHJvamVjdCBiYXNlZCBvbiBjb2xvdXIgcGlja2VyIGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdDb2xvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cclxuICAgIHByb2plY3Quc2V0Q29sb3VyKG5ld0NvbG91cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzKG5ld1Byb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RzKG5ld1Byb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGRlc2MgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvdXIgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gcHJvamVjdC5nZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHByb2plY3QuZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGluY29tcGxldGVUYXNrcyxcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBjb2xvdXIsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgZnJvbSBKU09OIGZvcm1hdCBkYXRhICovXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBDcmVhdGluZyBwcm9qZWN0IGZyb20gZGF0YVxyXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2MpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgLy8gQWRkaW5nIGFsbCB0YXNrc1xyXG4gICAgcHJvamVjdC5pbmNvbXBsZXRlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVRhc2sobmV3UHJvamVjdCwgdGFzayk7XHJcbiAgICB9KVxyXG4gICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplVGFzayhuZXdQcm9qZWN0LCB0YXNrKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQWRkaW5nIGNvbG91clxyXG4gICAgbmV3UHJvamVjdC5zZXRDb2xvdXIocHJvamVjdC5jb2xvdXIpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplZFByb2plY3RzKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZFByb2plY3RzID0gW107XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQcm9qZWN0cy5wdXNoKHNlcmlhbGl6ZVByb2plY3QocHJvamVjdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFByb2plY3RzO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdENvdW50ID0gMDtcclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG5leHBvcnQgeyBcclxuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sICBcclxuICAgIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sXHJcbiAgICBnZXRQcm9qZWN0cywgc2V0UHJvamVjdHMsIGRlbGV0ZVByb2plY3QsXHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsXHJcbiAgICBnZXRTZXJpYWxpemVkUHJvamVjdHMsIGRlc2VyaWFsaXplUHJvamVjdFxyXG59IiwiaW1wb3J0IHN0ZXBGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qc1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL2Rpc3BsYXkvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0U2VyaWFsaXplZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9jb21tb24vbG9jYWxTdG9yYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBzdGVwIGFuZCBhZGRzIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKHRhc2ssIHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSB0YXNrLmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gdGFzay5nZXRUYXNrSUQoKTtcclxuICAgIGNvbnN0IHN0ZXBJRCA9IHRhc2suZ2V0TmV4dFN0ZXBDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3U3RlcCA9IHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKTtcclxuXHJcbiAgICB0YXNrLmFkZFRvSW5jb21wbGV0ZVN0ZXBzKG5ld1N0ZXApO1xyXG4gICAgdGFzay5zZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgYSBzdGVwIGZyb20gY3JlYXRpb24gZm9ybSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwRnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICBjcmVhdGVTdGVwKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKSwgdGl0bGUpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuLyogRWRpdHMgYSBzdGVwIGJhc2VkIG9uIGluZm9ybWF0aW9uIGluIGVkaXQgZm9ybSAqL1xyXG5mdW5jdGlvbiBlZGl0U3RlcEZyb21Gb3JtKHN0ZXApIHtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgIHN0ZXAuc2V0VGl0bGUobmV3VGl0bGUpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ29udmVydCB0aGUgc3RlcCB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVN0ZXAoc3RlcCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBzdGVwLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBzdGVwLmdldFN0YXR1cygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzdGVwIGZyb20gSlNPTiBmb3JtYXQgZGF0YSAqL1xyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVN0ZXAodGFzaywgc3RlcCkge1xyXG4gICAgLy8gQ3JlYXRpbmcgc3RlcCBmcm9tIGRhdGFcclxuICAgIGNyZWF0ZVN0ZXAodGFzaywgc3RlcC50aXRsZSk7XHJcbiAgICBjb25zdCBuZXdTdGVwID0gdGFzay5nZXRDdXJyZW50U3RlcCgpO1xyXG5cclxuICAgIC8vIEFkZGluZyB0byBhcHByb3ByaWF0ZSBsb2NhdGlvblxyXG4gICAgaWYgKHN0ZXAuc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgbmV3U3RlcC5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgdGFzay5yZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgY3JlYXRlU3RlcCwgXHJcbiAgICBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0sIFxyXG4gICAgc2VyaWFsaXplU3RlcCwgZGVzZXJpYWxpemVTdGVwXHJcbn0iLCJpbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZVN0ZXAgfSBmcm9tIFwiLi9zdGVwLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgdGFzayBhbmQgYWRkcyB0byBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0LmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gcHJvamVjdC5nZXROZXh0VGFza0NvdW50KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpO1xyXG5cclxuICAgIHByb2plY3QuYWRkVG9JbmNvbXBsZXRlVGFza3MobmV3VGFzayk7XHJcbiAgICBwcm9qZWN0LnNldEN1cnJlbnRUYXNrKG5ld1Rhc2spO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHRhc2sgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soZ2V0Q3VycmVudFByb2plY3QoKSwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuLyogRWRpdHMgYSB0YXNrIGJhc2VkIG9uIGluZm9ybWF0aW9uIGluIGVkaXQgZm9ybSAqL1xyXG5mdW5jdGlvbiBlZGl0VGFza0Zyb21Gb3JtKHRhc2spIHtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cclxuICAgIHRhc2suc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbihuZXdEZXNjKTtcclxuICAgIHRhc2suc2V0RHVlRGF0ZShuZXdEYXRlKTtcclxuICAgIHRhc2suc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ29tcGxldGUgYSB0YXNrIGFuZCBjb252ZXJ0IGFsbCBzdGVwcyB0byByZXF1aXJlZCBzdGF0dXMqL1xyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgdGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSB0YXNrIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplVGFzayh0YXNrKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRhc2suZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGRlc2MgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKCk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHRhc2suZ2V0U3RhdHVzKCk7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSB0YXNrLmdldFNlcmlhbGl6ZWRJbmNvbXBsZXRlU3RlcHMoKTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gdGFzay5nZXRTZXJpYWxpemVkQ29tcGxldGVkU3RlcHMoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2MsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLFxyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzLFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0YXNrIGZyb20gSlNPTiBmb3JtYXQgZGF0YSAqL1xyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgLy8gQ3JlYXRpbmcgdGFzayBmcm9tIGRhdGFcclxuICAgIGNyZWF0ZVRhc2socHJvamVjdCwgdGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHByb2plY3QuZ2V0Q3VycmVudFRhc2soKVxyXG5cclxuICAgIC8vIEFkZGluZyBhbGwgc3RlcHNcclxuICAgIHRhc2suaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVTdGVwKG5ld1Rhc2ssIHN0ZXApO1xyXG4gICAgfSlcclxuICAgIHRhc2suY29tcGxldGVkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVN0ZXAobmV3VGFzaywgc3RlcCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFkZGluZyB0byBhcHByb3ByaWF0ZSBsb2NhdGlvblxyXG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgbmV3VGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgcHJvamVjdC5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKG5ld1Rhc2spO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICAgIGNyZWF0ZVRhc2ssIFxyXG4gICAgY29tcGxldGVUYXNrLCBcclxuICAgIGNyZWF0ZVRhc2tGcm9tRm9ybSwgZWRpdFRhc2tGcm9tRm9ybSwgXHJcbiAgICBzZXJpYWxpemVUYXNrLCBkZXNlcmlhbGl6ZVRhc2tcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBkZXNlcmlhbGl6ZVByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgc2V0UHJvamVjdHMgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy90YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXAgfSBmcm9tIFwiLi9tb2RlbHMvb3JnYW5pemVycy9zdGVwXCI7XHJcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgfSBmcm9tIFwiLi9jb21tb24vZXZlbnRMaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2NvbW1vbi9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuXHJcbi8vIEltcG9ydGluZyBsb2NhbCBzdG9yYWdlXHJcbmNvbnN0IHN0b3JhZ2VEYXRhID0gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4vLyBMb2FkIHN0b3JlZCBkYXRhXHJcbmlmIChzdG9yYWdlRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgc3RvcmFnZURhdGEuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KVxyXG59XHJcbi8vIFVzZSBkZWZhdWx0IGRhdGFcclxuZWxzZSB7XHJcbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG5cclxuICAgIC8vIC8vIFdvcmsgcHJvamVjdC90YXNrcy9zdGVwc1xyXG4gICAgLy8gY3JlYXRlUHJvamVjdChcIldvcmsgTWVldGluZ3NcIiwgXCJBbGwgdGhpbmdzIHdvcmsgbWVldGluZyByZWxhdGVkIVwiKTtcclxuXHJcbiAgICAvLyBjcmVhdGVUYXNrKGdldFByb2plY3RzKClbMV0sIFwiTW9uZGF5IE1lZXRpbmdzXCIsIFwiQWxsIG1vbmRheSB3b3JrIG1lZXRpbmdzXCIsIFwiXCIsIFwiTWVkXCIpO1xyXG4gICAgLy8gY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIk1vcm5pbmcgTWVldGluZ1wiKTtcclxuICAgIC8vIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJBZnRlcm5vb24gTWVldGluZ1wiKTtcclxuXHJcbiAgICAvLyBjcmVhdGVUYXNrKGdldFByb2plY3RzKClbMV0sIFwiUHJlc2VudGF0aW9uXCIsIFwiQWxsIHdvcmsgcHJlc2VudGF0aW9uc1wiLCBcIlwiLCBcIk5vbmVcIik7XHJcbiAgICAvLyBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMV0sIFwiR2VuZXJhdGUgRmluYW5jaWFsIEdyYXBoc1wiKTtcclxuICAgIC8vIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVsxXSwgXCJDaGVjayByZXBvcnQgZHJhZnQgZm9yIHR5cG9zXCIpO1xyXG5cclxuICAgIC8vIC8vIFNjaG9vbCBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbiAgICAvLyBjcmVhdGVQcm9qZWN0KFwiU2Nob29sXCIsIFwiQWxsIHRoaW5ncyBzY2hvb2wgcmVsYXRlZCFcIik7XHJcblxyXG4gICAgLy8gY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzJdLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuICAgIC8vIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsyXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJIb21ld29ya1wiKTtcclxufVxyXG5cclxuLy8gTG9hZCB0aGUgaW5pdGlhbCBwYWdlXHJcbmRpc3BsYXkucmVuZGVyU2lkZWJhcihnZXRQcm9qZWN0cygpKTtcclxuZGlzcGxheS5mb3Jtcy5nZW5lcmF0ZUZvcm1Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikpO1xyXG5kaXNwbGF5LnJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuY3JlYXRlU2lkZWJhckxpc3RlbmVycyhnZXRQcm9qZWN0cygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=