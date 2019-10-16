/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000

const config = {
    user: 'smuser',
    password: 'smuser',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'sslib',
 
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

sql.connect(config).catch(err=>debug(err));

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.set('views', path.join(__dirname, 'src', 'views'));
//app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav =  [
    { link: '/books', title: 'Book' },
    { link: '/authors', title: 'Author' },
    { link: '/genre', title: 'Genre' }
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) =>
    res.render('index',
        {
            title: 'Safwan-Sana Library',
            nav
        }
    ));

app.listen(port, () => debug(`Listening on port  ${chalk.green(port)}`));