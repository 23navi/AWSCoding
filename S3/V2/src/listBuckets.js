const AWS= require("aws-sdk");
const s3= new AWS.S3()

s3.listBuckets((e,r)=>{
    if(e){
        return console.log(e)
    }
    console.log(r.Buckets);
})