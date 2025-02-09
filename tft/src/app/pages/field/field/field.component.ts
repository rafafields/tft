import { Component, OnInit, signal } from '@angular/core';
import { ComponentsIndex } from '../../../components';
import { Unit } from '../../../models/unit.model';
import { finalize } from 'rxjs';
import { WPDataService } from '../../../services/wp-data.service';
import { Enemy, Player } from '../../../models/player.model';
import { BoardData } from '../../../components/board/board/board.model';
import { BuyedExperience } from '../../../components/board/board/board.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [ComponentsIndex],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit {

  loaded = signal(false)

  player: Player = new Player;
  playerBoard: BoardData = new BoardData;

  enemy: Enemy = new Enemy;
  enemyBoard: BoardData = new BoardData;

  units: Unit[] = [];

  constructor(
    private readonly wpDataService: WPDataService,
  ) { }

  ngOnInit() {
    this.loadComponentData();
    this.initializePlayers();
  }

  loadComponentData():void{
    this.loaded.set(false);
    this.wpDataService.getUnits()
      .pipe(finalize(() => this.loaded.set(true)))
      .subscribe({
        next: (data) => this.parseUnits(data),
        error: (error: any) => console.error(error)
      });
  }

  parseUnits(data: any): void {
    const units: Unit[] = [];
    data.forEach((unit: any) => {
      units.push({
        id: unit.id,
        name: unit.title.rendered,
        health: unit.acf.health,
        attack: unit.acf.attack,
        magic: unit.acf.magic,
        defense: unit.acf.defense,
        magicDefense: unit.acf.magic_defense,
        attackSpeed: unit.acf.attack_speed,
        precision: unit.acf.precision,
        mana: unit.acf.mana,
      });
    });
    this.units = units;
  }

  initializePlayers(): void {
    this.player = new Player(
      {
        id: 1,
        name: 'Player',
        boardUnitsId: [16,18]
      }
    );
    this.enemy = new Enemy(
      {
        id: 2,
        name: 'Enemy',
        boardUnitsId: [20,19]
      }
    );

    this.playerBoard = this.initializeBoardData(this.player);
    this.enemyBoard = this.initializeBoardData(this.enemy);
  }

  initializeBoardData(player: Player | Enemy): BoardData {
    const boardData = new BoardData;
    boardData.playerId = player.id;
    player.boardUnitsId.forEach((unitId: number) => {
      const unit = this.units.find((unit: Unit) => unit.id === unitId);
      if(unit){
        boardData.board.push(unit);
      }
    });
    return boardData;
  }

  onBuyedExperience(event: BuyedExperience): void {
    this.player.experience = event.experience;
    this.player.gold = event.gold;
    console.log('Player experience:', this.player.experience);
  }

}
