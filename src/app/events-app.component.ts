import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `        
    <nav-bar></nav-bar><events-list></events-list>`
})
export class EventsAppComponent {
  title = 'app';
}
