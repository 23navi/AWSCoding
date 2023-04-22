const fs= require("fs");
const AWS= require("aws-sdk");
const s3= new AWS.S3();

const uploadFile= (fileName)=>{
    const fileContent= fs.readFileSync(fileName);
    const params= {
        Bucket:"my-code-bucket-navi23",
        ACL:"public-read",
        Key:"my first image",
        Body:fileContent,
    }
    s3.putObject(params,(e,r)=>{
        if(e){
            console.log(e);
            return (e)
        }
        console.log("Added to bucket ");
        console.log(r)
    })
}

uploadFile("src/a.png")