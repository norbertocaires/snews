import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
declare var $: any;

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPaginationModule } from 'ngx-pagination';
import { BlockUIModule } from 'ng-block-ui';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ContactUpdateComponent } from './components/contact-update/contact-update.component';


//services
import { ContactService } from './services/contact.service'
import { NotificationService } from "./services/notification.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent,
    NavMenuComponent,
    ContactsComponent,
    ContactAddComponent,
    NotificationComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    BlockUIModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    FormsModule,
  ],
  providers: [
    ContactService,
    NotificationService,
    NotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
