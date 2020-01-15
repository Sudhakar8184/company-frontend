import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserBaseService } from '../shared/services/user-base.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public inputType: string = 'password';
  userForm: FormGroup;
  errorMessage: boolean = false
  public userDetails: any = {
    email: '',
    password: ''
  }
  constructor(public userbaseService: UserBaseService, public router: Router) { }

  ngOnInit() {
    this.formGroupBulid()
  }
  formGroupBulid() {
    let fg = {
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }
    this.userForm = new FormGroup(fg);
  }

  onSubmit() {
    console.log(">>>>>?????", this.userDetails)
    if(this.userForm.valid){
      this.errorMessage = false;
      this.userbaseService.login(this.userDetails).subscribe((response) => {
        if (response.success) {
          this.router.navigateByUrl('/');
        } else {
          this.errorMessage = true;
        }
      })
  
    }
     }

  tooglepwd() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
}
