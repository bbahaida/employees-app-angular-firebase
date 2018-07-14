import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Employee } from '../Models/Employee';
import { forEach } from '@angular/router/src/utils/collection';
@Injectable()
export class EmployeeService {

 
  employee:Employee=null;
  employees:FirebaseListObservable<any[]>
  Employee:FirebaseObjectObservable<any>
  constructor(private firebase:AngularFireDatabase) {
    this.employees = this.firebase.list('/db_bb0304aTfrbs/employees') as FirebaseListObservable<Employee[]>;
   }

   getEmployees(){
     return this.employees;
   }
   

}
