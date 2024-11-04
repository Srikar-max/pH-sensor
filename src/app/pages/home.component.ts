import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">Welcome to pH Monitoring System</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <p class="text-lg mb-4">
          Monitor your soil pH levels in real-time and get expert recommendations for your crops.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold mb-3">Real-time Monitoring</h2>
            <p>Get instant pH readings from your sensors</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold mb-3">Crop Recommendations</h2>
            <p>Optimize your crop selection based on pH levels</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}