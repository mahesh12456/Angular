import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  @Input() countfromParent: number;
  employee: Employee;

  @Output() countfromChild = new EventEmitter<number>();
  signupForm: FormGroup;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id: new FormControl(this.countfromParent, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });
  }
  // addEmployee(): void{

  // }
  onSubmit(): void {
    //this.countfromChild.emit(this.countfromParent + 5);
    this.employeeService.createEmployee(this.signupForm.value).subscribe(data => {
      console.log('Employee added successfully');
      this.router.navigate(['']);
    });
    console.log(this.signupForm);
  }

}
