import { RouterLinkWithHref } from "@angular/router";

export class Contact {
    id: number;
    name: string;
    gender: string;
    birthday: Date;
    email: string;
    phone: string;
    _links: Links;
}


export class Links {
    self: Href;
    contact: Href;
}

export class Href {
    href: string;
}