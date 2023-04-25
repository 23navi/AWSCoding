const AWS= require("aws-sdk")
AWS.config.update({ region: "us-east-1" });
const rds= new AWS.RDS()


const params={
    DBInstanceIdentifier: "mydb",
    DBName:"mydb",
    AllocatedStorage: 20,
    DBInstanceClass:"db.t2.micro",
    Engine:"mysql",
    MasterUsername:"admin",
    MasterUserPassword:"Navi2308",
    Port:3306,
    EngineVersion:"8.0.27",
    PubliclyAccessible:true,
    StorageType:"gp2",
}

rds.createDBInstance(params, (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    
    }
}
)