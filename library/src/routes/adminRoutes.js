const express = require('express');
const adminRouter = express.Router();
const { MongoClient } = require('mongodb');
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
    adminRouter.route('/')
        .get(
            (req, res) => {
                const url = 'mongodb://localhost:27017';
                const dbName = 'sslib';

                (async function () {
                    let client;
                    try {
                        client = await MongoClient.connect(url,{ useUnifiedTopology: true });
                        debug('Connected successfully');
                        const db = client.db(dbName);
                        const response = await db.collection('books').insertMany(books);
                        res.json(response);
                    }
                    catch (ex) {
                        debug(ex.stack);
                    }
                    client.close();
                }());

            }
        )
    return adminRouter;
}

module.exports = router;