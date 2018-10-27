var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Contato } from '../modules/contato';
var ContatosComponent = /** @class */ (function () {
    function ContatosComponent(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/contacts';
        this.c = new Contato;
        this.contatos = new Array();
    }
    ContatosComponent.prototype.ngOnInit = function () {
        // this.contatos = this.getContacts();
    };
    ContatosComponent.prototype.getContacts = function () {
        return this.http.get(this.Url)
            .pipe(map(function (response) { return response.json(); }));
    };
    ContatosComponent.prototype.handleError = function (error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    ContatosComponent = __decorate([
        Component({
            selector: 'app-contatos',
            templateUrl: './contatos.component.html',
            styleUrls: ['./contatos.component.css']
        }),
        __metadata("design:paramtypes", [Http])
    ], ContatosComponent);
    return ContatosComponent;
}());
export { ContatosComponent };
//# sourceMappingURL=contatos.component.js.map