const { hash, compare } = require('bcryptjs')

async function encrypt(password){
    const encryptedPassword = await hash(password, 10)

    return encryptedPassword
}

async function passwordsCompare(password, employeePassword) {
    const passwordsAreTheSame = await compare(password, employeePassword)
    
    return passwordsAreTheSame
}

module.exports = { encrypt, passwordsCompare }