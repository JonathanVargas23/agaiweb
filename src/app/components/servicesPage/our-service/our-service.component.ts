import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent {
  @Input() icon : string = '';
  @Input() title : string = '';
  @Input() content : string = '';
}
