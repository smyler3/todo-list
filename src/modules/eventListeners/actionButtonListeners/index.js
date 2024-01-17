/* Attach an event listener to an action button */
function createActionButtonListener(btn, eventFunction) {
    btn.addEventListener("click", (e) => {
        eventFunction();        
        e.stopPropagation();
    });
}

export { createActionButtonListener }