import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const REGION = "ap-south-1";
const ddbClient = new DynamoDBClient({ region: REGION });
console.log("Logging from ddbClient");
export { ddbClient };
