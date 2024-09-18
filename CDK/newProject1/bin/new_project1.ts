#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { NewProject1Stack } from "../lib/new_project1-stack";
import { InfraStack } from "../lib/infra-stack";

const app = new cdk.App();

new InfraStack(app, "Infra");
