import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  console.log(2);
	  
  }

  onSubmit(f: NgForm) {
	console.log(f.value);  // { first: '', last: '' }
	console.log(f.valid);  // false
 }
 

}
