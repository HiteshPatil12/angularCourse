import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrialComponent } from './trial/trial.component';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    StockItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
