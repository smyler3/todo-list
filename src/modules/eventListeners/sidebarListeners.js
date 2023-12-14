import { renderProjectPage, renderAllProjectsPage, clearPage } from "../../pages/display.js";

/* Make the all projects sidebar button link to the all projects page */
function createAllProjectsButtonListener(projects) {
    const allProjectsButton = document.querySelector(".all-projects-button");
    console.log(allProjectsButton);

    allProjectsButton.addEventListener("click", () => {
        clearPage();
        console.log("YEAH", projects);
        renderAllProjectsPage(projects);
    })
}

/* Make all project sidebar buttons link to their project page */
function createProjectButtonListeners(projects) {
    const projectButtons = document.querySelectorAll(".sidebar-project-button");

    // Link each sidebar project button to a project page
    projectButtons.forEach(button => {
        projects.forEach(project => {
            if (String(project.getProjectID()) === button.getAttribute("data-project-id")) {
                button.addEventListener("click", () => {
                    clearPage();
                    renderProjectPage(project);
                })
            }
        })
    })
}

/* Give all sidebar project buttons functionality */
function createSidebarProjectListeners(projects) {
    createAllProjectsButtonListener(projects);
    createProjectButtonListeners(projects);
}

export { createSidebarProjectListeners }