import { Component } from '@angular/core';

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

  change(val:any)
  { alert(val)
   this.toggle=true 
  }
}
