import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/ContactViewModel';


@Injectable()
export class ContactService {
	private Url = 'http://localhost:8080/contacts';

	constructor(private http: HttpClient) { }

	getAll(): Observable<any>{
		var options = {
				headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
			};
		return this.http.get<any>(this.Url, options);
	}

	getPage(page: number, size: number, sort: boolean): Observable<any>{
		var options = {
				headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
				params: { 
					page: page.toString(),
					size: size.toString(),
					sort: sort.toString()
				}
			};
		return this.http.get<any>(this.Url, options);
	}

	get(id: string): Observable<any>{
		return this.http.get<any>(id);
	}

	save(contact: Contact): Observable<any>{
		return this.http.post<any>(this.Url, contact);
	}

	update(contact: Contact): Observable<any>{
		return this.http.put<any>(contact._links.contact.href, contact);
	}

	delete(id: string): Observable<any>{
		return this.http.delete<any>(id);
	}
}