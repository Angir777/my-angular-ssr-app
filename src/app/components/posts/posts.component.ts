import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: any[];

  constructor(private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data['posts']; // We are get data from the resolver
  }
}
