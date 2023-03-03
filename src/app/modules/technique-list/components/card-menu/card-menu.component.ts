import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent {
  @Input() cardType: number = 0;

  onClickBox(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
