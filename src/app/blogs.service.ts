import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export type Blog = {
  id: number,
  title: string,
  content: string,
};

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  url = '/api/blogs';

  constructor(
    private http: HttpClient,
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url);
  }
}
