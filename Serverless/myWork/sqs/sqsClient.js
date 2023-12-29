import { SQSClient } from "@aws-sdk/client-sqs";
const REGION = "ap-south-1";
const sqsClient = new SQSClient({ region: REGION });
export { sqsClient };
