import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />
    <main class="container mx-auto px-4 py-8">
      <router-outlet />
    </main>
  `
})
export class App {
  title = 'pH Sensor Monitor';
}