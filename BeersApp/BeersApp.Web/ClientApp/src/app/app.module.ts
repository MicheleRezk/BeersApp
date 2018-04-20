import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { Config } from './services/config.service';
import { BeerService } from './services/beers.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    Config,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
