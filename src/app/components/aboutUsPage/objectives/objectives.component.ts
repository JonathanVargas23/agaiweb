import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {
  @Input() imageUrl: string = '';
  @Input() textTitle: string = '';
  @Input() textContent: string = '';
}
