'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('knex');
const path = require('path');
const bodyParser = require('body-parser');
const server = require("http").Server(app);

app.use(express.static(path.join('public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Specify node modules, and the public folder.
app.use(express.static(path.join(__dirname, 'public')));

const resource = require('./routes/resource');

app.use('/api/resource', resource);

// Wildcard Route, Sends the Index back incase of someone being where they shouldn't.
app.use('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Straight up, error handling. Not just 404 specific.
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res.status(err.status).send(err);
  }
  res.sendStatus(500);
});

// App listener, just specifies port and the creation of the listener on that port.
server.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
