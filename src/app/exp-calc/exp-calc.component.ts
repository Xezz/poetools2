import { Component, OnInit } from '@angular/core';
import {LevelService} from "../services/level.service";
import {MapService} from "../services/map.service";
import {PenaltyLevels} from "./penalty-levels";
import {AreaDataService} from "../services/area-data.service.ts";
import {AreaLevels} from "./area-levels";

@Component({
  selector: 'exp-calc',
  templateUrl: './exp-calc.component.html',
  styleUrls: ['./exp-calc.component.css']
})
export class ExpCalcComponent implements OnInit {
  levelData : PenaltyLevels[] = new Array<PenaltyLevels>();
  areaData : AreaLevels[] = new Array<AreaLevels>();
  constructor(private levelService : LevelService, private areaDataService : AreaDataService) { }

  ngOnInit() {
    this.levelService.getData().subscribe(
      levels => {
        console.log(levels);
        this.levelData = levels;
      }
    );
    this.areaDataService.getData().subscribe(
      areaData => {
        console.log(areaData);
        this.areaData = areaData;
      }
    );

  }
}
