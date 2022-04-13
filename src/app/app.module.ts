import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    HomeComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
