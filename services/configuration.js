let aws = require('aws-sdk');
let https = require('https');
aws.config.region = 'us-east-1';

let services = {
    getAPIKey: () => {
        return new Promise((resolve, reject) => {
            let dynamoDB = new aws.DynamoDB({httpOptions: {
                agent: new https.Agent({
                    rejectUnauthorized: true,
                    keepAlive: true,
                    secureProtocol: 'TLSv1_method',
                    ciphers: 'ALL'
                })
            }});
            let queryParameters = {
                TableName: 'auth',
                ScanFilter: {
                    'AuthID': {
                        'AttributeValueList': [
                            {
                                'S': 'groupme'
                            }
                        ],
                        'ComparisonOperator' : 'EQ'
                    }
                }
            };
            dynamoDB.scan(queryParameters, (error, data) => {
                if(error) {
                    reject(error);
                }
                else {
                    resolve(data.Items[0].token.S);
                }
            });
        });
    }
};

module.exports = services;