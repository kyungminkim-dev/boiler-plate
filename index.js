const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kkim:82495747@boilerplate.dbvuq.mongodb.net/boilerplate?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))



app.get('/', (req,res) => res.send("Hello World!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))