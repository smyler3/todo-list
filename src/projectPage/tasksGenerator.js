import generateSteps from "./stepGenerator";
import generateActionButtons from "./actionButtons";

/* Create a list of tasks for a project */
export default function generateTasks(tasks) {
    /* Create a task item */
    function generateTask(task) {
        /* Create the checkbox and details of the task */
        function generateTaskHeader(task) {
            /* Display information about the task */
            function generateTaskDetails(task) {
                const taskDetails = document.createElement("div");
                taskDetails.classList.add("project-list-task-details");
                
                const titleContainer = document.createElement("div");
                titleContainer.classList.add("project-title-container");

                // Title
                const taskTitle = document.createElement("h3");
                taskTitle.textContent = task.title;

                // Priority
                const taskPriority = document.createElement("p");
                taskPriority.textContent = task.priority;
                const priorityClass = "priority-" + task.priority.toLowerCase();
                taskPriority.classList.add("priority-text", priorityClass);

                // Description
                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.description;

                // Due date
                const taskDate = document.createElement("p");
                taskDate.textContent = task.dueDate || "No Due Date";;

                titleContainer.appendChild(taskTitle);
                titleContainer.appendChild(taskPriority);
                taskDetails.appendChild(titleContainer);
                taskDetails.appendChild(taskDescription);
                taskDetails.appendChild(taskDate);

                return taskDetails;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion Checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.classList.add("task-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            // Append Elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task Buttons to be created
        const taskButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        // Task Information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item");

        // Append Task Information Elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild(generateActionButtons(taskButtons));

        return taskItem;
    }

    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    // Add all tasks to the list
    tasks.forEach(task => {
        const projectTaskItem = document.createElement("li");
        projectTaskItem.classList.add("project-task-item");

        // Create task
        projectTaskItem.appendChild(generateTask(task));
        // Create steps
        projectTaskItem.appendChild(generateSteps(task.steps));

        taskList.appendChild(projectTaskItem);
    })

    return taskList;
}