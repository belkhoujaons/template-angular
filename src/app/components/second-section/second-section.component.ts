import { Component, OnInit } from '@angular/core';
import {faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.sass']
})
export class SecondSectionComponent implements OnInit {
  faCheck=faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
