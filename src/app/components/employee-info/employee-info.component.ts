import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee:Employee;
  constructor(private router: Router, private route:ActivatedRoute, private employeeService:EmployeeService) {
    this.route.params.subscribe((params:Params)=>{
      
      this.employeeService.getEmployees().subscribe(data=>{
        data.forEach(e => {
          if(e.$key == params.id){
            this.employee = e;
          }
        });
      });
    });
  }
  ngOnInit() {
  }

}
