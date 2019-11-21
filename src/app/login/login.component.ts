import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { Cookie } from "ng2-cookies";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public appService: AppService,
    private toastr: ToastrService,
    public _route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {}

  public signinFunction: any = () => {
    if (!this.email) {
      this.toastr.warning("Enter Email");
      return;
    } else if (!this.password) {
      this.toastr.warning("Enter password");
      return;
    }

    var data = {
      email: this.email,
      password: this.password
    };

    Cookie.set("authtoken", this.email);
    this.router.navigate(["employee-list"]);
  };
}
