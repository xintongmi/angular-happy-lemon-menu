import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkOrderComponent } from './drink-order/drink-order.component';
import { MenuComponent } from './menu/menu.component';
import { reviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'reviews', component: reviewsComponent },
  { path: 'order/:id', component: DrinkOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
