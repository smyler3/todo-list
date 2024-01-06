import { renderProjectPage, clearPage } from "../../../pages/display.js";
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
                    setCurrentProject(project);
                    renderProjectPage(project);
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
                clearPage();
                setCurrentProject(project);
                renderProjectPage(project);
                return;
            })
        }
    })
}

export { createProjectPageNavigationListeners, addProjectNavigationListener }