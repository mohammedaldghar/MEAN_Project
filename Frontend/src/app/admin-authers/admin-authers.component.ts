import { Component } from '@angular/core';
import { Author } from '../author';
import { AuthenticationService } from '../services/authentication.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-admin-authers',
  templateUrl: './admin-authers.component.html',
  styleUrls: ['./admin-authers.component.css']
})
export class AdminAuthersComponent {
  admin_authors!: any[];
  authorToUpdate: Author = {
    _id: "",
    auth_ID: 0,
    firstName: "",
    lastName: "",
    photo: "",
    DateOfBirth: "",
    __v: 0
  }

  constructor(private _AuthorService: AuthorService, private _AuthenticationService: AuthenticationService) {
    this._AuthorService.getAuthors().subscribe((author) => {
      this.admin_authors = author;

    });
  }

  register(registerForm: any) {
    this._AuthorService.registerAuthor(registerForm.value).subscribe(
      (resp) => {
        console.log("resp")
      },
      (err) => {
        console.log("err");

      }
    )
  }

  ondelete(_id: any) {
    this._AuthorService.deleteAuthorById(_id)
  }
  onEdit(author: Author) {
    this.authorToUpdate = author;
    //console.log(this.categoryToUpdate);
  }
  updateAuthor() {
    // console.log(this.categoryToUpdate)
    this._AuthorService.update(this.authorToUpdate).subscribe(
      (resp) => {
        console.log("resp")
      },
      (err) => {
        console.log("err");

      }
    )

  }

}
