import { Component, OnInit } from '@angular/core';
import { ComponentsIndex } from '../../../components';
import { Unit } from '../../../models/unit.model';
import { BehaviorSubject, finalize } from 'rxjs';
import { WPDataService } from '../../../services/wp-data.service';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [ComponentsIndex],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit {

  loaded$ = new BehaviorSubject<boolean>(false);
  units: Unit[] = [];

  constructor(
    private readonly wpDataService: WPDataService,
  ) { }

  ngOnInit() {
    this.loaded$.next(false);
    this.wpDataService.getUnits()
      .pipe(finalize(() => this.loaded$.next(true)))
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
    console.log(this.units);
  }

}
