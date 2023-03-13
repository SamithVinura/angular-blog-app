import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
  singlePost:any

  postsByCategory:any
  constructor(private route:ActivatedRoute , private postsService:PostsService){
    console.log("s",this.singlePost)
  }

  ngOnInit():void{

    this.route.params.subscribe((val) => {

      this.postsService.loadData().subscribe((posts) => {
        const filteredSinglePost = posts.filter((post) => {
          return post['id'] == val['id'];
        });

        this.singlePost = filteredSinglePost[0];


        console.log("ss",this.singlePost)
       /* const updatedPost = {
          ... filteredSinglePost[0],
          views: filteredSinglePost[0]['views'] + 1
        };

        this.postsService.updatePostViews(filteredSinglePost[0]['id'],updatedPost)

        this.singlePost = updatedPost */

        const filteredPostsCategory = posts.filter((post) => {

          return post['category'].categoryId == this.singlePost.category.categoryId;
        });
        const newfilteredPostsCategory = filteredPostsCategory.filter((post) => {

          return post['id']  !== val['id'];
        });

        this.postsByCategory = newfilteredPostsCategory;

      });

    });

  }


}


