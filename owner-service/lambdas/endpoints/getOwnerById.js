'use strict';
/*const DB = require('../common/DynamoV2');
const Dynamo = new DB();
exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'GET') {
        let response = await getOwnerById(event);
        return done(response);
    }
};
const done = response => {
    return {
        statusCode: '200',
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    }
};
const getOwnerById = async event => {
    let ID = event.pathParameters.ID;
    let data = await Dynamo.scan('ID', ID, 'owner');
    let result = data.Items.sort((a,b) => b.count - a.count);
    result = result.map(({ID, OwnersCommissionRate, OwnersFirstName, OwnersPhoneNumber})=> {
        return {ID, OwnersCommissionRate, OwnersFirstName, OwnersPhoneNumber}});
    console.log(data);
    return data;
};*/
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: 'owner',
        Key: {
            ID: event.pathParameters.ID,
        },
    };

    // fetch todo from the database
    documentClient.get(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the todo item.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
        callback(null, response);
    });
};
