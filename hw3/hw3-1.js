
function eventListeners() {
    const ui = new UI();

    ui.addNoteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        ui.createNote();
    })
    ui.showListBtn.addEventListener('click', (event) => {
        event.preventDefault();
        ui.createList();
    })
    ui.showNoteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        ui.showNote();
    })
    ui.deliteNoteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        ui.deliteNote();
    })
}

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
  });