import "./style.css";
import { createDefaultProject, createProject } from "./handlers/organizers/project";
import { renderSidebarProjects } from "./handlers/display";

const projects = []
projects.push(createDefaultProject());
projects.push(createProject("Work", "All things work related!", "2021-11-7", "High", "TODO"));
projects.push(createProject("School", "All things school related!", "2021-11-7", "High", "TODO"));

console.log(projects);
renderSidebarProjects(projects);