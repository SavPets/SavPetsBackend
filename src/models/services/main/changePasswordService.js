async function execute(employeeObject) {
    const database = require('../../../controllers/sql/db')
    const { Employee } = require('../../../controllers/sql/employee')
    const { passwordsCompare, encrypt } = require('../../components/security')

    await database.sequelize.sync()

    const {
        email,
        newPassword,
        newPasswordConfirmed
    } = employeeObject

    const alreadyExistingEmployee = await Employee.findOne({
        where: {
            email
        }
    })
    if(!alreadyExistingEmployee) return 'Cadastro não existente'

    const theNewPasswordIsTheSameRegistered = await passwordsCompare(newPassword, alreadyExistingEmployee.senha)
    if(theNewPasswordIsTheSameRegistered) return 'A senha inserida é a mesma cadastrada!'

    const passwordsAreTheSame = newPassword == newPasswordConfirmed
    if(!passwordsAreTheSame) return 'As senha inseridas são diferentes!'

    const encryptedPassword = await encrypt(newPassword)
    await Employee.update({ senha: encryptedPassword}, {
        where: {
            email
        }
    })

    return 'Sucesso'
}   

module.exports = { execute }