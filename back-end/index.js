const express = require('express')
const app = express();
const port = 3000;

 //Declare an array of objects "tudoList"
 //initialized to a dummy array

let tudoList =["Epicerie","Lavage"]

 //fonction that received to new tudo and add it to the list
 function addTudo(tudoReceived) {
 console.log(tudoReceived + "tudo recu");
 let newTudo = tudoReceived;
 tudoList = tudoList.push(newTudo)
 
 }

 //function to remove the selected todo


app.get('/', (req, res) => {
 res.send(tudoList)
})

app.get('/useEffect', (req, res) => {
    
    res.send(tudoList)
   })

app.post('/', (req, res) => {
 
 res.send(tudoList)
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})