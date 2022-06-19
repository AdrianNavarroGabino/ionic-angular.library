import { AlertController } from "@ionic/angular";
import { originalList } from "./app.constants";
import { IBook } from "./books/i-book";

export class Utilities {
    constructor() { }

    async showAlert(header: string, subHeader: string, message: string) {
        const alertController = new AlertController();
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header,
          subHeader,
          message,
          buttons: ['OK']
        });

        await alert.present();
    }

    saveBooks(books: IBook[]) {
      localStorage.setItem("books", JSON.stringify(books));
      return books;
    }

    loadBooks() {
      return localStorage.getItem("books") && JSON.parse(localStorage.getItem("books")) || this.saveBooks(originalList);
    }
}