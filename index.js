const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI
).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {res.send('<b> 안녕 ? <br> 반가워 ')})

app.post('/register', (req, res) => {
  // 회원가입에 필요한 정보를 client에서 가져와서 
  // 서버에 저장
  const user = new User(req.body)
  
  user.save( (err, doc) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => console.log('Example app listening on port ${port}'))