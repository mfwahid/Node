const express = require('express');
const bookRouter = express.Router();

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

bookRouter.route('/')
    .get((req, res) => {
        res.render('books',
            {
                title: 'Books',
                nav: [
                    { link: '/books', title: 'Books' },
                    { link: '/authors', title: 'Authors' },
                    { link: '/genre', title: 'Genre' }
                ],
                books
            })
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello single books');
    });

module.exports = bookRouter;