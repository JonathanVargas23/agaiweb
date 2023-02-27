import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { SupportComponent } from './modules/support/support.component';
import { NewsComponent } from './modules/news/news.component';
import { ViewBlogComponent } from './modules/view-blog/view-blog.component';
import { ServicesComponent } from './modules/services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'viewBlog/:id',
        component: ViewBlogComponent,
        data: { title: 'viewBlog' }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
