import { Component } from '@angular/core';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mono';
  constructor() {
    console.log('hii mono');

  }

  

uploadFileToServer(event) {
  var file: File = event.srcElement.files[0]; // event.target.files[0]
  let base64;
  var reader: FileReader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onloadend = (e) => {
  base64 = btoa(reader.result.toString()); //base 64 string
  };
  reader.onerror = function () {
  console.log("there are some problems");
  };
  this.bindImage(base64);
  }
  
  bindImage(we) {
  setTimeout(() => {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 100; // target width
  canvas.height = 100; // target height
  var image = new Image();
  image.onload = function (e) {
  ctx.drawImage(image,
  0, 0, image.width, image.height,
  0, 0, canvas.width, canvas.height
  );
  // create a new base64 encoding
  var resampledImage = new Image();
  resampledImage.src = canvas.toDataURL();
  document.getElementById("resampled").appendChild(resampledImage);
  };
  image.src = `data:image/png;base64,${we}`;
  }, 1000);
  }
  
  
  handleFileSelect(evt){
  var files = evt.target.files;
  var file = files[0];
  if (files && file) {
  var reader = new FileReader();
  reader.onload =this._handleReaderLoaded.bind(this)
  reader.readAsBinaryString(file);
  }
  }
  _handleReaderLoaded(readerEvt) {
  var base64textString = btoa(readerEvt.target.result);
  }
  
  uploadFileToServer2(event) {
  const preview = <HTMLImageElement>(document.querySelector("img"));
  var file: File = event.srcElement.files[0];
  var reader: FileReader = new FileReader();
  reader.onloadend = (e) => {
  preview.src = reader.result.toString();
  };
  reader.onerror = function () {
  console.log("there are some problems");
  };
  reader.readAsDataURL(file);
  }
}
