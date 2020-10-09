let db = require("../db/db.json");
const fs = require("fs");
const shortid = require('shortid');
const path = require("path");

// This module exports a function which accepts an Express app object and
// and sets up the api routes.
module.exports = function (app) {
    //
    // Below code handles when users "visit" a page. In each of the below cases
    // when a user visits a link (ex: localhost:PORT/api/admin... they are shown a
    // JSON of the data in the table)
    app.get("/api/notes", (req, res) => {
      res.json(db);
    });
  
   app.post("/api/notes", (req, res) => {
     let newNote = {
         id: shortid.generate(),
         title: req.body.title,
         text: req.body.text,
     };
     db.push(newNote);
     fs.writeFileSync(path.join(__dirname,"../db/db.json"), JSON.stringify(db));
     res.json(db);
    });
  
 
    app.delete("/api/notes/:id", (req, res) => {
     db = db.filter((note) => {
        if (note.id !== req.params.id)
     });
        });
};