async function execute(employeeObject) {
    const database = require('../../../controllers/sql/db')
    const { Employee } = require('../../../controllers/sql/employee')
    const { encrypt } = require('../../components/security')

    await database.sequelize.sync()

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
        email,
        password,
        passwordConfirmed
    } = employeeObject

    const alreadyExistingEmail = await Employee.findOne({
        where: {
            email
        }
    })
    if (alreadyExistingEmail) return 'já possui'

    const passwordsAreTheSame = password === passwordConfirmed
    if (!passwordsAreTheSame) return 'As senha inseridas são diferentes!'

    const encryptedPassword = await encrypt(password)

    await Employee.create({
        primeiro_nome: firstName,
        ultimo_nome: lastName,
        cargo: occupation,
        departamento: departament,
        data_nascimento: birthDate,
        telefone: telephone,
        cpf,
        cep,
        numero_casa: houseNumber,
        email: email,
        senha: encryptedPassword
    })

    return 'Sucesso'
}

module.exports = { execute }
