const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app');

function router(nav) {

    const request = new sql.Request();

    //Promise example
    /*bookRouter.route('/')
        .get((req, res) => {
            request.query('select * from books')
                .then(result => {
                    debug(result);
                    res.render('bookList',
                        {
                            title: 'Books',
                            nav,
                            books: result.recordset
                        })
                });
        });*/

    bookRouter.route('/')
        .get((req, res) => {
            (async function () {
                const { recordset } = await request.query('select * from books');
                res.render('bookList',
                    {
                        title: 'Books',
                        nav,
                        books: recordset
                    })
            }());
        });

    bookRouter.route('/:id')
        .all((req, res, next) => {
            const { id } = req.params;
            (async function () {
                const { recordset } = await request.input('id', sql.Int, Number(id) + 1)
                    .query('select * from books where id = @id');
                //req.book = recordset[0];
                //array destructuring
                [req.book] = recordset;
                next();
            }());
        })
        .get((req, res) => {
            res.render('bookInfo',
                {
                    title: req.book.genre,
                    nav,
                    book: req.book
                })
        });
    return bookRouter;
}


module.exports = router;