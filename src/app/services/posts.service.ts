import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

  posts: Post[] = [
    new Post('Ma journée', 'Je me suis réveillé à 7h pour faire mon sport quotidien', 0, new Date(2018,7,5,18)),
    new Post('Shopping', 'J ai enfin eu la tenue de mes rêves!!', 2, new Date(2018,5,5,15,30)),
    new Post('Famine', 'J ai faim', -2, new Date(2018,1,20,7,45))
  ];

  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPosts();
  }
  
}