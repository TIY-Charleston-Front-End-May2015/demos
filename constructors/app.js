// @param {obj} options
function Character(options) {

  this.name = options.name;
  this.life = 100;
  this.ability = options.ability || "jump 10ft";

  this.attack = function (villain, weapon) {
    var chance = Math.floor(Math.random() * 10);
    if(villain.life <= 0) {
      console.log(villain.name +" died, you win the game!!");
    }
    if(chance > 1) {
      console.log("strike! you have damaged " + villain.name + " by " + weapon.power);
      villain.life = villain.life - weapon.power;
    }
  };

  this.getWeapon = function (name, type, power) {
    this.weapon = new Weapon({name: name, type: type, power: power});
  };
  this.lazyAttack = function(villain) {
    if(this.weapon) {
      this.attack(villain, this.weapon);
    }
  };


}

function Weapon(options) {

  this.name = options.name || "pea shooter";
  this.type = options.type || "plant gun";
  this.power = options.power || 1;

}
var skillz = {
  name: "Biff Buff",
  ability: "perception"
  };
var biff = new Character(skillz);
var trevor = new Character(skillz);

var smarf = new Character({name: "Smarf The Impaler", ability: "Impales"});

var fists = new Weapon({name: "The ol' one-two", type: "human hands", power: 3});
var sword = new Weapon({name: "Patrick", type: "blade", power: 5});
var battleRod = new Weapon({name: "Flick", type: "battle rod", power: 10});














console.log("Hello Constructors!!");


function Person(name) {
  this.health = 100;
  this.name = name || "bobby";
  this.petAnimal = function(animal) {
    if(animal.mood === "elated" && animal.isHungry) {
      animal.attack(this);
    }
    if(animal.mood === "happy") {
      animal.mood = "elated";
      animal.isHungry = true;
    }
    if(animal.mood === "sad") {
      animal.mood = "happy";
    }

  };


}

function Pet(name, breed) {

  this.name = name || "snuggles";
  this.breed = breed;
  this.mood = "sad";
  this.isHungry = false;
  this.attack = function (person) {
    person.health = 10;
  };

}

var mitch = new Person('mitch');
var barbearIan = new Pet('barbear-ian', 'grizzly bear');
