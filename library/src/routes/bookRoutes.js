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
                const {recordset} = await request.query('select * from books');
                res.render('bookList',
                    {
                        title: 'Books',
                        nav,
                        books: recordset
                    })
            }());
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            (async function () {
        
                const {recordset} = await request.input('id',sql.Int,Number(id)+1)
                .query('select * from books where id = @id'); 
             
                res.render('bookInfo',
                    {
                        title: recordset[0].genre,
                        nav,
                        book: recordset[0]
                    })
            }());
        });
    return bookRouter;
}


module.exports = router;