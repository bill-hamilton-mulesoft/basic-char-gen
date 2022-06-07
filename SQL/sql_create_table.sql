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
