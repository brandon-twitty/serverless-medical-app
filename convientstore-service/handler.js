'use strict';
const getConvenienceStore = require('./lambdas/endpoints/getConvenienceStore');


const view = (event, context, callback) => {
    getConvenienceStore(event.pathParameters.ID)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

module.exports = {
    view
};
