function createFormSubmitButtonListener(btn, submitFunction, modal) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        submitFunction();
        modal.style.display = "none";
    });
}

function createFormCancelButtonListener(btn, modal) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
    });
}

export { createFormSubmitButtonListener, createFormCancelButtonListener }