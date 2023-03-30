import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBookComponent } from './specific-book.component';

describe('SpecificBookComponent', () => {
  let component: SpecificBookComponent;
  let fixture: ComponentFixture<SpecificBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



