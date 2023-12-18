import { sqsClient } from "./sqsClient.js";

const params = {
  Name: "myTopic",
};

const run = async () => {
  try {
    const data = await sqsClient.send();
    console.log("Success.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
