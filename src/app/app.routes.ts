import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { postResolver } from './resolvers/post.resolver';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'posts',
        component: PostsComponent,
        resolve: { posts: postResolver }
    }
];
