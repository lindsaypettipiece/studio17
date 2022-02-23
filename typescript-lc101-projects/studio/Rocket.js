"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMass = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.massKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // const astronauts: string[] = [];
        for (var i = 0; i < this.astronauts.length; i++) {
            if (this.canAdd(astronaut[i]) === true) {
                this.astronauts.push(astronaut[i]);
                return true;
            }
            else {
                return false;
            }
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
