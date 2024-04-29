import { Component } from '@angular/core';
import * as fingerprint2 from 'fingerprintjs2';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  ngOnInit(){
    this.demo();
  }

  demo(){
    setTimeout(function () {
      fingerprint2.get(function (data) {
      console.log(data);
      })
      }, 500)
  }
}
