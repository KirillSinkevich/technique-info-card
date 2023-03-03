import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITransport} from "../../../interfaces/transport.interface";
import {ISparePart} from "../../../interfaces/spare-part.interface";
import {IOil} from "../../../interfaces/oil.interface";

@Injectable()

export class TechniqueService {
  constructor(
    private _http: HttpClient
  ) {}

  getTransport(): Observable<Array<ITransport>> {
    return this._http.get<Array<ITransport>>('assets/data/transport.json');
  }

  getSpareParts(): Observable<Array<ISparePart>> {
    return this._http.get<Array<ISparePart>>('assets/data/spare-parts.json');
  }

  getOil(): Observable<Array<IOil>> {
    return this._http.get<Array<IOil>>('assets/data/oil.json');
  }
}
