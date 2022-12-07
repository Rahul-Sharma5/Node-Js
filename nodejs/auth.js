const register = function (username) {
    console.log(`User ${username} has been registerd`)
}

const login = function (username, password){
    console.log(`User ${username} is logged in`)
}

module.exports = {
    register,
    login
}