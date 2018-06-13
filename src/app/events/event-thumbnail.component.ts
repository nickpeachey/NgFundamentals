import {Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date | date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: {{event.price}}</div>
  <div>
    <span>Location: {{event.location.address}}</span>
    <span class='pad-left'>Location: {{event.location.city}},
      {{event.location.country}}
    </span>
  </div>
</div>
<div *ngFor="let event of events">
  new event
  {{event.name}}
  {{event.date | date}}
  <button [ngStyle]="{'color': 'black'}" (click)="btnClicked()">Click!</button>
</div>`,
styles: [`
          .pad-left {margin-left: 10px; }
          .well div {color: #bbb;}`
        ]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Input() events: any;

  btnClicked() {
    window.alert('alert shown');
  }
}
