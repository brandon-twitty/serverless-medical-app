'use strict';
const getOwner = require('./lambdas/endpoints/getOwner');


const view = (event, context, callback) => {
    getOwner(event.pathParameters.ID)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

module.exports = {
    view
};
