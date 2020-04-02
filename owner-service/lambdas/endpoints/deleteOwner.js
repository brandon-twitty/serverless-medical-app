const DB = require('../common/DynamoV2');
const Dynamo = new DB();
exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'DELETE') {
        let response = await deleteOwnerById(event);
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
const deleteOwnerById = async event => {
    let ID = event.pathParameters.ID;
    await Dynamo.delete('ID', ID, 'owner');

};
