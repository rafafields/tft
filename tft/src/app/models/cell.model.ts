import { Injectable } from "@angular/core";
import { Unit } from "./unit.model";

export class Cell{
    id: number;
    x: number;
    y: number;
    type: string;
    unit: Unit | null;

    constructor(id:number, x: number, y: number, type: string, unit: Unit | null){
        this.id = id;
        this.x = x;
        this.y = y;
        this.type = type;
        this.unit = unit;
    }
}