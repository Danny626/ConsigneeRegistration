import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from 'app/model/country';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = `${HOST}/country`;
  countryChange = new Subject<Country[]>();
  message = new Subject<string>();

  constructor(private http: HttpClient) { }

  listCountries() {
    const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;

    return this.http.get<Country[]>(`${this.url}/lista`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
