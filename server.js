import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import Views from './src/views.jsx';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use( express.static( path.resolve( __dirname, "./build/public") ) )

app.get('*', (req, res) => {

  const context = {}

  const content = renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <Views />
    </StaticRouter>
  );

  const html = `<html>
    <head>
    </head>
    <body>
      <div id="app">
        ${content}
      </div>
      <script src="client_bundle.js"></script>
    </body>
  </html>`

  res.send(html)
})

app.listen(port, () => console.log(`Listening to ${port}`));