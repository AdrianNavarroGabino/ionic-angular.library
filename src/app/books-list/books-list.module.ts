import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksListPageRoutingModule } from './books-list-routing.module';

import { BooksListPage } from './books-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksListPageRoutingModule
  ],
  declarations: [BooksListPage]
})
export class BooksListPageModule {}
