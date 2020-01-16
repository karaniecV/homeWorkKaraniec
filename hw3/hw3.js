function UI() {
    this.title = document.querySelector('.title');
    this.body = document.querySelector('.body');
    this.addNoteBtn = document.querySelector('.add_note');
    this.deliteNoteBtn = document.querySelector('.delite_note');
    this.showNoteBtn = document.querySelector('.show_notes');
    this.showListBtn = document.querySelector('.show_list');
    this.arrTitles = [];
    this.arrNotes = [];
    this.list = document.getElementById('list');
}


UI.prototype.createNote = function () {
    const titleVal = this.title.value;
    const bodyVal = this.body.value;
    const hgty = this.arrNotes.find((item) => {
        return item.id === titleVal;
        });
        console.log(hgty);
    if (hgty){
        alert('Input new title please!')
        return false;
    }

    const newNote = {
        id: this.title.value,
        note: `${titleVal} : ${bodyVal}`,
    };
    this.title.value = '';
    this.body.value = '';

    this.arrNotes.push(newNote);
    this.arrTitles.push(titleVal);
    this.addNote(newNote);
}

UI.prototype.addNote = function (newNote) {
    const li = document.createElement('li');
    this.list.append(li);
    li.innerHTML = `<div class="expense-amount mb-0 list-item" id = ${newNote.id}>${newNote.note}</div>`
}

UI.prototype.createList = function () {
    alert(`Your note list: ${this.arrTitles}`)
}

UI.prototype.showNote = function () {
    const titleVal = this.title.value;
    if (titleVal === '') {
        alert('Enter title!');
        return false;
    }
    const id = this.arrNotes.find((item) => {
        return item.id === titleVal;
    });
    alert(id.note);
}

UI.prototype.deliteNote = function () {
    const titleVal = this.title.value;
    if (titleVal === '') {
        alert('Enter title!');
        return false;
    }
    this.arrNotes = this.arrNotes.filter((item) => {
        return item.id !== titleVal;
    });

    this.removeOldNotes();
    this.arrNotes.forEach((item) => {
        this.addNote(item);
        });
        this.title.value = '';

}
UI.prototype.removeOldNotes = function () {
    list.innerHTML = '';
}
