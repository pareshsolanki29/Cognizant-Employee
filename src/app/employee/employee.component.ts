import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService }from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
 this.employeeService.employee.subscribe(res => this.employees = res);
  }


}
