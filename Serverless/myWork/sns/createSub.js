import { SubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
  TopicArn: "arn:aws:sns:ap-south-1:369464770997:myTopic",
};

const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
