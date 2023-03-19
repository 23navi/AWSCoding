const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const params={
    PolicyArn:"arn:aws:iam::274080732168:policy/myNewCustomPolicy",
    UserName:"New_Naviii"
}

iam.attachUserPolicy(params,(e,r)=>{
    if(e){
        console.log(e);
    }else{
        console.log(r);
    }
})