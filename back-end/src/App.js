const express = require('express')
const app = express()
const port = 3000

  //Declare an array of objects "tudoList"
  //initialized to a dummy array
  const [tudoList, setTudoList] = useState([]);

  //fonction that received to new tudo and add it to the list
  function addTudo(tudoReceived) {
    let newTudo = tudoReceived;
    return setTudoList((tudoList) => [
      ...tudoList,
      { newTudo },
    ]);
  }

  //function to remove the selected todo
 


app.get('/', (req, res) => {
  res.send({tudoList})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
