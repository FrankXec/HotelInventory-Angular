import { Component, AfterContentInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employeContent !: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeContent.employeName = 'Frank';
  }
}
