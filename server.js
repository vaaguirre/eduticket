const express = require('express');
const app = express();
const path = require('path');

// app.use(function(req, res, next) {
// if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
//     res.redirect('https://' + req.get('Host') + req.url);
// }
// else {
//     next();
// }
// });

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
var port = process.env.PORT || 8080
app.listen(port);
