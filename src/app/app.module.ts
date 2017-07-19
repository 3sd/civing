import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MainMenuComponent } from './main-menu.component'
import { EntityListComponent } from './entity-list.component'
import { EntityDetailComponent } from './entity-detail.component'

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    EntityDetailComponent,
    EntityListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
