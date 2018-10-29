import 'babel-polyfill';
import 'babel-register';
import 'sequelize';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import App from '../src/views.jsx';
const router = require('./routes.js');

const app = express();
const port = process.env.PORT || 8005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build/public'));
app.use(router);
app.get('*', (req, res) => {

  const context = {}

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App />
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