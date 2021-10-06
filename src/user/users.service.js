const User = require('./users.model');

module.exports.createUser = (userInfo) => {
    return User.create(userInfo);
};

module.exports.findUserByEmail = (email) => {
    return User.findOne({ email: email });
};