const database = require('../../../../controllers/sql/db')
const { Employee } = require('../../../../controllers/sql/employee')

async function getSelectedEmployee(idEmployee) {
    await database.sequelize.sync()
    const employeeData = await Employee.findByPk(idEmployee)

    return employeeData
}

async function executeUpdate(employeeObject) {
    const {
        firstName,
        lastName,
        occupation,
        departament,
        birthDate,
        telephone,
        cpf,
        cep,
        houseNumber,
        email
    } = employeeObject

    await database.sequelize.sync()
    await Employee.update({
        primeiro_nome: firstName,
        ultimo_nome: lastName,
        cargo: occupation,
        departamento: departament,
        data_nascimento: birthDate,
        telefone: telephone,
        cpf,
        cep,
        numero_casa: houseNumber,
        email: email
    }, { where: { email } })

    return 'Sucesso'
}

module.exports = { getSelectedEmployee, executeUpdate }