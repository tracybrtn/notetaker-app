//include packages
const path = require('path');
const router = require('express').Router();

//CONNECT SERVER WITH HTML
//Landing page  
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

//Notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

//anything else should return to the landing page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;