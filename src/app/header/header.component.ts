import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() page?:any;  
  constructor( public storageservice : StorageService) { }
public token =''
  ngOnInit() {
    this.token= window.localStorage.getItem('token')
  }
  logOut(){
    this.storageservice.logout()
  }

}
