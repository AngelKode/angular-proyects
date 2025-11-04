interface Owner{
    name : string,
    age : number
}
class Animal{
    constructor (
        public name : string,
        private uniqueId:number,
        private owner : Owner | undefined
    ){}
}