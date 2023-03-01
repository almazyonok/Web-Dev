import { Component } from '@angular/core';
import {categories, Category} from "../categories";
import {Product, products} from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  allProducts = products;
  products = products;
  categories = categories
  ngOnInit(){

  }
  update(category:Category){
    let index = this.categories.indexOf(category)
    if (index !== -1) {
      this.categories[index] = {type: category.type, selected: !category.selected};
    }
    this.products = this.allProducts.filter((p) => {
      let include: boolean = false;
      this.categories.forEach((c) => {
        if (c.type == p.categoryType && c.selected) {
          include = true;
        }
      });
      return include;
    });
  }

  like(product: Product) {
    let index = this.products.indexOf(product)
    if (index !== -1) {
      this.products[index] = {
        likes: product.likes + 1,
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        categoryType: product.categoryType,
        href: product.href,
        image: product.image,
        description: product.description
      };
    }
  }

  share(product: Product) {
    window.open(`https://t.me/share/url?url=${product.href}&text=${product.name}`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}