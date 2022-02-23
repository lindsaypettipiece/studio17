import { Payload } from "./Payload";
export class Cargo implements Payload{
    // properties and methods
    massKg: number;
    material: string;
    constructor(currentMassKg: number, currentMaterial: string){
        this.massKg = currentMassKg;
        this.material = currentMaterial;
    }

 }