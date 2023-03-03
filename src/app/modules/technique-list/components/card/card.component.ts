import {Component, Input} from '@angular/core';
import {cardTypeUnion} from "../../../../type/card-type.type";
import {ITransport} from "../../../../interfaces/transport.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: cardTypeUnion = {} as cardTypeUnion;
  @Input() cardType: number = 3;
  isActive: boolean = false;

  onClick(): void {
    this.isActive = !this.isActive;
  }

  onClickOutside(): void {
    this.isActive = false;
  }

  onMoreClick(event: Event): void {
    event.stopPropagation();
  }

  getSampleOrUnitCount(): number {
    let {sample, unit} = this.data as ITransport;

    return sample + unit;
  }

  getSampleCount(): number {
    return (this.data as ITransport).sample;
  }

  getUnitCount(): number {
    return (this.data as ITransport).unit;
  }
}
