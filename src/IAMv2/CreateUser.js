const AWS= require("aws-sdk");


const iam= new AWS.IAM();


const details={
    UserName:"Navii",
}

iam.createUser(details,(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})