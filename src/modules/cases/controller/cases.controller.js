import { save, get } from "../services/cases.services.js";

const saveController = (req, res) => {
    const result = save(req.body);
    res.json({
        statusCode: (result) ? 200 : 409,
        result
    });
}

const getController = (req, res) => {
    const {type, document} = req.query;
    const result = get(type, document);
    res.json({
        statusCode: (true) ? 200 : 400,
        result
    })
}

export {
    saveController,
    getController
}