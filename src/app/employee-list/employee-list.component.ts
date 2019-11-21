import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";

import { Employee } from "../Employees";
import { Employees } from "../mock-EMPLOYEE";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Cookie } from "ng2-cookies";

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = {
  asc: "desc",
  desc: "",
  "": "asc"
};
export const compare = (v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: "th[sortable]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()"
  }
})
export class NgbdSortableHeader {
  @Input() sortable: string;
  @Input() direction: SortDirection = "";
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  employees = Employees;
  selectedEmployee: Employee;

  constructor(private appService: AppService, private router: Router) {}
  ngOnInit() {
    this.getAllEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  getAllEmployees(): void {
    this.appService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  viewEmployeeDetails(empId: any): void {
    this.router.navigate(["employee-detail", empId]);
  }

  signout() {
    Cookie.delete("authtoken");
    this.router.navigate(["login"]);
  }
}
