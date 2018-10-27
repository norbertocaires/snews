import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

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
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BlockUIModule.forRoot(),
    FormsModule,
  ],
  providers: [
    ContactService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
