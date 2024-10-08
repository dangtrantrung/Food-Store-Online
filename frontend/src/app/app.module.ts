import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/partials/header/header.component'
import { AppRoutingModule } from './app-routing.module'
import { FoodService } from './services/food.service'
import { HomeComponent } from './components/pages/home/home.component'
import { SearchComponent } from './components/partials/search/search.component'
import { FoodPageComponent } from './components/pages/food-page/food-page.component'
import { TagsComponent } from './components/partials/tags/tags.component'
import { CartService } from './services/cart.service'
import { CartPageComponent } from './components/pages/cart-page/cart-page.component'
import { TitleComponent } from './components/partials/title/title.component'
import { NotFoundComponent } from './components/partials/not-found/not-found.component'
import { LoginPageComponent } from './components/pages/login-page/login-page.component'
import { ToastrModule } from 'ngx-toastr'
import { UserService } from './services/user.service'
import { InputContainerComponent } from './components/partials/input-container/input-container.component'
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component'
import { TextInputComponent } from './components/partials/text-input/text-input.component'
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component'
// import{Browseranimationmodule} from '@angular/platform-browser/a'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [FoodService, CartService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
