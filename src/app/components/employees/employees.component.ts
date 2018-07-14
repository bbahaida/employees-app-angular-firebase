import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];
  constructor(private employeeService:EmployeeService) {
    
   }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees = data as Employee[];
    }); 
  }

  deleteEmployee(key?:string){
    console.log(key);
  }

}
