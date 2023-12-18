import { CreateTopicCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
  Name: "myTopic",
};

const run = async () => {
  try {
    const data = await snsClient.send(new CreateTopicCommand(params));
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
