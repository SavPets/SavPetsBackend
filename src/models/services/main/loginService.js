async function execute(employeeObject) {
    const database = require('../../../controllers/sql/db')
    const { Employee } = require('../../../controllers/sql/employee')
    const { passwordsCompare } = require('../../components/security')

    await database.sequelize.sync()

    const {
        email,
        password
    } = employeeObject
    
    const alreadyExistingEmployee = await Employee.findOne({
        where: {
            email
        }
    })
    if (!alreadyExistingEmployee) return 'Cadastro não existente'

    const thePasswordIsTheSameRegistered = await passwordsCompare(password, alreadyExistingEmployee.senha)
    if (!thePasswordIsTheSameRegistered) return 'Informações inválidas!'

    return 'Sucesso'
}

module.exports = { execute }
