const updateEmployeeService = require('../../../models/services/management/employee/updateEmployeeService')

async function getSelectedEmployee(req, res) {
    const idEmployee = req.params.id
    const resultService = await updateEmployeeService.getSelectedEmployee(idEmployee) 
    
    return res.render('management/employee/employee-update', {selectedEmployeeRecord: resultService})
}

async function executeUpdate(req, res) {
    const employeeObject = req.body
    const result = await updateEmployeeService.executeUpdate(employeeObject) 

    return res.redirect('/funcionarios')
}

module.exports = { getSelectedEmployee, executeUpdate }