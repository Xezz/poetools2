import { Component, OnInit } from '@angular/core';
import {LevelService} from "../services/level.service";
import {MapService} from "../services/map.service";
import {PenaltyLevels} from "./penalty-levels";

@Component({
  selector: 'exp-calc',
  templateUrl: './exp-calc.component.html',
  styleUrls: ['./exp-calc.component.css']
})
export class ExpCalcComponent implements OnInit {
  levelData : PenaltyLevels[] = new Array<PenaltyLevels>();
  constructor(private levelService : LevelService) { }

  ngOnInit() {
    this.levelService.getData().subscribe(
      levels => {
        console.log(levels);
        this.levelData = levels;
      }
    );
  }
}
