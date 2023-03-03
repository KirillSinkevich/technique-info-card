import {NgModule} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@NgModule({})
export class IconModule {
  private path: string = "assets/icons";

  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ) {
    this._matIconRegistry
      .addSvgIcon("arrow-down", this.setPath(`${this.path}/arrow-down.svg`))
      .addSvgIcon("info", this.setPath(`${this.path}/info.svg`))
      .addSvgIcon("car", this.setPath(`${this.path}/tech-1.svg`))
      .addSvgIcon("truck", this.setPath(`${this.path}/tech-6.svg`))
      .addSvgIcon("transmission", this.setPath(`${this.path}/unit-3.svg`))
      .addSvgIcon("engine", this.setPath(`${this.path}/unit-4.svg`))
      .addSvgIcon("differential", this.setPath(`${this.path}/unit-2.svg`))
      .addSvgIcon("reducer", this.setPath(`${this.path}/unit-5.svg`))
      .addSvgIcon("hydraulics", this.setPath(`${this.path}/unit-1.svg`))
      .addSvgIcon("sampleNew", this.setPath(`${this.path}/sample-1.svg`))
      .addSvgIcon("sampleOld", this.setPath(`${this.path}/sample-1.svg`))
      .addSvgIcon("sample", this.setPath(`${this.path}/sample-4.svg`))
      .addSvgIcon("calendar", this.setPath(`${this.path}/calendar.svg`))
      .addSvgIcon("add-oil", this.setPath(`${this.path}/add-oil.svg`))
      .addSvgIcon("file", this.setPath(`${this.path}/file.svg`))
      .addSvgIcon("download", this.setPath(`${this.path}/download.svg`))
      .addSvgIcon("pdf", this.setPath(`${this.path}/pdf.svg`))
      .addSvgIcon("xls", this.setPath(`${this.path}/xls.svg`))
      .addSvgIcon("edit", this.setPath(`${this.path}/edit.svg`))
      .addSvgIcon("link", this.setPath(`${this.path}/link.svg`))
  }

  private setPath(url: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
