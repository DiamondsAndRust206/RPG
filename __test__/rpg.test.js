import { Character } from './../src/js/rpg.js'; 

describe('Character', () => {
  let character;
  beforeEach(() => {
    character = new Character ("Thor", "barbarian");
  });

  test('should create character with name and class properties', () => {
    
    expect(character.name).toEqual("Thor");
    expect(character.classType).toEqual("barbarian");
  });

  test('should give classType barbarian and change attribute to brute', () => {

    character.assignClass();
    expect(character.attribute).toEqual("brute");
  });
});