let express = require('express');
let router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index');
});

module.exports = router;
