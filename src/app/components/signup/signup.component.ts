import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user: User;
  constructor() {
    this.user = {
      name: "",
      email: "",
      password: {
        pwd: "",
        confirmPwd: ""
      }
    };
  }

  ngOnInit() {}

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log(value);
    console.log(valid);
  }
}

export interface User {
  name: string;
  email: string;
  password: {
    pwd: string;
    confirmPwd: string;
  }
}
