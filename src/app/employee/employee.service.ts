import {Injectable} from '@angular/core';
import {IEmployee} from './employee';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class EmployeeService {
   
    constructor(private http: Http) {
  }
    
/*    getEmployees(): IEmployee[]{
        return[
            { code:'emp101', name:'Tom',gender:'Male', annualSalary:4500,dateOfBirth:'6/25/2017' },
            { code:'emp102', name:'Tom',gender:'Female', annualSalary:5500,dateOfBirth:'6/25/2017' },
            { code:'emp103', name:'Tom',gender:'Male', annualSalary:7500,dateOfBirth:'6/25/2017' },
            { code:'emp104', name:'Tom',gender:'Female', annualSalary:5500,dateOfBirth:'6/25/2017' },
            { code:'emp105', name:'Tom',gender:'Male', annualSalary:5500,dateOfBirth:'6/25/2017' },
            { code:'emp106', name:'Tom',gender:'Male', annualSalary:5500,dateOfBirth:'6/25/2017' },
            { code:'emp107', name:'Tom',gender:'Female', annualSalary:13500,dateOfBirth:'6/25/2017' }
        ]
    }*/

   
    
    getEmployees(): Observable<IEmployee[]> {

        return this.http.get('/src/app/employee/employee.json')
             .map(response => response.json())
             .catch(this.handleError);

             
    }


handleError(error: Response){
    console.log('error on webservice');
    return Observable.throw(error); 
}

      
}

interface UserResponse {
    login: string;
    type: string;
    organizations_url: string;
  }