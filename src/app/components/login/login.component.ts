import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private notification: NotificationService,
    
    ) { }

  ngOnInit() {
  }

  public login() {
    this.notification.eventUpdateUserStorage.next(true);
    this.router.navigateByUrl('/contatos');
  }

}
