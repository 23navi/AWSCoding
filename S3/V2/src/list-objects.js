const AWS= require("aws-sdk");
const s3= new AWS.S3()

s3.listObjects({ Bucket:"my-code-bucket-navi23"},(e,r)=>{
    if(e){
        return console.log(e)
    }console.log(r);
})