import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})

export class IconService {
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    console.log('text')
    this._matIconRegistry.addSvgIcon(
      "arrow-down",
      this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/arrow-down.svg")
    );
  }
}
