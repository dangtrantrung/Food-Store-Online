import { Component, NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { HeaderComponent } from './components/partials/header/header.component'
const routes: Routes = [{ path: '', component: HeaderComponent }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
