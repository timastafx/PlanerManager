import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GeneralComponent } from './components/general/general.component';

const routes: Routes = [{ path: '', component: GeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
