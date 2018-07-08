import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService : PostsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['titre'];
    const content = form.value['contenu'];
    const newPost = new Post(title, content, 0, new Date(Date.now()));
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
