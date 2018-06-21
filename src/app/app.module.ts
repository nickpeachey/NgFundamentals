import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { AppRouting } from './app.routing';

import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent],
  exports: [RouterModule]
})
export class AppModule { }
