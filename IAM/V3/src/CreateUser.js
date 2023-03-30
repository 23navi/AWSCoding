import {IAMClient,CreateUserCommand,GetUserCommand} from "@aws-sdk/client-iam"

const iamClient= new IAMClient();

const param = {
    UserName:"Aarav",
}


const run = async()=>{
    try{
        const data = await iamClient.send(new GetUserCommand(param));
        // if no user... it will throw an error.
        console.log(`User with name ${param.UserName} already exist. Try other name.`)
        return data;

    }catch(e){
        // It will run if the user already exist 
        try{
            const data= await iamClient.send(new CreateUserCommand(param));
            //will throw error if aws was unable to create user...
            console.log(`User with name ${param.UserName} was created.`)
            return data

        }catch(e){
            console.log("New user was not created.");
            console.log(e);
        }

    }
}

async function printResult(){
    console.log(await run());
}


printResult();

console.log("Straring the printResult()");