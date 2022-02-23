import { Payload } from "./Payload";
export class Astronaut implements Payload{
    // properties and methods
    massKg: number;
    name: string;
    constructor(currentMassKg: number, currentName: string){
        this.massKg = currentMassKg;
        this.name = currentName;
    }

 }