import { Employee } from './../../Models/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee:Employee;
  e:Employee;
  key?:string;
  constructor(private router: Router, private route:ActivatedRoute, private employeeService:EmployeeService) {
    this.route.params.subscribe((params:Params)=>{
      
      this.employeeService.getEmployees().subscribe(data=>{
        data.forEach(e => {
          if(e.$key == params.id){
            this.key = e.$key;
            this.employee = e;
          }
        });
      });
    });
  }
  ngOnInit() {
  }
  onSubmit({value,valid}){
    if(valid){
      this.e.firstName = value.fname;
      this.e.lastName = value.fname;
      this.e.email = value.fname;
      this.e.phone = value.fname;
      this.e.salary = value.fname;
      this.e.country = value.fname;
      this.e.city = value.fname;
      this.e.$key = this.key;
    }
  }

}
