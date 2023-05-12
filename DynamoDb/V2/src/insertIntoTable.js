const AWS= require("aws-sdk")
AWS.config.update({ region: "ap-south-1" });
const dynamodb= new AWS.DynamoDB();



const params={
    TableName:"users",
    Item:{
        "id":{
            "S":"1"
        },
        "name":{
            "S":"Navi"
        },
        "age":{
            "N":"23"
        }
    }
}

dynamodb.putItem(params,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})