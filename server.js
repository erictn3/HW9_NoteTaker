// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require('express');
const path = require('path');


// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server AKA init express
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ROUTES HERE
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.post('/notes', (req, res) => {
  const newNotes = req.body;
  currentNotes.push(newNotes);
  res.json(newNotes);
});

// Starts our server and listens to port
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

