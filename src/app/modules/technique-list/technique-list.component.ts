import { Component } from '@angular/core';
import {TechniqueService} from "./service/technique-service.service";
import {Observable} from "rxjs";
import {ITransport} from "../../interfaces/transport.interface";
import {ISparePart} from "../../interfaces/spare-part.interface";
import {IOil} from "../../interfaces/oil.interface";
import {CardTypeEnum} from "../../enums/card-type.enum";
import {cardTypeUnion} from "../../type/card-type.type";

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss']
})
export class TechniqueListComponent {
  transports: Observable<Array<ITransport>> = this._techniqueService.getTransport();
  spareParts: Observable<Array<ISparePart>> = this._techniqueService.getSpareParts();
  oils: Observable<Array<IOil>> = this._techniqueService.getOil();

  readonly cardTypeEnum = CardTypeEnum;

  constructor(
    private _techniqueService: TechniqueService,
  ) {}

  isString(data: cardTypeUnion): boolean {
    return typeof data.additionalInfo  === 'string';
  }
}
