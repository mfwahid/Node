const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app');

function router(nav) {

    const books = [{
        id: 1,
        title: "Ansible 3.0",
        genre: "Automation",
        author: "Mohamed Safwan"
    },
    {
        id: 2,
        title: "Concourse",
        genre: "Dev Ops",
        author: "Aisha Sana"
    },
    {
        id: 3,
        title: "Mastering Node Applications",
        genre: "Server Scripting",
        author: "Mohamed Safwan"
    },
    {
        id: 4,
        title: "Learning Me",
        genre: "Biography",
        author: "Abdul Waheed"
    },
    {
        id: 5,
        title: "Worst Human Behaviours",
        genre: "Fiction",
        author: "Abdul Waheed"
    },
    {
        id: 6,
        title: "Space Shuttle",
        genre: "Astro Science",
        author: "Mohamed Safwan"
    },
    {
        id: 7,
        title: "Drawing Basics",
        genre: "Kids Learning",
        author: "Aisha Sana"
    },
    {
        id: 8,
        title: "Miserable",
        genre: "Fiction",
        author: "Abdul Waheed"
    }]
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
                const result = await request.query('select * from books');
                res.render('bookList',
                    {
                        title: 'Books',
                        nav,
                        books: result.recordset
                    })
            }());
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            res.render('bookInfo',
                {
                    title: books[id].genre,
                    nav,
                    book: books[id]
                })
        });
    return bookRouter;
}


module.exports = router;