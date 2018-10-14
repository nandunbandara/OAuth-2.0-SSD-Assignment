const express = require('express');
const axios = require('axios');
const CONFIG = require('./config.json');

const app = express();

const PORT = 8090;

app.use(express.static('public'));


const CLIENT_ID         = CONFIG.CLIENT_ID;
const CLIENT_SECRET     = CONFIG.CLIENT_SECRET;


app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

// redirect endpoint
app.get('/oauth/redirect', (req, res) => {

    let requestToken = req.query.code;
    
    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        const accessToken = response.data.access_token;
        res.redirect(`/profile.html?access_token=${accessToken}`)
    });
});


app.listen(PORT, err => {
    if(err){
        console.log('ERROR: Could not start server on port ', PORT);
        return;
    }

    console.log('SUCCESS: Server started on port ', PORT);
});