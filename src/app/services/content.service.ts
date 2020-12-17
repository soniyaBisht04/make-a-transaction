import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService implements TranslateLoader{

  constructor(private httpClient: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    return this.httpClient.get('assets/i18n/' + lang + '.json').pipe(map((res: any) => {
      return res.data;
    }));
  }
}
