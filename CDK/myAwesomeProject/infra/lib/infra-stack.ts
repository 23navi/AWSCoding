import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";

// Custom L3 construct using L2 construct
class L3BucketConst extends Construct {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    // S3 bucket L2 construct
    const bucket = new Bucket(this, "ThisIsLocalName", {
      bucketName: "yooooooooooooo",
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2),
        },
      ],
    });
    console.log({ bucketName: bucket.bucketName });
  }
}

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket L2 construct
    const bucket = new Bucket(this, "this-is-not-bucket-name", {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2),
        },
      ],
    });

    console.log(bucket.bucketName);

    // // S3 bucket L1 costruct
    // new CfnBucket(this, "XXXXXXXXXXXXXXXXXXXXXXXXXX", {
    //   bucketName: "XXXXXXXXXXXXXXXXXXXXXXX",
    //   lifecycleConfiguration: {
    //     rules: [
    //       {
    //         expirationInDays: 2,
    //         status: "Enabled",
    //       },
    //     ],
    //   },
    // });

    new L3BucketConst(this, "thenwhatisthis");
  }
}
