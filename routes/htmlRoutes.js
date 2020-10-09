const path = require("path");

// Similar to the apiRoute.js module, this module also exports a function which
// accepts an Express app object and sets up routes. This function adds routes
// for serving the html files.
module.exports = function (app) {
  // Below code handles when users navigate to a page. (e.g. follow a link or
  // enter a url in the address bar) The client receives an HTML document to
  // show the user as a response for each of these routes.
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

};
