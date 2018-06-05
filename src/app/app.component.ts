import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private $http: HttpClient) {
    // this.http.get("/products").map((res) => res.json());
    this.$http.get("/article").subscribe(data => {
      console.log(data);
    });
  }
}
