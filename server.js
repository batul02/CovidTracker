const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/covid-tracker-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/covid-tracker-app/'}),
);

app.listen(process.env.PORT || 8080);