import { renderSidebarProjects } from "./sidebarProjectsGenerator";

export default function renderSidebar(projects) {
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
    renderSidebarProjects(projects, projectsList);
    listContainer.appendChild(projectsList);
    sidebar.appendChild(listContainer);
}
{/* 
<h1 class="logo">TODO</h1>
<div>
    <h3 class="sidebar-heading">MY PROJECTS</h3>
    <ul class="sidebar-projects-menu">
    </ul>
</div>
*/}

// <div>
//     <h3 class="sidebar-heading">OPTIONS</h3>
//     <ul class="sidebar-menu">
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/today.svg" alt="" title="Add New Task"></span>
//             <p>Today</p>
//         </li>
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/upcoming.svg" alt="" title="Add New Task"></span>
//             <p>Upcoming</p>
//         </li>
//         <li class="sidebar-item">
//             <span class="icon organizer-btn"><img src="../src/assets/icons/completed.svg" alt="" title="Add New Task"></span>
//             <p>Completed</p>
//         </li>
//     </ul>
// </div>