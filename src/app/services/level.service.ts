import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {PenaltyLevels} from "../exp-calc/penalty-levels";

@Injectable()
export class LevelService {
  private url:string = './app/data/leveldata.json';

  constructor(private http:Http) {}

  getData():Observable<PenaltyLevels[]> {
    //noinspection TypeScriptUnresolvedFunction
    return this.http
      .get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
