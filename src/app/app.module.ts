import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DrinkOrderComponent } from './drink-order/drink-order.component';
import { MessageComponent } from './message/message.component';
import { HomepageComponent } from './homepage/homepage.component';
import { reviewsComponent } from './reviews/reviews.component';
import { ToppingsComponent } from './toppings/toppings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DrinkOrderComponent,
    MessageComponent,
    HomepageComponent,
    reviewsComponent,
    ToppingsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
