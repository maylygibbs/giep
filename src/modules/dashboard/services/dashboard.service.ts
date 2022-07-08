import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@common/services/http.service';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService extends HttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    getTest() {
        //   return this.http.get(`${environment.apiUrl}/stellar/notas/entregas/20211101/20211105`);
    }

    async getValuesMenu(questionId: any): Promise<any> {
        return this.get(environment.apiUrl, `/respuesta/result/byid/${questionId}`).toPromise();
    }
}
