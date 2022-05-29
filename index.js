function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');

    });

app.get('/character/create', (req, res) => {
    var str = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var dex = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var con = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var int = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var wis = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var chr = getRandomInt(6)+getRandomInt(6)+getRandomInt(6)+3;
    var name = "Gord"
    
    var character = {
        charname: name,
        stats: [ str, dex, con, int, wis, chr ] 
    }

    res.send(JSON.stringify(character)); 
});

//original example
//app.listen(3000, () => console.log('Listening on port 3000'));
app.set('port', process.env.PORT || 3000); //required by Heroku