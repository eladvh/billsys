const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'Elad'});
});

const PORT = proccess.env.PORT || 5000;
app.listen(5000);