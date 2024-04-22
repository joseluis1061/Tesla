import { Component } from '@angular/core';
import { ModelCar } from 'src/app/models/modelCar.mode';
import { ModelsCar } from 'src/app/shared/constants/models.info';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  modelsCar :ModelCar[] = ModelsCar;

}
