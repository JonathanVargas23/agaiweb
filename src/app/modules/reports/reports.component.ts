import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { News, ResponseNews } from '../../interfaces/interfaces';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public news: News[] = [];
  currentLimit = 5;
  offset = 0;
  previousPage: string;
  nextPage: string = `https://dev-services-agrodat-dot-agrodata-ai-dev.ue.r.appspot.com/agronews/?limit=${this.currentLimit}&offset=${this.offset}`;
  isLoad: boolean = false; 
  noData: boolean = false;
  showLoading: boolean = true;
  private subs: Subscription;

  public sectionHeader = {
    title: 'Noticias del agro',
    description: 'Mantente al tano de todo lo que ocurre en el sector agropecuario.'
  };
  public buttonContent = 'Cargar más';
  public buttonLoading = 'Cargando...';

  constructor (
    private _router: Router,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getNews();
  };

  getNews() {
    this.isLoad = !this.isLoad;
    this._http.post(this.nextPage, {}).subscribe({
      next: (res: ResponseNews) => {
        this.news.push(...res.rows);
        this.nextPage = res.next_page;
        this.previousPage = res.previous_page;
        this.isLoad = !this.isLoad;
        this.showLoading = false;
        if ( res.rows.length === 0 ) {
          this.noData = true;
        }
      },
      error: err => {
        if ( this.news.length === 0 ) this.noData = true;
        this.showLoading = false;
      }
    });
  };
}
