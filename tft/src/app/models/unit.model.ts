export class Unit{
    name: string;
    health: number;
    attack: number;
    defense: number;
    attackSpeed: number;
    precision: number;

    constructor(
        name: string, 
        health: number, 
        attack: number, 
        defense: number, 
        attackSpeed: number,
        precision: number
    ){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.attackSpeed = attackSpeed;
        this.precision = precision;
    }
}