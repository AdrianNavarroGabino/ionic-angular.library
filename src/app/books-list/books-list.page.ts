import { Component, OnInit } from '@angular/core';
import { IBook } from '../books/i-book';
import { BooksService } from '../books/books.service';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage implements OnInit {
  public books: IBook[] = [];
  input: string;

  ngOnInit() {
    this.booksService.getBooks()
    .subscribe(
      books => this.books = books,
      error => console.error(error),
      () => console.log('Books loaded')
    );
    
    const searchbar = document.querySelector('ion-searchbar');

    searchbar.addEventListener('ionChange', () => {
      console.log(this.input);
      this.books.forEach(book => {
        book.show = (`${book.id} - ${book.name.toLowerCase()}`).includes(this.input) ? 'flex' : 'none';
      });
    });
  }

  constructor(private booksService: BooksService) { }

  clickItem(book) {
    console.log(book);
    this.handleButtonClick(book);

  }

  async handleButtonClick(book) {
    const alert = await alertController.create({
      header: `${book.id} - ${book.name}`,
      message: 'Do you have this book?',
      buttons: [
        {
        text: 'No',
        role: 'no',
        cssClass: 'secondary',
        id: 'no-button',
        handler: () => {
          console.log('NO');
        }
      }, {
        text: 'Yes',
        id: 'yes-button',
        handler: () => {
          console.log('Yes Okay');
        }
      }],
    });

    await alert.present();
  }

}
