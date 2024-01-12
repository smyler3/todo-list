function createActionButtonListener(btn, eventFunction) {
    btn.addEventListener("click", (e) => {
        eventFunction();        
        e.stopPropagation();
    });
}

export { createActionButtonListener }