import { Component, OnInit, ViewChild } from '@angular/core';

import { ContactUpdateComponent } from '../contact-update/contact-update.component';
import { ContactAddComponent } from '../contact-add/contact-add.component';
import { ModalComponent } from '../modal/modal.component';

import { ContactService } from '../../services/contact.service';
import { NotificationService } from "../../services/notification.service";

import { Contact } from '../../models/ContactViewModel';
import {Page} from '../../models/PageViewModel';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contacts: Contact[] = new Array<Contact>();
  private page: Page = new Page();

  @ViewChild('modal_delete') modalConfirmDelete: ModalComponent;
  @ViewChild(ContactAddComponent) contactAdd: ContactAddComponent;
  @ViewChild(ContactUpdateComponent) contactUpdate: ContactUpdateComponent;

	private perPage : number = 5;
	private currentPage: number = 1;

  constructor(
    private contactService: ContactService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.modalConfirmDelete.stored.contactToDelete = new Contact();
    this.pageChanged(this.currentPage);
  }

  pageChanged(changedPage: number){
    changedPage = changedPage - 1;
    var r = this.contactService.getPage(changedPage, this.perPage, true).subscribe(
      result => {
        this.contacts = result._embedded.contacts;
        this.page = result.page;
        this.currentPage = changedPage + 1;
      }
   ,error => {
    this.notification.success(error);
    });
  }

  confirmDelete(contact: Contact): void {
    this.modalConfirmDelete.headerAlignment = "center";
    this.modalConfirmDelete.size = 'md'
		this.modalConfirmDelete.stored.contactToDelete = contact;
		this.modalConfirmDelete.show();
	}

	delete(contact: Contact): void {
		this.contactService.delete(contact._links.contact.href).subscribe(
			result => { },
			error => { this.notification.error('Ocorreu um erro ao excluir o contato.') },
			() => {
				// onCompleted

				var index: number = this.contacts.indexOf(contact);
				if (index !== -1)
					this.contacts.splice(index, 1);

				this.notification.success('Contato excluido com sucesso');
			}
		);

		this.modalConfirmDelete.hide();
	}


}
