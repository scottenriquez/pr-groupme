let express = require('express');
let router = express.Router();
let groupmeService = require('../services/groupme');
let analyzeService = require('../services/analyze');

router.get('/pleaseRespond', (request, response, next) => {
    groupmeService.getLatestMessage().then((messageText) => {
        if(analyzeService.containsPleaseRespond(messageText) || analyzeService.containsPR(messageText)) {
            groupmeService.postResponse().then((messagePostResponse) => {
                response.send(messagePostResponse);
            });
        }
        else {
            response.send({
                message: 'No message posted to GroupMe.'
            })
        }
    });
});

module.exports = router;