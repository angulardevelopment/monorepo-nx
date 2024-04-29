import { Component } from '@angular/core';
import html2canvas from "html2canvas";

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor() {
    console.log('myapp');

  }


  async screeShot() {
    try {
      let x = await html2canvas(document.querySelector(".back"));
      window.open();
      // "<img src=" + x["toDataURL"]() + "" />"
    } catch (err) {
      console.log("Oh boy, an error", err);
    }
  }

  screeShot2() {
    html2canvas(document.querySelector(".back")).then(canvas => {
      // It open an image in new tab.
      window.open().document.write(`<img src=" + ${canvas.toDataURL()} + "" />`);
      // It will add the image in the current/active document.
      document.body.appendChild(canvas)
    })
  }
}
