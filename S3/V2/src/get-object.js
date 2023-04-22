const AWS= require("aws-sdk");
const s3= new AWS.S3();


s3.getObject({
    Bucket:"my-code-bucket-navi23",
    Key:"my first file",
    
},(e,r)=>{
    if(e){
        return(e)
    }
    console.log(r);
})