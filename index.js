function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

function d4() {
    return getRandomInt(4);
}

function d6() {
    return getRandomInt(6);
}

function d8() {
    return getRandomInt(8);
}

function d10() {
    return getRandomInt(10);
}

function d12() {
    return getRandomInt(12);
}

function d20() {
    return getRandomInt(20);
}

function d100() {
    return getRandomInt(100);
}

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');

    });

app.get('/character/create', (req, res) => {
    var str = d6()+d6()+d6();
    var dex = d6()+d6()+d6();
    var con = d6()+d6()+d6();
    var int = d6()+d6()+d6();
    var wis = d6()+d6()+d6();
    var chr = d6()+d6()+d6();
    var name = "Gord"
    
    var character = {
        charname: name,
        stats: [ str, dex, con, int, wis, chr ] 
    }
    res.status(200);
    res.append('Content-Type', 'application/json');
    res.send(JSON.stringify(character)); 
});

//original example

app.set('port', process.env.PORT || 3000); //required by Heroku
app.listen(process.env.PORT, () => console.log('Listening on port 3000'));