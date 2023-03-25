const authModels = require('../models/authModels');
const jwt = require('jsonwebtoken');
const ConfigsJwt = require('./config')

const auth = async (req, res) => {
    const user = await authModels.getByUserEmailAndPassword(req.body);
    if(user[0]?.email == req.body.email){
        console.log(ConfigsJwt.config)
        const token = jwt.sign(user[0], ConfigsJwt.config.secret, { expiresIn: ConfigsJwt.config.tokenLife});
        const refreshToken = jwt.sign(user[0], ConfigsJwt.config.refreshTokenSecret, { expiresIn: ConfigsJwt.config.refreshTokenLife});

        const response = {
            "success": true,
            "token": token,
            "refresh-token": refreshToken,
            "user": {
                "email": user[0].email,
                "roleId": user[0].roleId,
                "roleName": user[0].roleName
            },
            "message": "Auth Success!"
        }
         return res.status(200).json(response);
    }else{
        const response = {
            "success": false,
            "message": "Auth Faild."
        }
        return res.status(400).json(JSON.stringify(response));
    }
}

module.exports ={
    auth
}
