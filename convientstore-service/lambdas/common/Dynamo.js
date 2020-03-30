const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, TableName) {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`);
        }
        console.log(data);

        return data.Item;
    },

    scan(key, value, table) {
        return new Promise((resolve, reject) => {
            let params = {
                TableName: table,
                FilterExpression: `${key} = :value`,
                ExpressionAttributeValues: { ':value': value }
            };

            documentClient.scan(params, function(err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    },
    async batchGet(Key, TableName){
        const tableName = TableName;
        const key = Key;
        const params = {
            RequestedItems: {
                TableName: {
                    Keys: [{
                        Key: {N:'ID'}
                    }],
                    ProjectionExpression: 'ID'
                }
            },
        };

       documentClient.batchGet(params, function (err, data) {
           if (err) {
               console.log(err);
           }
           else{
               data.Responses.TableName.forEach(function (element, index, array) {

               })
           } return data;
       })
    },

    async write(data, TableName) {
        if (!data.ID) {
            throw Error('no ID on the data');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`There was an error inserting ID of ${data.ID} in table ${TableName}`);
        }

        return data;
    }

};
module.exports = Dynamo;
