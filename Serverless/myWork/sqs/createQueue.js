import { CreateQueueCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const params = {
  QueueName: "test-queue-2",
  Attributes: {
    DelaySeconds: "60",
    MessageRetentionPeriod: "86400",
  },
};

const run = async () => {
  try {
    const data = await sqsClient.send(new CreateQueueCommand(params));
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
