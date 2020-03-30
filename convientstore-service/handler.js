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
