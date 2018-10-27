import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { Contact } from '../../models/ContactViewModel';

import { ModalComponent } from '../modal/modal.component';

import { ContactService } from '../../services/contact.service';
import { NotificationService } from "../../services/notification.service";


@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
	@ViewChild('modal') modal: ModalComponent;

  @Output() onUpdateContact = new EventEmitter<Contact>();
  
  private contact: Contact = new Contact();

  constructor(
    private contactService: ContactService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
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
        this.notification.error(error)
      },
      () => { });
  }

  updateContact(){
    this.contactService.update(this.contact).subscribe(
      result => { },
      error => {
        this.notification.error(error)
      },
      () => {
        this.close_modal();
        this.notification.success('Contato atualizado com sucesso');
      });
  }
  
  close_modal(): void {
		this.onUpdateContact.emit(this.contact);
		this.modal.hide();
	}

}
