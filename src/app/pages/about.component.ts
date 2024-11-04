import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">About pH</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">Understanding pH Levels</h2>
        <p class="mb-4">
          pH is a measure of how acidic or basic a substance is. The pH scale ranges from 0 to 14:
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Below 7: Acidic</li>
          <li>7: Neutral</li>
          <li>Above 7: Basic (Alkaline)</li>
        </ul>
        <p class="mb-4">
          Soil pH is crucial for plant growth as it affects nutrient availability and microbial activity.
        </p>
      </div>
    </div>
  `
})
export class AboutComponent {}