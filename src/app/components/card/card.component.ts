import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../interfaces/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() news: News[] = [];

  ngOnInit(): void {
    // console.log('succesfully');
  };
}
