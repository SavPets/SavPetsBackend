const router = require('express').Router()

// =============== MAIN PAGES ===============
router.get('/', (req, res) => res.render('main/index'))
router.get('/cadastrar', (req, res) => res.render('main/signup'))
router.get('/alterar-senha', (req, res) => res.render('main/change-password'))

// =============== MANAGEMENT PAGES ===============
router.get('/painel', (req, res) => res.render('management/panel'))

router.get('/cargos', (req, res) => res.render('management/occupation/occupation'))
router.get('/cadastrar-cargo', (req, res) => res.render('management/occupation/occupation-create'))
router.get('/atualizar-cargo', (req, res) => res.render('management/occupation/occupation-update'))

router.get('/departamentos', (req, res) => res.render('management/departament/departament'))
router.get('/cadastrar-departamento', (req, res) => res.render('management/departament/departament-create'))
router.get('/atualizar-departamento', (req, res) => res.render('management/departament/departament-update'))

router.get('/funcionários', (req, res) => res.render('management/employee/employee'))
router.get('/cadastrar-funcionário', (req, res) => res.render('management/employee/employee-create'))
router.get('/atualizar-funcionário', (req, res) => res.render('management/employee/employee-update'))

module.exports = router