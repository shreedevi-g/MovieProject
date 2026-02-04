import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movie-detais',
  // Import RouterModule only if your template uses [routerLink]
  imports: [RouterModule],
  templateUrl: './movie-detais-component.html'
  // styleUrls: ['./movie-detais-component.scss'] // optional if you have it
})
export class MovieDetaisComponent {
  // 👇 Define 'id' so the template can bind to it
  public id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}