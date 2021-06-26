import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { MenuComponent } from './menu/menu.component';
import { reviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'reviews', component: reviewsComponent },
  { path: 'detail/:id', component: DrinkDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
