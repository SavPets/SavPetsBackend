async function execute(employeeObject) {
    const signupService = require('../../main/singupService')

    const resultService = await signupService.execute(employeeObject)

    return resultService
}

module.exports = { execute }
