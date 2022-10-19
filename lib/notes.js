// add dependencies
const fs = require('fs');
const path = require('path');

//add uniqid so that each note has a unique id
const uniqid = require('uniqid');


function createNote(body, notesArr){
    const note = body;
    note.id = uniqid();
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr}, null, 2)
    );
    return note;
}

// function saveNote(){
//     //functionality WHEN I click on the Save icon
//         //THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

// }

// function editNote(){
//     //WHEN I click on an existing note in the list in the left-hand column
//         //THEN that note appears in the right-hand column
// }

// function deleteNote(){

// }

module.exports = {
    createNote
};