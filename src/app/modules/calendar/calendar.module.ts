import { NgModule } from '@angular/core';
import { GeneralComponent } from './components/general/general.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';

@NgModule({
  imports: [CalendarRoutingModule, CommonModule],
  declarations: [GeneralComponent, CellComponent],
  providers: []
})
export class CalendarModule {}
