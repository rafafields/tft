import { Injectable } from "@angular/core";
import { Unit } from "./unit.model";

export class Cell{
    id: number;
    x: number;
    y: number;
    type: string;
    unit: Unit | null;

    constructor(init?:Partial<Cell>){     
        this.id = 0;
        this.x = 0;
        this.y = 0;
        this.type = '';
        this.unit = null;

        if(init == null) return;
        Object.assign(this, init);
    }
}