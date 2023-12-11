import { Priority, DefaultPriority } from "../handlers/enums/priority";

/* Create a set of radio buttons for the priority options */
export default function generatePriorityRadioButtons() {
    /* Add the radio button options */
    function generatePriorityOptions() {
        Object.values(Priority).forEach(priorityValue => {
            const radioContainer = document.createElement("div");
    
            // ID
            const optionID = "project-" + String.prototype.toLowerCase(priorityValue);
    
            // Input
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = optionID;
            radioInput.name = "priority";
            radioInput.value = priorityValue;
            // Add checked to default option
            if (priorityValue === DefaultPriority) {
                radioInput.checked = true;
            }
    
            // Label
            const radioLabel = document.createElement("label");
            radioLabel.textContent = priorityValue;
            radioLabel.for = optionID;
    
            // Append elements
            radioContainer.appendChild(radioInput);
            radioContainer.appendChild(radioLabel);
            fieldset.appendChild(radioContainer);
        })
    }
        
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");

    // Fieldset
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("priority-field");

    // Legend
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    legend.classList.add("form-label");

    // Appending elements
    fieldset.appendChild(legend);
    generatePriorityOptions();
    fieldContainer.appendChild(fieldset);

    return fieldContainer;
}