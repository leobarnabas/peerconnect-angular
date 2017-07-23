import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})
export class SearchMentorComponent implements OnInit {
  mentors = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    var area = e.target.elements[0].value;
    this.http.get('/users/search/findByAreaIn?area=' + area).subscribe(data => {
      let body = data.json()['_embedded'];
      console.log('body:', body);
      this.mentors = body.users;
      console.log('mentors', this.mentors);
    });
  }
}
