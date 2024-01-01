import { DeleteMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const params = {
  QueueUrl: "https://sqs.ap-south-1.amazonaws.com/369464770997/test-queue-1",
  MessageBody: "this is the first message",
  DelaySeconds: 10,
};

export const sendMessage = async () => {
  try {
    const data = await sqsClient.send(new SendMessageCommand(params));
    console.log("Success, message sent. MessageID:", data);
  } catch (err) {
    console.log("Error", err);
  }
};

sendMessage();
