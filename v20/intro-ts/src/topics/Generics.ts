
function whatsMyType<T>(arg:T):T{
    return arg;
}

const imString:string = whatsMyType<string>('Hi');
const imNumber:number = whatsMyType<number>(23);

console.log(imString);
console.log(imNumber);