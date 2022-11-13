async function execute(req, res) {
    const signupService = require('../../models/services/main/singupService')

    const employeeObject = req.body
    const resultService = await signupService.execute(employeeObject) 

    if(resultService !== 'Sucesso')
        return res.send(resultService)
    
    return res.redirect('/painel')    
}

module.exports = { execute }
