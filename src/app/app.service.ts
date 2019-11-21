import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Employees } from "./mock-EMPLOYEE";
import { Employee } from "./Employees";

@Injectable({
  providedIn: "root"
})
export class AppService {
  employee: any;
  getAllEmployees(): Observable<any> {
    return of(Employees);
  }

  getEmployeeById(id): Observable<Employee> {
    let emp = Employees.find(emp => emp.id === id);
    return of(emp);
  }
}
