import "./style.css";
import { createProject } from "./handlers/organizers/project";

const projects = []
projects.push(createProject("Work", "All things work related!", "2021-11-7", "High", "TODO"));
projects.push(createProject("School", "All things school related!", "2021-11-7", "High", "TODO"));

console.log(projects);