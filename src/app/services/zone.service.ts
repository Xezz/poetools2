import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ZoneService {
  private url:string = './app/data/zonedata.json';

  constructor(private http:Http) {}

  getData():Observable<any> {
    //noinspection TypeScriptUnresolvedFunction
    return this.http
      .get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw('Server error'));
  }
}
