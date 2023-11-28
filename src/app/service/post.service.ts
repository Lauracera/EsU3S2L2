import { Injectable } from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: Post[] = [];

  constructor() {}

  postAttivi(): void {
    this.post.push({ id, body, title, active });
  }

  postInattivi() {}
}
