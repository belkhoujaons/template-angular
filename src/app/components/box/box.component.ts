import { Component, OnInit } from '@angular/core';
import {faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent implements OnInit {
  faCheck=faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
