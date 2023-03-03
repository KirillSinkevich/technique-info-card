import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import { TechniqueListRoutingModule } from './technique-list-routing.module';
import { TechniqueListComponent } from './technique-list.component';
import { CardComponent } from './components/card/card.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { HiddenInfoComponent } from './components/hidden-info/hidden-info.component';
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {HttpClient} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {TechniqueService} from "./service/technique-service.service";

@NgModule({
  declarations: [
    TechniqueListComponent,
    CardComponent,
    CardMenuComponent,
    HiddenInfoComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    TechniqueListRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [HttpClient, TechniqueService]
})
export class TechniqueListModule { }
