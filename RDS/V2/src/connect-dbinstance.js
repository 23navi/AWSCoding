const mysql= require("mysql")

const con= mysql.createConnection({
    host:"database-1.cz9ikeqlhkrk.ap-south-1.rds.amazonaws.com",
    user:"admin",
    password:"Navi2308",
    port:3306
})

con.connect((err)=>{
    if(err){
        console.log("Error in connection")
    }else{
        console.log("Connected");
    }
})