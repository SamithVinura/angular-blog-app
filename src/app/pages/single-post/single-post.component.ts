import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  singlePost: any;

  postsByCategory: any;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) {
    this.route.params.subscribe((val) => {
      this.postsService.loadData().subscribe((posts) => {
        const filteredSinglePost = posts.filter((post) => {
          return post['id'] == val['id'];
        });

        this.singlePost = filteredSinglePost[0];

        const filteredPostsCategory = posts.filter((post) => {
          return (
            post['category'].categoryId == this.singlePost.category.categoryId
          );
        });
        const newfilteredPostsCategory = filteredPostsCategory.filter(
          (post) => {
            return post['id'] !== val['id'];
          }
        );

        this.postsByCategory = newfilteredPostsCategory;
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      const updatedPost = {
        ...this.singlePost,
        views: this.singlePost['views'] + 1,
      };

      this.postsService.updatePostViews(this.singlePost['id'], updatedPost);
      this.singlePost = updatedPost;
    }, 1500);
  }
}
