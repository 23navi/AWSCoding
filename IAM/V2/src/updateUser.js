const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params={
    UserName:"Navii",
    NewUserName:"New_Naviii"
}

iam.updateUser(params,(e,r)=>{
    console.log({"e":e,"r":r})
})