import { NgModule } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@NgModule({})
export class IconModule {
  private path: string = "assets/icons";
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ) {
    console.log('text module');
    this._matIconRegistry
    .addSvgIcon("arrow-down", this.setPath(`${this.path}/arrow-down.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
