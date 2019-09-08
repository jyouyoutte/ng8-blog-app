import { Component } from '@angular/core';
import { Post } from 'src/model/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-blog-app';

  posts = [
    new Post(new Date('December 05, 2018 23:11:45')),
    new Post(new Date('September 01, 2019 01:24:00')),    
    new Post(new Date())
  ];
}