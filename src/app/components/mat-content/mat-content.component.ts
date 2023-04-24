import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-content',
  templateUrl: './mat-content.component.html',
})
export class MatContentComponent {

  @Input() borderBottom = false;
}
