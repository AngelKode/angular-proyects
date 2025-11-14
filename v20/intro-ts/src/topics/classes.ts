class DogService{
    constructor(
        private name : string,
        private isCertificated : boolean,
        private dogsToWork:Dog[]
    ){}

    getDogsToWork():Dog[]{
        return this.dogsToWork;
    }

    getCertificationOk():boolean{
        return this.isCertificated;
    }

    getName():string{
        return this.name;
    }
}

class Dog{
    constructor(
        private name : string,
        private dogService : DogService
    ){}

    bark():void{
        console.log(`${this.name}: Woof Woof`);
    }

    getMyOwner():string{
        return this.dogService.getName();
    }
}