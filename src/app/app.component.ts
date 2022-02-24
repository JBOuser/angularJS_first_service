import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeClass } from './models/employee-class';
import { ModalServiceService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-one-app';
  subTitleOne = 'Add an Employees';
  subTitleTwo = 'Employees List';
  
  private availableUsers = ['admin'];
  public tmpId:string="";
  public tmpName:string="";
  public tmpSurname:string="";
  public tmpPosition:string="";
  public tmpSalary:number=0;

  //update employees list
  @Input() employees:EmployeeClass[]=[];
  @Output() employeesChange = new EventEmitter<EmployeeClass>();
  
  //ModalServiceService is injected
  constructor(private modalService:ModalServiceService){

  }

  ngOnInit(): void {
    this.employees = [
      new EmployeeClass("1","Kasumi","","Warrior",2700.0),
      new EmployeeClass("2","Ryu","Hayabusa","Leader",3000.0),
      new EmployeeClass("3","Hayate","","Leader",2700.0),
      new EmployeeClass("4","Ayane","","Warrior",2400.0)
    ];
  }

  //Add an Employee
  onSubmit(data:any){

    let newEmployee = new EmployeeClass(
      `${this.employees.length}`,
      data.name,
      data.surname,
      data.position,
      data.salary
    )

      //use the injected service. return true or false
    if(this.modalService.showConfirmation(
      `New Addition`,
      `Employee "${newEmployee.getName()}" is added`
    ) === true){
      this.employees.push(newEmployee);
    }
  }

  //Clean inputs data
  cleanAllInputs(){    
    this.tmpId="";
    this.tmpName="";
    this.tmpSurname="";
    this.tmpPosition="";
    this.tmpSalary=0;
  }

  //Delete an Employee
  onDelete(employeeObject:EmployeeClass){

      //use the injected service. return true or false
      if(this.modalService.showConfirmation(
        `Delete Action`,
        `Employee "${employeeObject.getName()}" will be deleted`
      ) === true){
        var indexObject = this.employees.indexOf(employeeObject);
        var deletedEmployee = this.employees.splice(indexObject,1);    
      }
  }
}
