import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  @ViewChild('f') submittedForm: NgForm;
  constructor() { }
  ngOnInit(): void {
  }

 onSubmit(): void{
 
    console.log(this.submittedForm.value);
 }


}
