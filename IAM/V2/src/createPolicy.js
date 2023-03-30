const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const policyDetails= {
    "Version":"2012-10-17",
    "Statement":[
        {
            "Effect":"Allow",
            "Action":"*",
            "Resource":"*"
        }
    ]
}

const params= {
    PolicyDocument:JSON.stringify(policyDetails),
    PolicyName:"myNewCustomPolicy",
    Description:"This is the first custom policy I created."
}

iam.createPolicy(params,(e,r)=>{
    if(e){
        console.log(e);
    }else{
        console.log(r)
    }
})