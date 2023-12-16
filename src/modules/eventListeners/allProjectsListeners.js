import { createProjectPageNavigationListeners } from "./utility/projectNavigationListeners";
import createDeleteButtonListeners from "./utility/actionButtonListeners";

export default function createAllProjectsListeners(projects) {
    createProjectPageNavigationListeners(projects, ".project-card");
    createDeleteButtonListeners();
}