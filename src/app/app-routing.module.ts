import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';

const routes: Routes = [
	{
		path: '',
		component:  HomeComponent
	},
	{
		path: 'products',
		component:  ProductAlertsComponent
	},
	{
		path: 'form',
		component: FormComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
