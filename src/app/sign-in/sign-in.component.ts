import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.router.navigate(['search-mentor']);
    console.log(userName, password);
    /*return false;*/
  }
}
