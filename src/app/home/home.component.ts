import { Component, OnInit, } from '@angular/core';
import { UserBaseService } from '../shared/services/user-base.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { StorageService } from '../shared/services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public inputType: string = 'password';
  public userDetails: User;
  public userForm;
  public errorMessage: boolean = false
  public reportsto = []
  public reportstoId = {}
  public userData;
  constructor(public userbaseService: UserBaseService, public router: Router, public storageservice: StorageService) {

    this.userDetails = User.teamMember();
    this.formGroupBulid()
  }

  formGroupBulid() {
    let fg = {
      'name': new FormControl(this.userDetails.name, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(this.userDetails.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.userDetails.password, [Validators.required, Validators.minLength(5)]),
      'designation': new FormControl(this.userDetails.designation, [Validators.required, Validators.minLength(2)]),
      'phone': new FormControl(this.userDetails.phone, [Validators.required, Validators.minLength(5)]),
      'reportsto': new FormControl([], []),
    }

    this.userForm = new FormGroup(fg);
  }
  ngOnInit() {
    if (this.storageservice.role == 'admin') {
      this.userbaseService.getUsers().subscribe((response) => {
        if (response.success)
          this.reportsto = response.data
      })
    }
    this.userbaseService.getUserDetails().subscribe((response) => {
      if (response.success)
        this.userData = response.data
      console.log(response)
    })


  }
  addUsers(event, id) {
    if (event.target.value) {
      this.reportstoId[id] = id
    } else {
      delete this.reportstoId[id]
    }

  }
  onSubmit() {
    if (this.userForm.valid) {
      this.errorMessage = false;
      this.userForm.value.reportsto = Object.keys(this.reportstoId)
      this.userbaseService.addTeamMember(this.userForm.value).subscribe((response) => {
        if (response.success) {
          this.formGroupBulid()
          // this.router.navigateByUrl('/login');
        } else {
          this.errorMessage = true;
        }
      })
    }
  }
}
