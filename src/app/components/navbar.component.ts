import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  template: `
    <nav class="bg-blue-600 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between py-4">
          <a routerLink="/" class="text-white font-bold text-xl">pH Monitor</a>
          
          <!-- Mobile menu button -->
          <button 
            (click)="toggleMenu()"
            class="md:hidden text-white hover:text-gray-200 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                [attr.d]="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
              />
            </svg>
          </button>

          <!-- Navigation links -->
          <div 
            [class.hidden]="!isMenuOpen"
            class="w-full md:flex md:w-auto md:items-center">
            <div class="flex flex-col md:flex-row md:ml-auto">
              <a 
                *ngFor="let item of navItems"
                [routerLink]="item.path"
                routerLinkActive="bg-blue-700"
                class="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                (click)="isMenuOpen = false">
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = false;
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/sensor', label: 'pH Sensor' },
    { path: '/guide', label: 'Crop Guide' },
    { path: '/about', label: 'About pH' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}