'use strict';
const getPatient = require('./lambdas/endpoints/getPatient');


const view = (event, context, callback) => {
    getPatient(event.pathParameters.ID)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

module.exports = {
    view
};
