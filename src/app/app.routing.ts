import { RouterModule, Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { ModuleWithProviders } from '@angular/core';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

export const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/create', component: CreateEventComponent},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo:'/events', pathMatch:'full'}
];

export const AppRoutingProviders: any[] = [];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
