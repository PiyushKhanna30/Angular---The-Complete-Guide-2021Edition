import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    // type of data get request will return
    this.http.get<{[key:string]:Post}>('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray:Post[] = [];
        for (const key in responseData) {
          postsArray.push({ ...responseData[key], id: key });
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
