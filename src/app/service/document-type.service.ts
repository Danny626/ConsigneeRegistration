import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentType } from 'app/model/documentType';
import { HOST, TOKEN_NAME } from 'app/shared/var.constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  url: string = `${HOST}/country`;
  countryChange = new Subject<DocumentType[]>();
  message = new Subject<string>();

  constructor(private http: HttpClient) { }

  listDocumentTypes() {
    const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;

    return this.http.get<DocumentType[]>(`${this.url}`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
