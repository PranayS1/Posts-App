import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../angular-material.module';

import { PostComponent} from './post-create/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule { }
