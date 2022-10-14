import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //EL SELECTOR QUE LE ASIGNÓ A NUESTRO COMPONENTE HEADER ES APP HEADER (lo podríamos cambiar si queremos pero vamos a dejarlo así)
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
