import { Unit } from "../../../models/unit.model";

export class BoardData {
    playerId: number;
    board: Array<Unit>;
    gold: number;
    experience: number;
    level: number;
    constructor(init?:Partial<BoardData>) {
        this.playerId = 0;
        this.board = [];
        this.gold = 0;
        this.experience = 0;
        this.level = 1;

        if(init == null) return;
        Object.assign(this, init);
    }
}