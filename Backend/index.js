const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000

mongoose.connect('mongodb://121.0.0.1:27017/MyDB1')

const model = mongoose.model('User', schema).then(()=>console.log('Mongo Connented')).
catch(err=>console.log(err));


const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        required: true
    }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
