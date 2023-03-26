import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBooksComponent } from './reading-books.component';

describe('ReadingBooksComponent', () => {
  let component: ReadingBooksComponent;
  let fixture: ComponentFixture<ReadingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
