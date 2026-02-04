import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,                         // ✅ required for standalone
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',                // ✅ make sure file exists
  styleUrls: ['./app.scss']                 // ✅ plural + array
})
export class App {
  protected readonly title = signal('moviebook');
}
