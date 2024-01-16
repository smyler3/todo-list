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
    border: 1px solid var(--colour-picker-border);
    border-radius: 3px;
}

.colour-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}

.colour-radio-btn {
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
    background-color: var(--white);
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    /* Common colours */\r\n    --white: #ffffff;\r\n    --black: #000000;\r\n\r\n    /* General page styling */\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n    --colour-picker-border: rgb(118, 118, 118);\r\n\r\n    /* Button styling */\r\n    --action-btn-background: var(--white);\r\n    --action-btn-hover-background: rgba(0, 0, 0, 0.1);\r\n    --submit-btn-background: rgb(0, 89, 255);\r\n\r\n    /* Shadows */\r\n    --dark-shadow: #00000040;\r\n    --light-shadow: #00000025;\r\n    --faint-shadow: #00000010;\r\n\r\n    /* Task priority indicators */\r\n    --input-highlight: #006eff;\r\n    --priority-high-text: #ae2e24;\r\n    --priority-high-background: #ffeceb;\r\n    --priority-med-text: #5e4db2;\r\n    --priority-med-background: #f3f0ff;\r\n    --priority-low-text: #0055cc;\r\n    --priority-low-background: #e9f2ff;\r\n    --priority-none-text: var(--black);\r\n    --priority-none-background: #f0f1f4;\r\n\r\n    /* Completed status indicators */\r\n    --completed-card-text: #6a6a6a;\r\n    --completed-card-background: rgb(210, 210, 210);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n    background-color: #ffffff00;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--action-btn-hover-background);\r\n}\r\n\r\n.disabled-action-btn {\r\n    cursor: default;\r\n    background-color: var(--completed-card-background)\r\n}\r\n.disabled-action-btn:hover {\r\n    background-color: var(--completed-card-background);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    grid: 1fr 5fr / 1fr 4fr;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -1 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n    background-color: var(--project-icon);\r\n    border: 2px solid #00000099;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid var(--black);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid #000000;\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid var(--input-highlight);\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: var(--dark-shadow);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: var(--white);\r\n    background-color: var(--submit-btn-background);\r\n}\r\n\r\n.cancel-btn {\r\n    color: var(--submit-btn-background);\r\n    background-color: var(--white);\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid var(--submit-btn-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid var(--colour-picker-border);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n}\r\n\r\n.colour-radio-btn-label {\r\n    text-align: center;\r\n    color: var(--black);\r\n    width: 100%;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n    overflow-y: auto;\r\n    /* padding-right: calc(100vw - 100%); */\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid var(--black);\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: var(--black);\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: var(--black);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.steps-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.task-list-container {\r\n    gap: 0.2rem;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.task-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px var(--light-shadow);\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.step-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: var(--priority-high-text);\r\n    background-color: var(--priority-high-background);\r\n}\r\n\r\n.priority-med {\r\n    color: var(--priority-med-text);\r\n    background-color: var(--priority-med-background);\r\n}\r\n\r\n.priority-low {\r\n    color: var(--priority-low-text);\r\n    background-color: var(--priority-low-background);\r\n}\r\n\r\n.priority-none {\r\n    color: var(--priority-none-text);\r\n    background-color: var(--priority-none-background);\r\n}\r\n\r\n.completed {\r\n    background-color: var(--completed-card-background);\r\n    color: var(--completed-card-text);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n/* .footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: var(--white);\r\n} */"],"sourceRoot":""}]);
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
    NONE: "#ffffff", // Muted gray
    PINK: "hsl(320, 60%, 85%)", // Muted pink
    PURPLE: "hsl(270, 60%, 75%)", // Muted purple
    BLUE: "hsl(210, 60%, 75%)", // Muted blue
    TEAL: "hsl(190, 60%, 75%)", // Muted teal
    GREEN: "hsl(120, 60%, 85%)", // Muted green
    YELLOW: "hsl(50, 60%, 85%)", // Muted yellow
    ORANGE: "hsl(30, 60%, 85%)", // Muted orange
    RED: "hsl(0, 60%, 85%)" // Muted red
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
        if (isValidStatus(newStatus)) {
            status = newStatus;
        }
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
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/localStorage */ "./src/modules/localStorage/index.js");
/* harmony import */ var _enums_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/priority */ "./src/models/enums/priority.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project */ "./src/models/organizers/project.js");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../step */ "./src/models/organizers/step.js");






/* Creates a single instance of a task object */
function taskFactory(title, description, dueDate, priority, projectID, taskID) {
    let stepCount = 0;
    const incompleteSteps = [];
    const completedSteps = [];
    let status = _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE;
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
        if ((0,_enums_priority__WEBPACK_IMPORTED_MODULE_1__.isValidPriority)(newPriority)) {
            priority = newPriority;
        }
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        if ((0,_enums_status__WEBPACK_IMPORTED_MODULE_2__.isValidStatus)(newStatus)) {
            status = newStatus;
        }
    }

    function swapStatus() {
        if (status === _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED) {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE;
        }
        else {
            status = _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED;
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
                if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED) {
                    addToCompletedSteps(step);
                }

                // Save change locally
                (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all incomplete steps to a JSON-friendly format */
    function getSerializedIncompleteSteps() {
        const serializedSteps = [];
        incompleteSteps.forEach(step => {
            serializedSteps.push((0,_step__WEBPACK_IMPORTED_MODULE_4__.serializeStep)(step));
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
                if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE) {
                    addToIncompleteSteps(step);
                }

                // Save change locally
                (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_3__.getSerializedProjects)());

                return;
            }
        });
    }

    /* Converts all completed steps to a JSON-friendly format */
    function getSerializedCompletedSteps() {
        const serializedSteps = [];
        completedSteps.forEach(step => {
            serializedSteps.push((0,_step__WEBPACK_IMPORTED_MODULE_4__.serializeStep)(step));
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
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory */ "./src/models/organizers/factories/projectFactory.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _pages_sidebar_sidebarProjectsGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/sidebar/sidebarProjectsGenerator.js */ "./src/pages/sidebar/sidebarProjectsGenerator.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/models/organizers/task.js");






/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    const defaultProject = (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
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

    const newProject = (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/display */ "./src/pages/display.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/status.js */ "./src/models/enums/status.js");






/* Create a new step and adds to a task */
function createStep(task, title) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, projectID, taskID, stepID);

    task.addToIncompleteSteps(newStep);
    task.setCurrentStep(newStep);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
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

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
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
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/taskFactory */ "./src/models/organizers/factories/taskFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/models/organizers/project.js");
/* harmony import */ var _pages_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/display.js */ "./src/pages/display.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/localStorage/index.js */ "./src/modules/localStorage/index.js");
/* harmony import */ var _step_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step.js */ "./src/models/organizers/step.js");







/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.getProjectID();
    const taskID = project.getNextTaskCount();
    const newTask = (0,_factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, projectID, taskID);

    project.addToIncompleteTasks(newTask);
    project.setCurrentTask(newTask);

    // Save change locally
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_4__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Creates a task from creation form */
function createTaskFromForm() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const date = document.querySelector("#task-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    createTask((0,_project__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)(), title, desc, date, priority);
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
    (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_4__.saveProjectsToLocalStorage)((0,_project__WEBPACK_IMPORTED_MODULE_2__.getSerializedProjects)());
}

/* Complete a task and convert all steps to required status*/
function completeTask(task) {
    task.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
    // Mark incomplete steps
    task.getIncompleteSteps().forEach(step => {
        step.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
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
        ;(0,_step_js__WEBPACK_IMPORTED_MODULE_5__.deserializeStep)(newTask, step);
    })
    task.completedSteps.forEach(step => {
        ;(0,_step_js__WEBPACK_IMPORTED_MODULE_5__.deserializeStep)(newTask, step);
    })

    // Adding to appropriate location
    if (task.status === _enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED) {
        newTask.setStatus(_enums_status__WEBPACK_IMPORTED_MODULE_1__.Status.COMPLETED);
        project.removeFromIncompleteTasks(newTask);
    }
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
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/display */ "./src/pages/display.js");
/* harmony import */ var _pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/projectPage/stepsCardHandler */ "./src/pages/projectPage/stepsCardHandler.js");
/* harmony import */ var _pages_projectPage_tasksCardHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/projectPage/tasksCardHandler */ "./src/pages/projectPage/tasksCardHandler.js");







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
    // Moves the card wrapper to the completed tasks section 
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
}

function setTaskStatusIncompleteHandler(task) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().removeFromCompletedTasks(task);
    // Moves the card wrapper to the incomplete tasks section 
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
    (0,_pages_display__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());
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
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    (0,_pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_4__.setStepCardCompleted)(stepCard);

    // Moves the card to the completed steps list
    const parent = stepCard.parentElement;
    parent.nextSibling.appendChild(stepCard);
}

function setStepStatusIncompleteHandler(step) {
    (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().getCurrentTask().removeFromCompletedSteps(step);
    const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
    (0,_pages_projectPage_stepsCardHandler__WEBPACK_IMPORTED_MODULE_4__.setStepCardIncomplete)(stepCard);

    // Moves the card to the incomplete steps list
    const parent = stepCard.parentElement;
    parent.previousSibling.appendChild(stepCard);
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
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/organizers/project */ "./src/models/organizers/project.js");


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
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _models_enums_colours_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/enums/colours.js */ "./src/models/enums/colours.js");







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
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Edit", form, () => {
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

    const form = generateFormBase("task-edit-form", "Edit Task", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Edit", form, () => {
        (0,_models_organizers_task_js__WEBPACK_IMPORTED_MODULE_4__.editTaskFromForm)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.editTaskCardInformation)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().getCurrentTask());
        (0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)().sortIncompleteTasks();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_projectPage_index_js__WEBPACK_IMPORTED_MODULE_7__.renderProjectPage)((0,_models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProject)());
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
/* harmony import */ var _models_enums_colours_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/enums/colours.js */ "./src/models/enums/colours.js");









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
        projectHeader.style.backgroundColor = project.getColour();

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_utility_actionButtons__WEBPACK_IMPORTED_MODULE_2__.generateActionButtons)(projectButtons));

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

    // Update the visual status of newly added cards
    updateCompletionStatus(project);
}

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
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _models_enums_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_stepActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/stepActionButtonListeners.js");








/* Create a list of steps for a task */
function generateStepCards(steps, parent) {
    /* Create a step item */
    function generateStepCard(step) {

        // Step buttons to be created
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

        // Step information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion checkbox
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
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");
/* harmony import */ var _models_organizers_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/organizers/project.js */ "./src/models/organizers/project.js");
/* harmony import */ var _modules_eventListeners_checkboxListeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/eventListeners/checkboxListeners.js */ "./src/modules/eventListeners/checkboxListeners.js");
/* harmony import */ var _modules_eventListeners_actionButtonListeners_taskActionButtonListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js */ "./src/modules/eventListeners/actionButtonListeners/taskActionButtonListeners.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../display.js */ "./src/pages/display.js");
/* harmony import */ var _models_enums_status_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/enums/status.js */ "./src/models/enums/status.js");










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
        taskItem.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__.generateActionButtons)(taskButtons));

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
    sidebarItem.firstChild.style.backgroundColor = project.getColour();
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

function disableActionButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
        // Visually show disabled
        button.classList.add("disabled-action-btn");
    })
}

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
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/organizers/project */ "./src/models/organizers/project.js");
/* harmony import */ var _models_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/organizers/task */ "./src/models/organizers/task.js");
/* harmony import */ var _models_organizers_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/organizers/step */ "./src/models/organizers/step.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/display */ "./src/pages/display.js");
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");
/* harmony import */ var _modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/localStorage/index.js */ "./src/modules/localStorage/index.js");








// Importing local storage
const storageData = (0,_modules_localStorage_index_js__WEBPACK_IMPORTED_MODULE_6__.loadProjectsFromLocalStorage)();
// Load stored data
if (storageData !== null) {
    storageData.forEach(project => {
        (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.deserializeProject)(project);
    })
}
// Use default data
else {
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
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsY0FBYyxhQUFhLHlCQUF5QixhQUFhLHlCQUF5QixhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLEtBQUssUUFBUSxLQUFLLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sUUFB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VztBQUMxQixJQUFJLG1FQUFVLENBQUMsdUVBQVc7QUFDMUIsSUFBSSxtRUFBVSxDQUFDLHVFQUFXO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLHlFQUFhO0FBQ2pCO0FBQ0EsSUFBSSxtRUFBVSxDQUFDLHVFQUFXO0FBQzFCLElBQUksbUVBQVUsQ0FBQyx1RUFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSx5REFBcUIsQ0FBQyx1RUFBVztBQUNqQyxtRUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUE2QixDQUFDLHVFQUFXO0FBQ3pDO0FBQ0Esd0ZBQXNCLENBQUMsdUVBQVcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9jb2xvdXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvb3JnYW5pemVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3N0ZXBGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9wcm9qZWN0QWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9zdGVwQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy90YXNrQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FsbFByb2plY3RzTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2Zvcm1CdXR0b25MaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvc2lkZWJhckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy90ZXh0RmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS90YXNrc0NhcmRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLyogQ29tbW9uIGNvbG91cnMgKi9cclxuICAgIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xyXG5cclxuICAgIC8qIEdlbmVyYWwgcGFnZSBzdHlsaW5nICovXHJcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogcmdiYSgyMjMsIDE2MywgMTYzLCAwLjMpOyAvKnJnYmEoMjU1LCAxOTgsIDExMiwgMC4wNSkqL1xyXG4gICAgLS1zaWRlYmFyLXRleHQ6IHJnYigwLCAwLCAwKTtcclxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cclxuICAgIC0tcHJvamVjdC1pY29uOiByZ2JhKDE3NywgOTYsIDIzMSwgMC41KTtcclxuICAgIC0tY29sb3VyLXBpY2tlci1ib3JkZXI6IHJnYigxMTgsIDExOCwgMTE4KTtcclxuXHJcbiAgICAvKiBCdXR0b24gc3R5bGluZyAqL1xyXG4gICAgLS1hY3Rpb24tYnRuLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIC0tYWN0aW9uLWJ0bi1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLXN1Ym1pdC1idG4tYmFja2dyb3VuZDogcmdiKDAsIDg5LCAyNTUpO1xyXG5cclxuICAgIC8qIFNoYWRvd3MgKi9cclxuICAgIC0tZGFyay1zaGFkb3c6ICMwMDAwMDA0MDtcclxuICAgIC0tbGlnaHQtc2hhZG93OiAjMDAwMDAwMjU7XHJcbiAgICAtLWZhaW50LXNoYWRvdzogIzAwMDAwMDEwO1xyXG5cclxuICAgIC8qIFRhc2sgcHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xyXG4gICAgLS1pbnB1dC1oaWdobGlnaHQ6ICMwMDZlZmY7XHJcbiAgICAtLXByaW9yaXR5LWhpZ2gtdGV4dDogI2FlMmUyNDtcclxuICAgIC0tcHJpb3JpdHktaGlnaC1iYWNrZ3JvdW5kOiAjZmZlY2ViO1xyXG4gICAgLS1wcmlvcml0eS1tZWQtdGV4dDogIzVlNGRiMjtcclxuICAgIC0tcHJpb3JpdHktbWVkLWJhY2tncm91bmQ6ICNmM2YwZmY7XHJcbiAgICAtLXByaW9yaXR5LWxvdy10ZXh0OiAjMDA1NWNjO1xyXG4gICAgLS1wcmlvcml0eS1sb3ctYmFja2dyb3VuZDogI2U5ZjJmZjtcclxuICAgIC0tcHJpb3JpdHktbm9uZS10ZXh0OiB2YXIoLS1ibGFjayk7XHJcbiAgICAtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZDogI2YwZjFmNDtcclxuXHJcbiAgICAvKiBDb21wbGV0ZWQgc3RhdHVzIGluZGljYXRvcnMgKi9cclxuICAgIC0tY29tcGxldGVkLWNhcmQtdGV4dDogIzZhNmE2YTtcclxuICAgIC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZDogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcclxufVxyXG4uYWN0aW9uLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKVxyXG59XHJcbi5kaXNhYmxlZC1hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGFnZSBMYXlvdXQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkOiAxZnIgNWZyIC8gMWZyIDRmcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBTaWRlYmFyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGVhYmFyLXRleHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSxcclxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbn1cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLXRpdGxlIHtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcblxyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLypcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogR2VuZXJhbCBGb3JtIFN0eWxpbmdcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50aXRsZS1pbnB1dDpmb2N1cyxcclxuLmRhdGUtaW5wdXQ6Zm9jdXMsXHJcbi5kZXNjLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1oaWdobGlnaHQpO1xyXG59IFxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2hhZG93KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcclxufSBcclxuXHJcbi5jcmVhdGlvbi1mb3JtLFxyXG4uZGVsZXRlLWZvcm0sXHJcbi5jb2xvdXItZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcblxyXG4uZm9ybS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tYmFja2dyb3VuZCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Ym1pdC1idG4tYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuLnRpdGxlLWlucHV0LFxyXG4uZGF0ZS1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kZXNjLWlucHV0IHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIERlbGV0aW9uIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5jb2xvdXItZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgxZnIsIDUwcHgpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3VyLXBpY2tlci1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uY29sb3VyLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uY29sb3VyLXJhZGlvLWJ0biB7XHJcbn1cclxuXHJcbi5jb2xvdXItcmFkaW8tYnRuLWxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59ICovXHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7ICovXHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWxsIFByb2plY3RzIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtY2FyZC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn0gXHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zZWN0aW9uLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbn0gXHJcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnRhc2stbGlzdC1jb250YWluZXIsXHJcbi5zdGVwcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xyXG59XHJcblxyXG4udGFzay1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XHJcbn0gXHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdGVwLWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LXRleHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9uZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZS10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtdGV4dCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb290ZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4vKiAuZm9vdGVyIHtcclxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQix5QkFBeUI7SUFDekIsOENBQThDLEVBQUUsNEJBQTRCO0lBQzVFLDRCQUE0QjtJQUM1QixxREFBcUQsRUFBRSxxREFBcUQ7SUFDNUcsdUNBQXVDO0lBQ3ZDLDBDQUEwQzs7SUFFMUMsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsd0NBQXdDOztJQUV4QyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7O0lBRXpCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLG1DQUFtQzs7SUFFbkMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7Ozs7RUFJRTtBQUNGO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixh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bEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7RUFJRTtBQUNGOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztFQUlFO0NBQ0Q7SUFDRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELGlDQUFpQztBQUNyQzs7QUFFQTs7OztFQUlFOztBQUVGOzs7OztHQUtHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLyogQ29tbW9uIGNvbG91cnMgKi9cXHJcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXHJcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG5cXHJcXG4gICAgLyogR2VuZXJhbCBwYWdlIHN0eWxpbmcgKi9cXHJcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cXHJcXG4gICAgLS1zaWRlYmFyLXRleHQ6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xcclxcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XFxyXFxuICAgIC0tY29sb3VyLXBpY2tlci1ib3JkZXI6IHJnYigxMTgsIDExOCwgMTE4KTtcXHJcXG5cXHJcXG4gICAgLyogQnV0dG9uIHN0eWxpbmcgKi9cXHJcXG4gICAgLS1hY3Rpb24tYnRuLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgLS1hY3Rpb24tYnRuLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgLS1zdWJtaXQtYnRuLWJhY2tncm91bmQ6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG5cXHJcXG4gICAgLyogU2hhZG93cyAqL1xcclxcbiAgICAtLWRhcmstc2hhZG93OiAjMDAwMDAwNDA7XFxyXFxuICAgIC0tbGlnaHQtc2hhZG93OiAjMDAwMDAwMjU7XFxyXFxuICAgIC0tZmFpbnQtc2hhZG93OiAjMDAwMDAwMTA7XFxyXFxuXFxyXFxuICAgIC8qIFRhc2sgcHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xcclxcbiAgICAtLWlucHV0LWhpZ2hsaWdodDogIzAwNmVmZjtcXHJcXG4gICAgLS1wcmlvcml0eS1oaWdoLXRleHQ6ICNhZTJlMjQ7XFxyXFxuICAgIC0tcHJpb3JpdHktaGlnaC1iYWNrZ3JvdW5kOiAjZmZlY2ViO1xcclxcbiAgICAtLXByaW9yaXR5LW1lZC10ZXh0OiAjNWU0ZGIyO1xcclxcbiAgICAtLXByaW9yaXR5LW1lZC1iYWNrZ3JvdW5kOiAjZjNmMGZmO1xcclxcbiAgICAtLXByaW9yaXR5LWxvdy10ZXh0OiAjMDA1NWNjO1xcclxcbiAgICAtLXByaW9yaXR5LWxvdy1iYWNrZ3JvdW5kOiAjZTlmMmZmO1xcclxcbiAgICAtLXByaW9yaXR5LW5vbmUtdGV4dDogdmFyKC0tYmxhY2spO1xcclxcbiAgICAtLXByaW9yaXR5LW5vbmUtYmFja2dyb3VuZDogI2YwZjFmNDtcXHJcXG5cXHJcXG4gICAgLyogQ29tcGxldGVkIHN0YXR1cyBpbmRpY2F0b3JzICovXFxyXFxuICAgIC0tY29tcGxldGVkLWNhcmQtdGV4dDogIzZhNmE2YTtcXHJcXG4gICAgLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhbCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxyXFxufVxcclxcbi5hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkLWFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpXFxyXFxufVxcclxcbi5kaXNhYmxlZC1hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUGFnZSBMYXlvdXQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IDFmciA1ZnIgLyAxZnIgNGZyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogU2lkZWJhciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGVhYmFyLXRleHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaGVhZGluZyB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1tZW51LFxcclxcbi5zaWRlYmFyLXByb2plY3RzLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA5OTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci10aXRsZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLypcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKi9cXHJcXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRhdGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1oaWdobGlnaHQpO1xcclxcbn0gXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XFxyXFxufSBcXHJcXG5cXHJcXG4uY3JlYXRpb24tZm9ybSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VibWl0LWJ0bi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIFxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uY29sb3VyLWZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDAuNnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3VyLXBpY2tlci1ib3JkZXIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1yYWRpby1idG4ge1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLXJhZGlvLWJ0bi1sYWJlbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ib2R5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgLyogcGFkZGluZy1yaWdodDogY2FsYygxMDB2dyAtIDEwMCUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBBbGwgUHJvamVjdHMgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4ucHJvamVjdC1jYXJkLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggdmFyKC0tbGlnaHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG59IFxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDEwMDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXIsXFxyXFxuLnN0ZXBzLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2staXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHZhcigtLWxpZ2h0LXNoYWRvdyk7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1jYXJkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcmlvcml0eSBJY29uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIC5wcmlvcml0eS10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxvdyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW5vbmUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZS10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZS1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9vdGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKiAuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAtMiAvIDEgLyAtMSAvIC0xO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogQWN0aW9uIGJ1dHRvbiBjbGFzc25hbWUgRU5VTSAqL1xyXG5jb25zdCBBY3Rpb25zID0ge1xyXG4gICAgQ1JFQVRFOiBcImFkZC1idXR0b25cIixcclxuICAgIENPTE9VUjogXCJjb2xvdXItYnV0dG9uXCIsXHJcbiAgICBFRElUOiBcImVkaXQtYnV0dG9uXCIsXHJcbiAgICBERUxFVEU6IFwiZGVsZXRlLWJ1dHRvblwiLFxyXG59XHJcblxyXG5leHBvcnQgeyBBY3Rpb25zIH0iLCIvKiBDb2xvdXIgRU5VTSAqL1xyXG5jb25zdCBDb2xvdXJzID0ge1xyXG4gICAgTk9ORTogXCIjZmZmZmZmXCIsIC8vIE11dGVkIGdyYXlcclxuICAgIFBJTks6IFwiaHNsKDMyMCwgNjAlLCA4NSUpXCIsIC8vIE11dGVkIHBpbmtcclxuICAgIFBVUlBMRTogXCJoc2woMjcwLCA2MCUsIDc1JSlcIiwgLy8gTXV0ZWQgcHVycGxlXHJcbiAgICBCTFVFOiBcImhzbCgyMTAsIDYwJSwgNzUlKVwiLCAvLyBNdXRlZCBibHVlXHJcbiAgICBURUFMOiBcImhzbCgxOTAsIDYwJSwgNzUlKVwiLCAvLyBNdXRlZCB0ZWFsXHJcbiAgICBHUkVFTjogXCJoc2woMTIwLCA2MCUsIDg1JSlcIiwgLy8gTXV0ZWQgZ3JlZW5cclxuICAgIFlFTExPVzogXCJoc2woNTAsIDYwJSwgODUlKVwiLCAvLyBNdXRlZCB5ZWxsb3dcclxuICAgIE9SQU5HRTogXCJoc2woMzAsIDYwJSwgODUlKVwiLCAvLyBNdXRlZCBvcmFuZ2VcclxuICAgIFJFRDogXCJoc2woMCwgNjAlLCA4NSUpXCIgLy8gTXV0ZWQgcmVkXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRDb2xvdXIgPSBDb2xvdXJzLk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRDb2xvdXIoY29sb3VyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDb2xvdXJzKS5pbmNsdWRlcyhjb2xvdXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyLCBpc1ZhbGlkQ29sb3VyIH0iLCIvKiBPcmdhbml6ZXIgRU5VTSAqL1xyXG5jb25zdCBPcmdhbml6ZXJzID0ge1xyXG4gICAgUFJPSkVDVDogXCJQcm9qZWN0XCIsXHJcbiAgICBUQVNLOiBcIlRhc2tcIixcclxuICAgIFNURVA6IFwiU3RlcFwiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRPcmdhbml6ZXIob3JnYW5pemVyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPcmdhbml6ZXJzKS5pbmNsdWRlcyhvcmdhbml6ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBPcmdhbml6ZXJzLCBpc1ZhbGlkT3JnYW5pemVyIH0iLCIvKiBQcmlvcml0eSBFTlVNICovXHJcbmNvbnN0IFByaW9yaXR5ID0ge1xyXG4gICAgTk9ORTogXCJOb25lXCIsXHJcbiAgICBMT1c6IFwiTG93XCIsXHJcbiAgICBNRUQ6IFwiTWVkXCIsXHJcbiAgICBISUdIOiBcIkhpZ2hcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdFByaW9yaXR5ID0gUHJpb3JpdHkuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBwcmlvcml0eSB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5pbmNsdWRlcyhwcmlvcml0eSk7XHJcbn1cclxuXHJcbi8qIENvbnZlcnRzIGEgcHJpb3JpdHkgdmFsdWUgdG8gYSBudW1lcmljYWwgdmFsdWUgKi9cclxuZnVuY3Rpb24gY29udmVydFByaW9yaXR5VG9WYWx1ZShwcmlvcml0eSkge1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSBQcmlvcml0eS5ISUdIKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gUHJpb3JpdHkuTUVEKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gUHJpb3JpdHkuTE9XKSB7XHJcbiAgICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMztcclxuICAgIH1cclxufVxyXG5cclxuLyogU29ydHMgdHdvIGVsZW1lbnRzIGJhc2VkIG9uIHRoZWlyIHByaW9yaXR5IHZhbHVlcyAqL1xyXG5mdW5jdGlvbiBwcmlvcml0eVNvcnQoeCwgeSkge1xyXG4gICAgY29uc3QgeFByaW9yaXR5VmFsdWUgPSBjb252ZXJ0UHJpb3JpdHlUb1ZhbHVlKHguZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICBjb25zdCB5UHJpb3JpdHlWYWx1ZSA9IGNvbnZlcnRQcmlvcml0eVRvVmFsdWUoeS5nZXRQcmlvcml0eSgpKTtcclxuICAgIGlmICggeFByaW9yaXR5VmFsdWUgPiB5UHJpb3JpdHlWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoeFByaW9yaXR5VmFsdWUgPCB5UHJpb3JpdHlWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5LCBpc1ZhbGlkUHJpb3JpdHksIHByaW9yaXR5U29ydCB9IiwiLyogU3RhdHVzIEVOVU0gKi9cclxuY29uc3QgU3RhdHVzID0ge1xyXG4gICAgQ09NUExFVEVEOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgSU5DT01QTEVURTogXCJJbmNvbXBsZXRlXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBzdGF0dXMgcHJvcGVydHkgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFN0YXR1cykuaW5jbHVkZXMoc3RhdHVzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0iLCJpbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29sb3VyLCBpc1ZhbGlkQ29sb3VyIH0gZnJvbSBcIi4uLy4uL2VudW1zL2NvbG91cnMuanNcIjtcclxuaW1wb3J0IHsgcHJpb3JpdHlTb3J0IH0gZnJvbSBcIi4uLy4uL2VudW1zL3ByaW9yaXR5LmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9zdGF0dXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0U2VyaWFsaXplZFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplVGFzayB9IGZyb20gXCIuLi90YXNrLmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgcHJvamVjdCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SUQpIHtcclxuICAgIGxldCBjb2xvdXIgPSBEZWZhdWx0Q29sb3VyO1xyXG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XHJcbiAgICBsZXQgY3VycmVudFRhc2sgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgdGFzayBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFRhc2tDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRhc2tDb3VudDtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvdXIobmV3Q29sb3VyKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRDb2xvdXIobmV3Q29sb3VyKSkge1xyXG4gICAgICAgICAgICBjb2xvdXIgPSBuZXdDb2xvdXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIHRhc2sgdG8gdGhlIHByb2plY3QgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvSW5jb21wbGV0ZVRhc2tzKHRhc2spIHtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICBzb3J0SW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIGFuIGluY29tcGxldGUgdGFzayBmcm9tIHRoZSBwcm9qZWN0IChhbmQgYWRkIHRvIGNvbXBsZXRlVGFza3MgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKHRhc2spIHtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MuZm9yRWFjaCgodGFza0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmdldFRhc2tJRCgpID09PSB0YXNrRWxlbWVudC5nZXRUYXNrSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgaW5jb21wbGV0ZVRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gY29tcGxldGVkVGFza3NcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Db21wbGV0ZWRUYXNrcyh0YXNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29udmVydHMgYWxsIGluY29tcGxldGUgdGFza3MgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFza3MgPSBbXTtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgc2VyaWFsaXplZFRhc2tzLnB1c2goc2VyaWFsaXplVGFzayh0YXNrKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc29ydEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3Muc29ydChwcmlvcml0eVNvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICBzb3J0Q29tcGxldGVkVGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgdGFzayBmcm9tIHRoZSBwcm9qZWN0IChhbmQgYWRkIHRvIGluY29tcGxldGVkVGFza3MgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQ29tcGxldGVkVGFza3ModGFzaykge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHRhc2tFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRUYXNrSUQoKSA9PT0gdGFza0VsZW1lbnQuZ2V0VGFza0lEKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gaW5jb21wbGV0ZVRhc2tzXHJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLklOQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0luY29tcGxldGVUYXNrcyh0YXNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29udmVydHMgYWxsIGNvbXBsZXRlZCB0YXNrcyB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbiAgICBmdW5jdGlvbiBnZXRTZXJpYWxpemVkQ29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFRhc2tzID0gW107XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgc2VyaWFsaXplZFRhc2tzLnB1c2goc2VyaWFsaXplVGFzayh0YXNrKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc29ydENvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLnNvcnQocHJpb3JpdHlTb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGFzaygpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFRhc2sobmV3VGFzaykge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrID0gbmV3VGFzaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0Q29sb3VyLCBzZXRDb2xvdXIsXHJcbiAgICAgICAgZ2V0SW5jb21wbGV0ZVRhc2tzLCBhZGRUb0luY29tcGxldGVUYXNrcywgcmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcywgc29ydEluY29tcGxldGVUYXNrcywgZ2V0U2VyaWFsaXplZEluY29tcGxldGVUYXNrcyxcclxuICAgICAgICBnZXRDb21wbGV0ZWRUYXNrcywgYWRkVG9Db21wbGV0ZWRUYXNrcywgcmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzLCBzb3J0Q29tcGxldGVkVGFza3MsIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBnZXRQcm9qZWN0SUQsXHJcbiAgICAgICAgZ2V0TmV4dFRhc2tDb3VudCxcclxuICAgICAgICBnZXRDdXJyZW50VGFzaywgc2V0Q3VycmVudFRhc2ssIFxyXG4gICAgfTtcclxufSIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9zdGF0dXNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBzdGVwIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGVwRmFjdG9yeSh0aXRsZSwgcHJvamVjdElELCB0YXNrSUQsIHN0ZXBJRCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IFN0YXR1cy5JTkNPTVBMRVRFO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZFN0YXR1cyhuZXdTdGF0dXMpKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dhcFN0YXR1cygpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5JTkNPTVBMRVRFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNPTVBMRVRFRDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGFza0lEKCkge1xyXG4gICAgICAgIHJldHVybiB0YXNrSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RlcElEKCkge1xyXG4gICAgICAgIHJldHVybiBzdGVwSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgc3dhcFN0YXR1cywgXHJcbiAgICAgICAgZ2V0UHJvamVjdElELCBnZXRUYXNrSUQsIGdldFN0ZXBJRCxcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvbG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IGlzVmFsaWRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9lbnVtcy9wcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcbmltcG9ydCB7IGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZVN0ZXAgfSBmcm9tIFwiLi4vc3RlcFwiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHRhc2sgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgdGFza0lEKSB7XHJcbiAgICBsZXQgc3RlcENvdW50ID0gMDtcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSBbXTtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuSU5DT01QTEVURTtcclxuICAgIGxldCBjdXJyZW50U3RlcCA9IG51bGw7XHJcblxyXG4gICAgLyogUmV0dXJucyBzdGVwIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcENvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3RlcENvdW50O1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgaWYgKGlzVmFsaWRQcmlvcml0eShuZXdQcmlvcml0eSkpIHtcclxuICAgICAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZFN0YXR1cyhuZXdTdGF0dXMpKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dhcFN0YXR1cygpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5JTkNPTVBMRVRFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNPTVBMRVRFRDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZVN0ZXBzKCkge1xyXG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlU3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9JbmNvbXBsZXRlU3RlcHMoc3RlcCkge1xyXG4gICAgICAgIGluY29tcGxldGVTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHN0ZXAgZnJvbSBpbmNvbXBsZXRlU3RlcHMgKGFuZCBhZGQgdG8gY29tcGxldGVkU3RlcHMgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMuZm9yRWFjaCgoc3RlcEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0ZXBJRCgpID09PSBzdGVwRWxlbWVudC5nZXRTdGVwSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gY29tcGxldGVkU3RlcHNcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29udmVydHMgYWxsIGluY29tcGxldGUgc3RlcHMgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZEluY29tcGxldGVTdGVwcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RlcHMgPSBbXTtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAgICAgc2VyaWFsaXplZFN0ZXBzLnB1c2goc2VyaWFsaXplU3RlcChzdGVwKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkU3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkU3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCBzdGVwIHRvIHRoZSB0YXNrICovXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NvbXBsZXRlZFN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIGNvbXBsZXRlZCBzdGVwIGZyb20gdGhlIHRhc2sgKGFuZCBhZGQgdG8gaW5jb21wbGV0ZVN0ZXBzIGlmIHZhbGlkKSAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5mb3JFYWNoKChzdGVwRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0ZXAuZ2V0U3RlcElEKCkgPT09IHN0ZXBFbGVtZW50LmdldFN0ZXBJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsbHkgYWRkIHRvIGluY29tcGxldGVTdGVwc1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAuZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5JTkNPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9JbmNvbXBsZXRlU3RlcHMoc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENvbnZlcnRzIGFsbCBjb21wbGV0ZWQgc3RlcHMgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZENvbXBsZXRlZFN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGVwcyA9IFtdO1xyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRTdGVwcy5wdXNoKHNlcmlhbGl6ZVN0ZXAoc3RlcCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGFza0lEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdGVwKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50U3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50U3RlcChuZXdTdGVwKSB7XHJcbiAgICAgICAgY3VycmVudFN0ZXAgPSBuZXdTdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBcclxuICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxyXG4gICAgICAgIGdldFN0YXR1cywgc2V0U3RhdHVzLCBzd2FwU3RhdHVzLCBcclxuICAgICAgICBnZXRJbmNvbXBsZXRlU3RlcHMsIGFkZFRvSW5jb21wbGV0ZVN0ZXBzLCByZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzLCBnZXRTZXJpYWxpemVkSW5jb21wbGV0ZVN0ZXBzLFxyXG4gICAgICAgIGdldENvbXBsZXRlZFN0ZXBzLCBhZGRUb0NvbXBsZXRlZFN0ZXBzLCByZW1vdmVGcm9tQ29tcGxldGVkU3RlcHMsIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRTdGVwcyxcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgXHJcbiAgICAgICAgZ2V0TmV4dFN0ZXBDb3VudCxcclxuICAgICAgICBnZXRDdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXAsIFxyXG4gICAgfTtcclxufSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBjbGVhclBhZ2UsIHJlbmRlclNpZGViYXIgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUb1NpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9wYWdlcy9zaWRlYmFyL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZVRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHByb2plY3QgdGhhdCBzdG9yZXMgYWxsIHVuYXNzaWduZWQgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBnZXROZXh0UHJvamVjdENvdW50KCk7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBcIk1pc2NlbGxhbmVvdXNcIiwgXHJcbiAgICAgICAgXCJEZWZhdWx0IHByb2plY3RcIixcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICApXHJcblxyXG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICApXHJcblxyXG4gICAgYWRkVG9Qcm9qZWN0cyhuZXdQcm9qZWN0KTtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0SXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdEl0ZW0uZ2V0UHJvamVjdElEKCkgPT09IHByb2plY3QuZ2V0UHJvamVjdElEKCkpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIFJldHVybnMgcHJvamVjdCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG5mdW5jdGlvbiBnZXROZXh0UHJvamVjdENvdW50KCkge1xyXG4gICAgY29uc3QgY291bnQgPSBwcm9qZWN0Q291bnQ7XHJcbiAgICBwcm9qZWN0Q291bnQrKztcclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHByb2plY3QgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgYWRkVG9TaWRlYmFyUHJvamVjdHMoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgcHJvamVjdCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyB0aGUgY29sb3VyIG9mIGEgcHJvamVjdCBiYXNlZCBvbiBjb2xvdXIgcGlja2VyIGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdDb2xvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cclxuICAgIHByb2plY3Quc2V0Q29sb3VyKG5ld0NvbG91cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzKG5ld1Byb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RzKG5ld1Byb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGRlc2MgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvdXIgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gcHJvamVjdC5nZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHByb2plY3QuZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGluY29tcGxldGVUYXNrcyxcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBjb2xvdXIsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgZnJvbSBKU09OIGZvcm1hdCBkYXRhICovXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBDcmVhdGluZyBwcm9qZWN0IGZyb20gZGF0YVxyXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2MpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgLy8gQWRkaW5nIGFsbCB0YXNrc1xyXG4gICAgcHJvamVjdC5pbmNvbXBsZXRlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVRhc2sobmV3UHJvamVjdCwgdGFzayk7XHJcbiAgICB9KVxyXG4gICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplVGFzayhuZXdQcm9qZWN0LCB0YXNrKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQWRkaW5nIGNvbG91clxyXG4gICAgbmV3UHJvamVjdC5zZXRDb2xvdXIocHJvamVjdC5jb2xvdXIpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBwcm9qZWN0IHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplZFByb2plY3RzKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZFByb2plY3RzID0gW107XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQcm9qZWN0cy5wdXNoKHNlcmlhbGl6ZVByb2plY3QocHJvamVjdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFByb2plY3RzO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdENvdW50ID0gMDtcclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlUHJvamVjdEZyb21Gb3JtLCBlZGl0UHJvamVjdEZyb21Gb3JtLCBlZGl0UHJvamVjdENvbG91ckZyb21Gb3JtLCBnZXRQcm9qZWN0cywgc2V0UHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCwgZ2V0U2VyaWFsaXplZFByb2plY3RzLCBkZXNlcmlhbGl6ZVByb2plY3QgfSIsImltcG9ydCBzdGVwRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvc3RlcEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgY2xlYXJQYWdlLCByZW5kZXJQcm9qZWN0UGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0U2VyaWFsaXplZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vZW51bXMvc3RhdHVzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgc3RlcCBhbmQgYWRkcyB0byBhIHRhc2sgKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcCh0YXNrLCB0aXRsZSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gdGFzay5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHRhc2suZ2V0VGFza0lEKCk7XHJcbiAgICBjb25zdCBzdGVwSUQgPSB0YXNrLmdldE5leHRTdGVwQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1N0ZXAgPSBzdGVwRmFjdG9yeSh0aXRsZSwgcHJvamVjdElELCB0YXNrSUQsIHN0ZXBJRCk7XHJcblxyXG4gICAgdGFzay5hZGRUb0luY29tcGxldGVTdGVwcyhuZXdTdGVwKTtcclxuICAgIHRhc2suc2V0Q3VycmVudFN0ZXAobmV3U3RlcCk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDcmVhdGVzIGEgc3RlcCBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcEZyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlU3RlcChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCksIHRpdGxlKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgc3RlcCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXBGcm9tRm9ybShzdGVwKSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICBzdGVwLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIENvbnZlcnQgdGhlIHN0ZXAgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVTdGVwKHN0ZXApIHtcclxuICAgIGNvbnN0IHRpdGxlID0gc3RlcC5nZXRUaXRsZSgpO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gc3RlcC5nZXRTdGF0dXMoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgIH1cclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc3RlcCBmcm9tIEpTT04gZm9ybWF0IGRhdGEgKi9cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVTdGVwKHRhc2ssIHN0ZXApIHtcclxuICAgIC8vIENyZWF0aW5nIHN0ZXAgZnJvbSBkYXRhXHJcbiAgICBjcmVhdGVTdGVwKHRhc2ssIHN0ZXAudGl0bGUpO1xyXG4gICAgY29uc3QgbmV3U3RlcCA9IHRhc2suZ2V0Q3VycmVudFN0ZXAoKTtcclxuXHJcbiAgICAvLyBBZGRpbmcgdG8gYXBwcm9wcmlhdGUgbG9jYXRpb25cclxuICAgIGlmIChzdGVwLnN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgIG5ld1N0ZXAuc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgICAgIHRhc2sucmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGVwLCBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0sIHNlcmlhbGl6ZVN0ZXAsIGRlc2VyaWFsaXplU3RlcCB9IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy90YXNrRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vZW51bXMvc3RhdHVzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0U2VyaWFsaXplZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVzZXJpYWxpemVTdGVwIH0gZnJvbSBcIi4vc3RlcC5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHRhc2sgYW5kIGFkZHMgdG8gYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHByb2plY3QuZ2V0TmV4dFRhc2tDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgdGFza0lEKTtcclxuXHJcbiAgICBwcm9qZWN0LmFkZFRvSW5jb21wbGV0ZVRhc2tzKG5ld1Rhc2spO1xyXG4gICAgcHJvamVjdC5zZXRDdXJyZW50VGFzayhuZXdUYXNrKTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgYSB0YXNrIGZyb20gY3JlYXRpb24gZm9ybSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKGdldEN1cnJlbnRQcm9qZWN0KCksIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbi8qIEVkaXRzIGEgdGFzayBiYXNlZCBvbiBpbmZvcm1hdGlvbiBpbiBlZGl0IGZvcm0gKi9cclxuZnVuY3Rpb24gZWRpdFRhc2tGcm9tRm9ybSh0YXNrKSB7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZTtcclxuXHJcbiAgICB0YXNrLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIHRhc2suc2V0RGVzY3JpcHRpb24obmV3RGVzYyk7XHJcbiAgICB0YXNrLnNldER1ZURhdGUobmV3RGF0ZSk7XHJcbiAgICB0YXNrLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIENvbXBsZXRlIGEgdGFzayBhbmQgY29udmVydCBhbGwgc3RlcHMgdG8gcmVxdWlyZWQgc3RhdHVzKi9cclxuZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2spIHtcclxuICAgIHRhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgLy8gTWFyayBpbmNvbXBsZXRlIHN0ZXBzXHJcbiAgICB0YXNrLmdldEluY29tcGxldGVTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcC5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogQ29udmVydCB0aGUgdGFzayB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVRhc2sodGFzaykge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0YXNrLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBkZXNjID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB0YXNrLmdldFN0YXR1cygpO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzID0gdGFzay5nZXRTZXJpYWxpemVkSW5jb21wbGV0ZVN0ZXBzKCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9IHRhc2suZ2V0U2VyaWFsaXplZENvbXBsZXRlZFN0ZXBzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGluY29tcGxldGVTdGVwcyxcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcyxcclxuICAgIH1cclxufVxyXG5cclxuLyogQ3JlYXRlIGEgdGFzayBmcm9tIEpTT04gZm9ybWF0IGRhdGEgKi9cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVUYXNrKHByb2plY3QsIHRhc2spIHtcclxuICAgIC8vIENyZWF0aW5nIHRhc2sgZnJvbSBkYXRhXHJcbiAgICBjcmVhdGVUYXNrKHByb2plY3QsIHRhc2sudGl0bGUsIHRhc2suZGVzYywgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBwcm9qZWN0LmdldEN1cnJlbnRUYXNrKClcclxuXHJcbiAgICAvLyBBZGRpbmcgYWxsIHN0ZXBzXHJcbiAgICB0YXNrLmluY29tcGxldGVTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplU3RlcChuZXdUYXNrLCBzdGVwKTtcclxuICAgIH0pXHJcbiAgICB0YXNrLmNvbXBsZXRlZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVTdGVwKG5ld1Rhc2ssIHN0ZXApO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBBZGRpbmcgdG8gYXBwcm9wcmlhdGUgbG9jYXRpb25cclxuICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgIG5ld1Rhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgICAgIHByb2plY3QucmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcyhuZXdUYXNrKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY29tcGxldGVUYXNrLCBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0sIHNlcmlhbGl6ZVRhc2ssIGRlc2VyaWFsaXplVGFzayB9IiwiZnVuY3Rpb24gY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIoYnRuLCBldmVudEZ1bmN0aW9uKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZXZlbnRGdW5jdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdENyZWF0ZVRhc2tCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBmb3Jtcy5yZW5kZXJDcmVhdGVUYXNrRm9ybShwcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdENvbG91ckJ1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRQcm9qZWN0Rm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIocHJvamVjdCkge1xyXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyLCBwcm9qZWN0Q29sb3VyQnV0dG9uTGlzdGVuZXIsIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIsIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tGcm9tSUQodGFza3MsIHRhc2tJRCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAoU3RyaW5nKHRhc2suZ2V0VGFza0lEKCkpID09PSB0YXNrSUQpIHtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyKHN0ZXApIHtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwLmdldFRhc2tJRCgpKSk7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJFZGl0U3RlcEZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHN0ZXApIHtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwLmdldFRhc2tJRCgpKSk7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJEZWxldGVTdGVwRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyLCBzdGVwRGVsZXRlQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuXHJcbmZ1bmN0aW9uIHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRUYXNrRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIodGFzaykge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVRhc2tGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIsIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIsIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4vdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMocHJvamVjdHMpIHtcclxuICAgIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgXCIucHJvamVjdC1jYXJkXCIpO1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9zdGF0dXNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFza1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IHsgc2V0U3RlcENhcmRDb21wbGV0ZWQsIHNldFN0ZXBDYXJkSW5jb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHNldFRhc2tDYXJkQ29tcGxldGVkLCBzZXRUYXNrQ2FyZEluY29tcGxldGUgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlclwiO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tGcm9tSUQodGFza3MsIHRhc2tJRCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAoU3RyaW5nKHRhc2suZ2V0VGFza0lEKCkpID09PSB0YXNrSUQpIHtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50U3RlcEZyb21JRChzdGVwcywgc3RlcElEKSB7XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcoc3RlcC5nZXRTdGVwSUQoKSkgPT09IHN0ZXBJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAoc3RlcCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza1N0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgdGFza1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHRhc2tDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSkpO1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDb21wbGV0ZWRUYXNrcygpLCBTdHJpbmcodGFza0NhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcblxyXG4gICAgY29uc3QgdGFzayA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHRhc2tzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgdGFzay5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUYXNrU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFza1N0YXR1c0NvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzayk7XHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB3cmFwcGVyIHRvIHRoZSBjb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRhc2tTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21Db21wbGV0ZWRUYXNrcyh0YXNrKTtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHdyYXBwZXIgdG8gdGhlIGluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciBtYXJraW5nIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiB0YXNrcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gdGFza1N0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBTdGF0dXNUb2dnbGVMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEluY29tcGxldGVUYXNrcygpLCBTdHJpbmcoc3RlcENhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcbiAgICAvLyBTZWFyY2hlcyBib3RoIGxpc3RzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIHNldEN1cnJlbnRTdGVwRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRJbmNvbXBsZXRlU3RlcHMoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiKSkpO1xyXG4gICAgc2V0Q3VycmVudFN0ZXBGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldENvbXBsZXRlZFN0ZXBzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXAtaWRcIikpKTtcclxuXHJcbiAgICBjb25zdCBzdGVwID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCk7XHJcblxyXG4gICAgLy8gVG9nZ2xlIHRoZSBzdGVwcyBjb21wbGV0ZSBzdGF0dXNcclxuICAgIHN0ZXAuc3dhcFN0YXR1cygpO1xyXG5cclxuICAgIC8vIEludHJvZHVjZSBhIHNsaWdodCB2aXN1YWwgZGVsYXlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIENhbGwgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBjb21wbGV0aW9uIHN0YXR1c1xyXG4gICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXBTdGF0dXNDb21wbGV0ZUhhbmRsZXIoc3RlcCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RlcFN0YXR1c0luY29tcGxldGVIYW5kbGVyKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0ZXBTdGF0dXNDb21wbGV0ZUhhbmRsZXIoc3RlcCkge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoc3RlcCk7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXBDYXJkKTtcclxuXHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB0byB0aGUgY29tcGxldGVkIHN0ZXBzIGxpc3RcclxuICAgIGNvbnN0IHBhcmVudCA9IHN0ZXBDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQubmV4dFNpYmxpbmcuYXBwZW5kQ2hpbGQoc3RlcENhcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCkge1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXBDYXJkKTtcclxuXHJcbiAgICAvLyBNb3ZlcyB0aGUgY2FyZCB0byB0aGUgaW5jb21wbGV0ZSBzdGVwcyBsaXN0XHJcbiAgICBjb25zdCBwYXJlbnQgPSBzdGVwQ2FyZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50LnByZXZpb3VzU2libGluZy5hcHBlbmRDaGlsZChzdGVwQ2FyZCk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciBtYXJraW5nIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiBzdGVwcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gc3RlcFN0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lciwgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyIH0iLCJmdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIoYnRuLCBzdWJtaXRGdW5jdGlvbiwgbW9kYWwpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3VibWl0RnVuY3Rpb24oKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyKGJ0biwgbW9kYWwpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lciwgY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgY3JlYXRlU2lkZWJhckxpc3RlbmVycyBmcm9tIFwiLi9zaWRlYmFyTGlzdGVuZXJzXCI7XHJcbmltcG9ydCBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyBmcm9tIFwiLi9hbGxQcm9qZWN0c0xpc3RlbmVyc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMsXHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyxcclxufSIsImltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4vdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qc1wiO1xyXG5cclxuLyogTWFrZSB0aGUgYWxsIHByb2plY3RzIHNpZGViYXIgYnV0dG9uIGxpbmsgdG8gdGhlIGFsbCBwcm9qZWN0cyBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG5cclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qIEdpdmUgYWxsIHNpZGViYXIgcHJvamVjdCBidXR0b25zIGZ1bmN0aW9uYWxpdHkgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhckxpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cyk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIFwiLnNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbn0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcblxyXG4vKiBNYWtlIGEgZ3JvdXAgb2YgcHJvamVjdCBuYXZpZ2F0aW9uIERPTSBlbGVtZW50cyBsaW5rIHRvIHRoZWlyIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMocHJvamVjdHMsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hdkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpO1xyXG5cclxuICAgIC8vIExpbmsgZWFjaCBwcm9qZWN0IG5hdmlnYXRpb24gZWxlbWVudCB0byBhIHByb2plY3QgcGFnZVxyXG4gICAgcHJvamVjdE5hdkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLyogTWFrZSBhIHNpbmdsZSBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnQgbGlrZSB0byBhIHByb2plY3QgcGFnZSAqL1xyXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyKHByb2plY3RzLCBpdGVtKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcocHJvamVjdC5nZXRQcm9qZWN0SUQoKSkgPT09IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMsIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIgfSIsImltcG9ydCB7IGRlc2VyaWFsaXplUHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcblxyXG4vLyBVcGRhdGVzIHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgbG9jYWwgZW52aXJvbm1lbnRcclxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdHMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdHMpKTtcclxufVxyXG5cclxuLy8gRmV0Y2hlcyB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2FsIGVudmlyb25lbW50IGFuZCBjb252ZXJ0cyB1dCBiYWNrIHRvIHVzZWFibGUgZm9ybWF0XHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgfSIsImltcG9ydCB7IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2NvbG91cnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBvZiB0aGUgY3VycmVudCBwcm9qZWN0cyAqL1xyXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgY29udGVudCBmb3IgdGhlIGhlYWRlciBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgUHJvamVjdHNcIjtcclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBidXR0b25cclxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuXCIpO1xyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGJ1dHRvbiBldmVudFxyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBib2R5IHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSBjYXJkICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGNhcmQgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZERldGFpbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBDcmVhdGVzIHRoZSBsb2dpYyBmb3IgdGhlIHByb2plY3QgY2FyZCBhY3Rpb24gYnV0dG9ucyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpIHtcclxuICAgICAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRCdXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNPTE9VUl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkNvbG91ciBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTsgXHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRGVsZXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmRCdXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0Q2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1ncmlkXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGRpbmcgZWFjaCBvZiB0aGUgcHJvamVjdHMgdG8gYSBjYXJkXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcclxuICAgICAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmREZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkR3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMocHJvamVjdHMpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IGNhcmQgaWYgcHJvamVjdCBpbmZvcm1hdGlvbiBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24ocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jYXJkW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuICAgIGNvbnN0IGNhcmREZXRhaWxzID0gcHJvamVjdENhcmQuZmlyc3RDaGlsZDtcclxuICAgIGNhcmREZXRhaWxzLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBjYXJkRGV0YWlscy5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RDYXJkQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBwcm9qZWN0Q2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBwcm9qZWN0cyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgcHJvamVjdENhcmQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgZGVsZXRlUHJvamVjdENhcmQgfSIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsIGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciB9IGZyb20gXCIuL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXJ9IGZyb20gXCIuL3Byb2plY3RQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkQ29sb3VyIH0gZnJvbSBcIi4vYWxsUHJvamVjdHNQYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuL2Zvcm1zL2Zvcm1HZW5lcmF0b3JcIjtcclxuXHJcbmZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIGNsZWFySGVhZGVyKCk7XHJcbiAgICBjbGVhckJvZHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZSxcclxuICAgIHJlbmRlclByb2plY3RQYWdlLFxyXG4gICAgZWRpdFByb2plY3RQYWdlQ29sb3VyLCBcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZSxcclxuICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cixcclxuICAgIGZvcm1zLFxyXG4gICAgY2xlYXJQYWdlLFxyXG4gICAgY2xlYXJTaWRlYmFyLFxyXG59IiwiaW1wb3J0IGdlbmVyYXRlVGV4dEZpZWxkcyBmcm9tIFwiLi90ZXh0RmllbGRHZW5lcmF0b3JcIjtcclxuaW1wb3J0ICogYXMgcmFkaW9GaWVsZEdlbmVyYXRvciBmcm9tIFwiLi9yYWRpb0ZpZWxkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IE9yZ2FuaXplcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL29yZ2FuaXplclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENhcmQsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza0NhcmQgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVTdGVwQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9mb3JtQnV0dG9uTGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIG1vZGFsIHdoaWNoIHdpbGwgc3RvcmUgYWxsIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybU1vZGFsKHBhcmVudCkge1xyXG4gICAgY29uc3QgZm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybU1vZGFsKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBmb3JtIGNyZWF0aW9uIGFuZCBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oZm9ybSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZm9ybUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XHJcbiAgICBtb2RhbC5yZXBsYWNlQ2hpbGRyZW4oZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIGNvbnN0IGJ0bklEUHJlZml4ID0gYWN0aW9uVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gU3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xyXG4gICAgc3VibWl0QnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItc3VibWl0LWJ0blwiO1xyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgLy8gU3VibWl0IGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIoc3VibWl0QnRuLCBzdWJtaXRGdW5jdGlvbiwgbW9kYWwpO1xyXG5cclxuICAgIC8vIENhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItY2FuY2VsLWJ0blwiO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcImNhbmNlbC1idG5cIik7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoY2FuY2VsQnRuLCBtb2RhbClcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInByb2plY3QtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBQcm9qZWN0XCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhwcm9qZWN0VGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1lZGl0LWZvcm1cIiwgXCJFZGl0IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgVGhlc2U/XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZSA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikudmFsdWUgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVUYXNrRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCB0YXNrVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInRhc2stdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJ0YXNrLWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA4MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEdWUgRGF0ZTpcIiwgaW5wdXROYW1lOiBcImRhdGVcIiwgaW5wdXRUeXBlOiBcImRhdGVcIiwgaWQ6IFwidGFzay1kYXRlXCIsIGNsYXNzZXM6IFtcImRhdGUtaW5wdXRcIl19LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwidGFzay1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFRhc2tcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHRhc2tUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0spKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuVEFTSywgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRnJvbUZvcm0oKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBkZWZhdWx0IHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7RGVmYXVsdFByaW9yaXR5fSddYCk7XHJcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInRhc2stZWRpdC1mb3JtXCIsIFwiRWRpdCBUYXNrXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyh0YXNrVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5UQVNLKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0ssIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFRhc2tGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgICAgIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKSk7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zb3J0SW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgLy8gVE9ETzogQ2hlY2sgaWYgbW92aW5nIHRoaXMgYXNzaWdubWVudCB0byB0b3Agd29ya3NcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWUgPSBjdXJyZW50VGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWUgPSBjdXJyZW50VGFzay5nZXREdWVEYXRlKCk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ncHJpb3JpdHknXVt2YWx1ZT0nJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0UHJpb3JpdHkoKX0nXWApO1xyXG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVTdGVwRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCBzdGVwVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInN0ZXAtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwic3RlcC1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFN0ZXBcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHN0ZXBUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlNURVAsIFwiQ3JlYXRlXCIsIGZvcm0sIGNyZWF0ZVN0ZXBGcm9tRm9ybSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0U3RlcEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJzdGVwLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtZWRpdC1mb3JtXCIsIFwiRWRpdCBTdGVwXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5TVEVQLCBcIkVkaXRcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRTdGVwRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkpO1xyXG4gICAgICAgIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gRmlsbCB0aGUgZm9ybSBmaWVsZHMgd2l0aCBjdXJyZW50IGluZm9ybWF0aW9uXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWUgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKS5nZXRUaXRsZSgpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNvbmZpcm1pbmcgb3JnYW5pemVyIGRlbGV0aW9uICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKChcImNvbmZpcm0tZGVsZXRlLWZvcm1cIiksIChcIkRlbGV0ZSBJdGVtP1wiKSwgXCJkZWxldGUtZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGFkZEZvcm1CdXR0b25zKFwiT3JnYW5pemVyXCIsIFwiRGVsZXRlXCIsIGZvcm0sIGRlbGV0ZUZ1bmN0aW9uKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyhnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChudWxsKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RDYXJkKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlVGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgICAgICBkZWxldGVUYXNrQ2FyZChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVN0ZXBGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkpO1xyXG4gICAgICAgIGRlbGV0ZVN0ZXBDYXJkKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbG91clBpY2tlckZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcImNvbG91ci1mb3JtXCIsIFwiUGljayBBIENvbG91clwiLCBcImNvbG91ci1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNvbG91clwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UGFnZUNvbG91cihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG91clxyXG4gICAgY29uc3QgY29sb3VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbG91ci1yYWRpby1idG5baWRePVwiY29sb3VyLVwiXVtpZCQ9XCIke2dldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q29sb3VyKCkudG9Mb3dlckNhc2UoKX1cIl1gKTtcclxuICAgIGNvbG91ckJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVGb3JtTW9kYWwsIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCByZW5kZXJFZGl0UHJvamVjdEZvcm0sIHJlbmRlckNyZWF0ZVRhc2tGb3JtLCByZW5kZXJFZGl0VGFza0Zvcm0sIHJlbmRlckNyZWF0ZVN0ZXBGb3JtLCByZW5kZXJFZGl0U3RlcEZvcm0sIHJlbmRlckRlbGV0ZVByb2plY3RGb3JtLCByZW5kZXJEZWxldGVUYXNrRm9ybSwgcmVuZGVyRGVsZXRlU3RlcEZvcm0sIHJlbmRlckNvbG91clBpY2tlckZvcm0gfSIsImltcG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3ByaW9yaXR5XCI7XHJcbmltcG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2NvbG91cnNcIjtcclxuXHJcbi8qIEFkZCB0aGUgZGVzaWduYXRlZCBsZWdlbmQgYW5kIGZpZWxkc2V0IHRvIGEgY29udGFpbmVyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFkaW9CdXR0b25zKGxlZ2VuZCwgZmllbGRzZXQpIHtcclxuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcblxyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGRDb250YWluZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHNldCBvZiByYWRpbyBidXR0b25zIGZvciB0aGUgcHJpb3JpdHkgb3B0aW9ucyAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKG9yZ2FuaXplclR5cGUpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlPcHRpb25zKG9yZ2FuaXplclR5cGUpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5mb3JFYWNoKHByaW9yaXR5VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIHByaW9yaXR5VmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuaWQgPSBvcHRpb25JRDtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcHJpb3JpdHlWYWx1ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBMYWJlbFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gcHJpb3JpdHlWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSBvcHRpb25JRDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xyXG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWVsZGNvbnRhaW5lclxyXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktZmllbGRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlUHJpb3JpdHlPcHRpb25zKG9yZ2FuaXplclR5cGUpO1xyXG4gICAgY29uc3QgZmllbGQgPSBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhsZWdlbmQsIGZpZWxkc2V0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ29sb3VycykuZm9yRWFjaChjb2xvdXJWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbG91ciBrZXlcclxuICAgICAgICAgICAgY29uc3QgY29sb3VyS2V5ID0gT2JqZWN0LmtleXMoQ29sb3VycykuZmluZChrZXkgPT4gQ29sb3Vyc1trZXldID09PSBjb2xvdXJWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBcImNvbG91ci1cIiArIGNvbG91clZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG5cIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwiY29sb3VyXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG4tbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb2xvdXJLZXk7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRzZXRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJDb2xvdXI6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZUNvbG91ck9wdGlvbnMoKTtcclxuICAgIGNvbnN0IGZpZWxkID0gZ2VuZXJhdGVSYWRpb0J1dHRvbnMobGVnZW5kLCBmaWVsZHNldCk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zLCBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucyB9IiwiLyogQ3JlYXRlIGEgZGxhYmVsIGZvciBhIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZm9ybUZpZWxkLmxhYmVsVGV4dDtcclxuICAgIGZpZWxkTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcbiAgICBmaWVsZExhYmVsLmZvciA9IGZvcm1GaWVsZC5pZDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRMYWJlbDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgdGl0bGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICAvLyBJbnB1dFxyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBkZXNjcmlwdGlvbiBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZvcm1GaWVsZC5pbnB1dFR5cGUpO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn0gICBcclxuXHJcbi8qIENyZWF0ZSBhIGRhdGUgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHNldCBhIHNldCBvZiB0ZXh0IGZpZWxkcyAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRleHRGaWVsZHMoZmllbGRzLCBwYXJlbnQpIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZvcm1GaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGVzY1wiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGVzY3JpcHRpb25GaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGdlbmVyYXRlVGFza0NhcmRzLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgc2V0VGFza0NhcmRDb21wbGV0ZWQgfSBmcm9tIFwiLi90YXNrc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBzZXRTdGVwQ2FyZENvbXBsZXRlZCB9IGZyb20gXCIuL3N0ZXBzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZGlzYWJsZUFjdGlvbkJ1dHRvbnMsIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0Q29sb3VyQnV0dG9uTGlzdGVuZXIsIHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIsIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lciwgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9wcm9qZWN0QWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2NvbG91cnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBpbmZvIGZvciBhIHNlbGVjdGVkIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBoZWFkZXIgZGlzcGxheWluZyBwcm9qZWN0IGluZm8gYW5kIGFjdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKHByb2plY3QpIHtcclxuICAgICAgICAvKiBEaXNwbGF5IHByb2plY3QgZGV0YWlscyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXJJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNSRUFURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lcihwcm9qZWN0KTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXRhaWxzKHByb2plY3QpKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhwcm9qZWN0QnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGxpc3Qgb2YgdGFza3MgYW5kIHRoZWlyIHN0ZXBzICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgLy8gSW5jb21wbGV0ZSB0YXNrcyBzZWN0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHRhc2tTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICB0YXNrU2VjdGlvbkRpdmlkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCJcclxuICAgICAgICB0YXNrU2VjdGlvbkRpdmlkZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3NMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIiwgXCJpbmNvbXBsZXRlLXRhc2stbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgaW5jb21wbGV0ZSB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgZ2VuZXJhdGVUYXNrQ2FyZHMocHJvamVjdC5nZXRJbmNvbXBsZXRlVGFza3MoKSwgaW5jb21wbGV0ZVRhc2tzTGlzdCk7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5jb21wbGV0ZVRhc2tzTGlzdCk7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRlZCB0YXNrcyBzZWN0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIlxyXG4gICAgICAgIGNvbXBsZXRlZFNlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgY29tcGxldGVkIHRhc2tzXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkVGFza3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIsIFwiY29tcGxldGVkLXRhc2stbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgY29tcGxldGVkIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIGdlbmVyYXRlVGFza0NhcmRzKHByb2plY3QuZ2V0Q29tcGxldGVkVGFza3MoKSwgY29tcGxldGVkVGFza3NMaXN0KTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0xpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBCb2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSB2aXN1YWwgc3RhdHVzIG9mIG5ld2x5IGFkZGVkIGNhcmRzXHJcbiAgICB1cGRhdGVDb21wbGV0aW9uU3RhdHVzKHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb21wbGV0aW9uU3RhdHVzKHByb2plY3QpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlIGNvbXBsZXRlZCBzdGVwcyBvZiBpbmNvbXBsZXRlIHRhc2tzIGFzIGNvbXBsZXRlZFxyXG4gICAgcHJvamVjdC5nZXRJbmNvbXBsZXRlVGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgICAgICAgICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlIGNvbXBsZXRlIHRhc2tzIGFzIGNvbXBsZXRlZFxyXG4gICAgcHJvamVjdC5nZXRDb21wbGV0ZWRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG5cclxuICAgICAgICBzZXRUYXNrQ2FyZENvbXBsZXRlZCh0YXNrQ2FyZCk7XHJcblxyXG4gICAgICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlaXIgY29tcGxldGVkIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgICAgIHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgICAgICAgICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IHBhZ2UgaWYgcHJvamVjdCBpbmZvcm1hdGlvbiBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24ocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgcGFnZSBpZiBwcm9qZWN0IGNvbG91ciBpcyBlZGl0ZWQgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3RQYWdlQ29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBlZGl0U3RlcENhcmRJbmZvcm1hdGlvbiB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVBY3Rpb25CdXR0b25zLCBkaXNhYmxlQWN0aW9uQnV0dG9ucywgZW5hYmxlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0ZXBDb21wbGV0aW9uTGlzdGVuZXIsIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvc3RhdHVzLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lciwgc3RlcEVkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9zdGVwQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHN0ZXBzIGZvciBhIHRhc2sgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTdGVwQ2FyZHMoc3RlcHMsIHBhcmVudCkge1xyXG4gICAgLyogQ3JlYXRlIGEgc3RlcCBpdGVtICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXBDYXJkKHN0ZXApIHtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBidXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBzdGVwQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1zdGVwXCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcEVkaXRCdXR0b25MaXN0ZW5lcihzdGVwKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lcihzdGVwKVxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInN0ZXAtY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgc3RlcC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHN0ZXAuZ2V0VGFza0lEKCkpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiLCBzdGVwLmdldFN0ZXBJRCgpKTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBpbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RlcEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRpb24gY2hlY2tib3hcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBidXR0b25zIGZvciBzdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwSW5mbyk7XHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEFjdGlvbkJ1dHRvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RlcEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFsbCBzdGVwcyB0byB0aGUgbGlzdFxyXG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAvLyBNYXJrIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcENhcmQoc3RlcCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICAvLyBFZGl0aW5nIGluZm9ybWF0aW9uXHJcbiAgICBzdGVwQ2FyZC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXBDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGNvbXBsZXRlXHJcbiAgICBzdGVwQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEaXNhYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBzdGVwQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGRpc2FibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgc3RlcCBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGluY29tcGxldGUgKi9cclxuZnVuY3Rpb24gc2V0U3RlcENhcmRJbmNvbXBsZXRlKHN0ZXBDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGluY29tcGxldGVcclxuICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBSZS1lbmFibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgZW5hYmxlQWN0aW9uQnV0dG9ucyhbZWRpdEJ1dHRvbl0pO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBzdGVwcyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVN0ZXBDYXJkKHN0ZXApIHtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN0ZXAtY2FyZFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuXHJcbiAgICBzdGVwQ2FyZC5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMsIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBzZXRTdGVwQ2FyZENvbXBsZXRlZCwgc2V0U3RlcENhcmRJbmNvbXBsZXRlLCBkZWxldGVTdGVwQ2FyZCB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVTdGVwQ2FyZHMgfSBmcm9tIFwiLi9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zLCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgfSBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9jaGVja2JveExpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyLCB0YXNrRGVsZXRlQnV0dG9uTGlzdGVuZXIsIHRhc2tFZGl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvdGFza0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9zdGF0dXMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2YgdGFza3MgZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tDYXJkcyh0YXNrcywgcGFyZW50KSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjs7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrRGV0YWlscztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVUYXNrU3RhdHVzTGlzdGVuZXIoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0RldGFpbHModGFzaykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0SXRlbUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUYXNrIGJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgU3RlcFwiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lcih0YXNrKVxyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC10YXNrXCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0VkaXRCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lcih0YXNrKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiLCBcInRhc2stY2FyZFwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHRhc2tzIHRvIHRoZSBsaXN0XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCB0YXNrXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRDdXJyZW50VGFzayh0YXNrKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIExpc3Qgb2YgYWxsIGluY29tcGxldGUgc3RlcHMgZm9yIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGNvbnN0IGluY29tcGxldGVTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgaW5jb21wbGV0ZVN0ZXBzTGlzdC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtbGlzdFwiLCBcImluY29tcGxldGUtc3RlcHMtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBhbGwgY29tcGxldGVkIHN0ZXBzIGZvciBjdXJyZW50IHRhc2tcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGVwc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy1saXN0XCIsIFwiY29tcGxldGVkLXN0ZXBzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBzdGVwIGxpc3RzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGluY29tcGxldGVTdGVwc0xpc3QpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZWRTdGVwc0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldEluY29tcGxldGVTdGVwcygpLCBpbmNvbXBsZXRlU3RlcHNMaXN0KTtcclxuICAgICAgICBnZW5lcmF0ZVN0ZXBDYXJkcyh0YXNrLmdldENvbXBsZXRlZFN0ZXBzKCksIGNvbXBsZXRlZFN0ZXBzTGlzdCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0l0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24odGFzaykge1xyXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICAvLyBHcmFiYmluZyBpbmZvcm1hdGlvbiB0byBlZGl0XHJcbiAgICBjb25zdCB0YXNrSW5mb3JtYXRpb24gPSB0YXNrQ2FyZC5maXJzdENoaWxkLmxhc3RDaGlsZDtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tJbmZvcm1hdGlvbi5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrSW5mb3JtYXRpb24uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IHRhc2tJbmZvcm1hdGlvbi5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrSW5mb3JtYXRpb24ubGFzdENoaWxkO1xyXG4gICAgXHJcbiAgICAvLyBFZGl0aW5nIGluZm9ybWF0aW9uXHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCkgfHwgXCJObyBEdWUgRGF0ZVwiO1xyXG5cclxuICAgIC8vIFJlcGxhY2luZyBwcmlvcml0eSBjbGFzc2xpc3RcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSB0YXNrIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgY29tcGxldGVkICovXHJcbmZ1bmN0aW9uIHNldFRhc2tDYXJkQ29tcGxldGVkKHRhc2tDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGNvbXBsZXRlXHJcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gdGFza0NhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIERpc2FibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gdGFza0NhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uLm5leHRTaWJsaW5nO1xyXG4gICAgZGlzYWJsZUFjdGlvbkJ1dHRvbnMoW2NyZWF0ZUJ1dHRvbiwgZWRpdEJ1dHRvbl0pO1xyXG5cclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYWxsIGluY29tcGxldGUgc3RlcHMgYXMgY29tcGxldGVkXHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSB0YXNrQ2FyZC5uZXh0U2libGluZztcclxuICAgIGZvciAobGV0IHN0ZXBDYXJkIG9mIGluY29tcGxldGVTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBEaXNhYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gc3RlcENhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbnMoW2VkaXRCdXR0b25dKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxpbmcgdGhlIGNoZWNrYm94IG9mIGNvbXBsZXRlZCBzdGVwc1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSB0YXNrQ2FyZC5uZXh0U2libGluZy5uZXh0U2libGluZztcclxuICAgIGZvciAobGV0IHN0ZXBDYXJkIG9mIGNvbXBsZXRlZFN0ZXBzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNb2RpZmllcyBhIHRhc2sgY2FyZCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0VGFza0NhcmRJbmNvbXBsZXRlKHRhc2tDYXJkKSB7XHJcbiAgICAvLyBWaXN1YWxseSBtYXJraW5nIGFzIGluY29tcGxldGVcclxuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBSZS1lbmFibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gdGFza0NhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uLm5leHRTaWJsaW5nO1xyXG4gICAgZW5hYmxlQWN0aW9uQnV0dG9ucyhbY3JlYXRlQnV0dG9uLCBlZGl0QnV0dG9uXSk7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgcmVtYXJraW5nIGFsbCBpbmNvbXBsZXRlIHN0ZXBzIGFzIGluY29tcGxldGVcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwcyA9IHRhc2tDYXJkLm5leHRTaWJsaW5nO1xyXG4gICAgZm9yIChsZXQgc3RlcENhcmQgb2YgaW5jb21wbGV0ZVN0ZXBzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgc3RlcENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmUtZW5hYmxpbmcgYWN0aW9uIGJ1dHRvbnNcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gc3RlcENhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgZW5hYmxlQWN0aW9uQnV0dG9ucyhbZWRpdEJ1dHRvbl0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuYWJsaW5nIHRoZSBjaGVja2JveCBvZiBjb21wbGV0ZWQgc3RlcHNcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBjb21wbGV0ZWRTdGVwcy5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlbW92ZXMgYSBkZWxldGVkIHRhc2tzIGNhcmQgKi9cclxuZnVuY3Rpb24gZGVsZXRlVGFza0NhcmQodGFzaykge1xyXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1jYXJkW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuXHJcbiAgICB0YXNrQ2FyZC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVRhc2tDYXJkcywgZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24sIHNldFRhc2tDYXJkQ29tcGxldGVkLCBzZXRUYXNrQ2FyZEluY29tcGxldGUsIGRlbGV0ZVRhc2tDYXJkIH0iLCJpbXBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclNpZGViYXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcblxyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgLy8gTG9nb1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlRPRE9cIjtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcblxyXG4gICAgLy8gU2VjdGlvbiBoZWFkZXJcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJNWSBQUk9KRUNUU1wiXHJcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWhlYWRpbmdcIik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBsaXN0XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdHMtbWVudVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xyXG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3RzLCBwcm9qZWN0c0xpc3QpO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxufSIsImltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBzaWRlYmFyIG1lbnUgaXRlbSAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXJJdGVtKHRpdGxlLCBpY29uRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgc2lkZWJhckl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcclxuXHJcbiAgICAvLyBUaXRsZVxyXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpY29uRnVuY3Rpb24oKSk7XHJcbiAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBzaWRlYmFySXRlbTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpY29uIGZvciBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SWNvbihpY29uQ29sb3VyKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJwcm9qZWN0LWljb25cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpY29uQ29sb3VyO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpY29uIGZvciB0aGUgYWxsIHByb2plY3RzIGljb24gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuXHJcbiAgICAvLyBJY29uIGltYWdlXHJcbiAgICBjb25zdCBpY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaWNvbkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy5zdmdcIjtcclxuXHJcbiAgICAvLyBBcHBlbmluZyBlbGVtZW50c1xyXG4gICAgcHJvamVjdEljb24uYXBwZW5kQ2hpbGQoaWNvbkltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGdlbmVyYXRlU2lkZWJhckl0ZW0ocHJvamVjdC5nZXRUaXRsZSgpLCAoKSA9PiBnZW5lcmF0ZVByb2plY3RJY29uKHByb2plY3QuZ2V0Q29sb3VyKCkpKTtcclxuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYW4gYWxsIHByb2plY3RzIGJ1dHRvbiBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFByb2plY3RzQnV0dG9uKCkge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHNCdXR0b24gPSBnZW5lcmF0ZVNpZGViYXJJdGVtKFwiQWxsIFByb2plY3RzXCIsIGdlbmVyYXRlQWxsUHJvamVjdEljb24pO1xyXG4gICAgYWxsUHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1idXR0b25cIik7XHJcbiAgICByZXR1cm4gYWxsUHJvamVjdHNCdXR0b247XHJcbn1cclxuXHJcbi8qIERpc3BsYXkgYWxsIHByb2plY3RzIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpKTtcclxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWRkIGEgcHJvamVjdCB0byB0aGUgc2lkZWJhciBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIGFkZFRvU2lkZWJhclByb2plY3RzKHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXByb2plY3RzLW1lbnVcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XHJcbiAgICBhZGRQcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyKGdldFByb2plY3RzKCksIG5ld1Byb2plY3RCdG4pO1xyXG59XHJcblxyXG4vKiBFZGl0IHRoZSB0aXRsZSBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIHNpZGViYXJJdGVtLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxufVxyXG5cclxuLyogRWRpdCB0aGUgY29sb3VyIG9mIGEgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbiAqL1xyXG5mdW5jdGlvbiBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcbiAgICBzaWRlYmFySXRlbS5maXJzdENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb2plY3QuZ2V0Q29sb3VyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0ucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclNpZGViYXJQcm9qZWN0cywgYWRkVG9TaWRlYmFyUHJvamVjdHMsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcblxyXG4vKiBDcmVhdGVzIHRoZSBhY3Rpb24gYnV0dG9ucyBmb3IgYSBvcmdhbml6ZXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGNvbnN0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGFjdGlvbkJ0bnMuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idG5zXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgYnV0dG9uc1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgLy8gQnV0dG9uIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwiYWN0aW9uLWJ0blwiKTtcclxuICAgICAgICBidG4uY2xhc3NOYW1lcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uXHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBhY3Rpb25CdG4uc3JjID0gYnRuLnNyYztcclxuICAgICAgICBhY3Rpb25CdG4uYWx0ID0gYnRuLmFsdDtcclxuICAgICAgICBhY3Rpb25CdG4udGl0bGUgPSBidG4udGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbiBhY3Rpb25cclxuICAgICAgICBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lcihhY3Rpb25CdXR0b25Db250YWluZXIsIGJ0bi5ldmVudClcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ0bik7XHJcblxyXG4gICAgICAgIGFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uQ29udGFpbmVyKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkJ0bnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gVmlzdWFsbHkgc2hvdyBkaXNhYmxlZFxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWQtYWN0aW9uLWJ0blwiKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gVmlzdWFsbHkgc2hvdyBlbmFibGVkXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZC1hY3Rpb24tYnRuXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVBY3Rpb25CdXR0b25zLCBkaXNhYmxlQWN0aW9uQnV0dG9ucywgZW5hYmxlQWN0aW9uQnV0dG9ucyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGRlc2VyaWFsaXplUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RzLCBzZXRQcm9qZWN0cyB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcCB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3N0ZXBcIjtcclxuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tIFwiLi9wYWdlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuXHJcbi8vIEltcG9ydGluZyBsb2NhbCBzdG9yYWdlXHJcbmNvbnN0IHN0b3JhZ2VEYXRhID0gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4vLyBMb2FkIHN0b3JlZCBkYXRhXHJcbmlmIChzdG9yYWdlRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgc3RvcmFnZURhdGEuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KVxyXG59XHJcbi8vIFVzZSBkZWZhdWx0IGRhdGFcclxuZWxzZSB7XHJcbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG5cclxuICAgIC8vIFdvcmsgcHJvamVjdC90YXNrcy9zdGVwc1xyXG4gICAgY3JlYXRlUHJvamVjdChcIldvcmsgTWVldGluZ3NcIiwgXCJBbGwgdGhpbmdzIHdvcmsgbWVldGluZyByZWxhdGVkIVwiKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKGdldFByb2plY3RzKClbMV0sIFwiTW9uZGF5IE1lZXRpbmdzXCIsIFwiQWxsIG1vbmRheSB3b3JrIG1lZXRpbmdzXCIsIFwiXCIsIFwiTWVkXCIpO1xyXG4gICAgY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIk1vcm5pbmcgTWVldGluZ1wiKTtcclxuICAgIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJBZnRlcm5vb24gTWVldGluZ1wiKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKGdldFByb2plY3RzKClbMV0sIFwiUHJlc2VudGF0aW9uXCIsIFwiQWxsIHdvcmsgcHJlc2VudGF0aW9uc1wiLCBcIlwiLCBcIk5vbmVcIik7XHJcbiAgICBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMV0sIFwiR2VuZXJhdGUgRmluYW5jaWFsIEdyYXBoc1wiKTtcclxuICAgIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVsxXSwgXCJDaGVjayByZXBvcnQgZHJhZnQgZm9yIHR5cG9zXCIpO1xyXG5cclxuICAgIC8vIFNjaG9vbCBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbiAgICBjcmVhdGVQcm9qZWN0KFwiU2Nob29sXCIsIFwiQWxsIHRoaW5ncyBzY2hvb2wgcmVsYXRlZCFcIik7XHJcblxyXG4gICAgY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzJdLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuICAgIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsyXS5nZXRJbmNvbXBsZXRlVGFza3MoKVswXSwgXCJIb21ld29ya1wiKTtcclxufVxyXG5cclxuXHJcbmRpc3BsYXkucmVuZGVyU2lkZWJhcihnZXRQcm9qZWN0cygpKTtcclxuZGlzcGxheS5mb3Jtcy5nZW5lcmF0ZUZvcm1Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlVGFza0Zvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVTdGVwRm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckRlbGV0ZUZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7XHJcbmRpc3BsYXkucmVuZGVyQWxsUHJvamVjdHNQYWdlKGdldFByb2plY3RzKCkpO1xyXG4vLyBkaXNwbGF5LnJlbmRlclByb2plY3RQYWdlKHByb2plY3RzWzFdKTtcclxuY3JlYXRlU2lkZWJhckxpc3RlbmVycyhnZXRQcm9qZWN0cygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=