import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardSelector } from '../../models/cardSelector';
import { Product } from '../../../main-page/models/product';

@Component({
  selector: 'core-card-selector',
  templateUrl: 'card-selector.component.html',
  styleUrls: ['card-selector.component.scss']
})
export class CardSelectorComponent {
  @Input() cardData: CardSelector;
  @Output() private cardSelection = new EventEmitter<Product>();

  onCardClick(): void {
    this.cardSelection.emit(this.cardData);
  }
}
