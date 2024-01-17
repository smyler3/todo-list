import renderSidebar from "./sidebar";
// import renderSidebar from "./sidebar.js"
import { editSidebarProjectTitle, editSidebarProjectColour } from "./sidebar/sidebarProjectsGenerator.js";
import { renderProjectPage, editProjectPageColour} from "./projectPage";
import { renderAllProjectsPage, editProjectCardColour } from "./allProjectsPage";
import * as forms from "./forms/formGenerator.js";

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

export { 
    renderSidebar, 
    editSidebarProjectColour,
    editSidebarProjectTitle,
    renderProjectPage,
    editProjectPageColour, 
    renderAllProjectsPage,
    editProjectCardColour,
    forms,
    clearPage,
    clearSidebar,
}