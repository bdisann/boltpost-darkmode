import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SidebarItemComponent } from './views/sidebar-item/sidebar-item.component';
import { ToggleModeComponent } from './views/toggle-mode/toggle-mode.component';
import { TableDataComponent } from './views/table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarItemComponent,
    ToggleModeComponent,
    TableDataComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
