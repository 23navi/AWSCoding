const AWS= require("aws-sdk");
const s3= new AWS.S3();


const params= {
    Bucket:"my-code-bucket-navi23"
    // Bucket:"elasticbeanstalk-us-east-1-274080732168"
}

//Will throw error if the bucket is not empty or we don't have permission to delete it (eg Elastic beanstalk buckets.)
s3.deleteBucket(params,(e,r)=>{
    if(e){
        return console.log(e) 
    }
    console.log(r);
})