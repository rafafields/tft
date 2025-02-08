import { Component } from '@angular/core';
import { Unit } from '../../models/unit.model';

@Component({
  selector: 'app-fight',
  standalone: true,
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})
export class FightComponent {

  unit1 = new Unit({name: 'Unit 1', health: 200, attack: 10, defense: 10, precision: 1.25});
  unit2 = new Unit({name: 'Unit 2', health: 100, attack: 30, defense: 5, precision: 8.25});

  fightInterval: NodeJS.Timeout = (null as unknown) as NodeJS.Timeout;

  updateTime = 1000;

  initFight(){
    let iterator = 0;
    this.fightInterval = setInterval(() => {
      iterator++;
      console.log('Round: ' + iterator);
      this.hit(this.unit1, this.unit2);
      this.hit(this.unit2, this.unit1);

      if(this.unit1.health <= 0 || this.unit2.health <= 0){
        clearInterval(this.fightInterval);
        console.log('Fight ended');
        console.log('Unit:' + (this.unit1.health <= 0 ? this.unit2.name : this.unit1.name) + ' won');
      }
    }, this.updateTime);
  }

  stopFight(){
    clearInterval(this.fightInterval);
  }

  hit(offensiveUnit: Unit, defenseiveUnit: Unit){
    const hitChance = Math.random() + offensiveUnit.precision;
    const hit = offensiveUnit.attack;
    if(hitChance >= 1){
      defenseiveUnit.health -= hit - defenseiveUnit.defense;
      console.log(offensiveUnit.name + ' hit ' + defenseiveUnit.name + ' for ' + (hit - defenseiveUnit.defense) + ' damage points');
      console.log(defenseiveUnit.name + ' health: ' + defenseiveUnit.health);
    } else {
      console.log(offensiveUnit.name + ' missed ' + defenseiveUnit.name);
    }
  }

}
