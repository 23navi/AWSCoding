const AWS= require("aws-sdk");
const s3= new AWS.S3();

const deleteBucket= async(bucketName)=>{
    try{
        const {Contents}= await s3.listObjects({Bucket:bucketName}).promise()
        if(Contents.length>0){
            await s3.deleteObjects({Bucket:bucketName,Delete:{
                Objects:Contents.map(({Key})=>({Key}))
            }}).promise()
        }
        await s3.deleteBucket({Bucket:bucketName}).promise();
        return true

    }catch(err){
        console.log(err);
    }
}

deleteBucket("my-code-bucket-navi23")