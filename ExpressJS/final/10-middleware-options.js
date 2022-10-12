const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
const { response } = require('express')

app.use(morgan('tiny'))

app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (res,req) =>{
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/items', (req,res)=> {
    console.log(req.user)
    res.send('Items')
})
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})