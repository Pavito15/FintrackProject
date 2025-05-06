// ddbClient.js

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

// Singleton container
let ddbDocClientInstance;

function getDdbDocClient() {
  if (!ddbDocClientInstance) {
    const ddbClient = new DynamoDBClient({ region: "us-east-2" });
    ddbDocClientInstance = DynamoDBDocumentClient.from(ddbClient);
  }
  return ddbDocClientInstance;
}

module.exports = getDdbDocClient();
