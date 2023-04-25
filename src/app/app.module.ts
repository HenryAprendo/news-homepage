import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatContentComponent } from './components/mat-content/mat-content.component';
import { MatTitleComponent } from './components/mat-title/mat-title.component';
import { MatDescriptionComponent } from './components/mat-description/mat-description.component';
import { NewsHeadlinesComponent } from './components/news-headlines/news-headlines.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MatContentComponent,
    MatTitleComponent,
    MatDescriptionComponent,
    NewsHeadlinesComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
