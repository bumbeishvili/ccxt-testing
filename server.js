

const express = require('express');
const app = express();
var ccxt = require('ccxt');

app.get('/', (req, res) => {
  res.send('Hello world')
})

debugger;
console.log (ccxt.exchanges);


var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))