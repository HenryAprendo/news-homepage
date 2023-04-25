import { Component } from '@angular/core';
import { News, news } from './util/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newsList:News[] = news.slice();

  menu:boolean = false;

  toggleMenu() {
    this.menu = !this.menu;
  }

}
