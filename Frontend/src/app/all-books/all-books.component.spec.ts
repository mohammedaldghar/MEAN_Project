import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponent } from './all-books.component';

describe('AllBooksComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
