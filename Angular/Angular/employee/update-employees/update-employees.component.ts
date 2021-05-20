import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  updateForm: FormGroup;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });

    const id = localStorage.getItem('id');
    if(+id > 0){
      this.employeeService.getEmployeeById(+id).subscribe(data => {
        this.updateForm.patchValue(data);
      });
    }
  }
  onSubmit(): void {
    this.employeeService.updateEmployee(this.updateForm.value).subscribe
    (data => {
      this.router.navigate(['']);
    },
    error => {
      alert(error);
    });
  }

}
