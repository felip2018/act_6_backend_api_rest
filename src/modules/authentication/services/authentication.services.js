import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
const usersDatabase = require("../../../persistence/users.json");

const fs = require('fs');


const loginService = (username, password) => {
    const user = usersDatabase.find((element)=>{
        return element.email === username && element.password === password;
    });
    return user;
}

const registerService = (userInfo) => {
    const newId = usersDatabase.length + 1;
    const dataToSave = {
        id: newId,
        ...userInfo
    };
    const users = usersDatabase;
    users.push(dataToSave);

    fs.writeFile('src/persistence/users.json', JSON.stringify(users), (err) => {
        console.log('ERR > ', err);
        if (err) {
            console.error('SOMETHING WAS WRONG > ', err);
            return false;
        }
    });
    return true;
}

export {
    loginService,
    registerService
}