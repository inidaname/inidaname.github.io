import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { TalksComponent } from './talks/talks.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [PostsComponent, TalksComponent, VideosComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
