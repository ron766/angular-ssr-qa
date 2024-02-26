import { Routes } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    title: 'Blogs'
  }
];
