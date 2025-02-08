import { Component, Input, OnInit } from '@angular/core';
import { Unit } from '../../../models/unit.model';
import { BoardData } from './board.model';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {

  @Input({required: true}) data!: BoardData;

  playerId: number = 1;
  units: Array<Unit> = [];

  constructor() { }

  ngOnInit() {
    this.initializeComponente();
    console.log(this.units)
  }

  initializeComponente(): void {
  }

}
