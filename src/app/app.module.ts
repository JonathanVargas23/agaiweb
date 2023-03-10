import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireRemoteConfigModule, SETTINGS } from '@angular/fire/compat/remote-config';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from '@agrodatai/skeleton';

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
import { ReportsComponent } from './modules/reports/reports.component';
import { CardComponent } from './components/card/card.component';
import { SupportComponent } from './modules/support/support.component';
import { ViewBlogComponent } from './modules/view-blog/view-blog.component';
import { NewEventsComponent } from './components/new-events/new-events.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { ServicesComponent } from './modules/services/services.component';
import { OurTechnologyComponent } from './components/servicesPage/our-technology/our-technology.component';
import { OurServiceComponent } from './components/servicesPage/our-service/our-service.component';
import { HelpYouComponent } from './components/servicesPage/help-you/help-you.component';
import { ObjectivesComponent } from './components/aboutUsPage/objectives/objectives.component';
import { ProductsComponent } from './components/home/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    ReportsComponent,
    CardComponent,
    SupportComponent,
    ViewBlogComponent,
    NewEventsComponent,
    HeaderComponent,
    ServicesComponent,
    OurTechnologyComponent,
    OurServiceComponent,
    HelpYouComponent,
    ObjectivesComponent,
    ProductsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireRemoteConfigModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    NgxPaginationModule,
    OwlModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
