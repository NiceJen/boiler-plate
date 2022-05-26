const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aus1:sydney1@cluster0.7lcyt.mongodb.net/test?retryWrites=true&w=majority',
).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {res.send('안녕하세요 !!!')})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})