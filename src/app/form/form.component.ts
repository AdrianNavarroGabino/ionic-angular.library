import { Component, OnInit } from '@angular/core';
import { Utilities } from '../app.utilities';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public owned: boolean = null;

  constructor(public utilities: Utilities, public booksService: BooksService) { }

  ngOnInit() {}

  clickYes() {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    yes.classList.remove("not-checked");
    no.classList.remove("checked");

    yes.classList.add("checked");
    no.classList.add("not-checked");

    this.owned = true;
  }

  clickNo() {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    no.classList.remove("not-checked");
    yes.classList.remove("checked");

    no.classList.add("checked");
    yes.classList.add("not-checked");

    this.owned = false;
  }

  clickSave() {
    const id = <HTMLInputElement>(document.getElementById("idInput"));
    const name = <HTMLInputElement>(document.getElementById("nameInput"));

    if(!id.value) {
      return this.utilities.showAlert("Error", "", "Id can't be empty");
    }

    if(isNaN(Number(id.value))) {
      return this.utilities.showAlert("Error", "", "Id must be a number");
    }

    if(!name.value) {
      return this.utilities.showAlert("Error", "", "Name can't be empty");
    }

    if(this.owned == null) {
      return this.utilities.showAlert("Error", "", "You must select yes or no");
    }

    this.booksService.insertBook({id: Number(id.value), name: name.value, owned: this.owned})
    .subscribe(
      _ => this.reset(),
      error => this.utilities.showAlert("ERROR", error.name, error.status + " - " + error.statusText)
    );
  }

  reset() {
    const id = <HTMLInputElement>(document.getElementById("idInput"));
    const name = <HTMLInputElement>(document.getElementById("nameInput"));
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    no.classList.remove("checked");
    yes.classList.remove("checked");

    no.classList.add("not-checked");
    yes.classList.add("not-checked");

    id.remove();
    name.remove();
    this.owned = null;
  }
}
