const connection = require('./data/connection');

const getByUserEmailAndPassword = async (authModel) => {
    var query = 'SELECT u.*, r.name as roleName from users as u INNER JOIN roles as r on u.idrole = r.idrole WHERE email = ? and password = ?';
    const [user] = await connection.execute(query, [authModel.email, authModel.password]);
    return user;
}

module.exports = {
    getByUserEmailAndPassword
}