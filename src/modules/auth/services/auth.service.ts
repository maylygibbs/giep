import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User } from '@modules/auth/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

    constructor(private http: HttpClient, public router: Router) {
        const returnUser = localStorage.getItem('currentUser') || '{}';
        this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(returnUser));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    public get token():string | null{
        const info = localStorage.getItem('currentUser') || null;
        if (info) {
            return JSON.parse(info).token;
        }
        return null;
    }

    login(username: string, password: string) {
        return this.http
            .post<any>(`${environment.apiUrl}/login_check`, { username, password })
            .pipe(
                map(user => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                })
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    isLoggedIn(): boolean {
        const currentUser = localStorage.getItem('currentUser') || null;
        if(currentUser){
          return true;      
        }
        return false;
        
      }

    isAdmin():boolean{
        const info = localStorage.getItem('user') || null;
        if (info) {
           const user = JSON.parse(info); 
           return !user.role.includes('ROLE_REGULAR');
        }
        return false;
    }
}
