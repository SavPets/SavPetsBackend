async function execute(req, res) {
    const changePasswordService = require('../../models/services/main/changePasswordService')

    const employeeObject = req.body
    const resultService = await changePasswordService.execute(employeeObject) 

    if(resultService !== 'Sucesso')
        return res.send(resultService)

    return res.redirect('/')
}

module.exports = { execute }
