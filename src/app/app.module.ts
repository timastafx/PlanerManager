import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [MainMenuComponent]
})
export class AppModule {}
