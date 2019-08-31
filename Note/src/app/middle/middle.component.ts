/*
*Modifcation Details:
* 1. This component used to show the data for Middle panel 
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../model/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  // router: any;
  
  public details: object = [];
  selectedRow : String;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee();
  }

  createEmployee(currentEmployee: Employee) {
    if (currentEmployee.id === null) {
      console.log('Create');
      this.employeeService.createEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        });
    }

    else {
      console.log('Update');
      this.employeeService.updateEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        });
    }

  }

  updateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe(
      (data) => {
        this.employeeService.currentEmployee = Object.assign({}, employee);
      });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployee();
      });
  }
  showDetails() {
    this.router.navigate(['link'], { relativeTo: this.route });
    // let obj = this.employeeService.allEmployee.filter(m => m.title == title);
    // this.details = obj;
    // console.log(obj);
  }
  show(title: string) {
    let obj = this.employeeService.allEmployee.filter(m => m.title == title);
    this.details = obj;
    this.selectedRow = title;
  }
}
