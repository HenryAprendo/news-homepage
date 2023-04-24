import { Component, Input} from '@angular/core';
import { News } from './../../util/news';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})
export class NewsHeadlinesComponent {

  @Input() items:News = {
    image: '',
    value: '',
    title: '',
    description: ''
  }

}
