import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  greeting='Welcome to my angular App';
  introduction='This is my first angular application';
  text= ''; 
  list = ['one', 'two', 'three', 'four', 'five'];
  ngOnInit() {
  }

}
