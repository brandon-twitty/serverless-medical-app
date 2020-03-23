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
    const convenienceStore = JSON.parse(event.body);
    convenienceStore.ID = ID;

    const newConvenienceStore = await Dynamo.write(convenienceStore, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!newConvenienceStore) {
        return Responses._400({ message: 'Failed to write convenienceStore by ID' });
    }

    return Responses._200({ newConvenienceStore: newConvenienceStore });
};
