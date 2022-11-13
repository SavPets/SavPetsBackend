const Sequelize = require('sequelize')
const database = require('./db')

const Employee = database.sequelize.define('funcionario', {
    id_funcionario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primeiro_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ultimo_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    departamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero_casa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = { Employee }