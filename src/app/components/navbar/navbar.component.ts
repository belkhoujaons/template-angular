import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  click : boolean = false ;
  constructor() { }

  ngOnInit(): void {
  }


  clickButton() {
    this.click=!this.click
  }

}
