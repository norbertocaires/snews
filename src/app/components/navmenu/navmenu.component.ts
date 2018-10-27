import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'nav-menu',
	templateUrl: './navmenu.component.html',
	styleUrls: ['./navmenu.component.css'],
})
export class NavMenuComponent {

	constructor(
		private router: Router,
	) {

	}

	ngOnInit(): void {
	}

	logout(){
		this.router.navigateByUrl('/contatos');
	}

}
