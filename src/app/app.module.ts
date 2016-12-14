import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { DashListComponent } from './dashboard/dash-list/dash-list.component';
import { DashDetailComponent } from './dashboard/dash-detail/dash-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    HomeComponent,
    DashListComponent,
    DashDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
      MenuService,
      { provide: APP_INITIALIZER, useFactory: (config: MenuService) => () => config.buildMenu(), deps: [MenuService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
