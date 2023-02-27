import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isActive: boolean = false;

  onClick(): void {
    this.isActive = !this.isActive;
  }

  onClickOutside(): void {
    this.isActive = false;
  }
}
