import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredPosts: any;
  leatestPosts: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.loadData().subscribe((val) => {
      const filteredFeaturedPosts = val
        .filter((post) => {
          return post['isFeatured'] === true;
        })
        .slice(0, 4);
      this.featuredPosts = filteredFeaturedPosts;

      const filteredLeatestPosts = val.sort(
        (a, b) => a['createAt'] - b['createAt']
      );
      this.leatestPosts = filteredLeatestPosts;
    });

  }


}

