const express = require('express')
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors());
app.use(express.json());

let tudoList =[]
 
app.get('/', (req, res) => {
    
 res.send(tudoList)
})


app.post('/', (req, res) => {
    let tudo = ('/', req.body.task);  

    tudoList.push(tudo);
    res.send('${tudo}')
})

app.post('/del', (req, res) => {
   
    let idToDel = ('/del', req.body.task);
    tudoList.splice(idToDel,1)
    res.send('${tudoList}')
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})