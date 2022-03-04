import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage implements OnInit {
  public books: Array<any>;
  input: string;

  ngOnInit() {
    this.books = [{id: 1, name: 'Book 1', owned: true, show: 'flex'}, {id: 2, name: 'Second book', owned: false, show: 'flex'}];
    
    const searchbar = document.querySelector('ion-searchbar');

    searchbar.addEventListener('ionChange', () => {
      console.log(this.input);
      this.books.forEach(book => {
        book.show = (`${book.id} - ${book.name.toLowerCase()}`).includes(this.input) ? 'flex' : 'none';
      });
    });
  }

  ionViewDidLoad() {
    
  }

}
