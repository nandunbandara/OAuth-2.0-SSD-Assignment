const express = require('express');
const app = express();

const PORT = 8090;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(PORT, err => {
    if(err){
        console.log('ERROR: Could not start server on port ', PORT);
        return;
    }

    console.log('SUCCESS: Server started on port ', PORT);
});