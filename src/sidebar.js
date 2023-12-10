/* Create a project button on the sidebar */
function createSidebarProject(project) {
    const sidebarItem = document.createElement("li");
    sidebarItem.classList.add("sidebar-item", "sidebar-project-button");

    // Icon
    const projectIcon = document.createElement("span");
    projectIcon.textContent = "●";
    projectIcon.classList.add("icon", "project-icon");

    // Title
    const projectTitle = document.createElement("p");
    projectTitle.textContent = project.title;

    sidebarItem.appendChild(projectIcon);
    sidebarItem.appendChild(projectTitle);

    return sidebarItem;
}

/* Display all projects on the sidebar */
function renderSidebarProjects(projects) {
    for (let project of projects) {
        sidebar.appendChild(createSidebarProject(project));
    }
}

/* Add a project to the sidebar display */
function addSidebarProject(project) {
    sidebar.appendChild(createSidebarProject(project));
}

function removeSidebarProject() {

}

function editSidebarProject() {

}

const sidebar = document.querySelector(".sidebar-projects-menu");

export { renderSidebarProjects, addSidebarProject }