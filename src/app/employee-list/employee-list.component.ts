import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employeeList: Array<any>;
 field: string='';
   constructor(private employeeService:EmployeeService) {}

   ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeList = data;
    });
   }

}
