import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{EmployeeService} from './employee.service';
import { Employee } from './employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emplyee';
  employees: Employee[];
  constructor(public route: ActivatedRoute, private employeeService: EmployeeService){

  }
  getAllEmployees()  {this.employeeService.getEmployees().subscribe(
    response =>{ this.employees = response; console.log(response) ;this.employeeService.employee.next(response)}
   );}

}
