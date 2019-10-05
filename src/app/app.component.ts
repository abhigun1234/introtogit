import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demobasicsangular';
  toggle=false;
  name="abhishek"
  fruits=['banana','apple','orange','pinapple']
 constructor(private route:Router)
 {

 }
  nevigate()
  {
    alert('hi')
    this.route.navigate('/welcome')
  }
}
