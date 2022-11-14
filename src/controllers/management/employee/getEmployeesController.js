async function execute(req, res) {
    const getEmployeesService = require('../../../models/services/management/employee/getEmployeesService')

    const resultService = await getEmployeesService.execute() 

    return res.render('management/employee/employee', {recordsEmployees: resultService})    
}

module.exports = { execute }