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
    } else if (this.classType === "ninja") {
      this.attribute = "stealth";
    } else if (this.classType === "pirate") {
      this.attribute = "sneaky";
    }
  }
  usePotion(amount) {
    this.healthPotions - 1
    return(this.health += (amount * 25))
  };
  levelUp() {
    if (this.xp >= 5) {
      this.level += 1;
      this.xp -= 5;
    } else {
      this.level += 0;
    }
  }
}