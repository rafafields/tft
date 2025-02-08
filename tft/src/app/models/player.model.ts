import { Unit } from "./unit.model";

export class Player {
    id: number;
    name: string;
    gold: number;
    board: Array<Unit>;
    constructor(init?:Partial<Player>) {
        this.id = 0;
        this.name = '';
        this.gold = 0;
        this.board = [];

        if(init?.board){
            this.board = init.board.map((unit: Unit) => new Unit(unit));
        }

        if(init == null) return;
        Object.assign(this, init);
    }
}