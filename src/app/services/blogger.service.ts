import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  private APIEnvironment = environment.envUrl;

  constructor(private http: HttpClient) { }

  postNewBlogger(data) {
    return this.http.post(`${this.APIEnvironment}/bloggers`, data);
  };

  getBloggers() {
    return this.http.get(`${this.APIEnvironment}/bloggers`);
  };

  getBloggerById( id:string){
    return this.http.get(`${this.APIEnvironment}/bloggers/${id}`);
  }

  deleteBlogger( id:string){
    return this.http.delete(`${this.APIEnvironment}/bloggers/${id}`);
  }

}
