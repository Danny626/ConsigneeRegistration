import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsigneeUpload } from 'app/dto/consignee-upload';
import { Consignee } from 'app/model/consignee';
import { HOST, TOKEN_NAME } from 'app/shared/var.constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsigneeService {

  url: string = `${HOST}/country`;
  countryChange = new Subject<Consignee[]>();
  message = new Subject<string>();

  constructor(private http: HttpClient) { }

  registry(consigneeUpload: ConsigneeUpload) {
    const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;

    return this.http.post(`${this.url}/registry`, consigneeUpload, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
