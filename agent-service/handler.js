'use strict';
const getAgent = require('./lambdas/endpoints/getAgent');


const view = (event, context, callback) => {
    getAgent(event.pathParameters.ID)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

module.exports = {
    view
};
