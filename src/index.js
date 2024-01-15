import "./style.css";
import { createDefaultProject, createProject, deserializeProject, getCurrentProject, getProjects, setProjects } from "./models/organizers/project";
import { createTask } from "./models/organizers/task";
import { createStep } from "./models/organizers/step";
import * as display from "./pages/display";
import { createSidebarListeners } from "./modules/eventListeners/index.js";
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from "./modules/localStorage/index.js";

// Importing local storage
const storageData = loadProjectsFromLocalStorage();
// Load stored data
if (storageData !== null) {
    storageData.forEach(project => {
        deserializeProject(project);
    })
}
// Use default data
else {
    createDefaultProject();

    // Work project/tasks/steps
    createProject("Work Meetings", "All things work meeting related!");

    createTask(getProjects()[1], "Monday Meetings", "All monday work meetings", "", "Med");
    createStep(getProjects()[1].getIncompleteTasks()[0], "Morning Meeting");
    createStep(getProjects()[1].getIncompleteTasks()[0], "Afternoon Meeting");

    createTask(getProjects()[1], "Presentation", "All work presentations", "", "None");
    createStep(getProjects()[1].getIncompleteTasks()[1], "Generate Financial Graphs");
    createStep(getProjects()[1].getIncompleteTasks()[1], "Check report draft for typos");

    // School project/tasks/steps
    createProject("School", "All things school related!");

    createTask(getProjects()[2], "Presentations", "All work presentations", "", "High");
    createStep(getProjects()[2].getIncompleteTasks()[0], "Homework");
}


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