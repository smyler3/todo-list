import { renderProjectPage, clearPage, renderDeleteForm } from "../../../pages/display.js";
import { setCurrentProject } from "../../../models/organizers/project.js";
import { Actions } from "../../../models/enums/actionButtons.js";

/* Make a group of project navigation DOM elements link to their project page */
function createProjectPageNavigationListeners(projects, className) {
    const projectNavElements = document.querySelectorAll(className);

    // Link each project navigation element to a project page
    projectNavElements.forEach(element => {
        projects.forEach(project => {
            if (String(project.getProjectID()) === element.getAttribute("data-project-id")) {
                element.addEventListener("click", () => {
                    clearPage();
                    renderProjectPage(project);
                    setCurrentProject(project);
                })
            }
        })
    })
}

export { createProjectPageNavigationListeners }