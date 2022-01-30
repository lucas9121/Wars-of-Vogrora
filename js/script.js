
//DOM
const tittlePg = document.querySelector('#first')
const startBtn = document.querySelector('#start')

//Story page DOM
const storyPg = document.querySelector('#story')

//Character Creation DOM
const createPg = document.querySelector('#create')
const createImg = document.querySelector('#char-image')
const humanBtn = document.querySelector('.char-race > button:nth-of-type(1)')
const elfBtn = document.querySelector('.char-race > button:nth-of-type(2)')
const dwarfBtn = document.querySelector('.char-race > button:nth-of-type(3)')
const meleeBtn = document.querySelector('.char-class > button:nth-of-type(1)')
const rangeBtn = document.querySelector('.char-class > button:nth-of-type(2)')
const magicBtn = document.querySelector('.char-class > button:nth-of-type(3)')
const createName = document.querySelector('.create-char > input:nth-of-type(1)')
const createBtn = document.querySelector('.create-char > input:nth-of-type(2)')

//Main page DOM
const mainPg = document.querySelector('#main')
const charInfo = document.querySelector('.char-info')
const charName = document.querySelector('.char-info > .name')
const charRace = document.querySelector('.char-info > .race')
const charClass = document.querySelector('.char-info > .class')
const charEnergy = document.querySelector('.char-info > .energy')
const charMoney = document.querySelector('.char-info > .money')
const charStats = document.querySelector('.char-info > .stat')
const storeBtn = document.querySelector('#store')
const fightBtn = document.querySelector('#fight')
const eatBtn = document.querySelector('#eat')
const workBtn = document.querySelector('#work')

//Store pop up DOM
const storePg = document.querySelector('.store')
const storeClose = document.querySelector('.store > button')

//Fight pop up
const fightPg = document.querySelector('.fight')
const fightClose = document.querySelector('.fight > button')
const atckBtn = document.querySelector('.fight > div > button:nth-of-type(1)')
const retreatBtn = document.querySelector('.fight > dic > button:nth-of-type(2)')
const firstTxt = document.querySelector('#first-text')
const secTxt = document.querySelector('#second-text')

//Eat pop up
const eatPg = document.querySelector('.eat')
const eatClose = document.querySelector('.eat > button')
const eatList = document.querySelector('#eat-list')
const eatTxt = document.querySelector('#eat-text')

//work pop up
const workPg = document.querySelector('.work')
const workClose = document.querySelector('.work > button')
const workList = document.querySelector('#work-list')
const workTxt = document.querySelector('#work-text')


class Character { 
  constructor(){
    this.name = '';
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
        secTxt.textContent = `${other.name} was defeated! ${this.name} won`
        break
      } else if(other.hp > 0 && this.hp <= 0){
        secTxt.textContent = `${this.name} was killed in battle. You lose`
        break
      }
      if(this.hp > 0 && other.hp > 0){
        other.hp -= playerAtck
        if(playerAtck > other.hp){//hp would equal a negative number
          other.hp = 0
        }
        const plLi1 = document.createElement('li')
        plLi1.textContent = `${this.name} attacked ${other.name} and dealt ${playerAtck} damage`
        firstTxt.appendChild(plLi1)
        const plLi2 = document.createElement('li')
        plLi2.textContent = `${other.name} hp is now ${other.hp}`
        firstTxt.appendChild(plLi2)
      } 
      if(this.hp > 0 && other.hp > 0){
        this.hp -= enemyAtck
        if(enemyAtck > this.hp){
          this.hp = 0
        }
        const enLi1 = document.createElement('li')
        enLi1.textContent = `${other.name} attacked ${this.name} and dealt ${enemyAtck} damage`
        firstTxt.appendChild(enLi1)
        const enLi2 = document.createElement('li')
        enLi2.textContent = `${this.name} hp is now ${this.hp}`
        firstTxt.appendChild(enLi2)
      }
    }
  }
  //earn money by using energy
  work(){
    let workPrice = 13 - this.sta
    if(workPrice > this.energy){
      workTxt.textContent = `You have insuficient energy. Eat some food to replenish your energy`
      // console.log(`You have insuficient energy. Eat some food to replenish your energy`)
      return
    }
    for(let i=0; i<100; i++){
      if(this.energy > 0){
        if(workPrice > this.energy ){
          workTxt.textContent = `You made a total of $${this.money}`
          // console.log(`You made a total of $${this.money}`)
          // console.log(`You have ${this.energy} energy remaining`)
          return
        } else {
          this.energy -= workPrice;
          this.money += 5 + this.int;
          const li1 = document.createElement('li')
          li1.textContent = `${this.name} spent ${workPrice} energy working and made $${5 + this.int}`
          workList.appendChild(li1)
          const li2 = document.createElement('li')
          li2.textContent = `You now have $${this.money} and ${this.energy} energy remaining`
          workList.appendChild(li2)
        //   console.log(`${this.name} spent ${workPrice} energy working and made $${5 + this.int}`)
        //   console.log (`You now have $${this.money} and ${this.energy} energy remaining`)
        }
      } 
    }
    // charMoney.textContent = this.money
    // charEnergy.textContent = this.energy
  }
  //recover energy by spending money
  eat(){
    let cost = 8/this.rec;
    if(this.money - cost < 0){ //if price of food is greater than current money owned
      // console.log('Not enough money')
      eatTxt.textContent = 'Not enough money'
      return
    }
    if(this.energy >= 100){
      // console.log(`${this.name} energy is full`)
      eatTxt.textContent = `${this.name} energy is full`
      return
    }
    for(let i=0; i<100; i++){
      if(this.money > 0){
        if(this.energy + 8 > 100 && this.energy >= 95){// Energy isn't full, but is too high for the equation
          this.money -- 
          this.energy = 100
          eatTxt.textContent = `${this.name} energy is full`
          // console.log('adding remaining energy')
          break
        } else if(this.energy + 8 > 100){
          eatTxt.textContent = `${this.name} energy is full`
          // console.log('Energy is full')
          break
        } else {
          this.money -= cost;
          this.energy += 8;
          const li1 = document.createElement('li')
          li1.textContent = `${this.name} energy is now ${this.energy}`
          eatList.appendChild(li1)
          const li2 = document.createElement('li')
          li2.textContent = `${this.name} has $${Math.round(this.money)} remaining`
          eatList.appendChild(li2)
          // console.log(`${this.name} energy is now ${this.energy}`)
          // console.log(`${this.name} has $${Math.round(this.money)} remaining`)
        }
      }
    }
    this.money = Math.round(this.money);
    this.energy = Math.floor(this.energy);
    // console.log(`You have $${this.money}`)
    // console.log(`You have ${this.energy} energy`)
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


//Enemy bosses
class FinalBoss extends Character {
  constructor(name){
    super(name)
    this.name = 'Final Boss'
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
    this.name = 'Mini Boss'
    this.attack = 12
    this.defense = 12
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

//Enemy Minions
class HumanEnemy extends Human {
  constructor(name, attack, defense,){
    super(name, attack, defense)
    this.name = `${this.clss[Math.floor(Math.random() * this.clss.length)]} human enemy`
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class ElfEnemy extends Elf {
  constructor(attack, defense){
    super(attack, defense)
    this.name = `${this.clss[Math.floor(Math.random() * this.clss.length)]} elf enemy`
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class DwarfEnemy extends Dwarf {
  constructor(attack, defense){
    super(attack, defense)
    this.name = `${this.clss[Math.floor(Math.random() * this.clss.length)]} dwarf enemy`
    this.hp = 70
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}


//Fighting class 
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

//player instance
let player = null; 

//enemies instance
const finalBoss = new FinalBoss()
const miniBoss = new MiniBoss()
const humanEnemy1 = new HumanEnemy()
const elfEnemy1 = new ElfEnemy()
const dwarEnemy1 = new DwarfEnemy()
const humanEnemy2 = new HumanEnemy()
const elfEnemy2 = new ElfEnemy()
const dwarEnemy2 = new DwarfEnemy()
const humanEnemy3 = new HumanEnemy()
const elfEnemy3 = new ElfEnemy()
const dwarEnemy3 = new DwarfEnemy()

let enemyArr = [finalBoss, miniBoss, humanEnemy1, elfEnemy1, dwarEnemy1, humanEnemy2, elfEnemy2, dwarEnemy2, humanEnemy3, elfEnemy3, dwarEnemy3]


fightBtn.textContent = `Fight(${enemyArr.length})`

///////////////// buttons ////////////////////
startBtn.addEventListener('click', (evt) => {
  console.log('it works')
  startBtn.style.color = 'white';
  storyPg.style.display = 'flex';
  tittlePg.style.display = 'none';
})


///////// create page buttons ///////////////
humanBtn.addEventListener('click', (evt) => {
  humanBtn.style.color = 'red'
  elfBtn.style.color = 'white'
  dwarfBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Human;
  console.log(player)
})

elfBtn.addEventListener('click', (evt) => {
  elfBtn.style.color = 'red'
  humanBtn.style.color = 'white'
  dwarfBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Elf;
  console.log(player)
})

dwarfBtn.addEventListener('click', (evt) => {
  dwarfBtn.style.color = 'red'
  elfBtn.style.color = 'white'
  humanBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Dwarf;
  console.log(player)
})
meleeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a class first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new HumanMelee;
  } 
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new ElfMelee;
  } 
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new DwarfMelee;
  }
})
rangeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a class first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new HumanRange;
  } 
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new ElfRange;
  } 
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new DwarfRange;
  }
})
magicBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a class first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new HumanMagic;
  } 
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new ElfMagic;
  } 
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new DwarfMagic;
  }
})

createBtn.addEventListener('click', (evt) => {
  if(player.clss.length < 5 || createName.value == false){
    if(player.clss.length < 5){
      alert('You need to pick a fighting class')
    } 
    if(createName.value == false){
      alert('You need to choose a name')
    }
  } else {
    player.name = createName.value
    charName.textContent = createName.value
    charRace.textContent = player.race
    charClass.textContent = player.clss
    charEnergy.textContent = player.energy
    charMoney.textContent = player.money
    
  }
})


///////////// main page buttons /////////////////
charInfo.addEventListener('mouseover', (evt) => {
  charStats.innerHTML = `Attack: ${player.attack} <br> Defense: ${player.defense} <br> Intellect: ${player.int} <br> Stamina: ${player.sta} <br> Recovery: ${player.rec}`

})
charInfo.addEventListener('mouseout', (evt) => {
  charStats.textContent = ''
})
storeBtn.addEventListener('click', (evt) => {
  fightBtn.disabled = true
  eatBtn.disabled = true
  workBtn.disabled = true
  fightBtn.style.color = 'white'
  storeBtn.style.color = 'red'
  eatBtn.style.color = 'white'
  workBtn.style.color = 'white'
  storePg.classList.add('pop-up')
})
storeClose.addEventListener('click', (evt) => {
  fightBtn.disabled = false
  eatBtn.disabled = false
  workBtn.disabled = false
  storePg.classList.remove('pop-up')
  storeBtn.style.color = 'white'
})

fightBtn.addEventListener('click', (evt) => {
  storeBtn.disabled = true
  eatBtn.disabled = true
  workBtn.disabled = true
  fightBtn.style.color = 'red'
  storeBtn.style.color = 'white'
  eatBtn.style.color = 'white'
  workBtn.style.color = 'white'
  fightPg.classList.add('pop-up')
})
atckBtn.addEventListener('click', (evt) => {
  player.attackMode(enemyArr[enemyArr.length - 1])
})

fightClose.addEventListener('click', (evt) => {
  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp > 0){
    alert(' you must defeat the enemy or retreat bofre closing the window')
  }
  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp <= 0){
    fightPg.classList.remove('pop-up')
    fightBtn.style.color = 'white'
    player.hp = 100
    enemyArr.pop()
  }
  if(player.hp <= 0){
    fightPg.classList.remove('pop-up')
    fightBtn.style.color = 'white'
    player.hp = 100;
    enemyArr[enemyArr.length - 1].hp = 100;
  }
  fightBtn.textContent = `Fight(${enemyArr.length})`
  firstTxt.textContent = ''
  secTxt.textContent = ''
  storeBtn.disabled = false
  eatBtn.disabled = false
  workBtn.disabled = false
})

eatBtn.addEventListener('click', (evt) => {
  fightBtn.disabled = true
  storeBtn.disabled = true
  workBtn.disabled = true
  fightBtn.style.color = 'white'
  storeBtn.style.color = 'white'
  eatBtn.style.color = 'red'
  workBtn.style.color = 'white'
  eatPg.classList.add('pop-up')
  player.eat()
})
eatClose.addEventListener('click', (evt) => {
  eatPg.classList.remove('pop-up')
  eatBtn.style.color = 'white'
  charMoney.textContent = player.money
  charEnergy.textContent = player.energy
  eatList.textContent = ''
  eatTxt.textContent = ''
  fightBtn.disabled = false
  storeBtn.disabled = false
  workBtn.disabled = false
})

workBtn.addEventListener('click', (evt) => {
  fightBtn.disabled = true
  storeBtn.disabled = true
  eatBtn.disabled = true
  fightBtn.style.color = 'white'
  storeBtn.style.color = 'white'
  eatBtn.style.color = 'white'
  workBtn.style.color = 'red'
  workPg.classList.add('pop-up')
  player.work()
})
workClose.addEventListener('click', (evt) => {
  workPg.classList.remove('pop-up')
  workBtn.style.color = 'white'
  charMoney.textContent = player.money
  charEnergy.textContent = player.energy
  workList.textContent = ''
  workTxt.textContent = ''
  fightBtn.disabled = false
  storeBtn.disabled = false
  eatBtn.disabled = false
})



