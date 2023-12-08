import "./style.css";
import { createDefaultProject, createProject, addTask } from "./handlers/organizers/project";
import { createTask, addStep } from "./handlers/organizers/task";
import { createStep } from "./handlers/organizers/step";
import { renderSidebarProjects } from "./handlers/display";

const projects = []
projects.push(createDefaultProject());

// Work project/tasks/steps
const work = createProject("Work Meetings", "All things work meeting related!", "", "High", "TODO");
const meetings = createTask("Monday Meetings", "All monday work meetings", "", "Med", "TODO");
const mornMeeting = createStep("Morning Meeting", "2023-12-10", "TODO");
const arvoMeeting = createStep("Afternoon Meeting", "2023-12-10", "TODO");
addStep(meetings, mornMeeting);
addStep(meetings, arvoMeeting);
addTask(work, meetings);

// School project/tasks/steps
const school = createProject("School", "All things school related!", "2021-11-7", "High", "TODO");

projects.push(work);
projects.push(school);

console.log(projects);
renderSidebarProjects(projects);