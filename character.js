//Use this script to generate your character
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        document.addEventListener('click', function(){
            var enemy = document.getElementsByClassName("w-50").value;
            if(enemy == human){
                console.log("I am a human");
            }
        })
        //return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

class character {
    constructor(name, race, item,){
        this.name = name;
        this.race = race;
        this.item = item;
    }
}
function char(){
    document.addEventListener('click', function(){
        var enemy = document.getElementsByClassName("w-50").value;
        if(enemy == "human"){
            console.log("I am a human");
        }
    });
}
let monAvatar = new character('lass', 'human', 'boots');
console.log(monAvatar);
char();