const DB = require('../common/DynamoV2');
const Dynamo = new DB();
exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'GET') {
        let response = await getStoreByOwnerId(event);
        return done(response);
    }
};

const done = response => {
    return {
        statusCode: '200',
        body: JSON.stringify(response.Items),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    }
};
const getStoreByOwnerId = async event => {
    let storeOwnerId = event.pathParameters.storeOwnerId;
    let data = await Dynamo.scan('storeOwnerId', storeOwnerId, 'convenience_store');
    let result = data.Items.sort((a,b) => b.count - a.count);
    result = result.map(({storeOwnerId, storeContactName, storePhoneNumber, storeEmail})=> {
        return {storeOwnerId, storeContactName, storePhoneNumber, storeEmail}});
    console.log(data);
    return data;
};

