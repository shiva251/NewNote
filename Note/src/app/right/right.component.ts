import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../model/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  addNote: FormGroup;
  submitted = false;
  // 
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.addNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  get f() { return this.addNote.controls; }
  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/']);
    // this.employeeService.createEmployee(this.addNote.value)
    //   .subscribe(data => {
    //     this.router.navigate(['list']);
    //   });
    // stop here if form is invalid
    if (this.addNote.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addNote.value))
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

}
