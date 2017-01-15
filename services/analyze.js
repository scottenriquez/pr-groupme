let string = require('string');

let services = {
    containsPleaseRespond: (messageText) => {
        return string(messageText.toUpperCase()).contains('PLEASE RESPOND');
    },
    containsPR: (messageText) => {
        return string(messageText).contains('PR');
    }
};

module.exports = services;