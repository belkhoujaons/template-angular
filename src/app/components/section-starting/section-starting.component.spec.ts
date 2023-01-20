import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStartingComponent } from './section-starting.component';

describe('SectionStartingComponent', () => {
  let component: SectionStartingComponent;
  let fixture: ComponentFixture<SectionStartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStartingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
