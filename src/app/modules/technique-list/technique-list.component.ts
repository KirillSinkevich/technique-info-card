import { Component } from '@angular/core';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss']
})
export class TechniqueListComponent {
  cards: any[] = [1, 2, 3, 4, 5];
}
