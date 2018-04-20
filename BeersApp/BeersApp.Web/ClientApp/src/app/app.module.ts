import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

//Services
import { Config } from './services/config.service';
import { BeerService } from './services/beers.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BeerListComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent, pathMatch: 'full' },
      { path: 'beers', component: BeerListComponent, pathMatch: 'full' },
      { path: 'beers/:beerId', component: BeerDetailsComponent }
    ])
  ],
  providers: [
    Config,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
