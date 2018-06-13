import {Component} from '@angular/core';
import {Event} from './event';
import {Location} from './location';
import { Local } from 'protractor/built/driverProviders';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
            <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <event-thumbnail [events]="events" [event]="event"></event-thumbnail>
          </div>`
})
export class EventsListComponent {
  event: Event = new Event();
  events: Event[] = new Array<Event>();

  constructor() {
    this.buildEvent();
  }

  buildEvent() {
    this.event.id = 1;
    this.event.date  = new Date('December 17, 1995 03:24:00');
    this.event.name = 'Event model being used';
    this.event.price = 455;
    this.event.time = '12:00';
    const location = new Location();
    location.address = '122 Oxford Road';
    location.city = 'Manchester';
    location.country = 'UK';
    this.event.location = location;
    this.events.push(this.event);
  }
}
