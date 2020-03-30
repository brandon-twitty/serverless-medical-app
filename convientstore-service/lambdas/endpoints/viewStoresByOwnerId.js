'use strict';
const Responses = require('../common/API_Response');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event =>{
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.storeOwnerId) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }
    let storeOwnerId = event.pathParemeter.storeOwnerId;
    const store = JSON.parse(event.body);
    store.ownerStoreId = storeOwnerId;

    const params = {
        TableName: "convenience_store",
        Key:{ [storeOwnerId]: storeOwnerId},
        ProjectionExpression: storeOwnerId,
        ReturnValues: 'ALL_NEW'
    };
    try{
        const data = await documentClient.query(params).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };
        return response;
    } catch (e) {
        return {
            statusCode: 500
        };

    }



};
