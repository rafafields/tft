import { Component, OnInit } from '@angular/core';
import { Unit } from '../../models/unit.model';
import { CellComponent } from './cell/cell.component';
import { Cell } from '../../models/cell.model';

@Component({
  selector: 'app-map',
  imports: [CellComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {

  map: Array<Cell> = [];

  ngOnInit(){
    this.generateMap();
  }

  generateMap(){
    let iterator = 0;
    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
        // const cell = new Cell(iterator, i, j, 'grass', new Unit('Unit 1', 180, 10, 5, 1, 0.95));
        const cell = new Cell(iterator, i, j, 'grass', null);
        this.map.push(cell);
        iterator++;
      }
    }
  }

  addUnit(cell: Cell, unit: Unit){
    cell.unit = unit;
  }

  moveUnit(cell: Cell, newCell: Cell){
    newCell.unit = cell.unit;
    cell.unit = null;
  }

  removeUnit(cell: Cell){
    cell.unit = null;
  }

}
