
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

export { renderSidebarProjects, addSidebarProject, editSidebarProject, removeSidebarProject }