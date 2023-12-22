import "./style.css";
import { createDefaultProject, createProject, getProjects } from "./models/organizers/project";
import { createTask } from "./models/organizers/task";
import { createStep } from "./models/organizers/step";
import * as display from "./pages/display";
import { createSidebarListeners } from "./modules/eventListeners/index.js";

console.log(getProjects());

createDefaultProject();

console.log(getProjects());

// Work project/tasks/steps
createProject("Work Meetings", "All things work meeting related!");

console.log("Yooo", getProjects());

createTask(getProjects()[0], "Monday Meetings", "All monday work meetings", "", "Med");
console.log("Yoo000000000000000o", getProjects());
createStep(getProjects()[0].getTasks()[0], "Morning Meeting");
createStep(getProjects()[0].getTasks()[0], "Afternoon Meeting");

createTask(getProjects()[0], "Presentation", "All work presentations", "", "None");
createStep(getProjects()[0].getTasks()[1], "Generate Financial Graphs");
createStep(getProjects()[0].getTasks()[1], "Check report draft for typos");

// School project/tasks/steps
createProject("School", "All things school related!");

createTask(getProjects()[1], "Presentations", "All work presentations", "", "High");
createStep(getProjects()[1].getTasks()[0], "Homework");

display.renderSidebar(getProjects());
display.forms.generateFormModal(document.querySelector(".content"));
// display.forms.renderCreateProjectForm();
// display.forms.renderCreateTaskForm();
// display.forms.renderCreateStepForm();
// display.forms.renderDeleteForm();
// display.forms.renderColourPickerForm();
display.renderAllProjectsPage(getProjects());
// display.renderProjectPage(projects[1]);
createSidebarListeners(getProjects());