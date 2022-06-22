
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
const raceDiv = document.querySelector('#char-image > div:nth-of-type(1)')
const racePar = document.querySelector('#char-image > div:nth-of-type(1) > p')
const intLi = document.querySelector('#char-image > div > ul > li:nth-of-type(1)')
const int = document.querySelector('#Int')
const staLi = document.querySelector('#char-image > div > ul > li:nth-of-type(2)')
const sta = document.querySelector('#Sta')
const recLi = document.querySelector('#char-image > div > ul > li:nth-of-type(3)')
const rec = document.querySelector('#Rec')
const classDiv = document.querySelector('#char-image > div:nth-of-type(2)')
const classPar = document.querySelector('#char-image > div:nth-of-type(2) > p')
const att = document.querySelector('#Att')
const def = document.querySelector('#Def')
const statDspt = document.querySelector('#stats-description')
///Character Images
const maleHumMel = document.querySelector('.male-human-melee')
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
const maleHumMel2 = document.querySelector('.male-human-melee2')
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
const maleHumMel3 = document.querySelector('.male-human-melee3')
const maleHumMelEn = document.querySelector('.male-human-melee-enemy')
const maleElfRng3 = document.querySelector('.male-elf-range3')
const maleElfRngEn = document.querySelector('.male-elf-range-enemy')
const arrowAtk = document.querySelector('.arrow')
const maleElfMgc3 = document.querySelector('.male-elf-magic3')
const maleElfMgcEn = document.querySelector('.male-elf-magic-enemy')
const magicSpell = document.querySelector('.spell')
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
    arrowAtk.classList.remove('en-arrow-animation')
    magicSpell.classList.remove('enemy-spell-animation')
    if(this.hp > 0 && other.hp > 0){
      if(playerAtck < 1){//wouldn't reduce enemy hp, if negative it would add
        playerAtck = 1
      }
      if(playerAtck > other.hp){//hp would equal a negative number
        other.hp = 0
        //player attack animation
        if(this.clss === 'range'){
          arrowAtk.classList.add('pl-arrow-animation')
        } else if(this.clss === 'magic'){
          magicSpell.classList.add('player-spell-animation')
        } else if(this.clss === 'melee'){
          if(this.gender === 'Male'){
            if(this.race === 'Human'){
              //add male human melee animation 
            } else if(this.race === 'Elf'){
              //add male elf melee animation
            } else if(this.race === 'Dwarf'){
              //add male dwarf melee animation
            }
          } else if(this.gender === 'Female'){
            if(this.race === 'Human'){
              //add female human melee animation 
            } else if(this.race === 'Elf'){
              //add female elf melee animation
            } else if(this.race === 'Dwarf'){
              //add female dwarf melee animation
            }
          }
        }
      } else {
        other.hp -= playerAtck
        //player attack animation
        if(this.clss === 'range'){
          arrowAtk.classList.add('pl-arrow-animation')
        } else if(this.clss === 'magic'){
          magicSpell.classList.add('player-spell-animation')
        } else if(this.clss === 'melee'){
          if(this.gender === 'Male'){
            if(this.race === 'Human'){
              //add male human melee animation 
            } else if(this.race === 'Elf'){
              //add male elf melee animation
            } else if(this.race === 'Dwarf'){
              //add male dwarf melee animation
            }
          } else if(this.gender === 'Female'){
            if(this.race === 'Human'){
              //add female human melee animation 
            } else if(this.race === 'Elf'){
              //add female elf melee animation
            } else if(this.race === 'Dwarf'){
              //add female dwarf melee animation
            }
          }
        }
      }
      //player attack notification
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
      arrowAtk.classList.remove('pl-arrow-animation')
      magicSpell.classList.remove('player-spell-animation')
      if(this.hp > 0 && other.hp > 0){
        if(enemyAtck < 1){
          enemyAtck = 1
        }
        if(enemyAtck > this.hp){
          this.hp = 0
          //enemy attack animation
          if(other.clss === 'range'){
            arrowAtk.classList.add('en-arrow-animation')
          } 
          if(other.clss === 'magic'){
            magicSpell.classList.add('enemy-spell-animation')
          } 
          if(other.clss === 'melee'){
            if(other.gender === 'Male'){
              if(other.race === 'Human'){
                //add enemy male human melee animation 
              } else if(other.race === 'Elf'){
                //add enemy male elf melee animation
              } else if(other.race === 'Dwarf'){
                //add enemy male dwarf melee animation
              }
            } else if(other.gender === 'Female'){
              if(other.race === 'Human'){
                //add enemy female human melee animation 
              } else if(other.race === 'Elf'){
                //add enemy female elf melee animation
              } else if(other.race === 'Dwarf'){
                //add enemy female dwarf melee animation
              }
            }
          }
        } else {
          this.hp -= enemyAtck
          //enemy attack animation 
          if(other.clss === 'range'){
            arrowAtk.classList.add('en-arrow-animation')
          } 
          if(other.clss === 'magic'){
            magicSpell.classList.add('enemy-spell-animation')
          } 
          if(other.clss === 'melee'){
            if(other.gender === 'Male'){
              if(other.race === 'Human'){
                //add enemy male human melee animation 
              } else if(other.race === 'Elf'){
                //add enemy male elf melee animation
              } else if(other.race === 'Dwarf'){
                //add enemy male dwarf melee animation
              }
            } else if(other.gender === 'Female'){
              if(other.race === 'Human'){
                //add enemy female human melee animation 
              } else if(other.race === 'Elf'){
                //add enemy female elf melee animation
              } else if(other.race === 'Dwarf'){
                //add enemy female dwarf melee animation
              }
            }
          }
        }
        //enemy attack notification 
        const enLi1 = document.createElement('li')
        enLi1.textContent = `${this.name} hp is now ${this.hp}`
        firstTxt.prepend(enLi1)
        enLi1.style.color = 'red'
        const enLi2 = document.createElement('li')
        enLi2.textContent = `${other.name} attacked ${this.name} and dealt ${enemyAtck} damage` 
        firstTxt.prepend(enLi2)
      }
    }, 1050)

    //end of fight if player wins
    setTimeout(() => {
      if(this.hp > 0 && other.hp <= 0){
        secTxt.textContent = `${other.name} was defeated! ${this.name} won`
        secTxt.style.color = 'green'
      }
    }, 1010)
    //end of fight if player loses
    setTimeout(() => {
      //last code to run needs to remove the last animation
      arrowAtk.classList.remove('en-arrow-animation')
      magicSpell.classList.remove('enemy-spell-animation')
      if(this.hp <= 0 && other.hp > 0){
          secTxt.textContent = `${this.name} was killed in battle. You lose`
          secTxt.style.color = 'red'
        } 
    }, 2000)
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


//Enemies 
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

class MiniBoss1 extends Character {
  constructor(name,gender){
    super(name,gender)
    this.name = 'Mini Boss'
    this.gender = 'Female'
    this.attack = 13
    this.defense = 13
    this.race = this.race[0]
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class MiniBoss2 extends Character {
  constructor(name,gender){
    super(name,gender)
    this.name = 'Mini Boss'
    this.gender = 'Female'
    this.attack = 13
    this.defense = 13
    this.race = this.race[1]
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class MiniBoss3 extends Character {
  constructor(name,gender){
    super(name,gender)
    this.name = 'Mini Boss'
    this.gender = 'Female'
    this.attack = 13
    this.defense = 13
    this.race = this.race[2]
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class HumanEnemy extends Character{
  constructor(name){
    super(name)
    this.race = this.race[0]
    this.name = `${this.race} minor enemy`
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class ElfEnemy extends Character{
  constructor(name){
    super(name)
    this.race = this.race[1]
    this.name = `${this.race} minor enemy`
    this.clss = this.clss[Math.floor(Math.random() * this.clss.length)]
  }
}
class DwarfEnemy extends Character{
  constructor(name){
    super(name)
    this.race = this.race[2]
    this.name = `${this.race} minor enemy`
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
  }
}
class Elf extends Character {
  constructor(name){
    super(name);
    this.race = this.race[1]
    this.int = 2 //intelect gives more money
    this.sta = 2 //stamina uses less energy when working
    this.rec = 6 //recovers energy faster
  }
}
class Dwarf extends Character {
  constructor(name){
    super(name);
    this.race = this.race[2]
    this.int = 2 //intelect gives more money
    this.sta = 6 //stamina uses less energy when working
    this.rec = 2 //recovery replinishes energy faster  
  }
}


//Fighting class 
class HumanRange extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.attack = 10
    this.defense = 10  
    this.weapon = 'Bow'
  }
}
class HumanMelee extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.attack = 8
    this.defense = 12   
    this.weapon = 'Sword'
    
  }
}
class HumanMagic extends Human {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.attack = 12
    this.defense = 8  
    this.weapon = 'Wand'
  }
}
class ElfRange extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.attack = 10
    this.defense = 10   
    this.weapon = 'Throwing Knives'
  }
} 
class ElfMelee extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.attack = 8
    this.defense = 12   
    this.weapon = 'Spear'
    
  }
}
class ElfMagic extends Elf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.attack = 12
    this.defense = 8   
    this.weapon = 'Staff'
  }
}
  class DwarfRange extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[0]
    this.attack = 10
    this.defense = 10   
    this.weapon = 'Crossbow'
  }
}
class DwarfMelee extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[1]
    this.attack = 8
    this.defense = 12   
    this.weapon = 'Hammer'
    
  }
}
class DwarfMagic extends Dwarf {
  constructor(name, weapon){
    super(name);
    this.clss = this.clss[2]
    this.attack = 12
    this.defense = 8   
    this.weapon = 'Orb'
  }
}

////////////////////////////////////////////////Instances////////////////////////////////////////////////////////////////////////
//Player instance
let player = null;

//Enemies instance
const finalBoss = new FinalBoss()
const miniBoss1 = new MiniBoss1()
const miniBoss2 = new MiniBoss2()
const miniBoss3 = new MiniBoss3()
const humanEnemy1 = new HumanEnemy()
const humanEnemy2 = new HumanEnemy()
const humanEnemy3 = new HumanEnemy()
const humanEnemy4 = new HumanEnemy()
const humanEnemy5 = new HumanEnemy()
const elfEnemy1 = new ElfEnemy()
const elfEnemy2 = new ElfEnemy()
const elfEnemy3 = new ElfEnemy()
const elfEnemy4 = new ElfEnemy()
const elfEnemy5 = new ElfEnemy()
const dwarEnemy1 = new DwarfEnemy()
const dwarEnemy2 = new DwarfEnemy()
const dwarEnemy3 = new DwarfEnemy()
const dwarEnemy4 = new DwarfEnemy()
const dwarEnemy5 = new DwarfEnemy()


let playerGender = 'Male'


////////////////////////////////////////////////////Global Functions////////////////////////////////////////////////////////////////////

// let enemyArr = [finalBoss, miniBoss, enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8]
let enemyArr = [finalBoss, miniBoss1, humanEnemy1, humanEnemy2, humanEnemy3, humanEnemy4, humanEnemy5, miniBoss2, elfEnemy1, elfEnemy2, elfEnemy3, elfEnemy4, elfEnemy5, miniBoss3, dwarEnemy1, dwarEnemy2, dwarEnemy3, dwarEnemy4, dwarEnemy5]
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
    createImg.classList.add('human-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('dwarf-background')
    //Remove all Elf and Dwarf images(6)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
    if(player.clss === 'melee'){
      maleHumMel.classList.add('display')
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove other fight class (2)
    }
  }
  if(player.race === 'Elf'){
    createImg.classList.add('elf-background')
    createImg.classList.remove('human-background')
    createImg.classList.remove('dwarf-background')
    //remove all Human and Dwarf images(6)
    maleHumMel.classList.remove('display')
    if(player.clss === 'melee'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      maleElfRng.classList.add('display')
      //remove other fight class (2)
      maleElfMgc.classList.remove('display')
    } else if(player.clss === 'magic'){
      maleElfMgc.classList.add('display')
      //remove other fight class (2)
      maleElfRng.classList.remove('display')
    }
  }
  if(player.race === 'Dwarf'){
    createImg.classList.add('dwarf-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('human-background')
    //Remove all Elf and Human images(6)
    maleElfMgc.classList.remove('display')
    maleElfRng.classList.remove('display')
    maleHumMel.classList.remove('display')
    if(player.clss === 'melee'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove other fight class (2)
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
  maleHumMel.classList.remove('display')

  ///////Remove Male pictures(9) above////////////
  //Female pictures
  if(player.race === 'Human'){
    createImg.classList.add('human-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('dwarf-background')
    //Remove all Elf and Dwarf images(6)
    if(player.clss === 'melee'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      femaleHumRng.classList.add('display')
      //remove others(8)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove other fight class (2)
    }
  }
  if(player.race === 'Elf'){
    createImg.classList.add('elf-background')
    createImg.classList.remove('human-background')
    createImg.classList.remove('dwarf-background')
    //Remove all Human and Dwarf images(6)
    femaleHumRng.classList.remove('display')
    if(player.clss === 'melee'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove other fight class (2)
    }
  }
  if(player.race === 'Dwarf'){
    createImg.classList.add('dwarf-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('human-background')
    //Remove all Elf and Human images(6)
    femaleHumRng.classList.remove('display')
    if(player.clss === 'melee'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'range'){
      //Picture here
      //remove other fight class (2)
    } else if(player.clss === 'magic'){
      //Picture here
      //remove other fight class (2)
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
  createImg.classList.add('human-background')
  createImg.classList.remove('elf-background')
  createImg.classList.remove('dwarf-background')
  raceDiv.style.visibility = 'visible'
  racePar.innerHTML = "Humans are the most adaptable and ambitious people among the races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human's memory. They live fully in the present—making them well suited to the adventuring life, but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics. They seek to earn glory in the eyes of their fellows by amassing power, wealth, and fame. Due to their opportunist nature and ability to adapt humans have a higher intellect than the other races."
  player = new Human;
  int.innerHTML = `${player.int}`
  sta.innerHTML = `${player.sta}`
  rec.innerHTML = `${player.rec}`
  //Characters Image
  maleHumMel.classList.remove('display')
  maleElfMgc.classList.remove('display')
  maleElfRng.classList.remove('display')
  femaleHumRng.classList.remove('display')
})

elfBtn.addEventListener('click', (evt) => {
  elfBtn.style.color = 'red'
  humanBtn.style.color = 'white'
  dwarfBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  createImg.classList.add('elf-background')
  createImg.classList.remove('human-background')
  createImg.classList.remove('dwarf-background')
  raceDiv.style.visibility = 'visible'
  racePar.innerHTML = "Elves live in the midst of ancient forests, where soft music drifts through the air and gentle fragrances waft on the breeze. They tend to remain aloof and unfazed by petty happenstance. When pursuing a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be focused and relentless. Elves take up adventuring out of wanderlust. Since they are so long-lived, they can enjoy centuries of exploration and discovery. They dislike the pace of human society, which is both regimented from day to day but constantly changes over decades, so they find careers that let them travel freely and set their own pace. Some might join with rebels fighting against oppression, and others might become champions of just causes. Due to their longegivity elves have a higher recovery rate than the other races."
  player = new Elf;
  int.innerHTML = `${player.int}`
  sta.innerHTML = `${player.sta}`
  rec.innerHTML = `${player.rec}`
  //Characters Image
  maleHumMel.classList.remove('display')
  maleElfMgc.classList.remove('display')
  maleElfRng.classList.remove('display')
  femaleHumRng.classList.remove('display')
})

dwarfBtn.addEventListener('click', (evt) => {
  dwarfBtn.style.color = 'red'
  elfBtn.style.color = 'white'
  humanBtn.style.color = 'white'
  meleeBtn.style.color = 'white';
  rangeBtn.style.color = 'white';
  magicBtn.style.color = 'white';
  createImg.classList.add('dwarf-background')
  createImg.classList.remove('elf-background')
  createImg.classList.remove('human-background')
  raceDiv.style.visibility = 'visible'
  racePar.innerHTML = "Dwarves kingdoms are built among the roots of mountains, where they have carved great halls. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and do not abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge. Dwarves who take up the adventuring life might be motivated by a desire to restore a clan's lost honor, avenge an ancient wrong his or her clan suffered, or earn a new place within the clan after having been exiled. Due to their ability to work under high pressures dwarves have a higher stamina than other races"
  player = new Dwarf;
  int.innerHTML = `${player.int}`
  sta.innerHTML = `${player.sta}`
  rec.innerHTML = `${player.rec}`
  //Characters Image
  maleHumMel.classList.remove('display')
  maleElfMgc.classList.remove('display')
  maleElfRng.classList.remove('display')
  femaleHumRng.classList.remove('display')
})

meleeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } else {
    meleeBtn.style.color = 'red';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'white';
    classDiv.style.visibility = 'visible'
    classPar.innerHTML = 'Melee fighters are known for their strength in weilding heavy weaponry. Some of their common weapons include, Sowrd and Shield, Mace, and Axe. Due to their inability to fight from a distance melee fighters have focused on their defense skills by wearing heavy armor.'
  }
  if(player.race === 'Human'){
    createImg.classList.add('human-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('dwarf-background')
    player = new HumanMelee;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    //Images
    if(playerGender === 'Male'){
      //////Picture here//////
      maleHumMel.classList.add('display')
      //remove fighting class pictures(2)
    }
    if(playerGender === 'Female'){
      /////Picture here//////
      //remove fighting class pictures(2)
    }
  }
  if(player.race === 'Elf'){
    createImg.classList.add('elf-background')
    createImg.classList.remove('human-background')
    createImg.classList.remove('dwarf-background')
    player = new ElfMelee;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    //Images
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
      femaleHumRng.classList.remove('display')
    }
  } 
  if(player.race === 'Dwarf'){
    createImg.classList.add('dwarf-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('human-background')
    player = new DwarfMelee;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    //Images
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
  }
})

rangeBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } else {
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'red';
    magicBtn.style.color = 'white';
    classDiv.style.visibility = 'visible'
    classPar.innerHTML = "Range fighters are adept with any weapon that can be fired from a distance. Their attacks can do some decent damage, but it's not the most powerful. They also wear light-weight armor, to help them move more freely in the battlefield which makes their defense roughly the same as their attack."
  }
  if(player.race === 'Human'){
    createImg.classList.add('human-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('dwarf-background')
    player = new HumanRange;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
      maleHumMel.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      femaleHumRng.classList.add('display')
      //remove fighting class pictures(2)
    }
  } 
  if(player.race === 'Elf'){
    createImg.classList.add('elf-background')
    createImg.classList.remove('human-background')
    createImg.classList.remove('dwarf-background')
    player = new ElfRange;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      maleElfRng.classList.add('display')
      //remove fighting class pictures(2)
      maleElfMgc.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
  }
  if(player.race === 'Dwarf'){
    createImg.classList.add('dwarf-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('human-background')
    player = new DwarfRange;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
  }
})
magicBtn.addEventListener('click', (evt) => {
  if(player === null){
    alert('choose a race first');
  } else {
    meleeBtn.style.color = 'white';
    rangeBtn.style.color = 'white';
    magicBtn.style.color = 'red';
    classDiv.style.visibility = 'visible'
    classPar.innerHTML = "Magic users have the greatest attack of any other fighter. Their affinity to magic allows them the ability to summon extremely powerful attacks through their staff. However, they are unable to wear most armor types as the materials it is made of would interrupt a magic users control over the flow of magic in their body."
  }
  if(player.race === 'Human'){
    createImg.classList.add('human-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('dwarf-background')
    player = new HumanMagic;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
      maleHumMel.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
  } 
  if(player.race === 'Elf'){
    createImg.classList.add('elf-background')
    createImg.classList.remove('human-background')
    createImg.classList.remove('dwarf-background')
    player = new ElfMagic;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      maleElfMgc.classList.add('display')
      //remove fighting class pictures(2)
      maleElfRng.classList.remove('display')
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
      femaleHumRng.classList.remove('display')
    }
  } 
  if(player.race === 'Dwarf'){
    createImg.classList.add('dwarf-background')
    createImg.classList.remove('elf-background')
    createImg.classList.remove('human-background')
    player = new DwarfMagic;
    att.innerHTML = `${player.attack}`
    def.innerHTML = `${player.defense}`
    if(playerGender === 'Male'){
      //remove female pictures(9)
      femaleHumRng.classList.remove('display')
      //remove female pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
    if(playerGender === 'Female'){
      //remove male pictures(9)
      maleElfMgc.classList.remove('display')
      maleElfRng.classList.remove('display')
      //remove male pictures(9)
      //////Picture here//////
      //remove fighting class pictures(2)
    }
  }
})

intLi.addEventListener('mouseover', () => {
  statDspt.style.visibility = 'visible'
  statDspt.innerHTML = "Intellect increases the amount of money earned while working"
})

intLi.addEventListener('mouseout', () => {
  statDspt.style.visibility = 'hidden'
})

staLi.addEventListener('mouseover', () => {
  statDspt.style.visibility = 'visible'
  statDspt.style.left = '25%'
  statDspt.innerHTML = "Stamina consumes less energy while working, allowing you to work longer"
})

staLi.addEventListener('mouseout', () => {
  statDspt.style.visibility = 'hidden'
  statDspt.style.left = '0'
})

recLi.addEventListener('mouseover', () => {
  statDspt.style.visibility = 'visible'
  statDspt.style.left = '62%'
  statDspt.innerHTML = "Recovery replenishes energy faster when consuming food"
})

recLi.addEventListener('mouseout', () => {
  statDspt.style.visibility = 'hidden'
  statDspt.style.left = '0'
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
        mainPg.classList.add('human-background')
        if(player.clss === 'melee'){
          maleHumMel.classList.remove('display')
          maleHumMel2.classList.add('display') 
          maleHumMel3.classList.add('display')
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Elf'){
        mainPg.classList.add('elf-background')
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          maleElfRng.classList.remove('display')
          maleElfRng2.classList.add('display')
          maleElfRng3.classList.add('display')
        } else if(player.clss === 'magic'){
          maleElfMgc.classList.remove('display')
          maleElfMgc2.classList.add('display')
          maleElfMgc3.classList.add('display')
        }
      }
      if(player.race === 'Dwarf'){
        mainPg.classList.add('dwarf-background')
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        }
      }
    }
    if(playerGender === 'Female'){
      player.gender = 'Female' //
      if(player.race === 'Human'){
        mainPg.classList.add('human-background')
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          femaleHumRng.classList.remove('display')
          femaleHumRng2.classList.add('display')
          femaleHumRng3.classList.add('display')
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Elf'){
        mainPg.classList.add('elf-background')
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        }
      }
      if(player.race === 'Dwarf'){
        mainPg.classList.add('dwarf-background')
        if(player.clss === 'melee'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'range'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 1 here
          //Add picture number 2 here 
          //Add picture number 3 here 
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
  maleHumMel2.classList.remove('display')
  maleElfRng2.classList.remove('display')
  maleElfMgc2.classList.remove('display')
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
  //Images
  if(player.gender === 'Male'){
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
        maleHumMel2.classList.add('display')
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
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
  if(player.gender === 'Female'){
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


//////////////////////////// Fight Button /////////////////////
fightBtn.addEventListener('mouseover', (underlineFight))
fightBtn.addEventListener('mouseout', (evt) => {
  fightBtn.style.textDecoration = 'none'
})

fightBtn.addEventListener('click', (evt) => {
  setTimeout(() => {
    console.log(`Player class is ${player.clss}`)
    console.log(`Player attack is ${player.attack}`)
    console.log(`Player defense is ${player.defense}`)
    // console.log(`Enemy is ${enemyArr[enemyArr.length - 1]}`)
    console.log(`Enemy race is ${enemyArr[enemyArr.length - 1].race}`)
    console.log(`Enemy class is ${enemyArr[enemyArr.length - 1].clss}`)
    console.log(`Enemy gender is ${enemyArr[enemyArr.length - 1].gender}`)
    console.log(`Enemy attack is ${enemyArr[enemyArr.length - 1].attack}`)
    console.log(`Enemy defense is ${enemyArr[enemyArr.length - 1].defense}`)
  }, 0500)
  if(enemyArr.length === 0){  //replay option when last boss defeated
    enemyArr = [finalBoss, miniBoss1, humanEnemy1, humanEnemy2, humanEnemy3, humanEnemy4, humanEnemy5, miniBoss2, elfEnemy1, elfEnemy2, elfEnemy3, elfEnemy4, elfEnemy5, miniBoss3, dwarEnemy1, dwarEnemy2, dwarEnemy3, dwarEnemy4, dwarEnemy5]
    enemyArr.forEach((element) => {
      element.hp = 100
    })
    enemyArr[0].hp = 150
    player.money = 0
    charMoney.textContent = player.money
    player.energy = 100
    charEnergy.textContent = player.energy
    fightBtn.textContent = `Fight(${enemyArr.length})`
    if(player.clss === 'magic'){
      player.attack = 12
      player.defense = 8
    } else if(player.clss === 'range'){
      player.attack = 10
      player.defense = 10
    } else if(player.clss === 'melee'){
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
  
    //Images
    if(player.gender === 'Male'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          maleHumMel2.classList.remove('display')
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
        } else if(player.clss === 'range'){
          maleElfRng2.classList.remove('display')
        } else if(player.clss === 'magic'){
          maleElfMgc2.classList.remove('display')
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here 
        }
      }
    }
    if(player.gender === 'Female'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
        } else if(player.clss === 'range'){
          femaleHumRng2.classList.remove('display')
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
        }
      }
      if(player.race === 'Dwarf'){
        if(player.clss === 'melee'){
          //Remove picture number 2 here
        } else if(player.clss === 'range'){
          //Remove picture number 2 here
          //Add picture number 3 here 
        } else if(player.clss === 'magic'){
          //Remove picture number 2 here
        }
      }
    }
    //Enemy Images
    //Remove all images here
    femaleHumRngEn.classList.remove('display')
    maleElfRngEn.classList.remove('display')
    maleElfMgcEn.classList.remove('display')
    //Remove all images here
    if(enemyArr.length === 1){
      //Add Final boss picture here
    } else {
      if(enemyArr[enemyArr.length - 1].gender === 'Male'){
        if(enemyArr[enemyArr.length - 1].race === 'Human'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
          enemyArr[enemyArr.length - 1].attack = 8
          enemyArr[enemyArr.length - 1].defense = 12
            maleHumMelEn.classList.add('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
          enemyArr[enemyArr.length - 1].attack = 10
          enemyArr[enemyArr.length - 1].defense = 10
            //Add Enemy picture here  
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
          enemyArr[enemyArr.length - 1].attack = 12
          enemyArr[enemyArr.length - 1].defense = 8
            //Add Enemy picture here 
          }
        }
        if(enemyArr[enemyArr.length - 1].race === 'Elf'){
          if(enemyArr[enemyArr.length - 1].clss === 'melee'){
          enemyArr[enemyArr.length - 1].attack = 8
          enemyArr[enemyArr.length - 1].defense = 12
            //Add Enemy picture here 
          } else if(enemyArr[enemyArr.length - 1].clss === 'range'){
            enemyArr[enemyArr.length - 1].attack = 10
          enemyArr[enemyArr.length - 1].defense = 10
            maleElfRngEn.classList.add('display')
          } else if(enemyArr[enemyArr.length - 1].clss === 'magic'){
          enemyArr[enemyArr.length - 1].attack = 12
          enemyArr[enemyArr.length - 1].defense = 8
            maleElfMgcEn.classList.add('display')
          }
        }
        if(enemyArr[(enemyArr.length - 1)].race === 'Dwarf'){
          if(enemyArr[(enemyArr.length - 1)].clss === 'melee'){
          enemyArr[enemyArr.length - 1].attack = 8
          enemyArr[enemyArr.length - 1].defense = 12
            //Add Enemy picture here 
          } else if(enemyArr[(enemyArr.length - 1)].clss === 'range'){
          enemyArr[enemyArr.length - 1].attack = 10
          enemyArr[enemyArr.length - 1].defense = 10
            //Add Enemy picture here  
          } else if(enemyArr[(enemyArr.length - 1)].clss === 'magic'){
          enemyArr[enemyArr.length - 1].attack = 12
          enemyArr[enemyArr.length - 1].defense = 8
            //Add Enemy picture here 
          }
        }
      }
      if(enemyArr[enemyArr.length - 1].gender === 'Female'){// mini Boss
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
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE Down ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  player.attack = 70
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// DELETE  Up ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp > 0){
    atckBtn.disabled = true
    retreatBtn.disabled = true
    setTimeout(() => {
      atckBtn.disabled = false
      retreatBtn.disabled = false
    }, 2000)
    player.attackMode(enemyArr[enemyArr.length - 1])
  } else {
    retreatBtn.disabled = true
    atckBtn.disabled = true
  }
})

retreatBtn.addEventListener('click', (evt) => {
  if(player.hp > 0 && enemyArr[enemyArr.length - 1].hp > 0){
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
  } else {
    atckBtn.disabled = true
    retreatBtn.disabled = true
  }
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

    //Final Battle: before and after
    if(enemyArr.length === 1){
      fightBtn.textContent = `Final Battle`
    } else if(enemyArr.length === 0){ //win
      fightBtn.textContent = `Replay`
    } else {
      fightBtn.textContent = `Fight(${enemyArr.length})`
    }
    
    //Images
    if(player.gender === 'Male'){
      if(player.race === 'Human'){
        if(player.clss === 'melee'){
          maleHumMel2.classList.add('display')
        } else if(player.clss === 'range'){
          //Add picture number 2 here 
        } else if(player.clss === 'magic'){
          //Add picture number 2 here 
        }
      }
      if(player.race === 'Elf'){
        if(player.clss === 'melee'){
          //Add picture number 2 here 
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
    if(player.gender === 'Female'){
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
  maleHumMel2.classList.remove('display')
  maleElfRng2.classList.remove('display')
  maleElfMgc2.classList.remove('display')
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
  if(player.gender === 'Male'){
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        maleHumMel2.classList.add('display')
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
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
  if(player.gender === 'Female'){
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
  maleHumMel2.classList.remove('display')
  maleElfRng2.classList.remove('display')
  maleElfMgc2.classList.remove('display')
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
  if(player.gender === 'Male'){
    if(player.race === 'Human'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
        maleHumMel2.classList.add('display')
      } else if(player.clss === 'range'){
        //Add picture number 2 here 
      } else if(player.clss === 'magic'){
        //Add picture number 2 here 
      }
    }
    if(player.race === 'Elf'){
      if(player.clss === 'melee'){
        //Add picture number 2 here 
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
  if(player.gender === 'Female'){
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

