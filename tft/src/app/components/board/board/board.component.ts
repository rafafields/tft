import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from '../../../models/unit.model';
import { BoardData } from './board.model';

export interface BuyedExperience{
  experience: number;
  gold: number;
}

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {

  @Input({required: true}) data!: BoardData;

  playerId: number = 0;
  units: Array<Unit> = [];
  gold: number = 0;
  experience: number = 0;
  level: number = 1;

  @Output() buyedExperience = new EventEmitter<BuyedExperience>()

  constructor() { }

  ngOnInit() {
    this.initializeComponent();
  }

  initializeComponent(): void {
    this.playerId = this.data.playerId;
    this.units = this.data.board;
    this.gold = this.data.gold;
    this.experience = this.data.experience;
    this.level = this.data.level;
  }

  onBuyExperience(): void {
    this.experience += 4;
    this.gold -= 4;

    const output : BuyedExperience = {
      experience: this.experience,
      gold: this.gold
    }

    this.buyedExperience.emit(output)
  }

}
