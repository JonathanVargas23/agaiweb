import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { SLIDE_OPTIONS } from './blog-constants';
import { DATA_BLOG, DATA_BLOG_SELECTED } from '../../dataBlogs';
import { isPlatformBrowser } from '@angular/common';
import { debounceTime } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public slideOptions = SLIDE_OPTIONS;
  public dataShow = DATA_BLOG;
  public dataDefault = DATA_BLOG;
  public dataBlogSelected = DATA_BLOG_SELECTED;
  public pages: number = 1;
  public mySearch = new FormControl('');
  public disabledButton: boolean = false;
  public loading: boolean = false;
  public textButton: string = 'blog.seccions.three.textTwo';
  public message: string = '';
  public showMessage: boolean = false;
  public check: boolean = false;
  public mySearchValue = false;
  subscribeForm = this.fb.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
    ])],
  });
  constructor(
    @Inject(PLATFORM_ID) private platformID: any,
    private fb: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.dataShow.map(item =>
      item.map(subItem => {
        if (subItem.type === 'smallText') {
          subItem.content = subItem.content.substr(0, 210) + "..."
        };
      }
      )
    );
    this.mySearch.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => this.handleSearch(value))
  }

  handleSearch(search: string) {
    const arrayFiler = [];
    let arrayData = Array.from(this.dataDefault);
    if (search.length > 0) {
      this.mySearchValue = true;
      arrayData.filter(item => {
        const textToCompare = item.map((subItem: any) => {
          if (subItem.type === 'title' && subItem.content.toLowerCase().includes(search.toLowerCase())) {
            arrayFiler.push(item)
          }
        });
        this.dataShow = arrayFiler
      })
    } else {
      this.dataShow = this.dataDefault;
      this.mySearchValue = false;
    };
  };

  scrollToTop() {
    if (isPlatformBrowser(this.platformID)) {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  downloadApp() {
    // downloadAppLinks(this.platformID);
  };

  goTo(id: number) {
    // console.log("ID URL", id);
    this._router.navigate(['viewBlog/', id]);
  };

  goToContact() {
    this._router.navigateByUrl('home?contact=true');
  }


  showConfirm() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
      this.check = false;
    }, 10000);
  };
};
