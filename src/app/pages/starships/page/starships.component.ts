import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipsComponent {

}
