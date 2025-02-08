export class Unit{
    id: number;
    name: string;
    health: number;
    attack: number;
    magic: number;
    defense: number;
    magicDefense: number;
    attackSpeed: number;
    precision: number;
    mana: number;

    constructor(init?:Partial<Unit>){
        this.id = 0;
        this.name = '';
        this.health = 0;
        this.attack = 0;
        this.magic = 0;
        this.defense = 0;
        this.magicDefense = 0;
        this.attackSpeed = 0;
        this.precision = 0;
        this.mana = 0;

        if(init == null) return;
        Object.assign(this, init);
    }
}