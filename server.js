const express = require('express')
const app = express()

var hourMs = 1000*60*60;
app.use(express.static(__dirname + '/public', { maxAge: hourMs }));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
