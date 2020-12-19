import { NgModule } from '@angular/core';
import { GeneralComponent } from './components/general/general.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: GeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
