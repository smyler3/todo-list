import { createProjectPageNavigationListeners } from "./utility/projectNavigationListeners";

export default function createAllProjectsListeners(projects) {
    createProjectPageNavigationListeners(projects, ".project-card");
}