import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('tempButton') buttontemp: any;
  title = 'my-app';

  employeeForm: FormGroup;

  educationOptions = [
    '10th Pass',
    '12th Pass',
    'Diploma',
    'UG',
    'PG',
    'PHD'
  ];

  constructor(private fb: FormBuilder) {
    this.employeeForm = fb.group({});
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
  }

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }
}
