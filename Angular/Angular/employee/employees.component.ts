import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPLOYEES } from '../employee-mock';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
    //Dependency Injection inside the Constructor
    constructor(private employeeService: EmployeeService, private router: Router){}
    ngOnInit(): void{
         this.employeeService.getAllEmployees().subscribe(data =>{
             this.employees = data;
         })
    }
    //employee = {name: 'Bharath', age: 21, address: 'Chennai'}
    employees: Employee[];

    updateEmployees(employee: Employee): void {
        localStorage.removeItem('id');
        localStorage.setItem('id', employee.id.toString());
        this.router.navigate(['update-employees']);

    }

    deleteEmployees(employee: Employee): void {
        this.employeeService.deleteEmployee(employee.id).subscribe();
        this.employees = this.employees.filter(e => e !== employee);
    }
        
}