import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
import { Employee } from "../Employees";
@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private appService: AppService) {}
  empId: string;
  employee: Employee;
  ngOnInit() {
    this.empId = this.route.snapshot.paramMap.get("id");
    this.getEmployee();
  }

  getEmployee() {
    this.appService.getEmployeeById(this.empId).subscribe(employee => {
      this.employee = employee;
    });
  }
}
