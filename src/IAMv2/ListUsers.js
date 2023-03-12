const AWS= require("aws-sdk");

const iam = new AWS.IAM();

iam.listUsers((err,res)=>{
    if(err) console.log(err);
    else console.log(res);
})