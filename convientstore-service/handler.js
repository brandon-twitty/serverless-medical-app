'use strict';
import {APIGateway} from "aws-sdk";
import {getStoresByOwner} from "./lambdas/endpoints/viewStoresByOwnerId";

const getConvenienceStore = require('./lambdas/endpoints/getConvenienceStore');
const viewStoresByOwnerId = require('./lambdas/endpoints/viewStoresByOwnerId');

const view = (event, context, callback) => {
    getConvenienceStore(event.pathParameters.ID)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};
/*const viewStoresOwnerId =(event, context, callback) => {
    viewStoresByOwnerId(event.pathParameters.storeOwnerId)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};*/
 const viewStoreByOwner = (event, context, callback) => {
   viewStoresByOwnerId(event,pathParemeter.storeOwnerId)
       .then(result => {
           const response = {body: JSON.stringify(result)};
           callback(null, response);
       })
       .catch(callback);
};

module.exports = {
    view,
    viewStoreByOwner

};
module.exports.readOne = (event, context, callback) => {
    todosReadOne(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
};
