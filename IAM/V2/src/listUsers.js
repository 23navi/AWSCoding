const AWS= require("aws-sdk");

const iam = new AWS.IAM();


//callback

iam.listUsers((err,res)=>{
    if(err) console.log(err);
    else console.log(res);
})



//promises is not working? IDK how to use it yet


// const resss=iam.listUsers().promise()

// resss.then(r=>{
//     console.log(r)
// }).catch(e=>{
//     console.log(e)
// })