import 'babel-polyfill';
import 'babel-register';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import App from './src/views.jsx';

const app = express();
const port = process.env.PORT || 8005;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {

  const context = {}

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App />
    </StaticRouter>
  );

  const html = `<html>
    <head>
    <link rel="shortcut icon" href="images/favicon.png" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Dosis:400,300,500,600,700' rel='stylesheet' type='text/css'>
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