async function execute(idEmployee) {
    const database = require('../../../../controllers/sql/db')
    const { Employee } = require('../../../../controllers/sql/employee')
    
    await database.sequelize.sync()
    
    await Employee.destroy({ where: { id_funcionario: idEmployee }})
    
    return 'Sucesso'
}

module.exports = { execute }