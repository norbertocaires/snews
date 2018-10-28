import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NotificationService } from "../../services/notification.service";

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
	public size: string;
	public headerAlignment: string;
	public visible = false;
	public visibleAnimate = false;

	public message: string;
	public class: string = 'success';
	public circleClass: string = 'fa-check-circle';

	constructor(private notificationsService: NotificationService) {
		this.notificationsService.onSuccess.subscribe(result => this.success(result.message));
		this.notificationsService.onError.subscribe(result => this.error(result.message));
		this.notificationsService.onInfo.subscribe(result => this.info(result.message));
		this.notificationsService.onWarning.subscribe(result => this.warning(result.message));
	}

	private success(message: string): void {
		this.class = 'success';
		this.circleClass = 'fa-check-circle';

		this.show(message);
	}

	private error(message: string): void {
		this.class = 'danger';
		this.circleClass = 'fa-times-circle';

		this.show(message);
	}

	private info(message: string): void {
		this.class = 'info';
		this.circleClass = 'fa-info-circle';

		this.show(message);
	}

	private warning(message: string): void {
		this.class = 'warning';
		this.circleClass = 'fa-info-circle';

		this.show(message);
	}

	private show(message: string): void {
		this.message = message;

		this.visible = true;
		setTimeout(() => this.visibleAnimate = true, 100);
	}

	public hide(): void {
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
	}

	public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
			this.hide();
			event.stopPropagation();
		}
	}
}