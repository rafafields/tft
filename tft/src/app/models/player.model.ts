import { Unit } from "./unit.model";

export class Player {
    id: number;
    name: string;
    gold: number;
    experience: number;
    level: number;
    boardUnitsId: Array<number>;
    constructor(init?:Partial<Player>) {
        this.id = 0;
        this.name = '';
        this.gold = 0;
        this.experience = 0;
        this.level = 1;
        this.boardUnitsId = [];

        if(init == null) return;
        Object.assign(this, init);
    }
}

export class Enemy {
    id: number;
    name: string;
    boardUnitsId: Array<number>;
    constructor(init?:Partial<Player>) {
        this.id = 0;
        this.name = '';
        this.boardUnitsId = [];

        if(init == null) return;
        Object.assign(this, init);
    }
}