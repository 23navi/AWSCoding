const {Client}  = require('pg');

const client = new Client({
    host:'pgexample.clrnsymfz2e0.us-east-1.rds.amazonaws.com',
    user:'postgres',
    password:'password',
    port:5432
});

const createDatabase = () => {
    client.connect();
    client.query("CREATE DATABASE pgdatabase", (err, result) => {
        if(!err) {
            console.log(result);
            
        } else {
            console.log(err);
            
        }

        client.end();
    });
}

createDatabase();