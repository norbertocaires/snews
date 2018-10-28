import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../services/notification.service';


@Component({
	selector: 'nav-menu',
	templateUrl: './navmenu.component.html',
	styleUrls: ['./navmenu.component.css'],
})
export class NavMenuComponent {

	public showLogout: boolean = false;

	constructor(
		private router: Router,
		private notificationService: NotificationService,
	) {

	}

	ngOnInit(): void {
		this.notificationService.eventUpdateUserStorage.subscribe(
			(event: any) => this.showLogout = event
		);
	}
	
	logout(){
		this.showLogout = false;
		this.router.navigateByUrl('/');
	}

}
