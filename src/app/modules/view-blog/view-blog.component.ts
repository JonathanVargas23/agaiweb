import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { ActivatedRoute, Router } from '@angular/router';
import { SLIDE_OPTIONS } from './viewBlog-constants';
import { DATA_BLOG, DATA_BLOG_SELECTED } from '../../dataBlogs';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  @ViewChild('carousel') carousel: OwlCarousel;

  public slideOptions = SLIDE_OPTIONS;
  public blogId: number = 0;
  public dataBlog = [];
  public dataBlogSelected = DATA_BLOG_SELECTED;

  constructor(
    @Inject(PLATFORM_ID) private platformID: any,
    private activateRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.blogId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.dataBlog = DATA_BLOG.find(item => item[0].id === this.blogId);
  };

  goTo(id: number) {
    // console.log("ID URL", id);
    this.dataBlog = DATA_BLOG.find(item => item[0].id === id);
    this._router.navigate(['viewBlog/', id]);
  };

  reDirect() {
    this._router.navigateByUrl('home?contact=true');
  }

  nextSlide() {
    this.carousel.$owlChild.trigger('next.owl.carousel');
    setTimeout(() => {
      this.carousel.refresh();
    }, 500);
  };

  prevSlide() {
    this.carousel.$owlChild.trigger('prev.owl.carousel');
    setTimeout(() => {
      this.carousel.refresh();
    }, 500);
  };

  registerEvent(event: string) {
  };

  goWhatsApp() {
    // goWhatsapp(this.platformID);
  }

  downloadApp() {
    // downloadAppLinks(this.platformID);
  };
};
