const express = require('express')
const app = express();
const port = 3000;
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
app.use(cors());
app.use(express.json());
 //Declare an array of objects "tudoList"
 //initialized to a dummy array


let tudoList =["Epicerie","Lavage"]

 
app.get('/', (req, res) => {
    
 res.send(tudoList)
})


app.post('/', (req, res) => {
    const tudo = ('/', req.body.task);  

    tudoList.push(tudo);
    res.send('${tudo}')
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})