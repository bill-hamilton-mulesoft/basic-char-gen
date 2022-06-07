// namemaker is three maps that can be referenced for making names
//
const nm = require("./namemaker/namemaker.js");

// Dice functions to create some random numbers that simulate RPG dice
// TODO: Simplfy this
//
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

function d3() {
    return getRandomInt(3);
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

// express is our REST toolkit
//
const express = require('express');
// create the REST app to listen and run the framework
const app = express();

// GET /
// Return a simple Hello World
//
app.get('/', (req, res) => {
    res.send('Hello World');
    });

// GET /character/create
// This returns the very basics of a Basic D&D Character
// TODO: Flesh this out and finish it, lot of work to do here
//
app.get('/character/create', (req, res) => {
    // Rolling the character attributes which are 3d6
    var str = d6()+d6()+d6();
    var dex = d6()+d6()+d6();
    var con = d6()+d6()+d6();
    var int = d6()+d6()+d6();
    var wis = d6()+d6()+d6();
    var chr = d6()+d6()+d6();

    // Look up parts of the names with random dice rolls against the namemaker
    // name tables
    var name = nm.mapBeg.get(d10()) + nm.mapMid.get(d10()) + nm.mapEnd.get(d10())
    
    // Build the return character JSON structure
    var character = {
        Name: name,
        Stats: [ str, dex, con, int, wis, chr ] 
    }

    // Assuming everything is good, return the 200 all good status code
    res.status(200);
    // Tell the client what data format our return data is in
    res.append('Content-Type', 'application/json');
    // Return the JSON structure as a string
    res.send(JSON.stringify(character)); 
});

// Everything is set now so lets start up our app/service
//
// Heroku is going to hand us a port variable to use for the port
app.set('port', process.env.PORT || 3000); //required by Heroku
// Lets log this port
console.log( process.env.PORT );
// This is the final call that doesn't return
// It starts up the REST Service
app.listen(process.env.PORT, () => console.log("Listening for requests."));