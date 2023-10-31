// Upload the file to the S3 bucket.

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";    

import fs from "fs";

const s3Client = new S3Client();



const run = async (fileName, bucketName) => {
    try{
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: bucketName,
        ACL: "private",
        Key: "myImage3",
        Body: fileContent
    }
    await  s3Client.send(new PutObjectCommand(params));
    console.log("Successfully uploaded data to myBucket/myKey");
}catch(err){
    console.log(err);
}   
}
   

run("src/img.png","navi-test-bucket-3")