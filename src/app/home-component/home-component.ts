import { Component } from '@angular/core';

@Component({
  standalone: true,                       // ✅ required for standalone routing
  selector: 'app-home-component',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],   // ✅ plural + array
})
export class HomeComponent {}
