let groupmeStatelessAPI = require('groupme').Stateless;
let configurationService = require('./configuration');
//TODO: export to config
//const TARGET_GROUP_ID = '27915617';
const TARGET_GROUP_ID = '27961849';
const RESPONSE_TEXT = 'NO YOU RESPOND BRO GD WQ CAMPAIGN';

let services = {
    getGroups: () => {
        return new Promise((resolve, reject) => {
            configurationService.getAPIKey().then((token) => {
                groupmeStatelessAPI.Groups.index(token, (error, response) => {
                    if(error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            });
        });
    },
    getLatestMessage: () => {
        return new Promise((resolve, reject) => {
            configurationService.getAPIKey().then((token) => {
                console.log('Token: ' + token);
                groupmeStatelessAPI.Messages.index(token, TARGET_GROUP_ID, null, (error, response) => {
                    if(error) {
                        reject(error);
                    }
                    else {
                        resolve(response.messages[0].text);
                    }
                });
            });
        });
    },
    postResponse: () => {
        return new Promise((resolve, reject) => {
            configurationService.getAPIKey().then((token) => {
                let options = {
                    message: {
                        text: RESPONSE_TEXT
                    }
                };
                groupmeStatelessAPI.Messages.create(token, TARGET_GROUP_ID, options, (error, response) => {
                    if(error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            });
        });
    }
};

module.exports = services;