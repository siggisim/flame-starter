import express from 'express';
import * as http from 'http';

import handleApiRequest from './handler/handle_api';

const port = process.env.PORT || 80;

function handleServerLoaded() {
  console.log(`Server is running at: http://localhost:${port}/`);
}

var app = express()
  .use('/', express.static('static'))
  .use('/app', express.static('app'))
  .get('/api', handleApiRequest);

var server = new http.Server(app)
  .listen(port, handleServerLoaded);
