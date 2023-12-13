import "./style.css";
import { createDefaultProject, createProject, addTask } from "./handlers/organizers/project";
import { createTask, addStep } from "./handlers/organizers/task";
import { createStep } from "./handlers/organizers/step";
import * as display from "./handlers/display";

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

const presentations = createTask("Presentation", "All work presentations", "", "None", "TODO");
const graphs = createStep("Generate Financial Graphs", "2023-12-10", "TODO");
const typos = createStep("Check report draft for typos", "2023-12-10", "TODO");
addStep(presentations, graphs);
addStep(presentations, typos);
addTask(work, presentations);

// School project/tasks/steps
const school = createProject("School", "All things school related!", "2021-11-7", "Low", "TODO");
const homework = createTask("Presentation", "All work presentations", "", "High", "TODO");
addTask(school, homework);

projects.push(work);
projects.push(school);

console.log(projects);
display.renderSidebarProjects(projects);
// display.renderForm(display.renderCreateProjectForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateTaskForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateStepForm, document.querySelector(".content-body"));
// display.renderForm(display.renderDeleteForm, document.querySelector(".content-body"));
// display.renderForm(display.renderColourPickerForm, document.querySelector(".content-body"));
display.renderProjectPage(projects[1]);