import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { Book } from '../book';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent {

  admin_books!: any[];
  bookToUpdate: Book = {
    _id: "",
    id: 0,
    Name: "",
    photo: "",
    CategoryId: "",
    AuthorId: "",
    Rating: 0,
    Reviews: [],
    __v: 0
  }

  constructor(private _BookService: BookService, private _AuthenticationService: AuthenticationService) {
    this._BookService.getBooks().subscribe((book) => {
      this.admin_books = book;

    });
  }

  register(registerForm: any) {
    this._BookService.registerBook(registerForm.value).subscribe(
      (resp) => {
        console.log("resp")
      },
      (err) => {
        console.log("err");

      }
    )
  }

  ondelete(_id: any) {
    this._BookService.deleteBookById(_id)
  }
  onEdit(book: Book) {
    this.bookToUpdate = book;
  }
  updateBook() {
    this._BookService.update(this.bookToUpdate)

  }


}
