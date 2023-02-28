import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-technology',
  templateUrl: './our-technology.component.html',
  styleUrls: ['./our-technology.component.css']
})
export class OurTechnologyComponent {
  @Input() image : string = '';
  @Input() text : string = '';
}
