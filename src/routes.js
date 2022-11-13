const router = require('express').Router()

// =============== MAIN CONTROLLERS ===============
const singupController = require('./controllers/main/singupController')
const loginController = require('./controllers/main/loginController')
const changePasswordController = require('./controllers/main/changePasswordController')

// =============== MAIN PAGES ===============
router.get('/', (req, res) => res.render('main/index'))
router.get('/cadastrar', (req, res) => res.render('main/signup'))
router.get('/alterar-senha', (req, res) => res.render('main/change-password'))

router.post('/login/acesso', (req, res) => loginController.execute(req, res))
router.post('/cadastrar/acesso', (req, res) => singupController.execute(req, res))
router.post('/alterar-senha/acesso', (req, res) => changePasswordController.execute(req, res))

// =============== MANAGEMENT PAGES ===============
router.get('/painel', (req, res) => res.render('management/panel'))

router.get('/funcionarios', (req, res) => res.render('management/employee/employee'))
router.get('/cadastrar-funcionario', (req, res) => res.render('management/employee/employee-create'))
router.get('/atualizar-funcionario', (req, res) => res.render('management/employee/employee-update'))

// router.get('/cargos', (req, res) => res.render('management/occupation/occupation'))
// router.get('/cadastrar-cargo', (req, res) => res.render('management/occupation/occupation-create'))
// router.get('/atualizar-cargo', (req, res) => res.render('management/occupation/occupation-update'))

// router.get('/departamentos', (req, res) => res.render('management/departament/departament'))
// router.get('/cadastrar-departamento', (req, res) => res.render('management/departament/departament-create'))
// router.get('/atualizar-departamento', (req, res) => res.render('management/departament/departament-update'))

module.exports = router