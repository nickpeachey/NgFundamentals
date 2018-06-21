import { RouterModule, Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { ModuleWithProviders } from '@angular/core';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent},
  { path: '', redirectTo:'/events', pathMatch:'full'}
];

export const AppRoutingProviders: any[] = [];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
