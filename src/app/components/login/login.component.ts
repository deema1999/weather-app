import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@pseu+.edu";
  
  submitted = false;
  form : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  });
  }

 

  
  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
  }
 
}
