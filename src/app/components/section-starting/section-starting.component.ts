import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-starting',
  templateUrl: './section-starting.component.html',
  styleUrls: ['./section-starting.component.sass']
})
export class SectionStartingComponent implements OnInit {
  man = faUser ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
