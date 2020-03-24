
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (ID) => {
    const params = {
        TableName: 'agent',
        Key: { ID }
    };
    return dynamoDb.get(params).promise();
};
