
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (ID) => {
    const params = {
        TableName: 'owner',
        Key: { ID }
    };
    return dynamoDb.get(params).promise();
};
