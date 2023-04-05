import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms'
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
  registerForm?: FormGroup
  myImg!: File;

  constructor(private _BookService: BookService, private _AuthenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    this._BookService.getBooks().subscribe((book) => {
      this.admin_books = book;

    });
  }

  uploadimg(imageInput: any) {
    this.myImg = imageInput.target.files[0]
  }

  register(registerForm: any) {
    console.log(registerForm);

    let myFormData = new FormData();
    myFormData.append('photo', this.myImg, this.myImg.name);
    myFormData.append('Name', registerForm.controls["Name"].value);
    myFormData.append('CategoryId', registerForm.controls["CategoryId"].value);
    myFormData.append('AuthorId', registerForm.controls["AuthorId"].value);

    this._BookService.registerBook(myFormData).subscribe(
      (resp) => {
        this._BookService.getBooks().subscribe(
          (response) => {
            this.admin_books = response;
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ondelete(_id: any) {
    this._BookService.deleteBookById(_id).subscribe({
      next: () => {
        this._BookService.getBooks().subscribe(
          (response) => {
            this.admin_books = response;
          }
        )
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  onEdit(book: Book) {
    this.bookToUpdate = book
  }
  updateBook() {
    this._BookService.update(this.bookToUpdate).subscribe({
      next: () => {
        this._BookService.getBooks().subscribe(
          (response) => {
            this.admin_books = response;
          }
        )
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  ngOnInit() {
  this.registerForm = this.formBuilder.group(
    {
      Name: ["", Validators.required],
      CategoryId: ["", Validators.required],
      AuthorId: ["", Validators.required],
      photo: [""],
      Rating: [""]
    }
  )
  //   this.registerForm = new FormGroup({
  //     Name: new FormControl(null, [Validators.required]),
  //     CategoryId: new FormControl(null, Validators.required),
  //     AuthorId: new FormControl(null, Validators.required),
  //     photo: new FormControl(null),
  //     Rating: new FormControl(null)
  //   })
  }
}
