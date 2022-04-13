import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/list';

@Component({
	selector: 'app-product-alerts',
	templateUrl: './product-alerts.component.html',
	styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
	render: boolean = false
	products = PRODUCTS
	selected: any

	constructor() { }

	ngOnInit(): void {
		// Render 1 lần khi được móc
	}
	onRender(): void {
		this.render = !this.render
	}
	onSelected(event: any): void {
		this.selected = event

	}

}
