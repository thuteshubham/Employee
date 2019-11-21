import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { AuthGuard } from "./authguard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "employee-list",
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee-detail/:id",
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "employee-list", pathMatch: "full" },
  { path: "*", component: LoginComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
