import { Post } from './../models/Post.model';
import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.loveIt(this.post);
  }

  onDontLoveIt() {
    this.postsService.dontLoveIt(this.post);
  }

  onRemovePost() {
    this.postsService.removePost(this.post);
  }

}
