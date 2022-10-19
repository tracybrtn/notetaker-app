//import functions and data
const router = require('express').Router();
const noteDb = require('../../db/db.json');
const { createNote } = require('../../lib/notes');

// get function imports db.json data
router.get('/notes', (req, res) => {
    let results = noteDb;
    res.json(results);
});

//post function that writes into db.json file
router.post('/notes', (req, res) => {
    let note = createNote(req.body, noteDb);
    res.json(note);
});

//delete function 
//router.delete('/notes/:id', (req, res) => {
    //should receive a query parameter containing the id of a note to delete
    // you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file

//})

module.exports = router;