const fs= require("fs");
const AWS= require("aws-sdk");
const s3= new AWS.S3();

const uploadFile= (fileName)=>{
    const fileContent= fs.readFileSync(fileName);
    const params= {
        Bucket:"my-code-bucket-navi23",
        ACL:"public-read",
        Key:"my first file",
        Body:fileContent,
    }

    //s3.upload() insted of s3.putObject()
    s3.upload(params,(e,r)=>{
        if(e){
            console.log(e);
            return (e)
        }
        console.log("Added to bucket ");
        console.log(r)
    })
}

uploadFile("src/navi.txt")