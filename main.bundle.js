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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    display: grid;\r\n    grid: 1fr 5fr auto / 1fr 4fr;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -2 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.step-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n}"],"sourceRoot":""}]);
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
/* Creates a single instance of a project object */
function projectFactory(title, description, projectID) {
    let taskCount = 0;
    const tasks = [];
    const completedTasks = [];

    /* Returns task count and increments it */
    function getNextTaskCount() {
        const count = taskCount;
        taskCount++;
        
        return count;
    }

    return { title, description, projectID, tasks, completedTasks, getNextTaskCount };
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

    return { title, status, projectID, taskID, stepID }
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

    return { title, description, dueDate, priority, status, steps, completedSteps, projectID, taskID, getNextStepCount };
}

/***/ }),

/***/ "./src/models/organizers/project.js":
/*!******************************************!*\
  !*** ./src/models/organizers/project.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory */ "./src/models/organizers/factories/projectFactory.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/models/organizers/task.js");



/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        projectID,
    )
}

/* Create a new project */
function createProject(title, description) {
    const projectID = getNextProjectCount();

    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        title,
        description,
        projectID,
    )
}

/* Add a task to a project */
function addTask(project, task) {
    project.tasks.push(task);
}

/* Edit an exisiting project */
function editProject(project, title, description) {
    setTitle(project, title);
    setDescription(project, description);
}

/* Delete an existing project */
function deleteProject(project) {
    delete project.title;
    delete project.description;
}

/* Returns project count and increments it */
function getNextProjectCount() {
    const count = projectCount;
    projectCount++;
    return count;
}

function setTitle(project, title) {
    project.title = title;
}

function setDescription(project, description) {
    project.description = description;
}

function getProjectCount() {
    return projectCount;
}

let projectCount = 0;



/***/ }),

/***/ "./src/models/organizers/step.js":
/*!***************************************!*\
  !*** ./src/models/organizers/step.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStep: () => (/* binding */ createStep),
/* harmony export */   deleteStep: () => (/* binding */ deleteStep),
/* harmony export */   editStep: () => (/* binding */ editStep),
/* harmony export */   setIncomplete: () => (/* binding */ setIncomplete)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/models/organizers/task.js");




/* Create a new step and adds to a task */
function createStep(task, name) {
    const projectID = task.projectID;
    const taskID = task.taskID;
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, projectID, taskID, stepID);

    (0,_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(task, newStep);
}

/* Edit an existing step */
function editStep(step, name) {
    setName(step, name);
}

/* Delete an exisiting step */
function deleteStep(step) {
    delete step.name;
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



/***/ }),

/***/ "./src/models/organizers/task.js":
/*!***************************************!*\
  !*** ./src/models/organizers/task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addStep: () => (/* binding */ addStep),
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/taskFactory */ "./src/models/organizers/factories/taskFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/models/organizers/project.js");




/* Create a new task and adds to a project */
function createTask(project, title, description, dueDate, priority) {
    const projectID = project.projectID;
    const taskID = project.getNextTaskCount();
    const newTask = (0,_factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority, projectID, taskID);

    (0,_project__WEBPACK_IMPORTED_MODULE_2__.addTask)(project, newTask);
}

/* Edit an existing task */
function editTask(task, title, description, dueDate, priority, status) {
    setTitle(task, title);
    setDescription(task, description);
    setDueDate(task, dueDate);
    setPriority(task, priority);
    setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.title;
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

function setTitle(task, title) {
    task.title = title;
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

/***/ "./src/pages/allProjectsPage/index.js":
/*!********************************************!*\
  !*** ./src/pages/allProjectsPage/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAllProjectsPage)
/* harmony export */ });
/* harmony import */ var _projectPage_actionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectPage/actionButtons */ "./src/pages/projectPage/actionButtons.js");


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
            projectName.textContent = project.title;

            // Project description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            // Appending elements
            projectCardDetails.appendChild(projectName);
            projectCardDetails.appendChild(projectDescription);

            return projectCardDetails;
        }

        // Project Buttons to be created
        const projectCardButtons = [
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project"},
        ]

        const projectCardGrid = document.createElement("div");
        projectCardGrid.classList.add("project-card-grid");

        // Adding each of the projects to a card
        projects.forEach(project => {
            const projectCard = document.createElement("span");
            projectCard.classList.add("project-card");
            // Link to project
            projectCard.setAttribute("data-project-id", project.projectID);

            // Appending elements
            projectCard.appendChild(generateCardDetails(project));
            projectCard.appendChild((0,_projectPage_actionButtons__WEBPACK_IMPORTED_MODULE_0__["default"])(projectCardButtons));
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
}

/***/ }),

/***/ "./src/pages/display.js":
/*!******************************!*\
  !*** ./src/pages/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forms: () => (/* reexport module object */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   renderAllProjectsPage: () => (/* reexport safe */ _allProjectsPage__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   renderProjectPage: () => (/* reexport safe */ _projectPage__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   renderSidebar: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/pages/sidebar/index.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPage */ "./src/pages/projectPage/index.js");
/* harmony import */ var _allProjectsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allProjectsPage */ "./src/pages/allProjectsPage/index.js");
/* harmony import */ var _forms_formGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/formGenerator */ "./src/pages/forms/formGenerator.js");







/***/ }),

/***/ "./src/pages/forms/formGenerator.js":
/*!******************************************!*\
  !*** ./src/pages/forms/formGenerator.js ***!
  \******************************************/
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
/* harmony import */ var _textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator */ "./src/pages/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator */ "./src/pages/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer */ "./src/models/enums/organizer.js");




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
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(() =>_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT)));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form);

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
    console.log(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(() => _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK)));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Create", form);

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
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Create", form);

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

/***/ "./src/pages/forms/radioFieldGenerator.js":
/*!************************************************!*\
  !*** ./src/pages/forms/radioFieldGenerator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColourRadioButtons: () => (/* binding */ generateColourRadioButtons),
/* harmony export */   generatePriorityRadioButtons: () => (/* binding */ generatePriorityRadioButtons),
/* harmony export */   generateRadioButtons: () => (/* binding */ generateRadioButtons)
/* harmony export */ });
/* harmony import */ var _models_enums_priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/enums/priority */ "./src/models/enums/priority.js");
/* harmony import */ var _models_enums_colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/enums/colours */ "./src/models/enums/colours.js");



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
        Object.values(_models_enums_priority__WEBPACK_IMPORTED_MODULE_0__.Priority).forEach(priorityValue => {
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

/***/ "./src/pages/projectPage/actionButtons.js":
/*!************************************************!*\
  !*** ./src/pages/projectPage/actionButtons.js ***!
  \************************************************/
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

/***/ "./src/pages/projectPage/index.js":
/*!****************************************!*\
  !*** ./src/pages/projectPage/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksGenerator */ "./src/pages/projectPage/tasksGenerator.js");
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionButtons */ "./src/pages/projectPage/actionButtons.js");



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
        // Link to project
        projectHeader.setAttribute("data-project-id", project.projectID);

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild((0,_actionButtons__WEBPACK_IMPORTED_MODULE_1__["default"])(projectButtons));

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
    header.appendChild(generateHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateContent(project));
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
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionButtons */ "./src/pages/projectPage/actionButtons.js");


/* Create a list of steps for a task */
function generateSteps(steps) {
    /* Create a step item */
    function generateStep(step) {
        // Step Buttons to be created
        const stepButtons = [
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item");
        // Link to task
        stepItem.setAttribute("data-project-id", step.projectID);
        stepItem.setAttribute("data-task-id", step.taskID);
        stepItem.setAttribute("data-step-id", step.stepID);

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
/* harmony import */ var _actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionButtons */ "./src/pages/projectPage/actionButtons.js");



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
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        // Task information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item");
        // Link to task
        taskItem.setAttribute("data-project-id", task.projectID);
        taskItem.setAttribute("data-task-id", task.taskID);

        // Append task information elements
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
        projectTaskItem.appendChild((0,_stepsGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(task.steps));

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
{/* 
<h1 class="logo">TODO</h1>
<div>
    <h3 class="sidebar-heading">MY PROJECTS</h3>
    <ul class="sidebar-projects-menu">
    </ul>
</div>
*/}

// <div>
//     <h3 class="sidebar-heading">OPTIONS</h3>
//     <ul class="sidebar-menu">
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/today.svg" alt="" title="Add New Task"></span>
//             <p>Today</p>
//         </li>
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/upcoming.svg" alt="" title="Add New Task"></span>
//             <p>Upcoming</p>
//         </li>
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/completed.svg" alt="" title="Add New Task"></span>
//             <p>Completed</p>
//         </li>
//     </ul>
// </div>

/***/ }),

/***/ "./src/pages/sidebar/sidebarProjectsGenerator.js":
/*!*******************************************************!*\
  !*** ./src/pages/sidebar/sidebarProjectsGenerator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSidebarProject: () => (/* binding */ addSidebarProject),
/* harmony export */   editSidebarProject: () => (/* binding */ editSidebarProject),
/* harmony export */   removeSidebarProject: () => (/* binding */ removeSidebarProject),
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });

/* Create a sidebar menu item */
function generateSidebarItem(title, iconFunction) {
    const sidebarItem = document.createElement("li");
    sidebarItem.classList.add("sidebar-item", "sidebar-project-button");

    // Title
    const projectTitle = document.createElement("p");
    projectTitle.textContent = title;

    sidebarItem.appendChild(iconFunction());
    sidebarItem.appendChild(projectTitle);

    return sidebarItem;
}

/* Create the icon for a project */
function generateProjectIcon() {
    const projectIcon = document.createElement("span");
    projectIcon.textContent = "●";
    projectIcon.classList.add("icon", "project-icon");

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
    return generateSidebarItem(project.title, generateProjectIcon);
}

/* Create an all projects button on the sidebar */
function generateAllProjectsButton() {
    return generateSidebarItem("All Projects", generateAllProjectIcon);
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

function editSidebarProject() {

}

function removeSidebarProject() {

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






const projects = []
projects.push((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)());

// Work project/tasks/steps
const work = (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Work Meetings", "All things work meeting related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(work, "Monday Meetings", "All monday work meetings", "", "Med");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)(work.tasks[0], "Morning Meeting");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)(work.tasks[0], "Afternoon Meeting");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(work, "Presentation", "All work presentations", "", "None");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)(work.tasks[1], "Generate Financial Graphs");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)(work.tasks[1], "Check report draft for typos");

// School project/tasks/steps
const school = (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(school, "Presentations", "All work presentations", "", "High");
console.log("o", school, school.tasks[0]);
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)(school.tasks[0], "Homework");

projects.push(work);
projects.push(school);

console.log(projects);
_pages_display__WEBPACK_IMPORTED_MODULE_4__.renderSidebar(projects);
// display.renderForm(display.renderCreateProjectForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateTaskForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateStepForm, document.querySelector(".content-body"));
// display.renderForm(display.renderDeleteForm, document.querySelector(".content-body"));
// display.renderForm(display.renderColourPickerForm, document.querySelector(".content-body"));
_pages_display__WEBPACK_IMPORTED_MODULE_4__.renderProjectPage(projects[2]);
// display.renderAllProjectsPage(projects);

projects.forEach(project => {
    console.log(project);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRix3QkFBd0IsYUFBYSx5QkFBeUIsYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sa0JBQWtCLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLFFBQVEsS0FBSyxRQUFRLEtBQUssT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFX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MERBQU8sY0FBYywwREFBTztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0VBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNkM7QUFDTztBQUNwRDtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLDZEQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL2NvbG91cnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9vcmdhbml6ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvc3RlcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvc3RlcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvYWxsUHJvamVjdHNQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9mb3JtR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy9yYWRpb0ZpZWxkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9mb3Jtcy90ZXh0RmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS9zdGVwc0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvdGFza3NHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3NpZGViYXIvc2lkZWJhclByb2plY3RzR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IHJnYmEoMjIzLCAxNjMsIDE2MywgMC4zKTsgLypyZ2JhKDI1NSwgMTk4LCAxMTIsIDAuMDUpKi9cclxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XHJcbiAgICAtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZDogcmdiYSgxOTEsIDExMiwgMjU1LCAwLjE1KTsgLypyZ2JhKDIyNiwgMTEyLCAyNTUsIDAuNSkgcmdiYSgyNTUsIDE0MSwgMTEyLCAwLjE1KSovXHJcbiAgICAtLXByb2plY3QtaWNvbjogcmdiYSgxNzcsIDk2LCAyMzEsIDAuNSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmFsIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxufSAqL1xyXG5cclxuLmFjdGlvbi1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSxcclxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG59XHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xyXG5cclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuXHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4vKlxyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRpdGxlLWlucHV0OmZvY3VzLFxyXG4uZGF0ZS1pbnB1dDpmb2N1cyxcclxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDZlZmY7XHJcbn0gXHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59IFxyXG5cclxuLmNyZWF0aW9uLWZvcm0sXHJcbi5kZWxldGUtZm9ybSxcclxuLmNvbG91ci1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5maWVsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuXHJcbi5mb3JtLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENyZWF0aW9uIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmZvcm0tbGFiZWwge1xyXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbi50aXRsZS1pbnB1dCxcclxuLmRhdGUtaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVzYy1pbnB1dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIFxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uY29sb3VyLWZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbG91ci1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLmNvbG91ci1yYWRpby1idG4ge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1jYXJkLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zZWN0aW9uLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbn0gXHJcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IENvbnRlbnQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4udGFzay1saXN0LWNvbnRhaW5lcixcclxuLnN0ZXAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogI2FlMmUyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6ICM1ZTRkYjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbG93IHtcclxuICAgIGNvbG9yOiAjMDA1NWNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcclxufVxyXG5cclxuLnByaW9yaXR5LW5vbmUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9vdGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDLEVBQUUsNEJBQTRCO0lBQzVFLDRCQUE0QjtJQUM1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OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0VBSUU7Q0FDRDtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXFxyXFxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cXHJcXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYWwgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmFjdGlvbi1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5hY3Rpb24tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IDFmciA1ZnIgYXV0byAvIDFmciA0ZnI7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFNpZGViYXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0yIC8gMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbWVudSxcXHJcXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci10aXRsZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLypcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKi9cXHJcXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRhdGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xcclxcbn0gXFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufSBcXHJcXG5cXHJcXG4uY3JlYXRpb24tZm9ybSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5mb3JtLWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pbnB1dCxcXHJcXG4uZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtaW5wdXQge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIERlbGV0aW9uIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4gXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5jb2xvdXItZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItcmFkaW8tYnRuIHtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtYm9keSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG59IFxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxMDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IENvbnRlbnQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lcixcXHJcXG4uc3RlcC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiAucHJpb3JpdHktdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgY29sb3I6ICNhZTJlMjQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWQge1xcclxcbiAgICBjb2xvcjogIzVlNGRiMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxvdyB7XFxyXFxuICAgIGNvbG9yOiAjMDA1NWNjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbm9uZSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvb3RlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBDb2xvdXIgRU5VTSAqL1xyXG5jb25zdCBDb2xvdXJzID0ge1xyXG4gICAgTk9ORTogXCIjN0U4MTgwXCIsXHJcbiAgICBSRUQ6IFwiI0UxMzQxRVwiLFxyXG4gICAgQkxVRTogXCIjMEUwOUY2XCIsXHJcbiAgICBHUkVFTjogXCIjMENGMzNEXCIsXHJcbiAgICBQVVJQTEU6IFwiI0YzMENDMlwiLFxyXG4gICAgWUVMTE9XOiBcIiNGMUY2MDlcIixcclxuICAgIC8vIFRFQUw6IFwiIzFlY2JlMVwiLFxyXG59XHJcblxyXG4vKiBEZWZhdWx0IG9wdGlvbiAqL1xyXG5jb25zdCBEZWZhdWx0Q29sb3VyID0gQ29sb3Vycy5OT05FO1xyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkQ29sb3VyKGNvbG91cikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoQ29sb3VycykuaW5jbHVkZXMoY29sb3VyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQ29sb3VycywgRGVmYXVsdENvbG91ciwgaXNWYWxpZENvbG91ciB9IiwiLyogT3JnYW5pemVyIEVOVU0gKi9cclxuY29uc3QgT3JnYW5pemVycyA9IHtcclxuICAgIFBST0pFQ1Q6IFwiUHJvamVjdFwiLFxyXG4gICAgVEFTSzogXCJUYXNrXCIsXHJcbiAgICBTVEVQOiBcIlN0ZXBcIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIGNvbG91ciB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkT3JnYW5pemVyKG9yZ2FuaXplcikge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoT3JnYW5pemVycykuaW5jbHVkZXMob3JnYW5pemVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgT3JnYW5pemVycywgaXNWYWxpZE9yZ2FuaXplciB9IiwiLyogUHJpb3JpdHkgRU5VTSAqL1xyXG5jb25zdCBQcmlvcml0eSA9IHtcclxuICAgIE5PTkU6IFwiTm9uZVwiLFxyXG4gICAgTE9XOiBcIkxvd1wiLFxyXG4gICAgTUVEOiBcIk1lZFwiLFxyXG4gICAgSElHSDogXCJIaWdoXCIsXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRQcmlvcml0eSA9IFByaW9yaXR5Lk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgcHJpb3JpdHkgdmFsdWUgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuaW5jbHVkZXMocHJpb3JpdHkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5LCBpc1ZhbGlkUHJpb3JpdHkgfSIsIi8qIFN0YXR1cyBFTlVNICovXHJcbmNvbnN0IFN0YXR1cyA9IHtcclxuICAgIENPTVBMRVRFRDogXCJDb21wbGV0ZWRcIixcclxuICAgIElOQ09NUExFVEU6IFwiSW5jb21wbGV0ZVwiLFxyXG4gICAgVE9ETzogXCJUbyBEb1wiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgc3RhdHVzIHByb3BlcnR5IGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhTdGF0dXMpLmluY2x1ZGVzKHN0YXR1cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0YXR1cywgaXNWYWxpZFN0YXR1cyB9IiwiLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHByb2plY3Qgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdElEKSB7XHJcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcclxuICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IFtdO1xyXG5cclxuICAgIC8qIFJldHVybnMgdGFzayBjb3VudCBhbmQgaW5jcmVtZW50cyBpdCAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFRhc2tDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRhc2tDb3VudDtcclxuICAgICAgICB0YXNrQ291bnQrKztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SUQsIHRhc2tzLCBjb21wbGV0ZWRUYXNrcywgZ2V0TmV4dFRhc2tDb3VudCB9O1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0ZXAgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLlRPRE87XHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIHN0YXR1cywgcHJvamVjdElELCB0YXNrSUQsIHN0ZXBJRCB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvc3RhdHVzXCI7XHJcblxyXG4vKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgdGFzayBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElELCB0YXNrSUQpIHtcclxuICAgIGxldCBzdGVwQ291bnQgPSAwO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gW107XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLlRPRE87XHJcblxyXG4gICAgLyogUmV0dXJucyBzdGVwIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcENvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gc3RlcENvdW50O1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBzdGVwcywgY29tcGxldGVkU3RlcHMsIHByb2plY3RJRCwgdGFza0lELCBnZXROZXh0U3RlcENvdW50IH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG4vKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHByb2plY3QgdGhhdCBzdG9yZXMgYWxsIHVuYXNzaWduZWQgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBnZXROZXh0UHJvamVjdENvdW50KCk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RGYWN0b3J5KFxyXG4gICAgICAgIFwiTWlzY2VsbGFuZW91c1wiLCBcclxuICAgICAgICBcIkEgY29sbGVjdGlvbiBvZiB0YXNrcywgdGhhdCB3ZXJlbid0IGFzc2lnbmVkIGEgcHJvamVjdFwiLFxyXG4gICAgICAgIHByb2plY3RJRCxcclxuICAgIClcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG59XHJcblxyXG4vKiBBZGQgYSB0YXNrIHRvIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcclxuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzaXRpbmcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHNldFRpdGxlKHByb2plY3QsIHRpdGxlKTtcclxuICAgIHNldERlc2NyaXB0aW9uKHByb2plY3QsIGRlc2NyaXB0aW9uKTtcclxufVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBkZWxldGUgcHJvamVjdC50aXRsZTtcclxuICAgIGRlbGV0ZSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG4vKiBSZXR1cm5zIHByb2plY3QgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuZnVuY3Rpb24gZ2V0TmV4dFByb2plY3RDb3VudCgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gcHJvamVjdENvdW50O1xyXG4gICAgcHJvamVjdENvdW50Kys7XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRpdGxlKHByb2plY3QsIHRpdGxlKSB7XHJcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKHByb2plY3QsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RDb3VudCgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0Q291bnQ7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGFkZFRhc2ssIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3N0ZXBGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXNcIjtcclxuaW1wb3J0IHsgYWRkU3RlcCB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBzdGVwIGFuZCBhZGRzIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKHRhc2ssIG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHRhc2sucHJvamVjdElEO1xyXG4gICAgY29uc3QgdGFza0lEID0gdGFzay50YXNrSUQ7XHJcbiAgICBjb25zdCBzdGVwSUQgPSB0YXNrLmdldE5leHRTdGVwQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1N0ZXAgPSBzdGVwRmFjdG9yeShuYW1lLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKTtcclxuXHJcbiAgICBhZGRTdGVwKHRhc2ssIG5ld1N0ZXApO1xyXG59XHJcblxyXG4vKiBFZGl0IGFuIGV4aXN0aW5nIHN0ZXAgKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXAoc3RlcCwgbmFtZSkge1xyXG4gICAgc2V0TmFtZShzdGVwLCBuYW1lKTtcclxufVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXNpdGluZyBzdGVwICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVN0ZXAoc3RlcCkge1xyXG4gICAgZGVsZXRlIHN0ZXAubmFtZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3RlcCB0byBpbmNvbXBsZXRlIHN0YXR1cyAqL1xyXG5mdW5jdGlvbiBzZXRJbmNvbXBsZXRlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSBTdGF0dXMuVE9ETykge1xyXG4gICAgICAgIHNldFN0YXR1cyhTdGF0dXMuSU5DT01QTEVURSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5hbWUoc3RlcCwgbmFtZSkge1xyXG4gICAgc3RlcC5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RlcCwgZWRpdFN0ZXAsIGRlbGV0ZVN0ZXAsIHNldEluY29tcGxldGUgfSIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHRhc2sgYW5kIGFkZHMgdG8gYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5wcm9qZWN0SUQ7XHJcbiAgICBjb25zdCB0YXNrSUQgPSBwcm9qZWN0LmdldE5leHRUYXNrQ291bnQoKTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCk7XHJcblxyXG4gICAgYWRkVGFzayhwcm9qZWN0LCBuZXdUYXNrKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzdGluZyB0YXNrICovXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgc2V0VGl0bGUodGFzaywgdGl0bGUpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24odGFzaywgZGVzY3JpcHRpb24pO1xyXG4gICAgc2V0RHVlRGF0ZSh0YXNrLCBkdWVEYXRlKTtcclxuICAgIHNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KTtcclxuICAgIHNldFN0YXR1cyh0YXNrLCBzdGF0dXMpO1xyXG59XHJcblxyXG4vKiBEZWxldGUgYW4gZXhpc2l0aW5nIHRhc2sgKi9cclxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKSB7XHJcbiAgICBkZWxldGUgdGFzay50aXRsZTtcclxuICAgIGRlbGV0ZSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgZGVsZXRlIHRhc2suZHVlRGF0ZTtcclxuICAgIGRlbGV0ZSB0YXNrLnByaW9yaXR5O1xyXG4gICAgZGVsZXRlIHRhc2suc3RhdHVzO1xyXG59XHJcblxyXG4vKiBBZGQgYSBzdGVwIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBhZGRTdGVwKHRhc2ssIHN0ZXApIHtcclxuICAgIHRhc2suc3RlcHMucHVzaChzdGVwKTtcclxufVxyXG5cclxuLyogQ29tcGxldGUgYSB0YXNrIGFuZCBjb252ZXJ0IGFsbCBzdGVwcyB0byByZXF1aXJlZCBzdGF0dXMqL1xyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgLy8gTWFyayBpbmNvbXBsZXRlIHN0ZXBzXHJcbiAgICB0YXNrLnNldFN0YXR1cyhTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgIHRhc2suc3RlcHMuYXJyYXkuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwLnNldEluY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaXRsZSh0YXNrLCB0aXRsZSkge1xyXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREdWVEYXRlKHRhc2ssIGR1ZURhdGUpIHtcclxuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KSB7XHJcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0YXR1cyh0YXNrLCBzdGF0dXMpIHtcclxuICAgIHRhc2suc3RhdHVzID0gc3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBlZGl0VGFzaywgZGVsZXRlVGFzaywgYWRkU3RlcCwgY29tcGxldGVUYXNrIH0iLCJpbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi9wcm9qZWN0UGFnZS9hY3Rpb25CdXR0b25zXCI7XHJcblxyXG4vKiBDcmVhdGUgdGhlIHBhZ2Ugc2hvd2luZyBhbGwgb2YgdGhlIGN1cnJlbnQgcHJvamVjdHMgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHNQYWdlKHByb2plY3RzKSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgc2VjdGlvbiAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWxsIFByb2plY3RzXCI7XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XHJcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0blwiKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBib2R5IHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSBjYXJkICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGNhcmQgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9qZWN0IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkRGV0YWlscztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgUHJvamVjdFwifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdENhcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZ3JpZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQWRkaW5nIGVhY2ggb2YgdGhlIHByb2plY3RzIHRvIGEgY2FyZFxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XHJcbiAgICAgICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5wcm9qZWN0SUQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMocHJvamVjdENhcmRCdXR0b25zKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkR3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZEdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7XHJcbn0iLCJpbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5pbXBvcnQgcmVuZGVyQWxsUHJvamVjdHNQYWdlIGZyb20gXCIuL2FsbFByb2plY3RzUGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi9mb3Jtcy9mb3JtR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgeyBcclxuICAgIHJlbmRlclNpZGViYXIsIFxyXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UsIFxyXG4gICAgcmVuZGVyQWxsUHJvamVjdHNQYWdlLFxyXG4gICAgZm9ybXMsXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVUZXh0RmllbGRzIGZyb20gXCIuL3RleHRGaWVsZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgKiBhcyByYWRpb0ZpZWxkR2VuZXJhdG9yIGZyb20gXCIuL3JhZGlvRmllbGRHZW5lcmF0b3JcIlxyXG5pbXBvcnQgeyBPcmdhbml6ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9vcmdhbml6ZXJcIjtcclxuXHJcbi8qIEhhbmRsZXMgZm9ybSBjcmVhdGlvbiBhbmQgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiByZW5kZXJGb3JtKGZvcm1GdW5jdGlvbiwgcGFyZW50KSB7XHJcbiAgICBmb3JtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihmb3JtRnVuY3Rpb24oKSk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXIgYW5kIHRpdGxlICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUJhc2UoaWQsIHRpdGxlLCBmb3JtQ2xhc3MpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBpZDtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChmb3JtQ2xhc3MpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgc3VibWl0IGFuZCBjYW5jZWwgZm9ybSBidXR0b25zICovXHJcbmZ1bmN0aW9uIGFkZEZvcm1CdXR0b25zKG9yZ2FuaXplclR5cGUsIGFjdGlvblR5cGUsIHBhcmVudCkge1xyXG4gICAgY29uc3QgYnRuSURQcmVmaXggPSBhY3Rpb25UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBTdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XHJcbiAgICBzdWJtaXRCdG4uaWQgPSAgYnRuSURQcmVmaXggKyBcIi1zdWJtaXQtYnRuXCI7XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwic3VibWl0LWJ0blwiKTtcclxuXHJcbiAgICAvLyBDYW5jZWwgYnV0dG9uXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbEJ0bi5pZCA9ICBidG5JRFByZWZpeCArIFwiLWNhbmNlbC1idG5cIjtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJjYW5jZWwtYnRuXCIpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0VGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInByb2plY3QtdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJwcm9qZWN0LWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSAsIG1heExlbmd0aDogODAsIHJvd3M6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJwcm9qZWN0LWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJwcm9qZWN0LWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgUHJvamVjdFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMocHJvamVjdFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucygoKSA9PnJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QpKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiQ3JlYXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHRhc2sgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlVGFza0Zvcm0ocGFyZW50KSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3QgdGFza1RleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkRlc2NyaXB0aW9uOlwiLCBpbnB1dE5hbWU6IFwiZGVzY1wiLCBpbnB1dFR5cGU6IFwidGV4dGFyZWFcIiwgaWQ6IFwidGFzay1kZXNjXCIsIGNsYXNzZXM6IFtcImRlc2MtaW5wdXRcIl0sIG1heExlbmd0aDogODB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInRhc2stY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBUYXNrXCIsXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHRhc2tUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICBjb25zb2xlLmxvZyhPcmdhbml6ZXJzLlRBU0spO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUmFkaW9CdXR0b25zKCgpID0+IHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0spKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlRBU0ssIFwiQ3JlYXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlU3RlcEZvcm0ocGFyZW50KSB7XHJcbiAgICAvLyBBbGwgZm9ybSBmaWVsZHMgZm9yIGNyZWF0aW5nIGEgdGFza1xyXG4gICAgY29uc3Qgc3RlcFRleHRGb3JtRmllbGRzID0gW1xyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiVGl0bGU6XCIsIGlucHV0TmFtZTogXCJ0aXRsZVwiLCBpbnB1dFR5cGU6IFwidGV4dFwiLCBpZDogXCJ0YXNrLXRpdGxlXCIsIGNsYXNzZXM6IFtcInRpdGxlLWlucHV0XCJdLCBtYXhMZW5ndGg6IDQwfSxcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIkR1ZSBEYXRlOlwiLCBpbnB1dE5hbWU6IFwiZGF0ZVwiLCBpbnB1dFR5cGU6IFwiZGF0ZVwiLCBpZDogXCJ0YXNrLWRhdGVcIiwgY2xhc3NlczogW1wiZGF0ZS1pbnB1dFwiXX0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJzdGVwLWNyZWF0aW9uLWZvcm1cIiwgXCJOZXcgU3RlcFwiLCBcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHMoc3RlcFRleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGFkZEZvcm1CdXR0b25zKE9yZ2FuaXplcnMuU1RFUCwgXCJDcmVhdGVcIiwgZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY29uZmlybWluZyBvcmdhbml6ZXIgZGVsZXRpb24gKi9cclxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKChcImNvbmZpcm0tZGVsZXRlLWZvcm1cIiksIChcIkRlbGV0ZSBJdGVtP1wiKSwgXCJkZWxldGUtZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGFkZEZvcm1CdXR0b25zKFwiT3JnYW5pemVyXCIsIFwiRGVsZXRlXCIsIGZvcm0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucyhyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvcm0sIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCByZW5kZXJDcmVhdGVUYXNrRm9ybSwgcmVuZGVyQ3JlYXRlU3RlcEZvcm0sIHJlbmRlckRlbGV0ZUZvcm0sIHJlbmRlckNvbG91clBpY2tlckZvcm0gfSIsImltcG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL3ByaW9yaXR5XCI7XHJcbmltcG9ydCB7IENvbG91cnMsIERlZmF1bHRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2NvbG91cnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFkaW9CdXR0b25zKHJhZGlvRnVuY3Rpb24sIG9yZ2FuaXplclR5cGUpIHtcclxuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XHJcblxyXG4gICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9GdW5jdGlvbihvcmdhbml6ZXJUeXBlKSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgb2YgcmFkaW8gYnV0dG9ucyBmb3IgdGhlIHByaW9yaXR5IG9wdGlvbnMgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAvKiBBZGQgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5T3B0aW9ucyhvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhQcmlvcml0eSkuZm9yRWFjaChwcmlvcml0eVZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gb3JnYW5pemVyVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKHByaW9yaXR5VmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gRGVmYXVsdFByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWZpZWxkXCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG4gICAgZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkc2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKENvbG91cnMpLmZvckVhY2goY29sb3VyVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb2xvdXIga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cktleSA9IE9iamVjdC5rZXlzKENvbG91cnMpLmZpbmQoa2V5ID0+IENvbG91cnNba2V5XSA9PT0gY29sb3VyVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gXCJjb2xvdXItXCIgKyBjb2xvdXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcImNvbG91clwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAoY29sb3VyVmFsdWUgPT09IERlZmF1bHRDb2xvdXIpIHtcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBMYWJlbFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29sb3VyS2V5O1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbG91ckZpZWxkLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkc2V0XHJcbiAgICBjb25zdCBjb2xvdXJGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb2xvdXJGaWVsZC5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkc2V0XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG91ckZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVJhZGlvQnV0dG9ucywgZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucywgZ2VuZXJhdGVDb2xvdXJSYWRpb0J1dHRvbnMgfSIsIi8qIENyZWF0ZSBhIGRsYWJlbCBmb3IgYSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGZvcm1GaWVsZC5sYWJlbFRleHQ7XHJcbiAgICBmaWVsZExhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC5mb3IgPSBmb3JtRmllbGQuaWQ7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkTGFiZWw7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHRpdGxlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgLy8gSW5wdXRcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgZGVzY3JpcHRpb24gZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChmb3JtRmllbGQuaW5wdXRUeXBlKTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59ICAgXHJcblxyXG4vKiBDcmVhdGUgYSBkYXRlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgYSBzZXQgb2YgdGV4dCBmaWVsZHMgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUZXh0RmllbGRzKGZpZWxkcywgcGFyZW50KSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpKTtcclxuICAgICAgICBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwidGl0bGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRlc2NcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRhdGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcclxuICAgIH0pXHJcbn0iLCIvKiBDcmVhdGVzIHRoZSBhY3Rpb24gYnV0dG9ucyBmb3IgYSBvcmdhbml6ZXIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGNvbnN0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGFjdGlvbkJ0bnMuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idG5zXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgQnV0dG9uc1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgLy8gQnV0dG9uIENvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcImFjdGlvbi1idG5cIik7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgYWN0aW9uQnRuLnNyYyA9IGJ0bi5zcmM7XHJcbiAgICAgICAgYWN0aW9uQnRuLmFsdCA9IGJ0bi5hbHQ7XHJcbiAgICAgICAgYWN0aW9uQnRuLnRpdGxlID0gYnRuLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufSIsImltcG9ydCBnZW5lcmF0ZVRhc2tzIGZyb20gXCIuL3Rhc2tzR2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4vYWN0aW9uQnV0dG9uc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIGluZm8gZm9yIGEgc2VsZWN0ZWQgcHJvamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGhlYWRlciBkaXNwbGF5aW5nIHByb2plY3QgaW5mbyBhbmQgYWN0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkge1xyXG4gICAgICAgIC8qIERpc3BsYXkgcHJvamVjdCBkZXRhaWxzICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVySW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2plY3QgQnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBUYXNrXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgUHJvamVjdFwifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LnByb2plY3RJRCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMocHJvamVjdEJ1dHRvbnMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBsaXN0IG9mIHRhc2tzIGFuZCB0aGVpciBzdGVwcyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEluY29tcGxldGUgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCB0b2RvU2VjdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgdG9kb1NlY3Rpb25EaXZpZGVyLnRleHRDb250ZW50ID0gXCJUYXNrc1wiXHJcbiAgICAgICAgdG9kb1NlY3Rpb25EaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWRpdmlkZXJcIik7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIGluY29tcGxldGUgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvU2VjdGlvbkRpdmlkZXIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza3MocHJvamVjdC50YXNrcykpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCJcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrcyhwcm9qZWN0LmNvbXBsZXRlZFRhc2tzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcihwcm9qZWN0KSk7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIEJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KHByb2plY3QpKTtcclxufSIsImltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4vYWN0aW9uQnV0dG9uc1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbGlzdCBvZiBzdGVwcyBmb3IgYSB0YXNrICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlU3RlcHMoc3RlcHMpIHtcclxuICAgIC8qIENyZWF0ZSBhIHN0ZXAgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwKHN0ZXApIHtcclxuICAgICAgICAvLyBTdGVwIEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHN0ZXBCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIn0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBzdGVwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBzdGVwSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW1cIik7XHJcbiAgICAgICAgLy8gTGluayB0byB0YXNrXHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHN0ZXAucHJvamVjdElEKTtcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgc3RlcC50YXNrSUQpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiLCBzdGVwLnN0ZXBJRCk7XHJcblxyXG4gICAgICAgIC8vIFN0ZXAgSW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCBzdGVwSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0ZXBJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0aW9uIENoZWNrYm94XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5uYW1lID0gXCJcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHN0ZXBJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBEZXRhaWxzXHJcbiAgICAgICAgY29uc3Qgc3RlcERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RlcC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBBY3Rpb24gQnV0dG9ucyBmb3IgU3RlcHNcclxuICAgICAgICBjb25zdCBzdGVwQWN0aW9uQnV0dG9ucyA9IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhzdGVwQnV0dG9ucyk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50c1xyXG4gICAgICAgIHN0ZXBEZXRhaWxzLmFwcGVuZENoaWxkKHN0ZXBUaXRsZSk7XHJcblxyXG4gICAgICAgIHN0ZXBJbmZvLmFwcGVuZENoaWxkKHN0ZXBEZXRhaWxzKTtcclxuXHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEluZm8pO1xyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBBY3Rpb25CdXR0b25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0ZXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgc3RlcExpc3QuY2xhc3NMaXN0LmFkZChcInN0ZXAtbGlzdFwiKTtcclxuXHJcbiAgICAvLyBBZGQgYWxsIHN0ZXBzIHRvIHRoZSBsaXN0XHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIHN0ZXBMaXN0LmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcChzdGVwKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RlcExpc3Q7XHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVTdGVwcyBmcm9tIFwiLi9zdGVwc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuL2FjdGlvbkJ1dHRvbnNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2YgdGFza3MgZm9yIGEgcHJvamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tzKHRhc2tzKSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1cIiArIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgfHwgXCJObyBEdWUgRGF0ZVwiOztcclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tEZXRhaWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wbGV0aW9uIGNoZWNrYm94XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tEZXRhaWxzKHRhc2spKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdEl0ZW1JbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGFzayBidXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCB0YXNrQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFN0ZXBcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wifSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIC8vIFRhc2sgaW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gdGFza1xyXG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCB0YXNrLnByb2plY3RJRCk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2sudGFza0lEKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIHRhc2sgaW5mb3JtYXRpb24gZWxlbWVudHNcclxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tIZWFkZXIodGFzaykpO1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyh0YXNrQnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xyXG5cclxuICAgIC8vIEFkZCBhbGwgdGFza3MgdG8gdGhlIGxpc3RcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHN0ZXBzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcHModGFzay5zdGVwcykpO1xyXG5cclxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0l0ZW0pO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGFza0xpc3Q7XHJcbn0iLCJpbXBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclNpZGViYXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcblxyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgLy8gTG9nb1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlRPRE9cIjtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcblxyXG4gICAgLy8gU2VjdGlvbiBoZWFkZXJcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJNWSBQUk9KRUNUU1wiXHJcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWhlYWRpbmdcIik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBsaXN0XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdHMtbWVudVwiKTtcclxuXHJcbiAgICAvLyBBbGwgcHJvamVjdHMgYnV0dG9uXHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcHJvamVjdHNMaXN0KTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcbn1cclxuey8qIFxyXG48aDEgY2xhc3M9XCJsb2dvXCI+VE9ETzwvaDE+XHJcbjxkaXY+XHJcbiAgICA8aDMgY2xhc3M9XCJzaWRlYmFyLWhlYWRpbmdcIj5NWSBQUk9KRUNUUzwvaDM+XHJcbiAgICA8dWwgY2xhc3M9XCJzaWRlYmFyLXByb2plY3RzLW1lbnVcIj5cclxuICAgIDwvdWw+XHJcbjwvZGl2PlxyXG4qL31cclxuXHJcbi8vIDxkaXY+XHJcbi8vICAgICA8aDMgY2xhc3M9XCJzaWRlYmFyLWhlYWRpbmdcIj5PUFRJT05TPC9oMz5cclxuLy8gICAgIDx1bCBjbGFzcz1cInNpZGViYXItbWVudVwiPlxyXG4vLyAgICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItaXRlbVwiPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gb3JnYW5pemVyLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy90b2RheS5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkFkZCBOZXcgVGFza1wiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPHA+VG9kYXk8L3A+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLWl0ZW1cIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG9yZ2FuaXplci1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvdXBjb21pbmcuc3ZnXCIgYWx0PVwiXCIgdGl0bGU9XCJBZGQgTmV3IFRhc2tcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1pdGVtXCI+XHJcbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBvcmdhbml6ZXItYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2NvbXBsZXRlZC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkFkZCBOZXcgVGFza1wiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPHA+Q29tcGxldGVkPC9wPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcbi8vICAgICA8L3VsPlxyXG4vLyA8L2Rpdj4iLCJcclxuLyogQ3JlYXRlIGEgc2lkZWJhciBtZW51IGl0ZW0gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFySXRlbSh0aXRsZSwgaWNvbkZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHNpZGViYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIiwgXCJzaWRlYmFyLXByb2plY3QtYnV0dG9uXCIpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKGljb25GdW5jdGlvbigpKTtcclxuICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZGViYXJJdGVtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJY29uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLnRleHRDb250ZW50ID0gXCLil49cIjtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpY29uIGZvciB0aGUgYWxsIHByb2plY3RzIGljb24gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgICAvLyBJY29uIGltYWdlXHJcbiAgICBjb25zdCBpY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaWNvbkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy5zdmdcIjtcclxuXHJcbiAgICAvLyBBcHBlbmluZyBlbGVtZW50c1xyXG4gICAgcHJvamVjdEljb24uYXBwZW5kQ2hpbGQoaWNvbkltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEljb247XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHByb2plY3QgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVTaWRlYmFySXRlbShwcm9qZWN0LnRpdGxlLCBnZW5lcmF0ZVByb2plY3RJY29uKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFsbCBwcm9qZWN0cyBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxQcm9qZWN0c0J1dHRvbigpIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZVNpZGViYXJJdGVtKFwiQWxsIFByb2plY3RzXCIsIGdlbmVyYXRlQWxsUHJvamVjdEljb24pO1xyXG59XHJcblxyXG4vKiBEaXNwbGF5IGFsbCBwcm9qZWN0cyBvbiB0aGUgc2lkZWJhciAqL1xyXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMsIHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSk7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFkZCBhIHByb2plY3QgdG8gdGhlIHNpZGViYXIgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiBhZGRTaWRlYmFyUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJQcm9qZWN0KHByb2plY3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFNpZGViYXJQcm9qZWN0KCkge1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU2lkZWJhclByb2plY3QoKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMsIGFkZFNpZGViYXJQcm9qZWN0LCBlZGl0U2lkZWJhclByb2plY3QsIHJlbW92ZVNpZGViYXJQcm9qZWN0IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgYWRkVGFzayB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzaywgYWRkU3RlcCB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcCB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3N0ZXBcIjtcclxuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tIFwiLi9wYWdlcy9kaXNwbGF5XCI7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtdXHJcbnByb2plY3RzLnB1c2goY3JlYXRlRGVmYXVsdFByb2plY3QoKSk7XHJcblxyXG4vLyBXb3JrIHByb2plY3QvdGFza3Mvc3RlcHNcclxuY29uc3Qgd29yayA9IGNyZWF0ZVByb2plY3QoXCJXb3JrIE1lZXRpbmdzXCIsIFwiQWxsIHRoaW5ncyB3b3JrIG1lZXRpbmcgcmVsYXRlZCFcIik7XHJcblxyXG5jcmVhdGVUYXNrKHdvcmssIFwiTW9uZGF5IE1lZXRpbmdzXCIsIFwiQWxsIG1vbmRheSB3b3JrIG1lZXRpbmdzXCIsIFwiXCIsIFwiTWVkXCIpO1xyXG5jcmVhdGVTdGVwKHdvcmsudGFza3NbMF0sIFwiTW9ybmluZyBNZWV0aW5nXCIpO1xyXG5jcmVhdGVTdGVwKHdvcmsudGFza3NbMF0sIFwiQWZ0ZXJub29uIE1lZXRpbmdcIik7XHJcblxyXG5jcmVhdGVUYXNrKHdvcmssIFwiUHJlc2VudGF0aW9uXCIsIFwiQWxsIHdvcmsgcHJlc2VudGF0aW9uc1wiLCBcIlwiLCBcIk5vbmVcIik7XHJcbmNyZWF0ZVN0ZXAod29yay50YXNrc1sxXSwgXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIpO1xyXG5jcmVhdGVTdGVwKHdvcmsudGFza3NbMV0sIFwiQ2hlY2sgcmVwb3J0IGRyYWZ0IGZvciB0eXBvc1wiKTtcclxuXHJcbi8vIFNjaG9vbCBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNvbnN0IHNjaG9vbCA9IGNyZWF0ZVByb2plY3QoXCJTY2hvb2xcIiwgXCJBbGwgdGhpbmdzIHNjaG9vbCByZWxhdGVkIVwiKTtcclxuXHJcbmNyZWF0ZVRhc2soc2Nob29sLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuY29uc29sZS5sb2coXCJvXCIsIHNjaG9vbCwgc2Nob29sLnRhc2tzWzBdKTtcclxuY3JlYXRlU3RlcChzY2hvb2wudGFza3NbMF0sIFwiSG9tZXdvcmtcIik7XHJcblxyXG5wcm9qZWN0cy5wdXNoKHdvcmspO1xyXG5wcm9qZWN0cy5wdXNoKHNjaG9vbCk7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbmRpc3BsYXkucmVuZGVyU2lkZWJhcihwcm9qZWN0cyk7XHJcbi8vIGRpc3BsYXkucmVuZGVyRm9ybShkaXNwbGF5LnJlbmRlckNyZWF0ZVByb2plY3RGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyRm9ybShkaXNwbGF5LnJlbmRlckNyZWF0ZVRhc2tGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyRm9ybShkaXNwbGF5LnJlbmRlckNyZWF0ZVN0ZXBGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm9keVwiKSk7XHJcbi8vIGRpc3BsYXkucmVuZGVyRm9ybShkaXNwbGF5LnJlbmRlckRlbGV0ZUZvcm0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpKTtcclxuLy8gZGlzcGxheS5yZW5kZXJGb3JtKGRpc3BsYXkucmVuZGVyQ29sb3VyUGlja2VyRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIikpO1xyXG5kaXNwbGF5LnJlbmRlclByb2plY3RQYWdlKHByb2plY3RzWzJdKTtcclxuLy8gZGlzcGxheS5yZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpO1xyXG5cclxucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==