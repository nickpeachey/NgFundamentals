import { RouterModule, Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: EventsListComponent }
];

export const AppRoutingProviders: any[] = [];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
