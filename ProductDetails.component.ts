import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h3 class="product">Details for product:  id ={{productID}} , product name= {{productName}}</h3>`,
  styles: ['.product {background: cyan; width: 260px;} ']
})
export class ProductDetailComponent {
  productID: string;
  productName: string
  constructor(private route: ActivatedRoute) {
    this.productID = this.route.snapshot.params['id'];
    this.productName= route.snapshot.params['name'];
 console.log("product id", this.productID)
 console.log("product name", this.productName)


  }
}