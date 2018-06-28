import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeCountComponent } from './employee/employee-count.component';
import {EmployeeGenderPipe} from './employee/employee-gender.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    EmployeeGenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
