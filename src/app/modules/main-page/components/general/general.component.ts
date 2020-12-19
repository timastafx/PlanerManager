import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { productsFixture } from '../../fixture/products';

@Component({
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent {
  readonly products: Product[] = productsFixture;

  trackById(_: number, { id }: Product): Product['id'] {
    return id;
  }
}
