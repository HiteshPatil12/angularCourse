import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
  name = "";
  code = "";
  price = 0;
  previousPrice = 0;
  positiveChange = true;
  Favourite = true;

  constructor(){
    this.name = 'Tata Consultancy Services';
    this.code = 'TCS';
    this.price = 3500;
    this.previousPrice = 3400;
    this.positiveChange = this.price >= this.previousPrice;
    this.Favourite = false;
  }
  toggleFavourite(){
    this.Favourite = !this.Favourite;
  }
}
