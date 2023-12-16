import { renderAllProjectsPage, clearPage } from "../../pages/display.js";
import { createProjectPageNavigationListeners } from "./utility.js";

/* Make the all projects sidebar button link to the all projects page */
function createAllProjectsButtonListener(projects) {
    const allProjectsButton = document.querySelector(".all-projects-button");

    allProjectsButton.addEventListener("click", () => {
        clearPage();
        renderAllProjectsPage(projects);
    })
}

/* Give all sidebar project buttons functionality */
export default function createSidebarListeners(projects) {
    createAllProjectsButtonListener(projects);
    createProjectPageNavigationListeners(projects, ".sidebar-project-button");
}