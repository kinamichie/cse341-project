
//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();


let users = ['Larry', 'Curly', 'Mo'];
let errorMessage = '';

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        errorMessage: errorMessage
    });
    errorMessage = '';
});

router.post('/addUser', (req, res, next)  => {
    const {user} = req.body;

    if (!users.includes(user)) {
        users.push(user);
    } else {
        errorMessage = `User ${req.body.user} could not be added because they already exist.`;
    }
    res.redirect('/ta02/', 302);
});
router.post( '/removeUser', (req, res, next) => {
    const lengthBefore = users.length;
    users = users.filter(user => user !== req.body.user);
    const lengthAfter = users.length;

    if (lengthBefore === lengthAfter) {
        errorMessage = `User ${req.body.user} could not be found `;
    }
    res.redirect('/ta02/', 302);
});

module.exports = router;
