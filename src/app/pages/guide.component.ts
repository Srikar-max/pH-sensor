import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Crop Guide</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Acidic Soil Crops (pH 5.0-6.5)</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Potatoes</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Tomatoes</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Neutral Soil Crops (pH 6.5-7.5)</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Corn</li>
            <li>Wheat</li>
            <li>Soybeans</li>
            <li>Lettuce</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class GuideComponent {}