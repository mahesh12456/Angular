import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employee/employees.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { RedDirective } from './red.directive';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeesComponent } from './employee/add-employees/add-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeesComponent } from './employee/update-employees/update-employees.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NgstyleComponent,
    NgclassComponent,
    NgswitchComponent,
    RedDirective,
    AngularFormComponent,
    AddEmployeesComponent,
    UpdateEmployeesComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
