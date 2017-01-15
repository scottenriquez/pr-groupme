let express = require('express');
let router = express.Router();
let configuration = require('../services/configuration');

router.get('/', (request, response, next) => {
    configuration.getAPIKey().then((token) => {
        response.send(token);
    });
});

module.exports = router;