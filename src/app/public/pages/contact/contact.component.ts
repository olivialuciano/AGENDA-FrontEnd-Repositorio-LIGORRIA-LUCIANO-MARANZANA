// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.contactData = await this.cs.getContacts();
  }

  logOut(){
    this.auth.resetSession();
  }

}