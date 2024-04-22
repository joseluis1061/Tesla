import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modelcar',
  templateUrl: './modelcar.component.html'
})
export class ModelcarComponent {
  @Input() title:string = '';
  @Input() coverImg:string = '';
  @Input() urlAvailable:string = '';
  @Input() urlTest:string = '';
  @Input() urlCommission:string = '';

}
