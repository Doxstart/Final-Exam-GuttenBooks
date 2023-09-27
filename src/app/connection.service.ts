import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IMetadata } from './models/book-data';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private readonly API_URL = 'https://gutendex.com/books/';

  public search = new BehaviorSubject<string>("");

  constructor(private readonly http: HttpClient) { }

  getData():Observable<IMetadata> {
    return this.http.get<IMetadata>(this.API_URL).
    pipe(map((BData: IMetadata) => BData));
  }

}
