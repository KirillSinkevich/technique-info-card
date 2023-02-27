import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {IconService} from "../../../../services/icon-service.service";

@Component({
  selector: 'app-hidden-info',
  templateUrl: './hidden-info.component.html',
  styleUrls: ['./hidden-info.component.scss']
})
export class HiddenInfoComponent {
  isHidden: boolean = false;

  constructor(
    iconService: IconService
    // private _matIconRegistry: MatIconRegistry,
    // private _domSanitizer: DomSanitizer
  ) {
    // this._matIconRegistry.addSvgIconLiteral(
    //   "arrow",
    //   this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/arrow-down.svg")
    // );
  }

  onClsOpnClick(event: Event): void {
    event.stopPropagation();
    this.isHidden = !this.isHidden;
  }
}
