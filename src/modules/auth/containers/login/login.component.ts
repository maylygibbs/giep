import { UserService } from './../../../auth/services/user.service';


import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    loading = false;
    error = '';
    returnUrl = undefined;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute
    ) {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/auth/login']);
        }
        this.activatedRoute.queryParams.subscribe((param) => {
            console.log(param.returnUrl);
            this.returnUrl = param.returnUrl;
          })

        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
       
    }

    // convenience getter for easy accemessageelds
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.loading = true;
        this.submitted = true;

        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        this.authService
            .login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: async() => {

                    // get return url from route parameters or default to '/'
                    
                    let returnUrl;
                    const user = await this.userService.getInfoUser();
                    if (this.authService.isAdmin()) {
                        returnUrl = '/dashboard';
                    }else{
                        returnUrl = this.returnUrl || '/regular';
                    }
                    this.router.navigate([returnUrl]);
                    this.loading = false;
                    
                },
                error: error => {
                    console.log(error.name);
                    this.error = error;
                    this.loading = false;
                },
            });
    }
}
