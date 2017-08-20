import {Component, OnInit} from "@angular/core";
import {Headers, Http} from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();

    var user = {
      "firstName": e.target.elements[0].value,
      "lastName": e.target.elements[1].value,
      "dateOfBirth": null,
      "id": e.target.elements[9].value,
      "password": e.target.elements[10].value,
      "gender": e.target.elements[7].value,
      "area": e.target.elements[5].value,
      "field": e.target.elements[6].value,
      "meetingPreference": e.target.elements[8].value,
      "isMentor": null
    };
    this.http.post('/users' , JSON.stringify(user), {headers: this.headers}).subscribe(data => {

      console.log('data after save:', data);

    });
  }
}
