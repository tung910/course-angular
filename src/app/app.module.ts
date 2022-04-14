import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { FormAddComponent } from './components/form-add/form-add.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductAlertsComponent,
		HomeComponent,
		FormComponent,
		HomeLayoutComponent,
  AdminLayoutComponent,
  FormAddComponent,
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
