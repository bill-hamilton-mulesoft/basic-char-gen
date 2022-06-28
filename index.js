// namemaker is three maps that can be referenced for making names
//
const nm = require("./namemaker/namemaker.js");
const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

client.connect();

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

// GET /character/create2
// This returns the very basics of a Basic D&D Character
// TODO: Flesh this out and finish it, lot of work to do here
// This one returns a better structure
//
app.get('/character/create2', (req, res) => {
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
        Stats: [ 
            { "Strength"    : str},
            { "Dexterity"   : dex}, 
            { "Constitution": con}, 
            { "Intelligence": int}, 
            { "Wisdoem"     : wis}, 
            { "Chrasima"    : chr} 
               ] 
    }
    var goodClass = suggestClass(character);
    var goodCharacter = {
        Name: name,
        Stats: [ 
            { "Strength"    : str},
            { "Dexterity"   : dex}, 
            { "Constitution": con}, 
            { "Intelligence": int}, 
            { "Wisdoem"     : wis}, 
            { "Chrasima"    : chr} 
               ],
        Class: goodClass 
    }

    // Assuming everything is good, return the 200 all good status code
    res.status(200);
    // Tell the client what data format our return data is in
    res.append('Content-Type', 'application/json');
    // Return the JSON structure as a string
    res.send(JSON.stringify(goodCharacter)); 
});

// GET /
// Return a simple Hello World
//
app.get('/db', (req, res) => {
    //var allrows;
    //var i = 1;
    client.query('SELECT * FROM classes;', (err, res1) => {
       if (err) throw err;
        res.status(200);
        // Tell the client what data format our return data is in
        res.append('Content-Type', 'application/json');

        var dbresponse = {
            message: "Database Service is now operational",
            results: res1.rows         
        }
    // Return the JSON structure as a string
    res.send(JSON.stringify(dbresponse));
    });
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

function suggestClass( pc ) {
    var ClericScore = 0;
    var FighterScore = 0;
    var MagicUserScore = 0;
    var ThiefScore = 0;
    var DwarfScore = 0;
    var ElfScore = 0;
    var HalflingScore = 0;
    var finalClass = "fighter";
    
    //Prime Requisite Matters
    if (pc.Stats[0].Strength > 13 ) { FighterScore = FighterScore + 10; ElfScore = ElfScore + 5; HalflingScore = HalflingScore + 5 }
    if (pc.Stats[1].Dexterity > 13 ) { ThiefScore = ThiefScore + 10; HalflingScore = HalflingScore + 5 }
    if (pc.Stats[2].Constitution > 13 ) { DwarfScore = DwarfScore + 10 }
    if (pc.Stats[3].Intelligence > 13 ) { MagicUserScore = MagicUserScore + 10; ElfScore = ElfScore + 5 }
    if (pc.Stats[4].Wisdom > 13 ) { ClericScore = ClericScore + 10 }

    //assume 'fighter'
    finalClass = "fighter";
    var bestScore = 0;
    //calc fighter score
    FighterScore = FighterScore + (pc.Stats[0].Strength - 10 );
    bestScore = FighterScore;
    //calc magic-user score
    MagicUserScore = MagicUserScore + (pc.Stats[3].Intelligence - 10);
    if (MagicUserScore >= FighterScore ) { finalClass = "magic-user"; bestScore = MagicUserScore }
    //calc cleric score
    ClericScore = ClericScore + (pc.Stats[4].Wisdom - 10);
    if (ClericScore >= bestScore) { finalClass = "cleric"; bestScore = ClericScore}
    //calc thief score
    ThiefScore = ThiefScore + (pc.Stats[1].Dexterity - 10);
    if (ThiefScore >= bestScore ) { finalClass = "thief"; bestScore = ThiefScore}
    //calc dwarf
    DwarfScore = DwarfScore + (pc.Stats[2].Constitution - 10);
    if (DwarfScore >= bestScore ) { finalClass = "dwarf"; bestScore = DwarfScore}
    //calc elf
    ElfScore = ElfScore + (pc.Stats[0].Strength - 10 ) + (pc.Stats[3].Intelligence - 10);
    if (ElfScore >= bestScore) {finalClass = "elf"; bestScore = ElfScore}
    //calc halfling
    HalflingScore = HalflingScore + (pc.Stats[0].Strength - 10 ) + (pc.Stats[1].Dexterity - 10)
    if (HalflingScore >= bestScore ) {finalClass = "halfling"; bestScore = HalflingScore }
    return finalClass;
}