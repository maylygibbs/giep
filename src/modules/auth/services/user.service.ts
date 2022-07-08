import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '@modules/auth/models';
import { HttpService } from '@common/services/http.service';
import { HttpClient } from '@angular/common/http';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService extends HttpService {
    userName: any;
    constructor(protected http: HttpClient) {
        super(http);
        this.userName = localStorage.getItem('user');
        this.user = {
            id: '123',
            username: this.userName,
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }

    async getInfoUser(){
        const user =  await this.get(environment.apiUrl,'/user/getuser').toPromise();
        this.user = {
            id:'123',
            username: user.username+'AAAA',
            role: user.role
        }
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
}
