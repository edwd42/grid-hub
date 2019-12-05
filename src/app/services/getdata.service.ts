import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStreetlight } from './streetlight.interface';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private _url: string = "/assets/data/providence_streetlight_data.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<IStreetlight[]> {
    return this.http.get<IStreetlight[]>(this._url);
  }
}
