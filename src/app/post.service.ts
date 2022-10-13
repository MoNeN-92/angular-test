import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 

  constructor(
    private http:HttpClient
  ) { }

  Getpost(){
    return this.http.get('assets/DB/posts.json');
    
  }

}
