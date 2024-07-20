import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [FoodService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
