//import functions and data
const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNote } = require('../../lib/notes');

// get function imports db.json data
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

// post function that writes into db.json file
router.post('/notes', (req, res) => {
    let note = createNote(req.body, notes);
    res.json(note);
})

// router.delete('/notes/:id', (req, res) => {

// })

module.exports = router;