import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrioritiesComponent } from './Components/priorities/priorities.component';
import { PrioritiesListComponent } from './Components/priorities-list/priorities-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrioritiesDiolougeComponent } from './Components/priorities-diolouge/priorities-diolouge.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    PrioritiesComponent,
    PrioritiesListComponent,
    PrioritiesDiolougeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
