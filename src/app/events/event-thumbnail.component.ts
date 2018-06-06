import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: {{event.price}}</div>
</div>`
})
export class EventThumbnailComponent {
  @Input() event: any;

  handleClick() {
    alert('foo');
    if (window.confirm("Are you sure?")) {
      alert('yes chosen');
    } else {
      alert('no chosen');
    }
  }
}
