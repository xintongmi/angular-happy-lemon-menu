import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { MenuComponent } from './menu/menu.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'detail/:id', component: DrinkDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
