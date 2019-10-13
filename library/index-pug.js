/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.set('views', path.join(__dirname, 'src', 'views'));
//app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/pug-index', (req, res) => res.render('index-pug', { 'title': 'My Library', 'List': ['a', 'b', 'c'] }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index-.html')));

app.get('/test', (req, res) => {
    const message = "Testing route test from variable"
    res.send(message);
});

app.listen(port, () => debug(`Listening on port  ${chalk.green(port)}`));