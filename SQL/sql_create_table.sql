DROP TABLE classes;

CREATE TABLE classes (
    class_name varchar(100),
    prime_requisite varchar(40),
    hit_dice int,
    max_level int,
    armor varchar(100),
    weapons varchar(100),
    special_abilities varchar(1000)
);

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('fighter', 'Strength', 8, 36, 'Any; Shields Allowed', 'Any', 'Lance attack and set spear vs. charge maneuvers, figter combat options see chapter 8');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('magic-user', 'Intelligence', 4, 36, 'None; no shield permitted', 'Dagger. staff, blowgun, flaming oil, holy water, net, thrown rock, sling, whip.', 'Magical Spells');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('thief', 'Dexterity', 4, 36, 'Leather armor only; shield not per- mitted.', 'Any missile weapon; any one- handed melee weapon.', 'At 1st level—Open Locks, Find Traps, Remove Traps, Climb Walls, Move Silently, Hide in Shadows, Pick Pockets, Hear Noise, and Backstab; at 4th level—Read any normal language 80%; at 10th level—cast magic-user spells from scrolls (10% chance of backfire).');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('cleric', 'Wisdom', 6, 36, 'Any; Shields Allowed', 'No edged or pointed weapons; all others permitted.', 'Turning undead; clerical spells.');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('dwarf', 'constitution', 8, 12, 'Any; Shields Permitted', 'Any Small or Medium melee weapon; short bows and crossbows permited, but longbows forbidden', 'Fighter Maneuvers (Lance Attack and Set Spear vs. Charge maneuvers at 1st level');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('elf', 'Strength, Intelligence', 6, 10, 'All; shields permitted.', 'Any', 'Fighter Maneuvers (Lance Attack, Set Spear vs. Charge; at 850,000 XP, Combat Options for Fighters); half damage from dragon breath at 1,600,000 XP; infravision; extra languages (elf, gnoll, hobgoblin, orc); 1 in 3 chance to detect secret and hidden doors; immunity to ghoul paralysis; magic spells.');

insert into classes (class_name, prime_requisite, hit_dice, max_level, armor, weapons, special_abilities) 
VALUES
('halfling', 'Strength, Dexterity', 6, 8, 'Any; shield is permitted; armor must be designed specifically for halflings.', 'Any Small melee weapon; short bow; light crossbow.', 'Fighter Maneuver (Set Spear vs. Charge); at 900,000 XP, Fighter Combat Options); Combat Bonuses (- 2 AC vs. monsters larger than man-size, +1 to at- tack roll with missile weapons, + 1 to Indi- vidual Initiative); half damage from spells at 300,000 XP, half damage from dragon breath at 2,100,000 XP; 90% chance to hide mo- tionless in woodlands, 33% chance to hide motionless in dimly lit building interiors.');
