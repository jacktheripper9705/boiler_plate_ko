const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kgw:qwer1234@cluster0.bzqgk6b.mongodb.net/',{

}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))  


app.get('/', (req, res) => {
  res.send('Hello World! 우와 신난다')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})