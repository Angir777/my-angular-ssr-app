import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostService } from '../services/post.service';

export const postResolver: ResolveFn<any[]> = (route, state) => {
  const postService = inject(PostService);
  return postService.getPosts();
};
