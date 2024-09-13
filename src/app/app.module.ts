import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemManupulationComponent } from './Components/item-manupulation/item-manupulation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from './Objects/item';

@NgModule({
  declarations: [
    AppComponent,
    ItemManupulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [FormsModule, Item],
  bootstrap: [AppComponent]
})
export class AppModule { }
