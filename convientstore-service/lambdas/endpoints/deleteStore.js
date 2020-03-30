'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
    const params = {
        TableName : 'convenience_store',
        Key: {
            id: event.pathParameters.ID
        }
    };

    return dynamoDb.delete(params, (error, data) => {
        if (error) {
            callback(error);
        }
        callback(error, params.Key);
    });
};
