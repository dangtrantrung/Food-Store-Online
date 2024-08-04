import { Component, OnInit } from '@angular/core'
import { CartService } from 'app/services/cart.service'
import { UserService } from 'app/services/user.service'
import { User } from 'app/shared/models/User'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0
  user!: User

  constructor(cartService: CartService, private userService: UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount
    })
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser
    })
  }

  ngOnInit() {}
  logout() {
    this.userService.logout()
  }
  get isAuth() {
    return this.user.token
  }
}
