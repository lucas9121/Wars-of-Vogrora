class Character { 
  constructor(name){
    this.name = name;
    this.race = ['Human', 'Elf', 'Dwarf']
    this.clss = ['range', 'melee', 'magic']
    this.money = 0
    this.hp = 100
    this.energy = 100
  }
  //story attack 
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
    let cost = 8/this.rec;
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
  atckPotion(){
    if(this.money < 125){
      console.log(`${this.name} doesn't have enough money to buy this`)
    } else {
      if(this.race === 'Human' && this.attack >= 17){
        console.log('Attack limit reached')
        return;
      } else if(this.race === 'Elf' && this.attack >= 15){
        console.log('Attack limit reached')
        return;
      } else if(this.race === 'Dwarf' && this.attack >= 13){
        console.log('Attack limit reached')
        return;
      } else {
        this.money -= 125
        this.attack ++
        console.log(`${this.name} attack power increased by 1`)
      }
    }
  }
  defPotion(){
    if(this.money < 125){
      console.log(`${this.name} doesn't have enough money to buy this`)
    } else {
      if(this.race === 'Human' && this.defense >= 13){
        console.log('Defense limit reached')
        return;
      } else if(this.race === 'Elf' && this.defense >= 15){
        console.log('Defense limit reached')
        return;
      } else if(this.race === 'Dwarf' && this.defense >= 17){
        console.log('Defense limit reached')
        return;
      } else {
        this.money -= 125
        this.defense ++
        console.log(`${this.name} defense strength increased by 1`)
      }
    }
  }
}


class FinalBoss extends Character {
  constructor(name){
    super(name)
    this.race = this.race[0]
    this.hp = 150
    this.attack = 15
    this.defense = 15
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}

class MiniBoss extends Character {
  constructor(name){
    super(name)
    this.attack = 11
    this.defense = 11
    this.race = this.race[Math.floor(Math.random() * this.race.length)]
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
//types of race. Each has a different attribute for Intelect, Stamina, and Agility that affects the output of the their work
class Human extends Character {
  constructor(name){
    super(name)
    this.race = this.race[0]
    this.int = 6 //intelect gives more money
    this.sta = 2 //stamina uses less energy when working
    this.rec= 2 //recovers energy faster
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
    this.rec = 6 //recovers energy faster
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
    this.rec = 2 //recovery replinishes energy faster
    this.attack = 8
    this.defense = 12   
  }
}
class HumanEnemy extends Human {
  constructor(name, attack, defense,){
    super(name, attack, defense)
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class ElfEnemy extends Elf {
  constructor(name, attack, defense){
    super(name, attack, defense)
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class DwarfEnemy extends Dwarf {
  constructor(name, attack, defense){
    super(name, attack, defense)
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
//skill set (stretch goal)
class HumanRange extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = 'Bow'
  }
}
class HumanMelee extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = 'Sword'
  }
}
class HumanMagic extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = 'Wand'
  }
}
class ElfRange extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = 'Throwing Knives'
  }
} 
class ElfMelee extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = 'Spear'
  }
}
class ElfMagic extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = 'Staff'
  }
}
  class DwarfRange extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.weapon = 'Crossbow'
  }
}
class DwarfMelee extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.weapon = 'Hammer'
  }
}
class DwarfMagic extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.weapon = 'Orb'
  }
}

//players
const humanePlayer = new HumanMelee('Human melee');
const dwarfPlayer = new DwarfRange('Dwarf range')
const elfPlayer = new ElfMagic('Elf Magic')

//enemies
const finalBoss = new FinalBoss('Final boss')
const miniBoss1 = new MiniBoss('Mini boss 1')
const humanEnemy1 = new HumanEnemy('Human bad guy')
const elfEnemy1 = new ElfEnemy('Elf bad guy')
const dwarEnemy1 = new DwarfEnemy('Dwarf bad guy')
const humanEnemy2 = new HumanEnemy('Human bad guy')
const elfEnemy2 = new ElfEnemy('Elf bad guy')
const dwarEnemy2 = new DwarfEnemy('Dwarf bad guy')
const humanEnemy3 = new HumanEnemy('Human bad guy')
const elfEnemy3 = new ElfEnemy('Elf bad guy')
const dwarEnemy3 = new DwarfEnemy('Dwarf bad guy')
const humanEnemy4 = new HumanEnemy('Human bad guy')
const elfEnemy4 = new ElfEnemy('Elf bad guy')
const dwarEnemy4 = new DwarfEnemy('Dwarf bad guy')



console.log('New Console Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log(humanePlayer)

