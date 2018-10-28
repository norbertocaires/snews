import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { Contact } from '../../models/ContactViewModel';

import { ModalComponent } from '../modal/modal.component';

import { ContactService } from '../../services/contact.service';

import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
	@ViewChild('modal') modal: ModalComponent;

  @Output() onUpdateContact = new EventEmitter<Contact>();

	generos = [ "MALE", "FEMALE", "OTHER"];


  private contact: Contact = new Contact();

  constructor(
    private contactService: ContactService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }

  checkContato(){
		var toReturn = true;
		if(!this.contact.name){
			this.notifications.error("Digite o nome do cantato");
			toReturn = false;
		}
		return toReturn;
	}

  open(id: string): void {
    this.getContact(id);
		this.modal.size = 'lg';
		this.modal.show();
  }

  getContact(id: string){
    this.contactService.get(id).subscribe(
      result => { this.contact = result; },
      error => {
        this.notifications.error(error)
      },
      () => { });
  }

  updateContact(){
		if(this.checkContato() == false)
			return;

    this.contactService.update(this.contact).subscribe(
      result => { },
      error => {
        this.notifications.error('Erro interno ao atualizar contato')
      },
      () => {
        this.close_modal();
        this.notifications.success('Contato atualizado com sucesso');
      });
  }
  
  close_modal(): void {
		this.onUpdateContact.emit(this.contact);
		this.modal.hide();
	}

}
