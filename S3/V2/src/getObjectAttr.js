const AWS= require("aws-sdk");
const s3= new AWS.S3();

const params= {
    Bucket:"my-code-bucket-navi23",
    Key:'my first file',
    ObjectAttributes:["StorageClass"]
}
s3.getObjectAttributes(params,(e,r)=>{
    if(e){
        return console.log(e)
    }console.log(r);
})