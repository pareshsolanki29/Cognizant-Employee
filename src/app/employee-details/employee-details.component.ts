import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup
  user: Employee =  new Employee();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['' , Validators.required],
     address  : ['', Validators.required],
     state: ['', Validators.required],
     zip: ['', Validators.required],
     city:['', Validators.required],
     phone: ['', Validators.required],
     jobTitle: ['', Validators.required],
     dateHired:['', ]
    });



    }
    createEmployee():void{
      this.employeeService.createEmployee(this.user).subscribe(data =>{
       alert("yo");
      })
    }

    onSubmit(){
      console.log(this.employeeForm.value)
      this.createEmployee();
    }

  }


