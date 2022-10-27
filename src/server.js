const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(router)

app.use(express.json)

app.listen(3000, ()=> console.log('Server is running in port 3000...'))