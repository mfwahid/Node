const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const bookRouter = express.Router();

const debug = require('debug')('app');

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
function router(nav) {

    bookRouter.route('/')
        .get((req, res) => {

            const url = 'mongodb://localhost:27017';
            const dbName = 'sslib';

            (async function () {
                let client;
                try {
                    client = await MongoClient.connect(url,{ useUnifiedTopology: true });
                    debug('Connected successfully');
                    const db = client.db(dbName);
                    const books = await db.collection('books').find().toArray();

                    res.render('bookList',
                        {
                            title: 'Books',
                            nav,
                            books
                        })
                }
                catch (ex) {
                    debug(ex.stack);
                }
                client.close();
            }());
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;

            const url = 'mongodb://localhost:27017';
            const dbName = 'sslib';

            (async function () {
                let client;
                try {
                    client = await MongoClient.connect(url,{ useUnifiedTopology: true });
                    debug('Connected successfully');
                    const db = client.db(dbName);
                    const book = await db.collection('books').findOne({'_id': new ObjectID(id)});

                    res.render('bookInfo',
                    {
                        title: book.genre,
                        nav,
                        book
                    })
                }
                catch (ex) {
                    debug(ex.stack);
                }
                client.close();
            }());


        });
    return bookRouter;
}


module.exports = router;