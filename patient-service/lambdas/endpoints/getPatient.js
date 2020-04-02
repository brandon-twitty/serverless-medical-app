const DB = require('../common/DynamoV2');
const Dynamo = new DB();
exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'GET') {
        let response = await getPatientById(event);
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
const getPatientById = async event => {
    let ID = event.pathParameters.ID;
    let data = await Dynamo.scan('ID', ID, 'patient');
    let result = data.Items.sort((a,b) => b.count - a.count);
    result = result.map(({})=> {
        return {}});
    console.log(data);
    return data;
};
