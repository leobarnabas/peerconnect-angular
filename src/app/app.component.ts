import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  
   constructor(http: Http) {
    var obj=http.get('http://localhost:8080/users')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json()).subscribe(data => {
        console.log(data.text);
      });
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component

      console.log('data:',obj);
  }
}
