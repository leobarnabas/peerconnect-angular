import {Component, Input, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  headers = new Headers({'Content-Type': 'application/json'});
  myForm: any;

  constructor(private formBuilder: FormBuilder, private http: Http) {
    this.myForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'gpa': ['', Validators.required],
      'gender': ['', Validators.required],
      'school': ['', Validators.required],
      'yog': ['', Validators.required],
      'aoi': ['', Validators.required],
      'spec': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ''
    });
    console.log(this.myForm);
  }



  ngOnInit() {
  }

  /*saveUser() {
    if (this.myForm.dirty && this.myForm.valid) {
      alert(`firstName: ${this.myForm.value.firstName}
               lastName: ${this.myForm.value.lastName}
               gender: ${this.myForm.value.gender}
               gpa: ${this.myForm.value.gpa}
               school: ${this.myForm.value.school}
               yog ${this.myForm.value.yog}
               aoi: ${this.myForm.value.aoi}
               spec: ${this.myForm.value.spec}
               email: ${this.myForm.value.email}
               password: ${this.myForm.value.password}`);
    }
  }*/

  onSubmit(e) {
    e.preventDefault();

    const user = {
      'firstName': e.target.elements[0].value,
      'lastName': e.target.elements[1].value,
      'dateOfBirth': null,
      'id': e.target.elements[9].value,
      'password': e.target.elements[10].value,
      'gender': e.target.elements[7].value,
      'area': e.target.elements[5].value,
      'field': e.target.elements[6].value,
      'meetingPreference': e.target.elements[8].value,
      'isMentor': null
    };
    this.http.post('http://localhost:8080/users' , JSON.stringify(user), {headers: this.headers}).subscribe(data => {

      console.log('data after save:', data);

    });
  }
}
