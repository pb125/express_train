const express=require('express');
const app=express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
const { connectDB } = require('./DB/connectDB');
const web = require('./routes/web.js');
var bodyParser=require('body-parser')



dotenv.config({path:".env"})

app.use(bodyParser.urlencoded({ extended: false }))

//express josn se postman se data uthakr late hai
app.use(express.json())

//database connect
connectDB()

//load Router
app.use('/api/train',web)

app.get('/', (req, res) => {
    res.send('Hello MEAN')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`server is running : ${process.env.PORT}`)
})