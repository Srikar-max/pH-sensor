import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">pH Sensor Readings</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-4">Current pH Level</h2>
          <div class="text-5xl font-bold text-blue-600">7.2</div>
          <p class="text-gray-600 mt-2">Last updated: 2 minutes ago</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold">Daily Average</h3>
            <p class="text-2xl">7.1</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold">Weekly Average</h3>
            <p class="text-2xl">7.3</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold">Monthly Average</h3>
            <p class="text-2xl">7.2</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SensorComponent {}