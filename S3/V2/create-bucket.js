const AWS = require("aws-sdk");
const params={
    Bucket:"my-code-bucket-navi23",
    ACL:"private",
    CreateBucketConfiguration:{
        LocationConstraint:"us-east-2"
    }
}

const s3= new AWS.S3();

s3.createBucket(params,(e,r)=>{
    if(e){
        console.log('Error');
        return console.log(e);
    }
    console.log("Success");
    console.log(r);
})