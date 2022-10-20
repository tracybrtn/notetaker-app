const router = require('express').Router();

//import noteRoutes into index
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

module.exports = router;