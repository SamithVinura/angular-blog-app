import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  postCategory: any;
  categoryName:any
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.categoryName = val['category']
      this.postsService.loadData().subscribe((posts) => {
        const filteredPostCategory = posts.filter((post) => {
          return post['category'].categoryId == val['id'];
        });
        this.postCategory = filteredPostCategory;
      });
    });
  }
}
