import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { AppRouting } from './app.routing';

import {EventService} from './events/shared/event.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent],
  exports: [RouterModule]
})
export class AppModule { }
