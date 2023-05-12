const AWS= require("aws-sdk");
AWS.config.update({region:'us-east-1'});
const ec2= new AWS.EC2();



ec2.describeSecurityGroupRules((e,r)=>{
    if(e){
        console.log(e)
    }else{
        console.log(r);
    }
})