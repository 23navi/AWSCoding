import { ddbClient } from "./ddbClient.js";
import {
  ScanCommand,
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";
export const handler = async (event) => {
  console.log("Request:", JSON.stringify(event, undefined, 2));
  // TODO implement

  switch (event.httpMethod) {
    case "GET":
      if (event.pathParameters !== null) {
        try {
          const res = await getProductById(event.pathParameters.id);
          return {
            statusCode: 200,
            body: JSON.stringify(res),
          };
        } catch (e) {
          return {
            statusCode: 200,
            body: JSON.stringify(e),
          };
        }
      } else {
        return getAllProducts();
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

async function getProductById(productId) {
  // Find product from dynamodb
  const params = {
    Key: {
      id: { S: productId },
    },
    TableName: process.env.DYNAMODB_TABLE_NAME,
  };
  try {
    const product = await ddbClient.send(new GetItemCommand(params));
    return product;
  } catch (err) {
    throw new Error("product not found");
  }
}

async function getAllProducts() {
  // get all products from dynamodb
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
  };
  const products = await ddbClient.send(new ScanCommand(params));
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
}

async function createProduct(body) {
  // create product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}

async function updateProductById(id, body) {
  // update product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(id, body),
  };
}

async function deleteProductById(id) {
  // delete product in dynamodb
  return {
    statusCode: 200,
    body: JSON.stringify(id),
  };
}
