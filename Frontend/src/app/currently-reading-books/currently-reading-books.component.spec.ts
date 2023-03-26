import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyReadingBooksComponent } from './currently-reading-books.component';

describe('CurrentlyReadingBooksComponent', () => {
  let component: CurrentlyReadingBooksComponent;
  let fixture: ComponentFixture<CurrentlyReadingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyReadingBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyReadingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
