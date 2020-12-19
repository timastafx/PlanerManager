import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CalendarCell} from '../../models/caldendar.model';

@Component({
  selector: 'cl-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  @Input() cellData: CalendarCell;
}
