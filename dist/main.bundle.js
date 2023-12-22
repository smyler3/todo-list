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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n    border: 2px solid #00000010;\r\n    border-radius: 50%;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    display: grid;\r\n    grid: 1fr 5fr auto / 1fr 4fr;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -2 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Header Styling\r\n * ----------------------\r\n */\r\n.all-projects-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.create-project-header-btn {\r\n    padding: 1rem 2rem;\r\n    background-color: var(--sidebar-background);\r\n}\r\n.create-project-header-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem;\r\n    height: 100%;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Form Styling\r\n * ------------------------------------------------------------\r\n */\r\n/*\r\n* ----------------------\r\n* General Form Styling\r\n* ----------------------\r\n*/\r\n.title-input:focus,\r\n.date-input:focus,\r\n.desc-input:focus {\r\n    outline: none;\r\n    border: 2px solid #006eff;\r\n} \r\n\r\n.modal {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.creation-form,\r\n.delete-form,\r\n.colour-form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    width: 80%;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Form Button Styling\r\n * ----------------------\r\n */ \r\n\r\n.form-btn-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n    width: 80%;\r\n    color: #ffffff;\r\n    background-color: rgb(0, 89, 255);\r\n}\r\n\r\n.cancel-btn {\r\n    color: rgb(0, 89, 255);\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: 2px solid rgb(0, 89, 255);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Creation Form Styling\r\n * ----------------------\r\n */ \r\n.form-label {\r\n    color: rebeccapurple;\r\n}\r\n\r\n.title-input,\r\n.date-input {\r\n    height: 30px;\r\n}\r\n\r\n.desc-input {\r\n    resize: none;\r\n    height: 50px;\r\n    padding: 0.4rem 0;\r\n}\r\n\r\n.priority-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n    padding: 0.5rem;\r\n}\r\n/*\r\n * ----------------------\r\n * Deletion Form Styling\r\n * ----------------------\r\n */\r\n \r\n/*\r\n * ----------------------\r\n * Colour Picker Form Styling\r\n * ----------------------\r\n */ \r\n.colour-fieldset {\r\n    display: grid;\r\n    grid-template-rows: repeat(2, minmax(1fr, 50px));\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.6rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.colour-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.colour-radio-btn {\r\n    outline: 2px solid;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * All Projects Styling\r\n * ----------------------\r\n */\r\n.project-card-grid {\r\n    display: grid;\r\n    grid-auto-rows: 200px;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n    gap: 2rem;\r\n    padding: 2rem;\r\n} \r\n\r\n.project-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    height: 200px;\r\n    width: auto;\r\n    border: 2px solid #000000;\r\n    border-radius: 10px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n}\r\n\r\n.project-card-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Today Content Styling\r\n * ----------------------\r\n */\r\n\r\n.section-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -2rem;\r\n} \r\n.section-divider::before {\r\n    flex-grow: 1;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 1rem 0 2rem;\r\n    background-color: #000000;\r\n}\r\n.section-divider::after {\r\n    flex-grow: 100;\r\n    content: \"\";\r\n    height: 1px;\r\n    margin: 0 2rem 0 1rem;\r\n    background-color: #000000;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.step-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Priority Icon Styling\r\n * ----------------------\r\n */\r\n .priority-text {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 1.2rem;\r\n    width: 2.5rem;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n.priority-high {\r\n    color: #ae2e24;\r\n    background-color: #ffeceb;\r\n}\r\n\r\n.priority-med {\r\n    color: #5e4db2;\r\n    background-color: #f3f0ff;\r\n}\r\n\r\n.priority-low {\r\n    color: #0055cc;\r\n    background-color: #e9f2ff;\r\n}\r\n\r\n.priority-none {\r\n    color: #000000;\r\n    background-color: #f0f1f4;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n}"],"sourceRoot":""}]);
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

    function getTitle() {
        return title;
    }

    function setTitle(title) {
        this.title = title;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(description) {
        this.description = description;
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

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getTasks, addTask, removeTask, 
        getCompletedTasks, addCompletedTask, removeCompletedTask, 
        getProjectID,
        getNextTaskCount, 
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

    function setTitle(title) {
        this.title = title;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(status) {
        this.status = status;
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

    function setTitle(title) {
        this.title = title;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(description) {
        this.description = description;
    }

    function getDueDate() {
        return dueDate;
    }
    
    function setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    function getPriority() {
        return priority;
    }
    
    function setPriority(priority) {
        this.priority = priority;
    }

    function getStatus() {
        return status;
    }
    
    function setStatus(status) {
        this.status = status;
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
/* harmony export */   getProjects: () => (/* binding */ getProjects)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projectFactory */ "./src/models/organizers/factories/projectFactory.js");


/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    const projectID = getNextProjectCount();

    console.log("yip");

    const defaultProject = (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        projectID,
    )

    projects.push(defaultProject);

    console.log("here", projects[0].getProjectID());
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
}

function getProjects() {
    return projects;
}

let projectCount = 0;
const projects = [];



/***/ }),

/***/ "./src/models/organizers/step.js":
/*!***************************************!*\
  !*** ./src/models/organizers/step.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStep: () => (/* binding */ createStep),
/* harmony export */   editStep: () => (/* binding */ editStep),
/* harmony export */   setIncomplete: () => (/* binding */ setIncomplete)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/stepFactory */ "./src/models/organizers/factories/stepFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");



/* Create a new step and adds to a task */
function createStep(task, name) {
    const projectID = task.getProjectID();
    const taskID = task.getTaskID();
    const stepID = task.getNextStepCount();
    const newStep = (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, projectID, taskID, stepID);

    task.addStep(newStep);
}

/* Edit an existing step */
function editStep(step, name) {
    step.setName(name);
}

// /* Delete an exisiting step */
// function deleteStep(step) {
//     delete step.name;
// }

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
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/taskFactory */ "./src/models/organizers/factories/taskFactory.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/status */ "./src/models/enums/status.js");



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
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");



/* Make a group of project navigation DOM elements link to their project page */
function createProjectPageNavigationListeners(projects, className) {
    const projectNavElements = document.querySelectorAll(className);

    // Link each project navigation element to a project page
    projectNavElements.forEach(element => {
        projects.forEach(project => {
            if (String(project.getProjectID()) === element.getAttribute("data-project-id")) {
                element.addEventListener("click", () => {
                    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
                    (0,_pages_display_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectPage)(project);
                })
            }
        })
    })
}

function createActionButtonListeners() {

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
/* harmony import */ var _utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/actionButtons.js */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _modules_eventListeners_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/eventListeners/index.js */ "./src/modules/eventListeners/index.js");
/* harmony import */ var _models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons.js */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");





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

        // Project Buttons to be created
        const projectCardButtons = [
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderColourPickerForm},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateProjectForm},
            {classNames: [_models_enums_actionButtons_js__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteForm},
        ]

        const projectCardGrid = document.createElement("div");
        projectCardGrid.classList.add("project-card-grid");

        // Adding each of the projects to a card
        projects.forEach(project => {
            const projectCard = document.createElement("span");
            projectCard.classList.add("project-card");
            // Link to project
            projectCard.setAttribute("data-project-id", project.getProjectID());

            // Appending elements
            projectCard.appendChild(generateCardDetails(project));
            projectCard.appendChild((0,_utility_actionButtons_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectCardButtons));
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

/***/ }),

/***/ "./src/pages/display.js":
/*!******************************!*\
  !*** ./src/pages/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   forms: () => (/* reexport module object */ _forms_formGenerator__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   renderAllProjectsPage: () => (/* reexport safe */ _allProjectsPage__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   renderProjectPage: () => (/* reexport safe */ _projectPage__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   renderSidebar: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/pages/sidebar/index.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPage */ "./src/pages/projectPage/index.js");
/* harmony import */ var _allProjectsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allProjectsPage */ "./src/pages/allProjectsPage/index.js");
/* harmony import */ var _forms_formGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/formGenerator */ "./src/pages/forms/formGenerator.js");





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
/* harmony export */   renderDeleteForm: () => (/* binding */ renderDeleteForm)
/* harmony export */ });
/* harmony import */ var _textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textFieldGenerator */ "./src/pages/forms/textFieldGenerator.js");
/* harmony import */ var _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioFieldGenerator */ "./src/pages/forms/radioFieldGenerator.js");
/* harmony import */ var _models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/organizer */ "./src/models/enums/organizer.js");
/* harmony import */ var _models_organizers_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/organizers/project */ "./src/models/organizers/project.js");





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
    // form.appendChild(radioFieldGenerator.generateRadioButtons(() =>radioFieldGenerator.generatePriorityRadioButtons(Organizers.PROJECT)));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Create", form, _models_organizers_project__WEBPACK_IMPORTED_MODULE_3__.createProjectFromForm);

    renderForm(form);
}

/* Create the form for creating a new task */
function renderCreateTaskForm() {
    // All form fields for creating a task
    const taskTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Description:", inputName: "desc", inputType: "textarea", id: "task-desc", classes: ["desc-input"], maxLength: 80},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("task-creation-form", "New Task","creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTextFormFields, form);
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(() => _radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generatePriorityRadioButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK)));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.TASK, "Create", form, );

    renderForm(form);
}

/* Create the form for creating a new step */
function renderCreateStepForm() {
    // All form fields for creating a task
    const stepTextFormFields = [
        {labelText: "Title:", inputName: "title", inputType: "text", id: "task-title", classes: ["title-input"], maxLength: 40},
        {labelText: "Due Date:", inputName: "date", inputType: "date", id: "task-date", classes: ["date-input"]},
    ]

    const form = generateFormBase("step-creation-form", "New Step", "creation-form");

    // Appending elements
    (0,_textFieldGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(stepTextFormFields, form);
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.STEP, "Create", form);

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
    form.appendChild(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateRadioButtons(_radioFieldGenerator__WEBPACK_IMPORTED_MODULE_1__.generateColourRadioButtons));
    addFormButtons(_models_enums_organizer__WEBPACK_IMPORTED_MODULE_2__.Organizers.PROJECT, "Colour", form);

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
/* harmony import */ var _utility_actionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/actionButtons */ "./src/pages/utility/actionButtons.js");
/* harmony import */ var _models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enums/actionButtons */ "./src/models/enums/actionButtons.js");
/* harmony import */ var _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/formGenerator.js */ "./src/pages/forms/formGenerator.js");





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
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateTaskForm},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderColourPickerForm},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateProjectForm},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderDeleteForm},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");
        // Link to project
        projectHeader.setAttribute("data-project-id", project.getProjectID());

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
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.CREATE], src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateStepForm},
            {classNames: [_models_enums_actionButtons__WEBPACK_IMPORTED_MODULE_2__.Actions.EDIT, "edit-task"], src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task", event: _forms_formGenerator_js__WEBPACK_IMPORTED_MODULE_3__.renderCreateTaskForm},
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
/* harmony export */   editSidebarProject: () => (/* binding */ editSidebarProject),
/* harmony export */   removeSidebarProject: () => (/* binding */ removeSidebarProject),
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });

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
    const projectItem = generateSidebarItem(project.getTitle(), generateProjectIcon);
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

function editSidebarProject() {

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
        actionBtn.addEventListener("click", (e) => {
            console
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







console.log((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());

(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)();

console.log((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());

// Work project/tasks/steps
(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Work Meetings", "All things work meeting related!");

console.log("Yooo", (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0], "Monday Meetings", "All monday work meetings", "", "Med");
console.log("Yoo000000000000000o", (0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0].getTasks()[0], "Morning Meeting");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0].getTasks()[0], "Afternoon Meeting");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0], "Presentation", "All work presentations", "", "None");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0].getTasks()[1], "Generate Financial Graphs");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0].getTasks()[1], "Check report draft for typos");

// School project/tasks/steps
(0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!");

(0,_models_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1], "Presentations", "All work presentations", "", "High");
(0,_models_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)((0,_models_organizers_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[1].getTasks()[0], "Homework");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0Ysd0JBQXdCLGFBQWEseUJBQXlCLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLFFBQVEsS0FBSyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsTUFBTSxRQUFRLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFh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QTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFNEM7QUFDNUM7QUFDQTtBQUNlO0FBQ2YsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNEM7QUFDNUM7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dkI7QUFDQSxnRkFBb0I7QUFDcEI7QUFDQSxZQUFZLHVFQUFXO0FBQ3ZCO0FBQ0E7QUFDQSx5RUFBYTtBQUNiO0FBQ0Esb0JBQW9CLHVFQUFXO0FBQy9CO0FBQ0EsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtQ0FBbUMsdUVBQVc7QUFDOUMsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCO0FBQ0EsbUVBQVUsQ0FBQyx1RUFBVztBQUN0QixtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEI7QUFDQTtBQUNBLHlFQUFhO0FBQ2I7QUFDQSxtRUFBVSxDQUFDLHVFQUFXO0FBQ3RCLG1FQUFVLENBQUMsdUVBQVc7QUFDdEI7QUFDQSx5REFBcUIsQ0FBQyx1RUFBVztBQUNqQyxtRUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUE2QixDQUFDLHVFQUFXO0FBQ3pDO0FBQ0Esd0ZBQXNCLENBQUMsdUVBQVcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9jb2xvdXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvb3JnYW5pemVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvZW51bXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9lbnVtcy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL2ZhY3Rvcmllcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL29yZ2FuaXplcnMvZmFjdG9yaWVzL3N0ZXBGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvb3JnYW5pemVycy9mYWN0b3JpZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9vcmdhbml6ZXJzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWxsUHJvamVjdHNMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvc2lkZWJhckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy91dGlsaXR5L3Byb2plY3ROYXZpZ2F0aW9uTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9hbGxQcm9qZWN0c1BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3JhZGlvRmllbGRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2Zvcm1zL3RleHRGaWVsZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3Byb2plY3RQYWdlL3N0ZXBzR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9wcm9qZWN0UGFnZS90YXNrc0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZWJhci9zaWRlYmFyUHJvamVjdHNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn0gKi9cclxuXHJcbi5hY3Rpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5hY3Rpb24tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogU2lkZWJhciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSxcclxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3QtaWNvbik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLmFsbC1wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xyXG59XHJcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBIZWFkZXIgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xyXG5cclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuXHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4vKlxyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiBHZW5lcmFsIEZvcm0gU3R5bGluZ1xyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnRpdGxlLWlucHV0OmZvY3VzLFxyXG4uZGF0ZS1pbnB1dDpmb2N1cyxcclxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDZlZmY7XHJcbn0gXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xyXG59IFxyXG5cclxuLmNyZWF0aW9uLWZvcm0sXHJcbi5kZWxldGUtZm9ybSxcclxuLmNvbG91ci1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5maWVsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuXHJcbi5mb3JtLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENyZWF0aW9uIEZvcm0gU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqLyBcclxuLmZvcm0tbGFiZWwge1xyXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbi50aXRsZS1pbnB1dCxcclxuLmRhdGUtaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVzYy1pbnB1dCB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZWxldGlvbiBGb3JtIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIFxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbG91ciBQaWNrZXIgRm9ybSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovIFxyXG4uY29sb3VyLWZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbG91ci1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLmNvbG91ci1yYWRpby1idG4ge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29udGVudCBCb2R5IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQtYm9keSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzMiwgMjQwKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBbGwgUHJvamVjdHMgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4ucHJvamVjdC1jYXJkLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zZWN0aW9uLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbn0gXHJcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQcm9qZWN0IENvbnRlbnQgU3R5bGluZ1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4udGFzay1saXN0LWNvbnRhaW5lcixcclxuLnN0ZXAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtdGFzay1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcclxufSBcclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiAucHJpb3JpdHktdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgICBjb2xvcjogI2FlMmUyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWQge1xyXG4gICAgY29sb3I6ICM1ZTRkYjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMGZmO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbG93IHtcclxuICAgIGNvbG9yOiAjMDA1NWNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjJmZjtcclxufVxyXG5cclxuLnByaW9yaXR5LW5vbmUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9vdGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDLEVBQUUsNEJBQTRCO0lBQzVFLDRCQUE0QjtJQUM1QixxREFBcUQsRUFBRSxxREFBcUQ7SUFDNUcsdUNBQXVDO0FBQzNDOztBQUVBOzs7O0VBSUU7QUFDRjtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7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bnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXFxyXFxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cXHJcXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYWwgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmFjdGlvbi1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuLmFjdGlvbi1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IDFmciA1ZnIgYXV0byAvIDFmciA0ZnI7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFNpZGViYXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0yIC8gMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYWJhci10ZXh0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbWVudSxcXHJcXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtIDAgMC44cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQWxsIFByb2plY3RzIEhlYWRlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5hbGwtcHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtaGVhZGVyLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci10aXRsZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLypcXHJcXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4qIEdlbmVyYWwgRm9ybSBTdHlsaW5nXFxyXFxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuKi9cXHJcXG4udGl0bGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRhdGUtaW5wdXQ6Zm9jdXMsXFxyXFxuLmRlc2MtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZWZmO1xcclxcbn0gXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxufSBcXHJcXG5cXHJcXG4uY3JlYXRpb24tZm9ybSxcXHJcXG4uZGVsZXRlLWZvcm0sXFxyXFxuLmNvbG91ci1mb3JtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWVsZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogRm9ybSBCdXR0b24gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi8gXFxyXFxuXFxyXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4OSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idG4ge1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDg5LCAyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBDcmVhdGlvbiBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5mb3JtLWxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pbnB1dCxcXHJcXG4uZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtaW5wdXQge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIERlbGV0aW9uIEZvcm0gU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4gXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogQ29sb3VyIFBpY2tlciBGb3JtIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovIFxcclxcbi5jb2xvdXItZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMWZyLCA1MHB4KSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3VyLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb2xvdXItcmFkaW8tYnRuIHtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtYm9keSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEFsbCBQcm9qZWN0cyBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi5wcm9qZWN0LWNhcmQtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZC1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBUb2RheSBDb250ZW50IFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLnNlY3Rpb24tZGl2aWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG59IFxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxMDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAwIDJyZW0gMCAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQcm9qZWN0IENvbnRlbnQgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lcixcXHJcXG4uc3RlcC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4ICMwMDAwMDAyNTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LXRhc2stZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICogUHJpb3JpdHkgSWNvbiBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbiAucHJpb3JpdHktdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgY29sb3I6ICNhZTJlMjQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVjZWI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWQge1xcclxcbiAgICBjb2xvcjogIzVlNGRiMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxvdyB7XFxyXFxuICAgIGNvbG9yOiAjMDA1NWNjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbm9uZSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWY0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvb3RlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBBY3Rpb24gYnV0dG9uIGNsYXNzbmFtZSBFTlVNICovXHJcbmNvbnN0IEFjdGlvbnMgPSB7XHJcbiAgICBDUkVBVEU6IFwiYWRkLWJ1dHRvblwiLFxyXG4gICAgQ09MT1VSOiBcImNvbG91ci1idXR0b25cIixcclxuICAgIEVESVQ6IFwiZWRpdC1idXR0b25cIixcclxuICAgIERFTEVURTogXCJkZWxldGUtYnV0dG9uXCIsXHJcbn1cclxuXHJcbmV4cG9ydCB7IEFjdGlvbnMgfSIsIi8qIENvbG91ciBFTlVNICovXHJcbmNvbnN0IENvbG91cnMgPSB7XHJcbiAgICBOT05FOiBcIiM3RTgxODBcIixcclxuICAgIFJFRDogXCIjRTEzNDFFXCIsXHJcbiAgICBCTFVFOiBcIiMwRTA5RjZcIixcclxuICAgIEdSRUVOOiBcIiMwQ0YzM0RcIixcclxuICAgIFBVUlBMRTogXCIjRjMwQ0MyXCIsXHJcbiAgICBZRUxMT1c6IFwiI0YxRjYwOVwiLFxyXG4gICAgLy8gVEVBTDogXCIjMWVjYmUxXCIsXHJcbn1cclxuXHJcbi8qIERlZmF1bHQgb3B0aW9uICovXHJcbmNvbnN0IERlZmF1bHRDb2xvdXIgPSBDb2xvdXJzLk5PTkU7XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRDb2xvdXIoY29sb3VyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDb2xvdXJzKS5pbmNsdWRlcyhjb2xvdXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyLCBpc1ZhbGlkQ29sb3VyIH0iLCIvKiBPcmdhbml6ZXIgRU5VTSAqL1xyXG5jb25zdCBPcmdhbml6ZXJzID0ge1xyXG4gICAgUFJPSkVDVDogXCJQcm9qZWN0XCIsXHJcbiAgICBUQVNLOiBcIlRhc2tcIixcclxuICAgIFNURVA6IFwiU3RlcFwiLFxyXG59XHJcblxyXG4vKiBDaGVja3Mgd2hldGhlciB0aGUgY29sb3VyIHZhbHVlIGlzIHZhbGlkICovXHJcbmZ1bmN0aW9uIGlzVmFsaWRPcmdhbml6ZXIob3JnYW5pemVyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPcmdhbml6ZXJzKS5pbmNsdWRlcyhvcmdhbml6ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBPcmdhbml6ZXJzLCBpc1ZhbGlkT3JnYW5pemVyIH0iLCIvKiBQcmlvcml0eSBFTlVNICovXHJcbmNvbnN0IFByaW9yaXR5ID0ge1xyXG4gICAgTk9ORTogXCJOb25lXCIsXHJcbiAgICBMT1c6IFwiTG93XCIsXHJcbiAgICBNRUQ6IFwiTWVkXCIsXHJcbiAgICBISUdIOiBcIkhpZ2hcIixcclxufVxyXG5cclxuLyogRGVmYXVsdCBvcHRpb24gKi9cclxuY29uc3QgRGVmYXVsdFByaW9yaXR5ID0gUHJpb3JpdHkuTk9ORTtcclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBwcmlvcml0eSB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5pbmNsdWRlcyhwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByaW9yaXR5LCBEZWZhdWx0UHJpb3JpdHksIGlzVmFsaWRQcmlvcml0eSB9IiwiLyogU3RhdHVzIEVOVU0gKi9cclxuY29uc3QgU3RhdHVzID0ge1xyXG4gICAgQ09NUExFVEVEOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgSU5DT01QTEVURTogXCJJbmNvbXBsZXRlXCIsXHJcbiAgICBUT0RPOiBcIlRvIERvXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBzdGF0dXMgcHJvcGVydHkgaXMgdmFsaWQgKi9cclxuZnVuY3Rpb24gaXNWYWxpZFN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFN0YXR1cykuaW5jbHVkZXMoc3RhdHVzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3RhdHVzLCBpc1ZhbGlkU3RhdHVzIH0iLCIvKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgcHJvamVjdCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SUQpIHtcclxuICAgIGxldCB0YXNrQ291bnQgPSAwO1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XHJcblxyXG4gICAgLyogUmV0dXJucyB0YXNrIGNvdW50IGFuZCBpbmNyZW1lbnRzIGl0ICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0VGFza0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGFza0NvdW50O1xyXG4gICAgICAgIHRhc2tDb3VudCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgdGFzayB0byB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSB0YXNrIGZyb20gdGhlIHByb2plY3QgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2tzLmFycmF5LmZvckVhY2godGFza0VsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzayA9PT0gdGFza0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGFza0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCB0YXNrIHRvIHRoZSBwcm9qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBhZGRDb21wbGV0ZWRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHRhc2sgZnJvbSB0aGUgcHJvamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MuYXJyYXkuZm9yRWFjaCh0YXNrRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrID09PSB0YXNrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkVGFza3MucHVzaCh0YXNrRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0VGFza3MsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIFxyXG4gICAgICAgIGdldENvbXBsZXRlZFRhc2tzLCBhZGRDb21wbGV0ZWRUYXNrLCByZW1vdmVDb21wbGV0ZWRUYXNrLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsXHJcbiAgICAgICAgZ2V0TmV4dFRhc2tDb3VudCwgXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0ZXAgb2JqZWN0ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0ZXBGYWN0b3J5KHRpdGxlLCBwcm9qZWN0SUQsIHRhc2tJRCwgc3RlcElEKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gU3RhdHVzLlRPRE87XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGFza0lEKCkge1xyXG4gICAgICAgIHJldHVybiB0YXNrSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RlcElEKCkge1xyXG4gICAgICAgIHJldHVybiBzdGVwSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgXHJcbiAgICAgICAgZ2V0UHJvamVjdElELCBnZXRUYXNrSUQsIGdldFN0ZXBJRCxcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9zdGF0dXNcIjtcclxuXHJcbi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSB0YXNrIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SUQsIHRhc2tJRCkge1xyXG4gICAgbGV0IHN0ZXBDb3VudCA9IDA7XHJcbiAgICBjb25zdCBzdGVwcyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGVkU3RlcHMgPSBbXTtcclxuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuVE9ETztcclxuXHJcbiAgICAvKiBSZXR1cm5zIHN0ZXAgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwQ291bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBzdGVwQ291bnQ7XHJcbiAgICAgICAgc3RlcENvdW50Kys7XHJcblxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICAgICAgICByZXR1cm4gc3RlcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGEgc3RlcCB0byB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gYWRkU3RlcChzdGVwKSB7XHJcbiAgICAgICAgc3RlcHMucHVzaChzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1vdmUgYSBzdGVwIGZyb20gdGhlIHRhc2sgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0ZXAoc3RlcCkge1xyXG4gICAgICAgIHN0ZXBzLmFycmF5LmZvckVhY2goc3RlcEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gc3RlcEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzLnB1c2goc3RlcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkU3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZFN0ZXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGNvbXBsZXRlZCBzdGVwIHRvIHRoZSB0YXNrICovXHJcbiAgICBmdW5jdGlvbiBhZGRDb21wbGV0ZWRTdGVwKHN0ZXApIHtcclxuICAgICAgICBjb21wbGV0ZWRTdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBhIHN0ZXAgZnJvbSB0aGUgdGFzayAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkU3RlcChzdGVwKSB7XHJcbiAgICAgICAgY29tcGxldGVkU3RlcHMuYXJyYXkuZm9yRWFjaChzdGVwRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGVwID09PSBzdGVwRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkU3RlcHMucHVzaChzdGVwRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tJRDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnZXRUaXRsZSwgc2V0VGl0bGUsIFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgXHJcbiAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcclxuICAgICAgICBnZXRTdGF0dXMsIHNldFN0YXR1cywgXHJcbiAgICAgICAgZ2V0U3RlcHMsIGFkZFN0ZXAsIHJlbW92ZVN0ZXAsIFxyXG4gICAgICAgIGdldENvbXBsZXRlZFN0ZXBzLCBhZGRDb21wbGV0ZWRTdGVwLCByZW1vdmVDb21wbGV0ZWRTdGVwLCBcclxuICAgICAgICBnZXRQcm9qZWN0SUQsIGdldFRhc2tJRCwgXHJcbiAgICAgICAgZ2V0TmV4dFN0ZXBDb3VudCBcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcblxyXG4vKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHByb2plY3QgdGhhdCBzdG9yZXMgYWxsIHVuYXNzaWduZWQgdGFza3MgKi9cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBnZXROZXh0UHJvamVjdENvdW50KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ5aXBcIik7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBcIk1pc2NlbGxhbmVvdXNcIiwgXHJcbiAgICAgICAgXCJBIGNvbGxlY3Rpb24gb2YgdGFza3MsIHRoYXQgd2VyZW4ndCBhc3NpZ25lZCBhIHByb2plY3RcIixcclxuICAgICAgICBwcm9qZWN0SUQsXHJcbiAgICApXHJcblxyXG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIsIHByb2plY3RzWzBdLmdldFByb2plY3RJRCgpKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHByb2plY3QgKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IGdldE5leHRQcm9qZWN0Q291bnQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvamVjdElELFxyXG4gICAgKVxyXG5cclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc2l0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBwcm9qZWN0LnNldFRpdGxlKHRpdGxlKTtcclxuICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG4vLyAvKiBEZWxldGUgYW4gZXhpc3RpbmcgcHJvamVjdCAqL1xyXG4vLyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuLy8gICAgIGRlbGV0ZSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbi8vICAgICBkZWxldGUgcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4vLyB9XHJcblxyXG4vKiBSZXR1cm5zIHByb2plY3QgY291bnQgYW5kIGluY3JlbWVudHMgaXQgKi9cclxuZnVuY3Rpb24gZ2V0TmV4dFByb2plY3RDb3VudCgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gcHJvamVjdENvdW50O1xyXG4gICAgcHJvamVjdENvdW50Kys7XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZXMgYSBwcm9qZWN0IGZyb20gY3JlYXRpb24gZm9ybSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RnJvbUZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGVzY1wiKS52YWx1ZTtcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0sIGdldFByb2plY3RzIH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL3N0ZXBGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBzdGVwIGFuZCBhZGRzIHRvIGEgdGFzayAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGVwKHRhc2ssIG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJRCA9IHRhc2suZ2V0UHJvamVjdElEKCk7XHJcbiAgICBjb25zdCB0YXNrSUQgPSB0YXNrLmdldFRhc2tJRCgpO1xyXG4gICAgY29uc3Qgc3RlcElEID0gdGFzay5nZXROZXh0U3RlcENvdW50KCk7XHJcbiAgICBjb25zdCBuZXdTdGVwID0gc3RlcEZhY3RvcnkobmFtZSwgcHJvamVjdElELCB0YXNrSUQsIHN0ZXBJRCk7XHJcblxyXG4gICAgdGFzay5hZGRTdGVwKG5ld1N0ZXApO1xyXG59XHJcblxyXG4vKiBFZGl0IGFuIGV4aXN0aW5nIHN0ZXAgKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXAoc3RlcCwgbmFtZSkge1xyXG4gICAgc3RlcC5zZXROYW1lKG5hbWUpO1xyXG59XHJcblxyXG4vLyAvKiBEZWxldGUgYW4gZXhpc2l0aW5nIHN0ZXAgKi9cclxuLy8gZnVuY3Rpb24gZGVsZXRlU3RlcChzdGVwKSB7XHJcbi8vICAgICBkZWxldGUgc3RlcC5uYW1lO1xyXG4vLyB9XHJcblxyXG4vKiBTZXQgYSBzdGVwIHRvIGluY29tcGxldGUgc3RhdHVzICovXHJcbmZ1bmN0aW9uIHNldEluY29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IFN0YXR1cy5UT0RPKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5JTkNPTVBMRVRFKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RlcCwgZWRpdFN0ZXAsIHNldEluY29tcGxldGUgfSIsImltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3N0YXR1c1wiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHRhc2sgYW5kIGFkZHMgdG8gYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRQcm9qZWN0SUQoKTtcclxuICAgIGNvbnN0IHRhc2tJRCA9IHByb2plY3QuZ2V0TmV4dFRhc2tDb3VudCgpO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCwgdGFza0lEKTtcclxuXHJcbiAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbn1cclxuXHJcbi8qIEVkaXQgYW4gZXhpc3RpbmcgdGFzayAqL1xyXG5mdW5jdGlvbiBlZGl0VGFzayh0YXNrLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHRhc2suc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0YXNrLnNldER1ZURhdGUodGFzaywgZHVlRGF0ZSk7XHJcbiAgICB0YXNrLnNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KTtcclxuICAgIHRhc2suc2V0U3RhdHVzKHRhc2ssIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8vIC8qIERlbGV0ZSBhbiBleGlzaXRpbmcgdGFzayAqL1xyXG4vLyBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcclxuLy8gICAgIGRlbGV0ZSB0YXNrLmdldFRpdGxlKCk7XHJcbi8vICAgICBkZWxldGUgdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4vLyAgICAgZGVsZXRlIHRhc2suZ2V0RHVlRGF0ZSgpO1xyXG4vLyAgICAgZGVsZXRlIHRhc2suZ2V0UHJpb3JpdHkoKTtcclxuLy8gICAgIGRlbGV0ZSB0YXNrLmdldFN0YXR1cygpO1xyXG4vLyB9XHJcblxyXG4vKiBDb21wbGV0ZSBhIHRhc2sgYW5kIGNvbnZlcnQgYWxsIHN0ZXBzIHRvIHJlcXVpcmVkIHN0YXR1cyovXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAvLyBNYXJrIGluY29tcGxldGUgc3RlcHNcclxuICAgIHRhc2suc2V0U3RhdHVzKFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgdGFzay5nZXRTdGVwcygpLmFycmF5LmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgc3RlcC5zZXRJbmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgZWRpdFRhc2ssIGNvbXBsZXRlVGFzayB9IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzIH0gZnJvbSBcIi4vdXRpbGl0eS9wcm9qZWN0TmF2aWdhdGlvbkxpc3RlbmVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMocHJvamVjdHMpIHtcclxuICAgIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgXCIucHJvamVjdC1jYXJkXCIpO1xyXG59IiwiaW1wb3J0IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgZnJvbSBcIi4vc2lkZWJhckxpc3RlbmVyc1wiO1xyXG5pbXBvcnQgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMgZnJvbSBcIi4vYWxsUHJvamVjdHNMaXN0ZW5lcnNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVTaWRlYmFyTGlzdGVuZXJzLFxyXG4gICAgY3JlYXRlQWxsUHJvamVjdHNMaXN0ZW5lcnMsXHJcbn0iLCJpbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsIGNsZWFyUGFnZSB9IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyB9IGZyb20gXCIuL3V0aWxpdHkvcHJvamVjdE5hdmlnYXRpb25MaXN0ZW5lcnMuanNcIjtcclxuXHJcbi8qIE1ha2UgdGhlIGFsbCBwcm9qZWN0cyBzaWRlYmFyIGJ1dHRvbiBsaW5rIHRvIHRoZSBhbGwgcHJvamVjdHMgcGFnZSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c0J1dHRvbkxpc3RlbmVyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXByb2plY3RzLWJ1dHRvblwiKTtcclxuXHJcbiAgICBhbGxQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgIHJlbmRlckFsbFByb2plY3RzUGFnZShwcm9qZWN0cyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKiBHaXZlIGFsbCBzaWRlYmFyIHByb2plY3QgYnV0dG9ucyBmdW5jdGlvbmFsaXR5ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMocHJvamVjdHMpIHtcclxuICAgIGNyZWF0ZUFsbFByb2plY3RzQnV0dG9uTGlzdGVuZXIocHJvamVjdHMpO1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VOYXZpZ2F0aW9uTGlzdGVuZXJzKHByb2plY3RzLCBcIi5zaWRlYmFyLXByb2plY3QtYnV0dG9uXCIpO1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UsIGNsZWFyUGFnZSwgcmVuZGVyRGVsZXRlRm9ybSB9IGZyb20gXCIuLi8uLi8uLi9wYWdlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuXHJcbi8qIE1ha2UgYSBncm91cCBvZiBwcm9qZWN0IG5hdmlnYXRpb24gRE9NIGVsZW1lbnRzIGxpbmsgdG8gdGhlaXIgcHJvamVjdCBwYWdlICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlTmF2aWdhdGlvbkxpc3RlbmVycyhwcm9qZWN0cywgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgLy8gTGluayBlYWNoIHByb2plY3QgbmF2aWdhdGlvbiBlbGVtZW50IHRvIGEgcHJvamVjdCBwYWdlXHJcbiAgICBwcm9qZWN0TmF2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2plY3QuZ2V0UHJvamVjdElEKCkpID09PSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25CdXR0b25MaXN0ZW5lcnMoKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZU5hdmlnYXRpb25MaXN0ZW5lcnMgfSIsImltcG9ydCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4uL3V0aWxpdHkvYWN0aW9uQnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnMuanNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuXHJcbi8qIENyZWF0ZSB0aGUgcGFnZSBzaG93aW5nIGFsbCBvZiB0aGUgY3VycmVudCBwcm9qZWN0cyAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHMpIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgY29udGVudCBmb3IgdGhlIGhlYWRlciBzZWN0aW9uICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWhlYWRlci1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgUHJvamVjdHNcIjtcclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBidXR0b25cclxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdC1oZWFkZXItYnRuXCIpO1xyXG5cclxuICAgICAgICAvLyBwcm9qZWN0IGJ1dHRvbiBldmVudFxyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGNvbnRlbnQgZm9yIHRoZSBib2R5IHNlY3Rpb24gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xyXG4gICAgICAgIC8qIENyZWF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSBjYXJkICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGNhcmQgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q2FyZERldGFpbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkNPTE9VUl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkNvbG91ciBQcm9qZWN0XCIsIGV2ZW50OiBmb3Jtcy5yZW5kZXJDb2xvdXJQaWNrZXJGb3JtfSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1wcm9qZWN0XCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgUHJvamVjdFwiLCBldmVudDogZm9ybXMucmVuZGVyQ3JlYXRlUHJvamVjdEZvcm19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCIsIGV2ZW50OiBmb3Jtcy5yZW5kZXJEZWxldGVGb3JtfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdENhcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmQtZ3JpZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQWRkaW5nIGVhY2ggb2YgdGhlIHByb2plY3RzIHRvIGEgY2FyZFxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XHJcbiAgICAgICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5nZXRQcm9qZWN0SUQoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDYXJkRGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhwcm9qZWN0Q2FyZEJ1dHRvbnMpKTtcclxuICAgICAgICAgICAgcHJvamVjdENhcmRHcmlkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZUhlYWRlcigpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBjcmVhdGVBbGxQcm9qZWN0c0xpc3RlbmVycyhwcm9qZWN0cyk7XHJcbn0iLCJpbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5pbXBvcnQgcmVuZGVyQWxsUHJvamVjdHNQYWdlIGZyb20gXCIuL2FsbFByb2plY3RzUGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi9mb3Jtcy9mb3JtR2VuZXJhdG9yXCI7XHJcblxyXG5mdW5jdGlvbiBjbGVhckhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckJvZHkoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWJvZHlcIik7XHJcbiAgICBib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XHJcbiAgICBjbGVhckhlYWRlcigpO1xyXG4gICAgY2xlYXJCb2R5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyU2lkZWJhciwgXHJcbiAgICByZW5kZXJQcm9qZWN0UGFnZSwgXHJcbiAgICByZW5kZXJBbGxQcm9qZWN0c1BhZ2UsXHJcbiAgICBmb3JtcyxcclxuICAgIGNsZWFyUGFnZSxcclxufSIsImltcG9ydCBnZW5lcmF0ZVRleHRGaWVsZHMgZnJvbSBcIi4vdGV4dEZpZWxkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCAqIGFzIHJhZGlvRmllbGRHZW5lcmF0b3IgZnJvbSBcIi4vcmFkaW9GaWVsZEdlbmVyYXRvclwiXHJcbmltcG9ydCB7IE9yZ2FuaXplcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL29yZ2FuaXplclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RnJvbUZvcm0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL29yZ2FuaXplcnMvcHJvamVjdFwiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBtb2RhbCB3aGljaCB3aWxsIHN0b3JlIGFsbCBmb3JtcyAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm1Nb2RhbChwYXJlbnQpIHtcclxuICAgIGNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm1Nb2RhbCk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgZm9ybSBjcmVhdGlvbiBhbmQgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiByZW5kZXJGb3JtKGZvcm0pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGZvcm1Db250YWluZXIucmVwbGFjZUNoaWxkcmVuKGZvcm0pO1xyXG4gICAgbW9kYWwucmVwbGFjZUNoaWxkcmVuKGZvcm1Db250YWluZXIpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyIGFuZCB0aXRsZSAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm1CYXNlKGlkLCB0aXRsZSwgZm9ybUNsYXNzKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmlkID0gaWQ7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoZm9ybUNsYXNzKTtcclxuXHJcbiAgICAvLyBUaXRsZVxyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIHN1Ym1pdCBhbmQgY2FuY2VsIGZvcm0gYnV0dG9ucyAqL1xyXG5mdW5jdGlvbiBhZGRGb3JtQnV0dG9ucyhvcmdhbml6ZXJUeXBlLCBhY3Rpb25UeXBlLCBwYXJlbnQsIHN1Ym1pdEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICBjb25zdCBidG5JRFByZWZpeCA9IGFjdGlvblR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgb3JnYW5pemVyVHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFN1Ym1pdCBidXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcclxuICAgIHN1Ym1pdEJ0bi5pZCA9ICBidG5JRFByZWZpeCArIFwiLXN1Ym1pdC1idG5cIjtcclxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJzdWJtaXQtYnRuXCIpO1xyXG5cclxuICAgIC8vIFN1Ym1pdCBldmVudFxyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnRuLmlkID0gIGJ0bklEUHJlZml4ICsgXCItY2FuY2VsLWJ0blwiO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcImNhbmNlbC1idG5cIik7XHJcblxyXG4gICAgLy8gQ2FuY2VsIGV2ZW50XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZVByb2plY3RGb3JtKCkge1xyXG4gICAgLy8gQWxsIGZvcm0gZmllbGRzIGZvciBjcmVhdGluZyBhIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUZXh0Rm9ybUZpZWxkcyA9IFtcclxuICAgICAgICB7bGFiZWxUZXh0OiBcIlRpdGxlOlwiLCBpbnB1dE5hbWU6IFwidGl0bGVcIiwgaW5wdXRUeXBlOiBcInRleHRcIiwgaWQ6IFwicHJvamVjdC10aXRsZVwiLCBjbGFzc2VzOiBbXCJ0aXRsZS1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA0MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEZXNjcmlwdGlvbjpcIiwgaW5wdXROYW1lOiBcImRlc2NcIiwgaW5wdXRUeXBlOiBcInRleHRhcmVhXCIsIGlkOiBcInByb2plY3QtZGVzY1wiLCBjbGFzc2VzOiBbXCJkZXNjLWlucHV0XCJdICwgbWF4TGVuZ3RoOiA4MCwgcm93czogNDB9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwicHJvamVjdC1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFByb2plY3RcIiwgXCJjcmVhdGlvbi1mb3JtXCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVUZXh0RmllbGRzKHByb2plY3RUZXh0Rm9ybUZpZWxkcywgZm9ybSk7XHJcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRmllbGRHZW5lcmF0b3IuZ2VuZXJhdGVSYWRpb0J1dHRvbnMoKCkgPT5yYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNUKSkpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5QUk9KRUNULCBcIkNyZWF0ZVwiLCBmb3JtLCBjcmVhdGVQcm9qZWN0RnJvbUZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgdGFzayAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVUYXNrRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCB0YXNrVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInRhc2stdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRGVzY3JpcHRpb246XCIsIGlucHV0TmFtZTogXCJkZXNjXCIsIGlucHV0VHlwZTogXCJ0ZXh0YXJlYVwiLCBpZDogXCJ0YXNrLWRlc2NcIiwgY2xhc3NlczogW1wiZGVzYy1pbnB1dFwiXSwgbWF4TGVuZ3RoOiA4MH0sXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJEdWUgRGF0ZTpcIiwgaW5wdXROYW1lOiBcImRhdGVcIiwgaW5wdXRUeXBlOiBcImRhdGVcIiwgaWQ6IFwidGFzay1kYXRlXCIsIGNsYXNzZXM6IFtcImRhdGUtaW5wdXRcIl19LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1CYXNlKFwidGFzay1jcmVhdGlvbi1mb3JtXCIsIFwiTmV3IFRhc2tcIixcImNyZWF0aW9uLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBnZW5lcmF0ZVRleHRGaWVsZHModGFza1RleHRGb3JtRmllbGRzLCBmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucygoKSA9PiByYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMoT3JnYW5pemVycy5UQVNLKSkpO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5UQVNLLCBcIkNyZWF0ZVwiLCBmb3JtLCApO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgc3RlcCAqL1xyXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVTdGVwRm9ybSgpIHtcclxuICAgIC8vIEFsbCBmb3JtIGZpZWxkcyBmb3IgY3JlYXRpbmcgYSB0YXNrXHJcbiAgICBjb25zdCBzdGVwVGV4dEZvcm1GaWVsZHMgPSBbXHJcbiAgICAgICAge2xhYmVsVGV4dDogXCJUaXRsZTpcIiwgaW5wdXROYW1lOiBcInRpdGxlXCIsIGlucHV0VHlwZTogXCJ0ZXh0XCIsIGlkOiBcInRhc2stdGl0bGVcIiwgY2xhc3NlczogW1widGl0bGUtaW5wdXRcIl0sIG1heExlbmd0aDogNDB9LFxyXG4gICAgICAgIHtsYWJlbFRleHQ6IFwiRHVlIERhdGU6XCIsIGlucHV0TmFtZTogXCJkYXRlXCIsIGlucHV0VHlwZTogXCJkYXRlXCIsIGlkOiBcInRhc2stZGF0ZVwiLCBjbGFzc2VzOiBbXCJkYXRlLWlucHV0XCJdfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZShcInN0ZXAtY3JlYXRpb24tZm9ybVwiLCBcIk5ldyBTdGVwXCIsIFwiY3JlYXRpb24tZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGdlbmVyYXRlVGV4dEZpZWxkcyhzdGVwVGV4dEZvcm1GaWVsZHMsIGZvcm0pO1xyXG4gICAgYWRkRm9ybUJ1dHRvbnMoT3JnYW5pemVycy5TVEVQLCBcIkNyZWF0ZVwiLCBmb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGZvcm0gZm9yIGNvbmZpcm1pbmcgb3JnYW5pemVyIGRlbGV0aW9uICovXHJcbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZ2VuZXJhdGVGb3JtQmFzZSgoXCJjb25maXJtLWRlbGV0ZS1mb3JtXCIpLCAoXCJEZWxldGUgSXRlbT9cIiksIFwiZGVsZXRlLWZvcm1cIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBhZGRGb3JtQnV0dG9ucyhcIk9yZ2FuaXplclwiLCBcIkRlbGV0ZVwiLCBmb3JtKTtcclxuXHJcbiAgICByZW5kZXJGb3JtKGZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb2xvdXJQaWNrZXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybUJhc2UoXCJjb2xvdXItZm9ybVwiLCBcIlBpY2sgQSBDb2xvdXJcIiwgXCJjb2xvdXItZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgZWxlbWVudHNcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9GaWVsZEdlbmVyYXRvci5nZW5lcmF0ZVJhZGlvQnV0dG9ucyhyYWRpb0ZpZWxkR2VuZXJhdG9yLmdlbmVyYXRlQ29sb3VyUmFkaW9CdXR0b25zKSk7XHJcbiAgICBhZGRGb3JtQnV0dG9ucyhPcmdhbml6ZXJzLlBST0pFQ1QsIFwiQ29sb3VyXCIsIGZvcm0pO1xyXG5cclxuICAgIHJlbmRlckZvcm0oZm9ybSk7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlRm9ybU1vZGFsLCByZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSwgcmVuZGVyQ3JlYXRlVGFza0Zvcm0sIHJlbmRlckNyZWF0ZVN0ZXBGb3JtLCByZW5kZXJEZWxldGVGb3JtLCByZW5kZXJDb2xvdXJQaWNrZXJGb3JtIH0iLCJpbXBvcnQgeyBQcmlvcml0eSwgRGVmYXVsdFByaW9yaXR5IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9wcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBDb2xvdXJzLCBEZWZhdWx0Q29sb3VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbnVtcy9jb2xvdXJzXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhZGlvQnV0dG9ucyhyYWRpb0Z1bmN0aW9uLCBvcmdhbml6ZXJUeXBlKSB7XHJcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvRnVuY3Rpb24ob3JnYW5pemVyVHlwZSkpO1xyXG5cclxuICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgc2V0IG9mIHJhZGlvIGJ1dHRvbnMgZm9yIHRoZSBwcmlvcml0eSBvcHRpb25zICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlSYWRpb0J1dHRvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgLyogQWRkIHRoZSByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoUHJpb3JpdHkpLmZvckVhY2gocHJpb3JpdHlWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJRFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JRCA9IG9yZ2FuaXplclR5cGUudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgcHJpb3JpdHlWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gRGVmYXVsdFByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gTGFiZWxcclxuICAgICAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5VmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gb3B0aW9uSUQ7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmllbGRzZXRcclxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWZpZWxkXCIpO1xyXG5cclxuICAgIC8vIExlZ2VuZFxyXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG4gICAgZ2VuZXJhdGVQcmlvcml0eU9wdGlvbnMob3JnYW5pemVyVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkc2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG91clJhZGlvQnV0dG9ucygpIHtcclxuICAgIC8qIEFkZCB0aGUgcmFkaW8gYnV0dG9uIG9wdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3VyT3B0aW9ucygpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKENvbG91cnMpLmZvckVhY2goY29sb3VyVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb2xvdXIga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cktleSA9IE9iamVjdC5rZXlzKENvbG91cnMpLmZpbmQoa2V5ID0+IENvbG91cnNba2V5XSA9PT0gY29sb3VyVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElEXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbklEID0gXCJjb2xvdXItXCIgKyBjb2xvdXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5pZCA9IG9wdGlvbklEO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJjb2xvdXItcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBcImNvbG91clwiO1xyXG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gY29sb3VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJhZGlvSW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvdXJWYWx1ZTtcclxuICAgICAgICAgICAgcmFkaW9JbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG91clZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZGQgY2hlY2tlZCB0byBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICBpZiAoY29sb3VyVmFsdWUgPT09IERlZmF1bHRDb2xvdXIpIHtcclxuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBMYWJlbFxyXG4gICAgICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29sb3VyS2V5O1xyXG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IG9wdGlvbklEO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gICAgICAgICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbG91ckZpZWxkLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpZWxkc2V0XHJcbiAgICBjb25zdCBjb2xvdXJGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb2xvdXJGaWVsZC5jbGFzc0xpc3QuYWRkKFwiY29sb3VyLWZpZWxkc2V0XCIpO1xyXG5cclxuICAgIC8vIEFwcGVuZGluZyBlbGVtZW50c1xyXG4gICAgZ2VuZXJhdGVDb2xvdXJPcHRpb25zKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG91ckZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVJhZGlvQnV0dG9ucywgZ2VuZXJhdGVQcmlvcml0eVJhZGlvQnV0dG9ucywgZ2VuZXJhdGVDb2xvdXJSYWRpb0J1dHRvbnMgfSIsIi8qIENyZWF0ZSBhIGRsYWJlbCBmb3IgYSBmb3JtIGZpZWxkICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTGFiZWwoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGZvcm1GaWVsZC5sYWJlbFRleHQ7XHJcbiAgICBmaWVsZExhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xyXG4gICAgZmllbGRMYWJlbC5mb3IgPSBmb3JtRmllbGQuaWQ7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkTGFiZWw7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIHRpdGxlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUZpZWxkKGZvcm1GaWVsZCkge1xyXG4gICAgLy8gSW5wdXRcclxuICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmaWVsZElucHV0LnR5cGUgPSBmb3JtRmllbGQuaW5wdXRUeXBlO1xyXG4gICAgZmllbGRJbnB1dC5pZCA9IGZvcm1GaWVsZC5pZDtcclxuICAgIGZvcm1GaWVsZC5jbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBmaWVsZElucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG4gICAgZmllbGRJbnB1dC5uYW1lID0gZm9ybUZpZWxkLmlucHV0TmFtZTtcclxuICAgIGZpZWxkSW5wdXQubWF4TGVuZ3RoID0gZm9ybUZpZWxkLm1heExlbmd0aDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRJbnB1dDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgZGVzY3JpcHRpb24gZm9ybSBmaWVsZCAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChmb3JtRmllbGQuaW5wdXRUeXBlKTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBmaWVsZElucHV0Lm1heExlbmd0aCA9IGZvcm1GaWVsZC5tYXhMZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59ICAgXHJcblxyXG4vKiBDcmVhdGUgYSBkYXRlIGZvcm0gZmllbGQgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEYXRlRmllbGQoZm9ybUZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmllbGRJbnB1dC50eXBlID0gZm9ybUZpZWxkLmlucHV0VHlwZTtcclxuICAgIGZpZWxkSW5wdXQuaWQgPSBmb3JtRmllbGQuaWQ7XHJcbiAgICBmb3JtRmllbGQuY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgZmllbGRJbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkSW5wdXQubmFtZSA9IGZvcm1GaWVsZC5pbnB1dE5hbWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmaWVsZElucHV0O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBzZXQgYSBzZXQgb2YgdGV4dCBmaWVsZHMgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUZXh0RmllbGRzKGZpZWxkcywgcGFyZW50KSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVMYWJlbChmb3JtRmllbGQpKTtcclxuICAgICAgICBpZiAoZm9ybUZpZWxkLmlucHV0TmFtZSA9PT0gIFwidGl0bGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRpdGxlRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRlc2NcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURlc2NyaXB0aW9uRmllbGQoZm9ybUZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1GaWVsZC5pbnB1dE5hbWUgPT09ICBcImRhdGVcIikge1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURhdGVGaWVsZChmb3JtRmllbGQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVUYXNrcyBmcm9tIFwiLi90YXNrc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVBY3Rpb25CdXR0b25zIGZyb20gXCIuLi91dGlsaXR5L2FjdGlvbkJ1dHRvbnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZW51bXMvYWN0aW9uQnV0dG9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tIFwiLi4vZm9ybXMvZm9ybUdlbmVyYXRvci5qc1wiO1xyXG5cclxuLyogQ3JlYXRlIHRoZSBwYWdlIHNob3dpbmcgYWxsIGluZm8gZm9yIGEgc2VsZWN0ZWQgcHJvamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0KSB7XHJcbiAgICAvKiBDcmVhdGUgdGhlIGhlYWRlciBkaXNwbGF5aW5nIHByb2plY3QgaW5mbyBhbmQgYWN0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIocHJvamVjdCkge1xyXG4gICAgICAgIC8qIERpc3BsYXkgcHJvamVjdCBkZXRhaWxzICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItdGl0bGVcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXJJbmZvLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlckluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ1JFQVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgVGFza1wiLCBldmVudDogZm9ybXMucmVuZGVyQ3JlYXRlVGFza0Zvcm19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuQ09MT1VSXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGFpbnQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQ29sb3VyIFByb2plY3RcIiwgZXZlbnQ6IGZvcm1zLnJlbmRlckNvbG91clBpY2tlckZvcm19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuRURJVCwgXCJlZGl0LXByb2plY3RcIl0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCIsIGV2ZW50OiBmb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5ERUxFVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFByb2plY3RcIiwgZXZlbnQ6IGZvcm1zLnJlbmRlckRlbGV0ZUZvcm19LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIExpbmsgdG8gcHJvamVjdFxyXG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuZ2V0UHJvamVjdElEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHByb2plY3RCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgbGlzdCBvZiB0YXNrcyBhbmQgdGhlaXIgc3RlcHMgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3QtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBJbmNvbXBsZXRlIHRhc2tzIHNlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgdG9kb1NlY3Rpb25EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHRvZG9TZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIlxyXG4gICAgICAgIHRvZG9TZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBpbmNvbXBsZXRlIHRhc2tzXHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb25EaXZpZGVyKTtcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tzKHByb2plY3QuZ2V0VGFza3MoKSkpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0ZWQgdGFza3Mgc2VjdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCJcclxuICAgICAgICBjb21wbGV0ZWRTZWN0aW9uRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1kaXZpZGVyXCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRTZWN0aW9uRGl2aWRlcik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrcyhwcm9qZWN0LmdldENvbXBsZXRlZFRhc2tzKCkpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZGluZyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKHByb2plY3QpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkpO1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2Ygc3RlcHMgZm9yIGEgdGFzayAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXBzKHN0ZXBzKSB7XHJcbiAgICAvKiBDcmVhdGUgYSBzdGVwIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3RlcChzdGVwKSB7XHJcbiAgICAgICAgLy8gU3RlcCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBzdGVwQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkVESVQsIFwiZWRpdC1zdGVwXCJdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkVkaXQgVGFza1wiLCBldmVudDogZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm19LFxyXG4gICAgICAgICAgICB7Y2xhc3NOYW1lczogW0FjdGlvbnMuREVMRVRFXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBUYXNrXCIsIGV2ZW50OiBmb3Jtcy5yZW5kZXJEZWxldGVGb3JtfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHN0ZXBJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICBzdGVwSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgc3RlcC5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgc3RlcEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHN0ZXAuZ2V0VGFza0lEKCkpO1xyXG4gICAgICAgIHN0ZXBJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcC1pZFwiLCBzdGVwLmdldFN0ZXBJRCgpKTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBJbmZvcm1hdGlvblxyXG4gICAgICAgIGNvbnN0IHN0ZXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RlcEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtLWluZm9cIik7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRpb24gQ2hlY2tib3hcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3RlcEluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBTdGVwIERldGFpbHNcclxuICAgICAgICBjb25zdCBzdGVwRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0ZXBEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJzdGVwLWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgY29uc3Qgc3RlcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIHN0ZXBUaXRsZS50ZXh0Q29udGVudCA9IHN0ZXAuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIEJ1dHRvbnMgZm9yIFN0ZXBzXHJcbiAgICAgICAgY29uc3Qgc3RlcEFjdGlvbkJ1dHRvbnMgPSBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMoc3RlcEJ1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBzdGVwRGV0YWlscy5hcHBlbmRDaGlsZChzdGVwVGl0bGUpO1xyXG5cclxuICAgICAgICBzdGVwSW5mby5hcHBlbmRDaGlsZChzdGVwRGV0YWlscyk7XHJcblxyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBJbmZvKTtcclxuICAgICAgICBzdGVwSXRlbS5hcHBlbmRDaGlsZChzdGVwQWN0aW9uQnV0dG9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGVwSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGVwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHN0ZXBMaXN0LmNsYXNzTGlzdC5hZGQoXCJzdGVwLWxpc3RcIik7XHJcblxyXG4gICAgLy8gQWRkIGFsbCBzdGVwcyB0byB0aGUgbGlzdFxyXG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBzdGVwTGlzdC5hcHBlbmRDaGlsZChnZW5lcmF0ZVN0ZXAoc3RlcCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0ZXBMaXN0O1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlU3RlcHMgZnJvbSBcIi4vc3RlcHNHZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi4vdXRpbGl0eS9hY3Rpb25CdXR0b25zXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VudW1zL2FjdGlvbkJ1dHRvbnNcIjtcclxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSBcIi4uL2Zvcm1zL2Zvcm1HZW5lcmF0b3IuanNcIjtcclxuXHJcbi8qIENyZWF0ZSBhIGxpc3Qgb2YgdGFza3MgZm9yIGEgcHJvamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tzKHRhc2tzKSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFwicHJpb3JpdHktXCIgKyB0YXNrLmdldFByaW9yaXR5KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiLCBwcmlvcml0eUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RHVlRGF0ZSgpIHx8IFwiTm8gRHVlIERhdGVcIjs7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrRGV0YWlscztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGlvbiBjaGVja2JveFxyXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94Lm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RJdGVtSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRhc2sgYnV0dG9ucyB0byBiZSBjcmVhdGVkXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5DUkVBVEVdLCBzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiQWRkIE5ldyBTdGVwXCIsIGV2ZW50OiBmb3Jtcy5yZW5kZXJDcmVhdGVTdGVwRm9ybX0sXHJcbiAgICAgICAgICAgIHtjbGFzc05hbWVzOiBbQWN0aW9ucy5FRElULCBcImVkaXQtdGFza1wiXSwgc3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIiwgZXZlbnQ6IGZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtfSxcclxuICAgICAgICAgICAge2NsYXNzTmFtZXM6IFtBY3Rpb25zLkRFTEVURV0sIHNyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJEZWxldGUgVGFza1wiLCBldmVudDogZm9ybXMucmVuZGVyRGVsZXRlRm9ybX0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIGluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuICAgICAgICAvLyBMaW5rIHRvIHRhc2tcclxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgdGFzay5nZXRQcm9qZWN0SUQoKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suZ2V0VGFza0lEKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpbmZvcm1hdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSk7XHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHRhc2tCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XHJcblxyXG4gICAgLy8gQWRkIGFsbCB0YXNrcyB0byB0aGUgbGlzdFxyXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhc2staXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhc2tcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUYXNrKHRhc2spKTtcclxuICAgICAgICAvLyBDcmVhdGUgc3RlcHNcclxuICAgICAgICBwcm9qZWN0VGFza0l0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdGVwcyh0YXNrLmdldFN0ZXBzKCkpKTtcclxuXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tJdGVtKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzIH0gZnJvbSBcIi4vc2lkZWJhclByb2plY3RzR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIC8vIExvZ29cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJUT0RPXCI7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIC8vIFNlY3Rpb24gaGVhZGVyXHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiTVkgUFJPSkVDVFNcIlxyXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1oZWFkaW5nXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgbGlzdFxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3RzLW1lbnVcIik7XHJcblxyXG4gICAgLy8gQWxsIHByb2plY3RzIGJ1dHRvblxyXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgLy8gQXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cywgcHJvamVjdHNMaXN0KTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcbn0iLCJcclxuLyogQ3JlYXRlIGEgc2lkZWJhciBtZW51IGl0ZW0gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFySXRlbSh0aXRsZSwgaWNvbkZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHNpZGViYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaWNvbkZ1bmN0aW9uKCkpO1xyXG4gICAgc2lkZWJhckl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuXHJcbiAgICByZXR1cm4gc2lkZWJhckl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaWNvbiBmb3IgYSBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEljb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcHJvamVjdEljb24udGV4dENvbnRlbnQgPSBcIuKXj1wiO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJY29uO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGljb24gZm9yIHRoZSBhbGwgcHJvamVjdHMgaWNvbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFByb2plY3RJY29uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICAgIC8vIEljb24gaW1hZ2VcclxuICAgIGNvbnN0IGljb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpY29uSW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ljb25zL3Byb2plY3RzLnN2Z1wiO1xyXG5cclxuICAgIC8vIEFwcGVuaW5nIGVsZW1lbnRzXHJcbiAgICBwcm9qZWN0SWNvbi5hcHBlbmRDaGlsZChpY29uSW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWNvbjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgcHJvamVjdCBidXR0b24gb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZ2VuZXJhdGVTaWRlYmFySXRlbShwcm9qZWN0LmdldFRpdGxlKCksIGdlbmVyYXRlUHJvamVjdEljb24pO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdC1idXR0b25cIik7XHJcbiAgICAvLyBMaW5rIHRvIHByb2plY3RcclxuICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmdldFByb2plY3RJRCgpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhbiBhbGwgcHJvamVjdHMgYnV0dG9uIG9uIHRoZSBzaWRlYmFyICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQWxsUHJvamVjdHNCdXR0b24oKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGdlbmVyYXRlU2lkZWJhckl0ZW0oXCJBbGwgUHJvamVjdHNcIiwgZ2VuZXJhdGVBbGxQcm9qZWN0SWNvbik7XHJcbiAgICBhbGxQcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWxsLXByb2plY3RzLWJ1dHRvblwiKTtcclxuICAgIHJldHVybiBhbGxQcm9qZWN0c0J1dHRvbjtcclxufVxyXG5cclxuLyogRGlzcGxheSBhbGwgcHJvamVjdHMgb24gdGhlIHNpZGViYXIgKi9cclxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3RzLCBwYXJlbnQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFsbFByb2plY3RzQnV0dG9uKCkpO1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RCdXR0b24ocHJvamVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBZGQgYSBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gYWRkU2lkZWJhclByb2plY3QocHJvamVjdCkge1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyUHJvamVjdChwcm9qZWN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdCgpIHtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNpZGViYXJQcm9qZWN0KCkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyU2lkZWJhclByb2plY3RzLCBhZGRTaWRlYmFyUHJvamVjdCwgZWRpdFNpZGViYXJQcm9qZWN0LCByZW1vdmVTaWRlYmFyUHJvamVjdCB9IiwiLyogQ3JlYXRlcyB0aGUgYWN0aW9uIGJ1dHRvbnMgZm9yIGEgb3JnYW5pemVyICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9uQnV0dG9ucyhidXR0b25zKSB7XHJcbiAgICBjb25zdCBhY3Rpb25CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBhY3Rpb25CdG5zLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnRuc1wiKTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGJ1dHRvbnNcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIC8vIEJ1dHRvbiBjb250YWluZXJcclxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb25cIiwgXCJhY3Rpb24tYnRuXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBCdXR0b25cclxuICAgICAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5zcmMgPSBidG4uc3JjO1xyXG4gICAgICAgIGFjdGlvbkJ0bi5hbHQgPSBidG4uYWx0O1xyXG4gICAgICAgIGFjdGlvbkJ0bi50aXRsZSA9IGJ0bi50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9uIGFjdGlvblxyXG4gICAgICAgIGFjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZVxyXG4gICAgICAgICAgICBidG4uZXZlbnQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcCB9IGZyb20gXCIuL21vZGVscy9vcmdhbml6ZXJzL3N0ZXBcIjtcclxuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tIFwiLi9wYWdlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2luZGV4LmpzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKTtcclxuXHJcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG5jb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKTtcclxuXHJcbi8vIFdvcmsgcHJvamVjdC90YXNrcy9zdGVwc1xyXG5jcmVhdGVQcm9qZWN0KFwiV29yayBNZWV0aW5nc1wiLCBcIkFsbCB0aGluZ3Mgd29yayBtZWV0aW5nIHJlbGF0ZWQhXCIpO1xyXG5cclxuY29uc29sZS5sb2coXCJZb29vXCIsIGdldFByb2plY3RzKCkpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzBdLCBcIk1vbmRheSBNZWV0aW5nc1wiLCBcIkFsbCBtb25kYXkgd29yayBtZWV0aW5nc1wiLCBcIlwiLCBcIk1lZFwiKTtcclxuY29uc29sZS5sb2coXCJZb28wMDAwMDAwMDAwMDAwMDBvXCIsIGdldFByb2plY3RzKCkpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMF0uZ2V0VGFza3MoKVswXSwgXCJNb3JuaW5nIE1lZXRpbmdcIik7XHJcbmNyZWF0ZVN0ZXAoZ2V0UHJvamVjdHMoKVswXS5nZXRUYXNrcygpWzBdLCBcIkFmdGVybm9vbiBNZWV0aW5nXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzBdLCBcIlByZXNlbnRhdGlvblwiLCBcIkFsbCB3b3JrIHByZXNlbnRhdGlvbnNcIiwgXCJcIiwgXCJOb25lXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMF0uZ2V0VGFza3MoKVsxXSwgXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIpO1xyXG5jcmVhdGVTdGVwKGdldFByb2plY3RzKClbMF0uZ2V0VGFza3MoKVsxXSwgXCJDaGVjayByZXBvcnQgZHJhZnQgZm9yIHR5cG9zXCIpO1xyXG5cclxuLy8gU2Nob29sIHByb2plY3QvdGFza3Mvc3RlcHNcclxuY3JlYXRlUHJvamVjdChcIlNjaG9vbFwiLCBcIkFsbCB0aGluZ3Mgc2Nob29sIHJlbGF0ZWQhXCIpO1xyXG5cclxuY3JlYXRlVGFzayhnZXRQcm9qZWN0cygpWzFdLCBcIlByZXNlbnRhdGlvbnNcIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiKTtcclxuY3JlYXRlU3RlcChnZXRQcm9qZWN0cygpWzFdLmdldFRhc2tzKClbMF0sIFwiSG9tZXdvcmtcIik7XHJcblxyXG5kaXNwbGF5LnJlbmRlclNpZGViYXIoZ2V0UHJvamVjdHMoKSk7XHJcbmRpc3BsYXkuZm9ybXMuZ2VuZXJhdGVGb3JtTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJDcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4vLyBkaXNwbGF5LmZvcm1zLnJlbmRlckNyZWF0ZVRhc2tGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ3JlYXRlU3RlcEZvcm0oKTtcclxuLy8gZGlzcGxheS5mb3Jtcy5yZW5kZXJEZWxldGVGb3JtKCk7XHJcbi8vIGRpc3BsYXkuZm9ybXMucmVuZGVyQ29sb3VyUGlja2VyRm9ybSgpO1xyXG5kaXNwbGF5LnJlbmRlckFsbFByb2plY3RzUGFnZShnZXRQcm9qZWN0cygpKTtcclxuLy8gZGlzcGxheS5yZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0c1sxXSk7XHJcbmNyZWF0ZVNpZGViYXJMaXN0ZW5lcnMoZ2V0UHJvamVjdHMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9