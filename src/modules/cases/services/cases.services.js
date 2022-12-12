import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const casesDatabase = require("../../../persistence/cases.json");

const fs = require('fs');

const save = (caseInfo) => {
    const newId = casesDatabase.length + 1;
    const dataToSave = {
        id: newId,
        ...caseInfo
    };
    const cases = casesDatabase;
    cases.push(dataToSave);

    fs.writeFile('src/persistence/cases.json', JSON.stringify(cases), (err) => {
        console.log('ERR > ', err);
        if (err) {
            console.error('SOMETHING WAS WRONG > ', err);
            return false;
        }
    });
    return true;
}

const get = (type, document = 0) => {
    let cases = [];
    if (type === 'all' && document !== 0) {
        cases = casesDatabase.filter((element) => {
            return element.user_document == document;
        });
    }

    return cases;
}

export {
    save,
    get
}