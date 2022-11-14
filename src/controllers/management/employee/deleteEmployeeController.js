async function execute(req, res) {
    const deleteEmployeeService = require('../../../models/services/management/employee/deleteEmployeeService')

    const idEmployee = req.params.id
    const resultService = deleteEmployeeService.execute(idEmployee)
    
    return res.redirect('/funcionarios')
}

module.exports = { execute }