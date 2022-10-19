//import functions and data
const router = require('express').Router();
const notes = require('../../db/db.json');


// get function imports db.json data
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

// router.post('/notes', (req, res) => {
// //receive a new note to save on the request body
// //add it to the db.json file
// //and then return the new note to the client.
// //each note should have a unique id
// })

// router.delete('/notes/:id', (req, res) => {

// })

module.exports = router;