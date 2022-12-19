import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrialComponent } from './trial/trial.component';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    StockItemComponent,
    PracticeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
