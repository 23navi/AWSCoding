// delete buckt policy from s3 for a bucket
import {
    S3Client,
    DeleteBucketPolicyCommand
} from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const deleteBucketPolicy = async (bucketName) => {
    try{
        const command = new DeleteBucketPolicyCommand({
            Bucket: bucketName
        });
        const response = await s3Client.send(command);
        return response;
    
    }catch(err){
        console.log(err);
    }
}


deleteBucketPolicy("navi-test-bucket-1")