const express = require('express'),
cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();



app.use(cors());

app.get('/api', function(req, res) {
    console.log('called');
    res.send({result: 'hello'})
})

app.get('/quit', function(req, res) {
    console.log('called');
    res.send({result: 'goodbye'})
})

app.listen(API_PORT, () => console.log('listening on port ' + API_PORT));