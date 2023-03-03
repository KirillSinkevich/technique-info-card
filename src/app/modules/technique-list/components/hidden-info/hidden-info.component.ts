import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden-info',
  templateUrl: './hidden-info.component.html',
  styleUrls: ['./hidden-info.component.scss']
})
export class HiddenInfoComponent {
  isHidden: boolean = true;

  onClsOpnClick(event: Event): void {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  }
}
