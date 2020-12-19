import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from './modules/calendar/calendar.module';
import { MainPageModule } from './modules/main-page/main-page.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'calendar',
    loadChildren: (): Promise<CalendarModule> =>
      import('./modules/calendar/calendar.module').then(m => m.CalendarModule)
  }
  // {
  //   path: 'tasks',
  //   loadChildren: (): Promise =>
  //     import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
