import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireRemoteConfigModule, SETTINGS } from '@angular/fire/compat/remote-config';
import { SkeletonModule } from '@agrodatai/skeleton';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';

import { environment } from '../../firebaseCredentials';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './modules/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { NewEventsComponent } from './components/new-events/new-events.component';
import { ViewBlogComponent } from './modules/view-blog/view-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    HeaderComponent,
    NewEventsComponent,
    ViewBlogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SkeletonModule,
    NgxPaginationModule,
    OwlModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireRemoteConfigModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
