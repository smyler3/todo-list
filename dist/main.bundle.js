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
    --action-btn-background: #ffffff;
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
    background-color: none;
}

.action-btn {
    cursor: pointer;
    padding: 1rem;
    border: 2px solid #00000010;
    border-radius: 50%;
    background-color: var(--action-btn-background);
}
.action-btn:hover {
    background-color: var(--sidebar-hover-background);
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
    background-color: var(--completed-card-background);
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
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n    --action-btn-background: #ffffff;\r\n    --completed-card-background: rgb(210, 210, 210);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n    background-color: none;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000010;\r\n    border-radius: 50%;\r\n    background-color: var(--action-btn-background);\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.disabled-action-btn {\r\n    cursor: default;\r\n    background-color: var(--completed-card-background)\r\n}\r\n.disabled-action-btn:hover {\r\n    background-color: var(--completed-card-background);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    box-sizing: content-box;\r\n    display: grid;\r\n    grid: 1fr 5fr / 1fr 4fr;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -1 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n    border: 2px solid;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 1px solid rgb(118, 118, 118);\r\n    border-radius: 3px;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n    overflow-y: auto;\r\n    /* padding-right: calc(100vw - 100%); */\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.steps-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n.completed {\r\n    background-color: var(--completed-card-background);\r\n    color: #6a6a6a;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n/* .footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n} */"],"sourceRoot":""}]);
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
/* harmony import */ var _enums_colours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/colours.js */ "./src/models/enums/colours.js");
/* harmony import */ var _enums_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/priority.js */ "./src/models/enums/priority.js");
/* harmony import */ var _enums_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/status.js */ "./src/models/enums/status.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.js */ "./src/models/organizers/task.js");





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
        sortIncompleteTasks();
    }

    /* Remove an incomplete task from the project (and add to completeTasks if valid) */
    function removeFromIncompleteTasks(task) {
        incompleteTasks.forEach((taskElement, index) => {
            if (task.getTaskID() === taskElement.getTaskID()) {
                incompleteTasks.splice(index, 1);

                // Conditionally add to completedTasks
                if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.COMPLETED) {
                    addToCompletedTasks(task);
                }
                return;
            }
        });
    }

    /* Converts all incomplete tasks to a JSON-friendly format */
    function getSerializedIncompleteTasks() {
        const serializedTasks = [];
        incompleteTasks.forEach(task => {
            serializedTasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_3__.serializeTask)(task));
        });

        return serializedTasks;
    }

    function sortIncompleteTasks() {
        incompleteTasks.sort(_enums_priority_js__WEBPACK_IMPORTED_MODULE_1__.prioritySort);
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
                if (task.getStatus() === _enums_status_js__WEBPACK_IMPORTED_MODULE_2__.Status.INCOMPLETE) {
                    addToIncompleteTasks(task);
                }

                return;
            }
        });
    }

    /* Converts all completed tasks to a JSON-friendly format */
    function getSerializedCompletedTasks() {
        const serializedTasks = [];
        completedTasks.forEach(task => {
            serializedTasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_3__.serializeTask)(task));
        });

        return serializedTasks;
    }

    function sortCompletedTasks() {
        completedTasks.sort(_enums_priority_js__WEBPACK_IMPORTED_MODULE_1__.prioritySort);
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
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../step */ "./src/models/organizers/step.js");



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

                // Conditionally add to completedSteps
                if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.COMPLETED) {
                    addToCompletedSteps(step);
                }

                return;
            }
        });
    }

    /* Converts all incomplete steps to a JSON-friendly format */
    function getSerializedIncompleteSteps() {
        const serializedSteps = [];
        incompleteSteps.forEach(step => {
            serializedSteps.push((0,_step__WEBPACK_IMPORTED_MODULE_1__.serializeStep)(step));
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
                if (step.getStatus() === _enums_status__WEBPACK_IMPORTED_MODULE_0__.Status.INCOMPLETE) {
                    addToIncompleteSteps(step);
                }

                return;
            }
        });
    }

    /* Converts all completed steps to a JSON-friendly format */
    function getSerializedCompletedSteps() {
        const serializedSteps = [];
        completedSteps.forEach(step => {
            serializedSteps.push((0,_step__WEBPACK_IMPORTED_MODULE_1__.serializeStep)(step));
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
    const incompleteTasks = project.getSerializedIncompleteTasks();
    const completedTasks = project.getSerializedCompletedTasks();
    const projectID = project.getProjectID();

    return {
        title,
        desc,
        incompleteTasks,
        completedTasks,
        projectID,
    }
}

/* Create a project from JSON format data */
function deserializeProject(project) {
    // Creating project from data
    createProject(project.title, project.description);
    const newProject = getCurrentProject();

    // Adding all tasks
    project.incompleteTasks.forEach(task => {
        (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.deserializeTask)(newProject, task);
    })
    project.completedTasks.forEach(task => {
        ;(0,_task_js__WEBPACK_IMPORTED_MODULE_4__.deserializeTask)(newProject, task);
    })
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
    const projectID = step.getProjectID();
    const taskID = step.getTaskID();
    const stepID = step.getStepID();

    return {
        title,
        status,
        projectID,
        taskID,
        stepID,
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
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();

    return {
        title,
        desc,
        dueDate,
        priority,
        status,
        incompleteSteps,
        completedSteps,
        projectID,
        taskID,
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
    project.getIncompleteTasks().forEach(task => {
        // Visually marking their completed steps as completed
        task.getCompletedSteps().forEach(step => {
            const stepCard = document.querySelector(`[data-task-id="${step.getTaskID()}"][data-step-id="${step.getStepID()}"]`);
            (0,_stepsCardHandler_js__WEBPACK_IMPORTED_MODULE_1__.setStepCardCompleted)(stepCard);
        })
    })

    project.getCompletedTasks().forEach(task => {
        // Visually marking completed tasks as completed
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
// console.log("this", storageData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRix3QkFBd0IsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLFFBQVEsS0FBSyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxRQUFRLE1BQU0sU0FBUyxnQ0FBZ0Msd0RBQXdELGtFQUFrRSwrREFBK0Qsc0dBQXNHLHlDQUF5Qyx3REFBd0QsS0FBSyxvTEFBb0wsK0JBQStCLGtCQUFrQixtQkFBbUIsS0FBSyxjQUFjLGtEQUFrRCxLQUFLLFlBQVkseUJBQXlCLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLDREQUE0RCx3QkFBd0IsS0FBSyxxQ0FBcUMsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLCtCQUErQiwrQkFBK0IseUJBQXlCLGlDQUFpQyxzQkFBc0Isd0JBQXdCLEtBQUssc0NBQXNDLDBEQUEwRCxNQUFNLHdCQUF3QixzQkFBc0IsNEJBQTRCLG9CQUFvQiwrQkFBK0IsS0FBSyxxQkFBcUIsd0JBQXdCLHNCQUFzQixvQ0FBb0MsMkJBQTJCLHVEQUF1RCxLQUFLLHVCQUF1QiwwREFBMEQsS0FBSyw4QkFBOEIsd0JBQXdCLCtEQUErRCxnQ0FBZ0MsMkRBQTJELEtBQUssbU1BQW1NLGdDQUFnQyxzQkFBc0IsZ0NBQWdDLHFCQUFxQixzQkFBc0IsS0FBSywrTEFBK0wsa0NBQWtDLHNCQUFzQiwrQkFBK0Isa0JBQWtCLHdCQUF3QixvQ0FBb0Msb0RBQW9ELG1CQUFtQix5QkFBeUIsS0FBSyxlQUFlLDJCQUEyQiw0QkFBNEIsS0FBSywwQkFBMEIsd0NBQXdDLDBCQUEwQixLQUFLLGtEQUFrRCxzQkFBc0IsK0JBQStCLG9CQUFvQiwyQkFBMkIsS0FBSyx1QkFBdUIsc0JBQXNCLDRCQUE0QixrQkFBa0Isc0NBQXNDLHlCQUF5Qiw0QkFBNEIsS0FBSyw2QkFBNkIsd0JBQXdCLDBEQUEwRCxLQUFLLGVBQWUsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLHFCQUFxQixvQkFBb0IsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUssNkxBQTZMLGtDQUFrQyxrQ0FBa0MsMENBQTBDLG1CQUFtQixLQUFLLGlKQUFpSixzQkFBc0IsNEJBQTRCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLEtBQUssb0NBQW9DLDJCQUEyQixvREFBb0QsS0FBSyxzQ0FBc0MsMERBQTBELEtBQUssdUlBQXVJLHNCQUFzQiw0QkFBNEIsdUNBQXVDLHdCQUF3QixxQkFBcUIsMEJBQTBCLEtBQUssaUNBQWlDLHNCQUFzQiwrQkFBK0IsMkJBQTJCLEtBQUssa0NBQWtDLHNCQUFzQiw0QkFBNEIsa0JBQWtCLEtBQUssK0JBQStCLFNBQVMscUNBQXFDLFNBQVMsNFVBQTRVLHNCQUFzQixrQ0FBa0MsTUFBTSxnQkFBZ0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0Msd0JBQXdCLG1CQUFtQixvQkFBb0IscUJBQXFCLHVCQUF1QiwwQ0FBMEMsS0FBSyx5QkFBeUIsc0JBQXNCLDRCQUE0QixxQkFBcUIscUJBQXFCLGdDQUFnQyw0QkFBNEIsa0NBQWtDLDBDQUEwQyxNQUFNLDBEQUEwRCxnQkFBZ0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsa0JBQWtCLHdCQUF3QixLQUFLLDBCQUEwQixzQkFBc0IsK0JBQStCLG9CQUFvQixtQkFBbUIsS0FBSyxtSUFBbUksc0JBQXNCLCtCQUErQixnQ0FBZ0Msa0JBQWtCLEtBQUsscUJBQXFCLG1CQUFtQix1QkFBdUIsMENBQTBDLEtBQUsscUJBQXFCLCtCQUErQixrQ0FBa0MsS0FBSyxtQkFBbUIsNkJBQTZCLDBDQUEwQyxLQUFLLHlIQUF5SCw2QkFBNkIsS0FBSyxzQ0FBc0MscUJBQXFCLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsMEJBQTBCLEtBQUsseUJBQXlCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLHdCQUF3QixLQUFLLHVPQUF1TyxzQkFBc0IseURBQXlELDhDQUE4QyxvQkFBb0Isb0JBQW9CLHdCQUF3Qiw2Q0FBNkMsMkJBQTJCLEtBQUssdUJBQXVCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLG9CQUFvQixLQUFLLDJCQUEyQiwyQkFBMkIsS0FBSyx5TUFBeU0sbUNBQW1DLDZDQUE2Qyx5QkFBeUIsOENBQThDLE9BQU8sOEhBQThILHNCQUFzQiw4QkFBOEIsb0VBQW9FLGtCQUFrQixzQkFBc0IsTUFBTSx1QkFBdUIsc0JBQXNCLCtCQUErQix1Q0FBdUMsMkJBQTJCLHNCQUFzQixvQkFBb0Isa0NBQWtDLDRCQUE0QixrQ0FBa0MsMENBQTBDLEtBQUssK0JBQStCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUssaUlBQWlJLHNCQUFzQiw0QkFBNEIsMkJBQTJCLE1BQU0sOEJBQThCLHFCQUFxQixzQkFBc0Isb0JBQW9CLDhCQUE4QixrQ0FBa0MsS0FBSyw2QkFBNkIsdUJBQXVCLHNCQUFzQixvQkFBb0IsOEJBQThCLGtDQUFrQyxLQUFLLG1KQUFtSixzQkFBc0IsK0JBQStCLG9CQUFvQiwyQkFBMkIsa0JBQWtCLHlCQUF5QixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyxvQkFBb0IsNkJBQTZCLEtBQUssNEJBQTRCLHNCQUFzQiw0QkFBNEIsdUNBQXVDLGtCQUFrQiw2QkFBNkIseUJBQXlCLDRCQUE0QixnQ0FBZ0MsMENBQTBDLE1BQU0saUNBQWlDLHNCQUFzQiw0QkFBNEIsa0JBQWtCLEtBQUssb0NBQW9DLHNCQUFzQiwrQkFBK0IsS0FBSyxpQ0FBaUMsc0JBQXNCLCtCQUErQixLQUFLLDRIQUE0SCxzQkFBc0IsNEJBQTRCLGdDQUFnQyx1QkFBdUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IsdUJBQXVCLGtDQUFrQyxLQUFLLHVCQUF1Qix1QkFBdUIsa0NBQWtDLEtBQUssdUJBQXVCLHVCQUF1QixrQ0FBa0MsS0FBSyx3QkFBd0IsdUJBQXVCLGtDQUFrQyxLQUFLLG9CQUFvQiwyREFBMkQsdUJBQXVCLEtBQUssZ01BQWdNLG9DQUFvQywyQkFBMkIsd0JBQXdCLGtDQUFrQyxNQUFNLHFCQUFxQjtBQUMxZ2U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0aUIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnNFO0FBQ2Y7QUFDUjtBQUNKO0FBQzNDO0FBQ0E7QUFDZTtBQUNmLGlCQUFpQiw0REFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9EQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYTtBQUM5QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvREFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBYTtBQUM5QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEo0QztBQUM1QztBQUNBO0FBQ2U7QUFDZixpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFNO0FBQzdCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBO0FBQ0EscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7QUFDSjtBQUN4QztBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFNO0FBQzdCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBO0FBQ0EscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlEQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFhO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlEQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFhO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLd0Q7QUFDaUM7QUFDRjtBQUNOO0FBQ3JDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEZBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBGQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBUztBQUNiLElBQUksd0VBQXFCO0FBQ3pCLElBQUksZ0dBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBGQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLFFBQVEsMERBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKa0Q7QUFDaUI7QUFDZTtBQUNEO0FBQ3JDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRkFBMEIsQ0FBQywrREFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBaUI7QUFDaEMsSUFBSSx5REFBUztBQUNiLElBQUksaUVBQWlCLENBQUMsMkRBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEZBQTBCLENBQUMsK0RBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQU07QUFDOUIsMEJBQTBCLG9EQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFa0Q7QUFDVDtBQUN5QztBQUNaO0FBQ1c7QUFDckM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRkFBMEIsQ0FBQywrREFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRkFBMEIsQ0FBQywrREFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQU07QUFDekI7QUFDQTtBQUNBLHVCQUF1QixpREFBTTtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0EsUUFBUSwwREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixpREFBTTtBQUM5QiwwQkFBMEIsaURBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wRTtBQUNYO0FBQy9EO0FBQ0E7QUFDQSxJQUFJLCtFQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLGlGQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLGdGQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLGtGQUE2QjtBQUNqQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBFO0FBQ1g7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFpQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnRkFBaUI7QUFDMUMsSUFBSSxnRkFBaUI7QUFDckIsSUFBSSw2RUFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdGQUFpQjtBQUMxQyxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLCtFQUEwQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIwRTtBQUNYO0FBQy9EO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLCtFQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLDZFQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFpQjtBQUNyQixJQUFJLCtFQUEwQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakI0RjtBQUM1RjtBQUNlO0FBQ2YsSUFBSSx5R0FBb0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ptRDtBQUNpQjtBQUNSO0FBQ087QUFDb0M7QUFDQTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2RUFBaUI7QUFDMUMseUJBQXlCLDZFQUFpQjtBQUMxQztBQUNBLGlCQUFpQiw2RUFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQU07QUFDdkM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFpQjtBQUNyQjtBQUNBLElBQUkseURBQVM7QUFDYixJQUFJLGlFQUFpQixDQUFDLDZFQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFpQjtBQUNyQjtBQUNBLElBQUkseURBQVM7QUFDYixJQUFJLGlFQUFpQixDQUFDLDZFQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkVBQWlCO0FBQzFDO0FBQ0EseUJBQXlCLDZFQUFpQjtBQUMxQyx5QkFBeUIsNkVBQWlCO0FBQzFDO0FBQ0EsaUJBQWlCLDZFQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3REFBTTtBQUN2QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQWlCO0FBQ3JCLDhEQUE4RCxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUNuSCxJQUFJLHlGQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQWlCO0FBQ3JCLDhEQUE4RCxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUNuSCxJQUFJLDBGQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3RDtBQUNRO0FBQ2hFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0YwRTtBQUNxQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCLFFBQVEsd0VBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsSUFBSSw0R0FBb0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeUU7QUFDQztBQUNUO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFTO0FBQzdCLG9CQUFvQixnRkFBaUI7QUFDckMsb0JBQW9CLG9FQUFpQjtBQUNyQyxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFTO0FBQ3pCLGdCQUFnQixnRkFBaUI7QUFDakMsZ0JBQWdCLG9FQUFpQjtBQUNqQztBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYb0U7QUFDZTtBQUNyQjtBQUNYO0FBQ3VDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0RUFBNkI7QUFDekMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYSxtRUFBTztBQUNyQztBQUNBLG9CQUFvQixnRkFBaUI7QUFDckMsb0JBQW9CLDJFQUE0QjtBQUNoRCxrQkFBa0I7QUFDbEIsaUJBQWlCLGFBQWEsbUVBQU87QUFDckM7QUFDQSxvQkFBb0IsZ0ZBQWlCO0FBQ3JDLG9CQUFvQiwwRUFBMkI7QUFDL0Msa0JBQWtCO0FBQ2xCLGlCQUFpQixhQUFhLG1FQUFPO0FBQ3JDO0FBQ0Esb0JBQW9CLGdGQUFpQjtBQUNyQyxvQkFBb0IsNEVBQTZCO0FBQ2pELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0ZBQXFCO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RkFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsdUJBQXVCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLHVCQUF1QjtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsdUJBQXVCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJc0M7QUFDaUU7QUFDL0I7QUFDUztBQUNsQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0Q7QUFDTztBQUNIO0FBQ21JO0FBQ3RHO0FBQ0E7QUFDb0Q7QUFDRDtBQUN2QjtBQUNoQztBQUNmO0FBQ0E7QUFDSDtBQUMwRTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUhBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFIQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseUhBQXlIO0FBQ2xJLFNBQVMsMklBQTJJO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixtQkFBbUIsK0RBQVUsMEJBQTBCLGdGQUFxQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5SEFBeUg7QUFDbEksU0FBUywySUFBMkk7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWtCO0FBQ3RCLG1CQUFtQiwrREFBVTtBQUM3QixRQUFRLGtGQUFtQixDQUFDLGdGQUFpQjtBQUM3QyxRQUFRLG9FQUF1QixDQUFDLGdGQUFpQjtBQUNqRDtBQUNBO0FBQ0EsWUFBWSxpRkFBMEIsQ0FBQyxnRkFBaUI7QUFDeEQ7QUFDQTtBQUNBLFlBQVkscUZBQTBCLENBQUMsZ0ZBQWlCO0FBQ3hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLGdGQUFpQjtBQUM3SCwwR0FBMEcsZ0ZBQWlCO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0hBQXNIO0FBQy9ILFNBQVMsNkhBQTZIO0FBQ3RJLFNBQVMsdUdBQXVHO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixxQkFBcUIsOEVBQWdELENBQUMsK0RBQVU7QUFDaEYsbUJBQW1CLCtEQUFVO0FBQzdCLFFBQVEsOEVBQWtCO0FBQzFCLFFBQVEsc0RBQVM7QUFDakIsUUFBUSx3RUFBaUIsQ0FBQyxnRkFBaUI7QUFDM0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLHVFQUFlLENBQUM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNIQUFzSDtBQUMvSCxTQUFTLDZIQUE2SDtBQUN0SSxTQUFTLHVHQUF1RztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBa0I7QUFDdEIscUJBQXFCLDhFQUFnRCxDQUFDLCtEQUFVO0FBQ2hGLG1CQUFtQiwrREFBVTtBQUM3QixRQUFRLDRFQUFnQixDQUFDLGdGQUFpQjtBQUMxQyxRQUFRLDhFQUF1QixDQUFDLGdGQUFpQjtBQUNqRCxRQUFRLGdGQUFpQjtBQUN6QixRQUFRLHNEQUFTO0FBQ2pCLFFBQVEsd0VBQWlCLENBQUMsZ0ZBQWlCO0FBQzNDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdGQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdGQUFpQixrQ0FBa0M7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNIQUFzSDtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBa0I7QUFDdEIsbUJBQW1CLCtEQUFVLHVCQUF1QiwwRUFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0hBQXNIO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixtQkFBbUIsK0RBQVU7QUFDN0IsUUFBUSw0RUFBZ0IsQ0FBQyxnRkFBaUI7QUFDMUMsUUFBUSw4RUFBdUIsQ0FBQyxnRkFBaUI7QUFDakQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHLGdGQUFpQjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBYSxDQUFDLGdGQUFpQjtBQUN2QyxRQUFRLCtGQUF5QixDQUFDLGdGQUFpQjtBQUNuRCxRQUFRLGdGQUFpQjtBQUN6QjtBQUNBLFlBQVksc0RBQVM7QUFDckIsWUFBWSxnRkFBcUIsQ0FBQywwRUFBVztBQUM3QztBQUNBO0FBQ0EsWUFBWSw0RUFBaUIsQ0FBQyxnRkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQWlCLDZCQUE2QixnRkFBaUI7QUFDdkUsUUFBUSxpRkFBYyxDQUFDLGdGQUFpQjtBQUN4QyxRQUFRLGdGQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQWlCLDhDQUE4QyxnRkFBaUI7QUFDeEYsUUFBUSxpRkFBYyxDQUFDLGdGQUFpQjtBQUN4QyxRQUFRLGdGQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEVBQThDO0FBQ25FLG1CQUFtQiwrREFBVTtBQUM3QixRQUFRLHdGQUF5QixDQUFDLGdGQUFpQjtBQUNuRCxRQUFRLHFFQUF3QixDQUFDLGdGQUFpQjtBQUNsRDtBQUNBLFlBQVksa0VBQXFCLENBQUMsZ0ZBQWlCO0FBQ25EO0FBQ0E7QUFDQSxZQUFZLGtFQUFxQixDQUFDLGdGQUFpQjtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnRkFBaUIsNkJBQTZCO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFN3RTtBQUNKO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQU87QUFDN0I7QUFDQSwwQ0FBMEMsMERBQU8sY0FBYywwREFBTztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV5RztBQUNuQjtBQUNDO0FBQzVCO0FBQ1I7QUFDdUM7QUFDZ0k7QUFDMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYSxnRUFBTztBQUNqQztBQUNBLGdCQUFnQiw4SUFBK0I7QUFDL0MsY0FBYztBQUNkLGFBQWEsYUFBYSxnRUFBTztBQUNqQztBQUNBLGdCQUFnQiwwSUFBMkI7QUFDM0MsY0FBYztBQUNkLGFBQWEsYUFBYSxnRUFBTztBQUNqQztBQUNBLGdCQUFnQix3SUFBeUI7QUFDekMsY0FBYztBQUNkLGFBQWEsYUFBYSxnRUFBTztBQUNqQztBQUNBLGdCQUFnQiwwSUFBMkI7QUFDM0MsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZFQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDM0gsWUFBWSwwRUFBb0I7QUFDaEMsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsaUJBQWlCO0FBQ25GO0FBQ0EsUUFBUSwwRUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLGlCQUFpQixtQkFBbUIsaUJBQWlCO0FBQzNILFlBQVksMEVBQW9CO0FBQ2hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkorRztBQUNqRDtBQUNYO0FBQ29CO0FBQ29EO0FBQ3JFO0FBQzZGO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isa0lBQXNCO0FBQ3RDLGNBQWM7QUFDZCxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isb0lBQXdCO0FBQ3hDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzR0FBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnRkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRkFBaUI7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0VBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxpQkFBaUIsbUJBQW1CLGlCQUFpQjtBQUM3SDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHMEQ7QUFDcUQ7QUFDakQ7QUFDWDtBQUNvQjtBQUNzQjtBQUNvRjtBQUNwSDtBQUNQO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzR0FBd0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isd0lBQTRCO0FBQzVDLGNBQWM7QUFDZCxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isa0lBQXNCO0FBQ3RDLGNBQWM7QUFDZCxhQUFhLGFBQWEsbUVBQU87QUFDakM7QUFDQSxnQkFBZ0Isb0lBQXdCO0FBQ3hDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdGQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFpQjtBQUN6QixRQUFRLHVFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrRUFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4RUFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGlCQUFpQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPbUU7QUFDbkU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmlGO0FBQzhCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdIQUE0QixDQUFDLHVFQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLHVCQUF1QjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsdUJBQXVCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsdUJBQXVCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtIQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEg7QUFDN0Y7QUFDQTtBQUNYO0FBQ2dDO0FBQ2dDO0FBQzNHO0FBQ0E7QUFDQSxvQkFBb0IsNEZBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQW9CO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJLHlFQUFhO0FBQ2pCO0FBQ0EsSUFBSSxtRUFBVSxDQUFDLHVFQUFXO0FBQzFCLElBQUksbUVBQVUsQ0FBQyx1RUFBVztBQUMxQixJQUFJLG1FQUFVLENBQUMsdUVBQVc7QUFDMUI7QUFDQSxJQUFJLG1FQUFVLENBQUMsdUVBQVc7QUFDMUIsSUFBSSxtRUFBVSxDQUFDLHVFQUFXO0FBQzFCLElBQUksbUVBQVUsQ0FBQyx1RUFBVztBQUMxQjtBQUNBO0FBQ0EsSUFBSSx5RUFBYTtBQUNqQjtBQUNBLElBQUksbUVBQVUsQ0FBQyx1RUFBVztBQUMxQixJQUFJLG1FQUFVLENBQUMsdUVBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseURBQXFCLENBQUMsdUVBQVc7QUFDakMsbUVBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBNkIsQ0FBQyx1RUFBVztBQUN6QztBQUNBLHdGQUFzQixDQUFDLHVFQUFXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvY29sb3Vycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL29yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9zdGVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvcHJvamVjdEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvc3RlcEFjdGlvbkJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvdGFza0FjdGlvbkJ1dHRvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hbGxQcm9qZWN0c0xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9jaGVja2JveExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9mb3JtQnV0dG9uTGlzdGVuZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3NpZGViYXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2FsbFByb2plY3RzUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvcmFkaW9GaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvZm9ybXMvdGV4dEZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2Uvc3RlcHNDYXJkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG4gICAgLS1hY3Rpb24tYnRuLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQ6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYWwgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59ICovXHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWJhY2tncm91bmQpO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1hY3Rpb24tYnRuIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpXHJcbn1cclxuLmRpc2FibGVkLWFjdGlvbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGVkLWNhcmQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQ6IDFmciA1ZnIgLyAxZnIgNGZyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFNpZGViYXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51LFxyXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4uYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbn1cclxuLmNyZWF0ZS1wcm9qZWN0LWhlYWRlci1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLXRpdGxlIHtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcblxyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLypcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogR2VuZXJhbCBGb3JtIFN0eWxpbmdcclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50aXRsZS1pbnB1dDpmb2N1cyxcclxuLmRhdGUtaW5wdXQ6Zm9jdXMsXHJcbi5kZXNjLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xyXG59IFxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5jcmVhdGlvbi1mb3JtLFxyXG4uZGVsZXRlLWZvcm0sXHJcbi5jb2xvdXItZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uZmllbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcblxyXG4uZm9ybS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi8gXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG4udGl0bGUtaW5wdXQsXHJcbi5kYXRlLWlucHV0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRlc2MtaW5wdXQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRGVsZXRpb24gRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBcclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb2xvdXIgUGlja2VyIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmNvbG91ci1maWVsZHNldCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jb2xvdXItZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5jb2xvdXItcmFkaW8tYnRuIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50LWJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogcGFkZGluZy1yaWdodDogY2FsYygxMDB2dyAtIDEwMCUpOyAqL1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59IFxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFRvZGF5IENvbnRlbnQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNlY3Rpb24tZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxufSBcclxuLnNlY3Rpb24tZGl2aWRlcjo6YmVmb3JlIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMCAxcmVtIDAgMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xyXG4gICAgZmxleC1ncm93OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMnJlbSAwIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbi50YXNrLWxpc3QtY29udGFpbmVyLFxyXG4uc3RlcHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogI2FlMmUyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6ICM1ZTRkYjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbG93IHtcclxuICAgIGNvbG9yOiAjMDA1NWNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcclxufVxyXG5cclxuLnByaW9yaXR5LW5vbmUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb290ZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4vKiAuZm9vdGVyIHtcclxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEMsRUFBRSw0QkFBNEI7SUFDNUUsNEJBQTRCO0lBQzVCLHFEQUFxRCxFQUFFLHFEQUFxRDtJQUM1Ryx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLCtDQUErQztBQUNuRDs7QUFFQTs7OztFQUlFO0FBQ0Y7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKO0FBQ0E7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7O0FBRUE7Ozs7RUFJRTtBQUNGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7Ozs7RUFJRTtBQUNGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0VBSUU7QUFDRjs7OztDQUlDO0FBQ0Q7OztJQUdJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBRUE7OztJQUdJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlDQUFpQztBQUNyQzs7QUFFQTs7OztFQUlFO0FBQ0Y7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBOzs7O0VBSUU7O0FBRUY7Ozs7RUFJRTtBQUNGO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBOzs7O0VBSUU7QUFDRjtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOzs7O0VBSUU7QUFDRjs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztFQUlFO0NBQ0Q7SUFDRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELGNBQWM7QUFDbEI7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7Ozs7R0FLR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXFxyXFxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cXHJcXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xcclxcbiAgICAtLWFjdGlvbi1idG4tYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gICAgLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogR2VuZXJhbCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZC1hY3Rpb24tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKVxcclxcbn1cXHJcXG4uZGlzYWJsZWQtYWN0aW9uLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jYXJkLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAxZnIgNWZyIC8gMWZyIDRmcjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFNpZGViYXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbWVudSxcXHJcXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb24ge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi8qXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xcclxcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiovXFxyXFxuLnRpdGxlLWlucHV0OmZvY3VzLFxcclxcbi5kYXRlLWlucHV0OmZvY3VzLFxcclxcbi5kZXNjLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcXHJcXG59IFxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLmNyZWF0aW9uLWZvcm0sXFxyXFxuLmRlbGV0ZS1mb3JtLFxcclxcbi5jb2xvdXItZm9ybSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvcm0gQnV0dG9uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcblxcclxcbi5mb3JtLWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODksIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnRuIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ3JlYXRpb24gRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uZm9ybS1sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQsXFxyXFxuLmRhdGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLWlucHV0IHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIFxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqLyBcXHJcXG4uY29sb3VyLWZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDFmciwgNTBweCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDAuNnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG91ci1yYWRpby1idG4ge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ib2R5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgLyogcGFkZGluZy1yaWdodDogY2FsYygxMDB2dyAtIDEwMCUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBBbGwgUHJvamVjdHMgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4ucHJvamVjdC1jYXJkLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogVG9kYXkgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zZWN0aW9uLWRpdmlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxufSBcXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG4uc2VjdGlvbi1kaXZpZGVyOjphZnRlciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTAwO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogMCAycmVtIDAgMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXIsXFxyXFxuLnN0ZXBzLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2staXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcmlvcml0eSBJY29uIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuIC5wcmlvcml0eS10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgICBjb2xvcjogI2FlMmUyNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNlYjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZCB7XFxyXFxuICAgIGNvbG9yOiAjNWU0ZGIyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbG93IHtcXHJcXG4gICAgY29sb3I6ICMwMDU1Y2M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWYyZmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1ub25lIHtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY2FyZC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6ICM2YTZhNmE7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9vdGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKiAuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAtMiAvIDEgLyAtMSAvIC0xO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIEFjdGlvbiBidXR0b24gY2xhc3NuYW1lIEVOVU0gKi9cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIENSRUFURTogXCJhZGQtYnV0dG9uXCIsXHJcbiAgICBDT0xPVVI6IFwiY29sb3VyLWJ1dHRvblwiLFxyXG4gICAgRURJVDogXCJlZGl0LWJ1dHRvblwiLFxyXG4gICAgREVMRVRFOiBcImRlbGV0ZS1idXR0b25cIixcclxufVxyXG5cclxuZXhwb3J0IHsgQWN0aW9ucyB9IiwiLyogQ29sb3VyIEVOVU0gKi9cclxuY29uc3QgQ29sb3VycyA9IHtcclxuICAgIE5PTkU6IFwiIzdFODE4MFwiLFxyXG4gICAgUkVEOiBcIiNFMTM0MUVcIixcclxuICAgIEJMVUU6IFwiIzBFMDlGNlwiLFxyXG4gICAgR1JFRU46IFwiIzBDRjMzRFwiLFxyXG4gICAgUFVSUExFOiBcIiNGMzBDQzJcIixcclxuICAgIFlFTExPVzogXCIjRjFGNjA5XCIsXHJcbiAgICAvLyBURUFMOiBcIiMxZWNiZTFcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdENvbG91ciA9IENvbG91cnMuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZENvbG91cihjb2xvdXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKENvbG91cnMpLmluY2x1ZGVzKGNvbG91cik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSIsIi8qIE9yZ2FuaXplciBFTlVNICovXHJcbmNvbnN0IE9yZ2FuaXplcnMgPSB7XHJcbiAgICBQUk9KRUNUOiBcIlByb2plY3RcIixcclxuICAgIFRBU0s6IFwiVGFza1wiLFxyXG4gICAgU1RFUDogXCJTdGVwXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBjb2xvdXIgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZE9yZ2FuaXplcihvcmdhbml6ZXIpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKE9yZ2FuaXplcnMpLmluY2x1ZGVzKG9yZ2FuaXplcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE9yZ2FuaXplcnMsIGlzVmFsaWRPcmdhbml6ZXIgfSIsIi8qIFByaW9yaXR5IEVOVU0gKi9cclxuY29uc3QgUHJpb3JpdHkgPSB7XHJcbiAgICBOT05FOiBcIk5vbmVcIixcclxuICAgIExPVzogXCJMb3dcIixcclxuICAgIE1FRDogXCJNZWRcIixcclxuICAgIEhJR0g6IFwiSGlnaFwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0UHJpb3JpdHkgPSBQcmlvcml0eS5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHByaW9yaXR5IHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmluY2x1ZGVzKHByaW9yaXR5KTtcclxufVxyXG5cclxuLyogQ29udmVydHMgYSBwcmlvcml0eSB2YWx1ZSB0byBhIG51bWVyaWNhbCB2YWx1ZSAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0UHJpb3JpdHlUb1ZhbHVlKHByaW9yaXR5KSB7XHJcbiAgICBpZiAocHJpb3JpdHkgPT09IFByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09PSBQcmlvcml0eS5NRUQpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09PSBQcmlvcml0eS5MT1cpIHtcclxuICAgICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTb3J0cyB0d28gZWxlbWVudHMgYmFzZWQgb24gdGhlaXIgcHJpb3JpdHkgdmFsdWVzICovXHJcbmZ1bmN0aW9uIHByaW9yaXR5U29ydCh4LCB5KSB7XHJcbiAgICBjb25zdCB4UHJpb3JpdHlWYWx1ZSA9IGNvbnZlcnRQcmlvcml0eVRvVmFsdWUoeC5nZXRQcmlvcml0eSgpKTtcclxuICAgIGNvbnN0IHlQcmlvcml0eVZhbHVlID0gY29udmVydFByaW9yaXR5VG9WYWx1ZSh5LmdldFByaW9yaXR5KCkpO1xyXG4gICAgaWYgKCB4UHJpb3JpdHlWYWx1ZSA+IHlQcmlvcml0eVZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh4UHJpb3JpdHlWYWx1ZSA8IHlQcmlvcml0eVZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHksIGlzVmFsaWRQcmlvcml0eSwgcHJpb3JpdHlTb3J0IH0iLCIvKiBTdGF0dXMgRU5VTSAqL1xyXG5jb25zdCBTdGF0dXMgPSB7XHJcbiAgICBDT01QTEVURUQ6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBJTkNPTVBMRVRFOiBcIkluY29tcGxldGVcIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXR1cyBwcm9wZXJ0eSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3RhdHVzKS5pbmNsdWRlcyhzdGF0dXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSIsImltcG9ydCB7IERlZmF1bHRDb2xvdXIsIGlzVmFsaWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vZW51bXMvY29sb3Vycy5qc1wiO1xyXG5pbXBvcnQgeyBwcmlvcml0eVNvcnQgfSBmcm9tIFwiLi4vLi4vZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVUYXNrIH0gZnJvbSBcIi4uL3Rhc2suanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBwcm9qZWN0IG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RJRCkge1xyXG4gICAgbGV0IGNvbG91ciA9IERlZmF1bHRDb2xvdXI7XHJcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcclxuICAgIGNvbnN0IGluY29tcGxldGVUYXNrcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGFza3MgPSBbXTtcclxuICAgIGxldCBjdXJyZW50VGFzayA9IG51bGw7XHJcblxyXG4gICAgLyogUmV0dXJucyB0YXNrIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0VGFza0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGFza0NvdW50O1xyXG4gICAgICAgIHRhc2tDb3VudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG91cigpIHtcclxuICAgICAgICByZXR1cm4gY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbG91cihuZXdDb2xvdXIpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZENvbG91cihuZXdDb2xvdXIpKSB7XHJcbiAgICAgICAgICAgIGNvbG91ciA9IG5ld0NvbG91cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIHNvcnRJbmNvbXBsZXRlVGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYW4gaW5jb21wbGV0ZSB0YXNrIGZyb20gdGhlIHByb2plY3QgKGFuZCBhZGQgdG8gY29tcGxldGVUYXNrcyBpZiB2YWxpZCkgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3ModGFzaykge1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrcy5mb3JFYWNoKCh0YXNrRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2suZ2V0VGFza0lEKCkgPT09IHRhc2tFbGVtZW50LmdldFRhc2tJRCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNvbXBsZXRlVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbGx5IGFkZCB0byBjb21wbGV0ZWRUYXNrc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0NvbXBsZXRlZFRhc2tzKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29udmVydHMgYWxsIGluY29tcGxldGUgdGFza3MgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFza3MgPSBbXTtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgc2VyaWFsaXplZFRhc2tzLnB1c2goc2VyaWFsaXplVGFzayh0YXNrKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc29ydEluY29tcGxldGVUYXNrcygpIHtcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3Muc29ydChwcmlvcml0eVNvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGQgYSBjb21wbGV0ZWQgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9Db21wbGV0ZWRUYXNrcyh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICBzb3J0Q29tcGxldGVkVGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBjb21wbGV0ZWQgdGFzayBmcm9tIHRoZSBwcm9qZWN0IChhbmQgYWRkIHRvIGluY29tcGxldGVkVGFza3MgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQ29tcGxldGVkVGFza3ModGFzaykge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHRhc2tFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay5nZXRUYXNrSUQoKSA9PT0gdGFza0VsZW1lbnQuZ2V0VGFza0lEKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gaW5jb21wbGV0ZVRhc2tzXHJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLklOQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0luY29tcGxldGVUYXNrcyh0YXNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgY29tcGxldGVkIHRhc2tzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFza3MgPSBbXTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkVGFza3MucHVzaChzZXJpYWxpemVUYXNrKHRhc2spKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRUYXNrcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0Q29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3Muc29ydChwcmlvcml0eVNvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RJRCgpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgY3VycmVudFRhc2sgPSBuZXdUYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcclxuICAgICAgICBnZXRDb2xvdXIsIHNldENvbG91cixcclxuICAgICAgICBnZXRJbmNvbXBsZXRlVGFza3MsIGFkZFRvSW5jb21wbGV0ZVRhc2tzLCByZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzLCBzb3J0SW5jb21wbGV0ZVRhc2tzLCBnZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzLFxyXG4gICAgICAgIGdldENvbXBsZXRlZFRhc2tzLCBhZGRUb0NvbXBsZXRlZFRhc2tzLCByZW1vdmVGcm9tQ29tcGxldGVkVGFza3MsIHNvcnRDb21wbGV0ZWRUYXNrcywgZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzLFxyXG4gICAgICAgIGdldFByb2plY3RJRCxcclxuICAgICAgICBnZXROZXh0VGFza0NvdW50LFxyXG4gICAgICAgIGdldEN1cnJlbnRUYXNrLCBzZXRDdXJyZW50VGFzaywgXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0ZXAgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHN0YXR1cyA9IG5ld1N0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ09NUExFVEVEO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldFN0YXR1cywgc2V0U3RhdHVzLCBzd2FwU3RhdHVzLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgZ2V0U3RlcElELFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVTdGVwIH0gZnJvbSBcIi4uL3N0ZXBcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSB0YXNrIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgbGV0IHN0ZXBDb3VudCA9IDA7XHJcbiAgICBjb25zdCBpbmNvbXBsZXRlU3RlcHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gW107XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLklOQ09NUExFVEU7XHJcbiAgICBsZXQgY3VycmVudFN0ZXAgPSBudWxsO1xyXG5cclxuICAgIC8qIFJldHVybnMgc3RlcCBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFN0ZXBDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHN0ZXBDb3VudDtcclxuICAgICAgICBzdGVwQ291bnQrKztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuICAgICAgICBzdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dhcFN0YXR1cygpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFN0YXR1cy5JTkNPTVBMRVRFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNPTVBMRVRFRDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZVN0ZXBzKCkge1xyXG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlU3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVG9JbmNvbXBsZXRlU3RlcHMoc3RlcCkge1xyXG4gICAgICAgIGluY29tcGxldGVTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHN0ZXAgZnJvbSBpbmNvbXBsZXRlU3RlcHMgKGFuZCBhZGQgdG8gY29tcGxldGVkU3RlcHMgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tSW5jb21wbGV0ZVN0ZXBzKHN0ZXApIHtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHMuZm9yRWFjaCgoc3RlcEVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwLmdldFN0ZXBJRCgpID09PSBzdGVwRWxlbWVudC5nZXRTdGVwSUQoKSkge1xyXG4gICAgICAgICAgICAgICAgaW5jb21wbGV0ZVN0ZXBzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gY29tcGxldGVkU3RlcHNcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwLmdldFN0YXR1cygpID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Db21wbGV0ZWRTdGVwcyhzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgaW5jb21wbGV0ZSBzdGVwcyB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbiAgICBmdW5jdGlvbiBnZXRTZXJpYWxpemVkSW5jb21wbGV0ZVN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGVwcyA9IFtdO1xyXG4gICAgICAgIGluY29tcGxldGVTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkU3RlcHMucHVzaChzZXJpYWxpemVTdGVwKHN0ZXApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wbGV0ZWRTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gY29tcGxldGVkU3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgY29tcGxldGVkIHN0ZXAgdG8gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFRvQ29tcGxldGVkU3RlcHMoc3RlcCkge1xyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzLnB1c2goc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIGEgY29tcGxldGVkIHN0ZXAgZnJvbSB0aGUgdGFzayAoYW5kIGFkZCB0byBpbmNvbXBsZXRlU3RlcHMgaWYgdmFsaWQpICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQ29tcGxldGVkU3RlcHMoc3RlcCkge1xyXG4gICAgICAgIGNvbXBsZXRlZFN0ZXBzLmZvckVhY2goKHN0ZXBFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGVwSUQoKSA9PT0gc3RlcEVsZW1lbnQuZ2V0U3RlcElEKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWxseSBhZGQgdG8gaW5jb21wbGV0ZVN0ZXBzXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcC5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLklOQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUb0luY29tcGxldGVTdGVwcyhzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb252ZXJ0cyBhbGwgY29tcGxldGVkIHN0ZXBzIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRDb21wbGV0ZWRTdGVwcygpIHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RlcHMgPSBbXTtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBzZXJpYWxpemVkU3RlcHMucHVzaChzZXJpYWxpemVTdGVwKHN0ZXApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRTdGVwcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3RlcCgpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFN0ZXAobmV3U3RlcCkge1xyXG4gICAgICAgIGN1cnJlbnRTdGVwID0gbmV3U3RlcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgXHJcbiAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgc3dhcFN0YXR1cywgXHJcbiAgICAgICAgZ2V0SW5jb21wbGV0ZVN0ZXBzLCBhZGRUb0luY29tcGxldGVTdGVwcywgcmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcywgZ2V0U2VyaWFsaXplZEluY29tcGxldGVTdGVwcyxcclxuICAgICAgICBnZXRDb21wbGV0ZWRTdGVwcywgYWRkVG9Db21wbGV0ZWRTdGVwcywgcmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzLCBnZXRTZXJpYWxpemVkQ29tcGxldGVkU3RlcHMsXHJcbiAgICAgICAgZ2V0UHJvamVjdElELCBnZXRUYXNrSUQsIFxyXG4gICAgICAgIGdldE5leHRTdGVwQ291bnQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwLCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgY2xlYXJQYWdlLCByZW5kZXJTaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgYWRkVG9TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVzZXJpYWxpemVUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5cclxuLyogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwcm9qZWN0IHRoYXQgc3RvcmVzIGFsbCB1bmFzc2lnbmVkIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gZ2V0TmV4dFByb2plY3RDb3VudCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgXCJNaXNjZWxsYW5lb3VzXCIsIFxyXG4gICAgICAgIFwiRGVmYXVsdCBwcm9qZWN0XCIsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIGFkZFRvUHJvamVjdHMobmV3UHJvamVjdCk7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBTYXZlIGNoYW5nZSBsb2NhbGx5XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShnZXRTZXJpYWxpemVkUHJvamVjdHMoKSk7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBhbiBleGlzdGluZyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RJdGVtLmdldFByb2plY3RJRCgpID09PSBwcm9qZWN0LmdldFByb2plY3RJRCgpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBSZXR1cm5zIHByb2plY3QgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuZnVuY3Rpb24gZ2V0TmV4dFByb2plY3RDb3VudCgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gcHJvamVjdENvdW50O1xyXG4gICAgcHJvamVjdENvdW50Kys7XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgYSBwcm9qZWN0IGZyb20gY3JlYXRpb24gZm9ybSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKTtcclxuICAgIGFkZFRvU2lkZWJhclByb2plY3RzKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHByb2plY3QgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0RnJvbUZvcm0ocHJvamVjdCkge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikudmFsdWU7XHJcblxyXG4gICAgcHJvamVjdC5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbiAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKG5ld0Rlc2MpO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogRWRpdHMgdGhlIGNvbG91ciBvZiBhIHByb2plY3QgYmFzZWQgb24gY29sb3VyIHBpY2tlciBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0ocHJvamVjdCkge1xyXG4gICAgY29uc3QgbmV3Q29sb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZFwiKS52YWx1ZTtcclxuXHJcbiAgICBwcm9qZWN0LnNldENvbG91cihuZXdDb2xvdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0cyhuZXdQcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gICAgcHJvamVjdHMgPSBuZXdQcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvamVjdDtcclxufVxyXG5cclxuLyogQ29udmVydCB0aGUgcHJvamVjdCB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBkZXNjID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gcHJvamVjdC5nZXRTZXJpYWxpemVkSW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHByb2plY3QuZ2V0U2VyaWFsaXplZENvbXBsZXRlZFRhc2tzKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0LmdldFByb2plY3RJRCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBpbmNvbXBsZXRlVGFza3MsXHJcbiAgICAgICAgY29tcGxldGVkVGFza3MsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBwcm9qZWN0IGZyb20gSlNPTiBmb3JtYXQgZGF0YSAqL1xyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgLy8gQ3JlYXRpbmcgcHJvamVjdCBmcm9tIGRhdGFcclxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcclxuXHJcbiAgICAvLyBBZGRpbmcgYWxsIHRhc2tzXHJcbiAgICBwcm9qZWN0LmluY29tcGxldGVUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplVGFzayhuZXdQcm9qZWN0LCB0YXNrKTtcclxuICAgIH0pXHJcbiAgICBwcm9qZWN0LmNvbXBsZXRlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVUYXNrKG5ld1Byb2plY3QsIHRhc2spO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogQ29udmVydCB0aGUgcHJvamVjdCB0byBhIEpTT04tZnJpZW5kbHkgZm9ybWF0ICovXHJcbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRQcm9qZWN0cyA9IFtdO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBzZXJpYWxpemVkUHJvamVjdHMucHVzaChzZXJpYWxpemVQcm9qZWN0KHByb2plY3QpKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRQcm9qZWN0cztcclxufVxyXG5cclxubGV0IHByb2plY3RDb3VudCA9IDA7XHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVByb2plY3RGcm9tRm9ybSwgZWRpdFByb2plY3RGcm9tRm9ybSwgZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybSwgZ2V0UHJvamVjdHMsIHNldFByb2plY3RzLCBkZWxldGVQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsIGdldFNlcmlhbGl6ZWRQcm9qZWN0cywgZGVzZXJpYWxpemVQcm9qZWN0IH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3N0ZXBGYWN0b3J5XCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHN0ZXAgYW5kIGFkZHMgdG8gYSB0YXNrICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXAodGFzaywgdGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHRhc2suZ2V0UHJvamVjdElEKCk7XHJcbiAgICBjb25zdCB0YXNrSUQgPSB0YXNrLmdldFRhc2tJRCgpO1xyXG4gICAgY29uc3Qgc3RlcElEID0gdGFzay5nZXROZXh0U3RlcENvdW50KCk7XHJcbiAgICBjb25zdCBuZXdTdGVwID0gc3RlcEZhY3RvcnkodGl0bGUsIHByb2plY3RJRCwgdGFza0lELCBzdGVwSUQpO1xyXG5cclxuICAgIHRhc2suYWRkVG9JbmNvbXBsZXRlU3RlcHMobmV3U3RlcCk7XHJcbiAgICB0YXNrLnNldEN1cnJlbnRTdGVwKG5ld1N0ZXApO1xyXG5cclxuICAgIC8vIFNhdmUgY2hhbmdlIGxvY2FsbHlcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGdldFNlcmlhbGl6ZWRQcm9qZWN0cygpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlcyBhIHN0ZXAgZnJvbSBjcmVhdGlvbiBmb3JtICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBGcm9tRm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVN0ZXAoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLCB0aXRsZSk7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclByb2plY3RQYWdlKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHN0ZXAgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRTdGVwRnJvbUZvcm0oc3RlcCkge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gICAgc3RlcC5zZXRUaXRsZShuZXdUaXRsZSk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDb252ZXJ0IHRoZSBzdGVwIHRvIGEgSlNPTi1mcmllbmRseSBmb3JtYXQgKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplU3RlcChzdGVwKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHN0ZXAuZ2V0U3RhdHVzKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBzdGVwLmdldFByb2plY3RJRCgpO1xyXG4gICAgY29uc3QgdGFza0lEID0gc3RlcC5nZXRUYXNrSUQoKTtcclxuICAgIGNvbnN0IHN0ZXBJRCA9IHN0ZXAuZ2V0U3RlcElEKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgICAgIHRhc2tJRCxcclxuICAgICAgICBzdGVwSUQsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHN0ZXAgZnJvbSBKU09OIGZvcm1hdCBkYXRhICovXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplU3RlcCh0YXNrLCBzdGVwKSB7XHJcbiAgICAvLyBDcmVhdGluZyBzdGVwIGZyb20gZGF0YVxyXG4gICAgY3JlYXRlU3RlcCh0YXNrLCBzdGVwLnRpdGxlKTtcclxuICAgIGNvbnN0IG5ld1N0ZXAgPSB0YXNrLmdldEN1cnJlbnRTdGVwKCk7XHJcblxyXG4gICAgLy8gQWRkaW5nIHRvIGFwcHJvcHJpYXRlIGxvY2F0aW9uXHJcbiAgICBpZiAoc3RlcC5zdGF0dXMgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICBuZXdTdGVwLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgICAgICB0YXNrLnJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RlcCwgY3JlYXRlU3RlcEZyb21Gb3JtLCBlZGl0U3RlcEZyb21Gb3JtLCBzZXJpYWxpemVTdGVwLCBkZXNlcmlhbGl6ZVN0ZXAgfSIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFNlcmlhbGl6ZWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbG9jYWxTdG9yYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGRlc2VyaWFsaXplU3RlcCB9IGZyb20gXCIuL3N0ZXAuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyB0YXNrIGFuZCBhZGRzIHRvIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0UHJvamVjdElEKCk7XHJcbiAgICBjb25zdCB0YXNrSUQgPSBwcm9qZWN0LmdldE5leHRUYXNrQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCk7XHJcblxyXG4gICAgcHJvamVjdC5hZGRUb0luY29tcGxldGVUYXNrcyhuZXdUYXNrKTtcclxuICAgIHByb2plY3Quc2V0Q3VycmVudFRhc2sobmV3VGFzayk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDcmVhdGVzIGEgdGFzayBmcm9tIGNyZWF0aW9uIGZvcm0gKi9cclxuZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21Gb3JtKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlVGFzayhnZXRDdXJyZW50UHJvamVjdCgpLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG4vKiBFZGl0cyBhIHRhc2sgYmFzZWQgb24gaW5mb3JtYXRpb24gaW4gZWRpdCBmb3JtICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrRnJvbUZvcm0odGFzaykge1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWU7XHJcblxyXG4gICAgdGFzay5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbiAgICB0YXNrLnNldERlc2NyaXB0aW9uKG5ld0Rlc2MpO1xyXG4gICAgdGFzay5zZXREdWVEYXRlKG5ld0RhdGUpO1xyXG4gICAgdGFzay5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XHJcblxyXG4gICAgLy8gU2F2ZSBjaGFuZ2UgbG9jYWxseVxyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoZ2V0U2VyaWFsaXplZFByb2plY3RzKCkpO1xyXG59XHJcblxyXG4vKiBDb21wbGV0ZSBhIHRhc2sgYW5kIGNvbnZlcnQgYWxsIHN0ZXBzIHRvIHJlcXVpcmVkIHN0YXR1cyovXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICB0YXNrLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgIC8vIE1hcmsgaW5jb21wbGV0ZSBzdGVwc1xyXG4gICAgdGFzay5nZXRJbmNvbXBsZXRlU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIHN0ZXAuc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qIENvbnZlcnQgdGhlIHRhc2sgdG8gYSBKU09OLWZyaWVuZGx5IGZvcm1hdCAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemVUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IHRpdGxlID0gdGFzay5nZXRUaXRsZSgpO1xyXG4gICAgY29uc3QgZGVzYyA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrLmdldER1ZURhdGUoKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gdGFzay5nZXRTdGF0dXMoKTtcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwcyA9IHRhc2suZ2V0U2VyaWFsaXplZEluY29tcGxldGVTdGVwcygpO1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSB0YXNrLmdldFNlcmlhbGl6ZWRDb21wbGV0ZWRTdGVwcygpO1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gdGFzay5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHRhc2suZ2V0VGFza0lEKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGluY29tcGxldGVTdGVwcyxcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcyxcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICAgICAgdGFza0lELFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0YXNrIGZyb20gSlNPTiBmb3JtYXQgZGF0YSAqL1xyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgLy8gQ3JlYXRpbmcgdGFzayBmcm9tIGRhdGFcclxuICAgIGNyZWF0ZVRhc2socHJvamVjdCwgdGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHByb2plY3QuZ2V0Q3VycmVudFRhc2soKVxyXG5cclxuICAgIC8vIEFkZGluZyBhbGwgc3RlcHNcclxuICAgIHRhc2suaW5jb21wbGV0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgZGVzZXJpYWxpemVTdGVwKG5ld1Rhc2ssIHN0ZXApO1xyXG4gICAgfSlcclxuICAgIHRhc2suY29tcGxldGVkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBkZXNlcmlhbGl6ZVN0ZXAobmV3VGFzaywgc3RlcCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFkZGluZyB0byBhcHByb3ByaWF0ZSBsb2NhdGlvblxyXG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBTdGF0dXMuQ09NUExFVEVEKSB7XHJcbiAgICAgICAgbmV3VGFzay5zZXRTdGF0dXMoU3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgcHJvamVjdC5yZW1vdmVGcm9tSW5jb21wbGV0ZVRhc2tzKG5ld1Rhc2spO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjb21wbGV0ZVRhc2ssIGNyZWF0ZVRhc2tGcm9tRm9ybSwgZWRpdFRhc2tGcm9tRm9ybSwgc2VyaWFsaXplVGFzaywgZGVzZXJpYWxpemVUYXNrIH0iLCJmdW5jdGlvbiBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lcihidG4sIGV2ZW50RnVuY3Rpb24pIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBldmVudEZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRlVGFza0J1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIGZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q29sb3VyQnV0dG9uTGlzdGVuZXIocHJvamVjdCkge1xyXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyKHByb2plY3QpIHtcclxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGVCdXR0b25MaXN0ZW5lcihwcm9qZWN0KSB7XHJcbiAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVByb2plY3RGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIsIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdEVkaXRCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi8uLi8uLi9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0Zyb21JRCh0YXNrcywgdGFza0lEKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcodGFzay5nZXRUYXNrSUQoKSkgPT09IHRhc2tJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckVkaXRTdGVwRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGVwRGVsZXRlQnV0dG9uTGlzdGVuZXIoc3RlcCkge1xyXG4gICAgc2V0Q3VycmVudFRhc2tGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRJbmNvbXBsZXRlVGFza3MoKSwgU3RyaW5nKHN0ZXAuZ2V0VGFza0lEKCkpKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgIGZvcm1zLnJlbmRlckRlbGV0ZVN0ZXBGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0ZXBFZGl0QnV0dG9uTGlzdGVuZXIsIHN0ZXBEZWxldGVCdXR0b25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0VkaXRCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyRWRpdFRhc2tGb3JtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lcih0YXNrKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgZm9ybXMucmVuZGVyRGVsZXRlVGFza0Zvcm0oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdGFza0NyZWF0ZVN0ZXBCdXR0b25MaXN0ZW5lciwgdGFza0VkaXRCdXR0b25MaXN0ZW5lciwgdGFza0RlbGV0ZUJ1dHRvbkxpc3RlbmVyIH0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cykge1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5wcm9qZWN0LWNhcmRcIik7XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy90YXNrXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheVwiO1xyXG5pbXBvcnQgeyBzZXRTdGVwQ2FyZENvbXBsZXRlZCwgc2V0U3RlcENhcmRJbmNvbXBsZXRlIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Byb2plY3RQYWdlL3N0ZXBzQ2FyZEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2V0VGFza0NhcmRDb21wbGV0ZWQsIHNldFRhc2tDYXJkSW5jb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9wcm9qZWN0UGFnZS90YXNrc0NhcmRIYW5kbGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0Zyb21JRCh0YXNrcywgdGFza0lEKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmIChTdHJpbmcodGFzay5nZXRUYXNrSUQoKSkgPT09IHRhc2tJRCkge1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRTdGVwRnJvbUlEKHN0ZXBzLCBzdGVwSUQpIHtcclxuICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyhzdGVwLmdldFN0ZXBJRCgpKSA9PT0gc3RlcElEKSB7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5zZXRDdXJyZW50U3RlcChzdGVwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkID0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gU2VhcmNoZXMgYm90aCBsaXN0cyB0aGUgY3VycmVudCB0YXNrXHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEluY29tcGxldGVUYXNrcygpLCBTdHJpbmcodGFza0NhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSk7XHJcbiAgICBzZXRDdXJyZW50VGFza0Zyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldENvbXBsZXRlZFRhc2tzKCksIFN0cmluZyh0YXNrQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSB0aGUgdGFza3MgY29tcGxldGUgc3RhdHVzXHJcbiAgICB0YXNrLnN3YXBTdGF0dXMoKTtcclxuXHJcbiAgICAvLyBJbnRyb2R1Y2UgYSBzbGlnaHQgdmlzdWFsIGRlbGF5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBDYWxsIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgY29tcGxldGlvbiBzdGF0dXNcclxuICAgICAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PT0gU3RhdHVzLkNPTVBMRVRFRCkge1xyXG4gICAgICAgICAgICBzZXRUYXNrU3RhdHVzQ29tcGxldGVIYW5kbGVyKHRhc2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRhc2tTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcih0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUYXNrU3RhdHVzQ29tcGxldGVIYW5kbGVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUluY29tcGxldGVUYXNrcyh0YXNrKTtcclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHdyYXBwZXIgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBzZWN0aW9uIFxyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGFza1N0YXR1c0luY29tcGxldGVIYW5kbGVyKHRhc2spIHtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlRnJvbUNvbXBsZXRlZFRhc2tzKHRhc2spO1xyXG4gICAgLy8gTW92ZXMgdGhlIGNhcmQgd3JhcHBlciB0byB0aGUgaW5jb21wbGV0ZSB0YXNrcyBzZWN0aW9uIFxyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBpbml0aWFsaXphdGlvbiBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIG1hcmtpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIHRhc2tzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB0YXNrU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RlcFN0YXR1c1RvZ2dsZUxpc3RlbmVyKGNoZWNrYm94KSB7XHJcbiAgICBjb25zdCBzdGVwQ2FyZCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHNldEN1cnJlbnRUYXNrRnJvbUlEKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0SW5jb21wbGV0ZVRhc2tzKCksIFN0cmluZyhzdGVwQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpKTtcclxuICAgIC8vIFNlYXJjaGVzIGJvdGggbGlzdHMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgc2V0Q3VycmVudFN0ZXBGcm9tSUQoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEluY29tcGxldGVTdGVwcygpLCBTdHJpbmcoc3RlcENhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIpKSk7XHJcbiAgICBzZXRDdXJyZW50U3RlcEZyb21JRChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q29tcGxldGVkU3RlcHMoKSwgU3RyaW5nKHN0ZXBDYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiKSkpO1xyXG5cclxuICAgIGNvbnN0IHN0ZXAgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlIHN0ZXBzIGNvbXBsZXRlIHN0YXR1c1xyXG4gICAgc3RlcC5zd2FwU3RhdHVzKCk7XHJcblxyXG4gICAgLy8gSW50cm9kdWNlIGEgc2xpZ2h0IHZpc3VhbCBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICAgICAgaWYgKHN0ZXAuZ2V0U3RhdHVzKCkgPT09IFN0YXR1cy5DT01QTEVURUQpIHtcclxuICAgICAgICAgICAgc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTdGVwU3RhdHVzSW5jb21wbGV0ZUhhbmRsZXIoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3RlcFN0YXR1c0NvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUluY29tcGxldGVTdGVwcyhzdGVwKTtcclxuICAgIGNvbnN0IHN0ZXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG4gICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG5cclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBjb21wbGV0ZWQgc3RlcHMgbGlzdFxyXG4gICAgY29uc3QgcGFyZW50ID0gc3RlcENhcmQucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudC5uZXh0U2libGluZy5hcHBlbmRDaGlsZChzdGVwQ2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0ZXBTdGF0dXNJbmNvbXBsZXRlSGFuZGxlcihzdGVwKSB7XHJcbiAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkucmVtb3ZlRnJvbUNvbXBsZXRlZFN0ZXBzKHN0ZXApO1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcbiAgICBzZXRTdGVwQ2FyZEluY29tcGxldGUoc3RlcENhcmQpO1xyXG5cclxuICAgIC8vIE1vdmVzIHRoZSBjYXJkIHRvIHRoZSBpbmNvbXBsZXRlIHN0ZXBzIGxpc3RcclxuICAgIGNvbnN0IHBhcmVudCA9IHN0ZXBDYXJkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQucHJldmlvdXNTaWJsaW5nLmFwcGVuZENoaWxkKHN0ZXBDYXJkKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBpbml0aWFsaXphdGlvbiBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIG1hcmtpbmcgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIHN0ZXBzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0ZXBTdGF0dXNMaXN0ZW5lcihjaGVja2JveCkge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBzdGVwU3RhdHVzVG9nZ2xlTGlzdGVuZXIoY2hlY2tib3gpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFza1N0YXR1c0xpc3RlbmVyLCBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIgfSIsImZ1bmN0aW9uIGNyZWF0ZUZvcm1TdWJtaXRCdXR0b25MaXN0ZW5lcihidG4sIHN1Ym1pdEZ1bmN0aW9uLCBtb2RhbCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoYnRuLCBtb2RhbCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIgfSIsImltcG9ydCBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzIGZyb20gXCIuL3NpZGViYXJMaXN0ZW5lcnNcIjtcclxuaW1wb3J0IGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzIGZyb20gXCIuL2FsbFByb2plY3RzTGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlU2lkZWJhckxpc3RlbmVycyxcclxuICAgIGNyZWF0ZUFsbFByb2plY3RzTGlzdGVuZXJzLFxyXG59IiwiaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHNQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSBmcm9tIFwiLi91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzXCI7XHJcblxyXG4vKiBNYWtlIHRoZSBhbGwgcHJvamVjdHMgc2lkZWJhciBidXR0b24gbGluayB0byB0aGUgYWxsIHByb2plY3RzIHBhZ2UgKi9cclxuZnVuY3Rpb24gY3JlYXRlQWxsUHJvamVjdHNCdXR0b25MaXN0ZW5lcihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0cy1idXR0b25cIik7XHJcblxyXG4gICAgYWxsUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG4gICAgfSlcclxufVxyXG5cclxuLyogR2l2ZSBhbGwgc2lkZWJhciBwcm9qZWN0IGJ1dHRvbnMgZnVuY3Rpb25hbGl0eSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzKHByb2plY3RzKSB7XHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0J1dHRvbkxpc3RlbmVyKHByb2plY3RzKTtcclxuICAgIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgXCIuc2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiKTtcclxufSIsImltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBjbGVhclBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuXHJcbi8qIE1ha2UgYSBncm91cCBvZiBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnRzIGxpbmsgdG8gdGhlaXIgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgLy8gTGluayBlYWNoIHByb2plY3QgbmF2aWdhdGlvbiBlbGVtZW50IHRvIGEgcHJvamVjdCBwYWdlXHJcbiAgICBwcm9qZWN0TmF2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpID09PSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBNYWtlIGEgc2luZ2xlIHByb2plY3QgbmF2aWdhdGlvbiBET00gZWxlbWVudCBsaWtlIHRvIGEgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGFkZFByb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXIocHJvamVjdHMsIGl0ZW0pIHtcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKFN0cmluZyhwcm9qZWN0LmdldFByb2plY3RJRCgpKSA9PT0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycywgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lciB9IiwiaW1wb3J0IHsgZGVzZXJpYWxpemVQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuXHJcbi8vIFVwZGF0ZXMgdGhlIGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbCBlbnZpcm9ubWVudFxyXG5mdW5jdGlvbiBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShuZXdQcm9qZWN0cykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0cykpO1xyXG59XHJcblxyXG4vLyBGZXRjaGVzIHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgbG9jYWwgZW52aXJvbmVtbnQgYW5kIGNvbnZlcnRzIHV0IGJhY2sgdG8gdXNlYWJsZSBmb3JtYXRcclxuZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSwgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IiwiaW1wb3J0IHsgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBvZiB0aGUgY3VycmVudCBwcm9qZWN0cyAqL1xyXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgY29udGVudCBmb3IgdGhlIGhlYWRlciBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgUHJvamVjdHNcIjtcclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBidXR0b25cclxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuXCIpO1xyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGJ1dHRvbiBldmVudFxyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBib2R5IHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSBjYXJkICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGNhcmQgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZERldGFpbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBDcmVhdGVzIHRoZSBsb2dpYyBmb3IgdGhlIHByb2plY3QgY2FyZCBhY3Rpb24gYnV0dG9ucyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENhcmRCdXR0b25zKHByb2plY3QpIHtcclxuICAgICAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRCdXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNPTE9VUl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkNvbG91ciBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTsgXHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRWRpdFByb2plY3RGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMucmVuZGVyRGVsZXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENhcmRCdXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0Q2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1ncmlkXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGRpbmcgZWFjaCBvZiB0aGUgcHJvamVjdHMgdG8gYSBjYXJkXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcclxuICAgICAgICAgICAgLy8gTGluayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoZ2VuZXJhdGVQcm9qZWN0Q2FyZEJ1dHRvbnMocHJvamVjdCkpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmRHcmlkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcigpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cyk7XHJcbn1cclxuXHJcbi8qIFVwZGF0ZXMgdGhlIHByb2plY3QgY2FyZCBpZiBwcm9qZWN0IGluZm9ybWF0aW9uIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdENhcmRJbmZvcm1hdGlvbihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNhcmRbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgY29uc3QgY2FyZERldGFpbHMgPSBwcm9qZWN0Q2FyZC5maXJzdENoaWxkO1xyXG4gICAgY2FyZERldGFpbHMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgIGNhcmREZXRhaWxzLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgcHJvamVjdCBjYXJkIGlmIHByb2plY3QgY29sb3VyIGlzIGVkaXRlZCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdENhcmRDb2xvdXIocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jYXJkW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuICAgIFxyXG4gICAgcHJvamVjdENhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGEgZGVsZXRlZCBwcm9qZWN0cyBjYXJkICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY2FyZFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuZ2V0UHJvamVjdElEKCl9XCJdYCk7XHJcblxyXG4gICAgcHJvamVjdENhcmQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgZGVsZXRlUHJvamVjdENhcmQgfSIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsIGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciB9IGZyb20gXCIuL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXJ9IGZyb20gXCIuL3Byb2plY3RQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckFsbFByb2plY3RzUGFnZSwgZWRpdFByb2plY3RDYXJkQ29sb3VyIH0gZnJvbSBcIi4vYWxsUHJvamVjdHNQYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuL2Zvcm1zL2Zvcm1HZW5lcmF0b3JcIjtcclxuXHJcbmZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIGNsZWFySGVhZGVyKCk7XHJcbiAgICBjbGVhckJvZHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsXHJcbiAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZSxcclxuICAgIHJlbmRlclByb2plY3RQYWdlLFxyXG4gICAgZWRpdFByb2plY3RQYWdlQ29sb3VyLCBcclxuICAgIHJlbmRlckFsbFByb2plY3RzUGFnZSxcclxuICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cixcclxuICAgIGZvcm1zLFxyXG4gICAgY2xlYXJQYWdlLFxyXG4gICAgY2xlYXJTaWRlYmFyLFxyXG59IiwiaW1wb3J0IGdlbmVyYXRlVGV4dEZpZWxkcyBmcm9tIFwiLi90ZXh0RmllbGRHZW5lcmF0b3JcIjtcclxuaW1wb3J0ICogYXMgcmFkaW9GaWVsZEdlbmVyYXRvciBmcm9tIFwiLi9yYWRpb0ZpZWxkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IE9yZ2FuaXplcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL29yZ2FuaXplclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0Q29sb3VyRnJvbUZvcm0sIGVkaXRQcm9qZWN0RnJvbUZvcm0sIGdldEN1cnJlbnRQcm9qZWN0LCBnZXRQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrRnJvbUZvcm0sIGVkaXRUYXNrRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwRnJvbUZvcm0sIGVkaXRTdGVwRnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIsIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlLCBlZGl0UHJvamVjdFBhZ2VDb2xvdXIsIGVkaXRQcm9qZWN0Q2FyZENvbG91ciwgY2xlYXJQYWdlIH0gZnJvbSBcIi4uL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENhcmQsIGVkaXRQcm9qZWN0Q2FyZEluZm9ybWF0aW9uLCByZW5kZXJBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi4vYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUZyb21TaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza0NhcmQgfSBmcm9tIFwiLi4vcHJvamVjdFBhZ2UvdGFza3NDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVTdGVwQ2FyZCB9IGZyb20gXCIuLi9wcm9qZWN0UGFnZS9zdGVwc0NhcmRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRQcmlvcml0eSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybUNhbmNlbEJ1dHRvbkxpc3RlbmVyLCBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9mb3JtQnV0dG9uTGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIG1vZGFsIHdoaWNoIHdpbGwgc3RvcmUgYWxsIGZvcm1zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybU1vZGFsKHBhcmVudCkge1xyXG4gICAgY29uc3QgZm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybU1vZGFsKTtcclxufVxyXG5cclxuLyogSGFuZGxlcyBmb3JtIGNyZWF0aW9uIGFuZCBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oZm9ybSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZm9ybUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZm9ybSk7XHJcbiAgICBtb2RhbC5yZXBsYWNlQ2hpbGRyZW4oZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIGNvbnN0IGJ0bklEUHJlZml4ID0gYWN0aW9uVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gU3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xyXG4gICAgc3VibWl0QnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItc3VibWl0LWJ0blwiO1xyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgLy8gU3VibWl0IGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtU3VibWl0QnV0dG9uTGlzdGVuZXIoc3VibWl0QnRuLCBzdWJtaXRGdW5jdGlvbiwgbW9kYWwpO1xyXG5cclxuICAgIC8vIENhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItY2FuY2VsLWJ0blwiO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcImNhbmNlbC1idG5cIik7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGV2ZW50XHJcbiAgICBjcmVhdGVGb3JtQ2FuY2VsQnV0dG9uTGlzdGVuZXIoY2FuY2VsQnRuLCBtb2RhbClcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInByb2plY3QtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBQcm9qZWN0XCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhwcm9qZWN0VGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgZWRpdGluZyBhIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyRWRpdFByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1lZGl0LWZvcm1cIiwgXCJFZGl0IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RUaXRsZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgVGhlc2U/XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWRpdFByb2plY3RDYXJkSW5mb3JtYXRpb24oZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxuXHJcbiAgICAvLyBGaWxsIHRoZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgaW5mb3JtYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZSA9IGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXNjXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRlc2NcIikudmFsdWUgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldERlc2NyaXB0aW9uKCk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVUYXNrRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCB0YXNrVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInRhc2stdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJ0YXNrLWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA4MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEdWUgRGF0ZTpcIiwgaW5wdXROYW1lOiBcImRhdGVcIiwgaW5wdXRUeXBlOiBcImRhdGVcIiwgaWQ6IFwidGFzay1kYXRlXCIsIGNsYXNzZXM6IFtcImRhdGUtaW5wdXRcIl19LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwidGFzay1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFRhc2tcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHRhc2tUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0spKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuVEFTSywgXCJFZGl0XCIsIGZvcm0sICgpID0+IHtcclxuICAgICAgICBjcmVhdGVUYXNrRnJvbUZvcm0oKTtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0UGFnZShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBkZWZhdWx0IHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9J3ByaW9yaXR5J11bdmFsdWU9JyR7RGVmYXVsdFByaW9yaXR5fSddYCk7XHJcbiAgICBwcmlvcml0eUJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0VGFza0Zvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInRhc2stZWRpdC1mb3JtXCIsIFwiRWRpdCBUYXNrXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyh0YXNrVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5UQVNLKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0ssIFwiRWRpdFwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFRhc2tGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgICAgIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKSk7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5zb3J0SW5jb21wbGV0ZVRhc2tzKCk7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdFBhZ2UoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIGZvcm0gZmllbGRzIHdpdGggY3VycmVudCBpbmZvcm1hdGlvblxyXG4gICAgLy8gVE9ETzogQ2hlY2sgaWYgbW92aW5nIHRoaXMgYXNzaWdubWVudCB0byB0b3Agd29ya3NcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlID0gY3VycmVudFRhc2suZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWUgPSBjdXJyZW50VGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWUgPSBjdXJyZW50VGFzay5nZXREdWVEYXRlKCk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ncHJpb3JpdHknXVt2YWx1ZT0nJHtnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0UHJpb3JpdHkoKX0nXWApO1xyXG4gICAgcHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVTdGVwRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCBzdGVwVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInN0ZXAtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwic3RlcC1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFN0ZXBcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHN0ZXBUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlNURVAsIFwiQ3JlYXRlXCIsIGZvcm0sIGNyZWF0ZVN0ZXBGcm9tRm9ybSk7XHJcblxyXG4gICAgcmVuZGVyRm9ybShmb3JtKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJFZGl0U3RlcEZvcm0oKSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJzdGVwLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtZWRpdC1mb3JtXCIsIFwiRWRpdCBTdGVwXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5TVEVQLCBcIkVkaXRcIiwgZm9ybSwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRTdGVwRnJvbUZvcm0oZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkpO1xyXG4gICAgICAgIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcblxyXG4gICAgLy8gRmlsbCB0aGUgZm9ybSBmaWVsZHMgd2l0aCBjdXJyZW50IGluZm9ybWF0aW9uXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAtdGl0bGVcIikudmFsdWUgPSBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuZ2V0Q3VycmVudFN0ZXAoKS5nZXRUaXRsZSgpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNvbmZpcm1pbmcgb3JnYW5pemVyIGRlbGV0aW9uICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZUZvcm0oZGVsZXRlRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKChcImNvbmZpcm0tZGVsZXRlLWZvcm1cIiksIChcIkRlbGV0ZSBJdGVtP1wiKSwgXCJkZWxldGUtZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGFkZEZvcm1CdXR0b25zKFwiT3JnYW5pemVyXCIsIFwiRGVsZXRlXCIsIGZvcm0sIGRlbGV0ZUZ1bmN0aW9uKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEZWxldGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyhnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChudWxsKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RDYXJkKGdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWxldGVGb3JtKGRlbGV0ZUZ1bmN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlVGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBkZWxldGVGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUZyb21JbmNvbXBsZXRlVGFza3MoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpKTtcclxuICAgICAgICBkZWxldGVUYXNrQ2FyZChnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkpO1xyXG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KCkuc2V0Q3VycmVudFRhc2sobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZVN0ZXBGb3JtKCkge1xyXG4gICAgY29uc3QgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnJlbW92ZUZyb21JbmNvbXBsZXRlU3RlcHMoZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLmdldEN1cnJlbnRTdGVwKCkpO1xyXG4gICAgICAgIGRlbGV0ZVN0ZXBDYXJkKGdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q3VycmVudFRhc2soKS5nZXRDdXJyZW50U3RlcCgpKTtcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLmdldEN1cnJlbnRUYXNrKCkuc2V0Q3VycmVudFN0ZXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGVsZXRlRm9ybShkZWxldGVGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbG91clBpY2tlckZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcImNvbG91ci1mb3JtXCIsIFwiUGljayBBIENvbG91clwiLCBcImNvbG91ci1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNvbG91clwiLCBmb3JtLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RDb2xvdXJGcm9tRm9ybShnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICBlZGl0U2lkZWJhclByb2plY3RDb2xvdXIoZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0UGFnZUNvbG91cihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Q2FyZENvbG91cihnZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG91clxyXG4gICAgY29uc3QgY29sb3VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbG91ci1yYWRpby1idG5baWRePVwiY29sb3VyLVwiXVtpZCQ9XCIke2dldEN1cnJlbnRQcm9qZWN0KCkuZ2V0Q29sb3VyKCkudG9Mb3dlckNhc2UoKX1cIl1gKTtcclxuICAgIGNvbG91ckJ0bi5jaGVja2VkID0gdHJ1ZTtcclxufVxyXG5cclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVGb3JtTW9kYWwsIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCByZW5kZXJFZGl0UHJvamVjdEZvcm0sIHJlbmRlckNyZWF0ZVRhc2tGb3JtLCByZW5kZXJFZGl0VGFza0Zvcm0sIHJlbmRlckNyZWF0ZVN0ZXBGb3JtLCByZW5kZXJFZGl0U3RlcEZvcm0sIHJlbmRlckRlbGV0ZVByb2plY3RGb3JtLCByZW5kZXJEZWxldGVUYXNrRm9ybSwgcmVuZGVyRGVsZXRlU3RlcEZvcm0sIHJlbmRlckNvbG91clBpY2tlckZvcm0gfSIsImltcG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3ByaW9yaXR5XCI7XHJcbmltcG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2NvbG91cnNcIjtcclxuXHJcbi8qIEFkZCB0aGUgZGVzaWduYXRlZCBsZWdlbmQgYW5kIGZpZWxkc2V0IHRvIGEgY29udGFpbmVyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFkaW9CdXR0b25zKGxlZ2VuZCwgZmllbGRzZXQpIHtcclxuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcblxyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGRDb250YWluZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHNldCBvZiByYWRpbyBidXR0b25zIGZvciB0aGUgcHJpb3JpdHkgb3B0aW9ucyAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5UmFkaW9CdXR0b25zKG9yZ2FuaXplclR5cGUpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlPcHRpb25zKG9yZ2FuaXplclR5cGUpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5mb3JFYWNoKHByaW9yaXR5VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBvcmdhbml6ZXJUeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIHByaW9yaXR5VmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbnB1dFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuaWQgPSBvcHRpb25JRDtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcHJpb3JpdHlWYWx1ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBMYWJlbFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gcHJpb3JpdHlWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSBvcHRpb25JRDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xyXG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWVsZGNvbnRhaW5lclxyXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktZmllbGRcIik7XHJcblxyXG4gICAgLy8gTGVnZW5kXHJcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlUHJpb3JpdHlPcHRpb25zKG9yZ2FuaXplclR5cGUpO1xyXG4gICAgY29uc3QgZmllbGQgPSBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhsZWdlbmQsIGZpZWxkc2V0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKCkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ29sb3VycykuZm9yRWFjaChjb2xvdXJWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbG91ciBrZXlcclxuICAgICAgICAgICAgY29uc3QgY29sb3VyS2V5ID0gT2JqZWN0LmtleXMoQ29sb3VycykuZmluZChrZXkgPT4gQ29sb3Vyc1trZXldID09PSBjb2xvdXJWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItZmllbGRcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSURcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSUQgPSBcImNvbG91ci1cIiArIGNvbG91clZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5wdXRcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmlkID0gb3B0aW9uSUQ7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1yYWRpby1idG5cIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IFwiY29sb3VyXCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3VyVmFsdWU7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbG91cktleTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSBvcHRpb25JRDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xyXG4gICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWVsZHNldFxyXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImNvbG91ci1maWVsZHNldFwiKTtcclxuXHJcbiAgICAvLyBMZWdlbmRcclxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkNvbG91cjpcIjtcclxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpO1xyXG4gICAgY29uc3QgZmllbGQgPSBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhsZWdlbmQsIGZpZWxkc2V0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMsIGdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zIH0iLCIvKiBDcmVhdGUgYSBkbGFiZWwgZm9yIGEgZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUxhYmVsKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmb3JtRmllbGQubGFiZWxUZXh0O1xyXG4gICAgZmllbGRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKTtcclxuICAgIGZpZWxkTGFiZWwuZm9yID0gZm9ybUZpZWxkLmlkO1xyXG5cclxuICAgIHJldHVybiBmaWVsZExhYmVsO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSB0aXRsZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVGaWVsZChmb3JtRmllbGQpIHtcclxuICAgIC8vIElucHV0XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkSW5wdXQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGRlc2NyaXB0aW9uIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZm9ybUZpZWxkLmlucHV0VHlwZSk7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgZmllbGRJbnB1dC5tYXhMZW5ndGggPSBmb3JtRmllbGQubWF4TGVuZ3RoO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufSAgIFxyXG5cclxuLyogQ3JlYXRlIGEgZGF0ZSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGF0ZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGZpZWxkSW5wdXQudHlwZSA9IGZvcm1GaWVsZC5pbnB1dFR5cGU7XHJcbiAgICBmaWVsZElucHV0LmlkID0gZm9ybUZpZWxkLmlkO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgIGZpZWxkSW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBmaWVsZElucHV0Lm5hbWUgPSBmb3JtRmllbGQuaW5wdXROYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IGEgc2V0IG9mIHRleHQgZmllbGRzICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGV4dEZpZWxkcyhmaWVsZHMsIHBhcmVudCkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZm9ybUZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcInRpdGxlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkZXNjXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZXNjcmlwdGlvbkZpZWxkKGZvcm1GaWVsZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtRmllbGQuaW5wdXROYW1lID09PSAgXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrQ2FyZHMsIGVkaXRUYXNrQ2FyZEluZm9ybWF0aW9uLCBzZXRUYXNrQ2FyZENvbXBsZXRlZCB9IGZyb20gXCIuL3Rhc2tzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIHNldFN0ZXBDYXJkQ29tcGxldGVkIH0gZnJvbSBcIi4vc3RlcHNDYXJkSGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBkaXNhYmxlQWN0aW9uQnV0dG9ucywgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lciwgcHJvamVjdENyZWF0ZVRhc2tCdXR0b25MaXN0ZW5lciwgcHJvamVjdERlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0RWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3Byb2plY3RBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBpbmZvIGZvciBhIHNlbGVjdGVkIHByb2plY3QgKi9cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xyXG4gICAgLyogQ3JlYXRlIHRoZSBoZWFkZXIgZGlzcGxheWluZyBwcm9qZWN0IGluZm8gYW5kIGFjdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKHByb2plY3QpIHtcclxuICAgICAgICAvKiBEaXNwbGF5IHByb2plY3QgZGV0YWlscyAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXJJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNSRUFURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFRhc2tcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDcmVhdGVUYXNrQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXJCdXR0b25MaXN0ZW5lcihwcm9qZWN0KTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtcHJvamVjdFwiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFByb2plY3RcIixcclxuICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uTGlzdGVuZXIocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHByb2plY3RCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgbGlzdCBvZiB0YXNrcyBhbmQgdGhlaXIgc3RlcHMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3QtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBJbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgdGFza1NlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRhc2tTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIlxyXG4gICAgICAgIHRhc2tTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICBjb25zdCBpbmNvbXBsZXRlVGFza3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGluY29tcGxldGVUYXNrc0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdFwiLCBcImluY29tcGxldGUtdGFzay1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1NlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICBnZW5lcmF0ZVRhc2tDYXJkcyhwcm9qZWN0LmdldEluY29tcGxldGVUYXNrcygpLCBpbmNvbXBsZXRlVGFza3NMaXN0KTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmNvbXBsZXRlVGFza3NMaXN0KTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGVkIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiXHJcbiAgICAgICAgY29tcGxldGVkU2VjdGlvbkRpdmlkZXIuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tZGl2aWRlclwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRUYXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIiwgXCJjb21wbGV0ZWQtdGFzay1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgZ2VuZXJhdGVUYXNrQ2FyZHMocHJvamVjdC5nZXRDb21wbGV0ZWRUYXNrcygpLCBjb21wbGV0ZWRUYXNrc0xpc3QpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzTGlzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcihwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3QpKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHZpc3VhbCBzdGF0dXMgb2YgbmV3bHkgYWRkZWQgY2FyZHNcclxuICAgIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMocHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRpb25TdGF0dXMocHJvamVjdCkge1xyXG4gICAgcHJvamVjdC5nZXRJbmNvbXBsZXRlVGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgdGhlaXIgY29tcGxldGVkIHN0ZXBzIGFzIGNvbXBsZXRlZFxyXG4gICAgICAgIHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKS5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3N0ZXAuZ2V0VGFza0lEKCl9XCJdW2RhdGEtc3RlcC1pZD1cIiR7c3RlcC5nZXRTdGVwSUQoKX1cIl1gKTtcclxuICAgICAgICAgICAgc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3QuZ2V0Q29tcGxldGVkVGFza3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgY29tcGxldGVkIHRhc2tzIGFzIGNvbXBsZXRlZFxyXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5nZXRUYXNrSUQoKX1cIl1gKTtcclxuXHJcbiAgICAgICAgc2V0VGFza0NhcmRDb21wbGV0ZWQodGFza0NhcmQpO1xyXG5cclxuICAgICAgICAvLyBWaXN1YWxseSBtYXJraW5nIHRoZWlyIGNvbXBsZXRlZCBzdGVwcyBhcyBjb21wbGV0ZWRcclxuICAgICAgICB0YXNrLmdldENvbXBsZXRlZFN0ZXBzKCkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcbiAgICAgICAgICAgIHNldFN0ZXBDYXJkQ29tcGxldGVkKHN0ZXBDYXJkKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLyogVXBkYXRlcyB0aGUgcHJvamVjdCBwYWdlIGlmIHByb2plY3QgaW5mb3JtYXRpb24gaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0UGFnZUluZm9ybWF0aW9uKHByb2plY3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItdGl0bGVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG59XHJcblxyXG4vKiBVcGRhdGVzIHRoZSBwcm9qZWN0IHBhZ2UgaWYgcHJvamVjdCBjb2xvdXIgaXMgZWRpdGVkICovXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0UGFnZUNvbG91cihwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1jb250YWluZXJcIik7XHJcbiAgICBpZiAocHJvamVjdEhlYWRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmdldENvbG91cigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSwgZWRpdFByb2plY3RQYWdlSW5mb3JtYXRpb24sIGVkaXRQcm9qZWN0UGFnZUNvbG91ciwgZWRpdFRhc2tDYXJkSW5mb3JtYXRpb24sIGVkaXRTdGVwQ2FyZEluZm9ybWF0aW9uIH0iLCJpbXBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMsIGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9hY3Rpb25CdXR0b25zLmpzXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gXCIuLi9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcENvbXBsZXRpb25MaXN0ZW5lciwgY3JlYXRlU3RlcFN0YXR1c0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvY2hlY2tib3hMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9zdGF0dXMuanNcIjtcclxuaW1wb3J0IHsgc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWN0aW9uQnV0dG9uTGlzdGVuZXJzL3N0ZXBBY3Rpb25CdXR0b25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2Ygc3RlcHMgZm9yIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVN0ZXBDYXJkcyhzdGVwcywgcGFyZW50KSB7XHJcbiAgICAvKiBDcmVhdGUgYSBzdGVwIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3RlcENhcmQoc3RlcCkge1xyXG5cclxuICAgICAgICAvLyBTdGVwIGJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHN0ZXBCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXN0ZXBcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwRWRpdEJ1dHRvbkxpc3RlbmVyKHN0ZXApO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcERlbGV0ZUJ1dHRvbkxpc3RlbmVyKHN0ZXApXHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgc3RlcEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIsIFwic3RlcC1jYXJkXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gdGFza1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBzdGVwLmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgc3RlcC5nZXRUYXNrSUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwLWlkXCIsIHN0ZXAuZ2V0U3RlcElEKCkpO1xyXG5cclxuICAgICAgICAvLyBTdGVwIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RlcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwSW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICBjcmVhdGVTdGVwU3RhdHVzTGlzdGVuZXIoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIHN0ZXBUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbnMgZm9yIHN0ZXBzXHJcbiAgICAgICAgY29uc3Qgc3RlcEFjdGlvbkJ1dHRvbnMgPSBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoc3RlcEJ1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChzdGVwVGl0bGUpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBJbmZvKTtcclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwQWN0aW9uQnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGVwSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYWxsIHN0ZXBzIHRvIHRoZSBsaXN0XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIC8vIE1hcmsgY3VycmVudCBzdGVwXHJcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKS5nZXRDdXJyZW50VGFzaygpLnNldEN1cnJlbnRTdGVwKHN0ZXApO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwQ2FyZChzdGVwKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24oc3RlcCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHtzdGVwLmdldFRhc2tJRCgpfVwiXVtkYXRhLXN0ZXAtaWQ9XCIke3N0ZXAuZ2V0U3RlcElEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIC8vIEVkaXRpbmcgaW5mb3JtYXRpb25cclxuICAgIHN0ZXBDYXJkLmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50ID0gc3RlcC5nZXRUaXRsZSgpO1xyXG59XHJcblxyXG4vKiBNb2RpZmllcyBhIHN0ZXAgY2FyZCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0U3RlcENhcmRDb21wbGV0ZWQoc3RlcENhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgY29tcGxldGVcclxuICAgIHN0ZXBDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIERpc2FibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHN0ZXBDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgZGlzYWJsZUFjdGlvbkJ1dHRvbnMoW2VkaXRCdXR0b25dKTtcclxufVxyXG5cclxuLyogTW9kaWZpZXMgYSBzdGVwIGNhcmQgb25jZSBpdCBoYXMgYmVlbiBtYXJrZWQgYXMgaW5jb21wbGV0ZSAqL1xyXG5mdW5jdGlvbiBzZXRTdGVwQ2FyZEluY29tcGxldGUoc3RlcENhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgaW5jb21wbGV0ZVxyXG4gICAgc3RlcENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFJlLWVuYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gc3RlcENhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICBlbmFibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZXMgYSBkZWxldGVkIHN0ZXBzIGNhcmQgKi9cclxuZnVuY3Rpb24gZGVsZXRlU3RlcENhcmQoc3RlcCkge1xyXG4gICAgY29uc3Qgc3RlcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RlcC1jYXJkW2RhdGEtdGFzay1pZD1cIiR7c3RlcC5nZXRUYXNrSUQoKX1cIl1bZGF0YS1zdGVwLWlkPVwiJHtzdGVwLmdldFN0ZXBJRCgpfVwiXWApO1xyXG5cclxuICAgIHN0ZXBDYXJkLnJlbW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVN0ZXBDYXJkcywgZWRpdFN0ZXBDYXJkSW5mb3JtYXRpb24sIHNldFN0ZXBDYXJkQ29tcGxldGVkLCBzZXRTdGVwQ2FyZEluY29tcGxldGUsIGRlbGV0ZVN0ZXBDYXJkIH0iLCJpbXBvcnQgeyBnZW5lcmF0ZVN0ZXBDYXJkcyB9IGZyb20gXCIuL3N0ZXBzQ2FyZEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IHsgZGlzYWJsZUFjdGlvbkJ1dHRvbnMsIGVuYWJsZUFjdGlvbkJ1dHRvbnMsIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvb3JnYW5pemVycy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2NoZWNrYm94TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IHRhc2tDcmVhdGVTdGVwQnV0dG9uTGlzdGVuZXIsIHRhc2tEZWxldGVCdXR0b25MaXN0ZW5lciwgdGFza0VkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2FjdGlvbkJ1dHRvbkxpc3RlbmVycy90YXNrQWN0aW9uQnV0dG9uTGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3N0YXR1cy5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbGlzdCBvZiB0YXNrcyBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0NhcmRzKHRhc2tzLCBwYXJlbnQpIHtcclxuICAgIC8qIENyZWF0ZSBhIHRhc2sgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrKHRhc2spIHtcclxuICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrYm94IGFuZCBkZXRhaWxzIG9mIHRoZSB0YXNrICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSGVhZGVyKHRhc2spIHtcclxuICAgICAgICAgICAgLyogRGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGFzayAqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tEZXRhaWxzKHRhc2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1cIiArIHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIsIHByaW9yaXR5Q2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEdWUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCkgfHwgXCJObyBEdWUgRGF0ZVwiOztcclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tEZXRhaWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wbGV0aW9uIGNoZWNrYm94XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tTdGF0dXNMaXN0ZW5lcihjb21wbGV0ZWRDaGVja2JveCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ3JlYXRlU3RlcEJ1dHRvbkxpc3RlbmVyKHRhc2spXHJcbiAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXRhc2tcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBUYXNrXCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrRWRpdEJ1dHRvbkxpc3RlbmVyKHRhc2spO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLFxyXG4gICAgICAgICAgICBldmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbkxpc3RlbmVyKHRhc2spO1xyXG4gICAgICAgICAgICB9fSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIC8vIFRhc2sgaW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIsIFwidGFzay1jYXJkXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gdGFza1xyXG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCB0YXNrLmdldFByb2plY3RJRCgpKTtcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgdGFzay5nZXRUYXNrSUQoKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCB0YXNrIGluZm9ybWF0aW9uIGVsZW1lbnRzXHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrSGVhZGVyKHRhc2spKTtcclxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnModGFza0J1dHRvbnMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbGwgdGFza3MgdG8gdGhlIGxpc3RcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgLy8gTWFyayBjdXJyZW50IHRhc2tcclxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpLnNldEN1cnJlbnRUYXNrKHRhc2spO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBvZiBhbGwgaW5jb21wbGV0ZSBzdGVwcyBmb3IgY3VycmVudCB0YXNrXHJcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBpbmNvbXBsZXRlU3RlcHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy1saXN0XCIsIFwiaW5jb21wbGV0ZS1zdGVwcy1saXN0XCIpO1xyXG5cclxuICAgICAgICAvLyBMaXN0IG9mIGFsbCBjb21wbGV0ZWQgc3RlcHMgZm9yIGN1cnJlbnQgdGFza1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwc0xpc3QuY2xhc3NMaXN0LmFkZChcInN0ZXBzLWxpc3RcIiwgXCJjb21wbGV0ZWQtc3RlcHMtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2tcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrKHRhc2spKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIHN0ZXAgbGlzdHNcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoaW5jb21wbGV0ZVN0ZXBzTGlzdCk7XHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlZFN0ZXBzTGlzdCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBzdGVwc1xyXG4gICAgICAgIGdlbmVyYXRlU3RlcENhcmRzKHRhc2suZ2V0SW5jb21wbGV0ZVN0ZXBzKCksIGluY29tcGxldGVTdGVwc0xpc3QpO1xyXG4gICAgICAgIGdlbmVyYXRlU3RlcENhcmRzKHRhc2suZ2V0Q29tcGxldGVkU3RlcHMoKSwgY29tcGxldGVkU3RlcHNMaXN0KTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RUYXNrSXRlbSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbih0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suZ2V0VGFza0lEKCl9XCJdYCk7XHJcbiAgICBcclxuICAgIC8vIEdyYWJiaW5nIGluZm9ybWF0aW9uIHRvIGVkaXRcclxuICAgIGNvbnN0IHRhc2tJbmZvcm1hdGlvbiA9IHRhc2tDYXJkLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza0luZm9ybWF0aW9uLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tJbmZvcm1hdGlvbi5maXJzdENoaWxkLmxhc3RDaGlsZDtcclxuICAgIGNvbnN0IHRhc2tEZXNjID0gdGFza0luZm9ybWF0aW9uLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tJbmZvcm1hdGlvbi5sYXN0Q2hpbGQ7XHJcbiAgICBcclxuICAgIC8vIEVkaXRpbmcgaW5mb3JtYXRpb25cclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcclxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKSB8fCBcIk5vIER1ZSBEYXRlXCI7XHJcblxyXG4gICAgLy8gUmVwbGFjaW5nIHByaW9yaXR5IGNsYXNzbGlzdFxyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1cIiArIHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIsIHByaW9yaXR5Q2xhc3MpO1xyXG59XHJcblxyXG4vKiBNb2RpZmllcyBhIHRhc2sgY2FyZCBvbmNlIGl0IGhhcyBiZWVuIG1hcmtlZCBhcyBjb21wbGV0ZWQgKi9cclxuZnVuY3Rpb24gc2V0VGFza0NhcmRDb21wbGV0ZWQodGFza0NhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgY29tcGxldGVcclxuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSB0YXNrQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gRGlzYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSB0YXNrQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24ubmV4dFNpYmxpbmc7XHJcbiAgICBkaXNhYmxlQWN0aW9uQnV0dG9ucyhbY3JlYXRlQnV0dG9uLCBlZGl0QnV0dG9uXSk7XHJcblxyXG4gICAgLy8gVmlzdWFsbHkgbWFya2luZyBhbGwgaW5jb21wbGV0ZSBzdGVwcyBhcyBjb21wbGV0ZWRcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwcyA9IHRhc2tDYXJkLm5leHRTaWJsaW5nO1xyXG4gICAgZm9yIChsZXQgc3RlcENhcmQgb2YgaW5jb21wbGV0ZVN0ZXBzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgc3RlcENhcmQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIERpc2FibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBzdGVwQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9ucyhbZWRpdEJ1dHRvbl0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc2FibGluZyB0aGUgY2hlY2tib3ggb2YgY29tcGxldGVkIHN0ZXBzXHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9IHRhc2tDYXJkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgZm9yIChsZXQgc3RlcENhcmQgb2YgY29tcGxldGVkU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHN0ZXBDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1vZGlmaWVzIGEgdGFzayBjYXJkIG9uY2UgaXQgaGFzIGJlZW4gbWFya2VkIGFzIGNvbXBsZXRlZCAqL1xyXG5mdW5jdGlvbiBzZXRUYXNrQ2FyZEluY29tcGxldGUodGFza0NhcmQpIHtcclxuICAgIC8vIFZpc3VhbGx5IG1hcmtpbmcgYXMgaW5jb21wbGV0ZVxyXG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0NhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFJlLWVuYWJsaW5nIGFjdGlvbiBidXR0b25zXHJcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSB0YXNrQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24ubmV4dFNpYmxpbmc7XHJcbiAgICBlbmFibGVBY3Rpb25CdXR0b25zKFtjcmVhdGVCdXR0b24sIGVkaXRCdXR0b25dKTtcclxuXHJcbiAgICAvLyBWaXN1YWxseSByZW1hcmtpbmcgYWxsIGluY29tcGxldGUgc3RlcHMgYXMgaW5jb21wbGV0ZVxyXG4gICAgY29uc3QgaW5jb21wbGV0ZVN0ZXBzID0gdGFza0NhcmQubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKGxldCBzdGVwQ2FyZCBvZiBpbmNvbXBsZXRlU3RlcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBzdGVwQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gc3RlcENhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZS1lbmFibGluZyBhY3Rpb24gYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBzdGVwQ2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcclxuICAgICAgICBlbmFibGVBY3Rpb25CdXR0b25zKFtlZGl0QnV0dG9uXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5hYmxpbmcgdGhlIGNoZWNrYm94IG9mIGNvbXBsZXRlZCBzdGVwc1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSB0YXNrQ2FyZC5uZXh0U2libGluZy5uZXh0U2libGluZztcclxuICAgIGZvciAobGV0IHN0ZXBDYXJkIG9mIGNvbXBsZXRlZFN0ZXBzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBzdGVwQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVtb3ZlcyBhIGRlbGV0ZWQgdGFza3MgY2FyZCAqL1xyXG5mdW5jdGlvbiBkZWxldGVUYXNrQ2FyZCh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWNhcmRbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmdldFRhc2tJRCgpfVwiXWApO1xyXG5cclxuICAgIHRhc2tDYXJkLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlVGFza0NhcmRzLCBlZGl0VGFza0NhcmRJbmZvcm1hdGlvbiwgc2V0VGFza0NhcmRDb21wbGV0ZWQsIHNldFRhc2tDYXJkSW5jb21wbGV0ZSwgZGVsZXRlVGFza0NhcmQgfSIsImltcG9ydCB7IHJlbmRlclNpZGViYXJQcm9qZWN0cyB9IGZyb20gXCIuL3NpZGViYXJQcm9qZWN0c0dlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcihwcm9qZWN0cykge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBMb2dvXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiVE9ET1wiO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICAvLyBTZWN0aW9uIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1ZIFBST0pFQ1RTXCJcclxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaGVhZGluZ1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGxpc3RcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0cy1tZW51XCIpO1xyXG5cclxuICAgIC8vIEFsbCBwcm9qZWN0cyBidXR0b25cclxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHByb2plY3RzTGlzdCk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIHNpZGViYXIgbWVudSBpdGVtICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhckl0ZW0odGl0bGUsIGljb25GdW5jdGlvbikge1xyXG4gICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBzaWRlYmFySXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGljb25GdW5jdGlvbigpKTtcclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZGViYXJJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJY29uKGljb25Db2xvdXIpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi50ZXh0Q29udGVudCA9IFwi4pePXCI7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcInByb2plY3QtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnN0eWxlLmNvbG9yID0gaWNvbkNvbG91cjtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgdGhlIGFsbCBwcm9qZWN0cyBpY29uICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdEljb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gICAgLy8gSWNvbiBpbWFnZVxyXG4gICAgY29uc3QgaWNvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGljb25JbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcHJvamVjdHMuc3ZnXCI7XHJcblxyXG4gICAgLy8gQXBwZW5pbmcgZWxlbWVudHNcclxuICAgIHByb2plY3RJY29uLmFwcGVuZENoaWxkKGljb25JbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBwcm9qZWN0IGJ1dHRvbiBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBnZW5lcmF0ZVNpZGViYXJJdGVtKHByb2plY3QuZ2V0VGl0bGUoKSwgKCkgPT4gZ2VuZXJhdGVQcm9qZWN0SWNvbihwcm9qZWN0LmdldENvbG91cigpKSk7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgcHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFsbCBwcm9qZWN0cyBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZ2VuZXJhdGVTaWRlYmFySXRlbShcIkFsbCBQcm9qZWN0c1wiLCBnZW5lcmF0ZUFsbFByb2plY3RJY29uKTtcclxuICAgIGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhbGwtcHJvamVjdHMtYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzQnV0dG9uO1xyXG59XHJcblxyXG4vKiBEaXNwbGF5IGFsbCBwcm9qZWN0cyBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSk7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHByb2plY3QgdG8gdGhlIHNpZGViYXIgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiBhZGRUb1NpZGViYXJQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1wcm9qZWN0cy1tZW51XCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xyXG4gICAgYWRkUHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcihnZXRQcm9qZWN0cygpLCBuZXdQcm9qZWN0QnRuKTtcclxufVxyXG5cclxuLyogRWRpdCB0aGUgdGl0bGUgb2YgYSBzaWRlYmFyIHByb2plY3QgYnV0dG9uICovXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdFRpdGxlKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBzaWRlYmFySXRlbS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgdGhlIGNvbG91ciBvZiBhIHNpZGViYXIgcHJvamVjdCBidXR0b24gKi9cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0Q29sb3VyKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNpZGViYXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItcHJvamVjdC1idXR0b25bZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmdldFByb2plY3RJRCgpfVwiXWApO1xyXG4gICAgXHJcbiAgICBzaWRlYmFySXRlbS5maXJzdENoaWxkLnN0eWxlLmNvbG9yID0gcHJvamVjdC5nZXRDb2xvdXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLXByb2plY3QtYnV0dG9uW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5nZXRQcm9qZWN0SUQoKX1cIl1gKTtcclxuXHJcbiAgICBzaWRlYmFySXRlbS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRUb1NpZGViYXJQcm9qZWN0cywgZWRpdFNpZGViYXJQcm9qZWN0VGl0bGUsIGVkaXRTaWRlYmFyUHJvamVjdENvbG91ciwgcmVtb3ZlRnJvbVNpZGViYXJQcm9qZWN0cyB9IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uQnV0dG9uTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ldmVudExpc3RlbmVycy9hY3Rpb25CdXR0b25MaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGFjdGlvbiBidXR0b25zIGZvciBhIG9yZ2FuaXplciAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgY29uc3QgYWN0aW9uQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYWN0aW9uQnRucy5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ0bnNcIik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBidXR0b25zXHJcbiAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAvLyBCdXR0b24gY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJhY3Rpb24tYnRuXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBCdXR0b25cclxuICAgICAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5zcmMgPSBidG4uc3JjO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5hbHQgPSBidG4uYWx0O1xyXG4gICAgICAgIGFjdGlvbkJ0bi50aXRsZSA9IGJ0bi50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uIGFjdGlvblxyXG4gICAgICAgIGNyZWF0ZUFjdGlvbkJ1dHRvbkxpc3RlbmVyKGFjdGlvbkJ1dHRvbkNvbnRhaW5lciwgYnRuLmV2ZW50KVxyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUFjdGlvbkJ1dHRvbnMoYnV0dG9ucykge1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBWaXN1YWxseSBzaG93IGRpc2FibGVkXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZC1hY3Rpb24tYnRuXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBWaXN1YWxseSBzaG93IGVuYWJsZWRcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkLWFjdGlvbi1idG5cIik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMsIGRpc2FibGVBY3Rpb25CdXR0b25zLCBlbmFibGVBY3Rpb25CdXR0b25zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZGVzZXJpYWxpemVQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdHMsIHNldFByb2plY3RzIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL29yZ2FuaXplcnMvc3RlcFwiO1xyXG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gXCIuL3BhZ2VzL2Rpc3BsYXlcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2lkZWJhckxpc3RlbmVycyB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xyXG5cclxuLy8gSW1wb3J0aW5nIGxvY2FsIHN0b3JhZ2VcclxuY29uc3Qgc3RvcmFnZURhdGEgPSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbi8vIGNvbnNvbGUubG9nKFwidGhpc1wiLCBzdG9yYWdlRGF0YSk7XHJcbi8vIExvYWQgc3RvcmVkIGRhdGFcclxuaWYgKHN0b3JhZ2VEYXRhICE9PSBudWxsKSB7XHJcbiAgICBzdG9yYWdlRGF0YS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGRlc2VyaWFsaXplUHJvamVjdChwcm9qZWN0KTtcclxuICAgIH0pXHJcbn1cclxuLy8gVXNlIGRlZmF1bHQgZGF0YVxyXG5lbHNlIHtcclxuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG4gICAgLy8gV29yayBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbiAgICBjcmVhdGVQcm9qZWN0KFwiV29yayBNZWV0aW5nc1wiLCBcIkFsbCB0aGluZ3Mgd29yayBtZWV0aW5nIHJlbGF0ZWQhXCIpO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soZ2V0UHJvamVjdHMoKVsxXSwgXCJNb25kYXkgTWVldGluZ3NcIiwgXCJBbGwgbW9uZGF5IHdvcmsgbWVldGluZ3NcIiwgXCJcIiwgXCJNZWRcIik7XHJcbiAgICBjcmVhdGVTdGVwKGdldFByb2plY3RzKClbMV0uZ2V0SW5jb21wbGV0ZVRhc2tzKClbMF0sIFwiTW9ybmluZyBNZWV0aW5nXCIpO1xyXG4gICAgY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIkFmdGVybm9vbiBNZWV0aW5nXCIpO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soZ2V0UHJvamVjdHMoKVsxXSwgXCJQcmVzZW50YXRpb25cIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiTm9uZVwiKTtcclxuICAgIGNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVsxXS5nZXRJbmNvbXBsZXRlVGFza3MoKVsxXSwgXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIpO1xyXG4gICAgY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldEluY29tcGxldGVUYXNrcygpWzFdLCBcIkNoZWNrIHJlcG9ydCBkcmFmdCBmb3IgdHlwb3NcIik7XHJcblxyXG4gICAgLy8gU2Nob29sIHByb2plY3QvdGFza3Mvc3RlcHNcclxuICAgIGNyZWF0ZVByb2plY3QoXCJTY2hvb2xcIiwgXCJBbGwgdGhpbmdzIHNjaG9vbCByZWxhdGVkIVwiKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKGdldFByb2plY3RzKClbMl0sIFwiUHJlc2VudGF0aW9uc1wiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJIaWdoXCIpO1xyXG4gICAgY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzJdLmdldEluY29tcGxldGVUYXNrcygpWzBdLCBcIkhvbWV3b3JrXCIpO1xyXG59XHJcblxyXG5cclxuZGlzcGxheS5yZW5kZXJTaWRlYmFyKGdldFByb2plY3RzKCkpO1xyXG5kaXNwbGF5LmZvcm1zLmdlbmVyYXRlRm9ybU1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVUYXNrRm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVN0ZXBGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyRGVsZXRlRm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm0oKTtcclxuZGlzcGxheS5yZW5kZXJBbGxQcm9qZWN0c1BhZ2UoZ2V0UHJvamVjdHMoKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdHNbMV0pO1xyXG5jcmVhdGVTaWRlYmFyTGlzdGVuZXJzKGdldFByb2plY3RzKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==