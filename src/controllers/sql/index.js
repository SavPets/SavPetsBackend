(async () => {
    const database = require('./db')
    const { Employee } = require('./employee')
    
    const result = await database.sequelize.sync()
})()