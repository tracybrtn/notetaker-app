//import functions and data
const router = require('express').Router();
const noteDb = require('../../db/db.json');
const { createNote, deleteNote } = require('../../lib/notes');

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

//delete function that deletes entries by their id in the db.json file
router.delete('/notes/:id', (req, res) => {
    deleteNote(noteDb, req.params.id);
    res.json(noteDb)
})

module.exports = router;