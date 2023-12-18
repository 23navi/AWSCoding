import { SNSClient } from "@aws-sdk/client-sns";
const REGION = "ap-south-1";
const snsClient = new SNSClient({ region: REGION });
export { snsClient };
