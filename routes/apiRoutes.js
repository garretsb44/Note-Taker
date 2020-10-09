const noteArray = require("../Develop/db/db.json");

// This module exports a function which accepts an Express app object and
// and sets up the api routes.
module.exports = function (app) {
    //
    // Below code handles when users "visit" a page. In each of the below cases
    // when a user visits a link (ex: localhost:PORT/api/admin... they are shown a
    // JSON of the data in the table)
    app.get("/api/notes", (req, res) => {
      res.json(noteArray);
    });
  
   app.post("/api/notes", (req, res) => {
     
    });
  
 
    app.delete("/api/notes/:id", (req, res) => {
     
        });
};