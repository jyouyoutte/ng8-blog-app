import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
     @Input() posts:Post[];

  constructor() { }

  ngOnInit() {  
  }

}