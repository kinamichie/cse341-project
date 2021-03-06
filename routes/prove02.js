const express = require('express');
const router = express.Router();



router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});


module.exports = router;