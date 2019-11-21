import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
