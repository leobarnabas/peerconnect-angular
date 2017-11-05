import {Component, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private router: Router, private http: Http) {
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;



    this.http.post('http://localhost:8080/users' ,
      {params: {userId: userName, password: password}}, {headers: this.headers}, ).subscribe(data => {
      this.router.navigate(['search-display']);
      console.log('data after login:', data);

    });


    /*return false;*/
  }
}
