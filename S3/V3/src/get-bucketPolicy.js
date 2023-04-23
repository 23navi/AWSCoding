// get buckt policy from s3 for a bucket
import {
    S3Client,
    GetBucketPolicyCommand
} from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const getBucketPolicy = async (bucketName) => {
    try{
        const command = new GetBucketPolicyCommand({
            Bucket: bucketName
        });
        const response = await s3Client.send(command);
        return response;
    
    }catch(err){
        console.log(err);
    }
}

getBucketPolicy("navi-test-bucket-1");