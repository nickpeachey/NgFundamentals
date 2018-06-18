import {Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date | date}}</div>
  <div>Time: {{event?.time}}</div>
  <div [ngSwitch]="event?.time">
    <span *ngSwitchCase="'8:00 am'">Early Start</span>
    <span *ngSwitchCase="'10:00 am'">Late Start</span>
    <span *ngSwitchDefault>Normal Start</span>
  </div>
  <div>Price: {{event?.price}}</div>
  <div [hidden]="!event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span class='pad-left'>Location: {{event?.location?.city}},
      {{event?.location?.country}}
    </span>
  </div>
  <div [hidden]="!event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>
</div>`,
styles: [`
          .thumbnail { min-height:210px;}
          .pad-left {margin-left: 10px; }
          .well div {color: #bbb;}`
        ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  btnClicked() {
    window.alert('alert shown');
  }
}
