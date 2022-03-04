import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksListPage } from './books-list.page';

const routes: Routes = [
  {
    path: '',
    component: BooksListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksListPageRoutingModule {}
