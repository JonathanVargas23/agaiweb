import { Component } from '@angular/core';
import { SLIDE_OPTIONS } from './about-constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public slideOptions = SLIDE_OPTIONS;
}
