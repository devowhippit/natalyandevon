/**
 * Dependencies
 */
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const static = path.join(__dirname, '../deploy/');
const views = path.join(__dirname, 'site/');
const engine = 'twig';
const livereload = require('express-livereload');
const livereloadConfig = {};


/**
 * Functions
 */
function fnGet(request, resolve) {

  resolve.render(request.params[0]);

}

function fnListenCallback() {

  let p = app.get('port');

  console.log(`Listening on port ${p}!`);

}


/**
 * Init
 */
app.set('views', views); // set the views directory
app.set('view engine', engine); // set the template engine
app.set('port', port); // set the port
app.use(express.static(static)); // choose the static file directory
app.get('/*', fnGet); // request handler
app.listen(app.get('port'), fnListenCallback); // set the port to listen on


