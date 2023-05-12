const AWS= require("aws-sdk")
AWS.config.update({ region: "us-east-1" });
const rds= new AWS.RDS()


const params={
    DBSnapshotIdentifier:"mydb-snapshot",
}

rds.deleteDBSnapshot(params,(err,data)=>{
    if(err){
        console.log("err")
    }
    else{
        console.log("removed");
    }
})