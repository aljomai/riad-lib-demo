import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoptimComponent } from './ngoptim.component';

describe('NgoptimComponent', () => {
  let component: NgoptimComponent;
  let fixture: ComponentFixture<NgoptimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoptimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoptimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
