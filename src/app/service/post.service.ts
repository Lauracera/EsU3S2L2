import { Injectable } from '@angular/core';
import { Post } from '../post';

fetch('../assets/db.json')
  .then((resp) => {
    console.log(resp);
    if (!resp) {
      throw new Error();
    }
    return resp.json();
  })
  .then(console.log);

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: Post[] = [];

  constructor() {}

  newArray(id: number, body: string, title: string, active: boolean) {
    this.post.push({ id, body, title, active });
    console.log(this.post);
  }
}
