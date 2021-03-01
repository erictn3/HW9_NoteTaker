// model after act 15 hot restaurant app 
// connect to server.js act 15 in week 11
// CRUD method
const store = require('../db/store');
const router = require('express').Router();


// GET "/api/notes" responds with all notes from the database
router.get('api/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  store
    console.log('yup')
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;
