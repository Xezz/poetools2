import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AreaLevels} from "../exp-calc/area-levels";

@Injectable()
export class AreaDataService {
  private url:string = './app/data/zonedata.json';

  constructor(private http:Http) {}

  getData():Observable<AreaLevels[]> {
    //noinspection TypeScriptUnresolvedFunction
    return this.http
      .get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error));
  }
}
