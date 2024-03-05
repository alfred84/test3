import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesComponent {

}
