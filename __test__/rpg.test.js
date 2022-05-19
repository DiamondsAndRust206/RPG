import { Character } from './../src/js/hero.js'; 
import { Enemy } from './../src/js/enemy.js'; 

describe('Character', () => {
  let character; 
  beforeEach(() => {
    
  });

  test('should create character with name and class properties', () => {
    character = new Character("Thor", "barbarian");
    expect(character.name).toEqual("Thor");
    expect(character.classType).toEqual("barbarian");
  });

  test('should give classType barbarian and change attribute to brutes', () => {
    character = new Character ("Thor", "barbarian");
    character.assignClass();
    expect(character.attribute).toEqual("brute");
  });

  test('should give classType ninja and change attribute to stealth', () => {
    character = new Character ("Shadow", "ninja");
    character.assignClass();
    expect(character.attribute).toEqual("stealth");
  });

  test('should give classType pirate and change attribute to sneaky', () => {
    character = new Character ("Sparrow", "pirate");
    character.assignClass();
    expect(character.attribute).toEqual("sneaky");
  });

  test('should use potion to increase health', () => {
    character.usePotion(1);
    expect(character.health).toEqual(125); 
  });

  test('should not increase level by 1 if xp is less than 5', () => {
    character.xp = 4;
    character.levelUp();
    expect(character.level).toEqual(1);
  });

  test('should increase level by 1 if xp is greater than or equal to 5', () => {
    character.xp = 5;
    character.levelUp();
    expect(character.level).toEqual(2);
  });

});

describe('Enemy', () => {
  let enemy;

  test('should give enemy name and type property values', () => {
    enemy = new Enemy("Bjork", "troll");
    expect(enemy.name).toEqual("Bjork");
    expect(enemy.type).toEqual("troll");
  });

});