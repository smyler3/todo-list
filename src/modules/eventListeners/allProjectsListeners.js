import { createProjectPageNavigationListeners } from "./utility/projectNavigationListeners";
import { createDeleteButtonListeners, createEditProjectButtonListeners, createColourButtonListeners } from "./utility/actionButtonListeners";

export default function createAllProjectsListeners(projects) {
    createProjectPageNavigationListeners(projects, ".project-card");
    createColourButtonListeners();
    createEditProjectButtonListeners();
    createDeleteButtonListeners();
}