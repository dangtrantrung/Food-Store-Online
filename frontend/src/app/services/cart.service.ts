import { Injectable } from '@angular/core'
import { Cart } from 'app/shared/models/Cart'
import { CartItem } from 'app/shared/models/CartItem'
import { Food } from 'app/shared/models/Food'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class CartService {
  private cart: Cart = new Cart()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  constructor() {}
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id)
    if (cartItem) return
    this.cart.items.push(new CartItem(food))
  }
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId)
  }
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId)
    if (!cartItem) return

    cartItem.quantity = quantity
    cartItem.price = quantity * cartItem.food.price
  }
  clearCart() {
    this.cart = new Cart()
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable()
  }
}
