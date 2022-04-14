import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './components/form-add/form-add.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';

const routes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		children: [
			{
				path: '',
				component: HomeComponent,

			},
			{
				path: 'products',
				component: ProductAlertsComponent
			},
			{
				path: 'form',
				component: FormComponent
			}
		]
	},
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
			{
				path: 'add',
				component: FormAddComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
