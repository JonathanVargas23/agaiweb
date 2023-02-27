import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-events',
  templateUrl: './new-events.component.html',
  styleUrls: ['./new-events.component.css']
})
export class NewEventsComponent {
  @Input() bgColor : string = 'red';
  @Input() number : string = '1/10';
  @Input() eventTitle : string = 'Titulo del evento';
  @Input()  location: string = 'Ubicacion';
}
