import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';
import { FloorListComponent } from './components/floor-list/floor-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    PropertyOverviewComponent,
    FloorListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}