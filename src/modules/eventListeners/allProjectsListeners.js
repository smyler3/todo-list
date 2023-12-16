import { createProjectPageNavigationListeners } from "./utility";

export default function createAllProjectsListeners(projects) {
    createProjectPageNavigationListeners(projects, ".project-card");
}