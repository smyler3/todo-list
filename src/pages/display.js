import renderSidebar from "./sidebar";
import { editSidebarProjectColour } from "./sidebar/sidebarProjectsGenerator";
import { renderProjectPage, editProjectPageColour} from "./projectPage";
import { renderAllProjectsPage, editProjectCardColour } from "./allProjectsPage";
import * as forms from "./forms/formGenerator";

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

export { 
    renderSidebar, 
    editSidebarProjectColour,
    renderProjectPage,
    editProjectPageColour, 
    renderAllProjectsPage,
    editProjectCardColour,
    forms,
    clearPage,
    clearSidebar,
}