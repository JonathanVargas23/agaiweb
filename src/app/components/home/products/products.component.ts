import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() name: string = 'name';
  @Input() price: string = 'price';
  @Input() forecast: string = 'forecast';
  @Input() location: string = 'location';
  @Input() weather: string = 'weather';
  @Input() bgColor: string = '#ffffff';

}
