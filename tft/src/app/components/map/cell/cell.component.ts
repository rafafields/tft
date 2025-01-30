import { Component, Input } from '@angular/core';
import { Cell } from '../../../models/cell.model';

@Component({
  selector: 'app-cell',
  imports: [],
  standalone: true,
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent {
  
  @Input({required: true}) cell!: Cell;;

  getCellContent(): string{
    if(this.cell.unit) return this.cell.unit.name;
    return 'Empty';
  }
}
