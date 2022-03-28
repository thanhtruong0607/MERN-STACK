const express = require('express')
const app = express()
const Pizza = require('./models/pizzaModel')
const db = require("./db.js")
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server Working !')
})

app.get("/getpizzas", (req, res) => {
    Pizza.find({}, (err, docs) => {

        if(err){
          console.log(err);
        }
        else{
          res.send(docs)
        } 

    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})