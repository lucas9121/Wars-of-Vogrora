class Character { 
  constructor(name){
    this.name = name;
    this.race = ['Human', 'Elf', 'Dwarf']
    this.clss = ['range', 'magic', 'melee']
    this.rank = ['Bronze', 'Silver', 'Gold', 'Platinum']
    this.mood = 
    this.money = 0
    this.hp = 100
    this.energy = 100
  }
  emotionalState() {
    let emotions = ['happy', 'sad', 'angry', 'annoyed', 'excited']; 
    let randomizer =  Math.floor(Math.random() * emotions.length);
    this.mood = emotions[randomizer]; 
  }
  //campaign attack 
  attackMode(other) {
    let playerAtck = Math.round(10 + (this.attack - other.defense));
    let enemyAtck = Math.round(5 + (other.attack - this.defense));
    for(let i = 0; i < 50; i++){
      if(this.hp > 0 && other.hp <= 0){
        console.log(`${other.name} was defeated! ${this.name} won`)
        break
      } else if(other.hp > 0 && this.hp <= 0){
        console.log(`${this.name} was killed in battle. You lose`)
        break
      }
      if(this.hp > 0 && other.hp > 0){
        other.hp -= playerAtck
        if(playerAtck > other.hp){//hp would equal a negative number
          other.hp = 0
        }
        console.log(`${this.name} attacked ${other.name} and dealt ${playerAtck} damage`)
        console.log(`${other.name} hp is now ${other.hp}`)
      } 
      if(this.hp > 0 && other.hp > 0){
        this.hp -= enemyAtck
        if(enemyAtck > this.hp){
          this.hp = 0
        }
        console.log(`${other.name} attacked ${this.name} and dealt ${enemyAtck} damage`)
        console.log(`${this.name} hp is now ${this.hp}`)
      }
    }
    this.hp = 100
  }
  //determines what class does more damage
  battleRules(otherCharacter){
    if(otherCharacter.clss[0] && this.clss[1]){
      console.log(otherCharacter.name + ' lost 20 hp');
      otherCharacter.hp -=20;
      console.log(this.name + ' lost 10 hp');
      this.hp -=10;
    } else if(otherCharacter.clss[0] && this.clss[2]){
      console.log(this.name + ' lost 20 hp');
      this.hp -=20;
      console.log(otherCharacter.name + ' lost 10 hp');
      otherCharacter.hp -=10;
    } else if(otherCharacter.clss[1] && this.clss[0]){
      console.log(this.name + ' lost 20 hp');
      this.hp -=20;
      console.log(otherCharacter.name + ' lost 10 hp');
      otherCharacter.hp -=10;
    } else if(otherCharacter.clss[1] && this.clss[2]){
      console.log(otherCharacter.name + ' lost 20 hp');
      otherCharacter.hp -=20;
      console.log(this.name + ' lost 10 hp');
      this.hp -=10;
    } else if(otherCharacter.clss[2] && this.clss[0]){
      console.log(otherCharacter.name + ' lost 20 hp');
      otherCharacter.hp -=20;
      console.log(this.name + ' lost 10 hp');
      this.hp -=10;
    } else if(otherCharacter.clss[2] && this.clss[1]){
      console.log(this.name + ' lost 20 hp');
      this.hp -=10;
      console.log(otherCharacter.name + ' lost 10 hp');
      otherCharacter.hp -=10;
    } else {
      console.log( this.name + ' lost 10 hp');
      this.hp -=10;
      console.log( otherCharacter.name + ' lost 10 hp');
      otherCharacter.hp -=10;
    }
  }
  //runs battle until someone loses
  battleLoop(otherCharacter){
    for (let i=0; i<100; i++){
      if(this.hp > 0 && otherCharacter.hp > 0){
        this.battleRules(otherCharacter);
        console.log(`${this.name}'s' hp is ${this.hp} and ${otherCharacter.name}'s hp is ${otherCharacter.hp}`)
      }
    }
    if(this.hp > otherCharacter.hp){
      console.log(`Winner!! ${this.name} defeated ${otherCharacter.name}`)
      this.hp = 100;
      otherCharacter.hp = 100;
    } else if(this.hp < otherCharacter.hp){
      console.log(`You Lose!! ${otherCharacter.name} defeated ${this.name}`)
      this.hp = 100;
      otherCharacter.hp = 100;
    } else {
      console.log(`It's a tie.`)
      otherCharacter.hp = 100;
      this.hp = 100;
    }
    console.log(`your hp is ${this.hp} and enemy's hp is ${otherCharacter.hp}`)
  }
  //battle changes the rank of players *Stretch goal*
  sparring(otherCharacter){
    this.battleLoop(otherCharacter);
    if(this.result < 2){
      this.rank = this.rank[0];
      console.log(`Your rank is ${this.rank}`)
    } else if(this.result >= 2 && this.result < 5){
      this.rank = this.rank[1];
      console.log(`Your rank is ${this.rank}`)
    } else if(this.rank >= 5 && this.rank < 8){
      this.rank = this.rank[2];
      console.log(`Your rank is ${this.rank}`)
    } else if(this.result > 8){
      this.rank = this.rank[3];
      console.log(`Your rank is ${this.rank}`)
    }
  }
  //earn money by using energy
  work(){
    let workPrice = 13 - this.sta
    if(workPrice > this.energy){
      console.log(`You have insuficient energy. Eat some food to replenish your energy`)
      return
    }
    for(let i=0; i<100; i++){
      if(this.energy > 0){
        if(workPrice > this.energy ){
          console.log(`You made a total of $${this.money}`)
          console.log(`You have ${this.energy} energy remaining`)
          console.log('break here')
          return
        } else {
          this.energy -= workPrice;
          this.money += 5 + this.int;
          console.log(`${this.name} spent ${workPrice} energy working and made $${5 + this.int}`)
          console.log (`You now have $${this.money} and ${this.energy} energy remaining`)
        }
      } 
    }
  }
  //recover energy by spending money
  eat(){
    let cost = 8/this.agi;
    if(this.money - cost < 0){ //if price of food is greater than current money owned
      console.log('Not enough money')
      return
    }
    if(this.energy >= 100){
      console.log(`${this.name} energy is full`)
      return
    }
    for(let i=0; i<100; i++){
      if(this.money > 0){
        if(this.energy + 8 > 100 && this.energy >= 95){// Energy isn't full, but is too high for the equation
          this.money -- 
          this.energy = 100
          console.log('adding remaining energy')
          break
        } else if(this.energy + 8 > 100){
          console.log('Energy is full')
          break
        } else {
          this.money -= cost;
          this.energy += 8;
          console.log(`${this.name} energy is now ${this.energy}`)
          console.log(`${this.name} has $${Math.round(this.money)} remaining`)
        }
      }
    }
    this.money = Math.round(this.money);
    this.energy = Math.floor(this.energy);
    console.log(`You have $${this.money}`)
    console.log(`You have ${this.energy} energy`)
  }
}
class mainVilain extends Character {
  constructor(name){
    super(name)
    this.race = this.race[0]
    this.hp = 150
    this.attack = 15
    this.defense = 15
  }
}
//types of race. Each has a different attribute for Intelect, Stamina, and Agility that affects the output of the their work
class Human extends Character {
  constructor(name){
    super(name)
    this.race = this.race[0]
    this.int = 6 //intelect gives more money
    this.sta = 2 //stamina uses less energy when working
    this.agi = 2 //recovers energy faster
    this.attack = 12 
    this.defense = 8 
  }
}
class Elf extends Character {
  constructor(name){
    super(name);
    this.race = this.race[1]
    this.int = 2 //intelect gives more money
    this.sta = 2 //stamina uses less energy when working
    this.agi = 6 //recovers energy faster
    this.attack = 10
    this.defense = 10
  }
}
class Dwarf extends Character {
  constructor(name){
    super(name);
    this.race = this.race[2]
    this.int = 2 //intelect gives more money
    this.sta = 6 //stamina uses less energy when working
    this.agi = 2 //recovers energy faster
    this.attack = 8
    this.defense = 12   
  }
}
class HumanRange extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = weapon
  }
}
class HumanMelee extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = weapon
  }
}
class HumanMagic extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = weapon
  }
}
class ElfRange extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = weapon
  }
} 
class ElfMelee extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = weapon
  }
}
class ElfMagic extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = weapon
  }
}
  class DwarfRange extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = weapon
  }
}
class DwarfMelee extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = weapon
  }
}
class DwarfMagic extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = weapon
  }
}
 

const finalBoss = new mainVilain('boss')
const kirito = new HumanMelee('Kirito', 'Sword');
const rick = new Human('Rick', 'Portal Gun');
const harry = new HumanMagic('Harry Poter', 'Wand')
const jack = new HumanRange('Jack', 'Bow',)
const jill = new DwarfMelee('Jill', 'Sword')
const giant = new ElfMagic('Hagrid', 'Staff')


console.log('New Console Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// console.log(finalBoss)
// kirito.attackMode(finalBoss)
kirito.work()
kirito.eat()
kirito.eat()
console.log(kirito)
// console.log('New Battle !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// kirito.attackMode(harry)

// kirito.attackMode(giant)
// jill.attackMode(jack)
// giant.attackMode(jill)
// console.log(kirito)
// kirito.work()
// console.log(kirito)
// kirito.work()
// console.log(kirito)
// kirito.eat()
// console.log(kirito)
// kirito.eat()
// console.log(kirito)
// kirito.eat()
// kirito.eat()
// console.log(kirito)
// giant.work()
// console.log(giant)
// giant.eat()
// console.log(jill)
// jill.work()
// console.log(jill)
// jill.eat()
// console.log(jill)


