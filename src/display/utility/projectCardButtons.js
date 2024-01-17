import { projectColourButtonListener, projectDeleteButtonListener, projectEditButtonListener } from "../../common/eventListeners/actionButtonListeners/projectActionButtonListeners";
import { Actions } from "../../models/enums/actionButtons";

/* Creates the logic for the project card action buttons */
function generateProjectCardButtons(project) {
    // Project buttons to be created
    const projectCardButtons = [
        {classNames: [Actions.COLOUR], src: "../src/assets/icons/paint.svg", alt: "Colour Project Button", title: "Colour Project",
        event: () => {
            projectColourButtonListener(project);
        }},
        {classNames: [Actions.EDIT, "edit-project"], src: "../src/assets/icons/edit.svg", alt: "Edit Project Button", title: "Edit Project",
        event: () => {
            projectEditButtonListener(project);
        }},
        {classNames: [Actions.DELETE], src: "../src/assets/icons/delete.svg", alt: "Delete Project Button", title: "Delete Project",
        event: () => {
            projectDeleteButtonListener(project);
        }},
    ]

    return projectCardButtons;
}

export { generateProjectCardButtons }