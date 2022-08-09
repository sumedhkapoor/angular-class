import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  user = {
    name: 'Sumedh',
    age: 45,
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA',
      zip: '12345'
  }
}

  color = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
