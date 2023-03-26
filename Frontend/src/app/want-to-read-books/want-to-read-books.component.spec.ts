import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToReadBooksComponent } from './want-to-read-books.component';

describe('WantToReadBooksComponent', () => {
  let component: WantToReadBooksComponent;
  let fixture: ComponentFixture<WantToReadBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToReadBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantToReadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
