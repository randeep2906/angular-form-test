import {
    NgModule,
    Component,
    Pipe,
    OnInit
} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';


class ModelFormComponent implements OnInit {
  langs: string[] = [
    'English'
  ];
  myform: FormGroup;
  lname: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.lname = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      lname: this.lname
    });
  }
  
  onSubmit() {
    if (this.myform.valid) {
      console.log("Replace this line with the router line!");
      this.myform.reset();
    }
  }
}
