import { Component } from '@angular/core';
import Contact from './models/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  initialChar = '';
  showDiv = false;

  searchBox = '';
  /**
   *  A dictionary with key value pairs like,
   *  'a': [ {firstName: 'Arjun', lastName: 'Bhardwaj', company: 'Google'} ],
   *  's': [{firstName: 'Salman', lastName: 'Khan', company: 'Google'}]
   */
  contactsMap: Map<string, Array<Contact> > = new Map<string, Array<Contact>>();

  firstName = '';
  lastName = '';
  company = '';
  contactCount = 0;


  temporaryContact(): Contact {
    return new Contact(
      this.firstName,
      this.lastName,
      this.company
    );
  }

  addContactButton(): void  {
    // tslint:disable-next-line:no-non-null-assertion
    const contact = this.temporaryContact();
    this.addContact(contact);
  }

  public getAllContact(): void {
    this.contactsMap.forEach((element) => {
    });
  }

  private addContact(contact: Contact): void {
    const firstLetter = contact.firstName.charAt(0).toLowerCase();
    if (this.contactsMap.has(firstLetter)){
      this.contactsMap.get(firstLetter)?.push(contact);
    } else {
      const newArray = new Array<Contact>();
      newArray.push(contact);
      this.contactsMap.set(firstLetter, newArray);
    }
    this.getAllContact();
    this.contactCount = this.contactCount + 1;
  }

  /**
  addContact(): void {
    console.log('inside add contact');
    this.initialChar = this.first.charAt(0);
    if (this.first !== '' || this.last !== '' || this.company !== ''){
      this.count = this.count + 1;
      this.eachContact = {
        firstName: this.first,
        lastName: this.last,
        companyName: this.company,
        initialChar: this.first.charAt(0)
      };

      this.allContact.push(this.eachContact);
      console.log(this.allContact);
      this.showDiv = true;

    }

    this.first = '';
    this.last = '';
    this.company = '';
    this.email = '';

  }**/
}
