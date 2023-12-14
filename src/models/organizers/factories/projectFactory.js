/* Creates a single instance of a project object */
export default function projectFactory(title, description, projectID) {
    let taskCount = 0;
    const tasks = [];
    const completedTasks = [];

    /* Returns task count and increments it */
    function getNextTaskCount() {
        const count = taskCount;
        taskCount++;
        
        return count;
    }

    function getTitle() {
        return title;
    }

    function setTitle(title) {
        this.title = title;
    }

    function getDescription() {
        return description;
    }
    
    function setDescription(description) {
        this.description = description;
    }

    function getTasks() {
        return tasks;
    }

    /* Add a task to the project */
    function addTask(task) {
        tasks.push(task);
    }

    /* Remove a task from the project */
    function removeTask(task) {
        tasks.array.forEach(taskElement => {
            if (task === taskElement) {
                tasks.push(taskElement);
            }
        });
    }

    function getCompletedTasks() {
        return completedTasks;
    }

    /* Add a completed task to the project */
    function addCompletedTask(task) {
        completedTasks.push(task);
    }

    /* Remove a task from the project */
    function removeCompletedTask(task) {
        completedTasks.array.forEach(taskElement => {
            if (task === taskElement) {
                completedTasks.push(taskElement);
            }
        });
    }

    function getProjectID() {
        return projectID;
    }

    return { 
        getTitle, setTitle, 
        getDescription, setDescription, 
        getTasks, addTask, removeTask, 
        getCompletedTasks, addCompletedTask, removeCompletedTask, 
        getProjectID,
        getNextTaskCount, 
    };
}