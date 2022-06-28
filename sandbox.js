var character = {
    Name: "Gord",
    Stats: [ 
        { "Strength"    : 15},
        { "Dexterity"   : 14}, 
        { "Constitution": 13}, 
        { "Intelligence": 17}, 
        { "Wisdom"     : 10}, 
        { "Charisma"    : 8} 
           ] 
}



//console.log(JSON.stringify(character));
console.log( character.Name );
console.log( "Str: " + String(character.Stats[0].Strength) );
console.log( "Dex: " + String(character.Stats[1].Dexterity) );
console.log( "Con: " + String(character.Stats[2].Constitution) );
console.log( "Int: " + String(character.Stats[3].Intelligence) );
console.log( "Wis: " + String(character.Stats[4].Wisdom) );
console.log( "Cha: " + String(character.Stats[5].Charisma) );
var GordClass = suggestClass(character);
console.log( "Determined to be a: " + GordClass );




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

    console.log( "FighterScore =" + FighterScore.toString());
    console.log( "ClericScore =" +  ClericScore.toString());
    console.log( "MagicUserScore =" +  MagicUserScore.toString());
    console.log( "ThiefScore =" +  ThiefScore.toString());
    console.log( "DwarfScore =" +  DwarfScore.toString());
    console.log( "ElfScore =" +  ElfScore.toString());
    console.log( "HalflingScore =" +  HalflingScore.toString());


    return finalClass;
}