
import { Astronaut } from "./Astronuat";
import { Payload } from "./Payload";
import { Cargo } from "./cargo";
export class Rocket implements Payload{
    // properties and methods
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]= [];
    astronauts: Astronaut[] = [];
    constructor( name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        
    }
    sumMass (items: Payload[]): number {
        let totalMass: number = 0
        for(let i = 0; i < items.length; i++){
            totalMass += items[i].massKg

        }
        return totalMass
    }
    currentMassKg(): number {
    let currentMass: number = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems))
    return currentMass
    }
    
    canAdd(item: Payload): boolean{
        if ((this.currentMassKg() + item.massKg)<= this.massKg){
            return true
        }

    }
    addCargo(cargo: Cargo): boolean{
        
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo)
            
           return true
       }else{
           return false
       }
    }
    addAstronaut(astronaut: Astronaut): Boolean{
        
        for(let i = 0; i < this.astronauts.length; i++){
             if (this.canAdd(astronaut[i]) === true){
                astronaut[i].push(this.astronauts)
                return true
            } else {
            return false
            }
            
        }
    }
}
