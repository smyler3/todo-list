import "./style.css";
import { createDefaultProject, createProject } from "./models/organizers/project";
import { createTask } from "./models/organizers/task";
import { createStep } from "./models/organizers/step";
import * as display from "./pages/display";
import { createSidebarProjectListeners } from "./modules/eventListeners";

const projects = []
projects.push(createDefaultProject());

// Work project/tasks/steps
const work = createProject("Work Meetings", "All things work meeting related!");

createTask(work, "Monday Meetings", "All monday work meetings", "", "Med");
createStep(work.getTasks()[0], "Morning Meeting");
createStep(work.getTasks()[0], "Afternoon Meeting");

createTask(work, "Presentation", "All work presentations", "", "None");
createStep(work.getTasks()[1], "Generate Financial Graphs");
createStep(work.getTasks()[1], "Check report draft for typos");

// School project/tasks/steps
const school = createProject("School", "All things school related!");

createTask(school, "Presentations", "All work presentations", "", "High");
createStep(school.getTasks()[0], "Homework");

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
createSidebarProjectListeners(projects);

projects.forEach(project => {
    console.log(project);
})