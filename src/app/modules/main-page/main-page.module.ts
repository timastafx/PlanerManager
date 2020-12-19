import { NgModule } from '@angular/core';
import { GeneralComponent } from './components/general/general.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [MainPageRoutingModule, CommonModule, CoreModule],
  declarations: [GeneralComponent]
})
export class MainPageModule {}
