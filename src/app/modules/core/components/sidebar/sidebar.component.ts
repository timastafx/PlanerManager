import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * @Component Компонент для боковой панели с возможностью сворачивания
 * @Author Andrey Shepel
 */
@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  /**
   * Нужна ли кнопка для закрытия боковой панели
   */
  @Input() isHideButtonVisible: boolean;

  isSidebarOpen = true;

  /**
   * Открытие / зыкрытие боковой панели
   */
  sidebarToggle(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
