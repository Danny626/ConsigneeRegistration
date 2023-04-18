import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consignee } from 'app/model/consignee';
import { HOST } from 'app/shared/var.constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsigneeService {

  url: string = `${HOST}/consignee`;
  countryChange = new Subject<Consignee[]>();
  message = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  registry(consignee: Consignee, imgFile: File) {
    // const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;

    let formParams = new FormData();
    formParams.append('file', imgFile);
    formParams.append('consignee', new Blob([JSON
      .stringify(consignee)], {
      type: 'application/json'
    }));
    /* formParams.append('consignee', new Blob([JSON
      .stringify(consignee)], {
      type: 'application/json'
    })); */

    return this.http.post(`${this.url}/registry`, formParams, {
      responseType: 'json',
      headers: new HttpHeaders()
        //.set('Authorization', `bearer ${access_token}`)
        /* .set('Content-Type', undefined), */
    });
  }
}
