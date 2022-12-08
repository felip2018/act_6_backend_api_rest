import { loginService, registerService } from "../services/authentication.services.js";

const loginController = (req, res) => {
    const {username, password} = req.body;
    const result = loginService(username, password);
    res.json({
        statusCode: (result) ? 200 : 409,
        user: result
    });
}

const registerController = (req, res) => {
    const result = registerService(req.body);
    console.log('registerController.result > ', result);
    res.json({
        statusCode: result ? 200 : 400,
        result
    })
}

export {
    loginController,
    registerController
}