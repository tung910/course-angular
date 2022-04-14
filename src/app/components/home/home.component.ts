import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@Input("herodata") heroData: any;
	constructor() { }
	time = new Observable<string>((observer: Observer<string>) => {
		setInterval(() => observer.next(new Date().toString()), 1000);
	});

	ngOnInit(): void {
		console.log(this.heroData);


	}

}
