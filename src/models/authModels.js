const connection = require('./data/connection');

const getByUserEmailAndPassword = async (user, password) => {
    var query = 'SELECT * FROM users WHERE email = ? and password = ?';
    const [user] = await connection.execute(query, [user, password]);
    return user;
}

module.exports = {
    getByUserEmailAndPassword
}