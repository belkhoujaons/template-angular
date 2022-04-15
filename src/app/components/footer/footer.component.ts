import { Component, OnInit } from '@angular/core';
import {faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  faCheck=faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
