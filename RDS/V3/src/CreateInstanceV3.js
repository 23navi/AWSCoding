import {RDSClient, CreateDBInstanceCommand} from "@aws-sdk/client-rds";


const rdsClient = new RDSClient();


const params = {
    DBName:'myrds',
    DBInstanceIdentifier:'myrds',
    AllocatedStorage:5,
    DBInstanceClass:'db.t2.micro',
    Engine:'MySQL',
    MasterUsername:'admin',
    MasterUserPassword:'password',
    Port:3306,
    EngineVersion:'8.0.27',
    PubliclyAccessible:true,
    StorageType:'gp2'
};


const run = async() => {
    try {
        const data = await rdsClient.send(new CreateDBInstanceCommand(params));
        console.log('DB Instance is created', data);
        
    }catch(err) {
        console.log('Unable to create instance', err);
        
    }
}

run();