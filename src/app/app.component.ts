import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageScrollerComponent } from './components/page-scroller/page-scroller.component';
import { PageIndexComponent } from './components/page-index/page-index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageScrollerComponent, PageIndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lukas Bornscheuer';
}
