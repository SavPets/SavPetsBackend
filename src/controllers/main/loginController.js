async function execute(req, res) {
    const loginService = require('../../models/services/main/loginService')

    const employeeObject = req.body
    const resultService = await loginService.execute(employeeObject) 

    if(resultService !== 'Sucesso')
        return res.send(resultService)

    return res.redirect('/painel')
}

module.exports = { execute }
