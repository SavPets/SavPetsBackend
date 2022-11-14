async function execute() {
    const database = require('../../../../controllers/sql/db')
    const { Employee } = require('../../../../controllers/sql/employee')

    await database.sequelize.sync()

    const recordsEmployees = await Employee.findAll()
    
    return recordsEmployees
}

module.exports = { execute }