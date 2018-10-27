import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
    {path: 'contatos', component: ContactsComponent},
    {path: '', component: LoginComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
