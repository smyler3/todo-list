import "./style.css";
import { createDefaultProject, createProject, addTask } from "./models/organizers/project";
import { createTask, addStep } from "./models/organizers/task";
import { createStep } from "./models/organizers/step";
import * as display from "./pages/display";

const projects = []
projects.push(createDefaultProject());

// Work project/tasks/steps
const work = createProject("Work Meetings", "All things work meeting related!");

createTask(work, "Monday Meetings", "All monday work meetings", "", "Med");
// const mornMeeting = createStep("Morning Meeting", "2023-12-10", "TODO");
// const arvoMeeting = createStep("Afternoon Meeting", "2023-12-10", "TODO");
// addStep(meetings, "Morning");
// addStep(meetings, arvoMeeting);

createTask(work, "Presentation", "All work presentations", "", "None");
// const graphs = createStep("Generate Financial Graphs", "2023-12-10", "TODO");
// const typos = createStep("Check report draft for typos", "2023-12-10", "TODO");
// addStep(presentations, graphs);
// addStep(presentations, typos);
// addTask(work, presentations);

// School project/tasks/steps
const school = createProject("School", "All things school related!");
createTask(school, "Presentation", "All work presentations", "", "High");
// addTask(school, homework);

projects.push(work);
projects.push(school);

console.log(projects);
display.renderSidebar(projects);
// display.renderForm(display.renderCreateProjectForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateTaskForm, document.querySelector(".content-body"));
// display.renderForm(display.renderCreateStepForm, document.querySelector(".content-body"));
// display.renderForm(display.renderDeleteForm, document.querySelector(".content-body"));
// display.renderForm(display.renderColourPickerForm, document.querySelector(".content-body"));
display.renderProjectPage(projects[1]);
// display.renderAllProjectsPage(projects);

projects.forEach(project => {
    console.log(project);
})