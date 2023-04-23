// create a new bucket policy for s3 bucket using asw-sdk v3
import { S3Client,PutBucketPolicyCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const readOnlyUserPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Sid:"AddPerm",
            Effect: "Allow",
            Principal: "*",
            Action: ["s3:GetObject"],
            Resource: [""]
        }
    ]
}

const bucketName="navi-test-bucket-1"

const bucketResourceId= "arn:aws:s3:::"+bucketName+"/*";
readOnlyUserPolicy.Statement[0].Resource[0]=bucketResourceId;

const bucketPolicyParams={
    Bucket: bucketName,
    Policy: JSON.stringify(readOnlyUserPolicy)
}

const run = async () => {
    try{
        await s3Client.send(new PutBucketPolicyCommand(bucketPolicyParams));
        console.log("Successfully created policy");
    }
    catch(err){
        console.log(err);
    }
}

run();