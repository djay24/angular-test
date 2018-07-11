import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';
import { Contact } from '../contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContact: Contact = new Contact();
  contacts = CONTACTS;
  constructor() { }

  deleteContact(del){
    const remove: number = this.contacts.indexOf(del);
    if (remove !== -1) {
      this.contacts.splice(remove, 1);
    }
  }

  addContact() {
    const lastIndex = this.contacts.length - 1;
    const last = this.contacts[lastIndex];
    this.newContact.id = last.id + 1;
    this.contacts.push(this.newContact);
    this.newContact = new Contact();
  }

  ngOnInit() {
  }

}
