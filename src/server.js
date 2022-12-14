const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(3000, ()=> console.log('Server is running in port 3000...'))