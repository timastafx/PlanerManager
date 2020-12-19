import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarCell } from '../../models/caldendar.model';

@Component({
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {
  rawData: CalendarCell[];

  ngOnInit(): void {
    this.rawData = this.getCalendarGrid();
  }

  getCalendarGrid(): CalendarCell[] {
    const result = [];
    for (let i = 0; i < 24; i++) {
      result.push({
        id: i + 'h',
        label: `${i < 10 ? '0' + i : i}:00`
      });

      result.push({
        id: i + 'h' + '30m',
        label: `${i < 10 ? '0' + i : i}:30`
      });
    }

    return result;
  }

  trackById(_: number, { id }: CalendarCell): CalendarCell['id'] {
    return id;
  }
}
