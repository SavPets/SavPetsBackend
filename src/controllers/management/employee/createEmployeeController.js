async function execute(req, res) {
    const createEmployeeService = require('../../../models/services/management/employee/createEmployeeService')

    const employeeObject = req.body
    const resultService = await createEmployeeService.execute(employeeObject)

    if(resultService !== 'Sucesso') 
        return res.send(resultService)

    return res.redirect('/funcionarios')
}

module.exports = { execute }