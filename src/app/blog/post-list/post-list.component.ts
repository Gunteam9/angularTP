import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input()
  post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }
}
