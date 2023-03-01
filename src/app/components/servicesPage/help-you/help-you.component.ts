import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-you',
  templateUrl: './help-you.component.html',
  styleUrls: ['./help-you.component.css']
})
export class HelpYouComponent {
  @Input() image : string = '';
  @Input() text : string = '';
}
