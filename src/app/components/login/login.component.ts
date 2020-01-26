import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@pseu+.edu";
  users = [
    {
      "email": "deema@pseu.edu",
      "pass": "qqQ1*qq"
    },
    {
      "email": "lama@pseu.edu",
      "pass": "2*rRrr"
    },
    {
      "email": "ahmad@pseu.edu",
      "pass": "eeeE$54ee"
    }
  ]
  userExist = false;
  submitted = false;
  form : FormGroup;
  constructor(private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=.*?[#?!@$%^&*-])/)]),
  });
  }

 

  
  get f() { return this.form.controls; }

  onSubmit(userdata) {

    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else { 
      for(let user of this.users) {
        if(userdata.password == user.pass) {
          this.router.navigate(['/homepage']);
          this.userExist = true;
          break;
        }
      }
      if(!this.userExist){
        alert("wrong password or email address");
      }
         
    }
  }
 
}
