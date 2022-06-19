import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BooksListPageModule } from '../books-list/books-list.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Utilities } from '../app.utilities';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BooksListPageModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [Utilities]
})
export class Tab1PageModule {}
