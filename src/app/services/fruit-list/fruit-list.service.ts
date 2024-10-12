import { Injectable } from '@angular/core';
import FruitList from '../../data/fruit-list';
@Injectable({
  providedIn: 'root'
})
export class FruitListService {
private fuit: FruitList[]=[];

addFruit(name: string, quantity: number, price: number):void
{this.fuit.push({
  name:name,
  quantity:quantity,
  price:price
});
}
  getFruit():FruitList[]{
    return this.fuit;
  }
  constructor() { }
}