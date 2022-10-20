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
    return notesArr;
}

function deleteNote(notesArr, id) {
    for (let i = 0; i <notesArr.length; i++) {
        if (notesArr[i].id === id){
            notesArr.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr)
    );
}

module.exports = {
    createNote,
    deleteNote
};