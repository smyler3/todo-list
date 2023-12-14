import renderSidebar from "./sidebar";
import renderProjectPage from "./projectPage";
import renderAllProjectsPage from "./allProjectsPage";
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

export { 
    renderSidebar, 
    renderProjectPage, 
    renderAllProjectsPage,
    forms,
    clearPage,
}