import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { MessageComponent } from './message/message.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, DrinkDetailComponent, MessageComponent, HomepageComponent, RecommendationComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
