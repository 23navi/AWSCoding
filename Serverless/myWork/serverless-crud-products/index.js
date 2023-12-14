import { ddbClient } from "./ddbClient.js";
export const handler = async (event) => {
  console.log("Request:", JSON.stringify(event, undefined, 2));
  // TODO implement

  switch (event.httpMethod) {
    case "GET":
      if (event.pathParameters !== null) {
        return {
          statusCode: 200,
          body: JSON.stringify("Get product by id "),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(process.env),
        };
      }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};

handler();
