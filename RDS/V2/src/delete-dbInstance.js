const AWS= require("aws-sdk")
AWS.config.update({ region: "us-east-1" });
const rds= new AWS.RDS()


const params={
    DBInstanceIdentifier: "mydb",
    DeleteAutomatedBackups: true,
    FinalDBSnapshotIdentifier: "mydb-snapshot",
    SkipFinalSnapshot: false
}

rds.deleteDBInstance(params, (err, data)=>{
    if(err) console.log(err)
    else console.log(data)
})
