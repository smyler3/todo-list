// Updates the data stored in the local environment
function saveProjectsToLocalStorage(newProjects) {
    localStorage.setItem("projects", JSON.stringify(newProjects));
}

// Fetches the data stored in the local environemnt
function loadProjectsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("projects"));
}

export { saveProjectsToLocalStorage, loadProjectsFromLocalStorage }