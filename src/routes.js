const router = require('express').Router()

// =============== CONTROLLERS MAIN  ===============
const singupController = require('./controllers/main/singupController')
const loginController = require('./controllers/main/loginController')
const changePasswordController = require('./controllers/main/changePasswordController')

// =============== CONTROLLERS MANAGEMENT EMPLOYEE ===============
const getEmployeesController = require('./controllers/management/employee/getEmployeesController')
const createEmployeeController = require('./controllers/management/employee/createEmployeeController')
const updateEmployeeController = require('./controllers/management/employee/updateEmployeeController')
const deleteEmployeeController = require('./controllers/management/employee/deleteEmployeeController')

// =============== MAIN PAGES ===============
router.get('/', (req, res) => res.render('main/index'))
router.post('/login/acesso', (req, res) => loginController.execute(req, res))

router.get('/cadastrar', (req, res) => res.render('main/signup'))
router.post('/cadastrar/acesso', (req, res) => singupController.execute(req, res))

router.get('/alterar-senha', (req, res) => res.render('main/change-password'))
router.post('/alterar-senha/acesso', (req, res) => changePasswordController.execute(req, res))

// =============== MANAGEMENT PAGES ===============
router.get('/painel', (req, res) => res.render('management/panel'))

router.get('/funcionarios', (req, res) => getEmployeesController.execute(req, res))

router.get('/cadastrar-funcionario', (req, res) => res.render('management/employee/employee-create'))
router.post('/cadastar-funcionario/controle', (req, res) => createEmployeeController.execute(req, res))

router.get('/atualizar-funcionario/:id', (req, res) => updateEmployeeController.getSelectedEmployee(req, res))
router.post('/atualizar-funcionario/controle', (req, res) => updateEmployeeController.executeUpdate(req, res))

router.get('/deletar-funcionario/:id', (req, res) => deleteEmployeeController.execute(req, res))
// router.post('/deletar-funcionario/controle/:id', (req, res) => deleteEmployeeController.executeDelete(req, res))

// router.get('/cargos', (req, res) => res.render('management/occupation/occupation'))
// router.get('/cadastrar-cargo', (req, res) => res.render('management/occupation/occupation-create'))
// router.get('/atualizar-cargo', (req, res) => res.render('management/occupation/occupation-update'))

// router.get('/departamentos', (req, res) => res.render('management/departament/departament'))
// router.get('/cadastrar-departamento', (req, res) => res.render('management/departament/departament-create'))
// router.get('/atualizar-departamento', (req, res) => res.render('management/departament/departament-update'))

module.exports = router