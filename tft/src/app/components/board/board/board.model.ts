import { Unit } from "../../../models/unit.model";

export class BoardData {
    playerId: number;
    board: Array<Unit>;
    constructor(init?:Partial<BoardData>) {
        this.playerId = 0;
        this.board = [];

        if(init == null) return;
        Object.assign(this, init);
    }
}