const calculateSum = (a:number, b:number):string => {
    return `The result is ${a+b}`;
}

console.log(calculateSum(100,2));


interface Player{
    hp : number,
    nickname : string | "DEFAULT PLAYER",
    printInfo : () => void
}

const addHp = (player:Player, hpToAdd:number) => {
    if(player.hp + hpToAdd > 100){
        console.log("MAX HP. No HP added");
        return;
    }

    player.hp += hpToAdd;
}

const playerOne:Player = {
    hp:90,
    nickname : "P1",
    printInfo(){
        console.log(`${this.nickname} has ${this.hp} HP`);
    }
}

playerOne.printInfo();
addHp(playerOne, 12);
playerOne.printInfo();

export {};