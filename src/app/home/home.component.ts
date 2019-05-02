import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted: boolean = false;
  email: string = '';

  points = ['airbnb', 'asana', 'stripe', 'slack', 'Segment'];

  constructor() { }

  ngOnInit() {
  }

  onNewsletterSignup(form: NgForm) {
    this.submitted = true;
    this.email = form.value['email'];
    console.log(form);
  }

  onEditClick(form: NgForm) {
    this.email = '';
    this.submitted = false;
    form.controls.email.reset();
  }

}
