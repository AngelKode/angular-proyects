function Functionality<T extends {new (...args) }>(customConstructor:T){
    return class extends customConstructor{
        newVar:number = 2;
    }
}


@Functionality
export class UpperClass{
    constructor(
        public variable:number
    ) {};
}

const classImp:UpperClass = new UpperClass(20);
console.log(classImp)