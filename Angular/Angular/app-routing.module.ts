import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/employees.component';
import { AddEmployeesComponent } from './employee/add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './employee/update-employees/update-employees.component';


const routes: Routes =[
  { path: '', component: EmployeesComponent},
  { path: 'add-employee', component: AddEmployeesComponent },
  { path: 'employee/:id', component: EmployeesComponent },
  { path: 'update-employees', component: UpdateEmployeesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
