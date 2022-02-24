import { Injectable } from '@angular/core';
import { EmployeeClass } from '../models/employee-class';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  showAlert(title:string, content:string ){
    alert(`${title}\n${content}`)
  }
}
