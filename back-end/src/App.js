const express = require('express')
const app = express()
const port = 3001


  //Declare an array of objects "tudoList"
  //initialized to a dummy array
  //const [tudoList, setTudoList] = useState(["Epicerie","Lavage"]);
let tudoList =["Epicerie","Lavage"]
  //fonction that received to new tudo and add it to the list
  function addTudo(tudoReceived) {
    let newTudo = tudoReceived;
    tudoList =  tudoList.push(newTudo)
    
  }

  //function to remove the selected todo
 


app.get('/', (req, res) => {
  res.send({tudoList})
})

app.post('/', (req, res) => {
  let tudo_ = req.body
  addTudo(tudo_)
  res.send(tudoList)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;