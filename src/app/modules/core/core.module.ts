import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSelectorComponent } from './components/card-selector/card-selector.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardSelectorComponent, SidebarComponent],
  exports: [CardSelectorComponent, SidebarComponent]
})
export class CoreModule {}
