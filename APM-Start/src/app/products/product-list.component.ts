import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list-component.css'],
  // providers:[ProductService] - inject only for this component and childs
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ` + message;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.productName
        .toLocaleLowerCase()
        .includes(filterBy.toLocaleLowerCase())
    );
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}
