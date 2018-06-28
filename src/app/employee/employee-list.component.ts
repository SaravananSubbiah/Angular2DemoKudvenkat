import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import { EmployeeService } from './employee.service'
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import {ISubscription} from 'rxjs/Subscription';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent{
    employees: IEmployee[];
    statusMessage: string = "Loading data. Please wait...";
    selectedEmployeeCountRadioButton: string = 'All';
    subscription: ISubscription;
    constructor (private _employeeService: EmployeeService){

    }
    ngOnInit(){
                ///this.employees = _employeeService.getEmployees();
       /// _employeeService.getEmployees().subscribe(data => this.employees = data);
    let nextCall = new Date('14 Sep, 2017 01:36:00');
      this.subscription = this._employeeService.getEmployees()
      //.retry()
      //.retryWhen(err => err.delay(5000))
      .retryWhen(err => {
          return err.scan((retryCount)=>{
              retryCount += 1;
              if (retryCount < 6){
                  this.statusMessage = 'Retrying ...Attempt #' + retryCount;
                  return retryCount;
              } else{
                  throw(err);
              }
          ///},0).delay(nextCall);
        },0).delay(5000);
      })
      .subscribe(
        emp => {
            this.employees = emp;
            if (this.employees.length==0){
                this.statusMessage="There is no employees";
            }
        },
        error => this.statusMessage = "Problem with the Service, try after some time",
        () => console.log('Completed!')
      );
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    getTotalEmployeesCount(){
        if (!this.employees)
        {return}
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(){
        if (!this.employees)
        {return}
        return this.employees.filter(e=>e.gender === 'Male').length;
    }
    getTotalFemaleEmployeesCount(){
        if (!this.employees)
        {return}
        return this.employees.filter(e=>e.gender === 'Female').length;
    }
    onCancelButtonClick(): void {
        this.statusMessage = "Cancelled Request";
        this.subscription.unsubscribe();

    }
}