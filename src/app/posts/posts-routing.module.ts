import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';
import { TalksComponent } from './talks/talks.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'talks',
    component: TalksComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
