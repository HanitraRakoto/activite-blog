import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id : number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  //post = new Post(this.title, this.content, this.loveIts, this.created_at);

  constructor(private postsService : PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    }
  }

  likeIt() {
    this.loveIts++;
  }

  dontLikeIt() {
    this.loveIts--;
  }

  deletePost(id: number) {
    console.log('id ='+id);
    this.postsService.removePost(id);
  }

}
