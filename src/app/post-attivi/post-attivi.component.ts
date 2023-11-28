import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss'],
})
export class PostAttiviComponent implements OnInit {
  constructor(private postSrv: PostService) {}
  post: any[] = [];
  ngOnInit(): void {
    this.post = this.postSrv.post;
  }
}
