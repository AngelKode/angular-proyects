
interface AudioPlayer{
    volume      : number,
    songDetails : SongDetails
}

interface SongDetails{
    name         : string,
    duration     : SongDuration,
    author       : string,
    yearRealease : number
}

interface SongDuration{
    minutes : number,
    seconds : number
}

const audioPlayerObject : AudioPlayer = {
    volume: 80,
    songDetails: {
        name: "Overdrive",
        duration: {
            minutes : 2,
            seconds : 38
        },
        author: "Malone",
        yearRealease: 2017
    }
}

const {
    volume,
    songDetails:{
        duration:songTime,
        author,
        name
    }
} = audioPlayerObject;
console.log(volume, name,songTime.minutes + ":" +songTime.seconds, author);

//Arrays

const [monday, tuesday, wednesday]:string[] = ["MONDAY", "TUESDAY","WEDNESDAY"];
console.log(monday, tuesday, wednesday);


//Arguments
interface Product{
    price:number,
    id:number
}
const calculateTax = (product:Product, taxRate:number = 0.16):number => {
    return product.price * (1 + taxRate);
}

console.log(
    calculateTax(
        {
            id:1232134,
            price:145.56
        }, 0.25)
);


export {};