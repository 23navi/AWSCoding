import { Tags } from "aws-cdk-lib";
import { App } from "aws-cdk-lib";
import { ApiStack } from "./stacks/ApiStack";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";

const app = new App();
const dataStack = new DataStack(app, "DataStack");
const lambdaStack = new LambdaStack(app, "LambdaStack", {
  spacesTable: dataStack.spacesTable,
});
const apiStack = new ApiStack(app, "ApiStack", {
  helloLambdaIntegration: lambdaStack.helloLambdaIntegration,
});

// Add tags to group them
Tags.of(dataStack).add("Project", "MyApp");
Tags.of(lambdaStack).add("Project", "MyApp");
Tags.of(apiStack).add("Project", "MyApp");
