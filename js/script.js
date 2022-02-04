
///////////////// Title page DOM //////////////////////////////////////////////////////////
const tittlePg = document.querySelector('#first')
const startBtn = document.querySelector('#start')

///////////////// Story page DOM //////////////////////////////////////////////////////////
const storyPg = document.querySelector('#story')

//////////////// Character Creation DOM ////////////////////////////////////////////////////
const createPg = document.querySelector('#create')
const createImg = document.querySelector('#char-image')
const maleBtn = document.querySelector('.char-gender > button:nth-of-type(1)')
const femaleBtn = document.querySelector('.char-gender > button:nth-of-type(2)')
const humanBtn = document.querySelector('.char-race > button:nth-of-type(1)')
const elfBtn = document.querySelector('.char-race > button:nth-of-type(2)')
const dwarfBtn = document.querySelector('.char-race > button:nth-of-type(3)')
const meleeBtn = document.querySelector('.char-class > button:nth-of-type(1)')
const rangeBtn = document.querySelector('.char-class > button:nth-of-type(2)')
const magicBtn = document.querySelector('.char-class > button:nth-of-type(3)')
const createName = document.querySelector('.create-char > input:nth-of-type(1)')
const createBtn = document.querySelector('.create-char > input:nth-of-type(2)')
///Character Images
const maleElfRng = document.querySelector('.male-elf-range')
const maleElfMgc = document.querySelector('.male-elf-magic')
const femaleHumRng = document.querySelector('.female-human-range')

////////////////// Main page DOM ///////////////////////////////////////////////////////////
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
///Main Images
const maleElfRng2 = document.querySelector('.male-elf-range2')
const maleElfMgc2 = document.querySelector('.male-elf-magic2')
const femaleHumRng2 = document.querySelector('.female-human-range2')

//////////////////// Store pop up DOM /////////////////////////////////////////////////////
const storePg = document.querySelector('.store')
const storeClose = document.querySelector('.store > button')
const atkBuyBtn = document.querySelector('#atk-potion > div > button')
const atkPtnTxt = document.querySelector('#atk-potion > div > p:nth-of-type(2)')
const defBuyBtn = document.querySelector('#def-potion > div > button')
const defPtnTxt = document.querySelector('#def-potion > div > p:nth-of-type(2)')

////////////////////// Fight pop up DOM /////////////////////////////////////////////////////////
const fightPg = document.querySelector('.fight')
const fightClose = document.querySelector('.fight > button')
const atckBtn = document.querySelector('.fight > div:nth-of-type(2) > button:nth-of-type(1)')
const retreatBtn = document.querySelector('.fight > div:nth-of-type(2) > button:nth-of-type(2)')
const firstTxt = document.querySelector('#first-text')
const secTxt = document.querySelector('#second-text')
///Fight Images
const maleElfRng3 = document.querySelector('.male-elf-range3')
const maleElfRngEn = document.querySelector('.male-elf-range-enemy')
const arrowAtk = document.querySelector('.arrow')
const arrowHit = document.querySelector('.arrow-enemy')
const maleElfMgc3 = document.querySelector('.male-elf-magic3')
const maleElfMgcEn = document.querySelector('.male-elf-magic-enemy')
const magicSpell = document.querySelector('.spell')
const magicAtk = document.querySelector('.player-spell-animation')
const magicHit = document.querySelector('.enemy-spell-animation')
const femaleHumRng3 = document.querySelector('.female-human-range3')
const femaleHumRngEn = document.querySelector('.female-human-range-enemy')

///////////////////// Eat pop up DOM ////////////////////////////////////////////////////////
const eatPg = document.querySelector('.eat')
const eatClose = document.querySelector('.eat > button')
const eatList = document.querySelector('#eat-list')
const eatTxt = document.querySelector('#eat-text')

//////////////////// Work pop up DOM ////////////////////////////////////////////////////////
const workPg = document.querySelector('.work')
const workClose = document.querySelector('.work > button')
const workList = document.querySelector('#work-list')
const workTxt = document.querySelector('#work-text')


//////////////////////////Game rules and Creation //////////////////////////////////////////
class Character { 
  constructor(){
    this.name = '';
    this.race = ['Human', 'Elf', 'Dwarf']
    this.clss = ['range', 'melee', 'magic']
    this.gender = "Male"
    this.money = 0
    this.hp = 100
    this.energy = 100
  }
  ////////story attack/////////////// 
  attackMode(other) {
    let playerAtck = Math.round(10 + (this.attack - other.defense));
    let enemyAtck = Math.round(6 + (other.attack - this.defense));
    if(this.hp > 0 && other.hp > 0){
      if(playerAtck < 1){//wouldn't reduce enemy hp, if negative it would add
        playerAtck = 1
      }
      if(playerAtck > other.hp){//hp would equal a negative number
        other.hp = 0
        if(this.clss === 'range'){
          arrowAtk.classList.add('arrow-attack')
          arrowAtk.classList.add('display')
        } else if(this.clss === 'magic'){
          magicSpell.classList.add('player-spell-animation')
          magicSpell.classList.add('display')
        }
      } else {
        other.hp -= playerAtck
        if(this.clss === 'range'){
          arrowAtk.classList.add('arrow-attack')
          arrowAtk.classList.add('display')
        } else if(this.clss === 'magic'){
          magicSpell.classList.add('player-spell-animation')
          magicSpell.classList.add('display')
        }
      }
      const plLi1 = document.createElement('li')
      plLi1.textContent = `${other.name} hp is now ${other.hp}`
      firstTxt.prepend(plLi1)
      plLi1.style.color = 'green'
      const plLi2 = document.createElement('li')
      plLi2.textContent = `${this.name} attacked ${other.name} and dealt ${playerAtck} damage` 
      firstTxt.prepend(plLi2)
    } 
    //timeout needed for both animations
    setTimeout(() => {
      arrowAtk.classList.remove('arrow-attack')
      magicSpell.classList.remove('player-spell-animation')
      if(this.hp > 0 && other.hp > 0){
        if(enemyAtck < 1){
          enemyAtck = 1
        }
        if(enemyAtck > this.hp){
          this.hp = 0
          arrowHit.classList.add('arrow-dmg')
          arrowHit.classList.add('display')
          magicSpell.classList.add('enemy-spell-animation')
          magicSpell.classList.add('display')
        } else {
          this.hp -= enemyAtck
          arrowHit.classList.add('arrow-dmg')
          arrowHit.classList.add('display')
          magicSpell.classList.add('enemy-spell-animation')
          magicSpell.classList.add('display')
        }
        const enLi1 = document.createElement('li')
        enLi1.textContent = `${this.name} hp is now ${this.hp}`
        firstTxt.prepend(enLi1)
        enLi1.style.color = 'red'
        const enLi2 = document.createElement('li')
        enLi2.textContent = `${other.name} attacked ${this.name} and dealt ${enemyAtck} damage` 
        firstTxt.prepend(enLi2)
      }
    }, 1500)
    arrowHit.classList.remove('arrow-dmg')
    magicSpell.classList.remove('enemy-spell-animation')

    setTimeout(() => {
      if(this.hp > 0 && other.hp <= 0){
        secTxt.textContent = `${other.name} was defeated! ${this.name} won`
        secTxt.style.color = 'green'
      }
      if(this.hp <= 0 && other.hp > 0){
          secTxt.textContent = `${this.name} was killed in battle. You lose`
          secTxt.style.color = 'red'
        } 
    }, 1000)
  }
  //earn money by using energy
  work(){
    let workPrice = 13 - this.sta
    if(workPrice > this.energy){
      workTxt.textContent = `You have insuficient energy. Eat some food to replenish your energy`
      workTxt.style.color = 'red'
      workTxt.style.fontSize = '3.5em'
      return
    }
    for(let i=0; i<100; i++){
      if(this.energy > 0){
        if(workPrice > this.energy ){
          workTxt.textContent = `You made a total of $${this.money}`
          workTxt.style.color = 'green'
          workTxt.style.fontSize = '1.5em'
          return
        } else {
          this.energy -= workPrice;
          this.money += 5 + this.int;
          const li1 = document.createElement('li')
          li1.textContent = `${this.name} spent ${workPrice} energy working and made $${5 + this.int}`
          workList.appendChild(li1)
          const li2 = document.createElement('li')
          li2.textContent = `${this.name} has ${this.energy} energy remaining`
          workList.appendChild(li2)
          li2.style.color = 'red'
        }
      } 
    }
    workTxt.style.fontSize = '1.5em'
  }
  //recover energy by spending money
  eat(){
    let cost = 8/this.rec;
    if(this.money - cost < 0){ //if price of food is greater than current money owned
      eatTxt.textContent = 'Not enough money'
      eatTxt.style.color = 'red'
      eatTxt.style.fontSize = '3.5em'
      return
    }
    if(this.energy >= 100){
      eatTxt.textContent = `${this.name} energy is full`
      eatTxt.style.color = 'green'
      eatTxt.style.fontSize = '3.5em'
      return
    }
    for(let i=0; i<100; i++){
      if(this.money > 0){
        if(this.energy + 8 > 100 && this.energy >= 93){// Energy isn't full, but is too high for the equation
          this.money -- 
          this.energy = 100
          eatTxt.textContent = `${this.name} energy is full`
          eatTxt.style.color = 'green'
          eatTxt.style.fontSize = '1.5em'
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
          li2.style.color = 'red'
        }
      }
    }
    eatTxt.style.fontSize = '1.5em'
    this.money = Math.round(this.money);
    this.energy = Math.floor(this.energy);
  }
  atckPotion(){
    if(this.money < 125){
      atkPtnTxt.textContent = `${this.name} doesn't have enough money to buy this`
    } else {
      if(this.race === 'Human' && this.attack >= 17){
        atkPtnTxt.textContent = 'Attack limit reached'
        atkPtnTxt.style.color = 'red'
        return;
      } else if(this.race === 'Elf' && this.attack >= 15){
        atkPtnTxt.textContent = 'Attack limit reached'
        atkPtnTxt.style.color = 'red'
        return;
      } else if(this.race === 'Dwarf' && this.attack >= 13){
        atkPtnTxt.textContent = 'Attack limit reached'
        atkPtnTxt.style.color = 'red'
        return;
      } else {
        this.money -= 125
        this.attack ++
        atkPtnTxt.textContent = `${this.name} attack power increased by 1. Attack: ${this.attack}`
        atkPtnTxt.style.color = 'green'
      }
    }
    atkPtnTxt.style.color = 'black'
  }
  defPotion(){
    if(this.money < 125){
      defPtnTxt.textContent = `${this.name} doesn't have enough money to buy this`
    } else {
      if(this.race === 'Human' && this.defense >= 13){
        defPtnTxt.textContent = 'Defense limit reached'
        defPtnTxt.style.color = 'red'
        return;
      } else if(this.race === 'Elf' && this.defense >= 15){
        defPtnTxt.textContent = 'Defense limit reached'
        defPtnTxt.style.color = 'red'
        return;
      } else if(this.race === 'Dwarf' && this.defense >= 17){
        defPtnTxt.textContent = 'Defense limit reached'
        defPtnTxt.style.color = 'red'
        return;
      } else {
        this.money -= 125
        this.defense ++
        defPtnTxt.textContent = `${this.name} defense strength increased by 1. Defense: ${this.defense}`
        defPtnTxt.style.color = 'green'
      }
    }
    defPtnTxt.style.color = 'black'
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
    this.attack = 13
    this.defense = 13
    this.race = this.race[Math.floor(Math.random() * this.race.length)]
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}

//Types of races. 
//Each has a different value for Intelect, Stamina, and Agility that affects the output of the their work
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
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class ElfEnemy extends Elf {
  constructor(attack, defense){
    super(attack, defense)
    this.name = `${this.clss[Math.floor(Math.random() * this.clss.length)]} elf enemy`
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class DwarfEnemy extends Dwarf {
  constructor(attack, defense){
    super(attack, defense)
    this.name = `${this.clss[Math.floor(Math.random() * this.clss.length)]} dwarf enemy`
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

////////////////////////////////////////////////Instances////////////////////////////////////////////////////////////////////////
//Player instance
let player = null; 

//Enemies instance
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


let playerGender = 'Male'


////////////////////////////////////////////////////Global Functions////////////////////////////////////////////////////////////////////

let enemyArr = [finalBoss, miniBoss, humanEnemy1, elfEnemy1, dwarEnemy1, humanEnemy2, elfEnemy2, dwarEnemy2, humanEnemy3, elfEnemy3, dwarEnemy3]
const showStats = () => {
  charStats.innerHTML = `Attack: ${player.attack} <br> Defense: ${player.defense} <br> Intellect: ${player.int} <br> Stamina: ${player.sta} <br> Recovery: ${player.rec}`
}
const underlineStore = () => {
  storeBtn.style.textDecoration = 'underline'
}
const underlineFight = () => {
  fightBtn.style.textDecoration = 'underline'
}
const underlineWork = () => {
  workBtn.style.textDecoration = 'underline'
}
const underlineEat = () => {
  eatBtn.style.textDecoration = 'underline'
}



////////////////////////////////////////////// Buttons ///////////////////////////////////////////////////////////////////////////

startBtn.addEventListener('click', (evt) => {
  startBtn.style.color = 'white';
  storyPg.style.display = 'flex';
  tittlePg.style.display = 'none';
})

//////////////////////////////////// Story Button /////////////////////////////////////
storyPg.addEventListener('click', (evt) => {
  createPg.style.display = 'flex'
  storyPg.style.display = 'none'
})

////////////////////////////// Create Page Buttons ///////////////////////////////////
maleBtn.addEventListener('click', (evt) => {
  maleBtn.style.color = 'red'
  femaleBtn.style.color = 'white'
  playerGender = 'Male'
  //default picture here(human melee)
  ///////Remove female pictures(9) below////////////
  femaleHumRng.classList.remove('display')

  ///////Remove female pictures(9) above////////////
  //Male pictures
  if(player.race === 'Human'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove others(8)
    }
  }
  if(player.race === 'Elf'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      maleElfRng.classList.add('display')
      //remove others(7)
      maleElfMgc.classList.remove('display')
    } else if(player.clss === 'magic'){
      maleElfMgc.classList.add('display')
      //remove others(7)
      maleElfRng.classList.remove('display')
    }
  }
  if(player.race === 'Dwarf'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove others(8)
    }
  }
})

femaleBtn.addEventListener('click', (evt) => {
  femaleBtn.style.color = 'red'
  maleBtn.style.color = 'white'
  playerGender = 'Female'
  //default picture here(human melee)
  ///////Remove Male pictures(9) below////////////
  maleElfRng.classList.remove('display')
  maleElfMgc.classList.remove('display')

  ///////Remove Male pictures(9) above////////////
  //Female pictures
  if(player.race === 'Human'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      femaleHumRng.classList.add('display')
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove others(8)
    }
  }
  if(player.race === 'Elf'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove others(8)
    }
  }
  if(player.race === 'Dwarf'){
    if(player.clss === 'melee'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'range'){
      //Picture here
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove others(8)
    }
  }
})

humanBtn.addEventListener('click', (evt) => {
  humanBtn.style.color = 'red'
  elfBtn.style.color = 'white'
  dwarfBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Human;
  //Images
  if(playerGender === 'Male'){
    //Add Male Human default (melee)
    //remove male pictures(8)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
    //remove female pictures(9)
    femaleHumRng.classList.remove('display')
  }
  if(playerGender === 'Female'){
    // Add Female Human default (melee)
    //remove female pictures(8)
    femaleHumRng.classList.remove('display')
    //remove male pictures(9)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
  }
})

elfBtn.addEventListener('click', (evt) => {
  elfBtn.style.color = 'red'
  humanBtn.style.color = 'white'
  dwarfBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Elf;
  //Images
  if(playerGender === 'Male'){
    //Add Male Elf default (melee)
    //remove male pictures(8)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
    //remove female pictures(9)
    femaleHumRng.classList.remove('display')
  }
  if(playerGender === 'Female'){
    // Add Female Elf default (melee)
    //remove female pictures(8)
    femaleHumRng.classList.remove('display')
    //remove male pictures(9)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
  }
})

dwarfBtn.addEventListener('click', (evt) => {
  dwarfBtn.style.color = 'red'
  elfBtn.style.color = 'white'
  humanBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  player = new Dwarf;
  //Images
  if(playerGender === 'Male'){
    //Add Male Dwarf default (melee)
    //remove male pictures(8)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
    //remove female pictures(9)
    femaleHumRng.classList.remove('display')
  }
  if(playerGender === 'Female'){
    // Add Female Dwarf default (melee)
    //remove female pictures(8)
    femaleHumRng.classList.remove('display')
    //remove male pictures(9)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
  }
})
meleeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new HumanMelee;
    //Images
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      femaleHumRng.classList.add('display')
      //remove others(8)
    }
  }
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new ElfMelee;
    //Images
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  } 
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    player = new DwarfMelee;
    //Images
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  }
})
rangeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new HumanRange;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      femaleHumRng.classList.add('display')
      //remove others(8)
    }
  } 
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new ElfRange;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      maleElfRng.classList.add('display')
      //remove others(8)
      maleElfMgc.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  }
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    player = new DwarfRange;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  }
})
magicBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } 
  if(player.race === 'Human'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new HumanMagic;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  } 
  if(player.race === 'Elf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new ElfMagic;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      maleElfMgc.classList.add('display')
      //remove others(8)
      maleElfRng.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
  } 
  if(player.race === 'Dwarf'){
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    player = new DwarfMagic;
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove others(8)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove others(8)
    }
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
    mainPg.style.display = 'flex'
    createPg.style.display = 'none'
    fightBtn.textContent = `Fight(${enemyArr.length})`
    //Images
    if(playerGender === 'Male'){
      player.gender = 'Male' //character constructor change
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          maleElfRng.classList.remove('display')
          maleElfRng2.classList.add('display')
        } else if(player.clss === 'magic'){
          maleElfMgc.classList.remove('display')
          maleElfMgc2.classList.add('display')
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        }
      }
    }
    if(playerGender === 'Female'){
      player.gender = 'Female' //
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          femaleHumRng.classList.remove('display')
          femaleHumRng2.classList.add('display')
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
        }
      }
    }
  }
})


////////////////////////////// Main Page Buttons //////////////////////////////////////
charInfo.addEventListener('mouseover', (showStats))
charInfo.addEventListener('mouseout', (evt) => {
  charStats.textContent = ''
})


//////////////////////////// Store Button /////////////////////
storeBtn.addEventListener('mouseover', (underlineStore))

storeBtn.addEventListener('mouseout', (evt) => {
  storeBtn.style.textDecoration = 'none'
})

storeBtn.addEventListener('click', (evt) => {
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  player.money = 1000
  /////////////////////////////// DELETE Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  charInfo.removeEventListener('mouseover', (showStats))
  fightBtn.removeEventListener('mouseover', (underlineFight))
  eatBtn.removeEventListener('mouseover', (underlineEat))
  workBtn.removeEventListener('mouseover', (underlineWork))
  fightBtn.disabled = true
  eatBtn.disabled = true
  workBtn.disabled = true
  maleElfRng2.classList.remove('display')
  femaleHumRng2.classList.remove('display')
  storeBtn.style.color = 'red'
  storePg.classList.add('pop-up')
  if(player.gender === 'Male'){
    if(player.clss === 'range'){
      maleElfRng2.classList.remove('display')
    } else if(player.clss === 'magic'){
      maleElfMgc2.classList.remove('display')
    }
  }
  if(player.gender === 'Female'){
    if(player.clss === 'range'){
      femaleHumRng2.classList.remove('display')
    }
  }
})

atkBuyBtn.addEventListener('click', (evt) => {
  if(player.energy < 100){
    atkPtnTxt.textContent = `It's not wise to drink on an empty stomach. Replinish your energy first`
  } else {
    player.atckPotion()
    charMoney.textContent = player.money
  }
})

defBuyBtn.addEventListener('click', (evt) => {
  if(player.energy < 100){
    defPtnTxt.textContent = `It's not wise to drink on an empty stomach. Replinish your energy first`
  } else { 
    player.defPotion()
    charMoney.textContent = player.money
  }
})

storeClose.addEventListener('click', (evt) => {
  charInfo.addEventListener('mouseover', (showStats))
  fightBtn.addEventListener('mouseover', (underlineFight))
  eatBtn.addEventListener('mouseover', (underlineEat))
  workBtn.addEventListener('mouseover', (underlineWork))
  fightBtn.disabled = false
  eatBtn.disabled = false
  workBtn.disabled = false
  atkPtnTxt.textContent = ''
  defPtnTxt.textContent = ''
  atkPtnTxt.style.color = 'black'
  defPtnTxt.style.color = 'black'
  storePg.classList.remove('pop-up')
  storeBtn.style.color = 'white'
  if(player.gender === 'Male'){
    if(player.clss === 'range'){
      maleElfRng2.classList.add('display')
    } else if(player.clss === 'magic'){
      maleElfMgc2.classList.add('display')
    }
  }
  if(player.gender === 'Female'){
    if(player.clss === 'range'){
      femaleHumRng2.classList.add('display')
    }
  }
})


//////////////////////////// Fight Button /////////////////////
fightBtn.addEventListener('mouseover', (underlineFight))
fightBtn.addEventListener('mouseout', (evt) => {
  fightBtn.style.textDecoration = 'none'
})

fightBtn.addEventListener('click', (evt) => {
  if(enemyArr.length === 0){  //replay option when last boss defeated
    enemyArr = [finalBoss, miniBoss, humanEnemy1, elfEnemy1, dwarEnemy1, humanEnemy2, elfEnemy2, dwarEnemy2, humanEnemy3, elfEnemy3, dwarEnemy3]
    enemyArr.forEach((element) => {
      element.hp = 100
    })
    enemyArr[0].hp = 150
    player.money = 0
    charMoney.textContent = player.money
    player.energy = 100
    charEnergy.textContent = player.energy
    fightBtn.textContent = `Fight(${enemyArr.length})`
    if(player.race === 'Human'){
      player.attack = 12
      player.defense = 8
    } else if(player.race === 'Elf'){
      player.attack = 10
      player.defense = 10
    } else if(player.race === 'Dwarf'){
      player.attack = 8
      player.defense = 12
    }
  } else {
    charInfo.removeEventListener('mouseover', (showStats))
    storeBtn.removeEventListener('mouseover', (underlineStore))
    eatBtn.removeEventListener('mouseover', (underlineEat))
    workBtn.removeEventListener('mouseover', (underlineWork))
    storeBtn.disabled = true
    eatBtn.disabled = true
    workBtn.disabled = true
    fightBtn.style.color = 'red'
    storeBtn.style.color = 'white'
    eatBtn.style.color = 'white'
    workBtn.style.color = 'white'
    fightPg.classList.add('pop-up')
    maleElfRngEn.classList.add('display')
    maleElfMgcEn.classList.add('display')
    femaleHumRngEn.classList.add('display')
  
    //Images
    if(playerGender === 'Male'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          maleElfRng2.classList.remove('display')
          maleElfRng3.classList.add('display')
        } else if(player.clss === 'magic'){
          maleElfMgc2.classList.remove('display')
          maleElfMgc3.classList.add('display')
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        }
      }
    }
    if(playerGender === 'Female'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          femaleHumRng2.classList.remove('display')
          femaleHumRng3.classList.add('display')
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        }
      }
    }
    //Enemy Images
    if(enemyArr.length === 1){
      //Add Final boss picture here
    } else {
      if(enemyArr[enemyArr.length - 1].gender === 'Male'){
        if(enemyArr[enemyArr.length - 1].race === 'Human'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Add Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Elf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            maleElfRngEn.classList.add('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            maleElfMgcEn.classList.add('display')
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Dwarf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Add Enemy picture here  
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Add Enemy picture here 
          }
        }
      }
      if(enemyArr[enemyArr.length - 1].gender === 'Female'){
        if(enemyArr[enemyArr.length - 1].race === 'Human'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            femaleHumRngEn.classList.add('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Add Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Elf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Add Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Dwarf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Add Enemy picture here  
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Add Enemy picture here 
          }
        }
      }
    }
  }
})

atckBtn.addEventListener('click', (evt) => {
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  player.attack = 50
  /////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  atckBtn.disabled = true
  retreatBtn.disabled = true
  setTimeout(() => {
    atckBtn.disabled = false
    retreatBtn.disabled = false
  }, 2000)
  player.attackMode(enemyArr[enemyArr.length - 1])
  if(player.hp <= 0 && enemyArr[enemyArr.length - 1].hp > 0){
    retreatBtn.disabled = true
    atckBtn.disabled = true
    // secTxt.textContent = `${player.name} was killed in battle. You lose`
    // secTxt.style.color = 'red'
  } else if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp <= 0){
    retreatBtn.disabled = true
    atckBtn.disabled = true
    // secTxt.textContent = `${enemyArr[enemyArr.length - 1].name} was defeated! ${player.name} won`
    // secTxt.style.color = 'green'
  }else {
    // retreatBtn.disabled = false
    // atckBtn.disabled = false
  }
})

retreatBtn.addEventListener('click', (evt) => {
  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp <= 0){
    retreatBtn.disabled = true
    atckBtn.disabled = true
  } else if( player.hp <= 0 && enemyArr[enemyArr.length - 1].hp > 0){
    retreatBtn.disabled = true
    atckBtn.disabled = true
  } else {
    atckBtn.disabled = true
    retreatBtn.disabled = true
    player.hp = 0
    if(player.money > 10){
      const li1 = document.createElement('li')
      li1.textContent = `In your rush to leave the scene you dropped some of your money`
      li1.style.color = 'red'
      firstTxt.prepend(li1)
      const li2 = document.createElement('li')
      li2.textContent = `${player.name} fled the fight scene in shame.`
      firstTxt.prepend(li2)
      secTxt.textContent = `${player.name} lost $10`
      secTxt.style.color = 'red'
      player.money -= 10
    }else {
      const li1 = document.createElement('li')
      li1.textContent = `${player.name} fled so quickly that some of your energy is gone`
      firstTxt.appendChild(li1)
      li1.style.color = 'red'
      const li2 = document.createElement('li')
      li2.textContent = `${player.name} fled the fight scene in shame.`
      firstTxt.appendChild(li2)
      secTxt.textContent = `${player.name} lost 15 energy`
      secTxt.style.color = 'red'
      player.energy -= 15
    }
  }
  atckBtn.disabled = true
  retreatBtn.disabled = true
})

fightClose.addEventListener('click', (evt) => {
  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp > 0){ //Both alive
    alert(' you must defeat the enemy or retreat before closing the window')
  } else {
    fightPg.classList.remove('pop-up')
    fightBtn.style.color = 'white'
    firstTxt.textContent = ''
    secTxt.textContent = ''
    secTxt.style.color = 'black'
    charInfo.addEventListener('mouseover', (showStats))
    storeBtn.addEventListener('mouseover', (underlineStore))
    eatBtn.addEventListener('mouseover', (underlineEat))
    workBtn.addEventListener('mouseover', (underlineWork))
    storeBtn.disabled = false
    eatBtn.disabled = false
    workBtn.disabled = false
    atckBtn.disabled = false
    retreatBtn.disabled = false
    charMoney.textContent = player.money
    charEnergy.textContent = player.energy
    arrowHit.classList.remove('arrow-dmg')
    arrowAtk.classList.remove('arrow-attack')
    maleElfMgcEn.classList.remove('display')
    maleElfRngEn.classList.remove('display')
    arrowHit.classList.remove('display')
    //Player wins
    if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp <= 0){
      player.hp = 100
      enemyArr.pop()
    }
    //Player loses
    if(player.hp <= 0){
      player.hp = 100;
      if(enemyArr.length === 1){//final boss
        enemyArr[0].hp = 150
      } else {
        enemyArr[enemyArr.length - 1].hp = 100;
      }
    }
    //Wether or not final boss was defeated
    if(enemyArr.length === 0){
      fightBtn.textContent = `Replay`
    } else {
      fightBtn.textContent = `Fight(${enemyArr.length})`
    }

    //Images
    if(playerGender === 'Male'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          maleElfRng3.classList.remove('display')
          maleElfRng2.classList.add('display')
        } else if(player.clss === 'magic'){
          maleElfMgc3.classList.remove('display')
          maleElfMgc2.classList.add('display')
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        }
      }
    }
    if(playerGender === 'Female'){
      player.gender = 'Female' //
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          femaleHumRng3.classList.remove('display')
          femaleHumRng2.classList.add('display')
        } else if(player.clss === 'magic'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'range'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 3 here
          //Add picture number 2 here 
        }
      }
    }
    //Enemy Images
    if(enemyArr.length === 1 || enemyArr.length === 0){
      //Remove Final boss picture here
    } else {
      if(enemyArr[enemyArr.length - 1].gender === 'Male'){
        if(enemyArr[enemyArr.length - 1].race === 'Human'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Remove Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Elf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            maleElfRngEn.classList.remove('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            maleElfMgcEn.classList.remove('display')
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Dwarf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Remove Enemy picture here  
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Remove Enemy picture here 
          }
        }
      }
      if(enemyArr[enemyArr.length - 1].gender === 'Female'){
        if(enemyArr[enemyArr.length - 1].race === 'Human'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            femaleHumRngEn.classList.remove('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Remove Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Elf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Remove Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Dwarf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
            //Remove Enemy picture here  
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            //Remove Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
            //Remove Enemy picture here 
          }
        }
      }
    }
  }
})

//////////////////////////// Eat Button /////////////////////
eatBtn.addEventListener('mouseover', (underlineEat))
eatBtn.addEventListener('mouseout', (evt) => {
  eatBtn.style.textDecoration = 'none'
})
eatBtn.addEventListener('click', (evt) => {
  charInfo.removeEventListener('mouseover', (showStats))
  storeBtn.removeEventListener('mouseover', (underlineStore))
  fightBtn.removeEventListener('mouseover', (underlineFight))
  workBtn.removeEventListener('mouseover', (underlineWork))
  fightBtn.disabled = true
  storeBtn.disabled = true
  workBtn.disabled = true
  maleElfRng2.classList.remove('display')
  femaleHumRng2.classList.remove('display')
  fightBtn.style.color = 'white'
  storeBtn.style.color = 'white'
  eatBtn.style.color = 'red'
  workBtn.style.color = 'white'
  eatPg.classList.add('pop-up')
  player.eat()
  //Images
  maleElfRng2.classList.remove('display')
  maleElfMgc2.classList.remove('display')
  femaleHumRng2.classList.remove('display')
})

eatClose.addEventListener('click', (evt) => {
  eatPg.classList.remove('pop-up')
  eatBtn.style.color = 'white'
  charMoney.textContent = player.money
  charEnergy.textContent = player.energy
  eatList.textContent = ''
  eatTxt.textContent = ''
  charInfo.addEventListener('mouseover', (showStats))
  storeBtn.addEventListener('mouseover', (underlineStore))
  fightBtn.addEventListener('mouseover', (underlineFight))
  workBtn.addEventListener('mouseover', (underlineWork))
  fightBtn.disabled = false
  storeBtn.disabled = false
  workBtn.disabled = false
  //Images
  if(playerGender === 'Male'){
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 3 here 
      } else if(player.clss === 'range'){
        //Add picture number 3 here 
      } else if(player.clss === 'magic'){
        //Add picture number 3 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 3 here 
      } else if(player.clss === 'range'){
        maleElfRng2.classList.add('display')
      } else if(player.clss === 'magic'){
        maleElfMgc2.classList.add('display')
      }
    }
    if(player.race === 'Dwarf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
  }
  if(playerGender === 'Female'){
    player.gender = 'Female' //
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        femaleHumRng2.classList.add('display')
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Dwarf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
  }
})

//////////////////////////// Work Button /////////////////////
workBtn.addEventListener('mouseover', (underlineWork))
workBtn.addEventListener('mouseout', (evt) => {
  workBtn.style.textDecoration = 'none'
})
workBtn.addEventListener('click', (evt) => {
  charInfo.removeEventListener('mouseover', (showStats))
  storeBtn.removeEventListener('mouseover', (underlineStore))
  fightBtn.removeEventListener('mouseover', (underlineFight))
  eatBtn.removeEventListener('mouseover', (underlineEat))
  fightBtn.disabled = true
  storeBtn.disabled = true
  eatBtn.disabled = true
  maleElfRng2.classList.remove('display')
  femaleHumRng2.classList.remove('display')
  fightBtn.style.color = 'white'
  storeBtn.style.color = 'white'
  eatBtn.style.color = 'white'
  workBtn.style.color = 'red'
  workPg.classList.add('pop-up')
  player.work()
  //Images
  maleElfRng2.classList.remove('display')
  maleElfMgc2.classList.remove('display')
  femaleHumRng2.classList.remove('display')
})

workClose.addEventListener('click', (evt) => {
  workPg.classList.remove('pop-up')
  workBtn.style.color = 'white'
  charMoney.textContent = player.money
  charEnergy.textContent = player.energy
  workList.textContent = ''
  workTxt.textContent = ''
  charInfo.addEventListener('mouseover', (showStats))
  storeBtn.addEventListener('mouseover', (underlineStore))
  fightBtn.addEventListener('mouseover', (underlineFight))
  eatBtn.addEventListener('mouseover', (underlineEat))
  fightBtn.disabled = false
  storeBtn.disabled = false
  eatBtn.disabled = false
  //Images
  if(playerGender === 'Male'){
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 3 here 
      } else if(player.clss === 'range'){
        //Add picture number 3 here 
      } else if(player.clss === 'magic'){
        //Add picture number 3 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 3 here 
      } else if(player.clss === 'range'){
        maleElfRng2.classList.add('display')
      } else if(player.clss === 'magic'){
        maleElfMgc2.classList.add('display')
      }
    }
    if(player.race === 'Dwarf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
  }
  if(playerGender === 'Female'){
    player.gender = 'Female' //
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        femaleHumRng2.classList.add('display')
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Dwarf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
  }
})



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////// Continue Here /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //PLACE DELETE ITEM HERE
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

