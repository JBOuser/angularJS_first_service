import { Injectable } from '@angular/core';
import { EmployeeClass } from 'src/app/models/employee-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataServiceService {

  private employees:EmployeeClass[]=[];
  constructor() {
    this.employees = [
      new EmployeeClass("1","Kasumi","","Warrior",2700.0),
      new EmployeeClass("2","Ryu","Hayabusa","Leader",3000.0),
      new EmployeeClass("3","Hayate","","Leader",2700.0),
      new EmployeeClass("4","Ayane","","Warrior",2400.0)
    ]
  }

  getAllEmployess(){
    return this.employees;
  }
}
