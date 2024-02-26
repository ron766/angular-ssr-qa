import {
  Component,
  inject,
  makeStateKey,
  TransferState,
} from '@angular/core';

import {
  Blog,
  BlogsService,
} from '../blogs.service';

const STATE_KEY_BLOGS = makeStateKey('blogs');

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [];
  blogsService: BlogsService = inject(BlogsService);
  time: string = new Date().toISOString();

  constructor(
    private state: TransferState,
  ) {
  }

  ngOnInit() {
    if (!this.state.hasKey(STATE_KEY_BLOGS)) {
      this.blogsService.getBlogs()
        .subscribe(blogs => {
          this.state.set(STATE_KEY_BLOGS, <any>blogs);
          this.blogs = this.state.get(STATE_KEY_BLOGS, <any>[]);
        });
    } else {
      this.blogs = this.state.get(STATE_KEY_BLOGS, <any>[]);
    }

    this.time = new Date().toISOString();
  }
}
