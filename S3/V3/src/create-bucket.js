// import classes for creating s3 buckets
import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

// create bucket
const createBucket = async () => {
  try {
    const bucketParams = {
      Bucket: "navi-test-bucket-2",
    };
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log("Successfully created bucket.");
    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
};

createBucket();
