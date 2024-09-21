import * as cdk from "aws-cdk-lib";
import { InfraStack } from "./stacks/DataStack";

const app = new cdk.App();
new InfraStack(app, "Infra");
