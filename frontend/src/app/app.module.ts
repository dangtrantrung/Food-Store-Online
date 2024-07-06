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

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [FoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
