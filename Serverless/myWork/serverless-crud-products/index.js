import { ddbClient } from "./ddbClient.js";
export const handler = async (event) => {
  console.log("Request:", JSON.stringify(event, undefined, 2));
  // TODO implement

  switch (event.httpMethod) {
    case "GET":
      if (event.pathParameters !== null) {
        return getProductById(event.pathParameters.id);
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(process.env),
        };
      }
    case "POST":
      return createProduct(JSON.parse(event.body));
    case "PUT":
      return updateProductById(event.pathParameters.id, JSON.parse(event.body));
    case "DELETE":
      return deleteProductById(event.pathParameters.id);
    default:
      return {
        statusCode: 200,
        body: JSON.stringify("Not handled"),
      };
  }
};

function getProductById(productId) {
  // Find product from dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(productId),
  };
}

function getAllProducts() {
  // get all products from dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify("All products"),
  };
}

function createProduct(body) {
  // create product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}

function updateProductById(id, body) {
  // update product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(id, body),
  };
}

function deleteProductById(id) {
  // delete product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(id),
  };
}
