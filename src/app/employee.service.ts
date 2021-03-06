import { Injectable } from '@angular/core';
import {Employee} from './employee';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employee: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any>{
    console.log("test call");
    return this.httpClient.get<any[]>('http://localhost:8080/employee/all');
  }
  public createEmployee(employee) {
  console.log("create  call");
  return this.httpClient.post<Employee>("http://localhost:8080/employee/", employee);
  }
  getEmployeeById(){
    
  }

}
