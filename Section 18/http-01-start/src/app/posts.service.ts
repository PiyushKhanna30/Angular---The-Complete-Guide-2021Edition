import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";


@Injectable({
    providedIn:'root'
})
export class PostService{

    constructor(private http: HttpClient) { }
    
    createAndStorePost(title:string, content:string){
        const postData:Post = {title:title, content:content};
        this.http.post<{name:string}>('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
            console.log(responseData);
          });
    }

    clearPosts(){
        return this.http.delete('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json');
    }

    fetchPosts(){
        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header':'Hello World'})
        })
        .pipe(map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        }));
    }
}