import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserBaseService } from '../shared/services/user-base.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public inputType: string = 'password';
  public adminDetails;
  public adminForm;
  public errorMessage: boolean = false
  constructor(public userbaseService: UserBaseService, public router: Router) {
    this.adminDetails = User.create();
    this.formGroupBulid()
  }
  formGroupBulid() {
    let fg = {
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }
    this.adminForm = new FormGroup(fg);
  }
  ngOnInit() {

  }
  onSubmit() {
    if (this.adminForm.valid) {
      this.errorMessage = false;
      this.userbaseService.signup(this.adminDetails).subscribe((response) => {
        if (response.success) {
          this.router.navigateByUrl('/login');
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
