'use strict';
const DB = require('../common/DynamoV2');
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
};
