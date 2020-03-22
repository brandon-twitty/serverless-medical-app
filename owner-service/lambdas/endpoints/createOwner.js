const Responses = require('../common/API_Response');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;
    const owner = JSON.parse(event.body);
    owner.ID = ID;

    const newOwner = await Dynamo.write(owner, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!newOwner) {
        return Responses._400({ message: 'Failed to write owner by ID' });
    }

    return Responses._200({ newOwner });
};
