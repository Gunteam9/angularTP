import { Component } from '@angular/core';
import {Post} from './Post';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent {
  title = 'blog';

  posts = [
    new Post(),
    new Post(),
    new Post()
  ]
}
