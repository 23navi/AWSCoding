import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket L2 construct
    const bucket1 = new Bucket(this, "this-isnot-bucket-name22", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      bucketName: `abcc-random-name-for-sure-${this.getSuffic()}`,
    });
  }

  private getSuffic() {
    const suffix = cdk.Fn.select(2, cdk.Fn.split("/", this.stackId));
    return suffix;
  }
}
