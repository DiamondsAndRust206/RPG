//Character Constructor 
export class Character {
  constructor(name, classType) {
    this.name = name;
    this.classType = classType;
    this.attribute = "";
    this.health = 100;
    this.level = 1;
    this.xp = 0;
    this.healthPotions = 3;
  }
  assignClass() {
    if (this.classType === "barbarian") {
      this.attribute = "brute";
    }
  }
}