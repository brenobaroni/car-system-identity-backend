const { response } = require('../router');
const authService = require('../service/authService')

const auth = async (req, res, next) => {
    try {
        return await authService.auth(req, res);
    } catch (error) {
        res = res.status(400);
        next(error, req, res);
    }
}

module.exports ={
    auth
}