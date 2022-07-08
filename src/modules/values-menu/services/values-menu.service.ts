import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@common/services/http.service';

@Injectable()
export class ValuesMenuService extends HttpService {

  constructor(protected http: HttpClient) { 
    super(http)
  }


  saveValuesMenu(data:any):Promise<any>{
    return this.post(environment.apiUrl,'/respuesta/new', data).toPromise();
  }

}
