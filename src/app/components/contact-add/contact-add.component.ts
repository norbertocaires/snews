import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalComponent } from '../modal/modal.component';

import { ContactService } from '../../services/contact.service';
import { NotificationsService } from 'angular2-notifications';

import { Contact } from '../../models/ContactViewModel';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
	@ViewChild('modal') modal: ModalComponent;
	@ViewChild('voterForm') voterForm: NgForm;

	generos = [ "MALE", "FEMALE", "OTHER"];

	@Output() onNewContact = new EventEmitter<Contact>();
	  
  private contact: Contact = new Contact();

  constructor(
	private contactService: ContactService,
	private notifications: NotificationsService,
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

  open(): void {
		this.contact = new Contact();
		this.contact.gender = null;
		this.modal.size = 'lg';
		this.modal.show();
  }

  saveContact() {
		if(this.checkContato() == false)
			return;

  	this.contactService.save(this.contact).subscribe(
			result => { },
			error => {
				this.notifications.error(error)
			},
			() => {
				this.close_modal();
				this.notifications.success('Contato salvo com sucesso');
		});
	}

	close_modal(): void {
		this.onNewContact.emit(this.contact);
		this.modal.hide();
	}

  isTouched(form: NgForm, controlName: string) {
		if (form.controls[controlName]) {
			return form.controls[controlName].touched;
		} else {
			return false;
		}
  }
}
