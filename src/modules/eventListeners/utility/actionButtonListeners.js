import { forms } from "../../../pages/display";
import { Actions } from "../../../models/enums/actionButtons";

export default function createDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll("." + Actions.DELETE);
    console.log(deleteButtons);

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            forms.renderDeleteForm();
            alert("You Sure?");
            e.stopPropagation();
        })
    })
}