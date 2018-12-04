import { Component, OnInit } from '@angular/core';
import {MetadataService} from '../services/fnol/metadata.service';
import {
  NgModule,
  Pipe
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MainContact } from '../models/claim';
import { Claim } from '../models/claim';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  res = [];
  form: FormGroup;
  name: FormControl;
  nameL: FormControl;
  lname: FormControl;
  role: FormControl;
  isValidFormSubmitted = false;
  maincontact = new MainContact();
  claim = new Claim();
  constructor(private metaData: MetadataService, private fb: FormBuilder, private router: Router,private formBuilder: FormBuilder) {
    this.res = metaData.getAllCodesForTypelistFilter('PersonRelationType', 'RELATIONTOINSURED_FILTER_WC_EXT');
    console.log(this.res);
  }

  ngOnInit() {
    const panel = document.getElementById('panel_someoneelse');
    panel.style.display = 'none';
    this.createFormControls();
    this.createForm();
    this.lname = this.formBuilder.control('lname', Validators.required);
    this.form = this.formBuilder.group({
      lname: this.lname,
    });
  }
  createFormControls() {
    this.lname = new FormControl('', [Validators.required, Validators.minLength(1)]);
  }

  createForm() {
    this.form = new FormGroup({
      lname: this.lname, });
  }

  iWill = function (event) {
    const panel = document.getElementById('panel_someoneelse');
    console.log("hi");
    panel.style.display = 'none';

  }
  someOneElse = function (event) {
    const panel = document.getElementById('panel_someoneelse');
    panel.style.display = 'block';
  }
  onSubmit = function () {
    this.router.navigateByUrl('/injuredemp');
  };
}

