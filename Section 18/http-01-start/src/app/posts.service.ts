import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Post } from "./post.model";


@Injectable({
    providedIn:'root'
})
export class PostService{

    constructor(private http: HttpClient) { }
    
    createAndStorePost(title:string, content:string){
        const postData:Post = {title:title, content:content};
        this.http.post<{name:string}>('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json', postData,{
            observe:'response' //by default body
        }
        ).subscribe(responseData => {
            console.log(responseData);
          });
    }

    clearPosts(){
        return this.http.delete('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json',
        {
            observe:'events'
        }).pipe(tap(event =>{
            console.log(event);
        }));
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('other','newPretty');


        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-43c71-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header':'Hello World'}),
            // params : new HttpParams().set('print','pretty')
            params: searchParams
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