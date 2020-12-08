import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './must-math.validator';


@Component({
  templateUrl: './login.component.html',
  styles: [``]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  username: string;
  password: string;
  retUrl = 'home';

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log( 'LoginComponent/ngOnInit ' + this.retUrl);
      });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.registerForm.controls; }
  // tslint:disable-next-line:typedef
  onFormSubmit(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
      console.log( 'return to ' + this.retUrl);
      if (this.retUrl != null) {
        this.router.navigate( [this.retUrl]);
      } else {
        this.router.navigate( ['home']);
      }
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/items']);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
