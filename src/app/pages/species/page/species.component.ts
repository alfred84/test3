import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesComponent {

}
