// add dependencies
const fs = require('fs');
const path = require('path');

function createNote(body, notesArr){
    const note = body;
    //functionality WHEN I enter a new note title and the note’s text
        //THEN a Save icon appears in the navigation at the top of the page
    //WHEN I click on the Write icon in the navigation at the top of the page
        //THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
}

function saveNote(){
    //functionality WHEN I click on the Save icon
        //THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

}

function editNote(){
    //WHEN I click on an existing note in the list in the left-hand column
        //THEN that note appears in the right-hand column
}

function deleteNote(){

}

module.exports = {
    createNote,
    saveNote,
    editNote,
    deleteNote
};