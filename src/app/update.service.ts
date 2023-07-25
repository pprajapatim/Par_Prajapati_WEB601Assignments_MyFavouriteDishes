import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const dish = document.createElement('div');
        dish.innerHTML =
          'New version available. Click to update!';
        dish.style.cssText = `
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 12px;
          background-color: #333;
          color: #fff;
          text-align: center;
          cursor: pointer;
        `;

        dish.addEventListener('click', () => {
          window.location.reload();
        });

        document.body.appendChild(dish);
      });
    }
  }
}
