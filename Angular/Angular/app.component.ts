import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee-Management';
  count = 10;
  //employee = {name: 'Rahul', salary: 52000, address: 'chennai'};
  getCount(counter: number): void {
    this.count = counter;
  }
  ngOnInit(): void {
    this.getfromChild(this.count);
    }
  getfromChild(event: number): void{
    this.count = event;
  }
}
