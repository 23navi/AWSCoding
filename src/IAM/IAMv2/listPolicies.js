const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const param= {
    // Scope:"Local",
    Scope:"AWS"
    // Scope:"All"
}

console.clear()

iam.listPolicies(param,(e,r)=>{
    if(e){
        console.log(e)
    }else{
        console.log(r.Policies.length)
    }
})

